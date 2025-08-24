'use client'

import React, { useRef, useEffect, useState, useMemo } from 'react'
import Globe from 'react-globe.gl'
import { defensePartners, bangladeshHub } from './data/defensePartners'

export default function GlobeComponent() {
  const globeEl = useRef<any>(null)
  const [globeDimensions, setGlobeDimensions] = useState({ width: 1200, height: 900 })
  const [isMounted, setIsMounted] = useState(false)
  const [time, setTime] = useState(0)
  const [currentStatIndex, setCurrentStatIndex] = useState(0)


  // Points data with synchronized pulse timing
  const pointsData = useMemo(() => {
    // Calculate distance-based pulse delay for wave effect
    const calculatePulseDelay = (lat: number, lng: number) => {
      const distance = Math.sqrt(
        Math.pow(lat - 23.8103, 2) + 
        Math.pow(lng - 90.4125, 2)
      )
      return distance * 0.01 // Delay based on distance
    }
    
    return [
      // Bangladesh Hub - larger glowing point
      {
        lat: 23.8103,
        lng: 90.4125,
        size: 2,
        color: '#FFB700',
        label: 'BANGLADESH HUB',
        pulseDelay: 0
      },
      // Partner points with synchronized pulse
      ...defensePartners.map((partner) => ({
        lat: partner.coordinates[1],
        lng: partner.coordinates[0],
        size: partner.tier === 1 ? 1.2 : 0.8,
        color: partner.tier === 1 ? '#FF9500' : '#00CCFF',
        label: partner.name,
        pulseDelay: calculatePulseDelay(partner.coordinates[1], partner.coordinates[0])
      }))
    ]
  }, [])

  // Enhanced arcs with visual hierarchy for defense partnerships
  const arcsData = useMemo(() => {
    return defensePartners.map((partner, i) => ({
      startLat: 23.8103,
      startLng: 90.4125,
      endLat: partner.coordinates[1],
      endLng: partner.coordinates[0],
      color: partner.tier === 1 
        ? ['rgba(255, 215, 0, 0.9)', 'rgba(255, 183, 0, 1)']  // Bright gold for strategic partners
        : ['rgba(0, 150, 255, 0.6)', 'rgba(0, 204, 255, 0.7)'], // Blue for standard partners
      stroke: partner.tier === 1 ? 0.8 : 0.5,  // Thicker for Tier 1
      dashLength: partner.tier === 1 ? 0.1 : 0.08,
      dashGap: partner.tier === 1 ? 0.03 : 0.04,
      dashAnimateTime: partner.tier === 1 
        ? 15000 + i * 300  // Faster for Tier 1 (more active)
        : 20000 + i * 500  // Slower for Tier 2
    }))
  }, [])

  // Enhanced thick, fast propagating rings from Bangladesh
  const ringsData = useMemo(() => {
    // Create 5 rings for thick band effect
    const rings = []
    const baseConfig = {
      lat: 23.8103,
      lng: 90.4125,
      propagationSpeed: 3.5,  // Fast expansion
      repeatPeriod: 1500,  // More frequent - every 1.5 seconds
    }
    
    // Create 5 closely-spaced rings for thickness
    for (let i = 0; i < 5; i++) {
      rings.push({
        ...baseConfig,
        maxR: 15 - (i * 0.15),  // 15, 14.85, 14.7, 14.55, 14.4
        altitude: 0.01 + (i * 0.002)  // Slight altitude variation
      })
    }
    
    return rings
  }, [])

  
  // Authentic 2025-2026 Bangladesh defense stats
  const marketStats = [
    { value: '$3.34B', label: 'Defense Budget' },
    { value: '$462B', label: 'GDP 2025' },
    { value: '1.02%', label: 'Defense/GDP' },
    { value: '2030', label: 'Forces Goal' }
  ]
  
  // HTML labels with flags and market value display
  const htmlLabelsData = useMemo(() => {
    const currentStat = marketStats[currentStatIndex % marketStats.length]
    
    return [
      {
        lat: 20.5,  // Positioned 3.3 degrees south of Bangladesh to avoid overlap
        lng: 90.4125,
        label: 'BANGLADESH',
        flag: bangladeshHub.flag,
        isHub: true,
        marketStat: currentStat
      },
      ...defensePartners.map(partner => ({
        lat: partner.coordinates[1],
        lng: partner.coordinates[0],
        label: partner.name,
        flag: partner.flag,
        tier: partner.tier,
        isHub: false,
        isActive: partner.tier === 1 // Mark Tier 1 as active
      }))
    ]
  }, [currentStatIndex])

  // Animation loop
  useEffect(() => {
    if (!isMounted) return
    
    let animationId: number
    const animate = () => {
      setTime(Date.now() * 0.001)
      animationId = requestAnimationFrame(animate)
    }
    animate()
    
    return () => {
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [isMounted])
  
  // Rotate market stats every 3 seconds
  useEffect(() => {
    if (!isMounted) return
    
    const interval = setInterval(() => {
      setCurrentStatIndex(prev => prev + 1)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [isMounted])

  useEffect(() => {
    setIsMounted(true)
    
    // Update dimensions on mount and resize
    const updateDimensions = () => {
      const container = document.getElementById('globe-container')
      if (container) {
        setGlobeDimensions({
          width: Math.min(container.offsetWidth, 1200),
          height: 900
        })
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [])

  // Setup globe after it's rendered
  useEffect(() => {
    if (globeEl.current && isMounted) {
      // Set initial view to Bangladesh
      globeEl.current.pointOfView({
        lat: 23.8103,
        lng: 90.4125,
        altitude: 2.0
      }, 0)

      // Setup auto-rotation
      setTimeout(() => {
        if (globeEl.current) {
          const controls = globeEl.current.controls()
          controls.autoRotate = true
          controls.autoRotateSpeed = 0.5
          controls.enableZoom = true
          controls.minDistance = 150
          controls.maxDistance = 450
        }
      }, 1000)
    }
  }, [isMounted])

  if (!isMounted) {
    return (
      <div className="flex items-center justify-center h-[900px]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-amber-400 text-lg font-bold uppercase tracking-wider">Initializing Defense Network</p>
        </div>
      </div>
    )
  }

  return (
    <div id="globe-container" className="relative w-full h-[900px] flex items-center justify-center">
      <div className="relative">
        <Globe
          ref={globeEl}
          width={globeDimensions.width}
          height={globeDimensions.height}
          backgroundColor="rgba(0,0,0,0)"
          
          // Globe appearance
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          showGraticules={true}
          
          // Atmosphere
          showAtmosphere={true}
          atmosphereColor="#FF9500"
          atmosphereAltitude={0.25}
          
          // Points layer - simple flat dots
          pointsData={pointsData}
          pointLat="lat"
          pointLng="lng"
          pointRadius={0.5}  // Fixed small size for all - no 3D cylinders
          pointColor="color"
          pointAltitude={0}  // Ensure flat on surface
          pointsMerge={false}
          
          // Arcs layer with gradients
          arcsData={arcsData}
          arcColor="color"
          arcStroke="stroke"
          arcDashLength="dashLength"
          arcDashGap="dashGap"
          arcDashAnimateTime="dashAnimateTime"
          arcAltitudeAutoScale={0.3}
          arcsTransitionDuration={2000}
          
          // Enhanced thick visible propagating rings
          ringsData={ringsData}
          ringColor={() => (t: number) => {
            // Higher opacity for much better visibility
            const opacity = Math.max(0.15, 0.85 * (1 - t * 0.6))
            return `rgba(255, 195, 0, ${opacity})`  // Bright gold
          }}
          ringMaxRadius="maxR"
          ringPropagationSpeed="propagationSpeed"
          ringRepeatPeriod="repeatPeriod"
          ringAltitude="altitude"
          
          // HTML Elements for labels with flags
          htmlElementsData={htmlLabelsData}
          htmlElement={(d: any) => {
            const el = document.createElement('div')
            el.innerHTML = `
              <div class="flex flex-col items-center pointer-events-none">
                <div class="text-xl mb-1">${d.flag || ''}</div>
                <div class="bg-gray-900/90 px-2 py-1 rounded border ${d.isHub ? 'border-amber-500' : d.isActive ? 'border-amber-400' : 'border-amber-500/40'}">
                  <div class="text-white font-bold text-xs whitespace-nowrap text-center">
                    ${d.label}
                  </div>
                  ${d.isHub ? 
                    `<div class="text-amber-400 text-xs font-bold text-center">
                      DEFENSE HUB
                    </div>
                    <div class="mt-1 text-center animate-pulse">
                      <div class="text-amber-300 text-lg font-black">${d.marketStat.value}</div>
                      <div class="text-amber-400 text-xs">${d.marketStat.label}</div>
                    </div>` : ''}
                </div>
              </div>
            `
            el.style.pointerEvents = 'none'
            el.style.userSelect = 'none'
            return el
          }}
          htmlAltitude={0.015}
          
          // Interaction
          enablePointerInteraction={true}
          onGlobeClick={() => {
            if (globeEl.current) {
              globeEl.current.pointOfView({
                lat: 23.8103,
                lng: 90.4125,
                altitude: 2.0
              }, 1500)
            }
          }}
        />
      </div>

      {/* Info Panel */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 w-full max-w-5xl px-4">
        <div className="bg-gray-900/95 backdrop-blur-sm rounded-lg border border-amber-500/30 shadow-2xl">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500 rounded-md flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Bangladesh Defense Market</h3>
                <p className="text-amber-400 text-xs">Global Defense Network Visualization</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-amber-400">$3.34B</p>
                <p className="text-xs text-gray-400">Defense Budget</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">$462B</p>
                <p className="text-xs text-gray-400">GDP 2025</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">1.02%</p>
                <p className="text-xs text-gray-400">Defense/GDP</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-amber-400">2030</p>
                <p className="text-xs text-gray-400">Forces Goal</p>
              </div>
            </div>

            <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 font-bold px-6 py-2 rounded-md hover:from-amber-600 hover:to-amber-700 transition-all transform hover:scale-105 text-sm">
              Partner with Vanguard
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}