/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#0A0A0A',
          50:  '#0F0F0F',
          100: '#141414',
          200: '#1A1A1A',
          300: '#222222',
          400: '#2A2A2A',
        },
        lime: {
          DEFAULT: '#A8FF3E',
          dim:    'rgba(168,255,62,0.12)',
          glow:   'rgba(168,255,62,0.25)',
          border: 'rgba(168,255,62,0.30)',
          dark:   '#7ACC2A',
          muted:  '#6AAD22',
        },
        ink: {
          DEFAULT: '#FFFFFF',
          muted:   '#8A8A8A',
          faint:   '#555555',
          border:  'rgba(255,255,255,0.08)',
          border2: 'rgba(255,255,255,0.12)',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        'lime-sm':  '0 0 20px rgba(168,255,62,0.15)',
        'lime-md':  '0 0 40px rgba(168,255,62,0.20)',
        'lime-lg':  '0 0 80px rgba(168,255,62,0.18)',
        'card':     '0 1px 3px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06)',
        'card-hover': '0 4px 20px rgba(0,0,0,0.5), 0 0 0 1px rgba(168,255,62,0.25)',
      },
      animation: {
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'float':      'float 6s ease-in-out infinite',
        'spin-slow':  'spin 20s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%,100%': { opacity: '0.6' },
          '50%':     { opacity: '1.0' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
