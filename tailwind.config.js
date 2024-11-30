import daisyui from 'daisyui';
import { plugin } from 'postcss';

/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode:"class",
  plugins: [nextui(),
    require('daisyui'),

  ],
  daisyui:{
    themes:[],
  }
}

