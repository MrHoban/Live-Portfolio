import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const links = [
  { label: 'Resume', href: '/resume.pdf', blank: true },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#00060f]/90 backdrop-blur-md border-b border-blue-900/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <motion.a
          href="/"
          className="font-mono text-base md:text-lg tracking-tight no-underline"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-blue-400">&gt; </span>
          <span className="text-white">JoshuaHoban</span>
          <span className="text-blue-400">.sh</span>
        </motion.a>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8 list-none">
          <li>
            <Link
              to="/about"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm uppercase tracking-widest no-underline"
            >
              About
            </Link>
          </li>
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.blank ? '_blank' : undefined}
                rel={link.blank ? 'noreferrer' : undefined}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm uppercase tracking-widest no-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-blue-400"
          />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1 }}
            className="block w-6 h-0.5 bg-blue-400"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-blue-400"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-blue-900/30 bg-[#00060f]/95 backdrop-blur-md overflow-hidden"
          >
            <ul className="flex flex-col list-none px-4 py-4 gap-1">
              <li>
                <Link
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm uppercase tracking-widest no-underline block py-3 border-b border-blue-900/20"
                >
                  About
                </Link>
              </li>
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.blank ? '_blank' : undefined}
                    rel={link.blank ? 'noreferrer' : undefined}
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm uppercase tracking-widest no-underline block py-3 border-b border-blue-900/20"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
