import React, { useState } from 'react';
import { MessageSquare, X, Send, Shield, Clock } from 'lucide-react';
import { firmConfig } from '../../data/firmConfig';

export const WhatsAppFloat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('General Consultation');
  const [customMessage, setCustomMessage] = useState(
    'Hello Arvén & Co., I would like to enquire about Chartered Accountancy and financial advisory services for my business.'
  );

  const topics = [
    {
      label: 'Tax & GST',
      text: 'Hello Arvén & Co., I would like to enquire about Income Tax and GST advisory services.'
    },
    {
      label: 'Accounting & Bookkeeping',
      text: 'Hello Arvén & Co., I would like to enquire about monthly accounting and financial reporting services.'
    },
    {
      label: 'Company Formation',
      text: 'Hello Arvén & Co., I would like to discuss new company incorporation (Pvt Ltd / LLP) and registrations.'
    },
    {
      label: 'General Advisory',
      text: 'Hello Arvén & Co., I would like to schedule a consultation with a Chartered Accountant.'
    }
  ];

  const handleSelectTopic = (topic: typeof topics[0]) => {
    setSelectedTopic(topic.label);
    setCustomMessage(topic.text);
  };

  const handleStartChat = () => {
    const cleanNumber = firmConfig.whatsapp.replace(/[^0-9]/g, '');
    const encoded = encodeURIComponent(customMessage);
    const url = `https://wa.me/${cleanNumber}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-20 lg:bottom-6 right-6 z-40">
      
      {/* Expanded WhatsApp Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-[#E2DDD0] overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          {/* Header */}
          <div className="bg-[#081A2B] p-4 text-white flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  ARVÉN &amp; CO.
                </h4>
                <p className="text-[11px] text-[#B79A61] font-semibold">
                  WhatsApp Advisory Desk
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 bg-[#FAF9F5] text-xs">
            
            {/* Status note */}
            <div className="flex items-center gap-1.5 text-[11px] text-gray-500 bg-white p-2 rounded-lg border border-gray-200">
              <Clock className="w-3.5 h-3.5 text-[#B79A61] shrink-0" />
              <span>Typically replies during office hours (Mon–Sat, 10 AM – 7 PM IST)</span>
            </div>

            {/* Quick Topics */}
            <div>
              <p className="text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Select Practice Area:
              </p>
              <div className="grid grid-cols-2 gap-1.5">
                {topics.map((t) => (
                  <button
                    key={t.label}
                    type="button"
                    onClick={() => handleSelectTopic(t)}
                    className={`p-2 rounded-lg text-left text-[11px] font-medium border transition-all cursor-pointer ${
                      selectedTopic === t.label
                        ? 'bg-[#081A2B] text-white border-[#081A2B]'
                        : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Message Area */}
            <div>
              <p className="text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                Your Message:
              </p>
              <textarea
                rows={3}
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                className="w-full p-2.5 rounded-lg border border-gray-300 text-xs focus:ring-2 focus:ring-[#B79A61] outline-none bg-white leading-relaxed"
              />
            </div>

            {/* Action Button */}
            <button
              type="button"
              onClick={handleStartChat}
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Start Chat on WhatsApp</span>
            </button>

            {/* Confidentiality Footer */}
            <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-400 pt-1">
              <Shield className="w-3 h-3 text-[#B79A61]" />
              <span>Confidential &amp; direct communication with our partners</span>
            </div>

          </div>

        </div>
      )}

      {/* Floating Button Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="hidden lg:flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl hover:shadow-2xl transition-all duration-200 group cursor-pointer border-2 border-white"
        aria-label="Chat with our advisory desk on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="text-xs font-bold tracking-wide">
          WhatsApp Us
        </span>
      </button>

    </div>
  );
};
