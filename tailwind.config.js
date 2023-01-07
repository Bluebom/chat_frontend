/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cht-primary": "#FFB372",
        "cht-secondary": "#F7DBC7",
        "cht-contrast": "#212E47",
        "cht-secondary-contrast": "#6a89cc",
      },
    },
    fontFamily: {
      Roboto: ["Poppins, sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
