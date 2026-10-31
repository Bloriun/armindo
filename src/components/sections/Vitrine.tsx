import React, { useState, useMemo } from 'react';
import { ArrowUpRight, MessageSquare, Eye, MapPin, Building, Home, Key, CheckSquare } from 'lucide-react';
import { CATALOG_ITEMS, getWhatsAppLink } from '../../data/portfolioData';
import { ProjectCategory, ProjectItem, ProjectSegment } from '../../types';

interface VitrineProps {
  onSelectProject: (project: ProjectItem, triggerEl?: HTMLElement) => void;
}

export const Vitrine: React.FC<VitrineProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | ProjectCategory>('all');
  const [activeSegment, setActiveSegment] = useState<'all' | ProjectSegment>('all');

  // Filter items based on activeCategory and activeSegment
  const filteredItems = useMemo(() => {
    return CATALOG_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.categories.includes(activeCategory);
      const matchesSegment =
        activeSegment === 'all' || item.segment === activeSegment;
      return matchesCategory && matchesSegment;
    });
  }, [activeCategory, activeSegment]);

  // Counts for Category Tabs
  const counts = useMemo(() => {
    const all = CATALOG_ITEMS.length;
    const commercial = CATALOG_ITEMS.filter((i) => i.categories.includes('commercial')).length;
    const beach = CATALOG_ITEMS.filter((i) => i.categories.includes('beach')).length;
    const rent = CATALOG_ITEMS.filter((i) => i.categories.includes('rent')).length;
    const obras = CATALOG_ITEMS.filter((i) => i.segment === 'obra').length;
    const oportunidades = CATALOG_ITEMS.filter((i) => i.segment === 'oportunidade').length;
    return { all, commercial, beach, rent, obras, oportunidades };
  }, []);

  const filterTabs: { id: 'all' | ProjectCategory; label: string; count: number; icon: React.ReactNode }[] = [
    { id: 'all', label: 'Todos', count: counts.all, icon: <CheckSquare className="w-3.5 h-3.5" /> },
    { id: 'commercial', label: 'Corporativos', count: counts.commercial, icon: <Building className="w-3.5 h-3.5" /> },
    { id: 'beach', label: 'Residenciais', count: counts.beach, icon: <Home className="w-3.5 h-3.5" /> },
    { id: 'rent', label: 'Locação', count: counts.rent, icon: <Key className="w-3.5 h-3.5" /> },
  ];

  return (
    <section
      id="vitrine"
      className="w-full py-24 sm:py-32 bg-[#F0EEE7] text-[#171717] border-t border-[#d9d6ce]"
      aria-label="Catálogo de Obras e Imóveis"
    >
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12 sm:space-y-16">
        
        {/* 1. CABEÇALHO EDITORIAL & APRESENTAÇÃO */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-[#d9d6ce]">
          <div className="space-y-3.5 max-w-2xl">
            <div className="text-[11px] font-sans uppercase tracking-[0.28em] text-[#6b6962] flex items-center gap-2.5">
              <span className="w-8 h-[1.5px] bg-[#B96545] inline-block" />
              <span>CATÁLOGO ARQUITETÔNICO // OBRAS &amp; ATIVOS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#171717] font-heading leading-tight">
              Acervo de Realizações &amp; Oportunidades
            </h2>
            <p className="text-xs sm:text-sm text-[#6b6962] font-sans font-light leading-relaxed max-w-xl">
              Diferenciação estruturada entre as obras de engenharia corporativa executadas para grandes marcas e as oportunidades selecionadas para aquisição ou locação patrimonial no litoral paulista.
            </p>
          </div>

          {/* 2. FILTROS POR CATEGORIA COM CONTAGEM VERIFICADA */}
          <div className="flex flex-col items-start lg:items-end gap-3 shrink-0">
            <div
              className="inline-flex p-1 bg-white border border-[#d9d6ce] text-[10px] uppercase font-sans tracking-[0.18em] font-semibold shadow-sm"
              role="tablist"
              aria-label="Filtrar por tipologia"
            >
              {filterTabs.map((tab) => {
                const isActive = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id)}
                    role="tab"
                    aria-selected={isActive}
                    className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 transition-all focus:outline-none focus:ring-1 focus:ring-[#171717] ${
                      isActive
                        ? 'bg-[#171717] text-white shadow-sm font-bold'
                        : 'text-[#6b6962] hover:text-[#171717] hover:bg-[#F0EEE7]'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`text-[9px] px-1.5 py-0.2 rounded-xs font-mono ${
                        isActive ? 'bg-white/20 text-white' : 'bg-[#e8e5dc] text-[#6b6962]'
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Segment Toggle: Obras vs Oportunidades */}
            <div className="flex items-center gap-2 text-[10px] uppercase font-sans tracking-[0.16em] text-[#6b6962]">
              <span>Segmento:</span>
              <button
                onClick={() => setActiveSegment('all')}
                className={`px-2 py-0.5 border ${
                  activeSegment === 'all'
                    ? 'border-[#171717] text-[#171717] font-bold bg-white'
                    : 'border-transparent text-[#6b6962] hover:text-[#171717]'
                }`}
              >
                Todos ({counts.all})
              </button>
              <span>|</span>
              <button
                onClick={() => setActiveSegment('obra')}
                className={`px-2 py-0.5 border ${
                  activeSegment === 'obra'
                    ? 'border-[#171717] text-[#171717] font-bold bg-white'
                    : 'border-transparent text-[#6b6962] hover:text-[#171717]'
                }`}
              >
                Obras ({counts.obras})
              </button>
              <span>|</span>
              <button
                onClick={() => setActiveSegment('oportunidade')}
                className={`px-2 py-0.5 border ${
                  activeSegment === 'oportunidade'
                    ? 'border-[#171717] text-[#171717] font-bold bg-white'
                    : 'border-transparent text-[#6b6962] hover:text-[#171717]'
                }`}
              >
                Oportunidades ({counts.oportunidades})
              </button>
            </div>
          </div>
        </div>

        {/* 3. CONTAGEM REAL DOS RESULTADOS EXIBIDOS */}
        <div className="flex items-center justify-between text-xs font-sans text-[#6b6962] pb-2 border-b border-[#d9d6ce]/60">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B96545]" />
            <span className="uppercase tracking-[0.18em] text-[10px] font-semibold text-[#171717]">
              Exibindo {filteredItems.length} {filteredItems.length === 1 ? 'registro' : 'registros'}
            </span>
          </div>
          <span className="text-[11px] font-sans text-[#6b6962]">
            {activeSegment === 'obra'
              ? 'Foco em Engenharia & Obras Corporativas'
              : activeSegment === 'oportunidade'
              ? 'Foco em Imóveis e Locação'
              : 'Obras Corporativas & Oportunidades Litorâneas'}
          </span>
        </div>

        {/* 4. GRADE DE EMPREENDIMENTOS RESPONSIVA & EDITORIAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {filteredItems.map((item) => {
            const isObra = item.segment === 'obra';

            return (
              <article
                key={item.id}
                className="bg-white border border-[#d9d6ce] flex flex-col justify-between overflow-hidden group hover:border-[#171717] transition-colors duration-300 shadow-sm"
              >
                {/* Imagem com enquadramento proporcional e individual */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#171717]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{
                      objectPosition: item.imagePosition || 'center center',
                    }}
                  />
                  {/* Scrim gradiente inferior */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Badges Superiores */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 pointer-events-none">
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-3 py-1 text-[9px] uppercase font-sans tracking-[0.2em] font-bold ${
                          isObra
                            ? 'bg-[#171717] text-white'
                            : 'bg-[#B96545] text-white'
                        }`}
                      >
                        {isObra ? 'OBRA EXECUTADA' : 'OPORTUNIDADE'}
                      </span>
                      {item.badge && (
                        <span className="px-2.5 py-1 bg-white/95 text-[#171717] text-[9px] uppercase font-sans tracking-[0.18em] font-semibold shadow-xs">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <span className="px-2.5 py-1 bg-black/60 backdrop-blur-xs text-white/90 text-[9px] uppercase font-sans tracking-[0.16em] border border-white/20">
                      {item.typeBadge}
                    </span>
                  </div>

                  {/* Localização no canto inferior da imagem */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs text-white/90 font-sans pointer-events-none">
                    <MapPin className="w-3.5 h-3.5 text-[#B96545] shrink-0" />
                    <span className="drop-shadow-sm font-medium">{item.location}</span>
                  </div>
                </div>

                {/* Conteúdo Informativo */}
                <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="text-[10px] uppercase font-sans tracking-[0.22em] text-[#6b6962] font-semibold">
                      {item.subtitle}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#171717] font-heading leading-tight group-hover:text-[#B96545] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6b6962] leading-relaxed font-sans font-light line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Resumo de Especificações Técnicas (2 itens em destaque) */}
                  {item.specs && item.specs.length > 0 && (
                    <div className="grid grid-cols-2 gap-3 p-3 bg-[#F0EEE7]/70 border border-[#d9d6ce]/70 text-xs">
                      <div className="space-y-0.5">
                        <span className="block text-[9px] uppercase tracking-wider text-[#6b6962] font-semibold">
                          {item.specs[0].label}
                        </span>
                        <span className="block text-[11px] font-bold text-[#171717] font-heading truncate">
                          {item.specs[0].value}
                        </span>
                      </div>
                      {item.specs[1] && (
                        <div className="space-y-0.5 border-l border-[#d9d6ce] pl-3">
                          <span className="block text-[9px] uppercase tracking-wider text-[#6b6962] font-semibold">
                            {item.specs[1].label}
                          </span>
                          <span className="block text-[11px] font-bold text-[#171717] font-heading truncate">
                            {item.specs[1].value}
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Ações: Ficha Técnica + WhatsApp */}
                  <div className="pt-4 border-t border-[#d9d6ce] flex items-center justify-between gap-3">
                    <button
                      onClick={(e) => onSelectProject(item, e.currentTarget)}
                      className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-[#171717] hover:text-[#B96545] transition-colors focus:outline-none focus:ring-1 focus:ring-[#171717] py-2"
                    >
                      <Eye className="w-4 h-4 text-[#B96545]" />
                      <span>{isObra ? 'Ficha da Obra' : 'Ficha Técnica'}</span>
                    </button>

                    <a
                      href={getWhatsAppLink(item.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-[#171717] text-white text-[10px] uppercase tracking-[0.2em] font-sans font-bold hover:bg-black transition-colors shadow-xs group/btn"
                    >
                      <span>{isObra ? 'Consultar' : 'Negociar'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* 5. SEÇÃO DE ENCAMINHAMENTO CONTEXTUAL & CTA WHATSAPP */}
        <div className="p-8 sm:p-12 bg-white border border-[#d9d6ce] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] uppercase font-sans tracking-[0.24em] text-[#B96545] font-bold">
              NOVOS PROJETOS // PARCERIAS PATRIMONIAIS
            </span>
            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#171717] font-heading">
              Precisa de um Projeto sob Medida ou Deseja Avaliar um Imóvel?
            </h3>
            <p className="text-xs sm:text-sm text-[#6b6962] font-sans font-light max-w-2xl">
              Nossa equipe de engenharia analisa viabilidade para obras comerciais (Built-to-Suit), permutas de terrenos e aquisições corporativas no litoral de São Paulo.
            </p>
          </div>

          <a
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#171717] text-white text-[11px] font-sans font-semibold uppercase tracking-[0.22em] hover:bg-black transition-colors shadow-md group shrink-0"
            href={getWhatsAppLink('Olá, gostaria de falar com a equipe técnica da Armindo Ramalho sobre um novo projeto ou oportunidade no litoral.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageSquare className="w-4 h-4 group-hover:scale-110 transition-transform text-[#B96545]" />
            <span>Falar com a Diretoria no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
