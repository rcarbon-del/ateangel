/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    fontFamily: {
      allura: ["Allura", "cursive"],
      alex: ["Alex Brush", "cursive"],
      petit: ["Petit Formal Script", "cursive"],
      pinyon: ["Pinyon Script", "cursive"],
    },
    extend: {
      colors: {
        primary: "white",
        secondary: "#C79D54",
        tertiary: "#125F30",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        gold: "#AE7E1E",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
    },
  },
  plugins: [],
};