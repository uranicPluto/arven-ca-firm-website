import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { firmConfig } from '../data/firmConfig';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LegalPage: React.FC<{ type?: 'privacy' | 'disclaimer' }> = ({ type = 'disclaimer' }) => {
  const isDisclaimer = type === 'disclaimer';

  return (
    <>
      <SEOHead
        title={isDisclaimer ? "ICAI Compliance & Legal Disclaimer" : "Privacy Policy & Client Data Protection"}
        description="Official disclaimer, Institute of Chartered Accountants of India (ICAI) regulatory guidelines, and privacy policy of Arvén & Co."
      />

      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-[#F7F6F1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#081A2B] hover:text-[#B79A61]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B79A61]">
              REGULATORY NOTICE
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#081A2B] tracking-tight mt-1">
              {isDisclaimer ? "ICAI Regulatory Disclaimer" : "Privacy Policy & Data Protection"}
            </h1>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E2DDD0] shadow-sm space-y-6 text-xs sm:text-sm text-[#3E4752] leading-relaxed">
            
            <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-gray-200 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#B79A61] shrink-0 mt-0.5" />
              <p className="font-semibold text-gray-800">
                Arvén &amp; Co. is a practicing Chartered Accountancy firm registered with the Institute of Chartered Accountants of India (ICAI).
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-bold text-[#081A2B]">1. Non-Solicitation Notice</h3>
              <p>
                In accordance with the Chartered Accountants Act, 1949 and regulations framed by the Institute of Chartered Accountants of India (ICAI), this website is created solely for the purpose of providing general information regarding the firm and its practice capabilities. It does not constitute an advertisement, solicitation, personal communication or inducement of any sort to solicit work.
              </p>

              <h3 className="text-base font-bold text-[#081A2B] pt-2">2. No Professional-Client Relationship</h3>
              <p>
                Accessing this website or contacting the firm does not automatically establish an accountant-client relationship. Formal engagements are initiated through an engagement letter specifying scope, terms, and applicable professional standards.
              </p>

              <h3 className="text-base font-bold text-[#081A2B] pt-2">3. Confidentiality</h3>
              <p>
                All information and documents shared with our practice are held in strict professional confidence in accordance with the ICAI Code of Ethics and applicable statutory provisions.
              </p>

              <h3 className="text-base font-bold text-[#081A2B] pt-2">4. Jurisdiction</h3>
              <p>
                Any dispute arising in connection with this website shall be subject to the exclusive jurisdiction of the competent courts in Pune, Maharashtra, India.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
              <span>{firmConfig.legalTitle}</span>
              <span>Pune, Maharashtra</span>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};
