// Animation presets for Framer Motion
// Used across all sections for consistent, professional animations

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
}

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const cardHover = {
  whileHover: { y: -5, transition: { duration: 0.3 } },
}

export const scaleOnHover = {
  whileHover: { scale: 1.02, transition: { duration: 0.3 } },
}

export const kenBurns = {
  animate: { scale: [1, 1.05, 1] },
  transition: { duration: 20, repeat: Infinity, ease: "linear" },
}

export const scrollIndicator = {
  animate: { y: [0, 10, 0] },
  transition: { duration: 1.5, repeat: Infinity },
}

// Utility to check for reduced motion preference
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Get animation props respecting user preferences
export const getAnimationProps = (animationProps: object) => {
  if (prefersReducedMotion()) return {}
  return animationProps
}
