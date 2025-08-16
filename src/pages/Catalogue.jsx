import React, { useState } from 'react';
import { 
  FaSearch, 
  FaBook, 
  FaFilter,
  FaDownload,
  FaStar,
  FaEye,
  FaBookOpen,
  FaGraduationCap,
  FaGlobe,
  FaCalendar,
  FaUser,
  FaTags,
  FaUsers,
  FaFilePdf
} from 'react-icons/fa';

const Catalogue = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Tous', count: 15420 },
    { id: 'theology', label: 'Théologie', count: 3200 },
    { id: 'literature', label: 'Littérature africaine', count: 2800 },
    { id: 'history', label: 'Histoire du Cameroun', count: 1900 },
    { id: 'science', label: 'Sciences', count: 2500 },
    { id: 'philosophy', label: 'Philosophie', count: 1600 },
    { id: 'education', label: 'Éducation', count: 2100 },
    { id: 'sociology', label: 'Sociologie', count: 1320 }
  ];

  const featuredBooks = [
    {
      id: 1,
      title: "L'Art de la Prière",
      author: "Zacharias Tanee Fomum",
      category: "Théologie",
      year: 2019,
      pages: 320,
      rating: 4.9,
      downloads: 2850,
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      description: "Guide complet sur la pratique de la prière chrétienne et la communion avec Dieu."
    },
    {
      id: 2,
      title: "Histoire du Cameroun Moderne",
      author: "Jean-Baptiste Sipa",
      category: "Histoire",
      year: 2021,
      pages: 485,
      rating: 4.7,
      downloads: 1920,
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      description: "Une analyse approfondie de l'évolution politique et sociale du Cameroun post-indépendance."
    },
    {
      id: 3,
      title: "Contes et Légendes du Cameroun",
      author: "Marie Atangana",
      category: "Littérature",
      year: 2020,
      pages: 256,
      rating: 4.8,
      downloads: 3150,
      cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop",
      description: "Recueil des traditions orales et légendes des différentes ethnies camerounaises."
    },
    {
      id: 4,
      title: "Développement Durable en Afrique Centrale",
      author: "Dr. Paul Mbarga",
      category: "Sciences",
      year: 2022,
      pages: 390,
      rating: 4.6,
      downloads: 1680,
      cover: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300&h=400&fit=crop",
      description: "Stratégies et défis du développement durable dans la région d'Afrique Centrale."
    },
    {
      id: 5,
      title: "Philosophie Africaine Contemporaine",
      author: "Prof. Emmanuel Ngwé",
      category: "Philosophie",
      year: 2021,
      pages: 420,
      rating: 4.5,
      downloads: 1245,
      cover: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300&h=400&fit=crop",
      description: "Exploration des courants philosophiques africains modernes et leurs influences."
    },
    {
      id: 6,
      title: "Pédagogie et Innovation au Cameroun",
      author: "Dr. Françoise Mendomo",
      category: "Éducation",
      year: 2023,
      pages: 298,
      rating: 4.7,
      downloads: 980,
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      description: "Nouvelles approches pédagogiques adaptées au contexte éducatif camerounais."
    }
  ];

  const filteredBooks = selectedCategory === 'all' 
    ? featuredBooks 
    : featuredBooks.filter(book => 
        book.category.toLowerCase().includes(selectedCategory) ||
        (selectedCategory === 'theology' && book.category === 'Théologie') ||
        (selectedCategory === 'literature' && book.category === 'Littérature') ||
        (selectedCategory === 'history' && book.category === 'Histoire') ||
        (selectedCategory === 'science' && book.category === 'Sciences') ||
        (selectedCategory === 'philosophy' && book.category === 'Philosophie') ||
        (selectedCategory === 'education' && book.category === 'Éducation')
      );

  return (
    <div className="catalogue-container">
      {/* Hero Section */}
      <section className="catalogue-hero">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9">
              <div className="hero-content text-center">
                <div className="hero-badge">
                  <FaBook size={12} className="me-2" />
                  Catalogue Numérique
                </div>
                <h1 className="hero-title">
                  Explorez Notre <span className="text-warning">Catalogue</span>
                </h1>
                <p className="hero-subtitle">
                  Découvrez plus de 15,000 ouvrages spécialisés en théologie, littérature africaine, 
                  histoire du Cameroun et ressources académiques de qualité.
                </p>
              </div>
            </div>
          </div>
          
          {/* Stats Section séparée */}
          <div className="row justify-content-center mt-5">
            <div className="col-lg-8">
              <div className="search-stats-section">
                <div className="row g-3">
                  <div className="col-6 col-md-3">
                    <div className="stat-card">
                      <div className="stat-icon">
                        <FaBook size={24} className="text-primary" />
                      </div>
                      <div className="stat-content">
                        <div className="stat-number">12,450</div>
                        <div className="stat-label">Livres</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className="stat-card">
                      <div className="stat-icon">
                        <FaFilePdf size={24} className="text-warning" />
                      </div>
                      <div className="stat-content">
                        <div className="stat-number">2,970</div>
                        <div className="stat-label">E-books</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className="stat-card">
                      <div className="stat-icon">
                        <FaUsers size={24} className="text-success" />
                      </div>
                      <div className="stat-content">
                        <div className="stat-number">145</div>
                        <div className="stat-label">Auteurs</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className="stat-card">
                      <div className="stat-icon">
                        <FaDownload size={24} className="text-info" />
                      </div>
                      <div className="stat-content">
                        <div className="stat-number">45.6k</div>
                        <div className="stat-label">Téléchargements</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="search-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="search-card">
                <div className="search-header">
                  <div className="section-badge">
                    <FaSearch size={12} className="me-2" />
                    Recherche
                  </div>
                  <h3>Recherche Avancée</h3>
                  <p>Trouvez exactement ce que vous cherchez dans notre collection académique</p>
                </div>
                
                <div className="row g-3 justify-content-center">
                  <div className="col-lg-8">
                    <div className="search-input-wrapper">
                      <FaSearch className="search-icon" />
                      <input
                        type="text"
                        className="form-control search-input"
                        placeholder="Rechercher par titre, auteur, sujet..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <button className="btn btn-primary btn-search">
                      <FaSearch size={14} className="me-2" />
                      Rechercher
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories & Results */}
      <section className="results-section">
        <div className="container">
          <div className="row g-4">
            
            {/* Sidebar - Categories */}
            <div className="col-lg-3">
              <div className="categories-card">
                <div className="categories-header">
                  <div className="section-badge">
                    <FaFilter size={12} className="me-2" />
                    Filtres
                  </div>
                  <h5>Catégories</h5>
                </div>
                <div className="categories-list">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`category-item ${selectedCategory === category.id ? 'active' : ''}`}
                    >
                      <span className="category-label">{category.label}</span>
                      <span className="category-count">{category.count.toLocaleString()}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content - Books */}
            <div className="col-lg-9">
              <div className="results-header">
                <h4>Résultats de la recherche</h4>
                <span className="results-count">
                  {filteredBooks.length} ouvrage{filteredBooks.length > 1 ? 's' : ''} trouvé{filteredBooks.length > 1 ? 's' : ''}
                </span>
              </div>

              <div className="row g-4">
                {filteredBooks.map((book) => (
                  <div key={book.id} className="col-lg-6 col-xl-4">
                    <div className="book-card">
                      <div className="book-cover">
                        <img src={book.cover} alt={book.title} />
                        <div className="book-overlay">
                          <button className="btn btn-sm btn-light">
                            <FaEye size={14} />
                          </button>
                          <button className="btn btn-sm btn-warning">
                            <FaDownload size={14} />
                          </button>
                        </div>
                      </div>
                      
                      <div className="book-info">
                        <div className="book-header">
                          <h6 className="book-title">{book.title}</h6>
                          <div className="book-rating">
                            <FaStar className="rating-star" />
                            <span>{book.rating}</span>
                          </div>
                        </div>
                        
                        <div className="book-meta">
                          <div className="meta-item">
                            <FaUser size={12} />
                            <span>{book.author}</span>
                          </div>
                          <div className="meta-item">
                            <FaTags size={12} />
                            <span>{book.category}</span>
                          </div>
                          <div className="meta-item">
                            <FaCalendar size={12} />
                            <span>{book.year}</span>
                          </div>
                        </div>
                        
                        <p className="book-description">{book.description}</p>
                        
                        <div className="book-stats">
                          <span className="stat-item">
                            <FaBookOpen size={12} />
                            {book.pages} pages
                          </span>
                          <span className="stat-item">
                            <FaDownload size={12} />
                            {book.downloads}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .catalogue-container {
          background: var(--bg-primary);
          min-height: 100vh;
        }

        .container {
          max-width: 1400px;
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(241, 196, 14, 0.1);
          border: 1px solid rgba(241, 196, 14, 0.3);
          color: var(--warning);
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.375rem 1rem;
          border-radius: 20px;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Hero Section */
        .catalogue-hero {
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
          margin: 0 auto 1.5rem;
        }

        /* Hero Stats Section */
        .search-stats-section {
          margin-top: 2rem;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .stat-card:hover {
          transform: translateY(-2px);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .stat-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-content {
          text-align: center;
        }

        .stat-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .search-stats {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.05);
          padding: 1rem;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .stat-icon {
          color: var(--warning);
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

        /* Search Section */
        .search-section {
          padding: 2rem 0;
        }

        .search-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 2rem;
        }

        .search-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .search-header h3 {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .search-header p {
          font-size: 1rem;
          color: var(--text-secondary);
          max-width: 500px;
          margin: 0 auto;
        }

        .search-input-wrapper {
          position: relative;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
          font-size: 1rem;
        }

        .search-input {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          padding: 0.75rem 1rem 0.75rem 3rem;
          font-size: 0.875rem;
          color: var(--text-primary);
          width: 100%;
        }

        .search-input:focus {
          background: rgba(255, 255, 255, 0.12);
          border-color: var(--warning);
          box-shadow: 0 0 0 3px rgba(241, 196, 14, 0.1);
          outline: none;
          color: var(--text-primary);
        }

        .search-input::placeholder {
          color: var(--text-muted);
        }

        .btn-search {
          background: var(--gradient-accent);
          border: none;
          color: var(--dark-900);
          font-weight: 600;
          padding: 0.75rem 2rem;
          border-radius: 8px;
          width: 100%;
        }

        .btn-search:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(241, 196, 14, 0.3);
        }

        /* Results Section */
        .results-section {
          padding: 2rem 0 4rem;
        }

        .categories-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
          height: fit-content;
        }

        .categories-header {
          text-align: center;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .categories-header h5 {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .categories-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .category-item {
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

        .category-item:hover,
        .category-item.active {
          background: rgba(241, 196, 14, 0.1);
          border-color: rgba(241, 196, 14, 0.3);
          color: var(--warning);
        }

        .category-count {
          font-size: 0.75rem;
          opacity: 0.7;
        }

        .results-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .results-header h4 {
          color: var(--text-primary);
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0;
        }

        .results-count {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        /* Book Cards */
        .book-card {
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

        .book-card:hover {
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

        .book-card:hover .book-overlay {
          opacity: 1;
        }

        .book-info {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .book-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .book-title {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
          line-height: 1.3;
          flex: 1;
          margin-right: 1rem;
        }

        .book-rating {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--warning);
          font-size: 0.875rem;
          font-weight: 500;
        }

        .rating-star {
          font-size: 0.75rem;
        }

        .book-meta {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.75rem;
        }

        .book-description {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.4;
          margin-bottom: 1rem;
          flex: 1;
        }

        .book-stats {
          display: flex;
          justify-content: space-between;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .book-stats .stat-item {
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
          
          .search-stats {
            margin-top: 2rem;
          }
          
          .results-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
          
          .book-cover {
            height: 150px;
          }
        }
      `}</style>
    </div>
  );
};

export default Catalogue;