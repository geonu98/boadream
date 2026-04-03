export default function ReviewCard({ review }) {
  return (
    <article className="testimonial-card testimonial-text-card">
      <div className="testimonial-head">
        <div>
          <strong>{review.name}</strong>
          <span>{review.role}</span>
        </div>
        <span className="handle">{review.handle}</span>
      </div>
      <h3>{review.headline}</h3>
      <p>{review.body}</p>
    </article>
  );
}
