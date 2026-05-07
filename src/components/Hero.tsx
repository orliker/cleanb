import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';
import { companyData } from '../data/companyData';

const collageImages = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80", // Restaurantes
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=400&q=80", // Barberías
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=400&q=80", // Clínicas
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80", // Limpieza
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=400&q=80", // Café
  "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=400&q=80", // Oficina
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80", // Business
  "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=400&q=80", // Cocina
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80", // Corporate
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80", // Tech/Web
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80", // Profesional
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80", // Limpieza 2
  "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=400&q=80", // Airbnb
  "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=400&q=80", // Concesionarios
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=400&q=80", // Condominio
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=400&q=80"  // Pós-obra
];

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[100vh] flex items-center justify-center pt-24 md:pt-20 overflow-hidden bg-brand-dark">
      
      {/* Background Editorial Collage */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] md:w-[120%] h-[150%] md:h-[120%] -rotate-6 scale-[1.15] opacity-30 md:opacity-40">
          <div className="grid grid-cols-4 md:grid-cols-6 gap-2 md:gap-4 w-full h-full">
            {collageImages.map((src, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, duration: 1, ease: "easeOut" }}
                className="relative aspect-square md:aspect-[3/4] rounded-xl md:rounded-3xl overflow-hidden shadow-2xl"
              >
                <img src={src} className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700" alt="Editorial moodboard" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Legibility Mask & Overlays */}
      <div className="absolute inset-0 bg-brand-dark/50 backdrop-blur-[2px] z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-brand-dark/20 z-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-[radial-gradient(ellipse_at_center,rgba(10,25,47,0.85)_0%,rgba(10,25,47,0)_70%)] z-10 pointer-events-none" />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 relative z-20 w-full text-center flex flex-col items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-4 md:px-5 py-2 md:py-2.5 rounded-full mb-6 md:mb-10 shadow-xl">
            <Globe size={14} className="text-brand-primary animate-pulse" />
            <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-[0.25em] text-white">Portugal & Angola</span>
          </div>

          <h1 className="font-serif text-[clamp(2.8rem,11vw,6.5rem)] font-bold text-white tracking-tight leading-[1.05] mb-6 md:mb-8 drop-shadow-2xl">
            Limpezas que marcam a <span className="text-brand-primary italic font-light drop-shadow-[0_0_15px_rgba(0,128,128,0.5)]">diferença.</span>
          </h1>

          <p className="text-slate-300 text-sm md:text-xl max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed drop-shadow-md">
            Criamos espaços impecáveis para restaurantes, escritórios, clínicas e negócios locais.
            <span className="block mt-4 text-white font-bold text-[10px] md:text-xs uppercase tracking-widest bg-brand-dark/50 inline-block px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">Especialistas em Portugal e Luanda</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a 
              href={companyData.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-brand-primary text-white px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-sm md:text-lg shadow-teal hover:bg-brand-secondary active:scale-95 transition-all flex items-center justify-center gap-3 backdrop-blur-sm"
            >
              Pedir orçamento
              <ArrowRight size={18} />
            </a>
            <a 
              href="#portfolio"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-sm md:text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-3 shadow-xl"
            >
              Ver portfólio
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
