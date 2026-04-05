import { useQuery } from "@tanstack/react-query";
import FaqList from "../components/faq/FaqList";
import { faqService } from "../features/faqs/api/faqService";
import SectionTitle from "../components/common/SectionTitle";

export default function FaqPage() {
  const faqsQuery = useQuery({
    queryKey: ["public-faqs"],
    queryFn: faqService.listPublishedFaqs,
  });

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
          {faqsQuery.isLoading ? <p className="notice-page-status">FAQ를 불러오는 중입니다.</p> : null}
          {faqsQuery.isError ? (
            <p className="notice-page-status is-error">
              {faqsQuery.error instanceof Error ? faqsQuery.error.message : "FAQ를 불러오지 못했습니다."}
            </p>
          ) : null}
          {!faqsQuery.isLoading && !faqsQuery.isError ? <FaqList items={faqsQuery.data || []} /> : null}
        </div>
      </section>
    </main>
  );
}
