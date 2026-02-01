'use client'

import { motion } from 'framer-motion'
import { FileSignature, FolderOpen, Upload, Headphones, Check } from 'lucide-react'
import { GoldIcon } from './icons/GoldIcon'
import Link from 'next/link'

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Partnership Agreement",
      description: "Sign local agent agreement establishing Vanguard Technology as your authorized representative for DGDP proceedings.",
      deliverables: ["Agent agreement", "Power of attorney", "Scope definition"],
      icon: FileSignature,
    },
    {
      number: "02",
      title: "Document Preparation",
      description: "Compile and prepare all required DGDP documentation including Bengali translations and local certifications.",
      deliverables: ["Bengali translations", "Local certifications", "Technical documents"],
      icon: FolderOpen,
    },
    {
      number: "03",
      title: "DGDP Submission",
      description: "Physical submission to DGDP office in Dhaka with regular follow-ups and direct communication with officials.",
      deliverables: ["Office submission", "Regular follow-ups", "Query responses"],
      icon: Upload,
    },
    {
      number: "04",
      title: "Ongoing Support",
      description: "Maintain compliance status, provide tender notifications, and serve as your permanent local presence.",
      deliverables: ["DGDP maintenance", "Tender alerts", "Meeting representation"],
      icon: Headphones,
    }
  ]

  return (
    <section id="process" className="py-24 bg-navy-900 relative overflow-hidden border-b border-gold-500/20">
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
              Streamlined DGDP Process
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-steel-100 mb-4">
            Your Path to{' '}
            <span className="text-gradient-gold">
              DGDP Registration
            </span>
          </h2>
          <p className="text-steel-400 max-w-3xl mx-auto text-lg">
            A proven 4-step process to establish your presence in Bangladesh&apos;s defence market
            with complete local support and transparency at every milestone.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting Line */}
          <div className="absolute top-20 left-[12.5%] right-[12.5%] h-0.5 bg-gold-500/30">
            <div className="absolute inset-0 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 animate-pulse" />
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Step Number Circle */}
                  <div className="flex justify-center mb-8">
                    <div className="w-16 h-16 rounded-full bg-gold-500 flex items-center justify-center text-navy-900 font-bold text-xl border-4 border-navy-900 shadow-gold-glow z-10">
                      {step.number}
                    </div>
                  </div>

                  {/* Step Card */}
                  <div
                    className="group bg-navy-800 border border-navy-600 hover:border-gold-500 transition-all duration-300 overflow-hidden"
                    style={{
                      clipPath: 'polygon(16px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 16px)'
                    }}
                  >
                    {/* Icon Display */}
                    <div className="h-36 flex items-center justify-center bg-navy-700/50 border-b border-navy-600">
                      <GoldIcon icon={Icon} size={64} strokeWidth={1.25} className="drop-shadow-[0_0_15px_rgba(201,169,97,0.4)]" />
                    </div>

                    {/* Step Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-steel-100 mb-2 uppercase tracking-wide">
                        {step.title}
                      </h3>
                      <p className="text-steel-400 text-sm mb-4 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Deliverables */}
                      <div className="space-y-2">
                        {step.deliverables.map((deliverable, dIndex) => (
                          <div key={dIndex} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-gold-500 flex-shrink-0" strokeWidth={2} />
                            <span className="text-xs text-steel-300">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                className="relative mb-8 last:mb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex gap-4">
                  {/* Step Number & Line */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center text-navy-900 font-bold shadow-gold-glow">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 flex-1 bg-gold-500/30 mt-2" />
                    )}
                  </div>

                  {/* Step Content */}
                  <div
                    className="flex-grow pb-4 bg-navy-800 border border-navy-600 overflow-hidden"
                    style={{
                      clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 12px)'
                    }}
                  >
                    {/* Icon */}
                    <div className="h-28 flex items-center justify-center bg-navy-700/50 border-b border-navy-600">
                      <GoldIcon icon={Icon} size={48} strokeWidth={1.25} />
                    </div>

                    <div className="p-4">
                      <h3 className="text-lg font-bold text-steel-100 mb-2 uppercase">
                        {step.title}
                      </h3>
                      <p className="text-sm text-steel-400 mb-3">
                        {step.description}
                      </p>

                      {/* Deliverables */}
                      <div className="space-y-1.5">
                        {step.deliverables.map((deliverable, dIndex) => (
                          <div key={dIndex} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" strokeWidth={2} />
                            <span className="text-xs text-steel-300">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div
            className="bg-navy-800 border border-navy-600 p-12 text-center"
            style={{
              clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
            }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-steel-100 mb-4">
              Ready to Start Your DGDP Journey?
            </h3>
            <p className="text-steel-400 mb-8 max-w-2xl mx-auto">
              Navigate Bangladesh defence procurement with established local representation.
              We handle the complexity while you focus on business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="#contact"
                className="px-8 py-4 bg-gold-500 text-navy-900 font-semibold uppercase tracking-wider hover:bg-gold-400 transition-all duration-300 shadow-gold-button hover:shadow-gold-button-hover"
                style={{
                  clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)'
                }}
              >
                Start Partnership
              </Link>
              <Link
                href="#services"
                className="px-8 py-4 border-2 border-gold-500 text-gold-500 font-semibold uppercase tracking-wider hover:bg-gold-500/10 hover:text-gold-400 transition-all duration-300"
                style={{
                  clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)'
                }}
              >
                View Services
              </Link>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Free consultation",
                "Bangladesh expertise",
                "DGDP relationships",
                "24hr response"
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <Check className="w-5 h-5 text-gold-500 mx-auto mb-2" strokeWidth={2} />
                  <span className="text-sm text-steel-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
