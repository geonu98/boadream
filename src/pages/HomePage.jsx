import ContactSection from "../components/home/ContactSection";
import HeroSection from "../components/home/HeroSection";
import IntroSection from "../components/home/IntroSection";
import StoriesSection from "../components/home/StoriesSection";
import Seo from "../shared/seo/Seo";

export default function HomePage() {
  return (
    <main className="home-page">
      <Seo page="home" />
      <HeroSection />
      <IntroSection />
      <StoriesSection />
      <ContactSection />
    </main>
  );
}
