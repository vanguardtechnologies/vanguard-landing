'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'
import { GoldIcon } from './icons/GoldIcon'

const teamMembers = [
  {
    id: 1,
    name: 'Ahmed Khan',
    role: 'Founder & CEO',
    bio: '20+ years in Bangladesh defence industry. Former military liaison officer with extensive government connections.',
    image: '/images/team/ceo.svg',
    linkedin: '#',
  },
  {
    id: 2,
    name: 'Fatima Islam',
    role: 'Operations Director',
    bio: 'DGDP process specialist with 15 years of documentation and compliance experience.',
    image: '/images/team/operations-director.svg',
    linkedin: '#',
  },
  {
    id: 3,
    name: 'Rashid Ali',
    role: 'Business Development Manager',
    bio: 'Client relations expert. Facilitated 50+ successful partnerships with international manufacturers.',
    image: '/images/team/bd-manager.svg',
    linkedin: '#',
  },
  {
    id: 4,
    name: 'Nusrat Jahan',
    role: 'Legal & Compliance Officer',
    bio: 'Regulatory expert ensuring all partnerships meet Bangladesh defence procurement standards.',
    image: '/images/team/legal-officer.svg',
    linkedin: '#',
  },
]

export default function Team() {
  return (
    <section id="team" className="relative py-24 bg-navy-900 border-b border-gold-500/20">
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
              Our Leadership
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-steel-100 mb-4">
            Meet Our{' '}
            <span className="text-gradient-gold">
              Team
            </span>
          </h2>
          <p className="text-steel-400 max-w-2xl mx-auto text-lg">
            Dedicated professionals with decades of combined experience in Bangladesh&apos;s defence sector,
            committed to driving your market entry success.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Card Container */}
              <div
                className="group bg-navy-800 border border-navy-600 hover:border-gold-500 transition-all duration-300 p-6"
                style={{
                  clipPath: 'polygon(16px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 16px)'
                }}
              >
                {/* Photo Container */}
                <div className="relative mx-auto mb-6 w-32 h-32">
                  <div className="absolute inset-0 rounded-full border-2 border-gold-500/50 group-hover:border-gold-500 transition-colors duration-300" />
                  <div className="absolute inset-1 rounded-full overflow-hidden bg-navy-700">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  </div>
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-gold-glow" />
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-steel-100 mb-1">{member.name}</h3>
                  <p className="text-gold-500 font-medium mb-3">{member.role}</p>
                  <p className="text-steel-400 text-sm mb-5">{member.bio}</p>

                  {/* LinkedIn */}
                  <a
                    href={member.linkedin}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-navy-700 border border-navy-500 hover:border-gold-500 hover:bg-gold-500/10 transition-all duration-300"
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <GoldIcon icon={Linkedin} size={18} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
