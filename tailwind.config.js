/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBrightBlue: "hsl(220, 98%, 61%)",
        checkBackground: "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
        lmVeryLightGray: "hsl(0, 0%, 98%)",
        lmVeryLightGrayishBlue: "hsl(236, 33%, 92%)",
        lmLightGrayishBlue: "hsl(233, 11%, 84%)",
        lmDarkGrayishBlue: "hsl(236, 9%, 61%)",
        lmVeryDarkGrayishBlue: "hsl(235, 19%, 35%)",
        dmVeryDarkBlue: "hsl(235, 21%, 11%)",
        dmVeryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
        dmLightGrayishBlue: "hsl(234, 39%, 85%)",
        dmLightGrayishBlueHover: "hsl(236, 33%, 92%)",
        dmDarkGrayishBlue: "hsl(234, 11%, 52%)",
        dmVeryDarkGrayishBlue: "hsl(233, 14%, 35%)",
        dmVeryDarkGrayishBlueHover: "hsl(237, 14%, 26%)",
      }
    },
  },
  plugins: [],
}
