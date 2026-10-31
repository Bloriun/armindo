import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { getWhatsAppLink } from '../../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const topBarRef = useRef<HTMLDivElement>(null);
  const oxideLineRef = useRef<HTMLSpanElement>(null);
  const kickerRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const textBlockRef = useRef<HTMLDivElement>(null);
  const statsBlockRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Configuração para usuários com preferência por animação completa
      mm.add(
        '(prefers-reduced-motion: no-preference)',
        () => {
          if (!heroRef.current) return;

          // 1. Sequência Cinematográfica de Entrada
          const enterTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

          // Movimento lento e imersivo de lente na fotografia real
          if (bgImageRef.current) {
            enterTl.fromTo(
              bgImageRef.current,
              { scale: 1.08, filter: 'blur(2px)' },
              { scale: 1.01, filter: 'blur(0px)', duration: 2.2, ease: 'power2.out' },
              0
            );
          }

          // Barra técnica superior
          if (topBarRef.current) {
            enterTl.fromTo(
              topBarRef.current,
              { y: -16, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.8 },
              0.15
            );
          }

          // Linha terracota de assinatura
          if (oxideLineRef.current) {
            enterTl.fromTo(
              oxideLineRef.current,
              { scaleX: 0, transformOrigin: 'left center' },
              { scaleX: 1, duration: 0.7, ease: 'power2.out' },
              0.3
            );
          }

          // Kicker textual
          if (kickerRef.current) {
            enterTl.fromTo(
              kickerRef.current,
              { y: 15, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.7 },
              0.35
            );
          }

          // Título Monumental
          if (titleLine1Ref.current) {
            enterTl.fromTo(
              titleLine1Ref.current,
              { yPercent: 105, opacity: 0 },
              { yPercent: 0, opacity: 1, duration: 1.1, ease: 'power4.out' },
              0.4
            );
          }

          if (titleLine2Ref.current) {
            enterTl.fromTo(
              titleLine2Ref.current,
              { yPercent: 105, opacity: 0 },
              { yPercent: 0, opacity: 1, duration: 1.1, ease: 'power4.out' },
              0.52
            );
          }

          // Texto institucional
          if (textBlockRef.current) {
            enterTl.fromTo(
              textBlockRef.current,
              { y: 20, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.8 },
              0.68
            );
          }

          // Indicadores de mercado
          if (statsBlockRef.current) {
            enterTl.fromTo(
              statsBlockRef.current,
              { y: 20, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.8 },
              0.8
            );
          }

          // Ações principais
          if (actionsRef.current) {
            enterTl.fromTo(
              actionsRef.current,
              { y: 16, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.8 },
              0.92
            );
          }

          // 2. Transição reativa com o Scroll em direção ao Corte Arquitetônico
          const scrollTl = gsap.timeline({
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });

          if (bgImageRef.current) {
            scrollTl.to(
              bgImageRef.current,
              { yPercent: 12, scale: 1.04, ease: 'none' },
              0
            );
          }

          if (titleLine1Ref.current && titleLine2Ref.current && textBlockRef.current) {
            scrollTl.to(
              [titleLine1Ref.current, titleLine2Ref.current, textBlockRef.current, statsBlockRef.current],
              { yPercent: -15, opacity: 0.75, ease: 'none' },
              0
            );
          }

          if (actionsRef.current) {
            scrollTl.to(
              actionsRef.current,
              { opacity: 0.5, y: 10, ease: 'none' },
              0
            );
          }
        }
      );

      return () => mm.revert();
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full min-h-svh flex flex-col justify-between overflow-hidden bg-[#171717] text-[#F0EEE7] pt-28 sm:pt-32 pb-8 sm:pb-12"
    >
      {/* Fotografia Real da Obra Concluída sob Luz Natural em Alta Resolução */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          ref={bgImageRef}
          className="w-full h-full bg-cover bg-center will-change-transform scale-105"
          style={{
            backgroundImage: "url('/assets/images/bk-hero-sharp.png')",
            backgroundPosition: 'center 38%',
          }}
        />
        {/* Scrim ótico medido para garantir legibilidade mantendo a nitidez da obra */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/45 to-[#171717]/65" />
      </div>

      {/* Barra Técnica Superior com Dados Verificados */}
      <div ref={topBarRef} className="relative z-10 max-w-[1520px] mx-auto w-full px-5 sm:px-10 lg:px-16">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/15 pb-3.5 gap-2">
          <div className="flex items-center gap-3 sm:gap-6 text-[10px] sm:text-[11px] uppercase tracking-[0.24em] font-sans text-white/80">
            <span className="font-semibold text-white tracking-[0.24em]">
              EST. 1999 // 25+ ANOS
            </span>
            <span className="hidden md:inline-block text-white/30">|</span>
            <span className="hidden md:inline-block text-white/70 tracking-[0.24em] font-sans">
              OBRA REAL EXECUTADA NO LITORAL PAULISTA
            </span>
          </div>

          <div className="text-[10px] uppercase tracking-[0.22em] font-sans text-white/60">
            ARMINDO RAMALHO EMPREENDIMENTOS
          </div>
        </div>
      </div>

      {/* Composição Tipográfica Monumental */}
      <div className="relative z-10 max-w-[1520px] mx-auto w-full px-5 sm:px-10 lg:px-16 my-auto py-6 sm:py-8">
        <div className="space-y-6">
          <div ref={kickerRef} className="flex items-center gap-2.5 sm:gap-3 text-[10px] sm:text-xs font-sans uppercase tracking-[0.2em] sm:tracking-[0.28em] text-white/80">
            <span ref={oxideLineRef} className="w-6 sm:w-12 h-[1.5px] bg-[#B96545] inline-block shrink-0 will-change-transform" />
            <span className="truncate sm:overflow-visible">ENGENHARIA E CONSTRUÇÃO NO LITORAL PAULISTA</span>
          </div>

          <h1 className="hero-monumental m-0 text-white flex flex-col max-w-full">
            <span className="overflow-hidden block py-0.5 sm:py-1 max-w-full">
              <span ref={titleLine1Ref} className="block will-change-transform">
                ARMINDO
              </span>
            </span>
            <span className="overflow-hidden block py-0.5 sm:py-1 max-w-full">
              <span ref={titleLine2Ref} className="block text-white/90 font-light italic font-heading will-change-transform">
                RAMALHO
              </span>
            </span>
          </h1>

          {/* Síntese Institucional e Fiduciária */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end pt-5 border-t border-white/15">
            <div ref={textBlockRef} className="md:col-span-7 space-y-2.5 will-change-transform">
              <div className="text-[10px] font-sans uppercase tracking-[0.24em] text-[#B96545] font-semibold">
                OBRAS CORPORATIVAS &amp; RESIDENCIAIS NO LITORAL
              </div>
              <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed font-sans max-w-xl">
                Edificações corporativas e residenciais com rigor fiduciário, tecnologia construtiva e localização nobre no litoral de São Paulo.
              </p>
            </div>

            <div ref={statsBlockRef} className="md:col-span-5 grid grid-cols-3 gap-4 text-white md:border-l md:border-white/15 md:pl-6 will-change-transform">
              <div>
                <span className="block text-2xl sm:text-3xl font-bold font-heading tracking-tight">+25</span>
                <span className="text-[9px] uppercase tracking-[0.2em] font-sans text-white/60">Anos</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-bold font-heading tracking-tight">BTS</span>
                <span className="text-[9px] uppercase tracking-[0.2em] font-sans text-white/60">Built-to-Suit</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-bold font-heading tracking-tight">Litoral</span>
                <span className="text-[9px] uppercase tracking-[0.2em] font-sans text-white/60">São Paulo</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barra Inferior com Ações Principais e Conexão de Rolagem */}
      <div ref={actionsRef} className="relative z-10 max-w-[1520px] mx-auto w-full px-5 sm:px-10 lg:px-16 will-change-transform">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-5 border-t border-white/15">
          <div className="flex flex-wrap items-center gap-4">
            <a
              className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-white text-[#171717] text-[11px] font-bold uppercase tracking-[0.22em] font-sans hover:bg-[#F0EEE7] transition-colors duration-300 shadow-xl group"
              href={getWhatsAppLink('Olá, vim pelo site e gostaria de falar com a equipe da Armindo Ramalho.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Fale com a equipe</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/30 bg-[#171717]/60 backdrop-blur-md text-white text-[11px] font-sans uppercase tracking-[0.22em] hover:bg-white/10 transition-colors"
              href="#corte-arquitetonico"
            >
              <span>Conheça nossas obras</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
          </div>

          <div className="text-[10px] uppercase tracking-[0.22em] font-sans text-white/50 flex items-center gap-2">
            <span>FOTOGRAFIA REAL: BURGER KING ITANHAÉM</span>
          </div>
        </div>
      </div>
    </section>
  );
};
