import { motion, type Variants } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatedAvatar from '../components/AnimatedAvatar'

const skills = [
  'C#', '.NET Core', 'ASP.NET', 'React', 'TypeScript',
  'PowerShell', 'Python', 'JavaScript', 'SQL Server',
  'Azure', 'Active Directory', 'Git', 'SentinelOne', 'NinjaOne',
]

const stats = [
  { value: '12+', label: 'Projects / Repos' },
  { value: '2/4', label: 'Degree Progress' },
  { value: '6+', label: 'Years in IT' },
  { value: '4',   label: 'Certs In Progress' },
]

const chipContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
}

const chip: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show:   { opacity: 1, scale: 1 },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-32 px-6">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/"
            className="text-sm text-gray-400 hover:text-blue-400 transition-colors no-underline inline-flex items-center gap-2 mb-12"
          >
            ← Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col md:flex-row items-center gap-16 mb-24"
        >
          <AnimatedAvatar />
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-3">About Me</p>
            <h1 className="text-5xl font-bold text-white mb-4 leading-tight">Joshua Hoban</h1>
            <p className="text-blue-300 text-lg mb-4">
              Software Engineering Student · NOC Technician
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-gray-400 text-sm">Open to Software Engineering Roles</span>
            </div>
          </div>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 mb-24"
        >
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Who I Am</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              I'm a Software Engineering student at WGU with hands-on experience in enterprise
              IT infrastructure, PowerShell automation, and MSP environments. I spend my days managing
              Windows and RMM environments and my evenings writing code to automate the parts of the
              job that shouldn't require a human.
            </p>
            <p className="text-gray-400 leading-relaxed">
              If I'm not at my computer, I'm battling waves at the beach and getting burnt by the sun.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">How I Got Here</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              I got into IT at 10 years old building my own PC with my father. Started programming at
              13 with Roblox LUA, then moved to Python, then C# and JavaScript in high school.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I never planned on college, but as my career grew I found myself loving code more and
              more which led me to pursue a degree in Software Engineering.
            </p>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-24"
        >
          <h2 className="text-2xl font-bold text-white mb-8">Tech Stack</h2>
          <motion.div
            variants={chipContainer}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-3"
          >
            {skills.map((skill) => (
              <motion.span
                key={skill}
                variants={chip}
                className="px-4 py-2 bg-[#111827] border border-blue-900/50 text-blue-300 rounded-lg text-sm"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#111827] border border-blue-900/30 rounded-xl p-6 text-center"
            >
              <p className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</p>
              <p className="text-gray-400 text-xs uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </main>
  )
}
