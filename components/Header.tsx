'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { mobileMenuContainer, mobileMenuItem } from '@/lib/animations'

const navItems = [
  { href: '#products', label: 'Categories' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-900/95 backdrop-blur-md border-b border-gold-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <Image
                src="/icons/vanguard-logo-black.png"
                alt="Vanguard Technology"
                fill
                className="object-contain transition-all duration-300 group-hover:brightness-110"
                style={{
                  filter: 'brightness(0) saturate(100%) invert(75%) sepia(50%) saturate(400%) hue-rotate(10deg) brightness(95%) contrast(90%)'
                }}
                priority
              />
            </div>
            <span className="text-gold-500 font-bold text-xl tracking-wide group-hover:text-gold-400 transition-colors duration-200">
              VANGUARD
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-steel-200 hover:text-gold-500 transition-colors duration-200 text-sm font-medium uppercase tracking-wider"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            href="#contact"
            className="hidden lg:flex items-center justify-center px-6 py-3 bg-gold-500 text-navy-900 font-semibold text-sm uppercase tracking-wider hover:bg-gold-400 transition-all duration-300 shadow-gold-button hover:shadow-gold-button-hover"
            style={{
              clipPath: 'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)'
            }}
          >
            Start Partnership
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-steel-100 hover:text-gold-500 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden fixed inset-0 top-20 bg-navy-950/98 backdrop-blur-lg z-40"
              variants={mobileMenuContainer}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="px-4 pt-8 pb-6">
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <motion.div key={item.label} variants={mobileMenuItem}>
                      <Link
                        href={item.href}
                        className="block py-4 px-6 text-steel-100 hover:text-gold-500 hover:bg-navy-800/50 text-lg font-medium uppercase tracking-wider transition-all duration-200 border-b border-navy-700/50"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  className="mt-8 px-4"
                  variants={mobileMenuItem}
                >
                  <Link
                    href="#contact"
                    className="flex items-center justify-center w-full py-4 bg-gold-500 text-navy-900 font-semibold text-sm uppercase tracking-wider hover:bg-gold-400 transition-all duration-300"
                    style={{
                      clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)'
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Start Partnership
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
