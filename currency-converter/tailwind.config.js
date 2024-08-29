/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "radial-gradient": "radial-gradient(circle, #E90064, #FF5F9E, #FEFDED)",
      },
    },
  },
  plugins: [],
};
