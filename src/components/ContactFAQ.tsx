import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MessageCircle, Phone, Instagram, Send, Sparkles } from 'lucide-react';

const faqs = [
  {
    q: "Que tipos de limpeza realizam?",
    a: "Realizamos limpezas domésticas (manutenção e profunda), condomínios, escritórios, Airbnb (Alojamento Local) e pós-obra."
  },
  {
    q: "Como posso pedir um orçamento?",
    a: "É muito simples! Basta clicar em qualquer botão de WhatsApp nesta página. Pode enviar-nos fotografias ou vídeos do espaço para que possamos dar uma estimativa rápida."
  },
  {
    q: "O orçamento tem algum compromisso?",
    a: "Não, o orçamento é totalmente gratuito e sem qualquer compromisso. Só agendamos quando o cliente aprovar a proposta."
  },
  {
    q: "Fazem limpezas pós-obra?",
    a: "Sim, somos especialistas em pós-obra. Temos equipamentos e produtos específicos para remover pó fino, resíduos de tinta, silicone e cimento."
  },
  {
    q: "Atendem em que zonas?",
    a: "Focamos a nossa atuação em Lisboa e zonas envolventes (Cascais, Sintra, Loures, Odivelas, Amadora). Se estiver fora destas zonas, fale connosco para avaliarmos a deslocação."
  },
  {
    q: "Como é feito o pagamento?",
    a: "O pagamento é acordado no momento do orçamento, podendo ser feito por MBWay ou transferência bancária após a conclusão do serviço."
  }
];

export function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-brand-dark">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-secondary font-bold tracking-widest uppercase text-xs">Dúvidas Frequentes</span>
          <h2 className="font-display text-4xl font-bold mt-4 text-white">Perguntas comuns.</h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-white/5 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">
              <button 
                onClick={() => setActive(active === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold pr-8 text-white">{faq.q}</span>
                <ChevronDown className={`shrink-0 text-brand-secondary transition-transform ${active === i ? 'rotate-180' : ''}`} size={20} />
              </button>
              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className="p-6 pt-0 text-slate-400 leading-relaxed text-sm">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const whatsappUrl = "https://wa.me/351926114896?text=Ol%C3%A1%2C%20gostaria%20de%20pedir%20um%20or%C3%A7amento%20para%20um%20servi%C3%A7o%20de%20limpeza.";

  return (
    <footer id="contacto" className="bg-brand-dark border-t border-white/5 pt-20 pb-10 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="flex flex-col gap-6">
             <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-brand-secondary to-brand-primary rounded-lg flex items-center justify-center text-white shadow-cyan-sm">
                  <Sparkles size={18} />
                </div>
                <span className="font-display font-bold text-2xl leading-tight text-white uppercase tracking-tight">
                  Clean<span className="text-brand-secondary">B</span>
                </span>
             </div>
             <p className="text-slate-500 text-sm leading-relaxed">
               Excelência em limpeza residencial e empresarial em Lisboa. O seu espaço merece brilhar todos os dias.
             </p>
             <div className="flex gap-4">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-secondary hover:bg-brand-primary hover:text-black transition-all border border-white/5">
                  <MessageCircle size={20} />
                </a>
                <a href="https://instagram.com/cleanb.pt" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-secondary hover:bg-brand-primary hover:text-black transition-all border border-white/5">
                  <Instagram size={20} />
                </a>
                <a href="tel:+351926114896" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-secondary hover:bg-brand-primary hover:text-black transition-all border border-white/5">
                  <Phone size={20} />
                </a>
             </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white text-sm uppercase tracking-widest">Serviços</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-500">
              <li className="hover:text-white transition-colors cursor-pointer">Limpeza Residencial</li>
              <li className="hover:text-white transition-colors cursor-pointer">Limpeza de Condomínios</li>
              <li className="hover:text-white transition-colors cursor-pointer">Limpeza Pós-Obra</li>
              <li className="hover:text-white transition-colors cursor-pointer">Limpeza Automotiva</li>
              <li className="hover:text-white transition-colors cursor-pointer">Limpeza de Escritórios</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white text-sm uppercase tracking-widest">Links Rápidos</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-500">
              <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#resultados" className="hover:text-white transition-colors">Resultados</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Dúvidas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white text-sm uppercase tracking-widest">Contacto Directo</h4>
            <div className="flex flex-col gap-4">
               <a href={whatsappUrl} className="bg-white/5 border border-white/5 p-4 rounded-2xl flex items-center gap-3 group hover:bg-brand-primary transition-all">
                  <div className="w-10 h-10 bg-brand-primary text-black rounded-xl flex items-center justify-center group-hover:bg-white transition-colors">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-brand-secondary font-bold uppercase group-hover:text-black transition-colors">WhatsApp</p>
                    <p className="text-sm font-bold text-white group-hover:text-black transition-colors">+351 926 114 896</p>
                  </div>
               </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/5 gap-6">
          <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} CleanB. Lisboa & Arredores.
          </p>
          <div className="flex gap-8 text-[10px] text-slate-600 font-bold uppercase tracking-widest">
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> Online Agora</span>
            <span className="text-slate-500">@cleanb.pt</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/351926114896?text=Ol%C3%A1%2C%20gostaria%20de%20pedir%20um%20or%C3%A7amento%20para%20um%20servi%C3%A7o%20de%20limpeza.";
  
  return (
    <motion.a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all"
    >
      <MessageCircle size={32} />
      <span className="absolute -top-2 -left-2 flex h-5 w-5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-5 w-5 bg-white border-2 border-[#25D366]"></span>
      </span>
    </motion.a>
  );
}
