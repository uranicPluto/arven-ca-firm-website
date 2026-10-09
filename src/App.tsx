import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { StickyMobileCTA } from './components/layout/StickyMobileCTA';
import { WhatsAppFloat } from './components/layout/WhatsAppFloat';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { Modal } from './components/ui/Modal';
import { ConsultationWizard } from './components/consultation/ConsultationWizard';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { InsightsPage } from './pages/InsightsPage';
import { InsightDetailPage } from './pages/InsightDetailPage';
import { ContactPage } from './pages/ContactPage';
import { ConsultationPage } from './pages/ConsultationPage';
import { LegalPage } from './pages/LegalPage';

export function App() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsConsultationModalOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationModalOpen(false);
    setSelectedService(undefined);
  };

  return (
    <div className="min-h-screen bg-[#F7F6F1] text-[#121820] flex flex-col font-sans selection:bg-[#B79A61]/30 selection:text-[#081A2B]">
      <ScrollToTop />
      
      {/* Global Navigation Header */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<HomePage onOpenConsultation={handleOpenConsultation} />} />
          <Route path="/about" element={<AboutPage onOpenConsultation={() => handleOpenConsultation()} />} />
          <Route path="/services" element={<ServicesPage onOpenConsultation={handleOpenConsultation} />} />
          <Route path="/services/:slug" element={<ServiceDetailPage onOpenConsultation={handleOpenConsultation} />} />
          <Route path="/industries" element={<IndustriesPage onOpenConsultation={() => handleOpenConsultation()} />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/:slug" element={<InsightDetailPage onOpenConsultation={handleOpenConsultation} />} />
          <Route path="/contact" element={<ContactPage onOpenConsultation={handleOpenConsultation} />} />
          <Route path="/consultation" element={<ConsultationPage />} />
          <Route path="/privacy-policy" element={<LegalPage type="privacy" />} />
          <Route path="/disclaimer" element={<LegalPage type="disclaimer" />} />
          <Route path="*" element={<HomePage onOpenConsultation={handleOpenConsultation} />} />
        </Routes>
      </main>

      {/* Simplified Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Widget (Desktop / Tablet) */}
      <WhatsAppFloat />

      {/* Clean Sticky Mobile CTA Dock (Phone, WhatsApp, Consult) */}
      <StickyMobileCTA onOpenConsultation={() => handleOpenConsultation()} />

      {/* Modal Consultation Dialog */}
      <Modal
        isOpen={isConsultationModalOpen}
        onClose={handleCloseConsultation}
        title="Book a Consultation"
      >
        <ConsultationWizard
          initialService={selectedService}
          onClose={handleCloseConsultation}
          isModal={true}
        />
      </Modal>
    </div>
  );
}

export default App;
