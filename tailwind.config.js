/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#0466C8',
        secondary: '#33415C'
      },
      boxShadow: {
        'custom': '0 0 10px 0 rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
};