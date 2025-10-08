/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#15171E",
        "accent-primary": "#3FA7D6",
        "accent-secondary": "#F5F5F5",
        "text-primary": "#E0E0E0",
        "text-secondary": "#B0B0B0",
      },
    },
  },
  plugins: [],
};
