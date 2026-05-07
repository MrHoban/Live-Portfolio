import { motion } from 'framer-motion'
import AnimatedAvatar from './AnimatedAvatar'

const skills = ['PowerShell', 'Python', 'Active Directory', 'Azure', 'SQL Server', '.NET Core']

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16">
      <div className="max-w-6xl mx-auto w-full">

        {/* Split: Photo left, content right */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              <AnimatedAvatar />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[#111827] border border-blue-900/50 rounded-full px-4 py-1.5 flex items-center gap-2 whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-gray-300 text-xs">Open to SWE Internships</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-blue-400 text-xs uppercase tracking-[0.25em] mb-4">
              SWE Student · NOC Technician · Automation
            </p>
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              Building Systems<br />
              that{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-400">
                actually work.
              </span>
            </h1>
            <p className="text-gray-400 leading-relaxed mb-6">
              B.S. Software Engineering student at WGU. I work as a NOC Technician at an MSP,
              managing enterprise infrastructure and building automation tools to solve real NOC
              problems. Hands-on with SentinelOne, NinjaOne, Acronis, and Microsoft 365.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1.5 bg-[#111827] border border-blue-900/40 text-blue-300 rounded-full"
                >
                  • {skill}
                </span>
              ))}
            </div>
            <div className="flex gap-4 flex-wrap">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors no-underline text-sm"
              >
                View Resume
              </a>

              <a
                href="#projects"
                className="px-6 py-3 bg-[#111827] hover:bg-[#1f2937] border border-blue-900/50 text-gray-300 hover:text-white rounded-lg font-medium transition-colors no-underline text-sm"
              >
                See Projects
              </a>
            </div>
          </motion.div>
        </div>

        {/* Terminal + About block */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="bg-[#111827] rounded-xl overflow-hidden border border-blue-900/30"
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-blue-900/30 bg-[#0d1117]">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-gray-500 text-xs ml-2 font-mono">profile.ps1</span>
            </div>
            <div className="p-6 font-mono text-sm leading-loose">
              <p className="text-gray-500"># Software Engineer</p>
              <p className="text-gray-300 mt-2">
                <span className="text-blue-400">$engineer</span>{' '}
                <span className="text-gray-500">=</span>{' '}
                <span className="text-gray-300">@&#123;</span>
              </p>
              <div className="ml-4">
                <p><span className="text-sky-300">Name</span><span className="text-gray-500"> = </span><span className="text-green-300">"Joshua Hoban"</span></p>
                <p><span className="text-sky-300">Degree</span><span className="text-gray-500"> = </span><span className="text-green-300">"Software Engineering - B.S"</span></p>
                <p><span className="text-sky-300">Focus</span><span className="text-gray-500"> = </span><span className="text-green-300">"Software Dev / Automation"</span></p>
                <p><span className="text-sky-300">Status</span><span className="text-gray-500"> = </span><span className="text-green-300">"Open to SWE Internships"</span></p>
              </div>
              <p className="text-gray-300">&#125;</p>
              <p className="mt-3">
                <span className="text-blue-400">Write-Host</span>{' '}
                <span className="text-gray-300">$engineer</span>
              </p>
              <p className="mt-3 text-gray-500"># Output</p>
              <p className="text-blue-300">&gt; Ready to ship.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="bg-[#111827] rounded-xl border border-blue-900/30 p-6 flex flex-col justify-center"
          >
            <p className="text-blue-400 font-mono text-sm mb-4">// about_me.txt</p>
            <h3 className="text-white font-bold text-xl mb-4">Who I Am</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              I'm a Software Engineering student at WGU with hands-on experience in enterprise
              IT infrastructure, PowerShell automation, and MSP environments. I spend my days
              managing Windows and MacOS environments, and my evenings writing code to automate
              the parts of the job that shouldn't require a human.
            </p>
            <p className="text-gray-400 leading-relaxed">
              If I'm not at my computer, I'm battling waves at the beach and getting burnt by the sun.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
