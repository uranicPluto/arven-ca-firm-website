import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Receipt, 
  BarChart3, 
  ShieldCheck, 
  Compass, 
  Building, 
  LayoutDashboard, 
  ArrowRight 
} from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { ConsultationCTA } from '../components/home/ConsultationCTA';
import { servicesData } from '../data/servicesData';

const iconMap: Record<string, React.ElementType> = {
  Receipt,
  BarChart3,
  ShieldCheck,
  Compass,
  Building,
  LayoutDashboard
};

export const ServicesPage: React.FC<{ onOpenConsultation?: (serviceName?: string) => void }> = ({ onOpenConsultation }) => {
  return (
    <>
      <SEOHead
        title="Our Services & Practice Areas"
        description="Comprehensive Chartered Accountancy services: Tax & GST, Accounting & Bookkeeping, Audit & Assurance, Business Advisory, Company Formation, and Virtual CFO."
      />

      {/* Hero Banner */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#081A2B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B79A61]">
              PRACTICE AREAS
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Our Services
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal pt-1">
              Professional accounting, taxation and advisory services built around your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-[#F7F6F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((svc) => {
              const Icon = iconMap[svc.iconName] || Receipt;
              return (
                <div
                  key={svc.slug}
                  className="bg-white rounded-2xl p-8 border border-[#E2DDD0] shadow-sm flex flex-col justify-between hover:border-[#B79A61]/60 transition-all group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[#081A2B] text-[#B79A61] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h2 className="text-xl font-bold text-[#081A2B] tracking-tight group-hover:text-[#B79A61] transition-colors">
                      {svc.title}
                    </h2>

                    <p className="text-sm text-[#66717C] leading-relaxed">
                      {svc.shortDesc}
                    </p>

                    <div className="pt-2 space-y-1.5 border-t border-gray-100">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Key Areas:</p>
                      {svc.items.map((item) => (
                        <p key={item.title} className="text-xs text-[#3E4752] flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-[#B79A61]" />
                          <span>{item.title}</span>
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      to={`/services/${svc.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#081A2B] group-hover:text-[#B79A61] transition-colors"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      type="button"
                      onClick={() => onOpenConsultation?.(svc.title)}
                      className="text-xs font-semibold text-gray-400 hover:text-[#081A2B] cursor-pointer"
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <ConsultationCTA onOpenConsultation={() => onOpenConsultation?.()} />
    </>
  );
};
