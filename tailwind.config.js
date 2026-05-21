/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#FFFFFF",
        "light-bg": "#F8F8F6",
        "text-gray": "#4B5563",
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
