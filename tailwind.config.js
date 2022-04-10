module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "639px" },
      },
      fontFamily: {
        source: ["Source Sans Pro", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
