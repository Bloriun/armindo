import React from 'react';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import {
  WHATSAPP_FORMATTED,
  EMAIL_CONTACT,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  getWhatsAppLink,
} from '../../data/portfolioData';

export const Contato: React.FC = () => {
  return (
    <section id="contato" className="w-full py-24 sm:py-32 bg-[#171717] text-[#F0EEE7] border-t border-white/10">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-4xl space-y-12">
          
          <div className="space-y-4">
            <span className="text-[11px] font-sans uppercase tracking-[0.28em] text-white/50 block font-semibold">
              Atendimento &amp; Novos Negócios
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white font-heading leading-tight">
              Transforme seu projeto em patrimônio sólido no litoral paulista.
            </h2>
            <p className="text-base text-white/70 max-w-2xl leading-relaxed font-light font-sans">
              Fale diretamente com nossa diretoria para compra, venda, locação ou engenharia built-to-suit personalizada para sua marca ou investimento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            
            {/* Canal 1: WhatsApp */}
            <div className="p-6 sm:p-7 bg-white/5 border border-white/15 space-y-3">
              <Phone className="w-6 h-6 text-white" />
              <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-white/50 block font-semibold">
                WhatsApp &amp; Telefone
              </span>
              <a
                className="text-lg font-bold text-white hover:underline block font-heading"
                href={getWhatsAppLink('Olá, gostaria de falar com a diretoria Armindo Ramalho.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                {WHATSAPP_FORMATTED}
              </a>
              <span className="text-xs text-white/40 block font-sans">Atendimento imediato</span>
            </div>

            {/* Canal 2: E-mail */}
            <div className="p-6 sm:p-7 bg-white/5 border border-white/15 space-y-3">
              <Mail className="w-6 h-6 text-white" />
              <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-white/50 block font-semibold">
                E-mail Corporativo
              </span>
              <a
                className="text-sm sm:text-base font-bold text-white hover:underline block break-all font-heading"
                href={`mailto:${EMAIL_CONTACT}`}
              >
                {EMAIL_CONTACT}
              </a>
              <span className="text-xs text-white/40 block font-sans">Administrativo &amp; Obras</span>
            </div>

            {/* Canal 3: Instagram Oficial */}
            <div className="p-6 sm:p-7 bg-white/5 border border-white/15 space-y-3">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-white/50 block font-semibold">
                Instagram Oficial
              </span>
              <a
                className="text-base font-bold text-white hover:underline block font-heading"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {INSTAGRAM_HANDLE}
              </a>
              <span className="text-xs text-white/40 block font-sans">Litoral de São Paulo</span>
            </div>

          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#171717] text-[11px] font-sans font-bold uppercase tracking-[0.22em] hover:bg-[#F0EEE7] transition-colors group shadow-lg"
              href={getWhatsAppLink('Olá, gostaria de iniciar uma conversa com a Armindo Ramalho Empreendimentos.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Iniciar Conversa no WhatsApp</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <span className="text-[11px] uppercase font-sans tracking-[0.2em] text-white/50">
              Resposta ágil e consultoria técnica especializada
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
