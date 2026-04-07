import Button from "../components/common/Button";

const summaryPoints = [
  "장기요양등급이 아직 없어도 먼저 상담 가능합니다.",
  "보호자와 함께 일정과 돌봄 방향을 차근차근 조율합니다.",
  "방문요양과 방문목욕 차이도 쉽게 설명해드립니다.",
];

const overviewCards = [
  {
    kind: "profile",
    eyebrow: "대표 소개",
    title: "대표 김자영",
    description: "가족의 마음으로 어르신과 보호자를 이해하고, 익숙한 일상이 이어질 수 있도록 차분한 돌봄 방향을 함께 안내합니다.",
  },
  {
    kind: "stat",
    value: "등급 전",
    title: "먼저 상담 가능",
    description: "장기요양등급 전 단계라도 현재 상황부터 안내해드립니다.",
  },
  {
    kind: "stat",
    value: "일정 조율",
    title: "보호자와 함께",
    description: "상담부터 방문 일정까지 이해하기 쉬운 방식으로 조율합니다.",
  },
  {
    kind: "profile",
    eyebrow: "사회복지사 안내",
    title: "처음 문의하셔도 이해하기 쉬운 상담 안내",
    description: "서비스 범위와 이용 절차를 낯설지 않게 설명해드리고, 상황에 맞는 상담 방향을 함께 정리해드립니다.",
  },
  {
    kind: "stat",
    value: "방문요양",
    title: "방문목욕 방향 안내",
    description: "상황에 맞는 서비스 방향을 상담 과정에서 같이 정리합니다.",
  },
  {
    kind: "stat",
    value: "은평구",
    title: "불광동 기반 운영",
    description: "지역 기반 상담과 안내를 차분하고 안정적으로 이어갑니다.",
  },
];

function BrandMark({ className = "" }) {
  return <img className={className} src="/boadream-mark.png" alt="" />;
}

export default function AboutPage() {
  return (
    <main>
      <section className="section page-shell about-reference-shell">
        <div className="container-medium about-reference-container">
          <div className="about-reference-heading reveal-up">
            <p className="about-reference-eyebrow">CENTER INTRODUCTION</p>
            <h1 className="about-reference-title">
              가족의 마음으로
              <span>따뜻한 돌봄을 이어갑니다</span>
            </h1>
            <p className="about-reference-copy">
              보아드림노인복지센터는 어르신의 익숙한 일상을 지키면서도, 보호자께는 더 안심되는 돌봄을 전하는 것을 목표로 합니다.
            </p>
          </div>

          <div className="about-reference-hero-grid reveal-up">
            <article className="about-reference-visual-card brand-mode">
              <div className="about-reference-brand-stage" aria-hidden="true">
                <span className="about-reference-brand-orb orb-a"></span>
                <span className="about-reference-brand-orb orb-b"></span>
                <span className="about-reference-brand-orb orb-c"></span>
                <div className="about-reference-brand-mark-wrap">
                  <BrandMark className="about-reference-brand-mark" />
                </div>
              </div>
              <div className="about-reference-visual-overlay">
                <span className="about-reference-kicker">Boa Dream Care</span>
                <h2>익숙한 일상을 지키는 따뜻한 방문 돌봄</h2>
                <p>낯선 변화보다 편안한 일상을 먼저 생각하는 센터가 되고 싶었습니다.</p>
              </div>
            </article>

            <article className="about-reference-summary-card">
              <span className="about-reference-summary-kicker">A System of Care</span>
              <h2>보호자가 안심하고 맡길 수 있는 체계적인 방문 돌봄을 지향합니다.</h2>
              <p>
                단순히 서비스를 연결하는 데서 그치지 않고, 상담부터 일정 안내, 서비스 시작까지 이해하기 쉬운 방식으로 차분히 안내해드립니다.
              </p>
              <ul className="about-reference-summary-list">
                {summaryPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="about-reference-summary-actions">
                <Button href="/contact" variant="solid" size="small">
                  상담 문의하기
                </Button>
                <Button href="/directions" variant="outline" size="small">
                  오시는 길 보기
                </Button>
              </div>
            </article>
          </div>

          <div className="about-reference-section-head reveal-up">
            <span>Who We Are</span>
            <h2>센터 소개</h2>
          </div>

          <div className="about-reference-mosaic reveal-up">
            <div className="about-reference-card-grid">
              {overviewCards.map((card) =>
                card.kind === "profile" ? (
                  <article key={card.title} className="about-reference-card about-reference-profile-card icon-mode">
                    <div className="about-reference-profile-thumb icon-only">
                      <BrandMark className="about-reference-profile-mark" />
                    </div>
                    <div className="about-reference-profile-copy">
                      <span>{card.eyebrow}</span>
                      <h3>{card.title}</h3>
                      <p>{card.description}</p>
                    </div>
                  </article>
                ) : (
                  <article key={card.title} className="about-reference-card about-reference-stat-card">
                    <span className="about-reference-stat-value">{card.value}</span>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </article>
                ),
              )}
            </div>

            <aside className="about-reference-contact-card">
              <div className="about-reference-contact-brand">
                <span className="about-reference-contact-brand-badge">
                  <BrandMark className="about-reference-contact-mark" />
                </span>
                <span className="about-reference-contact-kicker">Consultation Guide</span>
              </div>
              <h3>전화 상담과 문의 접수 모두 편하게 이용하실 수 있습니다.</h3>
              <dl className="about-reference-contact-list">
                <div>
                  <dt>대표번호</dt>
                  <dd>02-352-0088</dd>
                </div>
                <div>
                  <dt>운영 안내</dt>
                  <dd>방문요양 · 방문목욕 상담</dd>
                </div>
                <div>
                  <dt>주소</dt>
                  <dd>서울특별시 은평구 통일로 780 상가동 3층 4호</dd>
                </div>
              </dl>
              <div className="about-reference-contact-actions">
                <Button href="/contact" variant="solid" size="small">
                  상담 신청하기
                </Button>
                <Button href="/faq" variant="outline" size="small">
                  자주 묻는 질문
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
