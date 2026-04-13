import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const location = useLocation()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50)
  })

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`navbar-wrapper ${scrolled ? 'scrolled' : 'top'}`}
    >
      <nav className={`navbar ${scrolled ? 'scrolled' : 'top'}`}>
        <Link to="/" className="navbar-brand">Nikhil</Link>

        <div className="navbar-links">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`navbar-link ${isActive ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>
      </nav>
    </motion.div>
  )
}

export default Navbar
