'use client'

import React, { useRef, useEffect, useState, useMemo } from 'react'
import Globe from 'react-globe.gl'
import { defensePartners, bangladeshHub } from './data/defensePartners'

interface GlobeComponentProps {
  isVisible?: boolean
}

export default function GlobeComponent({ isVisible = false }: GlobeComponentProps) {
  const globeEl = useRef<any>(null)
  const [globeDimensions, setGlobeDimensions] = useState({ width: 1200, height: 900 })
  const [isMounted, setIsMounted] = useState(false)
  const [time, setTime] = useState(0)
  const [currentStatIndex, setCurrentStatIndex] = useState(0)
  const [hoveredArc, setHoveredArc] = useState<any>(null)


  // Points data with synchronized pulse timing and glow effect
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
      // Bangladesh Hub - impressive glowing center
      {
        lat: 23.8103,
        lng: 90.4125,
        size: 3.5,  // Maximum prominence
        color: '#FFD700',  // Golden color
        label: 'BANGLADESH',
        pulseDelay: 0,
        isHub: true,
        flag: '🇧🇩'
      },
      // Partner points with synchronized pulse
      ...defensePartners.map((partner) => ({
        lat: partner.coordinates[1],
        lng: partner.coordinates[0],
        size: partner.tier === 1 ? 2.0 : 1.5,  // Large prominent points
        color: partner.tier === 1 ? '#FFC800' : '#00D4FF',  // Vibrant colors
        label: partner.name.toUpperCase(),
        pulseDelay: calculatePulseDelay(partner.coordinates[1], partner.coordinates[0]),
        tier: partner.tier,
        isHub: false,
        flag: partner.flag
      }))
    ]
  }, [])

  // Calculate great circle distance between two points
  const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number) => {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  }

  // Optimized arcs with distance-based altitude for visibility
  const arcsData = useMemo(() => {
    return defensePartners.map((partner, i) => {
      // Calculate distance from Bangladesh to partner
      const distance = calculateDistance(
        23.8103, 90.4125,  // Bangladesh
        partner.coordinates[1], partner.coordinates[0]  // Partner
      );
      
      // Distance-based altitude for proper visibility
      let altitude;
      if (partner.id === 'usa') {
        altitude = 0.28;  // Reduced height for USA arc (from 0.35)
      } else if (partner.countryCode === 'GB' || partner.countryCode === 'FR') {
        altitude = 0.2;  // UK and France height reduced (from 0.25)
      } else if (distance > 8000) {
        altitude = 0.18;  // Long distance reduced (from 0.22)
      } else if (distance > 5000) {
        altitude = partner.tier === 1 ? 0.15 : 0.11;  // Medium-long distance reduced
      } else {
        altitude = partner.tier === 1 ? 0.12 : 0.08;  // Regular distance reduced
      }
      
      return {
        startLat: 23.8103,
        startLng: 90.4125,
        endLat: partner.coordinates[1],
        endLng: partner.coordinates[0],
        color: partner.tier === 1 
          ? ['rgba(255, 215, 0, 1)', 'rgba(255, 165, 0, 1)']  // Gold gradient
          : ['rgba(0, 150, 255, 1)', 'rgba(0, 200, 255, 1)'], // Blue gradient
        stroke: partner.tier === 1 ? 0.4 : 0.3,  // Thinner, more elegant strokes
        dashLength: partner.tier === 1 ? 0.1 : 0.08,  // Shorter dashes for thin arcs
        dashGap: partner.tier === 1 ? 0.03 : 0.04,    // Proportional gaps
        dashAnimateTime: 15000,  // Smooth animation
        altitude: altitude,  // Distance-based altitude
        tier: partner.tier  // Keep tier for hover effects
      }
    })
  }, [])



  // Enhanced rings for better visual impact
  const ringsData = useMemo(() => {
    // 5 rings for more impressive effect
    const rings = []
    const baseConfig = {
      lat: 23.8103,
      lng: 90.4125,
      propagationSpeed: 3.0,  // Faster expansion
      repeatPeriod: 1500,  // Faster intervals
    }
    
    // Create 5 rings with better spacing
    for (let i = 0; i < 5; i++) {
      rings.push({
        ...baseConfig,
        maxR: 20 - (i * 1),  // 20, 19, 18, 17, 16 - bigger rings
        altitude: 0.01  // Fixed altitude
      })
    }
    
    return rings
  }, [])

  
  // Authentic 2025-2026 Bangladesh defence stats
  const marketStats = [
    { value: '$3.34B', label: 'Defence Budget' },
    { value: '$462B', label: 'GDP 2025' },
    { value: '1.02%', label: 'Defence/GDP' },
    { value: '2030', label: 'Forces Goal' }
  ]
  
  // HTML labels for ALL defense partners - simple approach
  const htmlLabelsData = useMemo(() => {
    const currentStat = marketStats[currentStatIndex % marketStats.length]
    
    return [
      {
        lat: 20.5,  // Positioned 3.3 degrees south of Bangladesh to avoid overlap
        lng: 90.4125,
        label: 'Bangladesh',
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
        isActive: partner.tier === 1
      }))
    ]
  }, [currentStatIndex])

  // Optimized animation loop for 60 FPS
  useEffect(() => {
    if (!isMounted || !isVisible) return
    
    let animationId: number
    let lastTime = 0
    const targetFPS = 60
    const frameInterval = 1000 / targetFPS
    
    const animate = (currentTime: number) => {
      if (currentTime - lastTime >= frameInterval) {
        setTime(currentTime * 0.001)
        lastTime = currentTime
      }
      animationId = requestAnimationFrame(animate)
    }
    animate(0)
    
    return () => {
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [isMounted, isVisible])
  
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
      // Set initial view slightly towards Europe from Bangladesh
      globeEl.current.pointOfView({
        lat: 25,        // Slightly north of Bangladesh
        lng: 70,        // Towards Europe/Middle East
        altitude: 2.0   // Good viewing distance
      }, 0)

      // Setup controls but don't auto-rotate yet
      setTimeout(() => {
        if (globeEl.current) {
          const controls = globeEl.current.controls()
          controls.autoRotate = false  // Start with rotation disabled
          controls.autoRotateSpeed = 0.5  // Slightly faster when enabled
          controls.enableZoom = false  // Disabled scroll zoom to prevent confusion
          controls.zoomSpeed = 0       // Extra safety to prevent scroll zoom
          controls.minDistance = 150
          controls.maxDistance = 450
        }
      }, 1000)

    }
  }, [isMounted])

  // Control rotation based on visibility
  useEffect(() => {
    if (globeEl.current && isMounted) {
      const controls = globeEl.current.controls()
      if (controls) {
        controls.autoRotate = isVisible  // Only rotate when visible
        if (isVisible) {
          // Small delay before starting rotation for smooth experience
          setTimeout(() => {
            if (controls) {
              controls.autoRotate = true
            }
          }, 500)
        }
      }
    }
  }, [isVisible, isMounted])

  if (!isMounted) {
    return (
      <div className="flex items-center justify-center h-[900px]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-amber-400 text-lg font-bold uppercase tracking-wider">Initializing Defence Network</p>
        </div>
      </div>
    )
  }

  return (
    <div 
      id="globe-container" 
      className="relative w-full h-[900px] flex items-center justify-center"
      style={{ 
        willChange: isVisible ? 'transform' : 'auto',
        backfaceVisibility: 'hidden',
        perspective: '1000px'
      }}
    >
      <div 
        className="relative"
        style={{
          willChange: isVisible ? 'transform' : 'auto',
          transform: 'translateZ(0)'
        }}
      >
        <Globe
          ref={globeEl}
          width={globeDimensions.width}
          height={globeDimensions.height}
          backgroundColor="rgba(0,0,0,0)"
          
          // Globe appearance with enhanced visuals
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          showGraticules={true}
          
          
          // Disable any automatic country labeling
          labelsData={[]}
          
          // Enhanced atmosphere with refined glow
          showAtmosphere={true}
          atmosphereColor="rgba(255, 149, 0, 0.5)"  // Amber with controlled opacity
          atmosphereAltitude={0.2}  // Slightly tighter glow
          
          // Points layer with enhanced glow effect and hover tooltips
          pointsData={pointsData}
          pointLat="lat"
          pointLng="lng"
          pointRadius={(d: any) => d.isHub ? 1.0 : 0.6}  // Prominent points
          pointColor="color"
          pointAltitude={0}  // Ensure flat on surface
          pointsMerge={false}  // Individual points for better quality
          pointResolution={16}  // High resolution for smooth spheres
          
          // Remove point labels - using HTML labels instead
          pointLabel={""}
          
          // Arcs layer with gradients and hover effects
          arcsData={arcsData}
          arcColor={(d: any) => hoveredArc === d ? 
            (d.tier === 1 ? ['rgba(255, 255, 0, 1)', 'rgba(255, 215, 0, 1)'] : ['rgba(0, 220, 255, 1)', 'rgba(0, 255, 255, 1)']) :
            d.color
          }
          arcStroke={(d: any) => hoveredArc === d ? (d.stroke * 1.5) : d.stroke}
          arcDashLength="dashLength"
          arcDashGap="dashGap"
          arcDashAnimateTime="dashAnimateTime"
          arcAltitude={(d: any) => d.altitude || 0.1}  // Distance-based altitude
          arcAltitudeAutoScale={0.22}  // Balanced auto-scale reduced slightly
          arcsTransitionDuration={2000}  // Smooth transitions
          onArcHover={setHoveredArc}
          onArcClick={(arc) => {
            console.log('Arc clicked:', arc)
            // Could show trade details here
          }}
          
          
          // Enhanced thick visible propagating rings
          ringsData={ringsData}
          ringColor={() => (t: number) => {
            // Smooth opacity transition
            const opacity = 0.6 * (1 - t)
            return `rgba(255, 195, 0, ${opacity})`
          }}
          ringMaxRadius="maxR"
          ringPropagationSpeed="propagationSpeed"
          ringRepeatPeriod="repeatPeriod"
          ringAltitude="altitude"
          
          // HTML Labels - Simple approach, accept BD/IN if they appear
          htmlElementsData={htmlLabelsData}
          htmlElement={(d: any) => {
            const el = document.createElement('div')
            el.innerHTML = `
              <div class="flex flex-col items-center pointer-events-none" style="transform: translateZ(0); will-change: transform;">
                <!-- Label Box Above -->
                <div class="bg-gray-900/95 px-1 py-0.5 rounded border-2 ${d.isHub ? 'border-amber-500' : d.isActive ? 'border-amber-400' : 'border-blue-400'} mb-2" style="backdrop-filter: blur(4px); box-shadow: 0 4px 8px rgba(0,0,0,0.4);">
                  <div class="text-white font-bold text-[11px] whitespace-nowrap text-center" style="text-shadow: 0 1px 2px rgba(0,0,0,0.6);">
                    ${d.label}
                  </div>
                  ${d.isHub ? 
                    `<div class="text-amber-400 text-[9px] text-center font-semibold">
                      Defence Hub
                    </div>
                    <div class="mt-0.5 text-center animate-pulse">
                      <div class="text-amber-300 text-sm font-black">${d.marketStat.value}</div>
                      <div class="text-amber-400 text-[9px]">${d.marketStat.label}</div>
                    </div>` : ''}
                </div>
                <!-- Flag Below -->
                <div class="text-lg" style="text-shadow: 0 2px 4px rgba(0,0,0,0.8);">${d.flag || ''}</div>
              </div>
            `
            el.style.pointerEvents = 'none'
            el.style.userSelect = 'none'
            el.style.opacity = '1'
            return el
          }}
          htmlAltitude={0.01}
          
          // Interaction
          enablePointerInteraction={true}
          onGlobeClick={() => {
            if (globeEl.current) {
              // Smooth transition back to Bangladesh view
              globeEl.current.pointOfView({
                lat: 23.8103,
                lng: 90.4125,
                altitude: 2.0
              }, 2000)  // Smooth transition
            }
          }}
          onGlobeRightClick={() => {
            if (globeEl.current) {
              // Right-click to show Europe-BD corridor view
              globeEl.current.pointOfView({
                lat: 30,
                lng: 60,
                altitude: 2.2
              }, 2000)
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
                <h3 className="text-white font-bold text-sm">Bangladesh Defence Market</h3>
                <p className="text-amber-400 text-xs">Global Defence Network Visualization</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-amber-400">$3.34B</p>
                <p className="text-xs text-gray-400">Defence Budget</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">$462B</p>
                <p className="text-xs text-gray-400">GDP 2025</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">1.02%</p>
                <p className="text-xs text-gray-400">Defence/GDP</p>
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