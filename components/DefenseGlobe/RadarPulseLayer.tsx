'use client'

import React, { useMemo } from 'react'
import * as THREE from 'three'

interface RadarPulseLayerProps {
  time: number
}

// Bangladesh coordinates
const BANGLADESH_LAT = 23.8103
const BANGLADESH_LNG = 90.4125

export default function RadarPulseLayer({ time }: RadarPulseLayerProps) {
  // Generate pulse rings data
  const ringsData = useMemo(() => {
    const rings = []
    const numRings = 3
    
    for (let i = 0; i < numRings; i++) {
      const phase = (time + i * 2) % 6 // 6 second cycle
      
      if (phase < 4) { // Ring visible for 4 seconds
        rings.push({
          lat: BANGLADESH_LAT,
          lng: BANGLADESH_LNG,
          maxR: 5 + phase * 8, // Expanding radius
          propagationSpeed: 0,
          repeatPeriod: 0,
          color: `rgba(255, 149, 0, ${Math.max(0, 1 - phase / 4)})`,
          altitude: 0.001
        })
      }
    }
    
    return rings
  }, [time])
  
  return {
    data: ringsData
  }
}

// Create radar center point
export function createRadarCenter() {
  return {
    lat: BANGLADESH_LAT,
    lng: BANGLADESH_LNG,
    altitude: 0.01,
    size: 0.5,
    color: '#FF9500'
  }
}

// Create Three.js object for radar center
export function createRadarCenterObject() {
  const group = new THREE.Group()
  
  // Center beacon
  const beaconGeometry = new THREE.SphereGeometry(0.005, 16, 16)
  const beaconMaterial = new THREE.MeshPhongMaterial({
    color: '#FF9500',
    emissive: '#FF9500',
    emissiveIntensity: 0.8
  })
  const beacon = new THREE.Mesh(beaconGeometry, beaconMaterial)
  
  // Rotating radar sweep
  const sweepGeometry = new THREE.PlaneGeometry(0.15, 0.002)
  const sweepMaterial = new THREE.MeshBasicMaterial({
    color: '#FF9500',
    transparent: true,
    opacity: 0.6,
    side: THREE.DoubleSide
  })
  const sweep = new THREE.Mesh(sweepGeometry, sweepMaterial)
  sweep.position.x = 0.075
  
  // Radar dish (simplified)
  const dishGeometry = new THREE.ConeGeometry(0.02, 0.01, 8, 1, true)
  const dishMaterial = new THREE.MeshPhongMaterial({
    color: '#666666',
    emissive: '#FF9500',
    emissiveIntensity: 0.2
  })
  const dish = new THREE.Mesh(dishGeometry, dishMaterial)
  dish.rotation.x = Math.PI
  dish.position.y = 0.01
  
  group.add(beacon)
  group.add(sweep)
  group.add(dish)
  
  return group
}

// Update radar animation
export function updateRadarObject(obj: THREE.Group, d: any, time: number) {
  if (!obj) return
  
  // Rotate radar sweep
  const sweep = obj.children[1]
  if (sweep) {
    sweep.rotation.z = time * 2 // Rotate continuously
  }
  
  // Pulse beacon
  const beacon = obj.children[0]
  if (beacon && beacon instanceof THREE.Mesh) {
    beacon.scale.setScalar(1 + Math.sin(time * 4) * 0.2)
    const material = beacon.material as THREE.MeshPhongMaterial
    material.emissiveIntensity = 0.5 + Math.sin(time * 4) * 0.3
  }
}

// Generate pulse ring data for globe
export function generatePulseRings(time: number) {
  const rings = []
  const pulsePeriod = 3 // seconds
  const phase = time % pulsePeriod
  
  // Create expanding ring
  if (phase < 2.5) {
    rings.push({
      lat: BANGLADESH_LAT,
      lng: BANGLADESH_LNG,
      maxR: phase * 15, // Expand outward
      propagationSpeed: 0,
      repeatPeriod: 0,
      strokeColor: () => `rgba(255, 149, 0, ${Math.max(0, 1 - phase / 2.5)})`,
      altitude: 0.001
    })
  }
  
  return rings
}

// Create custom layer data for radar effects
export function createRadarLayerData(time: number) {
  return [{
    id: 'radar-center',
    type: 'radar',
    lat: BANGLADESH_LAT,
    lng: BANGLADESH_LNG,
    altitude: 0.05, // Higher altitude for visibility
    time
  }]
}

// Create Three.js object for custom radar layer
export function createRadarLayerObject(d: any) {
  const group = new THREE.Group()
  
  // Create multiple concentric rings
  for (let i = 0; i < 3; i++) {
    const ringGeometry = new THREE.RingGeometry(
      0.02 + i * 0.03,
      0.025 + i * 0.03,
      32
    )
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: '#FF9500',
      transparent: true,
      opacity: 0.3 - i * 0.08,
      side: THREE.DoubleSide
    })
    const ring = new THREE.Mesh(ringGeometry, ringMaterial)
    ring.rotation.x = -Math.PI / 2
    group.add(ring)
  }
  
  // Add scanning line
  const scanGeometry = new THREE.PlaneGeometry(0.12, 0.003)
  const scanMaterial = new THREE.MeshBasicMaterial({
    color: '#FF9500',
    transparent: true,
    opacity: 0.5
  })
  const scanLine = new THREE.Mesh(scanGeometry, scanMaterial)
  scanLine.position.x = 0.06
  scanLine.rotation.x = -Math.PI / 2
  group.add(scanLine)
  
  return group
}

// Update custom radar layer
export function updateRadarLayerObject(obj: THREE.Group, d: any) {
  if (!obj) return
  
  const time = d.time || 0
  
  // Animate rings
  obj.children.forEach((child, i) => {
    if (i < 3 && child instanceof THREE.Mesh) {
      // Pulse effect
      const scale = 1 + Math.sin(time * 3 - i * 0.5) * 0.1
      child.scale.setScalar(scale)
      
      // Fade in/out
      const material = child.material as THREE.MeshBasicMaterial
      material.opacity = (0.3 - i * 0.08) * (0.7 + Math.sin(time * 2) * 0.3)
    }
  })
  
  // Rotate scanning line
  const scanLine = obj.children[3]
  if (scanLine) {
    scanLine.rotation.z = time * 1.5
  }
}