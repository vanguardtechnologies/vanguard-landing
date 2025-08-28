'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-2 left-4 right-4 z-50 transition-all duration-700 rounded-2xl ${
        isScrolled 
          ? 'shadow-2xl' 
          : 'shadow-xl'
      }`}
      style={{
        background: `linear-gradient(135deg, 
          rgba(10, 14, 26, ${isScrolled ? 0.95 : 0.92}) 0%, 
          rgba(26, 31, 46, ${isScrolled ? 0.92 : 0.88}) 30%, 
          rgba(31, 41, 55, ${isScrolled ? 0.88 : 0.85}) 100%)`,
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        border: `2px solid ${isScrolled 
          ? 'rgba(255, 149, 0, 0.4)' 
          : 'rgba(255, 149, 0, 0.25)'}`,
        boxShadow: isScrolled 
          ? `0 0 40px rgba(255, 149, 0, 0.2), 
             0 20px 40px -10px rgba(0, 0, 0, 0.4),
             inset 0 1px 0 rgba(255, 255, 255, 0.1),
             inset 0 -1px 0 rgba(255, 149, 0, 0.1)` 
          : `0 0 30px rgba(255, 149, 0, 0.15), 
             0 10px 25px -5px rgba(0, 0, 0, 0.3),
             inset 0 1px 0 rgba(255, 255, 255, 0.05),
             inset 0 -1px 0 rgba(255, 149, 0, 0.05)`
      }}
    >
      <div className="container mx-auto px-6 py-3.5 relative">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group cursor-pointer">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 transform transition-all duration-300 group-hover:scale-110 relative"
                   style={{
                     filter: 'drop-shadow(0 0 8px rgba(255, 149, 0, 0.2))',
                   }}>
                <div className="relative w-full h-full">
                  <Image 
                    src="/icons/vanguard-logo-black.png" 
                    alt="Vanguard Technology Logo"
                    fill
                    className="object-contain transition-all duration-300 group-hover:brightness-110"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(79%) sepia(67%) saturate(348%) hue-rotate(6deg) brightness(101%) contrast(101%)'
                    }}
                    priority
                  />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-100 tracking-tight transition-all duration-300 group-hover:text-amber-300">
                  Vanguard Technology
                </h1>
              </div>
            </Link>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-1">
            {[
              { href: '#products', label: 'Defence Categories', icon: 'M9 12l2 2 4-4m5.586-4.414A2 2 0 0119 9.414V19a2 2 0 01-2 2H7a2 2 0 01-2-2V9.414a2 2 0 01.586-1.414L9 4.586A2 2 0 0110.414 4h3.172a2 2 0 011.414.586l3.414 3.414z' },
              { href: '#services', label: 'Services', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6' },
              { href: '#process', label: 'DGDP Process', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
              { href: '#contact', label: 'Contact', icon: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' }
            ].map((item, index) => (
              <a key={index} href={item.href} className="group relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-500 font-medium text-sm rounded-xl hover:bg-gradient-to-r hover:from-amber-500/10 hover:to-amber-600/10 hover:backdrop-blur-sm">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                  <span className="group-hover:tracking-wide transition-all duration-300">{item.label}</span>
                </div>
                <span className="absolute -bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100"></span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-500/5 to-amber-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
              </a>
            ))}
            
            {/* Enhanced CTA Buttons */}
            <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-gradient-to-b from-transparent via-amber-500/30 to-transparent">
              <a 
                href="#services" 
                className="group relative overflow-hidden border-2 border-amber-500/50 text-amber-400 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider hover:text-gray-900 transition-all duration-500 hover:shadow-lg hover:shadow-amber-500/25 hover:-translate-y-0.5"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Services</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500 origin-left rounded-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-sm transform scale-110"></div>
              </a>
              <a 
                href="#contact" 
                className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider hover:from-amber-400 hover:to-amber-500 transition-all duration-500 shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/40 hover:-translate-y-0.5 hover:scale-105"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Start Partnership</span>
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-300/30 to-amber-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur transform scale-110"></div>
              </a>
            </div>
          </nav>

          <button 
            className="lg:hidden relative p-3 bg-gray-900/40 backdrop-blur-md border-2 border-amber-500/30 text-amber-400 hover:bg-amber-500/20 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-500 rounded-xl hover:scale-105"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-5 h-5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>
        
        {/* Enhanced Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-8 pb-6 relative animate-in slide-in-from-top duration-500">
            {/* Enhanced accent line */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mb-8 shadow-sm shadow-amber-500/50"></div>
            
            <div className="bg-gray-900/95 backdrop-blur-2xl border-2 border-amber-500/30 rounded-2xl p-8 shadow-2xl" style={{
              background: 'linear-gradient(135deg, rgba(10, 14, 26, 0.95) 0%, rgba(26, 31, 46, 0.92) 50%, rgba(31, 41, 55, 0.90) 100%)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(255, 149, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}>
              <div className="flex flex-col space-y-3">
                {[
                  { href: '#products', label: 'Defence Categories', icon: 'M9 12l2 2 4-4m5.586-4.414A2 2 0 0119 9.414V19a2 2 0 01-2 2H7a2 2 0 01-2-2V9.414a2 2 0 01.586-1.414L9 4.586A2 2 0 0110.414 4h3.172a2 2 0 011.414.586l3.414 3.414z' },
                  { href: '#services', label: 'Services', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6' },
                  { href: '#process', label: 'DGDP Process', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
                  { href: '#contact', label: 'Contact', icon: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' }
                ].map((item, index) => (
                  <a 
                    key={index}
                    href={item.href}
                    className="group relative flex items-center space-x-4 text-gray-300 hover:text-white transition-all duration-500 font-bold uppercase text-sm tracking-wider py-5 px-6 bg-gray-800/40 hover:bg-gradient-to-r hover:from-amber-500/20 hover:to-amber-600/20 border-2 border-gray-700/30 hover:border-amber-500/50 rounded-2xl backdrop-blur-sm hover:shadow-lg hover:shadow-amber-500/10 hover:-translate-y-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/10 to-amber-600/10 border border-amber-500/20 flex items-center justify-center group-hover:from-amber-500/30 group-hover:to-amber-600/30 group-hover:border-amber-400/50 transition-all duration-500 group-hover:scale-110">
                      <svg className="w-6 h-6 text-amber-400 group-hover:text-amber-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                      </svg>
                    </div>
                    <span className="group-hover:tracking-widest transition-all duration-300">{item.label}</span>
                    <div className="absolute right-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500/5 to-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </a>
                ))}
                
                {/* Enhanced Mobile CTA Buttons */}
                <div className="flex flex-col space-y-4 pt-8 mt-8 border-t border-gradient-to-r from-transparent via-amber-500/30 to-transparent">
                  <a 
                    href="#services" 
                    className="group relative overflow-hidden border-2 border-amber-500/50 text-amber-400 px-8 py-5 text-center font-bold uppercase text-sm tracking-wider hover:text-gray-900 transition-all duration-500 rounded-2xl hover:shadow-lg hover:shadow-amber-500/25"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span>Explore Services</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-2xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur transform scale-110"></div>
                  </a>
                  <a 
                    href="#contact" 
                    className="group relative bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 px-8 py-5 text-center font-black uppercase text-sm tracking-wider hover:from-amber-400 hover:to-amber-500 transition-all duration-500 shadow-xl hover:shadow-2xl rounded-2xl flex items-center justify-center space-x-3 hover:scale-105"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>Start Partnership</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-300/30 to-amber-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur transform scale-110"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}