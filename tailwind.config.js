/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#7700FF",
        primaryDark: "#5c00c4",
        red: "#FF4E4E",
        button: "#4B00FF",
        success: "#00FF97",
      },
    },
  },
  plugins: [],
};
