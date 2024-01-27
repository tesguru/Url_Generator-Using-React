

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        // Add your custom colors here
        primary: '#4ECCA3', // Example primary color
        dark: '#232931', // Example secondary color
        white: '#F4F4F4', // Corrected color value with quotes
        Cyan: 'hsl(180, 66%, 49%)', // Added quotes around the value
        darkviolet: 'hsl(257, 27%, 26%)', // Added quotes around the value
        Red: 'hsl(0, 87%, 67%)', // Added quotes around the value
        // Neutral colors
        gray: 'hsl(0, 0%, 75%)', // Added quotes around the value
        grayishviolet: 'hsl(257, 7%, 63%)', // Added quotes around the value
        VeryDarkBlue: 'hsl(255, 11%, 22%)', // Added quotes around the value
        VeryDarkViolet: 'hsl(260, 8%, 14%)', // Added quotes around the value
      },
    },
  },
  plugins: [],
};

