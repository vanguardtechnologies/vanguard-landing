'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface ButtonProps {
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
}

interface ButtonLinkProps {
  children: ReactNode
  href: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
  external?: boolean
}

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

const clipPath = 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)'

export function ButtonPrimary({
  children,
  className = '',
  size = 'md',
  type = 'button',
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        ${sizes[size]}
        bg-gold-500 text-navy-900 font-semibold uppercase tracking-wider
        hover:bg-gold-400 transition-all duration-300
        shadow-gold-button hover:shadow-gold-button-hover
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      style={{ clipPath }}
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
    >
      {children}
    </motion.button>
  )
}

export function ButtonSecondary({
  children,
  className = '',
  size = 'md',
  type = 'button',
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        ${sizes[size]}
        bg-transparent border-2 border-gold-500 text-gold-500 font-semibold uppercase tracking-wider
        hover:bg-gold-500/10 hover:text-gold-400 transition-all duration-300
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      style={{ clipPath }}
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
    >
      {children}
    </motion.button>
  )
}

export function ButtonPrimaryLink({
  children,
  href,
  className = '',
  size = 'md',
  external = false,
}: ButtonLinkProps) {
  const linkClasses = `
    inline-flex items-center justify-center
    ${sizes[size]}
    bg-gold-500 text-navy-900 font-semibold uppercase tracking-wider
    hover:bg-gold-400 transition-all duration-300
    shadow-gold-button hover:shadow-gold-button-hover
    ${className}
  `

  if (external) {
    return (
      <a
        href={href}
        className={linkClasses}
        style={{ clipPath }}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={linkClasses} style={{ clipPath }}>
      {children}
    </Link>
  )
}

export function ButtonSecondaryLink({
  children,
  href,
  className = '',
  size = 'md',
  external = false,
}: ButtonLinkProps) {
  const linkClasses = `
    inline-flex items-center justify-center
    ${sizes[size]}
    bg-transparent border-2 border-gold-500 text-gold-500 font-semibold uppercase tracking-wider
    hover:bg-gold-500/10 hover:text-gold-400 transition-all duration-300
    ${className}
  `

  if (external) {
    return (
      <a
        href={href}
        className={linkClasses}
        style={{ clipPath }}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={linkClasses} style={{ clipPath }}>
      {children}
    </Link>
  )
}

export default ButtonPrimary
