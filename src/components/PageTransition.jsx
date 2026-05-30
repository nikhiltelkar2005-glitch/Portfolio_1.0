import { motion } from 'framer-motion'

const PageTransition = ({ children }) => {
  // Ultra-snappy, lightweight and high-performance slide + fade transition
  // Removed heavy GPU-intensive blur filter to prevent lag with particle background
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 12,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: -12,
      transition: {
        duration: 0.2,
        ease: 'easeIn',
      },
    },
  }

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ 
        width: '100%',
        willChange: 'transform, opacity' 
      }}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition
