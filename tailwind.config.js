/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      jsm: '375px',
      jmd: '834px',
      jlg: '1512px',
    },
    colors: {
      'brun': '#1D1006',
      'brunl': '#6D5746',
      'gul': '#F5B845',
      'hvit': '#E2D2BF',
    },
    extend: {
      fontFamily: {
        'youngs': 'YoungSerif, Normal',
        'sans': ['Work Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}