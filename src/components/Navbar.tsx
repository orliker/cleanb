import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle, Globe } from 'lucide-react';
import { companyData } from '../data/companyData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Sobre nós', href: '#sobre-nos' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Portugal & Angola', href: '#internacional' },
    { name: 'Equipa', href: '#equipa' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-2 md:py-4' : 'py-4 md:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div 
          className={`flex items-center justify-between transition-all duration-500 rounded-2xl md:rounded-3xl px-4 md:px-6 ${
            scrolled ? 'glass-dark py-2 md:py-3 shadow-premium' : 'bg-transparent py-0'
          }`}
        >
          {/* Logo */}
          <a href="#" className="flex flex-col items-center group py-1">
            <div className="flex flex-col items-center">
              <img 
                src={companyData.logo} 
                alt={companyData.name} 
                className="h-7 md:h-10 w-auto object-contain rounded-sm group-hover:opacity-80 transition-opacity"
              />
              <span className="text-[6px] md:text-[8px] font-bold tracking-[0.25em] md:tracking-[0.4em] text-brand-primary uppercase mt-0.5 whitespace-nowrap">
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
                className="text-xs font-bold uppercase tracking-[0.15em] text-slate-300 hover:text-brand-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href={companyData.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand-primary text-white px-6 py-2.5 md:py-3 rounded-xl md:rounded-2xl font-bold text-xs uppercase tracking-widest shadow-teal hover:bg-brand-secondary active:scale-95 transition-all"
            >
              <MessageCircle size={16} />
              Orçamento
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
                  className="text-xl font-display font-bold text-white hover:text-brand-primary transition-colors"
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
