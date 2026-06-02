import { Link } from 'react-router-dom'
import profileImg from '../assets/profile.jpg'
import Reveal from '../components/Reveal'
import Footer from '../components/Footer'

const timeline = [
  {
    year: 'Age 10',
    title: 'First PC build',
    body: 'Built my first computer with my dad — the spark for everything that followed.',
  },
  {
    year: 'Age 13',
    title: 'First lines of code',
    body: 'Started in Roblox Lua, then taught myself Python — hooked on making things work.',
  },
  {
    year: 'High school',
    title: 'C# & JavaScript',
    body: 'Moved into C# and JavaScript, building small apps and leaning into real programming.',
  },
  {
    year: 'Now',
    title: 'NOC Technician & B.S. Software Engineering',
    body: 'Working in an MSP/NOC environment while earning my degree at WGU on the C# track — building toward a software engineering & DevOps career.',
  },
]

const chips = [
  { label: 'C#', lead: true },
  { label: 'ASP.NET Core', lead: true },
  { label: '.NET 8' },
  { label: 'EF Core' },
  { label: 'TypeScript', lead: true },
  { label: 'React', lead: true },
  { label: 'JavaScript' },
  { label: 'Tailwind' },
  { label: 'PowerShell', lead: true },
  { label: 'Python' },
  { label: 'Java' },
  { label: 'SQL Server' },
  { label: 'Azure' },
  { label: 'Git / GitHub' },
]

export default function AboutPage() {
  return (
    <>
      <main className="wrap">
        <Reveal>
          <Link
            to="/"
            className="sec-link"
            style={{ display: 'inline-flex', marginTop: 106 }}
          >
            &larr; Back to home
          </Link>
        </Reveal>

        <div className="about-hero" style={{ paddingTop: 24 }}>
          <Reveal className="photo-frame">
            <img src={profileImg} alt="Joshua Hoban" />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">
              <span className="idx">//</span> About me
            </span>
            <h1>Joshua Hoban</h1>
            <p className="about-role">NOC &middot; Automation &rarr; Aspiring Software Engineer / DevOps</p>
            <p
              style={{
                color: 'var(--dim)',
                fontSize: '15.5px',
                lineHeight: 1.7,
                marginTop: 18,
                maxWidth: '52ch',
              }}
            >
              I build the systems and automations that keep things running — and I'm formalizing a
              decade of self-taught engineering into a B.S. Software Engineering degree at WGU.
            </p>
            <div className="hero-cta" style={{ marginTop: 24 }}>
              <Link className="btn btn-primary" to="/#contact">
                Get in touch
              </Link>
              <a
                className="btn btn-ghost"
                href="https://github.com/MrHoban"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal className="prose-grid">
          <div className="prose">
            <h2>Who I am</h2>
            <p>
              I'm a Software Engineering student at WGU (C# track) with hands-on experience across
              enterprise IT infrastructure, PowerShell automation, and MSP environments. By day I
              work as a NOC technician — keeping Windows and macOS fleets healthy and responding to
              real incidents.
            </p>
            <p>
              By night, I write code to automate the parts of the job that shouldn't need a human,
              and I'm steadily shifting from operations into building software full-time: APIs,
              full-stack apps, and the tooling that ties systems together.
            </p>
            <p>
              When I'm not at a keyboard, I'm battling waves at the beach (and getting burnt by the
              sun), or getting destroyed in League of Legends.
            </p>
          </div>
          <div className="prose">
            <h2>How I got here</h2>
            <p>
              I got into IT at 10, building my first PC with my father. At 13 I wrote my first code
              in Roblox Lua, then moved to Python, and picked up C# and JavaScript in high school.
            </p>
            <p>
              College was never the plan — my family didn't see the value in it. But the deeper I
              got into IT, the more I loved it, and the more I wanted to build real software. That
              passion is what led me to pursue a Software Engineering degree, with a master's
              planned right after.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div style={{ margin: '70px 0' }}>
            <span className="eyebrow" style={{ marginBottom: 30, display: 'inline-flex' }}>
              <span className="idx">//</span> The path
            </span>
            <div className="timeline" style={{ marginTop: 26 }}>
              {timeline.map((t) => (
                <div className="tl-item" key={t.year}>
                  <div className="tl-yr">{t.year}</div>
                  <h3>{t.title}</h3>
                  <p>{t.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div style={{ margin: '70px 0 110px' }}>
            <span className="eyebrow" style={{ marginBottom: 24, display: 'inline-flex' }}>
              <span className="idx">//</span> Tech stack
            </span>
            <div className="chips" style={{ marginTop: 24 }}>
              {chips.map((c) => (
                <span className={`chip ${c.lead ? 'lead' : ''}`} key={c.label}>
                  {c.label}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </main>
      <Footer />
    </>
  )
}
