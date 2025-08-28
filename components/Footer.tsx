'use client'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer 
      className="relative overflow-hidden text-gray-400 pt-12 pb-12"
      style={{
        background: `linear-gradient(135deg, 
          rgba(10, 14, 26, 0.98) 0%, 
          rgba(26, 31, 46, 0.95) 30%, 
          rgba(31, 41, 55, 0.92) 60%,
          rgba(10, 14, 26, 0.98) 100%)`,
        backdropFilter: 'blur(25px) saturate(200%)',
        WebkitBackdropFilter: 'blur(25px) saturate(200%)',
        borderTop: '3px solid rgba(255, 149, 0, 0.35)',
        boxShadow: `0 -30px 60px rgba(255, 149, 0, 0.08), 
                   0 -15px 35px rgba(0, 0, 0, 0.4),
                   inset 0 2px 0 rgba(255, 255, 255, 0.08),
                   inset 0 -2px 0 rgba(255, 149, 0, 0.08)`
      }}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 hex-pattern opacity-15"></div>
      <div className="absolute inset-0 tech-grid-glow opacity-25"></div>
      
      {/* Decorative Gradient Orbs */}
      <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full"
           style={{
             background: 'radial-gradient(circle, rgba(255, 149, 0, 0.1) 0%, transparent 70%)',
             filter: 'blur(40px)',
             animation: 'pulse 8s ease-in-out infinite'
           }}></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full"
           style={{
             background: 'radial-gradient(circle, rgba(255, 183, 0, 0.08) 0%, transparent 70%)',
             filter: 'blur(60px)',
             animation: 'pulse 10s ease-in-out infinite reverse'
           }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
           style={{
             background: 'radial-gradient(circle, rgba(255, 149, 0, 0.05) 0%, transparent 50%)',
             filter: 'blur(80px)',
             animation: 'pulse 12s ease-in-out infinite'
           }}></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Main Content Area */}
        <div className="space-y-12">
          
          {/* Top Section - Company Branding */}
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 pb-10 border-b-2 border-gradient-to-r from-transparent via-amber-500/40 to-transparent">
            
            {/* Company Identity - Enhanced with Bigger Logo */}
            <div className="flex items-center space-x-6">
              <div className="relative w-24 h-24 rounded-2xl flex items-center justify-center transform transition-all duration-500 hover:scale-110 hover:rotate-3 group"
                   style={{
                     background: 'linear-gradient(135deg, rgba(255, 149, 0, 0.1), rgba(255, 183, 0, 0.15))',
                     border: '2px solid rgba(255, 149, 0, 0.3)',
                     filter: 'drop-shadow(0 0 20px rgba(255, 149, 0, 0.4))',
                     boxShadow: '0 10px 40px rgba(255, 149, 0, 0.2), inset 0 0 20px rgba(255, 149, 0, 0.1)'
                   }}>
                <div className="relative w-20 h-20">
                  <Image 
                    src="/icons/vanguard-logo-black.png" 
                    alt="Vanguard Technology Logo"
                    fill
                    className="object-contain transition-all duration-500 group-hover:brightness-125 group-hover:scale-110"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(79%) sepia(67%) saturate(348%) hue-rotate(6deg) brightness(101%) contrast(101%)'
                    }}
                  />
                </div>
                <div className="absolute inset-0 rounded-2xl animate-pulse"
                     style={{
                       background: 'radial-gradient(circle at center, transparent 30%, rgba(255, 149, 0, 0.2) 100%)',
                       animation: 'pulse 3s ease-in-out infinite'
                     }}></div>
              </div>
              <div>
                <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 tracking-tight mb-2 uppercase">
                  Vanguard Technology
                </h3>
                <div className="text-base text-gray-300 max-w-lg leading-relaxed">
                  Bangladesh's premier DGDP agent, bridging international defense manufacturers with strategic local opportunities
                </div>
                <div className="flex items-center mt-3 space-x-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-amber-400 rounded-full mr-2 animate-pulse shadow-lg shadow-amber-500/60"></div>
                    <span className="text-sm font-bold text-amber-400 uppercase tracking-wider">
                      Certified DGDP Agent
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-amber-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                      Dhaka Based
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-8 lg:gap-10">
              <div className="space-y-4 p-6 rounded-2xl"
                   style={{
                     background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.3), rgba(55, 65, 81, 0.2))',
                     border: '1px solid rgba(255, 149, 0, 0.15)',
                     backdropFilter: 'blur(10px)'
                   }}>
                <h4 className="text-sm font-black text-amber-400 uppercase tracking-widest flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Direct Line
                </h4>
                <div className="space-y-3">
                  <a 
                    href="mailto:defence@vguardtech.com" 
                    className="flex items-center text-base text-gray-200 hover:text-amber-400 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-amber-500/20 to-amber-600/20 flex items-center justify-center mr-3 group-hover:scale-110 transition-all duration-300">
                      <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="font-medium">defence@vguardtech.com</span>
                  </a>
                  
                  <a 
                    href="https://wa.me/8801769510645" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-base text-gray-200 hover:text-green-400 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-green-500/20 to-green-600/20 flex items-center justify-center mr-3 group-hover:scale-110 transition-all duration-300">
                      <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                    </div>
                    <span className="font-medium">+880 176 951 0645</span>
                  </a>
                </div>
              </div>

              <div className="space-y-4 p-6 rounded-2xl"
                   style={{
                     background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.3), rgba(55, 65, 81, 0.2))',
                     border: '1px solid rgba(255, 149, 0, 0.15)',
                     backdropFilter: 'blur(10px)'
                   }}>
                <h4 className="text-sm font-black text-amber-400 uppercase tracking-widest flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Office Hours
                </h4>
                <div className="text-base text-gray-300 space-y-2">
                  <div className="flex items-center font-medium">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-amber-500/20 to-amber-600/20 flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span>Sun-Thu: 9 AM - 6 PM</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-gray-600/20 to-gray-700/20 flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span>Dhaka, Bangladesh</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Social & Copyright - Enhanced */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            
            {/* Enhanced Social Links - Much Bigger Icons */}
            <div className="flex items-center gap-6">
              <span className="text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300 uppercase tracking-widest">Connect With Us</span>
              <div className="flex space-x-4">
                {[
                  { 
                    href: 'https://twitter.com/VanguardTech_bd', 
                    name: 'X / Twitter', 
                    color: '#1DA1F2',
                    gradientFrom: '#1DA1F2',
                    gradientTo: '#0088cc',
                    icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' 
                  },
                  { 
                    href: 'https://www.linkedin.com/company/107561584/', 
                    name: 'LinkedIn', 
                    color: '#0077B5',
                    gradientFrom: '#0077B5',
                    gradientTo: '#004182',
                    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' 
                  },
                  {
                    href: 'https://wa.me/8801769510645',
                    name: 'WhatsApp',
                    color: '#25D366',
                    gradientFrom: '#25D366',
                    gradientTo: '#128C7E',
                    icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488'
                  }
                ].map((social, index) => (
                  <div key={index} className="group relative">
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 hover:scale-125 hover:-translate-y-2 transform hover:rotate-3 border-2 border-gray-600/50 hover:border-amber-500/50 backdrop-blur-xl shadow-lg hover:shadow-2xl"
                      style={{
                        background: `linear-gradient(135deg, rgba(31, 41, 55, 0.5), rgba(55, 65, 81, 0.3))`,
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      <svg className="w-7 h-7 text-gray-300 group-hover:text-white transition-all duration-500 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                      <div 
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                        style={{ 
                          background: `linear-gradient(135deg, ${social.gradientFrom}20, ${social.gradientTo}30)`,
                          boxShadow: `0 0 30px ${social.color}40, inset 0 0 20px ${social.color}20`
                        }}
                      ></div>
                    </a>
                    {/* Enhanced Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-sm font-bold rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none whitespace-nowrap border border-gray-700 shadow-xl">
                      {social.name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-gray-800"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced DGDP Badge & Copyright */}
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="px-6 py-3.5 rounded-2xl transition-all duration-500 hover:scale-110 transform hover:-translate-y-1 backdrop-blur-xl shadow-lg hover:shadow-xl" style={{
                background: 'linear-gradient(135deg, rgba(255, 149, 0, 0.15), rgba(255, 183, 0, 0.2))',
                border: '2px solid rgba(255, 149, 0, 0.35)',
                boxShadow: '0 8px 25px rgba(255, 149, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-amber-400 mr-3 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.586-4.414A2 2 0 0119 9.414V19a2 2 0 01-2 2H7a2 2 0 01-2-2V9.414a2 2 0 01.586-1.414L9 4.586A2 2 0 0110.414 4h3.172a2 2 0 011.414.586l3.414 3.414z" />
                  </svg>
                  <span className="text-base text-amber-400 font-black uppercase tracking-widest">
                    DGDP Certified Agent
                  </span>
                </div>
              </div>
              
              <div className="text-sm text-gray-400">
                © 2025 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300 font-black">Vanguard Technology</span> • All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}