/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        culoareFont: "#D4AC6F",
        backGroundColor: "#0C635D",
        gradientBackGround: "linear-gradient(45deg, #a1c4fd 0%, #c2e9fb 100%)",
      },
    },
  },
  plugins: [],
};
