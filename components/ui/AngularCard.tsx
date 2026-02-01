'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface AngularCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  clipSize?: 'sm' | 'md' | 'lg'
  as?: 'div' | 'article' | 'section'
}

const clipSizes = {
  sm: 'polygon(12px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 12px)',
  md: 'polygon(20px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 20px)',
  lg: 'polygon(28px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 28px)',
}

export function AngularCard({
  children,
  className = '',
  hover = true,
  clipSize = 'md',
  as = 'div',
}: AngularCardProps) {
  const Component = motion[as]

  return (
    <Component
      className={`
        bg-navy-800 border border-navy-600
        transition-all duration-300
        ${hover ? 'hover:border-gold-500 hover:shadow-gold-glow' : ''}
        ${className}
      `}
      style={{
        clipPath: clipSizes[clipSize],
      }}
      whileHover={hover ? { y: -5 } : undefined}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {children}
    </Component>
  )
}

// Static version without animations for SSR or reduced motion
export function AngularCardStatic({
  children,
  className = '',
  clipSize = 'md',
}: Omit<AngularCardProps, 'hover' | 'as'>) {
  return (
    <div
      className={`
        bg-navy-800 border border-navy-600
        transition-all duration-300
        hover:border-gold-500 hover:shadow-gold-glow
        ${className}
      `}
      style={{
        clipPath: clipSizes[clipSize],
      }}
    >
      {children}
    </div>
  )
}

export default AngularCard
