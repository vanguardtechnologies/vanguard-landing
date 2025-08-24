'use client'

import * as THREE from 'three'
import { latLngToVector3, interpolateGreatCircle } from './coordinateUtils'
import { defensePartners } from '../data/defensePartners'

export class FighterJetSystem {
  private jets: THREE.Group[] = []
  private trails: THREE.Points[] = []
  private scene: THREE.Scene | null = null
  private routes: Array<{start: THREE.Vector3, end: THREE.Vector3}> = []
  
  constructor(scene: THREE.Scene) {
    this.scene = scene
    this.setupRoutes()
  }
  
  setupRoutes(): void {
    // Create routes from top 3 partners to Bangladesh
    const bangladeshPos = latLngToVector3(23.8103, 90.4125, 30)
    
    const topPartners = defensePartners.slice(0, 3)
    this.routes = topPartners.map(partner => ({
      start: latLngToVector3(partner.coordinates[1], partner.coordinates[0], 30),
      end: bangladeshPos
    }))
  }
  
  createFighterJet(index: number): THREE.Group {
    const jet = new THREE.Group()
    jet.name = `fighter-jet-${index}`
    
    // Fuselage - cone shape for jet body
    const fuselageGeometry = new THREE.ConeGeometry(1.5, 8, 8)
    const fuselageMaterial = new THREE.MeshPhongMaterial({
      color: index === 0 ? 0xff9500 : index === 1 ? 0x00d4ff : 0xffb700,
      emissive: index === 0 ? 0xff9500 : index === 1 ? 0x00d4ff : 0xffb700,
      emissiveIntensity: 0.3,
      shininess: 100
    })
    const fuselage = new THREE.Mesh(fuselageGeometry, fuselageMaterial)
    fuselage.rotation.x = Math.PI / 2
    
    // Wings
    const wingGeometry = new THREE.BoxGeometry(10, 0.3, 3)
    const wingMaterial = new THREE.MeshPhongMaterial({
      color: 0x444444,
      shininess: 80
    })
    const wings = new THREE.Mesh(wingGeometry, wingMaterial)
    wings.position.z = -1
    
    // Tail fin
    const tailGeometry = new THREE.BoxGeometry(0.3, 3, 2)
    const tail = new THREE.Mesh(tailGeometry, wingMaterial)
    tail.position.z = -3
    tail.position.y = 1
    
    // Engine glow
    const glowGeometry = new THREE.SphereGeometry(1, 8, 8)
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xff6600,
      transparent: true,
      opacity: 0.8
    })
    const engineGlow = new THREE.Mesh(glowGeometry, glowMaterial)
    engineGlow.position.z = -4
    engineGlow.name = 'engine-glow'
    
    jet.add(fuselage, wings, tail, engineGlow)
    jet.scale.set(0.8, 0.8, 0.8)
    
    return jet
  }
  
  createTrail(): THREE.Points {
    // Particle trail effect
    const particleCount = 50
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = 0
      positions[i * 3 + 1] = 0
      positions[i * 3 + 2] = 0
      
      colors[i * 3] = 1
      colors[i * 3 + 1] = 0.6
      colors[i * 3 + 2] = 0
      
      sizes[i] = Math.random() * 2
    }
    
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))
    
    const material = new THREE.PointsMaterial({
      size: 2,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })
    
    return new THREE.Points(geometry, material)
  }
  
  addJet(index: number): void {
    if (index >= this.routes.length) return
    
    const jet = this.createFighterJet(index)
    const trail = this.createTrail()
    
    this.jets.push(jet)
    this.trails.push(trail)
    
    if (this.scene) {
      this.scene.add(jet)
      this.scene.add(trail)
    }
  }
  
  animateJets(time: number): void {
    this.jets.forEach((jet, index) => {
      if (index >= this.routes.length) return
      
      const route = this.routes[index]
      const speed = 0.15 + index * 0.05
      const progress = ((time * speed) % 1)
      
      // Calculate position along great circle route
      const position = interpolateGreatCircle(route.start, route.end, progress)
      jet.position.copy(position)
      
      // Orient jet along flight path
      const nextProgress = Math.min(progress + 0.01, 1)
      const nextPosition = interpolateGreatCircle(route.start, route.end, nextProgress)
      jet.lookAt(nextPosition)
      
      // Animate engine glow
      const engineGlow = jet.getObjectByName('engine-glow')
      if (engineGlow && engineGlow instanceof THREE.Mesh) {
        engineGlow.scale.setScalar(0.8 + Math.sin(time * 10) * 0.2)
        const material = engineGlow.material as THREE.MeshBasicMaterial
        material.opacity = 0.6 + Math.sin(time * 10) * 0.3
      }
      
      // Update trail particles
      const trail = this.trails[index]
      if (trail) {
        const positions = trail.geometry.attributes.position.array as Float32Array
        const trailLength = positions.length / 3
        
        // Shift existing positions back
        for (let i = trailLength - 1; i > 0; i--) {
          positions[i * 3] = positions[(i - 1) * 3]
          positions[i * 3 + 1] = positions[(i - 1) * 3 + 1]
          positions[i * 3 + 2] = positions[(i - 1) * 3 + 2]
        }
        
        // Add new position at jet location
        positions[0] = jet.position.x
        positions[1] = jet.position.y
        positions[2] = jet.position.z
        
        trail.geometry.attributes.position.needsUpdate = true
      }
    })
  }
  
  dispose(): void {
    this.jets.forEach(jet => {
      if (this.scene) {
        this.scene.remove(jet)
      }
      jet.traverse(child => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose()
          if (child.material instanceof THREE.Material) {
            child.material.dispose()
          }
        }
      })
    })
    
    this.trails.forEach(trail => {
      if (this.scene) {
        this.scene.remove(trail)
      }
      trail.geometry.dispose()
      if (trail.material instanceof THREE.Material) {
        trail.material.dispose()
      }
    })
    
    this.jets = []
    this.trails = []
  }
}