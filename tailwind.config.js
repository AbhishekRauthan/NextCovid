module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
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
      animation: {
        load: "up 1s cubic-bezier(0.23, 0.2, 1, 1.22)",
      },
      keyframes: {
        up: {
          "0%": {
            opacity: "0",
            transform: "translateY(1.7rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0rem)",
          },
        },
      },
    },
  },
  variants: {
    extend: {
      transform: ["hover", "focus"],
    },
  },
  plugins: [],
};

// @keyframes load {
//   from {
//     display: none;
//     transform: translateY(-30);
//   }

//   to {
//     display: block;
//     transform: translateY(0);
//   }
// }
