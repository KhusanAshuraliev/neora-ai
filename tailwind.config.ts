import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#020208',
        surface: '#07070f',
        'surface-2': '#0d0d1a',
        primary: '#7c3aed',
        'primary-light': '#a855f7',
        accent: '#22d3ee',
        'text-primary': '#f0efff',
        'text-secondary': '#8b8ba7',
        'text-muted': '#4a4a6a',
      },
      fontFamily: {
        display: ['var(--font-outfit)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease forwards',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
