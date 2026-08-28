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
  Car,
  Hammer,
  KeyRound,
  Paintbrush,
  Layers,
  Wrench,
  Sofa,
  Factory
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
  Car: <Car size={28} />,
  Hammer: <Hammer size={28} />,
  KeyRound: <KeyRound size={28} />,
  Paintbrush: <Paintbrush size={28} />,
  Layers: <Layers size={28} />,
  Wrench: <Wrench size={28} />,
  Sofa: <Sofa size={28} />,
  Factory: <Factory size={28} />
};

// Serviços de obra e acabamentos; o resto é higienização e limpeza.
const OBRA_IDS = ['remodelacao', 'chave-na-mao', 'pintura', 'chao-vinilico', 'reparacoes', 'interiores'];

const serviceGroups = [
  {
    id: 'obra',
    label: 'Remodelação & Acabamentos',
    intro: 'Transformamos o espaço: obra, pintura, pavimentos e remates, com um único responsável do princípio ao fim.',
    items: companyData.services.filter((s) => OBRA_IDS.includes(s.id))
  },
  {
    id: 'higienizacao',
    label: 'Higienização & Limpeza',
    intro: 'Do pós-obra à manutenção regular, devolvemos o espaço pronto a usar e mantemo-lo assim.',
    items: companyData.services.filter((s) => !OBRA_IDS.includes(s.id))
  }
];

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
              Remodelamos e <span className="text-gradient-teal italic">higienizamos</span> o seu espaço.
            </h2>
          </div>
          <p className="text-slate-400 text-sm md:text-lg max-w-sm leading-relaxed mx-auto md:mx-0">
            Da obra ao acabamento e da limpeza pós-obra à manutenção regular, com um único responsável em Portugal e Angola.
          </p>
        </div>

        {serviceGroups.map((group) => (
          <div key={group.id} className="mb-12 md:mb-20 last:mb-0">
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-6 md:mb-10 pb-4 border-b border-white/10 text-center md:text-left">
              <h3 className="font-display text-xl md:text-3xl font-bold text-white tracking-tight whitespace-nowrap">
                {group.label}
              </h3>
              <p className="text-slate-400 text-[11px] md:text-sm leading-relaxed">{group.intro}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {group.items.map((service, index) => (
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
        ))}
      </div>
    </section>
  );
};

export default Services;
