'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  DollarSign, 
  Package, 
  Target,
  BarChart3
} from 'lucide-react'
import { marketStats } from './data/defensePartners'

export default function InfoPanel() {
  const formatCurrency = (value: number) => {
    return value >= 1000 
      ? `$${(value / 1000).toFixed(1)}B` 
      : `$${value}M`
  }

  return (
    <div className="w-72">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-900/95 backdrop-blur-sm rounded-lg border border-amber-500/30 overflow-hidden shadow-2xl"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500/20 to-amber-600/20 p-4 border-b border-amber-500/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500 rounded-md flex items-center justify-center">
              <BarChart3 size={20} className="text-gray-900" />
            </div>
            <div>
              <h3 className="text-white font-bold">Bangladesh Defense Market</h3>
              <p className="text-amber-400 text-xs">2024 Market Overview</p>
            </div>
          </div>
        </div>

        {/* Main Statistics */}
        <div className="p-4 space-y-4">
          {/* Market Size - Prominent Display */}
          <div className="text-center pb-3 border-b border-gray-800">
            <p className="text-3xl font-bold text-amber-400">{formatCurrency(marketStats.totalMarketSize)}</p>
            <p className="text-sm text-gray-400 mt-1">Defense Market Size</p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-800/50 rounded-md p-3">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp size={14} className="text-amber-400" />
                <span className="text-xs text-gray-400">Growth Rate</span>
              </div>
              <p className="text-xl font-bold text-white">8.7%</p>
              <p className="text-xs text-green-400">CAGR 2024-28</p>
            </div>

            <div className="bg-gray-800/50 rounded-md p-3">
              <div className="flex items-center gap-2 mb-1">
                <DollarSign size={14} className="text-amber-400" />
                <span className="text-xs text-gray-400">Acquisition</span>
              </div>
              <p className="text-xl font-bold text-white">{formatCurrency(marketStats.acquisitionBudget)}</p>
              <p className="text-xs text-gray-400">2024 Budget</p>
            </div>
          </div>

          {/* Active Projects */}
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-gray-800/50 rounded-md p-2 text-center">
              <Package size={16} className="text-amber-400 mx-auto mb-1" />
              <p className="text-lg font-bold text-white">{marketStats.activeTenders}</p>
              <p className="text-xs text-gray-400">Tenders</p>
            </div>
            <div className="bg-gray-800/50 rounded-md p-2 text-center">
              <Target size={16} className="text-green-400 mx-auto mb-1" />
              <p className="text-lg font-bold text-white">{marketStats.completedDeals2024}</p>
              <p className="text-xs text-gray-400">Deals</p>
            </div>
            <div className="bg-gray-800/50 rounded-md p-2 text-center">
              <BarChart3 size={16} className="text-blue-400 mx-auto mb-1" />
              <p className="text-lg font-bold text-white">{marketStats.upcomingProjects}</p>
              <p className="text-xs text-gray-400">Projects</p>
            </div>
          </div>

          {/* Forces Goal 2030 */}
          <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-md p-3 border border-amber-500/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-white">Forces Goal 2030</span>
              <Target size={16} className="text-amber-400" />
            </div>
            <p className="text-2xl font-bold text-amber-400">{formatCurrency(marketStats.forcesGoal2030Investment)}</p>
            <p className="text-xs text-gray-400 mt-1">Total Investment Program</p>
          </div>

          {/* DGDP Requirement Notice */}
          <div className="bg-gray-800/50 rounded-md p-3 text-center">
            <p className="text-amber-400 font-semibold text-sm mb-1">DGDP Registration Required</p>
            <p className="text-xs text-gray-400">
              Local agent mandatory for all international defense manufacturers
            </p>
          </div>

          {/* CTA Button */}
          <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 font-bold py-3 rounded-md hover:from-amber-600 hover:to-amber-700 transition-all transform hover:scale-105">
            Partner with Vanguard
          </button>
        </div>
      </motion.div>
    </div>
  )
}