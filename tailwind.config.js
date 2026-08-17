/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        obsidian: '#070A11',
        surface: '#0E1322',
        surfaceCard: 'rgba(14, 19, 34, 0.7)',
        gold: {
          300: '#F5E6B3',
          400: '#E6C687',
          500: '#D4AF37',
          600: '#AA882C',
        },
        neonViolet: '#8B5CF6',
        neonCyan: '#06B6D4',
        emeraldAccent: '#10B981',
        whatsapp: '#25D366'
      }
    },
  },
  plugins: [],
}
