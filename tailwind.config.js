/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif-ko': ['"Noto Serif KR"', 'serif'],
      },
    },
  },
  plugins: [],
}
