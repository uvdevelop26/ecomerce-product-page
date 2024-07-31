/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          sm: '100%',
          md: '728px',
          lg: '984px',
          xl: '1160px',
        },
      },
      colors: {
        'orange-new': 'hsl(26, 100%, 55%)',
        'orange-pale-new': 'hsl(25, 100%, 94%)',
        'very-dark-blue': 'hsl(220, 13%, 13%)',
        'dark-grayish-blue': 'hsl(219, 9%, 45%)',
        'grayish-blue': 'hsl(220, 14%, 75%)',
        'light-grayish-blue': 'hsl(223, 64%, 98%)'
      },
      fontFamily: {
        sans: ['Kumbh Sans', 'sans-serif'],
      },
      fontSize: {
        '2xxl': '1.85rem'
      },
      lineHeight: {
        'extra-loose': '1.6'
      },
      gap:{
        '5x' : '1.12rem'
      },
      height:{
        '13' : '3.2rem'
      },
      width:{
        '13' : '3.2rem'
      }
    },

  },
  plugins: [],
}

