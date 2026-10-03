import Reveal from './Reveal'
import { CheckIcon } from './icons'

const certs = [
  { name: 'Certified Automation Specialist', issuer: 'NinjaOne' },
  { name: 'Azure Fundamentals (AZ-900)', issuer: 'Microsoft Certified' },
  { name: 'ConnectWise PSA Help Desk', issuer: 'ConnectWise Certification' },
  { name: 'Python Data Analytics & Data Structures', issuer: 'Python · Professional Certificate' },
  { name: 'CompTIA Security+', issuer: 'In progress · target Dec 2026' },
  { name: 'CompTIA Network+', issuer: 'In progress · target Dec 2026' },
  { name: 'CompTIA A+', issuer: 'In progress · target Dec 2026' },
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
                  B.S. Cybersecurity &amp; Information Assurance
                  <span className="status-pill live">
                    <span className="dot" />
                    Enrolled
                  </span>
                </div>
                <div className="em">Western Governors University · Expected late 2028</div>
                <div className="ed">
                  Competency-based program covering network and application security, identity and
                  access management, risk and compliance, and incident response — paired with the
                  development background I already build with.
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
