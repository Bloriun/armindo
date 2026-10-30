import React, { useState } from 'react';
import { ArrowUpRight, MessageSquare, Eye, MapPin } from 'lucide-react';
import { CATALOG_ITEMS, getWhatsAppLink } from '../../data/portfolioData';
import { ProjectCategory, ProjectItem } from '../../types';

interface VitrineProps {
  onSelectProject: (project: ProjectItem, triggerEl?: HTMLElement) => void;
}

export const Vitrine: React.FC<VitrineProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | ProjectCategory>('all');

  const filterLabels: Record<string, string> = {
    all: '4 realizações e oportunidades catalogadas',
    commercial: '3 projetos comerciais e corporativos',
    beach: '2 investimentos beira-mar e residenciais nobres',
    rent: '2 oportunidades estruturadas para renda e locação',
  };

  const filteredItems = CATALOG_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.categories.includes(activeFilter);
  });

  const filterButtons: { id: 'all' | ProjectCategory; label: string }[] = [
    { id: 'all', label: 'Todos' },
    { id: 'commercial', label: 'Corporativos' },
    { id: 'beach', label: 'Residenciais' },
    { id: 'rent', label: 'Locação' },
  ];

  return (
    <section id="vitrine" className="w-full py-28 sm:py-36 bg-[#F0EEE7] text-[#171717] border-t border-[#d9d6ce]">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
        
        {/* Cabeçalho Editorial & Barra de Filtros Segmentada */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-[#d9d6ce]">
          <div className="space-y-3 max-w-xl">
            <div className="text-[11px] font-sans uppercase tracking-[0.28em] text-[#6b6962] flex items-center gap-2">
              <span className="w-6 h-[1.5px] bg-[#B96545] inline-block" />
              <span>CATÁLOGO TÉCNICO // OBRAS &amp; ATIVOS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#171717] font-heading">
              Acervo de Oportunidades &amp; Realizações
            </h2>
            <p className="text-xs sm:text-sm text-[#6b6962] font-sans font-light leading-relaxed">
              Diferenciação clara entre obras corporativas executadas para grandes marcas e oportunidades exclusivas para aquisição ou locação patrimonial no litoral.
            </p>
          </div>

          {/* Segmented Filter Control Acessível */}
          <div className="space-y-3 shrink-0">
            <div
              className="inline-flex p-1 bg-white border border-[#d9d6ce] text-[10px] uppercase font-sans tracking-[0.2em] font-semibold"
              role="tablist"
              aria-label="Filtros do Catálogo de Imóveis"
            >
              {filterButtons.map((btn) => {
                const isActive = activeFilter === btn.id;
                return (
                  <button
                    key={btn.id}
                    onClick={() => setActiveFilter(btn.id)}
                    role="tab"
                    aria-selected={isActive}
                    className={`px-5 py-2.5 transition-colors focus:outline-none focus:ring-1 focus:ring-[#171717] ${
                      isActive
                        ? 'bg-[#171717] text-white shadow-sm'
                        : 'text-[#6b6962] hover:text-[#171717]'
                    }`}
                  >
                    {btn.label}
                  </button>
                );
              })}
            </div>
            <div className="text-[11px] uppercase font-sans tracking-[0.2em] text-[#6b6962] text-right">
              <span>{filterLabels[activeFilter] || `${filteredItems.length} itens`}</span>
            </div>
          </div>
        </div>

        {/* CATÁLOGO EDITORIAL COM ESCALAS E PROPORÇÕES DIVERSIFICADAS (Sem 4 cards idênticos) */}
        <div className="space-y-10">
          
          {/* BLOCO A: Grid Assimétrico Dinâmico */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Item 1: Riviera de São Lourenço (Spans 7 cols, Formato Paisagem Editorial) */}
            {filteredItems.find((i) => i.id === 'riviera-mansion') && (
              <article className="lg:col-span-7 bg-white border border-[#d9d6ce] flex flex-col justify-between overflow-hidden group">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#171717]">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                    style={{
                      backgroundImage: "url('/assets/images/riviera-real.jpg')",
                      backgroundPosition: 'center 30%',
                    }}
                    aria-hidden="true"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 bg-[#171717] text-white text-[9px] uppercase font-sans tracking-[0.22em] font-semibold">
                      OPORTUNIDADE // RESIDENCIAL
                    </span>
                    <span className="px-2.5 py-1 bg-white text-[#171717] text-[9px] uppercase font-sans tracking-[0.2em] font-bold">
                      À VENDA
                    </span>
                  </div>
                </div>

                <div className="p-8 sm:p-10 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-1.5 text-xs text-[#6b6962] font-sans">
                      <MapPin className="w-3.5 h-3.5 text-[#B96545]" />
                      <span>Riviera de São Lourenço, Bertioga SP</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#171717] font-heading">
                      Riviera de São Lourenço Alto Padrão
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6b6962] leading-relaxed font-sans font-light">
                      Residência contemporânea com 04 suítes, pé-direito duplo, espaço gourmet integrado e piscina privativa aquecida. Pronta para morar com segurança 24h.
                    </p>
                  </div>

                  <div className="pt-5 border-t border-[#d9d6ce] flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        const item = filteredItems.find((i) => i.id === 'riviera-mansion');
                        if (item) onSelectProject(item, e.currentTarget);
                      }}
                      className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-[#171717] hover:text-[#B96545] transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Ver Ficha Completa</span>
                    </button>
                    <a
                      href={getWhatsAppLink('Olá, gostaria de informações sobre a casa na Riviera de São Lourenço.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#171717] text-white text-[10px] uppercase tracking-[0.2em] font-sans font-bold hover:bg-black transition-colors"
                    >
                      <span>Negociar</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            )}

            {/* Item 2: The Best Açaí (Spans 5 cols, Formato Vertical Monograph) */}
            {filteredItems.find((i) => i.id === 'the-best-acai') && (
              <article className="lg:col-span-5 bg-white border border-[#d9d6ce] flex flex-col justify-between overflow-hidden group">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#171717]">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                    style={{
                      backgroundImage: "url('/assets/images/the-best-acai.jpg')",
                      backgroundPosition: 'center 25%',
                    }}
                    aria-hidden="true"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 bg-[#171717] text-white text-[9px] uppercase font-sans tracking-[0.22em] font-semibold">
                      LOCAÇÃO // COMERCIAL
                    </span>
                  </div>
                </div>

                <div className="p-8 sm:p-10 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-1.5 text-xs text-[#6b6962] font-sans">
                      <MapPin className="w-3.5 h-3.5 text-[#B96545]" />
                      <span>Região Nobre // Litoral Paulista</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#171717] font-heading">
                      Ponto Comercial The Best Açaí
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6b6962] leading-relaxed font-sans font-light">
                      Infraestrutura completa de alto padrão comercial em localização de intenso fluxo de pedestres e automóveis, adaptada para operação imediata.
                    </p>
                  </div>

                  <div className="pt-5 border-t border-[#d9d6ce] flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        const item = filteredItems.find((i) => i.id === 'the-best-acai');
                        if (item) onSelectProject(item, e.currentTarget);
                      }}
                      className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-[#171717] hover:text-[#B96545] transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Ficha Técnica</span>
                    </button>
                    <a
                      href={getWhatsAppLink('Olá, tenho interesse no ponto comercial The Best Açaí.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#d9d6ce] text-[#171717] text-[10px] uppercase tracking-[0.2em] font-sans font-bold hover:bg-[#171717] hover:text-white transition-colors"
                    >
                      <span>Locação</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            )}

          </div>

          {/* BLOCO B: Segunda Linha com Tratamento Diferenciado */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Item 3: Burger King Itanhaém (Spans 6 cols, Obra Corporativa Concluída) */}
            {filteredItems.find((i) => i.id === 'bk-itanhaem') && (
              <article className="lg:col-span-6 bg-[#171717] text-white border border-[#d9d6ce] flex flex-col justify-between overflow-hidden group">
                <div className="relative aspect-[16/9] overflow-hidden bg-black">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                    style={{
                      backgroundImage: "url('/assets/images/bk-itanhaem-real.jpg')",
                      backgroundPosition: 'center 40%',
                    }}
                    aria-hidden="true"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 bg-white text-[#171717] text-[9px] uppercase font-sans tracking-[0.22em] font-bold">
                      OBRA REALIZADA // CASE DE ENGENHARIA
                    </span>
                  </div>
                </div>

                <div className="p-8 sm:p-10 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-1.5 text-xs text-white/60 font-sans">
                      <MapPin className="w-3.5 h-3.5 text-[#B96545]" />
                      <span>Itanhaém, Litoral Sul SP</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white font-heading">
                      Burger King Itanhaém Concluído
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans font-light">
                      Execução física e estrutural entregue com rigor no cronograma. Pavimentação para tráfego pesado, infraestrutura elétrica industrial e salão climatizado.
                    </p>
                  </div>

                  <div className="pt-5 border-t border-white/15 flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        const item = filteredItems.find((i) => i.id === 'bk-itanhaem');
                        if (item) onSelectProject(item, e.currentTarget);
                      }}
                      className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-white hover:text-[#B96545] transition-colors"
                    >
                      Ficha da Obra →
                    </button>
                    <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#B96545] font-semibold">
                      Operação Ativa 100%
                    </span>
                  </div>
                </div>
              </article>
            )}

            {/* Item 4: Ilhas do Sul & Centro Cibratel (Spans 6 cols, Desenvolvimento Litoral) */}
            {filteredItems.find((i) => i.id === 'cibratel-ilhas') && (
              <article className="lg:col-span-6 bg-white border border-[#d9d6ce] flex flex-col justify-between overflow-hidden group">
                <div className="relative aspect-[16/9] overflow-hidden bg-[#171717]">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                    style={{
                      backgroundImage: "url('/assets/images/riviera-mansion.jpg')",
                      backgroundPosition: 'center 40%',
                    }}
                    aria-hidden="true"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 bg-[#171717] text-white text-[9px] uppercase font-sans tracking-[0.22em] font-semibold">
                      DESENVOLVIMENTO // LITORAL SUL
                    </span>
                  </div>
                </div>

                <div className="p-8 sm:p-10 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-1.5 text-xs text-[#6b6962] font-sans">
                      <MapPin className="w-3.5 h-3.5 text-[#B96545]" />
                      <span>Cibratel &amp; Região Litorânea</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#171717] font-heading">
                      Ilhas do Sul &amp; Centro Cibratel
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6b6962] leading-relaxed font-sans font-light">
                      Residenciais e galerias estratégicas desenvolvidos para comércio, serviços e moradia com segurança jurídica e localização beira-mar privilegiada.
                    </p>
                  </div>

                  <div className="pt-5 border-t border-[#d9d6ce] flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        const item = filteredItems.find((i) => i.id === 'cibratel-ilhas');
                        if (item) onSelectProject(item, e.currentTarget);
                      }}
                      className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-[#171717] hover:text-[#B96545] transition-colors"
                    >
                      Consultar Detalhes →
                    </button>
                    <a
                      href={getWhatsAppLink('Olá, gostaria de saber sobre as opções no Ilhas do Sul e Centro Cibratel.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#171717] text-white text-[10px] uppercase tracking-[0.2em] font-sans font-bold hover:bg-black transition-colors"
                    >
                      <span>Falar no WhatsApp</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            )}

          </div>

        </div>

        {/* Banner CTA Central do Catálogo */}
        <div className="text-center pt-10 border-t border-[#d9d6ce]">
          <a
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#171717] text-white text-[11px] font-sans font-semibold uppercase tracking-[0.22em] hover:bg-black transition-colors shadow-lg group"
            href={getWhatsAppLink('Olá, gostaria de receber o catálogo completo de imóveis e realizações da Armindo Ramalho.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageSquare className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>Solicitar Catálogo Completo via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
