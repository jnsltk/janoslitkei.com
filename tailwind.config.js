/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'light-bg-100': '#f5f1e8',
        'light-bg-300': '#EEE7D8',
        'light-bg-500': '#beb9ad',
        'light-bg-700': '#5f5c56',
        'accent-orange': '#DB2B39',
        'accent-purple': '#271467',
        'smoky-black': '#181511'
      },
      keyframes: {
        'blob-1': {
          '0%, 100%': { transform: 'translate(0em, 0em) scale(1) rotate(0deg)' },
          '25%': { transform: 'translate(-3.5em, -3em) scale(1.06) rotate(-5deg)' },
          '50%': { transform: 'translate(-4.5em, -3.6em) scale(1.15) rotate(-8deg)' },
          '75%': { transform: 'translate(-2.5em, -3.1em) scale(1.05) rotate(-5deg)' },
        },
        'blob-2': {
          '0%, 100%': { transform: 'translate(0em, 0em) scale(1) rotate(0deg)' },
          '25%': { transform: 'translate(-2.5em, 0em) scale(1.05) rotate(-10deg)' },
          '50%': { transform: 'translate(-5.8em, 0em) scale(1.1) rotate(-20deg)' },
          '75%': { transform: 'translate(-3.6em, 0em) scale(1.03) rotate(-12deg)' },
        },
        'blob-3': {
          '0%, 100%': { transform: 'translate(0em, 0em) scale(1) rotate(0deg)' },
          '25%': { transform: 'translate(1.5em, -1.4em) scale(1.05) rotate(-5deg)' },
          '50%': { transform: 'translate(2.7em, -1.8em) scale(1.08) rotate(-11deg)' },
          '75%': { transform: 'translate(1.3em, -1.3em) scale(1.03) rotate(-7deg)' },
        },
      },
      animation: {
        'blob-1': 'blob-1 ease-in-out 11s infinite',
        'blob-2': 'blob-2 ease-in-out 19s infinite',
        'blob-3': 'blob-3 ease-in-out 21s infinite',
      }
    },
    fontFamily: {
      'sans': ['Inter', 'Helvetica', 'sans-serif'],
      'display': ['Recoleta', 'Georgia', 'serif']
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}


