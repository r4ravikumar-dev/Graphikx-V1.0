/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        navy: "#25219c",
        white: "#fff",
      },
      spacing: {},
      fontFamily: {
        ubuntu: "Ubuntu",
      },
    },
  },
  plugins: [],
};
