import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Sparkles, ShieldCheck } from 'lucide-react';
import { companyData } from '../data/companyData';
import { VisualImage } from './VisualImage';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-24 md:pt-20 overflow-hidden bg-brand-dark">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[60%] h-[60%] bg-brand-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] bg-brand-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 md:gap-3 bg-white/5 border border-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-6 md:mb-8">
              <Globe size={14} className="text-brand-primary animate-pulse" />
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-brand-light">Portugal & Angola</span>
            </div>

            <h1 className="font-display text-[clamp(2.2rem,10vw,5rem)] font-bold text-white tracking-tighter leading-[1.1] mb-6">
              Limpezas <span className="text-gradient-teal italic">profissionais</span> em Portugal e Angola.
            </h1>

            <p className="text-slate-400 text-sm md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 md:mb-10 leading-relaxed">
              Uma marca angolana e portuguesa dedicada a oferecer serviços de limpeza modernos, organizados e de confiança para casas, empresas, escritórios e espaços comerciais.
              <span className="block mt-4 text-brand-primary font-bold text-xs md:text-sm uppercase tracking-widest">Especialistas em Portugal e em Luanda, Angola.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href={companyData.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-brand-primary text-white px-8 md:px-10 py-3.5 md:py-5 rounded-xl md:rounded-2xl font-bold text-sm md:text-lg shadow-teal hover:bg-brand-secondary active:scale-95 transition-all flex items-center justify-center gap-3"
              >
                Pedir orçamento
                <ArrowRight size={18} />
              </a>
              <a 
                href="#portfolio"
                className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-8 md:px-10 py-3.5 md:py-5 rounded-xl md:rounded-2xl font-bold text-sm md:text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3"
              >
                Ver portfólio
              </a>
            </div>

            <div className="mt-10 md:mt-16 grid grid-cols-3 gap-2 md:gap-8 border-t border-white/5 pt-8 md:pt-12">
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold text-white mb-1">100%</span>
                <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500">Confiança</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold text-white mb-1">2+</span>
                <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500">Países</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold text-white mb-1">24/7</span>
                <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500">Suporte</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square md:aspect-[4/5] rounded-[48px] overflow-hidden border border-white/10 shadow-2xl">
              <VisualImage 
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1200&q=80"
                alt="Cleaning Professional"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000 scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
            </div>

            {/* Floating Cards */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 glass p-6 rounded-3xl shadow-premium"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-primary/20 rounded-2xl flex items-center justify-center text-brand-primary">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Qualidade Garantida</p>
                  <p className="text-white font-bold">Serviço Premium</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 glass p-6 rounded-3xl shadow-premium"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-secondary/20 rounded-2xl flex items-center justify-center text-brand-secondary">
                  <Sparkles size={28} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Equipa Especializada</p>
                  <p className="text-white font-bold">Resultados Impecáveis</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Mobile Visual (Simplified) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden relative aspect-video rounded-3xl overflow-hidden border border-white/10"
          >
            <VisualImage 
              src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80"
              alt="Cleaning Professional"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
