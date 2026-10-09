import React from 'react';
import { Mail, ShieldCheck } from 'lucide-react';
import { teamData } from '../../data/teamData';

export const FounderHighlight: React.FC = () => {
  const founder = teamData[0];

  return (
    <section className="py-20 md:py-28 bg-[#F7F6F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#E2DDD0] shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-12 items-center">
          
          {/* Portrait Photo (5 cols) */}
          <div className="md:col-span-5 h-full min-h-[320px] bg-[#081A2B] relative">
            <img
              src={founder.image}
              alt={founder.name}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Details (7 cols) */}
          <div className="md:col-span-7 p-8 sm:p-10 space-y-5">
            
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B79A61]">
                LEADERSHIP &amp; PRACTICE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#081A2B] tracking-tight mt-1">
                Meet Your Financial Partner
              </h2>
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-bold text-[#081A2B]">
                {founder.name}
              </h3>
              <p className="text-xs font-semibold text-[#B79A61]">
                {founder.designation}
              </p>
              <p className="text-xs font-mono text-gray-500">
                {founder.credentials} &bull; {founder.experience}
              </p>
            </div>

            <p className="text-sm text-[#3E4752] leading-relaxed italic border-l-2 border-[#B79A61] pl-3.5">
              "{founder.bio}"
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              {founder.specializations.map((spec) => (
                <span
                  key={spec}
                  className="text-xs px-3 py-1 rounded-full bg-[#FAF9F5] text-gray-700 border border-gray-200 font-medium"
                >
                  {spec}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <a
                href={`mailto:${founder.email}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#081A2B] hover:text-[#B79A61] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#B79A61]" />
                <span>{founder.email}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
