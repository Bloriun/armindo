import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { getWhatsAppLink } from '../../data/portfolioData';

export const Panorama: React.FC = () => {
  return (
    <section className="w-full py-20 bg-white border-y border-[#d9d6ce]">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Lado Esquerdo: Fotografia Noturna Real de Referência Arquitetônica */}
          <div className="lg:col-span-8 overflow-hidden bg-[#171717] min-h-[440px] relative group border border-[#d9d6ce]">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: "url('/assets/images/bk-night-original.jpg')",
                backgroundPosition: 'center 40%',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/95 via-[#171717]/40 to-transparent" />
            
            <div className="relative z-10 h-full p-8 sm:p-10 flex flex-col justify-between text-white">
              <div className="flex items-center gap-2 text-[10px] font-sans uppercase tracking-[0.26em] font-semibold text-[#F0EEE7]">
                <span className="w-5 h-[1.5px] bg-[#B96545] inline-block" />
                <span>Padrão Construtivo Corporativo</span>
              </div>
              <div className="space-y-3 max-w-xl">
                <span className="text-xs uppercase font-sans tracking-[0.24em] text-white/70">
                  Unidade de Referência // Litoral Paulista
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white font-heading">
                  Fachadas Modernas, Estruturas de Vidro &amp; Concreto de Alto Desempenho
                </h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light font-sans">
                  Do planejamento de fundações ao acabamento estético final. Execuções completadas com máxima pontualidade para redes que exigem padrões internacionais de qualidade.
                </p>
              </div>
            </div>
          </div>

          {/* Lado Direito: Garantias e Governança Fiduciária */}
          <div className="lg:col-span-4 bg-[#F0EEE7] p-8 sm:p-10 flex flex-col justify-between border border-[#d9d6ce] space-y-6">
            <div className="space-y-4">
              <span className="text-[10px] uppercase font-sans tracking-[0.24em] text-[#6b6962] font-bold block">
                Por Que Construir com a AR?
              </span>
              <h4 className="text-2xl font-bold uppercase tracking-tight text-[#171717] font-heading leading-tight">
                Engenharia que agrega valor ao solo litorâneo
              </h4>
              <ul className="space-y-3.5 text-xs text-[#6b6962] pt-2">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#171717] shrink-0 mt-0.5" />
                  <span>Pontualidade rigorosa no cronograma físico-financeiro de obras.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#171717] shrink-0 mt-0.5" />
                  <span>Experiência comprovada com marcas multinacionais e franquias.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#171717] shrink-0 mt-0.5" />
                  <span>Segurança jurídica transparente e assessoria fiduciária completa.</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-[#d9d6ce]">
              <a
                className="w-full inline-flex items-center justify-between px-6 py-4 bg-[#171717] text-white text-[10px] uppercase font-sans tracking-[0.22em] font-semibold hover:bg-black transition-colors"
                href={getWhatsAppLink('Olá, gostaria de apresentar uma demanda de construção ou investimento corporativo.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Apresentar Projeto</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
