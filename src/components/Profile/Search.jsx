import React, { useState } from 'react';
import { 
  FaSearch, 
  FaFilter,
  FaStar,
  FaBook,
  FaDownload,
  FaEye,
  FaHeart,
  FaBookmark,
  FaMapMarkerAlt,
  FaCalendar
} from 'react-icons/fa';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { value: 'all', label: 'Toutes catégories' },
    { value: 'theologie', label: 'Théologie' },
    { value: 'philosophie', label: 'Philosophie' },
    { value: 'histoire', label: 'Histoire' },
    { value: 'litterature', label: 'Littérature' },
    { value: 'sciences', label: 'Sciences' }
  ];

  const types = [
    { value: 'all', label: 'Tous formats' },
    { value: 'book', label: 'Livres physiques' },
    { value: 'ebook', label: 'Livres numériques' },
    { value: 'journal', label: 'Revues' },
    { value: 'thesis', label: 'Thèses' },
    { value: 'audio', label: 'Documents audio' }
  ];

  const searchResults = [
    {
      id: 1,
      title: "Théologie Systématique: Une Introduction",
      author: "Wayne Grudem",
      isbn: "978-2-123456-78-9",
      category: "Théologie",
      type: "book",
      available: true,
      rating: 4.8,
      reviews: 156,
      description: "Une introduction complète à la théologie systématique pour étudiants et pasteurs...",
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop&q=80",
      location: "Section Théologie - A12-A15",
      publishedYear: 2020,
      pages: 1264
    },
    {
      id: 2,
      title: "Histoire du Christianisme en Afrique",
      author: "Kwame Bediako",
      isbn: "978-2-987654-32-1",
      category: "Histoire",
      type: "ebook",
      available: true,
      rating: 4.6,
      reviews: 89,
      description: "Une exploration approfondie du développement du christianisme sur le continent africain...",
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&q=80",
      location: "Collection numérique",
      publishedYear: 2019,
      pages: 456
    },
    {
      id: 3,
      title: "Philosophie Africaine: Tradition et Modernité",
      author: "Kwame Gyekye",
      isbn: "978-2-456789-12-3",
      category: "Philosophie",
      type: "book",
      available: false,
      rating: 4.5,
      reviews: 78,
      description: "Analyse des traditions philosophiques africaines face aux défis de la modernité...",
      cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=400&fit=crop&q=80",
      location: "Section Philosophie - C15",
      publishedYear: 2018,
      pages: 324,
      nextAvailable: "2024-03-20"
    },
    {
      id: 4,
      title: "Spiritualité et Développement Personnel",
      author: "Henri Nouwen",
      isbn: "978-2-789123-45-6",
      category: "Spiritualité",
      type: "book",
      available: true,
      rating: 4.7,
      reviews: 203,
      description: "Guide pratique pour l'épanouissement spirituel et personnel...",
      cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=400&fit=crop&q=80",
      location: "Section Spiritualité - D08",
      publishedYear: 2021,
      pages: 289
    },
    {
      id: 5,
      title: "Revue Théologique Africaine - Vol. 25",
      author: "Collectif",
      isbn: "ISSN 1234-5678",
      category: "Théologie",
      type: "journal",
      available: true,
      rating: 4.4,
      reviews: 45,
      description: "Édition spéciale sur l'inculturation du christianisme en Afrique...",
      cover: "https://images.unsplash.com/photo-1533327325824-76bc4e62d560?w=300&h=400&fit=crop&q=80",
      location: "Section Périodiques - P03",
      publishedYear: 2024,
      pages: 128
    },
    {
      id: 6,
      title: "Contes et Légendes du Cameroun",
      author: "Marie Atangana",
      isbn: "978-2-345678-90-1",
      category: "Littérature",
      type: "book",
      available: true,
      rating: 4.9,
      reviews: 312,
      description: "Recueil fascinant de la tradition orale camerounaise...",
      cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=400&fit=crop&q=80",
      location: "Section Littérature Africaine - L22",
      publishedYear: 2022,
      pages: 245
    }
  ];

  const filteredResults = searchResults.filter(result => {
    const matchesQuery = result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        result.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        result.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || 
                           result.category.toLowerCase().includes(selectedCategory.toLowerCase());
    
    const matchesType = selectedType === 'all' || result.type === selectedType;
    
    return matchesQuery && matchesCategory && matchesType;
  });

  const handleSearch = (e) => {
    e.preventDefault();
    // Logique de recherche
  };

  return (
    <div className="search-content">
      <div className="search-header">
        <h2>Rechercher dans la bibliothèque</h2>
        <p>Trouvez rapidement les documents que vous cherchez</p>
      </div>

      {/* Barre de recherche */}
      <div className="search-section">
        <form onSubmit={handleSearch} className="search-form">
          <div className="search-input-group">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Rechercher par titre, auteur, sujet..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button 
              type="button" 
              className="filter-toggle"
              onClick={() => setShowFilters(!showFilters)}
            >
              <FaFilter />
              Filtres
            </button>
          </div>
        </form>

        {/* Filtres */}
        {showFilters && (
          <div className="filters-panel">
            <div className="filter-group">
              <label>Catégorie</label>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="filter-select"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="filter-group">
              <label>Type de document</label>
              <select 
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="filter-select"
              >
                {types.map(type => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Résultats de recherche */}
      <div className="results-section">
        <div className="results-header">
          <h3>Résultats de recherche</h3>
          <span className="results-count">{filteredResults.length} document(s) trouvé(s)</span>
        </div>

        <div className="results-grid">
          {filteredResults.map(result => (
            <div key={result.id} className="result-card">
              <div className="result-cover">
                <img src={result.cover} alt={result.title} />
              </div>
              
              <div className="result-info">
                <div className="result-meta">
                  <span className="category-badge">{result.category}</span>
                  <span className="type-badge">{result.type}</span>
                  <div className="rating">
                    <FaStar className="star-filled" />
                    <span>{result.rating}</span>
                    <span className="reviews">({result.reviews})</span>
                  </div>
                </div>

                <h4 className="result-title">{result.title}</h4>
                <p className="result-author">par {result.author}</p>
                <p className="result-description">{result.description}</p>

                <div className="result-details">
                  <div className="detail-item">
                    <FaMapMarkerAlt size={12} />
                    <span>{result.location}</span>
                  </div>
                  <div className="detail-item">
                    <FaCalendar size={12} />
                    <span>{result.publishedYear}</span>
                  </div>
                  <div className="detail-item">
                    <FaBook size={12} />
                    <span>{result.pages} pages</span>
                  </div>
                </div>

                <div className="result-availability">
                  {result.available ? (
                    <span className="available">Disponible</span>
                  ) : (
                    <span className="unavailable">
                      Indisponible - Retour prévu le {result.nextAvailable}
                    </span>
                  )}
                </div>

                <div className="result-buttons">
                  {result.available ? (
                    <>
                      <button className="btn-primary">
                        <FaBook size={14} />
                        Emprunter
                      </button>
                      {result.type === 'ebook' && (
                        <button className="btn-secondary">
                          <FaEye size={14} />
                          Lire
                        </button>
                      )}
                    </>
                  ) : (
                    <button className="btn-secondary">
                      <FaBookmark size={14} />
                      Réserver
                    </button>
                  )}
                  <button className="btn-outline">
                    Détails
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredResults.length === 0 && searchQuery && (
          <div className="no-results">
            <FaSearch size={48} />
            <h3>Aucun résultat trouvé</h3>
            <p>Essayez avec d'autres mots-clés ou modifiez vos filtres</p>
          </div>
        )}
      </div>

      <style jsx>{`
        .search-content {
          padding: 2rem;
          min-height: 600px;
        }

        .search-header {
          margin-bottom: 2rem;
        }

        .search-header h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .search-header p {
          color: var(--text-secondary);
          font-size: 1rem;
          margin: 0;
        }

        .search-section {
          margin-bottom: 2rem;
        }

        .search-form {
          margin-bottom: 1rem;
        }

        .search-input-group {
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 12px;
          padding: 0.75rem;
          gap: 0.75rem;
        }

        .search-icon {
          color: var(--text-secondary);
          font-size: 1.1rem;
        }

        .search-input {
          flex: 1;
          background: transparent;
          border: none;
          color: var(--text-primary);
          font-size: 1rem;
          outline: none;
        }

        .search-input::placeholder {
          color: var(--text-secondary);
        }

        .filter-toggle {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(29, 79, 139, 0.1);
          border: 1px solid rgba(29, 79, 139, 0.3);
          color: #1d4f8b;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-toggle:hover {
          background: #1d4f8b;
          color: var(--dark-900);
        }

        .filters-panel {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .filter-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .filter-group label {
          color: var(--text-primary);
          font-size: 0.875rem;
          font-weight: 600;
        }

        .filter-select {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 8px;
          padding: 0.5rem;
          color: var(--text-primary);
          font-size: 0.875rem;
        }

        .filter-select:focus {
          outline: none;
          border-color: #1d4f8b;
        }

        .results-section {
          margin-top: 2rem;
        }

        .results-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .results-header h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
        }

        .results-count {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .results-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }

        .result-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .result-card:hover {
          
          border-color: rgba(29, 79, 139, 0.3);
        }

        .result-cover {
          position: relative;
          width: 120px;
          height: 160px;
          margin: 0 auto 1rem;
          border-radius: 8px;
          overflow: hidden;
        }

        .result-cover img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }


        .result-info {
          text-align: center;
        }

        .result-meta {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .category-badge {
          background: rgba(29, 79, 139, 0.2);
          color: #1d4f8b;
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 600;
        }

        .type-badge {
          background: rgba(60, 107, 139, 0.2);
          color: #3c6b8b;
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 600;
        }

        .rating {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.875rem;
        }

        .star-filled {
          color: #1d4f8b;
        }

        .reviews {
          color: var(--text-tertiary);
          font-size: 0.8rem;
        }

        .result-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .result-author {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 0.75rem;
        }

        .result-description {
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.4;
          margin-bottom: 1rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .result-details {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--text-tertiary);
          font-size: 0.8rem;
        }

        .result-availability {
          margin-bottom: 1.5rem;
        }

        .available {
          background: rgba(29, 79, 139, 0.2);
          color: #1d4f8b;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .unavailable {
          background: rgba(29, 79, 139, 0.2);
          color: #1d4f8b;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .result-buttons {
          display: flex;
          gap: 0.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: #1d4f8b;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          background: #1d4f8b;
          
        }

        .btn-secondary {
          background: rgba(60, 107, 139, 0.2);
          color: #3c6b8b;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background: rgba(60, 107, 139, 0.3);
        }

        .btn-outline {
          background: transparent;
          color: var(--text-secondary);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-outline:hover {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
        }

        .no-results {
          text-align: center;
          padding: 4rem 2rem;
          color: var(--text-secondary);
        }

        .no-results svg {
          margin-bottom: 1rem;
        }

        .no-results h3 {
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .no-results p {
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .results-grid {
            grid-template-columns: 1fr;
          }

          .filters-panel {
            grid-template-columns: 1fr;
          }

          .result-buttons {
            flex-direction: column;
          }

          .results-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Search;