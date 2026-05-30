import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Quote from './components/Quote'
import Footer from './components/Footer'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import PageTransition from './components/PageTransition'
import ScrollToTop from './components/ScrollToTop'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

const HomeLayout = () => (
  <PageTransition>
    <Hero />
    <Skills />
    <Quote />
  </PageTransition>
)

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomeLayout />} />
        <Route 
          path="/about" 
          element={
            <PageTransition>
              <About />
            </PageTransition>
          } 
        />
        <Route 
          path="/projects" 
          element={
            <PageTransition>
              <Projects />
            </PageTransition>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          } 
        />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <ScrollToTop />
        <CustomCursor />
        <Background />
        
        <Navbar />
        
        <main>
          <AnimatedRoutes />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
