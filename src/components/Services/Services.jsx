import { useRef, useState } from 'react'
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

const dummyReels = [
  { id: 1, video: "https://www.w3schools.com/html/mov_bbb.mp4", poster: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=1066&fit=crop", views: "1.2M", title: "Cinematic Cut" },
  { id: 2, video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4", poster: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=1066&fit=crop", views: "850K", title: "Brand Story" },
  { id: 3, video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4", poster: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=600&h=1066&fit=crop", views: "2.4M", title: "Behind The Scenes" },
  { id: 4, video: "https://www.w3schools.com/html/mov_bbb.mp4", poster: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=1066&fit=crop", views: "500K", title: "Commercial Ad" }
]

const ReelCard = ({ reel }) => {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)

  const togglePlay = () => {
    if (videoRef.current) {
      if (!videoRef.current.paused) {
        videoRef.current.pause()
      } else {
        const playPromise = videoRef.current.play()
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error("Video playback failed:", error)
          })
        }
      }
    }
  }

  return (
    <div className="dummy-reel" onClick={togglePlay}>
      <video
        ref={videoRef}
        src={reel.video}
        poster={reel.poster}
        className="reel-bg"
        loop
        playsInline
        muted
        autoPlay
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <div className={`reel-overlay ${isPlaying ? 'is-playing' : ''}`}>
        <div className="reel-play">
          {isPlaying ? (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </div>
        <div className="reel-info">
          <span className="reel-views">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            {reel.views}
          </span>
          <h4 className="reel-title">{reel.title}</h4>
        </div>
      </div>
    </div>
  )
}

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
          className="reels-container"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {dummyReels.map((reel) => (
            <ReelCard key={reel.id} reel={reel} />
          ))}
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
