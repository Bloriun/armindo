import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_FORMATTED, getWhatsAppLink } from '../../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Obras', href: '#corte-arquitetonico' },
    { label: 'Curadoria', href: '#curadoria' },
    { label: 'Empresa', href: '#manifesto' },
    { label: 'Atuação', href: '#pilares' },
    { label: 'Acervo', href: '#vitrine' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#121212]/95 backdrop-blur-xl border-b border-white/15 py-3.5 shadow-2xl'
          : 'bg-[#171717]/85 backdrop-blur-md border-b border-white/10 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16 w-full">
        <div className="flex items-center justify-between gap-6">
          
          {/* Marca Institucional: Monograma + Tipografia Arquitetônica */}
          <a
            href="#hero"
            className="flex items-center gap-3.5 group focus:outline-none focus:ring-1 focus:ring-white shrink-0"
            aria-label="Armindo Ramalho Empreendimentos - Início"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 bg-white/5 border border-white/20 p-1 flex items-center justify-center transition-colors duration-300 group-hover:border-white/50">
              <img
                alt="Monograma Armindo Ramalho"
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
              <span className="text-[9px] tracking-[0.24em] uppercase text-white/60 font-sans mt-1">
                EMPREENDIMENTOS // ENGENHARIA
              </span>
            </div>
          </a>

          {/* Links Centrais de Navegação Editorial */}
          <nav
            className="hidden lg:flex items-center gap-8 xl:gap-10 text-[11px] uppercase tracking-[0.22em] font-medium text-white/80"
            aria-label="Navegação Principal"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-[#B96545] after:transition-all whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Ação Institucional Direta (CTA) */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              className="hidden sm:inline-flex items-center gap-2.5 px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] font-sans font-semibold border border-white/25 text-white bg-white/5 hover:bg-white hover:text-[#171717] transition-all duration-300 group shadow-sm"
              href={getWhatsAppLink('Olá, vim através do site da Armindo Ramalho e gostaria de falar com a equipe de engenharia e novos negócios.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Fale com a equipe</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Botão Menu Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-controls="mobile-nav-drawer"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              className="lg:hidden p-2 text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-colors focus:outline-none focus:ring-1 focus:ring-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Menu Mobile Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-drawer"
            className="lg:hidden w-full pt-6 pb-4 border-t border-white/15 mt-4 text-white animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <nav className="flex flex-col space-y-3 text-xs uppercase tracking-[0.22em] font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-white py-2.5 border-b border-white/5 flex items-center justify-between text-white/90"
                >
                  <span>{link.label}</span>
                  <span className="text-white/40 text-[10px]">→</span>
                </a>
              ))}
              <a
                className="inline-flex items-center justify-center gap-2 py-3.5 mt-3 bg-white text-[#171717] font-bold font-sans tracking-wider hover:bg-[#F0EEE7] transition-colors"
                href={getWhatsAppLink('Olá, gostaria de falar com a equipe Armindo Ramalho.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Fale com a equipe ({WHATSAPP_FORMATTED})</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </nav>
          </div>
        )}

      </div>
    </header>
  );
};
