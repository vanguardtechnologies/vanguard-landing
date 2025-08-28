'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { EnhancedTankIcon } from '@/components/EnhancedDefenseIcons'
import SVGFilters from '@/components/SVGFilters'

export default function LandSystemsPage() {
  const equipmentCategories = [
    {
      category: "Main Battle Tanks",
      items: [
        { name: "VT-5 Light Tanks", quantity: "44 ordered (150 by 2030)", status: "Delivering" },
        { name: "Type 59G Durjoy", quantity: "174 upgraded", status: "Operational" },
        { name: "MBT-2000/VT-1A", quantity: "44 units", status: "Active" },
        { name: "Type 69-IIG", quantity: "58 units", status: "Active" }
      ],
      description: "Modern armor with 125mm main guns and advanced fire control"
    },
    {
      category: "Armored Personnel Carriers",
      items: [
        { name: "BTR-80", quantity: "645 units", status: "Operational" },
        { name: "Type 92 IFV", quantity: "Multiple units", status: "Active" },
        { name: "MT-LB", quantity: "Multiple units", status: "Active" },
        { name: "BRDM-2", quantity: "Reconnaissance role", status: "Active" }
      ],
      description: "8x8 wheeled and tracked platforms for infantry transport"
    },
    {
      category: "Infantry Fighting Vehicles",
      items: [
        { name: "BMP-2", quantity: "Limited units", status: "Active" },
        { name: "Type 86 IFV", quantity: "Multiple units", status: "Active" },
        { name: "Local Modifications", quantity: "Various", status: "Ongoing" },
        { name: "Future IFV Program", quantity: "Planned", status: "Evaluation" }
      ],
      description: "Combined firepower platforms with troop transport capability"
    },
    {
      category: "Support & Engineering",
      items: [
        { name: "ARV Recovery Vehicles", quantity: "Multiple", status: "Active" },
        { name: "Bridge Layers", quantity: "Limited", status: "Active" },
        { name: "Mine Clearing Systems", quantity: "Various", status: "Active" },
        { name: "Engineering Vehicles", quantity: "Multiple", status: "Operational" }
      ],
      description: "Battlefield support, recovery, and engineering capabilities"
    }
  ]

  const dgdpRequirements = [
    {
      title: "Technical Documentation",
      icon: "📋",
      items: [
        "Detailed specifications in Bengali and English",
        "Performance test data and certification",
        "Maintenance manuals and schedules",
        "Spare parts catalogues with NSN codes"
      ]
    },
    {
      title: "Compliance Standards",
      icon: "✓",
      items: [
        "ISO 9001:2015 quality certification",
        "Environmental impact assessment (EIA)",
        "Safety certifications per MIL-STD",
        "Local testing at BMTF facilities"
      ]
    },
    {
      title: "Commercial Framework",
      icon: "🤝",
      items: [
        "Technology transfer agreements (ToT)",
        "Local assembly/production roadmap",
        "Comprehensive after-sales support",
        "Training programs at BOF/CME"
      ]
    },
    {
      title: "Strategic Requirements",
      icon: "🎯",
      items: [
        "Offset agreements (minimum 20%)",
        "Industrial cooperation programs",
        "Long-term maintenance contracts",
        "Upgrade pathway provisions"
      ]
    }
  ]

  const marketStats = [
    { value: "$400M", label: "Annual Budget", sublabel: "Land systems allocation" },
    { value: "850+", label: "Armored Units", sublabel: "Current inventory" },
    { value: "45%", label: "Modernization", sublabel: "Target by 2030" },
    { value: "150", label: "VT-5 Target", sublabel: "Light tanks by 2030" }
  ]

  const recentProcurements = [
    { year: "2023-24", item: "VT-5 Light Tanks", quantity: "44 units", value: "$150M" },
    { year: "2022", item: "BTR-80 APCs", quantity: "60 units", value: "$48M" },
    { year: "2021", item: "Type 59G Upgrade", quantity: "50 units", value: "$35M" },
    { year: "2020", item: "Recovery Vehicles", quantity: "12 units", value: "$18M" }
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
                      DGDP Category: Land Systems
                    </div>
                    
                    <h1 className="text-4xl lg:text-5xl font-black text-gray-100 mb-6 uppercase tracking-tight">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-300">
                        Land Systems
                      </span>
                      <span className="block text-2xl lg:text-3xl mt-3 text-gray-300 font-bold">
                        Armored Vehicles & Equipment
                      </span>
                    </h1>
                    
                    <p className="text-lg text-gray-400 leading-relaxed mb-8">
                      Comprehensive DGDP support for main battle tanks, armored personnel carriers, 
                      and land-based defence systems entering Bangladesh market. Facilitating procurement 
                      of 150+ VT-5 light tanks and modernization of 850+ armored units under Forces Goal 2030.
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
                      <EnhancedTankIcon size={400} className="text-amber-500" interactive={false} />
                    </div>
                    <EnhancedTankIcon size={400} className="text-amber-400 drop-shadow-2xl relative z-10" interactive={true} />
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
              Bangladesh Land Systems Market 2025-26
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
            <h2 className="text-3xl font-black text-gray-100 mb-4 uppercase tracking-wide">Equipment Categories</h2>
            <p className="text-gray-400 mb-12 max-w-3xl">
              Current inventory and procurement pipeline under Forces Goal 2030 modernization program
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
                            item.status === 'Delivering' ? 'text-green-400' :
                            item.status === 'Operational' ? 'text-amber-400' :
                            item.status === 'Evaluation' ? 'text-blue-400' :
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

        {/* Recent Procurements */}
        <section className="py-16 border-b border-gray-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-gray-100 mb-12 uppercase tracking-wide">Recent Procurements</h2>
            
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
            <h2 className="text-3xl font-black text-gray-100 mb-4 uppercase tracking-wide">DGDP Registration Requirements</h2>
            <p className="text-gray-400 mb-12 max-w-3xl">
              Essential documentation and compliance standards for land systems procurement in Bangladesh
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
                  Ready to Register Your Land Systems?
                </div>
                
                <h3 className="text-3xl font-black text-gray-100 mb-4 uppercase tracking-wide">
                  Expert DGDP Support for Land Systems
                </h3>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                  Navigate Bangladesh's land systems procurement with local expertise, 
                  established government relationships, and comprehensive documentation support.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/#contact" className="btn-primary">
                    Start DGDP Registration
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