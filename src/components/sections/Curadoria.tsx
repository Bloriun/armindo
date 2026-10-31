import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, MapPin, Eye } from 'lucide-react';
import { CATALOG_ITEMS, getWhatsAppLink } from '../../data/portfolioData';
import { ProjectItem } from '../../types';

interface CuradoriaProps {
  onSelectProject: (project: ProjectItem, triggerEl?: HTMLElement) => void;
}

export const Curadoria: React.FC<CuradoriaProps> = ({ onSelectProject }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = CATALOG_ITEMS.length;

  const currentProject = CATALOG_ITEMS[currentIndex];
  const nextIndex = (currentIndex + 1) % total;
  const nextProject = CATALOG_ITEMS[nextIndex];

  // Touch and drag swipe state
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const isDragging = useRef(false);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 50) {
        goToNext();
      } else if (diff < -50) {
        goToPrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    touchStartX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    touchEndX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (isDragging.current && touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 50) {
        goToNext();
      } else if (diff < -50) {
        goToPrev();
      }
    }
    isDragging.current = false;
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const curadoriaEl = document.getElementById('curadoria');
      if (!curadoriaEl) return;
      const rect = curadoriaEl.getBoundingClientRect();
      // Only react if Curadoria section is somewhat in viewport
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        if (e.key === 'ArrowRight') {
          goToNext();
        } else if (e.key === 'ArrowLeft') {
          goToPrev();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);

  return (
    <section
      id="curadoria"
      className="w-full py-24 sm:py-32 bg-[#F0EEE7] text-[#171717] border-t border-[#d9d6ce] overflow-hidden"
      role="region"
      aria-roledescription="carousel"
      aria-label="Curadoria de Obras e Empreendimentos"
    >
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
        
        {/* Cabeçalho Editorial com Linha Terracota e Controles de Navegação */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-[#d9d6ce] pb-8">
          <div className="lg:col-span-8 space-y-3">
            <div className="text-[11px] font-sans uppercase tracking-[0.28em] text-[#6b6962] flex items-center gap-3">
              <span className="w-8 h-[1.5px] bg-[#B96545] inline-block" />
              <span>ATLAS LITORÂNEO // CURADORIA EDITORIAL</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#171717] font-heading leading-tight">
              Grandes Realizações &amp; Obras de Destaque
            </h2>
          </div>

          {/* Navegação Manual e Indicador Numérico */}
          <div className="lg:col-span-4 flex items-center justify-between lg:justify-end gap-6">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#171717]">
              <span className="text-base font-bold font-heading">
                0{currentIndex + 1}
              </span>
              <span className="text-[#6b6962]">/</span>
              <span className="text-[#6b6962]">0{total}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={goToPrev}
                aria-label="Projeto anterior"
                className="w-11 h-11 border border-[#d9d6ce] bg-white flex items-center justify-center text-[#171717] hover:bg-[#171717] hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[#171717]"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={goToNext}
                aria-label="Próximo projeto"
                className="w-11 h-11 border border-[#d9d6ce] bg-white flex items-center justify-center text-[#171717] hover:bg-[#171717] hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[#171717]"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* CONTAINER DO CARROSSEL: Obra Ativa + Peek da Próxima Obra */}
        <div
          className="relative select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* PRANCHA PRINCIPAL (8 Colunas em desktop) */}
            <div className="lg:col-span-8 bg-white border border-[#d9d6ce] overflow-hidden flex flex-col justify-between group shadow-sm transition-all duration-300">
              {/* Fotografia de Grande Escala com Transição Suave */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] overflow-hidden bg-[#171717]">
                <img
                  key={currentProject.id}
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Badges de Categoria */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-wrap gap-2">
                  <span className="px-3.5 py-1.5 bg-[#171717] text-white text-[9px] uppercase font-sans tracking-[0.22em] font-semibold">
                    {currentProject.badge}
                  </span>
                  <span className="px-3 py-1.5 bg-white text-[#171717] text-[9px] uppercase font-sans tracking-[0.2em] font-bold">
                    {currentProject.typeBadge}
                  </span>
                </div>

                {/* Localização em Destaque */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-2 bg-[#171717]/85 backdrop-blur-md px-3.5 py-1.5 text-white text-[10px] uppercase font-sans tracking-[0.2em]">
                  <MapPin className="w-3.5 h-3.5 text-[#B96545]" />
                  <span>{currentProject.location}</span>
                </div>
              </div>

              {/* Bloco de Conteúdo Editorial */}
              <div className="p-8 sm:p-10 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-sans tracking-[0.24em] text-[#B96545] font-semibold">
                      {currentProject.subtitle}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-bold uppercase tracking-tight text-[#171717] font-heading">
                    {currentProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6b6962] leading-relaxed font-sans font-light max-w-3xl">
                    {currentProject.description}
                  </p>

                  {/* Especificações Técnicas Verificadas */}
                  {currentProject.specs && currentProject.specs.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#d9d6ce]">
                      {currentProject.specs.map((spec, i) => (
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
                  )}
                </div>

                {/* Ações da Obra Ativa */}
                <div className="pt-6 border-t border-[#d9d6ce] flex flex-wrap items-center justify-between gap-4">
                  <button
                    onClick={(e) => onSelectProject(currentProject, e.currentTarget)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#171717] text-white text-[10px] uppercase tracking-[0.2em] font-sans font-bold hover:bg-black transition-colors focus:outline-none focus:ring-1 focus:ring-[#171717]"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Ver Ficha Técnica</span>
                  </button>

                  <a
                    className="inline-flex items-center gap-2 px-5 py-3.5 border border-[#d9d6ce] text-[#171717] text-[10px] uppercase tracking-[0.2em] font-sans font-bold hover:bg-[#171717] hover:text-white transition-colors"
                    href={getWhatsAppLink(currentProject.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Consultar Projeto</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* PEEK DA PRÓXIMA OBRA (4 Colunas em desktop) */}
            <div
              onClick={goToNext}
              className="lg:col-span-4 bg-white/70 border border-[#d9d6ce] hover:border-[#171717] p-6 sm:p-8 flex flex-col justify-between cursor-pointer group transition-all duration-300"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  goToNext();
                }
              }}
              aria-label={`Ver próximo projeto: ${nextProject.title}`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[10px] uppercase font-sans tracking-[0.24em] text-[#6b6962]">
                  <span>PRÓXIMA REALIZAÇÃO</span>
                  <span className="font-mono text-xs text-[#171717] font-bold">
                    0{nextIndex + 1}
                  </span>
                </div>

                <div className="relative aspect-[4/3] overflow-hidden bg-[#171717]">
                  <img
                    src={nextProject.image}
                    alt={nextProject.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[9px] uppercase font-sans tracking-widest text-white/90 font-semibold px-2 py-1 bg-black/60">
                    {nextProject.typeBadge}
                  </span>
                </div>

                <div className="space-y-1 pt-2">
                  <span className="text-[10px] uppercase font-sans tracking-[0.22em] text-[#B96545] font-semibold block">
                    {nextProject.subtitle}
                  </span>
                  <h4 className="text-xl font-bold uppercase tracking-tight text-[#171717] font-heading group-hover:text-[#B96545] transition-colors">
                    {nextProject.title}
                  </h4>
                  <p className="text-xs text-[#6b6962] line-clamp-3 font-sans font-light leading-relaxed">
                    {nextProject.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#d9d6ce] flex items-center justify-between text-[10px] uppercase font-sans tracking-[0.2em] font-semibold text-[#171717]">
                <span>Avançar para Obra</span>
                <span className="w-8 h-8 rounded-none border border-[#d9d6ce] group-hover:border-[#171717] group-hover:bg-[#171717] group-hover:text-white flex items-center justify-center transition-colors">
                  →
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Barra de Progresso do Carrossel */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {CATALOG_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Ir para projeto 0${idx + 1}`}
              className={`h-1.5 transition-all duration-300 focus:outline-none ${
                currentIndex === idx
                  ? 'w-12 bg-[#B96545]'
                  : 'w-4 bg-[#d9d6ce] hover:bg-[#AAA8A2]'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
