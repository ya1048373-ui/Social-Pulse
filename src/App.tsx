/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('');

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 flex flex-col font-sans selection:bg-purple-600 selection:text-white antialiased">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Animated Welcome Hero */}
        <Hero />

        {/* 2. About Us */}
        <About />

        {/* 3. Our Services */}
        <Services onSelectService={handleSelectService} />

        {/* 4. Why Choose Us */}
        <WhyUs />

        {/* 5. Frequently Asked Questions (FAQ) */}
        <FAQ />

        {/* 6. Contact Us */}
        <Contact initialService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating 1-Tap WhatsApp CTA */}
      <FloatingWhatsApp />
    </div>
  );
}
