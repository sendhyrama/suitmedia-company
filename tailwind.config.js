/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        slide1: "url(/public/assets/bg.jpg)",
        slide2: "url(/public/assets/about-bg.jpg)",
      },
    },
  },
  plugins: [],
}
