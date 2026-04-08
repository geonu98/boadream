import {
  BadgeCheck,
  Bath,
  CalendarCheck2,
  ClipboardList,
  Clock3,
  HeartHandshake,
  House,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Users,
} from "lucide-react";
import Button from "../components/common/Button";
import AboutHeroSection from "../components/about/AboutHeroSection";

const highlights = [
  {
    icon: ClipboardList,
    title: "체계적인 상담 안내",
    description: "등급 전 문의부터 서비스 시작까지 차분하게 안내합니다.",
  },
  {
    icon: ShieldCheck,
    title: "전문 케어팀 운영",
    description: "상황에 맞는 방문 돌봄 방향을 안정적으로 조율합니다.",
  },
  {
    icon: HeartHandshake,
    title: "어르신 중심 돌봄",
    description: "익숙한 일상이 이어질 수 있도록 편안함을 먼저 생각합니다.",
  },
  {
    icon: House,
    title: "쾌적하고 편안한 안내",
    description: "처음 문의하셔도 부담 없이 이해할 수 있도록 설명합니다.",
  },
];

const mosaicCards = [
  {
    key: "story",
    label: "대표 소개",
    title: "익숙한 하루가 무너지지 않도록, 돌봄의 속도를 맞춥니다.",
    description:
      "보아드림노인복지센터는 어르신과 보호자가 모두 안심할 수 있는 돌봄 과정을 중요하게 생각합니다. 상담부터 일정 조율, 서비스 시작까지 서두르지 않고 이해하기 쉬운 방식으로 안내합니다.",
  },
  {
    key: "consult",
    label: "상담 안내",
    icon: BadgeCheck,
    title: "장기요양등급 전에도 먼저 상담 가능합니다.",
    description: "현재 상황과 필요한 도움부터 먼저 정리해드립니다.",
  },
  {
    key: "schedule",
    label: "일정 조율",
    icon: CalendarCheck2,
    title: "보호자와 함께 방문 일정과 돌봄 방향을 조율합니다.",
    description: "생활 패턴과 보호자 일정까지 함께 고려해 맞춥니다.",
  },
  {
    key: "service",
    label: "서비스 안내",
    icon: Bath,
    title: "방문요양과 방문목욕 차이도 쉽게 설명해드립니다.",
    description: "낯선 용어보다 실제 이용 흐름 중심으로 정리해드립니다.",
  },
  {
    key: "region",
    label: "운영 기준",
    icon: Users,
    title: "은평구 불광동 기반으로 차분하고 안정적인 상담을 이어갑니다.",
    description: "어르신 상태와 보호자 상황에 맞춘 현실적인 돌봄 방향을 함께 찾습니다.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page-new">
      <AboutHeroSection />

      <section className="section about-highlights-section">
        <div className="container about-highlights-shell">
          <div className="about-section-head reveal-up">
            <span className="about-section-label">OUR STRENGTH</span>
            <h2>센터의 운영 방식과 강점을 한눈에 살펴보세요</h2>
          </div>
          <div className="about-highlights-grid reveal-up">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="about-highlight-card">
                  <div className="about-highlight-icon" aria-hidden="true">
                    <Icon size={28} strokeWidth={1.65} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section about-mosaic-section" id="about-mosaic">
        <div className="container about-mosaic-shell">
          <div className="about-section-head reveal-up">
            <span className="about-section-label">CENTER GUIDE</span>
            <h2>보아드림노인복지센터는</h2>
          </div>

          <div className="about-mosaic-grid reveal-up">
            <article className="about-mosaic-card about-mosaic-card-story">
              <span className="about-card-label">{mosaicCards[0].label}</span>
              <h3>{mosaicCards[0].title}</h3>
              <p>{mosaicCards[0].description}</p>
            </article>

            <article className="about-mosaic-card about-mosaic-card-visual" aria-hidden="true">
              <img src="/care-support-illustration.png" alt="" className="about-mosaic-image" />
              <div className="about-mosaic-visual-copy">
                <span className="about-card-label">Boa Dream Care</span>
                <strong>편안한 일상에 맞춘 방문 돌봄</strong>
              </div>
            </article>

            {mosaicCards.slice(1, 4).map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.key}
                  className={`about-mosaic-card about-mosaic-card-info about-mosaic-card-${item.key}`}
                >
                  <span className="about-card-label">{item.label}</span>
                  <div className="about-mosaic-card-icon" aria-hidden="true">
                    <Icon size={24} strokeWidth={1.7} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}

            <article className="about-mosaic-card about-mosaic-card-region">
              <span className="about-card-label">{mosaicCards[4].label}</span>
              <div className="about-mosaic-card-icon" aria-hidden="true">
                <Users size={24} strokeWidth={1.7} />
              </div>
              <h3>{mosaicCards[4].title}</h3>
              <p>{mosaicCards[4].description}</p>
            </article>

            <article className="about-mosaic-card about-mosaic-card-contact">
              <span className="about-card-label">운영 정보</span>
              <h3>문의와 상담, 방문 안내를 한 곳에서 편하게 확인하실 수 있습니다.</h3>
              <ul className="about-contact-list">
                <li>
                  <PhoneCall size={18} strokeWidth={1.7} aria-hidden="true" />
                  <span>대표번호 02-352-0088</span>
                </li>
                <li>
                  <Clock3 size={18} strokeWidth={1.7} aria-hidden="true" />
                  <span>운영시간 평일 09:00 - 18:00</span>
                </li>
                <li>
                  <MapPin size={18} strokeWidth={1.7} aria-hidden="true" />
                  <span>서울특별시 은평구 통일로 780 상가동 3층 4호</span>
                </li>
              </ul>
              <div className="about-contact-actions">
                <Button href="/contact" variant="solid" size="small">
                  상담 문의하기
                </Button>
                <Button href="/directions" variant="outline" size="small">
                  오시는 길 보기
                </Button>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}