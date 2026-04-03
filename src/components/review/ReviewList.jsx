import ReviewCard from "./ReviewCard";

export default function ReviewList({ items }) {
  return (
    <div className="testimonial-grid reveal-up">
      {items.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}
