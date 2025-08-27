import React, { useState } from 'react';
import { 
  FaBookmark, 
  FaClock,
  FaCalendar,
  FaUsers,
  FaBell,
  FaTrash,
  FaEye,
  FaBook,
  FaExclamationCircle
} from 'react-icons/fa';

const Reservations = () => {
  const [reservations, setReservations] = useState([
    {
      id: 1,
      title: "Introduction à l'Herméneutique Biblique",
      author: "Grant R. Osborne",
      isbn: "978-2-123456-78-9",
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop&q=80",
      reservationDate: "2024-02-25",
      position: 1,
      estimatedAvailability: "2024-03-05",
      status: "ready",
      expiresOn: "2024-03-10",
      location: "Section Théologie - A15",
      notificationSent: true
    },
    {
      id: 2,
      title: "Théologie Africaine Contemporaine",
      author: "John S. Mbiti",
      isbn: "978-2-987654-32-1",
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&q=80",
      reservationDate: "2024-02-20",
      position: 2,
      estimatedAvailability: "2024-03-15",
      status: "waiting",
      location: "Section Théologie - A08",
      notificationSent: false
    },
    {
      id: 3,
      title: "Histoire de l'Église Primitive",
      author: "W.H.C. Frend",
      isbn: "978-2-456789-12-3",
      cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=400&fit=crop&q=80",
      reservationDate: "2024-02-18",
      position: 5,
      estimatedAvailability: "2024-03-25",
      status: "waiting",
      location: "Section Histoire - B12",
      notificationSent: false
    }
  ]);

  const getStatusInfo = (status) => {
    const statusMap = {
      'ready': {
        text: 'Prêt à retirer',
        color: '#1d4f8b',
        bg: 'rgba(29, 79, 139, 0.1)',
        icon: FaBell
      },
      'waiting': {
        text: 'En attente',
        color: '#1d4f8b',
        bg: 'rgba(29, 79, 139, 0.1)',
        icon: FaClock
      },
      'expired': {
        text: 'Expiré',
        color: '#1d4f8b',
        bg: 'rgba(29, 79, 139, 0.1)',
        icon: FaExclamationCircle
      }
    };
    return statusMap[status] || statusMap['waiting'];
  };

  const calculateDaysLeft = (date) => {
    const target = new Date(date);
    const today = new Date();
    const diffTime = target - today;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const cancelReservation = (id) => {
    setReservations(reservations.filter(res => res.id !== id));
  };

  const reservationStats = {
    total: reservations.length,
    ready: reservations.filter(r => r.status === 'ready').length,
    waiting: reservations.filter(r => r.status === 'waiting').length,
    avgWaitTime: 12 // jours en moyenne
  };

  return (
    <div className="reservations-content">
      <div className="reservations-header">
        <h2>Mes réservations</h2>
        <p>Suivez l'état de vos réservations et retirez vos documents</p>
      </div>

      {/* Statistiques */}
      <div className="reservations-stats">
        <div className="stat-card">
          <FaBookmark className="stat-icon" style={{ color: '#1d4f8b' }} />
          <div className="stat-info">
            <span className="stat-number">{reservationStats.total}</span>
            <span className="stat-label">Réservations actives</span>
          </div>
        </div>
        <div className="stat-card">
          <FaBell className="stat-icon" style={{ color: '#1d4f8b' }} />
          <div className="stat-info">
            <span className="stat-number">{reservationStats.ready}</span>
            <span className="stat-label">Prêts à retirer</span>
          </div>
        </div>
        <div className="stat-card">
          <FaClock className="stat-icon" style={{ color: '#1d4f8b' }} />
          <div className="stat-info">
            <span className="stat-number">{reservationStats.waiting}</span>
            <span className="stat-label">En attente</span>
          </div>
        </div>
        <div className="stat-card">
          <FaCalendar className="stat-icon" style={{ color: '#3c6b8b' }} />
          <div className="stat-info">
            <span className="stat-number">{reservationStats.avgWaitTime}j</span>
            <span className="stat-label">Délai moyen</span>
          </div>
        </div>
      </div>

      {/* Alertes importantes */}
      {reservationStats.ready > 0 && (
        <div className="alert-section">
          <div className="alert alert-success">
            <FaBell size={20} />
            <div className="alert-content">
              <strong>Documents prêts à retirer !</strong>
              <p>
                Vous avez {reservationStats.ready} document(s) disponible(s). 
                Veuillez les retirer avant expiration.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Liste des réservations */}
      <div className="reservations-section">
        <div className="section-header">
          <h3>Vos réservations</h3>
          <button className="btn-outline">
            <FaBook size={14} />
            Nouvelle réservation
          </button>
        </div>

        {reservations.length > 0 ? (
          <div className="reservations-list">
            {reservations.map(reservation => {
              const statusInfo = getStatusInfo(reservation.status);
              const StatusIcon = statusInfo.icon;
              const daysLeft = reservation.expiresOn ? 
                calculateDaysLeft(reservation.expiresOn) : null;

              return (
                <div key={reservation.id} className="reservation-card">
                  <div className="reservation-cover">
                    <img src={reservation.cover} alt={reservation.title} />
                  </div>

                  <div className="reservation-info">
                    <div className="reservation-header">
                      <h4 className="reservation-title">{reservation.title}</h4>
                      <div 
                        className="status-badge"
                        style={{
                          color: statusInfo.color,
                          background: statusInfo.bg
                        }}
                      >
                        <StatusIcon size={12} />
                        {statusInfo.text}
                      </div>
                    </div>

                    <p className="reservation-author">par {reservation.author}</p>

                    <div className="reservation-details">
                      <div className="detail-row">
                        <div className="detail-item">
                          <FaCalendar size={12} />
                          <span>Réservé le {reservation.reservationDate}</span>
                        </div>
                        <div className="detail-item">
                          <FaUsers size={12} />
                          <span>Position: {reservation.position}</span>
                        </div>
                      </div>
                      
                      <div className="detail-row">
                        <div className="detail-item">
                          <FaClock size={12} />
                          <span>
                            {reservation.status === 'ready' 
                              ? `Expire dans ${daysLeft} jour(s)`
                              : `Disponible vers le ${reservation.estimatedAvailability}`
                            }
                          </span>
                        </div>
                      </div>

                      {reservation.location && (
                        <div className="detail-row">
                          <div className="detail-item">
                            <FaBook size={12} />
                            <span>{reservation.location}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {reservation.status === 'ready' && (
                      <div className="ready-notice">
                        <FaBell size={14} />
                        <span>
                          Document disponible ! Retirez-le avant le{' '}
                          <strong>{reservation.expiresOn}</strong>
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="reservation-actions">
                    {reservation.status === 'ready' ? (
                      <>
                        <button className="action-btn primary">
                          <FaBook size={14} />
                          Emprunter maintenant
                        </button>
                        <button className="action-btn secondary">
                          <FaEye size={14} />
                          Voir détails
                        </button>
                      </>
                    ) : (
                      <>
                        <button className="action-btn secondary">
                          <FaEye size={14} />
                          Voir détails
                        </button>
                        <button 
                          className="action-btn danger"
                          onClick={() => cancelReservation(reservation.id)}
                        >
                          <FaTrash size={14} />
                          Annuler
                        </button>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="empty-state">
            <FaBookmark size={48} />
            <h3>Aucune réservation</h3>
            <p>Vous n'avez aucune réservation en cours</p>
            <button className="btn-primary">
              <FaBook size={14} />
              Rechercher des livres
            </button>
          </div>
        )}
      </div>

      {/* Informations pratiques */}
      <div className="info-section">
        <h3>Informations sur les réservations</h3>
        <div className="info-cards">
          <div className="info-card">
            <FaClock className="info-icon" />
            <div className="info-content">
              <h5>Délai de retrait</h5>
              <p>Vous avez 5 jours pour retirer un document réservé</p>
            </div>
          </div>
          <div className="info-card">
            <FaBell className="info-icon" />
            <div className="info-content">
              <h5>Notifications</h5>
              <p>Vous recevrez un email quand votre document sera disponible</p>
            </div>
          </div>
          <div className="info-card">
            <FaUsers className="info-icon" />
            <div className="info-content">
              <h5>File d'attente</h5>
              <p>Votre position dans la file d'attente est mise à jour automatiquement</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .reservations-content {
          padding: 2rem;
          min-height: 600px;
        }

        .reservations-header {
          margin-bottom: 2rem;
        }

        .reservations-header h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .reservations-header p {
          color: var(--text-secondary);
          font-size: 1rem;
          margin: 0;
        }

        .reservations-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 1.5rem;
          transition: transform 0.2s ease;
        }

        .stat-card:hover {
          
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

        .alert-section {
          margin-bottom: 2rem;
        }

        .alert {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          border-radius: 12px;
          padding: 1rem;
        }

        .alert-success {
          background: rgba(29, 79, 139, 0.1);
          border: 1px solid rgba(29, 79, 139, 0.3);
          color: #1d4f8b;
        }

        .alert-content strong {
          color: var(--text-primary);
          display: block;
          margin-bottom: 0.25rem;
        }

        .alert-content p {
          color: var(--text-secondary);
          margin: 0;
          font-size: 0.875rem;
        }

        .reservations-section {
          margin-bottom: 2rem;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .section-header h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
        }

        .reservations-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .reservation-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 1.5rem;
          display: flex;
          gap: 1.5rem;
          transition: all 0.3s ease;
        }

        .reservation-card:hover {
          
          border-color: rgba(29, 79, 139, 0.3);
        }

        .reservation-cover {
          width: 80px;
          height: 100px;
          border-radius: 8px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .reservation-cover img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .reservation-info {
          flex: 1;
        }

        .reservation-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
          gap: 1rem;
        }

        .reservation-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
          line-height: 1.3;
        }

        .status-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          white-space: nowrap;
        }

        .reservation-author {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .reservation-details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .detail-row {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-tertiary);
          font-size: 0.8rem;
        }

        .ready-notice {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(29, 79, 139, 0.1);
          border: 1px solid rgba(29, 79, 139, 0.3);
          border-radius: 8px;
          padding: 0.75rem;
          color: #1d4f8b;
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .ready-notice strong {
          color: var(--text-primary);
        }

        .reservation-actions {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-self: flex-start;
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
          white-space: nowrap;
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

        .action-btn.danger {
          background: rgba(29, 79, 139, 0.2);
          color: #1d4f8b;
        }

        .action-btn.danger:hover {
          background: rgba(29, 79, 139, 0.3);
        }

        .btn-outline {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: var(--text-secondary);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-outline:hover {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
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
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-primary:hover {
          background: #1d4f8b;
          
        }

        .empty-state {
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

        .info-section {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 16px;
          padding: 2rem;
        }

        .info-section h3 {
          color: var(--text-primary);
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .info-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .info-card {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .info-icon {
          color: #1d4f8b;
          font-size: 1.25rem;
          margin-top: 0.25rem;
        }

        .info-content h5 {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .info-content p {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin: 0;
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .reservations-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .section-header {
            flex-direction: column;
            align-items: stretch;
            gap: 1rem;
          }

          .reservation-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .reservation-header {
            flex-direction: column;
            align-items: center;
          }

          .reservation-actions {
            flex-direction: row;
            width: 100%;
          }

          .info-cards {
            grid-template-columns: 1fr;
          }

          .detail-row {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Reservations;