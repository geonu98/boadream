import { requireSupabase } from "../../../shared/lib/supabase/client";
import { singleResult, unwrapResult } from "../../../shared/lib/supabase/helpers";

export async function listPublishedNotices() {
  const client = requireSupabase();
  const result = await client
    .from("notices")
    .select("*")
    .eq("is_published", true)
    .order("published_at", { ascending: false, nullsFirst: false })
    .order("created_at", { ascending: false });

  return unwrapResult(result, "공지사항 목록을 불러오지 못했습니다.");
}

export async function listAdminNotices() {
  const client = requireSupabase();
  const result = await client
    .from("notices")
    .select("*")
    .order("created_at", { ascending: false });

  return unwrapResult(result, "관리자 공지사항 목록을 불러오지 못했습니다.");
}

export async function getNoticeBySlug(slug) {
  const client = requireSupabase();
  const result = await client
    .from("notices")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  return singleResult(result, "공지사항 상세를 불러오지 못했습니다.");
}

export async function getNoticeById(id) {
  const client = requireSupabase();
  const result = await client
    .from("notices")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  return singleResult(result, "공지사항 정보를 불러오지 못했습니다.");
}

export async function createNotice(payload) {
  const client = requireSupabase();
  const result = await client.from("notices").insert(payload).select().single();

  return singleResult(result, "공지사항 등록에 실패했습니다.");
}

export async function updateNotice(id, payload) {
  const client = requireSupabase();
  const result = await client.from("notices").update(payload).eq("id", id).select().single();

  return singleResult(result, "공지사항 수정에 실패했습니다.");
}

export async function deleteNotice(id) {
  const client = requireSupabase();
  unwrapResult(await client.from("notices").delete().eq("id", id), "공지사항 삭제에 실패했습니다.");
}
