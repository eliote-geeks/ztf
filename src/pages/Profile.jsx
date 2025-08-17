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
  FaQuoteLeft
} from 'react-icons/fa';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    firstName: 'Marie',
    lastName: 'Essomba',
    email: 'marie.essomba@exemple.com',
    phone: '+237 699 123 456',
    address: 'Yaoundé, Cameroun',
    userType: 'researcher',
    studentId: 'RES20240001',
    joinDate: '2022-03-15',
    bio: 'Chercheuse en théologie africaine, spécialisée dans les mouvements spirituels contemporains.'
  });

  const [preferences, setPreferences] = useState({
    language: 'fr',
    theme: 'auto',
    notifications: {
      email: true,
      newBooks: true,
      dueDates: true,
      recommendations: false
    },
    privacy: {
      showProfile: true,
      showActivity: false,
      showFavorites: true
    }
  });

  const tabs = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: FaUser },
    { id: 'loans', label: 'Mes Emprunts', icon: FaBook },
    { id: 'favorites', label: 'Mes Favoris', icon: FaHeart },
    { id: 'history', label: 'Historique', icon: FaHistory },
    { id: 'settings', label: 'Paramètres', icon: FaCog }
  ];

  const userStats = [
    { label: 'Emprunts actifs', value: 5, icon: FaBook, color: 'text-primary' },
    { label: 'Livres lus', value: 127, icon: FaEye, color: 'text-success' },
    { label: 'Favoris', value: 34, icon: FaHeart, color: 'text-danger' },
    { label: 'Téléchargements', value: 89, icon: FaDownload, color: 'text-warning' }
  ];

  const currentLoans = [
    {
      id: 1,
      title: "L'Art de la Prière",
      author: "Zacharias Tanee Fomum",
      dueDate: "2024-02-28",
      renewals: 1,
      maxRenewals: 3,
      type: "book",
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=150&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Histoire du Cameroun Moderne",
      author: "Jean-Baptiste Sipa",
      dueDate: "2024-03-05",
      renewals: 0,
      maxRenewals: 3,
      type: "ebook",
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=200&fit=crop"
    }
  ];

  const favoriteBooks = [
    {
      id: 1,
      title: "Spiritualité et Modernité",
      author: "Père Joseph Nkomo",
      rating: 4.8,
      addedDate: "2024-01-15",
      category: "Théologie",
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=150&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Contes et Légendes du Cameroun",
      author: "Marie Atangana",
      rating: 4.6,
      addedDate: "2024-01-10",
      category: "Littérature",
      cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=150&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Philosophie Africaine Contemporaine",
      author: "Prof. Emmanuel Ngwé",
      rating: 4.5,
      addedDate: "2024-01-08",
      category: "Philosophie",
      cover: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=150&h=200&fit=crop"
    }
  ];

  const readingHistory = [
    {
      id: 1,
      title: "Développement Durable en Afrique Centrale",
      author: "Dr. Paul Mbarga",
      completedDate: "2024-01-20",
      rating: 4,
      type: "ebook"
    },
    {
      id: 2,
      title: "Les Royaumes Bamiléké",
      author: "Prof. Marie Essomba",
      completedDate: "2024-01-18",
      rating: 5,
      type: "book"
    }
  ];

  const handleUserInfoChange = (field, value) => {
    setUserInfo(prev => ({
      ...prev,
      [field]: value
    }));
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

  const calculateDaysUntilDue = (dueDate) => {
    const due = new Date(dueDate);
    const today = new Date();
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getDueDateStatus = (dueDate) => {
    const days = calculateDaysUntilDue(dueDate);
    if (days < 0) return { class: 'overdue', text: `En retard de ${Math.abs(days)} jour(s)` };
    if (days <= 3) return { class: 'due-soon', text: `${days} jour(s) restant(s)` };
    return { class: 'normal', text: `${days} jour(s) restant(s)` };
  };

  const getUserTypeLabel = (type) => {
    const types = {
      student: 'Étudiant',
      researcher: 'Chercheur',
      staff: 'Personnel'
    };
    return types[type] || type;
  };

  return (
    <div className="profile-container">
      {/* Header avec info utilisateur */}
      <section className="profile-header">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-3">
              <div className="profile-avatar-section">
                <div className="profile-avatar">
                  <FaUser size={48} />
                </div>
                <div className="avatar-actions">
                  <button className="btn btn-outline-warning btn-sm">
                    <FaEdit size={12} />
                    Modifier photo
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="profile-info">
                <h1 className="profile-name">{userInfo.firstName} {userInfo.lastName}</h1>
                <div className="profile-meta">
                  <span className="user-type">
                    <FaGraduationCap size={14} />
                    {getUserTypeLabel(userInfo.userType)}
                  </span>
                  <span className="join-date">
                    <FaCalendar size={14} />
                    Membre depuis {new Date(userInfo.joinDate).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
                  </span>
                  <span className="user-id">
                    <FaIdCard size={14} />
                    ID: {userInfo.studentId}
                  </span>
                </div>
                <p className="profile-bio">{userInfo.bio}</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="profile-stats">
                {userStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="stat-item">
                      <Icon className={`stat-icon ${stat.color}`} />
                      <div className="stat-content">
                        <div className="stat-value">{stat.value}</div>
                        <div className="stat-label">{stat.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation par onglets */}
      <section className="profile-navigation">
        <div className="container">
          <div className="tabs-container">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contenu des onglets */}
      <section className="profile-content">
        <div className="container">
          
          {/* Vue d'ensemble */}
          {activeTab === 'overview' && (
            <div className="tab-content">
              <div className="row g-4">
                <div className="col-lg-8">
                  <div className="content-card">
                    <div className="card-header">
                      <h3>Informations personnelles</h3>
                      <button 
                        className="btn btn-outline-warning btn-sm"
                        onClick={() => setIsEditing(!isEditing)}
                      >
                        <FaEdit size={14} />
                        {isEditing ? 'Annuler' : 'Modifier'}
                      </button>
                    </div>
                    <div className="card-content">
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label className="form-label">Prénom</label>
                          {isEditing ? (
                            <input
                              type="text"
                              className="form-control"
                              value={userInfo.firstName}
                              onChange={(e) => handleUserInfoChange('firstName', e.target.value)}
                            />
                          ) : (
                            <div className="info-display">{userInfo.firstName}</div>
                          )}
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Nom</label>
                          {isEditing ? (
                            <input
                              type="text"
                              className="form-control"
                              value={userInfo.lastName}
                              onChange={(e) => handleUserInfoChange('lastName', e.target.value)}
                            />
                          ) : (
                            <div className="info-display">{userInfo.lastName}</div>
                          )}
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Email</label>
                          {isEditing ? (
                            <input
                              type="email"
                              className="form-control"
                              value={userInfo.email}
                              onChange={(e) => handleUserInfoChange('email', e.target.value)}
                            />
                          ) : (
                            <div className="info-display">
                              <FaEnvelope size={14} className="me-2" />
                              {userInfo.email}
                            </div>
                          )}
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Téléphone</label>
                          {isEditing ? (
                            <input
                              type="tel"
                              className="form-control"
                              value={userInfo.phone}
                              onChange={(e) => handleUserInfoChange('phone', e.target.value)}
                            />
                          ) : (
                            <div className="info-display">
                              <FaPhone size={14} className="me-2" />
                              {userInfo.phone}
                            </div>
                          )}
                        </div>
                        <div className="col-12">
                          <label className="form-label">Adresse</label>
                          {isEditing ? (
                            <input
                              type="text"
                              className="form-control"
                              value={userInfo.address}
                              onChange={(e) => handleUserInfoChange('address', e.target.value)}
                            />
                          ) : (
                            <div className="info-display">
                              <FaMapMarkerAlt size={14} className="me-2" />
                              {userInfo.address}
                            </div>
                          )}
                        </div>
                        <div className="col-12">
                          <label className="form-label">Biographie</label>
                          {isEditing ? (
                            <textarea
                              className="form-control"
                              rows="3"
                              value={userInfo.bio}
                              onChange={(e) => handleUserInfoChange('bio', e.target.value)}
                            />
                          ) : (
                            <div className="info-display">{userInfo.bio}</div>
                          )}
                        </div>
                      </div>
                      {isEditing && (
                        <div className="form-actions">
                          <button className="btn btn-success">
                            <FaCheck size={14} className="me-2" />
                            Sauvegarder
                          </button>
                          <button 
                            className="btn btn-outline-secondary"
                            onClick={() => setIsEditing(false)}
                          >
                            <FaTimes size={14} className="me-2" />
                            Annuler
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-4">
                  <div className="content-card">
                    <div className="card-header">
                      <h4>Activité récente</h4>
                    </div>
                    <div className="card-content">
                      <div className="activity-list">
                        <div className="activity-item">
                          <div className="activity-icon text-success">
                            <FaDownload size={12} />
                          </div>
                          <div className="activity-content">
                            <div className="activity-text">Téléchargé "L'Art de la Prière"</div>
                            <div className="activity-time">Il y a 2 heures</div>
                          </div>
                        </div>
                        <div className="activity-item">
                          <div className="activity-icon text-danger">
                            <FaHeart size={12} />
                          </div>
                          <div className="activity-content">
                            <div className="activity-text">Ajouté aux favoris "Spiritualité et Modernité"</div>
                            <div className="activity-time">Hier</div>
                          </div>
                        </div>
                        <div className="activity-item">
                          <div className="activity-icon text-warning">
                            <FaStar size={12} />
                          </div>
                          <div className="activity-content">
                            <div className="activity-text">Noté "Les Royaumes Bamiléké" - 5 étoiles</div>
                            <div className="activity-time">Il y a 2 jours</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Emprunts */}
          {activeTab === 'loans' && (
            <div className="tab-content">
              <div className="content-card">
                <div className="card-header">
                  <h3>Mes emprunts actuels ({currentLoans.length})</h3>
                  <Link to="/catalogue" className="btn btn-warning">
                    <FaBook size={14} className="me-2" />
                    Emprunter un livre
                  </Link>
                </div>
                <div className="card-content">
                  <div className="loans-grid">
                    {currentLoans.map(loan => {
                      const dueStatus = getDueDateStatus(loan.dueDate);
                      return (
                        <div key={loan.id} className="loan-card">
                          <div className="loan-cover">
                            <img src={loan.cover} alt={loan.title} />
                            <div className="loan-type">
                              {loan.type === 'ebook' ? 'E-book' : 'Livre'}
                            </div>
                          </div>
                          <div className="loan-info">
                            <h5 className="loan-title">{loan.title}</h5>
                            <p className="loan-author">par {loan.author}</p>
                            <div className={`due-date ${dueStatus.class}`}>
                              <FaClock size={12} />
                              <span>{dueStatus.text}</span>
                            </div>
                            <div className="loan-renewals">
                              Renouvellements: {loan.renewals}/{loan.maxRenewals}
                            </div>
                            <div className="loan-actions">
                              <button 
                                className="btn btn-outline-warning btn-sm"
                                disabled={loan.renewals >= loan.maxRenewals}
                              >
                                Renouveler
                              </button>
                              <button className="btn btn-outline-primary btn-sm">
                                <FaEye size={12} />
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Favoris */}
          {activeTab === 'favorites' && (
            <div className="tab-content">
              <div className="content-card">
                <div className="card-header">
                  <h3>Mes livres favoris ({favoriteBooks.length})</h3>
                </div>
                <div className="card-content">
                  <div className="favorites-grid">
                    {favoriteBooks.map(book => (
                      <div key={book.id} className="favorite-card">
                        <div className="favorite-cover">
                          <img src={book.cover} alt={book.title} />
                          <button className="remove-favorite">
                            <FaTimes size={12} />
                          </button>
                        </div>
                        <div className="favorite-info">
                          <span className="favorite-category">{book.category}</span>
                          <h6 className="favorite-title">{book.title}</h6>
                          <p className="favorite-author">par {book.author}</p>
                          <div className="favorite-rating">
                            <FaStar className="star-filled" />
                            <span>{book.rating}</span>
                          </div>
                          <div className="favorite-added">
                            Ajouté le {new Date(book.addedDate).toLocaleDateString('fr-FR')}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Historique */}
          {activeTab === 'history' && (
            <div className="tab-content">
              <div className="content-card">
                <div className="card-header">
                  <h3>Historique de lecture</h3>
                </div>
                <div className="card-content">
                  <div className="history-list">
                    {readingHistory.map(item => (
                      <div key={item.id} className="history-item">
                        <div className="history-icon">
                          <FaCheck />
                        </div>
                        <div className="history-content">
                          <h6 className="history-title">{item.title}</h6>
                          <p className="history-author">par {item.author}</p>
                          <div className="history-meta">
                            <span className="completion-date">
                              <FaCalendar size={12} />
                              Terminé le {new Date(item.completedDate).toLocaleDateString('fr-FR')}
                            </span>
                            <div className="history-rating">
                              {[...Array(5)].map((_, i) => (
                                <FaStar 
                                  key={i} 
                                  className={i < item.rating ? 'star-filled' : 'star-empty'} 
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="history-actions">
                          <button className="btn btn-outline-primary btn-sm">
                            <FaEye size={12} />
                          </button>
                          <button className="btn btn-outline-warning btn-sm">
                            <FaQuoteLeft size={12} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Paramètres */}
          {activeTab === 'settings' && (
            <div className="tab-content">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="content-card">
                    <div className="card-header">
                      <h4>Préférences</h4>
                    </div>
                    <div className="card-content">
                      <div className="settings-section">
                        <h6>
                          <FaLanguage className="me-2" />
                          Langue
                        </h6>
                        <select 
                          className="form-select"
                          value={preferences.language}
                          onChange={(e) => handlePreferenceChange('', 'language', e.target.value)}
                        >
                          <option value="fr">Français</option>
                          <option value="en">English</option>
                        </select>
                      </div>
                      
                      <div className="settings-section">
                        <h6>
                          <FaPalette className="me-2" />
                          Thème
                        </h6>
                        <select 
                          className="form-select"
                          value={preferences.theme}
                          onChange={(e) => handlePreferenceChange('', 'theme', e.target.value)}
                        >
                          <option value="light">Clair</option>
                          <option value="dark">Sombre</option>
                          <option value="auto">Automatique</option>
                        </select>
                      </div>

                      <div className="settings-section">
                        <h6>
                          <FaBell className="me-2" />
                          Notifications
                        </h6>
                        <div className="toggle-list">
                          <div className="toggle-item">
                            <label>Notifications par email</label>
                            <input 
                              type="checkbox" 
                              checked={preferences.notifications.email}
                              onChange={(e) => handlePreferenceChange('notifications', 'email', e.target.checked)}
                            />
                          </div>
                          <div className="toggle-item">
                            <label>Nouveaux livres</label>
                            <input 
                              type="checkbox" 
                              checked={preferences.notifications.newBooks}
                              onChange={(e) => handlePreferenceChange('notifications', 'newBooks', e.target.checked)}
                            />
                          </div>
                          <div className="toggle-item">
                            <label>Dates d'échéance</label>
                            <input 
                              type="checkbox" 
                              checked={preferences.notifications.dueDates}
                              onChange={(e) => handlePreferenceChange('notifications', 'dueDates', e.target.checked)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="content-card">
                    <div className="card-header">
                      <h4>Sécurité</h4>
                    </div>
                    <div className="card-content">
                      <div className="settings-section">
                        <h6>
                          <FaKey className="me-2" />
                          Mot de passe
                        </h6>
                        <button className="btn btn-outline-warning">
                          Changer le mot de passe
                        </button>
                      </div>
                      
                      <div className="settings-section">
                        <h6>
                          <FaShieldAlt className="me-2" />
                          Confidentialité
                        </h6>
                        <div className="toggle-list">
                          <div className="toggle-item">
                            <label>Profil public</label>
                            <input 
                              type="checkbox" 
                              checked={preferences.privacy.showProfile}
                              onChange={(e) => handlePreferenceChange('privacy', 'showProfile', e.target.checked)}
                            />
                          </div>
                          <div className="toggle-item">
                            <label>Activité visible</label>
                            <input 
                              type="checkbox" 
                              checked={preferences.privacy.showActivity}
                              onChange={(e) => handlePreferenceChange('privacy', 'showActivity', e.target.checked)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="settings-section danger-zone">
                        <h6>
                          <FaTrash className="me-2" />
                          Zone de danger
                        </h6>
                        <p>Supprimer définitivement votre compte et toutes vos données.</p>
                        <button className="btn btn-outline-danger">
                          Supprimer le compte
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        .profile-container {
          background: var(--bg-primary);
          min-height: 100vh;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .profile-container .container {
          max-width: 1400px !important;
          margin: 0 auto !important;
          padding: 0 1rem !important;
          width: 100% !important;
        }

        /* Profile Header */
        .profile-header {
          padding: 3rem 0 2rem;
          background: linear-gradient(135deg, 
            rgba(59, 130, 246, 0.1) 0%, 
            rgba(16, 185, 129, 0.05) 100%);
          border-radius: 0 0 20px 20px;
          margin-bottom: 2rem;
        }

        .profile-avatar-section {
          text-align: center;
        }

        .profile-avatar {
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, var(--warning), #e67e22);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin: 0 auto 1rem;
          box-shadow: 0 8px 25px rgba(241, 196, 14, 0.3);
        }

        .avatar-actions {
          margin-top: 1rem;
        }

        .profile-name {
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .profile-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-bottom: 1rem;
        }

        .profile-meta span {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .user-type {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6 !important;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-weight: 500;
        }

        .profile-bio {
          color: var(--text-secondary);
          line-height: 1.6;
          font-style: italic;
        }

        .profile-stats {
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
          transition: all 0.3s ease;
        }

        .stat-item:hover {
          transform: translateY(-2px);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .stat-icon {
          font-size: 1.25rem;
        }

        .stat-value {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .stat-label {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        /* Navigation */
        .profile-navigation {
          padding: 1rem 0 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          margin-bottom: 2rem;
        }

        .tabs-container {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .tab-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 0.75rem 1.5rem;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .tab-btn:hover,
        .tab-btn.active {
          background: rgba(241, 196, 14, 0.1);
          border-color: rgba(241, 196, 14, 0.3);
          color: var(--warning);
        }

        /* Content */
        .profile-content {
          padding: 0 0 4rem;
        }

        .tab-content {
          min-height: 400px;
        }

        .content-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 2rem;
        }

        .card-header {
          background: rgba(255, 255, 255, 0.08);
          padding: 1.5rem 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .card-header h3,
        .card-header h4 {
          color: var(--text-primary);
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0;
        }

        .card-content {
          padding: 2rem;
        }

        .form-label {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          display: block;
        }

        .form-control,
        .form-select {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          padding: 0.75rem;
          font-size: 0.875rem;
          color: var(--text-primary);
          transition: all 0.3s ease;
          width: 100%;
        }

        .form-control:focus,
        .form-select:focus {
          background: rgba(255, 255, 255, 0.12);
          border-color: var(--warning);
          box-shadow: 0 0 0 3px rgba(241, 196, 14, 0.1);
          outline: none;
          color: var(--text-primary);
        }

        .info-display {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 0.75rem;
          color: var(--text-primary);
          font-size: 0.875rem;
          display: flex;
          align-items: center;
        }

        .form-actions {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .btn {
          border: none;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          text-decoration: none;
          cursor: pointer;
        }

        .btn-sm {
          padding: 0.5rem 1rem;
          font-size: 0.8rem;
        }

        .btn-warning {
          background: var(--gradient-accent);
          color: var(--dark-900);
        }

        .btn-warning:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(241, 196, 14, 0.3);
        }

        .btn-success {
          background: #22c55e;
          color: white;
        }

        .btn-success:hover {
          background: #16a34a;
          transform: translateY(-2px);
        }

        .btn-outline-warning {
          background: transparent;
          border: 1px solid var(--warning);
          color: var(--warning);
        }

        .btn-outline-warning:hover:not(:disabled) {
          background: var(--warning);
          color: var(--dark-900);
        }

        .btn-outline-warning:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .btn-outline-primary {
          background: transparent;
          border: 1px solid #3b82f6;
          color: #3b82f6;
        }

        .btn-outline-primary:hover {
          background: #3b82f6;
          color: white;
        }

        .btn-outline-secondary {
          background: transparent;
          border: 1px solid var(--text-secondary);
          color: var(--text-secondary);
        }

        .btn-outline-secondary:hover {
          background: var(--text-secondary);
          color: var(--bg-primary);
        }

        .btn-outline-danger {
          background: transparent;
          border: 1px solid #ef4444;
          color: #ef4444;
        }

        .btn-outline-danger:hover {
          background: #ef4444;
          color: white;
        }

        /* Activity List */
        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .activity-item {
          display: flex;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .activity-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .activity-text {
          color: var(--text-primary);
          font-size: 0.875rem;
          margin-bottom: 0.25rem;
        }

        .activity-time {
          color: var(--text-tertiary);
          font-size: 0.75rem;
        }

        /* Loans Grid */
        .loans-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .loan-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .loan-card:hover {
          transform: translateY(-4px);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .loan-cover {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .loan-cover img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .loan-type {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          background: rgba(59, 130, 246, 0.9);
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: 8px;
          font-size: 0.7rem;
          font-weight: 600;
        }

        .loan-info {
          padding: 1.5rem;
        }

        .loan-title {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .loan-author {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .due-date {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
          padding: 0.5rem;
          border-radius: 6px;
        }

        .due-date.normal {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
        }

        .due-date.due-soon {
          background: rgba(245, 158, 11, 0.1);
          color: #f59e0b;
        }

        .due-date.overdue {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }

        .loan-renewals {
          color: var(--text-tertiary);
          font-size: 0.8rem;
          margin-bottom: 1rem;
        }

        .loan-actions {
          display: flex;
          gap: 0.5rem;
        }

        /* Favorites Grid */
        .favorites-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .favorite-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .favorite-card:hover {
          transform: translateY(-4px);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .favorite-cover {
          position: relative;
          height: 180px;
          overflow: hidden;
        }

        .favorite-cover img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .remove-favorite {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          background: rgba(239, 68, 68, 0.9);
          color: white;
          border: none;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .remove-favorite:hover {
          background: #ef4444;
          transform: scale(1.1);
        }

        .favorite-info {
          padding: 1.5rem;
        }

        .favorite-category {
          background: rgba(241, 196, 14, 0.1);
          color: var(--warning);
          padding: 0.25rem 0.5rem;
          border-radius: 8px;
          font-size: 0.7rem;
          font-weight: 500;
        }

        .favorite-title {
          color: var(--text-primary);
          font-size: 0.9rem;
          font-weight: 600;
          margin: 0.75rem 0 0.5rem;
        }

        .favorite-author {
          color: var(--text-secondary);
          font-size: 0.8rem;
          margin-bottom: 0.75rem;
        }

        .favorite-rating {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          margin-bottom: 0.5rem;
        }

        .star-filled {
          color: #f59e0b;
        }

        .star-empty {
          color: rgba(245, 158, 11, 0.3);
        }

        .favorite-added {
          color: var(--text-tertiary);
          font-size: 0.75rem;
        }

        /* History List */
        .history-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .history-item {
          display: flex;
          gap: 1rem;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .history-item:hover {
          border-color: rgba(241, 196, 14, 0.3);
        }

        .history-icon {
          width: 40px;
          height: 40px;
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .history-content {
          flex: 1;
        }

        .history-title {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .history-author {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin-bottom: 0.75rem;
        }

        .history-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .completion-date {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-tertiary);
          font-size: 0.8rem;
        }

        .history-rating {
          display: flex;
          gap: 0.25rem;
        }

        .history-actions {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        /* Settings */
        .settings-section {
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .settings-section:last-child {
          border-bottom: none;
          margin-bottom: 0;
        }

        .settings-section h6 {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
        }

        .toggle-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .toggle-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
        }

        .toggle-item label {
          color: var(--text-primary);
          font-size: 0.875rem;
          margin: 0;
        }

        .toggle-item input[type="checkbox"] {
          width: 18px;
          height: 18px;
          accent-color: var(--warning);
        }

        .danger-zone {
          background: rgba(239, 68, 68, 0.05);
          border: 1px solid rgba(239, 68, 68, 0.2);
          border-radius: 8px;
          padding: 1.5rem;
        }

        .danger-zone h6 {
          color: #ef4444;
        }

        .danger-zone p {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .profile-name {
            font-size: 1.5rem;
          }
          
          .profile-meta {
            flex-direction: column;
            gap: 0.75rem;
          }
          
          .profile-stats {
            grid-template-columns: 1fr;
            margin-top: 2rem;
          }
          
          .tabs-container {
            flex-direction: column;
            align-items: center;
          }
          
          .card-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          
          .loans-grid,
          .favorites-grid {
            grid-template-columns: 1fr;
          }
          
          .history-item {
            flex-direction: column;
            text-align: center;
          }
          
          .history-actions {
            flex-direction: row;
            justify-content: center;
          }
          
          .form-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default Profile;