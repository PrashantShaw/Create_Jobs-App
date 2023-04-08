/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'card-border': '#E6E6E6',
      'font-dark': '#212121',
      'font-gray': '#646464',
      'font-white': '#FAFAFA',
      'error': '#D86161',
      'placeholder': '#7A7A7A',
      'primary': '#1597E4'
    }
  },
  plugins: [],
}