/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "1.25rem",
        lg: "2rem",
      },
    },
    extend: {
      colors: {
        darkBlue: "#002168",
        secondary: "#99A6C3",
        blue: "#1D7ED8",
        red: "#E82C71",
        yellow: "#F9A830",
        gray: "#99A6C3",
        bg: "#F3F9FF",
        white: "#FFFFFF",
        black: "#000000",
        dividers: "#E1F1FF",
        green: "#00C896",
      },
      screens: {
        md: "900px",
        lg: "1280px",
      },
      fontFamily: {
        caveat: "Caveat",
      },
    },
  },
  plugins: [],
};
