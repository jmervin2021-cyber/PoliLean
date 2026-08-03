/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0B132B', dark: '#070B19', light: '#1C2541' },
        liberty: '#3A86EF',
        vanguard: '#D90429',
        charcoal: '#2B2D42',
        gold: '#E9C46A',
        silver: '#F8F9FA',
      },
    },
  },
  plugins: [],
};