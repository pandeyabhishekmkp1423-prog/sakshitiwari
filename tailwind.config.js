/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#FFF5EC',
        ink: '#4A1D24',
        rose: '#D87880',
        femine: {
          bg: '#FFF5EC',
          card: '#FFFDFA',
          blush: '#F0D9D5',
          rose: '#D87880',
          roseHover: '#C86262',
          wine: '#4A1D24',
          subtle: '#6F6060',
          border: '#F0D8D2'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
