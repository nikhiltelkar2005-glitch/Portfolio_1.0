import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Quote from './components/Quote'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const HomeLayout = () => (
  <>
    <Hero />
    <Skills />
    <Quote />
  </>
)

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Background />
        
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<HomeLayout />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
