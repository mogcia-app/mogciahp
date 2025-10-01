'use client'

import React, { useEffect, useState } from 'react'

interface Ripple {
  id: number
  x: number
  y: number
  size: number
  opacity: number
}

const StableITRipple: React.FC = () => {
  const [ripples, setRipples] = useState<Ripple[]>([])
  const lastRippleTime = React.useRef(0)

  const colors = [
    'rgba(239, 68, 68, 0.6)',    // red-500
    'rgba(220, 38, 38, 0.5)',    // red-600
    'rgba(185, 28, 28, 0.4)',    // red-700
    'rgba(248, 113, 113, 0.5)',  // red-400
    'rgba(252, 165, 165, 0.4)',  // red-300
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now()
      
      // 波紋の生成頻度を制限（200ms間隔）
      if (now - lastRippleTime.current < 200) return
      
      lastRippleTime.current = now

      const newRipple: Ripple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 80 + 60, // 60-140px
        opacity: Math.random() * 0.5 + 0.3 // 0.3-0.8
      }

      setRipples(prev => {
        const newRipples = [...prev, newRipple].slice(-3) // 最新3個のみ
        return newRipples
      })

      // 2秒後に削除
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id))
      }, 2000)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="absolute rounded-full border animate-ping"
          style={{
            left: ripple.x - ripple.size / 2,
            top: ripple.y - ripple.size / 2,
            width: ripple.size,
            height: ripple.size,
            borderColor: colors[Math.floor(Math.random() * colors.length)],
            opacity: ripple.opacity,
            animationDuration: '2s',
            animationIterationCount: '1',
            boxShadow: `0 0 ${ripple.size * 0.1}px ${colors[Math.floor(Math.random() * colors.length)]}`
          }}
        />
      ))}
    </div>
  )
}

export default StableITRipple
