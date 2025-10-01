'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollTransformProps {
  children: React.ReactNode
  className?: string
  transformType?: 'rotate' | 'scale' | 'translateX' | 'translateY' | 'skew'
  intensity?: number
  threshold?: number
}

export default function ScrollTransform({ 
  children, 
  className = '', 
  transformType = 'rotate',
  intensity = 1,
  threshold = 0.1
}: ScrollTransformProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return

      const rect = elementRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // 要素が画面に入った時の進捗を計算 (0-1)
      const progress = Math.max(0, Math.min(1, 
        (windowHeight - rect.top) / (windowHeight + rect.height)
      ))

      // 閾値を超えた場合のみ変形を適用
      if (progress > threshold) {
        const adjustedProgress = (progress - threshold) / (1 - threshold)
        
        switch (transformType) {
          case 'rotate':
            const rotation = (adjustedProgress - 0.5) * 15 * intensity
            setTransform(`rotate(${rotation}deg)`)
            break
          case 'scale':
            const scale = 0.9 + (adjustedProgress * 0.2 * intensity)
            setTransform(`scale(${scale})`)
            break
          case 'translateX':
            const translateX = (adjustedProgress - 0.5) * 30 * intensity
            setTransform(`translateX(${translateX}px)`)
            break
          case 'translateY':
            const translateY = (adjustedProgress - 0.5) * 20 * intensity
            setTransform(`translateY(${translateY}px)`)
            break
          case 'skew':
            const skew = (adjustedProgress - 0.5) * 5 * intensity
            setTransform(`skew(${skew}deg)`)
            break
        }
      } else {
        setTransform('')
      }
    }

    // パフォーマンスを向上させるため、throttleを追加
    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    handleScroll() // 初期実行

    return () => window.removeEventListener('scroll', throttledHandleScroll)
  }, [transformType, intensity, threshold])

  return (
    <div 
      ref={elementRef}
      className={className}
      style={{ 
        transform,
        transition: 'transform 0.3s ease-out',
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  )
}
