/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    'node_modules/preline/dist/*.js',
  ],
  plugins: [
    require('preline/plugin'),
  ],
  theme: {
    extend: {
      colors: {
        'emphasis': 'rgba(255, 255, 255, 0.87)',
        'normal': 'rgba(255, 255, 255, 0.72)',
        'accent': 'rgba(165,180,252, 0.9)',
        'dark': 'rgb(18, 18, 18)',
      },
    },
    fontFamily: {
      'sans': ['Inter', 'Helvetica', 'sans-serif'],
    }
  },
}


