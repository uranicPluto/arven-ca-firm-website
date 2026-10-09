import React from 'react';
import { 
  Code, 
  Factory, 
  Building2, 
  ShoppingBag, 
  Briefcase, 
  Rocket, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { ConsultationCTA } from '../components/home/ConsultationCTA';
import { Button } from '../components/ui/Button';
import { industriesData } from '../data/industriesData';

const iconMap: Record<string, React.ElementType> = {
  Code,
  Factory,
  Building2,
  ShoppingBag,
  Briefcase,
  Rocket
};

export const IndustriesPage: React.FC<{ onOpenConsultation?: () => void }> = ({ onOpenConsultation }) => {
  return (
    <>
      <SEOHead
        title="Industries We Serve | Arvén & Co."
        description="Sector-focused Chartered Accountancy and advisory solutions across Technology, Manufacturing, Real Estate, Retail, Professional Services, and Startups in Pune."
      />

      {/* Hero Banner */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#081A2B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B79A61]">
              SECTOR EXPERTISE
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Industries We Serve
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal pt-1">
              Tailored accounting, taxation and advisory frameworks designed for your industry's operating model.
            </p>
          </div>
        </div>
      </section>

      {/* Industry List */}
      <section className="py-20 md:py-28 bg-[#F7F6F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesData.map((ind) => {
              const Icon = iconMap[ind.iconName] || Briefcase;
              return (
                <div
                  key={ind.id}
                  className="bg-white rounded-2xl p-8 border border-[#E2DDD0] shadow-sm flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[#081A2B] text-[#B79A61] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h2 className="text-xl font-bold text-[#081A2B]">
                      {ind.name}
                    </h2>

                    <p className="text-xs sm:text-sm text-[#66717C] leading-relaxed">
                      {ind.description}
                    </p>

                    <div className="pt-2 space-y-2 border-t border-gray-100">
                      <p className="text-xs font-bold text-gray-700">Key Support Areas:</p>
                      <ul className="space-y-1.5 text-xs text-[#3E4752]">
                        {ind.specializedSolutions.map((sol) => (
                          <li key={sol} className="flex items-start gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-[#B79A61] shrink-0 mt-1.5" />
                            <span>{sol}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={onOpenConsultation}
                      className="w-full justify-center text-xs"
                    >
                      Consult for {ind.name}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <ConsultationCTA onOpenConsultation={onOpenConsultation} />
    </>
  );
};
