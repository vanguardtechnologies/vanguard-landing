# Vanguard Technology UI Transformation Design Specification

**Version:** 5.0 - Steel & Gold Premium Edition
**Date:** February 1, 2026
**Status:** Design Specification - Ready for Implementation

---

## Executive Summary

Complete visual transformation of the Vanguard Technology landing page from the current amber-accented design to a **Steel & Gold Premium** aesthetic with **Sharp Angular** design language. This specification covers:

1. **New Color System:** Deep Navy + Steel Gray + Gold/Brass
2. **Angular Design Language:** Clipped corners, geometric precision
3. **Unified Icon System:** Monoline gold icons throughout
4. **Header Update:** 5 navigation items including Team
5. **Complete Section Redesign:** All components transformed
6. **Globe Integration:** Gold-dominant color scheme

---

## Table of Contents

1. [Design Principles](#1-design-principles)
2. [Color System](#2-color-system)
3. [Typography](#3-typography)
4. [Component System](#4-component-system)
5. [Header Design](#5-header-design)
6. [Footer Design](#6-footer-design)
7. [Section Specifications](#7-section-specifications)
8. [Globe Transformation](#8-globe-transformation)
9. [Animation Guidelines](#9-animation-guidelines)
10. [Icon System](#10-icon-system)
11. [Implementation Files](#11-implementation-files)

---

## 1. Design Principles

### Core Aesthetic
- **Premium Defense Contractor:** Executive-level professionalism
- **Military Precision:** Sharp angles, geometric accuracy
- **Monochromatic Elegance:** Navy + Steel + Gold only
- **Sophisticated Restraint:** Subtle animations, clean layouts

### Design Rules
1. **NO additional colors** beyond the defined palette
2. **Angular cuts** on cards and buttons (clip-path)
3. **Gold accents** for all interactive elements
4. **Consistent spacing** using 8px grid system
5. **Monoline icons** throughout (no filled icons)

### Visual Hierarchy
```
1. Gold elements     → Highest attention (CTAs, accents)
2. White/Steel-100   → Primary content (headings, body)
3. Steel-400         → Secondary content (descriptions)
4. Navy surfaces     → Background, containers
```

---

## 2. Color System

### Primary Palette (CSS Variables)

```css
:root {
  /* Deep Navy Foundation */
  --navy-950: #050A14;    /* Deepest background */
  --navy-900: #0A1628;    /* Primary background */
  --navy-800: #0F1D32;    /* Card backgrounds */
  --navy-700: #162544;    /* Elevated surfaces */
  --navy-600: #1E3356;    /* Borders, dividers */
  --navy-500: #2D4A6F;    /* Active borders */

  /* Steel Gray Scale */
  --steel-600: #2D3748;   /* Dark text on light */
  --steel-500: #4A5568;   /* Secondary text */
  --steel-400: #718096;   /* Muted text, placeholders */
  --steel-300: #A0AEC0;   /* Subtle elements */
  --steel-200: #CBD5E0;   /* Light accents */
  --steel-100: #E2E8F0;   /* Primary text */
  --steel-50: #F7FAFC;    /* Brightest text */

  /* Gold/Brass Accent */
  --gold-700: #7A5F23;    /* Darkest gold */
  --gold-600: #92722A;    /* Dark gold, pressed states */
  --gold-500: #C9A961;    /* PRIMARY ACCENT */
  --gold-400: #D4B978;    /* Hover states */
  --gold-300: #E5D4A1;    /* Light accents, glows */
  --gold-200: #F0E6C8;    /* Very light gold */

  /* Semantic Colors (use sparingly) */
  --success: #48BB78;
  --warning: #ECC94B;
  --error: #F56565;
  --info: #4299E1;
}
```

### Tailwind Config Extension

```javascript
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050A14',
          900: '#0A1628',
          800: '#0F1D32',
          700: '#162544',
          600: '#1E3356',
          500: '#2D4A6F',
        },
        steel: {
          600: '#2D3748',
          500: '#4A5568',
          400: '#718096',
          300: '#A0AEC0',
          200: '#CBD5E0',
          100: '#E2E8F0',
          50: '#F7FAFC',
        },
        gold: {
          700: '#7A5F23',
          600: '#92722A',
          500: '#C9A961',
          400: '#D4B978',
          300: '#E5D4A1',
          200: '#F0E6C8',
        },
      },
    },
  },
}
```

### Color Usage Rules

| Element | Color | Notes |
|---------|-------|-------|
| Page background | navy-950 to navy-900 gradient | Always gradient, never flat |
| Card backgrounds | navy-800 | Solid or 80% opacity |
| Card borders (default) | navy-600 | 1px solid |
| Card borders (hover) | gold-500 | 1px solid with glow |
| Primary text | steel-100 | Headings, important content |
| Secondary text | steel-400 | Descriptions, body text |
| Muted text | steel-500 | Captions, labels |
| Interactive elements | gold-500 | Links, buttons, icons |
| Hover states | gold-400 | Lighter on hover |
| Focus states | gold-300 | With glow effect |
| Form inputs bg | navy-700 | Darker than cards |
| Form inputs border | navy-500 | Focus: gold-500 |

---

## 3. Typography

### Font Stack

```css
:root {
  --font-heading: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
}
```

### Type Scale

| Name | Size | Weight | Line Height | Letter Spacing | Use |
|------|------|--------|-------------|----------------|-----|
| display | 56px / 3.5rem | 700 | 1.1 | -0.02em | Hero headline |
| h1 | 40px / 2.5rem | 700 | 1.2 | -0.01em | Section headers |
| h2 | 32px / 2rem | 600 | 1.3 | 0 | Sub-headers |
| h3 | 24px / 1.5rem | 600 | 1.4 | 0 | Card titles |
| h4 | 20px / 1.25rem | 600 | 1.4 | 0 | Small headers |
| body-lg | 18px / 1.125rem | 400 | 1.6 | 0 | Lead paragraphs |
| body | 16px / 1rem | 400 | 1.6 | 0 | Body text |
| body-sm | 14px / 0.875rem | 400 | 1.5 | 0 | Captions |
| label | 12px / 0.75rem | 600 | 1.4 | 0.05em | Badges, labels |

### Text Styling

```css
/* Headings */
h1, h2, h3 {
  color: var(--steel-100);
  font-weight: 700;
}

/* Gold accent text */
.text-accent {
  color: var(--gold-500);
}

/* Gradient text (for special emphasis) */
.text-gradient-gold {
  background: linear-gradient(135deg, var(--gold-400), var(--gold-600));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Uppercase labels */
.label {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  font-size: 0.75rem;
  color: var(--gold-500);
}
```

---

## 4. Component System

### 4.1 Angular Cards

**Base Card with Clipped Corners:**

```css
.card-angular {
  background: var(--navy-800);
  border: 1px solid var(--navy-600);
  clip-path: polygon(
    20px 0,           /* top-left clip */
    100% 0,           /* top-right */
    100% calc(100% - 12px),  /* bottom-right start */
    calc(100% - 12px) 100%,  /* bottom-right clip */
    0 100%,           /* bottom-left */
    0 20px            /* back to top-left clip */
  );
  transition: all 0.3s ease;
}

.card-angular:hover {
  border-color: var(--gold-500);
  box-shadow: 0 0 20px rgba(201, 169, 97, 0.15);
}
```

**Tailwind Implementation:**

```tsx
// components/ui/AngularCard.tsx
interface AngularCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function AngularCard({ children, className, hover = true }: AngularCardProps) {
  return (
    <div
      className={cn(
        "bg-navy-800 border border-navy-600",
        "transition-all duration-300",
        hover && "hover:border-gold-500 hover:shadow-[0_0_20px_rgba(201,169,97,0.15)]",
        className
      )}
      style={{
        clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 20px)'
      }}
    >
      {children}
    </div>
  )
}
```

### 4.2 Buttons

**Primary Button (Gold):**

```tsx
// components/ui/Button.tsx
export function ButtonPrimary({ children, ...props }) {
  return (
    <button
      className={cn(
        "px-8 py-4 bg-gold-500 text-navy-900 font-semibold",
        "hover:bg-gold-400 transition-all duration-300",
        "shadow-[0_4px_14px_rgba(201,169,97,0.25)]",
        "hover:shadow-[0_6px_20px_rgba(201,169,97,0.35)]"
      )}
      style={{
        clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)'
      }}
      {...props}
    >
      {children}
    </button>
  )
}
```

**Secondary Button (Outline):**

```tsx
export function ButtonSecondary({ children, ...props }) {
  return (
    <button
      className={cn(
        "px-8 py-4 bg-transparent border-2 border-gold-500 text-gold-500 font-semibold",
        "hover:bg-gold-500/10 hover:text-gold-400 transition-all duration-300"
      )}
      style={{
        clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)'
      }}
      {...props}
    >
      {children}
    </button>
  )
}
```

### 4.3 Form Inputs

```tsx
// components/ui/Input.tsx
export function Input({ label, ...props }) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-steel-300 uppercase tracking-wider">
        {label}
      </label>
      <input
        className={cn(
          "w-full px-4 py-3",
          "bg-navy-700 border border-navy-500 text-steel-100",
          "placeholder:text-steel-500",
          "focus:border-gold-500 focus:ring-1 focus:ring-gold-500/50",
          "transition-all duration-200 outline-none"
        )}
        {...props}
      />
    </div>
  )
}
```

### 4.4 Badges & Labels

```tsx
// components/ui/Badge.tsx
export function Badge({ children, variant = 'gold' }) {
  const variants = {
    gold: "bg-gold-500/10 border-gold-500/30 text-gold-500",
    navy: "bg-navy-700 border-navy-500 text-steel-300",
  }

  return (
    <span className={cn(
      "inline-flex items-center gap-2 px-4 py-2 text-sm font-medium uppercase tracking-wider",
      "border rounded-none",
      variants[variant]
    )}>
      {children}
    </span>
  )
}
```

### 4.5 Section Dividers

```css
/* Gold accent line */
.divider-gold {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--gold-500) 20%,
    var(--gold-500) 80%,
    transparent 100%
  );
}

/* Angular section break */
.section-break {
  height: 2px;
  background: var(--navy-600);
  position: relative;
}
.section-break::after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 2px;
  background: var(--gold-500);
}
```

---

## 5. Header Design

### Structure

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  [VANGUARD]     Categories  Services  Process  Team  Contact   [CTA]   │
│     ↑                            ↑                               ↑     │
│   Gold logo              Steel-200 links                   Gold button │
│                          Gold on hover                                 │
│                          Gold underline active                         │
└─────────────────────────────────────────────────────────────────────────┘
  ↑ Fixed, navy-900/90% + backdrop-blur
  ↑ 1px gold line at bottom (on scroll)
```

### Implementation

```tsx
// components/Header.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const navItems = [
  { label: 'Categories', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-navy-900/95 backdrop-blur-md border-b border-gold-500/20"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/icons/vanguard-logo.png"
              alt="Vanguard Technology"
              width={48}
              height={48}
              className="filter brightness-0 invert sepia saturate-[5] hue-rotate-[15deg]"
            />
            <span className="text-gold-500 font-bold text-xl tracking-wide">
              VANGUARD
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-steel-200 hover:text-gold-500 transition-colors duration-200 text-sm font-medium uppercase tracking-wider"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            href="#contact"
            className="hidden lg:block px-6 py-3 bg-gold-500 text-navy-900 font-semibold text-sm uppercase tracking-wider hover:bg-gold-400 transition-colors"
            style={{
              clipPath: 'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)'
            }}
          >
            Start Partnership
          </Link>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-steel-100">
            {/* Hamburger icon */}
          </button>
        </div>
      </div>
    </header>
  )
}
```

---

## 6. Footer Design

### Structure

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  VANGUARD TECHNOLOGY                                                    │
│  Your Strategic Partner for Bangladesh Defence Market                   │
│                                                                         │
│  ════════════════════════════════════════════════════════════════════  │
│                                                                         │
│  NAVIGATION          CONTACT              CONNECT                       │
│  ───────────         ──────────           ─────────                     │
│  Categories          defence@vguardtech   [in] [X] [WhatsApp]          │
│  Services            +880-XXX-XXXX                                      │
│  Process             Dhaka, Bangladesh    ────────                      │
│  Team                                     DGDP Certified               │
│  Contact                                                                │
│                                                                         │
│  ════════════════════════════════════════════════════════════════════  │
│                                                                         │
│  © 2026 Vanguard Technology. All rights reserved.                       │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
  ↑ Navy-950 background
  ↑ Gold divider lines
  ↑ Monoline gold social icons
```

### Key Features
- Navy-950 background (darkest)
- Gold gradient dividers
- 3-column layout (nav, contact, social)
- Monoline gold social icons
- DGDP certification badge
- Clean copyright line

---

## 7. Section Specifications

### 7.1 Hero Section

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────────┐
│ [Full-screen background image with navy gradient overlay]               │
│                                                                         │
│     ═══════════════════                                                 │
│     DGDP CERTIFIED PARTNER   ← Gold badge with gold accent line above │
│                                                                         │
│     ENTER BANGLADESH'S                                                  │
│     DEFENCE MARKET TODAY     ← Display size, steel-100                 │
│                                                                         │
│     Expert DGDP registration, industry                                  │
│     connections, and 24/7 local support  ← Steel-400 text              │
│                                                                         │
│     [START YOUR JOURNEY]  [EXPLORE CAPABILITIES]                        │
│          ↑ Gold primary      ↑ Gold outline                            │
│                                                                         │
│     ────────────────────────────────────────                            │
│     🏛 DGDP Certified  📍 Dhaka  ⏰ 24/7  🤝 15+ Years                  │
│         ↑ Gold monoline icons with steel-300 text                       │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**Gradient Overlay:**
```css
background: linear-gradient(
  to right,
  rgba(5, 10, 20, 0.95) 0%,
  rgba(5, 10, 20, 0.7) 50%,
  rgba(5, 10, 20, 0.4) 100%
);
```

### 7.2 Categories Section

**Card Structure:**
```
┌────────────────────────────────────┐
│ ╱    [Photo with overlay]          │
│                                    │
│      ● LAND SYSTEMS                │  ← Gold dot + gold title
│                                    │
│      Main Battle Tanks, APCs       │  ← Steel-400 subtitle
│      & Armored Vehicles            │
│                                    │
│      $400M Annual Budget           │  ← Gold stat
│                                    │
│      Explore Category →          ╱ │  ← Gold link
└────────────────────────────────────┘
```

**Grid:** 3 columns (lg), 2 columns (md), 1 column (sm)

### 7.3 Services Section (MAJOR CHANGE)

**Current Problem:** Uses 4 different colors (blue, green, purple, orange)
**Solution:** Convert to unified gold monoline icons

**New Card Structure:**
```
┌────────────────────────────────────┐
│ ╱                                  │
│      01                            │  ← Gold number
│                                    │
│      [Gold Monoline Icon]          │  ← MapPin icon in gold
│                                    │
│      LOCAL REPRESENTATION          │  ← Steel-100 title
│                                    │
│      Your permanent business       │  ← Steel-400 description
│      address in Dhaka with...      │
│                                    │
│      ✓ Registered office           │  ← Gold checkmarks
│      ✓ Staff on standby            │
│      ✓ Document handling         ╱ │
└────────────────────────────────────┘
```

**Icon Mapping:**
| Service | Current | New |
|---------|---------|-----|
| Local Representation | Blue MapPin | Gold monoline MapPin |
| Documentation | Green FileText | Gold monoline FileText |
| Industry Liaison | Purple Users | Gold monoline Users |
| Market Intelligence | Orange TrendingUp | Gold monoline TrendingUp |

### 7.4 Process Section

**Timeline Structure:**
```
    01              02              03              04
    ●───────────────●───────────────●───────────────●
    ↑ Gold line connecting gold circles

[Angular Card]  [Angular Card]  [Angular Card]  [Angular Card]
Partnership     Document        DGDP            Ongoing
Agreement       Preparation     Submission      Support
```

**Features:**
- Gold connecting line (2px)
- Gold circular step indicators
- Angular cards with gold borders on hover
- Monoline gold icons in each card

### 7.5 Team Section

**Card Structure:**
```
┌────────────────────────────────────┐
│                                    │
│         ┌──────────┐               │
│         │  Photo   │               │  ← Circular with gold border
│         └──────────┘               │
│                                    │
│         AHMED KHAN                 │  ← Steel-100 name
│         Founder & CEO              │  ← Gold title
│                                    │
│         20+ years in Bangladesh    │  ← Steel-400 bio
│         defence industry...        │
│                                    │
│         [LinkedIn Icon]            │  ← Gold monoline
│                                  ╱ │
└────────────────────────────────────┘
```

### 7.6 Contact Section

**Layout:**
```
┌────────────────────────────────────┬────────────────────────────────────┐
│                                    │                                    │
│  GET IN TOUCH                      │  [Form]                            │
│  ═══════════════                   │                                    │
│                                    │  Full Name                         │
│  [Gold MapPin]                     │  ┌──────────────────────────────┐ │
│  Dhaka, Bangladesh                 │  │                              │ │
│                                    │  └──────────────────────────────┘ │
│  [Gold Mail]                       │                                    │
│  defence@vguardtech.com            │  Email Address                     │
│                                    │  ┌──────────────────────────────┐ │
│  [Gold Clock]                      │  │                              │ │
│  Sun-Thu: 9AM-6PM BST              │  └──────────────────────────────┘ │
│                                    │                                    │
│  ════════════════                  │  [SEND MESSAGE]                    │
│  DGDP Certified Partner            │      ↑ Gold primary button         │
│                                    │                                    │
└────────────────────────────────────┴────────────────────────────────────┘
```

---

## 8. Globe Transformation

### Color Changes

```typescript
// components/DefenseGlobe/GlobeComponent.tsx

// Arc colors
const arcColors = {
  start: '#C9A961',  // gold-500
  end: '#E5D4A1',    // gold-300
}

// Point colors
const pointColors = {
  tier1: '#D4B978',  // gold-400 (bright gold for top partners)
  tier2: '#92722A',  // gold-600 (muted gold for secondary)
  hub: '#E5D4A1',    // gold-300 (Bangladesh hub - brightest)
}

// Atmosphere
const atmosphereColor = 'rgba(201, 169, 97, 0.15)'  // Subtle gold glow

// Hexagonal grid
const hexColor = 'rgba(201, 169, 97, 0.02)'  // Very subtle gold

// Globe surface
const globeMaterial = {
  color: '#0A1628',      // navy-900
  emissive: '#162544',   // navy-700 (subtle glow)
  shininess: 10,
}
```

### Elements to Remove
- Orbital emoji particles (🚁✈️🚢🛰️📡🚀) - not premium enough
- Blue atmosphere tint

### Elements to Keep (with gold colors)
- Hexagonal territorial grid
- Animated flight paths (change to gold gradient)
- Background stars (warm white tint)
- Arc connections

---

## 9. Animation Guidelines

### Timing

| Animation | Duration | Easing |
|-----------|----------|--------|
| Hover states | 200-300ms | ease-out |
| Card reveals | 500ms | ease-out |
| Page transitions | 300ms | ease-in-out |
| Scroll reveals | 600ms | ease-out |
| Stagger delay | 100ms | - |

### Framer Motion Presets

```typescript
// lib/animations.ts

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const cardHover = {
  whileHover: {
    y: -5,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
}

export const goldGlow = {
  whileHover: {
    boxShadow: '0 0 30px rgba(201, 169, 97, 0.2)',
  },
}
```

### Animation Rules
1. **Subtle over dramatic** - animations enhance, never distract
2. **Gold glows on interaction** - consistent feedback
3. **Staggered reveals** - cards appear sequentially
4. **Respect reduced motion** - disable for accessibility
5. **60fps target** - use transform/opacity only

---

## 10. Icon System

### Monoline Gold Icons

All icons use Lucide React with custom gold styling:

```tsx
// components/icons/GoldIcon.tsx
import { LucideIcon } from 'lucide-react'

interface GoldIconProps {
  icon: LucideIcon
  size?: number
  className?: string
}

export function GoldIcon({ icon: Icon, size = 24, className }: GoldIconProps) {
  return (
    <Icon
      size={size}
      className={cn(
        "text-gold-500 stroke-[1.5]",  // Thin stroke for monoline
        className
      )}
    />
  )
}
```

### Icon Mapping

| Section | Icons Used |
|---------|------------|
| Hero trust | Building2, MapPin, Clock, Handshake |
| Services | MapPin, FileText, Users, TrendingUp |
| Process | FileSignature, FolderOpen, Upload, Headphones |
| Contact | MapPin, Mail, Clock |
| Social | Linkedin, Twitter, MessageCircle |

### Usage Example

```tsx
import { MapPin } from 'lucide-react'
import { GoldIcon } from '@/components/icons/GoldIcon'

<GoldIcon icon={MapPin} size={32} />
```

---

## 11. Implementation Files

### Files to Create

```
lib/
└── animations.ts          # Framer Motion presets

components/
├── ui/
│   ├── AngularCard.tsx   # Clipped corner card
│   ├── Button.tsx        # Primary/Secondary buttons
│   ├── Input.tsx         # Form input
│   ├── Badge.tsx         # Labels and badges
│   └── Divider.tsx       # Section dividers
└── icons/
    └── GoldIcon.tsx      # Monoline gold icon wrapper
```

### Files to Modify

```
app/
├── globals.css           # Add CSS variables, update colors
└── page.tsx              # Update section order if needed

components/
├── Header.tsx            # Complete redesign
├── Footer.tsx            # Complete redesign
├── Hero.tsx              # Update colors, add angular elements
├── DefenseProducts.tsx   # Angular cards, gold theme
├── Services.tsx          # MAJOR: Remove colors, gold only
├── Process.tsx           # Gold timeline, angular cards
├── Team.tsx              # Angular frames, gold accents
├── Contact.tsx           # Gold form styling
└── DefenseGlobe/
    └── GlobeComponent.tsx  # Gold colors, remove particles

tailwind.config.ts        # Add navy, steel, gold colors
```

### globals.css Updates

```css
/* Add to globals.css */

:root {
  /* Navy Foundation */
  --navy-950: #050A14;
  --navy-900: #0A1628;
  --navy-800: #0F1D32;
  --navy-700: #162544;
  --navy-600: #1E3356;

  /* Steel Scale */
  --steel-500: #4A5568;
  --steel-400: #718096;
  --steel-300: #A0AEC0;
  --steel-200: #CBD5E0;
  --steel-100: #E2E8F0;

  /* Gold Accent */
  --gold-600: #92722A;
  --gold-500: #C9A961;
  --gold-400: #D4B978;
  --gold-300: #E5D4A1;
}

/* Update body background */
body {
  background: linear-gradient(180deg, var(--navy-950) 0%, var(--navy-900) 100%);
  color: var(--steel-100);
}

/* Remove old amber references */
/* Delete or comment out all --tactical-amber, amber-500, etc. */
```

---

## Summary

This specification transforms the Vanguard Technology landing page into a premium Steel & Gold defense contractor website with:

1. **New Color System:** Deep navy + steel gray + gold/brass
2. **Sharp Angular Design:** Clipped corners, geometric precision
3. **5-Item Navigation:** Including Team section
4. **Unified Gold Icons:** Monoline style throughout
5. **Complete Section Redesign:** Every component transformed
6. **Gold-Dominant Globe:** Integrated with new theme
7. **Sophisticated Animations:** Subtle, professional, 60fps

The design draws inspiration from top defense contractors (Lockheed Martin, Northrop Grumman) while creating a unique, premium identity for Vanguard Technology.

---

*Specification Version 5.0 - Steel & Gold Premium Edition*
*Ready for implementation with /frontend-design skill*
