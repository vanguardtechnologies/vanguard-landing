'use client'

import React, { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Dynamic imports for client-side only rendering
const GlobeComponent = dynamic(
  () => import('./GlobeComponent'),
  {
    ssr: false,
    loading: () => (
      <div className="h-[900px] bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-amber-400 text-lg font-bold uppercase tracking-wider">Loading Defence Network</p>
        </div>
      </div>
    )
  }
)

export default function DefenseGlobe() {
  const [isGlobeVisible, setIsGlobeVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsGlobeVisible(entry.isIntersecting)
      },
      {
        threshold: 0.3, // Start animation when 30% of globe is visible
        rootMargin: '-100px 0px' // Add some margin to delay the trigger slightly
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 border-b-2 border-amber-500 overflow-hidden"
    >
      {/* Command Center Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/backgrounds/command-center.svg"
          alt=""
          fill
          className="object-cover opacity-10"
          sizes="100vw"
        />
      </div>

      {/* Hexagonal Pattern Overlay */}
      <div className="absolute inset-0 hex-pattern"></div>

      {/* Section Header */}
      <div className="relative z-10 text-center py-6 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-3"
        >
          <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
          <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">
            Global Defence Network
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2"
        >
          Bangladesh Defence Market{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
            Opportunities
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-400 max-w-3xl mx-auto"
        >
          Connecting global defence manufacturers with Bangladesh&apos;s $4.3B defence modernization program.
          Your gateway to Forces Goal 2030.
        </motion.p>
      </div>

      {/* Main Globe Container */}
      <div className="relative w-full" style={{ height: '900px' }}>
        <div className="relative h-full max-w-7xl mx-auto px-4">
          {/* Main globe with integrated animations */}
          <GlobeComponent isVisible={isGlobeVisible} />
        </div>
      </div>
    </section>
  )
}
