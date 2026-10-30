import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CATALOG_ITEMS, getWhatsAppLink } from '../../data/portfolioData';
import { ProjectItem } from '../../types';

interface CuradoriaProps {
  onSelectProject: (project: ProjectItem, triggerEl?: HTMLElement) => void;
}

export const Curadoria: React.FC<CuradoriaProps> = ({ onSelectProject }) => {
  const [acaiItem, rivieraItem, bkItanhaemItem] = CATALOG_ITEMS;

  return (
    <section id="curadoria" className="w-full py-28 sm:py-36 bg-[#F0EEE7] text-[#171717] border-t border-[#d9d6ce]">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16 space-y-20">
        
        {/* Cabeçalho Editorial com Linha Terracota e Tipografia de Grande Porte */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-[#d9d6ce] pb-10">
          <div className="lg:col-span-8 space-y-4">
            <div className="text-[11px] font-sans uppercase tracking-[0.28em] text-[#6b6962] flex items-center gap-3">
              <span className="w-8 h-[1.5px] bg-[#B96545] inline-block" />
              <span>ATLAS LITORÂNEO // CURADORIA DE ENGENHARIA</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#171717] font-heading leading-[1.02]">
              Grandes Realizações &amp;<br />Obras de Destaque
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm sm:text-base text-[#6b6962] leading-relaxed font-sans font-light">
              Projetos corporativos executados sob medida para franquias multinacionais consolidadas e residências nobres no litoral paulista. Precisão de engenharia e solidez comprovada.
            </p>
          </div>
        </div>

        {/* PRANCHA 01 (Panorama Arquitetônico Amplo): Riviera de São Lourenço */}
        {rivieraItem && (
          <div className="relative group bg-[#171717] border border-[#d9d6ce] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[540px]">
              {/* Fotografia em Grande Escala */}
              <div className="lg:col-span-8 relative overflow-hidden min-h-[380px] lg:min-h-full">
                <div
                  className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                  style={{
                    backgroundImage: `url('${rivieraItem.image}')`,
                    backgroundPosition: 'center 30%',
                  }}
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/80 via-transparent to-transparent lg:hidden" />
                <span className="absolute top-5 left-5 px-3 py-1 bg-[#171717] text-white text-[9px] uppercase font-sans tracking-[0.22em] font-semibold">
                  {rivieraItem.badge} // ALTO PADRÃO
                </span>
              </div>

              {/* Bloco Editorial Lateral */}
              <div className="lg:col-span-4 p-8 sm:p-12 bg-white flex flex-col justify-between space-y-8 border-t lg:border-t-0 lg:border-l border-[#d9d6ce]">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-sans tracking-[0.24em] text-[#B96545] font-semibold block">
                      {rivieraItem.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#171717] font-heading">
                      {rivieraItem.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#6b6962] leading-relaxed font-sans font-light">
                    {rivieraItem.description}
                  </p>

                  {/* Especificações de Arquitetura */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#d9d6ce]">
                    {rivieraItem.specs.map((spec, i) => (
                      <div key={i} className="space-y-0.5">
                        <span className="text-[9px] uppercase font-sans tracking-wider text-[#6b6962] block">
                          {spec.label}
                        </span>
                        <span className="text-xs font-bold text-[#171717] font-heading block">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-6 border-t border-[#d9d6ce]">
                  <button
                    onClick={(e) => onSelectProject(rivieraItem, e.currentTarget)}
                    className="flex-1 py-3.5 bg-[#171717] text-white text-[10px] uppercase tracking-[0.2em] font-sans font-bold hover:bg-black transition-colors focus:outline-none focus:ring-1 focus:ring-[#171717]"
                  >
                    Ver Ficha Técnica
                  </button>
                  <a
                    className="w-12 h-12 border border-[#d9d6ce] text-[#171717] flex items-center justify-center hover:bg-[#171717] hover:text-white transition-colors"
                    href={getWhatsAppLink(rivieraItem.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Consultar ${rivieraItem.title} via WhatsApp`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PRANCHA 02 (Díptico Assimétrico): The Best Açaí + BK Itanhaém Case */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="comercial">
          
          {/* Coluna Esquerda: The Best Açaí (Proporção 7 colunas) */}
          {acaiItem && (
            <div className="lg:col-span-7 group bg-white border border-[#d9d6ce] flex flex-col justify-between overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#171717]">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                  style={{
                    backgroundImage: `url('${acaiItem.image}')`,
                    backgroundPosition: 'center 20%',
                  }}
                  aria-hidden="true"
                />
                <span className="absolute top-5 left-5 px-3 py-1 bg-[#171717] text-white text-[9px] uppercase font-sans tracking-[0.22em] font-semibold">
                  PONTO ESTRATÉGICO // COMERCIAL
                </span>
              </div>

              <div className="p-8 sm:p-10 flex flex-col justify-between flex-1 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-sans tracking-[0.24em] text-[#B96545] font-semibold">
                      {acaiItem.subtitle}
                    </span>
                    <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#6b6962]">
                      {acaiItem.location}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#171717] font-heading">
                    {acaiItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6b6962] leading-relaxed font-sans font-light">
                    {acaiItem.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#d9d6ce] flex items-center justify-between">
                  <button
                    onClick={(e) => onSelectProject(acaiItem, e.currentTarget)}
                    className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-[#171717] hover:text-[#B96545] transition-colors"
                  >
                    Especificações Técnicas →
                  </button>
                  <a
                    className="inline-flex items-center gap-1.5 text-[10px] uppercase font-sans tracking-[0.2em] font-semibold text-[#171717] hover:underline"
                    href={getWhatsAppLink(acaiItem.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Consultar Ponto</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Coluna Direita: Burger King Itanhaém Case Concluído (Proporção 5 colunas) */}
          {bkItanhaemItem && (
            <div className="lg:col-span-5 group bg-[#171717] text-white border border-[#d9d6ce] flex flex-col justify-between overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden bg-black">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                  style={{
                    backgroundImage: `url('${bkItanhaemItem.image}')`,
                    backgroundPosition: 'center 40%',
                  }}
                  aria-hidden="true"
                />
                <span className="absolute top-5 left-5 px-3 py-1 bg-white text-[#171717] text-[9px] uppercase font-sans tracking-[0.22em] font-bold">
                  CASE CONCLUÍDO // OPERAÇÃO ATIVA
                </span>
              </div>

              <div className="p-8 sm:p-10 flex flex-col justify-between flex-1 space-y-6">
                <div className="space-y-3">
                  <span className="text-[10px] uppercase font-sans tracking-[0.24em] text-[#B96545] font-semibold block">
                    {bkItanhaemItem.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-white font-heading">
                    {bkItanhaemItem.title}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed font-sans font-light">
                    {bkItanhaemItem.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/15 flex items-center justify-between">
                  <button
                    onClick={(e) => onSelectProject(bkItanhaemItem, e.currentTarget)}
                    className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-white hover:text-[#B96545] transition-colors"
                  >
                    Ver Ficha Técnica →
                  </button>
                  <a
                    className="w-10 h-10 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-[#171717] transition-colors"
                    href={getWhatsAppLink(bkItanhaemItem.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Consultar ${bkItanhaemItem.title} via WhatsApp`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
