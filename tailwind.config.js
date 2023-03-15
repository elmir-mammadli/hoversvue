/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        hovers: {
          black: '#212121'
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}
