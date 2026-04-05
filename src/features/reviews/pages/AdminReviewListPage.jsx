import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Button from "../../../components/common/Button";
import { getReviewImageUrl, getReviewInitial } from "../lib/reviewUtils";
import { reviewService } from "../api/reviewService";

export default function AdminReviewListPage() {
  const queryClient = useQueryClient();
  const reviewsQuery = useQuery({
    queryKey: ["admin-reviews"],
    queryFn: reviewService.listAdminReviews,
  });

  const deleteReviewMutation = useMutation({
    mutationFn: reviewService.deleteReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-reviews"] });
      queryClient.invalidateQueries({ queryKey: ["public-reviews"] });
      queryClient.invalidateQueries({ queryKey: ["home-reviews"] });
    },
  });

  const handleDelete = (id) => {
    if (!window.confirm("이 후기를 삭제하시겠습니까?")) {
      return;
    }

    deleteReviewMutation.mutate(id);
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <p className="admin-page-eyebrow">Reviews</p>
          <h2>후기 관리</h2>
          <p className="admin-page-description">후기 내용, 이미지, 공개 여부, 홈 상위노출 여부를 관리할 수 있습니다.</p>
        </div>
        <div className="admin-page-header-actions">
          <Button href="/admin/reviews/new" variant="solid" size="small">
            후기 등록
          </Button>
        </div>
      </div>

      {reviewsQuery.isLoading ? <p className="admin-page-status">후기를 불러오는 중입니다.</p> : null}
      {reviewsQuery.isError ? (
        <p className="admin-page-status is-error">
          {reviewsQuery.error instanceof Error ? reviewsQuery.error.message : "후기를 불러오지 못했습니다."}
        </p>
      ) : null}

      {!reviewsQuery.isLoading && !reviewsQuery.isError ? (
        <div className="admin-review-list">
          {reviewsQuery.data?.length ? (
            reviewsQuery.data.map((review) => {
              const imageUrl = getReviewImageUrl(review.photo_path);
              const initial = getReviewInitial(review.author_name);

              return (
                <article key={review.id} className="admin-review-card">
                  <div className="admin-review-head">
                    <div className="admin-review-identity">
                      <div className="admin-review-thumb" aria-hidden="true">
                        {imageUrl ? <img src={imageUrl} alt="" /> : <span>{initial}</span>}
                      </div>
                      <div>
                        <div className="admin-review-badges">
                          <span className="admin-faq-order">순서 {review.display_order}</span>
                          <span className={`admin-faq-visibility${review.is_published ? " is-published" : " is-draft"}`}>
                            {review.is_published ? "공개" : "비공개"}
                          </span>
                          {review.show_on_home ? <span className="admin-review-home-badge">홈 상위노출</span> : null}
                        </div>
                        <h3>{review.author_name}</h3>
                        <p className="admin-review-label">{review.author_label || "이용 후기"}</p>
                      </div>
                    </div>
                    <div className="admin-notice-meta">
                      <span>{review.headline}</span>
                    </div>
                  </div>

                  <p className="admin-review-body">{review.body}</p>

                  <div className="admin-review-actions">
                    <Button href="/review" variant="outline" size="small" target="_blank" rel="noreferrer">
                      공개 보기
                    </Button>
                    <Button href={`/admin/reviews/${review.id}/edit`} variant="solid" size="small">
                      수정
                    </Button>
                    <button
                      type="button"
                      className="button button-outline button-small admin-delete-button"
                      onClick={() => handleDelete(review.id)}
                      disabled={deleteReviewMutation.isPending}
                    >
                      삭제
                    </button>
                  </div>
                </article>
              );
            })
          ) : (
            <p className="admin-page-status">등록된 후기가 없습니다.</p>
          )}
        </div>
      ) : null}
    </div>
  );
}
