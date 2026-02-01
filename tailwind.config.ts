import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        // Steel & Gold Premium Edition - Navy Foundation
        navy: {
          950: '#050A14',
          900: '#0A1628',
          800: '#0F1D32',
          700: '#162544',
          600: '#1E3356',
          500: '#2D4A6F',
        },
        // Steel Gray Scale
        steel: {
          600: '#2D3748',
          500: '#4A5568',
          400: '#718096',
          300: '#A0AEC0',
          200: '#CBD5E0',
          100: '#E2E8F0',
          50: '#F7FAFC',
        },
        // Gold/Brass Accent
        gold: {
          700: '#7A5F23',
          600: '#92722A',
          500: '#C9A961',
          400: '#D4B978',
          300: '#E5D4A1',
          200: '#F0E6C8',
        },
      },
      backgroundImage: {
        'gradient-navy': 'linear-gradient(180deg, #050A14 0%, #0A1628 100%)',
        'gradient-gold': 'linear-gradient(135deg, #C9A961 0%, #E5D4A1 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(201, 169, 97, 0.15)',
        'gold-glow-lg': '0 0 30px rgba(201, 169, 97, 0.2)',
        'gold-button': '0 4px 14px rgba(201, 169, 97, 0.25)',
        'gold-button-hover': '0 6px 20px rgba(201, 169, 97, 0.35)',
      },
    },
  },
  plugins: [],
}
export default config
