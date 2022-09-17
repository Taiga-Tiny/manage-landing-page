/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
        bgWhite:'hsl(0deg 0% 99%)',
        brightRed: 'hsl(12,88%,59%)',
        Dark_Blue: 'hsl(228, 39%, 23%)',
        Dark_Grayish_Blue: 'hsl(227, 12%, 61%)',
        Very_Dark_Blue: 'hsl(233, 12%, 13%)',
        Very_Pale_Red: 'hsl(13, 100%, 96%)',
        Vary_Light_Gray:' hsl(0, 0%, 98%)',
      }
    },
  },
  plugins: [],
}
