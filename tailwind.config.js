/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('flowbite/plugin'),
    require('@headlessui/vue'),
],
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
        'aboutcover': "url('/images/abouthero.webp')",
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem'
      }
    },
  }
}
