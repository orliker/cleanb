import { motion } from 'motion/react';
import { MessageSquare, Camera, FileText, CalendarRange, CheckCircle2, ShieldCheck, HeartHandshake, Zap } from 'lucide-react';
import { VisualImage } from './VisualImage';
import { siteImages } from '../constants';

export function HowItWorks() {
  const steps = [
    {
      icon: <MessageSquare />,
      title: "Pedir Orçamento",
      desc: "Envie-nos uma mensagem rápida no WhatsApp. Respondemos em minutos."
    },
    {
      icon: <CalendarRange />,
      title: "Agendar",
      desc: "Escolha o dia e hora que melhor se adapta à sua rotina."
    },
    {
      icon: <Zap />,
      title: "Limpeza",
      desc: "A nossa equipa profissional cuida de tudo com rigor e detalhe."
    },
    {
      icon: <HeartHandshake />,
      title: "Acompanhamento",
      desc: "Focamo-nos na sua comodidade. Relatório visual opcional via WhatsApp ao finalizar."
    }
  ];

  return (
    <section id="processo" className="section-padding bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-cyan-900/5 rounded-full blur-[100px] -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-secondary font-bold tracking-widest uppercase text-xs">Passo a Passo</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 text-white">Simples, prático e eficiente.</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative group text-center"
            >
              {/* Connector Line (Desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-white/5 -z-10" />
              )}
              
              <div className="w-24 h-24 bg-white/5 border border-white/10 shadow-xl rounded-3xl flex items-center justify-center mx-auto mb-6 text-brand-secondary group-hover:bg-brand-primary group-hover:text-black transition-all duration-500 transform group-hover:rotate-6">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              
              <div className="mt-4 inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/5 text-slate-500 text-xs font-bold ring-4 ring-brand-dark">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  const reasons = [
    {
      title: "Atenção ao Mínimo Detalhe",
      desc: "Não limpamos apenas o que se vê. Focamos nos cantos e pormenores que fazem a diferença.",
      icon: <Zap size={24} />
    },
    {
      title: "Comunicação Transparente",
      desc: "Sem letras pequenas. Acompanhamento por WhatsApp em tempo real durante o processo.",
      icon: <MessageSquare size={24} />
    },
    {
      title: "Produtos de Alta Performance",
      desc: "Utilizamos as melhores soluções do mercado para garantir brilho e desinfecção duradoura.",
      icon: <ShieldCheck size={24} />
    },
    {
      title: "Confiança e Segurança",
      desc: "Uma equipa profissional que respeita o seu espaço privado como se fosse o seu próprio.",
      icon: <HeartHandshake size={24} />
    }
  ];

  return (
    <section className="section-padding bg-[#0a0f12] text-white overflow-hidden relative">
       {/* Background glow shadow */}
       <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px]" />

       <div className="max-w-7xl mx-auto relative z-10">
         <div className="grid lg:grid-cols-12 gap-20 items-center">
           <div className="lg:col-span-5">
              <span className="text-brand-secondary font-bold tracking-widest uppercase text-xs">O Nosso Diferencial</span>
              <h2 className="font-display text-5xl md:text-6xl font-bold mt-4 leading-[1.1] tracking-tighter">
                A escolha de quem valoriza o <span className="text-brand-secondary italic">detalhe.</span>
              </h2>
              <p className="text-slate-400 mt-8 mb-12 text-xl leading-relaxed">
                Mais do que uma limpeza, entregamos tranquilidade. O nosso padrão de exigência é o que nos torna referência em Lisboa e arredores.
              </p>
              
              <div className="relative rounded-[40px] overflow-hidden border border-white/10 group mb-10 lg:mb-0">
                <VisualImage 
                  src={siteImages.gridDiff} 
                  alt="High standard cleaning" 
                  className="w-full aspect-[4/3] group-hover:scale-105 transition-transform duration-700 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f12] to-transparent" />
                <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                  {['Lisboa', 'Sintra', 'Cascais', 'Loures', 'Odivelas'].map(area => (
                    <div key={area} className="px-3 py-1.5 bg-white/5 border border-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-white hover:text-brand-secondary transition-colors">
                      {area}
                    </div>
                  ))}
                </div>
              </div>
           </div>

           <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {reasons.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 border border-white/10 p-8 rounded-[32px] hover:bg-white/10 transition-all group"
                >
                  <div className="text-brand-secondary mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-white">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
           </div>
         </div>
       </div>
    </section>
  );
}
