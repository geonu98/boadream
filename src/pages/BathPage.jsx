import SectionTitle from "../components/common/SectionTitle";

const cards = [
  {
    label: "방문목욕 서비스",
    title: "거동이 불편한 어르신도 편안하게 이용할 수 있도록",
    description:
      "신체 상태와 이동 가능 여부를 고려해 안전한 방식으로 방문목욕 서비스를 제공합니다.",
    note: "사전 상담 후 일정 조율",
  },
  {
    label: "진행 방식",
    title: "위생과 안전을 중심에 둔 서비스 운영",
    description:
      "목욕 전후 어르신 컨디션을 확인하고, 무리가 가지 않도록 단계별로 진행합니다.",
    note: "상황에 따라 보호자 동행 상담 가능",
  },
  {
    label: "이용 문의",
    title: "방문요양과 함께 상담하실 수 있습니다",
    description:
      "목욕 서비스만 별도로 문의하셔도 되고, 방문요양과 함께 이용 가능 여부를 함께 상담받으실 수 있습니다.",
    note: "대표번호 02-352-0088",
  },
];

export default function BathPage() {
  return (
    <main>
      <section className="section page-shell">
        <div className="container-medium">
          <SectionTitle
            eyebrow="(방문목욕 서비스)"
            title="안전하고 편안한"
            highlight="방문목욕 서비스를 안내합니다"
          />
          <p className="page-lead reveal-up">
            어르신 컨디션과 가정 환경을 고려해 무리 없이 진행할 수 있도록
            상담 단계부터 자세히 설명해드립니다.
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
