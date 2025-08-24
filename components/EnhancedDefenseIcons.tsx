'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

interface EnhancedIconProps {
  size?: number
  className?: string
  interactive?: boolean
}

// Enhanced Tank Icon with subtle 3D depth
export const EnhancedTankIcon = ({ size = 200, className = "", interactive = true }: EnhancedIconProps) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  
  useGSAP(() => {
    if (!svgRef.current) return
    
    // Smooth turret rotation
    gsap.to(".tank-turret", {
      rotation: 15,
      duration: 4,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      transformOrigin: "50% 80%"
    })
    
    // Subtle float animation
    gsap.to(".tank-body", {
      y: -2,
      duration: 3,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    })
  }, { scope: svgRef })
  
  return (
    <div className="relative inline-block" style={{ filter: 'drop-shadow(0 20px 40px rgba(251, 191, 36, 0.3))' }}>
      <svg 
        ref={svgRef}
        width={size} 
        height={size} 
        viewBox="0 0 200 200" 
        className={`${className} transition-transform duration-300 ${isHovered ? 'scale-105' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: isHovered ? 'perspective(800px) rotateX(-5deg) rotateY(5deg)' : 'perspective(800px) rotateX(0deg) rotateY(0deg)',
        }}
      >
        <defs>
          <linearGradient id="tankGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.9"/>
            <stop offset="100%" stopColor="#047857" stopOpacity="0.9"/>
          </linearGradient>
          <filter id="tankGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Tank Body with depth */}
        <g className="tank-body">
          <rect x="40" y="100" width="120" height="40" rx="5" fill="url(#tankGradient)" filter="url(#tankGlow)"/>
          <rect x="35" y="110" width="130" height="10" fill="#065f46" opacity="0.8"/>
          
          {/* Tracks with depth */}
          <rect x="30" y="130" width="140" height="20" rx="10" fill="#064e3b" strokeWidth="2" stroke="#10b981"/>
          <rect x="30" y="135" width="140" height="3" fill="#10b981" opacity="0.5"/>
          
          {/* Wheels */}
          {[50, 80, 110, 140].map((x, i) => (
            <circle key={i} cx={x} cy={140} r="8" fill="#047857" stroke="#10b981" strokeWidth="1"/>
          ))}
        </g>
        
        {/* Turret with depth */}
        <g className="tank-turret">
          <rect x="70" y="80" width="60" height="30" rx="3" fill="url(#tankGradient)" filter="url(#tankGlow)"/>
          <rect x="70" y="85" width="60" height="3" fill="#10b981" opacity="0.5"/>
          
          {/* Cannon with 3D effect */}
          <rect x="120" y="90" width="50" height="8" fill="#065f46"/>
          <rect x="120" y="90" width="50" height="2" fill="#10b981" opacity="0.6"/>
          <rect x="165" y="89" width="10" height="10" rx="2" fill="#047857"/>
        </g>
        
        {/* Details */}
        <circle cx="85" cy="95" r="4" fill="#10b981" opacity="0.8"/>
        <rect x="50" y="115" width="15" height="8" rx="1" fill="#10b981" opacity="0.6"/>
        <rect x="70" y="115" width="15" height="8" rx="1" fill="#10b981" opacity="0.6"/>
      </svg>
    </div>
  )
}

// Enhanced Ship Icon with subtle 3D depth
export const EnhancedShipIcon = ({ size = 200, className = "", interactive = true }: EnhancedIconProps) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  
  useGSAP(() => {
    if (!svgRef.current) return
    
    // Wave motion
    gsap.to(".ship-body", {
      rotation: 2,
      y: -3,
      duration: 3,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
      transformOrigin: "50% 70%"
    })
    
    // Radar rotation
    gsap.to(".ship-radar", {
      rotation: 360,
      duration: 4,
      ease: "none",
      repeat: -1,
      transformOrigin: "50% 50%"
    })
  }, { scope: svgRef })
  
  return (
    <div className="relative inline-block" style={{ filter: 'drop-shadow(0 20px 40px rgba(59, 130, 246, 0.3))' }}>
      <svg 
        ref={svgRef}
        width={size} 
        height={size} 
        viewBox="0 0 200 200" 
        className={`${className} transition-transform duration-300 ${isHovered ? 'scale-105' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: isHovered ? 'perspective(800px) rotateX(-5deg) rotateY(-5deg)' : 'perspective(800px) rotateX(0deg) rotateY(0deg)',
        }}
      >
        <defs>
          <linearGradient id="shipGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9"/>
            <stop offset="100%" stopColor="#1e40af" stopOpacity="0.9"/>
          </linearGradient>
          <filter id="shipGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Ship Hull with depth */}
        <g className="ship-body">
          <path d="M 30 120 L 50 140 L 150 140 L 170 120 L 160 110 L 40 110 Z" 
                fill="url(#shipGradient)" filter="url(#shipGlow)"/>
          <path d="M 30 120 L 50 140 L 150 140 L 170 120" 
                fill="#1e3a8a" opacity="0.5"/>
          
          {/* Superstructure */}
          <rect x="70" y="90" width="60" height="30" rx="2" fill="url(#shipGradient)"/>
          <rect x="70" y="90" width="60" height="3" fill="#60a5fa" opacity="0.7"/>
          
          {/* Bridge */}
          <rect x="85" y="70" width="30" height="25" rx="2" fill="#2563eb"/>
          <rect x="85" y="70" width="30" height="3" fill="#60a5fa" opacity="0.7"/>
          
          {/* Windows */}
          <rect x="90" y="76" width="20" height="8" rx="1" fill="#60a5fa" opacity="0.8"/>
        </g>
        
        {/* Radar */}
        <g className="ship-radar">
          <circle cx="100" cy="60" r="3" fill="#3b82f6"/>
          <rect x="99" y="60" width="2" height="10" fill="#3b82f6"/>
          <path d="M 95 60 L 105 60" stroke="#60a5fa" strokeWidth="1" opacity="0.8"/>
        </g>
        
        {/* Details */}
        <circle cx="80" cy="100" r="3" fill="#60a5fa" opacity="0.7"/>
        <circle cx="100" cy="100" r="3" fill="#60a5fa" opacity="0.7"/>
        <circle cx="120" cy="100" r="3" fill="#60a5fa" opacity="0.7"/>
      </svg>
    </div>
  )
}

// Enhanced Fighter Jet Icon with detailed design
export const EnhancedJetIcon = ({ size = 200, className = "", interactive = true }: EnhancedIconProps) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  
  useGSAP(() => {
    if (!svgRef.current) return
    
    // Banking motion
    gsap.to(".fighter-body", {
      rotation: 3,
      duration: 4,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      transformOrigin: "50% 50%"
    })
    
    // Afterburner pulse
    gsap.to(".afterburner", {
      scale: 1.3,
      opacity: 1,
      duration: 0.3,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true
    })
    
    // Vapor trails
    gsap.to(".vapor-trail", {
      opacity: 0,
      x: -20,
      duration: 1,
      ease: "power2.out",
      repeat: -1,
      stagger: 0.2
    })
  }, { scope: svgRef })
  
  return (
    <div className="relative inline-block" style={{ filter: 'drop-shadow(0 20px 40px rgba(14, 165, 233, 0.3))' }}>
      <svg 
        ref={svgRef}
        width={size} 
        height={size} 
        viewBox="0 0 200 200" 
        className={`${className} transition-transform duration-300 ${isHovered ? 'scale-105' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: isHovered ? 'perspective(800px) rotateX(-10deg) rotateY(10deg)' : 'perspective(800px) rotateX(0deg) rotateY(0deg)',
        }}
      >
        <defs>
          <linearGradient id="jetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.9"/>
            <stop offset="100%" stopColor="#0369a1" stopOpacity="0.9"/>
          </linearGradient>
          <linearGradient id="cockpitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9"/>
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.9"/>
          </linearGradient>
          <filter id="jetGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Fighter Jet Body */}
        <g className="fighter-body">
          {/* Main Fuselage */}
          <path d="M 170 100 L 150 95 L 120 93 L 70 93 L 30 100 L 70 107 L 120 107 L 150 105 Z" 
                fill="url(#jetGradient)" filter="url(#jetGlow)"/>
          
          {/* Fuselage Top Detail */}
          <path d="M 170 100 L 150 95 L 120 93 L 70 93 L 30 100" 
                fill="#0ea5e9" opacity="0.6"/>
          
          {/* Cockpit Canopy */}
          <path d="M 140 100 L 135 92 L 120 90 L 110 90 L 105 92 L 105 100 L 110 102 L 120 102 L 135 100 Z" 
                fill="url(#cockpitGradient)" opacity="0.9"/>
          <path d="M 135 95 L 130 93 L 115 93 L 110 95" 
                stroke="#7dd3fc" strokeWidth="0.5" fill="none" opacity="0.8"/>
          
          {/* Main Wings */}
          <path d="M 100 95 L 60 60 L 55 65 L 55 75 L 70 95 Z" 
                fill="url(#jetGradient)" filter="url(#jetGlow)"/>
          <path d="M 100 105 L 60 140 L 55 135 L 55 125 L 70 105 Z" 
                fill="url(#jetGradient)" filter="url(#jetGlow)"/>
          
          {/* Wing Details */}
          <path d="M 100 95 L 60 60 L 55 65 L 55 75 L 70 95 Z" 
                fill="#38bdf8" opacity="0.2"/>
          <path d="M 100 105 L 60 140 L 55 135 L 55 125 L 70 105 Z" 
                fill="#0369a1" opacity="0.2"/>
          
          {/* Tail Wings (Stabilizers) */}
          <path d="M 40 95 L 25 75 L 20 78 L 20 85 L 30 95 Z" 
                fill="#0369a1" opacity="0.9"/>
          <path d="M 40 105 L 25 125 L 20 122 L 20 115 L 30 105 Z" 
                fill="#0369a1" opacity="0.9"/>
          
          {/* Vertical Stabilizer */}
          <path d="M 35 100 L 25 85 L 20 85 L 20 100 L 35 100 Z" 
                fill="#0284c7" opacity="0.8"/>
          
          {/* Engine Intakes */}
          <rect x="75" y="96" width="20" height="8" rx="2" fill="#0369a1" opacity="0.7"/>
          <rect x="75" y="96" width="20" height="2" fill="#0ea5e9" opacity="0.5"/>
          
          {/* Nose Cone */}
          <path d="M 170 100 L 175 99 L 175 101 Z" fill="#0369a1"/>
          
          {/* Wing Missiles */}
          <rect x="65" y="75" width="8" height="2" rx="1" fill="#dc2626" opacity="0.8"/>
          <rect x="65" y="123" width="8" height="2" rx="1" fill="#dc2626" opacity="0.8"/>
        </g>
        
        {/* Afterburner Effects */}
        <g className="afterburner">
          <ellipse cx="30" cy="100" rx="12" ry="6" fill="#f97316" opacity="0.7"/>
          <ellipse cx="28" cy="100" rx="8" ry="4" fill="#fbbf24" opacity="0.9"/>
          <ellipse cx="26" cy="100" rx="4" ry="2" fill="#fef3c7"/>
        </g>
        
        {/* Vapor Trails */}
        <g className="vapor-trails">
          <ellipse cx="50" cy="95" rx="8" ry="2" fill="#e0f2fe" opacity="0.3" className="vapor-trail"/>
          <ellipse cx="50" cy="105" rx="8" ry="2" fill="#e0f2fe" opacity="0.3" className="vapor-trail"/>
        </g>
        
        {/* Panel Lines */}
        <line x1="140" y1="95" x2="140" y2="105" stroke="#0369a1" strokeWidth="0.5" opacity="0.4"/>
        <line x1="120" y1="93" x2="120" y2="107" stroke="#0369a1" strokeWidth="0.5" opacity="0.4"/>
        <line x1="100" y1="93" x2="100" y2="107" stroke="#0369a1" strokeWidth="0.5" opacity="0.4"/>
      </svg>
    </div>
  )
}

// Enhanced Radar Icon with subtle 3D depth
export const EnhancedRadarIcon = ({ size = 200, className = "", interactive = true }: EnhancedIconProps) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  
  useGSAP(() => {
    if (!svgRef.current) return
    
    // Radar sweep
    gsap.to(".radar-sweep", {
      rotation: 360,
      duration: 3,
      ease: "none",
      repeat: -1,
      transformOrigin: "50% 50%"
    })
    
    // Pulse rings
    gsap.to(".radar-pulse", {
      scale: 1.5,
      opacity: 0,
      duration: 2,
      ease: "power2.out",
      repeat: -1,
      stagger: 0.5
    })
  }, { scope: svgRef })
  
  return (
    <div className="relative inline-block" style={{ filter: 'drop-shadow(0 20px 40px rgba(168, 85, 247, 0.3))' }}>
      <svg 
        ref={svgRef}
        width={size} 
        height={size} 
        viewBox="0 0 200 200" 
        className={`${className} transition-transform duration-300 ${isHovered ? 'scale-105' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: isHovered ? 'perspective(800px) rotateX(-5deg) rotateY(-5deg)' : 'perspective(800px) rotateX(0deg) rotateY(0deg)',
        }}
      >
        <defs>
          <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.9"/>
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.9"/>
          </linearGradient>
          <filter id="radarGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Radar Dish with depth */}
        <ellipse cx="100" cy="80" rx="60" ry="20" fill="url(#radarGradient)" filter="url(#radarGlow)"/>
        <ellipse cx="100" cy="78" rx="60" ry="15" fill="#a855f7" opacity="0.5"/>
        
        {/* Support Structure */}
        <rect x="95" y="80" width="10" height="60" fill="#7c3aed"/>
        <rect x="95" y="80" width="10" height="3" fill="#c084fc" opacity="0.7"/>
        
        {/* Base */}
        <rect x="70" y="135" width="60" height="15" rx="2" fill="url(#radarGradient)"/>
        <rect x="70" y="135" width="60" height="3" fill="#c084fc" opacity="0.7"/>
        
        {/* Radar Sweep */}
        <g className="radar-sweep">
          <line x1="100" y1="80" x2="160" y2="80" stroke="#c084fc" strokeWidth="2" opacity="0.6"/>
          <circle cx="160" cy="80" r="3" fill="#e9d5ff" opacity="0.8"/>
        </g>
        
        {/* Pulse Rings */}
        <circle cx="100" cy="80" r="30" fill="none" stroke="#a855f7" strokeWidth="1" className="radar-pulse" opacity="0.5"/>
        <circle cx="100" cy="80" r="30" fill="none" stroke="#a855f7" strokeWidth="1" className="radar-pulse" opacity="0.5"/>
        
        {/* Center */}
        <circle cx="100" cy="80" r="5" fill="#e9d5ff" opacity="0.9"/>
      </svg>
    </div>
  )
}

// Enhanced Support Equipment Icon with subtle 3D depth
export const EnhancedSupportIcon = ({ size = 200, className = "", interactive = true }: EnhancedIconProps) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  
  useGSAP(() => {
    if (!svgRef.current) return
    
    // Crate lift animation
    gsap.to(".support-crate", {
      y: -5,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.2
    })
  }, { scope: svgRef })
  
  return (
    <div className="relative inline-block" style={{ filter: 'drop-shadow(0 20px 40px rgba(251, 146, 60, 0.3))' }}>
      <svg 
        ref={svgRef}
        width={size} 
        height={size} 
        viewBox="0 0 200 200" 
        className={`${className} transition-transform duration-300 ${isHovered ? 'scale-105' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: isHovered ? 'perspective(800px) rotateX(-5deg) rotateY(5deg)' : 'perspective(800px) rotateX(0deg) rotateY(0deg)',
        }}
      >
        <defs>
          <linearGradient id="supportGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fb923c" stopOpacity="0.9"/>
            <stop offset="100%" stopColor="#ea580c" stopOpacity="0.9"/>
          </linearGradient>
          <filter id="supportGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Supply Crates with depth */}
        <g className="support-crate">
          <rect x="40" y="90" width="40" height="40" rx="2" fill="url(#supportGradient)" filter="url(#supportGlow)"/>
          <rect x="40" y="90" width="40" height="3" fill="#fdba74" opacity="0.7"/>
          <rect x="47" y="100" width="26" height="2" fill="#fdba74" opacity="0.5"/>
          <rect x="47" y="110" width="26" height="2" fill="#fdba74" opacity="0.5"/>
        </g>
        
        <g className="support-crate">
          <rect x="90" y="90" width="40" height="40" rx="2" fill="url(#supportGradient)" filter="url(#supportGlow)"/>
          <rect x="90" y="90" width="40" height="3" fill="#fdba74" opacity="0.7"/>
          <rect x="97" y="100" width="26" height="2" fill="#fdba74" opacity="0.5"/>
          <rect x="97" y="110" width="26" height="2" fill="#fdba74" opacity="0.5"/>
        </g>
        
        <g className="support-crate">
          <rect x="65" y="60" width="40" height="40" rx="2" fill="#ea580c" filter="url(#supportGlow)"/>
          <rect x="65" y="60" width="40" height="3" fill="#fdba74" opacity="0.7"/>
          <rect x="72" y="70" width="26" height="2" fill="#fdba74" opacity="0.5"/>
          <rect x="72" y="80" width="26" height="2" fill="#fdba74" opacity="0.5"/>
        </g>
        
        {/* Medical Cross */}
        <rect x="140" y="85" width="30" height="30" rx="2" fill="#dc2626"/>
        <rect x="140" y="85" width="30" height="3" fill="#f87171" opacity="0.7"/>
        <rect x="152" y="95" width="6" height="15" fill="white"/>
        <rect x="147" y="100" width="16" height="5" fill="white"/>
      </svg>
    </div>
  )
}

// Enhanced Missile Icon with subtle 3D depth
export const EnhancedMissileIcon = ({ size = 200, className = "", interactive = true }: EnhancedIconProps) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  
  useGSAP(() => {
    if (!svgRef.current) return
    
    // Launch preparation
    gsap.to(".missile-body", {
      y: -3,
      duration: 2,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true
    })
    
    // Exhaust flame
    gsap.to(".missile-flame", {
      scaleY: 1.3,
      opacity: 1,
      duration: 0.3,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true
    })
  }, { scope: svgRef })
  
  return (
    <div className="relative inline-block" style={{ filter: 'drop-shadow(0 20px 40px rgba(239, 68, 68, 0.3))' }}>
      <svg 
        ref={svgRef}
        width={size} 
        height={size} 
        viewBox="0 0 200 200" 
        className={`${className} transition-transform duration-300 ${isHovered ? 'scale-105' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: isHovered ? 'perspective(800px) rotateX(-8deg) rotateY(-3deg)' : 'perspective(800px) rotateX(0deg) rotateY(0deg)',
        }}
      >
        <defs>
          <linearGradient id="missileGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.9"/>
            <stop offset="100%" stopColor="#dc2626" stopOpacity="0.9"/>
          </linearGradient>
          <filter id="missileGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Missile Body */}
        <g className="missile-body">
          {/* Main Body with depth */}
          <rect x="90" y="40" width="20" height="80" rx="10" fill="url(#missileGradient)" filter="url(#missileGlow)"/>
          <rect x="90" y="40" width="20" height="5" fill="#f87171" opacity="0.7"/>
          
          {/* Nose Cone */}
          <path d="M 90 40 L 100 20 L 110 40 Z" fill="#dc2626"/>
          <path d="M 90 40 L 100 20 L 110 40 Z" fill="#f87171" opacity="0.4"/>
          
          {/* Fins with 3D effect */}
          <path d="M 90 100 L 75 115 L 75 105 Z" fill="#991b1b"/>
          <path d="M 110 100 L 125 115 L 125 105 Z" fill="#991b1b"/>
          <path d="M 90 100 L 75 115 L 75 105 Z" fill="#ef4444" opacity="0.3"/>
          <path d="M 110 100 L 125 115 L 125 105 Z" fill="#ef4444" opacity="0.3"/>
          
          {/* Markings */}
          <rect x="92" y="60" width="16" height="3" fill="#f87171" opacity="0.6"/>
          <rect x="92" y="70" width="16" height="3" fill="#f87171" opacity="0.6"/>
        </g>
        
        {/* Exhaust Flame */}
        <g className="missile-flame">
          <ellipse cx="100" cy="125" rx="10" ry="15" fill="#fbbf24" opacity="0.7"/>
          <ellipse cx="100" cy="125" rx="6" ry="10" fill="#fb923c" opacity="0.9"/>
          <ellipse cx="100" cy="125" rx="3" ry="5" fill="#fef3c7"/>
        </g>
        
        {/* Launch Platform */}
        <rect x="70" y="140" width="60" height="10" rx="2" fill="#6b7280"/>
        <rect x="70" y="140" width="60" height="2" fill="#9ca3af" opacity="0.7"/>
      </svg>
    </div>
  )
}