'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { EnhancedJetIcon } from '@/components/EnhancedDefenseIcons'
import SVGFilters from '@/components/SVGFilters'

export default function AirDefensePage() {
  const equipmentCategories = [
    {
      category: "Fighter Aircraft",
      items: [
        { name: "F-7 BGI", quantity: "12 units", status: "Operational" },
        { name: "F-7 BG/MB", quantity: "18 units", status: "Active" },
        { name: "MiG-29 (upgrading to BM)", quantity: "8 units", status: "Modernizing" },
        { name: "J-10C (potential)", quantity: "Under evaluation", status: "Planning" }
      ],
      description: "Multi-role fighters for air superiority and ground attack missions"
    },
    {
      category: "Helicopters",
      items: [
        { name: "Mi-17", quantity: "30 units", status: "Operational" },
        { name: "Mi-8/Mi-171", quantity: "12 units", status: "Active" },
        { name: "Bell 206", quantity: "6 units", status: "Training" },
        { name: "AW109/AW119", quantity: "Multiple", status: "VIP/Support" }
      ],
      description: "Transport, utility, and training rotary-wing aircraft fleet"
    },
    {
      category: "Training Aircraft",
      items: [
        { name: "Yak-130", quantity: "Advanced trainer/light attack", status: "Active" },
        { name: "K-8 (JL-8)", quantity: "Advanced training", status: "Operational" },
        { name: "PT-6 (Nanchang)", quantity: "24 units", status: "Primary trainer" },
        { name: "CJ-6", quantity: "Basic trainers", status: "Active" }
      ],
      description: "Comprehensive pilot training pipeline from basic to advanced"
    },
    {
      category: "Air Defense & UAVs",
      items: [
        { name: "Bayraktar TB2", quantity: "6 units", status: "Operational" },
        { name: "CS/AA3 Anti-Aircraft", quantity: "3 systems", status: "Delivered 2024" },
        { name: "MANPADS Program", quantity: "181 units planned", status: "Procurement" },
        { name: "MRSAM Program", quantity: "Tender issued", status: "Evaluation" }
      ],
      description: "Integrated air defense systems and unmanned aerial platforms"
    }
  ]

  const dgdpRequirements = [
    {
      title: "Aviation Certification",
      icon: "✈️",
      items: [
        "Type certification documents",
        "Airworthiness certificates",
        "Flight test data reports",
        "Maintenance program approval"
      ]
    },
    {
      title: "Technical Compliance",
      icon: "📊",
      items: [
        "ICAO standards compliance",
        "MIL-STD specifications",
        "Avionics integration tests",
        "Weapons systems validation"
      ]
    },
    {
      title: "Training & Support",
      icon: "🎓",
      items: [
        "Pilot training curriculum",
        "Maintenance crew certification",
        "Simulator training packages",
        "Technical documentation in Bengali"
      ]
    },
    {
      title: "Infrastructure",
      icon: "🏗️",
      items: [
        "Ground support equipment",
        "Hangar and maintenance facilities",
        "Spare parts inventory",
        "20-year support package"
      ]
    }
  ]

  const marketStats = [
    { value: "$350M", label: "Air Force Budget", sublabel: "Annual allocation" },
    { value: "188", label: "Total Aircraft", sublabel: "Active inventory" },
    { value: "30", label: "F-7 Fighters", sublabel: "Various variants" },
    { value: "8", label: "MiG-29s", sublabel: "Upgrading to BM" }
  ]

  const recentProcurements = [
    { year: "2024", item: "CS/AA3 Anti-Aircraft", quantity: "3 systems", value: "$25M" },
    { year: "2023", item: "Bayraktar TB2 UAVs", quantity: "6 units", value: "$30M" },
    { year: "2021", item: "Yak-130 Trainers", quantity: "Additional units", value: "$45M" },
    { year: "2020", item: "K-8 Advanced Trainers", quantity: "Multiple", value: "$35M" }
  ]

  const airBases = [
    { name: "BAF Bangabandhu", location: "Dhaka", type: "Main Air Base" },
    { name: "BAF Zahurul Haque", location: "Chittagong", type: "Fighter Base" },
    { name: "BAF Matiur Rahman", location: "Jessore", type: "Training Base" },
    { name: "BAF Shah Mokhdum", location: "Rajshahi", type: "Forward Base" }
  ]

  return (
    <>
      <SVGFilters />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b-2 border-amber-500">
          <div className="absolute inset-0 hex-pattern"></div>
          <div className="absolute inset-0 tech-grid-glow"></div>
          
          <div className="relative z-10 pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Navigation */}
              <Link 
                href="/#products" 
                className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors duration-300 mb-8 group"
              >
                <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Defense Categories
              </Link>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="inline-flex items-center bg-gray-800/50 backdrop-blur-sm border-2 border-amber-500/50 text-amber-400 px-6 py-3 rounded-sm text-sm font-black uppercase tracking-wider mb-6 shadow-xl">
                      <span className="w-3 h-3 bg-amber-500 rounded-full mr-3 animate-pulse shadow-lg shadow-amber-500/50"></span>
                      DGDP Category: Air Defense
                    </div>
                    
                    <h1 className="text-4xl lg:text-5xl font-black text-gray-100 mb-6 uppercase tracking-tight">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-300">
                        Air Defense
                      </span>
                      <span className="block text-2xl lg:text-3xl mt-3 text-gray-300 font-bold">
                        Aircraft & Defense Systems
                      </span>
                    </h1>
                    
                    <p className="text-lg text-gray-400 leading-relaxed mb-8">
                      Comprehensive DGDP support for fighter aircraft, helicopters, UAVs, and air defense systems. 
                      Supporting Bangladesh Air Force's fleet of 188 aircraft including MiG-29 upgrades to BM standard 
                      and potential J-10C acquisition for enhanced air superiority capabilities.
                    </p>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {marketStats.slice(0, 2).map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                          className="bg-gray-800/60 backdrop-blur-sm rounded-sm p-4 border-2 border-gray-700 hover:border-amber-500/50 transition-all"
                        >
                          <div className="text-2xl font-black text-amber-400">{stat.value}</div>
                          <div className="text-sm text-gray-300 font-bold">{stat.label}</div>
                          <div className="text-xs text-gray-500">{stat.sublabel}</div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Right Icon Display */}
                <motion.div 
                  className="relative flex justify-center items-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 blur-3xl opacity-30">
                      <EnhancedJetIcon size={400} className="text-amber-500" interactive={false} />
                    </div>
                    <EnhancedJetIcon size={400} className="text-amber-400 drop-shadow-2xl relative z-10" interactive={true} />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Overview */}
        <section className="py-16 border-b border-gray-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-gray-100 mb-12 uppercase tracking-wide text-center">
              Bangladesh Air Force Market 2025-26
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              {marketStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/80 backdrop-blur-sm rounded-sm p-6 border-2 border-gray-700 hover:border-amber-500/50 shadow-xl hover:shadow-amber-500/20 transition-all text-center"
                >
                  <div className="text-3xl font-black text-amber-400 mb-2">{stat.value}</div>
                  <div className="text-sm font-bold text-gray-300 uppercase tracking-wider">{stat.label}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.sublabel}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment Categories */}
        <section className="py-16 border-b border-gray-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-gray-100 mb-4 uppercase tracking-wide">Aviation Inventory</h2>
            <p className="text-gray-400 mb-12 max-w-3xl">
              Current fleet composition and modernization pipeline for 188 active aircraft
            </p>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {equipmentCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/60 backdrop-blur-sm rounded-sm p-6 border-2 border-gray-700 hover:border-amber-500/50 shadow-xl hover:shadow-amber-500/20 transition-all"
                >
                  <h3 className="text-xl font-black text-amber-400 mb-3 uppercase tracking-wide">
                    {category.category}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">{category.description}</p>
                  
                  <div className="space-y-2">
                    {category.items.map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-gray-700/50 last:border-0">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                          <span className="text-gray-300 font-medium">{item.name}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-gray-400 block">{item.quantity}</span>
                          <span className={`text-xs font-bold uppercase tracking-wider ${
                            item.status === 'Modernizing' ? 'text-green-400' :
                            item.status === 'Operational' ? 'text-amber-400' :
                            item.status === 'Planning' ? 'text-blue-400' :
                            item.status === 'Procurement' ? 'text-purple-400' :
                            'text-gray-500'
                          }`}>
                            {item.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Air Bases */}
        <section className="py-16 border-b border-gray-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-gray-100 mb-12 uppercase tracking-wide">Strategic Air Bases</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {airBases.map((base, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/60 backdrop-blur-sm rounded-sm p-6 border-2 border-gray-700 hover:border-amber-500/50 text-center"
                >
                  <div className="text-3xl mb-3">✈️</div>
                  <h3 className="font-black text-amber-400 mb-2">{base.name}</h3>
                  <p className="text-sm text-gray-300 mb-1">{base.location}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{base.type}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Procurements */}
        <section className="py-16 border-b border-gray-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-gray-100 mb-12 uppercase tracking-wide">Recent Acquisitions</h2>
            
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-sm border-2 border-gray-700 overflow-hidden">
              <div className="grid grid-cols-4 bg-gray-900/80 p-4 font-bold text-sm uppercase tracking-wider text-amber-400 border-b-2 border-gray-700">
                <div>Year</div>
                <div>Equipment</div>
                <div>Quantity</div>
                <div className="text-right">Value</div>
              </div>
              {recentProcurements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-4 p-4 text-gray-300 hover:bg-gray-700/50 transition-colors border-b border-gray-700/50 last:border-0"
                >
                  <div className="font-bold text-amber-400">{item.year}</div>
                  <div>{item.item}</div>
                  <div className="text-gray-400">{item.quantity}</div>
                  <div className="text-right font-bold">{item.value}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DGDP Requirements */}
        <section className="py-16 border-b border-gray-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-gray-100 mb-4 uppercase tracking-wide">Aviation DGDP Requirements</h2>
            <p className="text-gray-400 mb-12 max-w-3xl">
              Essential documentation and compliance standards for aviation systems procurement
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dgdpRequirements.map((req, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/60 backdrop-blur-sm rounded-sm p-6 border-2 border-gray-700 hover:border-amber-500/50 shadow-xl hover:shadow-amber-500/20 transition-all"
                >
                  <div className="text-3xl mb-4">{req.icon}</div>
                  <h3 className="text-lg font-black text-amber-400 mb-4 uppercase tracking-wide">
                    {req.title}
                  </h3>
                  <ul className="space-y-2">
                    {req.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-gray-800 to-slate-800 rounded-sm p-12 border-2 border-amber-500/30 relative overflow-hidden">
              <div className="absolute inset-0 tech-grid-glow"></div>
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center bg-gray-900/50 backdrop-blur-sm border-2 border-amber-500/50 text-amber-400 px-6 py-3 rounded-sm text-sm font-black uppercase tracking-wider mb-6 shadow-xl">
                  <span className="w-3 h-3 bg-amber-500 rounded-full mr-3 animate-pulse shadow-lg shadow-amber-500/50"></span>
                  Ready to Register Your Air Defense Systems?
                </div>
                
                <h3 className="text-3xl font-black text-gray-100 mb-4 uppercase tracking-wide">
                  Expert Aviation DGDP Support
                </h3>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                  Navigate Bangladesh Air Force procurement with specialized aviation expertise, 
                  established relationships, and comprehensive technical documentation support.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/#contact" className="btn-primary">
                    Start Aviation Registration
                  </Link>
                  <Link href="/#process" className="btn-secondary">
                    View Our Process
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}