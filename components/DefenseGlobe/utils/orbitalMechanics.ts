'use client'

/**
 * Orbital mechanics calculations for satellite animations
 */

export interface OrbitalElements {
  semiMajorAxis: number     // Distance from center (globe radius units)
  eccentricity: number       // 0 = circular, 0-1 = elliptical
  inclination: number        // Orbital plane angle (degrees)
  longitudeAscending: number // Where orbit crosses equator (degrees)
  argumentPeriapsis: number  // Rotation of ellipse (degrees)
  meanAnomaly: number       // Position along orbit (0-360)
  period: number            // Time for one orbit (seconds)
}

// Calculate satellite position at given time
export function calculateOrbitalPosition(
  elements: OrbitalElements,
  time: number // Current time in seconds
) {
  // Mean motion (degrees per second)
  const meanMotion = 360 / elements.period
  
  // Current mean anomaly
  const M = (elements.meanAnomaly + meanMotion * time) % 360
  const M_rad = M * (Math.PI / 180)
  
  // Solve Kepler's equation for eccentric anomaly (simplified for small eccentricity)
  let E = M_rad
  for (let i = 0; i < 5; i++) {
    E = M_rad + elements.eccentricity * Math.sin(E)
  }
  
  // True anomaly
  const v = 2 * Math.atan2(
    Math.sqrt(1 + elements.eccentricity) * Math.sin(E / 2),
    Math.sqrt(1 - elements.eccentricity) * Math.cos(E / 2)
  )
  
  // Distance from center
  const r = elements.semiMajorAxis * (1 - elements.eccentricity * Math.cos(E))
  
  // Position in orbital plane
  const x_orbital = r * Math.cos(v)
  const y_orbital = r * Math.sin(v)
  
  // Convert to 3D coordinates
  const Ω = elements.longitudeAscending * (Math.PI / 180)
  const i = elements.inclination * (Math.PI / 180)
  const ω = elements.argumentPeriapsis * (Math.PI / 180)
  
  const cos_Ω = Math.cos(Ω)
  const sin_Ω = Math.sin(Ω)
  const cos_i = Math.cos(i)
  const sin_i = Math.sin(i)
  const cos_ω = Math.cos(ω)
  const sin_ω = Math.sin(ω)
  
  const x = (cos_Ω * cos_ω - sin_Ω * sin_ω * cos_i) * x_orbital +
            (-cos_Ω * sin_ω - sin_Ω * cos_ω * cos_i) * y_orbital
  
  const y = (sin_Ω * cos_ω + cos_Ω * sin_ω * cos_i) * x_orbital +
            (-sin_Ω * sin_ω + cos_Ω * cos_ω * cos_i) * y_orbital
  
  const z = (sin_ω * sin_i) * x_orbital + (cos_ω * sin_i) * y_orbital
  
  // Convert to lat/lng
  const radius = Math.sqrt(x * x + y * y + z * z)
  const lat = Math.asin(z / radius) * (180 / Math.PI)
  const lng = Math.atan2(y, x) * (180 / Math.PI)
  
  return {
    lat,
    lng,
    altitude: radius - 1, // Altitude above surface (globe radius = 1)
    x,
    y,
    z
  }
}

// Create orbital elements for different satellite types
export function createFighterJetOrbit(index: number): OrbitalElements {
  return {
    semiMajorAxis: 1.4 + index * 0.1,     // Much higher altitudes (40-60% above surface)
    eccentricity: 0.05,                   // Nearly circular
    inclination: 30 + index * 20,         // Different inclinations
    longitudeAscending: index * 120,      // Spread around globe
    argumentPeriapsis: index * 60,        // Different orientations
    meanAnomaly: index * 120,             // Starting positions
    period: 45 + index * 10                // Different speeds (45-65 seconds)
  }
}

// Create flight path between two points
export function createFlightPath(
  startLat: number, startLng: number,
  endLat: number, endLng: number,
  numPoints: number = 100
) {
  const points = []
  
  for (let i = 0; i <= numPoints; i++) {
    const fraction = i / numPoints
    
    // Calculate great circle interpolation
    const φ1 = startLat * (Math.PI / 180)
    const λ1 = startLng * (Math.PI / 180)
    const φ2 = endLat * (Math.PI / 180)
    const λ2 = endLng * (Math.PI / 180)
    
    const Δλ = λ2 - λ1
    
    const y = Math.sin(Δλ) * Math.cos(φ2)
    const x = Math.cos(φ1) * Math.sin(φ2) - Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ)
    const θ = Math.atan2(y, x)
    
    const d = Math.acos(Math.sin(φ1) * Math.sin(φ2) + Math.cos(φ1) * Math.cos(φ2) * Math.cos(Δλ))
    
    const a = Math.sin((1 - fraction) * d) / Math.sin(d)
    const b = Math.sin(fraction * d) / Math.sin(d)
    
    const φ = Math.asin(a * Math.sin(φ1) + b * Math.sin(φ2))
    const λ = λ1 + Math.atan2(
      b * Math.sin(Δλ),
      a + b * Math.cos(φ1) * Math.cos(Δλ)
    )
    
    const lat = φ * (180 / Math.PI)
    const lng = λ * (180 / Math.PI)
    
    // Add altitude for arc effect
    const altitude = 0.1 * Math.sin(fraction * Math.PI)
    
    points.push({ lat, lng, altitude })
  }
  
  return points
}