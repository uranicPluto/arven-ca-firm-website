import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { teamData } from '../data/teamData';
import { firmConfig } from '../data/firmConfig';
import { SEOHead } from '../components/seo/SEOHead';
import { ConsultationCTA } from '../components/home/ConsultationCTA';
import { MapPin, Mail, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const AboutPage: React.FC<{ onOpenConsultation?: () => void }> = ({ onOpenConsultation }) => {
  return (
    <>
      <SEOHead
        title="About Our Firm & Practice"
        description="Learn about Arvén & Co. Chartered Accountants, our 18+ years of experience in Pune, leadership credentials, and client-first advisory philosophy."
      />

      {/* Hero Banner */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#081A2B] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B79A61]">
              ESTABLISHED IN PUNE, MAHARASHTRA
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              About Arvén &amp; Co.
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal pt-1">
              A dependable Chartered Accountancy firm helping businesses, founders and professionals manage taxation, accounting, audit and financial decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28 bg-[#F7F6F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B79A61]">
                OUR PRACTICE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#081A2B] tracking-tight leading-tight">
                Technical expertise with practical business understanding.
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base text-[#66717C] leading-relaxed">
                <p>
                  Founded in Pune, Arvén &amp; Co. was established to provide clear, dependable financial and compliance services to growing enterprises and professionals.
                </p>
                <p>
                  We understand that tax laws and accounting standards can feel overwhelming. Our role is to provide steady, accurate guidance—giving you confidence in your numbers and peace of mind regarding your statutory obligations.
                </p>
                <p>
                  Over the past 18+ years, we have served more than 500 businesses across diverse sectors, maintaining long-standing professional relationships built on trust, integrity, and personal attention.
                </p>
              </div>

              <div className="pt-2">
                <Button
                  variant="primary"
                  size="md"
                  onClick={onOpenConsultation}
                  icon={ArrowRight}
                >
                  Book a Consultation
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-md border border-[#E2DDD0] bg-white aspect-[4/3] sm:aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                  alt="Arvén & Co. Office"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 md:py-28 bg-white border-y border-[#E2DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            eyebrow="LEADERSHIP"
            title="Partners &amp; Practice Leaders"
            subtitle="Experienced Chartered Accountants with deep specialization in direct tax, GST, audit, and financial advisory."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamData.map((member) => (
              <div
                key={member.id}
                className="bg-[#FAF9F5] rounded-2xl border border-gray-200 overflow-hidden flex flex-col sm:flex-row shadow-sm"
              >
                <div className="sm:w-2/5 min-h-[220px] bg-[#081A2B]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="sm:w-3/5 p-6 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B79A61]">
                      {member.experience}
                    </span>
                    <h3 className="text-xl font-bold text-[#081A2B] mt-0.5">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#66717C]">
                      {member.designation}
                    </p>
                    <p className="text-[11px] font-mono text-gray-500 mt-0.5">
                      {member.credentials}
                    </p>

                    <p className="text-xs text-[#3E4752] leading-relaxed mt-3">
                      {member.bio}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-200">
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#081A2B] hover:text-[#B79A61]"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#B79A61]" />
                      <span>{member.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Pune Locations */}
      <section className="py-20 md:py-28 bg-[#FAF9F5] border-b border-[#E2DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            eyebrow="LOCATIONS"
            title="Our Offices in Pune"
            subtitle="Conveniently located to serve businesses across Pune and western Maharashtra."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {firmConfig.branches.map((b) => (
              <div
                key={b.area}
                className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#081A2B] text-[#B79A61] flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B79A61]">
                    {b.type}
                  </span>
                  <h3 className="text-lg font-bold text-[#081A2B] mt-0.5">
                    {b.area}
                  </h3>
                  <p className="text-xs text-[#66717C] leading-relaxed mt-1.5">
                    {b.address}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <ConsultationCTA onOpenConsultation={onOpenConsultation} />
    </>
  );
};
