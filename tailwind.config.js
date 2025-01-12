/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "serif": ["ivypresto-display", "ui-serif", "Georgia"],
    }
  },
  plugins: [],
}

