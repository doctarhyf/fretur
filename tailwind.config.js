/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bg_myacc: "url('/assets/bg_myacc.jpg')",
      },
    },
  },
  plugins: [],
};
