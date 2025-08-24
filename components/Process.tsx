'use client'

import { motion } from 'framer-motion'
import { 
  ConsultationIcon,
  PreparationIcon,
  SubmissionIcon,
  SupportIcon
} from './ProcessIcons'
import { FileSignature, FileStack, Upload, HeadphonesIcon } from 'lucide-react'

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Partnership Agreement",
      description: "Sign local agent agreement establishing Vanguard Technology as your authorized representative for DGDP proceedings in Bangladesh.",
      deliverables: ["Agent agreement", "Power of attorney", "Scope definition"],
      icon: ConsultationIcon,
      lucideIcon: FileSignature,
      color: 'from-blue-600/20 to-blue-800/20',
      iconColor: 'text-blue-400'
    },
    {
      number: "02", 
      title: "Document Preparation",
      description: "Compile and prepare all required DGDP documentation including Bengali translations, local certifications, and technical specifications.",
      deliverables: ["Bengali translations", "Local certifications", "Technical documents"],
      icon: PreparationIcon,
      lucideIcon: FileStack,
      color: 'from-green-600/20 to-green-800/20',
      iconColor: 'text-green-400'
    },
    {
      number: "03",
      title: "DGDP Submission & Follow-up", 
      description: "Physical submission to DGDP office in Dhaka with regular follow-ups, query responses, and direct communication with ministry officials.",
      deliverables: ["Office submission", "Regular follow-ups", "Query responses"],
      icon: SubmissionIcon,
      lucideIcon: Upload,
      color: 'from-purple-600/20 to-purple-800/20',
      iconColor: 'text-purple-400'
    },
    {
      number: "04",
      title: "Ongoing Local Support",
      description: "Maintain compliance status, provide tender notifications, attend meetings on your behalf, and serve as your permanent local presence.",
      deliverables: ["DGDP maintenance", "Tender alerts", "Meeting representation"],
      icon: SupportIcon,
      lucideIcon: HeadphonesIcon,
      color: 'from-orange-600/20 to-orange-800/20',
      iconColor: 'text-orange-400'
    }
  ]

  return (
    <section id="process" className="py-0 bg-gradient-to-b from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden border-b-2 border-amber-500">
      {/* Defense Pattern Overlay */}
      <div className="absolute inset-0 hex-pattern"></div>
      <div className="absolute inset-0 radar-pattern"></div>
      <div className="w-full relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gray-800/50 backdrop-blur-sm border-2 border-amber-500/50 text-amber-400 px-6 py-3 rounded-sm text-sm font-black uppercase tracking-wider mb-8 shadow-xl">
            <span className="w-3 h-3 bg-amber-500 rounded-full mr-3 animate-pulse shadow-lg shadow-amber-500/50"></span>
            Streamlined DGDP Process
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-gray-100 mb-4 uppercase tracking-tight">
            Your Path to DGDP Registration
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A proven 4-step process to establish your presence in Bangladesh's defense market 
            with complete local support and transparency at every milestone.
          </p>
        </div>

        {/* Horizontal Process Timeline */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            {/* Horizontal Line */}
            <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-amber-500/20 via-amber-400/40 to-amber-500/20"></div>
            
            {/* Process Steps Grid */}
            <div className="grid grid-cols-4 gap-6">
              {steps.map((step, index) => {
                const Icon = step.icon
                const LucideIcon = step.lucideIcon
                return (
                  <motion.div 
                    key={index} 
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {/* Step Node */}
                    <motion.div 
                      className="flex justify-center mb-8"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-sm flex items-center justify-center text-gray-900 font-black text-xl shadow-xl z-10 border-4 border-gray-800 transform rotate-45">
                        <span className="transform -rotate-45">{step.number}</span>
                      </div>
                    </motion.div>
                    
                    {/* Step Card with Vector Icon */}
                    <div className="group bg-gray-800/80 backdrop-blur-sm rounded-sm shadow-xl hover:shadow-amber-500/30 transition-all duration-300 overflow-hidden border-2 border-gray-700 hover:border-amber-500/50">
                      {/* Vector Icon Display */}
                      <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
                          <div className="absolute inset-0 tech-grid-glow"></div>
                        </div>
                        
                        {/* Animated Icon */}
                        <motion.div 
                          className="relative transform-gpu transition-all duration-500"
                          animate={{ 
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.05, 1]
                          }}
                          transition={{ 
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                        >
                          <div className={`${step.iconColor} drop-shadow-2xl`}>
                            <Icon size={100} className="filter drop-shadow-lg" />
                          </div>
                          
                          {/* Glow Effect */}
                          <div className="absolute inset-0 blur-xl opacity-50 group-hover:opacity-70 transition-opacity">
                            <Icon size={100} className={step.iconColor} />
                          </div>
                        </motion.div>
                        
                        {/* Small Badge */}
                        <div className="absolute top-3 right-3 bg-gray-900/90 backdrop-blur-sm rounded-sm p-1.5 shadow-lg border border-amber-500/30">
                          <LucideIcon className="w-4 h-4 text-amber-400" />
                        </div>
                      </div>
                    
                    {/* Step Content */}
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-black text-gray-100 uppercase tracking-wide">
                          {step.title}
                        </h3>
                      </div>
                      
                      <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Deliverables */}
                      <div className="space-y-2">
                        {step.deliverables.map((deliverable, dIndex) => (
                          <div key={dIndex} className="flex items-start">
                            <svg className="w-4 h-4 text-amber-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-xs text-gray-400 font-semibold">{deliverable}</span>
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
              const LucideIcon = step.lucideIcon
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
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-sm flex items-center justify-center text-gray-900 font-black shadow-lg transform rotate-45">
                        <span className="transform -rotate-45">
                        {step.number}</span>
                      </div>
                      {index < steps.length - 1 && (
                        <div className="w-0.5 h-full bg-amber-500/30 mx-auto mt-2"></div>
                      )}
                    </div>
                    
                    {/* Step Content */}
                    <div className="flex-grow pb-8">
                      <div className="bg-gray-800/80 backdrop-blur-sm rounded-sm shadow-xl overflow-hidden border-2 border-amber-500/30">
                        {/* Vector Icon Display */}
                        <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                          {/* Background Pattern */}
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
                          </div>
                          
                          {/* Icon */}
                          <div className="relative">
                            <div className={`${step.iconColor} drop-shadow-2xl`}>
                              <Icon size={56} className="filter drop-shadow-lg" />
                            </div>
                          </div>
                          
                          {/* Small Badge */}
                          <div className="absolute top-3 right-3 bg-gray-900/90 backdrop-blur-sm rounded-sm p-1.5 shadow-lg border border-amber-500/30">
                            <LucideIcon className="w-4 h-4 text-amber-400" />
                          </div>
                        </div>
                      
                      <div className="p-5">
                        <h3 className="text-lg font-black text-gray-100 mb-2 uppercase tracking-wide">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-400 mb-4">
                          {step.description}
                        </p>
                        
                        {/* Deliverables */}
                        <div className="space-y-2">
                          {step.deliverables.map((deliverable, dIndex) => (
                            <div key={dIndex} className="flex items-start">
                              <svg className="w-4 h-4 text-amber-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-xs text-gray-400">{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              )
            })}
          </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center bg-gradient-to-r from-gray-800 to-slate-800 rounded-sm p-12 border-2 border-amber-500/30 relative overflow-hidden">
            <div className="absolute inset-0 tech-grid-glow"></div>
            <div className="relative z-10">
          <h3 className="text-2xl font-black text-gray-100 mb-4 uppercase tracking-tight">
            Ready to Start Your DGDP Journey?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Navigate Bangladesh defense procurement with established local representation. 
            We handle the complexity while you focus on business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact"
              className="btn-primary"
            >
              Start Partnership
            </a>
            <a 
              href="#services"
              className="btn-secondary"
            >
              View Services
            </a>
          </div>
          
          {/* Benefits */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              "Free consultation",
              "Bangladesh expertise",
              "DGDP relationships",
              "24hr response"
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <svg className="w-6 h-6 text-amber-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-300">{benefit}</span>
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