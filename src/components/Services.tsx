import { motion } from 'motion/react';
import { Home, Building2, Briefcase, Shovel, Car, Zap, ArrowRight } from 'lucide-react';
import { VisualImage } from './VisualImage';
import { siteImages } from '../constants';

const services = [
  {
    icon: <Home size={22} />,
    title: "Limpeza Residencial",
    description: "Cuidado completo para a sua casa. Da manutenção semanal à limpeza profunda periódica.",
    image: siteImages.residential
  },
  {
    icon: <Building2 size={22} />,
    title: "Limpeza de Condomínios",
    description: "Gestão de áreas comuns com rigor e assiduidade para garantir o bem-estar dos moradores.",
    image: siteImages.condominium
  },
  {
    icon: <Briefcase size={22} />,
    title: "Limpeza de Escritórios",
    description: "Espaços de trabalho impecáveis que promovem a produtividad e o profissionalismo.",
    image: siteImages.office
  },
  {
    icon: <Shovel size={22} />,
    title: "Limpeza Pós-Obra",
    description: "Eliminação total de resíduos, pó fino e sujidade difícil após obras ou remodelações.",
    image: siteImages.postConstruction
  },
  {
    icon: <Car size={22} />,
    title: "Limpeza Automotiva",
    description: "Detalhamento e higienização profunda de interiores para que o seu carro se sinta novo.",
    image: siteImages.automotive
  },
  {
    icon: <Zap size={22} />,
    title: "Limpezas Profundas",
    description: "Recuperação total de espaços críticos: cozinhas, WC e áreas negligenciadas.",
    image: siteImages.deepCleaning
  }
];

export default function Services() {
  const whatsappUrl = "https://wa.me/351926114896?text=Ol%C3%A1%2C%20gostaria%20de%20pedir%20um%20or%C3%A7amento%20para%20o%20servi%C3%A7o%20de%20";

  return (
    <section id="servicos" className="section-padding bg-brand-dark relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-brand-secondary font-bold tracking-widest uppercase text-xs">Nossas Especialidades</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 leading-tight text-white">
              Soluções de limpeza <span className="text-brand-secondary italic uppercase tracking-tighter">premium</span> para cada espaço.
            </h2>
          </div>
          <p className="text-slate-400 max-w-sm">
            Atuamos em diversos setores com o mesmo padrão de excelência e atenção minuciosa aos detalhes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group glass p-8 rounded-[32px] hover:bg-white/10 transition-all duration-500 flex flex-col border border-white/10"
            >
              <div className="relative h-48 mb-6 rounded-2xl overflow-hidden shadow-inner bg-slate-800">
                <VisualImage 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full group-hover:scale-110 opacity-70 group-hover:opacity-100 transition-all duration-700" 
                  overlay
                />
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/5 backdrop-blur-md rounded-xl flex items-center justify-center text-brand-secondary group-hover:bg-brand-primary group-hover:text-black transition-all">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-8 flex-grow text-sm">
                {service.description}
              </p>
              <a 
                href={`${whatsappUrl}${service.title.replace(' ', '%20')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-bold text-brand-secondary group/link hover:gap-4 transition-all text-sm uppercase tracking-widest"
              >
                Pedir Orçamento
                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
