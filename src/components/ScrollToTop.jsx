import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Instantly scroll back to top of the page when path changes
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop
