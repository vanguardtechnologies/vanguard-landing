'use client'

import { motion } from 'framer-motion'
import { MapPin, FileText, Users, TrendingUp, Check } from 'lucide-react'
import { GoldIcon } from './icons/GoldIcon'

export default function Services() {
  const services = [
    {
      number: "01",
      title: "Local Representation",
      description: "Authorized agent for DGDP proceedings with physical presence in Dhaka.",
      features: ["Agent agreement", "Dhaka office", "Meeting support"],
      icon: MapPin,
    },
    {
      number: "02",
      title: "Documentation Support",
      description: "Complete DGDP documentation including Bengali translations and compliance.",
      features: ["Bengali docs", "Compliance cert", "Translations"],
      icon: FileText,
    },
    {
      number: "03",
      title: "Industry Liaison",
      description: "Established relationships with DGDP personnel for smooth processing.",
      features: ["DGDP relations", "Industry network", "Communication"],
      icon: Users,
    },
    {
      number: "04",
      title: "Market Intelligence",
      description: "Tender opportunities and regulatory updates in defence procurement.",
      features: ["Tender alerts", "Market analysis", "Intelligence"],
      icon: TrendingUp,
    }
  ]

  return (
    <section id="services" className="py-24 bg-navy-900 relative overflow-hidden border-b border-gold-500/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(var(--gold-500) 1px, transparent 1px),
                             linear-gradient(90deg, var(--gold-500) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
            <span className="text-gold-500 text-sm font-medium tracking-wider uppercase">
              Essential Local Services
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-steel-100 mb-4">
            Strategic{' '}
            <span className="text-gradient-gold">
              Local Representation
            </span>
          </h2>
          <p className="text-steel-400 max-w-3xl mx-auto text-lg">
            DGDP procurement requires local representation. We bridge the gap between
            international manufacturers and Bangladesh&apos;s defence system.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Service Number Badge */}
                <div className="flex justify-center mb-6">
                  <div
                    className="w-14 h-14 bg-gold-500 flex items-center justify-center text-navy-900 font-bold text-lg"
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
                    }}
                  >
                    {service.number}
                  </div>
                </div>

                {/* Service Card */}
                <div
                  className="group bg-navy-800 border border-navy-600 hover:border-gold-500 transition-all duration-300 overflow-hidden"
                  style={{
                    clipPath: 'polygon(16px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 16px)'
                  }}
                >
                  {/* Icon Display */}
                  <div className="h-32 flex items-center justify-center bg-navy-700/50 border-b border-navy-600">
                    <GoldIcon icon={Icon} size={56} strokeWidth={1.25} className="drop-shadow-[0_0_10px_rgba(201,169,97,0.3)]" />
                  </div>

                  {/* Service Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-steel-100 mb-2 uppercase tracking-wide">
                      {service.title}
                    </h3>
                    <p className="text-steel-400 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features with Gold Checkmarks */}
                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-gold-500 flex-shrink-0" strokeWidth={2} />
                          <span className="text-sm text-steel-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-gold-glow" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div
            className="bg-navy-800 border border-navy-600 p-8"
            style={{
              clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
            }}
          >
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { value: "60%", label: "Faster Processing" },
                { value: "100%", label: "Bengali Support" },
                { value: "24/7", label: "Local Presence" },
                { value: "100%", label: "Success Rate" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-gold-500 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-steel-400 font-medium uppercase tracking-wider text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
