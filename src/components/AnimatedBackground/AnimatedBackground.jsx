import { motion } from 'motion/react'
import './AnimatedBackground.css'

export default function AnimatedBackground() {
  return (
    <div className="animated-bg">
      <div className="bg-noise" />
      
      <motion.div
        className="bg-orb bg-orb-1"
        animate={{
          x: ['0%', '15%', '-5%', '0%'],
          y: ['0%', '10%', '-10%', '0%'],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="bg-orb bg-orb-2"
        animate={{
          x: ['0%', '-15%', '5%', '0%'],
          y: ['0%', '-10%', '10%', '0%'],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="bg-orb bg-orb-3"
        animate={{
          x: ['0%', '10%', '-15%', '0%'],
          y: ['0%', '-15%', '5%', '0%'],
          scale: [1, 1.05, 1.1, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}
