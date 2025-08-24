'use client'

import { useState } from 'react'

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <section className="py-0 bg-black border-b-2 border-amber-500">
      <div className="w-full max-w-6xl mx-auto">
        <div className="relative aspect-video bg-black">
          {/* Video Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Play Button */}
            <button
              onClick={handlePlayPause}
              className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200 group"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              ) : (
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>
            
            {/* Video Duration Indicator */}
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded">
              0:00 / 0:08
            </div>
          </div>
          
          {/* Actual video element (hidden for now - will be activated when video source is added) */}
          <video
            className="hidden w-full h-full object-cover"
            controls
            loop
            muted
            playsInline
          >
            {/* Video source will be added when available */}
            {/* <source src="/videos/vanguard-defense.mp4" type="video/mp4" /> */}
          </video>
        </div>
      </div>
    </section>
  )
}