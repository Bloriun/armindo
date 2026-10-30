import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight } from 'lucide-react';
import { MASTER_PROJECT, getWhatsAppLink } from '../../data/portfolioData';
import { ProjectItem } from '../../types';

// Registra ScrollTrigger uma única vez
gsap.registerPlugin(ScrollTrigger);

interface ArchitecturalCutProps {
  onSelectProject: (project: ProjectItem, triggerEl?: HTMLElement) => void;
}

export const ArchitecturalCut: React.FC<ArchitecturalCutProps> = ({ onSelectProject }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cutFrameRef = useRef<HTMLDivElement>(null);
  const oxideLineRef = useRef<HTMLDivElement>(null);
  const revealContentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Desktop: Coreografia de Pin curta e dinâmica (1.1 a 1.3 viewports)
      mm.add(
        '(min-width: 768px) and (prefers-reduced-motion: no-preference)',
        () => {
          if (!containerRef.current || !cutFrameRef.current) return;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top top',
              end: '+=120%', // Ritmo dinâmico de 1.2 viewports
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          // 1. O enquadramento recolhe suavemente como prancha arquitetônica
          tl.to(
            cutFrameRef.current,
            {
              clipPath: 'inset(6% 8% 8% 8%)',
              scale: 0.96,
              duration: 0.5,
              ease: 'power2.inOut',
            },
            0
          );

          // 2. Traçado vetorial terracota (#B96545) desenha a diretriz de projeto
          if (oxideLineRef.current) {
            tl.fromTo(
              oxideLineRef.current,
              { scaleX: 0, transformOrigin: 'left center' },
              { scaleX: 1, duration: 0.4, ease: 'power2.out' },
              0.3
            );
          }

          // 3. A primeira obra real (Novo Burger King Peruíbe) surge com precisão
          if (revealContentRef.current) {
            tl.fromTo(
              revealContentRef.current,
              { opacity: 0, y: 35 },
              { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
              0.5
            );
          }
        }
      );

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      id="corte-arquitetonico"
      className="relative w-full min-h-screen bg-[#171717] text-[#F0EEE7] overflow-hidden flex flex-col justify-center border-t border-white/10"
    >
      {/* Moldura do Corte Arquitetônico */}
      <div
        ref={cutFrameRef}
        className="relative w-full h-full min-h-screen flex flex-col justify-between p-6 sm:p-12 lg:p-16 border-b border-white/10"
        style={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      >
        {/* Fundo Fotográfico da Transição em Alta Resolução */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center -z-10"
          style={{
            backgroundImage: "url('/assets/images/bk-peruibe-anuncio.png')",
            backgroundPosition: 'center 30%',
          }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/70 to-[#171717]/45" />
          <div className="absolute inset-0 architectural-grid pointer-events-none" />
        </div>

        {/* Topo do Corte: Linha e Identificador de Prancha */}
        <div className="relative z-10 max-w-[1520px] mx-auto w-full flex flex-col gap-3">
          <div className="flex items-center justify-between text-[10px] uppercase font-sans tracking-[0.26em] text-white/70">
            <span>TRANSFORMAÇÃO TERRITORIAL // LITORAL SUL</span>
            <span className="text-[#B96545] font-semibold">CORTE ARQUITETÔNICO</span>
          </div>
          {/* Fio terracota de assinatura */}
          <div
            ref={oxideLineRef}
            className="w-full h-[1.5px] bg-[#B96545] shadow-sm"
          />
        </div>

        {/* Conteúdo Revelado: Master Project - Novo Burger King Peruíbe */}
        <div
          ref={revealContentRef}
          className="relative z-10 max-w-[1520px] mx-auto w-full my-auto py-10"
        >
          <div className="max-w-2xl bg-[#171717]/90 backdrop-blur-md p-8 sm:p-10 border border-white/15 space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-[10px] uppercase font-sans tracking-[0.24em] text-[#B96545] font-semibold">
                {MASTER_PROJECT.subtitle}
              </span>
              <span className="text-[10px] uppercase font-sans tracking-[0.22em] text-white/70 font-medium">
                {MASTER_PROJECT.typeBadge}
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white font-heading">
                {MASTER_PROJECT.title}
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans font-light">
                {MASTER_PROJECT.description}
              </p>
            </div>

            {/* Metadados Reais */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
              {MASTER_PROJECT.specs.map((spec, idx) => (
                <div key={idx} className="space-y-0.5">
                  <span className="text-[9px] uppercase font-sans tracking-wider text-white/50 block">
                    {spec.label}
                  </span>
                  <span className="text-xs font-semibold text-white font-heading block">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Ações da Obra Revelada */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={(e) => onSelectProject(MASTER_PROJECT, e.currentTarget)}
                className="px-6 py-3 bg-white text-[#171717] text-[10px] uppercase tracking-[0.2em] font-sans font-bold hover:bg-[#F0EEE7] transition-colors focus:outline-none focus:ring-1 focus:ring-white"
              >
                Ver Ficha Técnica
              </button>

              <a
                href={getWhatsAppLink(MASTER_PROJECT.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-white/25 text-white text-[10px] uppercase tracking-[0.2em] font-sans hover:bg-white/10 transition-colors"
              >
                <span>Consultar Obra</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé da Prancha */}
        <div className="relative z-10 max-w-[1520px] mx-auto w-full text-[10px] uppercase tracking-[0.22em] text-white/50 flex items-center justify-between">
          <span>REALIZAÇÃO CORPORATIVA // ARMINDO RAMALHO</span>
          <span>LITORAL PAULISTA</span>
        </div>
      </div>
    </div>
  );
};
