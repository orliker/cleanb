import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Sparkle, ArrowLeftRight } from 'lucide-react';
import { VisualImage } from './VisualImage';
import { siteImages } from '../constants';

const results = [
  {
    id: 'cozinha',
    label: 'Cozinha',
    before: siteImages.beforeKitchen,
    after: siteImages.afterKitchen,
    title: 'Desinfecção Total de Cozinhas',
    desc: 'Eliminação profunda de gorduras e polimento de todas as superfícies de aço e pedra.'
  },
  {
    id: 'wc',
    label: 'WC',
    before: siteImages.beforeBathroom,
    after: siteImages.afterBathroom,
    title: 'Higienização de Casas de Banho',
    desc: 'Remoção de calcário e restauração do brilho original em loiças e azulejos.'
  },
  {
    id: 'escritorio',
    label: 'Escritório',
    before: siteImages.beforeOffice,
    after: siteImages.afterOffice,
    title: 'Espaços de Trabalho Renovados',
    desc: 'Limpeza minuciosa de postos de trabalho, garantindo um ambiente fresco e produtivo.'
  },
  {
    id: 'obra',
    label: 'Pós-Obra',
    before: siteImages.beforePostConstruction,
    after: siteImages.afterPostConstruction,
    title: 'Finalização Pós-Obra',
    desc: 'A etapa final para transformar um estaleiro numa casa pronta a habitar.'
  }
];

export default function BeforeAfter() {
  const [activeTab, setActiveTab] = useState(results[0]);
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <section id="resultados" className="section-padding bg-brand-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[150px] -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-secondary font-bold tracking-widest uppercase text-xs">Transformação Visual</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 text-white">
            A nossa <span className="text-brand-secondary italic uppercase tracking-tighter">atenção ao detalhe.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mt-4">
            Deslize o cursor para explorar exemplos ilustrativos do nível de cuidado e limpeza que aplicamos em cada ambiente.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {results.map((res) => (
            <button
              key={res.id}
              onClick={() => {
                setActiveTab(res);
                setSliderPos(50);
              }}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                activeTab.id === res.id 
                ? 'bg-brand-primary text-black shadow-cyan' 
                : 'bg-white/5 text-slate-400 hover:bg-white/10 border border-white/10'
              }`}
            >
              {res.label}
            </button>
          ))}
        </div>

        {/* Interactive Slider */}
        <div className="max-w-4xl mx-auto">
          <motion.div 
            key={activeTab.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative aspect-video lg:aspect-[16/9] bg-slate-900 rounded-[32px] overflow-hidden shadow-2xl border border-white/10 cursor-ew-resize group"
            ref={containerRef}
            onMouseMove={(e) => e.buttons === 1 && handleMove(e)}
            onMouseDown={handleMove}
            onTouchMove={handleMove}
          >
            {/* After Image */}
            <VisualImage 
              src={activeTab.after} 
              alt="After cleaning" 
              className="absolute inset-0 w-full h-full" 
            />
            
            {/* Before Image (Clipping) */}
            <div 
              className="absolute inset-0 overflow-hidden border-r-2 border-white/50 z-10 shadow-[-10px_0_30px_rgba(0,0,0,0.5)]"
              style={{ 
                clipPath: `inset(0 ${100 - sliderPos}% 0 0)`
              }}
            >
              <VisualImage 
                src={activeTab.before} 
                alt="Before cleaning" 
                className="w-full h-full" 
              />
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white z-20 cursor-ew-resize"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-2xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowLeftRight size={14} />
                <span>Comparar</span>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-6 left-6 z-20 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded text-[10px] font-bold uppercase tracking-widest text-white border border-white/20 pointer-events-none">
              Sem Limpeza
            </div>
            <div className="absolute top-6 right-6 z-20 bg-brand-primary px-4 py-1.5 rounded text-[10px] font-bold uppercase tracking-widest text-black shadow-lg pointer-events-none">
              Com Limpeza
            </div>

            {/* Info Overlay on Hover (Desktop) */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-brand-dark to-transparent text-white opacity-0 group-hover/motion:opacity-100 group-hover:opacity-100 transition-opacity z-10">
               <h4 className="text-xl font-bold">{activeTab.title}</h4>
               <p className="text-sm opacity-80">{activeTab.desc}</p>
            </div>
          </motion.div>
          
          <div className="mt-8 text-center md:hidden">
            <p className="text-sm text-slate-500 animate-pulse flex items-center justify-center gap-2 font-bold uppercase tracking-widest">
              <ChevronLeft size={16} /> Arraste para comparar <ChevronRight size={16} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
