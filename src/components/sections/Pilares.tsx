import React from 'react';
import { ArrowRight, Building, Hammer, TrendingUp } from 'lucide-react';
import { PILLARS_DATA, getWhatsAppLink } from '../../data/portfolioData';

export const Pilares: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Building className="w-5 h-5 text-[#B96545]" />;
      case 1:
        return <Hammer className="w-5 h-5 text-[#B96545]" />;
      case 2:
        return <TrendingUp className="w-5 h-5 text-[#B96545]" />;
      default:
        return null;
    }
  };

  return (
    <section id="pilares" className="w-full py-24 sm:py-32 bg-[#F0EEE7] text-[#171717] border-t border-[#d9d6ce]">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16 space-y-14">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#d9d6ce]">
          <div className="space-y-2">
            <span className="text-[11px] font-sans uppercase tracking-[0.26em] text-[#6b6962] block">
              Diretrizes Estratégicas
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#171717] font-heading">
              Pilares de Atuação
            </h2>
          </div>
          <p className="text-sm text-[#6b6962] max-w-md font-sans">
            Foco prioritário em engenharia corporativa, Built-to-Suit para redes multinacionais e incorporações com alto potencial de valorização no litoral.
          </p>
        </div>

        {/* Linhas Editoriais Contínuas */}
        <div className="divide-y divide-[#d9d6ce] border-b border-[#d9d6ce]">
          {PILLARS_DATA.map((pilar, idx) => (
            <div
              key={pilar.id}
              className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center group hover:bg-white/60 transition-colors px-4 -mx-4"
            >
              <div className="md:col-span-2 flex items-center gap-3">
                <span className="text-2xl font-bold font-sans text-[#6b6962] group-hover:text-[#171717] transition-colors tracking-tight">
                  {pilar.number}
                </span>
                {getIcon(idx)}
              </div>
              <div className="md:col-span-4 space-y-1">
                <h3 className="text-xl font-bold uppercase tracking-tight text-[#171717] font-heading">
                  {pilar.title}
                </h3>
                <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#6b6962] font-medium">
                  {pilar.subtitle}
                </span>
              </div>
              <div className="md:col-span-5">
                <p className="text-sm text-[#6b6962] leading-relaxed font-sans">
                  {pilar.description}
                </p>
              </div>
              <div className="md:col-span-1 flex md:justify-end">
                <a
                  className="w-10 h-10 border border-[#d9d6ce] flex items-center justify-center text-[#171717] group-hover:bg-[#171717] group-hover:text-white transition-colors"
                  href={getWhatsAppLink(pilar.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Falar sobre ${pilar.title} via WhatsApp`}
                >
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
