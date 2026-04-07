import { useQuery } from "@tanstack/react-query";
import FaqList from "../faq/FaqList";
import { faqService } from "../../features/faqs/api/faqService";
import Button from "../common/Button";

export default function ContactSection() {
  const faqsQuery = useQuery({
    queryKey: ["home-faqs"],
    queryFn: faqService.listFeaturedHomeFaqs,
  });

  const previewFaqs = faqsQuery.data || [];

  return (
    <section className="section page-shell home-faq-section" id="faq-preview">
      <div className="container-medium">
        <div className="section-title-wrap reveal-up home-faq-heading">
          <h2 className="section-title">
            자주 묻는 질문
            <span>상담 전에 먼저 확인해보세요</span>
          </h2>
          <p className="page-lead home-faq-lead">
            장기요양등급, 방문요양 이용방법, 비용 안내처럼 보호자분들이 자주 물어보시는 질문을 먼저 정리했습니다.
          </p>
        </div>

        {faqsQuery.isLoading ? <p className="notice-page-status">FAQ를 불러오는 중입니다.</p> : null}
        {faqsQuery.isError ? (
          <p className="notice-page-status is-error">
            {faqsQuery.error instanceof Error ? faqsQuery.error.message : "FAQ를 불러오지 못했습니다."}
          </p>
        ) : null}

        {!faqsQuery.isLoading && !faqsQuery.isError ? (
          <div className="reveal-up home-faq-list-wrap">
            <FaqList items={previewFaqs} />
          </div>
        ) : null}

        <div className="home-faq-actions reveal-up">
          <Button className="footer-kakao-button" href="/faq" variant="solid" size="small">
            FAQ 전체보기
          </Button>
          <Button className="home-faq-contact-button" href="/contact" variant="outline" size="small">
            상담 신청하기
          </Button>
        </div>
      </div>
    </section>
  );
}
