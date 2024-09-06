import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFE37F",
        secondary: "#FE6921",
        background: "#010101",
        card_bg: "#FFFFFF26",
        dark_brown: "#4F1B02",
        header: "#04040480",
        text: "#FFFFFF",
        line: "#1E1E1E13",
        title: "#FFFFFFBF",
        grays: "#1E1E1E",
        oranges: "#EE7505",
        button_primary: "#26F631",
        button_secondary: "#FF4848",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        fadeOut: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideOut: {
          "0%": { transform: "translateX(0%)", opacity: "1" },
          "100%": { transform: "translateX(-100%)", opacity: "0" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-in-out forwards",
        "fade-out": "fadeOut 0.3s ease-in-out forwards",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-out": "slideOut 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
