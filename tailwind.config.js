/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#FAFAFC',
          50:  '#FFFFFF',
          100: '#F4F5F7',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
        },
        lime: {
          DEFAULT: '#059669',
          dim:    'rgba(5, 150, 105, 0.08)',
          glow:   'rgba(5, 150, 105, 0.20)',
          border: 'rgba(5, 150, 105, 0.25)',
          dark:   '#047857',
          muted:  '#10B981',
        },
        emerald: {
          DEFAULT: '#059669',
          light: '#10B981',
          dark: '#047857',
          dim: 'rgba(5, 150, 105, 0.08)',
        }
      },
      fontFamily: {
        sans: ['"Montserrat"', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        display: ['"Montserrat"', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      borderRadius: {
        '2xl': '18px',
        '3xl': '26px',
        '4xl': '34px',
      },
      boxShadow: {
        'apple-glass': '0 10px 30px -5px rgba(0,0,0,0.06), 0 1px 3px 0 rgba(0,0,0,0.04)',
        'apple-hover': '0 20px 40px -10px rgba(0,0,0,0.09), 0 2px 6px 0 rgba(0,0,0,0.04)',
        'lime-glow':   '0 0 40px -10px rgba(5,150,105,0.25)',
      },
      letterSpacing: {
        tightest: '-0.03em',
        tighter:  '-0.02em',
        tight:    '-0.01em',
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
