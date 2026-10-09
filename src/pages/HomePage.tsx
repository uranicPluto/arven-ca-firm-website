import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { TrustMetrics } from '../components/home/TrustMetrics';
import { AboutSection } from '../components/home/AboutSection';
import { ServiceGrid } from '../components/home/ServiceGrid';
import { WhoWeServe } from '../components/home/WhoWeServe';
import { WhyArven } from '../components/home/WhyArven';
import { FounderHighlight } from '../components/home/FounderHighlight';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { InsightsPreview } from '../components/home/InsightsPreview';
import { ConsultationCTA } from '../components/home/ConsultationCTA';
import { SEOHead } from '../components/seo/SEOHead';

interface HomePageProps {
  onOpenConsultation?: (serviceName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenConsultation }) => {
  return (
    <>
      <SEOHead
        title="ARVÉN & CO. | Chartered Accountants & Business Advisors — Pune"
        description="Chartered Accountancy and Business Advisory firm in Pune. Tax, GST, accounting, audit, company formation and virtual CFO services."
      />
      <div className="flex flex-col">
        {/* 1. Hero */}
        <HeroSection onOpenConsultation={() => onOpenConsultation?.()} />
        
        {/* 2. 3-Item Trust Strip */}
        <TrustMetrics />
        
        {/* 3. About Section */}
        <AboutSection />
        
        {/* 4. Services Grid (6 Services) */}
        <ServiceGrid />
        
        {/* 5. Who We Serve (4 Categories) */}
        <WhoWeServe />
        
        {/* 6. Why Choose Us (4 Points) */}
        <WhyArven />
        
        {/* 7. Founder / Leadership */}
        <FounderHighlight />
        
        {/* 8. 3 Testimonials */}
        <TestimonialsSection />
        
        {/* 9. 3 Insights */}
        <InsightsPreview />
        
        {/* 10. Final CTA */}
        <ConsultationCTA onOpenConsultation={() => onOpenConsultation?.()} />
      </div>
    </>
  );
};
