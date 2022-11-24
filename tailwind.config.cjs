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
      primary: '#DE5745',
      secondary: '#2F75DE',
      tertiary: '#AFDE18',
      quaternary: '#749117',
      grey: '#cbd5e1'
    },
    textColor: {
      primary: '#AB2513',
      secondary: '#2F75DE',
      tertiary: '#cbd5e1',
      quaternary: '#ccd6f6',

    }
  },
  plugins: [],
}
