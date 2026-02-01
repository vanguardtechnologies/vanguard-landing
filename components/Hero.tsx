'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Building2, MapPin, Clock, Handshake } from 'lucide-react'
import { GoldIcon } from './icons/GoldIcon'

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Ken Burns effect */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Image
          src="/images/hero/bangladesh-military.svg"
          alt="Bangladesh Armed Forces"
          fill
          priority
          quality={85}
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient Overlay - Navy colors */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(5, 10, 20, 0.95) 0%, rgba(5, 10, 20, 0.7) 50%, rgba(5, 10, 20, 0.4) 100%)'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-full max-w-2xl pt-20">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <div className="w-16 h-0.5 bg-gold-500 mb-4" />
            <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 px-4 py-2">
              <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
              <span className="text-gold-500 text-sm font-medium tracking-wider uppercase">
                DGDP Certified Partner
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-steel-100 leading-tight mb-6"
          >
            Enter Bangladesh&apos;s{' '}
            <span className="text-gradient-gold">
              Defence Market
            </span>{' '}
            Today
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-steel-400 mb-8 max-w-xl"
          >
            Expert DGDP registration, industry connections, and 24/7 local support
            for international defence manufacturers.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Link
              href="#contact"
              className="px-8 py-4 bg-gold-500 text-navy-900 font-semibold uppercase tracking-wider hover:bg-gold-400 transition-all duration-300 shadow-gold-button hover:shadow-gold-button-hover"
              style={{
                clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)'
              }}
            >
              Start Your Journey
            </Link>
            <Link
              href="#products"
              className="px-8 py-4 border-2 border-gold-500 text-gold-500 font-semibold uppercase tracking-wider hover:bg-gold-500/10 hover:text-gold-400 transition-all duration-300"
              style={{
                clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)'
              }}
            >
              Explore Capabilities
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-6 text-sm text-steel-300"
          >
            <div className="flex items-center gap-2">
              <GoldIcon icon={Building2} size={18} strokeWidth={1.5} />
              <span>DGDP Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <GoldIcon icon={MapPin} size={18} strokeWidth={1.5} />
              <span>Dhaka Based</span>
            </div>
            <div className="flex items-center gap-2">
              <GoldIcon icon={Clock} size={18} strokeWidth={1.5} />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <GoldIcon icon={Handshake} size={18} strokeWidth={1.5} />
              <span>15+ Years Experience</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-steel-400/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-gold-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
