const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'), ...createGlobPatternsForDependencies(__dirname)],
  theme: {
    extend: {
      screens: {
        sm: '375px',
        lg: '1440px',
      },
      colors: {
        aqua: '#2BD0D0',
        darkGray: '#34313D',
        darkPurple: '#3A3054',
        deepPurple: '#4B3F6B',
        lightGray: '#9E9AA8',
        lightBlue: '#EFF1F7',
        gray: 'hsl(0, 0%, 75%)',
        red: 'hsl(0, 87%, 67%)',
        darkBrown: '#232127',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
