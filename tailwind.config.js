/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "slide-bottom":
          "slide-bottom 1s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
      },
      keyframes: {
        "slide-bottom": {
          "0%": {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(100px)",
          },
        },
      },
    },
    fontFamily: {
      main: "/assets/fonts/LINESeedJP_OTF_Rg.woff",
    },
  },
  plugins: [],
};
