module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        merri: "'Merriweather', serif",
        display: ["'Cormorant Garamond'", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      colors: {
        // Palette monochrome White Cube
        cream: {
          50: '#ffffff',
          100: '#f6f6f5',
          200: '#ededec',
          300: '#e0e0de',
        },
        clay: {
          100: '#f0f0ef',
          200: '#d4d4d3',
          300: '#a8a8a7',
          500: '#3d3d3d',
          700: '#0a0a0a',
        },
        sage: {
          300: '#c8c8c7',
          500: '#6b6b6a',
          700: '#3d3d3c',
        },
        gold: {
          300: '#d4d4d3',
          500: '#a8a8a7',
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
}
