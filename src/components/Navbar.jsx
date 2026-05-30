import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, User, FolderOpen, Mail } from 'lucide-react'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const location = useLocation()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50)
  })

  const navLinks = [
    { name: 'Home',     href: '/',         icon: Home },
    { name: 'About',    href: '/about',    icon: User },
    { name: 'Projects', href: '/projects', icon: FolderOpen },
    { name: 'Contact',  href: '/contact',  icon: Mail },
  ]

  return (
    <>
      {/* ── Top bar (desktop) ── */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`navbar-wrapper ${scrolled ? 'scrolled' : 'top'}`}
      >
        <nav className={`navbar ${scrolled ? 'scrolled' : 'top'}`}>
          <Link to="/" className="navbar-brand">Nikhil</Link>

          {/* Desktop links — hidden on mobile */}
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

      {/* ── Bottom nav bar (mobile only) ── */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bottom-nav"
      >
        {navLinks.map((link) => {
          const isActive = location.pathname === link.href
          const Icon = link.icon
          return (
            <Link
              key={link.name}
              to={link.href}
              className={`bottom-nav-item ${isActive ? 'active' : ''}`}
            >
              <span className="bottom-nav-icon">
                <Icon size={20} strokeWidth={isActive ? 2.5 : 1.8} />
              </span>
              <span className="bottom-nav-label">{link.name}</span>
            </Link>
          )
        })}
      </motion.nav>
    </>
  )
}

export default Navbar
