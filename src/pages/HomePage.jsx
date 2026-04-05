import ContactSection from "../components/home/ContactSection";
import FacilitySection from "../components/home/FacilitySection";
import HeroSection from "../components/home/HeroSection";
import IntroSection from "../components/home/IntroSection";
import NoticePreviewSection from "../components/home/NoticePreviewSection";
import ServiceSection from "../components/home/ServiceSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <IntroSection />
      <ServiceSection />
      <NoticePreviewSection />
      <FacilitySection />
      <ContactSection />
    </main>
  );
}
