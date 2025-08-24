'use client'

import React from 'react'
import dynamic from 'next/dynamic'
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
          <p className="text-amber-400 text-lg font-bold uppercase tracking-wider">Loading Defense Network</p>
        </div>
      </div>
    )
  }
)

export default function DefenseGlobe() {
  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 border-b-2 border-amber-500 overflow-hidden">
      {/* Hexagonal Pattern Overlay */}
      <div className="absolute inset-0 hex-pattern"></div>

      {/* Section Header */}
      <div className="relative z-10 text-center py-6 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center bg-gray-800/50 backdrop-blur-sm border-2 border-amber-500/50 text-amber-400 px-6 py-3 rounded-sm text-sm font-black uppercase tracking-wider mb-3 shadow-xl"
        >
          <span className="w-3 h-3 bg-amber-500 rounded-full mr-3 animate-pulse shadow-lg shadow-amber-500/50"></span>
          Global Defense Network
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-black text-gray-100 mb-2 uppercase tracking-tight"
        >
          Bangladesh Defense Market Opportunities
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-400 max-w-3xl mx-auto"
        >
          Connecting global defense manufacturers with Bangladesh's $4.3B defense modernization program.
          Your gateway to Forces Goal 2030.
        </motion.p>
      </div>

      {/* Main Globe Container */}
      <div className="relative w-full" style={{ height: '900px' }}>
        <div className="relative h-full max-w-7xl mx-auto px-4">
          {/* Main globe with integrated animations */}
          <GlobeComponent />
        </div>
      </div>
    </section>
  )
}