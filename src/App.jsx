import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Ticker from './components/Ticker/Ticker'
import Services from './components/Services/Services'
import Work from './components/Work/Work'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground'

function App() {
  return (
    <>
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
