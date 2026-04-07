import { Bath, HeartHandshake, Users } from "lucide-react";

const SERVICES = [
  {
    icon: HeartHandshake,
    title: "방문요양",
    description:
      "어르신의 익숙한 일상을 지키면서도 보호자께는 더 안심이 되는 돌봄 서비스를 제공합니다.",
  },
  {
    icon: Bath,
    title: "방문목욕",
    description:
      "가정 환경과 어르신 상태를 고려한 차분한 목욕 동선으로 위생과 편안함을 돕습니다.",
  },
  {
    icon: Users,
    title: "동행서비스",
    description:
      "병원 방문이나 외출 시 전문 인력이 안전하게 동행하여 일상을 더 편안하게 잇습니다.",
  },
];

function ServiceCard({ icon: Icon, title, description }) {
  return (
    <article className="home-service-strip-card reveal-up">
      <div className="home-service-strip-icon" aria-hidden="true">
        <Icon size={30} strokeWidth={1.7} />
      </div>
      <div className="home-service-strip-copy">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default function ServiceSection() {
  return (
    <div className="home-service-strip-inline" aria-label="주요 서비스">
      <div className="home-service-strip-grid home-service-strip-grid-inline">
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}
