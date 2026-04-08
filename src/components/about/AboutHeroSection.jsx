import Button from "../common/Button";
import "./AboutHeroSection.css";

export default function AboutHeroSection() {
  return (
    <section className="about-premium-hero">
      <div className="about-premium-hero__bg about-premium-hero__bg--top" />
      <div className="about-premium-hero__grain" />

      <div className="about-premium-hero__graphic about-premium-hero__graphic--top" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="about-premium-hero__graphic about-premium-hero__graphic--bottom" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="about-premium-hero__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 220" preserveAspectRatio="none">
          <path d="M0 126C86 154 176 171 268 170C391 168 481 123 603 114C724 105 799 143 919 157C1045 171 1176 161 1285 130C1346 112 1397 89 1440 73V220H0Z" />
          <path d="M0 154C100 189 213 200 327 191C447 182 534 143 652 138C774 134 865 171 983 185C1112 201 1248 184 1361 149C1390 140 1416 131 1440 121V220H0Z" />
        </svg>
      </div>

      <div className="about-premium-hero__inner">
        <div className="about-premium-hero__content">
          <div className="about-premium-hero__left">
            <span className="about-premium-hero__eyebrow">WHO WE ARE</span>

            <h1 className="about-premium-hero__title">
              익숙한 일상을 지키는
              <br />
              따뜻한 방문 돌봄
            </h1>

            <p className="about-premium-hero__desc">
              보아드림노인복지센터는 어르신의 일상이 안정적으로 이어질 수 있도록 상담부터 방문 돌봄까지 차분하고 이해하기 쉬운 방식으로 안내합니다.
            </p>

            <div className="about-premium-hero__actions">
              <Button href="#about-mosaic" className="about-premium-hero__button about-premium-hero__button--primary">
                센터 인사말
              </Button>
              <Button href="/contact" variant="outline" className="about-premium-hero__button about-premium-hero__button--ghost">
                상담 문의하기
              </Button>
            </div>

            <div className="about-premium-hero__meta">
              <div className="about-premium-hero__meta-item">
                <span className="about-premium-hero__meta-label">상담부터 방문 돌봄까지</span>
                <strong>이해하기 쉬운 안내</strong>
              </div>
              <div className="about-premium-hero__meta-item">
                <span className="about-premium-hero__meta-label">보호자와 함께 조율</span>
                <strong>차분한 일정 설계</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}