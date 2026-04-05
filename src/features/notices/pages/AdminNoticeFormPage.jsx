import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/common/Button";
import { useScrollToFirstError } from "../../../shared/hooks/useScrollToFirstError";
import { useAuth } from "../../auth/context/AuthContext";
import { noticeService } from "../api/noticeService";
import { buildNoticePayload, normalizeNoticeSlug, toNoticeFormValues } from "../lib/noticeUtils";
import { noticeSchema } from "../validation/noticeSchema";

const initialValues = {
  category: "공지",
  title: "",
  slug: "",
  summary: "",
  content: "",
  is_published: true,
};

export default function AdminNoticeFormPage() {
  const { noticeId } = useParams();
  const isEditMode = Boolean(noticeId);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const [hasCustomSlug, setHasCustomSlug] = useState(false);
  const formRef = useRef(null);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isDirty, submitCount },
  } = useForm({
    resolver: zodResolver(noticeSchema),
    defaultValues: initialValues,
  });

  useScrollToFirstError(formRef, errors, submitCount);

  const noticeQuery = useQuery({
    queryKey: ["admin-notice", noticeId],
    queryFn: () => noticeService.getNoticeById(noticeId),
    enabled: isEditMode,
  });

  useEffect(() => {
    if (noticeQuery.data) {
      reset(toNoticeFormValues(noticeQuery.data));
      setHasCustomSlug(Boolean(noticeQuery.data.slug));
    }
  }, [noticeQuery.data, reset]);

  const saveMutation = useMutation({
    mutationFn: async (values) => {
      const payload = buildNoticePayload(values, {
        existing: noticeQuery.data,
        userId: user?.id,
      });

      if (isEditMode) {
        return noticeService.updateNotice(noticeId, payload);
      }

      return noticeService.createNotice(payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-notices"] });
      queryClient.invalidateQueries({ queryKey: ["public-notices"] });
      queryClient.invalidateQueries({ queryKey: ["public-notice"] });
      navigate("/admin/notices", { replace: true });
    },
  });

  const titleValue = watch("title") ?? "";
  const slugValue = watch("slug") ?? "";
  const summaryValue = watch("summary") ?? "";
  const contentValue = watch("content") ?? "";
  const isPublishedValue = watch("is_published");

  useEffect(() => {
    if (!hasCustomSlug && titleValue) {
      setValue("slug", normalizeNoticeSlug(titleValue), { shouldValidate: false });
    }
  }, [hasCustomSlug, setValue, titleValue]);

  const onSubmit = handleSubmit((values) => {
    saveMutation.mutate(values);
  });

  return (
    <div className="admin-page admin-form-page">
      <div className="admin-page-header">
        <div>
          <p className="admin-page-eyebrow">Notice Editor</p>
          <h2>{isEditMode ? "공지사항 수정" : "공지사항 등록"}</h2>
          <p className="admin-page-description">공개 여부와 슬러그를 포함해 공지사항 정보를 입력하세요.</p>
        </div>
        <div className="admin-page-header-actions">
          <Button href="/admin/notices" variant="outline" size="small">
            목록으로
          </Button>
        </div>
      </div>

      {isEditMode && noticeQuery.isLoading ? <p className="admin-page-status">공지 정보를 불러오는 중입니다.</p> : null}
      {isEditMode && noticeQuery.isError ? (
        <p className="admin-page-status is-error">
          {noticeQuery.error instanceof Error ? noticeQuery.error.message : "공지 정보를 불러오지 못했습니다."}
        </p>
      ) : null}

      {(!isEditMode || (!noticeQuery.isLoading && !noticeQuery.isError)) ? (
        <form className="admin-notice-form" onSubmit={onSubmit} ref={formRef} noValidate>
          <div className={`admin-form-callout${isDirty ? " is-dirty" : ""}`}>
            <div>
              <strong>{isEditMode ? "기존 공지를 수정 중입니다." : "새 공지를 작성 중입니다."}</strong>
              <p>저장 전까지는 사이트에 반영되지 않으며, 공개 상태로 저장하면 사용자 페이지에 즉시 노출됩니다.</p>
            </div>
            <div className="admin-form-callout-badges">
              <span className={`admin-form-callout-badge${isDirty ? " is-dirty" : " is-idle"}`}>
                {isDirty ? "변경사항 있음" : isEditMode ? "변경 없음" : "작성 전"}
              </span>
              <span className={`admin-form-callout-badge${isPublishedValue ? " is-published" : " is-draft"}`}>
                {isPublishedValue ? "공개" : "비공개"}
              </span>
            </div>
          </div>

          <div className="admin-form-grid cols-2">
            <label className={`admin-form-field${errors.category ? " has-error" : ""}`}>
              <span>카테고리</span>
              <input
                type="text"
                placeholder="공지"
                maxLength={30}
                aria-invalid={Boolean(errors.category)}
                {...register("category")}
              />
              {errors.category ? <small className="admin-auth-error">{errors.category.message}</small> : null}
            </label>

            <div className="admin-form-field admin-checkbox-field">
              <span>공개 여부</span>
              <label className="admin-checkbox-control">
                <input type="checkbox" {...register("is_published")} />
                <strong>즉시 공개</strong>
              </label>
              <small className="admin-form-help">체크를 해제하면 관리자에서만 보이는 임시 저장 상태로 유지됩니다.</small>
            </div>
          </div>

          <label className={`admin-form-field${errors.title ? " has-error" : ""}`}>
            <span>제목</span>
            <input
              type="text"
              placeholder="공지사항 제목을 입력해주세요"
              maxLength={120}
              aria-invalid={Boolean(errors.title)}
              {...register("title")}
            />
            <div className="admin-form-meta">
              <small className="admin-form-help">목록과 상세 상단에 함께 표시됩니다.</small>
              <small className="admin-form-counter">{titleValue.length}/120</small>
            </div>
            {errors.title ? <small className="admin-auth-error">{errors.title.message}</small> : null}
          </label>

          <label className={`admin-form-field${errors.slug ? " has-error" : ""}`}>
            <span>슬러그</span>
            <input
              type="text"
              placeholder="boadream-notice"
              maxLength={120}
              aria-invalid={Boolean(errors.slug)}
              {...register("slug")}
              onChange={(event) => {
                setHasCustomSlug(true);
                setValue("slug", normalizeNoticeSlug(event.target.value), { shouldValidate: true });
              }}
            />
            <div className="admin-form-meta">
              <small className="admin-form-help">
                {hasCustomSlug ? "직접 입력한 URL 경로입니다." : "제목을 기준으로 자동 생성됩니다."}
              </small>
              <small className="admin-form-counter">{slugValue.length}/120</small>
            </div>
            {errors.slug ? <small className="admin-auth-error">{errors.slug.message}</small> : null}
          </label>

          <label className={`admin-form-field${errors.summary ? " has-error" : ""}`}>
            <span>요약</span>
            <textarea
              rows="3"
              placeholder="목록에 노출될 짧은 요약을 입력해주세요"
              maxLength={300}
              aria-invalid={Boolean(errors.summary)}
              {...register("summary")}
            />
            <div className="admin-form-meta">
              <small className="admin-form-help">공지 목록 카드에 먼저 보이는 짧은 소개 문구입니다.</small>
              <small className="admin-form-counter">{summaryValue.length}/300</small>
            </div>
            {errors.summary ? <small className="admin-auth-error">{errors.summary.message}</small> : null}
          </label>

          <label className={`admin-form-field${errors.content ? " has-error" : ""}`}>
            <span>본문</span>
            <textarea
              rows="12"
              placeholder="공지사항 본문을 입력해주세요"
              maxLength={10000}
              aria-invalid={Boolean(errors.content)}
              {...register("content")}
            />
            <div className="admin-form-meta">
              <small className="admin-form-help">줄바꿈을 유지해 상세 페이지에 그대로 표시됩니다.</small>
              <small className="admin-form-counter">{contentValue.length}/10000</small>
            </div>
            {errors.content ? <small className="admin-auth-error">{errors.content.message}</small> : null}
          </label>

          {saveMutation.isError ? (
            <p className="admin-page-status is-error">
              {saveMutation.error instanceof Error ? saveMutation.error.message : "공지 저장에 실패했습니다."}
            </p>
          ) : null}

          <div className="admin-form-footer">
            <p className="admin-form-actions-note">저장하면 목록으로 돌아갑니다. 공개 상태면 사용자 공지사항에 바로 반영됩니다.</p>
            <div className="admin-form-actions">
              <Button type="submit" variant="solid" size="small" disabled={saveMutation.isPending}>
                {saveMutation.isPending ? "저장 중..." : isEditMode ? "수정 저장" : "공지 등록"}
              </Button>
              <Button href="/admin/notices" variant="outline" size="small">
                취소
              </Button>
            </div>
          </div>
        </form>
      ) : null}
    </div>
  );
}
