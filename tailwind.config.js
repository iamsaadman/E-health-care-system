/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"], // Ensure Tailwind scans your HTML and JS files
  theme: {
    extend: {
      fontFamily: {
        my: ["'Baloo Bhai 2'", "'League Spartan'", "'Poppins'", "sans-serif"], // Add all fonts
      },
    },
  },
  plugins: [],
};
