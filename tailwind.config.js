/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'AvenirMeduim' : ['Avenir-Meduim', 'Arial', 'sans-serif'],
      },
      colors: {
        bgColor: '#FAFAFA',
        lightColorText: '#7A7A7A',
        boldColorText: '#292929',
        buttonBg: '#799794',
        activeTextColor: '#03A300',
        activerBgColor: '#EBFFEB',
        inactiveTextColor: '#A35800',
        inactiveBgColor: '#FFF6EB',
        warning: '#CC0000',
      }
    },
  },
  plugins: [require("daisyui")],
};
