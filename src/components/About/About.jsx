import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import './About.css'

const values = [
  { icon: '❤️', label: 'Passion' },
  { icon: '✦', label: 'Creativity' },
  { icon: '▶', label: 'Storytelling' },
  { icon: '★', label: 'Impact' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section about-section" ref={ref}>
      <div className="container about-container">


        {/* Right — Text */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 40, filter: 'blur(10px)' }}
          animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div className="section-tag">About Us</div>
          <h2 className="heading-lg about-title">
            We Turn Ideas Into{' '}
            <span className="text-gradient">Visual Impact</span>
          </h2>
          <p className="about-text">
            Round Dot Media is a passionate visual storytelling studio dedicated
            to transforming your brand's vision into compelling cinematic
            experiences. We believe every brand has a story worth telling — and
            we're here to tell it with craft and intention.
          </p>
          <p className="about-text">
            From video editing and film production to brand identity and social
            content — we're your end-to-end creative partner. Versatile. Simple.
            Memorable.
          </p>

          <div className="about-pillars">
            {[
              { title: 'Versatile', desc: 'From vertical reels to 4K films — any format, any platform.' },
              { title: 'Simple', desc: 'Clean process, clear communication, zero creative friction.' },
              { title: 'Memorable', desc: 'Storytelling that sticks long after the final frame.' },
            ].map((p, i) => (
              <motion.div
                key={p.title}
                className="about-pillar"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.12, duration: 0.5 }}
              >
                <div className="pillar-dot" />
                <div>
                  <strong>{p.title}</strong>
                  <span>{p.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="about-ctas">
            <a href="#contact" className="btn-primary">
              <span>Let's Create Together</span>
            </a>
            <a href="#work" className="btn-outline">View Portfolio</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
