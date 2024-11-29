/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        basicGray: "#6B7280",
        altBlack: "#1F2937",
      },
    },
  },
  plugins: [],
};
