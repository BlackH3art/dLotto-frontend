/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        bounce: "bounce 1s infinite",
      },
    },
    fontFamily: {
      mono: ["monospace", "Nunito"],
      robotomono: ["Roboto Mono"],
    },
  },
  plugins: [],
};
