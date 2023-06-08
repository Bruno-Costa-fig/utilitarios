/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        ['dark-green']: "var(--dark-green)",
        black: "var(--black)",
        white: "var(--white)",
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#000fff',
            h1: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
          },
        },
      }
    },
  },
  plugins: [],
}