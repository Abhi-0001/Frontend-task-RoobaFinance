/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      colors: {
        purplebg: "#b9a0fe",
        greybg: "#14181b",
        yellowbg: "#fccc5e",
      },
      fontFamily: {
        display: ["Tourney"],
      },
    },
  },
  plugins: [],
};
