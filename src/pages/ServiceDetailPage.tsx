import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { SEOHead } from '../components/seo/SEOHead';
import { ConsultationCTA } from '../components/home/ConsultationCTA';
import { Button } from '../components/ui/Button';
import { 
  ArrowLeft, 
  CheckCircle2, 
  HelpCircle,
  Receipt,
  BarChart3,
  ShieldCheck,
  Compass,
  Building,
  LayoutDashboard
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Receipt,
  BarChart3,
  ShieldCheck,
  Compass,
  Building,
  LayoutDashboard
};

export const ServiceDetailPage: React.FC<{ onOpenConsultation?: (serviceName?: string) => void }> = ({ onOpenConsultation }) => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = iconMap[service.iconName] || Receipt;

  return (
    <>
      <SEOHead
        title={`${service.title} | Arvén & Co.`}
        description={service.shortDesc}
      />

      {/* Hero Banner */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#081A2B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-[#B79A61] mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Services</span>
          </Link>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B79A61]">
              {service.categoryPillar}
            </span>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              {service.tagline}
            </p>

            <div className="pt-3">
              <Button
                variant="gold"
                size="md"
                onClick={() => onOpenConsultation?.(service.title)}
              >
                Discuss Your Requirements
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28 bg-[#F7F6F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Overview */}
              <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#E2DDD0] shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-[#081A2B]">
                  Overview
                </h2>
                <p className="text-sm sm:text-base text-[#66717C] leading-relaxed">
                  {service.overview}
                </p>
              </div>

              {/* Key Coverage Areas */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#081A2B]">
                  What We Cover
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.items.map((item) => (
                    <div
                      key={item.title}
                      className="bg-white rounded-2xl p-6 border border-[#E2DDD0] shadow-sm space-y-2.5"
                    >
                      <h3 className="text-base font-bold text-[#081A2B]">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#66717C] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Approach (4 simple steps) */}
              <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#E2DDD0] shadow-sm space-y-6">
                <h2 className="text-2xl font-bold text-[#081A2B]">
                  How We Work
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.ourApproach.map((step) => (
                    <div key={step.step} className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-[#FAF9F5] text-[#B79A61] border border-gray-200 flex items-center justify-center text-xs font-bold shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#081A2B]">
                          {step.title}
                        </h4>
                        <p className="text-xs text-[#66717C] mt-0.5 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              {service.faqs && service.faqs.length > 0 && (
                <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#E2DDD0] shadow-sm space-y-6">
                  <h2 className="text-2xl font-bold text-[#081A2B]">
                    Frequently Asked Questions
                  </h2>

                  <div className="space-y-4">
                    {service.faqs.map((faq) => (
                      <div key={faq.question} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0 space-y-1.5">
                        <h4 className="text-sm font-bold text-[#081A2B]">
                          {faq.question}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#66717C] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Who It's For Card */}
              <div className="bg-white rounded-2xl p-7 border border-[#E2DDD0] shadow-sm space-y-4">
                <h3 className="text-base font-bold text-[#081A2B]">
                  Who This Is For
                </h3>
                <ul className="space-y-2.5 text-xs text-[#3E4752]">
                  {service.whoIsItFor.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#B79A61] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables Card */}
              <div className="bg-white rounded-2xl p-7 border border-[#E2DDD0] shadow-sm space-y-4">
                <h3 className="text-base font-bold text-[#081A2B]">
                  Key Deliverables
                </h3>
                <ul className="space-y-2 text-xs text-[#66717C]">
                  {service.deliverablesList.map((del) => (
                    <li key={del} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#081A2B] shrink-0 mt-1.5" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Contact Box */}
              <div className="bg-[#081A2B] text-white rounded-2xl p-7 space-y-4">
                <h3 className="text-lg font-bold text-white">
                  Need assistance with {service.title}?
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Connect with our senior team in Pune for a confidential discussion.
                </p>
                <Button
                  variant="gold"
                  size="sm"
                  onClick={() => onOpenConsultation?.(service.title)}
                  className="w-full justify-center"
                >
                  Book a Consultation
                </Button>
              </div>

            </div>

          </div>
        </div>
      </section>

      <ConsultationCTA onOpenConsultation={() => onOpenConsultation?.()} />
    </>
  );
};
