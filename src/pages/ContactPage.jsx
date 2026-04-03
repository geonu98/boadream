import SectionTitle from "../components/common/SectionTitle";
import ContactForm from "../components/contact/ContactForm";

const contactCards = [
  {
    label: "전화 상담",
    title: "가장 빠른 상담 방법입니다",
    description:
      "어르신 상황, 희망 서비스, 장기요양등급 여부를 간단히 말씀해주시면 필요한 방향을 먼저 안내해드립니다.",
    note: "TEL 02-352-0088",
  },
  {
    label: "방문 상담 안내",
    title: "필요한 경우 방문 관련 안내도 도와드립니다",
    description:
      "상담 과정에서 서비스 가능 범위와 진행 절차를 확인한 후 필요한 후속 안내를 이어갑니다.",
    note: "평일 우선 상담",
  },
];

export default function ContactPage() {
  return (
    <main>
      <section className="section page-shell contact-page-shell">
        <div className="container-medium">
          <SectionTitle
            eyebrow="(상담 신청)"
            title="전화 한 통으로 시작하는"
            highlight="따뜻한 돌봄 상담"
          />
          <div className="contact-grid reveal-up">
            <div className="contact-panel">
              <h3>상담 내용을 남겨주시면 확인해드려요</h3>
              <p className="contact-panel-lead">
                보호자 연락처와 희망 서비스를 남겨주시면 어르신 상황에 맞는 상담 방향을 먼저
                안내해드립니다.
              </p>
              <ContactForm />
            </div>

            <div className="contact-panel contact-panel-stack">
              {contactCards.map((card) => (
                <article key={card.title} className="page-card contact-card-inline">
                  <span className="page-card-label">{card.label}</span>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <small>{card.note}</small>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
