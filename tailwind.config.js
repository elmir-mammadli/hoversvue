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
          black: '#212121',
          gray: '#777777',
          logo: '#233683'
        }
      },
      backgroundImage: {
        'aboutcover': "url('./public/images/abouthero.webp')",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}
