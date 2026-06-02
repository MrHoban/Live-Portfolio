import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'

const BgField = () => <div className="bg-field" aria-hidden="true" />

const bootSeq = [
  { t: '> dotnet build portfolio.sln', d: 360 },
  { t: '  restoring packages … <span class="ok">ok</span>', d: 320 },
  { t: '  compiling React + TypeScript … <span class="ok">ok</span>', d: 320 },
  { t: '<span class="ac">→ build succeeded · launching joshua_hoban.dev</span>', d: 380 },
]

const Boot = ({ onDone }: { onDone: () => void }) => {
  const [lines, setLines] = useState('')
  const [pct, setPct] = useState(0)

  useEffect(() => {
    let i = 0
    let acc = ''
    const timers: number[] = []
    const step = () => {
      if (i >= bootSeq.length) {
        timers.push(window.setTimeout(onDone, 300))
        return
      }
      acc += (i ? '\n' : '') + bootSeq[i].t
      setLines(acc)
      setPct(Math.round(((i + 1) / bootSeq.length) * 100))
      const wait = bootSeq[i].d
      i++
      timers.push(window.setTimeout(step, wait))
    }
    step()
    return () => timers.forEach(clearTimeout)
  }, [onDone])

  return (
    <motion.div className="boot" exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
      <div className="boot-inner">
        <div className="boot-line" dangerouslySetInnerHTML={{ __html: lines }} />
        <div className="boot-bar">
          <i style={{ width: `${pct}%` }} />
        </div>
      </div>
      <button className="boot-skip" onClick={onDone}>
        skip &rarr;
      </button>
    </motion.div>
  )
}

function App() {
  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [booted, setBooted] = useState(
    () => reduce || sessionStorage.getItem('jh_booted') === '1'
  )

  const finishBoot = () => {
    sessionStorage.setItem('jh_booted', '1')
    setBooted(true)
  }

  return (
    <>
      <BgField />
      <AnimatePresence>{!booted && <Boot key="boot" onDone={finishBoot} />}</AnimatePresence>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
