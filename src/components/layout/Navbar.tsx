import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_FORMATTED, getWhatsAppLink } from '../../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Empreendimentos', href: '#curadoria' },
    { label: 'Obras Corporativas', href: '#comercial' },
    { label: 'Manifesto', href: '#manifesto' },
    { label: 'Pilares', href: '#pilares' },
    { label: 'Acervo', href: '#vitrine' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 sm:px-10 lg:px-16 ${
        isScrolled
          ? 'py-4 bg-[#171717]/95 backdrop-blur-md shadow-2xl border-b border-white/10'
          : 'py-6 bg-[#171717]/40 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-[1520px] mx-auto flex items-center justify-between gap-8">
        
        {/* Zona 1: Marca & Monograma AR */}
        <a
          href="#"
          className="flex items-center gap-3.5 group focus:outline-none focus:ring-1 focus:ring-white/40 shrink-0"
          aria-label="Armindo Ramalho Empreendimentos - Início"
        >
          <div className="relative w-9 h-9 shrink-0 bg-white/5 border border-white/15 p-1 flex items-center justify-center transition-colors duration-300 group-hover:border-white/40">
            <img
              alt="Monograma AR"
              className="w-full h-full object-contain filter invert opacity-95 transition-transform duration-300 group-hover:scale-105"
              src="/assets/images/logo.jpg"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                if (target.parentElement) {
                  target.parentElement.innerHTML = '<span class="text-xs font-bold text-white tracking-widest font-heading">AR</span>';
                }
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm tracking-[0.22em] uppercase font-bold text-white leading-none font-heading group-hover:text-white transition-colors">
              ARMINDO RAMALHO
            </span>
            <span className="text-[9px] tracking-[0.28em] uppercase text-white/60 font-sans mt-1">
              EMPREENDIMENTOS // ENGENHARIA
            </span>
          </div>
        </a>

        {/* Zona 2: Links de Navegação Textuais e Limpos */}
        <nav
          className="hidden lg:flex items-center gap-7 xl:gap-9 text-[11px] uppercase tracking-[0.22em] font-medium text-white/80"
          aria-label="Navegação Principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-[#B96545] after:transition-all whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zona 3: Ação Primária de Atendimento */}
        <div className="flex items-center gap-4 shrink-0">
          <a
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-[10px] uppercase tracking-[0.2em] font-sans font-semibold border border-white/20 text-white bg-white/5 hover:bg-white hover:text-[#171717] transition-all duration-300"
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{WHATSAPP_FORMATTED}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            className="lg:hidden p-2 text-white border border-white/20 bg-white/5 focus:outline-none focus:ring-1 focus:ring-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Drawer de Navegação Mobile */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden w-full pt-5 pb-4 border-t border-white/10 mt-4 text-white"
        >
          <nav className="flex flex-col space-y-3.5 text-xs uppercase tracking-[0.22em] font-medium px-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white/80 py-1.5 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              className="inline-flex items-center justify-center gap-2 py-3 mt-2 bg-white text-[#171717] font-bold font-sans tracking-wider hover:bg-[#F0EEE7] transition-colors"
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>WhatsApp {WHATSAPP_FORMATTED}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
