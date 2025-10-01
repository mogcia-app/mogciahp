'use client'

import React from 'react'
import { useScrollProgress } from '../hooks/useScrollAnimation'

const ScrollProgress: React.FC = () => {
  const progress = useScrollProgress()

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div 
        className="h-full bg-gradient-to-r from-gold-400 to-gold-600 transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export default ScrollProgress
