import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Briefcase, 
  Building2, 
  HardHat, 
  Sparkles, 
  Building, 
  MapPin,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { companyData } from '../data/companyData';

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home size={32} />,
  Briefcase: <Briefcase size={32} />,
  Building2: <Building2 size={32} />,
  HardHat: <HardHat size={32} />,
  Sparkles: <Sparkles size={32} />,
  Building: <Building size={32} />,
  MapPin: <MapPin size={32} />
};

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-brand-dark relative overflow-hidden">
      {/* Glows */}
      <div className="absolute top-1/2 left-0 w-[40%] h-[40%] bg-brand-primary/5 rounded-full blur-[120px] -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-primary font-bold tracking-[0.3em] uppercase text-xs">Os nossos serviços</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold mt-4 text-white tracking-tighter">
              Soluções <span className="text-gradient-teal italic">completas</span> para o seu espaço.
            </h2>
          </div>
          <p className="text-slate-400 text-lg max-w-sm">
            Desde limpezas residenciais a grandes espaços comerciais, garantimos excelência em Portugal e Angola.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companyData.services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="premium-card p-10 group"
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-brand-primary mb-8 group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                {iconMap[service.icon] || <CheckCircle2 size={32} />}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-400 mb-8 leading-relaxed">
                {service.description}
              </p>

              <a 
                href={companyData.contact.whatsappLink}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-primary group-hover:gap-4 transition-all"
              >
                Solicitar orçamento
                <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
