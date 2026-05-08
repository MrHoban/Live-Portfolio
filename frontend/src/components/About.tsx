import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatedAvatar from './AnimatedAvatar'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-center gap-16"
        >
          <AnimatedAvatar />
          <div className="flex-1">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-4">About Me</p>
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
              SWE/Cloud Student | NOC Technician<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-400">
                Automationing Systems and Programming Apps
              </span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-lg">
              B.S. Cloud/Network student at WGU and Obtaining my Masters in DevOps, Software Engineering. I work as a NOC Technician at an MSP,
              managing enterprise infrastructure and building PowerShell automation tools to solve
              real-world problems.
            </p>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-gray-400 text-sm">Open to Software Engineering Roles</span>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 border border-blue-600 hover:border-blue-400 text-blue-400 hover:text-blue-300 rounded-lg font-medium transition-colors duration-200 no-underline"
            >
              Read My Story →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
