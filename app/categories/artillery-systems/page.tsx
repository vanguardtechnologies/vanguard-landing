'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { EnhancedMissileIcon } from '@/components/EnhancedDefenseIcons'
import SVGFilters from '@/components/SVGFilters'

export default function ArtillerySystemsPage() {
  const equipmentCategories = [
    {
      category: "Multiple Launch Rocket Systems",
      items: [
        { name: "WS-22/WS-22A GMLRS", quantity: "49 systems (122mm)", status: "Operational" },
        { name: "TRG-300 Tiger MLRS", quantity: "1 regiment (Turkish)", status: "Active" },
        { name: "T-300 Kasirga", quantity: "Procured 2019", status: "Operational" },
        { name: "Long-range MLRS", quantity: "120-280km range", status: "Procurement" }
      ],
      description: "Precision-guided rocket systems with ranges from 45km to 280km"
    },
    {
      category: "Self-Propelled Artillery",
      items: [
        { name: "NORA B-52 155mm", quantity: "42 units", status: "Operational" },
        { name: "PLZ-45 155mm", quantity: "Multiple units", status: "Active" },
        { name: "2S1 Gvozdika 122mm", quantity: "Limited units", status: "Active" },
        { name: "Future SPH Program", quantity: "Under evaluation", status: "Planning" }
      ],
      description: "Self-propelled howitzers with automated fire control systems"
    },
    {
      category: "Towed Artillery",
      items: [
        { name: "Type 96 122mm", quantity: "Multiple batteries", status: "Active" },
        { name: "D-30 122mm", quantity: "Soviet-era systems", status: "Operational" },
        { name: "105mm Field Guns", quantity: "Various types", status: "Active" },
        { name: "155mm Towed Program", quantity: "Procurement ongoing", status: "Evaluation" }
      ],
      description: "Traditional field artillery for indirect fire support"
    },
    {
      category: "Support Systems",
      items: [
        { name: "SLC-2 Counter-battery Radar", quantity: "Multiple units", status: "Operational" },
        { name: "Bramor C4EYE UAVs", quantity: "36 units", status: "Active" },
        { name: "Artillery Ammunition", quantity: "155mm production line", status: "Manufacturing" },
        { name: "Fire Control Systems", quantity: "SAGEM Sigma 30", status: "Integrated" }
      ],
      description: "Target acquisition, reconnaissance, and fire control systems"
    }
  ]

  const dgdpRequirements = [
    {
      title: "Technical Specifications",
      icon: "🎯",
      items: [
        "Ballistic performance data",
        "CEP accuracy certification",
        "Range tables and firing charts",
        "Ammunition compatibility matrix"
      ]
    },
    {
      title: "Safety & Compliance",
      icon: "⚠️",
      items: [
        "UN hazard classification",
        "STANAG compatibility tests",
        "Environmental impact studies",
        "Storage and handling protocols"
      ]
    },
    {
      title: "Production Support",
      icon: "🏭",
      items: [
        "Local ammunition production",
        "Technology transfer for shells",
        "Maintenance facility setup",
        "Propellant manufacturing"
      ]
    },
    {
      title: "Training Programs",
      icon: "📚",
      items: [
        "Artillery crew training",
        "Fire direction center setup",
        "Maintenance technician courses",
        "Safety officer certification"
      ]
    }
  ]

  const marketStats = [
    { value: "$250M", label: "Artillery Budget", sublabel: "Annual allocation" },
    { value: "250+", label: "Artillery Units", sublabel: "Various systems" },
    { value: "49", label: "WS-22 MLRS", sublabel: "In service" },
    { value: "42", label: "NORA B-52", sublabel: "155mm SPH" }
  ]

  const recentProcurements = [
    { year: "2024", item: "155mm HE ERFB BB Rounds", quantity: "3,500 shells", value: "$28M" },
    { year: "2021", item: "TRG-300 Tiger MLRS", quantity: "1 regiment", value: "$75M" },
    { year: "2019", item: "T-300 Kasirga MLRS", quantity: "Multiple units", value: "$60M" },
    { year: "2017", item: "Bramor C4EYE UAVs", quantity: "36 units", value: "$12M" }
  ]

  const ammunitionCapabilities = [
    { type: "ERFB Projectiles", range: "32.5 km", description: "Extended Range Full-Bore" },
    { type: "ERFB Base Bleed", range: "41.5 km", description: "Enhanced range rounds" },
    { type: "VLAP Projectiles", range: "52 km", description: "Very Low Angle Projectiles" },
    { type: "WS-22A Rockets", range: "47 km", description: "1m CEP precision" }
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
                Back to Defence Categories
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
                      DGDP Category: Artillery Systems
                    </div>
                    
                    <h1 className="text-4xl lg:text-5xl font-black text-gray-100 mb-6 uppercase tracking-tight">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-300">
                        Artillery Systems
                      </span>
                      <span className="block text-2xl lg:text-3xl mt-3 text-gray-300 font-bold">
                        Heavy Weapons & Missiles
                      </span>
                    </h1>
                    
                    <p className="text-lg text-gray-400 leading-relaxed mb-8">
                      Specialized DGDP support for howitzers, multiple rocket launchers, and missile systems. 
                      Supporting Bangladesh Army's artillery modernization with 49 WS-22 MLRS systems, 
                      42 NORA B-52 self-propelled howitzers, and future long-range (280km) strike capabilities.
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
                      <EnhancedMissileIcon size={400} className="text-amber-500" interactive={false} />
                    </div>
                    <EnhancedMissileIcon size={400} className="text-amber-400 drop-shadow-2xl relative z-10" interactive={true} />
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
              Bangladesh Artillery Market 2025-26
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
            <h2 className="text-3xl font-black text-gray-100 mb-4 uppercase tracking-wide">Artillery Inventory</h2>
            <p className="text-gray-400 mb-12 max-w-3xl">
              Current systems and procurement pipeline for precision strike capabilities
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
                            item.status === 'Manufacturing' ? 'text-green-400' :
                            item.status === 'Operational' ? 'text-amber-400' :
                            item.status === 'Procurement' ? 'text-purple-400' :
                            item.status === 'Planning' ? 'text-blue-400' :
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

        {/* Ammunition Capabilities */}
        <section className="py-16 border-b border-gray-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-gray-100 mb-12 uppercase tracking-wide">Ammunition & Range Capabilities</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ammunitionCapabilities.map((ammo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/60 backdrop-blur-sm rounded-sm p-6 border-2 border-gray-700 hover:border-amber-500/50 text-center"
                >
                  <div className="text-3xl font-black text-amber-400 mb-2">{ammo.range}</div>
                  <h3 className="font-black text-gray-300 mb-1">{ammo.type}</h3>
                  <p className="text-xs text-gray-500">{ammo.description}</p>
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
                <div>System/Equipment</div>
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
            <h2 className="text-3xl font-black text-gray-100 mb-4 uppercase tracking-wide">Artillery DGDP Requirements</h2>
            <p className="text-gray-400 mb-12 max-w-3xl">
              Essential documentation and compliance for artillery systems procurement
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
                  Ready to Register Your Artillery Systems?
                </div>
                
                <h3 className="text-3xl font-black text-gray-100 mb-4 uppercase tracking-wide">
                  Expert Artillery DGDP Support
                </h3>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                  Navigate heavy weapons procurement with specialized expertise in artillery 
                  and missile systems, including ammunition production and technology transfer.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/#contact" className="btn-primary">
                    Start Artillery Registration
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