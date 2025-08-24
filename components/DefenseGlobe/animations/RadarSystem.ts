'use client'

import * as THREE from 'three'
import { latLngToVector3 } from './coordinateUtils'

export class RadarSystem {
  private radarGroup: THREE.Group
  private scene: THREE.Scene | null = null
  private scanBeam: THREE.Mesh | null = null
  private pulseRings: THREE.Mesh[] = []
  
  constructor(scene: THREE.Scene) {
    this.scene = scene
    this.radarGroup = new THREE.Group()
    this.radarGroup.name = 'radar-system'
    this.createRadar()
    this.positionAtBangladesh()
  }
  
  private createRadar(): void {
    // Base platform
    const baseGeometry = new THREE.CylinderGeometry(8, 10, 2, 16)
    const baseMaterial = new THREE.MeshPhongMaterial({
      color: 0x333333,
      emissive: 0xff9500,
      emissiveIntensity: 0.1
    })
    const base = new THREE.Mesh(baseGeometry, baseMaterial)
    
    // Radar dish
    const dishGeometry = new THREE.SphereGeometry(6, 16, 16, 0, Math.PI)
    const dishMaterial = new THREE.MeshPhongMaterial({
      color: 0x444444,
      emissive: 0xff9500,
      emissiveIntensity: 0.2,
      side: THREE.DoubleSide
    })
    const dish = new THREE.Mesh(dishGeometry, dishMaterial)
    dish.rotation.x = -Math.PI / 2
    dish.position.y = 2
    dish.name = 'dish'
    
    // Central antenna
    const antennaGeometry = new THREE.CylinderGeometry(0.3, 0.3, 8, 8)
    const antennaMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 })
    const antenna = new THREE.Mesh(antennaGeometry, antennaMaterial)
    antenna.position.y = 6
    
    // Scanning beam
    const beamGeometry = new THREE.ConeGeometry(2, 20, 4, 1, true)
    const beamMaterial = new THREE.MeshBasicMaterial({
      color: 0xff9500,
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide
    })
    this.scanBeam = new THREE.Mesh(beamGeometry, beamMaterial)
    this.scanBeam.position.y = 2
    this.scanBeam.rotation.x = Math.PI
    this.scanBeam.name = 'scan-beam'
    
    // Create pulse rings
    for (let i = 0; i < 3; i++) {
      const ringGeometry = new THREE.RingGeometry(
        10 + i * 8,
        11 + i * 8,
        32
      )
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0xff9500,
        transparent: true,
        opacity: 0.3 - i * 0.08,
        side: THREE.DoubleSide
      })
      const ring = new THREE.Mesh(ringGeometry, ringMaterial)
      ring.rotation.x = -Math.PI / 2
      ring.position.y = 0.1
      this.pulseRings.push(ring)
      this.radarGroup.add(ring)
    }
    
    this.radarGroup.add(base, dish, antenna, this.scanBeam)
    
    if (this.scene) {
      this.scene.add(this.radarGroup)
    }
  }
  
  private positionAtBangladesh(): void {
    // Position at Bangladesh with slight elevation
    const bangladeshPos = latLngToVector3(23.8103, 90.4125, 5)
    this.radarGroup.position.copy(bangladeshPos)
    
    // Orient to face outward from globe
    this.radarGroup.lookAt(
      bangladeshPos.x * 2,
      bangladeshPos.y * 2,
      bangladeshPos.z * 2
    )
  }
  
  animate(time: number): void {
    // Rotate dish
    const dish = this.radarGroup.getObjectByName('dish')
    if (dish) {
      dish.rotation.z = time * 0.5
    }
    
    // Sweep scan beam
    if (this.scanBeam) {
      this.scanBeam.rotation.y = time * 2
      this.scanBeam.scale.x = 1 + Math.sin(time * 3) * 0.2
      this.scanBeam.scale.z = 1 + Math.sin(time * 3) * 0.2
      
      const material = this.scanBeam.material as THREE.MeshBasicMaterial
      material.opacity = 0.2 + Math.sin(time * 4) * 0.1
    }
    
    // Animate pulse rings
    this.pulseRings.forEach((ring, index) => {
      const scale = 1 + Math.sin(time * 2 - index * 0.5) * 0.1
      ring.scale.setScalar(scale)
      
      const material = ring.material as THREE.MeshBasicMaterial
      material.opacity = (0.3 - index * 0.08) * (0.7 + Math.sin(time * 3 - index) * 0.3)
    })
  }
  
  dispose(): void {
    if (this.scene) {
      this.scene.remove(this.radarGroup)
    }
    
    this.radarGroup.traverse(child => {
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose()
        if (child.material instanceof THREE.Material) {
          child.material.dispose()
        }
      }
    })
    
    this.pulseRings = []
  }
}