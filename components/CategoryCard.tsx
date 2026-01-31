'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
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
      className="group relative overflow-hidden rounded-sm border-2 border-gray-700 hover:border-amber-500/50 transition-colors duration-300"
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
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, ${category.color}40 0%, transparent 100%)`
          }}
        />
      </div>

      {/* Content */}
      <div className="p-6 bg-gray-800/80 backdrop-blur-sm">
        {/* Category Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: category.color }}
          />
          <span className="text-xs font-semibold tracking-wider uppercase text-gray-400">
            {category.name}
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-white font-medium mb-2">
          {category.subtitle}
        </p>

        {/* Budget */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-amber-500 font-bold">{category.budget}</span>
          <span className="text-gray-500 text-sm">Annual Budget</span>
        </div>

        {/* Link */}
        <Link
          href={category.link}
          className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors"
        >
          Explore Category
          <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}
