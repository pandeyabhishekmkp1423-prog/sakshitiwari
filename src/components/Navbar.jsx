import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Instagram, Menu, X, ArrowUpRight } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/work', label: 'Work' },
  { to: '/media-kit', label: 'Media kit' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const linkClass = ({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`;

  return (
    <header className="site-header">
      <div className="site-nav">
        <Link to="/" className="wordmark" aria-label="Sakshi Tiwari home" onClick={() => setMobileMenuOpen(false)}>
          <img src="/Rose-Gold%20Ballet%20Star%20Emblem.png" className="brand-logo" alt="" />
          <span>Sakshi <em>Tiwari</em></span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => <NavLink key={item.to} to={item.to} className={linkClass}>{item.label}</NavLink>)}
        </nav>

        <a className="header-social" href="https://www.instagram.com/sakshieeyyy.xo/" target="_blank" rel="noreferrer">
          <Instagram aria-hidden="true" /> <span>Instagram</span> <ArrowUpRight aria-hidden="true" />
        </a>

        <button className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileMenuOpen}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileMenuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">
        {navItems.map((item) => <NavLink key={item.to} to={item.to} className={linkClass} onClick={() => setMobileMenuOpen(false)}>{item.label}</NavLink>)}
        <a className="mobile-social" href="https://www.instagram.com/sakshieeyyy.xo/" target="_blank" rel="noreferrer" onClick={() => setMobileMenuOpen(false)}><Instagram /> Follow on Instagram</a>
      </nav>}
    </header>
  );
}
