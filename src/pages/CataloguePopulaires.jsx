import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaHeart, 
  FaBook, 
  FaEye,
  FaDownload,
  FaStar,
  FaFilePdf,
  FaBookOpen,
  FaGraduationCap,
  FaFilter,
  FaChartLine,
  FaTrophy,
  FaThumbsUp,
  FaComment,
  FaShare,
  FaCalendar,
  FaUsers
} from 'react-icons/fa';

const CataloguePopulaires = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('month');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMetric, setSelectedMetric] = useState('views');

  const timeframes = [
    { value: 'week', label: 'Cette semaine' },
    { value: 'month', label: 'Ce mois', active: true },
    { value: 'quarter', label: 'Ce trimestre' },
    { value: 'year', label: 'Cette année' },
    { value: 'alltime', label: 'Tout le temps' }
  ];

  const categories = [
    { value: 'all', label: 'Toutes catégories' },
    { value: 'theology', label: 'Théologie & Spiritualité' },
    { value: 'history', label: 'Histoire' },
    { value: 'literature', label: 'Littérature' },
    { value: 'philosophy', label: 'Philosophie' },
    { value: 'sciences', label: 'Sciences' }
  ];

  const metrics = [
    { value: 'views', label: 'Vues', icon: FaEye },
    { value: 'downloads', label: 'Téléchargements', icon: FaDownload },
    { value: 'ratings', label: 'Notes', icon: FaStar },
    { value: 'bookmarks', label: 'Favoris', icon: FaHeart }
  ];

  const popularBooks = [
    {
      id: 1,
      title: "L'Art de la Prière",
      author: "Zacharias Tanee Fomum",
      category: "theology",
      type: "book",
      publishYear: 2019,
      pages: 320,
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=250&fit=crop",
      description: "Guide spirituel complet pour développer une vie de prière transformatrice.",
      metrics: {
        views: 12450,
        downloads: 3280,
        ratings: 4.9,
        ratingsCount: 267,
        bookmarks: 1890,
        comments: 156,
        shares: 89
      },
      trending: true,
      rank: 1,
      rankChange: 0,
      featured: true
    },
    {
      id: 2,
      title: "Histoire du Cameroun Moderne",
      author: "Jean-Baptiste Sipa",
      category: "history",
      type: "ebook",
      publishYear: 2021,
      pages: 485,
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=250&fit=crop",
      description: "Analyse complète de l'évolution politique et sociale du Cameroun contemporain.",
      metrics: {
        views: 9820,
        downloads: 2156,
        ratings: 4.7,
        ratingsCount: 198,
        bookmarks: 1245,
        comments: 87,
        shares: 124
      },
      trending: false,
      rank: 2,
      rankChange: 1,
      featured: false
    },
    {
      id: 3,
      title: "Contes et Légendes du Cameroun",
      author: "Marie Atangana",
      category: "literature",
      type: "book",
      publishYear: 2020,
      pages: 256,
      cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&h=250&fit=crop",
      description: "Collection de récits traditionnels des différentes ethnies camerounaises.",
      metrics: {
        views: 8730,
        downloads: 2890,
        ratings: 4.8,
        ratingsCount: 234,
        bookmarks: 1567,
        comments: 203,
        shares: 167
      },
      trending: true,
      rank: 3,
      rankChange: -1,
      featured: false
    },
    {
      id: 4,
      title: "Philosophie Africaine Contemporaine",
      author: "Prof. Emmanuel Ngwé",
      category: "philosophy",
      type: "thesis",
      publishYear: 2021,
      pages: 420,
      cover: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=200&h=250&fit=crop",
      description: "Exploration des courants philosophiques africains modernes.",
      metrics: {
        views: 7560,
        downloads: 1780,
        ratings: 4.6,
        ratingsCount: 145,
        bookmarks: 980,
        comments: 92,
        shares: 65
      },
      trending: false,
      rank: 4,
      rankChange: 2,
      featured: false
    },
    {
      id: 5,
      title: "Développement Durable en Afrique Centrale",
      author: "Dr. Paul Mbarga",
      category: "sciences",
      type: "ebook",
      publishYear: 2022,
      pages: 390,
      cover: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=200&h=250&fit=crop",
      description: "Stratégies écologiques pour le développement durable en Afrique Centrale.",
      metrics: {
        views: 6890,
        downloads: 1456,
        ratings: 4.5,
        ratingsCount: 123,
        bookmarks: 789,
        comments: 67,
        shares: 78
      },
      trending: true,
      rank: 5,
      rankChange: 0,
      featured: false
    },
    {
      id: 6,
      title: "Spiritualité et Modernité",
      author: "Père Joseph Nkomo",
      category: "theology",
      type: "book",
      publishYear: 2023,
      pages: 298,
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=250&fit=crop",
      description: "Réflexion sur l'adaptation de la spiritualité chrétienne au monde moderne.",
      metrics: {
        views: 5670,
        downloads: 1234,
        ratings: 4.4,
        ratingsCount: 89,
        bookmarks: 567,
        comments: 45,
        shares: 56
      },
      trending: false,
      rank: 6,
      rankChange: -2,
      featured: false
    }
  ];

  const getTypeIcon = (type) => {
    switch(type) {
      case 'ebook': return FaFilePdf;
      case 'thesis': return FaGraduationCap;
      default: return FaBook;
    }
  };

  const getTypeLabel = (type) => {
    switch(type) {
      case 'ebook': return 'E-book';
      case 'thesis': return 'Thèse';
      default: return 'Livre';
    }
  };

  const getCategoryLabel = (category) => {
    const cat = categories.find(c => c.value === category);
    return cat ? cat.label : category;
  };

  const getRankBadgeClass = (rank) => {
    if (rank === 1) return 'rank-gold';
    if (rank === 2) return 'rank-silver';
    if (rank === 3) return 'rank-bronze';
    return 'rank-default';
  };

  const getRankChangeIcon = (change) => {
    if (change > 0) return '↗';
    if (change < 0) return '↘';
    return '→';
  };

  const getRankChangeClass = (change) => {
    if (change > 0) return 'rank-up';
    if (change < 0) return 'rank-down';
    return 'rank-stable';
  };

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  const filteredBooks = popularBooks.filter(book => {
    if (selectedCategory === 'all') return true;
    return book.category === selectedCategory;
  });

  const topStats = {
    totalViews: popularBooks.reduce((sum, book) => sum + book.metrics.views, 0),
    totalDownloads: popularBooks.reduce((sum, book) => sum + book.metrics.downloads, 0),
    averageRating: (popularBooks.reduce((sum, book) => sum + book.metrics.ratings, 0) / popularBooks.length).toFixed(1),
    trendingCount: popularBooks.filter(book => book.trending).length
  };

  return (
    <div className="populaires-container">
      {/* Hero Section */}
      <section className="populaires-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="hero-content">
                <div className="hero-badge">
                  <FaChartLine size={12} className="me-2" />
                  Sélections Populaires
                </div>
                <h1 className="hero-title">
                  <span className="text-warning">Sélections</span> Populaires
                </h1>
                <p className="hero-subtitle">
                  Découvrez les ouvrages les plus consultés, téléchargés et appréciés 
                  par notre communauté de lecteurs et chercheurs.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="popularity-stats">
                <div className="stat-row">
                  <div className="stat-item">
                    <FaEye className="stat-icon text-primary" />
                    <div>
                      <div className="stat-number">{formatNumber(topStats.totalViews)}</div>
                      <div className="stat-label">Vues totales</div>
                    </div>
                  </div>
                  <div className="stat-item">
                    <FaDownload className="stat-icon text-success" />
                    <div>
                      <div className="stat-number">{formatNumber(topStats.totalDownloads)}</div>
                      <div className="stat-label">Téléchargements</div>
                    </div>
                  </div>
                </div>
                <div className="stat-row">
                  <div className="stat-item">
                    <FaStar className="stat-icon text-warning" />
                    <div>
                      <div className="stat-number">{topStats.averageRating}</div>
                      <div className="stat-label">Note moyenne</div>
                    </div>
                  </div>
                  <div className="stat-item">
                    <FaChartLine className="stat-icon text-danger" />
                    <div>
                      <div className="stat-number">{topStats.trendingCount}</div>
                      <div className="stat-label">En tendance</div>
                    </div>
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
          <div className="filters-card">
            <div className="row g-4 align-items-center">
              <div className="col-lg-4">
                <label className="filter-label">Période</label>
                <div className="timeframe-buttons">
                  {timeframes.map(timeframe => (
                    <button
                      key={timeframe.value}
                      className={`timeframe-btn ${selectedTimeframe === timeframe.value ? 'active' : ''}`}
                      onClick={() => setSelectedTimeframe(timeframe.value)}
                    >
                      {timeframe.label}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="col-lg-4">
                <label className="filter-label">Catégorie</label>
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
              
              <div className="col-lg-4">
                <label className="filter-label">Critère de popularité</label>
                <div className="metric-buttons">
                  {metrics.map(metric => {
                    const Icon = metric.icon;
                    return (
                      <button
                        key={metric.value}
                        className={`metric-btn ${selectedMetric === metric.value ? 'active' : ''}`}
                        onClick={() => setSelectedMetric(metric.value)}
                        title={metric.label}
                      >
                        <Icon size={14} />
                        <span>{metric.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Books Section */}
      <section className="popular-books-section">
        <div className="container">
          <div className="section-header">
            <h3>
              Classement des ouvrages populaires
              <span className="period-indicator">• {timeframes.find(t => t.value === selectedTimeframe)?.label}</span>
            </h3>
          </div>

          <div className="books-grid">
            {filteredBooks.map((book, index) => {
              const TypeIcon = getTypeIcon(book.type);
              const isTopThree = book.rank <= 3;
              
              return (
                <div key={book.id} className={`popular-book-card ${book.featured ? 'featured' : ''} ${isTopThree ? 'top-three' : ''}`}>
                  {/* Rank Badge */}
                  <div className={`rank-badge ${getRankBadgeClass(book.rank)}`}>
                    {book.rank <= 3 && <FaTrophy size={12} />}
                    <span className="rank-number">#{book.rank}</span>
                    <div className={`rank-change ${getRankChangeClass(book.rankChange)}`}>
                      {getRankChangeIcon(book.rankChange)}
                    </div>
                  </div>

                  <div className="card-layout">
                    {/* Book Cover */}
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
                      {book.trending && (
                        <div className="trending-badge">
                          <FaChartLine size={10} />
                          Tendance
                        </div>
                      )}
                    </div>

                    {/* Book Info */}
                    <div className="book-info">
                      <div className="book-meta">
                        <span className="category-tag">
                          {getCategoryLabel(book.category)}
                        </span>
                        <div className="rating-display">
                          <FaStar className="rating-star" />
                          <span>{book.metrics.ratings}</span>
                          <span className="rating-count">({book.metrics.ratingsCount})</span>
                        </div>
                      </div>
                      
                      <h5 className="book-title">{book.title}</h5>
                      <p className="book-author">par {book.author}</p>
                      
                      <p className="book-description">{book.description}</p>
                      
                      {/* Metrics Grid */}
                      <div className="metrics-grid">
                        <div className="metric-item">
                          <FaEye className="metric-icon" />
                          <span className="metric-value">{formatNumber(book.metrics.views)}</span>
                          <span className="metric-label">vues</span>
                        </div>
                        <div className="metric-item">
                          <FaDownload className="metric-icon" />
                          <span className="metric-value">{formatNumber(book.metrics.downloads)}</span>
                          <span className="metric-label">téléch.</span>
                        </div>
                        <div className="metric-item">
                          <FaHeart className="metric-icon" />
                          <span className="metric-value">{formatNumber(book.metrics.bookmarks)}</span>
                          <span className="metric-label">favoris</span>
                        </div>
                        <div className="metric-item">
                          <FaComment className="metric-icon" />
                          <span className="metric-value">{book.metrics.comments}</span>
                          <span className="metric-label">avis</span>
                        </div>
                      </div>
                      
                      {/* Engagement Bar */}
                      <div className="engagement-bar">
                        <div className="engagement-section">
                          <span>Engagement</span>
                          <div className="engagement-progress">
                            <div 
                              className="engagement-fill" 
                              style={{width: `${Math.min((book.metrics.views / 15000) * 100, 100)}%`}}
                            ></div>
                          </div>
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
        .populaires-container {
          background: var(--bg-primary);
          min-height: 100vh;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .populaires-container .container {
          max-width: 1400px !important;
          margin: 0 auto !important;
          padding: 0 1rem !important;
          width: 100% !important;
        }

        /* Hero Section */
        .populaires-hero {
          padding: 3rem 0;
          background: linear-gradient(135deg, 
            rgba(245, 158, 11, 0.1) 0%, 
            rgba(239, 68, 68, 0.05) 100%);
          border-radius: 0 0 20px 20px;
          margin-bottom: 2rem;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #f59e0b;
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

        .popularity-stats {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .stat-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .stat-item {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .stat-icon {
          font-size: 1.25rem;
        }

        .stat-number {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .stat-label {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        /* Filters Section */
        .filters-section {
          padding: 2rem 0;
        }

        .filters-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 2rem;
        }

        .filter-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          display: block;
        }

        .timeframe-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .timeframe-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 0.5rem 1rem;
          color: var(--text-secondary);
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .timeframe-btn:hover,
        .timeframe-btn.active {
          background: rgba(245, 158, 11, 0.1);
          border-color: rgba(245, 158, 11, 0.3);
          color: #f59e0b;
        }

        .metric-buttons {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.5rem;
        }

        .metric-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.75rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          justify-content: center;
        }

        .metric-btn:hover,
        .metric-btn.active {
          background: rgba(245, 158, 11, 0.1);
          border-color: rgba(245, 158, 11, 0.3);
          color: #f59e0b;
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
          border-color: #f59e0b;
          box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
          outline: none;
          color: var(--text-primary);
        }

        /* Popular Books Section */
        .popular-books-section {
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
        }

        .period-indicator {
          color: var(--text-tertiary);
          font-size: 1rem;
          font-weight: 400;
        }

        .books-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .popular-book-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
          position: relative;
        }

        .popular-book-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          border-color: rgba(245, 158, 11, 0.3);
        }

        .popular-book-card.featured {
          border-color: rgba(245, 158, 11, 0.4);
          background: linear-gradient(135deg, 
            rgba(245, 158, 11, 0.08) 0%, 
            rgba(255, 255, 255, 0.05) 100%);
        }

        .popular-book-card.top-three {
          border-width: 2px;
        }

        .rank-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 0.5rem 0.75rem;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          min-width: 60px;
        }

        .rank-badge.rank-gold {
          background: linear-gradient(135deg, #ffd700, #ffed4a);
          color: #000;
        }

        .rank-badge.rank-silver {
          background: linear-gradient(135deg, #c0c0c0, #e5e7eb);
          color: #000;
        }

        .rank-badge.rank-bronze {
          background: linear-gradient(135deg, #cd7f32, #d97706);
          color: #fff;
        }

        .rank-badge.rank-default {
          background: rgba(0, 0, 0, 0.8);
          color: #fff;
        }

        .rank-number {
          font-weight: 700;
          font-size: 0.875rem;
        }

        .rank-change {
          font-size: 0.75rem;
          margin-left: auto;
        }

        .rank-change.rank-up {
          color: #22c55e;
        }

        .rank-change.rank-down {
          color: #ef4444;
        }

        .rank-change.rank-stable {
          color: #6b7280;
        }

        .card-layout {
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 1.5rem;
          padding: 1.5rem;
        }

        .book-cover {
          position: relative;
          height: 160px;
          border-radius: 8px;
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
          gap: 0.5rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .popular-book-card:hover .book-overlay {
          opacity: 1;
        }

        .type-badge {
          position: absolute;
          bottom: 0.5rem;
          right: 0.5rem;
          background: rgba(59, 130, 246, 0.9);
          color: var(--text-primary);
          padding: 0.25rem 0.5rem;
          border-radius: 8px;
          font-size: 0.65rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .trending-badge {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          background: rgba(239, 68, 68, 0.9);
          color: var(--text-primary);
          padding: 0.25rem 0.5rem;
          border-radius: 8px;
          font-size: 0.65rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .book-info {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .book-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .category-tag {
          background: rgba(241, 196, 14, 0.1);
          color: var(--warning);
          padding: 0.25rem 0.5rem;
          border-radius: 8px;
          font-size: 0.7rem;
          font-weight: 500;
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

        .book-description {
          color: var(--text-secondary);
          font-size: 0.8rem;
          line-height: 1.4;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.5rem;
        }

        .metric-item {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          color: var(--text-tertiary);
        }

        .metric-icon {
          font-size: 0.7rem;
        }

        .metric-value {
          font-weight: 600;
          color: var(--text-secondary);
        }

        .metric-label {
          font-size: 0.7rem;
        }

        .engagement-bar {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 6px;
          padding: 0.75rem;
        }

        .engagement-section span {
          font-size: 0.75rem;
          color: var(--text-tertiary);
          margin-bottom: 0.5rem;
          display: block;
        }

        .engagement-progress {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          height: 6px;
          overflow: hidden;
        }

        .engagement-fill {
          background: linear-gradient(90deg, #f59e0b, #ef4444);
          height: 100%;
          border-radius: 4px;
          transition: width 0.3s ease;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .popularity-stats {
            margin-top: 2rem;
          }
          
          .stat-row {
            grid-template-columns: 1fr;
          }
          
          .timeframe-buttons {
            grid-template-columns: 1fr 1fr;
          }
          
          .books-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .card-layout {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .book-cover {
            height: 200px;
          }
          
          .metrics-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 0.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CataloguePopulaires;