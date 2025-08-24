'use client'

import * as THREE from 'three'
import { latLngToVector3 } from './coordinateUtils'

export class SatelliteSystem {
  private satellites: THREE.Group[] = []
  private scene: THREE.Scene | null = null
  
  constructor(scene: THREE.Scene) {
    this.scene = scene
  }
  
  createSatellite(index: number): THREE.Group {
    const satellite = new THREE.Group()
    satellite.name = `satellite-${index}`
    
    // Main body - metallic cylinder
    const bodyGeometry = new THREE.CylinderGeometry(2, 2, 8, 8)
    const bodyMaterial = new THREE.MeshPhongMaterial({
      color: 0x888888,
      emissive: 0xff9500,
      emissiveIntensity: 0.2,
      shininess: 100
    })
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial)
    body.rotation.z = Math.PI / 2
    
    // Solar panels
    const panelGeometry = new THREE.BoxGeometry(15, 0.5, 6)
    const panelMaterial = new THREE.MeshPhongMaterial({
      color: 0x001144,
      emissive: 0x0066cc,
      emissiveIntensity: 0.1,
      shininess: 50
    })
    
    const panel1 = new THREE.Mesh(panelGeometry, panelMaterial)
    panel1.position.x = 10
    
    const panel2 = new THREE.Mesh(panelGeometry, panelMaterial)
    panel2.position.x = -10
    
    // Antenna
    const antennaGeometry = new THREE.ConeGeometry(1, 4, 4)
    const antennaMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 })
    const antenna = new THREE.Mesh(antennaGeometry, antennaMaterial)
    antenna.position.y = 5
    
    // Blinking light
    const lightGeometry = new THREE.SphereGeometry(0.5, 8, 8)
    const lightMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xff0000,
      transparent: true
    })
    const light = new THREE.Mesh(lightGeometry, lightMaterial)
    light.position.y = 7
    light.name = 'blinker'
    
    satellite.add(body, panel1, panel2, antenna, light)
    
    return satellite
  }
  
  addSatellite(index: number): void {
    const satellite = this.createSatellite(index)
    this.satellites.push(satellite)
    if (this.scene) {
      this.scene.add(satellite)
    }
  }
  
  animateSatellites(time: number): void {
    this.satellites.forEach((satellite, index) => {
      // Different orbital parameters for each satellite
      const orbitRadius = 140 + index * 30
      const orbitSpeed = 0.3 + index * 0.1
      const orbitInclination = 20 + index * 15
      
      // Calculate position
      const angle = time * orbitSpeed
      const x = Math.cos(angle) * orbitRadius
      const y = 20 + Math.sin(angle * 2) * 10 + index * 10 // Varying altitudes
      const z = Math.sin(angle) * orbitRadius
      
      // Apply inclination
      const inclinationRad = orbitInclination * Math.PI / 180
      satellite.position.set(
        x,
        y * Math.cos(inclinationRad) - z * Math.sin(inclinationRad),
        y * Math.sin(inclinationRad) + z * Math.cos(inclinationRad)
      )
      
      // Face center of globe
      satellite.lookAt(0, 0, 0)
      
      // Rotate solar panels toward sun (simplified)
      const panel1 = satellite.children[1]
      const panel2 = satellite.children[2]
      if (panel1 && panel2) {
        panel1.rotation.x = Math.sin(time * 0.5) * 0.2
        panel2.rotation.x = Math.sin(time * 0.5) * 0.2
      }
      
      // Blink light
      const blinker = satellite.getObjectByName('blinker')
      if (blinker && blinker instanceof THREE.Mesh) {
        const material = blinker.material as THREE.MeshBasicMaterial
        material.opacity = 0.5 + Math.sin(time * 10 + index) * 0.5
      }
    })
  }
  
  dispose(): void {
    this.satellites.forEach(satellite => {
      if (this.scene) {
        this.scene.remove(satellite)
      }
      // Dispose geometries and materials
      satellite.traverse(child => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose()
          if (child.material instanceof THREE.Material) {
            child.material.dispose()
          }
        }
      })
    })
    this.satellites = []
  }
}