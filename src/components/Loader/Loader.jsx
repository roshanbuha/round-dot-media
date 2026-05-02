import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import './Loader.css'

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = 'hidden'
    
    let startTime
    const duration = 2000

    const updateProgress = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progressRatio = Math.min((timestamp - startTime) / duration, 1)
      
      // easeOutExpo for smooth progression
      const ease = progressRatio === 1 ? 1 : 1 - Math.pow(2, -10 * progressRatio)
      
      setProgress(Math.floor(ease * 100))

      if (progressRatio < 1) {
        requestAnimationFrame(updateProgress)
      } else {
        setTimeout(() => {
          setIsVisible(false)
          document.body.style.overflow = '' // Restore scrolling
          if (onComplete) onComplete()
        }, 400) // Small pause at 100%
      }
    }

    requestAnimationFrame(updateProgress)
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="loader-overlay"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="loader-content">
            <motion.div 
              className="loader-brand"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="loader-logo-icon">
                <div className="loader-circle-big" />
                <div className="loader-circle-small" />
              </div>
              <span className="loader-text">ROUND DOT MEDIA</span>
            </motion.div>
            
            <motion.div 
              className="loader-progress-wrapper"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="loader-progress-bar" style={{ width: `${progress}%` }} />
            </motion.div>
            
            <motion.div 
              className="loader-percentage"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {progress}%
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
