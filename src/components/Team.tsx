import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, BadgeCheck } from 'lucide-react';
import { companyData } from '../data/companyData';
import { VisualImage } from './VisualImage';

const Team = () => {
  return (
    <section id="equipa" className="section-padding bg-brand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-primary font-bold tracking-[0.3em] uppercase text-xs">Capital Humano</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold mt-4 text-white tracking-tighter">
              A nossa <span className="text-gradient-teal italic">equipa</span> de especialistas.
            </h2>
          </div>
          <p className="text-slate-400 text-lg max-w-sm">
            Profissionais dedicados a garantir o padrão de excelência Infinity Clean em todos os projetos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {companyData.team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="premium-card p-10 flex flex-col md:flex-row gap-8 items-center md:items-start group"
            >
              <div className="w-48 h-48 rounded-[32px] overflow-hidden flex-shrink-0 border-4 border-white/5 group-hover:border-brand-primary/30 transition-all duration-500">
                <VisualImage 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" 
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
                  <BadgeCheck size={14} />
                  {member.role}
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">{member.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  {member.description}
                </p>
                
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-slate-400 hover:bg-brand-primary hover:text-white transition-all">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-slate-400 hover:bg-brand-primary hover:text-white transition-all">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Corporate Note */}
        <div className="mt-24 max-w-3xl mx-auto text-center glass p-8 md:p-12 rounded-[40px] border-brand-primary/10">
          <h4 className="text-white font-bold text-xl mb-4">Compromisso Corporativo</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            A nossa equipa é formada por profissionais com formação específica em técnicas de limpeza avançada, garantindo não só a estética mas também a higienização profunda de cada espaço. Seguimos rigorosos protocolos de segurança e qualidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
