import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ArrowRight } from 'lucide-react';
import { companyData } from '../data/companyData';

const International = () => {
  return (
    <section id="internacional" className="relative py-20 md:py-32 bg-brand-dark overflow-hidden">
      
      {/* Background Ambient Glow (Z-Index 0) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24 relative z-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-primary font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs"
          >
            Expansão Internacional
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[clamp(2.5rem,8vw,4.5rem)] font-bold mt-2 text-white tracking-tighter leading-tight"
          >
            Portugal <span className="text-brand-primary italic">&</span> Angola
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto mt-6 leading-relaxed"
          >
            Unimos a experiência e o profissionalismo de dois mercados para oferecer uma marca de remodelação e higienização moderna e de confiança.
          </motion.p>
        </div>

        {/* Content Area with Cards and Infinity Symbol */}
        <div className="relative w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24 min-h-[500px]">
          
          {/* 
            INFINITY SYMBOL LAYER (Z-Index 1)
            Positioned absolutely to stay perfectly centered behind the cards.
          */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] md:w-[100%] max-w-[1000px] pointer-events-none z-[1] hidden md:block"
          >
            <svg viewBox="0 0 800 300" className="w-full h-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                d="M200,150 C200,70 320,70 400,150 C480,230 600,230 600,150 C600,70 480,70 400,150 C320,230 200,230 200,150"
                fill="none"
                stroke="white"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.8"
              />
            </svg>
          </motion.div>

          {/* PORTUGAL CARD (Z-Index 2) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full md:w-1/2 z-[2]"
          >
            <div className="premium-card p-8 md:p-12 relative overflow-hidden bg-brand-dark/80 backdrop-blur-xl border border-white/10 shadow-2xl">
              <div className="absolute top-0 right-0 p-6 opacity-10 text-brand-primary pointer-events-none">
                <Globe size={80} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Portugal</h3>
              <p className="text-slate-400 text-sm md:text-base mb-8 leading-relaxed">
                Remodelação, acabamentos e limpeza profissional para casas, escritórios, empresas e espaços comerciais em Portugal.
              </p>
              <ul className="space-y-4 mb-10">
                {['Equipas especializadas', 'Produtos certificados', 'Atenção ao detalhe'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-xs md:text-sm font-bold text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href={companyData.contact.whatsappLink} className="inline-flex items-center gap-2 text-brand-primary font-bold uppercase tracking-widest text-[10px] md:text-xs hover:gap-4 transition-all group">
                Agendar em Portugal <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* ANGOLA CARD (Z-Index 2) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full md:w-1/2 z-[2]"
          >
            <div className="premium-card p-8 md:p-12 relative overflow-hidden bg-brand-dark/80 backdrop-blur-xl border border-brand-secondary/30 shadow-2xl">
              <div className="absolute top-0 right-0 p-6 opacity-10 text-brand-secondary pointer-events-none">
                <Globe size={80} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Angola / Luanda</h3>
              <p className="text-slate-400 text-sm md:text-base mb-8 leading-relaxed">
                Serviços de remodelação e limpeza em Angola, com foco em Luanda e em diferentes zonas da cidade.
              </p>
              <ul className="space-y-4 mb-10">
                {['Atuação em toda Luanda', 'Gestão organizada', 'Padrão internacional'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-xs md:text-sm font-bold text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href={companyData.contact.whatsappLink} className="inline-flex items-center gap-2 text-brand-secondary font-bold uppercase tracking-widest text-[10px] md:text-xs hover:gap-4 transition-all group">
                Agendar em Luanda <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

        </div>

        {/* Mobile-Only Infinity Symbol (Displayed below cards on mobile) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="md:hidden mt-12 flex flex-col items-center w-full max-w-[320px] mx-auto z-[2] relative"
        >
          <svg viewBox="0 0 800 300" className="w-[85%] h-auto">
            <path
              d="M200,150 C200,70 320,70 400,150 C480,230 600,230 600,150 C600,70 480,70 400,150 C320,230 200,230 200,150"
              fill="none"
              stroke="rgba(255, 255, 255, 0.9)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ filter: "drop-shadow(0 0 16px rgba(255,255,255,0.4))" }}
            />
          </svg>
          <div className="mt-6 text-center">
            <h3 className="text-lg font-display font-bold text-white mb-1">
              Uma ligação contínua
            </h3>
            <p className="text-brand-primary text-[9px] font-bold tracking-[0.2em] uppercase">
              Portugal ∞ Angola
            </p>
          </div>
        </motion.div>

        {/* Desktop Final Fused Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hidden md:block mt-24 max-w-3xl mx-auto text-center relative z-20"
        >
          <div className="glass p-8 md:p-10 rounded-[32px] md:rounded-[40px] border-white/10 shadow-2xl">
            <h3 className="text-xl md:text-3xl font-display font-bold text-white mb-4">
              Uma marca <span className="text-brand-primary italic">Angolana</span> e <span className="text-brand-secondary italic">Portuguesa</span>
            </h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              A Bright Infinity é uma marca angolana e portuguesa criada para oferecer remodelação e higienização profissionais, modernas e adaptadas às necessidades de cada cliente. <span className="text-white font-bold block mt-2">Em Angola, o objetivo é atuar em Luanda e em diferentes zonas da cidade.</span>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default International;
