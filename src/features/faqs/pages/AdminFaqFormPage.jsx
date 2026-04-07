import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/common/Button";
import { useScrollToFirstError } from "../../../shared/hooks/useScrollToFirstError";
import { faqService } from "../api/faqService";
import { faqSchema } from "../validation/faqSchema";

const initialValues = {
  question: "",
  answer: "",
  display_order: 0,
  is_published: true,
  show_on_home: false,
};

export default function AdminFaqFormPage() {
  const { faqId } = useParams();
  const isEditMode = Boolean(faqId);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const formRef = useRef(null);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isDirty, submitCount },
  } = useForm({
    resolver: zodResolver(faqSchema),
    defaultValues: initialValues,
  });

  useScrollToFirstError(formRef, errors, submitCount);

  const faqQuery = useQuery({
    queryKey: ["admin-faq", faqId],
    queryFn: () => faqService.getFaqById(faqId),
    enabled: isEditMode,
  });

  useEffect(() => {
    if (faqQuery.data) {
      reset({
        question: faqQuery.data.question ?? "",
        answer: faqQuery.data.answer ?? "",
        display_order: faqQuery.data.display_order ?? 0,
        is_published: faqQuery.data.is_published ?? true,
        show_on_home: faqQuery.data.show_on_home ?? false,
      });
    }
  }, [faqQuery.data, reset]);

  const saveMutation = useMutation({
    mutationFn: async (values) => {
      const allFaqs = await faqService.listAdminFaqs();
      const featuredCount = allFaqs.filter(
        (faq) => faq.show_on_home && (!isEditMode || faq.id !== faqId),
      ).length;

      if (values.show_on_home && featuredCount >= 4 && !(faqQuery.data?.show_on_home ?? false)) {
        throw new Error("홈 상위노출 FAQ는 최대 4개까지만 선택할 수 있습니다.");
      }

      const payload = {
        question: values.question.trim(),
        answer: values.answer.trim(),
        display_order: Number(values.display_order) || 0,
        is_published: Boolean(values.is_published),
        show_on_home: Boolean(values.show_on_home),
      };

      if (isEditMode) {
        return faqService.updateFaq(faqId, payload);
      }

      return faqService.createFaq(payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-faqs"] });
      queryClient.invalidateQueries({ queryKey: ["public-faqs"] });
      queryClient.invalidateQueries({ queryKey: ["home-faqs"] });
      navigate("/admin/faqs", { replace: true });
    },
  });

  const questionValue = watch("question") ?? "";
  const answerValue = watch("answer") ?? "";
  const isPublishedValue = watch("is_published");
  const showOnHomeValue = watch("show_on_home");

  const onSubmit = handleSubmit((values) => {
    saveMutation.mutate(values);
  });

  return (
    <div className="admin-page admin-form-page">
      <div className="admin-page-header">
        <div>
          <p className="admin-page-eyebrow">FAQ Editor</p>
          <h2>{isEditMode ? "FAQ 수정" : "FAQ 등록"}</h2>
          <p className="admin-page-description">질문, 답변, 노출 순서와 홈 상위노출 여부를 설정하세요.</p>
        </div>
        <div className="admin-page-header-actions">
          <Button href="/admin/faqs" variant="outline" size="small">
            목록으로
          </Button>
        </div>
      </div>

      {isEditMode && faqQuery.isLoading ? <p className="admin-page-status">FAQ 정보를 불러오는 중입니다.</p> : null}
      {isEditMode && faqQuery.isError ? (
        <p className="admin-page-status is-error">
          {faqQuery.error instanceof Error ? faqQuery.error.message : "FAQ 정보를 불러오지 못했습니다."}
        </p>
      ) : null}

      {(!isEditMode || (!faqQuery.isLoading && !faqQuery.isError)) ? (
        <form className="admin-notice-form" onSubmit={onSubmit} ref={formRef} noValidate>
          <div className={`admin-form-callout${isDirty ? " is-dirty" : ""}`}>
            <div>
              <strong>{isEditMode ? "기존 FAQ를 수정 중입니다." : "새 FAQ를 작성 중입니다."}</strong>
              <p>답변은 줄바꿈 그대로 노출됩니다. 홈 상위노출을 켜면 메인 FAQ에 최대 4개까지 반영됩니다.</p>
            </div>
            <div className="admin-form-callout-badges">
              <span className={`admin-form-callout-badge${isDirty ? " is-dirty" : " is-idle"}`}>
                {isDirty ? "변경사항 있음" : isEditMode ? "변경 없음" : "작성 전"}
              </span>
              <span className={`admin-form-callout-badge${isPublishedValue ? " is-published" : " is-draft"}`}>
                {isPublishedValue ? "공개" : "비공개"}
              </span>
              <span className={`admin-form-callout-badge${showOnHomeValue ? " is-featured" : " is-idle"}`}>
                {showOnHomeValue ? "홈 상위노출" : "일반 노출"}
              </span>
            </div>
          </div>

          <div className="admin-form-grid cols-2">
            <label className={`admin-form-field${errors.display_order ? " has-error" : ""}`}>
              <span>노출 순서</span>
              <input
                type="number"
                min="0"
                placeholder="0"
                aria-invalid={Boolean(errors.display_order)}
                {...register("display_order")}
              />
              <small className="admin-form-help">숫자가 낮을수록 위에 배치됩니다.</small>
              {errors.display_order ? <small className="admin-auth-error">{errors.display_order.message}</small> : null}
            </label>

            <div className="admin-form-field admin-checkbox-field">
              <span>공개 여부</span>
              <label className="admin-checkbox-control">
                <input type="checkbox" {...register("is_published")} />
                <strong>즉시 공개</strong>
              </label>
              <small className="admin-form-help">비공개로 저장하면 운영 확인 후 나중에 공개할 수 있습니다.</small>
            </div>

            <div className="admin-form-field admin-checkbox-field">
              <span>홈 상위노출</span>
              <label className="admin-checkbox-control">
                <input type="checkbox" {...register("show_on_home")} />
                <strong>메인 FAQ에 노출</strong>
              </label>
              <small className="admin-form-help">홈 화면에는 상위노출 FAQ만 최대 4개까지 보여집니다.</small>
            </div>
          </div>

          <label className={`admin-form-field${errors.question ? " has-error" : ""}`}>
            <span>질문</span>
            <input
              type="text"
              placeholder="질문을 입력해주세요"
              maxLength={200}
              aria-invalid={Boolean(errors.question)}
              {...register("question")}
            />
            <div className="admin-form-meta">
              <small className="admin-form-help">사용자가 바로 훑어보는 문장이라 간결하게 적는 편이 좋습니다.</small>
              <small className="admin-form-counter">{questionValue.length}/200</small>
            </div>
            {errors.question ? <small className="admin-auth-error">{errors.question.message}</small> : null}
          </label>

          <label className={`admin-form-field${errors.answer ? " has-error" : ""}`}>
            <span>답변</span>
            <textarea
              rows="10"
              placeholder="답변을 입력해주세요"
              maxLength={5000}
              aria-invalid={Boolean(errors.answer)}
              {...register("answer")}
            />
            <div className="admin-form-meta">
              <small className="admin-form-help">핵심 안내를 먼저 적고, 필요한 절차나 준비물을 뒤에 이어 적으면 읽기 쉽습니다.</small>
              <small className="admin-form-counter">{answerValue.length}/5000</small>
            </div>
            {errors.answer ? <small className="admin-auth-error">{errors.answer.message}</small> : null}
          </label>

          {saveMutation.isError ? (
            <p className="admin-page-status is-error">
              {saveMutation.error instanceof Error ? saveMutation.error.message : "FAQ 저장에 실패했습니다."}
            </p>
          ) : null}

          <div className="admin-form-footer">
            <p className="admin-form-actions-note">저장하면 목록으로 돌아갑니다. 공개 상태와 홈 상위노출 여부에 따라 FAQ 페이지와 메인 화면에 반영됩니다.</p>
            <div className="admin-form-actions">
              <Button type="submit" variant="solid" size="small" disabled={saveMutation.isPending}>
                {saveMutation.isPending ? "저장 중..." : isEditMode ? "수정 저장" : "FAQ 등록"}
              </Button>
              <Button href="/admin/faqs" variant="outline" size="small">
                취소
              </Button>
            </div>
          </div>
        </form>
      ) : null}
    </div>
  );
}
