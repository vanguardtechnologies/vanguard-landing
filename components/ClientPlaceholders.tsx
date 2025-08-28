'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ClientPlaceholders() {
  const clients = [
    { 
      id: 'army', 
      label: 'Bangladesh Army', 
      logo: '/icons/bangladesh-army-logo.png',
      bgColor: 'bg-green-900/30',
      borderColor: 'border-green-500/50',
      hoverBorder: 'group-hover:border-green-400'
    },
    { 
      id: 'navy', 
      label: 'Bangladesh Navy', 
      logo: '/icons/bangladesh-navy.png',
      bgColor: 'bg-blue-900/30',
      borderColor: 'border-blue-500/50',
      hoverBorder: 'group-hover:border-blue-400'
    },
    { 
      id: 'air', 
      label: 'Bangladesh Air Force', 
      logo: '/icons/bangladesh-air-force-logo.png',
      bgColor: 'bg-sky-900/30',
      borderColor: 'border-sky-500/50',
      hoverBorder: 'group-hover:border-sky-400'
    },
    { 
      id: 'combined', 
      label: 'Armed Forces', 
      logo: '/icons/bangladesh-army-navy-air-force-3.png',
      bgColor: 'bg-amber-900/30',
      borderColor: 'border-amber-500/50',
      hoverBorder: 'group-hover:border-amber-400'
    }
  ]

  return (
    <div className="mt-12">
      <div className="text-center mb-8">
        <h3 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300 uppercase tracking-wider mb-2">
          Our Clients
        </h3>
        <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-300 mx-auto rounded-full"></div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {clients.map((client, index) => (
          <motion.div
            key={client.id}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.8 + index * 0.15, duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group cursor-pointer text-center"
          >
            <div 
              className={`relative w-24 h-24 ${client.bgColor} backdrop-blur-sm rounded-lg flex items-center justify-center shadow-xl transition-all duration-300 border-2 ${client.borderColor} ${client.hoverBorder} group-hover:shadow-2xl p-3 mx-auto mb-3`}
              style={{ 
                filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.3))' 
              }}
            >
              <div className="relative w-full h-full">
                <Image 
                  src={client.logo} 
                  alt={client.label}
                  fill
                  className="object-contain drop-shadow-lg transition-all duration-300 group-hover:drop-shadow-xl"
                />
              </div>
              
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-transparent transition-all duration-300"></div>
            </div>
            
            {/* Permanent Label */}
            <div className="text-xs font-bold text-gray-300 group-hover:text-amber-400 transition-colors duration-300 max-w-[100px] mx-auto">
              {client.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}