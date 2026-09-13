/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: '#fef7f3',
          100: '#fdeee5',
          200: '#fad8c4',
          300: '#f5b898',
          400: '#ef8a5e',
          500: '#C34A2C',
          600: '#a83d24',
          700: '#8c311e',
          800: '#6d281a',
          900: '#4e1f15',
        },
        maroon: {
          50: '#fdf5f3',
          100: '#f9e6e1',
          200: '#f3ccc3',
          300: '#e9a898',
          400: '#dc7a63',
          500: '#C34A2C',
          600: '#b03e22',
          700: '#93331c',
          800: '#7a2c1b',
          900: '#66291d',
        },
        cream: {
          50: '#FFFDF7',
          100: '#FFF9E8',
          200: '#FFF3D1',
          300: '#FFECBA',
          400: '#FFE5A3',
          500: '#F5E6C8',
        },
        gold: {
          50: '#FFF9E6',
          100: '#FFF0BF',
          200: '#FFE699',
          300: '#FFD966',
          400: '#DAA520',
          500: '#C4951A',
          600: '#A07816',
          700: '#7D5C11',
          800: '#5A410D',
          900: '#372808',
        },
      },
      fontFamily: {
        sans: ['"Droid Sans"', 'Arial', 'system-ui', 'sans-serif'],
        serif: ['Raleway', '"Droid Sans"', 'Arial', 'sans-serif'],
        banner: ['Raleway', '"Droid Sans"', 'Arial', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
