/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4D85F8",
        secondary: "#00FF00",
        dark: "#030406",
      },
    },
  },
  plugins: [],
};
