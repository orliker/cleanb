import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ArrowRight } from 'lucide-react';
import { companyData } from '../data/companyData';

const International = () => {
  return (
    <section id="internacional" className="section-padding bg-brand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-brand-primary font-bold tracking-[0.3em] uppercase text-xs">Expansão Internacional</span>
          <h2 className="font-display text-5xl md:text-7xl font-bold mt-4 text-white tracking-tighter">
            Portugal <span className="text-brand-primary italic">&</span> Angola
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mt-6">
            Unimos a experiência e o profissionalismo de dois mercados para oferecer uma marca de limpeza moderna e de confiança.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 relative">
          {/* Connection Line (Visual) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent hidden md:block" />

          {/* Portugal Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="premium-card p-12 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Globe size={120} />
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-6">Portugal</h3>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Serviços de limpeza profissionais para casas, escritórios, empresas e espaços comerciais em todo o território nacional, com foco nas zonas de Lisboa, Cascais e arredores.
            </p>
            <ul className="space-y-4 mb-10">
              {['Equipas especializadas', 'Produtos certificados', 'Atenção ao detalhe'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-bold text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <a href={companyData.contact.whatsappLink} className="flex items-center gap-2 text-brand-primary font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all">
              Agendar em Portugal <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Angola Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="premium-card p-12 relative overflow-hidden group border-brand-secondary/30"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity text-brand-secondary">
              <Globe size={120} />
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-6">Angola / Luanda</h3>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Expansão estratégica em Angola, com atuação dedicada na cidade de Luanda. Levamos o padrão de qualidade europeu para o mercado angolano.
            </p>
            <ul className="space-y-4 mb-10">
              {['Atuação em toda Luanda', 'Gestão organizada', 'Padrão internacional'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-bold text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary" />
                  {item}
                </li>
              ))}
            </ul>
            <a href={companyData.contact.whatsappLink} className="flex items-center gap-2 text-brand-secondary font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all">
              Agendar em Luanda <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>

        <div className="mt-24 glass p-8 md:p-12 rounded-[40px] text-center border-brand-primary/20">
          <p className="text-xl md:text-2xl font-light text-white leading-relaxed">
            "Uma marca <span className="font-bold text-brand-primary italic">Angolana e Portuguesa</span> que acredita no poder da organização e na transformação de espaços através da limpeza."
          </p>
        </div>
      </div>
    </section>
  );
};

export default International;
