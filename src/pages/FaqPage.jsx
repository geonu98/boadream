import FaqList from "../components/faq/FaqList";
import SectionTitle from "../components/common/SectionTitle";
import { faqs } from "../data/faqs";

export default function FaqPage() {
  return (
    <main className="faq-page">
      <section className="section page-shell">
        <div className="container-medium">
          <SectionTitle
            eyebrow="(자주 묻는 질문)"
            title="자주 묻는 질문"
            highlight="상담 전에 먼저 확인해보세요"
            className="faq-page-title"
          />
          <FaqList items={faqs} />
        </div>
      </section>
    </main>
  );
}

