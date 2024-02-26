/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        "yellow-tsf": "#ffba00",
        "blue-tsf": "#00aeef",
        "light-gray": "#d1d5db",
      },
      keyframes: {
        "ping-small": {
          "0%": { transform: "scale(1,  1)" },
          "3%": { transform: "scale(1.1,  1.1)" },
          "10%": { transform: "scale(1,  1)" },
          "100%": { transform: "scale(1,  1)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "2%": { transform: "rotate(3deg)" },
          "4%": { transform: "rotate(-3deg)" },
          "6%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        "ping-small": "ping-small  3s cubic-bezier(0,  0,  0.2,  1) infinite",
        wiggle: "wiggle 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
