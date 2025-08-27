import React from 'react';
import { 
  FaBook, 
  FaBookmark, 
  FaClock, 
  FaHeart,
  FaEye,
  FaDownload,
  FaCheckCircle,
  FaExclamationTriangle,
  FaCalendar,
  FaTrophy,
  FaChartLine
} from 'react-icons/fa';

const Dashboard = ({ userInfo }) => {
  const currentLoans = [
    {
      id: 1,
      title: "Théologie Systématique",
      author: "Louis Berkhof",
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop&q=80",
      dueDate: "2024-03-15",
      status: "active",
      location: "Section Théologie - A12"
    },
    {
      id: 2,
      title: "Histoire du Christianisme en Afrique",
      author: "Kwame Bediako",
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&q=80",
      dueDate: "2024-03-05",
      status: "overdue",
      location: "Section Histoire - B08"
    },
    {
      id: 3,
      title: "Philosophie Africaine Contemporaine",
      author: "Kwame Gyekye",
      cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=400&fit=crop&q=80",
      dueDate: "2024-03-20",
      status: "active",
      location: "Section Philosophie - C15"
    }
  ];

  const recentActivity = [
    {
      id: 1,
      action: "Emprunt",
      item: "Spiritualité et Modernité",
      time: "il y a 2 heures",
      icon: FaBook,
      color: "#1d4f8b"
    },
    {
      id: 2,
      action: "Ajout aux favoris",
      item: "Contes du Cameroun",
      time: "hier",
      icon: FaHeart,
      color: "#1d4f8b"
    },
    {
      id: 3,
      action: "Téléchargement",
      item: "Revue Théologique Africaine Vol.12",
      time: "il y a 2 jours",
      icon: FaDownload,
      color: "#1d4f8b"
    },
    {
      id: 4,
      action: "Retour",
      item: "Développement Durable en Afrique",
      time: "il y a 3 jours",
      icon: FaCheckCircle,
      color: "#1d4f8b"
    }
  ];

  const quickStats = [
    { label: "Emprunts actifs", value: 3, icon: FaBook, color: "#1d4f8b" },
    { label: "Réservations", value: 2, icon: FaBookmark, color: "#3c6b8b" },
    { label: "En retard", value: 1, icon: FaExclamationTriangle, color: "#f39c12" },
    { label: "Total emprunts", value: 127, icon: FaChartLine, color: "#27ae60" }
  ];

  const calculateDaysUntilDue = (dueDate) => {
    const due = new Date(dueDate);
    const today = new Date();
    const diffTime = due - today;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const getDueDateStatus = (dueDate) => {
    const days = calculateDaysUntilDue(dueDate);
    if (days < 0) return { class: 'overdue', text: `${Math.abs(days)} jour(s) de retard`, color: '#1d4f8b' };
    if (days <= 3) return { class: 'due-soon', text: `${days} jour(s) restant(s)`, color: '#1d4f8b' };
    return { class: 'normal', text: `${days} jour(s) restant(s)`, color: '#1d4f8b' };
  };

  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <h2>Tableau de bord</h2>
        <p>Aperçu de votre activité à la bibliothèque</p>
      </div>

      {/* Alertes importantes */}
      <div className="alerts-section">
        {currentLoans.some(loan => loan.status === 'overdue') && (
          <div className="alert alert-warning">
            <FaExclamationTriangle />
            <div>
              <strong>Documents en retard</strong>
              <p>Vous avez des documents à rendre. Veuillez les retourner rapidement.</p>
            </div>
          </div>
        )}
      </div>

      {/* Statistiques rapides */}
      <div className="quick-stats-section">
        <div className="stats-grid-dashboard">
          {quickStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="stat-card-dashboard">
                <Icon style={{ color: stat.color, fontSize: '1.5rem' }} />
                <div className="stat-info">
                  <span className="stat-number">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contenu principal */}
      <div className="dashboard-grid">
        <div className="dashboard-main">
          {/* Emprunts en cours */}
          <div className="section-card">
            <div className="section-header">
              <h3>Emprunts en cours</h3>
              <span className="badge">{currentLoans.length}</span>
            </div>
            <div className="loans-list">
              {currentLoans.map(loan => {
                const dueStatus = getDueDateStatus(loan.dueDate);
                return (
                  <div key={loan.id} className="loan-card">
                    <div className="loan-cover">
                      <img src={loan.cover} alt={loan.title} />
                    </div>
                    <div className="loan-info">
                      <h4>{loan.title}</h4>
                      <p className="author">par {loan.author}</p>
                      <p className="location">{loan.location}</p>
                      <div className="loan-meta">
                        <span 
                          className="due-status"
                          style={{ color: dueStatus.color }}
                        >
                          <FaClock size={12} />
                          {dueStatus.text}
                        </span>
                      </div>
                    </div>
                    <div className="loan-actions">
                      <button className="btn-action primary">Renouveler</button>
                      <button className="btn-action secondary">Détails</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Actions rapides */}
          <div className="section-card">
            <div className="section-header">
              <h3>Actions rapides</h3>
            </div>
            <div className="quick-actions-grid">
              <button className="quick-action-card">
                <FaBook />
                <span>Nouveau prêt</span>
              </button>
              <button className="quick-action-card">
                <FaBookmark />
                <span>Réserver</span>
              </button>
              <button className="quick-action-card">
                <FaHeart />
                <span>Favoris</span>
              </button>
              <button className="quick-action-card">
                <FaEye />
                <span>Lire sur place</span>
              </button>
            </div>
          </div>
        </div>

        <div className="dashboard-sidebar">
          {/* Activité récente */}
          <div className="section-card">
            <div className="section-header">
              <h3>Activité récente</h3>
            </div>
            <div className="activity-list">
              {recentActivity.map(activity => {
                const Icon = activity.icon;
                return (
                  <div key={activity.id} className="activity-item">
                    <Icon style={{ color: activity.color }} />
                    <div className="activity-details">
                      <p className="activity-action">{activity.action}</p>
                      <p className="activity-item-name">{activity.item}</p>
                      <span className="activity-time">{activity.time}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recommandations */}
          <div className="section-card">
            <div className="section-header">
              <h3>Recommandations</h3>
            </div>
            <div className="recommendations-list">
              <div className="recommendation-item">
                <img src="https://images.unsplash.com/photo-1589998059171-988d887df646?w=60&h=80&fit=crop&q=80" alt="Livre recommandé" />
                <div>
                  <h5>Théologie Pastorale Moderne</h5>
                  <p>Basé sur vos lectures récentes</p>
                </div>
              </div>
              <div className="recommendation-item">
                <img src="https://images.unsplash.com/photo-1533327325824-76bc4e62d560?w=60&h=80&fit=crop&q=80" alt="Livre recommandé" />
                <div>
                  <h5>Histoire des Missions</h5>
                  <p>Populaire dans votre département</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dashboard-content {
          padding: 2rem;
          min-height: 600px;
        }

        .dashboard-header {
          margin-bottom: 2rem;
        }

        .dashboard-header h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .dashboard-header p {
          color: var(--text-secondary);
          font-size: 1rem;
          margin: 0;
        }

        .alerts-section {
          margin-bottom: 2rem;
        }

        .alert {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          background: rgba(29, 79, 139, 0.08);
          border: 1px solid rgba(29, 79, 139, 0.2);
          padding: 1rem;
        }

        .alert svg {
          color: #1d4f8b;
          font-size: 1.25rem;
          margin-top: 0.25rem;
        }

        .alert strong {
          color: var(--text-primary);
          display: block;
          margin-bottom: 0.25rem;
        }

        .alert p {
          color: var(--text-secondary);
          margin: 0;
          font-size: 0.875rem;
        }

        .quick-stats-section {
          margin-bottom: 2rem;
        }

        .stats-grid-dashboard {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .stat-card-dashboard {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 4px;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: transform 0.2s ease;
        }

        .stat-card-dashboard:hover {
                  }

        .stat-info {
          display: flex;
          flex-direction: column;
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

        .dashboard-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
        }

        .section-card {
          background: rgba(29, 79, 139, 0.05);
          border: 1px solid rgba(29, 79, 139, 0.15);
          padding: 1.5rem;
          margin-bottom: 2rem;
        }

        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .section-header h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
        }

        .badge {
          background: var(--warning);
          color: var(--dark-900);
          padding: 0.25rem 0.5rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .loans-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .loan-card {
          display: flex;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
          padding: 1rem;
          transition: transform 0.2s ease;
        }

        .loan-card:hover {
          transform: translateX(4px);
        }

        .loan-cover {
          width: 60px;
          height: 80px;
          border-radius: 8px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .loan-cover img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .loan-info {
          flex: 1;
        }

        .loan-info h4 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .author {
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin-bottom: 0.25rem;
        }

        .location {
          font-size: 0.8rem;
          color: var(--text-tertiary);
          margin-bottom: 0.5rem;
        }

        .due-status {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .loan-actions {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-self: flex-start;
        }

        .btn-action {
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 500;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-action.primary {
          background: #1d4f8b;
          color: white;
        }

        .btn-action.primary:hover {
          background: #1d4f8b;
        }

        .btn-action.secondary {
          background: transparent;
          border: 1px solid var(--text-secondary);
          color: var(--text-secondary);
        }

        .btn-action.secondary:hover {
          background: var(--text-secondary);
          color: var(--bg-primary);
        }

        .quick-actions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 1rem;
        }

        .quick-action-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          padding: 1.5rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .quick-action-card:hover {
          background: rgba(29, 79, 139, 0.1);
          border-color: rgba(29, 79, 139, 0.3);
          color: #1d4f8b;
        }

        .quick-action-card svg {
          font-size: 1.5rem;
        }

        .quick-action-card span {
          font-size: 0.875rem;
          font-weight: 500;
        }

        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .activity-item {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
        }

        .activity-item svg {
          font-size: 1.1rem;
          margin-top: 0.25rem;
        }

        .activity-details {
          flex: 1;
        }

        .activity-action {
          font-weight: 600;
          color: var(--text-primary);
          font-size: 0.875rem;
          margin-bottom: 0.25rem;
        }

        .activity-item-name {
          color: var(--text-secondary);
          font-size: 0.8rem;
          margin-bottom: 0.25rem;
        }

        .activity-time {
          color: var(--text-tertiary);
          font-size: 0.75rem;
        }

        .recommendations-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .recommendation-item {
          display: flex;
          gap: 0.75rem;
          align-items: center;
        }

        .recommendation-item img {
          width: 40px;
          height: 55px;
          border-radius: 4px;
          object-fit: cover;
        }

        .recommendation-item h5 {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .recommendation-item p {
          font-size: 0.75rem;
          color: var(--text-secondary);
          margin: 0;
        }

        @media (max-width: 768px) {
          .dashboard-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .stats-grid-dashboard {
            grid-template-columns: repeat(2, 1fr);
          }

          .quick-actions-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .loan-card {
            flex-direction: column;
            align-items: flex-start;
          }

          .loan-actions {
            flex-direction: row;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;