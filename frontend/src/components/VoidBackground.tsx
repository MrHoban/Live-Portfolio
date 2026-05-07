import { motion } from 'framer-motion'

const orbs = [
  { x: 15, y: 20, size: 500, color: '6,182,212',   opacity: 0.05, dx: [0, 60, -30, 0], dy: [0, -40, 50, 0], duration: 25 },
  { x: 70, y: 60, size: 420, color: '139,92,246',  opacity: 0.04, dx: [0, -50, 40, 0], dy: [0, 50, -30, 0], duration: 30 },
  { x: 40, y: 80, size: 350, color: '34,211,238',  opacity: 0.03, dx: [0, 40, -60, 0], dy: [0, -50, 20, 0], duration: 20 },
  { x: 85, y: 10, size: 300, color: '96,165,250',  opacity: 0.03, dx: [0, -30, 50, 0], dy: [0, 60, -40, 0], duration: 28 },
  { x: 50, y: 45, size: 280, color: '255,255,255', opacity: 0.015, dx: [0, 20, -40, 0], dy: [0, -20, 30, 0], duration: 35 },
]

const stars = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 14 + 10,
  delay: Math.random() * 12,
  color: i % 3 === 0 ? '#22d3ee' : i % 3 === 1 ? '#a78bfa' : '#ffffff',
}))

export default function VoidBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" style={{ background: '#00060f' }}>

      {/* Horizontal aurora corona — wide outer glow */}
      <motion.div
        className="absolute"
        style={{
          width: '300vw',
          height: '340px',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.12) 0%, rgba(34,211,238,0.09) 18%, rgba(96,165,250,0.06) 40%, transparent 65%)',
          filter: 'blur(40px)',
        }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Horizontal aurora corona — tight inner streak */}
      <motion.div
        className="absolute"
        style={{
          width: '300vw',
          height: '180px',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.22) 0%, rgba(34,211,238,0.16) 12%, rgba(96,165,250,0.09) 35%, transparent 55%)',
          filter: 'blur(18px)',
        }}
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Six Eyes void circle */}
      <div
        className="absolute"
        style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: 580, height: 580, opacity: 0.32 }}
      >
        {/* Outer halo */}
        <motion.div
          className="absolute rounded-full"
          style={{
            inset: -35,
            background: 'conic-gradient(from 0deg, transparent 0%, rgba(34,211,238,0.35) 20%, rgba(255,255,255,0.45) 35%, rgba(96,165,250,0.35) 55%, rgba(14,165,233,0.25) 70%, rgba(255,255,255,0.35) 85%, transparent 100%)',
            filter: 'blur(28px)',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        />
        {/* Main iridescent ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'conic-gradient(from 0deg, rgba(180,220,255,0.15) 0%, rgba(255,255,255,1) 12%, rgba(34,211,238,0.95) 26%, rgba(96,165,250,0.85) 42%, rgba(167,139,250,0.7) 54%, rgba(255,255,255,0.85) 66%, rgba(14,165,233,0.9) 80%, rgba(255,255,255,0.95) 90%, rgba(180,220,255,0.15) 100%)',
            filter: 'blur(5px)',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
        {/* Counter-rotating shimmer */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'conic-gradient(from 90deg, transparent 0%, rgba(255,255,255,0.5) 18%, transparent 36%, rgba(34,211,238,0.4) 58%, transparent 76%)',
            filter: 'blur(3px)',
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
        />
        {/* Void center */}
        <div
          className="absolute rounded-full"
          style={{ background: 'radial-gradient(circle, #001a35 40%, #000d1f 70%, #00060f 100%)', inset: 90 }}
        />
      </div>

      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            background: `radial-gradient(circle, rgba(${orb.color},${orb.opacity}) 0%, transparent 70%)`,
            filter: 'blur(60px)',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{ x: orb.dx, y: orb.dy }}
          transition={{ duration: orb.duration, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute w-px h-px rounded-full"
          style={{ left: `${star.x}%`, top: `${star.y}%`, backgroundColor: star.color }}
          animate={{ opacity: [0, 0.7, 0], scale: [0, 1.5, 0], y: [0, -20, 0] }}
          transition={{ duration: star.duration, delay: star.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}
