'use client'

import React, { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { calculateOrbitalPosition, createFighterJetOrbit } from './utils/orbitalMechanics'

interface SatelliteOrbitsProps {
  time: number
}

export default function SatelliteOrbits({ time }: SatelliteOrbitsProps) {
  const meshRef = useRef<THREE.Group>()
  
  // Create orbital data for 3 fighter jets
  const satellites = useMemo(() => {
    return [0, 1, 2].map(i => ({
      id: `jet-${i}`,
      orbit: createFighterJetOrbit(i),
      color: i === 0 ? '#FF9500' : i === 1 ? '#00D4FF' : '#FFB700',
      size: 0.02
    }))
  }, [])
  
  // Calculate current positions
  const positions = useMemo(() => {
    return satellites.map(sat => {
      const pos = calculateOrbitalPosition(sat.orbit, time)
      return {
        ...sat,
        position: pos
      }
    })
  }, [satellites, time])
  
  return {
    data: positions,
    threeObject: () => {
      const group = new THREE.Group()
      
      // Create fighter jet geometry (simplified)
      satellites.forEach((sat, i) => {
        // Jet body
        const geometry = new THREE.ConeGeometry(0.01, 0.03, 4)
        const material = new THREE.MeshPhongMaterial({
          color: sat.color,
          emissive: sat.color,
          emissiveIntensity: 0.5
        })
        const jet = new THREE.Mesh(geometry, material)
        
        // Add trail effect
        const trailGeometry = new THREE.CylinderGeometry(0.002, 0.01, 0.05, 8)
        const trailMaterial = new THREE.MeshBasicMaterial({
          color: sat.color,
          transparent: true,
          opacity: 0.3
        })
        const trail = new THREE.Mesh(trailGeometry, trailMaterial)
        trail.position.z = -0.03
        
        const satGroup = new THREE.Group()
        satGroup.add(jet)
        satGroup.add(trail)
        satGroup.name = sat.id
        
        group.add(satGroup)
      })
      
      meshRef.current = group
      return group
    },
    threeObjectUpdate: (obj: THREE.Group, d: any) => {
      if (!obj) return
      
      // Update position based on orbital calculation
      const satGroup = obj.getObjectByName(d.id)
      if (satGroup) {
        const pos = d.position
        
        // Set position
        satGroup.position.setFromSphericalCoords(
          1 + pos.altitude,
          (90 - pos.lat) * Math.PI / 180,
          (pos.lng + 180) * Math.PI / 180
        )
        
        // Orient jet along velocity vector
        const nextPos = calculateOrbitalPosition(d.orbit, time + 0.1)
        satGroup.lookAt(
          nextPos.x * (1 + nextPos.altitude),
          nextPos.y * (1 + nextPos.altitude),
          nextPos.z * (1 + nextPos.altitude)
        )
      }
    }
  }
}

// Export data generator for use in GlobeComponent
export function generateSatelliteData(time: number) {
  const satellites = [0, 1, 2].map(i => {
    const orbit = createFighterJetOrbit(i)
    const position = calculateOrbitalPosition(orbit, time)
    
    return {
      id: `jet-${i}`,
      type: 'satellite', // Add type identifier
      lat: position.lat,
      lng: position.lng,
      altitude: position.altitude,
      color: i === 0 ? '#FF9500' : i === 1 ? '#00D4FF' : '#FFB700',
      orbit,
      position
    }
  })
  
  return satellites
}

// Create Three.js object for satellite
export function createSatelliteObject(d: any) {
  const group = new THREE.Group()
  
  // Fighter jet - MUCH LARGER for visibility
  const jetGeometry = new THREE.SphereGeometry(0.08, 16, 16) // Start with sphere for debugging
  const jetMaterial = new THREE.MeshBasicMaterial({
    color: d.color,
    transparent: false
  })
  const jet = new THREE.Mesh(jetGeometry, jetMaterial)
  
  // Engine glow - also larger
  const glowGeometry = new THREE.SphereGeometry(0.05, 8, 8)
  const glowMaterial = new THREE.MeshBasicMaterial({
    color: d.color,
    transparent: true,
    opacity: 0.6
  })
  const glow = new THREE.Mesh(glowGeometry, glowMaterial)
  glow.position.z = -0.08
  
  // Vapor trail - more visible
  const trailGeometry = new THREE.CylinderGeometry(0.01, 0.04, 0.2, 8)
  const trailMaterial = new THREE.MeshBasicMaterial({
    color: d.color,
    transparent: true,
    opacity: 0.4
  })
  const trail = new THREE.Mesh(trailGeometry, trailMaterial)
  trail.rotation.x = Math.PI / 2
  trail.position.z = -0.15
  
  group.add(jet)
  group.add(glow)
  group.add(trail)
  
  return group
}

// Update satellite position and orientation
export function updateSatelliteObject(obj: THREE.Group, d: any, time: number) {
  if (!obj || !d.orbit) return
  
  // Calculate new position
  const position = calculateOrbitalPosition(d.orbit, time)
  
  // Update altitude for smooth animation
  obj.scale.setScalar(1 + Math.sin(time * 2) * 0.1)
  
  // Add slight rotation
  obj.rotation.z = time * 0.5
  
  // Update trail opacity based on speed
  const trail = obj.children[2]
  if (trail && trail instanceof THREE.Mesh) {
    const material = trail.material as THREE.MeshBasicMaterial
    material.opacity = 0.2 + Math.abs(Math.sin(time)) * 0.3
  }
}