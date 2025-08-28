import React, { useState } from 'react';
import { 
  FaUser,
  FaEdit,
  FaCamera,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaIdCard,
  FaCalendar,
  FaGraduationCap,
  FaShieldAlt,
  FaSave,
  FaTimes,
  FaKey,
  FaEye,
  FaEyeSlash,
  FaCheckCircle,
  FaExclamationTriangle
} from 'react-icons/fa';

const Account = ({ userInfo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [editedInfo, setEditedInfo] = useState({...userInfo});
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'success',
      message: 'Informations mises à jour avec succès',
      visible: false
    },
    {
      id: 2,
      type: 'error', 
      message: 'Erreur lors de la mise à jour',
      visible: false
    }
  ]);

  const handleInputChange = (field, value) => {
    setEditedInfo({
      ...editedInfo,
      [field]: value
    });
  };

  const handlePasswordChange = (field, value) => {
    setPasswordData({
      ...passwordData,
      [field]: value
    });
  };

  const handleSave = () => {
    // Simulation de la sauvegarde
    setTimeout(() => {
      setIsEditing(false);
      showNotification('success');
    }, 1000);
  };

  const handlePasswordUpdate = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      showNotification('error', 'Les mots de passe ne correspondent pas');
      return;
    }
    
    // Simulation de la mise à jour du mot de passe
    setTimeout(() => {
      setIsChangingPassword(false);
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
      showNotification('success', 'Mot de passe mis à jour avec succès');
    }, 1000);
  };

  const showNotification = (type, message = null) => {
    const notification = notifications.find(n => n.type === type);
    if (message) notification.message = message;
    notification.visible = true;
    
    setTimeout(() => {
      notification.visible = false;
      setNotifications([...notifications]);
    }, 3000);
    
    setNotifications([...notifications]);
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

  const getStatusBadge = (status) => {
    const badges = {
      active: { text: 'Actif', color: '#1d4f8b', bg: 'rgba(29, 79, 139, 0.1)' },
      suspended: { text: 'Suspendu', color: '#1d4f8b', bg: 'rgba(29, 79, 139, 0.1)' },
      pending: { text: 'En attente', color: '#1d4f8b', bg: 'rgba(29, 79, 139, 0.1)' }
    };
    return badges[status] || badges.active;
  };

  const accountStats = {
    totalLoans: 127,
    activeLoans: 3,
    overdue: 1,
    fines: 2500, // FCFA
    creditLimit: 50000,
    memberSince: '2022-03-15',
    lastLogin: '2024-02-28 14:30'
  };

  const statusBadge = getStatusBadge(editedInfo.status);

  return (
    <div className="account-content">
      {/* Notifications */}
      <div className="notifications">
        {notifications.map(notification => (
          notification.visible && (
            <div 
              key={notification.id}
              className={`notification ${notification.type}`}
            >
              {notification.type === 'success' ? <FaCheckCircle /> : <FaExclamationTriangle />}
              <span>{notification.message}</span>
              <button onClick={() => {
                notification.visible = false;
                setNotifications([...notifications]);
              }}>
                <FaTimes />
              </button>
            </div>
          )
        ))}
      </div>

      <div className="account-header">
        <h2>Mon Compte</h2>
        <p>Gérez vos informations personnelles et votre profil</p>
      </div>

      <div className="account-layout">
        {/* Profil principal */}
        <div className="profile-section">
          <div className="profile-card">
            <div className="profile-avatar-section">
              <div className="avatar-container">
                <img 
                  src={editedInfo.avatar} 
                  alt="Avatar" 
                  className="profile-avatar"
                />
                <button className="avatar-edit-btn">
                  <FaCamera />
                </button>
              </div>
              <div className="profile-basic-info">
                <h3>{editedInfo.firstName} {editedInfo.lastName}</h3>
                <p className="user-type">{getUserTypeLabel(editedInfo.userType)}</p>
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
              {!isEditing ? (
                <button 
                  className="btn-primary"
                  onClick={() => setIsEditing(true)}
                >
                  <FaEdit size={14} />
                  Modifier le profil
                </button>
              ) : (
                <div className="edit-actions">
                  <button 
                    className="btn-success"
                    onClick={handleSave}
                  >
                    <FaSave size={14} />
                    Enregistrer
                  </button>
                  <button 
                    className="btn-secondary"
                    onClick={() => {
                      setIsEditing(false);
                      setEditedInfo({...userInfo});
                    }}
                  >
                    <FaTimes size={14} />
                    Annuler
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Informations personnelles */}
          <div className="info-card">
            <h4>Informations personnelles</h4>
            <div className="info-grid">
              <div className="info-group">
                <label>Prénom</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedInfo.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="form-input"
                  />
                ) : (
                  <div className="info-display">
                    <FaUser className="info-icon" />
                    <span>{editedInfo.firstName}</span>
                  </div>
                )}
              </div>

              <div className="info-group">
                <label>Nom</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedInfo.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="form-input"
                  />
                ) : (
                  <div className="info-display">
                    <FaUser className="info-icon" />
                    <span>{editedInfo.lastName}</span>
                  </div>
                )}
              </div>

              <div className="info-group">
                <label>Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    value={editedInfo.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="form-input"
                  />
                ) : (
                  <div className="info-display">
                    <FaEnvelope className="info-icon" />
                    <span>{editedInfo.email}</span>
                  </div>
                )}
              </div>

              <div className="info-group">
                <label>Téléphone</label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={editedInfo.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="form-input"
                  />
                ) : (
                  <div className="info-display">
                    <FaPhone className="info-icon" />
                    <span>{editedInfo.phone}</span>
                  </div>
                )}
              </div>

              <div className="info-group full-width">
                <label>Adresse</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedInfo.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="form-input"
                  />
                ) : (
                  <div className="info-display">
                    <FaMapMarkerAlt className="info-icon" />
                    <span>{editedInfo.address}</span>
                  </div>
                )}
              </div>

              <div className="info-group full-width">
                <label>Département</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedInfo.department}
                    onChange={(e) => handleInputChange('department', e.target.value)}
                    className="form-input"
                  />
                ) : (
                  <div className="info-display">
                    <FaGraduationCap className="info-icon" />
                    <span>{editedInfo.department}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Informations de compte */}
          <div className="info-card">
            <h4>Informations de compte</h4>
            <div className="account-details">
              <div className="detail-item">
                <FaIdCard className="detail-icon" />
                <div className="detail-content">
                  <label>Numéro d'identification</label>
                  <span>{editedInfo.studentId}</span>
                </div>
              </div>

              <div className="detail-item">
                <FaCalendar className="detail-icon" />
                <div className="detail-content">
                  <label>Membre depuis</label>
                  <span>{accountStats.memberSince}</span>
                </div>
              </div>

              <div className="detail-item">
                <FaShieldAlt className="detail-icon" />
                <div className="detail-content">
                  <label>Dernière connexion</label>
                  <span>{accountStats.lastLogin}</span>
                </div>
              </div>

              <div className="detail-item">
                <FaCalendar className="detail-icon" />
                <div className="detail-content">
                  <label>Expiration du compte</label>
                  <span>{editedInfo.membershipExpiry}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="sidebar-section">
          {/* Statistiques du compte */}
          <div className="stats-card">
            <h4>Statistiques</h4>
            <div className="stats-list">
              <div className="stat-item">
                <span className="stat-label">Total emprunts</span>
                <span className="stat-value">{accountStats.totalLoans}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Emprunts actifs</span>
                <span className="stat-value">{accountStats.activeLoans}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">En retard</span>
                <span className="stat-value warning">{accountStats.overdue}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Amendes</span>
                <span className="stat-value warning">
                  {accountStats.fines.toLocaleString()} FCFA
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Limite de crédit</span>
                <span className="stat-value">
                  {accountStats.creditLimit.toLocaleString()} FCFA
                </span>
              </div>
            </div>
          </div>

          {/* Sécurité */}
          <div className="security-card">
            <h4>Sécurité</h4>
            
            {!isChangingPassword ? (
              <button 
                className="btn-outline"
                onClick={() => setIsChangingPassword(true)}
              >
                <FaKey size={14} />
                Changer le mot de passe
              </button>
            ) : (
              <div className="password-form">
                <div className="password-group">
                  <label>Mot de passe actuel</label>
                  <div className="password-input">
                    <input
                      type={showCurrentPassword ? "text" : "password"}
                      value={passwordData.currentPassword}
                      onChange={(e) => handlePasswordChange('currentPassword', e.target.value)}
                      className="form-input"
                      placeholder="Mot de passe actuel"
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    >
                      {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                <div className="password-group">
                  <label>Nouveau mot de passe</label>
                  <div className="password-input">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      value={passwordData.newPassword}
                      onChange={(e) => handlePasswordChange('newPassword', e.target.value)}
                      className="form-input"
                      placeholder="Nouveau mot de passe"
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                      {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                <div className="password-group">
                  <label>Confirmer le nouveau mot de passe</label>
                  <div className="password-input">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={passwordData.confirmPassword}
                      onChange={(e) => handlePasswordChange('confirmPassword', e.target.value)}
                      className="form-input"
                      placeholder="Confirmer le mot de passe"
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                <div className="password-actions">
                  <button 
                    className="btn-success"
                    onClick={handlePasswordUpdate}
                  >
                    <FaSave size={14} />
                    Mettre à jour
                  </button>
                  <button 
                    className="btn-secondary"
                    onClick={() => {
                      setIsChangingPassword(false);
                      setPasswordData({
                        currentPassword: '',
                        newPassword: '',
                        confirmPassword: ''
                      });
                    }}
                  >
                    <FaTimes size={14} />
                    Annuler
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .account-content {
          padding: 2rem;
          min-height: 600px;
          position: relative;
        }

        .notifications {
          position: fixed;
          top: 2rem;
          right: 2rem;
          z-index: 1000;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .notification {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 500;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          animation: slideIn 0.3s ease-out;
        }

        .notification.success {
          background: rgba(29, 79, 139, 0.9);
          color: #1d4f8b;
        }

        .notification.error {
          background: rgba(29, 79, 139, 0.9);
          color: #1d4f8b;
        }

        .notification button {
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
          font-size: 1rem;
        }

        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .account-header {
          margin-bottom: 2rem;
        }

        .account-header h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .account-header p {
          color: var(--text-secondary);
          font-size: 1rem;
          margin: 0;
        }

        .account-layout {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
        }

        .profile-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          margin-bottom: 2rem;
        }

        .profile-avatar-section {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .avatar-container {
          position: relative;
        }

        .profile-avatar {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #1d4f8b;
        }

        .avatar-edit-btn {
          position: absolute;
          bottom: 0;
          right: 0;
          background: none;
          color: white;
          border: none;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 16px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
        }

        .avatar-edit-btn:hover {
          color: #1d4f8b;
          transform: scale(1.2);
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
        }

        .profile-basic-info h3 {
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .user-type {
          color: var(--text-secondary);
          font-size: 1rem;
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
          gap: 1rem;
        }

        .edit-actions {
          display: flex;
          gap: 1rem;
        }

        .info-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          margin-bottom: 2rem;
        }

        .info-card h4 {
          color: var(--text-primary);
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .info-group.full-width {
          grid-column: 1 / -1;
        }

        .info-group label {
          display: block;
          color: var(--text-primary);
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .info-display {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .info-icon {
          color: #1d4f8b;
          font-size: 0.9rem;
        }

        .form-input {
          width: 100%;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.15);
          border: 2px solid rgba(255, 255, 255, 0.8);
          border-radius: 8px;
          color: var(--text-primary);
          font-size: 0.875rem;
          transition: all 0.3s ease;
        }

        .form-input:focus {
          outline: none;
          border-color: #1d4f8b;
          background: rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 0 3px rgba(29, 79, 139, 0.1);
        }

        .account-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .detail-icon {
          color: #1d4f8b;
          font-size: 1.1rem;
        }

        .detail-content label {
          display: block;
          color: var(--text-primary);
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .detail-content span {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .stats-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }

        .stats-card h4 {
          color: var(--text-primary);
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .stats-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .stat-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
        }

        .stat-label {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .stat-value {
          color: var(--text-primary);
          font-weight: 600;
          font-size: 0.9rem;
        }

        .stat-value.warning {
          color: #1d4f8b;
        }

        .security-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 1.5rem;
        }

        .security-card h4 {
          color: var(--text-primary);
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .password-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .password-group label {
          display: block;
          color: var(--text-primary);
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .password-input {
          position: relative;
        }

        .password-toggle {
          position: absolute;
          right: 0.75rem;
          top: 50%;
          
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          font-size: 1rem;
        }

        .password-toggle:hover {
          color: var(--text-primary);
        }

        .password-actions {
          display: flex;
          gap: 0.75rem;
          margin-top: 1rem;
        }

        .btn-primary,
        .btn-success,
        .btn-secondary,
        .btn-outline {
          padding: 0.5rem 0.75rem;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          justify-content: center;
          border: none;
        }

        .btn-primary {
          background: #1d4f8b;
          color: white;
        }

        .btn-primary:hover {
          background: #1d4f8b;
          
        }

        .btn-success {
          background: #1d4f8b;
          color: white;
        }

        .btn-success:hover {
          background: #219a52;
        }

        .btn-secondary {
          background: rgba(108, 117, 125, 0.2);
          color: #6c757d;
        }

        .btn-secondary:hover {
          background: rgba(108, 117, 125, 0.3);
        }

        .btn-outline {
          background: rgba(29, 79, 139, 0.1);
          border: 2px solid #1d4f8b;
          color: #1d4f8b;
          font-weight: 600;
          padding: 0.75rem 1rem;
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(29, 79, 139, 0.1);
        }

        .btn-outline:hover {
          background: #1d4f8b;
          color: white;
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(29, 79, 139, 0.2);
        }

        @media (max-width: 768px) {
          .account-layout {
            grid-template-columns: 1fr;
          }

          .profile-avatar-section {
            flex-direction: column;
            text-align: center;
          }

          .info-grid {
            grid-template-columns: 1fr;
          }

          .edit-actions,
          .password-actions {
            flex-direction: column;
          }

          .notifications {
            left: 1rem;
            right: 1rem;
            top: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Account;