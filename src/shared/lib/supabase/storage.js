import { env } from "../../config/env";
import { requireSupabase } from "./client";

export async function uploadPublicAsset(path, file, options = {}) {
  const client = requireSupabase();
  const result = await client.storage
    .from(env.supabaseStorageBucket)
    .upload(path, file, {
      cacheControl: "3600",
      upsert: options.upsert ?? false,
      contentType: file.type,
    });

  if (result.error) {
    throw new Error(result.error.message || "Failed to upload file.");
  }

  return result.data;
}

export function getPublicAssetUrl(path) {
  const client = requireSupabase();
  const { data } = client.storage.from(env.supabaseStorageBucket).getPublicUrl(path);

  return data.publicUrl;
}
