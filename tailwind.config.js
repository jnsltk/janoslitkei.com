/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'emphasis': 'rgba(255, 255, 255, 0.87)',
        'normal': 'rgba(255, 255, 255, 0.68)',
        'accent': '#C8BBF2',
        'dark': 'rgb(18, 18, 18)',
      },
    },
    fontFamily: {
      'sans': ['Inter', 'Helvetica', 'sans-serif'],
    }
  },
}


