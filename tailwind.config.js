/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js,jsx}"],  
  theme: {
    colors:{
      'black-rgba': 'rgba(0, 0, 0, 0.54)',
    },
    extend: {
      'dungeon': "url('/assets/dungeon.jpg')"
    },
  },
  plugins: [],
}

