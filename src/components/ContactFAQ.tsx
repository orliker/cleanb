import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Instagram, Globe, Mail, Phone, Send, ChevronDown, CheckCircle2 } from 'lucide-react';
import { companyData } from '../data/companyData';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    servico: '',
    localizacao: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, o meu nome é ${formData.nome}. Gostaria de pedir um orçamento para ${formData.servico}, em ${formData.localizacao}. Mensagem: ${formData.mensagem}`;
    const url = `https://wa.me/${companyData.contact.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contacto" className="section-padding bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <span className="text-brand-primary font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">Contacto Direto</span>
            <h2 className="font-display text-[clamp(2.2rem,8vw,4.5rem)] font-bold mt-2 md:mt-4 text-white tracking-tighter leading-tight">
              Peça o seu <span className="text-gradient-teal italic">orçamento</span> grátis.
            </h2>
            <p className="text-slate-400 text-sm md:text-lg mt-6 md:mt-8 leading-relaxed">
              Estamos prontos para transformar o seu espaço. Preencha o formulário e a nossa equipa entrará em contacto via WhatsApp em poucos minutos.
            </p>

            <div className="mt-8 md:mt-12 space-y-4 md:space-y-8">
              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 rounded-xl md:rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all shrink-0">
                  <Phone size={24} className="md:w-7 md:h-7" />
                </div>
                <div>
                  <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-0.5 md:mb-1">Telefone / WhatsApp</p>
                  <p className="text-white text-base md:text-xl font-bold">+{companyData.contact.whatsapp}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 rounded-xl md:rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all shrink-0">
                  <Instagram size={24} className="md:w-7 md:h-7" />
                </div>
                <div>
                  <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-0.5 md:mb-1">Instagram</p>
                  <p className="text-white text-base md:text-xl font-bold">{companyData.contact.instagramUser}</p>
                </div>
              </div>
              <a
                href={`mailto:${companyData.contact.email}`}
                className="flex items-center gap-4 md:gap-6 group"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 rounded-xl md:rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all shrink-0">
                  <Mail size={24} className="md:w-7 md:h-7" />
                </div>
                <div className="min-w-0">
                  <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-0.5 md:mb-1">Email profissional</p>
                  <p className="text-white text-base md:text-xl font-bold break-all">{companyData.contact.email}</p>
                </div>
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="premium-card p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-2">Nome Completo</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Ex: João Silva"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 md:p-5 text-[16px] text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-primary transition-all"
                    onChange={(e) => setFormData({...formData, nome: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-2">Telefone</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="Ex: 926 XXX XXX"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 md:p-5 text-[16px] text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-primary transition-all"
                    onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-2">Tipo de Serviço</label>
                  <select 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 md:p-5 text-[16px] text-white focus:outline-none focus:border-brand-primary transition-all appearance-none"
                    onChange={(e) => setFormData({...formData, servico: e.target.value})}
                  >
                    <option value="" className="bg-brand-dark">Selecionar serviço</option>
                    {companyData.services.map(s => <option key={s.id} value={s.title} className="bg-brand-dark">{s.title}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-2">Localização</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Ex: Lisboa ou Luanda"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 md:p-5 text-[16px] text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-primary transition-all"
                    onChange={(e) => setFormData({...formData, localizacao: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-2">Mensagem (Opcional)</label>
                <textarea 
                  rows={4}
                  placeholder="Conte-nos um pouco mais sobre o que precisa..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 md:p-5 text-[16px] text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-primary transition-all"
                  onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-brand-primary text-white py-6 rounded-2xl font-bold text-lg shadow-teal hover:bg-brand-secondary active:scale-[0.98] transition-all flex items-center justify-center gap-3"
              >
                Enviar Orçamento via WhatsApp
                <Send size={20} />
              </button>
              
              <p className="text-center text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                <span className="text-green-500">●</span> Resposta rápida garantida
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "Quais as zonas de atendimento em Portugal?", a: "Atuamos principalmente na zona de Lisboa, Cascais, Sintra, Oeiras e Loures, mas estamos disponíveis para deslocações sob consulta." },
    { q: "Prestão serviços em Luanda?", a: "Sim, estamos em fase de expansão em Angola, com equipas preparadas para atuar em toda a cidade de Luanda." },
    { q: "Como posso obter um orçamento?", a: "Pode preencher o formulário acima ou contactar-nos diretamente via WhatsApp. A resposta costuma demorar menos de 15 minutos." },
    { q: "Fazem limpezas pós-obra?", a: "Sim, somos especialistas em limpezas pós-obra profundas, removendo resíduos de construção e deixando o espaço pronto a habitar." }
  ];

  return (
    <section className="section-padding bg-brand-dark border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-primary font-bold tracking-[0.3em] uppercase text-xs">Dúvidas Frequentes</span>
          <h2 className="font-display text-4xl font-bold mt-4 text-white">Perguntas <span className="text-gradient-teal">Comuns</span></h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="premium-card p-2">
              <button 
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-white font-bold tracking-tight">{faq.q}</span>
                <ChevronDown className={`text-brand-primary transition-transform duration-500 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <motion.div
                initial={false}
                animate={{ height: openIndex === i ? 'auto' : 0, opacity: openIndex === i ? 1 : 0 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-6">
                  {faq.a}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-brand-darker border-t border-white/5 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <a href="#" className="flex flex-col mb-6 md:mb-8">
              <img 
                src={companyData.logo} 
                alt={companyData.name} 
                className="h-10 md:h-16 w-auto object-contain rounded-md hover:opacity-80 transition-opacity self-start"
              />
              <span className="text-[7px] md:text-[10px] font-bold tracking-[0.3em] text-brand-primary uppercase mt-1">
                Portugal & Angola
              </span>
            </a>
            <p className="text-slate-500 text-xs md:text-sm max-w-md leading-relaxed mb-6 md:mb-8">
              Uma marca angolana e portuguesa dedicada a serviços de limpeza profissional. Elevamos o padrão de higiene e organização em residências e empresas, com atuação em Portugal e foco estratégico em Luanda.
            </p>
            <a
              href={`mailto:${companyData.contact.email}`}
              className="group mb-6 inline-flex max-w-full items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left transition-all hover:border-brand-primary/40 hover:bg-brand-primary/10"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-primary/15 text-brand-primary transition-all group-hover:bg-brand-primary group-hover:text-white">
                <Mail size={20} />
              </span>
              <span className="min-w-0">
                <span className="block text-[9px] font-bold uppercase tracking-[0.25em] text-slate-500">Email profissional</span>
                <span className="block break-all text-sm font-semibold text-white md:text-base">{companyData.contact.email}</span>
              </span>
            </a>
            <div className="flex gap-4">
              <a href={companyData.contact.instagram} aria-label="Instagram" className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-xl md:rounded-2xl flex items-center justify-center text-white hover:bg-brand-primary transition-all">
                <Instagram size={20} className="md:w-6 md:h-6" />
              </a>
              <a href={companyData.contact.whatsappLink} aria-label="WhatsApp" className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-xl md:rounded-2xl flex items-center justify-center text-white hover:bg-brand-primary transition-all">
                <MessageCircle size={20} className="md:w-6 md:h-6" />
              </a>
              <a href={`mailto:${companyData.contact.email}`} aria-label="Email" className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-xl md:rounded-2xl flex items-center justify-center text-white hover:bg-brand-primary transition-all">
                <Mail size={20} className="md:w-6 md:h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Navegação</h4>
            <ul className="space-y-4">
              {['Início', 'Sobre nós', 'Serviços', 'Portfólio', 'Equipa'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-slate-500 text-sm hover:text-brand-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Serviços</h4>
            <ul className="space-y-4">
              {companyData.services.slice(0, 5).map(s => (
                <li key={s.id}>
                  <a href="#servicos" className="text-slate-500 text-sm hover:text-brand-primary transition-colors">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} {companyData.name}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const FloatingWhatsApp = () => {
  return (
    <a 
      href={companyData.contact.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce"
    >
      <MessageCircle size={32} />
      <span className="absolute -top-2 -right-2 bg-red-500 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border-4 border-brand-dark">1</span>
    </a>
  );
};
