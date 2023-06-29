/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  variants: {
    textColor: ["group-hover"],
  },
  theme: {
    extend: {
      height: {
        1300: "81.25rem",
        460: "28.75rem",
        520: "32.5rem",
      },
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#FEF5F3",
        "primary-300": "#F3D7D0",
        "primary-500": "#FF6B66",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
        /* Dark mode equivalents below */
      },

      display: ["group-hover"],

      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {},
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
