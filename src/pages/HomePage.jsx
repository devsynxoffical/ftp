import React from 'react';
import HeroSection from '../components/HeroSection';
import MasteryStatementMetricsSection from '../components/MasteryStatementMetricsSection';
import CentralPhoneEngineSection from '../components/CentralPhoneEngineSection';
import StatsGridSection from '../components/StatsGridSection';
import StickyProcessCardsSection from '../components/StickyProcessCardsSection';
import BoldFeatureBannerSection from '../components/BoldFeatureBannerSection';
import InteractiveVideoTrainingSection from '../components/InteractiveVideoTrainingSection';
import CaseStudiesWallSection from '../components/CaseStudiesWallSection';
import WhoWeWorkWithSection from '../components/WhoWeWorkWithSection';
import AdvantageFlow from '../components/AdvantageFlow';
import KnockoutAuthorityBannerSection from '../components/KnockoutAuthorityBannerSection';
import VideoTestimonialsWallSection from '../components/VideoTestimonialsWallSection';
import FaqSection from '../components/FaqSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MasteryStatementMetricsSection />
      <CentralPhoneEngineSection />
      <StatsGridSection />
      <StickyProcessCardsSection />
      <BoldFeatureBannerSection />
      <InteractiveVideoTrainingSection />
      <CaseStudiesWallSection />
      <WhoWeWorkWithSection />
      <AdvantageFlow />
      <VideoTestimonialsWallSection />
      <FaqSection />
      <KnockoutAuthorityBannerSection />
    </>
  );
}
