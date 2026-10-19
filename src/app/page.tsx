import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import LiveAutomation from "@/components/LiveAutomation";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioFoldfolio from "@/components/PortfolioFoldfolio";
import FeaturedCases from "@/components/FeaturedCases";
import VideoTestimonials from "@/components/VideoTestimonials";
import TeamSection from "@/components/TeamSection";
import PricingSection from "@/components/PricingSection";
import AdvantageFlow from "@/components/AdvantageFlow";
import FAQSection from "@/components/FAQSection";
import RoboSection from "@/components/RoboSection";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoTicker />
      <LiveAutomation />
      <ServicesSection />
      <AdvantageFlow />
      <ProcessSection />
      <PortfolioFoldfolio />
      <FeaturedCases />
      <VideoTestimonials />
      <TeamSection />
      <PricingSection />
      <FAQSection />
      <RoboSection />
    </>
  );
}
