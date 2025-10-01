'use client'

import { useState, useRef, useEffect } from 'react'

interface HoverRevealProps {
  children: React.ReactNode
  revealElement: React.ReactNode
  className?: string
  direction?: 'top' | 'bottom' | 'left' | 'right'
  distance?: number
  delay?: number
}

export default function HoverReveal({ 
  children, 
  revealElement,
  className = '',
  direction = 'top',
  distance = 20,
  delay = 0
}: HoverRevealProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }
  }

  const getTransform = () => {
    if (!isHovered) return 'translateY(0) scale(0.98)'
    
    const baseTransform = `scale(1.02)`
    const mouseTransform = `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
    
    return `${baseTransform} ${mouseTransform}`
  }

  const getRevealTransform = () => {
    if (!isHovered) {
      switch (direction) {
        case 'top':
          return `translateY(${distance}px) scale(0.8)`
        case 'bottom':
          return `translateY(-${distance}px) scale(0.8)`
        case 'left':
          return `translateX(${distance}px) scale(0.8)`
        case 'right':
          return `translateX(-${distance}px) scale(0.8)`
        default:
          return `translateY(${distance}px) scale(0.8)`
      }
    }
    return 'translateY(0) scale(1)'
  }

  return (
    <div
      ref={containerRef}
      className={`relative group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Main Content */}
      <div
        className="transition-all duration-500 ease-out"
        style={{
          transform: getTransform(),
          zIndex: 2,
          willChange: 'transform'
        }}
      >
        {children}
      </div>

      {/* Reveal Element */}
      <div
        className="absolute inset-0 transition-all duration-500 ease-out pointer-events-none"
        style={{
          transform: getRevealTransform(),
          opacity: isHovered ? 1 : 0,
          zIndex: 1,
          transitionDelay: `${delay}ms`,
          willChange: 'transform, opacity'
        }}
      >
        {revealElement}
      </div>
    </div>
  )
}
