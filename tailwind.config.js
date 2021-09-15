module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          dark: "#42B72A",
        },
      },
      screens: {
        sm: { max: "780px" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
