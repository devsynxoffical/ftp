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
import IndustryLinks from "@/components/case/IndustryLinks";
import RoboSection from "@/components/RoboSection";
import UFSquareMarquee from "@/components/UFSquareMarquee";
import { HOME_FAQ_SCHEMA } from "@/data/homeFaqSchema";
import JournalPreview from "@/components/JournalPreview";
import { HomeMostSearched, HomeQuickAnswer, HOME_SERVICE_SCHEMA } from "@/components/seo/HomeSeoBlocks";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOME_FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOME_SERVICE_SCHEMA) }}
      />
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
      <JournalPreview
        slugs={["ai-sales-funnels-voice-lead-qualification-2026", "ai-appointment-setter-voice-agent-cost-setup-results", "gohighlevel-vs-clickfunnels-lead-generation-2026"]}
      />
      <HomeQuickAnswer />
      <HomeMostSearched />
      <IndustryLinks title="Case studies by industry" />
      <FAQSection />
      <UFSquareMarquee />
      <RoboSection />
    </>
  );
}
