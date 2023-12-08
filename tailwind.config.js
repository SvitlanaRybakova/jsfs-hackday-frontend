/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Roboto", "Helvetica", "Arial", "sans-serif"],
        serif: ["Merriweather", "Georgia", "serif"],
      },
      colors: {
        bg_navbar: "#343536",
        primery_pointer: "#b69e40",
        bg_body: "#393e42",
        bg_overlay: '#00000096',
        bg_button_add: '#9ADE7B',
        bg_button_add_hover: '#508D69',
      },
    },
  },
  plugins: ["flowbite/plugin"],
};
