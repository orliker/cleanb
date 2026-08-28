import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, CheckCircle2 } from 'lucide-react';
import { companyData } from '../data/companyData';

const CompanyProfile = () => {
  return (
    <section id="sobre-nos" className="section-padding bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-primary font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">Sobre Nós</span>
            <h2 className="font-display text-[clamp(2.2rem,8vw,4.5rem)] font-bold mt-2 md:mt-4 text-white tracking-tighter leading-tight">
              Uma marca com <span className="text-gradient-teal italic">visão</span> global.
            </h2>
            <p className="text-slate-400 text-sm md:text-xl mt-6 md:mt-8 leading-relaxed">
              Somos uma marca angolana e portuguesa de remodelação e higienização. Fazemos a obra — demolição, pintura, pavimentos, reparações e acabamentos — e entregamos o espaço limpo e pronto a usar, com um único responsável do início ao fim. Atuamos em Portugal e estamos também a expandir os nossos serviços em Angola, especialmente na cidade de Luanda.
            </p>
            <p className="text-slate-400 text-sm md:text-lg mt-4 md:mt-6 leading-relaxed">
              A nossa missão é transformar espaços através de um serviço organizado, responsável e atento ao detalhe, garantindo conforto, higiene e confiança em cada trabalho realizado.
            </p>

            <div className="grid grid-cols-2 gap-3 md:gap-6 mt-8 md:mt-12">
              {['Confiança', 'Qualidade', 'Pontualidade', 'Organização', 'Profissionalismo', 'Atenção ao detalhe'].map((item) => (
                <div key={item} className="flex items-center gap-2 md:gap-3 text-white font-bold text-[10px] md:text-base">
                  <div className="w-6 h-6 md:w-10 md:h-10 bg-brand-primary/10 rounded-lg md:rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                    <CheckCircle2 size={14} className="md:w-5 md:h-5" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative mt-8 md:mt-0"
          >
            <div className="aspect-[4/3] md:aspect-square rounded-[32px] md:rounded-[64px] overflow-hidden border border-white/10 relative">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80" 
                alt="Professional Cleaning" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-primary/20 mix-blend-overlay" />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-brand-primary p-6 md:p-12 rounded-[24px] md:rounded-[40px] shadow-teal text-white">
              <p className="text-3xl md:text-5xl font-bold mb-1 tracking-tight">PT/AO</p>
              <p className="text-[8px] md:text-xs font-bold uppercase tracking-widest opacity-80">Mercado Int.</p>
            </div>
          </motion.div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="premium-card p-8 md:p-12 text-center flex flex-col items-center"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-primary/10 rounded-2xl md:rounded-[32px] flex items-center justify-center text-brand-primary mb-6 md:mb-8">
              <Target size={32} className="md:w-10 md:h-10" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Missão</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {companyData.mission}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="premium-card p-8 md:p-12 text-center flex flex-col items-center border-brand-primary/20"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-primary/10 rounded-2xl md:rounded-[32px] flex items-center justify-center text-brand-primary mb-6 md:mb-8">
              <Eye size={32} className="md:w-10 md:h-10" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Visão</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {companyData.vision}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="premium-card p-8 md:p-12 text-center flex flex-col items-center"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-primary/10 rounded-2xl md:rounded-[32px] flex items-center justify-center text-brand-primary mb-6 md:mb-8">
              <Heart size={32} className="md:w-10 md:h-10" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Valores</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {companyData.values.slice(0, 4).map(v => (
                <span key={v.title} className="bg-white/5 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[9px] md:text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                  {v.title}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;
