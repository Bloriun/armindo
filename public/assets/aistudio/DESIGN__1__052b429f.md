# ARMINDO RAMALHO EMPREENDIMENTOS
## DESIGN SYSTEM & FRONTEND MASTER SPECIFICATION

**Projeto:** Redesign institucional e comercial  
**Direção de arte:** ATLAS LITORÂNEO  
**Transição principal:** CORTE ARQUITETÔNICO  
**Versão:** 1.0 — Especificação mestre  
**Status:** Direção criativa aprovada; implementação condicionada à auditoria do projeto e do acervo real  
**Plataforma-alvo:** Google AI Studio Build  

---

## 0. Como utilizar este documento

Este arquivo é a fonte principal de decisões de design, UX, movimento e arquitetura frontend do projeto. O agente deve consultá-lo antes de implementar ou alterar componentes.

A especificação define uma direção visual e critérios de qualidade, não autoriza inventar conteúdo. Informações, imagens, nomes de obras, endereços, datas, dimensões, parceiros, números, garantias, serviços e contatos devem vir dos arquivos existentes ou de confirmação explícita da empresa.

Quando uma informação não existir, omita-a ou sinalize-a como pendência editorial. Nunca preencha lacunas com conteúdo fictício.

### Decisões aprovadas e bloqueadas

| Decisão | Definição |
|---|---|
| Conceito | ATLAS LITORÂNEO |
| Personalidade | Autoral, cinematográfica, sofisticada, contemporânea e profissional |
| Hero | Full-bleed, fotográfico e imersivo |
| Transição | CORTE ARQUITETÔNICO |
| Portfólio | Híbrido: apresentação editorial + acervo navegável |
| Movimento | Cinematográfico, controlado e funcional |
| Cursor | Nativo, com microinterações discretas; sem cursor customizado |
| Mobile | Experiência adaptada, com coreografia própria simplificada |
| Referências | Análise de referências internacionais, sem copiar layouts |
| Stack | Moderna, preferencialmente React + TypeScript no ambiente padrão do AI Studio |
| Conteúdo | Preservar e auditar todo o conteúdo real já existente |
| Fotografia | Usar exclusivamente fotografias reais e autorizadas das obras |

---

# 1. Estratégia e posicionamento visual

## 1.1 Conceito: ATLAS LITORÂNEO

A identidade deve comunicar a relação entre arquitetura, engenharia, construção, patrimônio e território. O litoral paulista não deve aparecer como decoração turística; ele é parte do contexto geográfico e da atuação da empresa.

O conceito combina cinco dimensões:

1. **Precisão arquitetônica:** alinhamentos, proporções, cortes, margens e hierarquia bem controlados.
2. **Presença material:** concreto, pedra, metal, papel mineral e superfícies honestas.
3. **Fotografia documental:** obras reais como protagonistas, sem imagens genéricas de banco de imagens.
4. **Composição editorial:** assimetria intencional, tipografia expressiva, grandes áreas de respiro e ritmo de leitura.
5. **Movimento cinematográfico:** transformações pontuais que revelam relações entre imagem, título e conteúdo.

A personalidade deve ser segura e madura, sem parecer uma incorporadora genérica, uma imobiliária de catálogo ou um escritório de arquitetura experimental sem foco comercial.

## 1.2 Princípio central

**A arquitetura visual precisa funcionar antes da animação.**

Com JavaScript desativado, GSAP indisponível ou movimento reduzido ativado, o visitante ainda deve encontrar uma página visualmente completa, hierarquizada e navegável. As animações acrescentam ritmo, não escondem conteúdo nem compensam composições fracas.

## 1.3 Anti-direção: o que não fazer

- Não utilizar o template imobiliário padrão com hero, três cartões iguais, ícones genéricos e depoimentos inventados.
- Não usar gradientes roxos/azuis, glassmorphism, neon, glow, partículas ou efeitos de interface sem relação com a marca.
- Não repetir a mesma composição de título + subtítulo + botão + imagem em todas as seções.
- Não espalhar coordenadas, números, linhas, crosshairs, molduras ou rótulos técnicos como decoração sem função informacional.
- Não exagerar no tracking, em textos minúsculos ou em blocos de texto em caixa alta.
- Não usar imagens artificiais para representar obras reais, mesmo como substituição temporária.
- Não colocar overlays escuros pesados sobre todas as fotografias. Corrigir contraste localmente e preservar a leitura da imagem.
- Não transformar toda a página em uma sequência de painéis pinados.
- Não implementar smooth scroll, cursor personalizado ou animações infinitas apenas para parecer sofisticado.
- Não usar `!important` em massa para corrigir conflitos de layout.

---

# 2. Design system

## 2.1 Paleta oficial

| Token | Cor | Hex | Uso |
|---|---|---|---|
| `--color-basalt` | Basalto | `#171717` | Fundo escuro principal, header em estado sólido, rodapé |
| `--color-paper` | Papel mineral | `#F0EEE7` | Fundo claro principal e áreas editoriais |
| `--color-concrete` | Concreto | `#AAA8A2` | Texto auxiliar, bordas e elementos secundários |
| `--color-oxide` | Óxido terracota | `#B96545` | Assinatura visual, traçado do corte, foco pontual e progresso |
| `--color-white` | Branco | `#FFFFFF` | Contraste e superfícies pontuais |

### Regras de aplicação

- Basalto e papel mineral são as duas superfícies dominantes.
- Não alternar fundo claro/escuro mecanicamente em todas as seções. A mudança deve refletir a narrativa e a hierarquia.
- Óxido terracota deve ser raro e reconhecível: linha do Corte Arquitetônico, um indicador ativo, pequenos detalhes ou um CTA principal quando houver contraste adequado.
- Concreto não deve ser usado em texto pequeno sobre papel mineral se o contraste ficar insuficiente.
- Estados de erro/sucesso devem usar cores funcionais acessíveis, sem alterar a identidade principal.

## 2.2 Tipografia

### Direção

Tipografia sans-serif contemporânea, com personalidade e excelente leitura em telas grandes e pequenas. Preferir uma família variável principal bem escolhida e, se necessário, uma família editorial complementar usada de maneira muito restrita.

**Base recomendada:** Manrope Variable para interface, textos e títulos. Avaliar Instrument Serif apenas para uma frase editorial curta no manifesto, caso a combinação seja testada e realmente acrescente personalidade. Não usar serif como decoração recorrente.

Se a família for carregada por npm, usar arquivos locais/fontes otimizadas e declarar `font-display: swap`. Confirmar licença e peso real dos arquivos. Não depender de um CDN externo para a fonte essencial.

### Hierarquia tipográfica indicativa

| Token | Desktop | Mobile | Aplicação |
|---|---:|---:|---|
| Display XL | `clamp(4.5rem, 10vw, 10rem)` | `clamp(3rem, 15vw, 5rem)` | Nome no hero / abertura |
| Display L | `clamp(3.5rem, 7vw, 7rem)` | `clamp(2.5rem, 11vw, 4.5rem)` | Abertura de seção |
| Heading 1 | `clamp(2.75rem, 5vw, 5rem)` | `clamp(2.25rem, 9vw, 3.5rem)` | Títulos principais |
| Heading 2 | `clamp(2rem, 3vw, 3rem)` | `clamp(1.75rem, 7vw, 2.5rem)` | Projetos e áreas |
| Heading 3 | `1.25rem–1.75rem` | `1.2rem–1.5rem` | Cards e subtítulos |
| Body L | `1.125rem–1.25rem` | `1.05rem–1.125rem` | Introduções e manifesto |
| Body | `1rem` | `1rem` | Texto corrente |
| Small | `0.8125rem–0.875rem` | `0.8125rem` | Metadados necessários |

Os valores são pontos de partida, não substituem testes de quebra de linha com os textos reais. Evitar títulos com largura excessiva. Controlar `max-width`, `line-height` e `text-wrap: balance` quando suportado.

### Regras

- O nome ARMINDO RAMALHO deve ser o elemento tipográfico dominante no hero.
- Não reduzir demais textos auxiliares para acomodar uma composição.
- Usar pesos e quebras de linha para criar contraste, não tracking exagerado.
- Não converter todo o conteúdo em caixa alta.

## 2.3 Grid, largura e espaçamento

- Container editorial desktop: largura máxima aproximada de `1440px–1600px`, com margens fluidas.
- Grid principal desktop: 12 colunas, gutter de `20px–28px`.
- Tablet: 8 colunas; mobile: 4 colunas.
- Margens horizontais fluidas: `clamp(1.25rem, 4.5vw, 5rem)`.
- Seções devem usar espaçamento vertical generoso e variável, orientado pela composição, não um único padding repetido.
- Escala base de espaçamento: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128 e 160 px, com tokens CSS.
- Evitar containers de texto longos: corpo editorial idealmente entre 45 e 75 caracteres por linha.

## 2.4 Bordas, formas e materialidade

- Cantos predominantemente retos ou com raio muito discreto. Não usar cartões excessivamente arredondados.
- Linhas finas e separadores podem remeter a pranchas arquitetônicas, desde que organizem informação.
- Sombras devem ser raras e realistas; preferir contraste entre superfícies e profundidade fotográfica.
- Não aplicar textura ruidosa em todas as superfícies. Textura só quando sutil, performática e justificada.

## 2.5 Tokens técnicos iniciais

```css
:root {
  --color-basalt: #171717;
  --color-paper: #F0EEE7;
  --color-concrete: #AAA8A2;
  --color-oxide: #B96545;
  --color-white: #FFFFFF;

  --content-max: 1600px;
  --page-gutter: clamp(1.25rem, 4.5vw, 5rem);
  --section-space: clamp(5rem, 10vw, 10rem);
  --grid-gap: clamp(1rem, 2vw, 1.75rem);

  --font-sans: "Manrope", Arial, sans-serif;
  --ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-linear: linear;
  --duration-fast: 180ms;
  --duration-medium: 420ms;
  --duration-slow: 760ms;
}
```

Os tokens devem ser ajustados após a primeira implementação visual e não duplicados em folhas de estilo divergentes.

---

# 3. Arquitetura de conteúdo e narrativa

## 3.1 Estrutura narrativa recomendada

A ordem abaixo é a proposta de narrativa. O agente deve confrontá-la com o HTML, PDF, imagens e conteúdo atual. Se a ordem atual tiver uma razão comercial ou funcional, preservá-la e documentar a decisão.

1. Header / navegação.
2. Hero cinematográfico.
3. Corte Arquitetônico e revelação da primeira obra.
4. Portfólio de obras em destaque.
5. Áreas de atuação.
6. Manifesto e história da empresa.
7. Acervo / oportunidades imobiliárias.
8. Contato e encerramento institucional.
9. Footer com dados reais, navegação complementar e redes válidas.

## 3.2 Separar tipos de conteúdo

É obrigatório diferenciar:

- **Obras realizadas / projetos corporativos:** projetos como Burger King de Itanhaém, expansão para Peruíbe, The Best Açaí, Riviera de São Lourenço, Ilhas do Sul e Centro Cibratel, somente se confirmados no conteúdo atual.
- **Áreas de atuação / serviços:** engenharia, venda, aquisição patrimonial, locação e built-to-suit, respeitando exatamente a oferta real da empresa.
- **Acervo imobiliário:** imóveis ou oportunidades apresentados para consulta. Não misturar com o portfólio de obras realizadas.
- **História e manifesto:** posicionamento, trajetória e informações institucionais que já estejam documentadas.

Não repetir a mesma obra em múltiplas seções apenas para preencher espaço. Uma obra pode aparecer como destaque no início e no arquivo completo, mas a segunda aparição deve ser uma continuação funcional, não uma cópia de cartão.

## 3.3 Dados e conteúdo

Centralizar o conteúdo repetitivo em objetos TypeScript tipados, por exemplo:

- `src/data/projects.ts`
- `src/data/areas.ts`
- `src/data/properties.ts`
- `src/data/company.ts`
- `src/data/contact.ts`

Não criar informações que não existam. Campos opcionais devem ser omitidos quando ausentes. Não inventar datas, status, localizações precisas, metragens, clientes, depoimentos, certificações ou métricas.

---

# 4. Arquitetura visual das seções

## 4.1 Header / navegação

### Desktop

- Header compacto e bem alinhado ao grid da página.
- Logotipo real da empresa, sem redesenhar ou substituir a marca sem autorização.
- Links principais com espaçamento natural e leitura imediata.
- CTA de contato deve usar destino real já existente.
- Estado inicial transparente ou integrado ao hero somente se o contraste for comprovado sobre a fotografia.
- Após a área do hero, pode assumir Basalto sólido ou Papel mineral conforme o fundo da seção, sem glassmorphism excessivo.

### Comportamento

- Estado `default`, `scrolled` e `menu-open` claramente definidos.
- A transição de cor/fundo não deve causar deslocamento de layout.
- Header não pode cobrir conteúdo focado por teclado.
- Navegação por teclado e Escape para fechar menu mobile.
- Não esconder telefone, marca ou CTA por falta de espaço; reorganizar a hierarquia.

## 4.2 Hero — full-bleed cinematográfico

### Objetivo

Criar uma primeira impressão de presença, confiança e escala. A fotografia real deve ter protagonismo e o nome ARMINDO RAMALHO deve fazer parte da composição, não parecer uma legenda colocada depois.

### Composição

- Ocupação inicial próxima de `100svh`, respeitando barras do navegador móvel e telas menores.
- Fotografia real ampla, em resolução suficiente para telas grandes.
- Nome ARMINDO RAMALHO em escala dominante, com quebras responsivas cuidadosamente definidas.
- Mensagem institucional curta extraída do conteúdo atual. Não redigir slogan novo sem validação.
- CTA primário para explorar obras e CTA secundário para contato, usando rotas e destinos existentes.
- Informação complementar mínima. Não adicionar coordenadas, indicadores ou etiquetas sem função.

### Fotografia

Antes de escolher o arquivo definitivo:

1. Inventariar `assets/images/` e pastas relacionadas.
2. Verificar dimensões, peso, proporção, compressão, nitidez, foco, exposição e qualidade em tela grande.
3. Avaliar a foto `bk-itanhaem-real.jpg` original e compará-la com todas as alternativas reais.
4. Conferir se o enquadramento deixa espaço suficiente para o nome sem ocultar fachada, volumetria ou detalhes relevantes.
5. Definir `object-position` ou uma variação de crop adequada a desktop e mobile.
6. Não gerar, buscar ou inserir uma foto artificial para representar uma obra real.

### Tratamento visual

- Preservar cores e materialidade reais da fotografia.
- Se necessário, usar uma camada de contraste localizada atrás do texto, não um overlay preto uniforme pesado.
- Evitar vinheta dramática, blur, glow e filtros que alterem a leitura documental.
- A imagem deve parecer fotografada, não renderizada artificialmente.

### Entrada do hero — timeline inicial

Duração total sugerida: aproximadamente 1,4–2,0 s, sem bloquear interação.

1. **0,00 s — presença:** fundo e imagem já estão visíveis; nenhuma tela de carregamento obrigatória.
2. **0,12–0,65 s — marca:** nome ARMINDO RAMALHO revela por máscara curta ou movimento vertical contido. Não animar letra por letra como efeito padrão.
3. **0,38–0,85 s — mensagem:** texto institucional entra com deslocamento pequeno e opacidade.
4. **0,62–1,10 s — ações:** CTAs entram com pequeno atraso, sem bounce.
5. **0,90–1,45 s — assinatura:** linha ou detalhe terracota é desenhado discretamente.

A timeline pode ser ajustada para a composição final, mas deve preservar essa prioridade: marca, mensagem, ação, assinatura.

### Estados seguros

- Conteúdo essencial começa visível no HTML/CSS.
- O estado oculto de animação só pode ser aplicado depois que o sistema de animação confirmar que está inicializado e respeitando `prefers-reduced-motion`.
- Se JS ou GSAP falhar, a página continua completa.
- Não aplicar `opacity: 0`, `visibility: hidden` ou `clip-path` de forma permanente ao título.

## 4.3 CORTE ARQUITETÔNICO — transição hero → primeira obra

### Intenção

A rolagem deve parecer uma mudança de enquadramento arquitetônico, não um slideshow. Uma única sequência principal conecta o hero ao primeiro conteúdo do portfólio.

### Coreografia desktop

A sequência deve durar aproximadamente 1,1–1,4 viewport de rolagem, refinada após protótipo.

**Estado A — composição integral**
- Hero ocupa a viewport.
- Fotografia em escala natural.
- Marca em escala grande.
- Header tem tratamento compatível com a imagem.

**Estado B — início do corte**
- A imagem começa a recolher sua moldura por `clip-path` ou máscara equivalente.
- O conteúdo interno da imagem pode sofrer pequeno ajuste de escala/posição para manter o foco arquitetônico.
- A marca reduz escala e desloca-se para uma posição editorial definida; não desaparecer abruptamente.

**Estado C — traçado**
- Uma linha terracota fina desenha um percurso abstrato, inspirado em linhas de projeto e na costa, sem alegar reproduzir um mapa geográfico preciso.
- A linha acompanha o grid e conduz o olhar à próxima imagem.
- A linha é um único gesto visual, não uma rede de linhas decorativas.

**Estado D — revelação**
- A primeira obra real torna-se visível em uma composição de destaque.
- A informação do projeto aparece em hierarquia: nome real, local quando confirmado e texto real disponível.
- A revelação deve parecer uma mudança de prancha ou enquadramento, não um cartão surgindo com fade genérico.

**Estado E — liberação**
- A timeline termina.
- O visitante retoma a rolagem nativa sem perceber um bloqueio.
- A próxima seção permanece no fluxo normal do documento.

### Regras de engenharia do pin

- Pin somente o wrapper da sequência, pelo menor tempo possível.
- Não animar diretamente o elemento que está sendo pinado; animar seus elementos internos.
- Usar um único ScrollTrigger principal para esta transição, salvo justificativa técnica.
- Preferir `scrub` para sincronizar o progresso; evitar `snap` obrigatório.
- A sequência deve responder à rolagem para cima e para baixo sem estados inconsistentes.
- Definir começo e fim previsíveis; não usar `end: "max"` para esta seção.
- Não forçar a rolagem para uma posição nem interceptar a roda/mouse/touch.
- Não criar espaços vazios quando o pin termina.
- Não pin em mobile por padrão.
- Não pin em `prefers-reduced-motion: reduce`.
- Evitar animar `width`, `height`, `top` e propriedades que provocam layout durante o scroll; priorizar `transform`, `clip-path` e opacidade em poucos elementos.
- Reservar `will-change` apenas aos elementos que realmente serão animados e removê-lo quando adequado.

### Implementação recomendada

- GSAP + ScrollTrigger.
- Em React, preferir `useGSAP` de `@gsap/react`, com `scope` por componente e limpeza automática.
- Usar `gsap.matchMedia()` para desktop, mobile e movimento reduzido.
- Utilizar `gsap.context()`/`useGSAP` para destruir timelines e ScrollTriggers ao desmontar ou recriar o componente.
- Calcular `ScrollTrigger.refresh()` depois de carregamentos ou mudanças reais de dimensão, não em todo scroll ou em loops de resize.
- Evitar animar o mesmo `transform` simultaneamente em CSS, GSAP e outro componente.

## 4.4 Portfólio híbrido

### Camada 1 — obras em destaque

- Apresentação editorial assimétrica.
- Uma obra principal de escala grande, acompanhada por uma ou duas obras menores, conforme a qualidade e quantidade de fotografias reais.
- Alternar proporções e posições de imagem para criar ritmo, sem desalinhar o grid.
- Cada obra apresenta somente dados confirmados.
- Imagem deve conduzir o olhar; título e metadados não podem competir com ela.

### Camada 2 — arquivo navegável

- Área para explorar o conjunto de projetos/realizações existentes.
- Filtros apenas para categorias comprovadas pelos dados atuais.
- Filtros acessíveis por teclado, com estado ativo perceptível e atualização real do conteúdo.
- Se houver poucos itens, não inventar categorias para preencher a interface.
- Transições entre filtros rápidas e discretas; não atrasar a navegação.
- Não repetir cartões idênticos: variar o tratamento editorial mantendo consistência.

### Detalhe de projeto

Se o site atual já possuir páginas, modais ou links por obra, preservar. Se não possuir, avaliar um detalhe expansível ou rota de projeto somente quando houver conteúdo suficiente. Não criar páginas vazias ou textos inventados.

## 4.5 Áreas de atuação

- Apresentar serviços/áreas reais com uma composição editorial distinta da galeria de obras.
- Evitar cartões com ícones genéricos.
- Preferir títulos claros, pequenos textos objetivos e relações visuais com fotografias, desenhos ou detalhes de materiais que já existam.
- Usar diagramas somente se explicarem um processo real.
- Preservar a nomenclatura comercial oficial.

## 4.6 Manifesto e história

- Seção tipográfica de ritmo mais lento.
- Texto real da empresa, sem inventar uma história institucional.
- Uma frase ou trecho pode ter escala ampliada, mas o texto completo deve continuar legível.
- Fotografia documental complementar, se houver.
- Pode utilizar uma composição em duas colunas ou uma imagem que interrompe o fluxo editorial; não repetir o layout do portfólio.

## 4.7 Acervo imobiliário

- Tratar acervo como catálogo funcional, distinto de obras já realizadas.
- Preservar filtros, dados e links existentes.
- Exibir apenas informações verificadas: título, localização, categoria, preço, disponibilidade, área e detalhes somente quando presentes nos dados atuais.
- Não inventar status como “disponível”, valores ou metragem.
- Estados vazios e filtros devem ser claros.
- Se não houver acervo real no projeto, não criar imóveis fictícios: manter a seção somente com o conteúdo institucional válido ou sinalizar a ausência.

## 4.8 Contato e encerramento

- Encerramento visual forte, com fundo Basalto ou Papel mineral conforme o ritmo da página.
- Chamada para contato clara e objetiva.
- WhatsApp, telefone, e-mail, Instagram e demais dados devem ser extraídos do projeto e testados.
- Links externos devem abrir corretamente; links para WhatsApp devem respeitar o formato de URL já utilizado ou validado.
- Formulários existentes devem continuar funcionais; não exibir formulário sem backend/serviço conectado.
- Footer com dados verdadeiros, links essenciais, direitos e navegação complementar.

---

# 5. Sistema de movimento e interação

## 5.1 Princípios de motion design

- Movimento com propósito narrativo: revelar, conectar, orientar ou confirmar uma ação.
- Uma animação dominante por vez.
- Ritmo cinematográfico sem lentidão artificial.
- Preferir movimentos de poucos pixels/percentuais, máscaras e mudanças de enquadramento a grandes deslocamentos.
- Evitar `ease: bounce`, elasticidade exagerada, rotação gratuita, zoom infinito, glitch e blur excessivo.
- Não animar todos os elementos de uma seção ao mesmo tempo.
- Interações importantes precisam funcionar sem hover, inclusive em touch.

## 5.2 Motion map

| Área | Interação | Intensidade |
|---|---|---|
| Hero | Revelação de marca, mensagem, CTAs e assinatura gráfica | Alta, curta |
| Corte Arquitetônico | Máscara, reestruturação de título e linha terracota sincronizadas ao scroll | Alta, apenas uma sequência principal |
| Obras em destaque | Mudança de enquadramento discreta e entrada editorial pontual | Média |
| Arquivo de projetos | Filtros e transições de estado rápidas | Baixa |
| Áreas de atuação | Pequenos deslocamentos/realces quando entram na leitura | Baixa a média |
| Manifesto | Revelação tipográfica ou de imagem em um único gesto | Média |
| Acervo | Hover/focus funcional, sem animação de catálogo lenta | Baixa |
| Contato | Hover de CTA e feedback claro | Baixa |
| Navbar | Alteração de superfície e estado ativo | Baixa |

## 5.3 Microinterações

### Botões e links
- Feedback de hover/focus com alteração de fundo, linha, seta ou pequeno deslocamento.
- Transição aproximada de 180–300 ms.
- Não reduzir contraste durante hover.
- Não depender de cursor personalizado.

### Imagens de projeto
- Zoom máximo discreto, por exemplo `scale(1.02–1.035)`, sempre dentro de uma moldura estável.
- A informação do projeto deve continuar acessível sem hover.
- Não aplicar zoom em toda imagem por padrão: selecionar os casos onde ele reforça a experiência.

### Filtros
- Estado ativo visual e semântico.
- Alteração sem pular o scroll para o topo.
- Respeitar foco e navegação por teclado.

### Cursor
- Manter cursor nativo.
- Usar `cursor: pointer` somente onde há interação real.
- Não criar trailing cursor, círculo que segue mouse ou cursor que substitui o indicador de foco.

## 5.4 Reduced motion

Com `prefers-reduced-motion: reduce`:

- Não executar a timeline de entrada cinematográfica; exibir o conteúdo em seu estado final.
- Desativar pin e scrub do Corte Arquitetônico.
- Preservar a sequência sem movimento, como composição estática.
- Remover parallax e movimentos não essenciais.
- Manter transições funcionais discretas apenas quando não causarem desconforto.
- Não deixar elementos invisíveis aguardando uma animação.

---

# 6. Arquitetura técnica

## 6.1 Stack recomendada

### Frontend

- **React + TypeScript** para componentes, dados tipados e manutenção.
- **Toolchain padrão do Google AI Studio Build** sempre que possível. Não substituir a configuração da plataforma sem motivo concreto.
- **Vite** somente se o scaffold/projeto atual realmente utilizar Vite ou se a migração exigir e a plataforma suportar claramente.
- **CSS modular + CSS variables** para uma direção visual precisa. Não misturar Tailwind, CSS global e overrides sem uma arquitetura definida.
- HTML semântico e componentes React reutilizáveis.

### Animação

- `gsap`
- `@gsap/react`
- `ScrollTrigger`

### Outros

- `lucide-react` apenas para ícones funcionais necessários. Preferir ícones específicos e discretos; não preencher a interface com ícones decorativos.
- Fontes locais otimizadas, se apropriado.
- Playwright para testes E2E se o ambiente permitir instalação/execução confiável.
- Lighthouse ou PageSpeed Insights para auditoria de performance.

### O que não adicionar por padrão

- Next.js, Astro ou outro framework sem necessidade demonstrada.
- Lenis ou outra biblioteca de smooth scrolling. Manter rolagem nativa; reconsiderar somente se houver ganho claro e teste de acessibilidade.
- Framer Motion junto de GSAP para as mesmas interações.
- Three.js/WebGL para efeitos que possam ser feitos com CSS/GSAP.
- Firebase, banco, autenticação, API ou backend novo para um site institucional que não precise deles.
- Dependências de ícones, sliders ou carrosséis se CSS/HTML atenderem.

## 6.2 Integração com Google AI Studio Build

O AI Studio Build oferece frontend web com React como padrão, runtime Node.js e uso de pacotes npm. Portanto:

- Trabalhar com o scaffold e os comandos de execução que já existem no workspace.
- Pedir ao agente para adicionar pacotes npm em vez de recriar manualmente o ambiente.
- Não assumir que o projeto usa Vite até inspecionar os arquivos de configuração.
- Não ativar Firebase, secrets ou APIs sem necessidade e aprovação.
- Confirmar como a aplicação é exportada, sincronizada ou publicada antes de introduzir configurações de build específicas.

## 6.3 Organização de arquivos sugerida

Adaptar à estrutura real do scaffold; não forçar esta árvore se a plataforma já tiver organização própria.

```text
src/
  app/
    App.tsx
    main.tsx
  components/
    layout/
      Header/
      Footer/
    sections/
      Hero/
      ArchitecturalCut/
      FeaturedProjects/
      AreasOfActivity/
      Manifesto/
      PropertyArchive/
      Contact/
    ui/
      Button/
      SectionHeading/
      ProjectCard/
      FilterBar/
  data/
    projects.ts
    areas.ts
    properties.ts
    company.ts
    contact.ts
  hooks/
    useReducedMotion.ts
  styles/
    tokens.css
    global.css
    typography.css
  assets/
    images/
public/
```

Uma seção deve ser componente independente quando tiver layout, estado ou animação próprios. Evitar dividir componentes em excesso apenas por estética de arquitetura de código.

## 6.4 Regras React + GSAP

- Preferir `useGSAP()` de `@gsap/react` dentro de componentes animados.
- Usar `scope`/refs para limitar seletores ao componente.
- Registrar plugins uma única vez em módulo apropriado.
- Destruir/reverter animações e ScrollTriggers ao desmontar ou recriar o componente.
- Usar `gsap.matchMedia()` para breakpoints e reduced motion.
- Não manipular o DOM por fora do React sem justificativa; GSAP pode manipular propriedades visuais dentro do ciclo de vida gerenciado.
- Não criar ScrollTriggers duplicados em rerenders.
- Evitar `useEffect` com dependências incorretas para criar timelines.
- Não usar `setState` a cada frame de scroll; manter a animação no GSAP.
- Separar os elementos de entrada do hero dos elementos controlados pelo scroll para evitar disputa de `transform` e `opacity`.

## 6.5 Estratégia de imagens

- Manter os originais.
- Gerar derivados WebP/AVIF quando a pipeline permitir, sem apagar os arquivos de origem.
- Definir `width` e `height` ou `aspect-ratio` para evitar CLS.
- Hero: carregamento prioritário, `fetchpriority="high"` quando apropriado e sem lazy-load da imagem principal.
- Imagens abaixo da primeira viewport: `loading="lazy"` e `decoding="async"`.
- Usar `srcset`/`sizes` para servir dimensões adequadas.
- Ajustar `object-position` por breakpoint.
- Evitar imagens de 5000 px sendo entregues em cards de 400 px.
- Não comprimir de modo a destruir detalhes arquitetônicos.

---

# 7. Responsividade

## 7.1 Breakpoints de teste

| Classe | Viewport de referência | Decisão |
|---|---:|---|
| Desktop amplo | 1440 px | Composição cinematográfica completa |
| Notebook | 1280 px | Ajustar proporções sem perder a narrativa |
| Tablet | 768 px | Layout reestruturado e movimento reduzido |
| Mobile | 375 px | Composição própria, leitura e navegação prioritárias |
| Mobile estreito | 320–360 px | Sem overflow horizontal ou texto cortado |

Os breakpoints finais devem responder ao conteúdo, não apenas a dispositivos específicos.

## 7.2 Hero mobile

- Manter a imagem real e a presença do nome.
- Escolher crop mobile deliberadamente, preservando a parte arquitetônica importante.
- Reorganizar título e CTAs verticalmente se necessário.
- Evitar título atrás da barra de navegação do sistema.
- Não reduzir o texto até ficar ilegível para manter uma composição desktop.

## 7.3 Transição mobile

A experiência mobile é uma adaptação do conceito, não uma redução matemática da sequência desktop:

- Desativar pin longo.
- Não usar scrub com duração excessiva.
- Permitir que a fotografia revele a próxima seção por uma máscara curta ou transição CSS simples, ou manter composição estática.
- Preservar a rolagem nativa e o gesto de toque.
- Não depender de hover.
- Desligar efeitos complexos em dispositivos com pouca capacidade ou viewport pequeno, quando necessário.

## 7.4 Testes obrigatórios

- 1440 × 900 (desktop).
- 1280 × 800 (notebook).
- 768 × 1024 (tablet).
- 390 × 844 e 375 × 812 (mobile).
- 320 px de largura (stress test).

---

# 8. Acessibilidade, SEO e performance

## 8.1 Acessibilidade

- Alvo de conformidade: WCAG 2.2 AA na medida aplicável ao site.
- Contraste mínimo de 4.5:1 para texto normal e 3:1 para texto grande e componentes gráficos relevantes.
- Navegação completa por teclado.
- `:focus-visible` claro e não removido.
- Link de salto para conteúdo principal.
- Menus com estados ARIA e comportamento de teclado.
- Botões com nome acessível e propósito claro.
- `alt` descritivo para imagens informativas; `alt=""` para imagens puramente decorativas.
- Estados de filtro e seleção expostos semanticamente.
- Nenhuma informação comunicada apenas por cor, hover ou animação.
- Respeitar `prefers-reduced-motion`.
- Evitar foco encoberto por header fixo ou overlays.

## 8.2 SEO

- Um `h1` principal com a marca ou o posicionamento institucional coerente.
- Hierarquia semântica de headings, sem saltos arbitrários.
- Título e meta description reais, sem claims não verificados.
- Open Graph com imagem oficial da empresa/obra autorizada.
- URLs e âncoras estáveis.
- `alt` para imagens.
- Dados estruturados somente quando houver informações verdadeiras e elegíveis (Organization/LocalBusiness, se aplicável e confirmado).
- Não inventar endereço, telefone, horário ou rede social.

## 8.3 Performance

Metas de referência para Core Web Vitals, avaliadas em condições representativas:

- LCP ≤ 2,5 s.
- INP ≤ 200 ms.
- CLS ≤ 0,1.

Prioridades:

- A imagem do hero deve ser cuidadosamente otimizada, sem comprometer a qualidade.
- Evitar scripts e fontes bloqueantes.
- Carregar animações sem atrasar conteúdo essencial.
- Usar `transform` e `opacity` preferencialmente em animações; avaliar custo de `clip-path` em dispositivos reais.
- Não aplicar blur pesado ou grandes sombras animadas.
- Não manter loops de animação quando o visitante não está vendo a seção.
- Reduzir bundle e dependências não utilizadas.
- Testar em rede e dispositivo de capacidade intermediária, não apenas no computador do desenvolvedor.

---

# 9. Skills e agentes — protocolo obrigatório de trabalho

A lista abaixo foi informada pelo usuário como disponível no ambiente anterior. O agente deve confirmar a disponibilidade no Google AI Studio antes de alegar que utilizou qualquer item. Se a skill não estiver carregada, localizar sua instrução/documentação ou declarar que não foi possível acessá-la. Não simular uso.

## 9.1 Skills de design e frontend

- `design-taste-frontend`: direção visual, composição, hierarquia, acabamento e prevenção de interfaces genéricas.
- `modern-web-guidance`: arquitetura frontend, HTML semântico, CSS moderno, responsividade e compatibilidade.
- `gsap-motion-creative`: coreografia e implementação das animações GSAP/ScrollTrigger.
- `web-quality-audit`: revisão visual, UX, consistência e responsividade.

## 9.2 Skills de engenharia e qualidade

- `systematic-debugging`: identificar causas antes de alterar código.
- `verification-before-completion`: validar cada resultado antes de declarar concluído.
- `ponytail-git-workflow`: manter fluxo seguro de Git, se disponível.
- `using-git-worktrees`: isolar trabalho paralelo, se o ambiente oferecer suporte.

## 9.3 Skills de planejamento e revisão

- `using-superpowers`
- `brainstorming`
- `dispatching-parallel-agents`
- `subagent-driven-development`
- `requesting-code-review`
- `receiving-code-review`
- `executing-plans`
- `writing-plans`

Não prolongar planejamento já aprovado. `brainstorming` serve para resolver ambiguidades reais; não deve reabrir decisões bloqueadas neste documento.

## 9.4 Agentes

- **`research` — somente leitura:** inventariar imagens, identificar conteúdo, verificar estrutura técnica, mapear funcionalidades e referências. Não editar arquivos.
- **`self` — revisão independente:** avaliar o resultado visual e técnico, encontrar inconsistências e regressões. Não alterar os mesmos arquivos simultaneamente ao agente principal.
- **`image-generator` — recursos gráficos originais:** somente para elementos gráficos abstratos ou assets de apoio autorizados. Nunca gerar fotografias de obras reais, logotipos oficiais ou imagens que se passem por empreendimentos existentes.

## 9.5 Política de paralelismo

- Delegar inventário visual e auditoria de conteúdo ao `research`.
- Delegar revisão final ao `self` após a implementação principal.
- Não permitir dois agentes editarem o mesmo arquivo simultaneamente.
- O agente principal mantém responsabilidade pela integração, testes e decisão final.
- Se os agentes não estiverem realmente disponíveis, o agente principal realiza as tarefas sequencialmente e informa a limitação.

---

# 10. Processo de implementação

## Fase 0 — Auditoria e preservação

1. Confirmar que o workspace contém o projeto certo.
2. Executar `git status`, examinar diffs e arquivos não rastreados, quando Git estiver disponível.
3. Inventariar estrutura, dependências, rotas, dados, interações, contatos e recursos.
4. Localizar as instruções reais das skills disponíveis.
5. Registrar funcionalidades existentes e riscos de migração.
6. Não limpar ou substituir arquivos sem entender sua função.

## Fase 1 — Inventário visual e conteúdo

1. Listar todas as fotografias e logos.
2. Inspecionar visualmente as opções de hero.
3. Verificar resolução, proporção, crop, peso e qualidade.
4. Mapear cada projeto, serviço, imóvel, informação institucional e contato.
5. Identificar dados duplicados, inconsistentes ou ausentes.
6. Montar uma matriz de conteúdo com fonte do dado e seção de destino.

## Fase 2 — Fundação técnica

1. Confirmar a stack existente no AI Studio.
2. Definir arquitetura React + TypeScript de acordo com o scaffold.
3. Instalar somente dependências justificadas.
4. Criar tokens e estilos globais.
5. Implementar estrutura semântica e conteúdo sem animações complexas.
6. Validar build e navegação básica.

## Fase 3 — Composição visual

1. Header.
2. Hero e fotografia definitiva.
3. Corte Arquitetônico estático, com estrutura pronta para animação.
4. Portfólio híbrido.
5. Áreas de atuação.
6. Manifesto/história.
7. Acervo.
8. Contato/footer.

Aprovar a hierarquia visual e os crops antes de polir animações.

## Fase 4 — Motion design

1. Entrada do hero.
2. Corte Arquitetônico desktop.
3. Adaptação mobile.
4. Microinterações.
5. `prefers-reduced-motion` e fallback.
6. Verificar limpeza de timelines e ScrollTriggers.

## Fase 5 — Testes e auditoria

1. Build/typecheck/lint conforme scripts existentes.
2. Navegação e links.
3. Filtros e formulários existentes.
4. Testes em desktop, tablet e mobile.
5. Rolagem para baixo e para cima repetidamente.
6. Falha de GSAP/JavaScript.
7. Reduced motion.
8. Console e network.
9. Capturas reais da aplicação nos estados principais.
10. Revisão independente pelo agente `self`.

## Fase 6 — Entrega

- Resumo dos arquivos alterados.
- Decisões de migração e dependências instaladas.
- Lista de funcionalidades preservadas.
- Testes executados, com resultado real.
- Capturas reais e viewport de cada uma.
- Limitações e pendências de conteúdo.
- Comandos para executar e publicar.

---

# 11. Critérios de aceite — Definition of Done

## Design

- [ ] Identidade ATLAS LITORÂNEO é reconhecível mesmo sem animação.
- [ ] Hero utiliza fotografia real de qualidade adequada.
- [ ] Nome ARMINDO RAMALHO é protagonista e nunca desaparece.
- [ ] Navbar é legível, equilibrada e funcional.
- [ ] Cada seção tem composição própria, sem repetição de template.
- [ ] Portfólio diferencia obras realizadas de imóveis do acervo.
- [ ] Terracota é usado como assinatura pontual.

## Movimento

- [ ] Entrada do hero tem ordem, duração e ritmo coerentes.
- [ ] CORTE ARQUITETÔNICO conecta hero e primeira obra.
- [ ] A transição responde ao scroll para cima e para baixo.
- [ ] Não existe scroll hijacking ou pin prolongado.
- [ ] Mobile não utiliza fixação longa.
- [ ] Reduced motion apresenta conteúdo completo sem movimento obrigatório.
- [ ] Falhas de JavaScript/GSAP não escondem conteúdo.

## Engenharia

- [ ] Build de produção executa sem erros.
- [ ] TypeScript não apresenta erros relevantes.
- [ ] Não existem ScrollTriggers duplicados ou vazamentos de animação.
- [ ] Links, filtros, contatos e funcionalidades existentes foram testados.
- [ ] Não foram criados dados ou imagens fictícios.
- [ ] Layout não apresenta overflow horizontal nos viewports de teste.
- [ ] Imagens possuem dimensões/reservas de espaço e carregamento apropriado.

## Evidências

- [ ] Screenshot desktop do hero.
- [ ] Screenshot desktop durante o Corte Arquitetônico.
- [ ] Screenshot desktop após a transição.
- [ ] Screenshot mobile do hero.
- [ ] Screenshot mobile das seções principais.
- [ ] Resultado de teste de reduced motion.
- [ ] Console/network verificados.

**Uma caixa não pode ser marcada como concluída sem execução ou evidência verificável.**

---

# 12. Referências para benchmark — não copiar

As referências abaixo servem para estudar decisões de navegação, organização de acervo, estrutura editorial e clareza institucional. Não são modelos para replicar visualmente.

1. **BIG — https://big.dk/**  
   Estudar a presença da linguagem da marca, organização de projetos e profundidade das páginas de projeto. Adaptar a clareza do arquivo, não reproduzir o grid ou a identidade.

2. **Snøhetta — https://www.snohetta.com/**  
   Estudar a organização de projetos, pessoas, processo e publicações. Observar como o conteúdo pode manter a instituição viva além de uma vitrine estática.

3. **MVRDV — https://www.mvrdv.com/**  
   Estudar agrupamento dos projetos por temas e tipologias, além da clareza de acesso a conteúdos institucionais.

### Perguntas para a análise de referência

- Como o projeto é identificado em poucos segundos?
- Como os usuários chegam às obras sem atravessar uma narrativa longa?
- Como o site separa trabalhos, serviços, notícias e conteúdo institucional?
- Como o design mantém impacto sem esconder navegação?
- Como a fotografia é tratada em desktop e mobile?
- Quais padrões funcionam por mérito de UX e quais são apenas tendências visuais?

A identidade final do Armindo Ramalho deve nascer de seu próprio acervo, contexto e conteúdo.

---

# 13. Regras finais inegociáveis

1. Não reiniciar ou substituir o projeto sem necessidade demonstrada.
2. Não destruir funcionalidades existentes durante a migração.
3. Não inventar fatos, obras, fotografias, imóveis, depoimentos, números ou credenciais.
4. Não declarar teste aprovado sem executá-lo.
5. Não esconder conteúdo para criar uma animação.
6. Não comprometer usabilidade para produzir espetáculo visual.
7. Não usar as skills ou agentes como palavras decorativas: confirmar e aplicar instruções reais.
8. Não entregar apenas planejamento: executar a implementação, testar e corrigir.
9. Se faltar uma fotografia ou informação essencial, preservar o espaço de conteúdo e registrar a pendência; não fabricar substituto.
10. A versão definitiva deve parecer um site próprio da Armindo Ramalho Empreendimentos, não um template de arquitetura adaptado.

---

# 14. Fontes técnicas e referências consultadas

Documentação oficial para o agente confirmar detalhes de integração e compatibilidade durante a implementação:

- Google AI Studio — Build mode: https://ai.google.dev/gemini-api/docs/aistudio-build-mode
- Google AI Studio — desenvolvimento full-stack e runtime Node.js: https://ai.google.dev/gemini-api/docs/aistudio-fullstack
- Vite — guia oficial: https://vite.dev/guide/
- GSAP — ScrollTrigger: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- GSAP — `gsap.matchMedia()`: https://www.gsap.com/docs/v3/GSAP/gsap.matchMedia%28%29/
- GSAP — `@gsap/react`: https://github.com/greensock/react
- Google Search Central — Core Web Vitals: https://developers.google.com/search/docs/appearance/core-web-vitals
- W3C — WCAG 2.2: https://www.w3.org/WAI/standards-guidelines/wcag/

Referência de pesquisa para análise de websites de arquitetura e organização de conteúdo:

- Waida Studio — Architecture website design: https://waidastudio.com/learn/architecture-website-design
- BIG: https://big.dk/
- Snøhetta: https://www.snohetta.com/
- MVRDV: https://www.mvrdv.com/

As referências servem como material de estudo, não como aprovação de reprodução de componentes, linguagem visual ou conteúdo.
