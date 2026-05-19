/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#0A0A0A",
        "light-bg": "#F5F4F2",
        "text-gray": "#A3A3A3",
        "accent-red": "#DC2626",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Barlow", "sans-serif"],
        signature: ["Dancing Script", "cursive"],
      },
      spacing: {
        "safe-top": "var(--safe-area-inset-top)",
      },
    },
  },
  plugins: [],
};
