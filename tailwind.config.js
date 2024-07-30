/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center: true,
        padding: '1.5rem', 
        screens: {
          sm: '100%', // Ancho completo en pantallas pequeñas
          md: '728px', // Ancho fijo en pantallas medianas
          lg: '984px', // Ancho fijo en pantallas grandes
          xl: '1240px', // Ancho fijo en pantallas extra grandes
        },
      }
    },
  },
  plugins: [],
}

