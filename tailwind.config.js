/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: "640px",
          md: "768px",
          lg: "850px",
          xl: "910px",
          "2xl": "910px",
        },
      },
      width: {
        95: "95%",
        90: "85%",
      },

      colors: {
        black: "#222",
        black_two: "#333",
        black_three: "#eee",
        hover: "#767676",
        facebook: "#336699",
        facebook_dark: "#336699",
        twitter: "#55ACEE",
      },
    },
    fontFamily: {
      libre: ["Libre Franklin"],
      porto: ["potro_sans"],
      sans: ["sans-serif"],
    },
  },
  plugins: [],
};
