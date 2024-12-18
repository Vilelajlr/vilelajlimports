/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          deepBlue: '#001F54',
        },
        secondary: {
          metallicGray: '#5A5A5A',
        },
        backgound: {
          matteBlack: '#0D1117',
          whiteBack: '#f1f1f1'
        },
        Accent: {
          neonPurple: '#8A2BE2',
        },
        text: {
          white: '#E6E6E6'
        }
        
      },

      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
        lato: ['"Lato"', 'sans-serif'],
        lora: ['"Lora"', 'serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
        openSans: ['"Open Sans"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

