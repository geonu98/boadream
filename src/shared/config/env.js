const readEnv = (key, fallback = "") => {
  const value = import.meta.env[key];

  return typeof value === "string" ? value.trim() : fallback;
};

export const env = {
  supabaseUrl: readEnv("VITE_SUPABASE_URL"),
  supabaseAnonKey: readEnv("VITE_SUPABASE_ANON_KEY"),
  supabaseStorageBucket: readEnv("VITE_SUPABASE_STORAGE_BUCKET", "site-media"),
  kakaoChannelUrl: readEnv("VITE_KAKAO_CHANNEL_URL"),
  kakaoMapJavascriptKey: readEnv("VITE_KAKAO_MAP_JS_KEY") || readEnv("VITE_KAKAO_JAVASCRIPT_KEY"),
};

export const isSupabaseConfigured = Boolean(env.supabaseUrl && env.supabaseAnonKey);
export const hasKakaoChannelUrl = Boolean(env.kakaoChannelUrl);
export const hasKakaoMapJavascriptKey = Boolean(env.kakaoMapJavascriptKey);