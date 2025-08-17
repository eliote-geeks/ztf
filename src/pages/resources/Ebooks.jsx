import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFilePdf, 
  FaSearch,
  FaBook,
  FaDownload,
  FaEye,
  FaStar,
  FaFilter,
  FaSort,
  FaUser,
  FaCalendar,
  FaTags,
  FaLanguage
} from 'react-icons/fa';

const Ebooks = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

  const categories = [
    { value: 'all', label: 'Toutes catégories' },
    { value: 'theology', label: 'Théologie' },
    { value: 'philosophy', label: 'Philosophie' },
    { value: 'history', label: 'Histoire' },
    { value: 'literature', label: 'Littérature' },
    { value: 'sciences', label: 'Sciences' }
  ];

  const ebooks = [
    {
      id: 1,
      title: "L'Art de la Prière - Édition Numérique",
      author: "Zacharias Tanee Fomum",
      category: "theology",
      language: "Français",
      pages: 420,
      year: 2019,
      downloads: 2850,
      rating: 4.9,
      size: "2.3 MB",
      format: "PDF",
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=250&fit=crop",
      description: "Guide spirituel complet pour développer une vie de prière transformatrice selon l'enseignement de Z.T. Fomum."
    },
    {
      id: 2,
      title: "Histoire du Cameroun Moderne",
      author: "Jean-Baptiste Sipa",
      category: "history",
      language: "Français",
      pages: 485,
      year: 2021,
      downloads: 1950,
      rating: 4.7,
      size: "5.1 MB",
      format: "PDF",
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=250&fit=crop",
      description: "Analyse complète de l'évolution politique et sociale du Cameroun de l'indépendance à nos jours."
    },
    {
      id: 3,
      title: "Philosophie Africaine Contemporaine",
      author: "Prof. Emmanuel Ngwé",
      category: "philosophy",
      language: "Français",
      pages: 380,
      year: 2020,
      downloads: 1420,
      rating: 4.6,
      size: "3.8 MB",
      format: "PDF",
      cover: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=200&h=250&fit=crop",
      description: "Exploration des courants philosophiques africains modernes et de leur impact sur la pensée contemporaine."
    }
  ];

  const stats = [
    { label: 'E-books disponibles', value: '3,200+', icon: FaBook },
    { label: 'Téléchargements', value: '125k+', icon: FaDownload },
    { label: 'Langues', value: '12', icon: FaLanguage },
    { label: 'Catégories', value: '25+', icon: FaTags }
  ];

  return (
    <div className="ebooks-container">
      {/* Hero Section */}
      <section className="ebooks-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="hero-content">
                <div className="hero-badge">
                  <FaFilePdf size={12} className="me-2" />
                  Collection E-books
                </div>
                <h1 className="hero-title">
                  Bibliothèque <span className="text-warning">Numérique</span>
                </h1>
                <p className="hero-subtitle">
                  Accédez à plus de 3,200 livres numériques dans tous les domaines. 
                  Téléchargement gratuit pour tous les membres.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="stats-grid">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="stat-card">
                      <Icon className="stat-icon text-warning" />
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

      {/* Search and Filters */}
      <section className="search-section">
        <div className="container">
          <div className="search-card">
            <div className="row g-3 align-items-end">
              <div className="col-lg-6">
                <label className="form-label">Rechercher</label>
                <div className="search-input-group">
                  <FaSearch className="search-icon" />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Titre, auteur, mots-clés..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <label className="form-label">Catégorie</label>
                <select
                  className="form-select"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(cat => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-lg-3">
                <label className="form-label">Trier par</label>
                <select
                  className="form-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="recent">Plus récents</option>
                  <option value="popular">Plus téléchargés</option>
                  <option value="rating">Mieux notés</option>
                  <option value="title">Titre A-Z</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-books Grid */}
      <section className="ebooks-section">
        <div className="container">
          <div className="section-header">
            <h3>E-books Disponibles</h3>
            <p>Découvrez notre collection de livres numériques</p>
          </div>
          <div className="ebooks-grid">
            {ebooks.map(ebook => (
              <div key={ebook.id} className="ebook-card">
                <div className="ebook-cover">
                  <img src={ebook.cover} alt={ebook.title} />
                  <div className="ebook-overlay">
                    <Link to={`/ebook/${ebook.id}`} className="btn btn-sm btn-light">
                      <FaEye size={14} />
                    </Link>
                    <button className="btn btn-sm btn-warning">
                      <FaDownload size={14} />
                    </button>
                  </div>
                  <div className="ebook-format">{ebook.format}</div>
                </div>
                <div className="ebook-info">
                  <h5 className="ebook-title">{ebook.title}</h5>
                  <p className="ebook-author">par {ebook.author}</p>
                  <p className="ebook-description">{ebook.description}</p>
                  
                  <div className="ebook-meta">
                    <div className="meta-row">
                      <span><FaCalendar size={12} /> {ebook.year}</span>
                      <span><FaBook size={12} /> {ebook.pages} pages</span>
                    </div>
                    <div className="meta-row">
                      <span><FaLanguage size={12} /> {ebook.language}</span>
                      <span>{ebook.size}</span>
                    </div>
                  </div>

                  <div className="ebook-stats">
                    <div className="rating">
                      <FaStar className="star-filled" />
                      <span>{ebook.rating}</span>
                    </div>
                    <div className="downloads">
                      <FaDownload size={12} />
                      <span>{ebook.downloads} téléchargements</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="load-more">
            <button className="btn btn-outline-warning">
              Charger plus d'e-books
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .ebooks-container {
          background: var(--bg-primary);
          min-height: 100vh;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .ebooks-container .container {
          max-width: 1400px !important;
          margin: 0 auto !important;
          padding: 0 1rem !important;
          width: 100% !important;
        }

        .ebooks-hero {
          padding: 3rem 0;
          background: linear-gradient(135deg, 
            rgba(241, 196, 14, 0.1) 0%, 
            rgba(59, 130, 246, 0.05) 100%);
          border-radius: 0 0 20px 20px;
          margin-bottom: 2rem;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(241, 196, 14, 0.1);
          border: 1px solid rgba(241, 196, 14, 0.3);
          color: var(--warning);
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

        .form-label {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
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

        .ebooks-section {
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

        .ebooks-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .ebook-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .ebook-card:hover {
          transform: translateY(-6px);
          border-color: rgba(241, 196, 14, 0.3);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
        }

        .ebook-cover {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .ebook-cover img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .ebook-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .ebook-card:hover .ebook-overlay {
          opacity: 1;
        }

        .ebook-format {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          background: rgba(239, 68, 68, 0.9);
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: 8px;
          font-size: 0.7rem;
          font-weight: 600;
        }

        .ebook-info {
          padding: 1.5rem;
        }

        .ebook-title {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .ebook-author {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .ebook-description {
          color: var(--text-secondary);
          font-size: 0.8rem;
          line-height: 1.4;
          margin-bottom: 1rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .ebook-meta {
          margin-bottom: 1rem;
        }

        .meta-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }

        .meta-row span {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-tertiary);
          font-size: 0.8rem;
        }

        .ebook-stats {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .rating {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .star-filled {
          color: #f59e0b;
        }

        .downloads {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-tertiary);
          font-size: 0.8rem;
        }

        .load-more {
          text-align: center;
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
        }

        .btn-light {
          background: rgba(255, 255, 255, 0.9);
          color: var(--dark-900);
        }

        .btn-light:hover {
          background: white;
        }

        .btn-outline-warning {
          background: transparent;
          border: 1px solid var(--warning);
          color: var(--warning);
        }

        .btn-outline-warning:hover {
          background: var(--warning);
          color: var(--dark-900);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
            margin-top: 2rem;
          }
          
          .ebooks-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Ebooks;