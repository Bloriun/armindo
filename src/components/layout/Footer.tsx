import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import {
  WHATSAPP_FORMATTED,
  EMAIL_CONTACT,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  getWhatsAppLink,
} from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#F0EEE7] text-[#171717] border-t border-[#d9d6ce]">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#d9d6ce]">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 p-1 border border-[#d9d6ce] bg-white flex items-center justify-center">
                <img
                  alt="Armindo Ramalho Empreendimentos"
                  className="w-full h-full object-contain filter grayscale contrast-125"
                  src="/assets/images/logo.jpg"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = '<span class="text-xs font-bold text-black font-heading">AR</span>';
                    }
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#171717] leading-tight font-heading">
                  Armindo Ramalho
                </span>
                <span className="text-[10px] tracking-[0.28em] uppercase text-[#6b6962] font-sans">
                  Empreendimentos // Engenharia
                </span>
              </div>
            </div>
            <p className="text-xs text-[#6b6962] leading-relaxed max-w-sm font-sans">
              Há mais de 25 anos atuando na construção civil, compra, venda e locação de imóveis no litoral de São Paulo com compromisso ético, rigor construtivo e solidez comprovada.
            </p>
            <div className="text-[10px] uppercase font-sans tracking-[0.2em] font-semibold text-[#6b6962]">
              Qualidade Construtiva &amp; Valorização Patrimonial
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h5 className="text-[11px] uppercase font-sans tracking-[0.24em] font-bold text-[#171717]">
              Navegação
            </h5>
            <ul className="space-y-3 text-xs text-[#6b6962] font-medium uppercase tracking-wider font-sans">
              <li>
                <a className="hover:text-[#171717] transition-colors" href="#curadoria">
                  Empreendimentos
                </a>
              </li>
              <li>
                <a className="hover:text-[#171717] transition-colors" href="#corte-arquitetonico">
                  Corte Arquitetônico
                </a>
              </li>
              <li>
                <a className="hover:text-[#171717] transition-colors" href="#manifesto">
                  Manifesto &amp; História
                </a>
              </li>
              <li>
                <a className="hover:text-[#171717] transition-colors" href="#pilares">
                  Pilares de Engenharia
                </a>
              </li>
              <li>
                <a className="hover:text-[#171717] transition-colors" href="#vitrine">
                  Acervo de Imóveis
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <h5 className="text-[11px] uppercase font-sans tracking-[0.24em] font-bold text-[#171717]">
              Canais de Contato
            </h5>
            <div className="space-y-2.5 text-xs text-[#6b6962] font-sans">
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#171717]" />
                <span>
                  WhatsApp: <strong className="text-[#171717]">{WHATSAPP_FORMATTED}</strong>
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#171717]" />
                <span>
                  E-mail: <strong className="text-[#171717]">{EMAIL_CONTACT}</strong>
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#171717]" />
                <span>
                  Atuação: <strong className="text-[#171717]">Litoral de São Paulo</strong>
                </span>
              </p>
            </div>
            <div className="pt-3">
              <a
                className="inline-flex items-center gap-2 text-[10px] uppercase font-sans tracking-[0.2em] font-bold text-[#171717] border-b border-[#171717] pb-1 hover:opacity-70 transition-opacity"
                href={getWhatsAppLink('Olá, gostaria de falar com a equipe Armindo Ramalho.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Falar Diretamente Conosco</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase font-sans tracking-[0.2em] text-[#6b6962]">
          <div>
            © {currentYear} Armindo Ramalho Empreendimentos. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-6">
            <a
              className="hover:text-[#171717] transition-colors"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {INSTAGRAM_HANDLE}
            </a>
            <span>•</span>
            <span>Litoral de São Paulo</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
