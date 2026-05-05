import { motion } from 'motion/react';
import { Home, Building2, Briefcase, Shovel, Car, Zap, ArrowRight } from 'lucide-react';
import { VisualImage } from './VisualImage';
import { siteImages } from '../constants';

const services = [
  {
    icon: <Home size={22} />,
    title: "Limpeza Doméstica",
    description: "Cuidado minucioso para a sua casa. Manutenção regular ou ocasional com o mais alto padrão de higiene.",
    image: siteImages.residential
  },
  {
    icon: <Building2 size={22} />,
    title: "Alojamento Local (Airbnb)",
    description: "Ajudamos a manter o imóvel limpo, organizado e preparado para receber os seus hóspedes com o máximo conforto.",
    image: siteImages.airbnb
  },
  {
    icon: <Briefcase size={22} />,
    title: "Limpeza de Escritórios",
    description: "Ambientes de trabalho produtivos e saudáveis. Focamos na desinfecção e organização do seu negócio.",
    image: siteImages.office
  },
  {
    icon: <Zap size={22} />,
    title: "Limpeza Profunda",
    description: "Recuperação total de espaços. Ideal para limpezas de primavera ou quando o detalhe é a prioridade absoluta.",
    image: siteImages.deepCleaning
  },
  {
    icon: <Building2 size={22} />,
    title: "Limpeza de Condomínios",
    description: "Zonas comuns sempre impecáveis. Profissionalismo e assiduidade para o bem-estar de todos os vizinhos.",
    image: siteImages.condominium
  },
  {
    icon: <Shovel size={22} />,
    title: "Limpeza Pós-Obra",
    description: "Remoção cuidadosa de pó fino e resíduos. Entregamos o seu espaço renovado e pronto a habitar.",
    image: siteImages.postConstruction
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
