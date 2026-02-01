'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Linkedin, Twitter, MessageCircle, Check } from 'lucide-react'
import { GoldIcon } from './icons/GoldIcon'

export default function Footer() {
  const navLinks = [
    { label: 'Categories', href: '#products' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/107561584/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/VanguardTech_bd', label: 'Twitter' },
    { icon: MessageCircle, href: 'https://wa.me/8801769510645', label: 'WhatsApp' },
  ]

  return (
    <footer className="bg-navy-950 border-t border-gold-500/20">
      {/* Gold Gradient Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/icons/vanguard-logo-black.png"
                  alt="Vanguard Technology"
                  fill
                  className="object-contain"
                  style={{
                    filter: 'brightness(0) saturate(100%) invert(75%) sepia(50%) saturate(400%) hue-rotate(10deg) brightness(95%) contrast(90%)'
                  }}
                />
              </div>
              <div>
                <h3 className="text-gold-500 font-bold text-xl tracking-wide">VANGUARD</h3>
                <p className="text-steel-500 text-xs uppercase tracking-wider">Technology</p>
              </div>
            </div>
            <p className="text-steel-400 mb-6">
              Your Strategic Partner for Bangladesh Defence Market. Expert DGDP registration,
              industry connections, and 24/7 local support.
            </p>

            {/* DGDP Badge */}
            <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 px-4 py-2">
              <Check className="w-4 h-4 text-gold-500" strokeWidth={2} />
              <span className="text-gold-500 font-medium text-sm uppercase tracking-wider">
                DGDP Certified Partner
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-steel-100 font-semibold uppercase tracking-wider text-sm mb-6">
              Navigation
            </h4>
            <div className="divider-gold w-12 mb-6" />
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-steel-400 hover:text-gold-500 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-steel-100 font-semibold uppercase tracking-wider text-sm mb-6">
              Connect
            </h4>
            <div className="divider-gold w-12 mb-6" />

            {/* Contact */}
            <div className="space-y-3 mb-8">
              <div className="text-steel-400">
                <span className="text-steel-500 text-sm block mb-1">Email</span>
                <a href="mailto:defence@vguardtech.com" className="text-gold-500 hover:text-gold-400 transition-colors">
                  defence@vguardtech.com
                </a>
              </div>
              <div className="text-steel-400">
                <span className="text-steel-500 text-sm block mb-1">Location</span>
                Dhaka, Bangladesh
              </div>
              <div className="text-steel-400">
                <span className="text-steel-500 text-sm block mb-1">Hours</span>
                Sun-Thu: 9 AM - 6 PM BST
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-navy-800 border border-navy-600 hover:border-gold-500 hover:bg-gold-500/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <GoldIcon icon={social.icon} size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="divider-gold mb-8" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-steel-500 text-sm">
            © 2026 <span className="text-gold-500">Vanguard Technology</span>. All rights reserved.
          </p>
          <p className="text-steel-500 text-sm">
            Bangladesh&apos;s Premier DGDP Agent
          </p>
        </div>
      </div>
    </footer>
  )
}
