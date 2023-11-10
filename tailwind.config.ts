import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-dark": "url('../../public/images/bg-mobile-dark.jpg')",
        "desktop-dark": "url('../../public/images/bg-desktop-dark.jpg')",
        "mobile-light": "url('../../public/images/bg-mobile-light.jpg')",
        "desktop-light": "url('../../public/images/bg-desktop-light.jpg')",
      },
      colors: {
        primaryBrightBlue: "hsl(220, 98%, 61%)",
        checkFrom: "hsl(192, 100%, 67%)",
        checkTo: "hsl(280, 87%, 65%)",
        lmMainText: "hsl(0, 0%, 98%)",
        lmMainTextHover: "hsl(236, 33%, 92%)",
        lmLightGrayishBlue: "hsl(233, 11%, 84%)",
        lmDarkGrayishBlue: "hsl(236, 9%, 61%)",
        lmInactive: "hsl(235, 19%, 35%)",
        dmVeryDarkBlue: "hsl(235, 21%, 11%)",
        dmVeryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
        dmMainText: "hsl(235, 39%, 85%)",
        dmMainTextHover: "hsl(236, 33%, 92%)",
        dmDarkGrayishBlue: "hsl(234, 11%, 52%)",
        dmSecondaryText: "hsl(235, 16%, 43%)",
        dmSecondaryHover: "hsl(237, 14%, 26%)",
      },
    },
  },
  plugins: [],
};
export default config;
