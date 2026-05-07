import { motion } from 'framer-motion'
import profileImg from '../assets/profile.jpg'

export default function AnimatedAvatar() {
  return (
    <div className="relative w-64 h-64 shrink-0">
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            'conic-gradient(from 0deg, #3b82f6, #0ea5e9, #1d4ed8, transparent, #3b82f6)',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, ease: 'linear', repeat: Infinity }}
      />
      <div className="absolute inset-[3px] rounded-full overflow-hidden">
        <img
          src={profileImg}
          alt="Joshua Hoban"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}
