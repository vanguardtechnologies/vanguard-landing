// Steel & Gold Premium Edition - Animation Presets
// Framer Motion animation variants for consistent animations

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
}

export const fadeInUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.4, ease: 'easeOut' },
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

export const cardHover = {
  whileHover: {
    y: -5,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
}

export const goldGlow = {
  whileHover: {
    boxShadow: '0 0 30px rgba(201, 169, 97, 0.2)',
  },
}

export const scaleOnHover = {
  whileHover: { scale: 1.02, transition: { duration: 0.3 } },
}

export const scaleUp = {
  initial: { scale: 0.95, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.3, ease: 'easeOut' },
}

export const slideInLeft = {
  initial: { x: -50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5, ease: 'easeOut' },
}

export const slideInRight = {
  initial: { x: 50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5, ease: 'easeOut' },
}

export const kenBurns = {
  animate: { scale: [1, 1.05, 1] },
  transition: { duration: 20, repeat: Infinity, ease: "linear" },
}

export const scrollIndicator = {
  animate: { y: [0, 10, 0] },
  transition: { duration: 1.5, repeat: Infinity },
}

// Page transition variants
export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
}

// Mobile menu animation
export const mobileMenuContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
}

export const mobileMenuItem = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: 'easeOut' as const },
  },
}

// Gold accent animations
export const goldPulse = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(201, 169, 97, 0.15)',
      '0 0 30px rgba(201, 169, 97, 0.25)',
      '0 0 20px rgba(201, 169, 97, 0.15)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Button hover animation
export const buttonHover = {
  whileHover: {
    scale: 1.02,
    transition: { duration: 0.2 },
  },
  whileTap: {
    scale: 0.98,
  },
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
