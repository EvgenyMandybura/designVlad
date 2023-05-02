/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      mainDark: "#0F0F0F",
      dark2: "#272727",
      textDark: "#2B2B2B",
      gray: "#7C7C7C",
      mainLight: "#F4F4F4",
      divider: "#D6D6D6",
      separatingLine: "#404040",
      secondaryOnDark: "#989898",
    },
    fontFamily: {
      sans: ["ClashDisplay-Medium", "sans-serif"],
      serif: ["Switzer-Medium", "serif"],
      font1: ["ClashDisplay-Regular", "sans-serif"],
      font2: ["ClashDisplay-Medium", "sans-serif"],
      font3: ["Switzer-Regular", "sans-serif"],
      font4: ["Switzer-Italic", "sans-serif"],
      font5: ["Switzer-Medium", "sans-serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
