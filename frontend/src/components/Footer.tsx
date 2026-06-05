import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-in">
        <Link to="/" className="brand">
          <span className="p">&gt;&nbsp;</span>
          <span className="n">joshua_hoban</span>
          <span className="ext">.dev</span>
        </Link>
        <div className="foot-links">
          <a href="https://github.com/MrHoban" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="/Joshua_Hoban_Resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
          <a href="/#contact">Contact</a>
        </div>
        <div className="foot-meta">© 2026 Joshua Hoban · Built with React</div>
      </div>
    </footer>
  )
}
