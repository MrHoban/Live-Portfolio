import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const links = [
  { label: 'Stack', href: '/#stack' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Education', href: '/#education' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="wrap nav-in">
        <Link to="/" className="brand">
          <span className="p">&gt;&nbsp;</span>
          <span className="n">joshua_hoban</span>
          <span className="ext">.dev</span>
        </Link>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <Link to="/about" onClick={() => setOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <a href="/#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </li>
          <li className="nav-cta">
            <a
              className="btn btn-ghost"
              href="/Joshua_Hoban_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>

        <button className="hamb" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
