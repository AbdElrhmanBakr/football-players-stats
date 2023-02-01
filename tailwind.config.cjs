/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "967px",
      xl: "1440px",
      xxl: "1536px",
    },
    
    extend: {},
  },
  plugins: [],
};
