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
  FaBookOpen,
  FaGraduationCap,
  FaChurch,
  FaHistory,
  FaQuoteLeft,
  FaUsers,
  FaFilePdf,
  FaVideo,
  FaHeadphones,
  FaBell,
  FaHeart,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
  FaGlobe,
  FaFlask,
  FaFileAlt,
  FaDesktop,
  FaCoffee,
  FaWifi,
  FaParking
} from 'react-icons/fa';

const LibraryHeader = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme, isDark } = useTheme();
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.nav-item')) {
        setActiveDropdown(null);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleDropdownEnter = (dropdown) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  const handleMenuClick = (menuId) => {
    setActiveDropdown(activeDropdown === menuId ? null : menuId);
  };

  const menuItems = [
    {
      id: 'accueil',
      label: 'Accueil',
      path: '/',
      icon: FaHome
    },
    {
      id: 'catalogue',
      label: 'Catalogue',
      icon: FaBook,
      megamenu: {
        sections: [
          {
            title: 'Recherche dans le Catalogue',
            items: [
              { label: 'Catalogue Général', path: '/catalogue', icon: FaBookOpen, description: 'Recherche dans toutes nos collections' },
              { label: 'Recherche Avancée', path: '/catalogue/avanced', icon: FaSearch, description: 'Filtres et critères spécialisés' },
              { label: 'Nouveautés', path: '/catalogue/nouveautes', icon: FaBell, description: 'Dernières acquisitions' },
              { label: 'Sélections Populaires', path: '/catalogue/populaires', icon: FaHeart, description: 'Les plus consultés' }
            ]
          },
          {
            title: 'Collections Spécialisées',
            items: [
              { label: 'Théologie & Spiritualité', path: '/catalogue/theologie', icon: FaChurch, description: 'Œuvres théologiques et spirituelles' },
              { label: 'Histoire du Cameroun', path: '/catalogue/histoire', icon: FaHistory, description: 'Patrimoine historique national' },
              { label: 'Littérature Africaine', path: '/catalogue/litterature', icon: FaQuoteLeft, description: 'Auteurs et œuvres africains' },
              { label: 'Philosophie', path: '/catalogue/philosophie', icon: FaQuoteLeft, description: 'Pensée philosophique' }
            ]
          },
          {
            title: 'Collections ZTF',
            items: [
              { label: 'Œuvres de Z.T. Fomum', path: '/catalogue/ztf', icon: FaUser, description: 'Collection complète des écrits' },
              { label: 'Manuscrits & Archives', path: '/catalogue/manuscrits', icon: FaFileAlt, description: 'Documents historiques rares' },
              { label: 'Thèses & Mémoires', path: '/catalogue/theses', icon: FaGraduationCap, description: 'Travaux académiques' }
            ]
          }
        ]
      }
    },
    {
      id: 'ressources',
      label: 'Ressources',
      icon: FaDatabase,
      megamenu: {
        sections: [
          {
            title: 'Bases de Données',
            items: [
              { label: 'CAIRN', path: '/ressources/cairn', icon: FaDatabase, description: 'Publications francophones SHS' },
              { label: 'OpenEdition', path: '/ressources/openedition', icon: FaGlobe, description: 'Plateforme de ressources SHS' },
              { label: 'Persée', path: '/ressources/persee', icon: FaHistory, description: 'Revues scientifiques françaises' },
              { label: 'AJOL', path: '/ressources/ajol', icon: FaGlobe, description: 'Revues académiques africaines' }
            ]
          },
          {
            title: 'Collections Numériques',
            items: [
              { label: 'E-books', path: '/ressources/ebooks', icon: FaFilePdf, description: '3,200+ livres numériques' },
              { label: 'Revues Numériques', path: '/ressources/revues', icon: FaNewspaper, description: '580+ périodiques en ligne' },
              { label: 'Archives Numériques', path: '/ressources/archives', icon: FaFileAlt, description: 'Documents patrimoniaux' }
            ]
          },
          {
            title: 'Multimédia',
            items: [
              { label: 'Conférences ZTF', path: '/ressources/conferences', icon: FaVideo, description: 'Enregistrements vidéo' },
              { label: 'Musique Traditionnelle', path: '/ressources/musique', icon: FaHeadphones, description: 'Patrimoine musical' },
              { label: 'Documentaires', path: '/ressources/documentaires', icon: FaVideo, description: 'Films éducatifs' }
            ]
          }
        ]
      }
    },
    {
      id: 'services',
      label: 'Services',
      icon: FaUsers,
      megamenu: {
        sections: [
          {
            title: 'Services aux Usagers',
            items: [
              { label: 'Prêt & Réservation', path: '/services/pret', icon: FaBookOpen, description: 'Gestion de vos emprunts' },
              { label: 'Formations', path: '/services/formations', icon: FaGraduationCap, description: 'Ateliers de recherche documentaire' },
              { label: 'Aide à la Recherche', path: '/services/aide', icon: FaSearch, description: 'Accompagnement personnalisé' },
              { label: 'Espaces de Travail', path: '/services/espaces', icon: FaDesktop, description: 'Réservation de salles' }
            ]
          },
          {
            title: 'Équipements',
            items: [
              { label: 'Salle de Lecture', path: '/services/lecture', icon: FaBook, description: '200 places silencieuses' },
              { label: 'Espace Multimédia', path: '/services/multimedia', icon: FaDesktop, description: '20 postes informatiques' },
              { label: 'Salles de Groupe', path: '/services/groupes', icon: FaUsers, description: '6 salles collaboratives' },
              { label: 'Cafétéria', path: '/services/cafeteria', icon: FaCoffee, description: 'Espace détente' }
            ]
          },
          {
            title: 'Services Techniques',
            items: [
              { label: 'Impression & Scan', path: '/services/impression', icon: FaFileAlt, description: 'Services d\'impression' },
              { label: 'Wifi & Accès', path: '/services/wifi', icon: FaWifi, description: 'Connexion internet' },
              { label: 'Parking', path: '/services/parking', icon: FaParking, description: 'Stationnement gratuit' }
            ]
          }
        ]
      }
    },
    {
      id: 'actualites',
      label: 'Actualités',
      path: '/actualites',
      icon: FaNewspaper
    },
    {
      id: 'infos',
      label: 'Infos',
      icon: FaInfoCircle,
      dropdown: [
        { label: 'Horaires & Contact', path: '/infos', icon: FaClock },
        { label: 'Plan de la Bibliothèque', path: '/infos#plan', icon: FaMapMarkerAlt },
        { label: 'Règlement', path: '/infos#reglement', icon: FaFileAlt },
        { label: 'Équipements', path: '/infos#equipements', icon: FaDesktop }
      ]
    }
  ];

  const isActivePath = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header className={`library-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container-fluid">
          {/* Top Bar */}
          <div className="top-bar">
            <div className="container">
              <div className="top-bar-content">
                <div className="contact-info">
                  <span className="contact-item">
                    <FaPhone size={12} />
                    +237 222 234 567
                  </span>
                  <span className="contact-item">
                    <FaEnvelope size={12} />
                    contact@bibliotheque-ztf.org
                  </span>
                  <span className="contact-item">
                    <FaClock size={12} />
                    Lun-Ven: 8h-20h
                  </span>
                </div>
                <div className="top-actions">
                  <button onClick={toggleTheme} className="theme-toggle" title={`Mode ${isDark ? 'clair' : 'sombre'}`}>
                    {isDark ? <FaSun size={12} /> : <FaMoon size={12} />}
                  </button>
                  <Link to="/auth" className="login-link">
                    <FaUser size={12} />
                    Connexion
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Main Header */}
          <div className="main-header">
            <div className="container">
              <div className="header-content">
                {/* Logo */}
                <Link to="/" className="library-logo">
                  <div className="logo-icon">
                    <FaBook size={28} />
                  </div>
                  <div className="logo-text">
                    <div className="logo-title">Bibliothèque</div>
                    <div className="logo-subtitle">Zacharias Tanee Fomum</div>
                  </div>
                </Link>

                {/* Navigation */}
                <nav className="main-navigation">
                  <ul className="nav-menu">
                    {menuItems.map((item) => (
                      <li 
                        key={item.id}
                        className={`nav-item ${item.megamenu || item.dropdown ? 'has-dropdown' : ''} ${
                          activeDropdown === item.id ? 'active' : ''
                        }`}
                        onMouseEnter={() => (item.megamenu || item.dropdown) && handleDropdownEnter(item.id)}
                        onMouseLeave={() => (item.megamenu || item.dropdown) && handleDropdownLeave()}
                        onClick={() => (item.megamenu || item.dropdown) && handleMenuClick(item.id)}
                      >
                        {item.path ? (
                          <Link
                            to={item.path}
                            className={`nav-link ${isActivePath(item.path) ? 'active' : ''}`}
                          >
                            <item.icon size={14} />
                            <span>{item.label}</span>
                          </Link>
                        ) : (
                          <button 
                            className="nav-link dropdown-trigger"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleMenuClick(item.id);
                            }}
                          >
                            <item.icon size={14} />
                            <span>{item.label}</span>
                            <FaChevronDown size={10} className="dropdown-arrow" />
                          </button>
                        )}

                        {/* Megamenu */}
                        {item.megamenu && (
                          <div className={`megamenu ${activeDropdown === item.id ? 'show' : ''}`}>
                            <div className="megamenu-content">
                              <div className="megamenu-main">
                                {item.megamenu.sections.slice(0, 2).map((section, index) => (
                                  <div key={index} className="megamenu-section">
                                    <h4 className="section-title">{section.title}</h4>
                                    <ul className="section-items">
                                      {section.items.map((subItem, subIndex) => (
                                        <li key={subIndex}>
                                          <Link to={subItem.path} className="megamenu-link">
                                            <div className="link-icon">
                                              <subItem.icon size={16} />
                                            </div>
                                            <div className="link-content">
                                              <div className="link-title">{subItem.label}</div>
                                              <div className="link-description">{subItem.description}</div>
                                            </div>
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                              
                              {/* Featured Section */}
                              <div className="megamenu-featured">
                                <div className="featured-content">
                                  <h3 className="featured-title">Collection ZTF</h3>
                                  <p className="featured-subtitle">
                                    Découvrez l'œuvre complète de Zacharias Tanee Fomum, 
                                    visionnaire et fondateur de notre institution.
                                  </p>
                                  <div className="featured-stats">
                                    <div className="stat-row">
                                      <span className="stat-label">Ouvrages publiés</span>
                                      <span className="stat-value">200+</span>
                                    </div>
                                    <div className="stat-row">
                                      <span className="stat-label">Manuscrits</span>
                                      <span className="stat-value">150+</span>
                                    </div>
                                    <div className="stat-row">
                                      <span className="stat-label">Conférences</span>
                                      <span className="stat-value">500+</span>
                                    </div>
                                  </div>
                                  <Link to="/catalogue/ztf" className="featured-cta">
                                    Explorez la Collection →
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Standard Dropdown */}
                        {item.dropdown && (
                          <div className={`dropdown-menu ${activeDropdown === item.id ? 'show' : ''}`}>
                            <ul className="dropdown-items">
                              {item.dropdown.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                  <Link to={subItem.path} className="dropdown-link">
                                    <subItem.icon size={14} />
                                    <span>{subItem.label}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Quick Access Menu */}
                <div className="quick-access-menu">
                  <div className="quick-search">
                    <Link to="/catalogue" className="search-btn" title="Rechercher dans le catalogue">
                      <FaSearch size={14} />
                      <span>Recherche</span>
                    </Link>
                  </div>
                  <div className="user-actions">
                    <Link to="/profile" className="profile-btn" title="Mon Profil">
                      <FaUserCircle size={16} />
                      <span>Mon Compte</span>
                    </Link>
                  </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                  className="mobile-menu-toggle"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu">
            <div className="mobile-menu-header">
              <div className="mobile-logo">
                <FaBook size={24} />
                <span>Bibliothèque ZTF</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <FaTimes size={20} />
              </button>
            </div>
            <nav className="mobile-nav">
              {menuItems.map((item) => (
                <div key={item.id} className="mobile-nav-item">
                  {item.path ? (
                    <Link
                      to={item.path}
                      className="mobile-nav-link"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon size={16} />
                      <span>{item.label}</span>
                    </Link>
                  ) : (
                    <>
                      <div className="mobile-nav-header">
                        <item.icon size={16} />
                        <span>{item.label}</span>
                      </div>
                      {item.dropdown && (
                        <div className="mobile-submenu">
                          {item.dropdown.map((subItem, index) => (
                            <Link
                              key={index}
                              to={subItem.path}
                              className="mobile-submenu-link"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <subItem.icon size={14} />
                              <span>{subItem.label}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                      {item.megamenu && (
                        <div className="mobile-megamenu">
                          {item.megamenu.sections.map((section, sectionIndex) => (
                            <div key={sectionIndex} className="mobile-section">
                              <h5>{section.title}</h5>
                              {section.items.map((subItem, itemIndex) => (
                                <Link
                                  key={itemIndex}
                                  to={subItem.path}
                                  className="mobile-submenu-link"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  <subItem.icon size={14} />
                                  <span>{subItem.label}</span>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}

      <style jsx>{`
        .library-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: #ffffff;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          overflow: visible;
        }

        .library-header .container-fluid,
        .library-header .container {
          overflow: visible;
          position: relative;
        }

        .library-header.scrolled {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        /* Top Bar */
        .top-bar {
          background: var(--blumine);
          color: white;
          padding: 0.5rem 0;
          font-size: 0.8rem;
        }

        .top-bar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .contact-info {
          display: flex;
          gap: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          opacity: 0.9;
        }

        .top-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .theme-toggle {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          padding: 0.3rem 0.6rem;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .theme-toggle:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .login-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: white;
          text-decoration: none;
          padding: 0.3rem 0.8rem;
          background: var(--buttercup);
          border-radius: 4px;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .login-link:hover {
          background: #e67e22;
          color: white;
        }

        /* Main Header */
        .main-header {
          padding: 1rem 0;
          background: #ffffff;
          overflow: visible;
          position: relative;
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          max-width: 100%;
          overflow: visible;
          position: relative;
        }

        /* Logo */
        .library-logo {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          text-decoration: none;
          color: inherit;
          flex-shrink: 0;
          min-width: 200px;
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, var(--blumine), var(--ming));
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .logo-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--blumine);
          line-height: 1.1;
        }

        .logo-subtitle {
          font-size: 0.75rem;
          color: var(--buttercup);
          font-weight: 500;
        }

        /* Navigation */
        .main-navigation {
          flex: 1;
          display: flex;
          justify-content: center;
          margin: 0 1rem;
          overflow: visible;
          position: static;
        }

        .nav-menu {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 0.5rem;
          align-items: center;
          flex-wrap: nowrap;
          overflow: visible;
          position: static;
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.6rem 0.8rem;
          color: var(--blumine);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.8rem;
          border-radius: 6px;
          transition: all 0.3s ease;
          background: none;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          min-height: 36px;
        }

        .nav-link:hover,
        .nav-link.active,
        .nav-item.active .nav-link {
          color: var(--buttercup);
          background: rgba(241, 196, 14, 0.1);
        }

        .dropdown-arrow {
          transition: transform 0.3s ease;
        }

        .nav-item.active .dropdown-arrow {
          transform: rotate(180deg);
        }

        /* Megamenu */
        .megamenu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(-10px);
          width: 800px;
          max-width: 90vw;
          background: #ffffff;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          margin-top: 0.5rem;
          z-index: 9999;
        }

        .megamenu.show {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        .megamenu-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 0;
          min-height: 400px;
        }

        .megamenu-main {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          padding: 2rem;
          border-right: 1px solid #e0e0e0;
        }

        .megamenu-featured {
          background: linear-gradient(135deg, var(--blumine), var(--ming));
          color: white;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .megamenu-featured::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="books" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M2 2h16v16H2z" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23books)"/></svg>');
          opacity: 0.3;
        }

        .featured-content {
          position: relative;
          z-index: 1;
        }

        .featured-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--buttercup);
        }

        .featured-subtitle {
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
          opacity: 0.9;
          line-height: 1.5;
        }

        .featured-stats {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .stat-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .stat-label {
          font-size: 0.8rem;
          opacity: 0.8;
        }

        .stat-value {
          font-weight: 600;
          color: var(--buttercup);
        }

        .featured-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--buttercup);
          color: var(--dark-900);
          padding: 0.8rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          margin-top: 1.5rem;
          transition: all 0.3s ease;
        }

        .featured-cta:hover {
          background: #e67e22;
          color: var(--dark-900);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(241, 196, 14, 0.4);
        }

        .megamenu-section {
          display: flex;
          flex-direction: column;
        }

        .section-title {
          font-size: 1rem;
          font-weight: 600;
          color: var(--blumine);
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid var(--buttercup);
        }

        .section-items {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .megamenu-link {
          display: flex;
          gap: 0.8rem;
          padding: 1rem;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .megamenu-link:hover {
          background: rgba(241, 196, 14, 0.08);
          border-color: rgba(241, 196, 14, 0.2);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .link-icon {
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          background: rgba(29, 79, 139, 0.1);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--blumine);
        }

        .link-title {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--blumine);
          margin-bottom: 0.2rem;
        }

        .link-description {
          font-size: 0.75rem;
          color: #666;
          line-height: 1.3;
        }

        /* Standard Dropdown */
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 240px;
          background: #ffffff;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.18);
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          margin-top: 0.5rem;
          z-index: 9999;
        }

        .dropdown-menu.show {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-items {
          list-style: none;
          margin: 0;
          padding: 0.5rem;
        }

        .dropdown-link {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.8rem 1rem;
          color: var(--blumine);
          text-decoration: none;
          border-radius: 6px;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .dropdown-link:hover {
          background: rgba(241, 196, 14, 0.1);
          color: var(--buttercup);
        }

        /* Quick Access Menu */
        .quick-access-menu {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-shrink: 0;
          min-width: 200px;
        }

        .quick-search,
        .user-actions {
          display: flex;
        }

        .search-btn,
        .profile-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1rem;
          background: rgba(29, 79, 139, 0.1);
          border: 1px solid rgba(29, 79, 139, 0.2);
          border-radius: 8px;
          color: var(--blumine);
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 500;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .search-btn:hover,
        .profile-btn:hover {
          background: var(--buttercup);
          color: white;
          border-color: var(--buttercup);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(241, 196, 14, 0.3);
        }

        /* Mobile Menu Toggle */
        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--blumine);
          padding: 0.5rem;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .mobile-menu-toggle:hover {
          background: rgba(241, 196, 14, 0.1);
          color: var(--buttercup);
        }

        /* Mobile Menu */
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1100;
          display: none;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          width: 90%;
          max-width: 400px;
          height: 100%;
          background: white;
          overflow-y: auto;
          padding: 2rem;
        }

        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #e0e0e0;
        }

        .mobile-logo {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: var(--blumine);
          font-weight: 600;
        }

        .mobile-nav-item {
          margin-bottom: 1rem;
        }

        .mobile-nav-link,
        .mobile-nav-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          color: var(--blumine);
          text-decoration: none;
          border-radius: 8px;
          font-weight: 500;
          background: rgba(29, 79, 139, 0.05);
          margin-bottom: 0.5rem;
        }

        .mobile-nav-link:hover {
          background: rgba(241, 196, 14, 0.1);
          color: var(--buttercup);
        }

        .mobile-submenu,
        .mobile-megamenu {
          padding-left: 1rem;
        }

        .mobile-section {
          margin-bottom: 1.5rem;
        }

        .mobile-section h5 {
          color: var(--buttercup);
          font-size: 0.9rem;
          margin-bottom: 0.8rem;
          font-weight: 600;
        }

        .mobile-submenu-link {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.8rem 1rem;
          color: #666;
          text-decoration: none;
          border-radius: 6px;
          margin-bottom: 0.3rem;
          font-size: 0.9rem;
        }

        .mobile-submenu-link:hover {
          background: rgba(241, 196, 14, 0.1);
          color: var(--buttercup);
        }

        /* Responsive */
        @media (max-width: 1400px) {
          .main-navigation {
            margin: 0 0.5rem;
          }

          .nav-link {
            padding: 0.5rem 0.6rem;
            font-size: 0.75rem;
          }
        }

        @media (max-width: 1200px) {
          .main-navigation {
            margin: 0 0.3rem;
          }

          .nav-menu {
            gap: 0.3rem;
          }

          .nav-link {
            padding: 0.5rem 0.5rem;
            font-size: 0.7rem;
          }

          .logo-title {
            font-size: 1rem;
          }

          .logo-subtitle {
            font-size: 0.7rem;
          }
        }

        @media (max-width: 1024px) {
          .megamenu {
            width: 95vw;
            max-width: 700px;
          }

          .megamenu-content {
            grid-template-columns: 1fr;
            min-height: auto;
          }

          .megamenu-main {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 1.5rem;
            border-right: none;
            border-bottom: 1px solid #e0e0e0;
          }

          .megamenu-featured {
            padding: 1.5rem;
          }

          .nav-link {
            padding: 0.6rem 0.8rem;
            font-size: 0.85rem;
          }

          .nav-menu {
            gap: 0.8rem;
          }

          .quick-access-menu {
            gap: 0.5rem;
            min-width: auto;
          }

          .search-btn,
          .profile-btn {
            padding: 0.5rem 0.8rem;
            font-size: 0.75rem;
          }
        }

        @media (max-width: 768px) {
          .top-bar {
            display: none;
          }

          .main-navigation {
            display: none;
          }

          .mobile-menu-toggle {
            display: block;
          }

          .mobile-menu-overlay {
            display: block;
          }

          .header-actions .search-btn,
          .header-actions .profile-btn {
            width: 36px;
            height: 36px;
          }

          .logo-title {
            font-size: 1.2rem;
          }

          .logo-subtitle {
            font-size: 0.8rem;
          }

          .logo-icon {
            width: 42px;
            height: 42px;
          }
        }

        @media (max-width: 576px) {
          .contact-info {
            gap: 1rem;
          }

          .contact-item {
            font-size: 0.75rem;
          }

          .main-header {
            padding: 0.8rem 0;
          }

          .mobile-menu {
            width: 100%;
            padding: 1.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default LibraryHeader;