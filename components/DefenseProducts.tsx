'use client'

import { motion } from 'framer-motion'
import { CategoryCard } from './CategoryCard'
import { categories } from '@/data/categories'

export default function DefenseProducts() {
  return (
    <section id="products" className="py-24 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden border-b-2 border-amber-500">
      {/* Background Pattern */}
      <div className="absolute inset-0 hex-pattern opacity-[0.03]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">
              DGDP Procurement Categories
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Defence{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Procurement Categories
            </span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Comprehensive coverage across all DGDP-registered categories.
            Expert support for your market entry into Bangladesh&apos;s defence sector.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-gray-800/80 to-slate-800/80 backdrop-blur-sm rounded-sm p-12 max-w-4xl mx-auto border border-amber-500/30">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Enter Bangladesh&apos;s Defence Market?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              We provide comprehensive support across all defence procurement categories.
              Let us help you navigate the DGDP registration process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold rounded-sm hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg shadow-amber-500/25"
              >
                Discuss Your Requirements
              </a>
              <a
                href="#process"
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-sm hover:border-amber-500 hover:text-amber-400 transition-all duration-300"
              >
                View DGDP Process
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
