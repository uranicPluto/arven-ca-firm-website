import React from 'react';
import { ConsultationWizard } from '../components/consultation/ConsultationWizard';
import { SEOHead } from '../components/seo/SEOHead';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, MessageSquare } from 'lucide-react';
import { firmConfig } from '../data/firmConfig';

export const ConsultationPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Book a Consultation | Arvén & Co. Chartered Accountants"
        description="Schedule a consultation with a Chartered Accountant at Arvén & Co. in Pune. Tax, GST, accounting, audit, and business advisory support."
      />

      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-[#F7F6F1]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#081A2B] hover:text-[#B79A61]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B79A61]">
              APPOINTMENT DESK
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#081A2B] tracking-tight mt-1">
              Book a Consultation
            </h1>
            <p className="text-sm sm:text-base text-[#66717C] mt-2 leading-relaxed">
              Schedule a confidential discussion with our partners to discuss your accounting, tax, or business advisory requirements.
            </p>
          </div>

          {/* Consultation Form */}
          <ConsultationWizard />

          {/* Direct Phone / WhatsApp Alternative */}
          <div className="bg-white rounded-2xl p-6 border border-[#E2DDD0] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div>
              <p className="font-bold text-[#081A2B]">Prefer speaking immediately?</p>
              <p className="text-gray-500">Call our desk at <a href={`tel:${firmConfig.phone.replace(/\s+/g, '')}`} className="font-semibold text-[#081A2B] underline">{firmConfig.phone}</a></p>
            </div>

            <a
              href={`https://wa.me/${firmConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-emerald-700 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-200 hover:bg-emerald-100 transition-colors shrink-0"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>

        </div>
      </section>
    </>
  );
};
