// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,jsx}",
//     "./app/components/**/*.{js,jsx}",
//     "./components/**/*.{js,jsx}"
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         poppins: ["Poppins", "sans-serif"],
//       },
//       colors: {
//         peach: "#FCEBE3",
//         cream: "#FFF8F5",
//         coral: "#F27E7E",
//         brown: "#3A2E2E",
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./app/components/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        cursive: ['Dancing Script', 'cursive'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        cream: "#FFF8E7",
        gold: "#F9B233",
        orange: "#FA812F",
        red: "#E01E00",
        brown: "#3A2E2E",
      },
    },
  },
  plugins: [],
};
