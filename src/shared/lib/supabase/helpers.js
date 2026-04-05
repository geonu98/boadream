export function unwrapResult(result, fallbackMessage = "Supabase request failed.") {
  if (result.error) {
    throw new Error(result.error.message || fallbackMessage);
  }

  return result.data;
}

export function singleResult(result, fallbackMessage) {
  return unwrapResult(result, fallbackMessage);
}
