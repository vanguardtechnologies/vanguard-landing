export default function Footer() {
  return (
    <footer className="pt-4 bg-gradient-to-b from-gray-900 via-slate-900 to-black text-gray-400 relative overflow-hidden border-t-2 border-amber-500/30">
      {/* Defense Pattern Overlay */}
      <div className="absolute inset-0 hex-pattern"></div>
      <div className="absolute inset-0 tech-grid-glow"></div>
      <div className="container mx-auto px-6 pt-8 pb-16 relative z-10">
        {/* Enhanced Company Header */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Company Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6 group">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-sm flex items-center justify-center mr-4 shadow-xl transform transition-all duration-300 group-hover:scale-105 border-2 border-amber-400/50">
                <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 12l2 2 4-4m5.586-4.414A2 2 0 0119 9.414V19a2 2 0 01-2 2H7a2 2 0 01-2-2V9.414a2 2 0 01.586-1.414L9 4.586A2 2 0 0110.414 4h3.172a2 2 0 011.414.586l3.414 3.414z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-100 uppercase tracking-tight">
                  Vanguard Technology
                </h3>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse shadow-lg shadow-amber-500/50"></div>
                  <span className="text-sm font-bold text-amber-400 uppercase tracking-wider">
                    Certified DGDP Agent
                  </span>
                </div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 text-base max-w-md">
              Your trusted DGDP agent in Bangladesh, connecting international defense 
              manufacturers with local opportunities through <span className="text-amber-400 font-bold">expert guidance</span> and compliance support.
            </p>
            
            {/* Professional Credentials */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="inline-flex items-center bg-gray-800/50 backdrop-blur-sm text-amber-400 px-4 py-2 rounded-sm text-sm font-bold uppercase tracking-wider border-2 border-amber-500/30">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Dhaka Based
              </div>
              <div className="inline-flex items-center bg-gray-800/50 backdrop-blur-sm text-amber-400 px-4 py-2 rounded-sm text-sm font-bold uppercase tracking-wider border-2 border-gray-700">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Local Expertise
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800/50 hover:bg-amber-500/20 rounded-sm flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-amber-500/30 hover:shadow-lg border-2 border-gray-700 hover:border-amber-500/50">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800/50 hover:bg-amber-500/20 rounded-sm flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-amber-500/30 hover:shadow-lg border-2 border-gray-700 hover:border-amber-500/50">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-black text-gray-100 mb-6 flex items-center uppercase tracking-wide">
              <div className="w-1 h-5 bg-amber-500 rounded-full mr-3"></div>
              Services
            </h4>
            <ul className="space-y-3">
              {[
                { name: "DGDP Registration", href: "#services" },
                { name: "Tender Documentation", href: "#services" },
                { name: "Market Intelligence", href: "#services" },
                { name: "Compliance Management", href: "#services" }
              ].map((service, index) => (
                <li key={index}>
                  <a href={service.href} className="text-gray-400 hover:text-amber-400 transition-all duration-300 text-sm font-semibold group flex items-center">
                    <div className="w-2 h-2 bg-gray-600 rounded-full mr-3 group-hover:bg-amber-500 transition-colors duration-300"></div>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information Column */}
          <div>
            <h4 className="font-black text-gray-100 mb-6 flex items-center uppercase tracking-wide">
              <div className="w-1 h-5 bg-amber-500 rounded-full mr-3"></div>
              Information
            </h4>
            <ul className="space-y-3">
              {[
                { name: "DGDP Process", href: "#process" },
                { name: "Market Data", href: "#services" },
                { name: "Contact Us", href: "#contact" },
                { name: "Privacy Policy", href: "#" }
              ].map((info, index) => (
                <li key={index}>
                  <a href={info.href} className="text-gray-400 hover:text-amber-400 transition-all duration-300 text-sm font-semibold group flex items-center">
                    <div className="w-2 h-2 bg-gray-600 rounded-full mr-3 group-hover:bg-amber-500 transition-colors duration-300"></div>
                    {info.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Contact Information Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-sm p-6 border-2 border-gray-700 hover:border-amber-500/30 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-amber-600/20 rounded-sm flex items-center justify-center mr-3 border border-amber-600/30">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h5 className="font-black text-gray-100 uppercase tracking-wider text-sm">Office Location</h5>
            </div>
            <p className="text-gray-400 text-sm">
              Dhaka, Bangladesh<br/>
              <span className="text-xs text-gray-400">(Address shared after consultation)</span>
            </p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-sm p-6 border-2 border-gray-700 hover:border-amber-500/30 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-amber-600/20 rounded-sm flex items-center justify-center mr-3 border border-amber-600/30">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h5 className="font-black text-gray-100 uppercase tracking-wider text-sm">Email</h5>
            </div>
            <p className="text-gray-400 text-sm">
              <a href="mailto:dgdp@vanguardtech.bd" className="hover:text-amber-400 transition-colors">dgdp@vanguardtech.bd</a><br/>
              <a href="mailto:info@vanguardtech.bd" className="hover:text-amber-400 transition-colors text-xs">info@vanguardtech.bd</a>
            </p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-sm p-6 border-2 border-gray-700 hover:border-amber-500/30 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gray-700/50 rounded-sm flex items-center justify-center mr-3 border border-gray-600">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h5 className="font-black text-gray-100 uppercase tracking-wider text-sm">Business Hours</h5>
            </div>
            <p className="text-gray-400 text-sm">
              Sun-Thu: 9 AM - 6 PM<br/>
              <span className="text-xs text-gray-400">(Bangladesh Standard Time)</span>
            </p>
          </div>
        </div>
        
        {/* Professional Footer Bottom */}
        <div className="border-t-2 border-gray-700 mt-8 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
              <p className="text-sm text-gray-400 font-semibold">
                © 2025 Vanguard Technology. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center text-sm text-amber-400 font-bold uppercase tracking-wider">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse shadow-lg shadow-amber-500/50"></div>
                  Registered DGDP Agent
                </div>
                <div className="flex items-center text-sm text-gray-400 font-bold uppercase tracking-wider">
                  <svg className="w-4 h-4 mr-2 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Dhaka Based
                </div>
              </div>
            </div>
            
            {/* Professional Status */}
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              <div className="flex items-center bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-sm border-2 border-amber-500/30">
                <svg className="w-4 h-4 text-amber-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.586-4.414A2 2 0 0119 9.414V19a2 2 0 01-2 2H7a2 2 0 01-2-2V9.414a2 2 0 01.586-1.414L9 4.586A2 2 0 0110.414 4h3.172a2 2 0 011.414.586l3.414 3.414z" />
                </svg>
                <span className="text-xs text-amber-400 font-black uppercase tracking-wider">DGDP REGISTERED</span>
              </div>
              <div className="flex items-center bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-sm border-2 border-gray-700">
                <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs text-gray-400 font-black uppercase tracking-wider">Business Hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}