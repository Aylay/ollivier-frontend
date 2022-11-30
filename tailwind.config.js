/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  content: [],
  theme: {
    colors: {
      white: '#FFF',
      black: '#000',
      'science-blue': '#0047DD',
      'turbo': '#DEDC00',
      'cerise': '#E8308A',
      'downriver': '#0A1748',
      'aqua-haze': '#EFF2F6',
      'lynch': '#6b7e99',
      'botticelli': '#d8e0ed',
      'corn': '#E3D400',
      'mint-green': '#ADFF93',
      'japanese-laurel': '#139E00',
      'scarlet': '#FF2412',
      'mona-lisa': '#FFA59E'
    },
    fontFamily: {
      'barlow': ['Barlow', 'Arial', 'sans-serif'],
      'heebo': ['Heebo', 'Arial', 'sans-serif']
    },
    extend: {
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
      },
    },
  },
  plugins: [],
}
