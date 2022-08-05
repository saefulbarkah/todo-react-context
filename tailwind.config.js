/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7700FF",
        red: "#FF4E4E",
        button: "#4B00FF",
        success: "#00FF97",
      },
    },
  },
  plugins: [],
};
