import { useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import './Contact.css'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section contact-section" ref={ref}>
      <div className="contact-bg-glow" />
      <div className="container contact-container">
        {/* Left */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-tag">Get In Touch</div>
          <h2 className="heading-lg contact-title">
            Let's Create <span className="text-gradient">Something</span>{' '}
            <em>Remarkable</em>
          </h2>
          <p className="contact-text">
            Ready to tell your story? Drop us a message and we'll get back to
            you within 24 hours. Let's build something amazing together.
          </p>

          <div className="contact-details">
            <a href="mailto:hello@rounddotmedia.com" className="contact-detail-item" id="contact-email">
              <div className="contact-detail-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <span className="contact-detail-label">Email</span>
                <span className="contact-detail-value">hello@rounddotmedia.com</span>
              </div>
            </a>

            <a href="tel:+911234567890" className="contact-detail-item" id="contact-phone">
              <div className="contact-detail-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.5a19.79 19.79 0 01-3-8.63A2 2 0 012.18 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <div>
                <span className="contact-detail-label">Phone</span>
                <span className="contact-detail-value">+91 12345 67890</span>
              </div>
            </a>

            <div className="contact-detail-item" id="contact-location">
              <div className="contact-detail-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <span className="contact-detail-label">Location</span>
                <span className="contact-detail-value">Your City, India</span>
              </div>
            </div>
          </div>

          <div className="contact-social">
            {['Instagram', 'YouTube', 'Behance', 'LinkedIn'].map((platform) => (
              <a key={platform} href="#" className="social-chip" id={`social-${platform.toLowerCase()}`}>
                {platform}
              </a>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  )
}
