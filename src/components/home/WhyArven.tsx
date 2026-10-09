import React from 'react';
import { Award, CheckCircle2, MessageSquare, HeartHandshake } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

export const WhyArven: React.FC = () => {
  const points = [
    {
      title: 'Experience',
      desc: 'Years of practical experience across taxation, accounting and business matters.',
      icon: Award
    },
    {
      title: 'Accuracy',
      desc: 'Careful, disciplined work across financial and compliance requirements.',
      icon: CheckCircle2
    },
    {
      title: 'Clear Communication',
      desc: 'Complex financial matters explained in straightforward language.',
      icon: MessageSquare
    },
    {
      title: 'Personal Attention',
      desc: 'A responsive professional relationship rather than a transactional service.',
      icon: HeartHandshake
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-y border-[#E2DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="OUR COMMITMENT"
          title="Why Clients Choose Us"
          subtitle="A dependable Chartered Accountancy firm built on financial discipline, clear communication, and enduring client relationships."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((pt) => {
            const Icon = pt.icon;
            return (
              <div
                key={pt.title}
                className="p-6 rounded-2xl bg-[#FAF9F5] border border-gray-200/80 flex flex-col space-y-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-[#081A2B] text-[#B79A61] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-bold text-[#081A2B]">
                  {pt.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#66717C] leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
