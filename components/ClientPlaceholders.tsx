'use client'

import { motion } from 'framer-motion'

export default function ClientPlaceholders() {
  const clients = [
    { id: 'army', label: 'ARMY', color: 'from-green-600 to-green-800' },
    { id: 'navy', label: 'NAVY', color: 'from-blue-600 to-blue-800' },
    { id: 'air', label: 'AIR', color: 'from-sky-600 to-sky-800' },
    { id: 'dgdp', label: 'DGDP', color: 'from-amber-600 to-amber-800' }
  ]

  return (
    <div className="mt-12">
      <p className="text-xs text-gray-400 text-center mb-4 uppercase tracking-wider font-semibold">
        Our Clients
      </p>
      <div className="flex justify-center items-center gap-6">
        {clients.map((client, index) => (
          <motion.div
            key={client.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.1 }}
            className="group"
          >
            <div 
              className={`w-16 h-16 rounded-full bg-gradient-to-br ${client.color} flex items-center justify-center shadow-lg group-hover:shadow-amber-500/30 transition-all duration-300 border-2 border-gray-700 group-hover:border-amber-500/50`}
            >
              <span className="text-xs font-black text-white/90">
                {client.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}