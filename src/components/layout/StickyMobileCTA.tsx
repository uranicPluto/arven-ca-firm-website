import React from 'react';
import { Phone, MessageSquare, CalendarCheck } from 'lucide-react';
import { firmConfig } from '../../data/firmConfig';
import { useNavigate } from 'react-router-dom';

interface StickyMobileCTAProps {
  onOpenConsultation?: () => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onOpenConsultation }) => {
  const navigate = useNavigate();

  const handleConsultClick = () => {
    if (onOpenConsultation) {
      onOpenConsultation();
    } else {
      navigate('/consultation');
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Arvén & Co., I would like to enquire about Chartered Accountancy and Advisory services.`
  );

  return (
    <aside aria-label="Quick Contact Actions" className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#081A2B]/95 backdrop-blur-md border-t border-[#B79A61]/30 px-3 py-2 shadow-2xl safe-bottom">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2 text-center">
        
        {/* Call */}
        <a
          href={`tel:${firmConfig.phone.replace(/\s+/g, '')}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white/10 active:bg-white/20 text-white transition-colors"
        >
          <Phone className="w-4 h-4 text-[#B79A61] mb-0.5" />
          <span className="text-[11px] font-bold tracking-wide uppercase">Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${firmConfig.whatsapp}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600/25 active:bg-emerald-600/40 text-emerald-400 border border-emerald-500/30 transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span className="text-[11px] font-bold tracking-wide uppercase">WhatsApp</span>
        </a>

        {/* Consult */}
        <button
          type="button"
          onClick={handleConsultClick}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#B79A61] active:bg-[#c4a973] text-[#081A2B] font-bold shadow-md transition-all cursor-pointer"
        >
          <CalendarCheck className="w-4 h-4 text-[#081A2B] mb-0.5" />
          <span className="text-[11px] font-bold tracking-wide uppercase">Consult</span>
        </button>

      </div>
    </aside>
  );
};
