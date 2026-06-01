import { NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navKeys = ['hero', 'stack', 'projects', 'contact'];
const routeMap = { hero: '/', stack: '/stack', projects: '/projects', contact: '/contact' };

export default function Header() {
  const { lang, t, toggleLang } = useLanguage();
  const { dark, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <NavLink to="/" className="header-logo" onClick={closeMenu}>
          <img src="/logo deev.png" alt="Augustin PARIS" className="header-logo-img" />
        </NavLink>
        <nav className={`header-nav${menuOpen ? ' header-nav--open' : ''}`}>
          {navKeys.map(key => (
            <NavLink
              key={key}
              to={routeMap[key]}
              onClick={closeMenu}
              className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}
            >
              {t.nav[key]}
            </NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button className="lang-toggle" onClick={toggleLang}>
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
          <button className="menu-toggle" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
