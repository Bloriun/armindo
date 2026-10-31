import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { X, ArrowUpRight, Check, MapPin, ShieldCheck, Building2, Layers } from 'lucide-react';
import { ProjectItem } from '../../types';
import { getWhatsAppLink } from '../../data/portfolioData';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  triggerElement: HTMLElement | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  triggerElement,
  onClose,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isClosing, setIsClosing] = useState(false);

  const backdropRef = useRef<HTMLDivElement>(null);
  const modalCardRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLUListElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Redefine active image when project changes
  useEffect(() => {
    setActiveImageIndex(0);
    setIsClosing(false);
  }, [project]);

  // Gallery array
  const gallery = project?.gallery && project.gallery.length > 0 
    ? project.gallery 
    : project ? [project.image] : [];
  
  const currentImage = gallery[activeImageIndex] || project?.image || '';

  // Handle closing with smooth GSAP exit animation
  const handleRequestClose = useCallback(() => {
    if (isClosing) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !modalCardRef.current || !backdropRef.current) {
      onClose();
      return;
    }

    setIsClosing(true);
    const exitTl = gsap.timeline({
      onComplete: () => {
        setIsClosing(false);
        onClose();
      },
    });

    exitTl.to(modalCardRef.current, {
      y: 16,
      opacity: 0,
      scale: 0.98,
      duration: 0.22,
      ease: 'power2.in',
    });
    exitTl.to(
      backdropRef.current,
      { opacity: 0, duration: 0.2, ease: 'power2.in' },
      '-=0.12'
    );
  }, [isClosing, onClose]);

  // Entrance animation and focus management
  useEffect(() => {
    if (!project) return;

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button initially
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let entranceTl: gsap.core.Timeline | null = null;

    if (!prefersReducedMotion && modalCardRef.current && backdropRef.current) {
      // Orchestrate sequential GSAP entrance (~750ms total)
      entranceTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Step 1: Backdrop & Modal Window
      entranceTl
        .fromTo(
          backdropRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.3 }
        )
        .fromTo(
          modalCardRef.current,
          { opacity: 0, y: 24, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.4 },
          '-=0.15'
        );

      // Step 2: Image reveal with subtle scale
      if (imageRef.current) {
        entranceTl.fromTo(
          imageRef.current,
          { scale: 1.08, opacity: 0.6 },
          { scale: 1, opacity: 1, duration: 0.45, ease: 'power2.out' },
          '-=0.25'
        );
      }

      // Step 3: Header badges, title, location
      if (headerRef.current) {
        entranceTl.fromTo(
          headerRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.3 },
          '-=0.25'
        );
      }

      // Step 4: Description text
      if (descRef.current) {
        entranceTl.fromTo(
          descRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.25 },
          '-=0.15'
        );
      }

      // Step 5: Specifications Grid items stagger
      if (specsRef.current && specsRef.current.children.length > 0) {
        entranceTl.fromTo(
          specsRef.current.children,
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.25, stagger: 0.05 },
          '-=0.15'
        );
      }

      // Step 6: Features list items stagger
      if (featuresRef.current && featuresRef.current.children.length > 0) {
        entranceTl.fromTo(
          featuresRef.current.children,
          { opacity: 0, x: -6 },
          { opacity: 1, x: 0, duration: 0.22, stagger: 0.04 },
          '-=0.15'
        );
      }

      // Step 7: Conversion CTA bar
      if (ctaRef.current) {
        entranceTl.fromTo(
          ctaRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.3 },
          '-=0.15'
        );
      }
    }

    // Keyboard handlers (Escape & Tab focus trap)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        handleRequestClose();
        return;
      }

      if (e.key === 'Tab' && modalCardRef.current) {
        const focusableElements = modalCardRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);

      if (entranceTl) {
        entranceTl.kill();
      }

      // Return focus to trigger button
      if (triggerElement && typeof triggerElement.focus === 'function') {
        triggerElement.focus();
      }
    };
  }, [project, triggerElement, handleRequestClose]);

  if (!project) return null;

  const isObra = project.segment === 'obra';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      aria-describedby="modal-project-desc"
    >
      {/* Backdrop com Blur Cinematográfico */}
      <div
        ref={backdropRef}
        className="fixed inset-0 bg-[#171717]/85 backdrop-blur-md transition-opacity"
        onClick={handleRequestClose}
        aria-hidden="true"
      />

      {/* Caixa de Diálogo Editorial Monograph */}
      <div
        ref={modalCardRef}
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#F0EEE7] text-[#171717] border border-[#d9d6ce] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] z-10 overflow-hidden my-auto"
      >
        {/* Barra Superior Arquitetônica com Metadados & Botão Fechar */}
        <div className="flex items-center justify-between px-5 py-4 sm:px-8 sm:py-5 border-b border-[#d9d6ce] bg-white shrink-0">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span
              className={`text-[9px] sm:text-[10px] uppercase font-sans tracking-[0.2em] px-3 py-1 font-bold ${
                isObra ? 'bg-[#171717] text-white' : 'bg-[#B96545] text-white'
              }`}
            >
              {isObra ? 'OBRA EXECUTADA' : 'OPORTUNIDADE IMOBILIÁRIA'}
            </span>
            <span className="text-[10px] uppercase font-sans tracking-[0.18em] px-2.5 py-1 border border-[#d9d6ce] text-[#6b6962] font-semibold">
              {project.typeBadge}
            </span>
            <span className="text-xs font-sans text-[#6b6962] hidden sm:flex items-center gap-1.5 ml-2">
              <MapPin className="w-3.5 h-3.5 text-[#B96545]" />
              {project.location}
            </span>
          </div>

          <button
            ref={closeButtonRef}
            onClick={handleRequestClose}
            className="p-2 text-[#6b6962] hover:text-[#171717] hover:bg-[#d9d6ce]/40 transition-colors focus:outline-none focus:ring-1 focus:ring-[#171717]"
            aria-label="Fechar ficha técnica do projeto"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Corpo com Rolagem Interna Suave para Telas Compactas */}
        <div className="overflow-y-auto flex-1">
          {/* Fotografia Principal em Destaque 16:9 / 16:10 */}
          <div
            ref={imageContainerRef}
            className="relative aspect-[16/9] w-full bg-[#171717] overflow-hidden"
          >
            <img
              ref={imageRef}
              src={currentImage}
              alt={project.title}
              className="w-full h-full object-cover transition-all duration-500 ease-out"
              style={{
                objectPosition: project.imagePosition || 'center center',
              }}
            />
            {/* Scrim ótico inferior */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/90 via-[#171717]/20 to-transparent pointer-events-none" />

            {/* Título & Subtítulo Sobrepostos na Base da Imagem */}
            <div
              ref={headerRef}
              className="absolute bottom-4 left-5 right-5 sm:bottom-6 sm:left-8 sm:right-8 text-white space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-sans tracking-[0.24em] text-white/70">
                  {project.subtitle}
                </span>
                {gallery.length > 1 && (
                  <span className="text-[9px] uppercase font-mono tracking-widest px-2 py-0.5 bg-black/60 text-white/80 border border-white/20">
                    Foto {activeImageIndex + 1} de {gallery.length}
                  </span>
                )}
              </div>
              <h3
                id="modal-project-title"
                className="text-2xl sm:text-4xl font-bold uppercase tracking-tight font-heading leading-tight"
              >
                {project.title}
              </h3>
            </div>
          </div>

          {/* Seletor de Galeria se houver múltiplas fotografias */}
          {gallery.length > 1 && (
            <div className="bg-[#e8e5dc] px-5 sm:px-8 py-3 border-b border-[#d9d6ce] flex items-center gap-3 overflow-x-auto">
              <span className="text-[9px] uppercase font-sans tracking-[0.2em] text-[#6b6962] font-semibold shrink-0 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                Vistas:
              </span>
              <div className="flex items-center gap-2">
                {gallery.map((imgUrl, idx) => {
                  const isActive = idx === activeImageIndex;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-16 h-11 border transition-all overflow-hidden shrink-0 focus:outline-none ${
                        isActive
                          ? 'border-[#171717] ring-1 ring-[#171717] scale-105'
                          : 'border-[#d9d6ce] opacity-70 hover:opacity-100'
                      }`}
                      aria-label={`Ver foto ${idx + 1}`}
                    >
                      <img
                        src={imgUrl}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Conteúdo Técnico Editorial */}
          <div className="p-5 sm:p-8 space-y-6 sm:space-y-8">
            {/* Descrição Arquitetônica & Contexto */}
            <div ref={descRef} className="space-y-2">
              <div className="text-[10px] font-sans uppercase tracking-[0.22em] text-[#6b6962] font-semibold flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5 text-[#B96545]" />
                <span>Contexto &amp; Memorial Descritivo</span>
              </div>
              <p
                id="modal-project-desc"
                className="text-xs sm:text-sm text-[#171717]/90 leading-relaxed font-sans font-light"
              >
                {project.description}
              </p>
            </div>

            {/* Ficha Técnica Estruturada (Grid 2 a 4 Colunas) */}
            {project.specs && project.specs.length > 0 && (
              <div className="space-y-2.5">
                <span className="text-[10px] uppercase font-sans tracking-[0.22em] text-[#6b6962] font-semibold block">
                  Especificações Técnicas
                </span>
                <div
                  ref={specsRef}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-white border border-[#d9d6ce]"
                >
                  {project.specs.map((spec, idx) => (
                    <div key={idx} className="space-y-1">
                      <span className="block text-[9px] uppercase tracking-wider text-[#6b6962] font-sans font-semibold">
                        {spec.label}
                      </span>
                      <span className="block text-xs font-bold text-[#171717] font-heading leading-snug">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Diferenciais & Certificação Técnica */}
            {project.features && project.features.length > 0 && (
              <div className="space-y-3">
                <span className="text-[10px] uppercase font-sans tracking-[0.22em] font-bold text-[#171717] block">
                  Diferenciais &amp; Garantias Construtivas
                </span>
                <ul
                  ref={featuresRef}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#52504b] font-sans"
                >
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-white/60 p-2.5 border border-[#d9d6ce]/60">
                      <Check className="w-4 h-4 text-[#B96545] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Rodapé Fiduciário com Ação Principal WhatsApp */}
        <div
          ref={ctaRef}
          className="p-5 sm:p-6 border-t border-[#d9d6ce] bg-white flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 shrink-0"
        >
          <div className="flex items-center gap-2 text-xs text-[#6b6962] font-sans">
            <ShieldCheck className="w-4 h-4 text-[#B96545] shrink-0" />
            <span className="text-[11px]">
              Engenharia, conformidade e rigor Armindo Ramalho Empreendimentos
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleRequestClose}
              className="px-5 py-3 border border-[#d9d6ce] text-[#171717] text-xs uppercase tracking-wider font-semibold hover:bg-[#F0EEE7] transition-colors focus:outline-none focus:ring-1 focus:ring-[#171717]"
            >
              Fechar
            </button>
            <a
              href={getWhatsAppLink(project.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3 bg-[#171717] text-white text-xs uppercase tracking-wider font-bold hover:bg-black transition-colors shadow-md group"
            >
              <span>{isObra ? 'Consultar Obra Corporativa' : 'Consultar Disponibilidade'}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
