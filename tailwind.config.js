/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        offwhite: '#D9D9D9',
        black:"#313131",
        yellow:"#fdd201",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
    extend: {
      backgroundImage: {
        logo: "url('../public/logo.png')",
        concert: "url('../public/concert.jpg')",
        crowd: "url('../public/background.webp')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
