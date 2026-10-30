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
    <div className="min-h-screen bg-[#171717] text-[#F0EEE7] selection:bg-[#B96545] selection:text-white relative">
      {/* 1. Header & Navegação Arquitetônica */}
      <Navbar />

      {/* Conteúdo Principal */}
      <main className="w-full">
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

      {/* Widget Arquitetônico de WhatsApp Discreto */}
      <a
        href={getWhatsAppLink('Olá, vim através do site da Armindo Ramalho e gostaria de mais informações.')}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#171717]/95 backdrop-blur-md border border-white/25 hover:border-white/50 text-[#F0EEE7] p-3 shadow-2xl transition-all duration-300 hover:bg-black flex items-center gap-2 group focus:outline-none focus:ring-1 focus:ring-white"
        aria-label="Falar conosco no WhatsApp"
      >
        <span className="w-2 h-2 bg-emerald-400 inline-block animate-pulse shrink-0" />
        <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" />
        <span className="hidden sm:inline-block font-sans text-[10px] uppercase tracking-[0.2em] font-semibold pr-1">
          WhatsApp
        </span>
      </a>
    </div>
  );
};

export default App;
