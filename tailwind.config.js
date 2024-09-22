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
      title: ["Lato", "sans-serif"],
      secondary: ["Dancing Script", "cursive"],
      primary: ["Open Sans", "serif"],
    },
    colors: {
      heading: "rgb(114, 168, 98)",
      text: "rgb(79, 97, 79)",
      white: "rgb(255, 255, 255)",
      nav: "rgb(114, 168, 98)",
    },
  },
  plugins: [],
};
