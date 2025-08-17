import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaChurch, 
  FaBook, 
  FaSearch,
  FaDownload,
  FaEye,
  FaStar,
  FaFilePdf,
  FaBookOpen,
  FaUser,
  FaCalendar,
  FaTags,
  FaFilter,
  FaHeart,
  FaBible,
  FaGraduationCap
} from 'react-icons/fa';

const CatalogueTheologie = () => {
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [selectedAuthor, setSelectedAuthor] = useState('all');
  const [sortBy, setSortBy] = useState('relevance');

  const subcategories = [
    { value: 'all', label: 'Toute la théologie', count: 2450 },
    { value: 'bible', label: 'Études bibliques', count: 680 },
    { value: 'prayer', label: 'Prière & Spiritualité', count: 520 },
    { value: 'doctrine', label: 'Doctrine chrétienne', count: 440 },
    { value: 'history', label: 'Histoire de l\'Église', count: 380 },
    { value: 'pastoral', label: 'Théologie pastorale', count: 290 },
    { value: 'missions', label: 'Missions & Évangélisation', count: 140 }
  ];

  const featuredAuthors = [
    { value: 'all', label: 'Tous les auteurs' },
    { value: 'ztf', label: 'Zacharias Tanee Fomum' },
    { value: 'african', label: 'Théologiens africains' },
    { value: 'classical', label: 'Auteurs classiques' },
    { value: 'contemporary', label: 'Auteurs contemporains' }
  ];

  const sortOptions = [
    { value: 'relevance', label: 'Pertinence' },
    { value: 'title', label: 'Titre A-Z' },
    { value: 'author', label: 'Auteur A-Z' },
    { value: 'year', label: 'Année de publication' },
    { value: 'popularity', label: 'Popularité' }
  ];

  const theologyBooks = [
    {
      id: 1,
      title: "L'Art de la Prière - Edition Complète",
      author: "Zacharias Tanee Fomum",
      subcategory: "prayer",
      type: "book",
      year: 2019,
      pages: 420,
      isbn: "978-2-123456-78-9",
      publisher: "Éditions ZTF",
      language: "Français",
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=250&fit=crop",
      description: "Guide spirituel complet pour développer une vie de prière profonde et transformatrice selon l'enseignement biblique.",
      subjects: ["Prière", "Spiritualité", "Vie chrétienne"],
      rating: 4.9,
      reviews: 267,
      downloads: 3280,
      featured: true
    },
    {
      id: 2,
      title: "Fondements de la Foi Chrétienne",
      author: "Zacharias Tanee Fomum",
      subcategory: "doctrine",
      type: "ebook",
      year: 2020,
      pages: 380,
      isbn: "978-2-987654-32-1",
      publisher: "Éditions ZTF",
      language: "Français",
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=250&fit=crop",
      description: "Exposé systématique des doctrines fondamentales du christianisme avec une perspective africaine.",
      subjects: ["Doctrine", "Théologie systématique", "Foi"],
      rating: 4.8,
      reviews: 198,
      downloads: 2456,
      featured: false
    },
    {
      id: 3,
      title: "Exégèse de l'Épître aux Romains",
      author: "Dr. Pierre Mbarga",
      subcategory: "bible",
      type: "book",
      year: 2022,
      pages: 520,
      isbn: "978-2-456789-01-2",
      publisher: "Faculté de Théologie de Yaoundé",
      language: "Français",
      cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&h=250&fit=crop",
      description: "Commentaire exégétique approfondi de l'épître aux Romains dans son contexte historique et culturel.",
      subjects: ["Exégèse", "Nouveau Testament", "Paul"],
      rating: 4.7,
      reviews: 145,
      downloads: 1890,
      featured: false
    },
    {
      id: 4,
      title: "Histoire du Christianisme au Cameroun",
      author: "Prof. Marie Essomba",
      subcategory: "history",
      type: "book",
      year: 2021,
      pages: 450,
      isbn: "978-2-789123-45-6",
      publisher: "Presses Universitaires du Cameroun",
      language: "Français",
      cover: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=200&h=250&fit=crop",
      description: "Chronique de l'implantation et du développement du christianisme au Cameroun depuis les premiers missionnaires.",
      subjects: ["Histoire", "Missions", "Cameroun"],
      rating: 4.6,
      reviews: 123,
      downloads: 1567,
      featured: true
    },
    {
      id: 5,
      title: "Théologie Pastorale Africaine",
      author: "Pasteur Joseph Nkomo",
      subcategory: "pastoral",
      type: "ebook",
      year: 2023,
      pages: 320,
      isbn: "978-2-234567-89-1",
      publisher: "Institut Théologique Africain",
      language: "Français",
      cover: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=200&h=250&fit=crop",
      description: "Approche contextuelle de la théologie pastorale adaptée aux réalités africaines contemporaines.",
      subjects: ["Pastoral", "Contextualisation", "Afrique"],
      rating: 4.5,
      reviews: 89,
      downloads: 1234,
      featured: false
    },
    {
      id: 6,
      title: "L'Évangélisation Transculturelle",
      author: "Dr. François Ateba",
      subcategory: "missions",
      type: "book",
      year: 2022,
      pages: 280,
      isbn: "978-2-345678-90-2",
      publisher: "Centre Missionnaire International",
      language: "Français",
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=250&fit=crop",
      description: "Stratégies et principes pour une évangélisation efficace dans un contexte multiculturel.",
      subjects: ["Missions", "Évangélisation", "Interculturalité"],
      rating: 4.4,
      reviews: 76,
      downloads: 987,
      featured: false
    }
  ];

  const getSubcategoryIcon = (subcategory) => {
    switch(subcategory) {
      case 'bible': return FaBible;
      case 'prayer': return FaHeart;
      case 'doctrine': return FaTags;
      case 'history': return FaBook;
      case 'pastoral': return FaHeart;
      case 'missions': return FaUser;
      default: return FaChurch;
    }
  };

  const getTypeIcon = (type) => {
    return type === 'ebook' ? FaFilePdf : FaBook;
  };

  const getTypeLabel = (type) => {
    return type === 'ebook' ? 'E-book' : 'Livre';
  };

  const filteredBooks = theologyBooks.filter(book => {
    if (selectedSubcategory === 'all') return true;
    return book.subcategory === selectedSubcategory;
  });

  const featuredBooks = theologyBooks.filter(book => book.featured);

  return (
    <div className="theologie-container">
      {/* Hero Section */}
      <section className="theologie-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="hero-content">
                <div className="hero-badge">
                  <FaChurch size={12} className="me-2" />
                  Collection Théologie
                </div>
                <h1 className="hero-title">
                  <span className="text-warning">Théologie</span> & Spiritualité
                </h1>
                <p className="hero-subtitle">
                  Explorez notre riche collection d'ouvrages théologiques, d'études bibliques 
                  et de ressources spirituelles. Une bibliothèque complète pour la formation 
                  chrétienne et la croissance spirituelle.
                </p>
                <div className="hero-actions">
                  <Link to="/catalogue/avanced" className="btn btn-warning btn-lg">
                    <FaSearch size={16} className="me-2" />
                    Recherche avancée
                  </Link>
                  <Link to="/catalogue/ztf" className="btn btn-outline-light btn-lg">
                    <FaUser size={16} className="me-2" />
                    Collection Z.T. Fomum
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="theology-stats">
                <div className="stat-card">
                  <FaBook className="stat-icon text-primary" />
                  <div>
                    <div className="stat-number">2,450</div>
                    <div className="stat-label">Ouvrages</div>
                  </div>
                </div>
                <div className="stat-card">
                  <FaUser className="stat-icon text-success" />
                  <div>
                    <div className="stat-number">180+</div>
                    <div className="stat-label">Auteurs</div>
                  </div>
                </div>
                <div className="stat-card">
                  <FaChurch className="stat-icon text-warning" />
                  <div>
                    <div className="stat-number">7</div>
                    <div className="stat-label">Domaines</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h3>Ouvrages à la Une</h3>
            <p>Sélection d'ouvrages fondamentaux en théologie</p>
          </div>
          
          <div className="row g-4">
            {featuredBooks.map((book) => {
              const TypeIcon = getTypeIcon(book.type);
              return (
                <div key={book.id} className="col-lg-6">
                  <div className="featured-book-card">
                    <div className="book-cover">
                      <img src={book.cover} alt={book.title} />
                      <div className="book-overlay">
                        <Link to={`/ebook/${book.id}`} className="btn btn-sm btn-light">
                          <FaEye size={14} />
                        </Link>
                        <button className="btn btn-sm btn-warning">
                          <FaDownload size={14} />
                        </button>
                      </div>
                      <div className="type-badge">
                        <TypeIcon size={10} />
                        {getTypeLabel(book.type)}
                      </div>
                    </div>
                    
                    <div className="book-info">
                      <div className="book-meta">
                        <div className="rating-display">
                          <FaStar className="rating-star" />
                          <span>{book.rating}</span>
                          <span className="rating-count">({book.reviews})</span>
                        </div>
                        <span className="download-count">
                          <FaDownload size={12} />
                          {book.downloads}
                        </span>
                      </div>
                      
                      <h5 className="book-title">{book.title}</h5>
                      <p className="book-author">par {book.author}</p>
                      
                      <p className="book-description">{book.description}</p>
                      
                      <div className="book-subjects">
                        {book.subjects.map((subject, index) => (
                          <span key={index} className="subject-tag">
                            {subject}
                          </span>
                        ))}
                      </div>
                      
                      <div className="book-details">
                        <span>{book.year}</span> • 
                        <span>{book.pages} pages</span> • 
                        <span>{book.publisher}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="main-content-section">
        <div className="container">
          <div className="row g-4">
            
            {/* Sidebar - Subcategories */}
            <div className="col-lg-3">
              <div className="subcategories-card">
                <div className="card-header">
                  <h5>
                    <FaFilter size={16} className="me-2" />
                    Domaines théologiques
                  </h5>
                </div>
                <div className="subcategories-list">
                  {subcategories.map((subcat) => {
                    const Icon = getSubcategoryIcon(subcat.value);
                    return (
                      <button
                        key={subcat.value}
                        onClick={() => setSelectedSubcategory(subcat.value)}
                        className={`subcategory-item ${selectedSubcategory === subcat.value ? 'active' : ''}`}
                      >
                        <div className="subcategory-content">
                          <Icon size={14} className="subcategory-icon" />
                          <span className="subcategory-label">{subcat.label}</span>
                        </div>
                        <span className="subcategory-count">{subcat.count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Author Filter */}
              <div className="filter-card">
                <h6>Auteurs</h6>
                <select
                  className="form-select"
                  value={selectedAuthor}
                  onChange={(e) => setSelectedAuthor(e.target.value)}
                >
                  {featuredAuthors.map(author => (
                    <option key={author.value} value={author.value}>
                      {author.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-lg-9">
              <div className="content-header">
                <div className="results-info">
                  <h4>
                    {subcategories.find(s => s.value === selectedSubcategory)?.label || 'Théologie'}
                  </h4>
                  <span className="results-count">
                    {filteredBooks.length} ouvrage{filteredBooks.length > 1 ? 's' : ''}
                  </span>
                </div>
                
                <div className="sort-controls">
                  <select
                    className="form-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    {sortOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="books-grid">
                {filteredBooks.map((book) => {
                  const TypeIcon = getTypeIcon(book.type);
                  const SubcatIcon = getSubcategoryIcon(book.subcategory);
                  
                  return (
                    <div key={book.id} className="theology-book-card">
                      <div className="book-cover">
                        <img src={book.cover} alt={book.title} />
                        <div className="book-overlay">
                          <Link to={`/ebook/${book.id}`} className="btn btn-sm btn-light">
                            <FaEye size={14} />
                          </Link>
                          <button className="btn btn-sm btn-warning">
                            <FaDownload size={14} />
                          </button>
                        </div>
                        <div className="type-badge">
                          <TypeIcon size={10} />
                          {getTypeLabel(book.type)}
                        </div>
                      </div>
                      
                      <div className="book-info">
                        <div className="book-category">
                          <SubcatIcon size={12} />
                          <span>{subcategories.find(s => s.value === book.subcategory)?.label}</span>
                        </div>
                        
                        <h6 className="book-title">{book.title}</h6>
                        <p className="book-author">par {book.author}</p>
                        
                        <div className="rating-section">
                          <div className="rating-display">
                            <FaStar className="rating-star" />
                            <span>{book.rating}</span>
                            <span className="rating-count">({book.reviews})</span>
                          </div>
                          <span className="download-count">
                            <FaDownload size={10} />
                            {book.downloads}
                          </span>
                        </div>
                        
                        <p className="book-description">{book.description}</p>
                        
                        <div className="book-subjects">
                          {book.subjects.slice(0, 2).map((subject, index) => (
                            <span key={index} className="subject-tag">
                              {subject}
                            </span>
                          ))}
                        </div>
                        
                        <div className="book-details">
                          <span>{book.year}</span> • <span>{book.pages}p</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .theologie-container {
          background: var(--bg-primary);
          min-height: 100vh;
        }

        .container {
          max-width: 1400px;
        }

        /* Hero Section */
        .theologie-hero {
          padding: 3rem 0;
          background: linear-gradient(135deg, 
            rgba(139, 69, 19, 0.1) 0%, 
            rgba(101, 67, 33, 0.05) 100%);
          border-radius: 0 0 20px 20px;
          margin-bottom: 2rem;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(139, 69, 19, 0.1);
          border: 1px solid rgba(139, 69, 19, 0.3);
          color: #8b4513;
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

        .theology-stats {
          display: grid;
          grid-template-columns: 1fr;
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

        /* Featured Section */
        .featured-section {
          padding: 3rem 0;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 20px;
          margin-bottom: 2rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-header h3 {
          color: var(--text-primary);
          font-size: 1.75rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .section-header p {
          color: var(--text-secondary);
          font-size: 1rem;
        }

        .featured-book-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
          height: 100%;
          display: grid;
          grid-template-columns: 150px 1fr;
          gap: 1.5rem;
          padding: 1.5rem;
        }

        .featured-book-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
          border-color: rgba(139, 69, 19, 0.3);
        }

        /* Main Content */
        .main-content-section {
          padding: 2rem 0 4rem;
        }

        .subcategories-card,
        .filter-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          margin-bottom: 1.5rem;
        }

        .subcategories-card .card-header {
          padding: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .subcategories-card .card-header h5 {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          margin: 0;
          display: flex;
          align-items: center;
        }

        .subcategories-list {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .subcategory-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 0.75rem;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          text-align: left;
        }

        .subcategory-item:hover,
        .subcategory-item.active {
          background: rgba(139, 69, 19, 0.1);
          border-color: rgba(139, 69, 19, 0.3);
          color: #8b4513;
        }

        .subcategory-content {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .subcategory-icon {
          color: currentColor;
        }

        .subcategory-label {
          font-size: 0.875rem;
          font-weight: 500;
        }

        .subcategory-count {
          font-size: 0.75rem;
          opacity: 0.7;
          background: rgba(255, 255, 255, 0.1);
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
        }

        .filter-card {
          padding: 1.5rem;
        }

        .filter-card h6 {
          color: var(--text-primary);
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
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
          border-color: #8b4513;
          box-shadow: 0 0 0 3px rgba(139, 69, 19, 0.1);
          outline: none;
          color: var(--text-primary);
        }

        .content-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .content-header h4 {
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0;
        }

        .results-count {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .books-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .theology-book-card {
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

        .theology-book-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
          border-color: rgba(139, 69, 19, 0.3);
        }

        .book-cover {
          position: relative;
          height: 160px;
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

        .theology-book-card:hover .book-overlay,
        .featured-book-card:hover .book-overlay {
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

        .book-info {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .book-category {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #8b4513;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .book-title {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          margin: 0;
          line-height: 1.3;
        }

        .book-author {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin: 0;
        }

        .rating-section,
        .book-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .rating-display {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.8rem;
        }

        .rating-star {
          color: #f59e0b;
        }

        .rating-count {
          color: var(--text-tertiary);
          font-size: 0.75rem;
        }

        .download-count {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--text-tertiary);
          font-size: 0.75rem;
        }

        .book-description {
          color: var(--text-secondary);
          font-size: 0.8rem;
          line-height: 1.4;
          margin: 0;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .book-subjects {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .subject-tag {
          background: rgba(139, 69, 19, 0.1);
          color: #8b4513;
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 500;
        }

        .book-details {
          font-size: 0.75rem;
          color: var(--text-tertiary);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .hero-actions {
            flex-direction: column;
          }
          
          .theology-stats {
            margin-top: 2rem;
          }
          
          .featured-book-card {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .content-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
          
          .books-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default CatalogueTheologie;