import React, { useState, useRef, useEffect } from 'react';
import { FaChartLine, FaSearch, FaBook, FaBookmark, FaHeart, FaShoppingCart, FaUser, FaCog, FaChevronDown } from 'react-icons/fa';

const ProfileNavigation = ({ activeTab, onTabChange, className = '' }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navigationTabs = [
    { id: 'dashboard', label: 'Tableau de bord', icon: FaChartLine },
    { id: 'search', label: 'Rechercher', icon: FaSearch },
    { id: 'loans', label: 'Emprunts', icon: FaBook },
    { id: 'reservations', label: 'Réservations', icon: FaBookmark },
    { id: 'favorites', label: 'Favoris', icon: FaHeart },
    { id: 'shop', label: 'Boutique', icon: FaShoppingCart },
    { id: 'account', label: 'Mon Compte', icon: FaUser },
    { id: 'settings', label: 'Paramètres', icon: FaCog }
  ];

  const currentTab = navigationTabs.find(tab => tab.id === activeTab) || navigationTabs[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleTabChange = (tabId) => {
    onTabChange(tabId);
    setIsDropdownOpen(false);
  };

  const getBadgeCount = (tabId) => {
    const badges = {
      loans: 3,
      reservations: 2,
      favorites: 34
    };
    return badges[tabId];
  };

  return (
    <nav className={`profile-navigation ${className}`} ref={dropdownRef}>
      <div className="nav-header">
        <div className="user-avatar">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" alt="Photo de profil" />
        </div>
        <div className="nav-info">
          <h5>Navigation</h5>
          <p>Accédez à vos sections</p>
        </div>
      </div>
      
      <div className="dropdown-container">
        <button 
          className={`dropdown-trigger ${isDropdownOpen ? 'open' : ''}`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <currentTab.icon className="nav-icon" />
          <span className="nav-label">{currentTab.label}</span>
          {getBadgeCount(currentTab.id) && (
            <span className="nav-badge">{getBadgeCount(currentTab.id)}</span>
          )}
          <FaChevronDown className={`chevron ${isDropdownOpen ? 'rotated' : ''}`} />
        </button>

        {isDropdownOpen && (
          <div className="dropdown-menu">
            {navigationTabs.map(tab => {
              const Icon = tab.icon;
              const badgeCount = getBadgeCount(tab.id);
              return (
                <button
                  key={tab.id}
                  className={`dropdown-item ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => handleTabChange(tab.id)}
                >
                  <Icon className="nav-icon" />
                  <span className="nav-label">{tab.label}</span>
                  {badgeCount && (
                    <span className="nav-badge">{badgeCount}</span>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <style jsx>{`
        .profile-navigation {
          background: rgba(29, 79, 139, 0.08);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(29, 79, 139, 0.15);
          border-radius: 16px;
          padding: 1.5rem;
          position: relative;
        }

        .nav-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .user-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid #1d4f8b;
          flex-shrink: 0;
        }

        .user-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .nav-info h5 {
          color: var(--text-primary);
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .nav-info p {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .dropdown-container {
          position: relative;
        }

        .dropdown-trigger {
          background: rgba(29, 79, 139, 0.1);
          border: 1px solid rgba(29, 79, 139, 0.2);
          border-radius: 12px;
          padding: 0.875rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #1d4f8b;
          font-size: 0.875rem;
          transition: all 0.3s ease;
          cursor: pointer;
          width: 100%;
          position: relative;
        }

        .dropdown-trigger:hover {
          background: rgba(29, 79, 139, 0.15);
          border-color: rgba(29, 79, 139, 0.3);
          
        }

        .dropdown-trigger.open {
          background: rgba(29, 79, 139, 0.15);
          border-color: rgba(29, 79, 139, 0.3);
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
        }

        .nav-icon {
          font-size: 1rem;
          flex-shrink: 0;
        }

        .nav-label {
          font-weight: 500;
          flex: 1;
        }

        .nav-badge {
          background: #1d4f8b;
          color: white;
          padding: 0.2rem 0.5rem;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 600;
          min-width: 22px;
          text-align: center;
        }

        .chevron {
          font-size: 0.8rem;
          transition: transform 0.3s ease;
        }

        .chevron.rotated {
          transform: rotate(180deg);
        }

        .dropdown-menu {
          position: absolute;
          top: calc(100% - 1px);
          left: 0;
          right: 0;
          background: rgba(29, 79, 139, 0.1);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(29, 79, 139, 0.2);
          border-top: none;
          border-radius: 0 0 12px 12px;
          overflow: hidden;
          z-index: 100;
          animation: dropdown-open 0.3s ease;
        }

        @keyframes dropdown-open {
          from {
            opacity: 0;
            
          }
          to {
            opacity: 1;
            
          }
        }

        .dropdown-item {
          background: transparent;
          border: none;
          padding: 0.875rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
          transition: all 0.3s ease;
          cursor: pointer;
          text-align: left;
          width: 100%;
          border-bottom: 1px solid rgba(29, 79, 139, 0.1);
        }

        .dropdown-item:last-child {
          border-bottom: none;
        }

        .dropdown-item:hover {
          background: rgba(29, 79, 139, 0.1);
          color: #1d4f8b;
        }

        .dropdown-item.active {
          background: rgba(29, 79, 139, 0.15);
          color: #1d4f8b;
          border-left: 3px solid #1d4f8b;
        }

        @media (max-width: 768px) {
          .nav-header {
            flex-direction: column;
            text-align: center;
            gap: 0.75rem;
          }

          .user-avatar {
            width: 60px;
            height: 60px;
          }

          .dropdown-trigger {
            justify-content: center;
          }

          .dropdown-item {
            justify-content: center;
          }
        }
      `}</style>
    </nav>
  );
};

export default ProfileNavigation;