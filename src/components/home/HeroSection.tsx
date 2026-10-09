import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  onOpenConsultation?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#F7F6F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B79A61]">
                CHARTERED ACCOUNTANTS &amp; BUSINESS ADVISORS
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#081A2B] tracking-tight leading-[1.12]">
              Clarity for Your Numbers. <br />
              <span className="font-serif italic font-normal text-[#B79A61]">
                Confidence for Your Decisions.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#66717C] leading-relaxed max-w-2xl font-normal">
              Tax, accounting, audit and business advisory for businesses, founders and professionals.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenConsultation}
                icon={ArrowRight}
                className="shadow-sm"
              >
                Book a Consultation
              </Button>

              <Link to="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Explore Services
                </Button>
              </Link>
            </div>

            {/* Small Trust Line */}
            <div className="pt-3">
              <p className="text-xs text-[#8A95A0] font-medium">
                Serving businesses and individuals across Pune.
              </p>
            </div>

          </div>

          {/* Right Column: ONE Premium Professional Photograph (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E2DDD0] bg-white aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=1200"
                alt="Chartered Accountant and Financial Advisor in modern office"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
