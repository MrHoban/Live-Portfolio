import Reveal from './Reveal'
import { MailIcon, LinkedInIcon, InstagramIcon } from './icons'

const platforms = [
  {
    icon: <MailIcon />,
    label: 'Email',
    handle: 'joshuawhoban@gmail.com',
    href: 'mailto:joshuawhoban@gmail.com',
  },
  {
    icon: <LinkedInIcon />,
    label: 'LinkedIn',
    handle: 'in/joshuahoban',
    href: 'https://linkedin.com/in/joshuahoban',
  },
  {
    icon: <InstagramIcon />,
    label: 'Instagram',
    handle: '@mrhoban',
    href: 'https://instagram.com/mrhoban',
  },
]

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="wrap" style={{ maxWidth: 760 }}>
        <Reveal className="sec-head">
          <div style={{ textAlign: 'center', margin: '0 auto' }}>
            <span className="eyebrow">
              <span className="idx">04</span> / Contact
            </span>
            <h2 className="sec-title">Let's connect</h2>
            <p className="sec-sub" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
              Open to software engineering internships and collaboration. Reach out on any platform.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="platform-grid">
            {platforms.map((p) => (
              <a
                key={p.label}
                href={p.href}
                className="platform-card"
                target={p.label !== 'Email' ? '_blank' : undefined}
                rel="noreferrer"
              >
                <span className="platform-icon">{p.icon}</span>
                <span className="platform-info">
                  <span className="platform-label">{p.label}</span>
                  <span className="platform-handle">{p.handle}</span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
