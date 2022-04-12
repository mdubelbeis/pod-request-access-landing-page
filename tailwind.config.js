module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    fontFamily: {
      'chivo-light': ['Chivo', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'mobile-pattern': "url('/dist/mobile/image-host.jpg')",
        'tablet-pattern': "url('./assets/tablet/image-host.jpg')",
        'desktop-pattern': "url('./assets/desktop/image-host.jpg')",
        'dot-pattern': "url('./assets/desktop/bg-pattern-dots.svg')",
      },
      colors: {
        'mint-green': '#54E6AF',
        'mint-green-light': '#B3FFE2',
        'dark-blue-grey': '#2C344B',
        'light-blue-grey': '#5A668A',
        'grey-smoke': '#C3CBE5',
        'dark-blue': '#121725',
        'pure-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
};
