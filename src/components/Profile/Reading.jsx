import React, { useState } from 'react';
import { 
  FaBook,
  FaSearch,
  FaEye,
  FaClock,
  FaMapMarkerAlt,
  FaBookOpen,
  FaFilter,
  FaList,
  FaTh,
  FaChevronDown,
  FaStar,
  FaHeart,
  FaBookmark,
  FaHistory,
  FaPlus,
  FaCheck,
  FaInfoCircle
} from 'react-icons/fa';

const Reading = () => {
  const [activeTab, setActiveTab] = useState('browse');
  const [viewMode, setViewMode] = useState('grid');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [readingList, setReadingList] = useState([]);

  // Livres disponibles pour lecture sur place uniquement
  const availableBooks = [
    {
      id: 1,
      title: "Encyclopédie Théologique Complète",
      author: "Jean-Baptiste Cardinal",
      isbn: "978-2-123456-78-9",
      category: "Référence",
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop&q=80",
      description: "Ouvrage de référence complet sur la théologie chrétienne, consultation sur place uniquement",
      location: "Section Référence - R01",
      availability: "available",
      type: "reference",
      pages: 1250,
      language: "Français",
      publishYear: 2023,
      rating: 4.8,
      tags: ["Théologie", "Référence", "Doctrine"]
    },
    {
      id: 2,
      title: "Atlas Historique du Christianisme",
      author: "Marie Dubois",
      isbn: "978-2-987654-32-1",
      category: "Histoire",
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&q=80",
      description: "Atlas détaillé avec cartes et chronologies, idéal pour consultation rapide",
      location: "Section Histoire - H12",
      availability: "in_use",
      type: "atlas",
      pages: 580,
      language: "Français",
      publishYear: 2024,
      rating: 4.6,
      tags: ["Histoire", "Géographie", "Cartes"]
    },
    {
      id: 3,
      title: "Dictionnaire Hébreu-Français",
      author: "Abraham Cohen",
      isbn: "978-2-456789-12-3",
      category: "Langues",
      cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=400&fit=crop&q=80",
      description: "Dictionnaire spécialisé pour l'étude des textes hébreux bibliques",
      location: "Section Langues - L05",
      availability: "available",
      type: "dictionary",
      pages: 890,
      language: "Français/Hébreu",
      publishYear: 2023,
      rating: 4.9,
      tags: ["Langues", "Hébreu", "Dictionnaire"]
    },
    {
      id: 4,
      title: "Manuscrits de Qumrân - Fac-similés",
      author: "Institut d'Études Bibliques",
      isbn: "978-2-789012-34-5",
      category: "Archéologie",
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop&q=80",
      description: "Collection de fac-similés des manuscrits de la mer Morte, manipulation délicate requise",
      location: "Section Spéciale - S02",
      availability: "restricted",
      type: "manuscript",
      pages: 320,
      language: "Hébreu/Araméen",
      publishYear: 2022,
      rating: 5.0,
      tags: ["Archéologie", "Manuscrits", "Qumrân"]
    },
    {
      id: 5,
      title: "Concordance Biblique Exhaustive",
      author: "Équipe de Recherche ZTF",
      isbn: "978-2-345678-90-1",
      category: "Référence",
      cover: "https://images.unsplash.com/photo-1551029506-0807df4e2031?w=300&h=400&fit=crop&q=80",
      description: "Index complet de tous les termes bibliques avec références croisées",
      location: "Section Référence - R03",
      availability: "available",
      type: "concordance",
      pages: 2100,
      language: "Français",
      publishYear: 2024,
      rating: 4.7,
      tags: ["Référence", "Bible", "Concordance"]
    }
  ];

  // Historique de lecture
  const readingHistory = [
    {
      id: 101,
      title: "Encyclopédie Théologique Complète",
      author: "Jean-Baptiste Cardinal",
      sessionDate: "2024-02-25",
      duration: "3h 30min",
      pages: "pp. 245-289",
      location: "Section Référence - R01",
      notes: "Recherche sur la doctrine de la justification"
    },
    {
      id: 102,
      title: "Atlas Historique du Christianisme",
      author: "Marie Dubois",
      sessionDate: "2024-02-20",
      duration: "2h 15min",
      pages: "pp. 120-150",
      location: "Section Histoire - H12",
      notes: "Étude des routes missionnaires de Paul"
    }
  ];

  const categories = [
    { value: 'all', label: 'Toutes catégories' },
    { value: 'Référence', label: 'Référence' },
    { value: 'Histoire', label: 'Histoire' },
    { value: 'Langues', label: 'Langues' },
    { value: 'Archéologie', label: 'Archéologie' }
  ];

  const tabs = [
    { id: 'browse', label: 'Parcourir', icon: FaSearch },
    { id: 'reading-list', label: 'Ma Liste', icon: FaBookmark },
    { id: 'history', label: 'Historique', icon: FaHistory }
  ];

  const filteredBooks = availableBooks.filter(book => {
    if (categoryFilter !== 'all' && book.category !== categoryFilter) return false;
    if (searchQuery && !book.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !book.author.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const addToReadingList = (book) => {
    if (!readingList.find(item => item.id === book.id)) {
      setReadingList([...readingList, { ...book, addedDate: new Date() }]);
    }
  };

  const removeFromReadingList = (bookId) => {
    setReadingList(readingList.filter(item => item.id !== bookId));
  };

  const getAvailabilityBadge = (availability) => {
    const config = {
      available: { label: 'Disponible', color: 'success', icon: FaCheck },
      in_use: { label: 'En consultation', color: 'warning', icon: FaClock },
      restricted: { label: 'Accès restreint', color: 'info', icon: FaInfoCircle }
    };

    const { label, color, icon: Icon } = config[availability];
    return (
      <span className={`availability-badge ${color}`}>
        <Icon size={12} />
        {label}
      </span>
    );
  };

  const renderBookCard = (book, showActions = true) => (
    <div key={book.id} className={`book-card ${book.availability}`}>
      <div className="book-image">
        <img src={book.cover} alt={book.title} />
        <div className="book-type">{book.type}</div>
      </div>
      
      <div className="book-info">
        <div className="book-header">
          <h4>{book.title}</h4>
          {getAvailabilityBadge(book.availability)}
        </div>
        
        <p className="book-author">{book.author}</p>
        <p className="book-description">{book.description}</p>
        
        <div className="book-meta">
          <div className="meta-item">
            <FaMapMarkerAlt size={12} />
            <span>{book.location}</span>
          </div>
          <div className="meta-item">
            <FaBook size={12} />
            <span>{book.pages} pages</span>
          </div>
          <div className="meta-item">
            <FaStar size={12} />
            <span>{book.rating}/5</span>
          </div>
        </div>

        <div className="book-tags">
          {book.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>

        {showActions && (
          <div className="book-actions">
            <button 
              className="action-btn primary"
              disabled={book.availability === 'in_use'}
              onClick={() => console.log(`Commencer la lecture: ${book.title}`)}
            >
              <FaBookOpen size={14} />
              {book.availability === 'available' ? 'Lire sur place' : 'Indisponible'}
            </button>
            
            <button 
              className="action-btn secondary"
              onClick={() => addToReadingList(book)}
              disabled={readingList.find(item => item.id === book.id)}
            >
              <FaPlus size={14} />
              {readingList.find(item => item.id === book.id) ? 'Déjà ajouté' : 'Ajouter à ma liste'}
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const renderHistoryItem = (item) => (
    <div key={item.id} className="history-item">
      <div className="history-info">
        <h4>{item.title}</h4>
        <p className="history-author">{item.author}</p>
        
        <div className="history-meta">
          <div className="meta-item">
            <FaClock size={12} />
            <span>{item.sessionDate} - {item.duration}</span>
          </div>
          <div className="meta-item">
            <FaBook size={12} />
            <span>{item.pages}</span>
          </div>
          <div className="meta-item">
            <FaMapMarkerAlt size={12} />
            <span>{item.location}</span>
          </div>
        </div>

        <div className="history-notes">
          <strong>Notes:</strong> {item.notes}
        </div>
      </div>
    </div>
  );

  return (
    <div className="reading-container">
      <div className="reading-header">
        <h2>Lecture sur Place</h2>
        <p>Consultez nos ouvrages de référence et documents spéciaux directement à la bibliothèque</p>
      </div>

      {/* Navigation par onglets */}
      <div className="reading-tabs">
        {tabs.map(tab => {
          const Icon = tab.icon;
          const count = tab.id === 'reading-list' ? readingList.length : 
                       tab.id === 'history' ? readingHistory.length : null;
          return (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <Icon size={16} />
              <span>{tab.label}</span>
              {count > 0 && <span className="tab-count">{count}</span>}
            </button>
          );
        })}
      </div>

      {/* Contrôles (visible uniquement pour "Parcourir") */}
      {activeTab === 'browse' && (
        <div className="reading-controls">
          <div className="search-filter">
            <div className="search-box">
              <FaSearch size={16} />
              <input
                type="text"
                placeholder="Rechercher un livre ou un auteur..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="filter-dropdown">
              <button 
                className="filter-trigger"
                onClick={() => setShowFilters(!showFilters)}
              >
                <FaFilter size={14} />
                <span>{categories.find(cat => cat.value === categoryFilter)?.label}</span>
                <FaChevronDown size={12} className={`chevron ${showFilters ? 'open' : ''}`} />
              </button>
              
              {showFilters && (
                <div className="filter-menu">
                  {categories.map(category => (
                    <button
                      key={category.value}
                      className={`filter-option ${categoryFilter === category.value ? 'active' : ''}`}
                      onClick={() => {
                        setCategoryFilter(category.value);
                        setShowFilters(false);
                      }}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
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
      )}

      {/* Contenu */}
      <div className="reading-content">
        {activeTab === 'browse' && (
          <>
            <div className="results-info">
              {filteredBooks.length} livre(s) disponible(s) pour consultation sur place
            </div>
            
            <div className={`books-grid ${viewMode}`}>
              {filteredBooks.map(book => renderBookCard(book))}
            </div>
          </>
        )}

        {activeTab === 'reading-list' && (
          <>
            {readingList.length > 0 ? (
              <>
                <div className="results-info">
                  {readingList.length} livre(s) dans votre liste de lecture
                </div>
                <div className={`books-grid ${viewMode}`}>
                  {readingList.map(book => (
                    <div key={book.id} className="book-card">
                      {renderBookCard(book, false)}
                      <div className="list-actions">
                        <button 
                          className="remove-btn"
                          onClick={() => removeFromReadingList(book.id)}
                        >
                          Retirer de la liste
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="empty-state">
                <FaBookmark size={48} />
                <h3>Liste vide</h3>
                <p>Ajoutez des livres à votre liste de lecture pour y accéder rapidement.</p>
              </div>
            )}
          </>
        )}

        {activeTab === 'history' && (
          <>
            {readingHistory.length > 0 ? (
              <>
                <div className="results-info">
                  {readingHistory.length} session(s) de lecture récente(s)
                </div>
                <div className="history-list">
                  {readingHistory.map(renderHistoryItem)}
                </div>
              </>
            ) : (
              <div className="empty-state">
                <FaHistory size={48} />
                <h3>Aucun historique</h3>
                <p>Vos sessions de lecture sur place apparaîtront ici.</p>
              </div>
            )}
          </>
        )}
      </div>

      <style jsx>{`
        .reading-container {
          background: var(--bg-primary);
          min-height: 100vh;
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .reading-header {
          margin-bottom: 2rem;
        }

        .reading-header h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .reading-header p {
          color: var(--text-secondary);
          font-size: 1rem;
        }

        .reading-tabs {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .tab-btn {
          background: transparent;
          border: none;
          padding: 1rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          border-bottom: 2px solid transparent;
          position: relative;
        }

        .tab-btn:hover {
          color: #1d4f8b;
        }

        .tab-btn.active {
          color: #1d4f8b;
          border-bottom-color: #1d4f8b;
        }

        .tab-count {
          background: #1d4f8b;
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: 10px;
          font-size: 0.7rem;
          font-weight: 600;
          min-width: 20px;
          text-align: center;
        }

        .reading-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .search-filter {
          display: flex;
          gap: 1rem;
          align-items: center;
          flex: 1;
        }

        .search-box {
          position: relative;
          flex: 1;
          max-width: 400px;
        }

        .search-box svg {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-tertiary);
        }

        .search-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          padding: 0.75rem 1rem 0.75rem 2.5rem;
          color: var(--text-primary);
          font-size: 0.875rem;
        }

        .search-input:focus {
          outline: none;
          border-color: #1d4f8b;
        }

        .search-input::placeholder {
          color: var(--text-tertiary);
        }

        .filter-dropdown {
          position: relative;
        }

        .filter-trigger {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          padding: 0.75rem 1rem;
          color: var(--text-primary);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          min-width: 160px;
          justify-content: space-between;
        }

        .filter-trigger:hover {
          background: rgba(255, 255, 255, 0.12);
        }

        .chevron {
          transition: transform 0.3s ease;
        }

        .chevron.open {
          transform: rotate(180deg);
        }

        .filter-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: var(--bg-secondary);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          margin-top: 0.25rem;
          z-index: 10;
          max-height: 200px;
          overflow-y: auto;
        }

        .filter-option {
          width: 100%;
          background: transparent;
          border: none;
          padding: 0.75rem 1rem;
          color: var(--text-primary);
          cursor: pointer;
          text-align: left;
          transition: background 0.3s ease;
        }

        .filter-option:hover {
          background: rgba(255, 255, 255, 0.08);
        }

        .filter-option.active {
          background: rgba(29, 79, 139, 0.1);
          color: #1d4f8b;
        }

        .view-controls {
          display: flex;
          gap: 0.5rem;
        }

        .view-btn {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          padding: 0.75rem;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .view-btn:hover {
          background: rgba(29, 79, 139, 0.1);
          color: #1d4f8b;
        }

        .view-btn.active {
          background: #1d4f8b;
          color: white;
          border-color: #1d4f8b;
        }

        .results-info {
          margin-bottom: 1.5rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .books-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 1.5rem;
          margin: 0 auto;
        }

        .books-grid.list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .book-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .books-grid.list .book-card {
          display: flex;
          gap: 1rem;
        }

        .book-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(29, 79, 139, 0.3);
        }

        .book-card.in_use {
          opacity: 0.7;
        }

        .book-image {
          position: relative;
          width: 100%;
          height: 200px;
          margin-bottom: 1rem;
        }

        .books-grid.list .book-image {
          width: 120px;
          height: 160px;
          margin-bottom: 0;
          flex-shrink: 0;
        }

        .book-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
        }

        .book-type {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          background: #1d4f8b;
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .book-info {
          flex: 1;
        }

        .book-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
          gap: 0.5rem;
        }

        .book-header h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
          line-height: 1.3;
        }

        .book-author {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }

        .book-description {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
          line-height: 1.4;
        }

        .book-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .book-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .tag {
          background: rgba(29, 79, 139, 0.1);
          color: #1d4f8b;
          padding: 0.15rem 0.4rem;
          border-radius: 8px;
          font-size: 0.7rem;
          font-weight: 500;
        }

        .availability-badge {
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          white-space: nowrap;
        }

        .availability-badge.success {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
        }

        .availability-badge.warning {
          background: rgba(251, 191, 36, 0.1);
          color: #fbbf24;
        }

        .availability-badge.info {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
        }

        .book-actions {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .action-btn {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex: 1;
          justify-content: center;
        }

        .action-btn.primary {
          background: #1d4f8b;
          color: white;
        }

        .action-btn.primary:hover:not(:disabled) {
          background: #1a4480;
        }

        .action-btn.primary:disabled {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-tertiary);
          cursor: not-allowed;
        }

        .action-btn.secondary {
          background: rgba(255, 255, 255, 0.08);
          color: var(--text-secondary);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .action-btn.secondary:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.12);
          color: var(--text-primary);
        }

        .action-btn.secondary:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .list-actions {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .remove-btn {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.2);
          border-radius: 8px;
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .remove-btn:hover {
          background: rgba(239, 68, 68, 0.2);
        }

        .history-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .history-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
        }

        .history-item h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .history-author {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .history-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .history-notes {
          font-size: 0.9rem;
          color: var(--text-secondary);
          font-style: italic;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 8px;
          border-left: 3px solid #1d4f8b;
        }

        .empty-state {
          text-align: center;
          padding: 4rem 2rem;
          color: var(--text-tertiary);
        }

        .empty-state h3 {
          font-size: 1.5rem;
          color: var(--text-primary);
          margin: 1rem 0 0.5rem;
        }

        .empty-state p {
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .reading-container {
            padding: 1rem;
          }

          .reading-controls {
            flex-direction: column;
            align-items: stretch;
          }

          .search-filter {
            flex-direction: column;
          }

          .books-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .books-grid.list .book-card {
            flex-direction: column;
          }

          .books-grid.list .book-image {
            width: 100%;
            height: 200px;
          }

          .reading-tabs {
            flex-wrap: wrap;
          }

          .tab-btn {
            padding: 0.75rem 1rem;
            font-size: 0.875rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Reading;