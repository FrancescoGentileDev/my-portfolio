/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './index.html',

  ],
  theme: {
    colors: {
      background: '#0A192F',
      backgroundSecondary: '#30435E',
      backgroundDarker: '#060f1d',
      primary: '#DE5745',
      secondary: '#2F75DE',
      tertiary: '#AFDE18',
      quaternary: '#749117',
      quinary: '#70A9FF',
      marrone1: '#F0BB51',
      marrone2: '#A37417',
      grey: '#cbd5e1'
    },
    textColor: {
      primary: '#AB2513',
      secondary: '#2F75DE',
      tertiary: '#cbd5e1',
      darkGrey: '#a2a2a2',
      quaternary: '#ccd6f6',
      quinary: '#70A9FF',
      marrone1: '#F0BB51',
      marrone2: '#A37417',
      background: '#0A192F',

    }
  },
  plugins: [
      require('tw-elements/dist/plugin')
    ],
}
