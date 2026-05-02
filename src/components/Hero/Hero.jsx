import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import './Hero.css'

const WORDS = ['Visual Stories', 'Brand Films', 'Bold Content', 'Your Vision']

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section id="home" className="hero" ref={containerRef}>
      {/* Animated Background Orbs */}
      <motion.div className="hero-orb hero-orb-1" style={{ y }} />
      <motion.div className="hero-orb hero-orb-2" style={{ y }} />
      <div className="hero-grid-overlay" />

      <motion.div className="hero-content container" style={{ opacity }}>
        {/* Badge */}
        <motion.div
          className="section-tag hero-tag"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Round Dot Media
        </motion.div>

        {/* Main Heading */}
        <h1 className="heading-xl hero-heading">
          <div style={{ overflow: 'hidden', display: 'inline-block' }}>
            <motion.span
              style={{ display: 'inline-block' }}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.25, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              We <span className="text-gradient">Create.</span>
            </motion.span>
          </div>
          {' '}
          <div style={{ overflow: 'hidden', display: 'inline-block' }}>
            <motion.span
              style={{ display: 'inline-block' }}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.35, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              You <span className="hero-inspire">Inspire.</span>
            </motion.span>
          </div>
        </h1>

        {/* Subtitle */}
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          We turn ideas into <em>visual impact</em>. From cinematic brand films
          to scroll-stopping content — we craft stories that move people.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="hero-ctas"
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ delay: 0.65, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href="#work" className="btn-primary hero-btn-primary">
            <span>See Our Work</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#contact" className="btn-outline">
            Let's Collaborate
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          {[
            { number: '2.5K+', label: 'Followers' },
            { number: '120+', label: 'Projects' },
            { number: '50+', label: 'Clients' },
            { number: '5★', label: 'Rating' },
          ].map((stat) => (
            <div key={stat.label} className="hero-stat">
              <span className="hero-stat-number">{stat.number}</span>
              <span className="hero-stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>


    </section>
  )
}
