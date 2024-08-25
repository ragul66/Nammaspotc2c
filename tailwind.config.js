/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        font1: ["Edu VIC WA NT Beginner", "cursive"],
      },
      colors: {
        cardbg: "#222831",
        buttoncl: "#e69c00",
        borderbg: "#ffbe33",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
};
//  font-family: "Noto Sans", sans-serif;
