/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          "white-smoke": "#FAFAFA",
          "black-grey": "#2C2C2C",
          blue: "#10A9DF",
          "dark-blue": "#0E1F58",
        },
      },
      backgroundImage: {
        valentines: "url('/valentines.jpg')",
        "sk-training": "url('/sk-training.jpg')",
        "variety-show": "url('/variety-show.jpg')",
        "womens-month": "url('/womensmonth.jpg')",
      },
    },
  },
  plugins: [],
};
