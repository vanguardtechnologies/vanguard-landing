'use client'

import { useState } from 'react'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    message: ''
  })
  
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')
    
    try {
      // Using Formspree - replace 'YOUR_FORM_ID' with actual Formspree form ID
      const response = await fetch('https://formspree.io/f/xdkooqrg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `DGDP Inquiry from ${formData.company}`,
          _replyto: formData.email
        })
      })
      
      if (response.ok) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          company: '',
          country: '',
          message: ''
        })
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('Unable to send message. Please try again or contact us directly at dgdp@vanguardtech.bd')
    }
  }

  return (
    <section id="contact" className="py-0 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
      {/* Defense Pattern Overlay */}
      <div className="absolute inset-0 hex-pattern"></div>
      <div className="absolute inset-0 tech-grid-glow"></div>
      <div className="w-full relative z-10 py-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gray-800/50 backdrop-blur-sm border-2 border-amber-500/50 text-amber-400 px-6 py-3 rounded-sm text-sm font-black uppercase tracking-wider mb-8 shadow-xl">
              <span className="w-3 h-3 bg-amber-500 rounded-full mr-3 animate-pulse shadow-lg shadow-amber-500/50"></span>
              Professional DGDP Agents
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-100 mb-4 uppercase tracking-tight">
              Connect with Professional DGDP Agents
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transform your defense business in Bangladesh's <span className="font-bold text-amber-400">$3.34B market</span>. 
              Get direct access to certified DGDP agents with proven industry connections and local expertise.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex justify-center items-center gap-8 mt-8 flex-wrap">
              <div className="flex items-center text-sm text-amber-400 font-bold uppercase tracking-wider">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Dhaka Based Office
              </div>
              <div className="flex items-center text-sm text-gray-400 font-bold uppercase tracking-wider">
                <svg className="w-5 h-5 mr-2 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Local Defense Expertise
              </div>
              <div className="flex items-center text-sm text-gray-400 font-bold uppercase tracking-wider">
                <svg className="w-5 h-5 mr-2 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                DGDP Documentation Support
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information Section */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-sm p-8 shadow-xl border-2 border-gray-700 hover:border-amber-500/30 transition-all duration-300">
              
              <div className="mb-8">
                <h3 className="text-2xl font-black text-gray-100 mb-3 uppercase tracking-wide">
                  Ready to Enter Bangladesh Defense Market?
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Direct access to certified DGDP agents and defense procurement experts with 
                  <span className="font-bold text-amber-400"> established industry connections</span>.
                </p>
              </div>
              
              {/* Contact Details */}
              <div className="space-y-6">
                {[
                  {
                    title: "Secure Office Location",
                    content: "Dhaka, Bangladesh\n(Specific address shared after initial consultation)",
                    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                    color: "blue",
                    badge: "Physical Presence"
                  },
                  {
                    title: "Direct Communication",
                    content: "dgdp@vanguardtech.bd\ninfo@vanguardtech.bd",
                    icon: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                    color: "green", 
                    badge: "Professional"
                  },
                  {
                    title: "Business Hours",
                    content: "Sunday - Thursday: 9:00 AM - 6:00 PM\n(Bangladesh Standard Time)",
                    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                    color: "slate",
                    badge: "Local Time"
                  }
                ].map((contact, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start p-5 bg-gray-900/50 rounded-sm hover:bg-gray-900/70 transition-all duration-300 border border-gray-700 hover:border-amber-500/30">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-sm flex items-center justify-center mr-4 ${
                        contact.color === 'blue' 
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' 
                          : contact.color === 'green'
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                          : 'bg-gray-700/50 text-gray-400 border border-gray-600'
                      }`}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={contact.icon} />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h4 className="font-bold text-gray-100 uppercase tracking-wider">
                            {contact.title}
                          </h4>
                          <span className={`ml-3 px-2 py-1 rounded-sm text-xs font-black uppercase tracking-wider ${
                            contact.color === 'blue' 
                              ? 'bg-amber-500/20 text-amber-400 border border-amber-500/50' 
                              : contact.color === 'green'
                              ? 'bg-amber-500/20 text-amber-400 border border-amber-500/50'
                              : 'bg-gray-700/50 text-gray-500 border border-gray-600'
                          }`}>
                            {contact.badge}
                          </span>
                        </div>
                        <div className="text-gray-400 whitespace-pre-line">
                          {contact.content.includes('@') ? (
                            contact.content.split('\n').map((line, i) => (
                              <div key={i}>
                                {line.includes('@') ? (
                                  <a 
                                    href={`mailto:${line}`} 
                                    className="font-bold text-amber-400 hover:text-amber-300 transition-colors duration-200"
                                  >
                                    {line}
                                  </a>
                                ) : (
                                  line
                                )}
                              </div>
                            ))
                          ) : (
                            contact.content
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Trust Badge */}
              <div className="mt-8 p-4 bg-gray-900/50 rounded-sm border-2 border-amber-500/30">
                <div className="flex items-center justify-center">
                  <div className="flex items-center text-amber-400 font-black uppercase tracking-wider">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Professional DGDP Services</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-sm p-8 shadow-xl border-2 border-gray-700 hover:border-amber-500/30 transition-all duration-300">
              {status === 'success' && (
                <div className="mb-6 p-4 bg-green-900/20 border-2 border-green-500/30 rounded-sm">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="text-green-400 font-bold">Message Sent Successfully!</h4>
                      <p className="text-green-300 text-sm">Thank you for your inquiry. Our local DGDP agents will contact you within 24 hours.</p>
                    </div>
                  </div>
                </div>
              )}
              
              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-900/20 border-2 border-red-500/30 rounded-sm">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="text-red-400 font-bold">Message Failed to Send</h4>
                      <p className="text-red-300 text-sm">{errorMessage}</p>
                    </div>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-100 mb-2 uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900/50 border-2 border-gray-700 rounded-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500/50 text-gray-100 placeholder-gray-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-100 mb-2 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900/50 border-2 border-gray-700 rounded-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500/50 text-gray-100 placeholder-gray-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-bold text-gray-100 mb-2 uppercase tracking-wider">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900/50 border-2 border-gray-700 rounded-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500/50 text-gray-100 placeholder-gray-500"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-bold text-gray-100 mb-2 uppercase tracking-wider">
                      Country *
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900/50 border-2 border-gray-700 rounded-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500/50 text-gray-100 placeholder-gray-500"
                      placeholder="Your country"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-100 mb-2 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border-2 border-gray-700 rounded-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500/50 text-gray-100 placeholder-gray-500"
                    placeholder="Describe your defense products, target markets, and how we can assist with DGDP registration and local representation..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    status === 'submitting'
                      ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-900 to-blue-800 text-white hover:shadow-xl shadow-lg transform hover:-translate-y-0.5'
                  }`}
                >
                  {status === 'submitting' ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    'Connect with DGDP Agents'
                  )}
                </button>

                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-2">
                    ✓ Free consultation • ✓ Bangladesh expertise • ✓ Local presence
                  </p>
                  <p className="text-xs text-gray-400">
                    * DGDP registration support • Professional guidance • Dhaka based
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}