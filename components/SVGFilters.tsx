'use client'

export const SVGFilters = () => {
  return (
    <svg className="absolute w-0 h-0" aria-hidden="true">
      <defs>
        {/* Tech Glow Filter */}
        <filter id="techGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feComponentTransfer in="blur" result="glow">
            <feFuncA type="discrete" tableValues="0 0.5 0.5 0.5 0.5 1 1 1" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Holographic Effect */}
        <filter id="hologram" x="-50%" y="-50%" width="200%" height="200%">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.01 0.02" 
            numOctaves="2" 
            result="turbulence" 
          />
          <feColorMatrix 
            in="turbulence" 
            type="matrix" 
            values="0 0 0 0 0.1
                    0 0 0 0 0.9
                    0 0 0 0 1
                    0 0 0 0.8 0"
            result="hologramColor"
          />
          <feComposite in="hologramColor" in2="SourceGraphic" operator="over" />
        </filter>

        {/* Thermal Vision Effect */}
        <filter id="thermal" x="-50%" y="-50%" width="200%" height="200%">
          <feColorMatrix 
            type="matrix" 
            values="1 0 0 0 0.3
                    0 0.5 0 0 0.1
                    0 0 0.2 0 0
                    0 0 0 1 0"
          />
          <feGaussianBlur stdDeviation="1" result="thermalBlur" />
          <feComponentTransfer>
            <feFuncR type="table" tableValues="0 0.2 0.4 0.6 0.8 1" />
            <feFuncG type="table" tableValues="0 0.1 0.3 0.5 0.7 0.9" />
            <feFuncB type="table" tableValues="0 0 0.1 0.2 0.3 0.4" />
          </feComponentTransfer>
        </filter>

        {/* Radar Sweep Effect */}
        <filter id="radarSweep" x="-50%" y="-50%" width="200%" height="200%">
          <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="1" result="turbulence" />
          <feColorMatrix in="turbulence" type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="discrete" tableValues="0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1" />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation="0.5" />
          <feComposite operator="over" in2="SourceGraphic" />
        </filter>

        {/* Circuit Board Pattern */}
        <pattern id="circuitPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect width="40" height="40" fill="#0A0E1A" />
          <path d="M10 0 L10 10 L0 10" stroke="#00FF41" strokeWidth="0.5" fill="none" opacity="0.3" />
          <path d="M30 0 L30 10 L40 10" stroke="#00FF41" strokeWidth="0.5" fill="none" opacity="0.3" />
          <path d="M10 40 L10 30 L0 30" stroke="#00FF41" strokeWidth="0.5" fill="none" opacity="0.3" />
          <path d="M30 40 L30 30 L40 30" stroke="#00FF41" strokeWidth="0.5" fill="none" opacity="0.3" />
          <circle cx="10" cy="10" r="2" fill="#00FF41" opacity="0.5" />
          <circle cx="30" cy="10" r="2" fill="#00FF41" opacity="0.5" />
          <circle cx="10" cy="30" r="2" fill="#00FF41" opacity="0.5" />
          <circle cx="30" cy="30" r="2" fill="#00FF41" opacity="0.5" />
          <path d="M10 10 L30 10" stroke="#00FF41" strokeWidth="0.3" opacity="0.2" />
          <path d="M10 30 L30 30" stroke="#00FF41" strokeWidth="0.3" opacity="0.2" />
          <path d="M10 10 L10 30" stroke="#00FF41" strokeWidth="0.3" opacity="0.2" />
          <path d="M30 10 L30 30" stroke="#00FF41" strokeWidth="0.3" opacity="0.2" />
        </pattern>

        {/* Hexagonal Grid Pattern */}
        <pattern id="hexGrid" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
          <polygon 
            points="30,0 45,8.66 45,26 30,34.64 15,26 15,8.66" 
            fill="none" 
            stroke="#FF9500" 
            strokeWidth="0.5" 
            opacity="0.2"
          />
          <polygon 
            points="0,17.32 15,26 15,43.3 0,52 -15,43.3 -15,26" 
            fill="none" 
            stroke="#FF9500" 
            strokeWidth="0.5" 
            opacity="0.2"
          />
          <polygon 
            points="60,17.32 75,26 75,43.3 60,52 45,43.3 45,26" 
            fill="none" 
            stroke="#FF9500" 
            strokeWidth="0.5" 
            opacity="0.2"
          />
        </pattern>

        {/* Tactical Grid Overlay */}
        <pattern id="tacticalGrid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
          <line x1="25" y1="0" x2="25" y2="50" stroke="#00D4FF" strokeWidth="0.5" opacity="0.2" />
          <line x1="0" y1="25" x2="50" y2="25" stroke="#00D4FF" strokeWidth="0.5" opacity="0.2" />
          <circle cx="25" cy="25" r="20" fill="none" stroke="#00D4FF" strokeWidth="0.3" opacity="0.1" />
          <circle cx="25" cy="25" r="10" fill="none" stroke="#00D4FF" strokeWidth="0.3" opacity="0.15" />
          <circle cx="25" cy="25" r="2" fill="#00D4FF" opacity="0.3" />
        </pattern>

        {/* Animated Gradient Definitions */}
        <linearGradient id="amberPulse" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF9500" stopOpacity="0.8">
            <animate attributeName="stop-opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
          </stop>
          <stop offset="50%" stopColor="#FFB700" stopOpacity="1">
            <animate attributeName="stop-opacity" values="1;0.8;1" dur="2s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#FF9500" stopOpacity="0.8">
            <animate attributeName="stop-opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
          </stop>
        </linearGradient>

        <radialGradient id="explosionGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFF00" stopOpacity="1" />
          <stop offset="30%" stopColor="#FF9500" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#FF0040" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="heatSignature" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#0000FF" stopOpacity="0.3" />
          <stop offset="30%" stopColor="#00FFFF" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#00FF00" stopOpacity="0.7" />
          <stop offset="70%" stopColor="#FFFF00" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FF0000" stopOpacity="1" />
        </linearGradient>

        {/* Displacement Map for Water Effect */}
        <filter id="waterEffect" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="turbulence" seed="5">
            <animate attributeName="baseFrequency" dur="20s" values="0.02;0.03;0.02" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="5" xChannelSelector="R" yChannelSelector="G" />
        </filter>

        {/* Glitch Effect */}
        <filter id="glitch">
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="1" result="noise" seed="1">
            <animate attributeName="seed" values="1;10;1" dur="0.1s" repeatCount="indefinite" />
          </feTurbulence>
          <feColorMatrix in="noise" type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0" result="redNoise" />
          <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 1 0 0 0" result="greenNoise" />
          <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 1 0 0" result="blueNoise" />
          <feDisplacementMap in="SourceGraphic" in2="redNoise" scale="10" xChannelSelector="R" yChannelSelector="A" result="redGlitch" />
          <feDisplacementMap in="SourceGraphic" in2="greenNoise" scale="10" xChannelSelector="R" yChannelSelector="A" result="greenGlitch" />
          <feDisplacementMap in="SourceGraphic" in2="blueNoise" scale="10" xChannelSelector="R" yChannelSelector="A" result="blueGlitch" />
          <feComposite in="redGlitch" in2="greenGlitch" operator="screen" result="screenGlitch" />
          <feComposite in="screenGlitch" in2="blueGlitch" operator="screen" />
        </filter>

        {/* Night Vision Effect */}
        <filter id="nightVision" x="-50%" y="-50%" width="200%" height="200%">
          <feColorMatrix type="matrix" values="0 0 0 0 0
                                                1 1 1 0 0.2
                                                0 0 0 0 0
                                                0 0 0 1 0" />
          <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="4" result="noise" />
          <feColorMatrix in="noise" type="saturate" values="0" result="grayscaleNoise" />
          <feComponentTransfer in="grayscaleNoise" result="staticNoise">
            <feFuncA type="discrete" tableValues="0 0.02 0 0.02 0 0.02 0" />
          </feComponentTransfer>
          <feComposite in="staticNoise" in2="SourceGraphic" operator="over" />
          <feGaussianBlur stdDeviation="0.3" />
        </filter>

        {/* Scanning Line Effect */}
        <filter id="scanLine" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="turbulence" baseFrequency="0 0.5" numOctaves="1" result="turbulence">
            <animate attributeName="baseFrequency" from="0 0.5" to="0 0.52" dur="0.05s" repeatCount="indefinite" />
          </feTurbulence>
          <feColorMatrix in="turbulence" type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="discrete" tableValues="0 0 0 0 0 0.1 0 0 0 0" />
          </feComponentTransfer>
          <feComposite operator="over" in2="SourceGraphic" />
        </filter>
      </defs>
    </svg>
  )
}

export default SVGFilters