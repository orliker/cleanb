import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, CheckCircle2 } from 'lucide-react';
import { companyData } from '../data/companyData';

const CompanyProfile = () => {
  return (
    <section id="sobre-nos" className="section-padding bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-primary font-bold tracking-[0.3em] uppercase text-xs">Sobre Nós</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold mt-4 text-white tracking-tighter leading-tight">
              Uma marca com <span className="text-gradient-teal italic">visão</span> global.
            </h2>
            <p className="text-slate-400 text-xl mt-8 leading-relaxed">
              {companyData.description}
            </p>
            <p className="text-slate-400 text-lg mt-6 leading-relaxed">
              A nossa missão é transformar espaços através de um serviço organizado, responsável e atento ao detalhe, garantindo conforto, higiene e confiança em cada trabalho realizado.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-12">
              {['Confiança', 'Qualidade', 'Pontualidade', 'Organização'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white font-bold">
                  <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary">
                    <CheckCircle2 size={20} />
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
            className="relative"
          >
            <div className="aspect-square rounded-[64px] overflow-hidden border border-white/10 relative">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80" 
                alt="Professional Cleaning" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-primary/20 mix-blend-overlay" />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 bg-brand-primary p-12 rounded-[40px] shadow-teal text-white">
              <p className="text-5xl font-bold mb-1">PT/AO</p>
              <p className="text-xs font-bold uppercase tracking-widest opacity-80">Mercado Internacional</p>
            </div>
          </motion.div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="premium-card p-12 text-center flex flex-col items-center"
          >
            <div className="w-20 h-20 bg-brand-primary/10 rounded-[32px] flex items-center justify-center text-brand-primary mb-8">
              <Target size={40} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">Missão</h3>
            <p className="text-slate-400 leading-relaxed">
              {companyData.mission}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="premium-card p-12 text-center flex flex-col items-center border-brand-primary/20"
          >
            <div className="w-20 h-20 bg-brand-primary/10 rounded-[32px] flex items-center justify-center text-brand-primary mb-8">
              <Eye size={40} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">Visão</h3>
            <p className="text-slate-400 leading-relaxed">
              {companyData.vision}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="premium-card p-12 text-center flex flex-col items-center"
          >
            <div className="w-20 h-20 bg-brand-primary/10 rounded-[32px] flex items-center justify-center text-brand-primary mb-8">
              <Heart size={40} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">Valores</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {companyData.values.slice(0, 4).map(v => (
                <span key={v.title} className="bg-white/5 px-4 py-2 rounded-full text-[10px] font-bold text-slate-300 uppercase tracking-widest">
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
