# Redesign Armindo Ramalho Empreendimentos — Atlas Litorâneo & Corte Arquitetônico
## Versão Definitiva do Plano de Implementação Técnica e Direção de Arte

> [!IMPORTANT]
> **Síntese de Ajustes Finais Incorporados:**
> - **Integridade Absoluta das Informações**: Exclusão de qualquer dado fictício, metragem inventada ou garantia não verificada. Apenas dados presentes no material original da empresa são mantidos.
> - **Honestidade de Fallback Técnico**: Em uma aplicação React SPA, o JavaScript é necessário para a renderização da interface; no entanto, **nenhum conteúdo dependerá do GSAP ou ScrollTrigger para estar visível**. Caso o GSAP não carregue, falhe ou o usuário utilize `prefers-reduced-motion: reduce`, todo o layout, textos e fotografias são apresentados no fluxo natural estático.
> - **Continuidade Narrativa sem Duplicações**: O Corte Arquitetônico é a transição fluida que culmina no *Master Project (Burger King Peruíbe)* da seção Curadoria, sem duplicar a obra de forma repetitiva no acervo posterior.
> - **Eliminação Ativa de Enfeites**: Remoção de coordenadas fictícias, percentuais vazios de auditoria e elementos decorativos que serviam apenas para preencher espaço.
> - **Acessibilidade e Retorno de Foco**: Foco gerenciado no modal de ficha técnica, com fechamento via `Escape` e retorno obrigatório do foco ao elemento disparador (`triggerRef`).

---

## 1. Planejamento Técnico e Arquitetura de Software

### 1.1 Stack e Desempenho Real no Ambiente
- **React 18 + TypeScript no Vite**:
  - Aplicação modular baseada em componentes com tipagem estrita de dados (`ProjectItem`, `PillarItem`).
  - Renderização no cliente (SPA) rápida e direta, dev server em porta 3000 conforme padrão da plataforma.
- **Tailwind CSS v4 com Tokens Nativos**:
  - Tokens em `:root`: Basalto (`#171717`), Papel Mineral (`#F0EEE7`), Concreto (`#AAA8A2`), Óxido Terracota (`#B96545`), Branco (`#FFFFFF`).
  - Sem classes ou utilitários caóticos: sistema baseado em escala matemática de espaçamentos (múltiplos de 4px e 8px) e tipografia fluida via `clamp()`.
- **GSAP 3 + ScrollTrigger com `@gsap/react`**:
  - Utilizado pontualmente para orquestrar a transição do Corte Arquitetônico.
  - Priorização de transformações de hardware (`transform: translate3d/scale`) e uso medido de máscaras para garantir 60fps estáveis sem causar *layout thrashing*.
  - Limpeza estrita via `useGSAP` com `scope` local para evitar vazamentos de memória ou listeners órfãos.

### 1.2 Honestidade Técnica de Fallback e Resiliência
- **O que funciona com JavaScript ativo**: Toda a reatividade de filtros de catálogo, abertura de modais com foco gerenciado e a transição dinâmica via GSAP.
- **O que funciona se o GSAP for desativado ou falhar**:
  - A página inteira mantém sua hierarquia visual íntegra.
  - Nenhum elemento possui `opacity: 0` ou `clip-path` rígido no CSS estático.
  - O Corte Arquitetônico resolve-se como uma transição estática harmoniosa entre o Hero e a Curadoria, no fluxo natural do documento.
- **`prefers-reduced-motion: reduce`**:
  - O ScrollTrigger e os tweens de interpolação são completamente desligados via `gsap.matchMedia()`.
  - O conteúdo é exibido imediatamente em sua posição final, respeitando as preferências de conforto e acessibilidade do usuário.

### 1.3 Preservação Fiel do Material Original (Sem Conteúdo Fictício)
Apenas as informações comprovadas nos arquivos originais do projeto serão mantidas:
- **Obras e Realizações**:
  - *Burger King Itanhaém*: Obra real concluída no litoral paulista, caso de engenharia comercial e restaurante com drive-thru em plena operação ativa.
  - *Burger King Peruíbe*: Nova obra corporativa em implantação sob modelo Built-to-Suit, marcando a expansão da rede na cidade.
  - *The Best Açaí*: Ponto comercial estratégico em região nobre litorânea.
  - *Riviera de São Lourenço*: Residência de alto padrão (04 suítes, espaço gourmet, piscina integrada).
  - *Ilhas do Sul & Centro Cibratel*: Residenciais beira-mar e galerias comerciais.
- **Institucional**:
  - +25 anos de atuação na construção civil, compra, venda e locação de imóveis no litoral de São Paulo.
  - Soluções em Construção Civil/Engenharia, Venda/Aquisição Patrimonial e Locação Estratégica/Built-to-Suit.
- **Contatos**:
  - WhatsApp/Telefone: `(13) 99784-9288`.
  - E-mail: `adm@armindoramalho.com.br`.
  - Instagram: `@aramalho.empreendimentos`.

---

## 2. Direção de Arte Autoral e Auditoria Anti-AI Slop

### 2.1 Limpeza e Eliminação de Ruído Decorativo
- **Eliminado**: Coordenadas geográficas fictícias (`COORD: 24.18°S 46.79°W`), que serviam apenas como enfeite cosmético.
- **Eliminado**: Métricas vazias ou rótulos sem lastro (como "100% Auditoria" ou percentuais abstratos).
- **Eliminado**: Barras laterais coloridas (`border-l-4`), cantos `rounded-2xl` genéricos e cartões com gradientes coloridos flutuantes.
- **Eliminado**: Tags encapsuladas em pílulas plásticas coloridas. Metadados são exibidos em tipografia limpa, discreta e alinhada ao grid.
- **Eliminado**: Linhas de código ou comentários mecânicos (`// 01_CORE`).

### 2.2 Princípios de Identidade "Atlas Litorâneo"
1. **Fotografia Real como Âncora Visual**: A obra concluída de Itanhaém (`bk-itanhaem-real.jpg`) sob luz natural é o ponto de ancoragem que prova a capacidade de execução da empresa.
2. **Ritmo de Leitura Editorial**: Alternância intencional entre o Basalto Mineral (`#171717`) do Hero/Manifesto e o Papel Mineral (`#F0EEE7`) da Curadoria/Pilares, criando respiração visual e separando o institucional do catálogo.
3. **Assinatura Óxido Terracota (`#B96545`)**: Utilizada estritamente em elementos pontuais de conexão (o traço condutor do Corte Arquitetônico e o foco ativo).
4. **Tipografia Sólida e Legível**:
   - Marca e Títulos Monumentais: *Syne* e *Space Grotesk*, com proporção de prancha arquitetônica.
   - Corpo de Texto e Especificações: *Plus Jakarta Sans*, priorizando clareza em 15px–16px com line-height confortável (1.6).

---

## 3. Experiência de Navegação e Corte Arquitetônico

### 3.1 Coreografia do Corte Arquitetônico (1.1 a 1.3 Viewports)
A transição funciona como a transição entre o macro (marca/território) e o micro (obra construída):

```
Scroll 0.00          Hero full-bleed (Burger King Itanhaém + tipografia ARMINDO RAMALHO)
      │
Scroll 0.30 ──>      Moldura da foto contrai suavemente via transform/mask
      │              Tipografia da marca estabiliza-se no topo da prancha
      │
Scroll 0.70 ──>      Traço Óxido Terracota (#B96545) surge pontualmente
      │              como fio condutor de projeto
      │
Scroll 1.00 ──>      Apresentação do Master Project da Curadoria: Novo Burger King Peruíbe
      │
Scroll 1.20 ──>      Desengate suave do pin, liberando a rolagem nativa para o acervo
```

- **Reversibilidade**: O scrub sincronizado garante que a rolagem para cima reverta o estado sem pulos.
- **Mobile (< 768px)**: Desativação do pin longo; a imagem transiciona por rolagem nativa com acabamento estático harmonioso.

### 3.2 Continuidade Narrativa sem Duplicações
- **Master Project (Curadoria)**: Apresenta com exclusividade o *Novo Burger King Peruíbe* (Nova Obra Built-to-Suit), detalhando seu papel na expansão da rede no litoral sul.
- **Vitrine & Acervo Complementar**: Lista os demais projetos (*Riviera de São Lourenço*, *The Best Açaí*, *Burger King Itanhaém*, *Ilhas do Sul & Cibratel*), evitando reapresentar o Peruíbe como um card repetido.

---

## 4. Estrutura Visual Individual de Cada Seção

### 4.1 Hero Cinematográfico
- **Conceito**: Presença institucional sóbria e imediata.
- **Elementos**: Fotografia real em alta resolução de Itanhaém, selo textual limpo com ano de fundação (*EST. 1999 // 25+ ANOS*), nome monumental `ARMINDO RAMALHO`, breve síntese fiduciária e ações diretas (WhatsApp e explorar obras).

### 4.2 Corte Arquitetônico
- **Conceito**: Transição dinâmica de enquadramento ligando a abertura ao primeiro marco de projeto.
- **Elementos**: Máscara retangular suave, linha terracota de assinatura e entrada direta no Master Card.

### 4.3 Curadoria & Master Project
- **Conceito**: Destaque de engenharia corporativa de grande porte.
- **Elementos**: Card imponente de grande proporção para o *Burger King Peruíbe*, com status de implantação, especificações reais de modelo Built-to-Suit e botão de abertura da ficha técnica.

### 4.4 Manifesto & Solidez 25+
- **Conceito**: Firmeza documental e autoridade de mercado.
- **Elementos**: Fundo Basalto mineral, citação institucional de responsabilidade construtiva e três premissas verdadeiras: 25 anos de experiência, diligência jurídica total e atuação focada no litoral paulista.

### 4.5 Pilares de Atuação
- **Conceito**: Estrutura em prancha editorial contínua, sem cards soltos.
- **Elementos**: Três linhas horizontais divididas por fios finos com numeração (`01.`, `02.`, `03.`): Engenharia & Construção, Aquisição Patrimonial e Locação Estratégica/BTS.

### 4.6 Panorama Corporativo
- **Conceito**: Rigor de acabamento para marcas multinacionais.
- **Elementos**: Fachada com estrutura de vidro e concreto sob iluminação técnica (`bk-night-original.jpg`) e comprovação de cumprimento do cronograma físico-financeiro.

### 4.7 Vitrine e Acervo com Filtros
- **Conceito**: Catálogo limpo de oportunidades residenciais e comerciais.
- **Elementos**: Segmentador de categorias (*Todos*, *Corporativos*, *Residenciais*, *Locação*), contagem dinâmica em tempo real e cards objetivos com botão "Ficha Técnica" e link direto de negociação.

### 4.8 Modal de Ficha Técnica
- **Conceito**: Documento de prancha com especificações aprofundadas.
- **Elementos**: Foco bloqueado no modal, tecla `Escape` ativa, imagem em destaque, dados técnicos confirmados (sem métricas inventadas), diferenciais reais e botão para continuidade no WhatsApp com mensagem preenchida.

### 4.9 Contato e Rodapé
- **Conceito**: Canais abertos e transparentes com a diretoria.
- **Elementos**: Telefones, e-mail administrativo e Instagram oficial verificados, links de salto para as seções e copyright automático do ano vigente.

---

## 5. Acessibilidade, Interação e Qualidade

1. **Gestão de Foco no Modal**:
   - Ao abrir o modal, o foco do teclado é direcionado ao elemento inicial do diálogo.
   - A tecla `Escape` fecha o modal imediatamente.
   - Ao fechar, o foco é obrigatoriamente devolvido ao botão disparador (`triggerRef.current?.focus()`).
2. **Navegação por Teclado nos Filtros**:
   - Os seletores utilizam semântica `role="tab"` com `aria-selected` e indicação visual nítida por `:focus-visible`.
3. **Contraste WCAG 2.2 AA**:
   - Todos os textos sobre fundo basalto e papel mineral mantêm contraste mínimo de 4.5:1 (e 3:1 para títulos grandes).
4. **Desempenho**:
   - Imagens servidas com dimensões reservadas para evitar CLS (Cumulative Layout Shift $\le 0.1$).
   - Carregamento prioritário na imagem do Hero e decodificação assíncrona nas seções inferiores.

---

## 6. Protocolo de Validação Visual Pré-Conclusão

Antes de concluir a entrega:
1. Executar `compile_applet` para validação de integridade do build e TypeScript.
2. Inspecionar a página em viewports de 1440px (desktop), 768px (tablet) e 375px/320px (mobile) assegurando ausência de transbordamento horizontal.
3. Testar a rolagem contínua para baixo e para cima verificando a suavidade e reversibilidade do Corte Arquitetônico.
4. Validar o ciclo completo do modal de ficha técnica (abertura, leitura, fechamento por ESC e restauração do foco).
5. Garantir a ausência de avisos ou erros no console do navegador.
