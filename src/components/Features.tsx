import { motion } from 'framer-motion';
import { MessageSquare, Camera, FileText, CalendarRange, CheckCircle2, ShieldCheck, HeartHandshake, Zap, ArrowRight } from 'lucide-react';
import { VisualImage } from './VisualImage';
import { siteImages } from '../constants';
import { companyData } from '../data/companyData';

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
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-[100px] -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-brand-primary font-bold tracking-[0.3em] uppercase text-xs">Passo a Passo</span>
          <h2 className="font-display text-5xl md:text-6xl font-bold mt-4 text-white tracking-tighter">
            Simples, <span className="text-gradient-teal italic">prático</span> e eficiente.
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative group text-center"
            >
              <div className="w-24 h-24 bg-white/5 border border-white/10 shadow-xl rounded-[32px] flex items-center justify-center mx-auto mb-8 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-2 group-hover:rotate-6">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{step.desc}</p>
              
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-brand-primary text-xs font-bold ring-4 ring-brand-dark">
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
    <section className="section-padding bg-brand-darker text-white overflow-hidden relative">
       {/* Background glow shadow */}
       <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px]" />

       <div className="max-w-7xl mx-auto relative z-10">
         <div className="grid lg:grid-cols-12 gap-20 items-center">
           <div className="lg:col-span-5">
              <span className="text-brand-primary font-bold tracking-[0.3em] uppercase text-xs">O Nosso Diferencial</span>
              <h2 className="font-display text-5xl md:text-7xl font-bold mt-4 leading-[1] tracking-tighter">
                A escolha de quem valoriza o <span className="text-gradient-teal italic">detalhe.</span>
              </h2>
              <p className="text-slate-400 mt-8 mb-12 text-xl leading-relaxed">
                Mais do que uma limpeza, entregamos tranquilidade. O nosso padrão de exigência é o que nos torna referência entre Portugal e Angola.
              </p>
              
              <div className="relative rounded-[48px] overflow-hidden border border-white/10 group mb-10 lg:mb-0 shadow-2xl">
                <VisualImage 
                  src={siteImages.gridDiff} 
                  alt="High standard cleaning" 
                  className="w-full aspect-[4/3] group-hover:scale-110 transition-transform duration-1000 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/20 to-transparent" />
                <div className="absolute bottom-10 left-10 flex flex-wrap gap-3">
                  {['Portugal', 'Angola', 'Lisboa', 'Luanda'].map(area => (
                    <div key={area} className="px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full text-[10px] font-bold uppercase tracking-widest text-white hover:bg-brand-primary hover:border-brand-primary transition-all duration-300">
                      {area}
                    </div>
                  ))}
                </div>
              </div>
           </div>

           <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8">
              {reasons.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="premium-card p-10 group"
                >
                  <div className="text-brand-primary mb-6 group-hover:scale-110 group-hover:text-white transition-all duration-500 bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-white group-hover:text-brand-primary transition-colors">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
              
              <div className="sm:col-span-2 mt-8">
                <a 
                  href={companyData.contact.whatsappLink}
                  className="flex items-center justify-between bg-white/5 border border-white/10 p-8 rounded-[32px] group hover:border-brand-primary/50 transition-all"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center text-white shadow-teal">
                      <MessageSquare size={32} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl">Dúvidas?</h4>
                      <p className="text-slate-400 text-sm">Fale connosco agora pelo WhatsApp</p>
                    </div>
                  </div>
                  <ArrowRight size={32} className="text-brand-primary group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
           </div>
         </div>
       </div>
    </section>
  );
}
