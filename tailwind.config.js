/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        font1: ["Open Sans", "sans-serif"],
      },
      colors: {
        cardbg: "#222831",
        buttoncl: "#e69c00",
        borderbg: "#ffbe33",
        whitesmoke: "#F5F5F5",
        getbg: "#fffbf7",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        "bottom-to-top": "bottomToTop 1s ease-out forwards",
        "left-to-right": "leftToRight 1s ease-out forwards",
        "scale-up": "scaleUp 0.5s ease-out forwards",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        bottomToTop: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        leftToRight: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        scaleUp: {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
//  font-family: "Noto Sans", sans-serif;
