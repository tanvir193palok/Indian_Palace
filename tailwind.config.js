/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screen: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: "2rem",
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      secondary: ["Playfair Display"],
      primary: ["Open Sans", "serif"],
    },
    extend: {
      colors: {
        heading: "rgb(234, 146, 133)",
        text: "rgb(79, 97, 79)",
        nav: "rgb(114, 168, 98)",
        text1: "rgb(174, 175, 185)",
      },
    },
  },
  plugins: [],
};
