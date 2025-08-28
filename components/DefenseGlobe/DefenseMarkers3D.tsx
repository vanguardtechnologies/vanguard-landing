'use client'

import React from 'react'
import * as THREE from 'three'
import { defensePartners } from './data/defensePartners'

// Create 3D defence markers for partner countries
export function generateDefenseMarkers(time: number) {
  return defensePartners.map((partner, i) => ({
    id: partner.name,
    type: 'marker', // Add type identifier
    lat: partner.coordinates[1],
    lng: partner.coordinates[0],
    altitude: 0.15 + Math.sin(time * 2 + i) * 0.01, // Higher altitude for visibility
    size: partner.tier === 1 ? 0.1 : 0.08, // Much larger sizes
    color: partner.color,
    label: partner.name,
    equipment: partner.equipment,
    tier: partner.tier
  }))
}

// Create Three.js object for defence marker
export function createDefenseMarkerObject(d: any) {
  const group = new THREE.Group()
  
  // Base platform - MUCH LARGER
  const platformGeometry = new THREE.SphereGeometry(0.08, 16, 16) // Using sphere for better visibility
  const platformMaterial = new THREE.MeshBasicMaterial({
    color: d.color,
    transparent: true,
    opacity: 0.8
  })
  const platform = new THREE.Mesh(platformGeometry, platformMaterial)
  
  // Icon based on equipment type
  let icon: THREE.Mesh
  
  if (d.equipment.includes('Aircraft')) {
    // Jet icon
    const jetGeometry = new THREE.ConeGeometry(0.008, 0.02, 4)
    const jetMaterial = new THREE.MeshPhongMaterial({
      color: d.color,
      emissive: d.color,
      emissiveIntensity: 0.5
    })
    icon = new THREE.Mesh(jetGeometry, jetMaterial)
    icon.rotation.x = Math.PI / 2
    icon.position.y = 0.01
  } else if (d.equipment.includes('Naval')) {
    // Ship icon
    const shipGeometry = new THREE.BoxGeometry(0.02, 0.008, 0.008)
    const shipMaterial = new THREE.MeshPhongMaterial({
      color: d.color,
      emissive: d.color,
      emissiveIntensity: 0.5
    })
    icon = new THREE.Mesh(shipGeometry, shipMaterial)
    icon.position.y = 0.008
  } else if (d.equipment.includes('Missile')) {
    // Missile icon
    const missileGeometry = new THREE.CylinderGeometry(0.003, 0.003, 0.02, 8)
    const missileMaterial = new THREE.MeshPhongMaterial({
      color: d.color,
      emissive: d.color,
      emissiveIntensity: 0.5
    })
    icon = new THREE.Mesh(missileGeometry, missileMaterial)
    icon.position.y = 0.01
  } else {
    // Default military base icon
    const baseGeometry = new THREE.OctahedronGeometry(0.01, 0)
    const baseMaterial = new THREE.MeshPhongMaterial({
      color: d.color,
      emissive: d.color,
      emissiveIntensity: 0.5
    })
    icon = new THREE.Mesh(baseGeometry, baseMaterial)
    icon.position.y = 0.01
  }
  
  // Glowing ring around base
  const ringGeometry = new THREE.RingGeometry(0.02, 0.025, 16)
  const ringMaterial = new THREE.MeshBasicMaterial({
    color: d.color,
    transparent: true,
    opacity: 0.3,
    side: THREE.DoubleSide
  })
  const ring = new THREE.Mesh(ringGeometry, ringMaterial)
  ring.rotation.x = -Math.PI / 2
  ring.position.y = 0.001
  
  // Tier 1 partners get additional effects
  if (d.tier === 1) {
    // Add spinning outer ring
    const outerRingGeometry = new THREE.RingGeometry(0.03, 0.032, 32)
    const outerRingMaterial = new THREE.MeshBasicMaterial({
      color: d.color,
      transparent: true,
      opacity: 0.2
    })
    const outerRing = new THREE.Mesh(outerRingGeometry, outerRingMaterial)
    outerRing.rotation.x = -Math.PI / 2
    group.add(outerRing)
  }
  
  group.add(platform)
  group.add(icon)
  group.add(ring)
  
  return group
}

// Update defence marker animation
export function updateDefenseMarkerObject(obj: THREE.Group, d: any, time: number) {
  if (!obj) return
  
  // Rotate icon
  const icon = obj.children[1]
  if (icon) {
    icon.rotation.y = time * 0.5
  }
  
  // Pulse ring
  const ring = obj.children[2]
  if (ring && ring instanceof THREE.Mesh) {
    const scale = 1 + Math.sin(time * 3) * 0.1
    ring.scale.setScalar(scale)
    const material = ring.material as THREE.MeshBasicMaterial
    material.opacity = 0.2 + Math.sin(time * 3) * 0.1
  }
  
  // Tier 1 outer ring rotation
  if (d.tier === 1 && obj.children[3]) {
    obj.children[3].rotation.z = time * 0.3
  }
}

// Create connection lines from partners to Bangladesh
export function generateConnectionArcs() {
  return defensePartners.map(partner => ({
    startLat: partner.coordinates[1],
    startLng: partner.coordinates[0],
    endLat: 23.8103, // Bangladesh
    endLng: 90.4125,
    color: partner.tier === 1 
      ? () => `rgba(255, 149, 0, 0.4)`
      : () => `rgba(0, 212, 255, 0.3)`,
    stroke: partner.tier === 1 ? 0.8 : 0.5,
    dashLength: 0.03,
    dashGap: 0.01,
    dashAnimateTime: partner.tier === 1 ? 15000 : 20000  // Much slower animation
  }))
}

// Create data for partner country labels
export function generatePartnerLabels() {
  return defensePartners.map(partner => ({
    lat: partner.coordinates[1],
    lng: partner.coordinates[0],
    altitude: 0.04,
    html: `
      <div style="
        background: rgba(26, 31, 46, 0.9);
        border: 1px solid ${partner.color};
        border-radius: 4px;
        padding: 4px 8px;
        font-size: 10px;
        color: white;
        font-weight: bold;
        white-space: nowrap;
        pointer-events: none;
      ">
        <div>${partner.flag} ${partner.name}</div>
        <div style="color: ${partner.color}; font-size: 9px;">
          ${partner.equipment[0]}
        </div>
      </div>
    `
  }))
}