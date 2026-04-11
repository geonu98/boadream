import { Bath, ClipboardList, HeartHandshake, Users } from "lucide-react";
import { homeServices } from "../../data/homeServices";

const serviceIcons = {
  HeartHandshake,
  Bath,
  Users,
  ClipboardList,
};

function ServiceCard({ icon: Icon, title, description }) {
  return (
    <article className="home-service-strip-card reveal-up">
      <div className="home-service-strip-head">
        <div className="home-service-strip-icon" aria-hidden="true">
          <Icon size={28} strokeWidth={1.65} />
        </div>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
    </article>
  );
}

export default function ServiceSection() {
  return (
    <div className="home-service-strip-inline" aria-label="주요 서비스">
      <div className="home-service-strip-grid home-service-strip-grid-inline">
        {homeServices.map((service) => {
          const Icon = serviceIcons[service.icon];

          return (
            <ServiceCard
              key={service.key}
              icon={Icon}
              title={service.title}
              description={service.description}
            />
          );
        })}
      </div>
    </div>
  );
}
