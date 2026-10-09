import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { testimonialsData } from '../../data/testimonialsData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white border-y border-[#E2DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="CLIENT EXPERIENCES"
          title="What Our Clients Say"
          subtitle="Feedback from business owners and leadership teams who rely on our practice."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF9F5] rounded-2xl p-8 border border-[#E2DDD0] flex flex-col justify-between space-y-6"
            >
              <p className="text-sm sm:text-base text-[#3E4752] leading-relaxed italic font-editorial">
                "{item.quote}"
              </p>

              <div className="pt-4 border-t border-gray-200">
                <p className="font-bold text-[#081A2B] text-sm">
                  {item.author}
                </p>
                <p className="text-xs text-[#66717C] mt-0.5">
                  {item.designation} &bull; {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
