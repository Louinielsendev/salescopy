/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)']
      },
      scale: {
        '-100': '-1',
      },
      colors: {
        themecolor: '#9578EF',
        buttoncolor: '#434B8C'
  
      },
      backgroundImage: {
        footer: 'linear-gradient(to bottom right, transparent 49.7%, #9578EF 50%)'
      }
    },
  },
  plugins: [],
}

