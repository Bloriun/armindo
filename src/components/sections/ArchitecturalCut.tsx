import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { MASTER_PROJECT, getWhatsAppLink } from '../../data/portfolioData';
import { ProjectItem } from '../../types';

gsap.registerPlugin(ScrollTrigger);

interface ArchitecturalCutProps {
  onSelectProject: (project: ProjectItem, triggerEl?: HTMLElement) => void;
}

export const ArchitecturalCut: React.FC<ArchitecturalCutProps> = ({ onSelectProject }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const artworkCardRef = useRef<HTMLDivElement>(null);
  const infoPanelRef = useRef<HTMLDivElement>(null);
  const oxideLineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Desktop: Animação refinada com ScrollTrigger
      mm.add(
        '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
        () => {
          if (!containerRef.current || !artworkCardRef.current || !infoPanelRef.current) return;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 75%',
              end: 'bottom 85%',
              toggleActions: 'play none none reverse',
            },
          });

          // Traçado terracota
          if (oxideLineRef.current) {
            tl.fromTo(
              oxideLineRef.current,
              { scaleX: 0, transformOrigin: 'left center' },
              { scaleX: 1, duration: 0.6, ease: 'power2.out' },
              0
            );
          }

          // Revelação elegante da peça gráfica
          tl.fromTo(
            artworkCardRef.current,
            { opacity: 0, y: 30, scale: 0.98 },
            { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out' },
            0.15
          );

          // Painel técnico surge coordenado
          tl.fromTo(
            infoPanelRef.current,
            { opacity: 0, x: 25 },
            { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' },
            0.25
          );
        }
      );

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="corte-arquitetonico"
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#121212] text-[#F0EEE7] border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16 space-y-10 sm:space-y-12">
        
        {/* Cabeçalho da Seção de Expansão */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-[10px] sm:text-[11px] uppercase font-sans tracking-[0.28em] text-white/70">
              <span className="w-8 h-[1.5px] bg-[#B96545] inline-block" />
              <span>EXPANSÃO CORPORATIVA // LITORAL SUL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white font-heading">
              Corte Arquitetônico: Nova Obra em Implantação
            </h2>
          </div>

          <div className="flex items-center gap-3 text-xs uppercase font-sans tracking-[0.2em] text-white/60">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B96545] animate-pulse inline-block" />
            <span>Peruíbe, SP // Built-to-Suit</span>
          </div>
        </div>

        {/* Linha Terracota de Diretriz */}
        <div
          ref={oxideLineRef}
          className="w-full h-[1.5px] bg-[#B96545] will-change-transform"
        />

        {/* Grade Principal: Peça Gráfica Oficial + Painel Técnico Editorial */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Peça Gráfica Oficial: Preservada Integralmente com Moldura Basalto */}
          <div
            ref={artworkCardRef}
            className="lg:col-span-7 relative bg-[#171717] border border-white/15 p-2 sm:p-3 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group overflow-hidden"
          >
            <div className="relative w-full overflow-hidden bg-black aspect-[16/9] flex items-center justify-center">
              <img
                src="/assets/images/bk-peruibe-campanha.jpg"
                alt="Campanha Oficial Burger King Peruíbe - Armindo Ramalho Empreendimentos"
                className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <div className="p-3 bg-[#171717] flex items-center justify-between text-[10px] uppercase font-sans tracking-[0.22em] text-white/50 border-t border-white/10 mt-2">
              <span>PEÇA DE DIVULGAÇÃO OFICIAL</span>
              <span>LITORAL SUL DE SÃO PAULO</span>
            </div>
          </div>

          {/* Painel Técnico e Fiduciário da Obra */}
          <div
            ref={infoPanelRef}
            className="lg:col-span-5 bg-[#171717]/90 border border-white/15 p-6 sm:p-8 lg:p-10 space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-[10px] uppercase font-sans tracking-[0.24em] text-[#B96545] font-semibold">
                  Engenharia Comercial
                </span>
                <span className="px-2.5 py-0.5 bg-white/10 text-white text-[9px] uppercase font-sans tracking-[0.2em] font-medium border border-white/15">
                  Fase de Implantação
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white font-heading">
                  Burger King Peruíbe
                </h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans font-light">
                  Edificação corporativa desenvolvida sob o modelo Built-to-Suit, concebida para atender rigorosamente às normas de arquitetura, fluxo viário e operação mundial da franqueadora.
                </p>
              </div>

              {/* Especificações Técnicas Verificadas */}
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/10">
                <div className="space-y-1">
                  <span className="text-[9px] uppercase font-sans tracking-wider text-white/50 block">
                    Modalidade
                  </span>
                  <span className="text-xs font-semibold text-white font-heading block">
                    Built-to-Suit
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] uppercase font-sans tracking-wider text-white/50 block">
                    Cidade
                  </span>
                  <span className="text-xs font-semibold text-white font-heading block">
                    Peruíbe, SP
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] uppercase font-sans tracking-wider text-white/50 block">
                    Padrão
                  </span>
                  <span className="text-xs font-semibold text-white font-heading block">
                    Drive-thru &amp; Salão
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] uppercase font-sans tracking-wider text-white/50 block">
                    Execução
                  </span>
                  <span className="text-xs font-semibold text-white font-heading block">
                    Armindo Ramalho
                  </span>
                </div>
              </div>

              {/* Diferenciais Fiduciários */}
              <ul className="space-y-2.5 text-xs text-white/75 font-sans pt-1">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B96545] shrink-0 mt-0.5" />
                  <span>Infraestrutura pesada para alto fluxo de veículos e clientes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B96545] shrink-0 mt-0.5" />
                  <span>Conformidade absoluta com parâmetros da rede internacional</span>
                </li>
              </ul>
            </div>

            {/* Ações da Obra */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={(e) => onSelectProject(MASTER_PROJECT, e.currentTarget)}
                className="px-6 py-3.5 bg-white text-[#171717] text-[10px] uppercase tracking-[0.2em] font-sans font-bold hover:bg-[#F0EEE7] transition-colors focus:outline-none focus:ring-1 focus:ring-white text-center"
              >
                Ver Ficha Técnica
              </button>

              <a
                href={getWhatsAppLink('Olá, gostaria de conversar sobre a nova obra do Burger King em Peruíbe.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-white/25 text-white text-[10px] uppercase tracking-[0.2em] font-sans hover:bg-white/10 transition-colors text-center"
              >
                <span>Consultar Obra</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
