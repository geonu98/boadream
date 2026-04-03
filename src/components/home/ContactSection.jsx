import FaqList from "../faq/FaqList";
import { faqs } from "../../data/faqs";

export default function ContactSection() {
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

        <div className="reveal-up home-faq-list-wrap">
          <FaqList items={faqs.slice(0, 5)} />
        </div>

        <div className="home-faq-actions reveal-up">
          <a className="button button-solid button-small footer-kakao-button" href="/faq">
            FAQ 전체보기
          </a>
          <a className="button button-outline button-small home-faq-contact-button" href="/contact">
            상담 신청하기
          </a>
        </div>
      </div>
    </section>
  );
}
