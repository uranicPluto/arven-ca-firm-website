import React from 'react';
import { Building2, Rocket, Briefcase, User } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

export const WhoWeServe: React.FC = () => {
  const categories = [
    {
      title: 'Businesses',
      desc: 'Accounting, tax, audit and advisory support.',
      icon: Building2
    },
    {
      title: 'Startups',
      desc: 'Financial foundations, compliance and growth support.',
      icon: Rocket
    },
    {
      title: 'Professionals',
      desc: 'Tax planning, filing and personal financial compliance.',
      icon: Briefcase
    },
    {
      title: 'Individuals',
      desc: 'Tax, documentation and financial advisory.',
      icon: User
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F7F6F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="CLIENT FOCUS"
          title="Who We Work With"
          subtitle="Tailored accounting and advisory support across different stages of business and professional life."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="bg-white rounded-2xl p-7 border border-[#E2DDD0] shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FAF9F5] text-[#081A2B] flex items-center justify-center border border-gray-200">
                  <Icon className="w-5 h-5 text-[#B79A61]" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#081A2B]">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#66717C] leading-relaxed mt-2">
                    {cat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
