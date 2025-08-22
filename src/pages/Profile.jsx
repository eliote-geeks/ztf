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
  FaPlus,
  FaMinus,
  FaSync,
  FaRegHeart,
  FaThumbsUp,
  FaThumbsDown,
  FaList
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
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=280&fit=crop",
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
      cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&h=280&fit=crop",
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
      cover: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=200&h=280&fit=crop",
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
    { id: 'dashboard', label: 'Tableau de bord', icon: FaChartLine },
    { id: 'loans', label: 'Emprunts', icon: FaBook },
    { id: 'reservations', label: 'Réservations', icon: FaBookmark },
    { id: 'history', label: 'Historique', icon: FaHistory },
    { id: 'favorites', label: 'Favoris', icon: FaHeart },
    { id: 'account', label: 'Mon Compte', icon: FaUser },
    { id: 'settings', label: 'Paramètres', icon: FaCog }
  ];

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
      
      {/* Header professionnel */}
      <header className="profile-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3">
              <div className="user-avatar-section">
                <div className="user-avatar">
                  <FaUser size={40} />
                </div>
                <span className={`user-status ${userInfo.status}`}>
                  {userInfo.status === 'active' ? 'Actif' : 'Inactif'}
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="user-details">
                <h1 className="user-name">{userInfo.firstName} {userInfo.lastName}</h1>
                <div className="user-meta">
                  <span className="user-type">
                    <FaGraduationCap size={14} />
                    {getUserTypeLabel(userInfo.userType)}
                  </span>
                  <span className="user-id">
                    <FaIdCard size={14} />
                    {userInfo.studentId}
                  </span>
                  <span className="department">
                    {userInfo.department}
                  </span>
                </div>
                <div className="membership-info">
                  <span>Membre depuis {new Date(userInfo.joinDate).toLocaleDateString('fr-FR')}</span>
                  <span>Expire le {new Date(userInfo.membershipExpiry).toLocaleDateString('fr-FR')}</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="quick-actions">
                <button className="btn btn-primary">
                  <FaSearch size={14} />
                  Rechercher
                </button>
                <button className="btn btn-outline-primary">
                  <FaPrint size={14} />
                  Imprimer
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Barre de navigation */}
      <nav className="profile-navigation">
        <div className="container">
          <div className="nav-tabs-container">
            {navigationTabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Contenu principal */}
      <main className="profile-main">
        <div className="container">

          {/* Tableau de bord */}
          {activeTab === 'dashboard' && (
            <div className="dashboard-content">
              
              {/* Alertes importantes */}
              {accountStats.overdue > 0 && (
                <div className="alert alert-warning">
                  <FaExclamationTriangle />
                  <span>Vous avez {accountStats.overdue} document(s) en retard. Veuillez les retourner rapidement.</span>
                </div>
              )}

              <div className="row g-4">
                
                {/* Statistiques rapides */}
                <div className="col-12">
                  <div className="stats-grid">
                    <div className="stat-card">
                      <div className="stat-icon text-primary">
                        <FaBook />
                      </div>
                      <div className="stat-content">
                        <h3>{accountStats.currentLoans}</h3>
                        <p>Emprunts actuels</p>
                      </div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-icon text-warning">
                        <FaClock />
                      </div>
                      <div className="stat-content">
                        <h3>{accountStats.overdue}</h3>
                        <p>En retard</p>
                      </div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-icon text-info">
                        <FaBookmark />
                      </div>
                      <div className="stat-content">
                        <h3>{accountStats.reservations}</h3>
                        <p>Réservations</p>
                      </div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-icon text-success">
                        <FaCheckCircle />
                      </div>
                      <div className="stat-content">
                        <h3>{accountStats.totalLoans}</h3>
                        <p>Total emprunts</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Emprunts récents */}
                <div className="col-lg-8">
                  <div className="section-card">
                    <div className="section-header">
                      <h3>Emprunts en cours</h3>
                      <Link to="#" className="btn btn-sm btn-outline-primary">Voir tout</Link>
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

                {/* Informations du compte */}
                <div className="col-lg-4">
                  <div className="section-card">
                    <div className="section-header">
                      <h3>Informations du compte</h3>
                    </div>
                    <div className="section-content">
                      <div className="account-info-list">
                        <div className="info-item">
                          <span className="label">Limite d'emprunt</span>
                          <span className="value">{accountStats.currentLoans}/10</span>
                        </div>
                        <div className="info-item">
                          <span className="label">Amendes dues</span>
                          <span className="value text-danger">{formatCurrency(accountStats.fines)}</span>
                        </div>
                        <div className="info-item">
                          <span className="label">Crédit restant</span>
                          <span className="value">{formatCurrency(accountStats.creditLimit - accountStats.fines)}</span>
                        </div>
                        <div className="info-item">
                          <span className="label">Statut</span>
                          <span className={`value status-${userInfo.status}`}>
                            {userInfo.status === 'active' ? 'Compte actif' : 'Compte suspendu'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Réservations récentes */}
                  <div className="section-card">
                    <div className="section-header">
                      <h3>Réservations</h3>
                    </div>
                    <div className="section-content">
                      {reservations.length > 0 ? (
                        <div className="reservation-items">
                          {reservations.map(reservation => (
                            <div key={reservation.id} className="reservation-item">
                              <h6>{reservation.title}</h6>
                              <p className="author">par {reservation.author}</p>
                              <div className="reservation-status">
                                <span>Position: {reservation.position}</span>
                                <span>Disponible: {new Date(reservation.estimatedAvailability).toLocaleDateString('fr-FR')}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="no-data">Aucune réservation en cours</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section Emprunts */}
          {activeTab === 'loans' && (
            <div className="loans-content">
              {/* En-tête avec statistiques */}
              <div className="loans-header">
                <div className="loans-stats">
                  <div className="stat-card-mini active-loans">
                    <FaBook className="stat-icon" />
                    <div className="stat-info">
                      <h3>{accountStats.currentLoans}</h3>
                      <p>Emprunts actifs</p>
                    </div>
                  </div>
                  <div className="stat-card-mini overdue-loans">
                    <FaExclamationTriangle className="stat-icon" />
                    <div className="stat-info">
                      <h3>{accountStats.overdue}</h3>
                      <p>En retard</p>
                    </div>
                  </div>
                  <div className="stat-card-mini renewals">
                    <FaClock className="stat-icon" />
                    <div className="stat-info">
                      <h3>3</h3>
                      <p>Renouvellements</p>
                    </div>
                  </div>
                </div>
                <div className="loans-actions">
                  <div className="search-box">
                    <FaSearch className="search-icon" />
                    <input type="text" placeholder="Rechercher un document..." className="search-input" />
                  </div>
                  <div className="filter-buttons">
                    <button className="filter-btn active">Tous</button>
                    <button className="filter-btn">En cours</button>
                    <button className="filter-btn">En retard</button>
                    <button className="filter-btn">E-books</button>
                  </div>
                </div>
              </div>

              {/* Cartes d'emprunts */}
              <div className="loans-grid">
                {currentLoans.map(loan => {
                  const dueStatus = getDueDateStatus(loan.dueDate);
                  return (
                    <div key={loan.id} className={`loan-card ${dueStatus.class}`}>
                      <div className="loan-card-header">
                        <div className="document-type">
                          {loan.type === 'ebook' ? <FaFileAlt /> : <FaBook />}
                          {loan.type === 'ebook' ? 'E-book' : 'Livre'}
                        </div>
                        <div className={`status-badge ${dueStatus.class}`}>
                          {dueStatus.class === 'overdue' ? <FaExclamationTriangle /> : <FaClock />}
                          {dueStatus.text}
                        </div>
                      </div>
                      
                      <div className="loan-card-body">
                        <h4 className="document-title">{loan.title}</h4>
                        <p className="document-author">par {loan.author}</p>
                        
                        <div className="document-details">
                          <div className="detail-item">
                            <FaIdCard className="detail-icon" />
                            <span>ISBN: {loan.isbn}</span>
                          </div>
                          <div className="detail-item">
                            <FaBookmark className="detail-icon" />
                            <span>{loan.callNumber}</span>
                          </div>
                          <div className="detail-item">
                            <FaMapMarkerAlt className="detail-icon" />
                            <span>{loan.location}</span>
                          </div>
                        </div>
                        
                        <div className="loan-timeline">
                          <div className="timeline-item">
                            <span className="timeline-label">Emprunté le</span>
                            <span className="timeline-date">{new Date(loan.loanDate).toLocaleDateString('fr-FR')}</span>
                          </div>
                          <div className="timeline-item">
                            <span className="timeline-label">À retourner le</span>
                            <span className="timeline-date">{new Date(loan.dueDate).toLocaleDateString('fr-FR')}</span>
                          </div>
                        </div>
                        
                        <div className="renewal-info">
                          <div className="renewal-count">
                            <span>Renouvellements: {loan.renewals}/{loan.maxRenewals}</span>
                            <div className="renewal-progress">
                              <div 
                                className="renewal-bar" 
                                style={{width: `${(loan.renewals / loan.maxRenewals) * 100}%`}}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="loan-card-footer">
                        <button 
                          className="btn btn-primary btn-renew"
                          disabled={loan.renewals >= loan.maxRenewals}
                        >
                          <FaClock />
                          Renouveler
                        </button>
                        <button className="btn btn-outline-secondary btn-details">
                          <FaEye />
                          Détails
                        </button>
                        <button className="btn btn-outline-info btn-download">
                          <FaDownload />
                          PDF
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Section Réservations */}
          {activeTab === 'reservations' && (
            <div className="reservations-content">
              <div className="reservations-header">
                <div className="header-info">
                  <h2>Mes Réservations</h2>
                  <p className="header-subtitle">{reservations.length} réservation(s) en cours</p>
                </div>
                <div className="header-actions">
                  <button className="btn btn-primary">
                    <FaBookmark />
                    Nouvelle réservation
                  </button>
                  <button className="btn btn-outline-secondary">
                    <FaHistory />
                    Historique
                  </button>
                </div>
              </div>

              {/* Guide de la file d'attente */}
              <div className="queue-guide">
                <div className="guide-item">
                  <div className="guide-icon waiting">
                    <FaClock />
                  </div>
                  <span>En attente</span>
                </div>
                <div className="guide-item">
                  <div className="guide-icon ready">
                    <FaCheckCircle />
                  </div>
                  <span>Prêt</span>
                </div>
                <div className="guide-item">
                  <div className="guide-icon expired">
                    <FaTimes />
                  </div>
                  <span>Expiré</span>
                </div>
              </div>

              <div className="reservations-list">
                {reservations.map((reservation, index) => (
                  <div key={reservation.id} className="reservation-card-enhanced">
                    <div className="reservation-position">
                      <div className="position-badge">
                        #{reservation.position}
                      </div>
                      <div className="position-info">
                        <span>Position</span>
                        <small>dans la file</small>
                      </div>
                    </div>
                    
                    <div className="reservation-content">
                      <div className="reservation-main">
                        <h3 className="reservation-title">{reservation.title}</h3>
                        <p className="reservation-author">par {reservation.author}</p>
                        
                        <div className="reservation-meta">
                          <div className="meta-item">
                            <FaIdCard className="meta-icon" />
                            <span>ISBN: {reservation.isbn}</span>
                          </div>
                          <div className="meta-item">
                            <FaCalendar className="meta-icon" />
                            <span>Réservé le {new Date(reservation.reservationDate).toLocaleDateString('fr-FR')}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="reservation-timeline">
                        <div className="timeline-progress">
                          <div className="progress-step completed">
                            <div className="step-circle">
                              <FaCheck />
                            </div>
                            <span>Réservé</span>
                          </div>
                          <div className="progress-line active"></div>
                          <div className="progress-step current">
                            <div className="step-circle">
                              <FaClock />
                            </div>
                            <span>En file</span>
                          </div>
                          <div className="progress-line"></div>
                          <div className="progress-step">
                            <div className="step-circle">
                              <FaCheckCircle />
                            </div>
                            <span>Disponible</span>
                          </div>
                        </div>
                        
                        <div className="availability-info">
                          <div className="availability-date">
                            <FaCalendar className="av-icon" />
                            <div>
                              <span className="av-label">Disponibilité estimée</span>
                              <strong className="av-date">{new Date(reservation.estimatedAvailability).toLocaleDateString('fr-FR')}</strong>
                            </div>
                          </div>
                          <div className="queue-info">
                            <div className="queue-stats">
                              <span>{reservation.position - 1} personne(s) avant vous</span>
                              <span className="estimated-time">≈ {reservation.position * 2} semaines</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="reservation-actions">
                      <button className="btn btn-outline-danger">
                        <FaTimes />
                        Annuler
                      </button>
                      <button className="btn btn-outline-info">
                        <FaEye />
                        Détails
                      </button>
                      <button className="btn btn-outline-warning">
                        <FaBell />
                        Notifications
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {reservations.length === 0 && (
                <div className="empty-state">
                  <div className="empty-icon">
                    <FaBookmark />
                  </div>
                  <h3>Aucune réservation</h3>
                  <p>Vous n'avez aucune réservation en cours. Parcourez le catalogue pour réserver vos livres préférés.</p>
                  <button className="btn btn-primary">
                    <FaSearch />
                    Parcourir le catalogue
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Section Historique */}
          {activeTab === 'history' && (
            <div className="history-content">
              <div className="history-header">
                <div className="header-info">
                  <h2>Historique des emprunts</h2>
                  <p className="history-stats">{accountStats.totalLoans} emprunts au total • {loanHistory.length} documents évalués</p>
                </div>
                <div className="history-controls">
                  <div className="filter-group">
                    <select className="form-select">
                      <option>Tous les types</option>
                      <option>Livres physiques</option>
                      <option>E-books</option>
                      <option>Périodiques</option>
                      <option>Thèses</option>
                    </select>
                    <select className="form-select">
                      <option>Toutes les années</option>
                      <option>2024</option>
                      <option>2023</option>
                      <option>2022</option>
                    </select>
                  </div>
                  <div className="action-group">
                    <button className="btn btn-outline-secondary">
                      <FaFilter />
                      Filtres
                    </button>
                    <button className="btn btn-outline-primary">
                      <FaDownload />
                      Exporter PDF
                    </button>
                  </div>
                </div>
              </div>

              {/* Statistiques de lecture */}
              <div className="reading-stats">
                <div className="stats-row">
                  <div className="stat-block">
                    <div className="stat-number">127</div>
                    <div className="stat-label">Livres lus</div>
                  </div>
                  <div className="stat-block">
                    <div className="stat-number">4.2</div>
                    <div className="stat-label">Note moyenne</div>
                  </div>
                  <div className="stat-block">
                    <div className="stat-number">2.1j</div>
                    <div className="stat-label">Durée moyenne</div>
                  </div>
                  <div className="stat-block">
                    <div className="stat-number">95%</div>
                    <div className="stat-label">Retours à temps</div>
                  </div>
                </div>
              </div>

              <div className="history-timeline-enhanced">
                <div className="timeline-year-header">
                  <h3>2024</h3>
                  <span className="year-count">24 emprunts cette année</span>
                </div>
                
                {loanHistory.map((item, index) => (
                  <div key={item.id} className="timeline-item-enhanced">
                    <div className="timeline-date-marker">
                      <div className="month-badge">
                        {new Date(item.returnDate).toLocaleDateString('fr-FR', { month: 'short' })}
                      </div>
                      <div className="day-number">
                        {new Date(item.returnDate).getDate()}
                      </div>
                    </div>
                    
                    <div className="timeline-connector">
                      <div className="connector-line"></div>
                      <div className="connector-dot completed">
                        <FaCheckCircle />
                      </div>
                    </div>
                    
                    <div className="timeline-content-card">
                      <div className="content-header">
                        <div className="document-info">
                          <h4 className="document-title">{item.title}</h4>
                          <p className="document-author">par {item.author}</p>
                        </div>
                        <div className="rating-display">
                          <div className="stars">
                            {[...Array(5)].map((_, i) => (
                              <FaStar 
                                key={i} 
                                className={i < item.rating ? 'star-filled' : 'star-empty'} 
                              />
                            ))}
                          </div>
                          <span className="rating-value">{item.rating}/5</span>
                        </div>
                      </div>
                      
                      <div className="loan-period">
                        <div className="period-item">
                          <FaCalendar className="period-icon" />
                          <div className="period-info">
                            <span className="period-label">Période d'emprunt</span>
                            <span className="period-dates">
                              {new Date(item.loanDate).toLocaleDateString('fr-FR')} → {new Date(item.returnDate).toLocaleDateString('fr-FR')}
                            </span>
                          </div>
                        </div>
                        <div className="period-duration">
                          <FaClock className="duration-icon" />
                          <span>{Math.ceil((new Date(item.returnDate) - new Date(item.loanDate)) / (1000 * 60 * 60 * 24))} jours</span>
                        </div>
                      </div>
                      
                      <div className="content-actions">
                        <button className="btn btn-sm btn-outline-primary">
                          <FaEye />
                          Voir les détails
                        </button>
                        <button className="btn btn-sm btn-outline-success">
                          <FaBookmark />
                          Réemprunter
                        </button>
                        <button className="btn btn-sm btn-outline-warning">
                          <FaStar />
                          Modifier la note
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="history-pagination">
                <button className="btn btn-outline-secondary">
                  <FaChevronLeft />
                  Précédent
                </button>
                <div className="page-info">
                  <span>Page 1 sur 5</span>
                </div>
                <button className="btn btn-outline-secondary">
                  Suivant
                  <FaChevronRight />
                </button>
              </div>
            </div>
          )}

          {/* Section Favoris */}
          {activeTab === 'favorites' && (
            <div className="favorites-content">
              <div className="favorites-header">
                <div className="header-info">
                  <h2>Mes Favoris</h2>
                  <p className="favorites-count">{favorites.length} livre(s) dans vos favoris</p>
                </div>
                <div className="favorites-actions">
                  <div className="sort-options">
                    <select className="form-select">
                      <option>Plus récents</option>
                      <option>Alphabétique</option>
                      <option>Par catégorie</option>
                      <option>Mieux notés</option>
                    </select>
                  </div>
                  <div className="view-options">
                    <button className="view-btn active" title="Vue grille">
                      <FaThumbsUp />
                    </button>
                    <button className="view-btn" title="Vue liste">
                      <FaList />
                    </button>
                  </div>
                </div>
              </div>

              <div className="favorites-grid">
                {favorites.map(favorite => (
                  <div key={favorite.id} className="favorite-card">
                    <div className="favorite-image">
                      <img src={favorite.cover} alt={favorite.title} />
                      <div className="image-overlay">
                        <div className="availability-badge">
                          {favorite.available ? (
                            <span className="available">
                              <FaCheckCircle />
                              Disponible
                            </span>
                          ) : (
                            <span className="unavailable">
                              <FaClock />
                              Indisponible
                            </span>
                          )}
                        </div>
                        <button className="remove-favorite" onClick={() => {
                          setFavorites(favorites.filter(f => f.id !== favorite.id));
                        }}>
                          <FaHeart />
                        </button>
                      </div>
                    </div>
                    
                    <div className="favorite-content">
                      <div className="category-tag">
                        {favorite.category}
                      </div>
                      <h4 className="favorite-title">{favorite.title}</h4>
                      <p className="favorite-author">par {favorite.author}</p>
                      
                      <div className="favorite-rating">
                        <div className="stars">
                          {[...Array(5)].map((_, i) => (
                            <FaStar 
                              key={i} 
                              className={i < Math.floor(favorite.rating) ? 'star-filled' : 'star-empty'} 
                            />
                          ))}
                        </div>
                        <span className="rating-value">{favorite.rating}</span>
                      </div>
                      
                      <p className="favorite-description">{favorite.description}</p>
                      
                      <div className="favorite-meta">
                        <span className="isbn">{favorite.isbn}</span>
                        <span className="added-date">
                          Ajouté le {new Date(favorite.addedDate).toLocaleDateString('fr-FR')}
                        </span>
                      </div>
                    </div>
                    
                    <div className="favorite-actions">
                      <button className="btn btn-primary" disabled={!favorite.available}>
                        <FaBook />
                        {favorite.available ? 'Emprunter' : 'Réserver'}
                      </button>
                      <button className="btn btn-outline-secondary">
                        <FaEye />
                        Détails
                      </button>
                      <button className="btn btn-outline-info">
                        <FaShare />
                        Partager
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {favorites.length === 0 && (
                <div className="empty-favorites">
                  <div className="empty-icon">
                    <FaRegHeart />
                  </div>
                  <h3>Aucun favori</h3>
                  <p>Commencez à ajouter des livres à vos favoris pour les retrouver facilement.</p>
                  <button className="btn btn-primary">
                    <FaSearch />
                    Explorer le catalogue
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Section Mon Compte */}
          {activeTab === 'account' && (
            <div className="account-content">
              <div className="account-overview">
                <div className="account-header">
                  <div className="account-avatar">
                    <FaUser size={60} />
                  </div>
                  <div className="account-info">
                    <h2>{userInfo.firstName} {userInfo.lastName}</h2>
                    <p className="account-type">{getUserTypeLabel(userInfo.userType)}</p>
                    <p className="account-id">ID: {userInfo.studentId}</p>
                  </div>
                  <div className="account-status">
                    <div className={`status-badge ${userInfo.status}`}>
                      {userInfo.status === 'active' ? 'Compte Actif' : 'Compte Suspendu'}
                    </div>
                    <div className="membership-expiry">
                      Expire le {new Date(userInfo.membershipExpiry).toLocaleDateString('fr-FR')}
                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-4">
                <div className="col-lg-8">
                  <div className="section-card">
                    <div className="section-header">
                      <h3>Informations personnelles</h3>
                      <button 
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => setIsEditing(!isEditing)}
                      >
                        <FaEdit />
                        {isEditing ? 'Annuler' : 'Modifier'}
                      </button>
                    </div>
                    <div className="section-content">
                      <div className="form-grid">
                        <div className="form-group">
                          <label>Prénom</label>
                          {isEditing ? (
                            <input type="text" className="form-control" value={userInfo.firstName} />
                          ) : (
                            <div className="form-display">{userInfo.firstName}</div>
                          )}
                        </div>
                        <div className="form-group">
                          <label>Nom</label>
                          {isEditing ? (
                            <input type="text" className="form-control" value={userInfo.lastName} />
                          ) : (
                            <div className="form-display">{userInfo.lastName}</div>
                          )}
                        </div>
                        <div className="form-group">
                          <label>Email</label>
                          {isEditing ? (
                            <input type="email" className="form-control" value={userInfo.email} />
                          ) : (
                            <div className="form-display">
                              <FaEnvelope size={14} />
                              {userInfo.email}
                            </div>
                          )}
                        </div>
                        <div className="form-group">
                          <label>Téléphone</label>
                          {isEditing ? (
                            <input type="tel" className="form-control" value={userInfo.phone} />
                          ) : (
                            <div className="form-display">
                              <FaPhone size={14} />
                              {userInfo.phone}
                            </div>
                          )}
                        </div>
                        <div className="form-group">
                          <label>Département</label>
                          {isEditing ? (
                            <input type="text" className="form-control" value={userInfo.department} />
                          ) : (
                            <div className="form-display">
                              <FaGraduationCap size={14} />
                              {userInfo.department}
                            </div>
                          )}
                        </div>
                        <div className="form-group col-span-2">
                          <label>Adresse</label>
                          {isEditing ? (
                            <input type="text" className="form-control" value={userInfo.address} />
                          ) : (
                            <div className="form-display">
                              <FaMapMarkerAlt size={14} />
                              {userInfo.address}
                            </div>
                          )}
                        </div>
                      </div>
                      {isEditing && (
                        <div className="form-actions">
                          <button className="btn btn-success">
                            <FaCheck />
                            Sauvegarder
                          </button>
                          <button className="btn btn-outline-secondary" onClick={() => setIsEditing(false)}>
                            <FaTimes />
                            Annuler
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="section-card">
                    <div className="section-header">
                      <h3>Sécurité du compte</h3>
                    </div>
                    <div className="section-content">
                      <div className="security-items">
                        <div className="security-item">
                          <div className="security-info">
                            <FaKey className="security-icon" />
                            <div>
                              <h5>Mot de passe</h5>
                              <p>Dernière modification : il y a 3 mois</p>
                            </div>
                          </div>
                          <button className="btn btn-outline-warning">
                            Modifier
                          </button>
                        </div>
                        <div className="security-item">
                          <div className="security-info">
                            <FaShieldAlt className="security-icon" />
                            <div>
                              <h5>Authentification à deux facteurs</h5>
                              <p>Renforcez la sécurité de votre compte</p>
                            </div>
                          </div>
                          <button className="btn btn-outline-success">
                            Activer
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="section-card">
                    <div className="section-header">
                      <h3>Résumé du compte</h3>
                    </div>
                    <div className="section-content">
                      <div className="account-summary">
                        <div className="summary-item">
                          <div className="summary-icon books">
                            <FaBook />
                          </div>
                          <div className="summary-info">
                            <h4>{accountStats.totalLoans}</h4>
                            <p>Emprunts totaux</p>
                          </div>
                        </div>
                        <div className="summary-item">
                          <div className="summary-icon favorites">
                            <FaHeart />
                          </div>
                          <div className="summary-info">
                            <h4>{favorites.length}</h4>
                            <p>Favoris</p>
                          </div>
                        </div>
                        <div className="summary-item">
                          <div className="summary-icon downloads">
                            <FaDownload />
                          </div>
                          <div className="summary-info">
                            <h4>{accountStats.downloads}</h4>
                            <p>Téléchargements</p>
                          </div>
                        </div>
                        <div className="summary-item">
                          <div className="summary-icon membership">
                            <FaCalendar />
                          </div>
                          <div className="summary-info">
                            <h4>{new Date().getFullYear() - new Date(userInfo.joinDate).getFullYear()}</h4>
                            <p>Années d'adhésion</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="section-card">
                    <div className="section-header">
                      <h3>Actions rapides</h3>
                    </div>
                    <div className="section-content">
                      <div className="quick-actions">
                        <button className="quick-action-btn">
                          <FaPrint />
                          Imprimer le profil
                        </button>
                        <button className="quick-action-btn">
                          <FaDownload />
                          Exporter les données
                        </button>
                        <button className="quick-action-btn">
                          <FaSync />
                          Synchroniser
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section Paramètres */}
          {activeTab === 'settings' && (
            <div className="settings-content">
              <div className="settings-header">
                <h2>Paramètres</h2>
                <p>Personnalisez votre expérience de la bibliothèque</p>
              </div>

              <div className="settings-sections">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="section-card">
                      <div className="section-header">
                        <h3><FaBell className="me-2" />Notifications</h3>
                      </div>
                      <div className="section-content">
                        <div className="settings-group">
                          <h5>Méthodes de notification</h5>
                          <div className="setting-item">
                            <div className="setting-info">
                              <FaEnvelope className="setting-icon" />
                              <div>
                                <span className="setting-title">Notifications par email</span>
                                <small>Recevez les alertes importantes par email</small>
                              </div>
                            </div>
                            <label className="toggle-switch">
                              <input type="checkbox" checked={preferences.notifications.email} />
                              <span className="toggle-slider"></span>
                            </label>
                          </div>
                          <div className="setting-item">
                            <div className="setting-info">
                              <FaPhone className="setting-icon" />
                              <div>
                                <span className="setting-title">Notifications SMS</span>
                                <small>Alertes urgentes par SMS</small>
                              </div>
                            </div>
                            <label className="toggle-switch">
                              <input type="checkbox" checked={preferences.notifications.sms} />
                              <span className="toggle-slider"></span>
                            </label>
                          </div>
                        </div>

                        <div className="settings-group">
                          <h5>Types de notifications</h5>
                          <div className="setting-item">
                            <div className="setting-info">
                              <FaBook className="setting-icon" />
                              <span className="setting-title">Nouveaux livres</span>
                            </div>
                            <label className="toggle-switch">
                              <input type="checkbox" checked={preferences.notifications.newBooks} />
                              <span className="toggle-slider"></span>
                            </label>
                          </div>
                          <div className="setting-item">
                            <div className="setting-info">
                              <FaClock className="setting-icon" />
                              <span className="setting-title">Dates d'échéance</span>
                            </div>
                            <label className="toggle-switch">
                              <input type="checkbox" checked={preferences.notifications.dueDates} />
                              <span className="toggle-slider"></span>
                            </label>
                          </div>
                          <div className="setting-item">
                            <div className="setting-info">
                              <FaStar className="setting-icon" />
                              <span className="setting-title">Recommandations</span>
                            </div>
                            <label className="toggle-switch">
                              <input type="checkbox" checked={preferences.notifications.recommendations} />
                              <span className="toggle-slider"></span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="section-card">
                      <div className="section-header">
                        <h3><FaShieldAlt className="me-2" />Confidentialité</h3>
                      </div>
                      <div className="section-content">
                        <div className="settings-group">
                          <h5>Visibilité du profil</h5>
                          <div className="setting-item">
                            <div className="setting-info">
                              <FaEye className="setting-icon" />
                              <div>
                                <span className="setting-title">Profil public</span>
                                <small>Permettre aux autres de voir votre profil</small>
                              </div>
                            </div>
                            <label className="toggle-switch">
                              <input type="checkbox" checked={preferences.privacy.showProfile} />
                              <span className="toggle-slider"></span>
                            </label>
                          </div>
                          <div className="setting-item">
                            <div className="setting-info">
                              <FaHistory className="setting-icon" />
                              <div>
                                <span className="setting-title">Historique visible</span>
                                <small>Afficher votre historique de lecture</small>
                              </div>
                            </div>
                            <label className="toggle-switch">
                              <input type="checkbox" checked={preferences.privacy.showReadingHistory} />
                              <span className="toggle-slider"></span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="section-card">
                      <div className="section-header">
                        <h3><FaCog className="me-2" />Préférences</h3>
                      </div>
                      <div className="section-content">
                        <div className="settings-group">
                          <div className="setting-item">
                            <div className="setting-info">
                              <FaLanguage className="setting-icon" />
                              <span className="setting-title">Langue</span>
                            </div>
                            <select className="form-select" value={preferences.language}>
                              <option value="fr">Français</option>
                              <option value="en">English</option>
                            </select>
                          </div>
                          <div className="setting-item">
                            <div className="setting-info">
                              <FaPalette className="setting-icon" />
                              <span className="setting-title">Thème</span>
                            </div>
                            <select className="form-select" value={preferences.theme}>
                              <option value="light">Clair</option>
                              <option value="dark">Sombre</option>
                              <option value="auto">Automatique</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="section-card danger-zone">
                      <div className="section-header">
                        <h3><FaTrash className="me-2" />Zone de danger</h3>
                      </div>
                      <div className="section-content">
                        <div className="danger-warning">
                          <FaExclamationTriangle className="warning-icon" />
                          <div>
                            <h5>Supprimer le compte</h5>
                            <p>Cette action est irréversible. Toutes vos données seront définitivement supprimées.</p>
                          </div>
                          <button className="btn btn-danger">
                            Supprimer le compte
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>

      <style jsx>{`
        .library-profile {
          background: #f8f9fa;
          min-height: 100vh;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }

        /* Header */
        .profile-header {
          background: white;
          border-bottom: 1px solid #e9ecef;
          padding: 2rem 0;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .user-avatar-section {
          text-align: center;
        }

        .user-avatar {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #007bff, #0056b3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin: 0 auto 0.5rem;
          box-shadow: 0 4px 12px rgba(0,123,255,0.3);
        }

        .user-status {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .user-status.active {
          background: #d4edda;
          color: #155724;
        }

        .user-name {
          font-size: 1.75rem;
          font-weight: 700;
          color: #212529;
          margin-bottom: 0.5rem;
        }

        .user-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }

        .user-meta span {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          color: #6c757d;
          font-size: 0.875rem;
        }

        .user-type {
          background: #e3f2fd;
          color: #1976d2 !important;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-weight: 500;
        }

        .membership-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          color: #6c757d;
          font-size: 0.875rem;
        }

        .quick-actions {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        /* Navigation */
        .profile-navigation {
          background: white;
          border-bottom: 1px solid #e9ecef;
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .nav-tabs-container {
          display: flex;
          gap: 0.5rem;
          overflow-x: auto;
          padding-bottom: 0.5rem;
        }

        .nav-tab {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          border: 1px solid #dee2e6;
          background: white;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
          font-size: 0.875rem;
          font-weight: 500;
          color: #495057;
        }

        .nav-tab:hover,
        .nav-tab.active {
          background: #007bff;
          border-color: #007bff;
          color: white;
          transform: translateY(-1px);
        }

        /* Main Content */
        .profile-main {
          padding: 2rem 0;
        }

        .section-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          margin-bottom: 1.5rem;
          overflow: hidden;
        }

        .section-header {
          display: flex;
          justify-content: between;
          align-items: center;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid #e9ecef;
          background: #f8f9fa;
        }

        .section-header h2,
        .section-header h3 {
          margin: 0;
          color: #212529;
          font-weight: 600;
        }

        .section-content {
          padding: 1.5rem;
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          transition: transform 0.2s;
        }

        .stat-card:hover {
          transform: translateY(-2px);
        }

        .stat-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
        }

        .stat-icon.text-primary { background: rgba(0,123,255,0.1); color: #007bff; }
        .stat-icon.text-warning { background: rgba(255,193,7,0.1); color: #ffc107; }
        .stat-icon.text-info { background: rgba(23,162,184,0.1); color: #17a2b8; }
        .stat-icon.text-success { background: rgba(40,167,69,0.1); color: #28a745; }

        .stat-content h3 {
          font-size: 1.75rem;
          font-weight: 700;
          margin: 0;
          color: #212529;
        }

        .stat-content p {
          margin: 0;
          color: #6c757d;
          font-size: 0.875rem;
        }

        /* Alerts */
        .alert {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          border-radius: 8px;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }

        .alert-warning {
          background: #fff3cd;
          border: 1px solid #ffeaa7;
          color: #856404;
        }

        /* Loan Items */
        .loan-items {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .loan-item {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 1rem;
          border: 1px solid #e9ecef;
          border-radius: 8px;
          transition: border-color 0.2s;
        }

        .loan-item:hover {
          border-color: #007bff;
        }

        .loan-info h5 {
          margin: 0 0 0.25rem 0;
          color: #212529;
          font-size: 1rem;
          font-weight: 600;
        }

        .loan-info .author {
          margin: 0 0 0.5rem 0;
          color: #6c757d;
          font-size: 0.875rem;
        }

        .loan-meta {
          display: flex;
          gap: 1rem;
          font-size: 0.75rem;
          color: #6c757d;
        }

        .call-number {
          font-family: 'Courier New', monospace;
          background: #f8f9fa;
          padding: 0.125rem 0.375rem;
          border-radius: 4px;
        }

        .due-date {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .due-date.normal { color: #28a745; }
        .due-date.due-soon { color: #ffc107; }
        .due-date.overdue { color: #dc3545; }

        .loan-actions {
          display: flex;
          gap: 0.5rem;
        }

        /* Account Info */
        .account-info-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .info-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 0;
          border-bottom: 1px solid #f1f3f4;
        }

        .info-item:last-child {
          border-bottom: none;
        }

        .info-item .label {
          color: #6c757d;
          font-size: 0.875rem;
        }

        .info-item .value {
          font-weight: 600;
          color: #212529;
        }

        .text-danger { color: #dc3545 !important; }
        .status-active { color: #28a745; }

        /* Tables */
        .loans-table-container {
          overflow-x: auto;
        }

        .loans-table {
          width: 100%;
          border-collapse: collapse;
          background: white;
        }

        .loans-table th,
        .loans-table td {
          padding: 1rem;
          text-align: left;
          border-bottom: 1px solid #e9ecef;
        }

        .loans-table th {
          background: #f8f9fa;
          font-weight: 600;
          color: #495057;
          font-size: 0.875rem;
        }

        .document-info h6 {
          margin: 0 0 0.25rem 0;
          font-weight: 600;
          color: #212529;
        }

        .document-info .isbn {
          color: #6c757d;
          font-size: 0.75rem;
        }

        .badge {
          padding: 0.375rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .badge-success { background: #d4edda; color: #155724; }
        .badge-warning { background: #fff3cd; color: #856404; }
        .badge-danger { background: #f8d7da; color: #721c24; }

        .action-buttons {
          display: flex;
          gap: 0.25rem;
        }

        /* Forms */
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group.col-span-2 {
          grid-column: 1 / -1;
        }

        .form-group label {
          font-weight: 600;
          color: #495057;
          font-size: 0.875rem;
        }

        .form-control {
          padding: 0.75rem;
          border: 1px solid #ced4da;
          border-radius: 6px;
          font-size: 0.875rem;
        }

        .form-control:focus {
          border-color: #007bff;
          box-shadow: 0 0 0 3px rgba(0,123,255,0.1);
          outline: none;
        }

        .form-display {
          padding: 0.75rem;
          background: #f8f9fa;
          border: 1px solid #e9ecef;
          border-radius: 6px;
          color: #495057;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
        }

        .form-actions {
          display: flex;
          gap: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #e9ecef;
        }

        /* Buttons */
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border: 1px solid transparent;
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
        }

        .btn-primary {
          background: #007bff;
          border-color: #007bff;
          color: white;
        }

        .btn-primary:hover {
          background: #0056b3;
          border-color: #0056b3;
        }

        .btn-outline-primary {
          background: transparent;
          border-color: #007bff;
          color: #007bff;
        }

        .btn-outline-primary:hover {
          background: #007bff;
          color: white;
        }

        .btn-success {
          background: #28a745;
          border-color: #28a745;
          color: white;
        }

        .btn-outline-secondary {
          background: transparent;
          border-color: #6c757d;
          color: #6c757d;
        }

        .btn-sm {
          padding: 0.375rem 0.75rem;
          font-size: 0.75rem;
        }

        /* Section Emprunts Améliorée */
        .loans-header {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          margin-bottom: 2rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .loans-stats {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .stat-card-mini {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          border-radius: 12px;
          background: #f8f9fa;
          border-left: 4px solid;
        }

        .stat-card-mini.active-loans { border-left-color: #007bff; }
        .stat-card-mini.overdue-loans { border-left-color: #dc3545; }
        .stat-card-mini.renewals { border-left-color: #ffc107; }

        .stat-card-mini .stat-icon {
          font-size: 1.5rem;
          color: #6c757d;
        }

        .stat-card-mini .stat-info h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
          color: #212529;
        }

        .stat-card-mini .stat-info p {
          margin: 0;
          color: #6c757d;
          font-size: 0.875rem;
        }

        .loans-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .search-box {
          position: relative;
          flex: 1;
          max-width: 400px;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #6c757d;
        }

        .search-input {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 2.5rem;
          border: 1px solid #ced4da;
          border-radius: 8px;
          font-size: 0.875rem;
        }

        .filter-buttons {
          display: flex;
          gap: 0.5rem;
          margin-left: 1rem;
        }

        .filter-btn {
          padding: 0.5rem 1rem;
          border: 1px solid #dee2e6;
          background: white;
          border-radius: 6px;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .filter-btn.active,
        .filter-btn:hover {
          background: #007bff;
          border-color: #007bff;
          color: white;
        }

        .loans-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          gap: 1.5rem;
        }

        .loan-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          overflow: hidden;
          transition: all 0.3s ease;
          border-left: 4px solid #28a745;
        }

        .loan-card.due-soon {
          border-left-color: #ffc107;
        }

        .loan-card.overdue {
          border-left-color: #dc3545;
        }

        .loan-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(0,0,0,0.15);
        }

        .loan-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.5rem;
          background: #f8f9fa;
          border-bottom: 1px solid #e9ecef;
        }

        .document-type {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: #6c757d;
        }

        .status-badge {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.375rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .status-badge.normal {
          background: #d4edda;
          color: #155724;
        }

        .status-badge.due-soon {
          background: #fff3cd;
          color: #856404;
        }

        .status-badge.overdue {
          background: #f8d7da;
          color: #721c24;
        }

        .loan-card-body {
          padding: 1.5rem;
        }

        .document-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #212529;
          margin-bottom: 0.5rem;
        }

        .document-author {
          color: #6c757d;
          margin-bottom: 1rem;
        }

        .document-details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: #495057;
        }

        .detail-icon {
          color: #6c757d;
          width: 14px;
        }

        .loan-timeline {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1rem;
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 8px;
        }

        .timeline-item {
          text-align: center;
        }

        .timeline-label {
          display: block;
          font-size: 0.75rem;
          color: #6c757d;
          margin-bottom: 0.25rem;
        }

        .timeline-date {
          font-weight: 600;
          color: #212529;
          font-size: 0.875rem;
        }

        .renewal-info {
          margin-bottom: 1rem;
        }

        .renewal-count {
          font-size: 0.875rem;
          color: #6c757d;
          margin-bottom: 0.5rem;
        }

        .renewal-progress {
          height: 4px;
          background: #e9ecef;
          border-radius: 2px;
          overflow: hidden;
        }

        .renewal-bar {
          height: 100%;
          background: linear-gradient(90deg, #28a745, #20c997);
          transition: width 0.3s ease;
        }

        .loan-card-footer {
          display: flex;
          gap: 0.5rem;
          padding: 1rem 1.5rem;
          background: #f8f9fa;
          border-top: 1px solid #e9ecef;
        }

        .btn-renew {
          flex: 1;
        }

        /* Section Réservations Améliorée */
        .reservations-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2rem;
        }

        .header-subtitle {
          color: #6c757d;
          margin: 0;
        }

        .queue-guide {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2rem;
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 8px;
        }

        .guide-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
        }

        .guide-icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
        }

        .guide-icon.waiting {
          background: #fff3cd;
          color: #856404;
        }

        .guide-icon.ready {
          background: #d4edda;
          color: #155724;
        }

        .guide-icon.expired {
          background: #f8d7da;
          color: #721c24;
        }

        .reservations-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .reservation-card-enhanced {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          overflow: hidden;
          display: flex;
          transition: all 0.3s ease;
        }

        .reservation-card-enhanced:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(0,0,0,0.15);
        }

        .reservation-position {
          background: linear-gradient(135deg, #007bff, #0056b3);
          color: white;
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-width: 120px;
        }

        .position-badge {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .position-info {
          text-align: center;
        }

        .position-info span {
          display: block;
          font-size: 0.875rem;
        }

        .position-info small {
          font-size: 0.75rem;
          opacity: 0.9;
        }

        .reservation-content {
          flex: 1;
          padding: 1.5rem;
        }

        .reservation-main {
          margin-bottom: 1.5rem;
        }

        .reservation-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #212529;
          margin-bottom: 0.5rem;
        }

        .reservation-author {
          color: #6c757d;
          margin-bottom: 1rem;
        }

        .reservation-meta {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: #495057;
        }

        .meta-icon {
          color: #6c757d;
          width: 14px;
        }

        .reservation-timeline {
          margin-bottom: 1rem;
        }

        .timeline-progress {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }

        .progress-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          flex: 1;
        }

        .step-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #e9ecef;
          color: #6c757d;
        }

        .progress-step.completed .step-circle {
          background: #28a745;
          color: white;
        }

        .progress-step.current .step-circle {
          background: #007bff;
          color: white;
        }

        .progress-line {
          height: 2px;
          background: #e9ecef;
          flex: 1;
          margin: 0 1rem;
        }

        .progress-line.active {
          background: #007bff;
        }

        .progress-step span {
          font-size: 0.75rem;
          color: #6c757d;
          text-align: center;
        }

        .availability-info {
          background: #f8f9fa;
          padding: 1rem;
          border-radius: 8px;
        }

        .availability-date {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .av-icon {
          color: #007bff;
        }

        .av-label {
          display: block;
          font-size: 0.75rem;
          color: #6c757d;
        }

        .av-date {
          color: #212529;
          font-weight: 600;
        }

        .queue-info {
          border-top: 1px solid #e9ecef;
          padding-top: 0.75rem;
        }

        .queue-stats {
          display: flex;
          justify-content: space-between;
          font-size: 0.875rem;
          color: #6c757d;
        }

        .estimated-time {
          font-weight: 600;
          color: #007bff;
        }

        .reservation-actions {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: 1.5rem;
          background: #f8f9fa;
          border-left: 1px solid #e9ecef;
          min-width: 200px;
        }

        .empty-state {
          text-align: center;
          padding: 4rem 2rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .empty-icon {
          font-size: 4rem;
          color: #dee2e6;
          margin-bottom: 1rem;
        }

        .empty-state h3 {
          color: #495057;
          margin-bottom: 1rem;
        }

        .empty-state p {
          color: #6c757d;
          margin-bottom: 2rem;
          max-width: 400px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Section Historique Améliorée */
        .history-header {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          margin-bottom: 2rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .history-stats {
          color: #6c757d;
          margin: 0;
        }

        .history-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1rem;
        }

        .filter-group {
          display: flex;
          gap: 1rem;
        }

        .action-group {
          display: flex;
          gap: 0.5rem;
        }

        .reading-stats {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          margin-bottom: 2rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .stat-block {
          text-align: center;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: #007bff;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.875rem;
          color: #6c757d;
        }

        .history-timeline-enhanced {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          margin-bottom: 2rem;
        }

        .timeline-year-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #e9ecef;
        }

        .timeline-year-header h3 {
          color: #212529;
          margin: 0;
        }

        .year-count {
          color: #6c757d;
          font-size: 0.875rem;
        }

        .timeline-item-enhanced {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid #f1f3f4;
        }

        .timeline-item-enhanced:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }

        .timeline-date-marker {
          text-align: center;
          min-width: 60px;
        }

        .month-badge {
          background: #007bff;
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 0.25rem;
        }

        .day-number {
          font-size: 1.25rem;
          font-weight: 700;
          color: #212529;
        }

        .timeline-connector {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 0.5rem;
        }

        .connector-dot {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #28a745;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
        }

        .connector-line {
          width: 2px;
          height: 40px;
          background: #e9ecef;
          margin-top: 0.5rem;
        }

        .timeline-content-card {
          flex: 1;
          background: #f8f9fa;
          border-radius: 8px;
          padding: 1.5rem;
        }

        .content-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .document-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #212529;
          margin-bottom: 0.25rem;
        }

        .document-author {
          color: #6c757d;
          margin: 0;
        }

        .rating-display {
          text-align: right;
        }

        .stars {
          margin-bottom: 0.25rem;
        }

        .star-filled {
          color: #ffc107;
        }

        .star-empty {
          color: #e9ecef;
        }

        .rating-value {
          font-size: 0.875rem;
          color: #6c757d;
        }

        .loan-period {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          padding: 1rem;
          background: white;
          border-radius: 6px;
        }

        .period-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .period-icon {
          color: #007bff;
        }

        .period-label {
          display: block;
          font-size: 0.75rem;
          color: #6c757d;
        }

        .period-dates {
          font-weight: 600;
          color: #212529;
        }

        .period-duration {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: #6c757d;
        }

        .duration-icon {
          color: #28a745;
        }

        .content-actions {
          display: flex;
          gap: 0.5rem;
        }

        .history-pagination {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: white;
          padding: 1rem 2rem;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .page-info {
          font-size: 0.875rem;
          color: #6c757d;
        }

        /* Section Favoris */
        .favorites-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2rem;
        }

        .favorites-count {
          color: #6c757d;
          margin: 0;
        }

        .favorites-actions {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .sort-options .form-select {
          min-width: 150px;
        }

        .view-options {
          display: flex;
          gap: 0.25rem;
        }

        .view-btn {
          padding: 0.5rem;
          border: 1px solid #dee2e6;
          background: white;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .view-btn.active,
        .view-btn:hover {
          background: #007bff;
          border-color: #007bff;
          color: white;
        }

        .favorites-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }

        .favorite-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .favorite-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
        }

        .favorite-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .favorite-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.3));
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 1rem;
        }

        .availability-badge {
          background: rgba(255,255,255,0.9);
          padding: 0.375rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .availability-badge .available {
          color: #155724;
        }

        .availability-badge .unavailable {
          color: #721c24;
        }

        .remove-favorite {
          background: rgba(255,255,255,0.9);
          border: none;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #dc3545;
          cursor: pointer;
          transition: all 0.2s;
        }

        .remove-favorite:hover {
          background: #dc3545;
          color: white;
        }

        .favorite-content {
          padding: 1.5rem;
        }

        .category-tag {
          background: #e3f2fd;
          color: #1976d2;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 0.75rem;
        }

        .favorite-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #212529;
          margin-bottom: 0.5rem;
        }

        .favorite-author {
          color: #6c757d;
          margin-bottom: 1rem;
        }

        .favorite-rating {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .favorite-description {
          color: #495057;
          font-size: 0.875rem;
          line-height: 1.5;
          margin-bottom: 1rem;
        }

        .favorite-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: #6c757d;
          margin-bottom: 1rem;
        }

        .favorite-actions {
          display: flex;
          gap: 0.5rem;
          padding: 1rem 1.5rem;
          background: #f8f9fa;
          border-top: 1px solid #e9ecef;
        }

        .empty-favorites {
          text-align: center;
          padding: 4rem 2rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        /* Section Mon Compte Améliorée */
        .account-overview {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          margin-bottom: 2rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .account-header {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .account-avatar {
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, #007bff, #0056b3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .account-info h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #212529;
          margin-bottom: 0.5rem;
        }

        .account-type {
          color: #007bff;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .account-id {
          color: #6c757d;
          font-size: 0.875rem;
          margin: 0;
        }

        .account-status {
          text-align: right;
        }

        .status-badge {
          display: inline-block;
          padding: 0.375rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .status-badge.active {
          background: #d4edda;
          color: #155724;
        }

        .membership-expiry {
          color: #6c757d;
          font-size: 0.875rem;
        }

        .security-items {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .security-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          background: #f8f9fa;
          border-radius: 8px;
          border: 1px solid #e9ecef;
        }

        .security-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .security-icon {
          font-size: 1.25rem;
          color: #007bff;
        }

        .security-info h5 {
          margin: 0 0 0.25rem 0;
          color: #212529;
        }

        .security-info p {
          margin: 0;
          color: #6c757d;
          font-size: 0.875rem;
        }

        .account-summary {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .summary-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 8px;
        }

        .summary-icon {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
        }

        .summary-icon.books {
          background: rgba(0,123,255,0.1);
          color: #007bff;
        }

        .summary-icon.favorites {
          background: rgba(220,53,69,0.1);
          color: #dc3545;
        }

        .summary-icon.downloads {
          background: rgba(40,167,69,0.1);
          color: #28a745;
        }

        .summary-icon.membership {
          background: rgba(255,193,7,0.1);
          color: #ffc107;
        }

        .summary-info h4 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #212529;
          margin: 0;
        }

        .summary-info p {
          margin: 0;
          color: #6c757d;
          font-size: 0.875rem;
        }

        .quick-actions {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .quick-action-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          background: white;
          border: 1px solid #dee2e6;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s;
          text-align: left;
          width: 100%;
        }

        .quick-action-btn:hover {
          background: #f8f9fa;
          border-color: #007bff;
        }

        /* Section Paramètres Améliorée */
        .settings-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .settings-header h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #212529;
          margin-bottom: 0.5rem;
        }

        .settings-header p {
          color: #6c757d;
          font-size: 1.125rem;
        }

        .settings-sections {
          margin-bottom: 2rem;
        }

        .settings-group {
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid #e9ecef;
        }

        .settings-group:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }

        .settings-group h5 {
          color: #495057;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .setting-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 8px;
          margin-bottom: 0.75rem;
        }

        .setting-item:last-child {
          margin-bottom: 0;
        }

        .setting-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .setting-icon {
          color: #007bff;
          font-size: 1.125rem;
        }

        .setting-title {
          font-weight: 600;
          color: #212529;
          display: block;
          margin-bottom: 0.25rem;
        }

        .setting-info small {
          color: #6c757d;
          font-size: 0.8rem;
        }

        .toggle-switch {
          position: relative;
          display: inline-block;
          width: 48px;
          height: 24px;
        }

        .toggle-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .toggle-slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          transition: 0.3s;
          border-radius: 24px;
        }

        .toggle-slider:before {
          position: absolute;
          content: "";
          height: 18px;
          width: 18px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: 0.3s;
          border-radius: 50%;
        }

        .toggle-switch input:checked + .toggle-slider {
          background-color: #007bff;
        }

        .toggle-switch input:checked + .toggle-slider:before {
          transform: translateX(24px);
        }

        .danger-zone {
          border-color: rgba(220,53,69,0.3) !important;
          background: rgba(220,53,69,0.02) !important;
        }

        .danger-zone .section-header {
          background: rgba(220,53,69,0.1);
          border-bottom-color: rgba(220,53,69,0.2);
        }

        .danger-zone .section-header h3 {
          color: #dc3545;
        }

        .danger-warning {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 2rem;
          background: rgba(220,53,69,0.05);
          border: 1px solid rgba(220,53,69,0.2);
          border-radius: 8px;
        }

        .warning-icon {
          font-size: 2rem;
          color: #dc3545;
        }

        .danger-warning h5 {
          color: #dc3545;
          margin-bottom: 0.5rem;
        }

        .danger-warning p {
          color: #6c757d;
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .profile-header .row {
            text-align: center;
          }

          .user-meta {
            justify-content: center;
          }

          .quick-actions {
            flex-direction: row;
            justify-content: center;
          }

          .nav-tabs-container {
            justify-content: center;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .section-header {
            flex-direction: column;
            align-items: stretch;
            gap: 1rem;
          }

          .loan-item {
            flex-direction: column;
            gap: 1rem;
          }

          /* Responsive pour les nouvelles sections */
          .loans-stats {
            flex-direction: column;
            gap: 1rem;
          }

          .loans-actions {
            flex-direction: column;
            gap: 1rem;
          }

          .search-box {
            max-width: none;
          }

          .filter-buttons {
            margin-left: 0;
            justify-content: center;
          }

          .loans-grid {
            grid-template-columns: 1fr;
          }

          .reservation-card-enhanced {
            flex-direction: column;
          }

          .reservation-position {
            min-width: auto;
            padding: 1rem;
          }

          .reservation-actions {
            flex-direction: row;
            min-width: auto;
            border-left: none;
            border-top: 1px solid #e9ecef;
          }

          .stats-row {
            grid-template-columns: repeat(2, 1fr);
          }

          .timeline-item-enhanced {
            flex-direction: column;
            gap: 1rem;
          }

          .timeline-connector {
            display: none;
          }

          .favorites-grid {
            grid-template-columns: 1fr;
          }

          .favorites-actions {
            flex-direction: column;
            gap: 1rem;
          }

          .account-header {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .account-status {
            text-align: center;
          }

          .security-item {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .danger-warning {
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 576px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }

          .nav-tab span {
            display: none;
          }

          .container {
            padding: 0 10px;
          }

          .stat-card-mini {
            flex-direction: column;
            text-align: center;
            gap: 0.5rem;
          }

          .filter-buttons {
            flex-wrap: wrap;
          }

          .timeline-progress {
            flex-direction: column;
            gap: 1rem;
          }

          .progress-line {
            display: none;
          }

          .stats-row {
            grid-template-columns: 1fr;
          }

          .history-controls {
            flex-direction: column;
            gap: 1rem;
          }

          .filter-group {
            flex-direction: column;
          }

          .loan-period {
            flex-direction: column;
            gap: 1rem;
          }

          .content-actions {
            flex-direction: column;
          }

          .history-pagination {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Profile;