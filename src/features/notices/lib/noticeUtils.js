export function formatNoticeDate(value) {
  if (!value) {
    return "-";
  }

  const date = new Date(value);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
}

export function normalizeNoticeSlug(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9가-힣\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function toNoticeFormValues(notice) {
  return {
    category: notice?.category ?? "공지",
    title: notice?.title ?? "",
    slug: notice?.slug ?? "",
    summary: notice?.summary ?? "",
    content: notice?.content ?? "",
    is_published: notice?.is_published ?? true,
  };
}

export function buildNoticePayload(values, options = {}) {
  const slug = normalizeNoticeSlug(values.slug || values.title) || `notice-${Date.now()}`;
  const isPublished = Boolean(values.is_published);
  const existingPublishedAt = options.existing?.published_at ?? null;

  return {
    category: values.category.trim(),
    title: values.title.trim(),
    slug,
    summary: values.summary.trim(),
    content: values.content.trim(),
    is_published: isPublished,
    published_at: isPublished ? existingPublishedAt || new Date().toISOString() : null,
    created_by: options.existing?.created_by ?? options.userId ?? null,
    updated_by: options.userId ?? null,
  };
}
