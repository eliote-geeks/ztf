import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaBell, 
  FaBook, 
  FaCalendar,
  FaDownload,
  FaEye,
  FaStar,
  FaFilePdf,
  FaBookOpen,
  FaGraduationCap,
  FaFilter,
  FaChevronDown,
  FaClock
} from 'react-icons/fa';

const CatalogueNouveautes = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const periods = [
    { value: 'week', label: 'Cette semaine', count: 12 },
    { value: 'month', label: 'Ce mois', count: 45 },
    { value: 'quarter', label: 'Ce trimestre', count: 128 },
    { value: 'year', label: 'Cette année', count: 340 }
  ];

  const categories = [
    { value: 'all', label: 'Toutes catégories' },
    { value: 'theology', label: 'Théologie & Spiritualité' },
    { value: 'history', label: 'Histoire' },
    { value: 'literature', label: 'Littérature' },
    { value: 'philosophy', label: 'Philosophie' },
    { value: 'sciences', label: 'Sciences' },
    { value: 'ebook', label: 'E-books' },
    { value: 'thesis', label: 'Thèses & Mémoires' }
  ];

  const sortOptions = [
    { value: 'date', label: 'Date d\'acquisition' },
    { value: 'title', label: 'Titre A-Z' },
    { value: 'author', label: 'Auteur A-Z' },
    { value: 'popularity', label: 'Popularité' }
  ];

  const nouveautes = [
    {
      id: 1,
      title: "Intelligence Artificielle et Éthique Chrétienne",
      author: "Dr. Marie Essomba",
      category: "theology",
      type: "book",
      acquisitionDate: "2024-01-15",
      publishYear: 2024,
      pages: 320,
      isbn: "978-2-123456-89-0",
      publisher: "Éditions Universitaires",
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=250&fit=crop",
      description: "Une réflexion approfondie sur les enjeux éthiques de l'IA dans une perspective chrétienne africaine.",
      isNew: true,
      isTrending: false,
      views: 245,
      downloads: 89
    },
    {
      id: 2,
      title: "Contes Numériques du Cameroun Moderne",
      author: "Jean-Paul Mbarga",
      category: "literature",
      type: "ebook",
      acquisitionDate: "2024-01-10",
      publishYear: 2024,
      pages: 180,
      isbn: "978-2-987654-43-2",
      publisher: "Presses Africaines",
      cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&h=250&fit=crop",
      description: "Collection interactive de contes traditionnels adaptés au numérique avec animations et narration audio.",
      isNew: true,
      isTrending: true,
      views: 567,
      downloads: 234
    },
    {
      id: 3,
      title: "Méthodes Quantitatives en Sciences Sociales Africaines",
      author: "Prof. David Kouam",
      category: "sciences",
      type: "book",
      acquisitionDate: "2024-01-08",
      publishYear: 2023,
      pages: 450,
      isbn: "978-2-456789-12-3",
      publisher: "Université de Douala",
      cover: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=200&h=250&fit=crop",
      description: "Guide pratique des méthodes de recherche quantitative adaptées aux contextes socioculturels africains.",
      isNew: false,
      isTrending: true,
      views: 432,
      downloads: 167
    },
    {
      id: 4,
      title: "Philosophie Ubuntu et Gouvernance Moderne",
      author: "Dr. Françoise Ateba",
      category: "philosophy",
      type: "thesis",
      acquisitionDate: "2024-01-05",
      publishYear: 2024,
      pages: 280,
      isbn: "978-2-789123-45-6",
      publisher: "ENS Yaoundé",
      cover: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=200&h=250&fit=crop",
      description: "Thèse de doctorat explorant l'application des principes Ubuntu dans les systèmes de gouvernance contemporains.",
      isNew: true,
      isTrending: false,
      views: 189,
      downloads: 76
    },
    {
      id: 5,
      title: "Archives Musicales des Royaumes Bamiléké",
      author: "Ensemble Culturel Bafou",
      category: "history",
      type: "multimedia",
      acquisitionDate: "2024-01-03",
      publishYear: 2024,
      pages: null,
      isbn: null,
      publisher: "Centre Culturel Bamiléké",
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=250&fit=crop",
      description: "Collection audio-visuelle de musiques traditionnelles, chants royaux et instruments des royaumes bamiléké.",
      isNew: true,
      isTrending: true,
      views: 678,
      downloads: 345
    },
    {
      id: 6,
      title: "Guide Pratique de la Prière Contemplative",
      author: "Père Joseph Nkomo",
      category: "theology",
      type: "ebook",
      acquisitionDate: "2024-01-01",
      publishYear: 2024,
      pages: 220,
      isbn: "978-2-234567-89-1",
      publisher: "Éditions Spirituelles",
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=250&fit=crop",
      description: "Manuel pratique pour développer une vie de prière contemplative selon la tradition monastique africaine.",
      isNew: false,
      isTrending: false,
      views: 398,
      downloads: 156
    }
  ];

  const getTypeIcon = (type) => {
    switch(type) {
      case 'ebook': return FaFilePdf;
      case 'thesis': return FaGraduationCap;
      case 'multimedia': return FaBookOpen;
      default: return FaBook;
    }
  };

  const getTypeLabel = (type) => {
    switch(type) {
      case 'ebook': return 'E-book';
      case 'thesis': return 'Thèse';
      case 'multimedia': return 'Multimédia';
      default: return 'Livre';
    }
  };

  const getCategoryLabel = (category) => {
    const cat = categories.find(c => c.value === category);
    return cat ? cat.label : category;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getDaysAgo = (dateString) => {
    const today = new Date();
    const acquisitionDate = new Date(dateString);
    const diffTime = Math.abs(today - acquisitionDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Hier';
    if (diffDays < 7) return `Il y a ${diffDays} jours`;
    if (diffDays < 30) return `Il y a ${Math.floor(diffDays / 7)} semaines`;
    return `Il y a ${Math.floor(diffDays / 30)} mois`;
  };

  const filteredNouveautes = nouveautes.filter(item => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory || item.type === selectedCategory;
  });

  return (
    <div className="nouveautes-container">
      {/* Hero Section */}
      <section className="nouveautes-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="hero-content">
                <div className="hero-badge">
                  <FaBell size={12} className="me-2" />
                  Nouvelles Acquisitions
                </div>
                <h1 className="hero-title">
                  <span className="text-warning">Nouveautés</span> & Acquisitions
                </h1>
                <p className="hero-subtitle">
                  Découvrez les derniers ouvrages, e-books et ressources ajoutés 
                  à notre collection. Restez à jour avec les publications les plus récentes.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon">
                    <FaBell className="text-success" />
                  </div>
                  <div className="stat-info">
                    <div className="stat-number">45</div>
                    <div className="stat-label">Ce mois</div>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">
                    <FaStar className="text-warning" />
                  </div>
                  <div className="stat-info">
                    <div className="stat-number">12</div>
                    <div className="stat-label">Tendances</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="filters-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3">
              <div className="filter-card">
                <h5>Période</h5>
                <div className="period-filters">
                  {periods.map(period => (
                    <button
                      key={period.value}
                      className={`period-btn ${selectedPeriod === period.value ? 'active' : ''}`}
                      onClick={() => setSelectedPeriod(period.value)}
                    >
                      <span className="period-label">{period.label}</span>
                      <span className="period-count">{period.count}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-9">
              <div className="controls-row">
                <div className="category-filters">
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
                <div className="sort-controls">
                  <select
                    className="form-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    {sortOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        Trier par {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nouveautés Grid */}
      <section className="nouveautes-grid-section">
        <div className="container">
          <div className="section-header">
            <h3>
              Dernières acquisitions 
              <span className="count-badge">{filteredNouveautes.length}</span>
            </h3>
          </div>

          <div className="row g-4">
            {filteredNouveautes.map((item) => {
              const TypeIcon = getTypeIcon(item.type);
              return (
                <div key={item.id} className="col-lg-4 col-md-6">
                  <div className="nouveaute-card">
                    <div className="card-header">
                      <div className="acquisition-date">
                        <FaClock size={12} />
                        {getDaysAgo(item.acquisitionDate)}
                      </div>
                      <div className="card-badges">
                        {item.isNew && (
                          <span className="badge badge-new">
                            <FaBell size={10} />
                            Nouveau
                          </span>
                        )}
                        {item.isTrending && (
                          <span className="badge badge-trending">
                            <FaStar size={10} />
                            Tendance
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="book-cover">
                      <img src={item.cover} alt={item.title} />
                      <div className="book-overlay">
                        <Link to={`/ebook/${item.id}`} className="btn btn-sm btn-light">
                          <FaEye size={14} />
                        </Link>
                        <button className="btn btn-sm btn-warning">
                          <FaDownload size={14} />
                        </button>
                      </div>
                      <div className="type-badge">
                        <TypeIcon size={10} />
                        {getTypeLabel(item.type)}
                      </div>
                    </div>
                    
                    <div className="card-content">
                      <div className="book-meta">
                        <span className="category-tag">
                          {getCategoryLabel(item.category)}
                        </span>
                        <span className="publish-year">{item.publishYear}</span>
                      </div>
                      
                      <h6 className="book-title">{item.title}</h6>
                      <p className="book-author">par {item.author}</p>
                      
                      <p className="book-description">{item.description}</p>
                      
                      <div className="book-details">
                        {item.pages && (
                          <div className="detail-item">
                            <span>Pages:</span> {item.pages}
                          </div>
                        )}
                        <div className="detail-item">
                          <span>Éditeur:</span> {item.publisher}
                        </div>
                        <div className="detail-item">
                          <span>Acquis le:</span> {formatDate(item.acquisitionDate)}
                        </div>
                      </div>
                      
                      <div className="engagement-stats">
                        <div className="stat-item">
                          <FaEye size={12} />
                          {item.views} vues
                        </div>
                        <div className="stat-item">
                          <FaDownload size={12} />
                          {item.downloads} téléch.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style jsx>{`
        .nouveautes-container {
          background: var(--bg-primary);
          min-height: 100vh;
        }

        .container {
          max-width: 1400px;
        }

        /* Hero Section */
        .nouveautes-hero {
          padding: 3rem 0;
          background: linear-gradient(135deg, 
            rgba(34, 197, 94, 0.1) 0%, 
            rgba(59, 130, 246, 0.05) 100%);
          border-radius: 0 0 20px 20px;
          margin-bottom: 2rem;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          color: #22c55e;
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
          margin-bottom: 1.5rem;
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
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .stat-icon {
          font-size: 1.5rem;
        }

        .stat-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        /* Filters Section */
        .filters-section {
          padding: 2rem 0;
        }

        .filter-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
        }

        .filter-card h5 {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .period-filters {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .period-btn {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 0.75rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          text-align: left;
        }

        .period-btn:hover,
        .period-btn.active {
          background: rgba(34, 197, 94, 0.1);
          border-color: rgba(34, 197, 94, 0.3);
          color: #22c55e;
        }

        .period-count {
          font-size: 0.75rem;
          opacity: 0.7;
          background: rgba(255, 255, 255, 0.1);
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
        }

        .controls-row {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .category-filters,
        .sort-controls {
          flex: 1;
        }

        .form-select {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          padding: 0.75rem;
          font-size: 0.875rem;
          color: var(--text-primary);
          transition: all 0.3s ease;
        }

        .form-select:focus {
          background: rgba(255, 255, 255, 0.12);
          border-color: #22c55e;
          box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
          outline: none;
          color: var(--text-primary);
        }

        /* Nouveautés Grid */
        .nouveautes-grid-section {
          padding: 2rem 0 4rem;
        }

        .section-header {
          margin-bottom: 2rem;
        }

        .section-header h3 {
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .count-badge {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.875rem;
        }

        .nouveaute-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .nouveaute-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
          border-color: rgba(34, 197, 94, 0.3);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1rem 0;
        }

        .acquisition-date {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-tertiary);
          font-size: 0.75rem;
        }

        .card-badges {
          display: flex;
          gap: 0.5rem;
        }

        .badge {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 600;
        }

        .badge-new {
          background: rgba(34, 197, 94, 0.9);
          color: var(--text-primary);
        }

        .badge-trending {
          background: rgba(245, 158, 11, 0.9);
          color: var(--text-primary);
        }

        .book-cover {
          position: relative;
          height: 180px;
          overflow: hidden;
          margin: 0 1rem;
          border-radius: 8px;
        }

        .book-cover img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .book-overlay {
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

        .nouveaute-card:hover .book-overlay {
          opacity: 1;
        }

        .type-badge {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          background: rgba(59, 130, 246, 0.9);
          color: var(--text-primary);
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .card-content {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .book-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .category-tag {
          background: rgba(241, 196, 14, 0.1);
          color: var(--warning);
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 500;
        }

        .publish-year {
          color: var(--text-tertiary);
          font-size: 0.8rem;
        }

        .book-title {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .book-author {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .book-description {
          color: var(--text-secondary);
          font-size: 0.8rem;
          line-height: 1.4;
          margin-bottom: 1rem;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .book-details {
          margin-bottom: 1rem;
        }

        .detail-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.25rem;
          font-size: 0.75rem;
        }

        .detail-item span:first-child {
          color: var(--text-tertiary);
          font-weight: 500;
        }

        .detail-item span:last-child,
        .detail-item:not(:has(span)) {
          color: var(--text-secondary);
        }

        .engagement-stats {
          display: flex;
          justify-content: space-between;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .engagement-stats .stat-item {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--text-tertiary);
          font-size: 0.75rem;
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
          
          .controls-row {
            flex-direction: column;
          }
          
          .book-cover {
            height: 160px;
          }
          
          .card-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CatalogueNouveautes;