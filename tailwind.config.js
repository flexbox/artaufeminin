module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        merri: "'Merriweather', serif",
        display: ["'Cormorant Garamond'", "serif"],
      },
      colors: {
        cream: {
          50: '#fdfcfa',
          100: '#faf7f2',
          200: '#f3ece3',
          300: '#e9ddd4',
        },
        clay: {
          100: '#f5ede8',
          200: '#e8c5b4',
          300: '#d4a090',
          500: '#9d6b53',
          700: '#6b3d2a',
        },
        sage: {
          300: '#b5c9b8',
          500: '#8ba28f',
          700: '#5f7d64',
        },
        gold: {
          300: '#e4cc9a',
          500: '#c9a96e',
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
}
