import { useState } from 'react'

function Navbar({ navLinks, activeSection, resumeLink }) {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="navbar-shell">
      <div className="container navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-mark">AM</span>
          <div>
            <p className="brand-title">Abel Mbomnda</p>
            <p className="brand-subtitle">Portfolio</p>
          </div>
        </a>

        <nav className={`nav-links ${open ? 'nav-open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={activeSection === link.id ? 'active' : ''}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a href={resumeLink} className="button secondary" target="_blank" rel="noreferrer" download="Abel Mbomnda Resume.pdf">
            Resume
          </a>
<button type="button" className="menu-toggle" onClick={() => setOpen((prev) => !prev)}>
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
