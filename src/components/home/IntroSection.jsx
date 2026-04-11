import ServiceSection from "./ServiceSection";

export default function IntroSection() {
  return (
    <section className="section section-benefits section-benefits-editorial" id="benefits">
      <div className="container benefit-editorial-shell reveal-up">
        <div className="benefit-editorial-visual">
          <div className="benefit-editorial-image-wrap">
            <img
              src="/independence-care-illustration.webp"
              alt="보아드림 자립 지원 일러스트"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="benefit-editorial-copy">
          <span className="benefit-editorial-kicker">Our Philosophy</span>
          <h2 className="benefit-editorial-title">
            자립을 돕는 돌봄,
            <span>보아드림의 진심입니다</span>
          </h2>
          <p className="benefit-editorial-body">
            무조건 대신해드리기보다, 어르신이 스스로 하실 수 있는 부분은 끝까지 지켜드리고
            도와드리는 것이 진정한 돌봄이라 믿습니다.
          </p>

          <div className="benefit-editorial-chips">
            <span>1:1 맞춤 케어</span>
            <span>전문 교육 이수</span>
            <span>재가 복지 전문</span>
          </div>

          <ServiceSection />

          <div className="benefit-editorial-actions">
            <a href="/service" className="button button-outline benefit-editorial-link">
              서비스안내 자세히 보기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
