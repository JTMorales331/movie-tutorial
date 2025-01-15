import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'card-grey': '#3A3B3B',
        'primary-light': '#FAF9F6',
      }
    },
  },
  plugins: [
    daisyui,
  ],
}

