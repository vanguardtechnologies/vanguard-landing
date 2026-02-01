'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Clock, Check } from 'lucide-react'
import { GoldIcon } from './icons/GoldIcon'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    inquiryType: 'partnership',
    message: ''
  })

  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          company: '',
          country: '',
          inquiryType: 'partnership',
          message: ''
        })
      } else {
        throw new Error(data.error || 'Form submission failed')
      }
    } catch (error) {
      setStatus('error')
      const errorMsg = error instanceof Error ? error.message : 'Unknown error occurred'
      setErrorMessage(`Unable to send message: ${errorMsg}. Please try again or contact us directly at defence@vguardtech.com`)
    }
  }

  return (
    <section id="contact" className="py-24 bg-navy-900 relative overflow-hidden">
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
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-steel-100 mb-4">
            Connect with{' '}
            <span className="text-gradient-gold">
              DGDP Experts
            </span>
          </h2>
          <p className="text-steel-400 max-w-3xl mx-auto text-lg">
            Transform your defence business in Bangladesh&apos;s <span className="text-gold-500 font-semibold">$3.34B market</span>.
            Get direct access to certified DGDP agents with proven industry connections.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="bg-navy-800 border border-navy-600 p-8 h-full"
              style={{
                clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 20px)'
              }}
            >
              <h3 className="text-2xl font-bold text-steel-100 mb-6">
                Ready to Enter Bangladesh Defence Market?
              </h3>
              <p className="text-steel-400 mb-8">
                Direct access to certified DGDP agents and defence procurement experts with
                <span className="text-gold-500 font-semibold"> established industry connections</span>.
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-navy-700/50 border border-navy-600">
                  <div className="w-10 h-10 flex items-center justify-center bg-gold-500/10 border border-gold-500/30">
                    <GoldIcon icon={MapPin} size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-steel-100 font-semibold uppercase tracking-wider text-sm mb-1">Office Location</h4>
                    <p className="text-steel-400 text-sm">Dhaka, Bangladesh</p>
                    <span className="text-gold-500 text-xs uppercase tracking-wider">Physical Presence</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-navy-700/50 border border-navy-600">
                  <div className="w-10 h-10 flex items-center justify-center bg-gold-500/10 border border-gold-500/30">
                    <GoldIcon icon={Mail} size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-steel-100 font-semibold uppercase tracking-wider text-sm mb-1">Email</h4>
                    <a href="mailto:defence@vguardtech.com" className="text-gold-500 hover:text-gold-400 transition-colors text-sm">
                      defence@vguardtech.com
                    </a>
                    <span className="block text-gold-500 text-xs uppercase tracking-wider">Professional</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-navy-700/50 border border-navy-600">
                  <div className="w-10 h-10 flex items-center justify-center bg-gold-500/10 border border-gold-500/30">
                    <GoldIcon icon={Clock} size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-steel-100 font-semibold uppercase tracking-wider text-sm mb-1">Business Hours</h4>
                    <p className="text-steel-400 text-sm">Sunday - Thursday: 9:00 AM - 6:00 PM</p>
                    <span className="text-gold-500 text-xs uppercase tracking-wider">Bangladesh Time</span>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="mt-8 p-4 bg-gold-500/10 border border-gold-500/30 flex items-center justify-center gap-2">
                <Check className="w-5 h-5 text-gold-500" strokeWidth={2} />
                <span className="text-gold-500 font-semibold uppercase tracking-wider text-sm">DGDP Certified Partner</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="bg-navy-800 border border-navy-600 p-8"
              style={{
                clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 20px)'
              }}
            >
              {status === 'success' && (
                <div className="mb-6 p-4 bg-green-900/20 border border-green-500/30">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-green-400 font-bold">Message Sent Successfully!</h4>
                      <p className="text-green-300 text-sm">Our certified DGDP agents will contact you within 24 hours.</p>
                    </div>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30">
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 font-bold">!</span>
                    <div>
                      <h4 className="text-red-400 font-bold">Message Failed to Send</h4>
                      <p className="text-red-300 text-sm">{errorMessage}</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-steel-300 mb-2 uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-navy-700 border border-navy-500 text-steel-100 placeholder-steel-500 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/50 outline-none transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-steel-300 mb-2 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-navy-700 border border-navy-500 text-steel-100 placeholder-steel-500 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/50 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-steel-300 mb-2 uppercase tracking-wider">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-navy-700 border border-navy-500 text-steel-100 placeholder-steel-500 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/50 outline-none transition-all"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-steel-300 mb-2 uppercase tracking-wider">
                      Country *
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-navy-700 border border-navy-500 text-steel-100 placeholder-steel-500 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/50 outline-none transition-all"
                      placeholder="Your country"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-steel-300 mb-2 uppercase tracking-wider">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-navy-700 border border-navy-500 text-steel-100 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/50 outline-none transition-all"
                  >
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="information">General Information</option>
                    <option value="meeting">Meeting Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-steel-300 mb-2 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-navy-700 border border-navy-500 text-steel-100 placeholder-steel-500 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/50 outline-none transition-all resize-none"
                    placeholder="Describe your defence products and how we can assist..."
                  />
                </div>

                {/* GOLD SUBMIT BUTTON - CRITICAL */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className={`w-full py-4 font-semibold uppercase tracking-wider transition-all duration-300 ${
                    status === 'submitting'
                      ? 'bg-steel-500 text-steel-300 cursor-not-allowed'
                      : 'bg-gold-500 text-navy-900 hover:bg-gold-400 shadow-gold-button hover:shadow-gold-button-hover'
                  }`}
                  style={{
                    clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)'
                  }}
                >
                  {status === 'submitting' ? (
                    <div className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>

                <p className="text-center text-steel-500 text-sm">
                  Free consultation • Bangladesh expertise • 24hr response
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
