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
      padding: "1rem",
    },
    fontFamily: {
      title: ["Lato", "sans-serif"],
      secondary: ["Dancing Script", "cursive"],
      primary: ["Open Sans", "serif"],
    },
    extend: {
      colors: {
        heading: "rgb(114, 168, 98)",
        text: "rgb(79, 97, 79)",
        button: "rgb(79, 97, 79)",
        nav: "rgb(114, 168, 98)",
      },
    },
  },
  plugins: [],
};
