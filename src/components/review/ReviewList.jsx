import ReviewCard from "./ReviewCard";

export default function ReviewList({ items = [] }) {
  if (!items.length) {
    return <p className="notice-empty-state">등록된 후기가 없습니다.</p>;
  }

  return (
    <div className="testimonial-grid reveal-up">
      {items.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}
