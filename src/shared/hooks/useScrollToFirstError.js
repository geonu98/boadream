import { useEffect } from "react";

export function useScrollToFirstError(formRef, errors, submitCount) {
  useEffect(() => {
    if (!submitCount || !Object.keys(errors).length || !formRef.current) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      const firstInvalidField = formRef.current?.querySelector('[aria-invalid="true"]');

      if (!(firstInvalidField instanceof HTMLElement)) {
        return;
      }

      firstInvalidField.focus({ preventScroll: true });
      firstInvalidField.scrollIntoView({ behavior: "smooth", block: "center" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [errors, formRef, submitCount]);
}
