"use client"

import { useEffect, useRef } from "react"

export default function Component() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const scrollPosition = window.scrollY
      const topText = containerRef.current.querySelector('.scroll-left') as HTMLElement
      const bottomText = containerRef.current.querySelector('.scroll-right') as HTMLElement
      
      if (topText && bottomText) {
        topText.style.transform = `translateX(-${scrollPosition}px)`
        bottomText.style.transform = `translateX(${scrollPosition}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="min-h-screen w-full overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-blue-500"
    >
      {/* Curved Line Top */}
      <svg className="w-full h-16 text-white/20" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0 Q300,120 600,0 T1200,0" fill="none" stroke="currentColor" strokeWidth="2"/>
      </svg>

      {/* Top Scrolling Text */}
      <div className="relative py-12 whitespace-nowrap scroll-left">
        <div className="inline-block animate-scroll-left">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className="mx-4 text-8xl font-bold tracking-widest text-transparent"
              style={{
                WebkitTextStroke: '2px white',
              }}
            >
              HACK WITH HER
            </span>
          ))}
        </div>
      </div>

      {/* Middle Curved Line */}
      <svg className="w-full h-16 text-white/20" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,120 Q300,0 600,120 T1200,120" fill="none" stroke="currentColor" strokeWidth="2"/>
      </svg>

      {/* Bottom Scrolling Text */}
      <div className="relative py-12 whitespace-nowrap scroll-right">
        <div className="inline-block animate-scroll-right">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className="mx-4 text-8xl font-bold tracking-widest text-transparent"
              style={{
                WebkitTextStroke: '2px white',
              }}
            >
              REGISTER OPEN SOON
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Curved Line */}
      <svg className="w-full h-16 text-white/20" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0 Q300,120 600,0 T1200,0" fill="none" stroke="currentColor" strokeWidth="2"/>
      </svg>

      {/* Add some content to enable scrolling */}
      <div className="h-screen" />
    </div>
  )
}