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
        // Military/Defense Color Palette
        'military-green': 'var(--military-green)',
        'military-dark-green': 'var(--military-dark-green)',
        'naval-blue': 'var(--naval-blue)',
        'air-force-blue': 'var(--air-force-blue)',
        'army-tan': 'var(--army-tan)',
        'military-sand': 'var(--military-sand)',
        'battleship-gray': 'var(--battleship-gray)',
        'charcoal': 'var(--charcoal)',
        'alert-red': 'var(--alert-red)',
        'medal-gold': 'var(--medal-gold)',
        'steel-gray': 'var(--steel-gray)',
      },
      backgroundImage: {
        'gradient-military': 'var(--gradient-military)',
        'gradient-naval': 'var(--gradient-naval)',
        'gradient-tactical': 'var(--gradient-tactical)',
      },
    },
  },
  plugins: [],
}
export default config