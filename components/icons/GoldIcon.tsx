'use client'

import { LucideIcon } from 'lucide-react'

interface GoldIconProps {
  icon: LucideIcon
  size?: number
  className?: string
  strokeWidth?: number
}

export function GoldIcon({
  icon: Icon,
  size = 24,
  className = '',
  strokeWidth = 1.5,
}: GoldIconProps) {
  return (
    <Icon
      size={size}
      strokeWidth={strokeWidth}
      className={`text-gold-500 ${className}`}
    />
  )
}

// Variant with hover effect
export function GoldIconHover({
  icon: Icon,
  size = 24,
  className = '',
  strokeWidth = 1.5,
}: GoldIconProps) {
  return (
    <Icon
      size={size}
      strokeWidth={strokeWidth}
      className={`text-gold-500 hover:text-gold-400 transition-colors duration-200 ${className}`}
    />
  )
}

// Variant for larger display icons
export function GoldIconLarge({
  icon: Icon,
  size = 48,
  className = '',
  strokeWidth = 1.25,
}: GoldIconProps) {
  return (
    <Icon
      size={size}
      strokeWidth={strokeWidth}
      className={`text-gold-500 ${className}`}
    />
  )
}

// Icon with gold glow effect
export function GoldIconGlow({
  icon: Icon,
  size = 24,
  className = '',
  strokeWidth = 1.5,
}: GoldIconProps) {
  return (
    <Icon
      size={size}
      strokeWidth={strokeWidth}
      className={`text-gold-500 drop-shadow-[0_0_8px_rgba(201,169,97,0.5)] ${className}`}
    />
  )
}

export default GoldIcon
