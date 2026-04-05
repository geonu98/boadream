import { getReviewImageUrl, getReviewInitial } from "../../features/reviews/lib/reviewUtils";

export default function ReviewCard({ review }) {
  const imageUrl = getReviewImageUrl(review.photo_path);
  const initial = getReviewInitial(review.author_name);

  return (
    <article className="testimonial-card testimonial-text-card">
      <div className="testimonial-head">
        <div className="testimonial-head-main">
          <div className="review-admin-avatar" aria-hidden="true">
            {imageUrl ? <img src={imageUrl} alt="" /> : <span>{initial}</span>}
          </div>
          <div>
            <strong>{review.author_name}</strong>
            <span>{review.author_label || "이용 후기"}</span>
          </div>
        </div>
      </div>
      <h3>{review.headline}</h3>
      <p>{review.body}</p>
    </article>
  );
}
