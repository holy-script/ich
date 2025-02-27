/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#0466C8',
        secondary: '#33415C',
        tertiary: '#BCBCBC',
      },
    },
  },
  plugins: [],
};