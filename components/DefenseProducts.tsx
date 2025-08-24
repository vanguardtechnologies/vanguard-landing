'use client'

import { motion } from 'framer-motion'
import { 
  EnhancedTankIcon, 
  EnhancedShipIcon, 
  EnhancedJetIcon, 
  EnhancedRadarIcon, 
  EnhancedSupportIcon, 
  EnhancedMissileIcon 
} from './EnhancedDefenseIcons'
import SVGFilters from './SVGFilters'

export default function DefenseProducts() {
  const categories = [
    {
      id: 'land-systems',
      title: 'Land Systems',
      subtitle: 'Armored Vehicles & Equipment',
      description: 'Documentation support for main battle tanks, armored personnel carriers, and logistics vehicles.',
      icon: EnhancedTankIcon,
      color: 'from-green-600/20 to-green-800/20',
      borderColor: 'hover:border-green-500/50',
      iconColor: 'text-green-400'
    },
    {
      id: 'naval-systems',
      title: 'Naval Systems',
      subtitle: 'Vessels & Maritime Equipment',
      description: 'Local representation for frigates, submarines, corvettes, and offshore patrol vessels.',
      icon: EnhancedShipIcon,
      color: 'from-blue-600/20 to-blue-800/20',
      borderColor: 'hover:border-blue-500/50',
      iconColor: 'text-blue-400'
    },
    {
      id: 'air-defense',
      title: 'Air Defense',
      subtitle: 'Aircraft & Defense Systems',
      description: 'Compliance assistance for fighter aircraft, helicopters, UAVs, and air defense systems.',
      icon: EnhancedJetIcon,
      color: 'from-sky-600/20 to-sky-800/20',
      borderColor: 'hover:border-sky-500/50',
      iconColor: 'text-sky-400'
    },
    {
      id: 'communications',
      title: 'Communications',
      subtitle: 'Electronics & IT Systems',
      description: 'Technical documentation for C4ISR systems, tactical communications, and electronic warfare.',
      icon: EnhancedRadarIcon,
      color: 'from-purple-600/20 to-purple-800/20',
      borderColor: 'hover:border-purple-500/50',
      iconColor: 'text-purple-400'
    },
    {
      id: 'support-equipment',
      title: 'Support Equipment',
      subtitle: 'Logistics & Training',
      description: 'Procurement assistance for personal equipment, medical gear, and training simulators.',
      icon: EnhancedSupportIcon,
      color: 'from-orange-600/20 to-orange-800/20',
      borderColor: 'hover:border-orange-500/50',
      iconColor: 'text-orange-400'
    },
    {
      id: 'artillery-systems',
      title: 'Artillery Systems',
      subtitle: 'Heavy Weapons & Missiles',
      description: 'Regulatory compliance for howitzers, multiple rocket launchers, and missile systems.',
      icon: EnhancedMissileIcon,
      color: 'from-red-600/20 to-red-800/20',
      borderColor: 'hover:border-red-500/50',
      iconColor: 'text-red-400'
    }
  ]

  return (
    <>
      <SVGFilters />
      <section id="products" className="py-0 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden border-b-2 border-amber-500">
        {/* Hexagonal Defense Pattern */}
        <div className="absolute inset-0 hex-pattern"></div>
      <div className="absolute inset-0 radar-pattern"></div>
      <div className="w-full relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gray-800/50 backdrop-blur-sm border-2 border-amber-500/50 text-amber-400 px-6 py-3 rounded-sm text-sm font-black uppercase tracking-wider mb-8 shadow-xl">
            <span className="w-3 h-3 bg-amber-500 rounded-full mr-3 animate-pulse shadow-lg shadow-amber-500/50"></span>
            DGDP Procurement Categories We Support
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-gray-100 mb-4 uppercase tracking-tight">
            Comprehensive Defense Categories
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We provide expert assistance across all major defense procurement categories, 
            helping you navigate Bangladesh's defense market with local expertise and regulatory compliance.
          </p>
        </div>

        {/* Categories Grid with Vector Icons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div 
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group bg-gray-800/80 backdrop-blur-sm rounded-sm shadow-xl hover:shadow-amber-500/30 transition-all duration-300 overflow-hidden border-2 border-gray-700 hover:border-amber-500/50 transform-gpu"
              >
                {/* Icon Display Area with Advanced Effects */}
                <div className={`relative h-72 overflow-hidden bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
                    <div className="absolute inset-0 tech-grid-glow"></div>
                  </div>
                  
                  {/* Advanced Icon Container */}
                  <motion.div 
                    className="relative transform-gpu"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`${category.iconColor} drop-shadow-2xl`}>
                      <Icon size={200} className="filter drop-shadow-lg" interactive={true} />
                    </div>
                    
                    {/* Enhanced Glow Effect */}
                    <div className="absolute inset-0 blur-2xl opacity-30 group-hover:opacity-50 transition-opacity">
                      <Icon size={200} className={category.iconColor} interactive={false} />
                    </div>
                  </motion.div>
                  
                </div>

                {/* Category Content */}
                <div className="p-6">
                  <h3 className="text-xl font-black text-gray-100 mb-1 uppercase tracking-wide">
                    {category.title}
                  </h3>
                  <p className="text-sm font-bold text-amber-400 mb-3 uppercase tracking-wider">
                    {category.subtitle}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {category.description}
                  </p>
                  
                  {/* Learn More Link */}
                  <a 
                    href={`/categories/${category.id}`}
                    className="inline-flex items-center text-amber-400 hover:text-amber-300 font-bold text-sm transition-colors uppercase tracking-wider group"
                  >
                    <span>Learn More</span>
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-gray-800 to-slate-800 rounded-sm p-12 max-w-4xl mx-auto border-2 border-amber-500/30 relative overflow-hidden">
            <div className="absolute inset-0 tech-grid-glow"></div>
            <div className="relative z-10">
            <h3 className="text-3xl font-black text-gray-100 mb-4 uppercase tracking-wide">
              Ready to Navigate Your Category?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              We provide comprehensive support across all defense procurement categories. 
              Let us help you with the specific requirements for your equipment type.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary">
                Discuss Your Requirements
              </a>
              <a href="#process" className="btn-secondary">
                View DGDP Process
              </a>
            </div>
            </div>
          </div>
        </div>
        </div>
      </div>
        {/* Section Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
      </section>
    </>
  )
}