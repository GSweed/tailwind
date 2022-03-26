module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': '375px',
        // => @media (min-width: 375px) { ... }
        "lg":'1920px'
      },
      spacing: {
        '180px': '180px',
        '189px': '189px',
        '211px':'211px',
        '200px':'200px',
        '403px':'403px',
        '1080px':'1080px',
        '1920px':'1920px'

      },
      fontFamily:{
        MTDPalominoScript:"MTDPalominoScript, serif"
      }
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['64px', '86px'],
      xl: ['72px', '198px'],
    }
  },
  plugins: [],
}