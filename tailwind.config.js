/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          // primary: "#082826",
        //   'timber-green': {
        //     '50': '#f1fcf9',
        //     '100': '#d1f6ed',
        //     '200': '#a3ecdb',
        //     '300': '#6ddbc6',
        //     '400': '#3ec3ad',
        //     '500': '#25a794',
        //     '600': '#1b8678',
        //     '700': '#1a6b62',
        //     '800': '#195650',
        //     '900': '#194843',
        //     '950': '#082826',
        // },
        "primary": "#6fa8dc",
        'timber-green': {
          '50': '#e4f1fa',
          '100': '#c4def7',
          '200': '#a3cbf4',
          '300': '#82b8f0',
          '400': '#61a5ed',
          '500': '#4791d9',
          '600': '#3577c5',
          '700': '#2a64a4',
          '800': '#1e5283',
          '900': '#134261',
          '950': '#072f40',
      },
      
        
          // secondary: "#11141a",
          secondary: "#49a9ee",
        },
        screens: {
          'xs': '375px', 
          'sm': '640px', 
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px',
        },
      },
    },
    plugins: [],
  }
  