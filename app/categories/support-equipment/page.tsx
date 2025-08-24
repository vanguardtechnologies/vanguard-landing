'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { EnhancedSupportIcon } from '@/components/EnhancedDefenseIcons'
import { SVGFilters } from '@/components/SVGFilters'

export default function SupportEquipmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <SVGFilters />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <Link 
            href="/#products" 
            className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors duration-300 mb-8 group"
          >
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Defense Categories
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center bg-amber-500/10 text-amber-400 px-4 py-2 rounded-full text-sm font-semibold border border-amber-500/30 mb-6">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                DGDP Category: Support Equipment
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                  Support Equipment
                </span>
                <br />
                <span className="text-3xl lg:text-4xl text-gray-300 font-light">
                  Infantry & Logistics Systems
                </span>
              </h1>
              
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                Expert DGDP registration for infantry soldier systems, personal protective equipment, 
                training simulators, and medical gear supporting Bangladesh Armed Forces' 
                300,000+ personnel modernization program.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="#contact" 
                  className="btn-primary"
                >
                  Start DGDP Registration
                </Link>
                <Link 
                  href="#requirements" 
                  className="btn-secondary"
                >
                  View Requirements
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-full blur-3xl animate-pulse" />
                <EnhancedSupportIcon className="w-full h-full relative z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-center mb-12"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Bangladesh Support Equipment Market 2025-2026
            </span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "$150M", label: "Annual Budget", sublabel: "Support allocation" },
              { value: "300K+", label: "Personnel", sublabel: "Total forces" },
              { value: "85%", label: "Modernization", sublabel: "Equipment upgrade" },
              { value: "50K", label: "NVG Target", sublabel: "By 2030" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 text-center"
              >
                <div className="text-3xl font-black text-amber-400 mb-2">{stat.value}</div>
                <h3 className="font-bold text-white mb-1">{stat.label}</h3>
                <p className="text-gray-400 text-sm">{stat.sublabel}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-12">Support Equipment Categories</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Infantry Systems */}
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-amber-500/20">
              <h3 className="text-2xl font-bold text-amber-400 mb-6">Infantry Systems</h3>
              <div className="space-y-4">
                {[
                  { name: "BD-08 Assault Rifles", quantity: "Local production", status: "Operational" },
                  { name: "Machine Guns (PKM/GPMG)", quantity: "5000+ units", status: "Operational" },
                  { name: "Mortars (60mm/81mm/120mm)", quantity: "Multiple", status: "Operational" },
                  { name: "Anti-tank Weapons", quantity: "Various types", status: "Modernizing" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-700 last:border-0">
                    <div>
                      <div className="font-semibold text-white">{item.name}</div>
                      <div className="text-sm text-gray-400">{item.quantity}</div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.status === 'Operational' ? 'bg-green-500/20 text-green-400' :
                      item.status === 'Modernizing' ? 'bg-amber-500/20 text-amber-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Protection Equipment */}
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-amber-500/20">
              <h3 className="text-2xl font-bold text-amber-400 mb-6">Protection Equipment</h3>
              <div className="space-y-4">
                {[
                  { name: "Ballistic Helmets", quantity: "100K+ units", status: "Modernizing" },
                  { name: "Body Armor (Level IV)", quantity: "50K+ sets", status: "Modernizing" },
                  { name: "Night Vision (Gen 3+)", quantity: "Acquiring", status: "Planned" },
                  { name: "Tactical Gear Sets", quantity: "All units", status: "Operational" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-700 last:border-0">
                    <div>
                      <div className="font-semibold text-white">{item.name}</div>
                      <div className="text-sm text-gray-400">{item.quantity}</div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.status === 'Operational' ? 'bg-green-500/20 text-green-400' :
                      item.status === 'Modernizing' ? 'bg-amber-500/20 text-amber-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Training Systems */}
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-amber-500/20">
              <h3 className="text-2xl font-bold text-amber-400 mb-6">Training Systems</h3>
              <div className="space-y-4">
                {[
                  { name: "Small Arms Simulators", quantity: "12 systems", status: "Operational" },
                  { name: "Vehicle Simulators", quantity: "8 units", status: "Operational" },
                  { name: "Combat Training Centers", quantity: "4 facilities", status: "Modernizing" },
                  { name: "Virtual Reality Systems", quantity: "Planning", status: "Planned" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-700 last:border-0">
                    <div>
                      <div className="font-semibold text-white">{item.name}</div>
                      <div className="text-sm text-gray-400">{item.quantity}</div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.status === 'Operational' ? 'bg-green-500/20 text-green-400' :
                      item.status === 'Modernizing' ? 'bg-amber-500/20 text-amber-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Medical & Logistics */}
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-amber-500/20">
              <h3 className="text-2xl font-bold text-amber-400 mb-6">Medical & Logistics</h3>
              <div className="space-y-4">
                {[
                  { name: "Field Medical Units", quantity: "200+ sets", status: "Operational" },
                  { name: "Mobile Hospitals", quantity: "12 units", status: "Operational" },
                  { name: "Logistics Vehicles", quantity: "500+ units", status: "Modernizing" },
                  { name: "Supply Chain Systems", quantity: "Digital upgrade", status: "Planned" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-700 last:border-0">
                    <div>
                      <div className="font-semibold text-white">{item.name}</div>
                      <div className="text-sm text-gray-400">{item.quantity}</div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.status === 'Operational' ? 'bg-green-500/20 text-green-400' :
                      item.status === 'Modernizing' ? 'bg-amber-500/20 text-amber-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Procurements */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-12">Recent Support Equipment Procurements</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full backdrop-blur-sm bg-white/5 rounded-2xl overflow-hidden">
              <thead className="bg-amber-500/10 border-b border-amber-500/20">
                <tr>
                  <th className="px-6 py-4 text-left text-amber-400 font-bold">Year</th>
                  <th className="px-6 py-4 text-left text-amber-400 font-bold">Equipment</th>
                  <th className="px-6 py-4 text-left text-amber-400 font-bold">Supplier</th>
                  <th className="px-6 py-4 text-left text-amber-400 font-bold">Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {[
                  { year: "2025", equipment: "Night Vision Goggles", supplier: "Various", value: "$35M" },
                  { year: "2024", equipment: "Body Armor Sets", supplier: "Local/Import", value: "$45M" },
                  { year: "2024", equipment: "Training Simulators", supplier: "CAE/Others", value: "$30M" },
                  { year: "2023", equipment: "Medical Equipment", supplier: "Multiple", value: "$40M" }
                ].map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-gray-300">{item.year}</td>
                    <td className="px-6 py-4 text-white font-semibold">{item.equipment}</td>
                    <td className="px-6 py-4 text-gray-300">{item.supplier}</td>
                    <td className="px-6 py-4 text-amber-400 font-bold">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DGDP Requirements */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900" id="requirements">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-12">DGDP Support Equipment Requirements</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-amber-500/20">
              <h3 className="text-xl font-bold text-amber-400 mb-6">Technical Requirements</h3>
              <ul className="space-y-3">
                {[
                  "MIL-STD compliance for all equipment",
                  "Tropical climate resistance specifications",
                  "Compatibility with existing systems",
                  "Local assembly/manufacturing options",
                  "Training package requirements",
                  "Life cycle support provisions"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-amber-500/20">
              <h3 className="text-xl font-bold text-amber-400 mb-6">Documentation Required</h3>
              <ul className="space-y-3">
                {[
                  "Technical specifications and test reports",
                  "Quality certification (ISO/MIL standards)",
                  "End-user certificates",
                  "Training and maintenance manuals",
                  "Warranty and service agreements",
                  "Technology transfer proposals"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900" id="contact">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-black text-white mb-6">
              Ready to Register Your Support Equipment?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Navigate DGDP requirements with expert support for infantry systems and logistics equipment. 
              Our specialized team ensures smooth registration for all support equipment categories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact" 
                className="btn-primary text-lg"
              >
                Start DGDP Registration
              </Link>
              <Link 
                href="/#process" 
                className="btn-secondary text-lg"
              >
                View Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}