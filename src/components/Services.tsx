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
  ArrowRight,
  Calendar,
  Layout,
  Map,
  Car
} from 'lucide-react';
import { companyData } from '../data/companyData';

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home size={28} />,
  Briefcase: <Briefcase size={28} />,
  Building2: <Building2 size={28} />,
  HardHat: <HardHat size={28} />,
  Sparkles: <Sparkles size={28} />,
  Building: <Building size={28} />,
  MapPin: <MapPin size={28} />,
  Calendar: <Calendar size={28} />,
  Layout: <Layout size={28} />,
  Map: <Map size={28} />,
  Car: <Car size={28} />
};

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-brand-dark relative overflow-hidden">
      {/* Glows */}
      <div className="absolute top-1/2 left-0 w-[40%] h-[40%] bg-brand-primary/5 rounded-full blur-[120px] -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-4 md:gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <span className="text-brand-primary font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">Os nossos serviços</span>
            <h2 className="font-display text-[clamp(2.2rem,8vw,4.5rem)] font-bold mt-2 md:mt-4 text-white tracking-tighter leading-tight">
              Soluções <span className="text-gradient-teal italic">completas</span> para o seu espaço.
            </h2>
          </div>
          <p className="text-slate-400 text-sm md:text-lg max-w-sm leading-relaxed mx-auto md:mx-0">
            Desde limpezas residenciais a grandes espaços comerciais, garantimos excelência em Portugal e Angola.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {companyData.services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="premium-card p-5 md:p-10 group flex flex-col h-full"
            >
              <div className="w-10 h-10 md:w-16 md:h-16 bg-white/5 rounded-lg md:rounded-2xl flex items-center justify-center text-brand-primary mb-4 md:mb-6 group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                {iconMap[service.icon] || <CheckCircle2 size={24} />}
              </div>
              
              <h3 className="text-base md:text-2xl font-bold text-white mb-2 md:mb-4 group-hover:text-brand-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-400 text-[11px] md:text-sm mb-4 md:mb-8 leading-relaxed flex-1">
                {service.description}
              </p>

              <a 
                href={`https://wa.me/351926114896?text=${encodeURIComponent(service.id === 'automotiva' ? 'Olá, gostaria de pedir um orçamento para limpeza automotiva.' : `Olá, gostaria de pedir um orçamento para ${service.title.toLowerCase()}.`)}`}
                className="inline-flex items-center gap-2 text-[9px] md:text-xs font-bold uppercase tracking-widest text-brand-primary group-hover:gap-3 transition-all mt-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar orçamento
                <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
