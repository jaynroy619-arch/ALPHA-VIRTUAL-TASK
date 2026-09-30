/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { WorkWithUsProvider } from './context/WorkWithUsContext';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { WorkWithUsModal } from './components/WorkWithUs/WorkWithUsModal';
import { HomePage } from './pages/Home/HomePage';
import { ServicesPage } from './pages/Services/ServicesPage';
import { ServiceDetailsPage } from './pages/ServiceDetails/ServiceDetailsPage';
import { AboutPage } from './pages/About/AboutPage';
import { HowItWorksPage } from './pages/HowItWorks/HowItWorksPage';
import { FAQPage } from './pages/FAQ/FAQPage';
import { ContactPage } from './pages/Contact/ContactPage';
import { PrivacyPage } from './pages/Privacy/PrivacyPage';
import { TermsPage } from './pages/Terms/TermsPage';
import { RefundPolicyPage } from './pages/RefundPolicy/RefundPolicyPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <WorkWithUsProvider>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#080808] text-neutral-100 selection:bg-[#d4af37]/20 selection:text-[#f4d068]">
          {/* Sticky Navigation */}
          <Navbar />

          {/* Main Page Content */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:serviceId" element={<ServiceDetailsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/refund-policy" element={<RefundPolicyPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          {/* Global Footer */}
          <Footer />

          {/* Global Work With Us Conversion Dialog */}
          <WorkWithUsModal />
        </div>
      </WorkWithUsProvider>
    </Router>
  );
}
