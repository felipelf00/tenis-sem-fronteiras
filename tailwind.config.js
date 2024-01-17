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
    },
  },
  plugins: [],
};
