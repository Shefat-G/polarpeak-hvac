import type { Config } from 'tailwindcss';

/**
 * PolarPeak HVAC design tokens.
 *
 * primary.800 / accent.500 are the exact brand colours from the client brief
 * (#1E3A5F and #F97316); the surrounding shades are the tonal scale used for
 * hover states, tints and the darker gradients.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A5F',
          50: '#F2F6FA',
          100: '#E4EBF4',
          200: '#C6D5E7',
          300: '#9BB5D2',
          400: '#6A8DB5',
          500: '#476C95',
          600: '#345479',
          700: '#294668',
          800: '#1E3A5F',
          900: '#17304F',
          950: '#0E1F35',
        },
        accent: {
          DEFAULT: '#F97316',
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
        },
      },
      fontFamily: {
        sans: [
          'var(--font-inter)',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        card: '0 14px 34px -18px rgba(23, 48, 79, 0.35)',
        'card-lg': '0 28px 55px -22px rgba(23, 48, 79, 0.45)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
