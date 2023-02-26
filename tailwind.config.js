/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: 'rgb(161, 11, 37)',
      secondary: 'rgb(240, 238, 239)',
      yellow: 'rgb(235, 197, 82)',
      black: 'rgb(16,16,16,1)'
    },
    extend: {},
  },
  plugins: [],
}
