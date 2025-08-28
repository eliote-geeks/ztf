import React, { useState } from 'react';
import { 
  FaBook, 
  FaClock,
  FaCalendar,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaExclamationTriangle,
  FaSync,
  FaEye,
  FaPrint,
  FaDownload,
  FaFilter,
  FaList,
  FaTh,
  FaBookmark,
  FaChevronDown,
  FaHistory,
  FaUser,
  FaBuilding
} from 'react-icons/fa';

const Activity = () => {
  const [activeTab, setActiveTab] = useState('current');
  const [viewMode, setViewMode] = useState('list');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Activité unifiée (emprunts + réservations + historique)
  const allActivities = [
    // Emprunts actuels
    {
      id: 1,
      type: 'loan',
      title: "Théologie Systématique: Une Introduction",
      author: "Wayne Grudem",
      isbn: "978-2-123456-78-9",
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop&q=80",
      loanDate: "2024-02-15",
      dueDate: "2024-03-15",
      renewals: 1,
      maxRenewals: 3,
      status: "active",
      itemType: "physical",
      location: "Section Théologie - A12",
      callNumber: "BT75.3 .G78 2024"
    },
    {
      id: 2,
      type: 'loan',
      title: "Histoire du Christianisme en Afrique",
      author: "Kwame Bediako",
      isbn: "978-2-987654-32-1",
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&q=80",
      loanDate: "2024-02-20",
      dueDate: "2024-03-05",
      renewals: 0,
      maxRenewals: 3,
      status: "overdue",
      itemType: "physical",
      location: "Section Histoire - B15",
      callNumber: "BR1360 .B45 2024"
    },
    // Réservations actuelles
    {
      id: 3,
      type: 'reservation',
      title: "Salle de Lecture Générale",
      description: "Réservation de place",
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&q=80",
      reservationDate: "2024-02-25",
      scheduledDate: "2024-03-01",
      timeSlot: "09:00 - 12:00",
      status: "confirmed",
      itemType: "room",
      location: "Rez-de-chaussée, Aile Est",
      capacity: 120,
      amenities: ["WiFi", "Prises électriques", "Climatisation"]
    },
    {
      id: 4,
      type: 'reservation',
      title: "Dictionnaire Biblique Illustré",
      author: "Collectif",
      isbn: "978-2-456789-12-3",
      cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=400&fit=crop&q=80",
      reservationDate: "2024-02-26",
      scheduledDate: "2024-03-02",
      status: "pending",
      itemType: "book",
      location: "Section Référence - R08",
      callNumber: "BS440 .D53 2024"
    },
    // Historique
    {
      id: 5,
      type: 'loan',
      title: "Manuel de Théologie Pastorale",
      author: "Jean-Claude Larchet",
      isbn: "978-2-789012-34-5",
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop&q=80",
      loanDate: "2024-01-10",
      returnDate: "2024-02-10",
      dueDate: "2024-02-09",
      renewals: 2,
      maxRenewals: 3,
      status: "returned",
      itemType: "physical",
      location: "Section Théologie - A08"
    },
    {
      id: 6,
      type: 'reservation',
      title: "Salle de Travail en Groupe",
      description: "Session d'étude",
      cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=250&fit=crop&q=80",
      reservationDate: "2024-02-01",
      scheduledDate: "2024-02-15",
      timeSlot: "14:00 - 17:00",
      status: "completed",
      itemType: "room",
      location: "1er étage, Aile Ouest",
      capacity: 8
    }
  ];

  const tabs = [
    { id: 'current', label: 'En cours', icon: FaClock },
    { id: 'history', label: 'Historique', icon: FaHistory }
  ];

  const statusOptions = [
    { value: 'all', label: 'Tous les statuts' },
    { value: 'active', label: 'Actif' },
    { value: 'overdue', label: 'En retard' },
    { value: 'pending', label: 'En attente' },
    { value: 'confirmed', label: 'Confirmé' },
    { value: 'returned', label: 'Retourné' },
    { value: 'completed', label: 'Terminé' }
  ];

  const filteredActivities = allActivities.filter(activity => {
    // Filtrer par onglet (actuel vs historique)
    const isCurrentTab = activeTab === 'current';
    const isCurrentActivity = ['active', 'overdue', 'pending', 'confirmed'].includes(activity.status);
    
    if (isCurrentTab && !isCurrentActivity) return false;
    if (!isCurrentTab && isCurrentActivity) return false;

    // Filtrer par statut
    if (statusFilter !== 'all' && activity.status !== statusFilter) return false;

    return true;
  });

  const getStatusBadge = (status) => {
    const statusConfig = {
      active: { label: 'Actif', color: 'success', icon: FaCheckCircle },
      overdue: { label: 'En retard', color: 'danger', icon: FaExclamationTriangle },
      pending: { label: 'En attente', color: 'warning', icon: FaClock },
      confirmed: { label: 'Confirmé', color: 'success', icon: FaCheckCircle },
      returned: { label: 'Retourné', color: 'info', icon: FaCheckCircle },
      completed: { label: 'Terminé', color: 'info', icon: FaCheckCircle }
    };

    const config = statusConfig[status] || statusConfig.pending;
    const Icon = config.icon;

    return (
      <span className={`status-badge ${config.color}`}>
        <Icon size={12} />
        {config.label}
      </span>
    );
  };

  const getTypeIcon = (type, itemType) => {
    if (type === 'loan') return <FaBook size={16} />;
    if (type === 'reservation' && itemType === 'room') return <FaBuilding size={16} />;
    if (type === 'reservation' && itemType === 'book') return <FaBookmark size={16} />;
    return <FaBook size={16} />;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const calculateDaysRemaining = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const renderActivityItem = (activity) => {
    const isLoan = activity.type === 'loan';
    const isRoom = activity.itemType === 'room';

    return (
      <div key={activity.id} className={`activity-item ${activity.status}`}>
        <div className="activity-image">
          <img src={activity.cover} alt={activity.title} />
          <div className="activity-type">
            {getTypeIcon(activity.type, activity.itemType)}
          </div>
        </div>

        <div className="activity-details">
          <div className="activity-header">
            <h4>{activity.title}</h4>
            {getStatusBadge(activity.status)}
          </div>

          {activity.author && (
            <p className="activity-author">{activity.author}</p>
          )}

          {activity.description && (
            <p className="activity-description">{activity.description}</p>
          )}

          <div className="activity-stats">
            {isLoan ? (
              <>
                <div className="stat-badge">
                  <span>📚 {activity.itemType === 'physical' ? 'Livre physique' : 'Document numérique'}</span>
                </div>
                <div className="stat-badge">
                  <span>🔄 Renouvellement: {activity.renewals}/{activity.maxRenewals}</span>
                </div>
                {activity.status === 'active' && (
                  <div className="stat-badge">
                    <span>⏰ {(() => {
                      const days = calculateDaysRemaining(activity.dueDate);
                      if (days > 0) return `${days} jour(s) restant(s)`;
                      if (days === 0) return 'À rendre aujourd\'hui';
                      return `${Math.abs(days)} jour(s) de retard`;
                    })()}</span>
                  </div>
                )}
                {activity.status === 'overdue' && (
                  <div className="stat-badge overdue">
                    <span>⚠️ En retard</span>
                  </div>
                )}
                {activity.status === 'returned' && (
                  <div className="stat-badge success">
                    <span>✅ Retourné</span>
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="stat-badge">
                  <span>🏛️ {activity.itemType === 'room' ? 'Salle de lecture' : 'Livre réservé'}</span>
                </div>
                {activity.capacity && (
                  <div className="stat-badge">
                    <span>👥 Capacité: {activity.capacity} places</span>
                  </div>
                )}
                <div className="stat-badge">
                  <span>⭐ Priorité haute</span>
                </div>
                {activity.timeSlot && (
                  <div className="stat-badge">
                    <span>🕒 {activity.timeSlot}</span>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        <div className="activity-actions">
          {isLoan && activity.status === 'active' && activity.renewals < activity.maxRenewals && (
            <button className="action-btn primary">
              <FaSync size={14} />
              Renouveler
            </button>
          )}
          
          <button className="action-btn secondary">
            <FaEye size={14} />
            Détails
          </button>

          {(isLoan || activity.itemType === 'book') && (
            <button className="action-btn secondary">
              <FaDownload size={14} />
              Reçu
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="activity-container">
      <div className="activity-header">
        <h2>Mon Activité</h2>
        <p>Suivi complet de vos emprunts et réservations</p>
      </div>

      {/* Navigation par onglets */}
      <div className="activity-tabs">
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

      {/* Contrôles */}
      <div className="activity-controls">
        <div className="filters">
          <div className="filter-dropdown">
            <button 
              className="filter-trigger"
              onClick={() => setShowFilters(!showFilters)}
            >
              <FaFilter size={14} />
              <span>{statusOptions.find(opt => opt.value === statusFilter)?.label}</span>
              <FaChevronDown size={12} className={`chevron ${showFilters ? 'open' : ''}`} />
            </button>
            
            {showFilters && (
              <div className="filter-menu">
                {statusOptions.map(option => (
                  <button
                    key={option.value}
                    className={`filter-option ${statusFilter === option.value ? 'active' : ''}`}
                    onClick={() => {
                      setStatusFilter(option.value);
                      setShowFilters(false);
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="view-controls">
          <button
            className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => setViewMode('list')}
          >
            <FaList />
          </button>
          <button
            className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
          >
            <FaTh />
          </button>
        </div>
      </div>

      {/* Résultats */}
      <div className="results-info">
        {filteredActivities.length} activité(s) trouvée(s)
      </div>

      {/* Liste des activités */}
      <div className={`activity-list ${viewMode}`}>
        {filteredActivities.length > 0 ? (
          filteredActivities.map(renderActivityItem)
        ) : (
          <div className="empty-state">
            <FaHistory size={48} />
            <h3>Aucune activité</h3>
            <p>Aucune activité trouvée pour les critères sélectionnés.</p>
          </div>
        )}
      </div>

      <style jsx>{`
        .activity-container {
          background: var(--bg-primary);
          min-height: 100vh;
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .activity-header {
          margin-bottom: 2rem;
        }

        .activity-header h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .activity-header p {
          color: var(--text-secondary);
          font-size: 1rem;
        }

        .activity-tabs {
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
        }

        .tab-btn:hover {
          color: #1d4f8b;
        }

        .tab-btn.active {
          color: #1d4f8b;
          border-bottom-color: #1d4f8b;
        }

        .activity-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .filters {
          display: flex;
          gap: 1rem;
          align-items: center;
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

        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .activity-list.grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          gap: 1.5rem;
        }

        .activity-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
          display: flex;
          gap: 1rem;
          transition: all 0.3s ease;
        }

        .activity-item:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(29, 79, 139, 0.3);
        }

        .activity-item.overdue {
          border-color: rgba(239, 68, 68, 0.3);
          background: rgba(239, 68, 68, 0.05);
        }

        .activity-image {
          position: relative;
          width: 80px;
          height: 100px;
          flex-shrink: 0;
        }

        .activity-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
        }

        .activity-type {
          position: absolute;
          top: -8px;
          right: -8px;
          background: #1d4f8b;
          color: white;
          padding: 0.5rem;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .activity-type svg {
          color: white !important;
        }

        .activity-details {
          flex: 1;
        }

        .activity-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
          gap: 1rem;
        }

        .activity-header h4 {
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--text-primary);
          margin: 0;
          line-height: 1.3;
        }

        .activity-author, .activity-description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
        }

        .activity-meta {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .activity-stats {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 1rem;
        }

        .stat-badge {
          background: rgba(29, 79, 139, 0.1);
          border: 1px solid rgba(29, 79, 139, 0.2);
          color: #1d4f8b;
          padding: 0.25rem 0.5rem;
          border-radius: 0;
          font-size: 0.75rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .stat-badge.overdue {
          background: rgba(239, 68, 68, 0.1);
          border-color: rgba(239, 68, 68, 0.3);
          color: #ef4444;
        }

        .stat-badge.success {
          background: rgba(34, 197, 94, 0.1);
          border-color: rgba(34, 197, 94, 0.3);
          color: #22c55e;
        }

        .days-remaining {
          font-weight: 600;
          color: #1d4f8b;
        }

        .amenities {
          flex-wrap: wrap;
        }

        .amenity-tag {
          background: rgba(29, 79, 139, 0.1);
          color: #1d4f8b;
          padding: 0.15rem 0.4rem;
          border-radius: 8px;
          font-size: 0.7rem;
          font-weight: 500;
        }

        .status-badge {
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          white-space: nowrap;
        }

        .status-badge.success {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
        }

        .status-badge.warning {
          background: rgba(251, 191, 36, 0.1);
          color: #fbbf24;
        }

        .status-badge.danger {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }

        .status-badge.info {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
        }

        .activity-actions {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: flex-end;
        }

        .action-btn {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          white-space: nowrap;
        }

        .action-btn.primary {
          background: #1d4f8b;
          color: white;
        }

        .action-btn.primary:hover {
          background: #1a4480;
        }

        .action-btn.secondary {
          background: rgba(255, 255, 255, 0.08);
          color: var(--text-secondary);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .action-btn.secondary:hover {
          background: rgba(255, 255, 255, 0.12);
          color: var(--text-primary);
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
          .activity-container {
            padding: 1rem;
          }

          .activity-item {
            flex-direction: column;
          }

          .activity-image {
            width: 100%;
            height: 200px;
          }

          .activity-actions {
            flex-direction: row;
            justify-content: space-between;
          }

          .activity-list.grid {
            grid-template-columns: 1fr;
          }

          .activity-controls {
            flex-direction: column;
            align-items: stretch;
          }

          .activity-tabs {
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

export default Activity;