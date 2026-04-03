import SectionTitle from "../components/common/SectionTitle";

const cards = [
  {
    label: "시설/환경 안내",
    title: "청결하고 안정적인 서비스 운영 기준",
    description:
      "보아드림은 어르신 가정 방문 시 기본 위생 수칙과 안전 절차를 철저히 지키며 서비스를 운영합니다.",
    note: "방문 전후 체크리스트 운영",
  },
  {
    label: "서비스 환경",
    title: "가정에서의 편안함을 우선으로 생각합니다",
    description:
      "낯선 환경으로 이동하는 부담을 줄이고, 익숙한 생활공간 안에서 필요한 도움을 받을 수 있도록 돕습니다.",
    note: "생활 리듬을 지키는 방문 중심 서비스",
  },
  {
    label: "보호자 소통",
    title: "상황 공유가 필요한 순간엔 빠르게 연결합니다",
    description:
      "서비스 특이사항이나 안내가 필요한 경우 보호자와의 연락을 통해 보다 안정적인 돌봄 흐름을 유지합니다.",
    note: "전화 상담 및 안내 가능",
  },
];

export default function FacilityPage() {
  return (
    <main>
      <section className="section page-shell">
        <div className="container-medium">
          <SectionTitle
            eyebrow="(시설/환경 안내)"
            title="안심할 수 있는 환경에서"
            highlight="돌봄을 이어갑니다"
          />
          <p className="page-lead reveal-up">
            어르신과 보호자 모두가 신뢰할 수 있도록, 방문 서비스의 기본인
            안전·청결·소통 기준을 꾸준히 지켜갑니다.
          </p>
          <div className="page-card-grid reveal-up">
            {cards.map((card) => (
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
