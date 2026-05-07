/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import CompanyProfile from './components/CompanyProfile';
import International from './components/International';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import DigitalPresence from './components/DigitalPresence';
import { HowItWorks, WhyChooseUs } from './components/Features';
import { ContactForm, FAQ, Footer, FloatingWhatsApp } from './components/ContactFAQ';
import Lenis from 'lenis';
import { companyData } from './data/companyData';

export default function App() {
  useEffect(() => {
    // Initialize Smooth Scroll
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-primary/30">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Trust Bar */}
        <div className="bg-brand-darker border-y border-white/5 py-8 md:py-12 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-[8px] md:text-[10px] font-bold text-slate-500 uppercase tracking-[0.5em] mb-6 md:mb-8">Especialistas em Portugal e Angola</p>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-12 text-[9px] md:text-[12px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-slate-400">
               {['Lisboa', 'Cascais', 'Sintra', 'Luanda', 'Talatona', 'Kilamba'].map((city) => (
                 <div key={city} className="flex items-center gap-2 md:gap-3 hover:text-brand-primary transition-all duration-500 cursor-default group">
                   <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-brand-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                   {city}
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Company Profile & MVV */}
        <CompanyProfile />

        {/* Why Choose Us Diferencial */}
        <WhyChooseUs />

        {/* Services Grid */}
        <Services />
        
        {/* International Presence */}
        <International />

        {/* Portfolio of Work */}
        <Portfolio />

        {/* Before & After Comparison */}
        <BeforeAfter />
        
        {/* Process Steps */}
        <HowItWorks />

        {/* Team Presentation */}
        <Team />

        {/* Digital Presence (Instagram) */}
        <DigitalPresence />

        {/* Contact Form */}
        <ContactForm />

        {/* FAQ Section */}
        <FAQ />
      </main>

      {/* Professional Footer */}
      <Footer />

      {/* WhatsApp FAB */}
      <FloatingWhatsApp />
    </div>
  );
}
