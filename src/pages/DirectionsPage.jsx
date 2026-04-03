import SectionTitle from "../components/common/SectionTitle";

const cards = [
  {
    label: "센터 위치",
    title: "서울특별시 은평구 불광동",
    description:
      "상담 시 정확한 위치와 방문 가능 권역을 자세히 안내해드립니다. 전화로 먼저 문의하시면 더욱 빠르게 확인할 수 있습니다.",
    note: "대표번호 02-352-0088",
  },
  {
    label: "방문 상담",
    title: "전화로 먼저 연결하시면 필요한 내용을 정리해드립니다",
    description:
      "장기요양등급 여부, 희망 서비스, 어르신 상태를 간단히 확인한 뒤 적절한 이용 방향을 설명해드립니다.",
    note: "평일 상담 우선 운영",
  },
  {
    label: "오시는 길 안내",
    title: "대중교통 및 주변 위치 안내 가능",
    description:
      "센터 방문이 필요한 경우 상담 과정에서 상세 주소와 이동 방법을 함께 안내해드립니다.",
    note: "방문 전 전화 문의 권장",
  },
];

export default function DirectionsPage() {
  return (
    <main>
      <section className="section page-shell">
        <div className="container-medium">
          <SectionTitle
            eyebrow="(찾아오시는 길)"
            title="필요한 순간"
            highlight="가까이에서 안내해드립니다"
          />
          <p className="page-lead reveal-up">
            전화 한 통으로 상담부터 위치 안내까지 차분하게 도와드리겠습니다.
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
