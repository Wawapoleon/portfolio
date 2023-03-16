/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        jacques: ["Jacques Francois", "Georgia", "serif"],
      },
      colors: {
        transparent: "transparent",
        primary: "#F9F6EE",
        secondary: "#1B1212",
        tertiary: "#507125",
      },
      backgroundImage: {
        latest1: "url('/src/images/rien.png')",
        latest2: "url('/src/images/rien.png')",
        latest3: "url('/src/images/rien.png')",
      },
    },
  },

  plugins: [],
};
