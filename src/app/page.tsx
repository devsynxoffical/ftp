import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import LiveAutomation from "@/components/LiveAutomation";
import ServicesSection from "@/components/ServicesSection";
import RoboSection from "@/components/RoboSection";
import ProcessSection from "@/components/ProcessSection";
import WhoSection from "@/components/WhoSection";
import PortfolioFoldfolio from "@/components/PortfolioFoldfolio";
import FeaturedCases from "@/components/FeaturedCases";
import VideoTestimonials from "@/components/VideoTestimonials";
import TeamSection from "@/components/TeamSection";
import PricingSection from "@/components/PricingSection";
import AdvantageFlow from "@/components/AdvantageFlow";
import FAQSection from "@/components/FAQSection";
import CtaSection from "@/components/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoTicker />
      <LiveAutomation />
      <ServicesSection />
      <RoboSection />
      <ProcessSection />
      <WhoSection />
      <PortfolioFoldfolio />
      <FeaturedCases />
      <VideoTestimonials />
      <TeamSection />
      <PricingSection />
      <AdvantageFlow />
      <FAQSection />
      <CtaSection />
    </>
  );
}
