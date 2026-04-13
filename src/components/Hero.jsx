import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Download, ArrowRight } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const phrases = [
    "Always learning and expanding my skills",
    "Full-Stack Developer",
    "AI Enthusiast",
    "Building real-world web apps"
  ]
  const [loopNum, setLoopNum] = useState(0)
  const [delta, setDelta] = useState(150)

  useEffect(() => {
    let ticker = setInterval(() => tick(), delta)
    return () => clearInterval(ticker)
  }, [text, delta])

  const tick = () => {
    let full = phrases[loopNum % phrases.length]
    let updatedText = isDeleting
      ? full.substring(0, text.length - 1)
      : full.substring(0, text.length + 1)

    setText(updatedText)

    if (!isDeleting && updatedText === full) {
      setIsDeleting(true)
      setDelta(60)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(150)
    }
  }

  return (
    <section className="hero-section" id="home">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
        className="hero-inner"
      >
        {/* Available badge */}
        <div className="hero-badge">
          <span className="pulse-dot"></span>
          <span className="hero-badge-text">Available for work</span>
        </div>

        {/* Main title */}
        <h1 className="hero-title">
          <span className="hero-title-white">Nikhil's</span>
          <span className="hero-title-purple">Portfolio</span>
        </h1>

        {/* Typing subtitle */}
        <div className="hero-typing-wrapper">
          <span>{text}</span>
          <span className="hero-cursor"></span>
        </div>

        {/* Buttons */}
        <div className="btn-group">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary"
          >
            <Download size={22} />
            Download Resume
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-secondary"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore My Work
            <ArrowRight size={22} />
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
