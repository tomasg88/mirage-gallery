/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './modules/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      base: ['Unbounded', 'mono'],
      sans: ['Verdana', 'sans'],
    },
    extend: {
      colors: {
        original: '#074F65',
        curated: '#920D3D',
        dreamers: '#1129AA',
        native: '#431281',
        membership: '#E2B310',
      },
    },
  },
  plugins: [],
};
