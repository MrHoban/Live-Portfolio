import { motion, type Variants } from 'framer-motion'
import Reveal from './Reveal'

interface StackGroup {
  num: string
  title: string
  desc: string
  chips: { label: string; lead?: boolean }[]
}

const groups: StackGroup[] = [
  {
    num: '{ }',
    title: 'Backend',
    desc: 'APIs, services, and data — my primary focus.',
    chips: [
      { label: 'C#', lead: true },
      { label: 'ASP.NET Core', lead: true },
      { label: '.NET 8' },
      { label: 'EF Core' },
      { label: 'REST APIs' },
      { label: 'SQL Server' },
    ],
  },
  {
    num: '</>',
    title: 'Frontend',
    desc: 'Typed, component-driven interfaces.',
    chips: [
      { label: 'TypeScript', lead: true },
      { label: 'React', lead: true },
      { label: 'JavaScript' },
      { label: 'Tailwind' },
      { label: 'Vite' },
    ],
  },
  {
    num: '$_',
    title: 'Automation & Scripting',
    desc: 'Removing the manual work in MSP & NOC operations.',
    chips: [
      { label: 'PowerShell 7+', lead: true },
      { label: 'Python', lead: true },
      { label: 'Java' },
      { label: 'REST integrations' },
    ],
  },
  {
    num: '⌁',
    title: 'Cloud & Tooling',
    desc: 'Where it runs and how it gets there.',
    chips: [
      { label: 'Azure', lead: true },
      { label: 'Vercel' },
      { label: 'Railway' },
      { label: 'Git / GitHub' },
      { label: 'VS Code' },
    ],
  },
]

const card: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
}

export default function Stack() {
  return (
    <section className="section" id="stack">
      <div className="wrap">
        <Reveal className="sec-head">
          <div>
            <span className="eyebrow">
              <span className="idx">01</span> / Tech Stack
            </span>
            <h2 className="sec-title">The tools I build with</h2>
            <p className="sec-sub">
              A full-stack toolkit — from C#/.NET APIs and React frontends to PowerShell and Python
              automation.
            </p>
          </div>
        </Reveal>

        <div className="stack-grid">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              className="stack-card"
              variants={card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.2, 0.7, 0.2, 1] }}
              whileHover={{ y: -3 }}
            >
              <h3>
                <span className="cnum">{g.num}</span> {g.title}
              </h3>
              <p className="desc">{g.desc}</p>
              <div className="chips">
                {g.chips.map((c) => (
                  <span className={`chip ${c.lead ? 'lead' : ''}`} key={c.label}>
                    {c.label}
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
