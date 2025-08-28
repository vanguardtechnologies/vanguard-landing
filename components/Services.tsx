'use client'

import { motion } from 'framer-motion'
import { 
  SimpleOfficeIcon,
  SimpleDocumentIcon,
  SimpleNetworkIcon,
  SimpleDataIcon
} from './SimpleServiceIcons'

export default function Services() {
  const services = [
    {
      number: "01",
      title: "Local Representation",
      description: "Authorized agent for DGDP proceedings with physical presence in Dhaka.",
      features: ["Agent agreement", "Dhaka office", "Meeting support"],
      icon: SimpleOfficeIcon,
      color: 'from-blue-600/20 to-blue-800/20',
      iconColor: 'text-blue-400'
    },
    {
      number: "02",
      title: "Documentation Support",
      description: "Complete DGDP documentation including Bengali translations and compliance.",
      features: ["Bengali docs", "Compliance cert", "Translations"],
      icon: SimpleDocumentIcon,
      color: 'from-green-600/20 to-green-800/20',
      iconColor: 'text-green-400'
    },
    {
      number: "03",
      title: "Industry Liaison",
      description: "Established relationships with DGDP personnel for smooth processing.",
      features: ["DGDP relations", "Industry network", "Communication"],
      icon: SimpleNetworkIcon,
      color: 'from-purple-600/20 to-purple-800/20',
      iconColor: 'text-purple-400'
    },
    {
      number: "04",
      title: "Market Intelligence",
      description: "Tender opportunities and regulatory updates in defence procurement.",
      features: ["Tender alerts", "Market analysis", "Intelligence"],
      icon: SimpleDataIcon,
      color: 'from-orange-600/20 to-orange-800/20',
      iconColor: 'text-orange-400'
    }
  ]

  return (
    <section id="services" className="py-0 bg-gradient-to-b from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden border-b-2 border-amber-500">
      {/* Defence Pattern Overlay */}
      <div className="absolute inset-0 hex-pattern"></div>
      <div className="w-full relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gray-800/50 backdrop-blur-sm border-2 border-amber-500/50 text-amber-400 px-6 py-3 rounded-sm text-sm font-black uppercase tracking-wider mb-6 shadow-xl">
              <span className="w-3 h-3 bg-amber-500 rounded-full mr-3 animate-pulse shadow-lg shadow-amber-500/50"></span>
              Essential Local Services
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-gray-100 mb-4 uppercase tracking-tight">
              Strategic Local Representation
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              DGDP procurement requires local representation. We bridge the gap between 
              international manufacturers and Bangladesh's defence system.
            </p>
          </div>

          {/* Compact Services Grid - Similar to Process Section */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Service Number Node */}
                  <motion.div 
                    className="flex justify-center mb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-sm flex items-center justify-center text-gray-900 font-black text-lg shadow-xl z-10 border-3 border-gray-800 transform rotate-45">
                      <span className="transform -rotate-45">{service.number}</span>
                    </div>
                  </motion.div>
                  
                  {/* Service Card */}
                  <div className="group bg-gray-800/80 backdrop-blur-sm rounded-sm shadow-xl hover:shadow-amber-500/30 transition-all duration-300 overflow-hidden border-2 border-gray-700 hover:border-amber-500/50">
                    {/* Icon Display */}
                    <div className={`relative h-32 overflow-hidden bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
                        <div className="absolute inset-0 tech-grid-glow"></div>
                      </div>
                      
                      {/* Icon */}
                      <div className={`${service.iconColor} drop-shadow-2xl`}>
                        <Icon size={80} className="filter drop-shadow-lg" />
                      </div>
                      
                      {/* Glow Effect */}
                      <div className="absolute inset-0 blur-xl opacity-30 group-hover:opacity-50 transition-opacity">
                        <Icon size={80} className={service.iconColor} />
                      </div>
                    </div>
                    
                    {/* Service Content */}
                    <div className="p-4">
                      <h3 className="text-lg font-black text-gray-100 mb-2 uppercase tracking-wide">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-xs mb-3 leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* Compact Features */}
                      <ul className="space-y-1">
                        {service.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start">
                            <svg className="w-3 h-3 text-amber-400 mr-1.5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-xs text-gray-400 font-semibold">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
          
          {/* Compact Stats Section */}
          <div className="mt-12 bg-gradient-to-r from-gray-800 to-slate-800 rounded-sm p-8 text-white border-2 border-amber-500/30 relative overflow-hidden">
            <div className="absolute inset-0 tech-grid-glow"></div>
            <div className="relative z-10">
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { value: "60%", label: "Faster Processing" },
                  { value: "100%", label: "Bengali Support" },
                  { value: "24/7", label: "Local Presence" },
                  { value: "100%", label: "Success Rate" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-black text-amber-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-300 font-bold uppercase tracking-wider text-xs">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
    </section>
  )
}