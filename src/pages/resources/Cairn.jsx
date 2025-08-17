import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaDatabase, 
  FaSearch,
  FaBook,
  FaNewspaper,
  FaGraduationCap,
  FaExternalLinkAlt,
  FaFilter,
  FaDownload,
  FaEye,
  FaStar,
  FaCalendar,
  FaUser,
  FaTags,
  FaLanguage,
  FaUniversity,
  FaChartLine,
  FaFileAlt,
  FaQuoteLeft
} from 'react-icons/fa';

const Cairn = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDiscipline, setSelectedDiscipline] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const disciplines = [
    { value: 'all', label: 'Toutes disciplines' },
    { value: 'philosophy', label: 'Philosophie' },
    { value: 'theology', label: 'Théologie' },
    { value: 'history', label: 'Histoire' },
    { value: 'sociology', label: 'Sociologie' },
    { value: 'psychology', label: 'Psychologie' },
    { value: 'literature', label: 'Littérature' },
    { value: 'political-science', label: 'Sciences politiques' }
  ];

  const documentTypes = [
    { value: 'all', label: 'Tous types' },
    { value: 'articles', label: 'Articles de revues' },
    { value: 'books', label: 'Ouvrages' },
    { value: 'chapters', label: 'Chapitres d\'ouvrages' },
    { value: 'magazines', label: 'Magazines' }
  ];

  const featuredCollections = [
    {
      id: 1,
      title: "Revues de Philosophie",
      description: "Collection complète des principales revues francophones de philosophie",
      count: 45,
      icon: FaQuoteLeft,
      color: 'text-primary'
    },
    {
      id: 2,
      title: "Sciences Humaines",
      description: "Accès aux publications de référence en sciences humaines et sociales",
      count: 120,
      icon: FaUser,
      color: 'text-success'
    },
    {
      id: 3,
      title: "Histoire Contemporaine",
      description: "Documentation historique et analyses contemporaines",
      count: 78,
      icon: FaCalendar,
      color: 'text-warning'
    }
  ];

  const recentArticles = [
    {
      id: 1,
      title: "Philosophie africaine et modernité : enjeux contemporains",
      author: "Prof. Jean-Marie Tchinda",
      journal: "Revue de Philosophie Africaine",
      year: 2024,
      pages: "pp. 45-67",
      abstract: "Analyse des défis et opportunités de la philosophie africaine face aux enjeux de la modernité et de la mondialisation.",
      disciplines: ["Philosophie", "Études africaines"],
      type: "Article"
    },
    {
      id: 2,
      title: "Spiritualité et société numérique : nouvelles formes de religiosité",
      author: "Dr. Marie Essomba",
      journal: "Cahiers de Théologie Contemporaine",
      year: 2024,
      pages: "pp. 23-41",
      abstract: "Exploration des transformations de la spiritualité à l'ère du numérique et des réseaux sociaux.",
      disciplines: ["Théologie", "Sociologie"],
      type: "Article"
    },
    {
      id: 3,
      title: "Mémoire collective et histoire orale au Cameroun",
      author: "Paul Mbarga",
      journal: "Revue d'Histoire Africaine",
      year: 2023,
      pages: "pp. 112-135",
      abstract: "Étude sur la préservation de la mémoire collective à travers les traditions orales camerounaises.",
      disciplines: ["Histoire", "Anthropologie"],
      type: "Article"
    }
  ];

  const stats = [
    { label: 'Revues accessibles', value: '500+', icon: FaNewspaper, color: 'text-primary' },
    { label: 'Articles disponibles', value: '1.2M+', icon: FaFileAlt, color: 'text-success' },
    { label: 'Ouvrages', value: '15,000+', icon: FaBook, color: 'text-warning' },
    { label: 'Disciplines couvertes', value: '50+', icon: FaUniversity, color: 'text-info' }
  ];

  return (
    <div className="cairn-container">
      {/* Hero Section */}
      <section className="cairn-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="hero-content">
                <div className="hero-badge">
                  <FaDatabase size={12} className="me-2" />
                  Base de Données CAIRN
                </div>
                <h1 className="hero-title">
                  Base de données <span className="text-warning">CAIRN</span>
                </h1>
                <p className="hero-subtitle">
                  Accédez à la plus grande collection de publications francophones en sciences 
                  humaines et sociales. Plus de 500 revues et 15,000 ouvrages à votre disposition.
                </p>
                <div className="hero-actions">
                  <a 
                    href="https://www.cairn.info" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-warning"
                  >
                    <FaExternalLinkAlt size={14} className="me-2" />
                    Accéder à CAIRN
                  </a>
                  <Link to="/auth" className="btn btn-outline-warning">
                    <FaUser size={14} className="me-2" />
                    Se connecter
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="stats-grid">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="stat-card">
                      <Icon className={`stat-icon ${stat.color}`} />
                      <div className="stat-content">
                        <div className="stat-value">{stat.value}</div>
                        <div className="stat-label">{stat.label}</div>
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
            <div className="search-header">
              <h3>Rechercher dans CAIRN</h3>
              <p>Trouvez rapidement les ressources dont vous avez besoin</p>
            </div>
            <div className="search-form">
              <div className="row g-3">
                <div className="col-lg-6">
                  <div className="search-input-group">
                    <FaSearch className="search-icon" />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mots-clés, auteur, titre..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-3">
                  <select
                    className="form-select"
                    value={selectedDiscipline}
                    onChange={(e) => setSelectedDiscipline(e.target.value)}
                  >
                    {disciplines.map(discipline => (
                      <option key={discipline.value} value={discipline.value}>
                        {discipline.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-lg-3">
                  <select
                    className="form-select"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                  >
                    {documentTypes.map(type => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="search-actions">
                <button className="btn btn-warning">
                  <FaSearch size={14} className="me-2" />
                  Rechercher
                </button>
                <button className="btn btn-outline-secondary">
                  <FaFilter size={14} className="me-2" />
                  Filtres avancés
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="collections-section">
        <div className="container">
          <div className="section-header">
            <h3>Collections Vedettes</h3>
            <p>Explorez nos collections les plus consultées</p>
          </div>
          <div className="collections-grid">
            {featuredCollections.map(collection => {
              const Icon = collection.icon;
              return (
                <div key={collection.id} className="collection-card">
                  <div className="collection-header">
                    <Icon className={`collection-icon ${collection.color}`} />
                    <div className="collection-count">{collection.count} titres</div>
                  </div>
                  <h5 className="collection-title">{collection.title}</h5>
                  <p className="collection-description">{collection.description}</p>
                  <button className="btn btn-outline-warning btn-sm">
                    <FaEye size={12} className="me-2" />
                    Explorer
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="articles-section">
        <div className="container">
          <div className="section-header">
            <h3>Articles Récents</h3>
            <p>Découvrez les dernières publications</p>
          </div>
          <div className="articles-list">
            {recentArticles.map(article => (
              <div key={article.id} className="article-card">
                <div className="article-content">
                  <div className="article-header">
                    <h5 className="article-title">{article.title}</h5>
                    <div className="article-type">{article.type}</div>
                  </div>
                  <div className="article-meta">
                    <span className="article-author">
                      <FaUser size={12} />
                      {article.author}
                    </span>
                    <span className="article-journal">
                      <FaNewspaper size={12} />
                      {article.journal}
                    </span>
                    <span className="article-year">
                      <FaCalendar size={12} />
                      {article.year} - {article.pages}
                    </span>
                  </div>
                  <p className="article-abstract">{article.abstract}</p>
                  <div className="article-disciplines">
                    {article.disciplines.map((discipline, index) => (
                      <span key={index} className="discipline-tag">
                        {discipline}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="article-actions">
                  <button className="btn btn-outline-primary btn-sm">
                    <FaEye size={12} />
                  </button>
                  <button className="btn btn-outline-success btn-sm">
                    <FaDownload size={12} />
                  </button>
                  <button className="btn btn-outline-warning btn-sm">
                    <FaStar size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access Info */}
      <section className="access-info-section">
        <div className="container">
          <div className="access-card">
            <div className="row align-items-center g-4">
              <div className="col-lg-8">
                <h4>Comment accéder à CAIRN ?</h4>
                <div className="access-steps">
                  <div className="step-item">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h6>Connexion</h6>
                      <p>Connectez-vous avec vos identifiants ZTF</p>
                    </div>
                  </div>
                  <div className="step-item">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h6>Accès direct</h6>
                      <p>Cliquez sur le lien d'accès à CAIRN</p>
                    </div>
                  </div>
                  <div className="step-item">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h6>Recherche</h6>
                      <p>Explorez plus de 500 revues et 15,000 ouvrages</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="help-links">
                  <h6>Besoin d'aide ?</h6>
                  <Link to="/contact" className="help-link">
                    <FaQuoteLeft size={12} />
                    Contacter le support
                  </Link>
                  <Link to="/services/formations" className="help-link">
                    <FaGraduationCap size={12} />
                    Formations disponibles
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .cairn-container {
          background: var(--bg-primary);
          min-height: 100vh;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .cairn-container .container {
          max-width: 1400px !important;
          margin: 0 auto !important;
          padding: 0 1rem !important;
          width: 100% !important;
        }

        /* Hero Section */
        .cairn-hero {
          padding: 3rem 0;
          background: linear-gradient(135deg, 
            rgba(59, 130, 246, 0.1) 0%, 
            rgba(16, 185, 129, 0.05) 100%);
          border-radius: 0 0 20px 20px;
          margin-bottom: 2rem;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          color: #3b82f6;
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
          flex-wrap: wrap;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-2px);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .stat-icon {
          font-size: 1.25rem;
        }

        .stat-value {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .stat-label {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        /* Search Section */
        .search-section {
          padding: 2rem 0;
        }

        .search-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
        }

        .search-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .search-header h3 {
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .search-header p {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .search-input-group {
          position: relative;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-tertiary);
          z-index: 2;
        }

        .form-control,
        .form-select {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          padding: 0.75rem;
          font-size: 0.875rem;
          color: var(--text-primary);
          transition: all 0.3s ease;
        }

        .search-input-group .form-control {
          padding-left: 2.5rem;
        }

        .form-control:focus,
        .form-select:focus {
          background: rgba(255, 255, 255, 0.12);
          border-color: var(--warning);
          box-shadow: 0 0 0 3px rgba(241, 196, 14, 0.1);
          outline: none;
          color: var(--text-primary);
        }

        .search-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        /* Collections Section */
        .collections-section,
        .articles-section {
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

        .collections-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .collection-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s ease;
          text-align: center;
        }

        .collection-card:hover {
          transform: translateY(-6px);
          border-color: rgba(241, 196, 14, 0.3);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
        }

        .collection-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .collection-icon {
          font-size: 2rem;
        }

        .collection-count {
          background: rgba(241, 196, 14, 0.1);
          color: var(--warning);
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .collection-title {
          color: var(--text-primary);
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .collection-description {
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }

        /* Articles Section */
        .articles-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .article-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          display: flex;
          gap: 2rem;
          transition: all 0.3s ease;
        }

        .article-card:hover {
          border-color: rgba(241, 196, 14, 0.3);
          transform: translateY(-2px);
        }

        .article-content {
          flex: 1;
        }

        .article-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .article-title {
          color: var(--text-primary);
          font-size: 1.1rem;
          font-weight: 600;
          line-height: 1.3;
          margin: 0;
          flex: 1;
        }

        .article-type {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 600;
          margin-left: 1rem;
        }

        .article-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .article-meta span {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-tertiary);
          font-size: 0.8rem;
        }

        .article-abstract {
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1rem;
          font-size: 0.875rem;
        }

        .article-disciplines {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .discipline-tag {
          background: rgba(241, 196, 14, 0.1);
          color: var(--warning);
          padding: 0.25rem 0.5rem;
          border-radius: 8px;
          font-size: 0.7rem;
          font-weight: 500;
        }

        .article-actions {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex-shrink: 0;
        }

        /* Access Info */
        .access-info-section {
          padding: 3rem 0;
          background: rgba(255, 255, 255, 0.02);
        }

        .access-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
        }

        .access-card h4 {
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 2rem;
        }

        .access-steps {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .step-item {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .step-number {
          width: 40px;
          height: 40px;
          background: var(--warning);
          color: var(--dark-900);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          flex-shrink: 0;
        }

        .step-content h6 {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .step-content p {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin: 0;
        }

        .help-links {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 1.5rem;
        }

        .help-links h6 {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .help-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-secondary);
          text-decoration: none;
          padding: 0.75rem;
          border-radius: 8px;
          margin-bottom: 0.5rem;
          transition: all 0.3s ease;
        }

        .help-link:hover {
          background: rgba(241, 196, 14, 0.1);
          color: var(--warning);
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

        .btn-outline-warning {
          background: transparent;
          border: 1px solid var(--warning);
          color: var(--warning);
        }

        .btn-outline-warning:hover {
          background: var(--warning);
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

        .btn-outline-secondary {
          background: transparent;
          border: 1px solid var(--text-secondary);
          color: var(--text-secondary);
        }

        .btn-outline-secondary:hover {
          background: var(--text-secondary);
          color: var(--bg-primary);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
            margin-top: 2rem;
          }
          
          .collections-grid {
            grid-template-columns: 1fr;
          }
          
          .article-card {
            flex-direction: column;
            gap: 1rem;
          }
          
          .article-actions {
            flex-direction: row;
            justify-content: center;
          }
          
          .access-steps {
            gap: 1rem;
          }
          
          .step-item {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Cairn;