/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'dark-mode',
  theme: {
    screens: {
      md: '768px',
    },
    extend: {
      // backgroundImage: {
      //   'checkBg': "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
      // },
      colors: {
        // Primary
        'brightBlue': 'hsl(220, 98%, 61%)',
        'checkBg': "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
        // Light Mode
        'veryLightGray': 'hsl(0, 0%, 98%)',
        'veryLightGrayishBlue': 'hsl(236, 33%, 92%)',
        'lightGrayishBlue': 'hsl(233, 11%, 84%)',
        'darkGrayishBlue': 'hsl(236, 9%, 61%)',
        'veryDarkGrayishBlue': 'hsl(235, 19%, 35%)',
        // Dark Mode 
        'veryDarkBlue': 'hsl(235, 21%, 11%)',
        'veryDarkDesaturatedBlue': 'hsl(235, 24%, 19%)',
        'lightGrayishBlue': 'hsl(234, 39%, 85%)',
        'lightGrayishBlueHover': 'hsl(236, 33%, 92%)',
        'darkGrayishBlue': 'hsl(234, 11%, 52%)',
        'veryDarkGrayishBlue': 'hsl(233, 14%, 35%)',
        'veryDarkGrayishBlue': 'hsl(237, 14%, 26%)',
      },
      fontFamily: {
        'sans': 'Josefin Sans',
      },
      backgroundImage: {
        'bgImgLight': "url('../assets/images/bg-desktop-light.jpg')",
      },
      letterSpacing: {
        widest: '0.75rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}



