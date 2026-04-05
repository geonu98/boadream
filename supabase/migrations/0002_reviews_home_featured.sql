alter table public.reviews
add column if not exists show_on_home boolean not null default false;

create index if not exists reviews_home_featured_idx
  on public.reviews (show_on_home, display_order asc, created_at desc);
