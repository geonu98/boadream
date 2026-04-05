create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

create table if not exists public.admin_profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text not null unique,
  display_name text not null,
  role text not null default 'admin' check (role in ('admin', 'editor')),
  is_active boolean not null default true,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.notices (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  category text not null,
  title text not null,
  summary text not null,
  content text not null,
  thumbnail_path text,
  is_published boolean not null default true,
  published_at timestamptz,
  created_by uuid references public.admin_profiles (id),
  updated_by uuid references public.admin_profiles (id),
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.faqs (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  answer text not null,
  display_order integer not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  author_name text not null,
  author_label text,
  headline text not null,
  body text not null,
  photo_path text,
  display_order integer not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.contact_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  service_type text not null,
  care_grade text not null,
  message text not null,
  status text not null default 'received' check (status in ('received', 'completed')),
  admin_memo text,
  consulted_at timestamptz,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create index if not exists notices_published_idx
  on public.notices (is_published, published_at desc, created_at desc);

create index if not exists faqs_display_order_idx
  on public.faqs (is_published, display_order asc);

create index if not exists reviews_display_order_idx
  on public.reviews (is_published, display_order asc);

create index if not exists contact_inquiries_status_idx
  on public.contact_inquiries (status, created_at desc);

drop trigger if exists trg_admin_profiles_updated_at on public.admin_profiles;
create trigger trg_admin_profiles_updated_at
before update on public.admin_profiles
for each row execute function public.set_updated_at();

drop trigger if exists trg_notices_updated_at on public.notices;
create trigger trg_notices_updated_at
before update on public.notices
for each row execute function public.set_updated_at();

drop trigger if exists trg_faqs_updated_at on public.faqs;
create trigger trg_faqs_updated_at
before update on public.faqs
for each row execute function public.set_updated_at();

drop trigger if exists trg_reviews_updated_at on public.reviews;
create trigger trg_reviews_updated_at
before update on public.reviews
for each row execute function public.set_updated_at();

drop trigger if exists trg_contact_inquiries_updated_at on public.contact_inquiries;
create trigger trg_contact_inquiries_updated_at
before update on public.contact_inquiries
for each row execute function public.set_updated_at();

create or replace function public.is_active_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.admin_profiles
    where id = auth.uid()
      and is_active = true
  );
$$;

revoke all on function public.is_active_admin() from public;
grant execute on function public.is_active_admin() to anon, authenticated;

alter table public.admin_profiles enable row level security;
alter table public.notices enable row level security;
alter table public.faqs enable row level security;
alter table public.reviews enable row level security;
alter table public.contact_inquiries enable row level security;

drop policy if exists "Admins can read their profile" on public.admin_profiles;
create policy "Admins can read their profile"
on public.admin_profiles
for select
to authenticated
using (id = auth.uid());

drop policy if exists "Public can read published notices" on public.notices;
create policy "Public can read published notices"
on public.notices
for select
to anon, authenticated
using (is_published = true or public.is_active_admin());

drop policy if exists "Admins manage notices" on public.notices;
create policy "Admins manage notices"
on public.notices
for all
to authenticated
using (public.is_active_admin())
with check (public.is_active_admin());

drop policy if exists "Public can read published faqs" on public.faqs;
create policy "Public can read published faqs"
on public.faqs
for select
to anon, authenticated
using (is_published = true or public.is_active_admin());

drop policy if exists "Admins manage faqs" on public.faqs;
create policy "Admins manage faqs"
on public.faqs
for all
to authenticated
using (public.is_active_admin())
with check (public.is_active_admin());

drop policy if exists "Public can read published reviews" on public.reviews;
create policy "Public can read published reviews"
on public.reviews
for select
to anon, authenticated
using (is_published = true or public.is_active_admin());

drop policy if exists "Admins manage reviews" on public.reviews;
create policy "Admins manage reviews"
on public.reviews
for all
to authenticated
using (public.is_active_admin())
with check (public.is_active_admin());

drop policy if exists "Anyone can create inquiries" on public.contact_inquiries;
create policy "Anyone can create inquiries"
on public.contact_inquiries
for insert
to anon, authenticated
with check (true);

drop policy if exists "Admins can read inquiries" on public.contact_inquiries;
create policy "Admins can read inquiries"
on public.contact_inquiries
for select
to authenticated
using (public.is_active_admin());

drop policy if exists "Admins can update inquiries" on public.contact_inquiries;
create policy "Admins can update inquiries"
on public.contact_inquiries
for update
to authenticated
using (public.is_active_admin())
with check (public.is_active_admin());

insert into storage.buckets (id, name, public)
values ('site-media', 'site-media', true)
on conflict (id) do nothing;

drop policy if exists "Public can view site media" on storage.objects;
create policy "Public can view site media"
on storage.objects
for select
to public
using (bucket_id = 'site-media');

drop policy if exists "Admins can upload site media" on storage.objects;
create policy "Admins can upload site media"
on storage.objects
for insert
to authenticated
with check (
  bucket_id = 'site-media'
  and public.is_active_admin()
);

drop policy if exists "Admins can update site media" on storage.objects;
create policy "Admins can update site media"
on storage.objects
for update
to authenticated
using (
  bucket_id = 'site-media'
  and public.is_active_admin()
)
with check (
  bucket_id = 'site-media'
  and public.is_active_admin()
);

drop policy if exists "Admins can delete site media" on storage.objects;
create policy "Admins can delete site media"
on storage.objects
for delete
to authenticated
using (
  bucket_id = 'site-media'
  and public.is_active_admin()
);
