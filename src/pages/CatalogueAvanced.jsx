import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaSearch, 
  FaBook, 
  FaFilter,
  FaCalendar,
  FaUser,
  FaTags,
  FaLanguage,
  FaBookOpen,
  FaFilePdf,
  FaGraduationCap,
  FaUndo,
  FaDownload,
  FaEye,
  FaStar,
  FaChevronDown
} from 'react-icons/fa';

const CatalogueAdvanced = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    title: '',
    author: '',
    subject: '',
    isbn: '',
    publisher: '',
    yearFrom: '',
    yearTo: '',
    language: 'all',
    documentType: 'all',
    availability: 'all',
    collection: 'all'
  });

  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const documentTypes = [
    { value: 'all', label: 'Tous types' },
    { value: 'book', label: 'Livres physiques' },
    { value: 'ebook', label: 'E-books' },
    { value: 'thesis', label: 'Thèses & Mémoires' },
    { value: 'manuscript', label: 'Manuscrits' },
    { value: 'audiobook', label: 'Livres audio' },
    { value: 'periodical', label: 'Périodiques' }
  ];

  const languages = [
    { value: 'all', label: 'Toutes langues' },
    { value: 'fr', label: 'Français' },
    { value: 'en', label: 'Anglais' },
    { value: 'de', label: 'Allemand' },
    { value: 'es', label: 'Espagnol' },
    { value: 'local', label: 'Langues locales' }
  ];

  const collections = [
    { value: 'all', label: 'Toutes collections' },
    { value: 'ztf', label: 'Collection ZTF' },
    { value: 'theology', label: 'Théologie & Spiritualité' },
    { value: 'history', label: 'Histoire du Cameroun' },
    { value: 'literature', label: 'Littérature Africaine' },
    { value: 'philosophy', label: 'Philosophie' },
    { value: 'sciences', label: 'Sciences' },
    { value: 'rare', label: 'Fonds ancien' }
  ];

  const availabilityOptions = [
    { value: 'all', label: 'Tout' },
    { value: 'available', label: 'Disponible' },
    { value: 'borrowed', label: 'Emprunté' },
    { value: 'reserved', label: 'Réservé' },
    { value: 'digital', label: 'Accès numérique' }
  ];

  const mockResults = [
    {
      id: 1,
      title: "L'Art de la Prière - Édition Complète",
      author: "Zacharias Tanee Fomum",
      year: 2019,
      type: "book",
      language: "fr",
      collection: "ztf",
      availability: "available",
      isbn: "978-2-123456-78-9",
      publisher: "Éditions ZTF",
      pages: 420,
      subject: "Théologie, Spiritualité, Prière",
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=250&fit=crop",
      description: "Guide complet pour développer une vie de prière profonde et transformatrice selon l'enseignement de Z.T. Fomum."
    },
    {
      id: 2,
      title: "Histoire des Royaumes du Cameroun Précolonial",
      author: "Dr. Jean-Baptiste Sipa",
      year: 2021,
      type: "ebook",
      language: "fr",
      collection: "history",
      availability: "digital",
      isbn: "978-2-987654-32-1",
      publisher: "Presses Universitaires du Cameroun",
      pages: 650,
      subject: "Histoire, Cameroun, Royaumes",
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=250&fit=crop",
      description: "Étude approfondie des structures politiques et sociales des royaumes camerounais avant la colonisation."
    },
    {
      id: 3,
      title: "Épistémologie de la Philosophie Africaine",
      author: "Prof. Emmanuel Ngwé",
      year: 2020,
      type: "thesis",
      language: "fr",
      collection: "philosophy",
      availability: "available",
      isbn: "978-2-456789-01-2",
      publisher: "Université de Yaoundé I",
      pages: 380,
      subject: "Philosophie, Épistémologie, Afrique",
      cover: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=200&h=250&fit=crop",
      description: "Thèse de doctorat sur les fondements épistémologiques de la pensée philosophique africaine contemporaine."
    }
  ];

  const handleInputChange = (field, value) => {
    setSearchCriteria(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSearch = () => {
    setIsSearching(true);
    // Simulation d'une recherche
    setTimeout(() => {
      setSearchResults(mockResults);
      setIsSearching(false);
    }, 1000);
  };

  const resetSearch = () => {
    setSearchCriteria({
      title: '',
      author: '',
      subject: '',
      isbn: '',
      publisher: '',
      yearFrom: '',
      yearTo: '',
      language: 'all',
      documentType: 'all',
      availability: 'all',
      collection: 'all'
    });
    setSearchResults([]);
  };

  const getTypeIcon = (type) => {
    switch(type) {
      case 'ebook': return FaFilePdf;
      case 'thesis': return FaGraduationCap;
      default: return FaBook;
    }
  };

  const getAvailabilityColor = (availability) => {
    switch(availability) {
      case 'available': return 'success';
      case 'digital': return 'info';
      case 'borrowed': return 'warning';
      case 'reserved': return 'danger';
      default: return 'secondary';
    }
  };

  const getAvailabilityLabel = (availability) => {
    switch(availability) {
      case 'available': return 'Disponible';
      case 'digital': return 'Numérique';
      case 'borrowed': return 'Emprunté';
      case 'reserved': return 'Réservé';
      default: return 'Inconnu';
    }
  };

  return (
    <div className="advanced-search-container">
      {/* Hero Section */}
      <section className="search-hero">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="hero-content text-center">
                <div className="hero-badge">
                  <FaSearch size={12} className="me-2" />
                  Recherche Avancée
                </div>
                <h1 className="hero-title">
                  Recherche <span className="text-warning">Avancée</span>
                </h1>
                <p className="hero-subtitle">
                  Utilisez nos outils de recherche spécialisés pour trouver exactement 
                  les documents dont vous avez besoin dans notre collection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Form */}
      <section className="search-form-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="search-form-card">
                <div className="form-header">
                  <h3>Critères de recherche</h3>
                  <p>Remplissez un ou plusieurs champs pour affiner votre recherche</p>
                </div>

                <form className="advanced-search-form">
                  {/* Basic Search Fields */}
                  <div className="row g-3 mb-4">
                    <div className="col-md-6">
                      <label className="form-label">
                        <FaBook size={12} className="me-2" />
                        Titre
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Rechercher par titre..."
                        value={searchCriteria.title}
                        onChange={(e) => handleInputChange('title', e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">
                        <FaUser size={12} className="me-2" />
                        Auteur
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nom de l'auteur..."
                        value={searchCriteria.author}
                        onChange={(e) => handleInputChange('author', e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">
                        <FaTags size={12} className="me-2" />
                        Sujet / Mots-clés
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Théologie, Histoire, etc."
                        value={searchCriteria.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">ISBN</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="978-..."
                        value={searchCriteria.isbn}
                        onChange={(e) => handleInputChange('isbn', e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Advanced Filters Toggle */}
                  <div className="filters-toggle">
                    <button
                      type="button"
                      className="btn btn-outline-warning"
                      onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                    >
                      <FaFilter size={14} className="me-2" />
                      Filtres avancés
                      <FaChevronDown 
                        size={12} 
                        className={`ms-2 ${showAdvancedFilters ? 'rotate' : ''}`} 
                      />
                    </button>
                  </div>

                  {/* Advanced Filters */}
                  {showAdvancedFilters && (
                    <div className="advanced-filters">
                      <div className="row g-3 mb-4">
                        <div className="col-md-6">
                          <label className="form-label">Éditeur</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Nom de l'éditeur..."
                            value={searchCriteria.publisher}
                            onChange={(e) => handleInputChange('publisher', e.target.value)}
                          />
                        </div>
                        <div className="col-md-3">
                          <label className="form-label">
                            <FaCalendar size={12} className="me-2" />
                            Année (de)
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="1990"
                            value={searchCriteria.yearFrom}
                            onChange={(e) => handleInputChange('yearFrom', e.target.value)}
                          />
                        </div>
                        <div className="col-md-3">
                          <label className="form-label">Année (à)</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="2024"
                            value={searchCriteria.yearTo}
                            onChange={(e) => handleInputChange('yearTo', e.target.value)}
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">
                            <FaLanguage size={12} className="me-2" />
                            Langue
                          </label>
                          <select
                            className="form-select"
                            value={searchCriteria.language}
                            onChange={(e) => handleInputChange('language', e.target.value)}
                          >
                            {languages.map(lang => (
                              <option key={lang.value} value={lang.value}>
                                {lang.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Type de document</label>
                          <select
                            className="form-select"
                            value={searchCriteria.documentType}
                            onChange={(e) => handleInputChange('documentType', e.target.value)}
                          >
                            {documentTypes.map(type => (
                              <option key={type.value} value={type.value}>
                                {type.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Collection</label>
                          <select
                            className="form-select"
                            value={searchCriteria.collection}
                            onChange={(e) => handleInputChange('collection', e.target.value)}
                          >
                            {collections.map(coll => (
                              <option key={coll.value} value={coll.value}>
                                {coll.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Disponibilité</label>
                          <select
                            className="form-select"
                            value={searchCriteria.availability}
                            onChange={(e) => handleInputChange('availability', e.target.value)}
                          >
                            {availabilityOptions.map(option => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="form-actions">
                    <button
                      type="button"
                      className="btn btn-warning btn-lg"
                      onClick={handleSearch}
                      disabled={isSearching}
                    >
                      <FaSearch size={14} className="me-2" />
                      {isSearching ? 'Recherche...' : 'Lancer la recherche'}
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={resetSearch}
                    >
                      <FaUndo size={14} className="me-2" />
                      Réinitialiser
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <section className="results-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="results-header">
                  <h3>Résultats de recherche</h3>
                  <span className="results-count">
                    {searchResults.length} document{searchResults.length > 1 ? 's' : ''} trouvé{searchResults.length > 1 ? 's' : ''}
                  </span>
                </div>
              </div>
            </div>

            <div className="row g-4">
              {searchResults.map((result) => {
                const TypeIcon = getTypeIcon(result.type);
                return (
                  <div key={result.id} className="col-lg-4">
                    <div className="result-card">
                      <div className="book-cover">
                        <img src={result.cover} alt={result.title} />
                        <div className="book-overlay">
                          <Link to={`/ebook/${result.id}`} className="btn btn-sm btn-light">
                            <FaEye size={14} />
                          </Link>
                          <button className="btn btn-sm btn-warning">
                            <FaDownload size={14} />
                          </button>
                        </div>
                        <div className="book-badges">
                          <span className="type-badge">
                            <TypeIcon size={10} />
                            {result.type === 'ebook' ? 'E-book' : 
                             result.type === 'thesis' ? 'Thèse' : 'Livre'}
                          </span>
                          <span className={`availability-badge ${getAvailabilityColor(result.availability)}`}>
                            {getAvailabilityLabel(result.availability)}
                          </span>
                        </div>
                      </div>
                      
                      <div className="book-info">
                        <h6 className="book-title">{result.title}</h6>
                        <p className="book-author">par {result.author}</p>
                        
                        <div className="book-details">
                          <div className="detail-row">
                            <span>Année:</span> <span>{result.year}</span>
                          </div>
                          <div className="detail-row">
                            <span>Éditeur:</span> <span>{result.publisher}</span>
                          </div>
                          <div className="detail-row">
                            <span>Pages:</span> <span>{result.pages}</span>
                          </div>
                          <div className="detail-row">
                            <span>ISBN:</span> <span>{result.isbn}</span>
                          </div>
                        </div>
                        
                        <div className="book-subjects">
                          {result.subject.split(', ').map((subject, index) => (
                            <span key={index} className="subject-tag">
                              {subject}
                            </span>
                          ))}
                        </div>
                        
                        <p className="book-description">{result.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <style jsx>{`
        .advanced-search-container {
          background: var(--bg-primary);
          min-height: 100vh;
          width: 100%;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        .advanced-search-container .container {
          max-width: 1400px !important;
          margin: 0 auto !important;
          padding: 0 1rem !important;
          width: 100% !important;
          box-sizing: border-box !important;
        }

        /* Hero Section */
        .search-hero {
          padding: 3rem 0;
          background: var(--gradient-secondary);
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
          margin-bottom: 1.5rem;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Search Form */
        .search-form-section {
          padding: 2rem 0;
          width: 100%;
          overflow-x: hidden;
        }

        .search-form-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 2rem;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        .form-header {
          text-align: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .form-header h3 {
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .form-header p {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .form-label {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
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

        .form-control:focus,
        .form-select:focus {
          background: rgba(255, 255, 255, 0.12);
          border-color: var(--warning);
          box-shadow: 0 0 0 3px rgba(241, 196, 14, 0.1);
          outline: none;
          color: var(--text-primary);
        }

        .form-control::placeholder {
          color: var(--text-placeholder);
        }

        .filters-toggle {
          text-align: center;
          margin: 2rem 0;
        }

        .filters-toggle .btn {
          transition: all 0.3s ease;
        }

        .filters-toggle .rotate {
          transform: rotate(180deg);
        }

        .advanced-filters {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 1.5rem;
          margin-top: 1rem;
        }

        .form-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
        }

        /* Results Section */
        .results-section {
          padding: 3rem 0;
        }

        .results-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .results-header h3 {
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0;
        }

        .results-count {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .result-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
          height: 100%;
        }

        .result-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .book-cover {
          position: relative;
          height: 200px;
          overflow: hidden;
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

        .result-card:hover .book-overlay {
          opacity: 1;
        }

        .book-badges {
          position: absolute;
          top: 0.5rem;
          left: 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .type-badge {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          background: rgba(59, 130, 246, 0.9);
          color: var(--text-primary);
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 600;
        }

        .availability-badge {
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 600;
        }

        .availability-badge.success {
          background: rgba(34, 197, 94, 0.9);
          color: var(--text-primary);
        }

        .availability-badge.info {
          background: rgba(59, 130, 246, 0.9);
          color: var(--text-primary);
        }

        .availability-badge.warning {
          background: rgba(245, 158, 11, 0.9);
          color: var(--text-primary);
        }

        .availability-badge.danger {
          background: rgba(239, 68, 68, 0.9);
          color: var(--text-primary);
        }

        .book-info {
          padding: 1.5rem;
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

        .book-details {
          margin-bottom: 1rem;
        }

        .detail-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.25rem;
          font-size: 0.8rem;
        }

        .detail-row span:first-child {
          color: var(--text-tertiary);
          font-weight: 500;
        }

        .detail-row span:last-child {
          color: var(--text-secondary);
        }

        .book-subjects {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .subject-tag {
          background: rgba(241, 196, 14, 0.1);
          color: var(--warning);
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 500;
        }

        .book-description {
          color: var(--text-secondary);
          font-size: 0.8rem;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .search-form-card {
            padding: 1.5rem;
          }
          
          .form-actions {
            flex-direction: column;
          }
          
          .results-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
          
          .book-cover {
            height: 180px;
          }
        }
      `}</style>
    </div>
  );
};

export default CatalogueAdvanced;