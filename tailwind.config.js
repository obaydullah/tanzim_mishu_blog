/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      width: {
        95: "95%",
      },
    },
    fontFamily: {
      libre: ["Libre Franklin"],
      porto: ["potro_sans"],
    },
  },
  plugins: [],
};
