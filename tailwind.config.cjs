/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-rosa": "#f3156b",
        "custom-verde": "#00fa00",
      },
      textColor: {
        "custom-rosa": "#f3156b",
        "custom-verde": "#00fa00",
      },
      colors: {
        "custom-rosa": "#f3156b",
        "custom-green": "#00fa00",
      },
      height: {
        "8vh": "8vh",
        "92vh": "92vh",
      },
      padding: {
        "8%": "6%",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
