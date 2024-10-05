/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '991px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: '#ff6b6b',
        secondary: '#794afa',
        secondaryDark: '#453c5c',
        lightBg: '#f2f3f5',
        lightText: '#7c899a',
        border: '#e5e8ec',
        dark: '#0a021c',
      },
      fontSize: {
        small: '13px',
        smaller: '11px',
      },
      fontWeight: {
        fw3: '300',
        fw5: '500',
        fw6: '600',
        fw7: '700',
        fw8: '800',
      },
      fontFamily: {
        rubik: 'Rubik, sans-serif',
        poppins: 'Poppins',
      },
    },
  },
  plugins: [],
}
