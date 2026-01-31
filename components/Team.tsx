'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { LinkedinIcon } from 'lucide-react'

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
    <section id="team" className="relative py-24 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 border-b-2 border-amber-500">
      {/* Background patterns */}
      <div className="absolute inset-0 hex-pattern opacity-[0.03]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">
              Our Leadership
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Meet Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Team
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
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
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group text-center"
            >
              {/* Photo Container */}
              <div className="relative mx-auto mb-6 w-48 h-48">
                <div className="absolute inset-0 rounded-full border-2 border-amber-500/30 group-hover:border-amber-500 transition-colors duration-300" />
                <div className="absolute inset-1 rounded-full overflow-hidden bg-gray-800">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="192px"
                  />
                </div>
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-full bg-amber-500/0 group-hover:bg-amber-500/10 transition-colors duration-300" />
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-amber-400 font-medium mb-3">{member.role}</p>
              <p className="text-gray-400 text-sm mb-4 px-4">{member.bio}</p>

              {/* LinkedIn */}
              <a
                href={member.linkedin}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 border border-gray-700 hover:border-amber-500 hover:bg-amber-500/10 transition-colors duration-300"
                aria-label={`${member.name}'s LinkedIn profile`}
              >
                <LinkedinIcon className="w-5 h-5 text-gray-400 hover:text-amber-400 transition-colors" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
