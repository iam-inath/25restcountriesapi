/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['30px', '34px'],
      '4xl': ['36px', '40px'],
      '5xl': ['48px', '52px'],
      '6xl': ['60px', '64px'],
      '7xl': ['72px', '76px'],
      '8xl': ['96px', '100px'],
      '9xl': ['128px', '132px'],
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        darkBlue: 'hsl(209, 23%, 22%)', //Dark Mode Elements
        veryDarkBlueBg: 'hsl(200, 15%, 8%)', //Dark Mode Background
        veryDarkBlueTxt: 'hsl(207, 26%, 17%)', //Light Mode Text
        darkGray: 'hsl(0, 0%, 52%)', //Light Mode Input
        veryLightGray: 'hsl(0, 0%, 98%)', //Light Mode Background
        white: 'hsl(0, 0%, 100%)', // Dark Mode Text & Light Mode Elements
      },
      boxShadow: {
        lightShadow: '0 1px 40px rgba(0, 0, 0, 0.1)',
        lightShadowOne: '0 5px 20px rgba(0, 0, 0, 0.1)',
        lightShadowTwo: '0 15px 60px rgba(0, 0, 0, 0.2)',
        lightShadowThree: '0 0 60px rgba(0, 0, 0, 0.05)',

        darkShadow: '0 1px 40px rgba(255, 255, 255, 0.1)',
        darkShadowOne: '0 5px 20px rgba(255, 255, 255, 0.1)',
        darkShadowTwo: '0 15px 60px rgba(255, 255, 255, 0.2)',
        darkShadowThree: '0 0 60px rgba(255, 255, 255, 0.05)',
      },

      backgroundImage: {
        hero: "url('assets/images/collection-background.svg')",
        card: "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        wide: '1440px',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
