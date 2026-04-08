import ContactSection from "../components/home/ContactSection";
import HeroSection from "../components/home/HeroSection";
import IntroSection from "../components/home/IntroSection";
import StoriesSection from "../components/home/StoriesSection";

export default function HomePage() {
  return (
    <main className="home-page">
      <HeroSection />
      <IntroSection />
      <StoriesSection />
      <ContactSection />
    </main>
  );
}
