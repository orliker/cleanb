import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { companyData } from '../data/companyData';

const navLinks = [
  { name: 'Início', href: '#inicio' },
  { name: 'Sobre nós', href: '#sobre-nos' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Portfólio', href: '#portfolio' },
  { name: 'Portugal & Angola', href: '#internacional' },
  { name: 'Equipa', href: '#equipa' },
  { name: 'Contacto', href: '#contacto' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Início');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          const mostVisible = visibleEntries.reduce((prev, current) => 
            (prev.intersectionRatio > current.intersectionRatio) ? prev : current
          );
          
          const id = mostVisible.target.id;
          const activeLink = navLinks.find(link => link.href === `#${id}`);
          if (activeLink) {
            setActiveSection(activeLink.name);
          }
        }
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-1 md:py-4' : 'py-3 md:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 md:px-6">
        <div 
          className={`flex items-center justify-between transition-all duration-500 rounded-[20px] md:rounded-3xl px-3 md:px-6 ${
            scrolled ? 'bg-brand-dark/90 backdrop-blur-2xl border border-white/10 py-2.5 md:py-3 shadow-premium' : 'bg-transparent py-1 md:py-0'
          }`}
        >
          {/* Logo & Branding - strictly side-by-side on mobile */}
          <a href="#" className="flex items-center gap-2 md:gap-3 group shrink-0">
            <img 
              src={companyData.logo} 
              alt={companyData.name} 
              className={`w-auto object-contain rounded-sm transition-all duration-500 ${scrolled ? 'h-6 md:h-10' : 'h-8 md:h-12'} group-hover:opacity-80`}
            />
            <div className="flex flex-col justify-center mt-0.5">
              <span className={`text-white font-display font-bold tracking-tight leading-none transition-all duration-500 ${scrolled ? 'text-[12px] md:text-sm' : 'text-[14px] md:text-base'}`}>
                {companyData.shortName}
              </span>
              <span className={`text-brand-primary font-bold uppercase leading-tight mt-[1px] md:mt-0.5 whitespace-nowrap transition-all duration-500 ${scrolled ? 'text-[6px] md:text-[8px] tracking-[0.2em] md:tracking-[0.3em]' : 'text-[7px] md:text-[8px] tracking-[0.25em] md:tracking-[0.3em]'}`}>
                Portugal & Angola
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-xs font-bold uppercase tracking-[0.15em] transition-colors relative group ${
                  activeSection === link.name ? 'text-brand-primary' : 'text-slate-300 hover:text-brand-primary'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-primary transition-all duration-300 ${
                  activeSection === link.name ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </a>
            ))}
          </div>

          {/* Active Section & Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            {/* Animated Active Section Indicator (Mobile/Tablet) */}
            <AnimatePresence mode="wait">
              {scrolled && activeSection && (
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex items-center lg:hidden"
                >
                  <div className="flex items-center gap-1.5 bg-brand-primary/10 border border-brand-primary/20 backdrop-blur-md pl-1.5 pr-2.5 py-1 rounded-full shadow-teal">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                    <span className="text-brand-primary text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.15em] whitespace-nowrap max-w-[70px] sm:max-w-[120px] overflow-hidden text-ellipsis">
                      {activeSection}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <a 
              href={companyData.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 bg-brand-primary text-white px-6 py-2.5 md:py-3 rounded-xl md:rounded-2xl font-bold text-xs uppercase tracking-widest shadow-teal hover:bg-brand-secondary active:scale-95 transition-all"
            >
              <MessageCircle size={16} />
              Orçamento
            </a>

            {/* Mobile Hamburger Button */}
            <button 
              className={`lg:hidden text-white p-1.5 rounded-xl transition-all active:scale-95 flex items-center justify-center ${isOpen ? 'bg-white/10' : 'hover:bg-white/5'}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {isOpen ? <X size={22} className="text-brand-primary" /> : <Menu size={22} />}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-dark/95 backdrop-blur-xl border-b border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className={`text-xl font-display font-bold transition-colors ${
                    activeSection === link.name ? 'text-brand-primary' : 'text-white hover:text-brand-primary'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={companyData.contact.whatsappLink}
                className="flex items-center justify-center gap-2 bg-brand-primary text-white py-4 mt-2 rounded-xl font-bold text-base shadow-teal"
                onClick={() => setIsOpen(false)}
              >
                <MessageCircle size={20} />
                WhatsApp Orçamento
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
