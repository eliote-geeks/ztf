import React, { useState } from 'react';
import { 
  FaUser, 
  FaBook,
  FaBookOpen,
  FaHeart,
  FaCog,
  FaSearch,
  FaChartLine,
  FaBookmark,
  FaShoppingCart,
  FaClock,
  FaMapMarkerAlt,
  FaCalendar,
  FaGraduationCap,
  FaEdit,
  FaBell,
  FaExclamationTriangle,
  FaEye,
  FaBars,
  FaTimes
} from 'react-icons/fa';

import Dashboard from '../components/Profile/Dashboard';
import Search from '../components/Profile/Search';
import Activity from '../components/Profile/Activity';
import Reading from '../components/Profile/Reading';
import Favorites from '../components/Profile/Favorites';
import Shop from '../components/Profile/Shop';
import Account from '../components/Profile/Account';
import Settings from '../components/Profile/Settings';
import ReadingRoom from '../components/Profile/ReadingRoom';
import Carts from '../components/Profile/Carts';
import ProfilePageTransition from '../components/Profile/PageTransition';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  // ✅ PANIER MOBILE + DROPDOWN MENU + HEADER BIBLIOTHÈQUE - 27/08/2025 10:35 ✅

  // Données utilisateur
  const userInfo = {
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
    membershipExpiry: '2025-12-31',
    avatar: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiByeD0iNzUiIGZpbGw9IiMxZDRmOGIiLz4KPHRleHQgeD0iNzUiIHk9IjkwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iNDgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TUU8L3RleHQ+Cjwvc3ZnPgo='
  };

  // Navigation tabs
  const navigationTabs = [
    { id: 'dashboard', label: 'Tableau de bord', icon: FaChartLine },
    { id: 'search', label: 'Rechercher', icon: FaSearch },
    { id: 'activity', label: 'Mon Activité', icon: FaClock },
    { id: 'reading', label: 'Lecture', icon: FaBookOpen },
    { id: 'reading-room', label: 'Réserver une salle', icon: FaEye },
    { id: 'favorites', label: 'Favoris', icon: FaHeart },
    { id: 'carts', label: 'Paniers', icon: FaShoppingCart },
    { id: 'shop', label: 'Boutique', icon: FaShoppingCart },
    { id: 'account', label: 'Mon Compte', icon: FaUser },
    { id: 'settings', label: 'Paramètres', icon: FaCog }
  ];

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

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return <Dashboard userInfo={userInfo} />;
      case 'search':
        return <Search />;
      case 'activity':
        return <Activity />;
      case 'reading':
        return <Reading />;
      case 'reading-room':
        return <ReadingRoom />;
      case 'favorites':
        return <Favorites />;
      case 'carts':
        return <Carts />;
      case 'shop':
        return <Shop />;
      case 'account':
        return <Account userInfo={userInfo} />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard userInfo={userInfo} />;
    }
  };

  return (
    <div className="profile-container">
      <div className="container">
        
        {/* ⭐ PROFIL MODIFIÉ - NOUVELLE VERSION ⭐ */}
        <div className="profile-header">
          <div className="profile-cover">
            <div className="profile-info">
              <div className="profile-avatar">
                <img src={userInfo.avatar} alt="Avatar" />
                <button className="avatar-edit">
                  <FaEdit size={12} />
                </button>
              </div>
              
              <div className="profile-details">
                <h1 className="profile-name">
                  {userInfo.firstName} {userInfo.lastName}
                </h1>
                <p className="profile-title">{getUserTypeLabel(userInfo.userType)}</p>
                <div className="profile-meta">
                  <span className="meta-item">
                    <FaGraduationCap size={14} />
                    {userInfo.department}
                  </span>
                  <span className="meta-item">
                    <FaCalendar size={14} />
                    Membre depuis {userInfo.joinDate}
                  </span>
                  <span className="meta-item">
                    <FaMapMarkerAlt size={14} />
                    {userInfo.address}
                  </span>
                </div>
              </div>

              <div className="profile-stats">
                <div className="stat">
                  <span className="stat-number">127</span>
                  <span className="stat-label">Emprunts</span>
                </div>
                <div className="stat">
                  <span className="stat-number">34</span>
                  <span className="stat-label">Favoris</span>
                </div>
                <div className="stat">
                  <span className="stat-number">245h</span>
                  <span className="stat-label">Lecture</span>
                </div>
              </div>

              <div className="profile-actions">
                <button className="profile-btn primary">
                  <FaEdit size={14} />
                  Modifier profil
                </button>
                <button className="profile-btn">
                  <FaBell size={14} />
                  <span className="notification-badge">3</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Content Layout */}
        <div className="profile-content">
          <div className="row g-4">
            
            {/* Sidebar avec Navigation */}
            <div className="col-lg-3">
              <div className="sidebar">
                
                {/* Bouton menu mobile */}
                <button 
                  className="mobile-menu-toggle"
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  {showMobileMenu ? <FaTimes size={20} /> : <FaBars size={20} />}
                  <span>Menu</span>
                </button>

                {/* Photo utilisateur */}
                <div className="sidebar-user">
                  <div className="sidebar-avatar">
                    <img src={userInfo.avatar} alt="Photo de profil" />
                  </div>
                  <h4>{userInfo.firstName} {userInfo.lastName}</h4>
                  <p>{userInfo.department}</p>
                </div>

                {/* Navigation */}
                <div className={`sidebar-nav ${showMobileMenu ? 'mobile-open' : ''}`}>
                  <h5>Navigation</h5>
                  <div className="nav-items-container">
                    {navigationTabs.map(tab => {
                      const Icon = tab.icon;
                      return (
                        <button
                          key={tab.id}
                          className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
                          onClick={() => {
                            setActiveTab(tab.id);
                            setShowMobileMenu(false);
                          }}
                        >
                          <Icon size={16} />
                          <span>{tab.label}</span>
                          {tab.id === 'activity' && <span className="nav-badge">5</span>}
                          {tab.id === 'reading' && <span className="nav-badge">3</span>}
                          {tab.id === 'favorites' && <span className="nav-badge">34</span>}
                          {tab.id === 'carts' && <span className="nav-badge">5</span>}
                          {tab.id === 'reading-room' && <span className="nav-badge">2</span>}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Activité récente */}
                <div className="sidebar-widget">
                  <h5>Activité récente</h5>
                  <div className="activity-list">
                    <div className="activity-item">
                      <FaBook />
                      <div>
                        <p>Emprunt livre</p>
                        <span>il y a 2h</span>
                      </div>
                    </div>
                    <div className="activity-item">
                      <FaHeart />
                      <div>
                        <p>Ajout favoris</p>
                        <span>il y a 4h</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-lg-9">
              <div className="main-content">
                <ProfilePageTransition activeTab={activeTab}>
                  {renderContent()}
                </ProfilePageTransition>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .profile-container {
          background: var(--bg-primary);
          min-height: 100vh;
          padding: 2rem 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .profile-header {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 2rem;
        }

        .profile-cover {
          background: linear-gradient(135deg, 
            rgba(0, 0, 0, 0.7) 0%, 
            rgba(29, 79, 139, 0.8) 50%,
            rgba(0, 0, 0, 0.6) 100%),
            url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1400&h=600&fit=crop&q=80');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          padding: 2rem;
          position: relative;
        }

        .profile-info {
          display: flex;
          align-items: flex-end;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .profile-avatar {
          position: relative;
          flex-shrink: 0;
        }

        .profile-avatar img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: 4px solid rgba(29, 79, 139, 0.3);
          object-fit: cover;
        }

        .avatar-edit {
          position: absolute;
          bottom: 5px;
          right: 5px;
          background: #1d4f8b;
          color: white;
          border: none;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .avatar-edit:hover {
          background: #2d5f9b;
          transform: scale(1.1);
        }

        .profile-details {
          flex: 1;
          min-width: 250px;
        }

        .profile-name {
          font-size: 2rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.5rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
        }

        .profile-title {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 600;
          margin-bottom: 1rem;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
        }

        .profile-meta {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }

        .profile-stats {
          display: flex;
          gap: 2rem;
          flex-shrink: 0;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
        }

        .stat-label {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.8);
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
        }

        .profile-actions {
          display: flex;
          gap: 1rem;
          align-items: center;
          flex-shrink: 0;
        }

        .profile-btn {
          background: rgba(29, 79, 139, 0.1);
          border: 1px solid rgba(29, 79, 139, 0.3);
          color: #1d4f8b;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .profile-btn.primary {
          background: #1d4f8b;
          color: white;
        }

        .profile-btn:hover {
          background: #1d4f8b;
          color: white;
          transform: translateY(-2px);
        }

        .profile-btn.primary:hover {
          background: #2d5f9b;
        }

        .notification-badge {
          position: absolute;
          top: -5px;
          right: -5px;
          background: #1d4f8b;
          color: white;
          border-radius: 50%;
          width: 18px;
          height: 18px;
          font-size: 0.7rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sidebar-user {
          background: #1d4f8b;
          color: white;
          padding: 1.5rem;
          text-align: center;
          margin-bottom: 1.5rem;
        }
        
        .sidebar-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto 1rem;
          border: 3px solid rgba(255, 255, 255, 0.3);
        }
        
        .sidebar-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .sidebar-user h4 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        
        .sidebar-user p {
          font-size: 0.875rem;
          opacity: 0.8;
          margin: 0;
        }
        
        .sidebar-nav {
          margin-bottom: 1.5rem;
        }
        
        .sidebar-nav h5 {
          color: #1d4f8b;
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          padding: 0 0.5rem;
        }
        
        .nav-items-container {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        
        .nav-item {
          background: transparent;
          border: none;
          padding: 0.875rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #1d4f8b;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          width: 100%;
          text-align: left;
          border-left: 3px solid transparent;
          position: relative;
        }
        
        .nav-item:hover {
          background: rgba(29, 79, 139, 0.08);
          color: #1d4f8b;
        }
        
        .nav-item.active {
          background: rgba(29, 79, 139, 0.12);
          color: #1d4f8b;
          font-weight: 600;
          border-left-color: #1d4f8b;
        }
        
        .nav-badge {
          background: #1d4f8b;
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: 10px;
          font-size: 0.7rem;
          font-weight: 600;
          min-width: 20px;
          text-align: center;
          margin-left: auto;
        }
        
        .sidebar-widget {
          border-top: 1px solid rgba(29, 79, 139, 0.15);
          padding-top: 1.5rem;
        }
        
        .sidebar-widget h5 {
          color: #1d4f8b;
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          padding: 0 0.5rem;
        }

        .profile-content {
          margin-top: 2rem;
          position: relative;
          z-index: 1;
        }

        .sidebar {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .activity-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .activity-item svg {
          color: #1d4f8b;
          flex-shrink: 0;
        }

        .activity-item div p {
          margin: 0 0 0.25rem 0;
          font-weight: 500;
          color: var(--text-primary);
        }

        .activity-item div span {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .widget-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .activity-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .activity-icon {
          width: 36px;
          height: 36px;
          background: rgba(29, 79, 139, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1d4f8b;
          flex-shrink: 0;
        }

        .activity-content p {
          font-size: 0.9rem;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .activity-content span {
          font-size: 0.8rem;
          color: var(--text-tertiary);
        }

        .summary-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .summary-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 8px;
        }

        .summary-item.warning {
          background: rgba(231, 76, 60, 0.05);
        }

        .summary-icon {
          color: #1d4f8b;
          font-size: 1.1rem;
        }

        .summary-item.warning .summary-icon {
          color: #e74c3c;
        }

        .summary-item strong {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          display: block;
        }

        .summary-item span {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .main-content {
          background: rgba(29, 79, 139, 0.03);
          border: 1px solid rgba(29, 79, 139, 0.15);
          min-height: 600px;
          overflow: hidden;
        }

        /* Bouton menu mobile */
        .mobile-menu-toggle {
          display: none;
          background: #1d4f8b;
          color: white;
          border: none;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        @media (max-width: 768px) {
          .profile-info {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .profile-stats {
            justify-content: center;
          }

          .profile-content .row {
            flex-direction: column;
          }

          .sidebar {
            order: 1;
            position: relative;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            margin-bottom: 2rem;
            z-index: 1000;
          }

          .mobile-menu-toggle {
            display: flex;
          }

          .sidebar-user {
            display: none;
          }

          .sidebar-nav {
            display: none;
            margin: 0;
            padding: 0;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(29, 79, 139, 0.98);
            backdrop-filter: blur(20px);
            border-radius: 0 0 16px 16px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-top: none;
            z-index: 1001;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          }

          .sidebar-nav.mobile-open {
            display: block;
          }

          .sidebar-nav h5 {
            display: none;
          }

          .nav-items-container {
            display: flex;
            flex-direction: column;
            gap: 0;
            padding: 1rem 0;
          }

          .nav-item {
            padding: 1rem 1.5rem;
            font-size: 0.875rem;
            flex-direction: row;
            text-align: left;
            gap: 0.75rem;
            border-left: none;
            color: white !important;
          }

          .nav-item:hover {
            background: rgba(255, 255, 255, 0.1);
            color: white !important;
          }

          .nav-item.active {
            background: rgba(255, 255, 255, 0.2);
            color: white !important;
          }

          .nav-item span {
            font-size: 0.875rem;
            color: inherit;
          }

          .nav-badge {
            position: static;
            transform: none;
            margin-left: auto;
          }

          .sidebar-widget {
            display: none;
          }

          .main-content {
            order: 1;
            padding-bottom: 100px;
          }

          .meta-item {
            justify-content: center;
          }
        }

        @media (max-width: 576px) {
          .profile-container {
            padding: 1rem 0;
          }

          .profile-cover {
            padding: 1rem;
          }

          .profile-name {
            font-size: 1.5rem;
          }

          .profile-stats {
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default UserProfile;