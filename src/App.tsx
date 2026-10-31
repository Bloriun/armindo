import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { ArchitecturalCut } from './components/sections/ArchitecturalCut';
import { Curadoria } from './components/sections/Curadoria';
import { Manifesto } from './components/sections/Manifesto';
import { Pilares } from './components/sections/Pilares';
import { Panorama } from './components/sections/Panorama';
import { Vitrine } from './components/sections/Vitrine';
import { Contato } from './components/sections/Contato';
import { Footer } from './components/layout/Footer';
import { ProjectDetailModal } from './components/ui/ProjectDetailModal';
import { ProjectItem } from './types';
import { getWhatsAppLink } from './data/portfolioData';
import { MessageCircle } from 'lucide-react';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeTriggerEl, setActiveTriggerEl] = useState<HTMLElement | null>(null);

  const handleOpenProject = (project: ProjectItem, triggerEl?: HTMLElement) => {
    setActiveTriggerEl(triggerEl || null);
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-[#171717] text-[#F0EEE7] selection:bg-[#B96545] selection:text-white relative overflow-x-hidden max-w-full w-full">
      {/* 1. Header & Navegação Arquitetônica */}
      <Navbar />

      {/* Conteúdo Principal */}
      <main className="w-full overflow-x-hidden max-w-full">
        {/* 2. Hero Cinematográfico com Fotografia Real Diurna de Itanhaém */}
        <Hero />

        {/* 3. Corte Arquitetônico (GSAP ScrollTrigger Transição Hero -> Master Project Peruíbe) */}
        <ArchitecturalCut onSelectProject={handleOpenProject} />

        {/* 4. Curadoria & Obras de Destaque (Acervo Real sem Duplicações) */}
        <Curadoria onSelectProject={handleOpenProject} />

        {/* 5. Manifesto & Solidez 25+ */}
        <Manifesto />

        {/* 6. Pilares de Atuação Técnica */}
        <Pilares />

        {/* 7. Panorama Corporativo (Vidro, Concreto e Engenharia Pesada) */}
        <Panorama />

        {/* 8. Vitrine & Acervo com Filtros Reativos */}
        <Vitrine onSelectProject={handleOpenProject} />

        {/* 9. Seção de Contato & Novos Negócios */}
        <Contato />
      </main>

      {/* 10. Rodapé Institucional */}
      <Footer />

      {/* Modal Acessível de Ficha Técnica com Restauração de Foco */}
      <ProjectDetailModal
        project={selectedProject}
        triggerElement={activeTriggerEl}
        onClose={handleCloseModal}
      />

      {/* Widget Flutuante WhatsApp Oficial e Elegante */}
      <a
        href={getWhatsAppLink('Olá, vim através do site da Armindo Ramalho e gostaria de falar com a equipe de engenharia e novos negócios.')}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#121212]/95 backdrop-blur-xl border border-white/20 hover:border-[#25D366]/60 text-white px-3.5 py-3 sm:px-4 sm:py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-105 flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#25D366]"
        aria-label="Falar com a equipe no WhatsApp"
      >
        <div className="relative flex items-center justify-center">
          <span className="w-2 h-2 rounded-full bg-[#25D366] inline-block animate-ping absolute" />
          <span className="w-2 h-2 rounded-full bg-[#25D366] inline-block relative" />
        </div>
        <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-sm">
          <MessageCircle className="w-4 h-4 fill-white text-white" />
        </div>
        <div className="hidden sm:flex flex-col text-left">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white leading-none font-sans group-hover:text-[#25D366] transition-colors">
            Fale com a equipe
          </span>
          <span className="text-[8px] uppercase tracking-[0.16em] text-white/60 font-sans mt-0.5">
            Atendimento Direto
          </span>
        </div>
      </a>
    </div>
  );
};

export default App;
