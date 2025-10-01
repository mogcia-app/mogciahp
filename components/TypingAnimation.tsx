'use client'

import { useState, useEffect } from 'react'

interface TypingAnimationProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  cursor?: boolean
  cursorBlink?: boolean
  cursorColor?: string
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  speed = 100,
  delay = 0,
  className = '',
  cursor = true,
  cursorBlink = true,
  cursorColor = 'currentColor'
}) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      } else {
        setIsComplete(true)
      }
    }, currentIndex === 0 ? delay : speed)

    return () => clearTimeout(timer)
  }, [currentIndex, text, speed, delay])

  return (
    <span className={className}>
      {displayedText}
      {cursor && (
        <span 
          className={`inline-block w-0.5 h-[1em] ml-1 transition-all duration-200 ${
            cursorBlink && !isComplete ? 'animate-pulse' : ''
          }`}
          style={{
            backgroundColor: cursorColor,
            animation: cursorBlink && !isComplete ? 'typingBlink 1.2s infinite' : 'none',
            boxShadow: isComplete ? '0 0 8px rgba(59, 130, 246, 0.5)' : 'none'
          }}
        />
      )}
      <style jsx>{`
        @keyframes typingBlink {
          0%, 50% { 
            opacity: 1; 
            transform: scaleY(1);
          }
          51%, 100% { 
            opacity: 0.3; 
            transform: scaleY(0.8);
          }
        }
      `}</style>
    </span>
  )
}

export default TypingAnimation
