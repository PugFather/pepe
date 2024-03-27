/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 0 5px rgba(0, 0, 0, 0.7)",
        custom: "0 0 50px 20px rgba(255, 254, 248, 0.18)",
      },
      fontFamily: {
        genty: ["Genty", "sans-serif"],
        evermore: ["Evermore", "sans-serif"],
        comfortaa: ["Comfortaa", "sans-serif"],
      },
      fontSize: {
        xl: "1.375rem",
      },
    },
  },
  plugins: [],
};
