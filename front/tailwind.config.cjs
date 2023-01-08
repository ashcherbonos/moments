const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'SourceSansPro',
          'Segoe UI',
          'Open Sans',
          'Helvetica Neue',
          'sans-serif',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        main: '#000',
        accent: '#e30604',
        white: '#fff',
      },
    },
  },
  plugins: [],
};
