import { motion } from 'motion/react';
import { MousePointer2, ChevronRight, CheckCircle2, Sparkle } from 'lucide-react';
import { VisualImage } from './VisualImage';
import { siteImages } from '../constants';

export default function Hero() {
  const whatsappUrl = "https://wa.me/351926114896?text=Ol%C3%A1%2C%20gostaria%20de%20pedir%20um%20or%C3%A7amento%20para%20um%20servi%C3%A7o%20de%20limpeza.";

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-dark">
      {/* Background Elements */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center section-padding w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <div className="inline-flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/20 text-brand-secondary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
            <span className="w-1.5 h-1.5 bg-brand-secondary rounded-full animate-pulse" />
            Excelência em Lisboa
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-light leading-[1.1] tracking-tight text-white">
            Limpezas que <br/>
            <span className="font-bold italic text-brand-secondary">transformam</span> o seu espaço.
          </h1>
          
          <p className="text-lg text-slate-400 max-w-md leading-relaxed">
            Residencial, empresarial e automóvel com um padrão premium de detalhe e confiança. Transformamos o seu ambiente com precisão.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-primary text-black px-8 py-5 rounded-2xl font-bold shadow-cyan hover:bg-brand-secondary active:scale-95 transition-all text-center flex items-center justify-center gap-3 lg:text-lg group"
            >
              Pedir Orçamento no WhatsApp
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#servicos"
              className="bg-white/5 text-white px-8 py-5 rounded-2xl font-bold border border-white/10 hover:bg-white/10 transition-all text-center flex items-center justify-center gap-2 lg:text-lg"
            >
              Ver Serviços
            </a>
          </div>

          <div className="grid grid-cols-2 sm:flex items-center gap-6 pt-6">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <CheckCircle2 className="text-brand-secondary" size={18} />
              Atendimento Rápido
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <CheckCircle2 className="text-brand-secondary" size={18} />
              Brilho Garantido
            </div>
          </div>
        </motion.div>

        {/* Visual Composition */}
        <motion.div
          initial={{ opacity: 0, shadow: "none" }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 p-4">
            <div className="aspect-square bg-gradient-to-br from-brand-primary to-brand-secondary rounded-[40px] shadow-2xl relative overflow-hidden group border border-white/20">
              <VisualImage 
                src={siteImages.hero} 
                alt="Hero cleaning" 
                className="absolute inset-0 group-hover:scale-110 transition-transform duration-700 w-full h-full" 
                overlay 
              />
              
              {/* Overlay Cards - Floating 3D feel */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-[-20px] p-6 rounded-3xl bg-brand-dark/60 border border-white/10 backdrop-blur-xl shadow-2xl max-w-[200px] z-10"
              >
                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-black">
                    <Sparkle size={20} />
                  </div>
                  <p className="text-sm font-bold text-white">Recuperação Total</p>
                  <p className="text-xs text-slate-400">Brilho profissional em cada detalhe.</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 right-[-20px] p-6 rounded-3xl bg-brand-dark/40 border border-white/10 backdrop-blur-xl shadow-2xl max-w-[220px]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-dark bg-slate-800" />
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Satisfação</p>
                    <p className="text-sm font-bold text-white">+500 Clientes</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
