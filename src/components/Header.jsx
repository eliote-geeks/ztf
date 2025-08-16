import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { 
  FaBook, 
  FaSearch, 
  FaUser, 
  FaBars, 
  FaTimes, 
  FaHome,
  FaNewspaper,
  FaDatabase,
  FaInfoCircle,
  FaUserCircle,
  FaMoon,
  FaSun
} from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { path: '/', icon: FaHome, label: 'Accueil' },
    { path: '/catalogue', icon: FaSearch, label: 'Catalogue' },
    { path: '/actualites', icon: FaNewspaper, label: 'Actualités' },
    { path: '/ressources', icon: FaDatabase, label: 'Ressources' },
    { path: '/infos', icon: FaInfoCircle, label: 'Infos' },
    { path: '/profile', icon: FaUserCircle, label: 'Mon Profil' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-modern fixed-top ${scrolled ? 'scrolled' : ''}`}>
        <div className="container-fluid px-4">
          {/* Logo compact */}
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <FaBook className="text-warning me-2" size={20} />
            <div>
              <div className="brand-title">Bibliothèque ZTF</div>
              <div className="brand-subtitle">Centre de Ressources</div>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li className="nav-item" key={item.path}>
                    <Link
                      to={item.path}
                      className={`nav-link nav-link-compact ${
                        location.pathname === item.path ? 'active' : ''
                      }`}
                    >
                      <Icon size={14} className="me-2" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="btn btn-compact btn-outline-light me-2"
              title={`Basculer vers le mode ${isDark ? 'clair' : 'sombre'}`}
            >
              {isDark ? <FaSun size={14} /> : <FaMoon size={14} />}
            </button>

            {/* Bouton Connexion */}
            <Link to="/auth" className="btn btn-compact btn-warning">
              <FaUser size={14} className="me-2" />
              Connexion
            </Link>
          </div>

          {/* Menu Toggle Mobile */}
          <button
            className="navbar-toggler border-0"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </nav>

      {/* Menu Mobile */}
      <div className={`mobile-menu ${isMenuOpen ? 'show' : ''}`}>
        <div className="mobile-menu-content">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h6 className="text-white mb-0">Menu</h6>
            <button
              className="btn btn-compact btn-outline-warning"
              onClick={toggleMenu}
            >
              <FaTimes size={16} />
            </button>
          </div>

          <ul className="nav flex-column">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li className="nav-item mb-2" key={item.path}>
                  <Link
                    to={item.path}
                    className={`nav-link nav-link-compact ${
                      location.pathname === item.path ? 'active' : ''
                    }`}
                    onClick={toggleMenu}
                  >
                    <Icon size={14} className="me-3" />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <hr className="border-light opacity-25 my-4" />

          <div className="d-flex gap-2 mb-3">
            <button 
              onClick={toggleTheme}
              className="btn btn-compact btn-outline-light flex-1"
              title={`Mode ${isDark ? 'clair' : 'sombre'}`}
            >
              {isDark ? <FaSun size={14} className="me-2" /> : <FaMoon size={14} className="me-2" />}
              {isDark ? 'Clair' : 'Sombre'}
            </button>
          </div>

          <Link 
            to="/auth" 
            className="btn btn-compact btn-warning w-100"
            onClick={toggleMenu}
          >
            <FaUser size={14} className="me-2" />
            Connexion
          </Link>
        </div>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div 
          className="mobile-menu-backdrop"
          onClick={toggleMenu}
        />
      )}

      <style jsx>{`
        .navbar-modern {
          background: var(--bg-overlay);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-primary);
          padding: 0.75rem 0;
          transition: all 0.3s ease;
        }

        .navbar-modern.scrolled {
          background: var(--bg-modal);
          box-shadow: var(--shadow-md);
        }

        .brand-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.2;
        }

        .brand-subtitle {
          font-size: 0.75rem;
          color: var(--text-tertiary);
          line-height: 1;
        }

        .nav-link-compact {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-secondary) !important;
          padding: 0.5rem 0.75rem !important;
          border-radius: 6px;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
        }

        .nav-link-compact:hover,
        .nav-link-compact.active {
          color: var(--warning) !important;
          background: rgba(241, 196, 14, 0.1);
        }

        .btn-compact {
          font-size: 0.875rem;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: -280px;
          width: 280px;
          height: 100vh;
          z-index: 1040;
          transition: right 0.3s ease;
          padding: 20px;
        }

        .mobile-menu.show {
          right: 0;
        }

        .mobile-menu-content {
          background: var(--bg-overlay);
          backdrop-filter: blur(20px);
          border: 1px solid var(--border-primary);
          border-radius: 12px;
          padding: 1.5rem;
          height: 100%;
          overflow-y: auto;
        }

        .mobile-menu-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--overlay-themed);
          z-index: 1035;
        }

        .navbar-toggler {
          color: var(--text-secondary);
          padding: 0.25rem;
        }

        @media (max-width: 576px) {
          .mobile-menu {
            width: 100%;
            padding: 15px;
          }
          
          .brand-title {
            font-size: 1rem;
          }
          
          .brand-subtitle {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </>
  );
};

export default Header;