'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { EnhancedRadarIcon } from '@/components/EnhancedDefenseIcons'
import { SVGFilters } from '@/components/SVGFilters'

export default function CommunicationsPage() {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
                DGDP Category: Communications
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                  Communications
                </span>
                <br />
                <span className="text-3xl lg:text-4xl text-gray-300 font-light">
                  C4ISR & Electronic Systems
                </span>
              </h1>
              
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                Strategic DGDP support for command and control systems, tactical communications, 
                radar networks, and electronic warfare capabilities for Bangladesh Armed Forces' 
                digital transformation initiatives.
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
                <EnhancedRadarIcon className="w-full h-full relative z-10" />
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
              Bangladesh Communications Market 2025-2026
            </span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "$200M", label: "Annual Budget", sublabel: "C4ISR allocation" },
              { value: "95%", label: "Digitalization", sublabel: "Target by 2030" },
              { value: "24/7", label: "Operations", sublabel: "Command centers" },
              { value: "8", label: "Radar Systems", sublabel: "Modern platforms" }
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
          <h2 className="text-3xl font-black text-white mb-12">Communications Systems & Equipment</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Radar Systems */}
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-amber-500/20">
              <h3 className="text-2xl font-bold text-amber-400 mb-6">Radar Systems</h3>
              <div className="space-y-4">
                {[
                  { name: "SLC-2 Radar", quantity: "2 systems", status: "Operational" },
                  { name: "Ground Master 400", quantity: "Planning", status: "Planned" },
                  { name: "Air Defense Radar", quantity: "4 units", status: "Operational" },
                  { name: "Coastal Surveillance", quantity: "2 systems", status: "Modernizing" }
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

            {/* C4ISR Systems */}
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-amber-500/20">
              <h3 className="text-2xl font-bold text-amber-400 mb-6">C4ISR Systems</h3>
              <div className="space-y-4">
                {[
                  { name: "Battle Management System", quantity: "Implementing", status: "Modernizing" },
                  { name: "Command Centers", quantity: "12 facilities", status: "Operational" },
                  { name: "Intelligence Network", quantity: "Nationwide", status: "Operational" },
                  { name: "ISR Platforms", quantity: "Multiple", status: "Modernizing" }
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

            {/* Electronic Warfare */}
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-amber-500/20">
              <h3 className="text-2xl font-bold text-amber-400 mb-6">Electronic Warfare</h3>
              <div className="space-y-4">
                {[
                  { name: "EW Suites", quantity: "Naval platforms", status: "Operational" },
                  { name: "Jamming Systems", quantity: "Classified", status: "Operational" },
                  { name: "SIGINT Capabilities", quantity: "Multiple", status: "Modernizing" },
                  { name: "Counter-UAV Systems", quantity: "Acquiring", status: "Planned" }
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

            {/* Communication Networks */}
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-amber-500/20">
              <h3 className="text-2xl font-bold text-amber-400 mb-6">Communication Networks</h3>
              <div className="space-y-4">
                {[
                  { name: "Tactical Radio Systems", quantity: "1000+ units", status: "Operational" },
                  { name: "Satellite Terminals", quantity: "50+ stations", status: "Operational" },
                  { name: "Fiber Optic Network", quantity: "Nationwide", status: "Modernizing" },
                  { name: "Secure Voice/Data", quantity: "All units", status: "Operational" }
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
          <h2 className="text-3xl font-black text-white mb-12">Recent Communications Procurements</h2>
          
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
                  { year: "2025", equipment: "Tactical Radio Systems", supplier: "Harris Corporation", value: "$45M" },
                  { year: "2024", equipment: "SLC-2 Radar System", supplier: "CETC (China)", value: "$80M" },
                  { year: "2024", equipment: "Satellite Terminals", supplier: "Thales", value: "$25M" },
                  { year: "2023", equipment: "C4ISR Integration", supplier: "Local/International", value: "$50M" }
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
          <h2 className="text-3xl font-black text-white mb-12">DGDP Communications Requirements</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-amber-500/20">
              <h3 className="text-xl font-bold text-amber-400 mb-6">Technical Requirements</h3>
              <ul className="space-y-3">
                {[
                  "NATO/MIL-STD compliance certification",
                  "Interoperability with existing systems",
                  "Tropical climate specifications",
                  "Electromagnetic compatibility testing",
                  "Cybersecurity certifications",
                  "Technology transfer provisions"
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
                  "Technical specifications and datasheets",
                  "Quality assurance certificates",
                  "Export licenses and end-user certificates",
                  "Training and maintenance documentation",
                  "Warranty and service agreements",
                  "Offset and local content proposals"
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
              Ready to Register Your Communications Systems?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Navigate DGDP requirements with expert support for C4ISR and electronic warfare systems. 
              Our specialized team ensures smooth registration and compliance.
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