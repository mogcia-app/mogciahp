'use client'

import React, { useRef, useEffect, useState } from 'react'

interface VideoLinkedAnimationProps {
  children: React.ReactNode
  videoRef: React.RefObject<HTMLVideoElement>
  animationType?: 'float' | 'pulse' | 'rotate' | 'scale' | 'slide'
  intensity?: number
  className?: string
}

export default function VideoLinkedAnimation({
  children,
  videoRef,
  animationType = 'float',
  intensity = 1,
  className = ''
}: VideoLinkedAnimationProps) {
  const [animationValue, setAnimationValue] = useState(0)
  const animationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateAnimation = () => {
      if (videoRef.current && animationRef.current) {
        const video = videoRef.current
        const currentTime = video.currentTime
        const duration = video.duration
        
        if (duration > 0) {
          // 動画の再生時間に基づいてアニメーション値を計算
          const progress = (currentTime % 4) / 4 // 4秒周期でリセット
          setAnimationValue(progress)
        }
      }
    }

    const interval = setInterval(updateAnimation, 100) // 100msごとに更新
    return () => clearInterval(interval)
  }, [videoRef])

  const getAnimationStyle = () => {
    const baseValue = animationValue * 2 * Math.PI // 0 to 2π
    
    switch (animationType) {
      case 'float':
        return {
          transform: `translateY(${Math.sin(baseValue) * 10 * intensity}px)`,
          transition: 'transform 0.1s ease-out'
        }
      case 'pulse':
        return {
          transform: `scale(${1 + Math.sin(baseValue) * 0.1 * intensity})`,
          transition: 'transform 0.1s ease-out'
        }
      case 'rotate':
        return {
          transform: `rotate(${Math.sin(baseValue) * 15 * intensity}deg)`,
          transition: 'transform 0.1s ease-out'
        }
      case 'scale':
        return {
          transform: `scale(${0.95 + Math.sin(baseValue) * 0.1 * intensity})`,
          transition: 'transform 0.1s ease-out'
        }
      case 'slide':
        return {
          transform: `translateX(${Math.sin(baseValue) * 20 * intensity}px)`,
          transition: 'transform 0.1s ease-out'
        }
      default:
        return {}
    }
  }

  return (
    <div
      ref={animationRef}
      className={className}
      style={getAnimationStyle()}
    >
      {children}
    </div>
  )
}
