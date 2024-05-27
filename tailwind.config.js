/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        milkyway: "url('/src/assets/milkyway.jpg')",
        primary: "url('/src/assets/bg.png')",
      }),
      boxShadow: {
        // 'inset-shadow': 'inset 0px -15px 100px 0px rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
};
