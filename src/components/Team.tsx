import React from 'react';
import { motion } from 'framer-motion';
import { Mail, BadgeCheck, Instagram, Phone } from 'lucide-react';
import { companyData } from '../data/companyData';
import { VisualImage } from './VisualImage';

const Team = () => {
  const ceo = companyData.team[0];

  return (
    <section id="equipa" className="section-padding bg-brand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-primary font-bold tracking-[0.3em] uppercase text-xs">Liderança</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 text-white tracking-tighter">
              À frente da <span className="text-gradient-teal italic">Infinity Clean</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm md:text-base max-w-md">
            À frente da Infinity Clean está uma liderança focada em organização, confiança e excelência, com visão para desenvolver uma marca angolana e portuguesa de referência em serviços de limpeza.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="premium-card p-6 md:p-12 lg:p-16 flex flex-col md:flex-row gap-8 lg:gap-16 items-center md:items-start group border border-white/5 bg-white/[0.02] shadow-2xl relative overflow-hidden rounded-[32px] md:rounded-[48px]"
        >
          {/* Subtle Glow Background */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          {/* CEO Photo */}
          <div className="w-full max-w-[300px] md:max-w-[380px] aspect-[3/4] rounded-[24px] md:rounded-[32px] overflow-hidden flex-shrink-0 border border-white/10 group-hover:border-brand-primary/30 transition-all duration-500 shadow-xl relative z-10 mx-auto md:mx-0">
            <VisualImage 
              src={ceo.image} 
              alt={ceo.name} 
              className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 hover:scale-105" 
            />
          </div>
          
          {/* Details */}
          <div className="flex-1 text-center md:text-left flex flex-col justify-center h-full relative z-10 mt-2 md:mt-8 w-full">
            <div className="inline-flex items-center justify-center md:justify-start gap-2 bg-brand-primary/10 text-brand-primary px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6 self-center md:self-start">
              <BadgeCheck size={16} />
              {ceo.role}
            </div>
            
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">{ceo.name}</h3>
            
            <p className="text-slate-300 text-sm md:text-lg leading-relaxed mb-6 md:mb-8 font-light">
              {ceo.description}
            </p>

            <p className="text-brand-primary text-xs md:text-sm font-semibold uppercase tracking-widest mb-8">
              Uma liderança orientada pela confiança, detalhe e compromisso com a qualidade.
            </p>
            
            <div className="flex flex-col lg:flex-row items-center justify-center md:justify-start gap-3 md:gap-4 w-full mt-auto">
              <a 
                href={`https://wa.me/351926114896?text=${encodeURIComponent('Olá, gostaria de saber mais sobre os serviços da Infinity Clean.')}`} 
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-start gap-3 w-full lg:w-auto px-5 py-3 md:px-6 md:py-4 bg-white/5 hover:bg-brand-primary rounded-xl text-white font-medium transition-all group/btn border border-white/5 hover:border-brand-primary shadow-lg min-w-[200px]"
              >
                <Phone size={20} className="text-brand-primary group-hover/btn:text-white transition-colors flex-shrink-0" />
                <div className="flex flex-col text-left">
                  <span className="text-[9px] md:text-[10px] text-slate-400 group-hover/btn:text-white/80 uppercase tracking-wider">Contacto</span>
                  <span className="text-sm md:text-base font-semibold truncate">{ceo.contact}</span>
                </div>
              </a>

              <a 
                href="mailto:brightinfinity@gmail.com" 
                className="flex items-center justify-start gap-3 w-full lg:w-auto px-5 py-3 md:px-6 md:py-4 bg-white/5 hover:bg-brand-primary rounded-xl text-white font-medium transition-all group/btn border border-white/5 hover:border-brand-primary shadow-lg min-w-[200px]"
              >
                <Mail size={20} className="text-brand-primary group-hover/btn:text-white transition-colors flex-shrink-0" />
                <div className="flex flex-col text-left">
                  <span className="text-[9px] md:text-[10px] text-slate-400 group-hover/btn:text-white/80 uppercase tracking-wider">Correio eletrónico</span>
                  <span className="text-sm md:text-base font-semibold truncate max-w-[180px]">brightinfinity@gmail.com</span>
                </div>
              </a>

              <a 
                href={ceo.instagram} 
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-start gap-3 w-full lg:w-auto px-5 py-3 md:px-6 md:py-4 bg-white/5 hover:bg-brand-primary rounded-xl text-white font-medium transition-all group/btn border border-white/5 hover:border-brand-primary shadow-lg min-w-[200px]"
              >
                <Instagram size={20} className="text-brand-primary group-hover/btn:text-white transition-colors flex-shrink-0" />
                <div className="flex flex-col text-left">
                  <span className="text-[9px] md:text-[10px] text-slate-400 group-hover/btn:text-white/80 uppercase tracking-wider">Instagram</span>
                  <span className="text-sm md:text-base font-semibold truncate">@___faninimario</span>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;