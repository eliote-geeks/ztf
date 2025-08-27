import React from 'react';
import { FaUser, FaBell, FaCog, FaSignOutAlt } from 'react-icons/fa';

const ProfileHeader = ({ userInfo, onTabChange, activeTab }) => {
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

  const getStatusBadge = (status) => {
    const badges = {
      active: { text: 'Actif', color: '#1d4f8b', bg: 'rgba(29, 79, 139, 0.1)' },
      suspended: { text: 'Suspendu', color: '#1d4f8b', bg: 'rgba(29, 79, 139, 0.1)' },
      pending: { text: 'En attente', color: '#1d4f8b', bg: 'rgba(29, 79, 139, 0.1)' }
    };
    return badges[status] || badges.active;
  };

  const statusBadge = getStatusBadge(userInfo.status);

  return (
    <div className="profile-header">
      <div className="profile-user-section">
        <div className="user-avatar">
          <img src={userInfo.avatar} alt="Avatar utilisateur" />
        </div>
        <div className="user-details">
          <h3 className="user-name">
            {userInfo.firstName} {userInfo.lastName}
          </h3>
          <p className="user-type">{getUserTypeLabel(userInfo.userType)}</p>
          <div className="user-department">{userInfo.department}</div>
          <div 
            className="status-badge"
            style={{
              color: statusBadge.color,
              background: statusBadge.bg
            }}
          >
            {statusBadge.text}
          </div>
        </div>
      </div>

      <div className="profile-actions">
        <button 
          className="action-btn"
          onClick={() => onTabChange('settings')}
          title="Paramètres"
        >
          <FaCog size={16} />
        </button>
        <button 
          className="action-btn notifications"
          title="Notifications"
        >
          <FaBell size={16} />
          <span className="notification-count">3</span>
        </button>
        <button 
          className="action-btn logout"
          title="Déconnexion"
        >
          <FaSignOutAlt size={16} />
        </button>
      </div>

      <style jsx>{`
        .profile-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }

        .profile-user-section {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .user-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid #1d4f8b;
        }

        .user-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .user-name {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .user-type {
          color: var(--text-secondary);
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }

        .user-department {
          color: var(--text-tertiary);
          font-size: 0.875rem;
          margin-bottom: 0.75rem;
        }

        .status-badge {
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          display: inline-block;
        }

        .profile-actions {
          display: flex;
          gap: 0.75rem;
        }

        .action-btn {
          position: relative;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .action-btn:hover {
          background: rgba(29, 79, 139, 0.1);
          border-color: rgba(29, 79, 139, 0.3);
          color: #1d4f8b;
          
        }

        .action-btn.logout:hover {
          background: rgba(29, 79, 139, 0.1);
          border-color: rgba(29, 79, 139, 0.3);
          color: #1d4f8b;
        }

        .notification-count {
          position: absolute;
          top: -5px;
          right: -5px;
          background: #1d4f8b;
          color: white;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          font-size: 0.7rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .profile-header {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }

          .profile-user-section {
            flex-direction: column;
            text-align: center;
          }

          .user-avatar {
            width: 100px;
            height: 100px;
          }

          .profile-actions {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default ProfileHeader;