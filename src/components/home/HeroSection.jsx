export default function HeroSection() {
  return (
    <section className="hero-section hero-section-photo hero-section-split" id="hero">
      <div className="container hero-split-wrap reveal-up">
        <div className="hero-split-shell">
          <div className="hero-split-copy">
            <p className="hero-split-kicker">BOA DREAM CARE</p>
            <h1 className="hero-split-title">
              <span>내 집에서 누리는</span>
              <strong>가장 <em>포근한</em> 돌봄 서비스</strong>
            </h1>
            <p className="hero-split-description">
              어르신의 익숙한 일상을 지키면서도 보호자께는 더 안심되는 방문요양 · 방문목욕 상담을 차분하게 안내해드립니다.
            </p>
            <div className="hero-split-actions">
              <a href="#footer" className="button button-solid button-large hero-split-cta">
                방문요양 · 목욕 상담하기
              </a>
            </div>
          </div>

          <div className="hero-split-media" aria-hidden="true">
            <img src="/hero-care-photo.png" alt="" className="hero-split-image" />
          </div>
        </div>
      </div>
    </section>
  );
}
