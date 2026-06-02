import Reveal from './Reveal'
import { CheckIcon } from './icons'

const certs = [
  { name: 'Certified Automation Specialist', issuer: 'NinjaOne' },
  { name: 'Azure Fundamentals (AZ-900)', issuer: 'Microsoft Certified' },
  { name: 'Data Analytics with Python', issuer: 'Python · Professional Certificate' },
]

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="wrap">
        <Reveal className="sec-head">
          <div>
            <span className="eyebrow">
              <span className="idx">03</span> / Education
            </span>
            <h2 className="sec-title">Learning, formally &amp; relentlessly</h2>
            <p className="sec-sub">
              A competency-based degree paired with industry certifications earned along the way.
            </p>
          </div>
        </Reveal>

        <div className="edu-grid">
          <Reveal className="edu-card">
            <div className="edu-item">
              <div className="edu-mark">BS</div>
              <div>
                <div className="et">
                  B.S. Software Engineering
                  <span className="status-pill live">
                    <span className="dot" />
                    Enrolled
                  </span>
                </div>
                <div className="em">Western Governors University · C# Track</div>
                <div className="ed">
                  Competency-based software engineering program centered on C#/.NET, OOP and SOLID
                  principles, data structures, and full-stack development — aligned with how I
                  already build.
                </div>
              </div>
            </div>
            <div className="edu-item">
              <div className="edu-mark">MS</div>
              <div>
                <div className="et">
                  M.S. Software Engineering <span className="status-pill">Planned</span>
                </div>
                <div className="em">Next step after the B.S.</div>
                <div className="ed">
                  Continuing into a master's to deepen my software engineering and DevOps foundation.
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="cert-card" delay={0.1}>
            <h3>Certifications</h3>
            {certs.map((c) => (
              <div className="cert" key={c.name}>
                <span className="ck">
                  <CheckIcon />
                </span>
                <div>
                  <div className="cn">{c.name}</div>
                  <div className="ci">{c.issuer}</div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
