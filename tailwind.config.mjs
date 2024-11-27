/** @type {import('tailwindcss').Config} */

import { darkMode } from "#tailwind-config";

const srcDir = "./app";
export default {
  theme: {
    extend: {
      colors: {
        dblue: {
          50: "#e5e0ff", // Lightest shade of primary color
          100: "#c2b3ff",
          200: "#9e85ff",
          300: "#7a57ff",
          400: "#572aff",
          500: "#341dba", // Primary color
          600: "#2e17a8",
          700: "#261296",
          800: "#1e0d84",
          900: "#170872",
          950: "#0f0560", // Darkest shade of primary color
        },
        dButton: "#341dba",
        buttonPrimary: {
          DEFAULT: "#341dba",
          disabled: "#9e85ff",
        },
        buttonAlert: {
          DEFAULT: "#ff9500",
          disabled: "#ffd9b3",
        },
        buttonSuccess: {
          DEFAULT: "#34baba",
          disabled: "#b3ffe0",
        },
        buttonSecondary: {
          DEFAULT: "#ff1d9a",
          disabled: "#ffb3d9",
        },
        buttonNeutral: {
          DEFAULT: "#6c757d",
          disabled: "#e9ecef",
        },

        secondary: {
          50: "#fff2e5", // Lightest shade of secondary color
          100: "#ffd9b3",
          200: "#ffbf80",
          300: "#ffa64d",
          400: "#ff8c1a",
          500: "#ff9500", // Secondary color
          600: "#e68500",
          700: "#cc7500",
          800: "#b36500",
          900: "#994c00",
        },
        accent1: {
          50: "#e0fff5", // Lightest shade of accent1 color
          100: "#b3ffe0",
          200: "#80ffcc",
          300: "#4dffb8",
          400: "#1affa3",
          500: "#00ff95", // Accent1 color
          600: "#00e685",
          700: "#00cc75",
          800: "#00b365",
          900: "#00994c",
        },
        accent2: {
          50: "#ffe5f2", // Lightest shade of accent2 color
          100: "#ffb3d9",
          200: "#ff80bf",
          300: "#ff4da6",
          400: "#ff1a8c",
          500: "#ff1d9a", // Accent2 color
          600: "#e61a89",
          700: "#cc1677",
          800: "#b31266",
          900: "#991055",
        },
        neutral: {
          50: "#f8f9fa", // Lightest shade of neutral color
          100: "#e9ecef",
          200: "#dee2e6",
          300: "#ced4da",
          400: "#adb5bd",
          500: "#6c757d", // Neutral color
          600: "#495057",
          700: "#343a40",
          800: "#212529",
          900: "#121314", // Darkest shade of neutral color
        },
      },
      screens: {
        "3xl": "1537px",
        "4xl": "1920px",
        "5xl": "2560px",
        "6xl": "3440px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-primeui")],
};
