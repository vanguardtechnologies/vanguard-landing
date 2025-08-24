'use client'

import { useState, useEffect } from 'react'

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b-2 border-amber-500/50' 
        : 'bg-gray-900/90 backdrop-blur-lg shadow-xl border-b-2 border-gray-700'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center group">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-sm flex items-center justify-center mr-4 shadow-xl transform transition-all duration-300 group-hover:scale-105 border-2 border-amber-400/50">
                <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 12l2 2 4-4m5.586-4.414A2 2 0 0119 9.414V19a2 2 0 01-2 2H7a2 2 0 01-2-2V9.414a2 2 0 01.586-1.414L9 4.586A2 2 0 0110.414 4h3.172a2 2 0 011.414.586l3.414 3.414z" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-black text-gray-100 tracking-tight uppercase">
                  Vanguard Technology
                </h1>
                <div className="flex items-center mt-1">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse shadow-lg shadow-amber-500/50"></div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Certified DGDP Agent
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-10">
            <a href="#products" className="relative text-gray-300 hover:text-amber-400 transition-all duration-300 font-bold uppercase text-sm tracking-wider group">
              Defense Categories
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#services" className="relative text-gray-300 hover:text-amber-400 transition-all duration-300 font-bold uppercase text-sm tracking-wider group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#process" className="relative text-gray-300 hover:text-amber-400 transition-all duration-300 font-bold uppercase text-sm tracking-wider group">
              DGDP Process
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="relative text-gray-300 hover:text-amber-400 transition-all duration-300 font-bold uppercase text-sm tracking-wider group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <div className="flex items-center space-x-3 ml-4">
              <a 
                href="#services" 
                className="border-2 border-gray-600 text-gray-300 px-5 py-2.5 rounded-sm font-bold uppercase text-sm tracking-wider hover:border-amber-500 hover:bg-amber-500/10 hover:text-amber-400 transition-all duration-300"
              >
                Explore Services
              </a>
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 px-5 py-2.5 rounded-sm font-bold uppercase text-sm tracking-wider hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg"
              >
                Start Partnership
              </a>
            </div>
          </nav>

          <button 
            className="lg:hidden p-3 rounded-sm hover:bg-gray-800 transition-all duration-300 border-2 border-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t-2 border-gray-700/50 pt-6 bg-gray-800/50 backdrop-blur-sm rounded-sm p-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#products" 
                className="text-gray-300 hover:text-amber-400 transition-all duration-300 font-bold uppercase text-sm tracking-wider py-3 px-4 rounded-sm hover:bg-gray-800 border border-gray-700 hover:border-amber-500/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Defense Categories
              </a>
              <a 
                href="#services" 
                className="text-gray-300 hover:text-amber-400 transition-all duration-300 font-bold uppercase text-sm tracking-wider py-3 px-4 rounded-sm hover:bg-gray-800 border border-gray-700 hover:border-amber-500/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#process" 
                className="text-gray-300 hover:text-amber-400 transition-all duration-300 font-bold uppercase text-sm tracking-wider py-3 px-4 rounded-sm hover:bg-gray-800 border border-gray-700 hover:border-amber-500/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                DGDP Process
              </a>
              <a 
                href="#contact" 
                className="text-gray-300 hover:text-amber-400 transition-all duration-300 font-bold uppercase text-sm tracking-wider py-3 px-4 rounded-sm hover:bg-gray-800 border border-gray-700 hover:border-amber-500/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <div className="flex flex-col space-y-3 pt-4">
                <a 
                  href="#services" 
                  className="border-2 border-gray-600 text-gray-300 px-6 py-3 rounded-sm font-bold uppercase text-sm tracking-wider text-center hover:border-amber-500 hover:bg-amber-500/10 hover:text-amber-400 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Explore Services
                </a>
                <a 
                  href="#contact" 
                  className="bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 px-6 py-3 rounded-sm font-bold uppercase text-sm tracking-wider text-center hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Start Partnership
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}