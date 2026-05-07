import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const particles = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 0.3,
  duration: Math.random() * 14 + 8,
  delay: Math.random() * 8,
  color: i % 4 === 0 ? '255,255,255' : i % 4 === 1 ? '34,211,238' : i % 4 === 2 ? '167,139,250' : '96,165,250',
}))

export default function DomainExpansion({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1800),
      setTimeout(() => setPhase(3), 3200),
      setTimeout(() => onComplete(), 4400),
    ]
    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
      style={{ background: 'radial-gradient(ellipse at 50% 40%, #00060f 0%, #000508 50%, #000000 100%)' }}
    >
      {/* Cosmic nebula glow orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, rgba(34,211,238,0.04) 40%, transparent 70%)', filter: 'blur(80px)', top: '5%', left: '10%' }}
        animate={{ x: [0, 50, -30, 0], y: [0, -40, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, rgba(167,139,250,0.03) 40%, transparent 70%)', filter: 'blur(80px)', bottom: '10%', right: '10%' }}
        animate={{ x: [0, -60, 40, 0], y: [0, 50, -25, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)', filter: 'blur(60px)', top: '50%', left: '55%' }}
        animate={{ x: [0, 30, -50, 0], y: [0, -30, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Star/particle field */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: `rgba(${p.color}, 0.9)`,
            boxShadow: `0 0 ${p.size * 4}px rgba(${p.color}, 0.5)`,
          }}
          animate={{ y: [0, -50, 0], opacity: [0, 1, 0], scale: [0.3, 1, 0.3] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Concentric rings */}
      {[1, 2, 3, 4].map((ring) => (
        <motion.div
          key={ring}
          className="absolute rounded-full"
          style={{
            width: ring * 180,
            height: ring * 180,
            border: `1px solid rgba(${ring % 2 === 0 ? '34,211,238' : '255,255,255'},${0.06 - ring * 0.01})`,
          }}
          animate={{ rotate: ring % 2 === 0 ? 360 : -360, scale: [1, 1.04, 1] }}
          transition={{ duration: ring * 18, repeat: Infinity, ease: 'linear' }}
        />
      ))}

      {/* Text */}
      <div className="relative z-10 text-center select-none">
        <AnimatePresence>
          {phase >= 1 && (
            <motion.p
              key="label"
              initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9 }}
              className="text-cyan-400 text-sm uppercase tracking-[0.5em] mb-5 font-light"
            >
              Domain Expansion
            </motion.p>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {phase >= 2 && (
            <motion.h1
              key="title"
              initial={{ opacity: 0, scale: 0.85, filter: 'blur(24px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="text-6xl md:text-8xl font-bold text-white leading-tight"
              style={{
                textShadow: '0 0 40px rgba(34,211,238,0.8), 0 0 80px rgba(34,211,238,0.3), 0 0 120px rgba(96,165,250,0.2)',
              }}
            >
              Perfect Portfolio
            </motion.h1>
          )}
        </AnimatePresence>
      </div>

      {/* Void burst */}
      <AnimatePresence>
        {phase >= 3 && (
          <motion.div
            key="burst"
            className="absolute rounded-full"
            initial={{ width: 0, height: 0, opacity: 0.8 }}
            animate={{ width: '250vmax', height: '250vmax', opacity: 0 }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
            style={{
              background: 'radial-gradient(circle, rgba(34,211,238,0.08) 0%, rgba(96,165,250,0.04) 40%, transparent 65%)',
              border: '1px solid rgba(34,211,238,0.3)',
              boxShadow: '0 0 60px rgba(34,211,238,0.4), inset 0 0 60px rgba(34,211,238,0.05)',
            }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  )
}
