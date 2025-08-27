import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaUser, 
  FaEdit,
  FaBook,
  FaHeart,
  FaHistory,
  FaCog,
  FaDownload,
  FaEye,
  FaStar,
  FaCalendar,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaIdCard,
  FaKey,
  FaBell,
  FaPalette,
  FaLanguage,
  FaShieldAlt,
  FaTrash,
  FaCheck,
  FaTimes,
  FaClock,
  FaBookmark,
  FaChartLine,
  FaAward,
  FaFileAlt,
  FaQuoteLeft,
  FaSearch,
  FaFilter,
  FaExclamationTriangle,
  FaCheckCircle,
  FaPrint,
  FaShare,
  FaClipboard,
  FaChevronLeft,
  FaChevronRight,
  FaChevronDown,
  FaPlus,
  FaMinus,
  FaSync,
  FaRegHeart,
  FaThumbsUp,
  FaThumbsDown,
  FaList,
  FaPlay,
  FaVideo,
  FaSignOutAlt,
  FaShoppingCart,
  FaBars
} from 'react-icons/fa';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isEditing, setIsEditing] = useState(false);
  
  // Données utilisateur
  const [userInfo, setUserInfo] = useState({
    firstName: 'Marie',
    lastName: 'Essomba',
    email: 'marie.essomba@exemple.com',
    phone: '+237 699 123 456',
    address: 'Yaoundé, Cameroun',
    userType: 'researcher',
    studentId: 'RES20240001',
    joinDate: '2022-03-15',
    department: 'Théologie et Sciences Religieuses',
    status: 'active',
    membershipExpiry: '2025-12-31'
  });

  // Favoris
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      title: "Spiritualité et Modernité",
      author: "Père Joseph Nkomo",
      isbn: "978-2-123456-89-0",
      category: "Théologie",
      rating: 4.8,
      addedDate: "2024-01-15",
      available: true,
      cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=400&fit=crop&q=80",
      description: "Une exploration profonde de la spiritualité dans le monde moderne..."
    },
    {
      id: 2,
      title: "Contes et Légendes du Cameroun",
      author: "Marie Atangana",
      isbn: "978-2-987654-32-1",
      category: "Littérature",
      rating: 4.6,
      addedDate: "2024-01-10",
      available: false,
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&q=80",
      description: "Recueil fascinant de la tradition orale camerounaise..."
    },
    {
      id: 3,
      title: "Philosophie Africaine Contemporaine",
      author: "Prof. Emmanuel Ngwé",
      isbn: "978-2-456789-12-3",
      category: "Philosophie",
      rating: 4.5,
      addedDate: "2024-01-08",
      available: true,
      cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=400&fit=crop&q=80",
      description: "Analyse contemporaine de la pensée philosophique africaine..."
    }
  ]);

  // Préférences
  const [preferences, setPreferences] = useState({
    language: 'fr',
    theme: 'auto',
    notifications: {
      email: true,
      sms: false,
      push: true,
      newBooks: true,
      dueDates: true,
      recommendations: false,
      newsletter: true
    },
    privacy: {
      showProfile: true,
      showActivity: false,
      showFavorites: true,
      showReadingHistory: false
    },
    reading: {
      defaultLoanPeriod: 21,
      autoRenew: false,
      reminderDays: 3,
      preferredFormat: 'both'
    }
  });

  // Statistiques du profil
  const accountStats = {
    totalLoans: 127,
    currentLoans: 5,
    overdue: 1,
    reservations: 2,
    favorites: 34,
    downloads: 89,
    fines: 2500, // en FCFA
    creditLimit: 50000
  };

  // Emprunts actuels
  const currentLoans = [
    {
      id: 1,
      title: "L'Art de la Prière",
      author: "Zacharias Tanee Fomum",
      isbn: "978-2-123456-78-9",
      callNumber: "BV210.3 .F65 2023",
      loanDate: "2024-02-15",
      dueDate: "2024-03-15",
      renewals: 1,
      maxRenewals: 3,
      status: "active",
      type: "physical",
      location: "Salle de lecture principale"
    },
    {
      id: 2,
      title: "Histoire du Cameroun Moderne",
      author: "Jean-Baptiste Sipa",
      isbn: "978-2-987654-32-1",
      callNumber: "DT571 .S58 2023",
      loanDate: "2024-02-20",
      dueDate: "2024-03-05",
      renewals: 0,
      maxRenewals: 3,
      status: "overdue",
      type: "ebook",
      location: "Collection numérique"
    }
  ];

  // Réservations
  const reservations = [
    {
      id: 1,
      title: "Théologie Systematique",
      author: "Dr. Paul Mbarga",
      isbn: "978-2-456789-12-3",
      reservationDate: "2024-02-25",
      position: 2,
      estimatedAvailability: "2024-03-10",
      status: "waiting"
    }
  ];

  // Historique récent
  const loanHistory = [
    {
      id: 1,
      title: "Développement Durable en Afrique Centrale",
      author: "Dr. Paul Mbarga",
      loanDate: "2024-01-15",
      returnDate: "2024-02-14",
      rating: 4,
      status: "returned"
    },
    {
      id: 2,
      title: "Les Royaumes Bamiléké",
      author: "Prof. Marie Essomba",
      loanDate: "2024-01-10",
      returnDate: "2024-02-09",
      rating: 5,
      status: "returned"
    }
  ];

  // Navigation
  const navigationTabs = [
    { id: 'dashboard', label: 'Accueil', icon: FaChartLine },
    { id: 'search', label: 'Rechercher', icon: FaSearch },
    { id: 'loans-history', label: 'Emprunts', icon: FaBook },
    { id: 'reading', label: 'Lecture sur place', icon: FaEye },
    { id: 'reservations', label: 'Réservations', icon: FaBookmark },
    { id: 'shop', label: 'Boutique', icon: FaShoppingCart },
    { id: 'favorites', label: 'Favoris', icon: FaHeart }
  ];

  // Sub navigation pour Emprunts & Historique
  const [loansSubTab, setLoansSubTab] = useState('current');
  const [mediaFilter, setMediaFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [cartType, setCartType] = useState('loans');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showReservationDropdown, setShowReservationDropdown] = useState({});

  // Données de simulation pour la recherche
  const searchSuggestionsData = [
    'Théologie moderne', 'Philosophie africaine', 'Histoire du Cameroun', 
    'Contes et légendes', 'Spiritualité contemporaine', 'Littérature francophone',
    'Sciences religieuses', 'Développement durable', 'Culture africaine'
  ];

  // Résultats de recherche simulés
  const searchResults = [
    {
      id: 1,
      title: "Théologie Moderne et Société",
      author: "Dr. Jean Baptiste",
      isbn: "978-2-123456-78-9",
      category: "Théologie",
      type: "book",
      available: true,
      rating: 4.5,
      description: "Une analyse approfondie de la théologie dans le contexte moderne...",
      cover: "https://images.unsplash.com/photo-1533327325824-76bc4e62d560?w=300&h=400&fit=crop&q=80",
      price: 25000,
      location: "Section A - Étagère 12"
    },
    {
      id: 2,
      title: "Philosophie Africaine Contemporaine",
      author: "Prof. Marie Atangana",
      isbn: "978-2-987654-32-1",
      category: "Philosophie",
      type: "ebook",
      available: true,
      rating: 4.8,
      description: "Exploration des courants philosophiques africains modernes...",
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop&q=80",
      price: 15000,
      location: "Collection numérique"
    }
  ];

  // Paniers
  const [loansCart, setLoansCart] = useState([]);
  const [reservationsCart, setReservationsCart] = useState([]);
  const [shopCart, setShopCart] = useState([]);

  // Utilitaires
  const calculateDaysUntilDue = (dueDate) => {
    const due = new Date(dueDate);
    const today = new Date();
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getDueDateStatus = (dueDate) => {
    const days = calculateDaysUntilDue(dueDate);
    if (days < 0) return { class: 'overdue', text: `En retard de ${Math.abs(days)} jour(s)`, color: 'danger' };
    if (days <= 3) return { class: 'due-soon', text: `${days} jour(s) restant(s)`, color: 'warning' };
    return { class: 'normal', text: `${days} jour(s) restant(s)`, color: 'success' };
  };

  const getUserTypeLabel = (type) => {
    const types = {
      student: 'Étudiant',
      researcher: 'Chercheur',
      staff: 'Personnel',
      faculty: 'Enseignant',
      external: 'Utilisateur externe'
    };
    return types[type] || type;
  };

  // Fonction de recherche avec suggestions
  const handleSearchInput = (value) => {
    setSearchQuery(value);
    if (value.length > 0) {
      const filtered = searchSuggestionsData.filter(suggestion =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSearchSuggestions(filtered.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  // Fonction d'ajout au panier
  const addToCart = (item, type) => {
    switch(type) {
      case 'loans':
        setLoansCart([...loansCart, item]);
        break;
      case 'reservations':
        setReservationsCart([...reservationsCart, item]);
        break;
      case 'shop':
        setShopCart([...shopCart, item]);
        break;
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('fr-FR').format(amount) + ' FCFA';
  };

  const handlePreferenceChange = (category, field, value) => {
    setPreferences(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value
      }
    }));
  };

  return (
    <div className="library-profile">
      
      {/* Sidebar de navigation */}
      <div className={`sidebar ${showSidebar ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-user">
            <div className="sidebar-avatar">
              <FaUser size={20} />
            </div>
            <div className="sidebar-user-info">
              <h4>{userInfo.firstName} {userInfo.lastName}</h4>
              <p>{getUserTypeLabel(userInfo.userType)}</p>
            </div>
          </div>
          <button 
            className="sidebar-close"
            onClick={() => setShowSidebar(false)}
          >
            <FaTimes size={16} />
          </button>
        </div>

        <nav className="sidebar-nav">
          {navigationTabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                className={`sidebar-item ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(tab.id);
                  setShowSidebar(false);
                }}
              >
                <Icon size={18} />
                <span>{tab.label}</span>
                {tab.id === 'loans-history' && loansCart.length > 0 && (
                  <span className="sidebar-badge">{loansCart.length}</span>
                )}
                {tab.id === 'reservations' && reservationsCart.length > 0 && (
                  <span className="sidebar-badge">{reservationsCart.length}</span>
                )}
                {tab.id === 'shop' && shopCart.length > 0 && (
                  <span className="sidebar-badge">{shopCart.length}</span>
                )}
              </button>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <div className="profile-menu-sidebar">
            <button className="sidebar-item" onClick={() => setActiveTab('account')}>
              <FaUser size={18} />
              <span>Mon Compte</span>
            </button>
            <button className="sidebar-item" onClick={() => setActiveTab('settings')}>
              <FaCog size={18} />
              <span>Paramètres</span>
            </button>
            <button className="sidebar-item logout">
              <FaSignOutAlt size={18} />
              <span>Déconnexion</span>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay pour mobile */}
      {showSidebar && <div className="sidebar-overlay" onClick={() => setShowSidebar(false)}></div>}

      {/* Header compact */}
      <header className="profile-header-compact">
        <div className="header-content">
          <button 
            className="sidebar-toggle"
            onClick={() => setShowSidebar(true)}
          >
            <FaBars size={20} />
          </button>
          
          <div className="header-title">
            <h1>Bibliothèque ZTF</h1>
          </div>

          <div className="profile-dropdown">
            <button 
              className="profile-button"
              onClick={() => setShowProfileMenu(!showProfileMenu)}
            >
              <FaUser />
              <span>Paul Durand</span>
            </button>
            {showProfileMenu && (
              <div className="dropdown-menu">
                <button onClick={() => setActiveTab('account')}>
                  <FaCog /> Mon Compte
                </button>
                <button onClick={() => setActiveTab('settings')}>
                  <FaWrench /> Paramètres
                </button>
                <button className="logout-btn">
                  <FaSignOutAlt /> Déconnexion
                </button>
              </div>
            )}
          </div>
        </div>
      </header>


      {/* Main content */}
      <main className="profile-main">
        <div className="container">

          {/* Tableau de bord */}
          {activeTab === 'dashboard' && (
            <div className="dashboard-content">
              
              {/* Profil utilisateur style réseau social */}
              <div className="profile-card">
                <div className="profile-info">
                  <div className="profile-avatar-large">
                    <FaUser size={32} />
                  </div>
                  <div className="profile-details">
                    <h2>{userInfo.firstName} {userInfo.lastName}</h2>
                    <p className="profile-subtitle">{userInfo.department}</p>
                    <div className="profile-stats-mini">
                      <span className="stat-mini">{accountStats.currentLoans} emprunts</span>
                      <span className="stat-mini">{accountStats.totalLoans} total</span>
                      <span className="stat-mini">{favorites.length} favoris</span>
                    </div>
                  </div>
                  <div className="profile-actions">
                    <div className="profile-menu-container">
                      <button 
                        className="btn-icon profile-menu-toggle" 
                        onClick={() => setShowProfileMenu(!showProfileMenu)}
                      >
                        <FaCog size={16} />
                      </button>
                      {showProfileMenu && (
                        <div className="profile-dropdown">
                          <button className="dropdown-item" onClick={() => {setActiveTab('account'); setShowProfileMenu(false);}}>
                            <FaUser size={14} />
                            Mon Compte
                          </button>
                          <button className="dropdown-item" onClick={() => {setActiveTab('settings'); setShowProfileMenu(false);}}>
                            <FaCog size={14} />
                            Paramètres
                          </button>
                          <button className="dropdown-item">
                            <FaKey size={14} />
                            Changer mot de passe
                          </button>
                          <div className="dropdown-divider"></div>
                          <button className="dropdown-item logout">
                            <FaSignOutAlt size={14} />
                            Déconnexion
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Alerte d'expiration */}
              {accountStats.overdue > 0 && (
                <div className="alert-minimal">
                  <FaExclamationTriangle size={16} />
                  <span>Vous avez {accountStats.overdue} document(s) en retard</span>
                  <button className="btn-link">Voir détails</button>
                </div>
              )}

              <div className="dashboard-grid">
                {/* Mini stats et activité récente */}
                <div className="dashboard-row">
                  <div className="mini-stats">
                    <div className="mini-stat">
                      <FaBook size={20} color="#1d4f8b" />
                      <div>
                        <span className="stat-number">{accountStats.currentLoans}</span>
                        <span className="stat-label">En cours</span>
                      </div>
                    </div>
                    <div className="mini-stat">
                      <FaBookmark size={20} color="#3c6b8b" />
                      <div>
                        <span className="stat-number">{accountStats.reservations}</span>
                        <span className="stat-label">Réservations</span>
                      </div>
                    </div>
                    <div className="mini-stat overdue">
                      <FaClock size={20} color="#f1c40e" />
                      <div>
                        <span className="stat-number">{accountStats.overdue}</span>
                        <span className="stat-label">En retard</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="recent-activity">
                    <h3>Activité récente</h3>
                    <div className="activity-list">
                      <div className="activity-item">
                        <FaBook size={16} color="#1d4f8b" />
                        <div>
                          <p>Emprunt de "Théologie Moderne"</p>
                          <span>il y a 2 heures</span>
                        </div>
                      </div>
                      <div className="activity-item">
                        <FaHeart size={16} color="#f1c40e" />
                        <div>
                          <p>Ajouté aux favoris "Philosophie Africaine"</p>
                          <span>hier</span>
                        </div>
                      </div>
                      <div className="activity-item">
                        <FaCheckCircle size={16} color="#3c6b8b" />
                        <div>
                          <p>Retour de "Contes du Cameroun"</p>
                          <span>il y a 3 jours</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Emprunts récents - pleine largeur */}
                <div className="emprunts-dashboard">
                  <div className="section-header">
                    <h3>Emprunts en cours</h3>
                    <Link to="#" className="btn btn-sm btn-outline-primary" onClick={() => setActiveTab('loans-history')}>Voir tout</Link>
                  </div>
                    <div className="section-content">
                      <div className="loan-items">
                        {currentLoans.slice(0, 3).map(loan => {
                          const dueStatus = getDueDateStatus(loan.dueDate);
                          return (
                            <div key={loan.id} className="loan-item">
                              <div className="loan-info">
                                <h5>{loan.title}</h5>
                                <p className="author">par {loan.author}</p>
                                <div className="loan-meta">
                                  <span className="call-number">{loan.callNumber}</span>
                                  <span className="location">{loan.location}</span>
                                </div>
                              </div>
                              <div className="loan-status">
                                <span className={`due-date ${dueStatus.class}`}>
                                  <FaClock size={12} />
                                  {dueStatus.text}
                                </span>
                                <div className="loan-actions">
                                  <button className="btn btn-sm btn-outline-primary">Renouveler</button>
                                  <button className="btn btn-sm btn-outline-secondary">Détails</button>
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
            </div>
          )}

          {/* Section Recherche */}
          {activeTab === 'search' && (
            <div className="search-content">
              <div className="search-header">
                <h2>Rechercher dans la bibliothèque</h2>
                <p className="search-subtitle">Trouvez rapidement les documents que vous cherchez</p>

  );
};

export default Profile;
