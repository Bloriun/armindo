import { ProjectItem, PillarItem } from '../types';

export const WHATSAPP_PHONE = '5513997849288';
export const WHATSAPP_FORMATTED = '(13) 99784-9288';
export const EMAIL_CONTACT = 'adm@armindoramalho.com.br';
export const INSTAGRAM_HANDLE = '@aramalho.empreendimentos';
export const INSTAGRAM_URL = 'https://instagram.com/aramalho.empreendimentos';

export const getWhatsAppLink = (message?: string) => {
  const base = `https://wa.me/${WHATSAPP_PHONE}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

// 1. MASTER PROJECT (Protagonista exclusivo do Corte Arquitetônico)
export const MASTER_PROJECT: ProjectItem = {
  id: 'bk-peruibe',
  title: 'Burger King Peruíbe',
  subtitle: 'Nova Obra Corporativa // Expansão de Rede',
  location: 'Peruíbe, Litoral Sul SP',
  segment: 'obra',
  badge: 'Em Implantação',
  typeBadge: 'Built-to-Suit Corporativo',
  status: 'Em Implantação',
  isNew: true,
  categories: ['commercial', 'rent'],
  image: '/assets/images/bk-peruibe-campanha.jpg',
  imagePosition: 'center center',
  gallery: ['/assets/images/bk-peruibe-campanha.jpg'],
  description: 'Nova obra corporativa em implantação na orla do litoral sul paulista. Edificação desenvolvida sob o modelo Built-to-Suit, atendendo rigorosamente aos parâmetros construtivos e de fluxo comercial da franqueadora multinacional.',
  specs: [
    { label: 'Modalidade', value: 'Built-to-Suit Corporativo' },
    { label: 'Localização', value: 'Peruíbe, SP' },
    { label: 'Padrão Técnico', value: 'Concreto & Estrutura Comercial' },
    { label: 'Fase', value: 'Obras de Implantação' },
  ],
  features: [
    'Execução técnica de infraestrutura civil e fundações',
    'Adequação completa às diretrizes arquitetônicas da marca',
    'Planejamento de fluxo para tráfego e atendimento drive-thru',
    'Gestão fiduciária e pontualidade na entrega física',
  ],
  whatsappMessage: 'Olá, gostaria de detalhes sobre a nova obra do Burger King em Peruíbe.',
};

// 2. CATÁLOGO DE IMÓVEIS E REALIZAÇÕES (Com associação fotográfica autêntica e individual)
export const CATALOG_ITEMS: ProjectItem[] = [
  {
    id: 'bk-itanhaem',
    title: 'Burger King Itanhaém',
    subtitle: 'Obra Corporativa Concluída',
    location: 'Itanhaém, Litoral Sul SP',
    segment: 'obra',
    badge: 'Operação Ativa',
    typeBadge: 'Obra Corporativa',
    categories: ['commercial'],
    image: '/assets/images/bk-itanhaem-real.jpg',
    imagePosition: 'center 42%',
    gallery: [
      '/assets/images/bk-itanhaem-real.jpg',
      '/assets/images/bk-hero-sharp.png',
    ],
    description: 'Obra corporativa concluída e em pleno funcionamento no litoral de São Paulo. Execução de engenharia civil pesada com pavimentação de tráfego, fundações sólidas, pista de drive-thru e entrega rigorosamente no prazo contratado.',
    specs: [
      { label: 'Tipologia', value: 'Restaurante Fast Food & Drive-Thru' },
      { label: 'Modalidade', value: 'Built-to-Suit Corporativo' },
      { label: 'Padrão Técnico', value: 'Concreto Armado & Estrutura Comercial' },
      { label: 'Status', value: 'Concluído // Operação Ativa' },
    ],
    features: [
      'Cumprimento rigoroso do cronograma físico-financeiro',
      'Engenharia civil completa desde terraplanagem até acabamento fino',
      'Pista pavimentada com raio de giro e drenagem para drive-thru',
      'Instalações elétricas industriais e climatização homologadas',
    ],
    whatsappMessage: 'Olá, gostaria de conversar sobre obras corporativas e projetos comerciais com a Armindo Ramalho.',
  },
  {
    id: 'bk-peruibe-cat',
    title: 'Burger King Peruíbe',
    subtitle: 'Nova Obra Corporativa em Implantação',
    location: 'Peruíbe, Litoral Sul SP',
    segment: 'obra',
    badge: 'Em Implantação',
    typeBadge: 'Built-to-Suit',
    isNew: true,
    categories: ['commercial', 'rent'],
    image: '/assets/images/bk-peruibe-campanha.jpg',
    imagePosition: 'center center',
    gallery: ['/assets/images/bk-peruibe-campanha.jpg'],
    description: 'Nova implantação corporativa de grande relevância no litoral paulista. Projeto em execução sob medida com tecnologia construtiva fiduciária e pleno cumprimento dos padrões da rede multinacional.',
    specs: [
      { label: 'Modalidade', value: 'Built-to-Suit Corporativo' },
      { label: 'Localização', value: 'Peruíbe, SP' },
      { label: 'Padrão Técnico', value: 'Fundações & Estrutura Comercial' },
      { label: 'Fase', value: 'Em Implantação' },
    ],
    features: [
      'Localização estratégica em corredor de circulação regional',
      'Planejamento de fluxo viário e atendimento drive-thru',
      'Adequação arquitetônica rigorosa aos manuais da marca',
      'Gestão fiduciária com segurança jurídica e física',
    ],
    whatsappMessage: 'Olá, gostaria de detalhes sobre a nova implantação do Burger King em Peruíbe.',
  },
  {
    id: 'the-best-acai',
    title: 'Ponto Comercial The Best Açaí',
    subtitle: 'Instalação Comercial Pronta',
    location: 'Litoral Paulista, SP',
    segment: 'oportunidade',
    badge: 'Disponível para Locação',
    typeBadge: 'Locação Comercial',
    categories: ['commercial', 'rent'],
    image: '/assets/images/the-best-acai.jpg',
    imagePosition: 'center 28%',
    gallery: ['/assets/images/the-best-acai.jpg'],
    description: 'Ponto comercial com alta visibilidade e fluxo contínuo de consumidores no litoral de São Paulo. Estrutura pronta para operação, dimensionada para grandes marcas do setor de alimentação, franquias e comércio em geral.',
    specs: [
      { label: 'Segmento', value: 'Comercial / Varejo' },
      { label: 'Região', value: 'Litoral de São Paulo' },
      { label: 'Infraestrutura', value: 'Pronta para Operação' },
      { label: 'Disponibilidade', value: 'Locação Imediata' },
    ],
    features: [
      'Localização privilegiada em avenida com intenso fluxo comercial',
      'Instalações elétricas e hidráulicas de padrão comercial pesado',
      'Acessibilidade completa e facilidade de estacionamento frontal',
      'Fachada contemporânea com ampla área envidraçada',
    ],
    whatsappMessage: 'Olá, tenho interesse no ponto comercial The Best Açaí para locação.',
  },
  {
    id: 'riviera-mansion',
    title: 'Mansão Riviera de São Lourenço',
    subtitle: 'Residência Contemporânea de Alto Padrão',
    location: 'Riviera de São Lourenço, SP',
    segment: 'oportunidade',
    badge: 'À Venda',
    typeBadge: 'Residencial Nobre',
    categories: ['beach'],
    image: '/assets/images/riviera-real.jpg',
    imagePosition: 'center 32%',
    gallery: [
      '/assets/images/riviera-real.jpg',
      '/assets/images/riviera-mansion.jpg',
    ],
    description: 'Residência contemporânea de alto padrão com 04 suítes, pé-direito duplo, integração fluida de ambientes internos e externos, espaço gourmet completo e piscina privativa aquecida. Localizada em módulo nobre de condomínio fechado com máxima privacidade.',
    specs: [
      { label: 'Acomodações', value: '04 Suítes Nobres' },
      { label: 'Lazer', value: 'Piscina Privativa & Gourmet' },
      { label: 'Condomínio', value: 'Riviera de São Lourenço, SP' },
      { label: 'Segurança', value: 'Portaria & Vigilância 24h' },
    ],
    features: [
      'Ambientes integrados e amplas aberturas de iluminação natural',
      'Área gourmet completa com bancadas de granito e churrasqueira',
      'Piscina privativa integrada ao paisagismo da residência',
      'Documentação e diligência imobiliária 100% regularizadas',
    ],
    whatsappMessage: 'Olá, tenho interesse na residência de alto padrão na Riviera de São Lourenço.',
  },
];

export const OBRAS_ITEMS = CATALOG_ITEMS.filter((item) => item.segment === 'obra');
export const OPORTUNIDADES_ITEMS = CATALOG_ITEMS.filter((item) => item.segment === 'oportunidade');

// 3. PILARES DE ATUAÇÃO TÉCNICA (Priorizados para marcas corporativas, investidores e construtores)
export const PILLARS_DATA: PillarItem[] = [
  {
    id: 'pilar-1',
    number: '01.',
    title: 'Engenharia Corporativa & Built-to-Suit',
    subtitle: 'Obras Comerciais sob Medida para Redes & Franquias',
    description: 'Desenvolvimento e execução completa de unidades comerciais personalizadas para grandes redes corporativas e multinacionais (Burger King, The Best Açaí). Rigor absoluto em cronogramas, especificações de marca e infraestrutura pesada.',
    whatsappMessage: 'Olá, tenho interesse em projetos de Engenharia Corporativa e Built-to-Suit com a Armindo Ramalho.',
  },
  {
    id: 'pilar-2',
    number: '02.',
    title: 'Construção Civil & Incorporação',
    subtitle: 'Edificações Residenciais Nobres & Comerciais',
    description: 'Execução de alto padrão construtivo com tecnologia moderna, controle fiduciário e pontualidade física. Empreendimentos concebidos para durabilidade, conforto e valorização patrimonial no litoral paulista.',
    whatsappMessage: 'Olá, gostaria de conhecer as realizações de Construção Civil e Incorporação no litoral.',
  },
  {
    id: 'pilar-3',
    number: '03.',
    title: 'Parcerias de Terrenos & Investimentos',
    subtitle: 'Permutas, BTS & Locação Estratégica de Longo Prazo',
    description: 'Estruturação de parcerias com proprietários de terrenos bem localizados e investidores de capital. Viabilidade econômico-financeira, segurança jurídica integral e geração de renda recorrente sólida.',
    whatsappMessage: 'Olá, tenho um terreno ou capital e gostaria de avaliar parcerias de investimento com a Armindo Ramalho.',
  },
];
