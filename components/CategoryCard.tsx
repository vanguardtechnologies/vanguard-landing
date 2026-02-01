'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { Category } from '@/data/categories'

interface CategoryCardProps {
  category: Category
  index: number
}

export function CategoryCard({ category, index }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden border border-navy-600 hover:border-gold-500 transition-all duration-300 bg-navy-800"
      style={{
        clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 20px)'
      }}
    >
      {/* Image Container */}
      <div className="relative h-[200px] overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Gold Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(10, 22, 40, 0.9) 0%, transparent 100%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-gold-500" />
          <span className="text-gold-500 text-xs font-semibold tracking-wider uppercase">
            {category.name}
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-steel-100 font-medium mb-2">
          {category.subtitle}
        </p>

        {/* Budget */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-gold-400 font-bold">{category.budget}</span>
          <span className="text-steel-500 text-sm">Annual Budget</span>
        </div>

        {/* Link */}
        <Link
          href={category.link}
          className="inline-flex items-center text-gold-500 hover:text-gold-400 transition-colors group/link"
        >
          Explore Category
          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" strokeWidth={1.5} />
        </Link>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 shadow-gold-glow" />
      </div>
    </motion.div>
  )
}
