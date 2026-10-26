import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import LiveAutomation from "@/components/LiveAutomation";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import WhoSection from "@/components/WhoSection";
import PortfolioFoldfolio from "@/components/PortfolioFoldfolio";
import FeaturedCases from "@/components/FeaturedCases";
import RealClientResults from "@/components/RealClientResults";
import VideoTestimonials from "@/components/VideoTestimonials";
import TeamSection from "@/components/TeamSection";
import PricingSection from "@/components/PricingSection";
import AdvantageFlow from "@/components/AdvantageFlow";
import FAQSection from "@/components/FAQSection";
import RoboSection from "@/components/RoboSection";
import UFSquareMarquee from "@/components/UFSquareMarquee";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoTicker />
      <LiveAutomation />
      <ServicesSection />
      <ProcessSection />
      <WhoSection />
      <PortfolioFoldfolio />
      <FeaturedCases />
      <RealClientResults />
      <VideoTestimonials />
      <TeamSection />
      <PricingSection />
      <AdvantageFlow />
      <FAQSection />
      <UFSquareMarquee />
      <RoboSection />
    </>
  );
}
