/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'pint': [
        "Mona Sans", 
        "Mona Sans Header Fallback", 
        "-apple-system", 
        "BlinkMacSystemFont", 
        "Segoe UI", 
        "Helvetica", 
        "Arial", 
        "sans-serif", 
        "Apple Color Emoji", 
        "Segoe UI Emoji", 
        "Segoe UI Symbol"
      ]
    }
  },
  darkMode: "class",
  plugins: [nextui()],
}
