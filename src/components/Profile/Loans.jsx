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
  FaTh
} from 'react-icons/fa';

const Loans = () => {
  const [activeTab, setActiveTab] = useState('current');
  const [viewMode, setViewMode] = useState('list');
  const [statusFilter, setStatusFilter] = useState('all');

  // Emprunts actuels
  const currentLoans = [
    {
      id: 1,
      title: "Théologie Systématique: Une Introduction",
      author: "Wayne Grudem",
      isbn: "978-2-123456-78-9",
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop&q=80",
      loanDate: "2024-02-15",
      dueDate: "2024-03-15",
      renewals: 1,
      maxRenewals: 3,
      status: "active",
      type: "physical",
      location: "Section Théologie - A12",
      callNumber: "BT75.3 .G78 2024"
    },
    {
      id: 2,
      title: "Histoire du Christianisme en Afrique",
      author: "Kwame Bediako",
      isbn: "978-2-987654-32-1",
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&q=80",
      loanDate: "2024-02-20",
      dueDate: "2024-03-05",
      renewals: 0,
      maxRenewals: 3,
      status: "overdue",
      type: "ebook",
      location: "Collection numérique",
      callNumber: "BR1360 .B43 2019"
    },
    {
      id: 3,
      title: "Philosophie Africaine Contemporaine",
      author: "Kwame Gyekye",
      isbn: "978-2-456789-12-3",
      cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=400&fit=crop&q=80",
      loanDate: "2024-02-25",
      dueDate: "2024-03-20",
      renewals: 0,
      maxRenewals: 3,
      status: "due-soon",
      type: "physical",
      location: "Section Philosophie - C15",
      callNumber: "B5305 .G94 2018"
    },
    {
      id: 4,
      title: "Spiritualité et Développement Personnel",
      author: "Henri Nouwen",
      isbn: "978-2-789123-45-6",
      cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=400&fit=crop&q=80",
      loanDate: "2024-02-28",
      dueDate: "2024-03-25",
      renewals: 0,
      maxRenewals: 3,
      status: "active",
      type: "physical",
      location: "Section Spiritualité - D08",
      callNumber: "BV4501.3 .N68 2021"
    }
  ];

  // Historique des emprunts
  const loanHistory = [
    {
      id: 1,
      title: "Contes et Légendes du Cameroun",
      author: "Marie Atangana",
      isbn: "978-2-345678-90-1",
      cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=400&fit=crop&q=80",
      loanDate: "2024-01-15",
      returnDate: "2024-02-14",
      status: "returned",
      rating: 5,
      type: "physical"
    },
    {
      id: 2,
      title: "Développement Durable en Afrique Centrale",
      author: "Dr. Paul Mbarga",
      isbn: "978-2-234567-89-0",
      cover: "https://images.unsplash.com/photo-1533327325824-76bc4e62d560?w=300&h=400&fit=crop&q=80",
      loanDate: "2024-01-10",
      returnDate: "2024-02-09",
      status: "returned",
      rating: 4,
      type: "ebook"
    },
    {
      id: 3,
      title: "Les Royaumes Bamiléké",
      author: "Prof. Marie Essomba",
      isbn: "978-2-345678-12-3",
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&q=80",
      loanDate: "2023-12-20",
      returnDate: "2024-01-19",
      status: "returned",
      rating: 5,
      type: "physical"
    }
  ];

  const calculateDaysUntilDue = (dueDate) => {
    const due = new Date(dueDate);
    const today = new Date();
    const diffTime = due - today;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const getDueDateStatus = (dueDate) => {
    const days = calculateDaysUntilDue(dueDate);
    if (days < 0) return { 
      class: 'overdue', 
      text: `${Math.abs(days)} jour(s) de retard`, 
      color: '#1d4f8b',
      priority: 'high'
    };
    if (days <= 3) return { 
      class: 'due-soon', 
      text: `${days} jour(s) restant(s)`, 
      color: '#1d4f8b',
      priority: 'medium'
    };
    return { 
      class: 'normal', 
      text: `${days} jour(s) restant(s)`, 
      color: '#1d4f8b',
      priority: 'low'
    };
  };

  const getStatusBadge = (status) => {
    const badges = {
      'active': { text: 'En cours', color: '#1d4f8b', bg: 'rgba(29, 79, 139, 0.1)' },
      'overdue': { text: 'En retard', color: '#1d4f8b', bg: 'rgba(29, 79, 139, 0.1)' },
      'due-soon': { text: 'Échéance proche', color: '#1d4f8b', bg: 'rgba(29, 79, 139, 0.1)' },
      'returned': { text: 'Retourné', color: '#95a5a6', bg: 'rgba(149, 165, 166, 0.1)' }
    };
    return badges[status] || badges['active'];
  };

  const filteredCurrentLoans = statusFilter === 'all' 
    ? currentLoans 
    : currentLoans.filter(loan => loan.status === statusFilter);

  const renderStarRating = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span 
        key={i}
        style={{ 
          color: i < rating ? '#1d4f8b' : '#bdc3c7',
          fontSize: '0.8rem'
        }}
      >
        ★
      </span>
    ));
  };

  const LoanCard = ({ loan, isHistory = false }) => {
    const dueStatus = !isHistory ? getDueDateStatus(loan.dueDate) : null;
    const statusBadge = getStatusBadge(loan.status);

    return (
      <div className="loan-card">
        <div className="loan-cover">
          <img src={loan.cover} alt={loan.title} />
          <div className="loan-type">
            {loan.type === 'ebook' ? '📱' : '📚'}
          </div>
        </div>
        
        <div className="loan-details">
          <div className="loan-header">
            <h4 className="loan-title">{loan.title}</h4>
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
          
          <p className="loan-author">par {loan.author}</p>
          
          <div className="loan-meta">
            {loan.callNumber && (
              <div className="meta-item">
                <FaBook size={12} />
                <span>{loan.callNumber}</span>
              </div>
            )}
            <div className="meta-item">
              <FaMapMarkerAlt size={12} />
              <span>{loan.location}</span>
            </div>
            <div className="meta-item">
              <FaCalendar size={12} />
              <span>
                {isHistory 
                  ? `${loan.loanDate} - ${loan.returnDate}`
                  : `Emprunté le ${loan.loanDate}`
                }
              </span>
            </div>
          </div>

          {!isHistory && dueStatus && (
            <div className="due-status">
              <FaClock size={12} />
              <span style={{ color: dueStatus.color }}>
                {dueStatus.text}
              </span>
              {loan.renewals > 0 && (
                <span className="renewals">
                  ({loan.renewals}/{loan.maxRenewals} renouvellements)
                </span>
              )}
            </div>
          )}

          {isHistory && loan.rating && (
            <div className="rating-display">
              <span>Votre note: </span>
              {renderStarRating(loan.rating)}
            </div>
          )}
        </div>

        <div className="loan-actions">
          {!isHistory ? (
            <>
              {loan.renewals < loan.maxRenewals && loan.status !== 'overdue' && (
                <button className="action-btn primary">
                  <FaSync size={14} />
                  Renouveler
                </button>
              )}
              {loan.type === 'ebook' && (
                <button className="action-btn secondary">
                  <FaEye size={14} />
                  Lire
                </button>
              )}
              <button className="action-btn outline">
                <FaEye size={14} />
                Détails
              </button>
            </>
          ) : (
            <>
              <button className="action-btn secondary">
                <FaDownload size={14} />
                Télécharger reçu
              </button>
              <button className="action-btn outline">
                <FaBook size={14} />
                Emprunter à nouveau
              </button>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="loans-content">
      <div className="loans-header">
        <h2>Mes emprunts</h2>
        <p>Gérez vos emprunts actuels et consultez votre historique</p>
      </div>

      {/* Navigation tabs */}
      <div className="tabs-navigation">
        <button 
          className={`tab-btn ${activeTab === 'current' ? 'active' : ''}`}
          onClick={() => setActiveTab('current')}
        >
          <FaBook size={16} />
          Emprunts actuels
          <span className="tab-badge">{currentLoans.length}</span>
        </button>
        <button 
          className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`}
          onClick={() => setActiveTab('history')}
        >
          <FaClock size={16} />
          Historique
          <span className="tab-badge">{loanHistory.length}</span>
        </button>
      </div>

      {/* Contrôles */}
      <div className="controls-section">
        <div className="filters">
          {activeTab === 'current' && (
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="filter-select"
            >
              <option value="all">Tous les statuts</option>
              <option value="active">En cours</option>
              <option value="overdue">En retard</option>
              <option value="due-soon">Échéance proche</option>
            </select>
          )}
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

      {/* Statistiques rapides pour emprunts actuels */}
      {activeTab === 'current' && (
        <div className="loans-stats">
          <div className="stat-item">
            <FaBook className="stat-icon" style={{ color: '#1d4f8b' }} />
            <div>
              <span className="stat-number">{currentLoans.length}</span>
              <span className="stat-label">Total emprunts</span>
            </div>
          </div>
          <div className="stat-item">
            <FaExclamationTriangle className="stat-icon" style={{ color: '#1d4f8b' }} />
            <div>
              <span className="stat-number">
                {currentLoans.filter(l => l.status === 'overdue').length}
              </span>
              <span className="stat-label">En retard</span>
            </div>
          </div>
          <div className="stat-item">
            <FaClock className="stat-icon" style={{ color: '#e67e22' }} />
            <div>
              <span className="stat-number">
                {currentLoans.filter(l => l.status === 'due-soon').length}
              </span>
              <span className="stat-label">Échéance proche</span>
            </div>
          </div>
          <div className="stat-item">
            <FaSync className="stat-icon" style={{ color: '#1d4f8b' }} />
            <div>
              <span className="stat-number">
                {currentLoans.reduce((acc, l) => acc + l.renewals, 0)}
              </span>
              <span className="stat-label">Renouvellements</span>
            </div>
          </div>
        </div>
      )}

      {/* Contenu principal */}
      <div className={`loans-grid ${viewMode}`}>
        {activeTab === 'current' ? (
          filteredCurrentLoans.length > 0 ? (
            filteredCurrentLoans.map(loan => (
              <LoanCard key={loan.id} loan={loan} />
            ))
          ) : (
            <div className="empty-state">
              <FaBook size={48} />
              <h3>Aucun emprunt trouvé</h3>
              <p>
                {statusFilter === 'all' 
                  ? "Vous n'avez aucun emprunt en cours"
                  : "Aucun emprunt ne correspond à ce filtre"
                }
              </p>
              <button className="btn-primary">
                Rechercher des livres
              </button>
            </div>
          )
        ) : (
          loanHistory.length > 0 ? (
            loanHistory.map(loan => (
              <LoanCard key={loan.id} loan={loan} isHistory={true} />
            ))
          ) : (
            <div className="empty-state">
              <FaClock size={48} />
              <h3>Aucun historique</h3>
              <p>Votre historique d'emprunts apparaîtra ici</p>
            </div>
          )
        )}
      </div>

      <style jsx>{`
        .loans-content {
          padding: 2rem;
          min-height: 600px;
        }

        .loans-header {
          margin-bottom: 2rem;
        }

        .loans-header h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .loans-header p {
          color: var(--text-secondary);
          font-size: 1rem;
          margin: 0;
        }

        .tabs-navigation {
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
          font-weight: 600;
          cursor: pointer;
          border-bottom: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .tab-btn.active {
          color: #1d4f8b;
          border-bottom-color: #1d4f8b;
        }

        .tab-badge {
          background: rgba(29, 79, 139, 0.2);
          color: #1d4f8b;
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.75rem;
        }

        .controls-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .filter-select {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          padding: 0.75rem;
          color: var(--text-primary);
          font-size: 0.875rem;
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

        .view-btn.active {
          background: #1d4f8b;
          color: white;
        }

        .loans-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 1.5rem;
        }

        .stat-icon {
          font-size: 1.5rem;
        }

        .stat-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          display: block;
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .loans-grid {
          display: grid;
          gap: 2rem;
        }

        .loans-grid.list {
          grid-template-columns: 1fr;
        }

        .loans-grid.grid {
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        }

        .loan-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 1.5rem;
          display: flex;
          gap: 1.5rem;
          transition: all 0.3s ease;
        }

        .loan-card:hover {
          
          border-color: rgba(29, 79, 139, 0.3);
        }

        .loans-grid.grid .loan-card {
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .loan-cover {
          position: relative;
          width: 80px;
          height: 100px;
          border-radius: 8px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .loans-grid.grid .loan-cover {
          width: 120px;
          height: 160px;
        }

        .loan-cover img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .loan-type {
          position: absolute;
          top: 0.25rem;
          right: 0.25rem;
          font-size: 0.75rem;
        }

        .loan-details {
          flex: 1;
        }

        .loan-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
          gap: 1rem;
        }

        .loans-grid.grid .loan-header {
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .loan-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
          line-height: 1.3;
        }

        .status-badge {
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          white-space: nowrap;
        }

        .loan-author {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .loan-meta {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .loans-grid.grid .loan-meta {
          align-items: center;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-tertiary);
          font-size: 0.8rem;
        }

        .due-status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .renewals {
          color: var(--text-tertiary);
          font-size: 0.8rem;
          margin-left: 0.5rem;
        }

        .rating-display {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .loan-actions {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-self: flex-start;
        }

        .loans-grid.grid .loan-actions {
          flex-direction: row;
          justify-content: center;
          flex-wrap: wrap;
        }

        .action-btn {
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          justify-content: center;
        }

        .action-btn.primary {
          background: #1d4f8b;
          color: white;
        }

        .action-btn.primary:hover {
          background: #1d4f8b;
          
        }

        .action-btn.secondary {
          background: rgba(60, 107, 139, 0.2);
          color: #3c6b8b;
        }

        .action-btn.secondary:hover {
          background: rgba(60, 107, 139, 0.3);
        }

        .action-btn.outline {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: var(--text-secondary);
        }

        .action-btn.outline:hover {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
        }

        .empty-state {
          grid-column: 1 / -1;
          text-align: center;
          padding: 4rem 2rem;
          color: var(--text-secondary);
        }

        .empty-state svg {
          margin-bottom: 1rem;
          opacity: 0.5;
        }

        .empty-state h3 {
          color: var(--text-primary);
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }

        .empty-state p {
          margin-bottom: 2rem;
          font-size: 1rem;
        }

        .btn-primary {
          background: #1d4f8b;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          background: #1d4f8b;
          
        }

        @media (max-width: 768px) {
          .controls-section {
            flex-direction: column;
            gap: 1rem;
            align-items: stretch;
          }

          .loans-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .loans-grid.grid {
            grid-template-columns: 1fr;
          }

          .loan-card {
            flex-direction: column;
          }

          .loan-actions {
            flex-direction: row;
          }

          .tabs-navigation {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </div>
  );
};

export default Loans;