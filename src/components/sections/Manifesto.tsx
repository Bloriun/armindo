import React from 'react';

export const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="w-full bg-[#171717] text-[#F0EEE7] py-24 sm:py-32 border-t border-white/10">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 p-1 border border-white/20 bg-white/5 flex items-center justify-center">
                <img
                  alt="AR"
                  className="w-full h-full object-contain filter invert opacity-90"
                  src="/assets/images/logo.jpg"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = '<span class="text-xs font-bold text-white font-heading">AR</span>';
                    }
                  }}
                />
              </div>
              <span className="text-[11px] uppercase font-sans tracking-[0.28em] text-white/60 font-semibold">
                Manifesto Institucional // Tradição &amp; Rigor
              </span>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white font-heading leading-[1.08]">
                Mais de 25 anos construindo marcos e patrimônio sólido no litoral paulista.
              </h2>
              <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed font-sans">
                Entregamos empreendimentos residenciais e comerciais que unem qualidade construtiva, localização estratégica e alto potencial de valorização patrimonial.
              </p>
            </div>

            {/* Citação Editorial em Caixa Sóbria (Sem barra grossa à esquerda) */}
            <div className="p-6 sm:p-8 bg-white/5 border border-white/15 space-y-2">
              <p className="text-lg sm:text-xl font-medium tracking-tight text-white italic font-heading">
                “Invista com quem entende do mercado e constrói com responsabilidade.”
              </p>
              <span className="text-[10px] uppercase font-sans tracking-[0.24em] text-white/60 font-semibold block">
                — Armindo Ramalho Empreendimentos
              </span>
            </div>

            <p className="text-sm text-white/70 leading-relaxed font-light">
              Somos especialistas em construção, venda e locação de imóveis, oferecendo oportunidades seguras tanto para quem deseja morar quanto para quem busca rentabilidade com contratos consolidados e imóveis de padrão impecável.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/15">
              <div>
                <span className="block text-3xl sm:text-4xl font-bold text-white font-heading tracking-tight">+25</span>
                <span className="text-[10px] sm:text-[11px] uppercase font-sans tracking-[0.2em] text-white/60">Anos de Mercado</span>
              </div>
              <div>
                <span className="block text-3xl sm:text-4xl font-bold text-white font-heading tracking-tight">100%</span>
                <span className="text-[10px] sm:text-[11px] uppercase font-sans tracking-[0.2em] text-white/60">Segurança Jurídica</span>
              </div>
              <div>
                <span className="block text-3xl sm:text-4xl font-bold text-white font-heading tracking-tight">Litoral</span>
                <span className="text-[10px] sm:text-[11px] uppercase font-sans tracking-[0.2em] text-white/60">São Paulo</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden border border-white/15 aspect-[4/5] bg-black">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{
                  backgroundImage: "url('/assets/images/riviera-real.jpg')",
                  backgroundPosition: 'center 30%',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#171717]/90 backdrop-blur-md border border-white/15 space-y-1">
                <span className="text-[9px] uppercase font-sans tracking-[0.24em] text-white/60 font-semibold block">
                  Rigor Construtivo &amp; Acabamento
                </span>
                <p className="text-xs uppercase tracking-wider text-white font-medium font-heading">
                  Residências Exclusivas &amp; Infraestrutura Corporativa
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
