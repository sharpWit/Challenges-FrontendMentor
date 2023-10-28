/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        palette: {
          primary: "var(--color-indigo-700)",
          secondary: "var(--color-blue-700)",
        },
      },
      textColor: {
        palette: {
          primary: "var(--color-indigo-100)",
          secondary: "var(--color-blue-100)",
          base: "var(--color-grey-700)",
          mute: "var(--color-grey-400)",
          card: "var(--color-yellow-700)",
          menu: "var(--color-indigo-100)",
          dropdown: "var(--color-green-100)",
        },
      },
      backgroundColor: {
        palette: {
          fill: "var(--color-blue-100)",
          card: "var(--color-yellow-100)",
          manu: "var(--color-indigo-700)",
          dropdown: "var(--color-green-700)",
        },
      },
    },
  },
  plugins: [],
};
