import { motion } from 'framer-motion'
import './Quote.css'

const Quote = () => {
  return (
    <section className="quote-section">
      {/* Background Atmosphere */}
      <div className="quote-atmosphere">
        <div className="quote-orbit-outer"></div>
        <div className="quote-orbit-inner"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="quote-inner"
      >
        <div className="quote-card">
          <div className="quote-top-line"></div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="quote-text"
          >
            "If debugging is the process of removing bugs, then programming must be the process of putting them in."
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="quote-attribution"
          >
            <div className="quote-dash"></div>
            <span className="quote-author">— Edsger W. Dijkstra</span>
            <div className="quote-dash"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Quote
