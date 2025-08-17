import React, { useState, useEffect, useRef } from 'react';
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
  FaSun,
  FaChevronDown,
  FaChevronRight,
  FaBookOpen,
  FaGraduationCap,
  FaChurch,
  FaHistory,
  FaGlobe,
  FaFlask,
  FaQuoteLeft,
  FaUsers,
  FaFilePdf,
  FaVideo,
  FaHeadphones,
  FaBell,
  FaCog,
  FaHeart,
  FaBookmark,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt
} from 'react-icons/fa';

const ProfessionalHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme, isDark } = useTheme();
  const dropdownTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownEnter = (menu) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menu);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const menuItems = [
    {
      label: 'Accueil',
      path: '/',
      icon: FaHome
    },
    {
      label: 'Catalogue',
      icon: FaBook,
      dropdown: [
        {
          category: 'Collections',
          items: [
            { label: 'Catalogue Général', path: '/catalogue', icon: FaBookOpen },
            { label: 'Nouveautés', path: '/catalogue/nouveautes', icon: FaBell },
            { label: 'Populaires', path: '/catalogue/populaires', icon: FaHeart }
          ]
        },
        {
          category: 'Catégories',
          items: [
            { label: 'Théologie', path: '/catalogue/theologie', icon: FaChurch },
            { label: 'Histoire', path: '/catalogue/histoire', icon: FaHistory },
            { label: 'Philosophie', path: '/catalogue/philosophie', icon: FaQuoteLeft }
          ]
        }
      ]
    },
    {
      label: 'Ressources',
      icon: FaDatabase,
      dropdown: [
        {
          category: 'Bases de Données',
          items: [
            { label: 'CAIRN', path: '/ressources/cairn', icon: FaDatabase },
            { label: 'E-books', path: '/catalogue', icon: FaFilePdf },
            { label: 'Thèses', path: '/ressources/theses', icon: FaGraduationCap }
          ]
        },
        {
          category: 'Multimédia',
          items: [
            { label: 'Vidéos', path: '/ressources/videos', icon: FaVideo },
            { label: 'Audio', path: '/ressources/audio', icon: FaHeadphones }
          ]
        }
      ]
    },
    {
      label: 'Services',
      icon: FaUsers,
      dropdown: [
        {
          category: 'Services',
          items: [
            { label: 'Prêt', path: '/services/pret', icon: FaBookOpen },
            { label: 'Formations', path: '/formations', icon: FaGraduationCap },
            { label: 'Aide', path: '/aide', icon: FaInfoCircle }
          ]
        }
      ]
    },
    {
      label: 'Actualités',
      path: '/actualites',
      icon: FaNewspaper
    },
    {
      label: 'Infos',
      path: '/infos',
      icon: FaInfoCircle
    }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Compact Header */}
      <nav className={`compact-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container-fluid px-3">
          <div className="navbar-content">
            {/* Logo Compact */}
            <Link to="/" className="navbar-brand">
              <div className="brand-icon">
                <FaBook size={20} />
              </div>
              <div className="brand-text">
                <div className="brand-title">Bibliothèque ZTF</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="desktop-nav">
              <ul className="nav-menu">
                {menuItems.map((item, index) => (
                  <li 
                    key={index}
                    className={`nav-item ${item.dropdown ? 'has-dropdown' : ''} ${
                      activeDropdown === index ? 'active' : ''
                    }`}
                    onMouseEnter={() => item.dropdown && handleDropdownEnter(index)}
                    onMouseLeave={() => item.dropdown && handleDropdownLeave()}
                  >
                    {item.path ? (
                      <Link
                        to={item.path}
                        className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                      >
                        <item.icon size={12} />
                        <span>{item.label}</span>
                      </Link>
                    ) : (
                      <button className="nav-link dropdown-toggle">
                        <item.icon size={12} />
                        <span>{item.label}</span>
                        <FaChevronDown size={8} className="dropdown-arrow" />
                      </button>
                    )}

                    {/* Dropdown Menu */}
                    {item.dropdown && (
                      <div className={`dropdown-menu ${activeDropdown === index ? 'show' : ''}`}>
                        <div className="dropdown-content">
                          {item.dropdown.map((category, catIndex) => (
                            <div key={catIndex} className="dropdown-category">
                              <h6 className="category-title">{category.category}</h6>
                              <ul className="category-items">
                                {category.items.map((subItem, subIndex) => (
                                  <li key={subIndex}>
                                    <Link to={subItem.path} className="dropdown-item">
                                      <subItem.icon size={12} />
                                      <span>{subItem.label}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Actions */}
            <div className="quick-actions">
              <button 
                onClick={toggleTheme}
                className="action-btn"
                title={`Mode ${isDark ? 'clair' : 'sombre'}`}
              >
                {isDark ? <FaSun size={14} /> : <FaMoon size={14} />}
              </button>
              <Link to="/auth" className="action-btn" title="Se connecter">
                <FaUser size={14} />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="mobile-toggle" onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Modern Mobile Menu Overlay */}
      <div className={`modern-mobile-overlay ${isMenuOpen ? 'active' : ''}`}>
        <div className="overlay-content">
          {/* Header avec logo et fermeture */}
          <div className="overlay-header">
            <div className="overlay-logo">
              <FaBook size={24} className="logo-icon" />
              <span className="logo-text">Bibliothèque ZTF</span>
            </div>
            <button onClick={toggleMenu} className="overlay-close">
              <FaTimes size={24} />
            </button>
          </div>

          {/* Navigation principale */}
          <div className="overlay-nav">
            {menuItems.map((item, index) => (
              <div key={index} className="overlay-nav-group">
                {item.path ? (
                  <Link
                    to={item.path}
                    className={`nav-group-link ${location.pathname === item.path ? 'active' : ''}`}
                    onClick={toggleMenu}
                  >
                    <item.icon size={20} />
                    <span>{item.label}</span>
                    <FaChevronRight size={12} className="link-arrow" />
                  </Link>
                ) : (
                  <>
                    <div className="nav-group-header">
                      <item.icon size={20} />
                      <span className="nav-group-title">{item.label}</span>
                    </div>
                    
                    {item.dropdown && (
                      <div className="nav-group-items">
                        {item.dropdown.map((category, catIndex) => (
                          <div key={catIndex} className="nav-category">
                            <h6 className="category-header">{category.category}</h6>
                            <div className="category-links">
                              {category.items.map((subItem, subIndex) => (
                                <Link 
                                  key={subIndex} 
                                  to={subItem.path} 
                                  className="nav-link-item"
                                  onClick={toggleMenu}
                                >
                                  <subItem.icon size={16} />
                                  <span>{subItem.label}</span>
                                  <FaChevronRight size={12} className="link-arrow" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Actions rapides */}
          <div className="overlay-actions">
            <button 
              onClick={() => { toggleTheme(); toggleMenu(); }}
              className="action-button theme-toggle"
            >
              {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
              <span>Mode {isDark ? 'clair' : 'sombre'}</span>
            </button>
            
            <Link to="/auth" className="action-button auth-button" onClick={toggleMenu}>
              <FaUser size={18} />
              <span>Se Connecter</span>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Compact Navigation */
        .compact-navbar {
          background: #ffffff;
          border-bottom: 2px solid var(--border-primary);
          padding: 0.75rem 0;
          position: sticky;
          top: 0;
          z-index: 1030;
          transition: all 0.3s ease;
          width: 100%;
          box-shadow: 0 2px 10px rgba(29, 79, 139, 0.1);
        }

        .compact-navbar.scrolled {
          padding: 0.5rem 0;
          box-shadow: 0 4px 20px rgba(29, 79, 139, 0.15);
          background: #ffffff;
        }

        .navbar-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          gap: 1rem;
        }

        /* Logo Compact */
        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: inherit;
          flex-shrink: 0;
        }

        .brand-icon {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, var(--blumine), var(--ming));
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1;
          white-space: nowrap;
        }

        /* Desktop Navigation Compact */
        .desktop-nav {
          flex: 1;
          display: flex;
          justify-content: center;
          max-width: 500px;
        }

        .nav-menu {
          display: flex;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 0.25rem;
          flex-wrap: nowrap;
        }

        .nav-item {
          position: relative;
          flex-shrink: 0;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.5rem 0.75rem;
          color: var(--blumine);
          text-decoration: none;
          border-radius: 6px;
          font-weight: 500;
          font-size: 0.8rem;
          transition: all 0.3s ease;
          background: none;
          border: none;
          cursor: pointer;
          white-space: nowrap;
        }

        .nav-link:hover,
        .nav-link.active {
          color: var(--buttercup);
          background: rgba(241, 196, 14, 0.1);
        }

        .dropdown-arrow {
          transition: transform 0.3s ease;
          margin-left: 0.25rem;
        }

        .nav-item.active .dropdown-arrow {
          transform: rotate(180deg);
        }

        /* Dropdown Menu Compact */
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          min-width: 300px;
          background: #ffffff;
          border: 1px solid var(--border-primary);
          border-radius: 8px;
          box-shadow: 0 8px 25px rgba(29, 79, 139, 0.15);
          opacity: 0;
          visibility: hidden;
          transform: translateX(-50%) translateY(-10px);
          transition: all 0.3s ease;
          z-index: 1040;
          margin-top: 0.5rem;
        }

        .dropdown-menu.show {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        .dropdown-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1rem;
        }

        .dropdown-category {
          display: flex;
          flex-direction: column;
        }

        .category-title {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--buttercup);
          margin-bottom: 0.5rem;
          padding-bottom: 0.25rem;
          border-bottom: 1px solid var(--border-primary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .category-items {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem;
          color: var(--blumine);
          text-decoration: none;
          border-radius: 4px;
          font-size: 0.8rem;
          transition: all 0.3s ease;
        }

        .dropdown-item:hover {
          color: var(--buttercup);
          background: rgba(241, 196, 14, 0.1);
        }

        /* Quick Actions */
        .quick-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-shrink: 0;
        }

        .action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: var(--bg-input);
          border: 1px solid var(--border-primary);
          border-radius: 6px;
          color: var(--blumine);
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .action-btn:hover {
          color: var(--buttercup);
          border-color: var(--buttercup);
          background: rgba(241, 196, 14, 0.1);
        }

        /* Mobile Toggle */
        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--blumine);
          padding: 0.25rem;
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .mobile-toggle:hover {
          color: var(--buttercup);
          background: rgba(241, 196, 14, 0.1);
        }

        /* Modern Mobile Overlay */
        .modern-mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, 
            rgba(29, 79, 139, 0.95) 0%, 
            rgba(60, 107, 139, 0.98) 100%);
          z-index: 1050;
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          backdrop-filter: blur(10px);
        }

        .modern-mobile-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        .overlay-content {
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 2rem;
          overflow-y: auto;
        }

        .overlay-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
          padding-bottom: 1.5rem;
          border-bottom: 2px solid rgba(241, 196, 14, 0.3);
        }

        .overlay-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .logo-icon {
          color: var(--warning);
          padding: 0.5rem;
          background: rgba(241, 196, 14, 0.1);
          border-radius: 8px;
        }

        .logo-text {
          color: #ffffff;
          font-size: 1.25rem;
          font-weight: 600;
        }

        .overlay-close {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          padding: 0.75rem;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .overlay-close:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.05);
        }

        .overlay-nav {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .overlay-nav-group {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .overlay-nav-group:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .nav-group-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        .nav-group-title {
          font-size: 1.1rem;
          font-weight: 600;
        }

        .nav-group-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: #ffffff;
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .nav-group-link:hover,
        .nav-group-link.active {
          color: var(--warning);
          transform: translateX(0.5rem);
        }

        .nav-group-link .link-arrow {
          margin-left: auto;
          opacity: 0.6;
          transition: all 0.3s ease;
        }

        .nav-group-link:hover .link-arrow {
          opacity: 1;
          transform: translateX(0.25rem);
        }

        .nav-group-items {
          padding-left: 1rem;
          border-left: 2px solid rgba(241, 196, 14, 0.2);
        }

        .nav-category {
          margin-bottom: 1.5rem;
        }

        .category-header {
          color: var(--warning);
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .category-links {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .nav-link-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }

        .nav-link-item:hover {
          background: rgba(241, 196, 14, 0.1);
          border-color: rgba(241, 196, 14, 0.3);
          color: var(--warning);
          transform: translateX(0.25rem);
        }

        .nav-link-item .link-arrow {
          margin-left: auto;
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        .nav-link-item:hover .link-arrow {
          opacity: 1;
          transform: translateX(0.25rem);
        }

        .overlay-actions {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 2px solid rgba(241, 196, 14, 0.3);
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .action-button {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.5rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          color: #ffffff;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .action-button:hover {
          background: rgba(241, 196, 14, 0.2);
          border-color: rgba(241, 196, 14, 0.4);
          color: var(--warning);
          transform: translateY(-2px);
        }

        .auth-button {
          background: linear-gradient(135deg, var(--warning) 0%, #e67e22 100%);
          border-color: var(--warning);
          color: var(--dark-900);
          font-weight: 600;
        }

        .auth-button:hover {
          color: var(--dark-900);
          transform: translateY(-2px) scale(1.02);
        }



        .mobile-nav-link .dropdown-arrow {
          margin-left: auto;
          transition: transform 0.3s ease;
        }

        .mobile-nav-link .dropdown-arrow.open {
          transform: rotate(180deg);
        }

        .mobile-dropdown {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
          background: var(--bg-input);
          border-radius: 8px;
          margin-top: 0.5rem;
        }

        .mobile-dropdown.show {
          max-height: 500px;
        }

        .mobile-category {
          padding: 1rem;
          border-bottom: 1px solid var(--border-primary);
        }

        .mobile-category:last-child {
          border-bottom: none;
        }

        .mobile-category-title {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--warning);
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .mobile-dropdown-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem;
          color: var(--text-secondary);
          text-decoration: none;
          border-radius: 6px;
          font-size: 0.85rem;
          margin-bottom: 0.25rem;
          transition: all 0.3s ease;
        }

        .mobile-dropdown-item:hover {
          color: var(--text-primary);
          background: var(--bg-card);
        }

        .mobile-menu-footer {
          padding: 1.5rem;
          border-top: 1px solid var(--border-primary);
        }

        .mobile-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--overlay-themed);
          z-index: 1040;
        }

        /* Responsive */

        @media (max-width: 768px) {
          .dropdown-menu {
            min-width: 200px;
            max-width: calc(100vw - 40px);
            left: 10px;
            right: 10px;
            transform: none;
          }
        }

        @media (max-width: 1024px) {
          .nav-link {
            padding: 0.4rem 0.6rem;
            font-size: 0.75rem;
            gap: 0.2rem;
          }

          .dropdown-menu {
            min-width: 250px;
          }
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }

          .mobile-toggle {
            display: block;
          }

          .navbar-content {
            gap: 0.75rem;
          }

          .brand-title {
            font-size: 0.9rem;
          }

          .brand-icon {
            width: 28px;
            height: 28px;
          }
        }

        @media (max-width: 576px) {
          .mobile-menu {
            width: 100%;
          }

          .brand-title {
            font-size: 1.1rem;
          }

          .brand-subtitle {
            font-size: 0.75rem;
          }

          .brand-icon {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </>
  );
};

export default ProfessionalHeader;