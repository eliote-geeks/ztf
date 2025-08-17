import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaGlobe, 
  FaSearch,
  FaBook,
  FaNewspaper,
  FaExternalLinkAlt,
  FaUser,
  FaCalendar,
  FaDownload,
  FaEye,
  FaStar,
  FaUniversity,
  FaLanguage,
  FaQuoteLeft
} from 'react-icons/fa';

const OpenEdition = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const platforms = [
    {
      name: 'OpenEdition Journals',
      description: 'Plus de 500 revues en sciences humaines et sociales',
      count: '500+ revues',
      icon: FaNewspaper,
      color: 'text-primary'
    },
    {
      name: 'OpenEdition Books',
      description: 'Collection de livres en accès libre',
      count: '12,000+ ouvrages',
      icon: FaBook,
      color: 'text-success'
    },
    {
      name: 'Hypothèses',
      description: 'Plateforme de carnets de recherche',
      count: '4,000+ carnets',
      icon: FaQuoteLeft,
      color: 'text-warning'
    }
  ];

  const featuredContent = [
    {
      id: 1,
      title: "Cahiers d'études africaines",
      type: "Revue",
      description: "Revue de référence en études africaines",
      institution: "EHESS",
      access: "Libre",
      language: "Français/Anglais"
    },
    {
      id: 2,
      title: "L'Homme et la société",
      type: "Revue",
      description: "Revue internationale de recherches et de synthèses sociologiques",
      institution: "L'Harmattan",
      access: "Libre",
      language: "Français"
    },
    {
      id: 3,
      title: "Philosophie africaine",
      type: "Ouvrage",
      description: "Collection d'essais sur la pensée philosophique africaine",
      institution: "Presses universitaires",
      access: "Libre",
      language: "Français"
    }
  ];

  return (
    <div className="openedition-container">
      {/* Hero Section */}
      <section className="openedition-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="hero-content">
                <div className="hero-badge">
                  <FaGlobe size={12} className="me-2" />
                  Plateforme OpenEdition
                </div>
                <h1 className="hero-title">
                  <span className="text-warning">OpenEdition</span> - Portail de ressources SHS
                </h1>
                <p className="hero-subtitle">
                  Accédez à la plus grande plateforme francophone de ressources en sciences 
                  humaines et sociales. Revues, livres et carnets de recherche en accès libre.
                </p>
                <div className="hero-actions">
                  <a 
                    href="https://www.openedition.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-warning"
                  >
                    <FaExternalLinkAlt size={14} className="me-2" />
                    Accéder à OpenEdition
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="platforms-preview">
                {platforms.map((platform, index) => {
                  const Icon = platform.icon;
                  return (
                    <div key={index} className="platform-card">
                      <Icon className={`platform-icon ${platform.color}`} />
                      <div className="platform-info">
                        <h6>{platform.name}</h6>
                        <p>{platform.description}</p>
                        <span className="platform-count">{platform.count}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="search-section">
        <div className="container">
          <div className="search-card">
            <h3>Rechercher dans OpenEdition</h3>
            <div className="search-form">
              <div className="search-input-group">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Rechercher des revues, livres, articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="btn btn-warning">Rechercher</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="content-section">
        <div className="container">
          <div className="section-header">
            <h3>Ressources Vedettes</h3>
            <p>Découvrez une sélection de nos meilleures ressources</p>
          </div>
          <div className="content-grid">
            {featuredContent.map(item => (
              <div key={item.id} className="content-card">
                <div className="content-header">
                  <h5>{item.title}</h5>
                  <span className="content-type">{item.type}</span>
                </div>
                <p className="content-description">{item.description}</p>
                <div className="content-meta">
                  <span><FaUniversity size={12} /> {item.institution}</span>
                  <span><FaLanguage size={12} /> {item.language}</span>
                  <span className="access-free">Accès {item.access}</span>
                </div>
                <div className="content-actions">
                  <button className="btn btn-outline-primary btn-sm">
                    <FaEye size={12} />
                  </button>
                  <button className="btn btn-outline-success btn-sm">
                    <FaDownload size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .openedition-container {
          background: var(--bg-primary);
          min-height: 100vh;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .openedition-container .container {
          max-width: 1400px !important;
          margin: 0 auto !important;
          padding: 0 1rem !important;
          width: 100% !important;
        }

        .openedition-hero {
          padding: 3rem 0;
          background: linear-gradient(135deg, 
            rgba(16, 185, 129, 0.1) 0%, 
            rgba(59, 130, 246, 0.05) 100%);
          border-radius: 0 0 20px 20px;
          margin-bottom: 2rem;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #10b981;
          font-size: 0.75rem;
          font-weight: 500;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          margin-bottom: 1rem;
        }

        .hero-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .hero-subtitle {
          font-size: 1rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
        }

        .platforms-preview {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .platform-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
          display: flex;
          gap: 1rem;
          transition: all 0.3s ease;
        }

        .platform-card:hover {
          border-color: rgba(241, 196, 14, 0.3);
          transform: translateY(-2px);
        }

        .platform-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .platform-info h6 {
          color: var(--text-primary);
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .platform-info p {
          color: var(--text-secondary);
          font-size: 0.8rem;
          margin-bottom: 0.5rem;
        }

        .platform-count {
          background: rgba(241, 196, 14, 0.1);
          color: var(--warning);
          padding: 0.25rem 0.5rem;
          border-radius: 8px;
          font-size: 0.7rem;
          font-weight: 600;
        }

        .search-section {
          padding: 2rem 0;
        }

        .search-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
        }

        .search-card h3 {
          color: var(--text-primary);
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .search-input-group {
          display: flex;
          gap: 1rem;
          align-items: center;
          max-width: 600px;
          margin: 0 auto;
          position: relative;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          color: var(--text-tertiary);
          z-index: 2;
        }

        .form-control {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          padding: 0.75rem 0.75rem 0.75rem 2.5rem;
          font-size: 0.875rem;
          color: var(--text-primary);
          flex: 1;
        }

        .content-section {
          padding: 3rem 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-header h3 {
          color: var(--text-primary);
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .section-header p {
          color: var(--text-secondary);
          font-size: 1rem;
        }

        .content-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .content-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .content-card:hover {
          transform: translateY(-4px);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .content-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .content-header h5 {
          color: var(--text-primary);
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0;
          flex: 1;
        }

        .content-type {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 600;
          margin-left: 1rem;
        }

        .content-description {
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1.5rem;
          font-size: 0.875rem;
        }

        .content-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .content-meta span {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-tertiary);
          font-size: 0.8rem;
        }

        .access-free {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e !important;
          padding: 0.25rem 0.5rem;
          border-radius: 8px;
          font-weight: 600;
        }

        .content-actions {
          display: flex;
          gap: 0.5rem;
        }

        .btn {
          border: none;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          text-decoration: none;
          cursor: pointer;
        }

        .btn-sm {
          padding: 0.5rem 1rem;
          font-size: 0.8rem;
        }

        .btn-warning {
          background: var(--gradient-accent);
          color: var(--dark-900);
        }

        .btn-warning:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(241, 196, 14, 0.3);
          color: var(--dark-900);
          text-decoration: none;
        }

        .btn-outline-primary {
          background: transparent;
          border: 1px solid #3b82f6;
          color: #3b82f6;
        }

        .btn-outline-primary:hover {
          background: #3b82f6;
          color: white;
        }

        .btn-outline-success {
          background: transparent;
          border: 1px solid #22c55e;
          color: #22c55e;
        }

        .btn-outline-success:hover {
          background: #22c55e;
          color: white;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .platforms-preview {
            margin-top: 2rem;
          }
          
          .search-input-group {
            flex-direction: column;
          }
          
          .content-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default OpenEdition;