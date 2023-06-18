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
      }
    },
    fontFamily: {
      'sans': ['Inter', 'Helvetica', 'sans-serif'],
      'display': ['Recoleta', 'Georgia', 'serif']
    }
  },
  plugins: [],
}

