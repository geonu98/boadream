import { useQuery } from "@tanstack/react-query";
import ReviewList from "../components/review/ReviewList";
import { reviewService } from "../features/reviews/api/reviewService";
import SectionTitle from "../components/common/SectionTitle";

export default function ReviewPage() {
  const reviewsQuery = useQuery({
    queryKey: ["public-reviews"],
    queryFn: reviewService.listPublishedReviews,
  });

  return (
    <main>
      <section className="section page-shell">
        <div className="container-medium">
          <SectionTitle
            eyebrow="(후기)"
            title="이용 후기"
            highlight="실제 보호자와 어르신 경험을 확인해보세요"
          />
          {reviewsQuery.isLoading ? <p className="notice-page-status">후기를 불러오는 중입니다.</p> : null}
          {reviewsQuery.isError ? (
            <p className="notice-page-status is-error">
              {reviewsQuery.error instanceof Error ? reviewsQuery.error.message : "후기를 불러오지 못했습니다."}
            </p>
          ) : null}
          {!reviewsQuery.isLoading && !reviewsQuery.isError ? <ReviewList items={reviewsQuery.data || []} /> : null}
        </div>
      </section>
    </main>
  );
}
