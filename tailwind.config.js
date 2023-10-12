/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans'],
      },

      borderRadius: {
        photo: '3rem',
      },
    },
  },
  plugins: [],
}
