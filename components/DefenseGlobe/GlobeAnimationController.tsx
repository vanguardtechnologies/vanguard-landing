'use client'

import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

interface AnimationState {
  time: number
  deltaTime: number
  satellites: any[]
  radar: any
  markers: any[]
}

export function useGlobeAnimation() {
  const [state, setState] = useState<AnimationState>({
    time: 0,
    deltaTime: 0,
    satellites: [],
    radar: null,
    markers: []
  })
  
  const lastTimeRef = useRef(0)
  const frameRef = useRef<number>()
  
  useEffect(() => {
    const animate = () => {
      const currentTime = Date.now() * 0.001
      const deltaTime = currentTime - lastTimeRef.current
      lastTimeRef.current = currentTime
      
      setState(prev => ({
        ...prev,
        time: currentTime,
        deltaTime
      }))
      
      frameRef.current = requestAnimationFrame(animate)
    }
    
    animate()
    
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])
  
  return state
}

// Simplified animation controller for better performance
export class GlobeAnimationController {
  private scene: THREE.Scene | null = null
  private satellites: THREE.Group[] = []
  private radarElements: THREE.Group[] = []
  private markers: THREE.Group[] = []
  
  constructor() {
    // Initialize controller
  }
  
  setScene(scene: THREE.Scene) {
    this.scene = scene
  }
  
  addSatellite(satellite: THREE.Group) {
    this.satellites.push(satellite)
  }
  
  addRadar(radar: THREE.Group) {
    this.radarElements.push(radar)
  }
  
  addMarker(marker: THREE.Group) {
    this.markers.push(marker)
  }
  
  update(time: number, deltaTime: number) {
    // Update all animations
    this.updateSatellites(time)
    this.updateRadar(time)
    this.updateMarkers(time)
  }
  
  private updateSatellites(time: number) {
    this.satellites.forEach((sat, i) => {
      // Orbital motion already handled by globe component
      // Add additional effects here if needed
      const glowIntensity = 0.5 + Math.sin(time * 2 + i) * 0.3
      const glow = sat.getObjectByName('glow')
      if (glow && glow instanceof THREE.Mesh) {
        const material = glow.material as THREE.MeshBasicMaterial
        material.opacity = glowIntensity
      }
    })
  }
  
  private updateRadar(time: number) {
    this.radarElements.forEach(radar => {
      // Pulse effect
      const scale = 1 + Math.sin(time * 3) * 0.1
      radar.scale.setScalar(scale)
    })
  }
  
  private updateMarkers(time: number) {
    this.markers.forEach((marker, i) => {
      // Floating effect
      const floatOffset = Math.sin(time * 1.5 + i * 0.5) * 0.002
      marker.position.y += floatOffset
    })
  }
  
  dispose() {
    this.satellites = []
    this.radarElements = []
    this.markers = []
    this.scene = null
  }
}