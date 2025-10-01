'use client'

import { useEffect, useRef } from 'react'

interface CodeLine {
  x: number
  y: number
  text: string
  opacity: number
  speed: number
  life: number
  maxLife: number
}

interface CodeAnimationProps {
  scrollProgress: number
  isVisible: boolean
}

export default function CodeAnimation({ scrollProgress, isVisible }: CodeAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const codeLinesRef = useRef<CodeLine[]>([])
  const matrixRef = useRef<string[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Canvas size setup
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Code snippets for animation
    const codeSnippets = [
      'const ai = new AI()',
      'function optimize() {',
      'return data.map()',
      'async function fetch()',
      'if (condition) {',
      'console.log("debug")',
      'class Component {',
      'useEffect(() => {',
      'setState(newValue)',
      'return <div>',
      'export default',
      'import React from',
      'const [state, setState]',
      'useState(initial)',
      'props.children',
      'onClick={handler}',
      'className="style"',
      'style={{}}',
      'useCallback(() => {',
      'useMemo(() => {'
    ]

    // Initialize matrix characters
    if (matrixRef.current.length === 0) {
      matrixRef.current = Array.from({ length: 100 }, () => 
        String.fromCharCode(0x30A0 + Math.random() * 96)
      )
    }

    // Create code lines based on scroll progress
    const createCodeLines = () => {
      const lineCount = Math.floor(scrollProgress * 15) + 10 // 10-25 lines (minimum 10)
      
      // Remove old lines
      codeLinesRef.current = codeLinesRef.current.filter(line => line.life > 0)
      
      // Add new lines
      for (let i = codeLinesRef.current.length; i < lineCount; i++) {
        const codeLine: CodeLine = {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
          opacity: Math.random() * 0.6 + 0.4,
          speed: Math.random() * 2 + 1,
          life: Math.random() * 300 + 200,
          maxLife: Math.random() * 300 + 200
        }
        codeLinesRef.current.push(codeLine)
      }
    }

    // Initialize with some particles
    createCodeLines()

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create code lines based on scroll
      createCodeLines()

      // Draw matrix rain effect
      ctx.save()
      ctx.fillStyle = '#00ff00'
      ctx.font = '12px monospace'
      ctx.globalAlpha = 0.1
      
      for (let i = 0; i < matrixRef.current.length; i++) {
        const x = (i % 20) * 60
        const y = (Math.floor(i / 20) * 20 + Date.now() * 0.01) % canvas.height
        ctx.fillText(matrixRef.current[i], x, y)
      }
      ctx.restore()

      // Update and draw code lines
      codeLinesRef.current.forEach((line, index) => {
        // Update line
        line.y += line.speed
        line.life -= 1
        line.opacity = (line.life / line.maxLife) * 0.6

        // Wrap around screen
        if (line.y > canvas.height) {
          line.y = -20
          line.x = Math.random() * canvas.width
        }

        // Draw code line
        ctx.save()
        ctx.globalAlpha = line.opacity
        ctx.fillStyle = '#00ff41'
        ctx.font = '14px monospace'
        ctx.shadowBlur = 10
        ctx.shadowColor = '#00ff41'
        
        // Add syntax highlighting effect
        const words = line.text.split(' ')
        let xOffset = line.x
        
        words.forEach((word, wordIndex) => {
          let color = '#00ff41' // default green
          
          if (word.includes('function') || word.includes('const') || word.includes('let')) {
            color = '#ff6b6b' // red for keywords
          } else if (word.includes('()') || word.includes('{}')) {
            color = '#4ecdc4' // cyan for functions
          } else if (word.includes('"') || word.includes("'")) {
            color = '#ffe66d' // yellow for strings
          } else if (word.includes('=') || word.includes('+') || word.includes('-')) {
            color = '#a8e6cf' // light green for operators
          }
          
          ctx.fillStyle = color
          ctx.fillText(word, xOffset, line.y)
          xOffset += ctx.measureText(word + ' ').width
        })
        
        ctx.restore()

        // Remove dead lines
        if (line.life <= 0) {
          codeLinesRef.current.splice(index, 1)
        }
      })

      // Draw digital grid overlay
      ctx.save()
      ctx.strokeStyle = '#00ff41'
      ctx.globalAlpha = 0.05
      ctx.lineWidth = 1
      
      for (let x = 0; x < canvas.width; x += 50) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      
      for (let y = 0; y < canvas.height; y += 50) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
      ctx.restore()

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [scrollProgress, isVisible])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      style={{ background: 'transparent' }}
    />
  )
}
