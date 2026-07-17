import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/cornerstone-logo.png';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="topbar">
      <a className="brand" href="#home" aria-label="Cornerstone home">
        <img src={logo} alt="Cornerstone Open Portal Network" />
      </a>

      <button
        className="menu-button"
        type="button"
        onClick={() => setMenuOpen((current) => !current)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={25} /> : <Menu size={25} />}
      </button>

      <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
        <a href="#studies" onClick={closeMenu}>
          Studies
        </a>
        <a href="#announcements" onClick={closeMenu}>
          Announcements
        </a>
        <a href="#media" onClick={closeMenu}>
          Media
        </a>
        <a className="nav-give" href="#give" onClick={closeMenu}>
          Give
        </a>
      </nav>
    </header>
  );
}