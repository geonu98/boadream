import ReviewList from "../components/review/ReviewList";
import SectionTitle from "../components/common/SectionTitle";
import { reviews } from "../data/reviews";

export default function ReviewPage() {
  return (
    <main>
      <section className="section page-shell">
        <div className="container-medium">
          <SectionTitle
            eyebrow="(Review)"
            title="Experiences collected in"
            highlight="reusable components"
          />
          <ReviewList items={reviews} />
        </div>
      </section>
    </main>
  );
}
