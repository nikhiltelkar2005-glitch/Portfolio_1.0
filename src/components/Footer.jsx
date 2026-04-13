import { Github, Linkedin, Instagram, Mail, Phone, Copy, Check } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [copied, setCopied] = useState(false)

  const handleCopy = (e, text) => {
    e.preventDefault()
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  const socials = [
    { icon: <Github size={18} />, href: 'https://github.com/nikhiltelkar2005-glitch', label: 'GitHub' },
    { icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/nikhilvtelkar', label: 'LinkedIn' },
    { icon: <Instagram size={18} />, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand-col">
            <h2 className="footer-brand-name">Nikhil</h2>
            <p className="footer-brand-tagline">
              Architecting the next generation of web experiences through code and design.
            </p>
            <div className="footer-socials">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  title={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-list">
              {navLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="footer-nav-link">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-contact-col">
            <div className="footer-contact-glow"></div>
            <h4 className="footer-col-title">Contact</h4>
            <div className="footer-contact-items">
              <div className="footer-contact-row">
                <Mail size={16} className="footer-contact-icon" />
                <a href="mailto:nikhiltelkar19@gmail.com" className="footer-contact-row">
                  nikhiltelkar19@gmail.com
                </a>
                <button
                  onClick={(e) => handleCopy(e, 'nikhiltelkar19@gmail.com')}
                  className="footer-copy-btn"
                  title="Copy email"
                >
                  {copied ? <Check size={14} color="#22c55e" /> : <Copy size={14} />}
                </button>
              </div>

              <a href="tel:+918618060140" className="footer-contact-row">
                <Phone size={16} className="footer-contact-icon" />
                +91 8618060140
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="footer-copyright-bar">
          <p className="footer-copyright-text">
            © {currentYear} Nikhil. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
