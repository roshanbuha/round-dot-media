import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-container" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-icon">
              <div className="footer-logo-big" />
              <div className="footer-logo-small" />
            </div>
            <div className="footer-logo-name">
              <span>Round Dot</span>
              <span>Media</span>
            </div>
          </div>
          <p className="footer-tagline">Creating Visual Stories</p>
          <p className="footer-desc">
            We CREATE. You INSPIRE. Transforming your vision into
            powerful cinematic experiences.
          </p>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4 className="footer-col-title">Services</h4>
          <ul className="footer-links">
            <li><a href="#video-editing">Video Editing</a></li>
            <li><a href="#film-making">Film Making</a></li>
            <li><a href="#branding">Film Branding</a></li>
            <li><a href="#content-creation">Content Creation</a></li>
            <li><a href="#services">Color Grading</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h4 className="footer-col-title">Company</h4>
          <ul className="footer-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#work">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        {/* Connect */}
        <div className="footer-col">
          <h4 className="footer-col-title">Connect</h4>
          <ul className="footer-links">
            <li><a href="https://instagram.com/round.dot.media" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="#" target="_blank" rel="noreferrer">YouTube</a></li>
            <li><a href="#" target="_blank" rel="noreferrer">Behance</a></li>
            <li><a href="#" target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
          <a href="mailto:hello@rounddotmedia.com" className="footer-email" style={{ display: 'inline-block' }}>hello@rounddotmedia.com</a>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <div className="container footer-bottom-inner">
          <span className="footer-copy">© {year} Round Dot Media. All rights reserved.</span>
          <div className="footer-bottom-values">
            <span>❤ Passion</span>
            <span>✦ Creativity</span>
            <span>▶ Storytelling</span>
            <span>★ Impact</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
