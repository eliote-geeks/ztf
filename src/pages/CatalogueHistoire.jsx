import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaHistory, 
  FaBook, 
  FaSearch,
  FaDownload,
  FaEye,
  FaStar,
  FaFilePdf,
  FaMapMarkerAlt,
  FaCalendar,
  FaUsers,
  FaFlag,
  FaCrown,
  FaUniversity,
  FaGlobe
} from 'react-icons/fa';

const CatalogueHistoire = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');

  const periods = [
    { value: 'all', label: 'Toutes périodes', count: 1850 },
    { value: 'precolonial', label: 'Période précoloniale', count: 420 },
    { value: 'colonial', label: 'Époque coloniale', count: 680 },
    { value: 'independence', label: 'Indépendance', count: 390 },
    { value: 'contemporary', label: 'Histoire contemporaine', count: 360 }
  ];

  const regions = [
    { value: 'all', label: 'Tout le Cameroun' },
    { value: 'centre', label: 'Région du Centre' },
    { value: 'littoral', label: 'Région du Littoral' },
    { value: 'ouest', label: 'Région de l\'Ouest' },
    { value: 'nord', label: 'Régions du Nord' }
  ];

  const historyBooks = [
    {
      id: 1,
      title: "Histoire du Cameroun Moderne",
      author: "Jean-Baptiste Sipa",
      period: "contemporary",
      region: "all",
      type: "book",
      year: 2021,
      pages: 485,
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=250&fit=crop",
      description: "Analyse complète de l'évolution politique et sociale du Cameroun de l'indépendance à nos jours.",
      subjects: ["Politique", "Société", "Économie"],
      rating: 4.7,
      reviews: 198,
      featured: true
    },
    {
      id: 2,
      title: "Les Royaumes Bamiléké",
      author: "Prof. Marie Essomba",
      period: "precolonial",
      region: "ouest",
      type: "book",
      year: 2020,
      pages: 380,
      cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&h=250&fit=crop",
      description: "Étude approfondie des structures politiques et sociales des royaumes bamiléké avant la colonisation.",
      subjects: ["Royaumes", "Bamiléké", "Traditions"],
      rating: 4.8,
      reviews: 145,
      featured: true
    },
    {
      id: 3,
      title: "Douala Colonial (1884-1960)",
      author: "Dr. Paul Mbarga",
      period: "colonial",
      region: "littoral",
      type: "ebook",
      year: 2019,
      pages: 450,
      cover: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=200&h=250&fit=crop",
      description: "Histoire de la ville de Douala pendant la période coloniale allemande et française.",
      subjects: ["Douala", "Colonisation", "Urbanisme"],
      rating: 4.6,
      reviews: 123,
      featured: false
    }
  ];

  return (
    <div className="histoire-container">
      {/* Hero Section */}
      <section className="histoire-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="hero-content">
                <div className="hero-badge">
                  <FaHistory size={12} className="me-2" />
                  Collection Histoire
                </div>
                <h1 className="hero-title">
                  Histoire du <span className="text-warning">Cameroun</span>
                </h1>
                <p className="hero-subtitle">
                  Explorez l'histoire riche et complexe du Cameroun, des royaumes 
                  précoloniaux à l'époque contemporaine. Une collection complète 
                  pour comprendre notre patrimoine historique.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="history-stats">
                <div className="stat-card">
                  <FaBook className="stat-icon text-primary" />
                  <div>
                    <div className="stat-number">1,850</div>
                    <div className="stat-label">Ouvrages</div>
                  </div>
                </div>
                <div className="stat-card">
                  <FaCalendar className="stat-icon text-success" />
                  <div>
                    <div className="stat-number">5</div>
                    <div className="stat-label">Époques</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Periods Filter */}
      <section className="filters-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="periods-grid">
                {periods.map(period => (
                  <button
                    key={period.value}
                    className={`period-card ${selectedPeriod === period.value ? 'active' : ''}`}
                    onClick={() => setSelectedPeriod(period.value)}
                  >
                    <div className="period-label">{period.label}</div>
                    <div className="period-count">{period.count} ouvrages</div>
                  </button>
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="region-filter">
                <label>Région géographique</label>
                <select
                  className="form-select"
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                >
                  {regions.map(region => (
                    <option key={region.value} value={region.value}>
                      {region.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="books-section">
        <div className="container">
          <div className="books-grid">
            {historyBooks.map((book) => (
              <div key={book.id} className="history-book-card">
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
                </div>
                
                <div className="book-info">
                  <h6 className="book-title">{book.title}</h6>
                  <p className="book-author">par {book.author}</p>
                  <p className="book-description">{book.description}</p>
                  
                  <div className="book-subjects">
                    {book.subjects.map((subject, index) => (
                      <span key={index} className="subject-tag">
                        {subject}
                      </span>
                    ))}
                  </div>
                  
                  <div className="rating-section">
                    <div className="rating-display">
                      <FaStar className="rating-star" />
                      <span>{book.rating}</span>
                      <span className="rating-count">({book.reviews})</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .histoire-container {
          background: var(--bg-primary);
          min-height: 100vh;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .histoire-container .container {
          max-width: 1400px !important;
          margin: 0 auto !important;
          padding: 0 1rem !important;
          width: 100% !important;
        }

        .histoire-hero {
          padding: 3rem 0;
          background: linear-gradient(135deg, 
            rgba(168, 85, 247, 0.1) 0%, 
            rgba(124, 58, 237, 0.05) 100%);
          border-radius: 0 0 20px 20px;
          margin-bottom: 2rem;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(168, 85, 247, 0.1);
          border: 1px solid rgba(168, 85, 247, 0.3);
          color: #a855f7;
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
          line-height: 1.6;
        }

        .history-stats {
          display: grid;
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

        .filters-section {
          padding: 2rem 0;
        }

        .periods-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .period-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .period-card:hover,
        .period-card.active {
          background: rgba(168, 85, 247, 0.1);
          border-color: rgba(168, 85, 247, 0.3);
        }

        .period-label {
          color: var(--text-primary);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .period-count {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .region-filter label {
          color: var(--text-primary);
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          display: block;
        }

        .form-select {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          padding: 0.75rem;
          font-size: 0.875rem;
          color: var(--text-primary);
        }

        .books-section {
          padding: 2rem 0 4rem;
        }

        .books-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .history-book-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .history-book-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
          border-color: rgba(168, 85, 247, 0.3);
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

        .history-book-card:hover .book-overlay {
          opacity: 1;
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

        .book-description {
          color: var(--text-secondary);
          font-size: 0.8rem;
          line-height: 1.4;
          margin-bottom: 1rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .book-subjects {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .subject-tag {
          background: rgba(168, 85, 247, 0.1);
          color: #a855f7;
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 500;
        }

        .rating-section {
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

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .history-stats {
            margin-top: 2rem;
          }
          
          .periods-grid {
            grid-template-columns: 1fr;
          }
          
          .books-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default CatalogueHistoire;