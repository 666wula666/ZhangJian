/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#111827',
        sea: '#2F6F73',
        paper: '#F5F7F6',
        brass: {
          DEFAULT: '#B78934',
          dark: '#966F28',
          light: '#D9B762',
        },
      },
      fontFamily: {
        sans: ['Inter', 'PingFang SC', 'Microsoft YaHei', 'sans-serif'],
        serif: ['Noto Serif SC', 'Source Han Serif SC', 'Songti SC', 'SimSun', 'serif'],
      },
    },
  },
  plugins: [],
}
