import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Link to="/" className="footer-name">Sakshi Tiwari<span>© {new Date().getFullYear()}</span></Link>
        <nav aria-label="Footer navigation">
          <Link to="/work">Selected work</Link>
          <Link to="/media-kit">Media kit</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <a className="footer-instagram" href="https://www.instagram.com/sakshieeyyy.xo/" target="_blank" rel="noreferrer"><Instagram /> @sakshieeyyy.xo <ArrowUpRight /></a>
      </div>
    </footer>
  );
}
