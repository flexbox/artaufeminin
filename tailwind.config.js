module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        // Conteneurs de page : marge latérale de 1,5 rem (mobile) ou 4 rem (lg)
        page: 'calc(100% - 3rem)',
        'page-lg': 'calc(100% - 8rem)',
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", 'serif'],
        sans: ["'Inter'", 'system-ui', 'sans-serif'],
      },
      colors: {
        // Gris 500 assombri : contraste ≥ 4,5:1 (WCAG AA) sur fond blanc et sur neutral-50
        neutral: {
          500: '#666666',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
