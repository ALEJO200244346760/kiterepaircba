/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0d1f2d',
          2: '#142333',
          dark: '#08131c',
        },
        orange: {
          DEFAULT: '#f5a020',
          dark: '#e8920a',
        },
        sand: '#fdf4e3',
        muted: '#8ca0b0',
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif'],
        condensed: ['"Barlow Condensed"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}