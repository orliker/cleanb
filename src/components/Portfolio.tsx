import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, MapPin, Search, ArrowUpRight } from 'lucide-react';
import { companyData } from '../data/companyData';
import { VisualImage } from './VisualImage';

const categories = ['Todos', 'Residencial', 'Escritórios', 'Empresas', 'Pós-obra', 'Luanda', 'Portugal'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredItems = activeCategory === 'Todos' 
    ? companyData.portfolio 
    : companyData.portfolio.filter(item => 
        item.category === activeCategory || item.location === activeCategory
      );

  return (
    <section id="portfolio" className="section-padding bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-6 md:gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-primary font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">Portfólio de Trabalhos</span>
            <h2 className="font-display text-[clamp(2rem,7vw,4rem)] md:text-6xl font-bold mt-2 md:mt-4 text-white tracking-tighter leading-tight">
              Resultados <span className="text-gradient-teal italic">impecáveis</span> em cada projeto.
            </h2>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 md:px-6 md:py-2 rounded-full text-[9px] md:text-xs font-bold uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                  ? 'bg-brand-primary text-white shadow-teal' 
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative aspect-video sm:aspect-[4/3] rounded-[24px] md:rounded-[32px] overflow-hidden cursor-pointer"
              >
                <VisualImage 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-8">
                  <div className="flex items-center gap-2 text-brand-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                    <MapPin size={12} />
                    {item.location}
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">{item.title}</h4>
                  <p className="text-slate-300 text-xs md:text-sm mb-6 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="bg-white/10 px-4 py-1.5 rounded-full text-[10px] font-bold text-white uppercase tracking-widest backdrop-blur-sm">
                      {item.category}
                    </span>
                    <a 
                      href={companyData.contact.whatsappLink} 
                      className="bg-brand-primary hover:bg-brand-secondary text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors shadow-teal flex items-center gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Orçamento
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-20 max-w-2xl mx-auto text-center glass p-6 rounded-3xl border-white/5">
          <p className="text-slate-400 text-sm">
            <span className="font-bold text-white block mb-2">Nota:</span>
            Galeria ilustrativa preparada para apresentar a excelência dos serviços Infinity Clean. 
            As fotografias reais dos projetos em Portugal e Angola serão adicionadas em breve, 
            após compilação do material fotográfico oficial do cliente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
