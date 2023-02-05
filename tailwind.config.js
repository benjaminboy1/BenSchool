/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    
    extend: {
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
  ],
}
