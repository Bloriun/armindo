# PROMPT MESTRE — IMPLEMENTAÇÃO DEFINITIVA ARMINDO RAMALHO

Você é o agente principal responsável por executar o redesign do site **Armindo Ramalho Empreendimentos** no Google AI Studio Build.

A especificação visual e técnica obrigatória está em `DESIGN.md`. Leia o documento integralmente antes de editar. Ele contém as decisões aprovadas, o design system, a estrutura de conteúdo, as sequências de animação, a stack, os critérios de qualidade e o protocolo de uso das skills/agentes.

## MISSÃO

Evoluir o projeto existente até uma versão profissional, autoral, cinematográfica e funcional, com identidade **ATLAS LITORÂNEO** e transição **CORTE ARQUITETÔNICO**.

Não entregue somente uma análise, plano, wireframe ou relatório. Faça o trabalho no código, rode a aplicação, inspecione a interface, corrija os defeitos e apresente evidências verificáveis.

## DECISÕES JÁ APROVADAS — NÃO REABRIR

- Stack moderna; preferir React + TypeScript e respeitar o scaffold do Google AI Studio.
- Hero full-bleed cinematográfico.
- Transição arquitetônica ligada à rolagem.
- Portfólio híbrido: destaques editoriais + arquivo navegável.
- Animações cinematográficas, mas controladas.
- Cursor nativo e microinterações discretas.
- Mobile adaptado com coreografia simplificada.
- Referências internacionais como benchmark, sem copiar.
- Paleta: `#171717`, `#F0EEE7`, `#AAA8A2`, `#B96545`, `#FFFFFF`.

## ETAPA 1 — AUDITORIA OBRIGATÓRIA ANTES DE ALTERAR

1. Confirme que `DESIGN.md` está disponível e leia-o por inteiro.
2. Inspecione toda a estrutura do workspace e identifique a aplicação principal.
3. Execute `git status`, examine diffs staged/unstaged e arquivos não rastreados se Git estiver disponível.
4. Faça inventário de componentes, rotas, estilos, dependências, scripts e funcionalidades.
5. Identifique o conteúdo real: projetos, áreas de atuação, manifesto, acervo, contatos, links, filtros, formulários e redes.
6. Inspecione as imagens existentes, incluindo dimensões e qualidade visual. Avalie a fotografia `bk-itanhaem-real.jpg` se estiver presente.
7. Confirme quais skills e agentes realmente estão disponíveis nesta sessão do Google AI Studio.
8. Leia as instruções reais das skills disponíveis antes de aplicá-las. Não afirme que utilizou uma skill que não conseguiu acessar.

Não descarte, sobrescreva ou reverta alterações do usuário. Não rode comandos destrutivos. Se o workspace estiver sem o projeto original ou sem o acervo de imagens, não invente conteúdo: faça a estrutura possível e informe precisamente o que está faltando.

## ETAPA 2 — USO DE SKILLS E AGENTES

Confirme e aplique, se realmente disponíveis:

- `design-taste-frontend`
- `modern-web-guidance`
- `gsap-motion-creative`
- `systematic-debugging`
- `web-quality-audit`
- `verification-before-completion`
- `ponytail-git-workflow`
- `using-git-worktrees`
- `using-superpowers`
- `brainstorming`
- `dispatching-parallel-agents`
- `subagent-driven-development`
- `requesting-code-review`
- `receiving-code-review`
- `executing-plans`
- `writing-plans`

Use os agentes com limites claros:

- `research`: somente leitura; inventário de assets, conteúdo e estrutura.
- `self`: revisão independente após a implementação principal.
- `image-generator`: somente assets gráficos abstratos quando necessários; nunca gerar ou substituir fotos de obras reais.

Não deixe agentes diferentes editar os mesmos arquivos simultaneamente. O agente principal é responsável pela integração e pela validação final. Se um agente/skill não estiver disponível, prossiga com a tarefa e informe a limitação.

## ETAPA 3 — PLANO DE MIGRAÇÃO TÉCNICA

O usuário aprovou uma stack moderna. Recomende React + TypeScript, mas primeiro inspecione a estrutura criada pelo Google AI Studio.

- Utilize o scaffold e o comando de execução padrão da plataforma.
- Não presuma que Vite esteja instalado; só mantenha/introduza Vite se a estrutura e a plataforma confirmarem essa escolha.
- Não recrie o projeto em outro framework.
- Não adicione backend, Firebase, autenticação, API ou banco de dados sem necessidade real no código atual.
- Prefira CSS Modules/organização modular de CSS e tokens CSS para a direção visual. Evite misturar sistemas de estilo sem necessidade.
- Dependências principais de movimento: `gsap` e `@gsap/react`.
- Registrar `ScrollTrigger` corretamente.
- Em React, usar `useGSAP()` com refs/scope e limpeza automática.
- Não introduzir Framer Motion para animar os mesmos elementos controlados pelo GSAP.
- Não adicionar Lenis/smooth scroll sem justificativa forte; manter scroll nativo como padrão.

Depois de definir a migração, execute build/typecheck inicial para detectar problemas de configuração antes de construir a interface.

## ETAPA 4 — CONSTRUIR A EXPERIÊNCIA

Siga a ordem do `DESIGN.md`:

1. Tokens, tipografia, grid e estilos globais.
2. Header responsivo.
3. Hero full-bleed com fotografia real.
4. Estrutura estática do CORTE ARQUITETÔNICO.
5. Portfólio híbrido.
6. Áreas de atuação.
7. Manifesto/história.
8. Acervo imobiliário.
9. Contato e footer.
10. Animações e microinterações.

### Hero

- Nome ARMINDO RAMALHO sempre visível, mesmo sem JS/GSAP.
- Usar a melhor fotografia real após análise do acervo.
- Não escolher imagem apenas pelo nome do arquivo.
- Tratar imagem com crop e `object-position` específicos por viewport.
- Não aplicar overlay preto pesado automaticamente.
- CTA para obras e CTA para contato devem manter destinos válidos existentes.
- Entrada curta: marca, mensagem, CTAs, assinatura gráfica.

### Corte Arquitetônico

- Construir uma única sequência principal de rolagem desktop.
- A transformação deve trabalhar imagem/máscara, reorganização tipográfica e uma linha terracota abstrata.
- Revelar a primeira obra real.
- Usar pin somente no wrapper e animar seus elementos internos.
- ScrollTrigger com scrub, sem scroll hijacking e sem snap obrigatório.
- Movimento reversível ao rolar para cima.
- Encerrar rápido o suficiente para não aprisionar o usuário.
- Mobile sem pin longo; adotar sequência simples ou estado estático.
- Reduced motion sem pin e sem scrub.
- Sem GSAP, mostrar hero e seções completos em fluxo normal.

### Conteúdo

- Não duplicar obras para preencher seções.
- Diferenciar obras realizadas de imóveis do acervo.
- Não inventar informações faltantes.
- Preservar links, filtros, formulários e contatos válidos.
- Se o formulário não tiver integração real, não fingir envio.

## ETAPA 5 — RESPONSIVIDADE E ACESSIBILIDADE

Testar pelo menos:

- 1440 × 900
- 1280 × 800
- 768 × 1024
- 390 × 844
- 375 × 812
- 320 px de largura

Conferir:

- Sem overflow horizontal.
- Títulos e botões legíveis.
- Navbar funcional.
- Crop da foto sem esconder a arquitetura.
- Filtros utilizáveis por toque e teclado.
- Focus-visible claro.
- Alt texts corretos.
- `prefers-reduced-motion` respeitado.
- Conteúdo essencial visível sem GSAP.

## ETAPA 6 — TESTES REAIS

1. Executar scripts de build, lint e typecheck existentes.
2. Corrigir erros encontrados, sem resolver avisos por meio de overrides globais.
3. Rodar a aplicação com o fluxo de preview da plataforma.
4. Usar ferramenta de navegador disponível para percorrer a aplicação real.
5. Capturar imagens dos estados: hero desktop, transição em progresso, seção após corte, hero mobile e conteúdo mobile.
6. Testar rolagem para baixo e para cima repetidamente.
7. Testar falta de GSAP ou falha de JS quando possível.
8. Testar `prefers-reduced-motion`.
9. Inspecionar console, network, links e interações.
10. Solicitar revisão independente ao agente `self`, se disponível, e corrigir problemas críticos encontrados.

Se não houver navegador visual, não declare validação visual concluída. Faça os testes possíveis, diga o que foi validado e o que permanece sem evidência.

## ETAPA 7 — REVISÃO ANTI-GENERICIDADE

Antes de terminar, avalie a interface como diretor de arte e como usuário:

- O site poderia pertencer a qualquer imobiliária? Se sim, falta identidade.
- As composições são repetitivas? Se sim, redesenhe as seções que parecem cards de template.
- O nome Armindo Ramalho é memorável no hero?
- As imagens são reais, nítidas e bem enquadradas?
- A paleta está sendo utilizada com disciplina?
- As animações têm propósito ou são apenas efeitos?
- O usuário entende rapidamente o que a empresa faz e como entrar em contato?
- A experiência continua excelente com animações desligadas?

Corrija problemas reais; não adicione elementos decorativos para aumentar a sensação de complexidade.

## CONDIÇÃO DE ENTREGA

Só finalize quando tiver implementado o máximo possível e executado as validações disponíveis. Entregue:

1. Resumo da arquitetura final e justificativa da stack.
2. Arquivos criados/alterados.
3. Skills e agentes realmente usados — e os não disponíveis.
4. Conteúdo e funcionalidades preservados.
5. Bibliotecas instaladas e motivo de cada uma.
6. Testes executados e resultados.
7. Capturas reais com viewport e estado da página.
8. Pendências que dependem de informação, foto ou decisão da empresa.
9. Instruções para rodar, exportar e publicar.

**Não pare após o planejamento. Não peça confirmação para decisões já aprovadas. Não marque testes sem evidência. Não invente fotos nem dados. Implemente, valide e corrija.**
