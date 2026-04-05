import { requireSupabase } from "../../../shared/lib/supabase/client";
import { singleResult, unwrapResult } from "../../../shared/lib/supabase/helpers";

export async function listPublishedReviews() {
  const client = requireSupabase();
  const result = await client
    .from("reviews")
    .select("*")
    .eq("is_published", true)
    .order("display_order", { ascending: true })
    .order("created_at", { ascending: false });

  return unwrapResult(result, "후기 목록을 불러오지 못했습니다.");
}

export async function listFeaturedHomeReviews() {
  const client = requireSupabase();
  const result = await client
    .from("reviews")
    .select("*")
    .eq("is_published", true)
    .eq("show_on_home", true)
    .order("display_order", { ascending: true })
    .order("created_at", { ascending: false })
    .limit(4);

  return unwrapResult(result, "홈 후기 목록을 불러오지 못했습니다.");
}

export async function listAdminReviews() {
  const client = requireSupabase();
  const result = await client
    .from("reviews")
    .select("*")
    .order("display_order", { ascending: true })
    .order("created_at", { ascending: false });

  return unwrapResult(result, "관리자 후기 목록을 불러오지 못했습니다.");
}

export async function getReviewById(id) {
  const client = requireSupabase();
  const result = await client
    .from("reviews")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  return singleResult(result, "후기 정보를 불러오지 못했습니다.");
}

export async function createReview(payload) {
  const client = requireSupabase();
  const result = await client.from("reviews").insert(payload).select().single();

  return singleResult(result, "후기 등록에 실패했습니다.");
}

export async function updateReview(id, payload) {
  const client = requireSupabase();
  const result = await client.from("reviews").update(payload).eq("id", id).select().single();

  return singleResult(result, "후기 수정에 실패했습니다.");
}

export async function deleteReview(id) {
  const client = requireSupabase();
  unwrapResult(await client.from("reviews").delete().eq("id", id), "후기 삭제에 실패했습니다.");
}
