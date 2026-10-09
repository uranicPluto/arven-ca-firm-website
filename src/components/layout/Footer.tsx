import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { firmConfig } from '../../data/firmConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#081A2B] text-white pt-16 pb-24 md:pb-12 border-t border-[#12283e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Positioning */}
          <div className="space-y-4">
            <div>
              <span className="font-display font-extrabold text-2xl tracking-tight text-white">
                ARVÉN <span className="text-[#B79A61] font-serif font-normal">&amp;</span> CO.
              </span>
              <p className="text-xs uppercase tracking-widest text-[#B79A61] font-semibold mt-1">
                Chartered Accountants &amp; Business Advisors
              </p>
            </div>
            
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Helping businesses, founders and professionals manage taxation, accounting, audit and financial decisions with clarity and confidence.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#B79A61]">
              Navigation
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li><Link to="/" className="hover:text-[#B79A61] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#B79A61] transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-[#B79A61] transition-colors">Services</Link></li>
              <li><Link to="/industries" className="hover:text-[#B79A61] transition-colors">Industries</Link></li>
              <li><Link to="/insights" className="hover:text-[#B79A61] transition-colors">Insights</Link></li>
              <li><Link to="/contact" className="hover:text-[#B79A61] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#B79A61]">
              Services
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li><Link to="/services/tax-gst" className="hover:text-[#B79A61] transition-colors">Tax &amp; GST</Link></li>
              <li><Link to="/services/accounting" className="hover:text-[#B79A61] transition-colors">Accounting &amp; Bookkeeping</Link></li>
              <li><Link to="/services/audit" className="hover:text-[#B79A61] transition-colors">Audit &amp; Assurance</Link></li>
              <li><Link to="/services/business-advisory" className="hover:text-[#B79A61] transition-colors">Business Advisory</Link></li>
              <li><Link to="/services/company-formation" className="hover:text-[#B79A61] transition-colors">Company Formation &amp; Compliance</Link></li>
              <li><Link to="/services/virtual-cfo" className="hover:text-[#B79A61] transition-colors">Virtual CFO</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="space-y-3 text-xs sm:text-sm text-gray-300">
            <p className="text-xs font-bold uppercase tracking-widest text-[#B79A61]">
              Contact
            </p>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#B79A61] shrink-0" />
                <a href={`tel:${firmConfig.phone.replace(/\s+/g, '')}`} className="hover:text-[#B79A61]">
                  {firmConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#B79A61] shrink-0" />
                <a href={`mailto:${firmConfig.email}`} className="hover:text-[#B79A61]">
                  {firmConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B79A61] shrink-0 mt-0.5" />
                <span>{firmConfig.address.line1}, {firmConfig.city}, {firmConfig.state}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>
            &copy; {new Date().getFullYear()} {firmConfig.name} All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
