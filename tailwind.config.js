/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1262px",
      },
      padding: {
        DEFAULT: "1.5rem",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary":
          "linear-gradient(180deg, #D0F1EB 10.76%, #F7F7F7 100%)",
      },
      boxShadow: {
        button: "0px 8px 16px -2px rgba(0, 0, 0, 0.12)",
      },
      colors: {
        primary: {
          DEFAULT: "#48A9A6",
          300: "#91D7E0",
        },
        secondary: "#D0F1EB",
        beige: "#F5E7C2",
        active: "#005EFF",
        success: "#23E9B4",
        info: "#91D7E0",
        warning: "#FFAC4B",
        danger: "#FF5A5A",
        typo: {
          DEFAULT: "#434343",
        },
        ink: {
          100: "#FFFFFF",
          200: "#F7F7F7",
          300: "#EBEBEB",
          400: "#DDDDDD",
          450: "#CDCDCD",
          500: "#9F9F9F",
          550: "#828282",
          570: "#6C757D",
          600: "#46464E",
          700: "#333333",
          800: "#2E2E2E",
          900: "#1B1B1B",
        },
      },
      fontSize: {
        header: [
          "3.5rem",
          {
            lineHeight: "105%",
            letterSpacing: "-1px",
            fontWeight: 700,
          },
        ],
        title: [
          "2.5rem",
          {
            lineHeight: "115%",
            fontWeight: 700,
            letterSpacing: "-1px",
          },
        ],
        subTitle: [
          "2rem",
          {
            lineHeight: "2.625rem",
            fontWeight: 700,
            letterSpacing: "-1px",
          },
        ],
      },
    },
  },
  plugins: [],
};
