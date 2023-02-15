/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    
    extend: {
      colors: {
        'gradient1': '#00111B',
        'gradient2':'#002233',
        'gradient3': '#02374B',
      },
      screens: {
        'sm': '276px',
        // => @media (min-width: 576px) { ... }
  
        'md': '960px',
        // => @media (min-width: 960px) { ... }
  
        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
      colors:{
        "slate": "rgb(15 23 42);",
        "light-white": "rgba(255,255,255,0.17)",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    
    require('flowbite/plugin')
  
  ],
}
