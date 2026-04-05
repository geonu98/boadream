import { getPublicAssetUrl } from "../../../shared/lib/supabase/storage";

export function getReviewImageUrl(photoPath) {
  if (!photoPath) {
    return "";
  }

  return getPublicAssetUrl(photoPath);
}

export function getReviewInitial(name) {
  return (name || "후기").trim().charAt(0) || "후";
}

export function toReviewFormValues(review) {
  return {
    author_name: review?.author_name ?? "",
    author_label: review?.author_label ?? "",
    headline: review?.headline ?? "",
    body: review?.body ?? "",
    display_order: review?.display_order ?? 0,
    is_published: review?.is_published ?? true,
    show_on_home: review?.show_on_home ?? false,
  };
}

export function buildReviewPayload(values, options = {}) {
  return {
    author_name: values.author_name.trim(),
    author_label: values.author_label.trim(),
    headline: values.headline.trim(),
    body: values.body.trim(),
    photo_path: options.photoPath ?? options.existing?.photo_path ?? null,
    display_order: Number(values.display_order) || 0,
    is_published: Boolean(values.is_published),
    show_on_home: Boolean(values.show_on_home),
  };
}
