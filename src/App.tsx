/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import { HowItWorks, WhyChooseUs } from './components/Features';
import { FAQ, Footer, FloatingWhatsApp } from './components/ContactFAQ';
import { motion } from 'motion/react';
import { Sparkle, ArrowRight } from 'lucide-react';
import { VisualImage } from './components/VisualImage';
import { siteImages } from './constants';

export default function App() {
  const whatsappUrl = "https://wa.me/351926114896?text=Ol%C3%A1%2C%20gostaria%20de%20pedir%20um%20or%C3%A7amento%20para%20um%20servi%C3%A7o%20de%20limpeza.";

  const galleryImages = [
    siteImages.gallery1,
    siteImages.gallery2,
    siteImages.gallery3,
    siteImages.gallery4,
    siteImages.gallery5,
    siteImages.gallery6,
    siteImages.gallery7,
    siteImages.gallery8,
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Trust Bar */}
        <div className="bg-brand-dark border-y border-white/5 py-12 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-[10px] font-bold text-slate-500 uppercase tracking-[0.5em] mb-8">Zonas de Atendimento Prioritário</p>
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 text-[12px] font-bold uppercase tracking-[0.4em] text-slate-400">
               {['Lisboa', 'Sintra', 'Cascais', 'Oeiras', 'Loures', 'Almada'].map((city) => (
                 <div key={city} className="flex items-center gap-3 hover:text-brand-secondary transition-all duration-500 cursor-default group">
                   <div className="w-1 h-1 bg-brand-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                   {city}
                 </div>
               ))}
            </div>
          </div>
        </div>

        <Services />
        
        <BeforeAfter />
        
        <WhyChooseUs />
        
        <HowItWorks />

        {/* High Impact Gallery Section */}
        <section className="section-padding bg-brand-dark overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <span className="text-brand-secondary font-bold tracking-[0.3em] uppercase text-xs">Portefólio de Excelência</span>
              <h2 className="font-display text-5xl md:text-6xl font-bold mt-4 text-white tracking-tighter">
                O pormenor que nos <span className="text-brand-secondary italic">distingue.</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((img, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="aspect-square rounded-2xl overflow-hidden border border-white/10 group cursor-zoom-in"
                >
                  <VisualImage 
                    src={img} 
                    alt={`Cleaning detail ${i + 1}`} 
                    className="w-full h-full grayscale-[50%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final High-Impact CTA Section */}
        <section className="section-padding bg-brand-dark relative overflow-hidden">
          {/* Background glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[150px] -z-0" />

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto bg-white/5 backdrop-blur-xl p-12 md:p-24 rounded-[64px] text-center relative z-10 border border-white/10 shadow-2xl"
          >
             <div className="absolute top-[-25px] left-1/2 -translate-x-1/2 bg-brand-primary text-black p-5 rounded-3xl shadow-cyan">
                <Sparkle size={32} className="animate-sparkle" />
             </div>

             <h2 className="font-display text-5xl md:text-8xl font-light leading-[1] tracking-tighter text-white mb-10">
               O seu espaço <span className="font-bold italic text-brand-secondary">impecável</span> à distância de um clique.
             </h2>
             
             <p className="text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed">
               Deixe o trabalho pesado connosco e aproveite o seu tempo livre. Peça o seu orçamento personalizado via WhatsApp agora mesmo.
             </p>

             <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <a 
                 href={whatsappUrl}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full sm:w-auto bg-brand-primary text-black px-12 py-6 rounded-2xl font-bold text-xl shadow-cyan hover:bg-brand-secondary active:scale-95 transition-all flex items-center justify-center gap-3"
               >
                 Falar no WhatsApp
                 <ArrowRight />
               </a>
             </div>
             
             <p className="mt-10 text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] flex items-center justify-center gap-2">
               <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
               Resposta rápida em poucos minutos
             </p>
          </motion.div>
        </section>

        <FAQ />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

