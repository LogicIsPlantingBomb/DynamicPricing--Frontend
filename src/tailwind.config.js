/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00487c',
          light: '#0272b6',
          dark: '#003b65',
        },
        accent: {
          DEFAULT: '#10b0e7',
          hover: '#0d9ad0',
        },
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      }
    },
  },
  plugins: [],
}
