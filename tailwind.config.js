/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '450px',
      },
      colors: {
        brown: 'rgba(92, 41, 28, 0.9)',
        'n-orange': '#DB822D',
        'c-brown': '#FFEDCA',
        'c-coffe': '#FFEDCA',
      },
      fontFamily: {
        'amsi-semibold': 'var(--font-amsi-semibold)',
        'amsi-bold': 'var(--font-amsi-bold)',
        'amsi-normal': 'var(--font-amsi-normal)',
        'amsi-regular': 'var(--font-amsi-regular)',
      },
    },
  },
  plugins: [],
}
