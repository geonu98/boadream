import { useQuery } from "@tanstack/react-query";
import { reviewService } from "../../features/reviews/api/reviewService";
import { getReviewImageUrl, getReviewInitial } from "../../features/reviews/lib/reviewUtils";

export default function FacilitySection() {
  const reviewsQuery = useQuery({
    queryKey: ["home-reviews"],
    queryFn: reviewService.listFeaturedHomeReviews,
  });

  const visibleReviews = reviewsQuery.data || [];
  const marqueeReviews = visibleReviews.length ? [...visibleReviews, ...visibleReviews] : [];

  return (
    <section className="section section-split section-review-marquee" id="stories">
      <div className="container">
        <div className="review-marquee-head reveal-up">
          <h2>이용 후기</h2>
          <p>
            보아드림노인복지센터를 이용한 어르신과 보호자분들의 실제 경험을 바탕으로,
            돌봄 과정에서 느낀 변화와 만족을 소개합니다.
          </p>
        </div>

        {reviewsQuery.isLoading ? <p className="notice-page-status">후기를 불러오는 중입니다.</p> : null}
        {reviewsQuery.isError ? (
          <p className="notice-page-status is-error">
            {reviewsQuery.error instanceof Error ? reviewsQuery.error.message : "후기를 불러오지 못했습니다."}
          </p>
        ) : null}

        {!reviewsQuery.isLoading && !reviewsQuery.isError && marqueeReviews.length ? (
          <div className="review-marquee-window reveal-up">
            <div className="review-marquee-track">
              {marqueeReviews.map((review, index) => {
                const imageUrl = getReviewImageUrl(review.photo_path);
                const initial = getReviewInitial(review.author_name);

                return (
                  <article
                    key={`${review.id}-${index}`}
                    className="review-slide-card"
                    aria-hidden={index >= visibleReviews.length}
                  >
                    <div className="review-avatar-shell" aria-hidden="true">
                      {imageUrl ? (
                        <img className="review-avatar-photo" src={imageUrl} alt="" />
                      ) : (
                        <div className="review-avatar-ring">
                          <div className="review-avatar-circle">{initial}</div>
                        </div>
                      )}
                    </div>
                    <div className="review-slide-copy">
                      <strong>{review.author_name}</strong>
                      <span>{review.author_label || "이용 후기"}</span>
                      <p>{review.body}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
