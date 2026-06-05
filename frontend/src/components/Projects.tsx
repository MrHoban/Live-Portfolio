import { motion, type Variants } from 'framer-motion'
import Reveal from './Reveal'
import { GitHubIcon } from './icons'

interface Project {
  title: string
  description: string
  language: string
  langColor: string
  tags: string[]
  link: string
  linkLabel: string
  live?: boolean
}

const featured = {
  title: 'NOC Automation Lab',
  description:
    'A PowerShell automation toolkit that correlates SentinelOne quarantine state, NinjaOne RMM health signals, and Acronis backup status into a single source of truth — built to mirror and solve real-world NOC workflows in an MSP environment. Designed with reusable modules, structured logging, and clean error handling.',
  language: 'PowerShell',
  langColor: '#5391d6',
  tags: ['Automation', 'API Integration', 'Tooling'],
  link: 'https://github.com/MrHoban/NOC-Automation-Lab',
}

const projects: Project[] = [
  {
    title: 'Portfolio API',
    description:
      'The React Core Web API behind this site — a typed contact endpoint with validation, DI, and global exception handling. Feature-folder architecture, deployed and serving production traffic.',
    language: 'React',
    langColor: '#5c78f6',
    tags: [],
    link: 'https://joshuahoban.dev',
    linkLabel: '↗ joshuahoban.dev',
    live: true,
  },
  {
    title: 'Ticket Management System',
    description:
      'Full-stack ticketing with a customer submission portal and staff dashboard — admin auth, full ticket lifecycle, and live status updates.',
    language: 'Python',
    langColor: '#4b8bbe',
    tags: [],
    link: 'https://github.com/MrHoban/ticket-management-system',
    linkLabel: 'View source',
  },
  {
    title: 'NovaWave Solutions',
    description:
      'A modern web app for managing and visualizing data, built with a component-driven JavaScript stack and a focus on clean, responsive UI.',
    language: 'JavaScript',
    langColor: '#f0db4f',
    tags: [],
    link: 'https://github.com/MrHoban/NovaWave-Solutions',
    linkLabel: 'View source',
  },
  {
    title: 'Medical Insurance Analysis',
    description:
      'A data-analysis project exploring the cost factors behind medical insurance using Python, Jupyter, and statistical methods — the work behind my Data Analytics certificate.',
    language: 'Python',
    langColor: '#4b8bbe',
    tags: [],
    link: 'https://github.com/MrHoban/Python-Syntax-Medical-Insurance-Project',
    linkLabel: 'View source',
  },
]

const card: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <Reveal className="sec-head">
          <div>
            <span className="eyebrow">
              <span className="idx">02</span> / Projects
            </span>
            <h2 className="sec-title">Things I've built</h2>
            <p className="sec-sub">
              Automation toolkits, full-stack apps, and the API powering this very site.
            </p>
          </div>
          <a className="sec-link" href="https://github.com/MrHoban" target="_blank" rel="noreferrer">
            View all on GitHub &rarr;
          </a>
        </Reveal>

        <Reveal>
          <div className="proj-feat">
            <div className="pf-main">
              <div className="pf-badge">
                <span className="star">&#9733;</span> Featured Project
              </div>
              <h3>{featured.title}</h3>
              <p>{featured.description}</p>
            </div>
            <div className="pf-side">
              <div className="lang-row">
                <span className="lang-dot" style={{ background: featured.langColor }} />
                {featured.language}
              </div>
              <div className="tag-list">
                {featured.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <a className="gh-link" href={featured.link} target="_blank" rel="noreferrer">
                <GitHubIcon />
                View source
              </a>
            </div>
          </div>
        </Reveal>

        <div className="proj-grid">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="proj-card"
              variants={card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.2, 0.7, 0.2, 1] }}
              whileHover={{ y: -4 }}
            >
              <div className="pc-top">
                <div className="lang-row">
                  <span className="lang-dot" style={{ background: p.langColor }} />
                  {p.language}
                </div>
                {p.live && (
                  <span className="status-pill live">
                    <span className="dot" />
                    Live
                  </span>
                )}
              </div>
              <h4>{p.title}</h4>
              <p>{p.description}</p>
              <a className="gh-link" href={p.link} target="_blank" rel="noreferrer">
                {p.linkLabel === 'View source' ? <GitHubIcon /> : null}
                {p.linkLabel}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
