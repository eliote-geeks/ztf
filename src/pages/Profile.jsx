import React, { useState } from 'react';
import { 
  FaUser, 
  FaEdit,
  FaSave,
  FaTimes,
  FaBook,
  FaCalendar,
  FaHistory,
  FaEye,
  FaDownload,
  FaStar,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaIdCard,
  FaCamera,
  FaCheck,
  FaClock,
  FaExclamationTriangle
} from 'react-icons/fa';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [userInfo, setUserInfo] = useState({
    firstName: 'Marie',
    lastName: 'Atangana',
    email: 'marie.atangana@student.univ-cm.org',
    phone: '+237 699 123 456',
    address: 'Quartier Mvan, Yaoundé',
    studentId: 'ETU20240156',
    level: 'Master 2 Théologie',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
  });

  const [borrowedBooks] = useState([
    {
      id: 1,
      title: "L'Art de la Prière",
      author: "Zacharias Tanee Fomum",
      borrowDate: "2024-01-05",
      dueDate: "2024-02-05",
      status: "active",
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=250&fit=crop",
      isbn: "978-2-123456-78-9",
      category: "Théologie"
    },
    {
      id: 2,
      title: "Histoire du Cameroun Moderne",
      author: "Jean-Baptiste Sipa",
      borrowDate: "2024-01-10",
      dueDate: "2024-02-10",
      status: "active",
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=250&fit=crop",
      isbn: "978-2-987654-32-1",
      category: "Histoire"
    },
    {
      id: 3,
      title: "Philosophie Africaine Contemporaine",
      author: "Prof. Emmanuel Ngwé",
      borrowDate: "2023-12-15",
      dueDate: "2024-01-15",
      status: "overdue",
      cover: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=200&h=250&fit=crop",
      isbn: "978-2-456789-01-2",
      category: "Philosophie"
    }
  ]);

  const [borrowHistory] = useState([
    {
      id: 4,
      title: "Contes et Légendes du Cameroun",
      author: "Marie Atangana",
      borrowDate: "2023-11-01",
      returnDate: "2023-12-01",
      status: "returned",
      rating: 5,
      cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Développement Durable en Afrique Centrale",
      author: "Dr. Paul Mbarga",
      borrowDate: "2023-10-15",
      returnDate: "2023-11-15",
      status: "returned",
      rating: 4,
      cover: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=200&h=250&fit=crop"
    }
  ]);

  const [statistics] = useState({
    totalBorrowed: 15,
    currentlyBorrowed: 3,
    overdue: 1,
    totalReturned: 12,
    averageRating: 4.3,
    memberSince: "2023-09-01"
  });

  const handleInputChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    // Ici on sauvegarderait les données
    console.log('Saving user info:', userInfo);
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset les changements
    setIsEditing(false);
  };

  const getDaysLeft = (dueDate) => {
    const due = new Date(dueDate);
    const today = new Date();
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getStatusColor = (status, daysLeft) => {
    if (status === 'overdue') return 'danger';
    if (daysLeft <= 3) return 'warning';
    return 'success';
  };

  const tabs = [
    { id: 'profile', label: 'Mon Profil', icon: FaUser },
    { id: 'borrowed', label: 'Mes Emprunts', icon: FaBook },
    { id: 'history', label: 'Historique', icon: FaHistory }
  ];

  return (
    <div className="profile-container">
      {/* Hero Section */}
      <section className="profile-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="hero-content">
                <div className="hero-badge">
                  <FaUser size={12} className="me-2" />
                  Mon Espace Personnel
                </div>
                <h1 className="hero-title">
                  Bonjour <span className="text-warning">{userInfo.firstName}</span>
                </h1>
                <p className="hero-subtitle">
                  Gérez votre profil, consultez vos emprunts et suivez votre activité 
                  sur la plateforme de la Bibliothèque ZTF.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="profile-stats">
                <div className="stat-item">
                  <FaBook className="stat-icon text-primary" />
                  <div>
                    <div className="stat-number">{statistics.currentlyBorrowed}</div>
                    <div className="stat-label">Emprunts actifs</div>
                  </div>
                </div>
                <div className="stat-item">
                  <FaStar className="stat-icon text-warning" />
                  <div>
                    <div className="stat-number">{statistics.averageRating}</div>
                    <div className="stat-label">Note moyenne</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="tabs-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tabs-nav">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
                    >
                      <Icon size={16} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="content-section">
        <div className="container">
          
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="row g-4">
              <div className="col-lg-4">
                <div className="profile-card">
                  <div className="profile-header">
                    <div className="avatar-section">
                      <div className="avatar-wrapper">
                        <img src={userInfo.avatar} alt="Avatar" className="avatar" />
                        <button className="avatar-edit-btn">
                          <FaCamera size={12} />
                        </button>
                      </div>
                      <h4>{userInfo.firstName} {userInfo.lastName}</h4>
                      <p className="student-id">{userInfo.studentId}</p>
                      <span className="level-badge">{userInfo.level}</span>
                    </div>
                  </div>
                  
                  <div className="profile-stats-detailed">
                    <div className="stats-grid">
                      <div className="stat-detail">
                        <div className="stat-value">{statistics.totalBorrowed}</div>
                        <div className="stat-name">Total emprunts</div>
                      </div>
                      <div className="stat-detail">
                        <div className="stat-value">{statistics.totalReturned}</div>
                        <div className="stat-name">Retournés</div>
                      </div>
                      <div className="stat-detail">
                        <div className="stat-value">{statistics.overdue}</div>
                        <div className="stat-name">En retard</div>
                      </div>
                      <div className="stat-detail">
                        <div className="stat-value">
                          {new Date(statistics.memberSince).toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' })}
                        </div>
                        <div className="stat-name">Membre depuis</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="info-card">
                  <div className="card-header">
                    <h3>Informations personnelles</h3>
                    {!isEditing ? (
                      <button 
                        onClick={() => setIsEditing(true)}
                        className="btn btn-sm btn-outline-warning"
                      >
                        <FaEdit size={14} className="me-2" />
                        Modifier
                      </button>
                    ) : (
                      <div className="edit-actions">
                        <button 
                          onClick={handleSave}
                          className="btn btn-sm btn-success me-2"
                        >
                          <FaSave size={14} className="me-2" />
                          Enregistrer
                        </button>
                        <button 
                          onClick={handleCancel}
                          className="btn btn-sm btn-outline-secondary"
                        >
                          <FaTimes size={14} className="me-2" />
                          Annuler
                        </button>
                      </div>
                    )}
                  </div>
                  
                  <div className="card-content">
                    <form>
                      <div className="row g-4">
                        <div className="col-md-6">
                          <label className="form-label">
                            <FaUser size={12} className="me-2" />
                            Prénom
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            className="form-control form-control-modern"
                            value={userInfo.firstName}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                          />
                        </div>
                        
                        <div className="col-md-6">
                          <label className="form-label">
                            <FaUser size={12} className="me-2" />
                            Nom
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            className="form-control form-control-modern"
                            value={userInfo.lastName}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                          />
                        </div>
                        
                        <div className="col-md-6">
                          <label className="form-label">
                            <FaEnvelope size={12} className="me-2" />
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            className="form-control form-control-modern"
                            value={userInfo.email}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                          />
                        </div>
                        
                        <div className="col-md-6">
                          <label className="form-label">
                            <FaPhone size={12} className="me-2" />
                            Téléphone
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            className="form-control form-control-modern"
                            value={userInfo.phone}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                          />
                        </div>
                        
                        <div className="col-md-6">
                          <label className="form-label">
                            <FaIdCard size={12} className="me-2" />
                            Numéro étudiant
                          </label>
                          <input
                            type="text"
                            name="studentId"
                            className="form-control form-control-modern"
                            value={userInfo.studentId}
                            onChange={handleInputChange}
                            disabled={true}
                          />
                        </div>
                        
                        <div className="col-md-6">
                          <label className="form-label">
                            <FaGraduationCap size={12} className="me-2" />
                            Niveau d'étude
                          </label>
                          <input
                            type="text"
                            name="level"
                            className="form-control form-control-modern"
                            value={userInfo.level}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                          />
                        </div>
                        
                        <div className="col-12">
                          <label className="form-label">
                            <FaMapMarkerAlt size={12} className="me-2" />
                            Adresse
                          </label>
                          <input
                            type="text"
                            name="address"
                            className="form-control form-control-modern"
                            value={userInfo.address}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Borrowed Books Tab */}
          {activeTab === 'borrowed' && (
            <div className="row g-4">
              <div className="col-12">
                <div className="section-header">
                  <h3>Mes emprunts en cours ({borrowedBooks.length})</h3>
                  <p>Gérez vos emprunts actuels et suivez les dates de retour</p>
                </div>
                
                <div className="row g-4">
                  {borrowedBooks.map((book) => {
                    const daysLeft = getDaysLeft(book.dueDate);
                    const statusColor = getStatusColor(book.status, daysLeft);
                    
                    return (
                      <div key={book.id} className="col-lg-6">
                        <div className="borrowed-book-card">
                          <div className="book-cover-section">
                            <img src={book.cover} alt={book.title} className="book-cover" />
                            <div className={`status-badge status-${statusColor}`}>
                              {book.status === 'overdue' ? (
                                <>
                                  <FaExclamationTriangle size={12} />
                                  En retard
                                </>
                              ) : daysLeft <= 3 ? (
                                <>
                                  <FaClock size={12} />
                                  {daysLeft} jour{daysLeft > 1 ? 's' : ''}
                                </>
                              ) : (
                                <>
                                  <FaCheck size={12} />
                                  À jour
                                </>
                              )}
                            </div>
                          </div>
                          
                          <div className="book-info">
                            <h5 className="book-title">{book.title}</h5>
                            <p className="book-author">par {book.author}</p>
                            
                            <div className="book-details">
                              <div className="detail-row">
                                <span className="detail-label">Emprunté le:</span>
                                <span className="detail-value">
                                  {new Date(book.borrowDate).toLocaleDateString('fr-FR')}
                                </span>
                              </div>
                              <div className="detail-row">
                                <span className="detail-label">À rendre le:</span>
                                <span className={`detail-value text-${statusColor}`}>
                                  {new Date(book.dueDate).toLocaleDateString('fr-FR')}
                                </span>
                              </div>
                              <div className="detail-row">
                                <span className="detail-label">ISBN:</span>
                                <span className="detail-value">{book.isbn}</span>
                              </div>
                            </div>
                            
                            <div className="book-actions">
                              <button className="btn btn-sm btn-outline-primary">
                                <FaEye size={12} />
                                Voir
                              </button>
                              <button className="btn btn-sm btn-warning">
                                Prolonger
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* History Tab */}
          {activeTab === 'history' && (
            <div className="row g-4">
              <div className="col-12">
                <div className="section-header">
                  <h3>Historique des emprunts ({borrowHistory.length})</h3>
                  <p>Livres que vous avez empruntés et retournés</p>
                </div>
                
                <div className="row g-4">
                  {borrowHistory.map((book) => (
                    <div key={book.id} className="col-lg-4">
                      <div className="history-book-card">
                        <div className="book-cover-small">
                          <img src={book.cover} alt={book.title} />
                          <div className="returned-badge">
                            <FaCheck size={10} />
                            Retourné
                          </div>
                        </div>
                        
                        <div className="book-info-small">
                          <h6 className="book-title-small">{book.title}</h6>
                          <p className="book-author-small">{book.author}</p>
                          
                          <div className="history-dates">
                            <div className="date-item">
                              <span>Emprunté:</span>
                              <span>{new Date(book.borrowDate).toLocaleDateString('fr-FR')}</span>
                            </div>
                            <div className="date-item">
                              <span>Retourné:</span>
                              <span>{new Date(book.returnDate).toLocaleDateString('fr-FR')}</span>
                            </div>
                          </div>
                          
                          {book.rating && (
                            <div className="rating-section">
                              <span>Ma note:</span>
                              <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                  <FaStar 
                                    key={i} 
                                    className={i < book.rating ? 'star-filled' : 'star-empty'} 
                                    size={12} 
                                  />
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
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
        }

        .container {
          max-width: 1200px;
        }

        /* Hero Section */
        .profile-hero {
          padding: 3rem 0;
          background: linear-gradient(135deg, 
            rgba(29, 79, 139, 0.1) 0%, 
            rgba(60, 107, 139, 0.05) 100%);
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
        }

        .profile-stats {
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

        /* Tabs */
        .tabs-section {
          padding: 1rem 0;
        }

        .tabs-nav {
          display: flex;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 0.5rem;
          gap: 0.5rem;
        }

        .tab-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          flex: 1;
          justify-content: center;
        }

        .tab-item:hover {
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.9);
        }

        .tab-item.active {
          background: rgba(241, 196, 14, 0.1);
          color: var(--warning);
          border: 1px solid rgba(241, 196, 14, 0.3);
        }

        /* Content */
        .content-section {
          padding: 2rem 0 4rem;
        }

        .profile-card,
        .info-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          overflow: hidden;
        }

        .profile-header {
          padding: 2rem;
          text-align: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .avatar-section {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .avatar-wrapper {
          position: relative;
          margin-bottom: 1rem;
        }

        .avatar {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 3px solid rgba(241, 196, 14, 0.3);
          object-fit: cover;
        }

        .avatar-edit-btn {
          position: absolute;
          bottom: 0;
          right: 0;
          background: var(--warning);
          color: var(--dark-900);
          border: none;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .profile-header h4 {
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .student-id {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .level-badge {
          background: rgba(241, 196, 14, 0.1);
          color: var(--warning);
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .profile-stats-detailed {
          padding: 1.5rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .stat-detail {
          text-align: center;
          background: rgba(255, 255, 255, 0.05);
          padding: 1rem;
          border-radius: 8px;
        }

        .stat-value {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--warning);
          margin-bottom: 0.25rem;
        }

        .stat-name {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .card-header h3 {
          color: var(--text-primary);
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0;
        }

        .edit-actions {
          display: flex;
          gap: 0.5rem;
        }

        .card-content {
          padding: 1.5rem;
        }

        .form-label {
          font-size: 0.75rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
        }

        .form-control-modern {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          padding: 0.75rem;
          font-size: 0.875rem;
          color: var(--text-primary);
          transition: all 0.3s ease;
        }

        .form-control-modern:focus {
          background: rgba(255, 255, 255, 0.12);
          border-color: var(--warning);
          box-shadow: 0 0 0 3px rgba(241, 196, 14, 0.1);
          outline: none;
          color: var(--text-primary);
        }

        .form-control-modern:disabled {
          background: rgba(255, 255, 255, 0.03);
          border-color: rgba(255, 255, 255, 0.05);
          color: var(--text-tertiary);
        }

        .section-header {
          margin-bottom: 2rem;
        }

        .section-header h3 {
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .section-header p {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        /* Borrowed Books */
        .borrowed-book-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          display: flex;
          gap: 1.5rem;
          padding: 1.5rem;
          height: 100%;
        }

        .book-cover-section {
          position: relative;
          flex: 0 0 120px;
        }

        .book-cover {
          width: 120px;
          height: 160px;
          border-radius: 8px;
          object-fit: cover;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .status-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .status-success {
          background: rgba(34, 197, 94, 0.9);
          color: var(--text-primary);
        }

        .status-warning {
          background: rgba(245, 158, 11, 0.9);
          color: var(--text-primary);
        }

        .status-danger {
          background: rgba(239, 68, 68, 0.9);
          color: var(--text-primary);
        }

        .book-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .book-title {
          color: var(--text-primary);
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .book-author {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .book-details {
          flex: 1;
          margin-bottom: 1rem;
        }

        .detail-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }

        .detail-label {
          font-size: 0.8rem;
          color: var(--text-tertiary);
        }

        .detail-value {
          font-size: 0.8rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .book-actions {
          display: flex;
          gap: 0.5rem;
        }

        /* History Books */
        .history-book-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1rem;
          height: 100%;
        }

        .book-cover-small {
          position: relative;
          margin-bottom: 1rem;
        }

        .book-cover-small img {
          width: 100%;
          height: 120px;
          border-radius: 6px;
          object-fit: cover;
        }

        .returned-badge {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          background: rgba(34, 197, 94, 0.9);
          color: var(--text-primary);
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.6rem;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .book-title-small {
          color: var(--text-primary);
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .book-author-small {
          color: var(--text-secondary);
          font-size: 0.75rem;
          margin-bottom: 1rem;
        }

        .history-dates {
          margin-bottom: 1rem;
        }

        .date-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.25rem;
          font-size: 0.75rem;
        }

        .date-item span:first-child {
          color: var(--text-tertiary);
        }

        .date-item span:last-child {
          color: var(--text-secondary);
        }

        .rating-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.75rem;
        }

        .rating-section span {
          color: var(--text-tertiary);
        }

        .stars {
          display: flex;
          gap: 0.125rem;
        }

        .star-filled {
          color: var(--warning);
        }

        .star-empty {
          color: rgba(255, 255, 255, 0.3);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .profile-stats {
            margin-top: 2rem;
          }
          
          .tabs-nav {
            flex-direction: column;
          }
          
          .tab-item {
            justify-content: flex-start;
          }
          
          .borrowed-book-card {
            flex-direction: column;
          }
          
          .book-cover-section {
            flex: none;
            align-self: center;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Profile;