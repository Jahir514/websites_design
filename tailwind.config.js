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
        primary: '#f4a51c',
        primaryDark: '#DE961A',
        textColor: '#767676',
        titleColor: '#242424',
        linkColor: '#333333',
        header: '#092143',
        successColor: '#459647',
        btnBgColor: '#f7f7f7',
        btnhoverColor: '#efefef',
      },
      fontSize: {
        small: '12px',
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
        lato: 'Lato, sans-serif',
        cabin: 'Cabin',
      },
    },
  },
  plugins: [],
}
