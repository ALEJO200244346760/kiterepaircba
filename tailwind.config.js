/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // paleta sacada del logo: sol naranja, navy, olas, papel viejo
        paper: { DEFAULT: '#efe6d8', 2: '#e3d2b4' },
        ink: { DEFAULT: '#0b2433', 2: '#12384b', dark: '#071923' },
        sun: { DEFAULT: '#f5a020', dark: '#d9860a' },
        rust: '#c9542a',
        sea: '#1d5463',
        muted: '#8ca0b0',
      },
      fontFamily: {
        display: ['"Lilita One"', 'Impact', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        barlow: ['Barlow', 'system-ui', 'sans-serif'],
        condensed: ['"Barlow Condensed"', '"Arial Narrow"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
