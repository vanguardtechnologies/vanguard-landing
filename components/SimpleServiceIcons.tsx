'use client'

import { MapPin, FileText, Users, TrendingUp } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

interface ServiceIconProps {
  size?: number
  className?: string
}

// Local Representation - Office Building with MapPin
export const SimpleOfficeIcon = ({ size = 100, className = "" }: ServiceIconProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useGSAP(() => {
    if (!containerRef.current) return
    
    // Floating animation
    gsap.to(containerRef.current, {
      y: -5,
      duration: 3,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    })
  }, { scope: containerRef })
  
  return (
    <div 
      ref={containerRef}
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ 
        width: size, 
        height: size,
        filter: 'drop-shadow(0 10px 25px rgba(59, 130, 246, 0.3))'
      }}
    >
      {/* Background circle with gradient */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-700/20 blur-xl" />
      
      {/* Icon container */}
      <div className="relative z-10 text-blue-400 transition-all duration-300 hover:scale-110">
        <MapPin size={size * 0.6} strokeWidth={1.5} />
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-blue-500/10 animate-pulse" />
    </div>
  )
}

// Documentation Support - Document with check
export const SimpleDocumentIcon = ({ size = 100, className = "" }: ServiceIconProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useGSAP(() => {
    if (!containerRef.current) return
    
    // Gentle rotation
    gsap.to(containerRef.current, {
      rotation: 3,
      duration: 4,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    })
  }, { scope: containerRef })
  
  return (
    <div 
      ref={containerRef}
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ 
        width: size, 
        height: size,
        filter: 'drop-shadow(0 10px 25px rgba(34, 197, 94, 0.3))'
      }}
    >
      {/* Background circle with gradient */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-500/20 to-green-700/20 blur-xl" />
      
      {/* Icon container */}
      <div className="relative z-10 text-green-400 transition-all duration-300 hover:scale-110">
        <FileText size={size * 0.6} strokeWidth={1.5} />
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-green-500/10 animate-pulse" />
    </div>
  )
}

// Industry Liaison - Network of people
export const SimpleNetworkIcon = ({ size = 100, className = "" }: ServiceIconProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useGSAP(() => {
    if (!containerRef.current) return
    
    // Pulse effect
    gsap.to(containerRef.current, {
      scale: 1.05,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    })
  }, { scope: containerRef })
  
  return (
    <div 
      ref={containerRef}
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ 
        width: size, 
        height: size,
        filter: 'drop-shadow(0 10px 25px rgba(168, 85, 247, 0.3))'
      }}
    >
      {/* Background circle with gradient */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-700/20 blur-xl" />
      
      {/* Icon container */}
      <div className="relative z-10 text-purple-400 transition-all duration-300 hover:scale-110">
        <Users size={size * 0.6} strokeWidth={1.5} />
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-purple-500/10 animate-pulse" />
    </div>
  )
}

// Market Intelligence - Data trending up
export const SimpleDataIcon = ({ size = 100, className = "" }: ServiceIconProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useGSAP(() => {
    if (!containerRef.current) return
    
    // Rising animation
    gsap.to(containerRef.current, {
      y: -8,
      x: 3,
      duration: 3,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    })
  }, { scope: containerRef })
  
  return (
    <div 
      ref={containerRef}
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ 
        width: size, 
        height: size,
        filter: 'drop-shadow(0 10px 25px rgba(251, 146, 60, 0.3))'
      }}
    >
      {/* Background circle with gradient */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-700/20 blur-xl" />
      
      {/* Icon container */}
      <div className="relative z-10 text-orange-400 transition-all duration-300 hover:scale-110">
        <TrendingUp size={size * 0.6} strokeWidth={1.5} />
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-orange-500/10 animate-pulse" />
    </div>
  )
}