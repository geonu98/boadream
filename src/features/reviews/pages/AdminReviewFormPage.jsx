import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/common/Button";
import { useScrollToFirstError } from "../../../shared/hooks/useScrollToFirstError";
import { uploadPublicAsset } from "../../../shared/lib/supabase/storage";
import { reviewService } from "../api/reviewService";
import { buildReviewPayload, getReviewImageUrl, getReviewInitial, toReviewFormValues } from "../lib/reviewUtils";
import { reviewSchema } from "../validation/reviewSchema";

const initialValues = {
  author_name: "",
  author_label: "",
  headline: "",
  body: "",
  display_order: 0,
  is_published: true,
  show_on_home: false,
};

function sanitizeFileName(value) {
  return value.replace(/[^a-zA-Z0-9.-]/g, "-").toLowerCase();
}

function formatFileSize(size) {
  if (!size) {
    return "0 B";
  }

  if (size < 1024) {
    return `${size} B`;
  }

  if (size < 1024 * 1024) {
    return `${(size / 1024).toFixed(1)} KB`;
  }

  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}

export default function AdminReviewFormPage() {
  const { reviewId } = useParams();
  const isEditMode = Boolean(reviewId);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [removePhoto, setRemovePhoto] = useState(false);
  const formRef = useRef(null);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isDirty, submitCount },
  } = useForm({
    resolver: zodResolver(reviewSchema),
    defaultValues: initialValues,
  });

  useScrollToFirstError(formRef, errors, submitCount);

  const reviewQuery = useQuery({
    queryKey: ["admin-review", reviewId],
    queryFn: () => reviewService.getReviewById(reviewId),
    enabled: isEditMode,
  });

  useEffect(() => {
    if (reviewQuery.data) {
      reset(toReviewFormValues(reviewQuery.data));
    }
  }, [reset, reviewQuery.data]);

  useEffect(() => {
    if (!selectedFile) {
      setPreviewUrl("");
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreviewUrl(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const saveMutation = useMutation({
    mutationFn: async (values) => {
      const allReviews = await reviewService.listAdminReviews();
      const featuredCount = allReviews.filter(
        (review) => review.show_on_home && (!isEditMode || review.id !== reviewId),
      ).length;

      if (values.show_on_home && featuredCount >= 4 && !(reviewQuery.data?.show_on_home ?? false)) {
        throw new Error("홈 상위노출 후기는 최대 4개까지만 선택할 수 있습니다.");
      }

      let nextPhotoPath = removePhoto ? null : reviewQuery.data?.photo_path ?? null;

      if (selectedFile) {
        const path = `reviews/${Date.now()}-${sanitizeFileName(selectedFile.name)}`;
        const uploaded = await uploadPublicAsset(path, selectedFile, { upsert: false });
        nextPhotoPath = uploaded.path;
      }

      const payload = buildReviewPayload(values, {
        existing: reviewQuery.data,
        photoPath: nextPhotoPath,
      });

      if (isEditMode) {
        return reviewService.updateReview(reviewId, payload);
      }

      return reviewService.createReview(payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-reviews"] });
      queryClient.invalidateQueries({ queryKey: ["public-reviews"] });
      queryClient.invalidateQueries({ queryKey: ["home-reviews"] });
      navigate("/admin/reviews", { replace: true });
    },
  });

  const authorNameValue = watch("author_name") ?? "";
  const headlineValue = watch("headline") ?? "";
  const bodyValue = watch("body") ?? "";
  const isPublishedValue = watch("is_published");
  const showOnHomeValue = watch("show_on_home");
  const existingImageUrl = !removePhoto ? getReviewImageUrl(reviewQuery.data?.photo_path) : "";
  const imagePreviewSrc = previewUrl || existingImageUrl;
  const previewInitial = getReviewInitial(authorNameValue || reviewQuery.data?.author_name);

  const onSubmit = handleSubmit((values) => {
    saveMutation.mutate(values);
  });

  return (
    <div className="admin-page admin-form-page">
      <div className="admin-page-header">
        <div>
          <p className="admin-page-eyebrow">Review Editor</p>
          <h2>{isEditMode ? "후기 수정" : "후기 등록"}</h2>
          <p className="admin-page-description">이미지 업로드와 홈 상위노출 여부까지 함께 설정할 수 있습니다.</p>
        </div>
        <div className="admin-page-header-actions">
          <Button href="/admin/reviews" variant="outline" size="small">
            목록으로
          </Button>
        </div>
      </div>

      {isEditMode && reviewQuery.isLoading ? <p className="admin-page-status">후기 정보를 불러오는 중입니다.</p> : null}
      {isEditMode && reviewQuery.isError ? (
        <p className="admin-page-status is-error">
          {reviewQuery.error instanceof Error ? reviewQuery.error.message : "후기 정보를 불러오지 못했습니다."}
        </p>
      ) : null}

      {(!isEditMode || (!reviewQuery.isLoading && !reviewQuery.isError)) ? (
        <form className="admin-notice-form" onSubmit={onSubmit} ref={formRef} noValidate>
          <div className={`admin-form-callout${isDirty ? " is-dirty" : ""}`}>
            <div>
              <strong>{isEditMode ? "기존 후기를 수정 중입니다." : "새 후기를 작성 중입니다."}</strong>
              <p>이미지는 저장 시 업로드되며, 공개 상태면 후기 페이지에 바로 반영됩니다. 홈 상위노출은 최대 4개까지 운영할 수 있습니다.</p>
            </div>
            <div className="admin-form-callout-badges">
              <span className={`admin-form-callout-badge${isDirty ? " is-dirty" : " is-idle"}`}>
                {isDirty ? "변경사항 있음" : isEditMode ? "변경 없음" : "작성 전"}
              </span>
              <span className={`admin-form-callout-badge${isPublishedValue ? " is-published" : " is-draft"}`}>
                {isPublishedValue ? "공개" : "비공개"}
              </span>
              <span className={`admin-form-callout-badge${showOnHomeValue ? " is-featured" : " is-idle"}`}>
                {showOnHomeValue ? "홈 노출" : "홈 미노출"}
              </span>
            </div>
          </div>

          <div className="admin-review-upload-block">
            <div className="admin-review-upload-preview" aria-hidden="true">
              {imagePreviewSrc ? <img src={imagePreviewSrc} alt="" /> : <span>{previewInitial}</span>}
            </div>

            <div className="admin-review-upload-controls">
              <div className="admin-review-upload-summary">
                <span className={`admin-review-preview-badge${selectedFile ? " is-ready" : ""}`}>
                  {selectedFile ? "새 이미지 준비됨" : imagePreviewSrc ? "현재 이미지" : "이미지 없음"}
                </span>
                <p>후기 카드와 홈 노출 카드에서 같은 이미지를 사용합니다.</p>
                {selectedFile ? (
                  <div className="admin-review-selected-file">
                    <strong>{selectedFile.name}</strong>
                    <span>{formatFileSize(selectedFile.size)}</span>
                  </div>
                ) : null}
              </div>

              <label className="admin-form-field">
                <span>후기 이미지</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => {
                    const file = event.target.files?.[0] ?? null;
                    setSelectedFile(file);
                    if (file) {
                      setRemovePhoto(false);
                    }
                  }}
                />
                <small className="admin-form-help">JPG, PNG 등 이미지 1장을 업로드할 수 있습니다.</small>
              </label>

              {(reviewQuery.data?.photo_path || selectedFile) ? (
                <label className="admin-checkbox-control admin-review-remove-check">
                  <input
                    type="checkbox"
                    checked={removePhoto}
                    onChange={(event) => setRemovePhoto(event.target.checked)}
                  />
                  <strong>저장 시 기존 이미지 제거</strong>
                </label>
              ) : null}
            </div>
          </div>

          <div className="admin-form-grid cols-2">
            <label className={`admin-form-field${errors.author_name ? " has-error" : ""}`}>
              <span>작성자명</span>
              <input
                type="text"
                placeholder="김OO 보호자"
                maxLength={50}
                aria-invalid={Boolean(errors.author_name)}
                {...register("author_name")}
              />
              {errors.author_name ? <small className="admin-auth-error">{errors.author_name.message}</small> : null}
            </label>

            <label className={`admin-form-field${errors.author_label ? " has-error" : ""}`}>
              <span>보조 라벨</span>
              <input
                type="text"
                placeholder="방문요양 이용"
                maxLength={50}
                aria-invalid={Boolean(errors.author_label)}
                {...register("author_label")}
              />
              <small className="admin-form-help">서비스 유형이나 관계를 짧게 덧붙일 때 사용합니다.</small>
              {errors.author_label ? <small className="admin-auth-error">{errors.author_label.message}</small> : null}
            </label>
          </div>

          <div className="admin-form-grid cols-2">
            <label className={`admin-form-field${errors.headline ? " has-error" : ""}`}>
              <span>한 줄 제목</span>
              <input
                type="text"
                placeholder="후기 제목을 입력해주세요"
                maxLength={120}
                aria-invalid={Boolean(errors.headline)}
                {...register("headline")}
              />
              <div className="admin-form-meta">
                <small className="admin-form-help">목록 카드에서 가장 먼저 보이는 문장입니다.</small>
                <small className="admin-form-counter">{headlineValue.length}/120</small>
              </div>
              {errors.headline ? <small className="admin-auth-error">{errors.headline.message}</small> : null}
            </label>

            <label className={`admin-form-field${errors.display_order ? " has-error" : ""}`}>
              <span>노출 순서</span>
              <input
                type="number"
                min="0"
                placeholder="0"
                aria-invalid={Boolean(errors.display_order)}
                {...register("display_order")}
              />
              <small className="admin-form-help">숫자가 낮을수록 위에 노출됩니다.</small>
              {errors.display_order ? <small className="admin-auth-error">{errors.display_order.message}</small> : null}
            </label>
          </div>

          <label className={`admin-form-field${errors.body ? " has-error" : ""}`}>
            <span>후기 내용</span>
            <textarea
              rows="8"
              placeholder="후기 내용을 입력해주세요"
              maxLength={2000}
              aria-invalid={Boolean(errors.body)}
              {...register("body")}
            />
            <div className="admin-form-meta">
              <small className="admin-form-help">짧은 배경 설명 뒤에 실제 만족 포인트를 적으면 더 읽기 쉽습니다.</small>
              <small className="admin-form-counter">{bodyValue.length}/2000</small>
            </div>
            {errors.body ? <small className="admin-auth-error">{errors.body.message}</small> : null}
          </label>

          <div className="admin-form-grid cols-2">
            <div className="admin-form-field admin-checkbox-field">
              <span>공개 여부</span>
              <label className="admin-checkbox-control">
                <input type="checkbox" {...register("is_published")} />
                <strong>즉시 공개</strong>
              </label>
              <small className="admin-form-help">체크를 해제하면 운영 검수용으로만 보관됩니다.</small>
            </div>

            <div className="admin-form-field admin-checkbox-field">
              <span>홈 상위노출</span>
              <label className="admin-checkbox-control">
                <input type="checkbox" {...register("show_on_home")} />
                <strong>홈 후기 4개 안에 노출</strong>
              </label>
              <small className="admin-form-help">최대 4개까지 선택됩니다. 우선순위는 노출 순서 기준입니다.</small>
            </div>
          </div>

          {saveMutation.isError ? (
            <p className="admin-page-status is-error">
              {saveMutation.error instanceof Error ? saveMutation.error.message : "후기 저장에 실패했습니다."}
            </p>
          ) : null}

          <div className="admin-form-footer">
            <p className="admin-form-actions-note">저장하면 목록으로 돌아갑니다. 공개와 홈 노출 설정에 따라 사용자 페이지와 홈 화면에 바로 반영됩니다.</p>
            <div className="admin-form-actions">
              <Button type="submit" variant="solid" size="small" disabled={saveMutation.isPending}>
                {saveMutation.isPending ? "저장 중..." : isEditMode ? "수정 저장" : "후기 등록"}
              </Button>
              <Button href="/admin/reviews" variant="outline" size="small">
                취소
              </Button>
            </div>
          </div>
        </form>
      ) : null}
    </div>
  );
}
