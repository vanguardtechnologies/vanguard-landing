'use client'

import * as THREE from 'three'

// Convert lat/lng to 3D vector position on globe
export function latLngToVector3(lat: number, lng: number, altitude: number = 100): THREE.Vector3 {
  const phi = (90 - lat) * Math.PI / 180
  const theta = (lng + 180) * Math.PI / 180
  const radius = 100 + altitude // Globe radius (100) + altitude
  
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  )
}

// Interpolate between two positions on great circle
export function interpolateGreatCircle(
  start: THREE.Vector3,
  end: THREE.Vector3,
  progress: number
): THREE.Vector3 {
  const result = new THREE.Vector3()
  result.lerpVectors(start, end, progress)
  
  // Adjust altitude for arc effect
  const arcHeight = 30 // Maximum arc height
  const arcProgress = Math.sin(progress * Math.PI)
  result.multiplyScalar(1 + arcProgress * (arcHeight / 100))
  
  return result
}

// Calculate orbital position
export function calculateOrbitalPosition(
  centerLat: number,
  centerLng: number,
  radius: number,
  angle: number,
  altitude: number
): THREE.Vector3 {
  // Create orbit around a point on globe
  const center = latLngToVector3(centerLat, centerLng, altitude)
  const offsetX = Math.cos(angle) * radius
  const offsetZ = Math.sin(angle) * radius
  
  return new THREE.Vector3(
    center.x + offsetX,
    center.y,
    center.z + offsetZ
  )
}

// Get distance between two points on globe
export function getGlobeDistance(
  lat1: number, lng1: number,
  lat2: number, lng2: number
): number {
  const pos1 = latLngToVector3(lat1, lng1, 0)
  const pos2 = latLngToVector3(lat2, lng2, 0)
  return pos1.distanceTo(pos2)
}