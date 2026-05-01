import { useEffect, useRef } from 'react'
import './AnimatedBackground.css'

export default function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId
    
    // Resize canvas to match window
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)
    resize()

    // Particle Configuration
    const particles = []
    const particleCount = Math.min(Math.floor(window.innerWidth / 18), 80) // Responsive count
    const connectionDistance = 160
    
    // Initialize 'Round Dots'
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4, // Very slow movement
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 1 // Small elegant dots
      })
    }

    // Interactive Mouse Tracking
    let mouse = { x: -1000, y: -1000 }
    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Update and draw each dot
      particles.forEach((p, index) => {
        // Move particle
        p.x += p.vx
        p.y += p.vy
        
        // Bounce off screen edges softly
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        
        // Draw the round dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(183, 148, 255, 0.4)' // var(--purple-light)
        ctx.fill()
        
        // Draw connecting lines to other dots
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < connectionDistance) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            // Fade out the line the further away they are
            const opacity = 1 - (distance / connectionDistance)
            ctx.strokeStyle = `rgba(124, 58, 237, ${opacity * 0.2})` // var(--purple-primary)
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }

        // Draw connecting lines to the Mouse!
        const dxMouse = p.x - mouse.x
        const dyMouse = p.y - mouse.y
        const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse)
        
        if (distanceMouse < 180) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(mouse.x, mouse.y)
            const opacity = 1 - (distanceMouse / 180)
            ctx.strokeStyle = `rgba(183, 148, 255, ${opacity * 0.3})` // var(--purple-light)
            ctx.lineWidth = 1
            ctx.stroke()
        }
      })
      
      animationFrameId = requestAnimationFrame(animate)
    }
    
    animate()
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="animated-bg">
      <div className="bg-ambient-glow" />
      <canvas ref={canvasRef} className="bg-canvas" />
      <div className="bg-noise" />
    </div>
  )
}
