export default function HeroSection() {
  return (
    <section className="hero-section hero-section-photo hero-section-split" id="hero">
      <div className="container hero-split-wrap reveal-up">
        <div className="hero-split-shell">
          <div className="hero-split-copy">
            <p className="hero-split-kicker">BOA DREAM CARE</p>
            <h1 className="hero-split-title">
              <span>내 집에서 누리는</span>
              <strong>가장 포근한 돌봄 서비스</strong>
            </h1>
            <p className="hero-split-description">
              어르신의 익숙한 일상을 지키면서도 보호자께는 더 안심되는 방문요양·방문목욕 상담을 차분하게 안내해드립니다.
            </p>
            <div className="hero-split-brand" aria-label="보아드림노인복지센터 브랜드">
              <img src="/boadream-mark.png" alt="" className="hero-split-brand-mark" />
              <span className="hero-split-brand-name">보아드림노인복지센터</span>
            </div>
            <div className="hero-split-actions">
              <a href="#footer" className="button button-outline button-large hero-split-cta hero-split-cta-outline">
                방문요양 · 목욕 상담하기
              </a>
            </div>
          </div>

          <div className="hero-split-media" aria-hidden="true">
            <img
              src="/hero-care-photo.webp"
              alt=""
              className="hero-split-image"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
