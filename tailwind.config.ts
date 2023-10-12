import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-dark': "url('../../public/images/bg-mobile-dark.jpg')",
        'desktop-dark': "url('../../public/images/bg-desktop-dark.jpg')",
        'mobile-light': "url('../../public/images/bg-mobile-light.jpg')",
        'desktop-light': "url('../../public/images/bg-desktop-light.jpg')",
      },
      colors: {
        primaryBrightBlue: "hsl(220, 98%, 61%)",
        checkFrom: "hsl(192, 100%, 67%)",
        checkTo: "hsl(280, 87%, 65%)",
        lmVeryLightGray: "hsl(0, 0%, 98%)",
        lmVeryLightGrayishBlue: "hsl(236, 33%, 92%)",
        lmLightGrayishBlue: "hsl(233, 11%, 84%)",
        lmDarkGrayishBlue: "hsl(236, 9%, 61%)",
        lmVeryDarkGrayishBlue: "hsl(235, 19%, 35%)",
        dmVeryDarkBlue: "hsl(235, 21%, 11%)",
        dmVeryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
        dmLightGrayishBlue: "hsl(235, 39%, 85%)",
        dmLightGrayishBlueHover: "hsl(236, 33%, 92%)",
        dmDarkGrayishBlue: "hsl(234, 11%, 52%)",
        dmVeryDarkGrayishBlue: "hsl(233, 14%, 35%)",
        dmVeryDarkGrayishBlueHover: "hsl(237, 14%, 26%)",
      }
    },
  },
  plugins: [],
}
export default config
