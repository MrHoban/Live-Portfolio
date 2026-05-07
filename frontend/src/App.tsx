import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import DomainExpansion from './components/DomainExpansion'
import VoidBackground from './components/VoidBackground'

function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <VoidBackground />
      <AnimatePresence mode="wait">
        {!loaded ? (
          <DomainExpansion key="domain" onComplete={() => setLoaded(true)} />
        ) : (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 min-h-screen"
          >
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
              </Routes>
            </BrowserRouter>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
