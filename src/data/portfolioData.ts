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

// 1. MASTER PROJECT (Protagonista exclusivo da Curadoria / Corte Arquitetônico)
export const MASTER_PROJECT: ProjectItem = {
  id: 'bk-peruibe',
  title: 'Burger King Peruíbe',
  subtitle: 'Nova Obra Corporativa // Expansão de Rede',
  location: 'Peruíbe, Litoral Sul SP',
  badge: 'Em Implantação',
  typeBadge: 'Built-to-Suit',
  status: 'Em Implantação',
  isNew: true,
  categories: ['commercial', 'rent'],
  image: '/assets/images/bk-peruibe-anuncio.png',
  description: 'Nova obra corporativa em implantação no litoral sul de São Paulo. Edificação desenvolvida sob o modelo Built-to-Suit, atendendo rigorosamente aos parâmetros construtivos e de fluxo comercial da franqueadora.',
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
  whatsappMessage: 'Olá, gostaria de detalhes da nova obra do Burger King em Peruíbe.',
};

// 2. CATÁLOGO DE IMÓVEIS E REALIZAÇÕES (Sem repetição do Master Project)
export const CATALOG_ITEMS: ProjectItem[] = [
  {
    id: 'the-best-acai',
    title: 'The Best Açaí',
    subtitle: 'Ponto Estratégico Comercial',
    location: 'Litoral Paulista',
    badge: 'Comercial',
    typeBadge: 'Locação Comercial',
    categories: ['commercial', 'rent'],
    image: '/assets/images/the-best-acai.jpg',
    description: 'Ponto comercial com alta visibilidade e fluxo contínuo de consumidores no litoral. Estrutura dimensionada para grandes marcas do setor de alimentação.',
    specs: [
      { label: 'Segmento', value: 'Comercial / Franquia' },
      { label: 'Região', value: 'Litoral de São Paulo' },
      { label: 'Infraestrutura', value: 'Pronta para Operação' },
    ],
    features: [
      'Localização em avenida de alto fluxo comercial',
      'Instalações elétricas e hidráulicas de padrão comercial pesado',
      'Acessibilidade e estacionamento facilitado',
    ],
    whatsappMessage: 'Olá, gostaria de saber sobre o ponto The Best Açaí.',
  },
  {
    id: 'riviera-mansion',
    title: 'Riviera de São Lourenço',
    subtitle: 'Residência Exclusiva de Alto Padrão',
    location: 'Riviera de São Lourenço, SP',
    badge: 'À Venda',
    typeBadge: 'Residencial',
    categories: ['beach'],
    image: '/assets/images/riviera-real.jpg',
    description: 'Residência nobre com 04 suítes, espaço gourmet planejado e piscina integrada privativa. Acabamentos de alto padrão executados com rigor construtivo.',
    specs: [
      { label: 'Acomodações', value: '04 Suítes' },
      { label: 'Lazer', value: 'Piscina Privativa & Gourmet' },
      { label: 'Local', value: 'Riviera de São Lourenço' },
    ],
    features: [
      'Ambientes integrados e amplas aberturas de iluminação natural',
      'Área gourmet completa com bancadas e churrasqueira',
      'Condomínio fechado com segurança 24 horas e privacidade total',
    ],
    whatsappMessage: 'Olá, tenho interesse na residência de alto padrão na Riviera de São Lourenço.',
  },
  {
    id: 'bk-itanhaem',
    title: 'Burger King Itanhaém',
    subtitle: 'Case de Engenharia Concluído',
    location: 'Itanhaém, SP',
    badge: 'Operação Ativa',
    typeBadge: 'Obra Entregue',
    categories: ['commercial'],
    image: '/assets/images/bk-itanhaem-real.jpg',
    description: 'Obra corporativa concluída e em pleno funcionamento. Projeto de engenharia civil pesada com pavimentação de tráfego, fundações sólidas e entrega no prazo contratado.',
    specs: [
      { label: 'Cidade', value: 'Itanhaém, SP' },
      { label: 'Tipologia', value: 'Restaurante Fast Food & Drive-thru' },
      { label: 'Situação', value: 'Operação Ativa' },
    ],
    features: [
      'Cumprimento rigoroso do cronograma físico-financeiro',
      'Engenharia civil completa desde terraplanagem até acabamento',
      'Estrutura com certificação e aprovação pela rede multinacional',
    ],
    whatsappMessage: 'Olá, gostaria de conversar sobre obras corporativas comerciais.',
  },
  {
    id: 'cibratel-ilhas',
    title: 'Ilhas do Sul & Centro Cibratel',
    subtitle: 'Residenciais e Galerias Beira-mar',
    location: 'Litoral Sul, SP',
    badge: 'Portfólio Litoral',
    typeBadge: 'Residencial & Comercial',
    categories: ['beach', 'commercial', 'rent'],
    image: '/assets/images/riviera-mansion.jpg',
    description: 'Conjunto de investimentos beira-mar e galerias estratégicas desenvolvidos para comércio, serviços e moradia no litoral sul.',
    specs: [
      { label: 'Segmentos', value: 'Residencial e Comercial' },
      { label: 'Posição', value: 'Região Litorânea Estratégica' },
      { label: 'Disponibilidade', value: 'Sob Consulta' },
    ],
    features: [
      'Localização consolidada com alto potencial de valorização',
      'Diligência documental e jurídica 100% verificada',
      'Flexibilidade para locação comercial ou moradia',
    ],
    whatsappMessage: 'Olá, gostaria de informações sobre as opções no Ilhas do Sul e Centro Cibratel.',
  },
];

// 3. PILARES DE ATUAÇÃO TÉCNICA
export const PILLARS_DATA: PillarItem[] = [
  {
    id: 'pilar-1',
    number: '01.',
    title: 'Construção Civil & Engenharia',
    subtitle: 'Obras Corporativas e Residenciais',
    description: 'Execução rigorosa com equipe técnica qualificada para grandes redes multinacionais (Burger King, The Best Açaí) e residenciais de alto padrão, cumprindo prazos e especificações fiduciárias.',
    whatsappMessage: 'Olá, tenho interesse em Construção Civil e Engenharia com a Armindo Ramalho.',
  },
  {
    id: 'pilar-2',
    number: '02.',
    title: 'Venda & Aquisição Patrimonial',
    subtitle: 'Imóveis com Potencial de Valorização',
    description: 'Curadoria criteriosa de oportunidades imobiliárias no litoral paulista. Transações transparentes, diligência documental total e acompanhamento consultivo de ponta a ponta.',
    whatsappMessage: 'Olá, quero conhecer as opções para aquisição patrimonial no litoral.',
  },
  {
    id: 'pilar-3',
    number: '03.',
    title: 'Locação Estratégica & Built-to-Suit',
    subtitle: 'Renda Recorrente e Solidez Contratual',
    description: 'Desenvolvimento de imóveis sob medida para marcas consolidadas e estruturação de contratos de locação voltados à perenidade e rentabilidade patrimonial.',
    whatsappMessage: 'Olá, gostaria de saber sobre projetos de locação estratégica e built-to-suit.',
  },
];
