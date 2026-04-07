import { requireSupabase } from "../../../shared/lib/supabase/client";
import { singleResult, unwrapResult } from "../../../shared/lib/supabase/helpers";

export async function listPublishedFaqs() {
  const client = requireSupabase();
  const result = await client
    .from("faqs")
    .select("*")
    .eq("is_published", true)
    .order("display_order", { ascending: true })
    .order("created_at", { ascending: false });

  return unwrapResult(result, "FAQ 목록을 불러오지 못했습니다.");
}

export async function listFeaturedHomeFaqs() {
  const client = requireSupabase();
  const result = await client
    .from("faqs")
    .select("*")
    .eq("is_published", true)
    .eq("show_on_home", true)
    .order("display_order", { ascending: true })
    .order("created_at", { ascending: false })
    .limit(4);

  return unwrapResult(result, "홈 FAQ 목록을 불러오지 못했습니다.");
}

export async function listAdminFaqs() {
  const client = requireSupabase();
  const result = await client
    .from("faqs")
    .select("*")
    .order("display_order", { ascending: true })
    .order("created_at", { ascending: false });

  return unwrapResult(result, "관리자 FAQ 목록을 불러오지 못했습니다.");
}

export async function getFaqById(id) {
  const client = requireSupabase();
  const result = await client
    .from("faqs")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  return singleResult(result, "FAQ 정보를 불러오지 못했습니다.");
}

export async function createFaq(payload) {
  const client = requireSupabase();
  const result = await client.from("faqs").insert(payload).select().single();

  return singleResult(result, "FAQ 등록에 실패했습니다.");
}

export async function updateFaq(id, payload) {
  const client = requireSupabase();
  const result = await client.from("faqs").update(payload).eq("id", id).select().single();

  return singleResult(result, "FAQ 수정에 실패했습니다.");
}

export async function deleteFaq(id) {
  const client = requireSupabase();
  unwrapResult(await client.from("faqs").delete().eq("id", id), "FAQ 삭제에 실패했습니다.");
}
