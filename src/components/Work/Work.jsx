import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'motion/react'
import './Work.css'

const projects = [
  {
    id: 'brand-film',
    category: 'Brand Film',
    title: 'Cinematic Brand Story',
    desc: 'A full brand film for a luxury lifestyle brand — directing, production, and post.',
    color: '#7C3AED',
    tags: ['Direction', 'Color Grade', '4K'],
    emoji: '🎬',
  },
  {
    id: 'reel-edit',
    category: 'Reel Edit',
    title: 'Product Launch Reel',
    desc: 'High-energy product launch reel with dynamic motion graphics and sound design.',
    color: '#B794FF',
    tags: ['Motion FX', 'Sound', 'Reels'],
    emoji: '✂️',
  },
  {
    id: 'motion-design',
    category: 'Motion Design',
    title: 'Logo Animation Pack',
    desc: 'Complete animated logo pack and brand motion guidelines for a tech startup.',
    color: '#7C3AED',
    tags: ['After Effects', 'Lottie', '2D'],
    emoji: '💫',
  },
  {
    id: 'event-highlight',
    category: 'Event',
    title: 'Event Highlight Reel',
    desc: 'Same-day edit delivered at a 500-person corporate event with live screening.',
    color: '#B794FF',
    tags: ['SDE', 'Multi-cam', 'Live'],
    emoji: '🎉',
  },
  {
    id: 'ads',
    category: 'Advertising',
    title: '30-Second Ad Spot',
    desc: 'TV-ready commercial with scripting, talent direction, and broadcast-grade finishing.',
    color: '#7C3AED',
    tags: ['Script', 'Cast', 'TV'],
    emoji: '📺',
  },
  {
    id: 'color-grade',
    category: 'Color Grading',
    title: 'Cinematic Color Suite',
    desc: 'Feature-length color grade with custom LUTs delivering a timeless film look.',
    color: '#B794FF',
    tags: ['DaVinci', 'LUTs', 'HDR'],
    emoji: '🎨',
  },
]

const filters = ['All', 'Brand Film', 'Reel Edit', 'Motion Design', 'Event', 'Advertising', 'Color Grading']

export default function Work() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="work" className="section work-section" ref={ref}>
      <div className="work-bg-glow" />
      <div className="container">
        {/* Header */}
        <motion.div
          className="work-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-tag">Our Work</div>
          <h2 className="heading-lg work-title">
            Good Content Isn't Just <span className="text-gradient">Seen</span>,<br />
            It's <em>Felt.</em>
          </h2>
          <p className="work-subtitle">
            A curated selection of projects that define our craft and passion.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="work-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {filters.map((f) => (
            <button
              key={f}
              id={`filter-${f.toLowerCase().replace(/\s+/g, '-')}`}
              className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
              {activeFilter === f && (
                <motion.div className="filter-bg" layoutId="filterBg" transition={{ type: 'spring', stiffness: 400, damping: 30 }} />
              )}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div className="work-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                id={project.id}
                className="work-card"
                layout
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.4, ease: 'easeOut' } }}
              >
                <div className="work-card-visual" style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}08)` }}>
                  <div className="work-emoji">{project.emoji}</div>
                  <div className="work-card-overlay" />
                  <div className="work-play-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5.14v14l11-7-11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="work-card-info">
                  <span className="work-category">{project.category}</span>
                  <h3 className="work-project-title">{project.title}</h3>
                  <p className="work-project-desc">{project.desc}</p>
                  <div className="work-tags">
                    {project.tags.map(t => <span key={t} className="work-tag">{t}</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
