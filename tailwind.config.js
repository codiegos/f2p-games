/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d1007a',
        secondary: '#6B0444'
      },
      backgroundImage: {
        waves: "url('waves.svg')"
      },
      fontFamily: {
        mina: ['mina', 'sans-serif']
      }
    }
  },
  plugins: []
}
