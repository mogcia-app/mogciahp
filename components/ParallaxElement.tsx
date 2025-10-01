'use client'

import React from 'react'
import { useParallax } from '../hooks/useParallax'

interface ParallaxElementProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

const ParallaxElement: React.FC<ParallaxElementProps> = ({
  children,
  speed = 0.5,
  className = ''
}) => {
  const offset = useParallax(speed)

  return (
    <div
      className={className}
      style={{
        transform: `translateY(${offset}px)`
      }}
    >
      {children}
    </div>
  )
}

export default ParallaxElement
