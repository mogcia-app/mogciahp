'use client'

import React, { useState, useEffect } from 'react'

interface TypingTitleProps {
  text: string
  prefix?: string
  speed?: number
  delay?: number
}

const TypingTitle: React.FC<TypingTitleProps> = ({ 
  text, 
  prefix = 'ー', 
  speed = 100, 
  delay = 500 
}) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!isTyping) return

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timer)
    }
  }, [currentIndex, text, speed, isTyping])

  return (
    <div className="flex items-center">
      <span className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mr-4">
        {prefix}
      </span>
      <span className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900">
        {displayedText}
        <span className="animate-pulse">|</span>
      </span>
    </div>
  )
}

export default TypingTitle
