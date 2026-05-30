import { useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send, Copy, Check } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const [copied, setCopied] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(null), 2000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    
    try {
      // Replace YOUR_FORMSPREE_ID with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/maqkkvab', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message
        })
      })

      if (response.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setStatus(''), 5000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <div className="contact-section">
      <div className="contact-container">

        {/* Header */}
        <div className="contact-header">
          <h2 className="contact-main-title">Get In Touch</h2>
          <div className="contact-title-underline"></div>
          <p className="contact-subtitle">
            Have a project in mind or want to collaborate? Feel free to reach out using the form below or through my contact information.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="contact-layout">

          {/* LEFT — Form */}
          <div className="contact-form-wrapper">
            <div className="contact-form-card">
              <h3 className="contact-form-title">Send a Message</h3>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div>
                  <label className="contact-field-label">Your Name</label>
                  <input
                    type="text"
                    placeholder="Name Here"
                    className="contact-input"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="contact-field-label">Your Email</label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="contact-input"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="contact-field-label">Message</label>
                  <textarea
                    placeholder="Your message here..."
                    className="contact-textarea"
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    required
                  />
                </div>

                <button type="submit" className="contact-submit-btn" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Send Message'} <Send size={18} />
                </button>
                {status === 'success' && <p style={{ color: '#22c55e', marginTop: '1rem', textAlign: 'center' }}>Message sent successfully!</p>}
                {status === 'error' && <p style={{ color: '#ef4444', marginTop: '1rem', textAlign: 'center' }}>Failed to send message. Please try again.</p>}
              </form>
            </div>
          </div>

          {/* RIGHT — Info */}
          <div className="contact-info-wrapper">
            <div>
              <h3 className="contact-info-title">Contact Information</h3>
              <div className="contact-info-cards">

                <div className="contact-info-card">
                  <div className="contact-info-icon"><Mail size={18} /></div>
                  <div>
                    <p className="contact-info-card-label">Email</p>
                    <p className="contact-info-card-value">
                      <a href="mailto:nikhiltelkar19@gmail.com">nikhiltelkar19@gmail.com</a>
                      <button className="copy-btn" onClick={() => handleCopy('nikhiltelkar19@gmail.com', 'email')} title="Copy email">
                        {copied === 'email' ? <Check size={14} color="#22c55e" /> : <Copy size={14} />}
                      </button>
                    </p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon"><Phone size={18} /></div>
                  <div>
                    <p className="contact-info-card-label">Phone</p>
                    <p className="contact-info-card-value">
                      <a href="tel:+918618060140">+91 8618060140</a>
                    </p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon"><MapPin size={18} /></div>
                  <div>
                    <p className="contact-info-card-label">Location</p>
                    <p className="contact-info-card-value">India</p>
                  </div>
                </div>

              </div>
            </div>

            <div>
              <h3 className="contact-social-title">Connect with Me</h3>
              <div className="contact-social-icons">
                <a href="https://github.com/nikhiltelkar2005-glitch" target="_blank" rel="noopener noreferrer" className="contact-social-btn" title="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/nikhilvtelkar" target="_blank" rel="noopener noreferrer" className="contact-social-btn" title="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="contact-social-btn" title="Instagram">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact
