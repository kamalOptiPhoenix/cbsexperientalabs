'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/whats-broken', label: "What's Broken" },
  { href: '/alternatives', label: 'Better Ways' },
  { href: '/activities', label: 'Home Activities' },
  { href: '/stories', label: 'Stories' },
  { href: '/manifesto', label: 'Manifesto' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="container">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            CBSEXperientaLabs
          </Link>

          <ul className="nav-links">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={pathname === href ? 'active' : ''}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/activities" className="btn btn-primary btn-sm nav-cta">
            Start at Home →
          </Link>

          <button
            className="hamburger"
            id="hamburger"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span
              style={
                menuOpen
                  ? { transform: 'rotate(45deg) translate(5px, 5px)' }
                  : {}
              }
            />
            <span style={menuOpen ? { opacity: 0 } : {}} />
            <span
              style={
                menuOpen
                  ? { transform: 'rotate(-45deg) translate(5px, -5px)' }
                  : {}
              }
            />
          </button>
        </div>

        {/* Mobile menu */}
        <ul className={`nav-mobile${menuOpen ? ' open' : ''}`} id="nav-mobile">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={pathname === href ? 'active' : ''}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/activities"
              className="btn btn-primary btn-sm"
              style={{ display: 'inline-flex', marginTop: '8px' }}
            >
              Start at Home →
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
