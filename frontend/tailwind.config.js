/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#3098e1",
        'primary-50': '#f1f8fe',
        'primary-100': '#e2effc',
        'primary-200': '#bfdef8',
        'primary-300': '#87c4f2',
        'primary-400': '#47a6e9',
        'primary-500': '#3098e1',
        'primary-600': '#126eb7',
        'primary-700': '#0f5795',
        'primary-800': '#114b7b',
        'primary-900': '#144066',
        'primary-950': '#0d2844',
      },
    },
  },
  plugins: [],
}

