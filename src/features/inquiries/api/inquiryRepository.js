import { requireSupabase } from "../../../shared/lib/supabase/client";
import { singleResult, unwrapResult } from "../../../shared/lib/supabase/helpers";

export async function createInquiry(payload) {
  const client = requireSupabase();
  const result = await client.from("contact_inquiries").insert(payload).select().single();

  return singleResult(result, "상담 문의 저장에 실패했습니다.");
}

export async function listInquiries() {
  const client = requireSupabase();
  const result = await client
    .from("contact_inquiries")
    .select("*")
    .order("created_at", { ascending: false });

  return unwrapResult(result, "상담 문의 목록을 불러오지 못했습니다.");
}

export async function updateInquiryStatus(id, status, adminMemo = null) {
  const client = requireSupabase();
  const payload = {
    status,
    admin_memo: adminMemo,
    consulted_at: status === "completed" ? new Date().toISOString() : null,
  };
  const result = await client
    .from("contact_inquiries")
    .update(payload)
    .eq("id", id)
    .select()
    .single();

  return singleResult(result, "문의 상태 변경에 실패했습니다.");
}
