'use client'

import { Handshake, ClipboardCheck, Send, Headphones } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

interface ProcessIconProps {
  size?: number
  className?: string
}

// Initial Consultation - Handshake
export const ConsultationIcon = ({ size = 100, className = "" }: ProcessIconProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useGSAP(() => {
    if (!containerRef.current) return
    
    // Handshake motion
    gsap.to(containerRef.current, {
      rotation: 5,
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
        filter: 'drop-shadow(0 10px 25px rgba(59, 130, 246, 0.3))'
      }}
    >
      {/* Background circle with gradient */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-700/20 blur-xl" />
      
      {/* Icon container */}
      <div className="relative z-10 text-blue-400 transition-all duration-300 hover:scale-110">
        <Handshake size={size * 0.6} strokeWidth={1.5} />
      </div>
      
      {/* Pulse effect */}
      <div className="absolute inset-0 rounded-full bg-blue-500/10 animate-pulse" />
    </div>
  )
}

// Document Preparation - ClipboardCheck
export const PreparationIcon = ({ size = 100, className = "" }: ProcessIconProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useGSAP(() => {
    if (!containerRef.current) return
    
    // Check mark animation
    gsap.to(".check-mark", {
      scale: 1.2,
      duration: 1.5,
      ease: "power2.inOut",
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
      <div className="relative z-10 text-green-400 transition-all duration-300 hover:scale-110 check-mark">
        <ClipboardCheck size={size * 0.6} strokeWidth={1.5} />
      </div>
      
      {/* Pulse effect */}
      <div className="absolute inset-0 rounded-full bg-green-500/10 animate-pulse" />
    </div>
  )
}

// DGDP Submission - Send
export const SubmissionIcon = ({ size = 100, className = "" }: ProcessIconProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useGSAP(() => {
    if (!containerRef.current) return
    
    // Send animation
    gsap.to(containerRef.current, {
      x: 5,
      y: -5,
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
        <Send size={size * 0.6} strokeWidth={1.5} />
      </div>
      
      {/* Pulse effect */}
      <div className="absolute inset-0 rounded-full bg-purple-500/10 animate-pulse" />
    </div>
  )
}

// Ongoing Support - Headphones
export const SupportIcon = ({ size = 100, className = "" }: ProcessIconProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useGSAP(() => {
    if (!containerRef.current) return
    
    // Support animation
    gsap.to(containerRef.current, {
      scale: 1.05,
      duration: 1.5,
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
        <Headphones size={size * 0.6} strokeWidth={1.5} />
      </div>
      
      {/* Pulse effect */}
      <div className="absolute inset-0 rounded-full bg-orange-500/10 animate-pulse" />
    </div>
  )
}