/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      base: ['Unbounded', 'mono'],
      sans: ['var(--font-mona-sans)'],
    },
    extend: {},
  },
  plugins: [],
};
