'use client'

/**
 * Coordinate conversion utilities for globe animations
 */

// Convert lat/lng to 3D cartesian coordinates on sphere surface
export function latLngToVector3(lat: number, lng: number, radius: number = 1) {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)
  
  const x = -(radius * Math.sin(phi) * Math.cos(theta))
  const y = radius * Math.cos(phi)
  const z = radius * Math.sin(phi) * Math.sin(theta)
  
  return { x, y, z }
}

// Calculate great circle distance between two points
export function greatCircleDistance(lat1: number, lng1: number, lat2: number, lng2: number) {
  const toRad = (deg: number) => deg * (Math.PI / 180)
  
  const dLat = toRad(lat2 - lat1)
  const dLng = toRad(lng2 - lng1)
  
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2)
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  
  return c
}

// Get intermediate point on great circle path
export function interpolateGreatCircle(
  lat1: number, lng1: number,
  lat2: number, lng2: number,
  fraction: number
) {
  const toRad = (deg: number) => deg * (Math.PI / 180)
  const toDeg = (rad: number) => rad * (180 / Math.PI)
  
  const φ1 = toRad(lat1)
  const λ1 = toRad(lng1)
  const φ2 = toRad(lat2)
  const λ2 = toRad(lng2)
  
  const d = greatCircleDistance(lat1, lng1, lat2, lng2)
  
  const a = Math.sin((1 - fraction) * d) / Math.sin(d)
  const b = Math.sin(fraction * d) / Math.sin(d)
  
  const x = a * Math.cos(φ1) * Math.cos(λ1) + b * Math.cos(φ2) * Math.cos(λ2)
  const y = a * Math.cos(φ1) * Math.sin(λ1) + b * Math.cos(φ2) * Math.sin(λ2)
  const z = a * Math.sin(φ1) + b * Math.sin(φ2)
  
  const φi = Math.atan2(z, Math.sqrt(x * x + y * y))
  const λi = Math.atan2(y, x)
  
  return {
    lat: toDeg(φi),
    lng: toDeg(λi)
  }
}

// Calculate altitude for arc path (creates curved trajectory)
export function calculateArcAltitude(fraction: number, maxAltitude: number = 0.2) {
  // Parabolic arc
  return maxAltitude * 4 * fraction * (1 - fraction)
}