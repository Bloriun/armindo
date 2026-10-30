/**
 * ARMINDO RAMALHO EMPREENDIMENTOS
 * Scripts de Interatividade, Acessibilidade e Comportamento Comercial
 */

document.addEventListener('DOMContentLoaded', () => {
  initYear();
  initHeaderScroll();
  initMobileMenu();
  initCatalogFilters();
});

/**
 * 1. Atualização Automática do Ano no Rodapé
 */
function initYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/**
 * 2. Comportamento do Cabeçalho na Rolagem
 * Transição de Transparente sobre a Hero para Fundo Mineral Sólido com Blur
 */
function initHeaderScroll() {
  const header = document.getElementById('main-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.remove('bg-ar-dark/40', 'py-6');
      header.classList.add('bg-ar-dark/95', 'py-4', 'shadow-2xl', 'border-white/15');
    } else {
      header.classList.remove('bg-ar-dark/95', 'py-4', 'shadow-2xl', 'border-white/15');
      header.classList.add('bg-ar-dark/40', 'py-6');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * 3. Menu Mobile (Drawer) com Suporte a Acessibilidade (ARIA)
 */
function initMobileMenu() {
  const mobileBtn = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileIcon = document.getElementById('mobile-menu-icon');

  if (!mobileBtn || !mobileMenu) return;

  const toggleMenu = () => {
    const isExpanded = !mobileMenu.classList.contains('hidden');
    if (isExpanded) {
      mobileMenu.classList.add('hidden');
      mobileBtn.setAttribute('aria-expanded', 'false');
      if (mobileIcon) mobileIcon.textContent = 'menu';
    } else {
      mobileMenu.classList.remove('hidden');
      mobileBtn.setAttribute('aria-expanded', 'true');
      if (mobileIcon) mobileIcon.textContent = 'close';
    }
  };

  mobileBtn.addEventListener('click', toggleMenu);

  // Fechar o menu ao clicar em qualquer link de âncora
  const menuLinks = mobileMenu.querySelectorAll('a');
  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileBtn.setAttribute('aria-expanded', 'false');
      if (mobileIcon) mobileIcon.textContent = 'menu';
    });
  });
}

/**
 * 4. Filtragem Funcional da Vitrine / Catálogo de Imóveis
 * Suporta teclado (role="tab", aria-selected) e animação fluida
 */
function initCatalogFilters() {
  const filterButtons = document.querySelectorAll('#catalog-filters button');
  const catalogItems = document.querySelectorAll('.catalog-item');
  const countEl = document.getElementById('catalog-count');

  if (!filterButtons.length || !catalogItems.length) return;

  const filterLabels = {
    all: '4 imóveis e realizações',
    commercial: '3 realizações corporativas',
    beach: '1 residência exclusiva',
    rent: '2 oportunidades de locação e BTS'
  };

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const activeFilter = btn.getAttribute('data-filter');

      // Atualiza botões e atributos ARIA
      filterButtons.forEach((b) => {
        b.classList.remove('bg-ar-dark', 'text-white');
        b.classList.add('text-ar-muted');
        b.setAttribute('aria-selected', 'false');
      });

      btn.classList.add('bg-ar-dark', 'text-white');
      btn.classList.remove('text-ar-muted');
      btn.setAttribute('aria-selected', 'true');

      // Aplica filtro sobre os itens
      let visibleCount = 0;
      catalogItems.forEach((item) => {
        const itemCategories = item.getAttribute('data-category') || '';
        const match = activeFilter === 'all' || itemCategories.split(' ').includes(activeFilter);

        if (match) {
          item.classList.remove('hidden-item');
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
          visibleCount++;
        } else {
          item.classList.add('hidden-item');
        }
      });

      // Atualiza feedback de contagem
      if (countEl) {
        countEl.textContent = filterLabels[activeFilter] || `${visibleCount} item(s) exibido(s)`;
      }
    });
  });
}
