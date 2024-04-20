/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js,jsx}"],  
  theme: {
    colors:{
      'black-rgba': 'rgba(0, 0, 0, 0.54)',
      'dark-green': '#3b7160',
      'light-green': '#9af2c6',
      'white': '#ffffff',
      'gray': '#a9a9a9',
      'blue': '#7796CB',
    },
    extend: {
      'dungeon': "url('/assets/dungeon.jpg')"
    },
  },
  plugins: [],
}

