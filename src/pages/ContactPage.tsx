import React, { useState } from 'react';
import { firmConfig } from '../data/firmConfig';
import { SEOHead } from '../components/seo/SEOHead';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const ContactPage: React.FC<{ onOpenConsultation?: () => void }> = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Tax & GST',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Arvén & Co., I would like to enquire regarding chartered accountancy services.`
  );

  return (
    <>
      <SEOHead
        title="Contact Our Pune Offices & Advisory Desks"
        description="Connect with Arvén & Co. Chartered Accountants in Pune. Offices on Senapati Bapat Road, Baner, and Kharadi. Call +91 90000 00000 or submit an enquiry."
      />

      {/* Hero Banner */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#081A2B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B79A61]">
              PUNE OFFICES &amp; CONTACT
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal pt-1">
              Connect with our advisory desk in Pune or book a confidential discussion.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid Section */}
      <section className="py-20 md:py-28 bg-[#F7F6F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Direct Details & Branches (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Direct Details Box */}
              <div className="bg-white rounded-2xl p-8 border border-[#E2DDD0] shadow-sm space-y-6">
                <h2 className="text-xl font-bold text-[#081A2B]">
                  Direct Contact Channels
                </h2>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-[#FAF9F5] text-[#B79A61] border border-gray-200 shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-gray-500 font-medium">Phone</p>
                      <a href={`tel:${firmConfig.phone.replace(/\s+/g, '')}`} className="font-bold text-[#081A2B] hover:text-[#B79A61] text-base block mt-0.5">
                        {firmConfig.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-[#FAF9F5] text-[#B79A61] border border-gray-200 shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-gray-500 font-medium">Email</p>
                      <a href={`mailto:${firmConfig.email}`} className="font-bold text-[#081A2B] hover:text-[#B79A61] text-sm block mt-0.5">
                        {firmConfig.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-[#FAF9F5] text-[#B79A61] border border-gray-200 shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-gray-500 font-medium">Head Office</p>
                      <p className="font-bold text-[#081A2B] text-xs sm:text-sm mt-0.5">
                        {firmConfig.address.line1}, {firmConfig.city}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/${firmConfig.whatsapp}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-50 text-emerald-800 font-bold border border-emerald-200 hover:bg-emerald-100 transition-colors text-xs"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </div>

              {/* Pune Branches List */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#B79A61]">
                  Our Pune Locations
                </h3>

                <div className="space-y-3">
                  {firmConfig.branches.map((b) => (
                    <div key={b.area} className="p-4 rounded-xl bg-white border border-[#E2DDD0] text-xs space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-[#081A2B]">{b.area}</span>
                        <span className="text-[10px] text-[#8A6F36] bg-[#FAF9F5] px-2 py-0.5 rounded border border-gray-200 font-semibold">{b.type}</span>
                      </div>
                      <p className="text-gray-500 text-[11px] leading-relaxed">{b.address}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Enquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#E2DDD0] shadow-sm space-y-6">
                
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#B79A61]">
                    GET IN TOUCH
                  </span>
                  <h2 className="text-2xl font-bold text-[#081A2B] mt-1">
                    Send Us an Enquiry
                  </h2>
                  <p className="text-xs sm:text-sm text-[#66717C] mt-1">
                    Fill in your details below and our team will get back to you promptly.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="py-12 text-center space-y-4 animate-in fade-in duration-200">
                    <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-[#081A2B]">Enquiry Received</h3>
                    <p className="text-xs sm:text-sm text-[#66717C] max-w-sm mx-auto">
                      Thank you for contacting Arvén &amp; Co., {formData.name}. We will review your message and reach out shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-bold text-[#B79A61] hover:underline pt-2 cursor-pointer"
                    >
                      Send Another Message &rarr;
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Vikram Joshi"
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#B79A61] outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98000 00000"
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#B79A61] outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="vikram@enterprise.com"
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#B79A61] outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5">Service Area</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#B79A61] outline-none bg-white font-medium"
                        >
                          <option value="Tax & GST">Tax &amp; GST</option>
                          <option value="Accounting & Bookkeeping">Accounting &amp; Bookkeeping</option>
                          <option value="Audit & Assurance">Audit &amp; Assurance</option>
                          <option value="Business Advisory">Business Advisory</option>
                          <option value="Company Formation & Compliance">Company Formation &amp; Compliance</option>
                          <option value="Virtual CFO">Virtual CFO</option>
                          <option value="Other">Other Enquiry</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">Message / Requirement Context</label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Briefly describe your requirements or questions..."
                        className="w-full p-3.5 text-xs sm:text-sm rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#B79A61] outline-none leading-relaxed"
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        size="md"
                        icon={Send}
                        className="w-full sm:w-auto shadow-sm"
                      >
                        Submit Enquiry
                      </Button>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
