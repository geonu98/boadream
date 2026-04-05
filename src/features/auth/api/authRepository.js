import { requireSupabase } from "../../../shared/lib/supabase/client";
import { singleResult, unwrapResult } from "../../../shared/lib/supabase/helpers";

export async function signInAdmin({ email, password }) {
  const client = requireSupabase();

  return singleResult(
    await client.auth.signInWithPassword({ email, password }),
    "관리자 로그인에 실패했습니다.",
  );
}

export async function signOutAdmin() {
  const client = requireSupabase();
  unwrapResult(await client.auth.signOut(), "로그아웃에 실패했습니다.");
}

export async function getCurrentSession() {
  const client = requireSupabase();

  return singleResult(await client.auth.getSession(), "세션을 불러오지 못했습니다.");
}

export async function getCurrentAdminProfile() {
  const client = requireSupabase();
  const sessionData = await getCurrentSession();
  const userId = sessionData.session?.user?.id;

  if (!userId) {
    return null;
  }

  const result = await client
    .from("admin_profiles")
    .select("*")
    .eq("id", userId)
    .maybeSingle();

  return singleResult(result, "관리자 정보를 불러오지 못했습니다.");
}
