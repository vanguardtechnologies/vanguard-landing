# Vanguard Technology Landing Page v4.0 - Complete Specification

**Document Version:** 1.0
**Date:** February 1, 2026
**Status:** Design Specification - Ready for Implementation
**Author:** Brainstorming Session with User

---

## Executive Summary

Transform the Vanguard Technology landing page from a vector-graphic-heavy "tech startup" aesthetic to an authentic, photo-driven defense contractor presentation. The redesign focuses on:

1. **Cinematic hero** with full-screen military imagery
2. **Photo-based category cards** for the 6 DGDP categories
3. **New Team section** with professional headshots
4. **Enhanced copywriting** with action-focused messaging
5. **Subtle, professional animations** throughout
6. **Preserved globe** and **graphic-based** Services/Process sections

---

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Technical Stack](#2-technical-stack)
3. [Image Strategy](#3-image-strategy)
4. [Section-by-Section Specifications](#4-section-by-section-specifications)
5. [Animation Guidelines](#5-animation-guidelines)
6. [Content Rewrites](#6-content-rewrites)
7. [Responsive Behavior](#7-responsive-behavior)
8. [Implementation Checklist](#8-implementation-checklist)
9. [File Structure](#9-file-structure)

---

## 1. Design Philosophy

### Core Principles

| Principle | Implementation |
|-----------|----------------|
| **Authenticity** | Real military/defense imagery replaces abstract graphics |
| **Professionalism** | Subtle animations, clean typography, dark military aesthetic |
| **Trust-Building** | Team section, credentials, client logos, success metrics |
| **Action-Oriented** | Strong CTAs, urgency in messaging, clear value propositions |
| **Performance** | Optimized images, lazy loading, 60fps animations |

### Visual Hierarchy

```
1. Hero (Full-screen cinematic) ─────────────────────── HIGHEST IMPACT
2. Defense Categories (Photo cards) ─────────────────── HIGH IMPACT
3. DefenseGlobe (Interactive 3D) ────────────────────── HIGH IMPACT (existing)
4. Services (Enhanced graphics) ─────────────────────── MEDIUM IMPACT
5. Process (Enhanced graphics) ──────────────────────── MEDIUM IMPACT
6. Team (NEW - Photo headshots) ─────────────────────── HIGH IMPACT (trust)
7. Contact (Functional) ─────────────────────────────── CONVERSION POINT
8. Footer (Brand presence) ──────────────────────────── LOW IMPACT
```

### Color Palette (Unchanged)

```css
/* Primary Colors */
--background: #0A0E1A;        /* Deep space black */
--surface: #1A1F2E;           /* Military charcoal */
--surface-elevated: #252B3B;  /* Elevated surfaces */

/* Accent Colors */
--tactical-amber: #FF9500;    /* Primary accent */
--amber-bright: #FFB700;      /* Highlights */
--amber-muted: #D97706;       /* Subdued amber */

/* Text Colors */
--text-primary: #F5F5F5;      /* Primary text */
--text-secondary: #9CA3AF;    /* Secondary text */
--text-muted: #6B7280;        /* Muted text */

/* Category Colors (for overlays) */
--cat-land: #16A34A;          /* Green */
--cat-naval: #2563EB;         /* Blue */
--cat-air: #0EA5E9;           /* Sky blue */
--cat-comms: #9333EA;         /* Purple */
--cat-support: #EA580C;       /* Orange */
--cat-artillery: #DC2626;     /* Red */
```

---

## 2. Technical Stack

### Dependencies (Current - No Changes)

```json
{
  "next": "^15.0.0",
  "react": "^19.0.0",
  "typescript": "^5",
  "tailwindcss": "^3.4",
  "framer-motion": "^12.23",
  "gsap": "^3.13",
  "@gsap/react": "^2.1",
  "react-globe.gl": "^2.35",
  "three": "^0.179",
  "lucide-react": "^0.540"
}
```

### New Image Handling

```javascript
// next.config.js additions
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
}
```

---

## 3. Image Strategy

### Sourcing Priority

1. **Bangladesh-Specific** (for hero, key sections)
   - ISPR (Inter Services Public Relations)
   - Bangladesh Armed Forces official channels
   - DVIDS Bangladesh-related content

2. **Free Stock** (for equipment categories)
   - Unsplash (defense, military collections)
   - Pexels (military equipment)
   - US DoD public domain

3. **Premium Stock** (gap-filling if needed)
   - iStock defense industry
   - Shutterstock military

### Image Requirements

| Location | Dimensions | Format | Quantity |
|----------|------------|--------|----------|
| Hero background | 1920×1080 (min) | WebP/AVIF | 1 primary + 1 fallback |
| Category cards | 800×600 | WebP/AVIF | 6 images |
| Team headshots | 400×400 | WebP/AVIF | 4 images |
| Globe background | 1920×800 | WebP/AVIF | 1 image |
| Contact section | 800×600 | WebP/AVIF | 1 image (optional) |

### Image Specifications

```typescript
// types/images.ts
interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL?: string;
  priority?: boolean;
}

// Example usage
const heroImage: ImageAsset = {
  src: '/images/hero/bangladesh-military-parade.webp',
  alt: 'Bangladesh Armed Forces parade showcasing military strength',
  width: 1920,
  height: 1080,
  priority: true,
};
```

### Directory Structure for Images

```
public/
└── images/
    ├── hero/
    │   ├── bangladesh-military.webp
    │   └── defense-equipment.webp
    ├── categories/
    │   ├── land-systems.webp
    │   ├── naval-systems.webp
    │   ├── air-defense.webp
    │   ├── communications.webp
    │   ├── support-equipment.webp
    │   └── artillery-systems.webp
    ├── team/
    │   ├── ceo.webp
    │   ├── operations-director.webp
    │   ├── bd-manager.webp
    │   └── legal-officer.webp
    ├── backgrounds/
    │   └── command-center.webp
    └── icons/
        └── (existing logo files)
```

---

## 4. Section-by-Section Specifications

### 4.1 Header (Minor Updates)

**Changes:** None to structure, ensure logo displays crisply

**Component:** `components/Header.tsx`

```tsx
// No structural changes needed
// Ensure Image component uses priority for logo
<Image
  src="/icons/vanguard-logo-black.png"
  alt="Vanguard Technology"
  width={80}
  height={80}
  priority
  className="filter brightness-0 saturate-100 invert-[.79] sepia-[.67] saturate-[348%] hue-rotate-[6deg]"
/>
```

---

### 4.2 Hero Section (Major Redesign)

**Component:** `components/Hero.tsx`

**Visual Structure:**

```
┌─────────────────────────────────────────────────────────────────────┐
│ [Full-screen cinematic military image - Bangladesh Armed Forces]    │
│ ┌───────────────────────────────────────┬─────────────────────────┐ │
│ │                                       │                         │ │
│ │  ● DGDP CERTIFIED PARTNER             │                         │ │
│ │                                       │                         │ │
│ │  ENTER BANGLADESH'S                   │    [Image continues     │ │
│ │  DEFENCE MARKET TODAY                 │     with Ken Burns      │ │
│ │                                       │     slow zoom effect]   │ │
│ │  Expert DGDP registration, industry   │                         │ │
│ │  connections, and 24/7 local support  │                         │ │
│ │                                       │                         │ │
│ │  [Start Your DGDP Journey]            │                         │ │
│ │  [Explore Capabilities]               │                         │ │
│ │                                       │                         │ │
│ │  ─────────────────────────────────────│                         │ │
│ │  🏛 DGDP Certified  📍 Dhaka Based    │                         │ │
│ │  ⏰ 24/7 Support    🤝 15+ Years Exp │                         │ │
│ └───────────────────────────────────────┴─────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
```

**Implementation:**

```tsx
// components/Hero.tsx - Redesigned structure
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Ken Burns effect */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Image
          src="/images/hero/bangladesh-military.webp"
          alt="Bangladesh Armed Forces"
          fill
          priority
          quality={85}
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient Overlay - Left dark to right transparent */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E1A]/95 via-[#0A0E1A]/70 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-full max-w-2xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-6 w-fit"
          >
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">
              DGDP Certified Partner
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Enter Bangladesh's{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Defence Market
            </span>{' '}
            Today
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl"
          >
            Expert DGDP registration, industry connections, and 24/7 local support
            for international defence manufacturers.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Link
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold rounded-sm hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg shadow-amber-500/25"
            >
              Start Your DGDP Journey
            </Link>
            <Link
              href="#products"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-sm hover:border-amber-500 hover:text-amber-400 transition-all duration-300"
            >
              Explore Capabilities
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-6 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <span className="text-amber-500">🏛</span>
              <span>DGDP Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-500">📍</span>
              <span>Dhaka Based</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-500">⏰</span>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-500">🤝</span>
              <span>15+ Years Experience</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-amber-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
```

**Mobile Adaptation:**
- Full-screen image remains but gradient darkens more
- Text stacks vertically
- Reduced font sizes (4xl → 3xl)
- Trust indicators wrap to 2 columns

---

### 4.3 Defense Categories Section (Major Redesign)

**Component:** `components/DefenseProducts.tsx`

**Visual Structure:**

```
┌─────────────────────────────────────────────────────────────────────┐
│              DEFENCE PROCUREMENT CATEGORIES                         │
│     Comprehensive coverage across all DGDP-registered categories    │
│─────────────────────────────────────────────────────────────────────│
│                                                                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐               │
│  │ [Tank Photo] │  │ [Ship Photo] │  │ [Jet Photo]  │               │
│  │              │  │              │  │              │               │
│  │ ● LAND       │  │ ● NAVAL      │  │ ● AIR        │               │
│  │   SYSTEMS    │  │   SYSTEMS    │  │   DEFENCE    │               │
│  │              │  │              │  │              │               │
│  │ MBTs, APCs   │  │ Frigates,    │  │ Fighters,    │               │
│  │ & Armored    │  │ Corvettes    │  │ Helicopters  │               │
│  │              │  │              │  │              │               │
│  │ $400M Budget │  │ $280M Budget │  │ $350M Budget │               │
│  │              │  │              │  │              │               │
│  │ Explore →    │  │ Explore →    │  │ Explore →    │               │
│  └──────────────┘  └──────────────┘  └──────────────┘               │
│                                                                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐               │
│  │[Radar Photo] │  │[Support Photo]│ │[Artillery]   │               │
│  │              │  │              │  │              │               │
│  │ ● COMMS      │  │ ● SUPPORT    │  │ ● ARTILLERY  │               │
│  │              │  │              │  │              │               │
│  │ Radar, C4ISR │  │ Infantry,    │  │ MLRS, SPG    │               │
│  │              │  │ Protection   │  │              │               │
│  │ $200M Budget │  │ $150M Budget │  │ $250M Budget │               │
│  │              │  │              │  │              │               │
│  │ Explore →    │  │ Explore →    │  │ Explore →    │               │
│  └──────────────┘  └──────────────┘  └──────────────┘               │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Category Data Structure:**

```typescript
// data/categories.ts
export const categories = [
  {
    id: 'land-systems',
    name: 'Land Systems',
    subtitle: 'Main Battle Tanks, APCs & Armored Vehicles',
    description: 'Complete support for armored vehicle procurement including MBTs, infantry fighting vehicles, and engineering equipment.',
    budget: '$400M',
    image: '/images/categories/land-systems.webp',
    color: '#16A34A', // green
    link: '/categories/land-systems',
  },
  {
    id: 'naval-systems',
    name: 'Naval Systems',
    subtitle: 'Frigates, Corvettes & Patrol Vessels',
    description: 'Naval platform procurement support covering surface combatants, submarines, and auxiliary vessels.',
    budget: '$280M',
    image: '/images/categories/naval-systems.webp',
    color: '#2563EB', // blue
    link: '/categories/naval-systems',
  },
  {
    id: 'air-defense',
    name: 'Air Defence',
    subtitle: 'Fighter Aircraft, Helicopters & UAVs',
    description: 'Comprehensive air platform support including fixed-wing aircraft, rotary-wing, and unmanned systems.',
    budget: '$350M',
    image: '/images/categories/air-defense.webp',
    color: '#0EA5E9', // sky
    link: '/categories/air-defense',
  },
  {
    id: 'communications',
    name: 'Communications',
    subtitle: 'Radar Systems, C4ISR & Electronic Warfare',
    description: 'Communications and surveillance equipment procurement for modern battlefield connectivity.',
    budget: '$200M',
    image: '/images/categories/communications.webp',
    color: '#9333EA', // purple
    link: '/categories/communications',
  },
  {
    id: 'support-equipment',
    name: 'Support Equipment',
    subtitle: 'Infantry Gear, Protection & Logistics',
    description: 'Personal equipment, protective gear, and logistics support for armed forces personnel.',
    budget: '$150M',
    image: '/images/categories/support-equipment.webp',
    color: '#EA580C', // orange
    link: '/categories/support-equipment',
  },
  {
    id: 'artillery-systems',
    name: 'Artillery Systems',
    subtitle: 'MLRS, Self-Propelled & Towed Artillery',
    description: 'Artillery systems procurement including multiple launch rockets, howitzers, and ammunition.',
    budget: '$250M',
    image: '/images/categories/artillery-systems.webp',
    color: '#DC2626', // red
    link: '/categories/artillery-systems',
  },
]
```

**Card Component:**

```tsx
// components/CategoryCard.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface CategoryCardProps {
  category: {
    id: string
    name: string
    subtitle: string
    budget: string
    image: string
    color: string
    link: string
  }
  index: number
}

export function CategoryCard({ category, index }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-sm border-2 border-gray-700 hover:border-amber-500/50 transition-colors duration-300"
    >
      {/* Image Container */}
      <div className="relative h-[200px] overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"
          style={{
            background: `linear-gradient(to top, ${category.color}40 0%, transparent 100%)`
          }}
        />
      </div>

      {/* Content */}
      <div className="p-6 bg-gray-800/80 backdrop-blur-sm">
        {/* Category Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: category.color }}
          />
          <span className="text-xs font-semibold tracking-wider uppercase text-gray-400">
            {category.name}
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-white font-medium mb-2">
          {category.subtitle}
        </p>

        {/* Budget */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-amber-500 font-bold">{category.budget}</span>
          <span className="text-gray-500 text-sm">Annual Budget</span>
        </div>

        {/* Link */}
        <Link
          href={category.link}
          className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors"
        >
          Explore Category
          <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}
```

---

### 4.4 DefenseGlobe Section (Minor Enhancement)

**Component:** `components/DefenseGlobe/index.tsx`

**Changes:**
1. Add subtle command center background image (10% opacity)
2. Keep all existing globe functionality
3. No structural changes

```tsx
// Add to DefenseGlobe/index.tsx wrapper
<section className="relative py-20 overflow-hidden">
  {/* Background Image - Command Center aesthetic */}
  <div className="absolute inset-0">
    <Image
      src="/images/backgrounds/command-center.webp"
      alt=""
      fill
      className="object-cover opacity-10"
      sizes="100vw"
    />
  </div>

  {/* Existing content... */}
</section>
```

---

### 4.5 Services Section (Keep Graphics - Enhance Styling)

**Component:** `components/Services.tsx`

**Changes:**
- Keep existing Lucide-based icons with GSAP animations
- Keep 4-column layout
- Enhance card styling for consistency
- No photos - maintain graphic-based design

**Enhancements:**
```tsx
// Enhanced card styling
<div className="group bg-gray-800/60 backdrop-blur-sm border-2 border-gray-700 hover:border-amber-500/50 rounded-sm p-6 transition-all duration-300 hover:bg-gray-800/80">
  {/* Icon container with enhanced glow */}
  <div className="relative h-32 mb-6 flex items-center justify-center">
    <div className="absolute inset-0 bg-gradient-radial from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <SimpleOfficeIcon size={80} />
  </div>
  {/* ... rest of content */}
</div>
```

---

### 4.6 Process Section (Keep Graphics - Enhance Timeline)

**Component:** `components/Process.tsx`

**Changes:**
- Keep existing custom SVG process icons
- Keep 4-step horizontal timeline
- Enhance visual flow with better connecting lines
- No photos - maintain graphic-based design

**Enhancements:**
- Thicker gradient connecting line
- Better step number badges
- Improved mobile vertical layout

---

### 4.7 NEW Team Section

**Component:** `components/Team.tsx` (NEW FILE)

**Position:** After Process, before Contact

**Visual Structure:**

```
┌─────────────────────────────────────────────────────────────────────┐
│                         MEET OUR TEAM                               │
│       Dedicated professionals driving your market entry             │
│─────────────────────────────────────────────────────────────────────│
│                                                                     │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐     │
│  │  (Photo)   │  │  (Photo)   │  │  (Photo)   │  │  (Photo)   │     │
│  │  circular  │  │  circular  │  │  circular  │  │  circular  │     │
│  │  200x200   │  │  200x200   │  │  200x200   │  │  200x200   │     │
│  │            │  │            │  │            │  │            │     │
│  │ Ahmed Khan │  │Fatima Islam│  │ Rashid Ali │  │Nusrat Jahan│     │
│  │ Founder &  │  │ Operations │  │ Business   │  │ Legal &    │     │
│  │    CEO     │  │  Director  │  │Development │  │ Compliance │     │
│  │            │  │            │  │  Manager   │  │  Officer   │     │
│  │ 20+ years  │  │ DGDP       │  │ Client     │  │ Regulatory │     │
│  │ defence    │  │ process    │  │ relations  │  │ expertise  │     │
│  │ industry   │  │ expert     │  │ specialist │  │            │     │
│  │            │  │            │  │            │  │            │     │
│  │ [LinkedIn] │  │ [LinkedIn] │  │ [LinkedIn] │  │ [LinkedIn] │     │ 
│  └────────────┘  └────────────┘  └────────────┘  └────────────┘     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Implementation:**

```tsx
// components/Team.tsx
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'

const teamMembers = [
  {
    id: 1,
    name: 'Ahmed Khan',
    role: 'Founder & CEO',
    bio: '20+ years in Bangladesh defence industry. Former military liaison officer with extensive government connections.',
    image: '/images/team/ceo.webp',
    linkedin: '#',
  },
  {
    id: 2,
    name: 'Fatima Islam',
    role: 'Operations Director',
    bio: 'DGDP process specialist with 15 years of documentation and compliance experience.',
    image: '/images/team/operations-director.webp',
    linkedin: '#',
  },
  {
    id: 3,
    name: 'Rashid Ali',
    role: 'Business Development Manager',
    bio: 'Client relations expert. Facilitated 50+ successful partnerships with international manufacturers.',
    image: '/images/team/bd-manager.webp',
    linkedin: '#',
  },
  {
    id: 4,
    name: 'Nusrat Jahan',
    role: 'Legal & Compliance Officer',
    bio: 'Regulatory expert ensuring all partnerships meet Bangladesh defence procurement standards.',
    image: '/images/team/legal-officer.webp',
    linkedin: '#',
  },
]

export default function Team() {
  return (
    <section id="team" className="relative py-24 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900">
      {/* Background patterns */}
      <div className="absolute inset-0 hex-pattern opacity-[0.03]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">
              Our Leadership
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Meet Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Team
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Dedicated professionals with decades of combined experience in Bangladesh's defence sector,
            committed to driving your market entry success.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group text-center"
            >
              {/* Photo Container */}
              <div className="relative mx-auto mb-6 w-48 h-48">
                <div className="absolute inset-0 rounded-full border-2 border-amber-500/30 group-hover:border-amber-500 transition-colors duration-300" />
                <div className="absolute inset-1 rounded-full overflow-hidden bg-gray-800">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="192px"
                  />
                </div>
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-full bg-amber-500/0 group-hover:bg-amber-500/10 transition-colors duration-300" />
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-amber-400 font-medium mb-3">{member.role}</p>
              <p className="text-gray-400 text-sm mb-4 px-4">{member.bio}</p>

              {/* LinkedIn */}
              <a
                href={member.linkedin}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 border border-gray-700 hover:border-amber-500 hover:bg-amber-500/10 transition-colors duration-300"
                aria-label={`${member.name}'s LinkedIn profile`}
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-amber-400" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

### 4.8 Contact Section (Minor Enhancement)

**Component:** `components/Contact.tsx`

**Changes:**
- Add optional subtle background image of Dhaka office
- Keep existing form functionality
- Enhance form with optional "Inquiry Type" dropdown

**Form Enhancement:**

```tsx
// Add to form fields
<div>
  <label className="block text-gray-400 text-sm font-medium mb-2">
    Inquiry Type
  </label>
  <select
    name="inquiryType"
    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-sm text-white focus:border-amber-500 focus:outline-none transition-colors"
  >
    <option value="partnership">Partnership Inquiry</option>
    <option value="information">General Information</option>
    <option value="meeting">Meeting Request</option>
    <option value="other">Other</option>
  </select>
</div>
```

---

### 4.9 Footer (No Changes)

Keep existing footer design.

---

## 5. Animation Guidelines

### General Principles

| Animation Type | Duration | Easing | Use Case |
|---------------|----------|--------|----------|
| Fade in | 0.5s | ease-out | Text, cards appearing |
| Slide up | 0.5s | ease-out | Section entrances |
| Scale | 0.3s | ease-in-out | Hover effects |
| Ken Burns | 20s | linear | Hero background |
| Parallax | - | - | Subtle depth |

### Framer Motion Presets

```tsx
// lib/animations.ts
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const cardHover = {
  whileHover: { y: -5, transition: { duration: 0.3 } },
}
```

### Performance Rules

1. Use `will-change` sparingly
2. Prefer `transform` and `opacity` for animations
3. Use `viewport={{ once: true }}` for scroll animations
4. Disable animations on `prefers-reduced-motion`

```tsx
// Respect user preferences
const prefersReducedMotion = typeof window !== 'undefined'
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
  : false

const animationProps = prefersReducedMotion
  ? {}
  : { initial: { opacity: 0 }, animate: { opacity: 1 } }
```

---

## 6. Content Rewrites

### Hero Section

**Before:**
> "Your Trusted LOCAL Agent in Bangladesh"
> "Vanguard Technology serves as your dedicated local representative..."

**After:**
> **Headline:** "Enter Bangladesh's Defence Market Today"
> **Subheadline:** "Expert DGDP registration, industry connections, and 24/7 local support for international defence manufacturers."

### Category Cards

**Before (Generic):**
> "Vanguard Technology provides comprehensive local agent services..."

**After (Value-focused):**
> **Land Systems:** "Complete support for armored vehicle procurement including MBTs, infantry fighting vehicles, and engineering equipment. $400M annual market opportunity."

### Services Section

**Before:**
> "Local Representation - We serve as your permanent business address..."

**After:**
> "Local Representation - Your permanent presence in Dhaka. Registered office, dedicated staff, and immediate response to government inquiries. 60% faster processing than remote applications."

### CTA Buttons

| Before | After |
|--------|-------|
| "Start Partnership" | "Start Your DGDP Journey" |
| "Learn More" | "Explore Capabilities" |
| "Contact Us" | "Connect with DGDP Experts" |
| "View Process" | "See How It Works" |

---

## 7. Responsive Behavior

### Breakpoint Strategy

```css
/* Tailwind breakpoints */
sm: 640px    /* Small mobile */
md: 768px    /* Tablet */
lg: 1024px   /* Desktop */
xl: 1280px   /* Large desktop */
2xl: 1536px  /* Extra large */
```

### Section Adaptations

| Section | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Hero | Full-screen, content left 60% | Full-screen, content left 70% | Full-screen, content centered |
| Categories | 3 columns | 2 columns | 1 column |
| Services | 4 columns | 2 columns | 1 column |
| Process | Horizontal timeline | Horizontal (compact) | Vertical timeline |
| Team | 4 columns | 2 columns | 1 column (carousel option) |
| Contact | 2 columns | 2 columns | Stacked |

### Image Sizes

```tsx
// Hero
sizes="100vw"

// Category cards
sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"

// Team photos
sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 192px"
```

---

## 8. Implementation Checklist

### Phase 1: Setup & Images
- [ ] Create `/public/images/` directory structure
- [ ] Source and download hero image (Bangladesh military)
- [ ] Source and download 6 category images
- [ ] Create/source 4 team placeholder images
- [ ] Source command center background image
- [ ] Optimize all images (WebP, proper sizing)
- [ ] Generate blur data URLs for key images

### Phase 2: Core Components
- [ ] Redesign `Hero.tsx` with cinematic layout
- [ ] Create `data/categories.ts` with updated data
- [ ] Create `CategoryCard.tsx` component
- [ ] Update `DefenseProducts.tsx` to use new cards
- [ ] Create `Team.tsx` component
- [ ] Add Team to page.tsx between Process and Contact

### Phase 3: Enhancements
- [ ] Add background image to DefenseGlobe section
- [ ] Enhance Services section styling
- [ ] Enhance Process section styling
- [ ] Update Contact section with inquiry type
- [ ] Update next.config.js for image optimization

### Phase 4: Animation & Polish
- [ ] Implement Ken Burns effect on hero
- [ ] Add Framer Motion animations to all sections
- [ ] Test scroll animations
- [ ] Verify 60fps performance
- [ ] Test reduced motion preferences

### Phase 5: Content & SEO
- [ ] Update all headlines and copy
- [ ] Update meta descriptions
- [ ] Verify alt text on all images
- [ ] Test OG images

### Phase 6: Testing
- [ ] Test on Chrome, Firefox, Safari
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit (target 90+)
- [ ] Test form submission
- [ ] Verify all links work

---

## 9. File Structure

### New/Modified Files

```
vanguard-landing/
├── app/
│   ├── page.tsx                    # MODIFY: Add Team section
│   └── globals.css                 # MINOR: Add new utility classes
│
├── components/
│   ├── Hero.tsx                    # MAJOR REWRITE
│   ├── DefenseProducts.tsx         # MAJOR REWRITE
│   ├── CategoryCard.tsx            # NEW FILE
│   ├── Team.tsx                    # NEW FILE
│   ├── Services.tsx                # MINOR UPDATES
│   ├── Process.tsx                 # MINOR UPDATES
│   ├── Contact.tsx                 # MINOR UPDATES
│   └── DefenseGlobe/
│       └── index.tsx               # MINOR: Add background
│
├── data/
│   └── categories.ts               # NEW FILE
│
├── lib/
│   └── animations.ts               # NEW FILE: Animation presets
│
├── public/
│   └── images/
│       ├── hero/                   # NEW DIRECTORY
│       │   └── bangladesh-military.webp
│       ├── categories/             # NEW DIRECTORY
│       │   ├── land-systems.webp
│       │   ├── naval-systems.webp
│       │   ├── air-defense.webp
│       │   ├── communications.webp
│       │   ├── support-equipment.webp
│       │   └── artillery-systems.webp
│       ├── team/                   # NEW DIRECTORY
│       │   ├── ceo.webp
│       │   ├── operations-director.webp
│       │   ├── bd-manager.webp
│       │   └── legal-officer.webp
│       └── backgrounds/            # NEW DIRECTORY
│           └── command-center.webp
│
├── next.config.js                  # MODIFY: Image config
│
└── docs/
    └── plans/
        └── 2026-02-01-landing-page-redesign-spec.md  # THIS FILE
```

---

## Summary

This specification transforms the Vanguard Technology landing page from a vector-graphic-heavy tech site to an authentic defence contractor presentation through:

1. **Cinematic hero** with full-screen military imagery and action-focused messaging
2. **Photo-based category cards** showing real defence equipment
3. **New Team section** building trust with professional headshots
4. **Enhanced copywriting** with stronger value propositions
5. **Preserved DefenseGlobe** and **graphic-based Services/Process** sections
6. **Subtle, professional animations** appropriate for defence industry
7. **Optimized image loading** with Next.js 15 best practices

The implementation prioritizes:
- Visual authenticity for international client pitches
- Performance (target 90+ Lighthouse score)
- Responsive design across all devices
- Professional, trust-building aesthetics

---

*Specification complete. Ready for implementation approval.*
