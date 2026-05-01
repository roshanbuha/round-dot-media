import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import './Services.css'

const services = [
  {
    id: 'video-editing',
    icon: '🎬',
    title: 'Video Editing',
    desc: 'Cinematic cuts, color grading, and motion graphics that elevate your story to the next level.',
    tags: ['Color Grade', 'Motion FX', 'Sound Design'],
    accent: '#7C3AED',
  },
  {
    id: 'film-making',
    icon: '🎥',
    title: 'Film Making',
    desc: 'End-to-end production — from scripting and direction to post-production and delivery.',
    tags: ['Direction', 'Script', 'Production'],
    accent: '#B794FF',
  },
  {
    id: 'branding',
    icon: '✦',
    title: 'Film Branding',
    desc: 'Brand identity, visual language and campaign assets that leave a lasting impression.',
    tags: ['Identity', 'Logo', 'Campaign'],
    accent: '#7C3AED',
  },
  {
    id: 'content-creation',
    icon: '📱',
    title: 'Content Creation',
    desc: 'Reels, Shorts, Ads and social-first content engineered for reach and engagement.',
    tags: ['Reels', 'Ads', 'Social'],
    accent: '#B794FF',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 60, filter: 'blur(10px)', scale: 0.95 },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="section services-section" ref={ref}>
      <div className="container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-tag">What We Do</div>
          <h2 className="heading-lg services-title">
            Crafting Stories That <span className="text-gradient">Move People</span>
          </h2>
          <p className="services-subtitle">
            From first frame to final cut — every service is designed to
            transform your brand into a powerful visual experience.
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((svc) => (
            <motion.div
              key={svc.id}
              id={svc.id}
              className="service-card"
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="service-card-top">
                <div className="service-icon" style={{ background: `${svc.accent}18`, borderColor: `${svc.accent}30` }}>
                  <span>{svc.icon}</span>
                </div>
                <div className="service-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </div>
              </div>
              <h3 className="service-title">{svc.title}</h3>
              <p className="service-desc">{svc.desc}</p>
              <div className="service-tags">
                {svc.tags.map((t) => (
                  <span key={t} className="service-tag">{t}</span>
                ))}
              </div>
              <div className="service-card-glow" style={{ background: `radial-gradient(circle at 50% 100%, ${svc.accent}20, transparent 70%)` }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
