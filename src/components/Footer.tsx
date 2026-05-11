import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="nav-logo" style={{ color: 'white' }}>
              <div className="logo-icon">🧪</div>
              CBSE<span style={{ color: 'var(--primary)' }}>Xperienta</span>labs
            </Link>
            <p>
              A movement to transform how Indian children experience learning —
              from rote memorisation to real curiosity, practical intelligence
              and joyful discovery.
            </p>
            <div className="social-links" style={{ marginTop: '20px' }}>
              <a className="social-link" href="#" title="Instagram" aria-label="Instagram">📸</a>
              <a className="social-link" href="#" title="YouTube" aria-label="YouTube">▶️</a>
              <a className="social-link" href="#" title="Twitter" aria-label="Twitter">🐦</a>
              <a className="social-link" href="#" title="Facebook" aria-label="Facebook">👥</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><Link href="/whats-broken">What&apos;s Broken</Link></li>
              <li><Link href="/alternatives">Better Learning Systems</Link></li>
              <li><Link href="/activities">Home Activities</Link></li>
              <li><Link href="/stories">Stories</Link></li>
              <li><Link href="/manifesto">Our Manifesto</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>By Age Group</h4>
            <ul>
              <li><Link href="/activities#nursery">Nursery &amp; KG</Link></li>
              <li><Link href="/activities#class1">Class 1 &amp; 2</Link></li>
              <li><Link href="/activities#class3">Class 3 &amp; 4</Link></li>
              <li><Link href="/activities#class5">Class 5</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Learning Systems</h4>
            <ul>
              <li><Link href="/alternatives#montessori">Montessori</Link></li>
              <li><Link href="/alternatives#waldorf">Waldorf</Link></li>
              <li><Link href="/alternatives#finland">Finnish Model</Link></li>
              <li><Link href="/alternatives#forest">Forest Schools</Link></li>
              <li><Link href="/alternatives#pbl">Project-Based</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} CBSExperientalabs. Made with ❤️ for curious Indian children and the parents who believe in them.</p>
          <p style={{ color: 'rgba(255,255,255,.4)' }}>Rethinking learning. One child at a time.</p>
        </div>
      </div>
    </footer>
  )
}
