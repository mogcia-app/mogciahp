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
  const typingSpeed = 150 // ms per character
  const progressDuration = 3500 // 3.5 seconds total
  
  useEffect(() => {
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
    
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => {
            onComplete()
          }, 500) // Small delay after completion
          return 100
        }
        return prev + (100 / (progressDuration / 50)) // Update every 50ms
      })
    }, 50)
    
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
