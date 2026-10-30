import React, { useEffect, useRef } from 'react';
import { X, ArrowUpRight, Check, MapPin, ShieldCheck } from 'lucide-react';
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
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;

    // Bloqueia scroll do body
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Foca o botão de fechar ao abrir
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }

      // Armadilha de foco básica no modal
      if (e.key === 'Tab' && modalContentRef.current) {
        const focusableElements = modalContentRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
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
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);

      // Devolve o foco ao botão/elemento que disparou a abertura
      if (triggerElement && typeof triggerElement.focus === 'function') {
        triggerElement.focus();
      }
    };
  }, [project, triggerElement, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#171717]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Caixa de Diálogo do Modal */}
      <div
        ref={modalContentRef}
        className="relative w-full max-w-3xl bg-[#F0EEE7] text-[#171717] border border-[#d9d6ce] shadow-2xl z-10 overflow-hidden my-8"
      >
        {/* Barra Superior */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[#d9d6ce] bg-white">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase font-sans tracking-[0.2em] px-2.5 py-1 bg-[#171717] text-white font-bold">
              {project.typeBadge}
            </span>
            <span className="text-xs uppercase font-sans tracking-wider text-[#6b6962] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              {project.location}
            </span>
          </div>

          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="p-1.5 text-[#6b6962] hover:text-[#171717] hover:bg-[#d9d6ce]/40 transition-colors focus:outline-none focus:ring-1 focus:ring-[#171717]"
            aria-label="Fechar ficha técnica do projeto"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Imagem em Destaque 16:9 */}
        <div className="relative aspect-[16/9] w-full bg-[#171717] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/90 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
            <span className="text-[10px] uppercase font-sans tracking-[0.24em] text-white/70">
              {project.subtitle}
            </span>
            <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-bold uppercase tracking-tight font-heading">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Conteúdo Técnico */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-sm text-[#171717]/90 leading-relaxed font-sans">
            {project.description}
          </p>

          {/* Especificações Técnicas Verificadas */}
          {project.specs && project.specs.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-white border border-[#d9d6ce]">
              {project.specs.map((spec, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="block text-[9px] uppercase tracking-wider text-[#6b6962] font-semibold">
                    {spec.label}
                  </span>
                  <span className="block text-xs font-bold text-[#171717] font-heading">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Diferenciais e Garantias Construtivas */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-3">
              <span className="text-xs uppercase font-sans tracking-[0.2em] font-bold text-[#171717] block">
                Diferenciais Construtivos &amp; Gestão
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#6b6962]">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#B96545] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Ações e Encaminhamento WhatsApp */}
          <div className="pt-4 border-t border-[#d9d6ce] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#6b6962]">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Garantia e diligência Armindo Ramalho Empreendimentos</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-3 border border-[#d9d6ce] text-[#171717] text-xs uppercase tracking-wider font-semibold hover:bg-white transition-colors focus:outline-none focus:ring-1 focus:ring-[#171717]"
              >
                Voltar
              </button>
              <a
                href={getWhatsAppLink(project.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#171717] text-white text-xs uppercase tracking-wider font-bold hover:bg-black transition-colors shadow-sm"
              >
                <span>Falar no WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
