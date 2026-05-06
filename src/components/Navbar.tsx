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
        scrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div 
          className={`flex items-center justify-between transition-all duration-500 rounded-3xl px-6 ${
            scrolled ? 'glass-dark py-3 shadow-premium' : 'bg-transparent py-0'
          }`}
        >
          {/* Logo */}
          <a href="#" className="flex flex-col group">
            <img 
              src={companyData.logo} 
              alt={companyData.name} 
              className="h-12 w-auto object-contain rounded-md group-hover:opacity-80 transition-opacity"
            />
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
              className="flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-2xl font-bold text-xs uppercase tracking-widest shadow-teal hover:bg-brand-secondary active:scale-95 transition-all"
            >
              <MessageCircle size={16} />
              Orçamento
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
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
            className="lg:hidden bg-brand-dark border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-12 flex flex-col gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-2xl font-display font-bold text-white hover:text-brand-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={companyData.contact.whatsappLink}
                className="flex items-center justify-center gap-3 bg-brand-primary text-white py-5 rounded-2xl font-bold text-lg shadow-teal"
                onClick={() => setIsOpen(false)}
              >
                <MessageCircle size={24} />
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
