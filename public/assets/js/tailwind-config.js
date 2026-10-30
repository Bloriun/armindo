/**
 * Configuração de Cores e Tipografia Tailwind
 * Armindo Ramalho Empreendimentos
 */
window.tailwindConfig = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "ar-dark": "#0a0b0d",
        "ar-mineral": "#121417",
        "ar-card": "#181b20",
        "ar-paper": "#f5f4ef",
        "ar-surface": "#ffffff",
        "ar-line": "#e4e1d9",
        "ar-line-dark": "rgba(255, 255, 255, 0.12)",
        "ar-muted": "#6b6962",
        "ar-muted-light": "rgba(245, 244, 239, 0.65)"
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        display: ['Syne', 'Space Grotesk', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      }
    }
  }
};
