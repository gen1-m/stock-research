/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
  plugins: [],
}
