/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.hbs", "./**/*.hbs"],
  theme: {
    extend: {},
    fontWeight: {
      hairline: 100,
      "extra-light": 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      "extra-bold": 800,
      black: 900,
    },
    fontSize: {
      sm: "1.5rem",
      base: "1.6rem",
      lg: "1.7rem",
      xl: "1.8rem",
      "2xl": "2rem",
      "3xl": "2.2rem",
      "4xl": "2.4rem",
      "5xl": "2.6rem",
      "6xl": "2.8rem",
      "7xl": "3rem",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
