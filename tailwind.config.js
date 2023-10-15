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
        primary: "var(--color-primary)",
        "primary-50": "#FFFBFA",
        "primary-100": "#FEF5F3",
        "primary-200": "#FFE0D9",
        "primary-300": "#F3D7D0",
        "primary-400": "#FAC2B4",
        "primary-500": "#FF6B66",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
      },
      backgroundImage: {
        texture:
          "url(/static/images/backgrounds/glow-texture.png), radial-gradient(var(--color-primary), transparent 70%)",
      },

      display: ["group-hover"],

      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["var(--font-montserrat)"],
        heading: ["var(--font-manrope)"],
      },
      content: {},
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        "gradient-y": "gradient-y 15s ease infinite",
        "gradient-xy": "gradient-xy 15s ease infinite",
      },
      keyframes: {
        "gradient-y": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "center top",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center center",
          },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
