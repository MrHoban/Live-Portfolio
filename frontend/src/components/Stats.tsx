import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '12+', label: 'Projects / Repos Completed' },
  { value: '2/4', label: 'Degree Program' },
  { value: '6+',  label: 'Years of Experience in IT' },
  { value: '4',   label: 'Certifications in Progress' },
]

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-16 px-6 border-y border-blue-900/20" ref={ref}>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center"
          >
            <p className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.value}</p>
            <p className="text-gray-500 text-xs uppercase tracking-wide md:tracking-widest">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
