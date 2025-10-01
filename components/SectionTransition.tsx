'use client'

import { useEffect, useRef, useState } from 'react'

interface SectionTransitionProps {
  children: React.ReactNode
  className?: string
  effect?: 'fade' | 'slide' | 'scale' | 'blur'
  direction?: 'up' | 'down' | 'left' | 'right'
  duration?: number
}

export default function SectionTransition({ 
  children, 
  className = '',
  effect = 'fade',
  direction = 'up',
  duration = 0.6
}: SectionTransitionProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return 'translateY(30px)'
        case 'down':
          return 'translateY(-30px)'
        case 'left':
          return 'translateX(30px)'
        case 'right':
          return 'translateX(-30px)'
        default:
          return 'translateY(30px)'
      }
    }
    return 'translateY(0) translateX(0)'
  }

  const getOpacity = () => {
    return isVisible ? 1 : 0
  }

  const getFilter = () => {
    if (effect === 'blur') {
      return isVisible ? 'blur(0px)' : 'blur(10px)'
    }
    return 'blur(0px)'
  }

  const getScale = () => {
    if (effect === 'scale') {
      return isVisible ? 1 : 0.9
    }
    return 1
  }

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        transform: `${getTransform()} scale(${getScale()})`,
        opacity: getOpacity(),
        filter: getFilter(),
        transition: `all ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
        willChange: 'transform, opacity, filter'
      }}
    >
      {children}
    </div>
  )
}
