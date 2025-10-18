'use client'
import { useState, useEffect } from 'react'

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [typingText, setTypingText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  
  const fullText = 'MOGCIA'
  const totalDuration = 3000 // 3 seconds total for both animations
  const typingSpeed = totalDuration / fullText.length // Calculate speed to finish typing at the same time as progress bar
  
  useEffect(() => {
    const startTime = Date.now()
    
    // Typing animation
    let typingIndex = 0
    const typingInterval = setInterval(() => {
      if (typingIndex < fullText.length) {
        setTypingText(fullText.slice(0, typingIndex + 1))
        typingIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, typingSpeed)
    
    // Progress bar animation - synchronized with typing
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progressPercent = Math.min((elapsed / totalDuration) * 100, 100)
      
      setProgress(progressPercent)
      
      if (progressPercent >= 100) {
        clearInterval(progressInterval)
        setTimeout(() => {
          onComplete()
        }, 500) // Small delay after completion
      }
    }, 16) // ~60fps for smooth animation
    
    // Cursor blinking
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    
    return () => {
      clearInterval(typingInterval)
      clearInterval(progressInterval)
      clearInterval(cursorInterval)
    }
  }, [onComplete])
  
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      {/* MOGCIA Typing Animation */}
      <div className="mb-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 tracking-wider">
          {typingText}
          <span className={`inline-block w-0.5 h-12 bg-gray-900 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}></span>
        </h1>
      </div>
      
      {/* Progress Bar */}
      <div className="w-64 sm:w-80 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gray-900 transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      {/* Progress Percentage */}
      <div className="mt-4 text-sm text-gray-500 font-light">
        {Math.round(progress)}%
      </div>
    </div>
  )
}
