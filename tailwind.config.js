/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'metal': '#565584',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'beige':'#F6F5F1',
      'text': '#2E402D',
      'cadre': '#f7e6dc',
      'black': '#0F0F0F'

    },
    fontFamily: {
      'title': 'Mrs Saint Delafield', 
      'ephesis': 'Ephesis',
      'parisienne': 'Parisienne',
      'pinyon': 'Pinyon Script'
    },
    extend: {},
  },
  plugins: [],
}

