/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f4f7ff',
          100: '#e6ecff',
          200: '#c7d3ff',
          300: '#9bafff',
          400: '#6e8aff',
          500: '#4166ff',
          600: '#214afd',
          700: '#1737d8',
          800: '#132ca8',
          900: '#101f74',
        },
        coal: {
          950: '#080b14',
          900: '#0b1021',
          800: '#131a33',
        },
      },
      backgroundImage: {
        'grid-glow': 'radial-gradient(circle at top left, rgba(65,102,255,0.35), transparent 45%), radial-gradient(circle at bottom right, rgba(20,20,40,0.6), transparent 55%)',
      },
      boxShadow: {
        glow: '0 30px 60px -15px rgba(17,24,39,0.5), inset 0 1px 0 0 rgba(255,255,255,0.05)',
      },
      keyframes: {
        'slide-up': {
          '0%': { opacity: 0, transform: 'translateY(100%)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-up': 'slide-up 0.5s ease-out',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.glass-card': {
          backgroundColor: 'rgba(13,17,23,0.9)',
          backdropFilter: 'blur(18px)',
          border: '1px solid rgba(255,255,255,0.08)',
        },
      })
    },
  ],
}
