import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '../ui/Button';
import { firmConfig } from '../../data/firmConfig';
import { clsx } from 'clsx';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleBookClick = () => {
    if (onOpenConsultation) {
      onOpenConsultation();
    } else {
      navigate('/consultation');
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={clsx(
      "fixed top-0 left-0 right-0 z-40 transition-all duration-200",
      isScrolled 
        ? "bg-[#F7F6F1]/95 backdrop-blur-md border-b border-[#E2DDD0] py-3.5 shadow-sm" 
        : "bg-[#F7F6F1] border-b border-[#E2DDD0]/60 py-4"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="group flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-[#081A2B]">
                ARVÉN <span className="text-[#B79A61] font-serif font-normal">&amp;</span> CO.
              </span>
            </div>
            <span className="text-[9px] sm:text-[10px] tracking-wider uppercase font-semibold text-[#66717C] -mt-0.5">
              Chartered Accountants &amp; Business Advisors
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-medium text-[#121820]">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={clsx(
                  "px-3.5 py-2 rounded-lg transition-colors text-sm",
                  location.pathname === link.path 
                    ? "text-[#081A2B] font-bold bg-[#081A2B]/5" 
                    : "text-[#3E4752] hover:text-[#081A2B] hover:bg-[#081A2B]/5"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href={`tel:${firmConfig.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 text-xs font-bold text-[#081A2B] px-3 py-2 rounded-lg hover:text-[#B79A61] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#B79A61]" />
              <span>{firmConfig.phone}</span>
            </a>
            
            <Button
              variant="primary"
              size="sm"
              onClick={handleBookClick}
              className="shadow-sm"
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              variant="primary"
              size="sm"
              onClick={handleBookClick}
              className="text-xs px-3 py-1.5"
            >
              Consult
            </Button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-[#081A2B] hover:bg-gray-200/60 focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[64px] bg-[#081A2B] text-white z-50 overflow-y-auto p-6 flex flex-col justify-between animate-in fade-in duration-150">
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B79A61]">Menu</span>
            </div>
            
            <div className="flex flex-col space-y-4 text-lg font-medium">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={clsx(
                    "transition-colors",
                    location.pathname === link.path ? "text-[#B79A61] font-bold" : "text-gray-200 hover:text-[#B79A61]"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 space-y-4">
            <Button
              variant="gold"
              size="lg"
              onClick={handleBookClick}
              className="w-full justify-center text-sm"
            >
              Book a Consultation
            </Button>
            <div className="flex items-center justify-between text-xs text-gray-300 pt-1">
              <span>{firmConfig.city}, {firmConfig.state}</span>
              <a href={`tel:${firmConfig.phone.replace(/\s+/g, '')}`} className="text-[#B79A61] font-bold">
                {firmConfig.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
