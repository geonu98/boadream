alter table public.faqs
add column if not exists show_on_home boolean not null default false;

create index if not exists faqs_home_featured_idx
  on public.faqs (show_on_home, display_order asc, created_at desc);
