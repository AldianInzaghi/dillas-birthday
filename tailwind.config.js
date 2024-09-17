/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "first-section": "url('/img/bg.jpeg')",
        "gradient-gold": "linear-gradient(90deg, #FFD700, #FFB800, #FF8C00)",
      },
    },
    fontFamily: {
      sacramento: ["Sacramento"],
      inter: ["Inter"],
    },
  },
  plugins: [],
};
