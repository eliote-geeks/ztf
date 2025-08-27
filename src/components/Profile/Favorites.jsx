import React, { useState } from 'react';
import { 
  FaHeart,
  FaStar,
  FaBook,
  FaEye,
  FaTrash,
  FaShare,
  FaFilter,
  FaSearch,
  FaSort,
  FaList,
  FaTh,
  FaDownload,
  FaBookmark,
  FaCalendar,
  FaTag
} from 'react-icons/fa';

const Favorites = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('date');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const [favorites, setFavorites] = useState([
    {
      id: 1,
      title: "Théologie Systématique: Une Introduction",
      author: "Wayne Grudem",
      isbn: "978-2-123456-78-9",
      category: "Théologie",
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop&q=80",
      addedDate: "2024-02-20",
      rating: 5,
      available: true,
      type: "book",
      description: "Une introduction complète à la théologie systématique pour étudiants et pasteurs.",
      tags: ["théologie", "doctrine", "étude biblique"],
      personalNote: "Excellent manuel de référence pour mes études"
    },
    {
      id: 2,
      title: "Histoire du Christianisme en Afrique",
      author: "Kwame Bediako",
      isbn: "978-2-987654-32-1",
      category: "Histoire",
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&q=80",
      addedDate: "2024-02-15",
      rating: 4,
      available: true,
      type: "ebook",
      description: "Une exploration approfondie du développement du christianisme sur le continent africain.",
      tags: ["histoire", "afrique", "christianisme"],
      personalNote: "Perspective unique sur l'histoire africaine"
    },
    {
      id: 3,
      title: "Philosophie Africaine Contemporaine",
      author: "Kwame Gyekye",
      isbn: "978-2-456789-12-3",
      category: "Philosophie",
      cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=400&fit=crop&q=80",
      addedDate: "2024-02-10",
      rating: 4,
      available: false,
      type: "book",
      description: "Analyse des traditions philosophiques africaines face aux défis de la modernité.",
      tags: ["philosophie", "afrique", "modernité"],
      personalNote: "Important pour comprendre la pensée africaine moderne"
    },
    {
      id: 4,
      title: "Contes et Légendes du Cameroun",
      author: "Marie Atangana",
      isbn: "978-2-345678-90-1",
      category: "Littérature",
      cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=400&fit=crop&q=80",
      addedDate: "2024-02-05",
      rating: 5,
      available: true,
      type: "book",
      description: "Recueil fascinant de la tradition orale camerounaise.",
      tags: ["littérature", "cameroun", "contes"],
      personalNote: "Magnifique collection de notre patrimoine oral"
    },
    {
      id: 5,
      title: "Spiritualité et Développement Personnel",
      author: "Henri Nouwen",
      isbn: "978-2-789123-45-6",
      category: "Spiritualité",
      cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=400&fit=crop&q=80",
      addedDate: "2024-01-28",
      rating: 4,
      available: true,
      type: "book",
      description: "Guide pratique pour l'épanouissement spirituel et personnel.",
      tags: ["spiritualité", "développement", "croissance"],
      personalNote: "Lecture inspirante pour la croissance spirituelle"
    },
    {
      id: 6,
      title: "Revue Théologique Africaine - Vol. 25",
      author: "Collectif",
      isbn: "ISSN 1234-5678",
      category: "Théologie",
      cover: "https://images.unsplash.com/photo-1533327325824-76bc4e62d560?w=300&h=400&fit=crop&q=80",
      addedDate: "2024-01-20",
      rating: 4,
      available: true,
      type: "journal",
      description: "Édition spéciale sur l'inculturation du christianisme en Afrique.",
      tags: ["théologie", "afrique", "inculturation"],
      personalNote: "Articles très pertinents sur le contexte africain"
    }
  ]);

  const categories = [
    { value: 'all', label: 'Toutes catégories' },
    { value: 'Théologie', label: 'Théologie' },
    { value: 'Histoire', label: 'Histoire' },
    { value: 'Philosophie', label: 'Philosophie' },
    { value: 'Littérature', label: 'Littérature' },
    { value: 'Spiritualité', label: 'Spiritualité' }
  ];

  const sortOptions = [
    { value: 'date', label: 'Date d\'ajout' },
    { value: 'title', label: 'Titre' },
    { value: 'author', label: 'Auteur' },
    { value: 'rating', label: 'Note' },
    { value: 'category', label: 'Catégorie' }
  ];

  // Filtrage et tri
  const filteredAndSortedFavorites = favorites
    .filter(fav => {
      const matchesSearch = searchQuery === '' || 
        fav.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fav.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fav.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = categoryFilter === 'all' || fav.category === categoryFilter;
      
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch(sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'author':
          return a.author.localeCompare(b.author);
        case 'rating':
          return b.rating - a.rating;
        case 'category':
          return a.category.localeCompare(b.category);
        case 'date':
        default:
          return new Date(b.addedDate) - new Date(a.addedDate);
      }
    });

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter(fav => fav.id !== id));
  };

  const renderStarRating = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        style={{ 
          color: i < rating ? '#1d4f8b' : '#34495e',
          fontSize: '0.9rem'
        }}
      />
    ));
  };

  const FavoriteCard = ({ favorite }) => (
    <div className="favorite-card">
      <div className="favorite-cover">
        <img src={favorite.cover} alt={favorite.title} />
        <div className="favorite-overlay">
          <button className="overlay-btn" title="Voir détails">
            <FaEye />
          </button>
          <button className="overlay-btn" title="Partager">
            <FaShare />
          </button>
          <button 
            className="overlay-btn remove"
            title="Retirer des favoris"
            onClick={() => removeFromFavorites(favorite.id)}
          >
            <FaTrash />
          </button>
        </div>
        <div className="availability-indicator">
          {favorite.available ? (
            <span className="available">Disponible</span>
          ) : (
            <span className="unavailable">Indisponible</span>
          )}
        </div>
      </div>

      <div className="favorite-info">
        <div className="favorite-meta">
          <span className="category-tag">{favorite.category}</span>
          <span className="type-tag">{favorite.type}</span>
        </div>

        <h4 className="favorite-title">{favorite.title}</h4>
        <p className="favorite-author">par {favorite.author}</p>
        
        <div className="rating-section">
          <div className="stars">
            {renderStarRating(favorite.rating)}
          </div>
          <span className="rating-text">Votre note</span>
        </div>

        <p className="favorite-description">{favorite.description}</p>

        {favorite.personalNote && (
          <div className="personal-note">
            <FaTag size={12} />
            <span>"{favorite.personalNote}"</span>
          </div>
        )}

        <div className="favorite-tags">
          {favorite.tags.map(tag => (
            <span key={tag} className="tag">#{tag}</span>
          ))}
        </div>

        <div className="favorite-actions">
          {favorite.available ? (
            <button className="action-btn primary">
              <FaBook size={14} />
              Emprunter
            </button>
          ) : (
            <button className="action-btn secondary">
              <FaBookmark size={14} />
              Réserver
            </button>
          )}
          {favorite.type === 'ebook' && (
            <button className="action-btn outline">
              <FaEye size={14} />
              Lire
            </button>
          )}
        </div>
      </div>
    </div>
  );

  const favoriteStats = {
    total: favorites.length,
    available: favorites.filter(f => f.available).length,
    averageRating: favorites.reduce((acc, f) => acc + f.rating, 0) / favorites.length,
    categories: [...new Set(favorites.map(f => f.category))].length
  };

  return (
    <div className="favorites-content">
      <div className="favorites-header">
        <h2>Mes favoris</h2>
        <p>Gérez votre collection personnelle de documents préférés</p>
      </div>

      {/* Statistiques */}
      <div className="favorites-stats">
        <div className="stat-item">
          <FaHeart className="stat-icon" style={{ color: '#1d4f8b' }} />
          <div>
            <span className="stat-number">{favoriteStats.total}</span>
            <span className="stat-label">Favoris</span>
          </div>
        </div>
        <div className="stat-item">
          <FaBook className="stat-icon" style={{ color: '#1d4f8b' }} />
          <div>
            <span className="stat-number">{favoriteStats.available}</span>
            <span className="stat-label">Disponibles</span>
          </div>
        </div>
        <div className="stat-item">
          <FaStar className="stat-icon" style={{ color: '#1d4f8b' }} />
          <div>
            <span className="stat-number">{favoriteStats.averageRating.toFixed(1)}</span>
            <span className="stat-label">Note moyenne</span>
          </div>
        </div>
        <div className="stat-item">
          <FaTag className="stat-icon" style={{ color: '#3498db' }} />
          <div>
            <span className="stat-number">{favoriteStats.categories}</span>
            <span className="stat-label">Catégories</span>
          </div>
        </div>
      </div>

      {/* Contrôles */}
      <div className="controls-section">
        <div className="search-filter-group">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Rechercher dans vos favoris..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
          
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="filter-select"
          >
            {categories.map(cat => (
              <option key={cat.value} value={cat.value}>{cat.label}</option>
            ))}
          </select>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="filter-select"
          >
            {sortOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        <div className="view-controls">
          <button
            className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
          >
            <FaTh />
          </button>
          <button
            className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => setViewMode('list')}
          >
            <FaList />
          </button>
        </div>
      </div>

      {/* Résultats */}
      <div className="results-info">
        <span>{filteredAndSortedFavorites.length} favori(s) affiché(s)</span>
      </div>

      {/* Grille/Liste des favoris */}
      {filteredAndSortedFavorites.length > 0 ? (
        <div className={`favorites-grid ${viewMode}`}>
          {filteredAndSortedFavorites.map(favorite => (
            <FavoriteCard key={favorite.id} favorite={favorite} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          {searchQuery || categoryFilter !== 'all' ? (
            <>
              <FaSearch size={48} />
              <h3>Aucun résultat</h3>
              <p>Essayez de modifier vos critères de recherche</p>
              <button 
                className="btn-secondary"
                onClick={() => {
                  setSearchQuery('');
                  setCategoryFilter('all');
                }}
              >
                Effacer les filtres
              </button>
            </>
          ) : (
            <>
              <FaHeart size={48} />
              <h3>Aucun favori</h3>
              <p>Ajoutez des documents à vos favoris pour les retrouver facilement</p>
              <button className="btn-primary">
                <FaSearch size={14} />
                Parcourir la bibliothèque
              </button>
            </>
          )}
        </div>
      )}

      <style jsx>{`
        .favorites-content {
          padding: 2rem;
          min-height: 600px;
        }

        .favorites-header {
          margin-bottom: 2rem;
        }

        .favorites-header h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .favorites-header p {
          color: var(--text-secondary);
          font-size: 1rem;
          margin: 0;
        }

        .favorites-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 1.5rem;
          transition: transform 0.2s ease;
        }

        .stat-item:hover {
          
        }

        .stat-icon {
          font-size: 1.5rem;
        }

        .stat-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          display: block;
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .controls-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .search-filter-group {
          display: flex;
          gap: 1rem;
          flex: 1;
        }

        .search-box {
          position: relative;
          flex: 1;
          max-width: 300px;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .search-input {
          width: 100%;
          padding: 0.75rem 0.75rem 0.75rem 2.5rem;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 8px;
          color: var(--text-primary);
          font-size: 0.875rem;
        }

        .search-input:focus {
          outline: none;
          border-color: #1d4f8b;
        }

        .search-input::placeholder {
          color: var(--text-secondary);
        }

        .filter-select {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 8px;
          padding: 0.75rem;
          color: var(--text-primary);
          font-size: 0.875rem;
          min-width: 150px;
        }

        .filter-select:focus {
          outline: none;
          border-color: #1d4f8b;
        }

        .view-controls {
          display: flex;
          gap: 0.5rem;
        }

        .view-btn {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 8px;
          padding: 0.5rem;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .view-btn.active {
          background: #1d4f8b;
          color: white;
          border-color: #1d4f8b;
        }

        .results-info {
          margin-bottom: 2rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .favorites-grid {
          display: grid;
          gap: 2rem;
        }

        .favorites-grid.grid {
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        }

        .favorites-grid.list {
          grid-template-columns: 1fr;
        }

        .favorite-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .favorite-card:hover {
          
          border-color: rgba(29, 79, 139, 0.3);
        }

        .favorites-grid.list .favorite-card {
          display: flex;
          align-items: stretch;
        }

        .favorite-cover {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
        }

        .favorites-grid.list .favorite-cover {
          width: 150px;
          height: auto;
        }

        .favorite-cover img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .favorite-overlay {
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

        .favorite-card:hover .favorite-overlay {
          opacity: 1;
        }

        .overlay-btn {
          background: rgba(255, 255, 255, 0.9);
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1d4f8b;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .overlay-btn:hover {
          background: white;
          transform: scale(1.1);
        }

        .overlay-btn.remove:hover {
          background: rgba(29, 79, 139, 0.8);
        }

        .availability-indicator {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
        }

        .available {
          background: rgba(29, 79, 139, 0.9);
          color: #1d4f8b;
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 600;
        }

        .unavailable {
          background: rgba(29, 79, 139, 0.9);
          color: #1d4f8b;
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 600;
        }

        .favorite-info {
          padding: 1.5rem;
          flex: 1;
        }

        .favorite-meta {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .category-tag {
          background: rgba(29, 79, 139, 0.2);
          color: #1d4f8b;
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 600;
        }

        .type-tag {
          background: rgba(60, 107, 139, 0.2);
          color: #3c6b8b;
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 600;
        }

        .favorite-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .favorite-author {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 0.75rem;
        }

        .rating-section {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .rating-text {
          color: var(--text-tertiary);
          font-size: 0.8rem;
        }

        .favorite-description {
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.4;
          margin-bottom: 1rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .personal-note {
          background: rgba(29, 79, 139, 0.1);
          border-left: 3px solid #1d4f8b;
          padding: 0.5rem;
          margin-bottom: 1rem;
          font-size: 0.8rem;
          color: var(--text-secondary);
          font-style: italic;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .favorite-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tag {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-tertiary);
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.7rem;
        }

        .favorite-actions {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .action-btn {
          padding: 0.4rem 0.75rem;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          justify-content: center;
        }

        .action-btn.primary {
          background: #1d4f8b;
          color: white;
        }

        .action-btn.primary:hover {
          background: #1d4f8b;
          
        }

        .action-btn.secondary {
          background: rgba(60, 107, 139, 0.2);
          color: #3c6b8b;
        }

        .action-btn.secondary:hover {
          background: rgba(60, 107, 139, 0.3);
        }

        .action-btn.outline {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: var(--text-secondary);
        }

        .action-btn.outline:hover {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
        }

        .empty-state {
          grid-column: 1 / -1;
          text-align: center;
          padding: 4rem 2rem;
          color: var(--text-secondary);
        }

        .empty-state svg {
          margin-bottom: 1rem;
          opacity: 0.5;
        }

        .empty-state h3 {
          color: var(--text-primary);
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }

        .empty-state p {
          margin-bottom: 2rem;
          font-size: 1rem;
        }

        .btn-primary,
        .btn-secondary {
          padding: 0.5rem 0.75rem;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-primary {
          background: #1d4f8b;
          color: white;
        }

        .btn-primary:hover {
          background: #1d4f8b;
          
        }

        .btn-secondary {
          background: rgba(60, 107, 139, 0.2);
          color: #3c6b8b;
        }

        .btn-secondary:hover {
          background: rgba(60, 107, 139, 0.3);
        }

        @media (max-width: 768px) {
          .controls-section {
            flex-direction: column;
            align-items: stretch;
          }

          .search-filter-group {
            flex-direction: column;
          }

          .search-box {
            max-width: none;
          }

          .favorites-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .favorites-grid.list .favorite-card {
            flex-direction: column;
          }

          .favorites-grid.list .favorite-cover {
            width: 100%;
            height: 200px;
          }

          .favorite-actions {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Favorites;