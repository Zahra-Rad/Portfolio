/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
    "./work.html",
    "./about.html",
    "./contact.html",
  ],
  theme: {
    colors: {
      primary: "#ECE7E1",
      secondary: "#1A1818",
    },
    extend: {
      fontFamily: {
        MontserratReg: "MontserratReg",
        MontserratItalic: "MontserratItalic",
        Grandslang: "Grandslang",
      },
    },
  },
  plugins: [],
};
