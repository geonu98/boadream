import SectionTitle from "../components/common/SectionTitle";

const aboutCards = [
  {
    label: "센터 인사말",
    title: "가족의 마음으로 곁을 지키는 돌봄",
    description:
      "보아드림노인복지센터는 어르신 한 분 한 분의 생활 리듬과 마음을 먼저 이해하는 방문요양을 지향합니다.",
    note: "은평구 불광동 기반 방문요양 · 방문목욕 상담 운영",
  },
  {
    label: "운영 철학",
    title: "따뜻함과 전문성을 함께 놓치지 않습니다",
    description:
      "신뢰할 수 있는 돌봄 계획, 안정적인 방문 일정, 보호자와의 꾸준한 소통을 통해 편안한 일상을 돕습니다.",
    note: "상담부터 서비스 시작까지 한결같은 응대 기준 유지",
  },
  {
    label: "상담 안내",
    title: "처음 문의하셔도 쉽게 안내해드립니다",
    description:
      "장기요양등급, 서비스 범위, 이용 절차가 낯설더라도 전화 상담을 통해 차근차근 설명해드립니다.",
    note: "대표번호 02-352-0088",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="section page-shell">
        <div className="container-medium">
          <SectionTitle
            eyebrow="(센터소개)"
            title="가족의 마음으로"
            highlight="따뜻한 돌봄을 이어갑니다"
          />
          <p className="page-lead reveal-up">
            보아드림노인복지센터는 어르신의 익숙한 일상을 지키면서도,
            보호자께는 더 안심되는 돌봄을 전하는 것을 목표로 합니다.
          </p>
          <div className="page-card-grid reveal-up">
            {aboutCards.map((card) => (
              <article key={card.title} className="page-card">
                <span className="page-card-label">{card.label}</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <small>{card.note}</small>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
