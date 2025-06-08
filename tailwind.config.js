module.exports = {
  content: [
    './components/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './nuxt.config.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sangBleu: ['"SangBleu Versailles"', 'serif'],
      },
      colors: {
        primary: '#0E3230',
        secondary: '#F8F4EC',
      },
      fontSize: {
        h1: ['64px', { lineHeight: '1.2' }],
        h2: ['40px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        body: ['18px', { lineHeight: '1.6', letterSpacing: '0em' }],
        'h1-sm': ['40px', {
          lineHeight: '1.2',          // 120%
          letterSpacing: '-0.02em'    // -2%
        }],
        'h2-sm': ['28px', {
          lineHeight: '1.2',          // 120%
          letterSpacing: '-0.02em'    // -2%
        }],
        'body-sm': ['18px', {
          lineHeight: '1.6',          // 160%
          letterSpacing: '0em'        // 0%
        }],
      },
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
