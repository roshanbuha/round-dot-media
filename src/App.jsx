import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Ticker from './components/Ticker/Ticker'
import Services from './components/Services/Services'
import Work from './components/Work/Work'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground'
import Loader from './components/Loader/Loader'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Intercept anchor links and scroll smoothly with Lenis
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a')
      if (target && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        lenis.scrollTo(target.getAttribute('href'), { offset: -80 })
      }
    }
    
    document.addEventListener('click', handleAnchorClick)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Loader />
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <Ticker />
      <Services />
      <Work />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App
