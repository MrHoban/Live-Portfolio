import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Project {
  title: string
  description: string
  tags: string[]
  language?: string
  featured?: boolean
  github?: string
}

const projects: Project[] = [
  {
    title: 'NOC Automation Lab',
    description:
      'A PowerShell-based automation toolkit correlating SentinelOne quarantine state, NinjaOne RMM health signals, and Acronis backup status — built to simulate real-world NOC workflows in an MSP environment.',
    tags: ['Automation', 'PowerShell CI', 'Integration'],
    language: 'PowerShell',
    featured: true,
    github: 'https://github.com/MrHoban/NOC-Automation-Lab',
  },
  {
    title: 'Ticket Management System',
    description:
      'A professional ticket management system with a customer submission portal and staff dashboard — featuring admin authentication, ticket lifecycle management, and real-time updates.',
    tags: ['Full Stack', 'Auth', 'Real-time'],
    language: 'Python',
    github: 'https://github.com/MrHoban/ticket-management-system',
  },
  {
    title: 'NovaWave Solutions',
    description:
      'A modern web application for managing and visualizing data using cutting-edge JavaScript frameworks and libraries.',
    tags: ['Web App', 'Data Visualization'],
    language: 'JavaScript',
    github: 'https://github.com/MrHoban/NovaWave-Solutions',
  },
  {
    title: 'Python-Syntax-Medical-Insurance-Project',
    description:
      'Data analysis project exploring medical insurance cost factors using Python syntax fundamentals, Jupyter Notebook, and statistical methods.',
    tags: ['Python', 'Jupyter Notebook', 'Data Analysis'],
    language: 'Python',
    github: 'https://github.com/MrHoban/Python-Syntax-Medical-Insurance-Project',
  },
  {
    title: 'Coming Soon',
    description: 'Something new is in progress. Check back soon.',
    tags: ['In Progress'],
  },
]

const featured = projects.find((p) => p.featured)
const others = projects.filter((p) => !p.featured)

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-3">Projects</p>
            <h2 className="text-2xl md:text-4xl font-bold text-white">Featured Projects</h2>
          </div>
          <a
            href="https://github.com/MrHoban"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray-400 hover:text-blue-400 transition-colors no-underline"
          >
            View all on GitHub →
          </a>
        </motion.div>

        {/* Featured card */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="bg-[#111827] border border-blue-900/30 rounded-xl p-5 md:p-8 mb-16"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">
                {featured.language}
              </span>
              {featured.github && (
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors no-underline"
                >
                  ↗ GitHub
                </a>
              )}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{featured.title}</h3>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-none md:max-w-2xl">{featured.description}</p>
            <div className="flex flex-wrap gap-3">
              {featured.tags.map((tag) => (
                <span key={tag} className="text-xs text-blue-300 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Other Projects */}
        <h3 className="text-xl font-bold text-white mb-8">Other Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="bg-[#111827] border border-blue-900/30 rounded-xl p-6 flex flex-col gap-3"
            >
              <div className="flex justify-between items-start">
                {project.language && (
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">
                    {project.language}
                  </span>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-gray-400 hover:text-blue-400 transition-colors no-underline"
                  >
                    ↗ GitHub
                  </a>
                )}
              </div>
              <h3 className="text-white font-semibold text-base md:text-lg">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs text-blue-300 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
