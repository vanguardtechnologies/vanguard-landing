'use client'

import { motion } from 'framer-motion'
import { CategoryCard } from './CategoryCard'
import { categories } from '@/data/categories'
import Link from 'next/link'

export default function DefenseProducts() {
  return (
    <section id="products" className="py-24 bg-navy-900 relative overflow-hidden border-b border-gold-500/20">
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
              DGDP Procurement Categories
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-steel-100 mb-4">
            Defence{' '}
            <span className="text-gradient-gold">
              Procurement Categories
            </span>
          </h2>
          <p className="text-steel-400 max-w-3xl mx-auto text-lg">
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
          <div
            className="bg-navy-800/80 backdrop-blur-sm p-12 max-w-4xl mx-auto border border-navy-600 hover:border-gold-500/50 transition-colors duration-300"
            style={{
              clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
            }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-steel-100 mb-4">
              Ready to Enter Bangladesh&apos;s Defence Market?
            </h3>
            <p className="text-steel-400 mb-8 max-w-2xl mx-auto">
              We provide comprehensive support across all defence procurement categories.
              Let us help you navigate the DGDP registration process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="px-8 py-4 bg-gold-500 text-navy-900 font-semibold uppercase tracking-wider hover:bg-gold-400 transition-all duration-300 shadow-gold-button hover:shadow-gold-button-hover"
                style={{
                  clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)'
                }}
              >
                Discuss Your Requirements
              </Link>
              <Link
                href="#process"
                className="px-8 py-4 border-2 border-gold-500 text-gold-500 font-semibold uppercase tracking-wider hover:bg-gold-500/10 hover:text-gold-400 transition-all duration-300"
                style={{
                  clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)'
                }}
              >
                View DGDP Process
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
