import React, { useState } from 'react';
import { 
  FaEye,
  FaBook,
  FaClock,
  FaMapMarkerAlt,
  FaCalendar,
  FaUsers,
  FaDesktop,
  FaWifi,
  FaCoffee,
  FaSearch,
  FaFilter,
  FaBookOpen,
  FaLaptop,
  FaPlus,
  FaHeart,
  FaChartLine
} from 'react-icons/fa';

const ReadingRoom = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');

  const readingRooms = [
    {
      id: 1,
      name: "Salle de Lecture Générale",
      capacity: 120,
      available: 85,
      amenities: ['WiFi', 'Prises électriques', 'Éclairage naturel'],
      hours: "7h00 - 22h00",
      location: "Rez-de-chaussée, Aile Est",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Salle Silencieuse",
      capacity: 60,
      available: 42,
      amenities: ['WiFi', 'Silence absolu', 'Isolement phonique'],
      hours: "8h00 - 20h00",
      location: "1er étage, Aile Nord",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop&q=80"
    },
    {
      id: 3,
      name: "Espace Numérique",
      capacity: 40,
      available: 28,
      amenities: ['WiFi', 'Ordinateurs', 'Imprimantes', 'Scanners'],
      hours: "8h00 - 21h00",
      location: "2ème étage, Aile Ouest",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=250&fit=crop&q=80"
    },
    {
      id: 4,
      name: "Salle de Groupe",
      capacity: 24,
      available: 16,
      amenities: ['WiFi', 'Tableau blanc', 'Projecteur', 'Discussion autorisée'],
      hours: "9h00 - 19h00",
      location: "1er étage, Aile Sud",
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=250&fit=crop&q=80"
    }
  ];

  const currentReservations = [
    {
      id: 1,
      room: "Salle de Lecture Générale",
      date: "2024-03-15",
      time: "14h00 - 17h00",
      status: "Confirmée",
      seat: "A-15"
    },
    {
      id: 2,
      room: "Espace Numérique",
      date: "2024-03-18",
      time: "09h00 - 12h00",
      status: "En attente",
      seat: "PC-08"
    }
  ];

  const quickStats = [
    { label: "Réservations actives", value: 2, icon: FaCalendar },
    { label: "Heures cette semaine", value: 12, icon: FaClock },
    { label: "Salles favorites", value: 3, icon: FaHeart },
    { label: "Temps total", value: 156, icon: FaChartLine }
  ];

  return (
    <div className="reading-room-content">
      <div className="reading-room-header">
        <h2>Lire sur Place</h2>
        <p>Réservez votre place dans nos espaces de lecture</p>
      </div>

      {/* Statistics */}
      <div className="stats-grid">
        {quickStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="stat-card">
              <Icon className="stat-icon" />
              <div className="stat-info">
                <span className="stat-number">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="reading-room-layout">
        <div className="main-section">
          {/* Room Selection */}
          <div className="section-card">
            <div className="section-header">
              <h3>Salles Disponibles</h3>
              <div className="room-filters">
                <button className="filter-btn">
                  <FaFilter size={14} />
                  Filtrer
                </button>
              </div>
            </div>

            <div className="rooms-grid">
              {readingRooms.map(room => (
                <div 
                  key={room.id} 
                  className={`room-card ${selectedRoom?.id === room.id ? 'selected' : ''}`}
                  onClick={() => setSelectedRoom(room)}
                >
                  <div className="room-image">
                    <img src={room.image} alt={room.name} />
                    <div className="availability-badge">
                      {room.available}/{room.capacity} places
                    </div>
                  </div>
                  
                  <div className="room-info">
                    <h4>{room.name}</h4>
                    <div className="room-details">
                      <div className="detail-item">
                        <FaMapMarkerAlt size={12} />
                        <span>{room.location}</span>
                      </div>
                      <div className="detail-item">
                        <FaClock size={12} />
                        <span>{room.hours}</span>
                      </div>
                      <div className="detail-item">
                        <FaUsers size={12} />
                        <span>{room.capacity} places</span>
                      </div>
                    </div>
                    
                    <div className="room-amenities">
                      {room.amenities.map((amenity, idx) => (
                        <span key={idx} className="amenity-tag">{amenity}</span>
                      ))}
                    </div>
                    
                    <button className="btn-reserve">
                      <FaPlus size={12} />
                      Réserver
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Current Reservations */}
          <div className="section-card">
            <div className="section-header">
              <h3>Mes Réservations</h3>
              <span className="badge">{currentReservations.length}</span>
            </div>

            <div className="reservations-list">
              {currentReservations.map(reservation => (
                <div key={reservation.id} className="reservation-item">
                  <div className="reservation-info">
                    <h4>{reservation.room}</h4>
                    <div className="reservation-details">
                      <div className="detail-row">
                        <FaCalendar size={14} />
                        <span>{reservation.date}</span>
                        <FaClock size={14} />
                        <span>{reservation.time}</span>
                      </div>
                      <div className="detail-row">
                        <FaMapMarkerAlt size={14} />
                        <span>Place {reservation.seat}</span>
                        <span className={`status-badge ${reservation.status === 'Confirmée' ? 'confirmed' : 'pending'}`}>
                          {reservation.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="reservation-actions">
                    <button className="btn-action btn-sm">Modifier</button>
                    <button className="btn-action btn-sm secondary">Annuler</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="sidebar-section">
          {/* Quick Reservation */}
          <div className="section-card">
            <h3>Réservation Rapide</h3>
            <div className="quick-form">
              <div className="form-group">
                <label>Date</label>
                <input 
                  type="date" 
                  value={reservationDate}
                  onChange={(e) => setReservationDate(e.target.value)}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Heure</label>
                <select 
                  value={reservationTime}
                  onChange={(e) => setReservationTime(e.target.value)}
                  className="form-input"
                >
                  <option value="">Choisir l'heure</option>
                  <option value="08:00">08h00 - 10h00</option>
                  <option value="10:00">10h00 - 12h00</option>
                  <option value="14:00">14h00 - 16h00</option>
                  <option value="16:00">16h00 - 18h00</option>
                </select>
              </div>
              <button className="btn-primary btn-full">
                <FaCalendar size={14} />
                Réserver maintenant
              </button>
            </div>
          </div>

          {/* Room Rules */}
          <div className="section-card">
            <h3>Règles de la Salle</h3>
            <div className="rules-list">
              <div className="rule-item">
                <FaBookOpen size={16} />
                <span>Activité de lecture uniquement</span>
              </div>
              <div className="rule-item">
                <FaLaptop size={16} />
                <span>Ordinateurs portables autorisés</span>
              </div>
              <div className="rule-item">
                <FaCoffee size={16} />
                <span>Boissons sans alcool permises</span>
              </div>
              <div className="rule-item">
                <FaUsers size={16} />
                <span>Respect des autres usagers</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .reading-room-content {
          padding: 2rem;
          min-height: 600px;
        }

        .reading-room-header {
          margin-bottom: 2rem;
        }

        .reading-room-header h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .reading-room-header p {
          color: var(--text-secondary);
          font-size: 1rem;
          margin: 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(29, 79, 139, 0.05);
          border: 1px solid rgba(29, 79, 139, 0.15);
          padding: 1.5rem;
        }

        .stat-icon {
          font-size: 1.5rem;
          color: #1d4f8b;
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

        .reading-room-layout {
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
          background: #1d4f8b;
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .filter-btn {
          background: rgba(29, 79, 139, 0.1);
          border: 1px solid rgba(29, 79, 139, 0.2);
          color: #1d4f8b;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-size: 0.875rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .rooms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .room-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .room-card:hover {
          border-color: rgba(29, 79, 139, 0.3);
        }

        .room-card.selected {
          border-color: #1d4f8b;
          background: rgba(29, 79, 139, 0.08);
        }

        .room-image {
          position: relative;
          height: 150px;
          overflow: hidden;
        }

        .room-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .availability-badge {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          background: rgba(29, 79, 139, 0.9);
          color: #1d4f8b;
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .room-info {
          padding: 1rem;
        }

        .room-info h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .room-details {
          margin-bottom: 1rem;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .room-amenities {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .amenity-tag {
          background: rgba(29, 79, 139, 0.1);
          color: #1d4f8b;
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .btn-reserve {
          background: #1d4f8b;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          width: 100%;
          justify-content: center;
        }

        .reservations-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .reservation-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .reservation-info h4 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .detail-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .status-badge {
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .status-badge.confirmed {
          background: rgba(29, 79, 139, 0.2);
          color: #1d4f8b;
        }

        .status-badge.pending {
          background: rgba(29, 79, 139, 0.1);
          color: #1d4f8b;
        }

        .reservation-actions {
          display: flex;
          gap: 0.5rem;
        }

        .btn-action {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 6px;
          font-size: 0.875rem;
          cursor: pointer;
          background: #1d4f8b;
          color: white;
        }

        .btn-action.secondary {
          background: rgba(29, 79, 139, 0.1);
          color: #1d4f8b;
        }

        .btn-sm {
          padding: 0.4rem 0.8rem;
          font-size: 0.8rem;
        }

        .quick-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-primary);
        }

        .form-input {
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 6px;
          color: var(--text-primary);
          font-size: 0.875rem;
        }

        .btn-primary {
          background: #1d4f8b;
          color: white;
          border: none;
          padding: 0.5rem 0.75rem;
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .btn-full {
          width: 100%;
        }

        .rules-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .rule-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .rule-item svg {
          color: #1d4f8b;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .reading-room-layout {
            grid-template-columns: 1fr;
          }
          
          .rooms-grid {
            grid-template-columns: 1fr;
          }
          
          .reservation-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ReadingRoom;