import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { firmConfig } from '../../data/firmConfig';

interface ConsultationCTAProps {
  onOpenConsultation?: () => void;
}

export const ConsultationCTA: React.FC<ConsultationCTAProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-20 md:py-24 bg-[#081A2B] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Need help with your finances?
        </h2>

        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Whether you need help with taxation, accounting, audit or business advisory, let's start with a conversation.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="gold"
            size="lg"
            onClick={onOpenConsultation}
            icon={ArrowRight}
            className="w-full sm:w-auto shadow-md"
          >
            Book a Consultation
          </Button>

          <a
            href={`tel:${firmConfig.phone.replace(/\s+/g, '')}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors text-sm font-bold w-full sm:w-auto"
          >
            <Phone className="w-4 h-4 text-[#B79A61]" />
            <span>Call {firmConfig.phone}</span>
          </a>
        </div>

        <p className="text-xs text-gray-400 pt-2">
          {firmConfig.address.line1}, {firmConfig.city}
        </p>

      </div>
    </section>
  );
};
