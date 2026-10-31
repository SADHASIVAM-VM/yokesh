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
          DEFAULT: '#000000',
          50:  '#050507',
          100: '#0A0B0E',
          200: '#111218',
          300: '#181A22',
          400: '#232530',
        },
        lime: {
          DEFAULT: '#A8FF3E',
          dim:    'rgba(168,255,62,0.12)',
          glow:   'rgba(168,255,62,0.25)',
          border: 'rgba(168,255,62,0.30)',
          dark:   '#7ACC2A',
          muted:  '#6AAD22',
        },
      },
      fontFamily: {
        sans: ['"Onest"', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        display: ['"Onest"', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '18px',
        '3xl': '26px',
        '4xl': '34px',
      },
      boxShadow: {
        'apple-glass': '0 20px 50px -15px rgba(0,0,0,0.8), inset 0 1px 1px 0 rgba(255,255,255,0.08)',
        'apple-hover': '0 30px 60px -15px rgba(0,0,0,0.9), inset 0 1px 1px 0 rgba(255,255,255,0.16)',
        'lime-glow':   '0 0 40px -10px rgba(168,255,62,0.35)',
      },
      letterSpacing: {
        tightest: '-0.035em',
        tighter:  '-0.025em',
        tight:    '-0.015em',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float':        'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}
