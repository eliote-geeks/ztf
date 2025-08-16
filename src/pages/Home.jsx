import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import { CategoriesGrid } from '../components/CategoryCard';
import { 
  FaBook, 
  FaSearch, 
  FaNewspaper, 
  FaDatabase, 
  FaGraduationCap,
  FaUsers,
  FaChartLine,
  FaArrowRight,
  FaClock,
  FaMapMarkerAlt,
  FaStar,
  FaDownload,
  FaEye,
  FaHeart,
  FaUser,
  FaFilter,
  FaBookOpen,
  FaUserGraduate,
  FaFilePdf,
  FaEnvelope,
  FaPhone,
  FaChurch,
  FaHistory,
  FaQuoteLeft,
  FaFlask,
  FaGlobe,
  FaVideo,
  FaHeadphones
} from 'react-icons/fa';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('all');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const stats = [
    { icon: FaBook, number: '15,420', label: 'Documents', color: '#3498db' },
    { icon: FaUsers, number: '2,850', label: 'Étudiants', color: '#e74c3c' },
    { icon: FaGraduationCap, number: '145', label: 'Chercheurs', color: '#f39c12' },
    { icon: FaDatabase, number: '8', label: 'Collections', color: '#2ecc71' }
  ];

  const services = [
    {
      icon: FaSearch,
      title: 'Catalogue & Recherche',
      description: 'Recherche avancée dans notre catalogue numérique',
      path: '/catalogue',
      badge: 'Nouveau'
    },
    {
      icon: FaNewspaper,
      title: 'Actualités & Recherche',
      description: 'Dernières nouvelles et publications',
      path: '/actualites',
      badge: null
    },
    {
      icon: FaDatabase,
      title: 'Ressources Numériques',
      description: 'CAIRN, OpenEdition, e-books',
      path: '/ressources',
      badge: 'Premium'
    }
  ];

  const quickActions = [
    { icon: FaDownload, label: 'Télécharger', count: '2.3k' },
    { icon: FaEye, label: 'Consulter', count: '1.8k' },
    { icon: FaHeart, label: 'Favoris', count: '956' },
    { icon: FaStar, label: 'Évaluer', count: '432' }
  ];

  // Données de recherche
  const mockBooks = [
    {
      id: 1,
      title: "L'Art de la Prière",
      author: "Zacharias Tanee Fomum",
      type: "book",
      category: "Théologie",
      year: "1995",
      pages: 280,
      available: true,
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=250&fit=crop",
      description: "Guide spirituel pour développer une vie de prière profonde et transformatrice."
    },
    {
      id: 2,
      title: "Histoire du Cameroun Moderne",
      author: "Jean-Baptiste Sipa",
      type: "book",
      category: "Histoire",
      year: "2018",
      pages: 450,
      available: true,
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=250&fit=crop",
      description: "Analyse complète de l'évolution politique et sociale du Cameroun contemporain."
    },
    {
      id: 3,
      title: "Philosophie Africaine Contemporaine",
      author: "Prof. Emmanuel Ngwé",
      type: "ebook",
      category: "Philosophie",
      year: "2020",
      pages: 320,
      available: true,
      cover: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=200&h=250&fit=crop",
      description: "Exploration des courants philosophiques africains modernes."
    },
    {
      id: 4,
      title: "Contes et Légendes du Cameroun",
      author: "Marie Atangana",
      type: "book",
      category: "Littérature",
      year: "2019",
      pages: 180,
      available: false,
      cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&h=250&fit=crop",
      description: "Collection de récits traditionnels camerounais."
    },
    {
      id: 5,
      title: "Développement Durable en Afrique",
      author: "Dr. Paul Mbarga",
      type: "ebook",
      category: "Sciences",
      year: "2021",
      pages: 380,
      available: true,
      cover: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=200&h=250&fit=crop",
      description: "Stratégies pour un développement écologique et social durable."
    }
  ];

  const mockAuthors = [
    {
      id: 1,
      name: "Zacharias Tanee Fomum",
      specialty: "Théologie, Spiritualité",
      books: 45,
      nationality: "Camerounaise",
      bio: "Théologien et auteur prolifique, pionnier du réveil spirituel en Afrique.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Marie Atangana",
      specialty: "Littérature africaine, Folklore",
      books: 12,
      nationality: "Camerounaise",
      bio: "Écrivaine spécialisée dans la préservation du patrimoine oral camerounais.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Jean-Baptiste Sipa",
      specialty: "Histoire contemporaine",
      books: 8,
      nationality: "Camerounaise",
      bio: "Historien reconnu pour ses travaux sur l'Afrique centrale moderne.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const searchCategories = [
    { value: 'all', label: 'Tout', icon: FaSearch },
    { value: 'books', label: 'Livres', icon: FaBook },
    { value: 'ebooks', label: 'E-books', icon: FaFilePdf },
    { value: 'authors', label: 'Auteurs', icon: FaUserGraduate }
  ];

  // Données des catégories principales
  const mainCategories = [
    {
      title: "Théologie & Spiritualité",
      description: "Ouvrages théologiques, études bibliques et spiritualité contemporaine",
      bookCount: "2,450",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop",
      icon: FaChurch,
      link: "/catalogue/theologie",
      color: "#8e44ad",
      featured: true
    },
    {
      title: "Histoire & Culture",
      description: "Histoire du Cameroun, d'Afrique et patrimoine culturel",
      bookCount: "1,820",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      icon: FaHistory,
      link: "/catalogue/histoire",
      color: "#e67e22"
    },
    {
      title: "Philosophie",
      description: "Philosophie africaine, éthique et pensée contemporaine",
      bookCount: "980",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop",
      icon: FaQuoteLeft,
      link: "/catalogue/philosophie",
      color: "#3498db"
    },
    {
      title: "Sciences & Recherche",
      description: "Sciences humaines, sociales et méthodologie de recherche",
      bookCount: "1,340",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=300&fit=crop",
      icon: FaFlask,
      link: "/catalogue/sciences",
      color: "#27ae60"
    },
    {
      title: "Littérature Africaine",
      description: "Romans, poésie, contes et légendes d'Afrique",
      bookCount: "750",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      icon: FaBook,
      link: "/catalogue/litterature",
      color: "#e74c3c"
    },
    {
      title: "Ressources Numériques",
      description: "E-books, bases de données et ressources en ligne",
      bookCount: "3,200",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      icon: FaGlobe,
      link: "/ressources",
      color: "#f39c12",
      featured: true
    }
  ];

  // Données des archives et collections spéciales
  const specialCollections = [
    {
      title: "Archives Zacharias Tanee Fomum",
      description: "Collection complète des œuvres du théologien camerounais",
      bookCount: "450",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      icon: FaUsers,
      link: "/archives/ztf",
      color: "#9b59b6",
      type: "archive"
    },
    {
      title: "Mémoires & Thèses",
      description: "Travaux de recherche académique et universitaire",
      bookCount: "890",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      icon: FaGraduationCap,
      link: "/archives/theses",
      color: "#34495e",
      type: "archive"
    },
    {
      title: "Médiathèque",
      description: "Contenus audio, vidéo et multimédia",
      bookCount: "320",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop",
      icon: FaVideo,
      link: "/mediatheque",
      color: "#e74c3c",
      type: "collection"
    },
    {
      title: "Publications Récentes",
      description: "Dernières acquisitions et nouveautés",
      bookCount: "180",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      icon: FaNewspaper,
      link: "/nouveautes",
      color: "#16a085",
      type: "collection"
    }
  ];

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setShowResults(false);
      return;
    }

    let results = [];

    if (searchType === 'all' || searchType === 'books' || searchType === 'ebooks') {
      const filteredBooks = mockBooks.filter(book => {
        const matchesQuery = 
          book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.category.toLowerCase().includes(searchQuery.toLowerCase());
        
        const matchesType = 
          searchType === 'all' || 
          (searchType === 'books' && book.type === 'book') ||
          (searchType === 'ebooks' && book.type === 'ebook');

        return matchesQuery && matchesType;
      });
      results = [...results, ...filteredBooks];
    }

    if (searchType === 'all' || searchType === 'authors') {
      const filteredAuthors = mockAuthors.filter(author =>
        author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        author.specialty.toLowerCase().includes(searchQuery.toLowerCase())
      );
      results = [...results, ...filteredAuthors];
    }

    setSearchResults(results);
    setShowResults(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="home-container">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Categories Grid */}
      <CategoriesGrid 
        title="Nos Collections Principales" 
        categories={mainCategories}
        columns={3}
      />

      {/* Archives & Collections Spéciales */}
      <CategoriesGrid 
        title="Archives & Collections Spéciales" 
        categories={specialCollections}
        columns={4}
      />

      {/* Search Section */}
      <section className="search-section-standalone">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="search-content text-center">
                <div className="section-badge mb-3">
                  <FaSearch size={12} className="me-2" />
                  Recherche Rapide
                </div>
                
                <h3 className="search-title mb-4">Trouvez vos documents</h3>
                
                <div className="search-categories">
                  {searchCategories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={category.value}
                        onClick={() => setSearchType(category.value)}
                        className={`category-btn ${searchType === category.value ? 'active' : ''}`}
                      >
                        <Icon size={12} />
                        <span>{category.label}</span>
                      </button>
                    );
                  })}
                </div>
                
                <div className="search-bar">
                  <div className="search-input-group">
                    <FaSearch className="search-icon" size={14} />
                    <input
                      type="text"
                      className="search-input"
                      placeholder={`Rechercher ${searchCategories.find(c => c.value === searchType)?.label.toLowerCase() || 'dans la bibliothèque'}...`}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyPress={handleKeyPress}
                    />
                    <button onClick={handleSearch} className="search-btn">
                      Rechercher
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="row justify-content-center mt-5">
            <div className="col-lg-10">
              <div className="hero-stats-section">
                <div className="row g-3">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="col-6 col-lg-3">
                        <div className="stat-card">
                          <div className="stat-icon">
                            <Icon size={24} style={{ color: stat.color }} />
                          </div>
                          <div className="stat-content">
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Results */}
      {showResults && (
        <section className="search-results-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="results-header">
                  <h3>Résultats de recherche</h3>
                  <p>{searchResults.length} résultat{searchResults.length > 1 ? 's' : ''} trouvé{searchResults.length > 1 ? 's' : ''} pour "{searchQuery}"</p>
                </div>
              </div>
            </div>
            
            <div className="row g-4">
              {searchResults.length > 0 ? (
                searchResults.map((result) => (
                  <div key={`${result.type || 'author'}-${result.id}`} className="col-lg-4 col-md-6">
                    {result.type ? (
                      /* Book/Ebook Card */
                      <div className="result-card book-card">
                        <div className="book-cover">
                          <img src={result.cover} alt={result.title} />
                          <div className="book-overlay">
                            <div className="book-actions">
                              <button className="btn btn-sm btn-primary">
                                <FaEye size={12} />
                              </button>
                              <button className="btn btn-sm btn-warning">
                                <FaHeart size={12} />
                              </button>
                            </div>
                          </div>
                          <div className="book-badges">
                            <span className={`type-badge ${result.type}`}>
                              {result.type === 'ebook' ? (
                                <><FaFilePdf size={10} /> E-book</>
                              ) : (
                                <><FaBook size={10} /> Livre</>
                              )}
                            </span>
                            <span className={`availability-badge ${result.available ? 'available' : 'unavailable'}`}>
                              {result.available ? 'Disponible' : 'Emprunté'}
                            </span>
                          </div>
                        </div>
                        
                        <div className="book-info">
                          <h6 className="book-title">{result.title}</h6>
                          <p className="book-author">par {result.author}</p>
                          <div className="book-details">
                            <span className="book-category">{result.category}</span>
                            <span className="book-year">{result.year}</span>
                            <span className="book-pages">{result.pages} pages</span>
                          </div>
                          <p className="book-description">{result.description}</p>
                          <button className="btn btn-sm btn-outline-warning">
                            {result.available ? 'Emprunter' : 'Réserver'}
                          </button>
                        </div>
                      </div>
                    ) : (
                      /* Author Card */
                      <div className="result-card author-card">
                        <div className="author-header">
                          <div className="author-avatar">
                            <img src={result.avatar} alt={result.name} />
                          </div>
                          <div className="author-info">
                            <h6 className="author-name">{result.name}</h6>
                            <p className="author-nationality">{result.nationality}</p>
                          </div>
                        </div>
                        
                        <div className="author-content">
                          <p className="author-specialty">{result.specialty}</p>
                          <p className="author-bio">{result.bio}</p>
                          
                          <div className="author-stats">
                            <div className="stat-item">
                              <FaBook size={14} />
                              <span>{result.books} ouvrages</span>
                            </div>
                          </div>
                          
                          <button className="btn btn-sm btn-outline-warning">
                            Voir les œuvres
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="col-12">
                  <div className="no-results">
                    <FaSearch size={48} className="no-results-icon" />
                    <h5>Aucun résultat trouvé</h5>
                    <p>Essayez avec d'autres mots-clés ou changez le type de recherche</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Featured Books Section */}
      <section className="featured-books-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9">
              <div className="section-header text-center mb-5">
                <div className="section-badge">
                  <FaBook size={12} className="me-2" />
                  Collection
                </div>
                <h2 className="section-title">Livres Populaires</h2>
                <p className="section-subtitle">Découvrez nos ouvrages les plus consultés par la communauté académique</p>
              </div>
            </div>
          </div>
          
          <div className="row g-4 justify-content-center">
            {mockBooks.slice(0, 3).map((book) => (
              <div key={book.id} className="col-lg-4 col-md-6 col-sm-8">
                <div className="featured-book-card">
                  <div className="book-cover">
                    <img src={book.cover} alt={book.title} />
                    <div className="book-overlay">
                      <div className="book-actions">
                        <button className="btn btn-sm btn-primary">
                          <FaEye size={12} />
                        </button>
                        <button className="btn btn-sm btn-warning">
                          <FaHeart size={12} />
                        </button>
                      </div>
                    </div>
                    <div className="book-badges">
                      <span className={`type-badge ${book.type}`}>
                        {book.type === 'ebook' ? (
                          <><FaFilePdf size={10} /> E-book</>
                        ) : (
                          <><FaBook size={10} /> Livre</>
                        )}
                      </span>
                      <span className={`availability-badge ${book.available ? 'available' : 'unavailable'}`}>
                        {book.available ? 'Disponible' : 'Emprunté'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="book-info">
                    <h6 className="book-title">{book.title}</h6>
                    <p className="book-author">par {book.author}</p>
                    <div className="book-details">
                      <span className="book-category">{book.category}</span>
                      <span className="book-year">{book.year}</span>
                      <span className="book-pages">{book.pages} pages</span>
                    </div>
                    <p className="book-description">{book.description}</p>
                    <button className="btn btn-sm btn-outline-warning">
                      {book.available ? 'Emprunter' : 'Réserver'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="row mt-5">
            <div className="col-12 text-center">
              <Link to="/catalogue" className="btn btn-warning btn-lg">
                <FaBookOpen size={16} className="me-2" />
                Voir tous les livres
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Authors Section */}
      <section className="featured-authors-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9">
              <div className="section-header text-center mb-5">
                <div className="section-badge">
                  <FaUserGraduate size={12} className="me-2" />
                  Références
                </div>
                <h2 className="section-title">Auteurs Vedettes</h2>
                <p className="section-subtitle">Rencontrez nos auteurs camerounais de référence qui façonnent la pensée africaine</p>
              </div>
            </div>
          </div>
          
          <div className="row g-4 justify-content-center">
            {mockAuthors.map((author) => (
              <div key={author.id} className="col-lg-4 col-md-6 col-sm-8">
                <div className="featured-author-card">
                  <div className="author-header">
                    <div className="author-avatar">
                      <img src={author.avatar} alt={author.name} />
                    </div>
                    <div className="author-info">
                      <h6 className="author-name">{author.name}</h6>
                      <p className="author-nationality">{author.nationality}</p>
                    </div>
                  </div>
                  
                  <div className="author-content">
                    <p className="author-specialty">{author.specialty}</p>
                    <p className="author-bio">{author.bio}</p>
                    
                    <div className="author-stats">
                      <div className="stat-item">
                        <FaBook size={14} />
                        <span>{author.books} ouvrages</span>
                      </div>
                    </div>
                    
                    <button className="btn btn-sm btn-outline-warning">
                      Voir les œuvres
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9">
              <div className="section-header text-center mb-5">
                <div className="section-badge">
                  <FaDatabase size={12} className="me-2" />
                  Écosystème
                </div>
                <h2 className="section-title">Nos Services</h2>
                <p className="section-subtitle">Découvrez notre écosystème complet de ressources académiques et numériques</p>
              </div>
            </div>
          </div>
          
          <div className="row g-4 justify-content-center">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="col-lg-4 col-md-6 col-sm-8">
                  <Link to={service.path} className="service-card h-100 d-block">
                    <div className="service-header">
                      <div className="service-icon">
                        <Icon size={20} />
                      </div>
                      {service.badge && (
                        <span className="service-badge">{service.badge}</span>
                      )}
                    </div>
                    <h5 className="service-title">{service.title}</h5>
                    <p className="service-description">{service.description}</p>
                    <div className="service-arrow">
                      <FaArrowRight size={12} />
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Actions & Info Combined */}
      <section className="actions-info-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9">
              <div className="section-header text-center mb-5">
                <div className="section-badge">
                  <FaChartLine size={12} className="me-2" />
                  Activités
                </div>
                <h2 className="section-title">Actions Rapides</h2>
                <p className="section-subtitle">Statistiques d'utilisation de la bibliothèque</p>
              </div>
            </div>
          </div>
          
          <div className="row g-4 justify-content-center mb-5">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <div key={index} className="col-6 col-lg-3 col-md-6">
                  <div className="quick-action-card h-100">
                    <Icon size={20} className="action-icon" />
                    <div className="action-content">
                      <div className="action-label">{action.label}</div>
                      <div className="action-count">{action.count}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Info Cards */}
          <div className="row g-4 justify-content-center">
            <div className="col-lg-5 col-md-6">
              <div className="info-card h-100">
                <div className="info-header">
                  <FaClock size={18} className="text-warning" />
                  <h6 className="info-title">Horaires d'ouverture</h6>
                </div>
                <div className="info-content">
                  <div className="info-item">
                    <span className="info-day">Lundi - Vendredi</span>
                    <span className="info-time">08h - 20h</span>
                  </div>
                  <div className="info-item">
                    <span className="info-day">Samedi</span>
                    <span className="info-time">09h - 17h</span>
                  </div>
                  <div className="info-item">
                    <span className="info-day">Dimanche</span>
                    <span className="info-time">Fermé</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="info-card h-100">
                <div className="info-header">
                  <FaMapMarkerAlt size={18} className="text-warning" />
                  <h6 className="info-title">Contact & Localisation</h6>
                </div>
                <div className="info-content">
                  <div className="info-item">
                    <FaMapMarkerAlt size={12} className="me-2 text-warning" />
                    Campus Universitaire, Yaoundé
                  </div>
                  <div className="info-item">
                    <FaPhone size={12} className="me-2 text-success" />
                    +237 222 234 567
                  </div>
                  <div className="info-item">
                    <FaEnvelope size={12} className="me-2 text-info" />
                    contact@bibliotheque-ztf.org
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .home-container {
          background: var(--gradient-dark);
          min-height: 100vh;
        }

        /* Bootstrap container adjustments */
        .container {
          max-width: 1400px;
        }

        /* Search Section Standalone */
        .search-section-standalone {
          padding: 4rem 0;
          background: var(--bg-card);
          border-radius: 20px;
          margin-bottom: 2rem;
        }

        .search-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .search-title {
          font-size: 1.75rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 2rem;
        }

        .search-categories {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .category-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--bg-input);
          border: 1px solid var(--border-primary);
          border-radius: 20px;
          color: var(--text-secondary);
          font-size: 0.75rem;
          font-weight: 500;
          padding: 0.5rem 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .category-btn:hover,
        .category-btn.active {
          background: rgba(241, 196, 14, 0.1);
          border-color: var(--border-accent);
          color: var(--warning);
        }

        .search-bar {
          max-width: 600px;
          margin: 0 auto;
        }

        .search-input-group {
          position: relative;
          display: flex;
          background: var(--bg-input);
          backdrop-filter: blur(10px);
          border: 1px solid var(--border-primary);
          border-radius: 25px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .search-input-group:focus-within {
          border-color: var(--border-accent);
          box-shadow: 0 0 0 3px rgba(241, 196, 14, 0.1);
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-tertiary);
          z-index: 2;
        }

        .search-input {
          flex: 1;
          background: transparent;
          border: none;
          padding: 0.875rem 1rem 0.875rem 2.5rem;
          color: var(--text-primary);
          font-size: 0.875rem;
          outline: none;
        }

        .search-input::placeholder {
          color: var(--text-placeholder);
        }

        .search-btn {
          background: var(--warning);
          color: var(--dark-900);
          border: none;
          padding: 0.875rem 1.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .search-btn:hover {
          background: #f1c40e;
          transform: translateX(-2px);
        }

        /* Hero Stats Section */
        .hero-stats-section {
          margin-top: 2rem;
        }

        .stat-card {
          background: var(--bg-card);
          backdrop-filter: blur(10px);
          border: 1px solid var(--border-primary);
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
          border-color: var(--border-accent);
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
          color: var(--text-tertiary);
        }

        .stat-mini-card {
          background: var(--bg-card);
          backdrop-filter: blur(10px);
          border: 1px solid var(--border-primary);
          border-radius: 10px;
          padding: 1rem;
          text-align: center;
          transition: transform 0.3s ease;
        }

        .stat-mini-card:hover {
          transform: translateY(-2px);
        }

        /* Sections */
        .services-section,
        .actions-info-section,
        .featured-books-section,
        .featured-authors-section {
          padding: 4rem 0;
        }

        .featured-books-section {
          background: var(--bg-card);
          border-radius: 20px;
          margin-bottom: 2rem;
        }

        .featured-authors-section {
          background: var(--gradient-secondary);
          border-radius: 20px;
          margin-bottom: 2rem;
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

        .section-title {
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .section-subtitle {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Service Cards */
        .service-card {
          background: var(--bg-card);
          backdrop-filter: blur(10px);
          border: 1px solid var(--border-primary);
          border-radius: 12px;
          padding: 1.5rem;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          min-height: 200px;
        }

        .service-card:hover {
          transform: translateY(-4px);
          background: var(--bg-card-hover);
          border-color: var(--border-accent);
          color: inherit;
        }

        .service-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .service-icon {
          width: 36px;
          height: 36px;
          background: rgba(241, 196, 14, 0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--warning);
        }

        .service-badge {
          background: rgba(241, 196, 14, 0.2);
          color: var(--warning);
          font-size: 0.65rem;
          font-weight: 600;
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          text-transform: uppercase;
        }

        .service-title {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .service-description {
          font-size: 0.875rem;
          color: var(--text-tertiary);
          margin-bottom: 1rem;
        }

        .service-arrow {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          color: rgba(241, 196, 14, 0.7);
          transition: transform 0.3s ease;
        }

        .service-card:hover .service-arrow {
          transform: translateX(4px);
        }

        /* Quick Actions */
        .quick-action-card {
          background: var(--bg-card);
          backdrop-filter: blur(10px);
          border: 1px solid var(--border-primary);
          border-radius: 10px;
          padding: 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          transition: transform 0.3s ease;
          min-height: 80px;
        }

        .quick-action-card:hover {
          transform: translateY(-2px);
        }

        .action-icon {
          color: var(--warning);
        }

        .action-label {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-primary);
        }

        .action-count {
          font-size: 0.75rem;
          color: var(--text-tertiary);
        }

        /* Info Cards */
        .info-card {
          background: var(--bg-card);
          backdrop-filter: blur(15px);
          border: 1px solid var(--border-primary);
          border-radius: 12px;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-2px);
          border-color: var(--border-accent);
          box-shadow: var(--shadow-md);
        }

        .info-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-primary);
        }

        .info-title {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
        }

        .info-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .info-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.875rem;
          color: var(--text-secondary);
          padding: 0.5rem;
          background: var(--bg-input);
          border-radius: 6px;
          transition: all 0.3s ease;
        }

        .info-item:hover {
          background: var(--bg-input-focus);
        }

        .info-day {
          font-weight: 500;
          color: var(--text-primary);
        }

        .info-time {
          font-weight: 600;
          color: var(--warning);
        }

        /* Search Results Section */
        .search-results-section {
          padding: 3rem 0;
          background: var(--bg-card);
          border-radius: 20px;
          margin-bottom: 2rem;
        }

        .results-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .results-header h3 {
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .results-header p {
          color: var(--text-tertiary);
          font-size: 0.875rem;
        }

        .result-card {
          background: var(--bg-card);
          backdrop-filter: blur(15px);
          border: 1px solid var(--border-primary);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
          height: 100%;
        }

        .result-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: var(--border-accent);
        }

        /* Book Cards */
        .book-card .book-cover {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .book-card .book-cover img {
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
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .result-card:hover .book-overlay {
          opacity: 1;
        }

        .book-actions {
          display: flex;
          gap: 0.5rem;
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
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 600;
        }

        .type-badge.book {
          background: rgba(59, 130, 246, 0.9);
          color: #ffffff;
        }

        .type-badge.ebook {
          background: rgba(139, 69, 19, 0.9);
          color: #ffffff;
        }

        .availability-badge {
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 600;
        }

        .availability-badge.available {
          background: rgba(34, 197, 94, 0.9);
          color: #ffffff;
        }

        .availability-badge.unavailable {
          background: rgba(239, 68, 68, 0.9);
          color: #ffffff;
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
          color: var(--text-tertiary);
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .book-details {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .book-category,
        .book-year,
        .book-pages {
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
          margin-bottom: 1rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Author Cards */
        .author-card {
          padding: 1.5rem;
        }

        .author-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-primary);
        }

        .author-avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid rgba(241, 196, 14, 0.3);
        }

        .author-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .author-name {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .author-nationality {
          color: var(--text-tertiary);
          font-size: 0.8rem;
          margin: 0;
        }

        .author-specialty {
          color: var(--warning);
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .author-bio {
          color: var(--text-secondary);
          font-size: 0.8rem;
          line-height: 1.4;
          margin-bottom: 1rem;
        }

        .author-stats {
          margin-bottom: 1rem;
        }

        .author-stats .stat-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.8rem;
          background: var(--bg-input);
          padding: 0.5rem;
          border-radius: 6px;
        }

        .author-stats .stat-item svg {
          color: var(--warning);
        }

        /* No Results */
        .no-results {
          text-align: center;
          padding: 4rem 2rem;
        }

        .no-results-icon {
          color: var(--text-muted);
          margin-bottom: 1rem;
        }

        .no-results h5 {
          color: var(--text-primary);
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }

        .no-results p {
          color: var(--text-tertiary);
          font-size: 0.875rem;
        }

        /* Featured Cards */
        .featured-book-card,
        .featured-author-card {
          background: var(--bg-card);
          backdrop-filter: blur(15px);
          border: 1px solid var(--border-primary);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
          height: 100%;
        }

        .featured-book-card:hover,
        .featured-author-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: var(--border-accent);
        }

        /* Featured Book Cards use same styles as result cards */
        .featured-book-card .book-cover {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .featured-book-card .book-cover img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .featured-book-card .book-info {
          padding: 1.5rem;
        }

        .featured-book-card .book-title {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .featured-book-card .book-author {
          color: var(--text-tertiary);
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .featured-book-card .book-details {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .featured-book-card .book-description {
          color: var(--text-secondary);
          font-size: 0.8rem;
          line-height: 1.4;
          margin-bottom: 1rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Featured Author Cards use same styles as result cards */
        .featured-author-card {
          padding: 1.5rem;
        }

        .featured-author-card .author-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-primary);
        }

        .featured-author-card .author-avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid rgba(241, 196, 14, 0.3);
        }

        .featured-author-card .author-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .featured-author-card .author-name {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .featured-author-card .author-nationality {
          color: var(--text-tertiary);
          font-size: 0.8rem;
          margin: 0;
        }

        .featured-author-card .author-specialty {
          color: var(--warning);
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .featured-author-card .author-bio {
          color: var(--text-secondary);
          font-size: 0.8rem;
          line-height: 1.4;
          margin-bottom: 1rem;
        }

        .featured-author-card .author-stats {
          margin-bottom: 1rem;
        }

        .featured-author-card .author-stats .stat-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.8rem;
          background: var(--bg-input);
          padding: 0.5rem;
          border-radius: 6px;
        }

        .featured-author-card .author-stats .stat-item svg {
          color: var(--warning);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .search-title {
            font-size: 1.5rem;
          }
          
          .search-section-standalone {
            padding: 3rem 0;
          }
          
          .section-title {
            font-size: 1.25rem;
          }
          
          .services-section,
          .quick-actions-section,
          .info-section,
          .featured-books-section,
          .featured-authors-section {
            padding: 2rem 0;
          }

          .service-card {
            min-height: auto;
          }

          .quick-action-card {
            min-height: auto;
          }

          .info-card {
            min-height: auto;
          }
          
          .search-categories {
            justify-content: center;
          }
          
          .category-btn {
            font-size: 0.7rem;
            padding: 0.4rem 0.8rem;
          }
          
          .search-input-group {
            flex-direction: column;
            border-radius: 12px;
          }
          
          .search-input {
            padding: 0.75rem 1rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .search-btn {
            border-radius: 0 0 12px 12px;
          }
          
          .search-icon {
            display: none;
          }
          
          .book-card .book-cover {
            height: 180px;
          }
          
          .book-details {
            flex-direction: column;
            gap: 0.25rem;
          }
          
          .author-header {
            flex-direction: column;
            text-align: center;
          }
          
          .author-avatar {
            width: 80px;
            height: 80px;
          }
          
          .featured-book-card .book-cover {
            height: 180px;
          }
          
          .featured-author-card .author-header {
            flex-direction: column;
            text-align: center;
          }
          
          .featured-author-card .author-avatar {
            width: 80px;
            height: 80px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;