import React, { useState } from 'react';
import { CheckCircle2, Send, Phone, Mail, Clock, Shield } from 'lucide-react';
import { Button } from '../ui/Button';
import { firmConfig } from '../../data/firmConfig';

export interface ConsultationWizardProps {
  initialService?: string;
  onSuccess?: () => void;
  onClose?: () => void;
  isModal?: boolean;
}

export const ConsultationWizard: React.FC<ConsultationWizardProps> = ({ 
  initialService, 
  onSuccess,
  onClose,
  isModal = false 
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: initialService || 'Tax & GST',
    preferredMode: 'Virtual Consultation',
    message: ''
  });

  const servicesList = [
    'Tax & GST',
    'Accounting & Bookkeeping',
    'Audit & Assurance',
    'Business Advisory',
    'Company Formation & Compliance',
    'Virtual CFO',
    'Other Specialized Advisory'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const ref = `ARV-${Math.floor(1000 + Math.random() * 9000)}`;
      setBookingRef(ref);
      setIsSubmitting(false);
      setIsSuccess(true);
      if (onSuccess) onSuccess();
    }, 600);
  };

  if (isSuccess) {
    return (
      <div className="text-center py-6 px-4 space-y-5 animate-in fade-in duration-200">
        <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#B79A61]">
            Request Confirmed
          </span>
          <h3 className="text-2xl font-bold text-[#081A2B] mt-1">
            Thank You, {formData.fullName}
          </h3>
          <p className="text-xs sm:text-sm text-[#66717C] mt-1.5 max-w-sm mx-auto leading-relaxed">
            Your consultation request has been received. Our partner desk will connect with you shortly to confirm the appointment.
          </p>
        </div>

        <div className="bg-[#FAF9F5] rounded-xl p-4 border border-[#E2DDD0] max-w-sm mx-auto text-left text-xs space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-500">Reference:</span>
            <span className="font-mono font-bold text-[#081A2B]">{bookingRef}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Service:</span>
            <span className="font-bold text-[#081A2B]">{formData.service}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Mode:</span>
            <span className="font-bold text-[#081A2B]">{formData.preferredMode}</span>
          </div>
        </div>

        {onClose && (
          <div className="pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`w-full ${isModal ? '' : 'bg-white rounded-2xl shadow-lg border border-[#E2DDD0] p-6 sm:p-8'}`}>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div>
          <label className="block text-xs font-bold text-[#081A2B] mb-1.5">
            Service Required *
          </label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#B79A61] outline-none bg-white font-medium"
          >
            {servicesList.map((svc) => (
              <option key={svc} value={svc}>{svc}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#081A2B] mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Rajesh Kulkarni"
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#B79A61] outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#081A2B] mb-1.5">
              Phone Number *
            </label>
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
            <label className="block text-xs font-bold text-[#081A2B] mb-1.5">
              Email Address *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="rajesh@example.com"
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#B79A61] outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#081A2B] mb-1.5">
              Preferred Mode
            </label>
            <select
              value={formData.preferredMode}
              onChange={(e) => setFormData({ ...formData, preferredMode: e.target.value })}
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#B79A61] outline-none bg-white font-medium"
            >
              <option value="Virtual Consultation">Virtual Video Call</option>
              <option value="Pune Office Meeting">In-Person (Pune Office)</option>
              <option value="Phone Consultation">Phone Discussion</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-[#081A2B] mb-1.5">
            Brief Note / Query (Optional)
          </label>
          <textarea
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Briefly describe your requirements or question..."
            className="w-full p-3 text-xs sm:text-sm rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#B79A61] outline-none leading-relaxed"
          />
        </div>

        <div className="pt-2 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
            <Shield className="w-3.5 h-3.5 text-[#B79A61]" />
            <span>Strict client confidentiality.</span>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="md"
            isLoading={isSubmitting}
            icon={Send}
            className="shadow-sm"
          >
            Submit Request
          </Button>
        </div>

      </form>

    </div>
  );
};
