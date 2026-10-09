import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F7F6F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E2DDD0] bg-white aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200"
                alt="Financial consultation and advisory at Arvén & Co."
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Editorial Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B79A61]">
                ABOUT ARVÉN &amp; CO.
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#081A2B] tracking-tight leading-tight">
              More than compliance. <br />
              <span className="font-serif italic font-normal text-[#B79A61]">
                A financial partner for your business.
              </span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#66717C] leading-relaxed font-normal">
              <p>
                Arvén &amp; Co. is a Chartered Accountancy firm helping businesses, founders and professionals manage taxation, accounting, audit and financial decisions with clarity and confidence.
              </p>
              <p>
                We combine technical expertise with practical business understanding, giving our clients a dependable partner for both day-to-day compliance and important financial decisions.
              </p>
            </div>

            <div className="pt-2">
              <Link to="/about">
                <Button
                  variant="primary"
                  size="md"
                  icon={ArrowRight}
                  className="shadow-sm"
                >
                  Learn About Us
                </Button>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
