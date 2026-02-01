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
        className="bg-navy-800/95 backdrop-blur-sm border border-gold-500/30 overflow-hidden shadow-2xl"
        style={{ clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)' }}
      >
        {/* Header */}
        <div className="bg-gold-500/10 p-4 border-b border-gold-500/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gold-500 flex items-center justify-center" style={{ clipPath: 'polygon(4px 0, 100% 0, calc(100% - 4px) 100%, 0 100%)' }}>
              <BarChart3 size={20} className="text-navy-900" />
            </div>
            <div>
              <h3 className="text-steel-100 font-bold">Bangladesh Defence Market</h3>
              <p className="text-gold-500 text-xs">2024 Market Overview</p>
            </div>
          </div>
        </div>

        {/* Main Statistics */}
        <div className="p-4 space-y-4">
          {/* Market Size - Prominent Display */}
          <div className="text-center pb-3 border-b border-navy-600">
            <p className="text-3xl font-bold text-gold-500">{formatCurrency(marketStats.totalMarketSize)}</p>
            <p className="text-sm text-steel-400 mt-1">Defence Market Size</p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-navy-700/50 p-3 border border-navy-600">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp size={14} className="text-gold-500" />
                <span className="text-xs text-steel-400">Growth Rate</span>
              </div>
              <p className="text-xl font-bold text-steel-100">8.7%</p>
              <p className="text-xs text-gold-400">CAGR 2024-28</p>
            </div>

            <div className="bg-navy-700/50 p-3 border border-navy-600">
              <div className="flex items-center gap-2 mb-1">
                <DollarSign size={14} className="text-gold-500" />
                <span className="text-xs text-steel-400">Acquisition</span>
              </div>
              <p className="text-xl font-bold text-steel-100">{formatCurrency(marketStats.acquisitionBudget)}</p>
              <p className="text-xs text-steel-400">2024 Budget</p>
            </div>
          </div>

          {/* Active Projects */}
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-navy-700/50 p-2 text-center border border-navy-600">
              <Package size={16} className="text-gold-500 mx-auto mb-1" />
              <p className="text-lg font-bold text-steel-100">{marketStats.activeTenders}</p>
              <p className="text-xs text-steel-400">Tenders</p>
            </div>
            <div className="bg-navy-700/50 p-2 text-center border border-navy-600">
              <Target size={16} className="text-gold-400 mx-auto mb-1" />
              <p className="text-lg font-bold text-steel-100">{marketStats.completedDeals2024}</p>
              <p className="text-xs text-steel-400">Deals</p>
            </div>
            <div className="bg-navy-700/50 p-2 text-center border border-navy-600">
              <BarChart3 size={16} className="text-gold-300 mx-auto mb-1" />
              <p className="text-lg font-bold text-steel-100">{marketStats.upcomingProjects}</p>
              <p className="text-xs text-steel-400">Projects</p>
            </div>
          </div>

          {/* Forces Goal 2030 */}
          <div className="bg-gold-500/10 p-3 border border-gold-500/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-steel-100">Forces Goal 2030</span>
              <Target size={16} className="text-gold-500" />
            </div>
            <p className="text-2xl font-bold text-gold-500">{formatCurrency(marketStats.forcesGoal2030Investment)}</p>
            <p className="text-xs text-steel-400 mt-1">Total Investment Program</p>
          </div>

          {/* DGDP Requirement Notice */}
          <div className="bg-navy-700/50 p-3 text-center border border-navy-600">
            <p className="text-gold-500 font-semibold text-sm mb-1">DGDP Registration Required</p>
            <p className="text-xs text-steel-400">
              Local agent mandatory for all international defence manufacturers
            </p>
          </div>

          {/* CTA Button */}
          <button
            className="w-full bg-gold-500 text-navy-900 font-bold py-3 hover:bg-gold-400 transition-all transform hover:scale-105 shadow-gold-button hover:shadow-gold-button-hover"
            style={{ clipPath: 'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)' }}
          >
            Partner with Vanguard
          </button>
        </div>
      </motion.div>
    </div>
  )
}
