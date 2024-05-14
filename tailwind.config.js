/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#cc4b04',
        'primary-content': '#fee1d1',
        'primary-dark': '#9a3903',
        'primary-light': '#fa5e09',

        secondary: '#04cc4b',
        'secondary-content': '#000000',
        'secondary-dark': '#039a39',
        'secondary-light': '#09fa5e',

        background: '#f2efed',
        foreground: '#fcfbfb',
        border: '#e4deda',

        copy: '#2c2521',
        'copy-light': '#756257',
        'copy-lighter': '#9d877b',

        success: '#04cc04',
        warning: '#cccc04',
        error: '#cc0404',

        'success-content': '#d1fed1',
        'warning-content': '#000000',
        'error-content': '#fed1d1'
      }
    }
  },
  plugins: []
}
