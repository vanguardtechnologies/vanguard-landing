'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  EnhancedTankIcon, 
  EnhancedShipIcon, 
  EnhancedJetIcon, 
  EnhancedRadarIcon, 
  EnhancedSupportIcon, 
  EnhancedMissileIcon 
} from './EnhancedDefenseIcons'
import SVGFilters from './SVGFilters'
import ClientPlaceholders from './ClientPlaceholders'

export default function Hero() {
  const defenseCategories = [
    {
      id: 'land-systems',
      title: 'Land Systems',
      icon: EnhancedTankIcon,
      color: 'from-green-600 to-green-800',
      delay: 0.1
    },
    {
      id: 'naval-systems',
      title: 'Naval Systems',
      icon: EnhancedShipIcon,
      color: 'from-blue-600 to-blue-800',
      delay: 0.2
    },
    {
      id: 'air-defense',
      title: 'Air Defence',
      icon: EnhancedJetIcon,
      color: 'from-sky-600 to-sky-800',
      delay: 0.3
    },
    {
      id: 'communications',
      title: 'Communications',
      icon: EnhancedRadarIcon,
      color: 'from-purple-600 to-purple-800',
      delay: 0.4
    },
    {
      id: 'support-equipment',
      title: 'Support Equipment',
      icon: EnhancedSupportIcon,
      color: 'from-orange-600 to-orange-800',
      delay: 0.5
    },
    {
      id: 'artillery-systems',
      title: 'Artillery Systems',
      icon: EnhancedMissileIcon,
      color: 'from-red-600 to-red-800',
      delay: 0.6
    }
  ]

  return (
    <>
      <SVGFilters />
      <section className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden border-b-2 border-amber-500 pt-20">
        {/* Hexagonal Pattern Overlay */}
        <div className="absolute inset-0 hex-pattern"></div>
        {/* Technical Grid */}
        <div className="absolute inset-0 tech-grid-glow"></div>
      <div className="w-full relative z-10 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Content (6 columns) */}
          <div className="lg:col-span-6">
            {/* Trust Badge */}
            <div className="inline-flex items-center bg-gray-800/50 backdrop-blur-sm border-2 border-amber-500/50 text-amber-400 px-6 py-3 rounded-sm text-sm font-black uppercase tracking-wider mb-8 shadow-xl">
              <span className="w-3 h-3 bg-amber-500 rounded-full mr-3 animate-pulse shadow-lg shadow-amber-500/50"></span>
              Certified LOCAL Agent
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-100 mb-6 uppercase tracking-tight">
              Your Trusted
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-300">LOCAL Agent</span>
              <span className="block text-3xl md:text-4xl mt-3 text-gray-300">in Bangladesh</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
              Facilitating smooth market entry for international defence manufacturers through 
              <span className="font-bold text-amber-400"> local expertise</span>, 
              regulatory compliance, and established industry connections.
            </p>
            
            {/* Key Value Points */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { metric: "24/7", label: "Local Support", icon: "🛡️" },
                { metric: "DGDP", label: "Certified Agent", icon: "✓" },
                { metric: "Fast", label: "Processing Time", icon: "⚡" }
              ].map((item, index) => (
                <div key={index} className="bg-gray-800/60 backdrop-blur-sm rounded-sm p-4 border-2 border-gray-700 hover:border-amber-500/50 shadow-xl hover:shadow-amber-500/20 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl font-black text-amber-400">{item.metric}</span>
                    <span className="text-2xl text-amber-500/50">{item.icon}</span>
                  </div>
                  <div className="text-sm text-gray-400 font-semibold uppercase tracking-wider">{item.label}</div>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary">
                Start Consultation
              </a>
              <a href="#services" className="btn-secondary">
                View Our Services
              </a>
            </div>
          </div>

          {/* Right Defence Categories Grid (6 columns) */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* 3x2 Grid of Defence Categories */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {defenseCategories.map((category, index) => {
                  const Icon = category.icon
                  return (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: category.delay, duration: 0.6 }}
                    >
                      <Link 
                        href={`/categories/${category.id}`}
                        className="group relative block"
                      >
                        <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border-2 border-gray-700 hover:border-amber-500/70 shadow-xl hover:shadow-amber-500/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                          {/* Background Gradient */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                          
                          {/* Icon Container with Advanced SVG */}
                          <div className="relative p-3 flex flex-col items-center justify-center h-44">
                            <div className="mb-2 transition-all duration-300 transform group-hover:scale-105">
                              <Icon size={120} className="drop-shadow-2xl" interactive={true} />
                            </div>
                            <h3 className="text-xs font-black text-gray-300 group-hover:text-white uppercase tracking-wider text-center transition-colors absolute bottom-2">
                              {category.title}
                            </h3>
                          </div>
                          
                          {/* Hover Glow Effect */}
                          <div className="absolute inset-0 bg-gradient-to-t from-amber-500/0 via-amber-500/0 to-amber-500/0 group-hover:from-amber-500/10 group-hover:via-amber-500/5 group-hover:to-transparent transition-all duration-500"></div>
                        </div>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>

              {/* Client Placeholders */}
              <ClientPlaceholders />
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 pt-12 border-t-2 border-gray-700">
          <p className="text-sm text-gray-300 text-center mb-6 uppercase tracking-widest font-semibold">Trusted by leading defence manufacturers worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center space-x-2 text-gray-400">
              <svg className="w-5 h-5 text-green-400 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-bold uppercase tracking-wider">DGDP Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <svg className="w-5 h-5 text-green-400 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" />
              </svg>
              <span className="font-bold uppercase tracking-wider">Dhaka Office</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <svg className="w-5 h-5 text-green-400 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="font-bold uppercase tracking-wider">Industry Network</span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
    </>
  )
}