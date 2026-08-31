import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#060b14',
          50: '#1a2642',
          100: '#111a2e',
          200: '#0c1222',
          300: '#060b14',
        },
        gold: {
          DEFAULT: '#c9a84c',
          light: '#d4b76a',
          lighter: '#e8cfa0',
          glow: 'rgba(201,168,76,0.15)',
        },
        teal: {
          DEFAULT: '#0d9488',
          light: '#14b8a6',
          glow: 'rgba(13,148,136,0.12)',
        },
        cream: '#f5f0e8',
        sand: '#d4c5a9',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        display: ['var(--font-playfair)', 'Playfair Display', 'serif'],
        cairo: ['var(--font-cairo)', 'Cairo', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #c9a84c 0%, #d4b76a 50%, #e8cfa0 100%)',
        'teal-gradient': 'linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)',
        'midnight-gradient': 'linear-gradient(180deg, #060b14 0%, #0c1222 50%, #111a2e 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
