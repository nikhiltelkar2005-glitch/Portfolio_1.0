import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import './CustomCursor.css'

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isText, setIsText] = useState(false)

  // Motion values for coordinates
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Spring physics settings for high-end trail effect
  const springConfigInner = { stiffness: 800, damping: 35, mass: 0.2 }
  const springConfigOuter = { stiffness: 200, damping: 25, mass: 0.8 }

  const cursorXSpringInner = useSpring(cursorX, springConfigInner)
  const cursorYSpringInner = useSpring(cursorY, springConfigInner)
  const cursorXSpringOuter = useSpring(cursorX, springConfigOuter)
  const cursorYSpringOuter = useSpring(cursorY, springConfigOuter)

  useEffect(() => {
    // Only show custom cursor on devices that support hover (desktops)
    const mediaQuery = window.matchMedia('(hover: hover)')
    if (!mediaQuery.matches) return

    setIsVisible(true)

    const moveCursor = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseOver = (e) => {
      // Find if hovered element or its parent is interactive
      const target = e.target
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.skill-card') ||
        target.closest('.project-card') ||
        target.closest('.btn') ||
        target.classList.contains('interactive')

      const isInputEl = 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' || 
        target.closest('input') || 
        target.closest('textarea')

      setIsHovered(!!isInteractive)
      setIsText(!!isInputEl)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [cursorX, cursorY])

  if (!isVisible) return null

  return (
    <>
      {/* Outer elastic ring */}
      <motion.div
        className={`custom-cursor-outer ${isHovered ? 'hovered' : ''} ${isClicking ? 'clicking' : ''} ${isText ? 'text-mode' : ''}`}
        style={{
          x: cursorXSpringOuter,
          y: cursorYSpringOuter,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      {/* Inner solid dot */}
      <motion.div
        className={`custom-cursor-inner ${isHovered ? 'hovered' : ''} ${isClicking ? 'clicking' : ''} ${isText ? 'text-mode' : ''}`}
        style={{
          x: cursorXSpringInner,
          y: cursorYSpringInner,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  )
}

export default CustomCursor
