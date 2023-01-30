/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 7% ':{ transform: 'rotate(0)'},
          '15%':{ transform: 'rotate(-15deg)'},
          '20%': { transform: 'rotate(10deg)'},
          '25%': { transform: 'rotate(-10deg)'},
          '30%': { transform: 'rotate(6deg)'},
          '35%': { transform: 'rotate(-4deg)'},
          '40%, 100%': {transform: 'rotate(0)'},
        },
     
      },
      animation: {
        'wiggle': 'wiggle 2s linear 1',
        
      }
    },
  },
  plugins: ["flowbite/plugin"],
  important: true,
}