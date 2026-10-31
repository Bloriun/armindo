import { ArrowUpRight } from 'lucide-react';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../../data/portfolioData';

export const Manifesto: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Planejamento & Diligência',
      desc: 'Análise criteriosa de viabilidade técnica, jurídica e urbanística do solo no litoral, assegurando solidez fiduciária antes do primeiro metro construído.',
    },
    {
      num: '02',
      title: 'Engenharia & Desenvolvimento',
      desc: 'Compatibilização de projetos executivos com requisitos arquitetônicos rigorosos de redes comerciais ou especificações de alto padrão residencial.',
    },
    {
      num: '03',
      title: 'Execução & Controle Construtivo',
      desc: 'Gerenciamento técnico em canteiro de obras com equipe própria, controle rigoroso de insumos, fundações robustas e conformidade com cronogramas.',
    },
    {
      num: '04',
      title: 'Entrega & Ativação Operacional',
      desc: 'Vistoria minuciosa, entrega de termo de conclusão de obra com transparência documental e suporte na ativação comercial ou habitação.',
    },
  ];

  return (
    <section id="manifesto" className="w-full bg-[#171717] text-[#F0EEE7] py-24 sm:py-32 border-t border-white/10">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16 space-y-20">
        
        {/* Bloco Superior: Trajetória & Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 p-1 border border-white/20 bg-white/5 flex items-center justify-center">
                <img
                  alt="Armindo Ramalho"
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
                Entregamos empreendimentos corporativos e residenciais que combinam qualidade técnica, localização estratégica e alto potencial de valorização patrimonial.
              </p>
            </div>

            {/* Citação Editorial */}
            <div className="p-6 sm:p-8 bg-white/5 border border-white/15 space-y-2">
              <p className="text-lg sm:text-xl font-medium tracking-tight text-white italic font-heading">
                “Invista com quem entende do mercado e constrói com responsabilidade.”
              </p>
              <span className="text-[10px] uppercase font-sans tracking-[0.24em] text-white/60 font-semibold block">
                — Armindo Ramalho Empreendimentos
              </span>
            </div>

            <p className="text-sm text-white/70 leading-relaxed font-light font-sans">
              Especialistas em construção civil sob medida (Built-to-Suit), incorporação e gestão imobiliária no litoral de São Paulo. Atuamos com transparência e diligência contratual, atendendo desde investidores institucionais até marcas globais em expansão.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/15">
              <div>
                <span className="block text-3xl sm:text-4xl font-bold text-white font-heading tracking-tight">+25</span>
                <span className="text-[10px] sm:text-[11px] uppercase font-sans tracking-[0.2em] text-white/60">Anos de Atuação</span>
              </div>
              <div>
                <span className="block text-3xl sm:text-4xl font-bold text-white font-heading tracking-tight">100%</span>
                <span className="text-[10px] sm:text-[11px] uppercase font-sans tracking-[0.2em] text-white/60">Rigor Fiduciário</span>
              </div>
              <div>
                <span className="block text-3xl sm:text-4xl font-bold text-white font-heading tracking-tight">Litoral</span>
                <span className="text-[10px] sm:text-[11px] uppercase font-sans tracking-[0.2em] text-white/60">São Paulo</span>
              </div>
            </div>
          </div>

          {/* Fotografia da Empresa / Canteiro com link oficial */}
          <div className="lg:col-span-5 relative space-y-4">
            <div className="relative overflow-hidden border border-white/15 aspect-[4/5] bg-black group">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: "url('/assets/images/riviera-real.jpg')",
                  backgroundPosition: 'center 30%',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#171717]/95 backdrop-blur-md border border-white/15 space-y-1.5">
                <span className="text-[9px] uppercase font-sans tracking-[0.24em] text-[#B96545] font-semibold block">
                  Canteiro &amp; Bastidores Reais
                </span>
                <p className="text-xs uppercase tracking-wider text-white font-medium font-heading">
                  Acompanhe obras em andamento no Instagram
                </p>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-white transition-colors pt-1 font-sans"
                >
                  <span>{INSTAGRAM_HANDLE}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bloco Inferior: Processo Técnico em 4 Etapas */}
        <div className="pt-12 border-t border-white/15 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-sans tracking-[0.28em] text-[#B96545] font-semibold block">
                Metodologia Construtiva
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white font-heading">
                Como Conduzimos Nossos Projetos
              </h3>
            </div>
            <p className="text-xs text-white/60 font-sans max-w-md">
              Processo estruturado para assegurar segurança jurídica, controle financeiro e pontualidade na entrega de grandes edificações.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="p-6 bg-white/5 border border-white/10 hover:border-white/25 transition-colors space-y-3"
              >
                <span className="text-2xl font-bold font-heading text-[#B96545] block">
                  {step.num}
                </span>
                <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading">
                  {step.title}
                </h4>
                <p className="text-xs text-white/70 font-sans font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
