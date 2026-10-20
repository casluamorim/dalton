/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#090C10',
        onyx: '#0F141C',
        surface: '#161D28',
        navy: '#0d1b2a',
        champagne: '#C5A059',
        champagneHover: '#AB8742',
        sand: '#F7F5F0',
        sandDark: '#EFECE6',
        platinum: '#E8ECF2'
      },
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
