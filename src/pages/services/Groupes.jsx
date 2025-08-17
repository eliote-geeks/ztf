import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaUsers,
  FaCalendar,
  FaClock,
  FaMapMarkerAlt,
  FaTv,
  FaChalkboardTeacher,
  FaWifi,
  FaPlug,
  FaVolumeUp,
  FaDesktop,
  FaLightbulb,
  FaThermometerHalf,
  FaCheckCircle,
  FaTimesCircle,
  FaInfoCircle,
  FaUserFriends,
  FaBookOpen,
  FaVideo,
  FaPhone,
  FaLaptop,
  FaEdit,
  FaFileAlt,
  FaSearch,
  FaTrash,
  FaEye,
  FaKey
} from 'react-icons/fa';

const Groupes = () => {
  const [selectedRoom, setSelectedRoom] = useState('all');
  const [reservationMode, setReservationMode] = useState(false);

  const rooms = [
    {
      id: 'petite-a',
      name: 'Salle Groupe A',
      capacity: { min: 4, max: 6 },
      description: 'Idéale pour petits groupes de travail',
      equipment: [
        'Écran TV 55" avec HDMI',
        'Tableau blanc magnétique',
        'Table modulable pour 6 personnes',
        '6 chaises ergonomiques',
        'Prises électriques multiples'
      ],
      features: [
        'WiFi haut débit',
        'Climatisation',
        'Éclairage modulable',
        'Insonorisation partielle',
        'Accès handicapés'
      ],
      location: 'Niveau 1 - Aile Est',
      reservations: [
        { time: '9h-11h', group: 'Équipe Projet Alpha', status: 'occupied' },
        { time: '11h-13h', group: '', status: 'available' },
        { time: '13h-15h', group: 'Groupe de révision', status: 'occupied' },
        { time: '15h-17h', group: '', status: 'available' },
        { time: '17h-19h', group: 'Formation tutorat', status: 'occupied' }
      ],
      currentStatus: 'available',
      icon: FaUsers,
      color: 'text-success',
      hourlyRate: 'Gratuit'
    },
    {
      id: 'moyenne-b',
      name: 'Salle Groupe B',
      capacity: { min: 6, max: 10 },
      description: 'Parfaite pour équipes moyennes',
      equipment: [
        'Écran TV HD avec HDMI',
        'Ordinateur intégré',
        'Système audio complet',
        'Table en U pour 10 personnes',
        'Tableau blanc mobile'
      ],
      features: [
        'WiFi professionnel',
        'Contrôle climatique',
        'Éclairage directionnel',
        'Isolation phonique',
        'Caméra de visioconférence'
      ],
      location: 'Niveau 1 - Aile Ouest',
      reservations: [
        { time: '9h-11h', group: '', status: 'available' },
        { time: '11h-13h', group: 'Séminaire recherche', status: 'occupied' },
        { time: '13h-15h', group: '', status: 'available' },
        { time: '15h-17h', group: 'Réunion doctorants', status: 'occupied' },
        { time: '17h-19h', group: '', status: 'available' }
      ],
      currentStatus: 'available',
      icon: FaUserFriends,
      color: 'text-primary',
      hourlyRate: 'Gratuit'
    },
    {
      id: 'grande-c',
      name: 'Salle Groupe C',
      capacity: { min: 10, max: 16 },
      description: 'Espace pour grandes équipes',
      equipment: [
        'Double écran TV HD',
        'Station de présentation',
        'Système de son surround',
        'Tables modulables pour 16',
        'Flip-chart et paperboard'
      ],
      features: [
        'WiFi entreprise',
        'Système de ventilation',
        'Éclairage intelligent',
        'Isolation acoustique complète',
        'Équipement de visioconférence HD'
      ],
      location: 'Niveau 2 - Centre',
      reservations: [
        { time: '9h-11h', group: 'Conférence ZTF', status: 'occupied' },
        { time: '11h-13h', group: '', status: 'available' },
        { time: '13h-15h', group: '', status: 'available' },
        { time: '15h-17h', group: 'Workshop innovation', status: 'occupied' },
        { time: '17h-19h', group: '', status: 'available' }
      ],
      currentStatus: 'occupied',
      icon: FaChalkboardTeacher,
      color: 'text-warning',
      hourlyRate: 'Gratuit'
    },
    {
      id: 'multimedia-d',
      name: 'Salle Multimédia',
      capacity: { min: 8, max: 12 },
      description: 'Équipée pour créations audiovisuelles',
      equipment: [
        'Station de montage vidéo',
        'Écrans 4K multiples',
        'Table de mixage audio',
        'Caméras HD',
        'Matériel d\'enregistrement'
      ],
      features: [
        'Fibre optique dédiée',
        'Insonorisation studio',
        'Éclairage professionnel',
        'Fond vert amovible',
        'Stockage réseau sécurisé'
      ],
      location: 'Niveau 1 - Studio',
      reservations: [
        { time: '9h-11h', group: '', status: 'available' },
        { time: '11h-13h', group: '', status: 'available' },
        { time: '13h-15h', group: 'Création podcast', status: 'occupied' },
        { time: '15h-17h', group: '', status: 'available' },
        { time: '17h-19h', group: 'Formation vidéo', status: 'occupied' }
      ],
      currentStatus: 'available',
      icon: FaVideo,
      color: 'text-danger',
      hourlyRate: 'Gratuit'
    }
  ];

  const services = [
    {
      title: 'Réservation en ligne',
      description: 'Système de booking simple et rapide',
      features: [
        'Interface intuitive',
        'Disponibilité en temps réel',
        'Confirmation immédiate',
        'Gestion des modifications'
      ],
      icon: FaCalendar,
      color: 'text-primary'
    },
    {
      title: 'Support technique',
      description: 'Aide à l\'utilisation des équipements',
      features: [
        'Formation rapide',
        'Dépannage immédiat',
        'Configuration matériel',
        'Assistance à distance'
      ],
      icon: FaDesktop,
      color: 'text-success'
    },
    {
      title: 'Services additionnels',
      description: 'Options pour optimiser vos sessions',
      features: [
        'Fournitures de bureau',
        'Rafraîchissements',
        'Nettoyage express',
        'Photocopies gratuites'
      ],
      icon: FaKey,
      color: 'text-warning'
    }
  ];

  const bookingRules = [
    {
      title: 'Durée de réservation',
      description: 'Minimum 1h, maximum 4h consécutives',
      icon: FaClock,
      color: 'text-info'
    },
    {
      title: 'Délai de réservation',
      description: 'Réservation possible jusqu\'à 2 semaines à l\'avance',
      icon: FaCalendar,
      color: 'text-primary'
    },
    {
      title: 'Annulation',
      description: 'Gratuite jusqu\'à 2h avant le début',
      icon: FaEdit,
      color: 'text-warning'
    },
    {
      title: 'Responsabilité',
      description: 'Nettoyage et remise en état après usage',
      icon: FaCheckCircle,
      color: 'text-success'
    }
  ];

  const stats = [
    { label: 'Salles disponibles', value: '4', icon: FaUsers },
    { label: 'Capacité totale', value: '44 places', icon: FaUserFriends },
    { label: 'Taux d\'occupation', value: '73%', icon: FaClock },
    { label: 'Satisfaction', value: '94%', icon: FaCheckCircle }
  ];

  const timeSlots = ['9h-11h', '11h-13h', '13h-15h', '15h-17h', '17h-19h'];

  const filteredRooms = selectedRoom === 'all' 
    ? rooms 
    : rooms.filter(r => r.id === selectedRoom);

  return (
    <div className="groupes-container">
      {/* Hero Section */}
      <section className="groupes-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="hero-content">
                <div className="hero-badge">
                  <FaUsers size={12} className="me-2" />
                  Salles de Groupe
                </div>
                <h1 className="hero-title">
                  <span className="text-warning">Salles</span> de Groupe
                </h1>
                <p className="hero-subtitle">
                  4 salles entièrement équipées pour vos projets collaboratifs. 
                  Réservation gratuite, équipements multimédias et espaces modulables.
                </p>
                <div className="hero-actions">
                  <button 
                    className="btn btn-warning"
                    onClick={() => setReservationMode(true)}
                  >
                    <FaCalendar size={14} className="me-2" />
                    Réserver maintenant
                  </button>
                  <Link to="/contact" className="btn btn-outline-warning">
                    <FaMapMarkerAlt size={14} className="me-2" />
                    Plan des salles
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="stats-grid">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="stat-card">
                      <Icon className="stat-icon text-warning" />
                      <div className="stat-content">
                        <div className="stat-value">{stat.value}</div>
                        <div className="stat-label">{stat.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Booking Bar */}
      {reservationMode && (
        <section className="booking-bar">
          <div className="container">
            <div className="booking-card">
              <div className="booking-header">
                <h4>Réservation rapide</h4>
                <button 
                  className="close-booking"
                  onClick={() => setReservationMode(false)}
                >
                  <FaTimesCircle />
                </button>
              </div>
              <div className="booking-form">
                <div className="form-group">
                  <label>Date</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Heure</label>
                  <select className="form-control">
                    {timeSlots.map(slot => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Participants</label>
                  <input type="number" className="form-control" min="2" max="16" placeholder="Nombre" />
                </div>
                <button className="btn btn-success">
                  <FaSearch size={14} className="me-2" />
                  Rechercher
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Room Filter */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-card">
            <h4>Choisissez votre salle</h4>
            <div className="filter-tabs">
              <button 
                className={`filter-tab ${selectedRoom === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedRoom('all')}
              >
                <FaEye size={14} />
                Toutes les salles
              </button>
              {rooms.map(room => {
                const Icon = room.icon;
                return (
                  <button 
                    key={room.id}
                    className={`filter-tab ${selectedRoom === room.id ? 'active' : ''}`}
                    onClick={() => setSelectedRoom(room.id)}
                  >
                    <Icon size={14} />
                    {room.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="rooms-section">
        <div className="container">
          <div className="rooms-grid">
            {filteredRooms.map(room => {
              const Icon = room.icon;
              return (
                <div key={room.id} className="room-card">
                  <div className="room-header">
                    <div className="room-title">
                      <Icon className={`room-icon ${room.color}`} />
                      <div>
                        <h5>{room.name}</h5>
                        <span className="capacity">
                          {room.capacity.min}-{room.capacity.max} personnes
                        </span>
                      </div>
                    </div>
                    <div className="room-status">
                      {room.currentStatus === 'available' ? (
                        <span className="status-available">
                          <FaCheckCircle size={12} />
                          Disponible
                        </span>
                      ) : (
                        <span className="status-occupied">
                          <FaTimesCircle size={12} />
                          Occupée
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="room-description">{room.description}</p>

                  <div className="room-info">
                    <div className="info-item">
                      <FaMapMarkerAlt className="info-icon" />
                      <span>{room.location}</span>
                    </div>
                    <div className="info-item">
                      <span className="price-tag">{room.hourlyRate}</span>
                    </div>
                  </div>

                  <div className="room-equipment">
                    <h6>Équipements :</h6>
                    <ul>
                      {room.equipment.map((item, idx) => (
                        <li key={idx}>
                          <FaCheckCircle size={10} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="room-features">
                    <h6>Services :</h6>
                    <ul>
                      {room.features.map((feature, idx) => (
                        <li key={idx}>
                          <FaWifi size={10} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="today-schedule">
                    <h6>Planning d'aujourd'hui :</h6>
                    <div className="schedule-slots">
                      {room.reservations.map((slot, idx) => (
                        <div 
                          key={idx} 
                          className={`time-slot ${slot.status}`}
                          title={slot.group || 'Libre'}
                        >
                          <span className="slot-time">{slot.time}</span>
                          {slot.status === 'occupied' && (
                            <span className="slot-group">{slot.group}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="room-actions">
                    <button className="btn btn-warning">
                      <FaCalendar size={14} className="me-2" />
                      Réserver
                    </button>
                    <button className="btn btn-outline-secondary">
                      <FaEye size={14} className="me-2" />
                      Voir photos
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h3>Services inclus</h3>
            <p>Tout ce dont vous avez besoin pour vos sessions de travail</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="service-card">
                  <div className="service-header">
                    <Icon className={`service-icon ${service.color}`} />
                    <h5>{service.title}</h5>
                  </div>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <FaCheckCircle size={12} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking Rules */}
      <section className="rules-section">
        <div className="container">
          <div className="section-header">
            <h3>Modalités de réservation</h3>
            <p>Conditions d'utilisation et règles de fonctionnement</p>
          </div>
          <div className="rules-grid">
            {bookingRules.map((rule, index) => {
              const Icon = rule.icon;
              return (
                <div key={index} className="rule-card">
                  <Icon className={`rule-icon ${rule.color}`} />
                  <h6>{rule.title}</h6>
                  <p>{rule.description}</p>
                </div>
              );
            })}
          </div>

          <div className="additional-info">
            <div className="info-card">
              <h4>
                <FaInfoCircle className="me-2" />
                Informations pratiques
              </h4>
              <div className="info-list">
                <div className="info-item">
                  <FaUserFriends className="info-icon text-primary" />
                  <div>
                    <strong>Groupes étudiants</strong>
                    <p>Accès gratuit sur présentation de carte étudiant</p>
                  </div>
                </div>
                <div className="info-item">
                  <FaPhone className="info-icon text-success" />
                  <div>
                    <strong>Contact urgence</strong>
                    <p>+237 233 000 000 (assistance technique)</p>
                  </div>
                </div>
                <div className="info-item">
                  <FaBookOpen className="info-icon text-warning" />
                  <div>
                    <strong>Formation</strong>
                    <p>Initiation gratuite aux équipements sur demande</p>
                  </div>
                </div>
                <div className="info-item">
                  <FaClock className="info-icon text-info" />
                  <div>
                    <strong>Horaires</strong>
                    <p>Lun-Ven: 9h-19h, Sam: 9h-17h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .groupes-container {
          background: var(--bg-primary);
          min-height: 100vh;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .groupes-container .container {
          max-width: 1400px !important;
          margin: 0 auto !important;
          padding: 0 1rem !important;
          width: 100% !important;
        }

        .groupes-hero {
          padding: 3rem 0;
          background: linear-gradient(135deg, 
            rgba(241, 196, 14, 0.1) 0%, 
            rgba(245, 158, 11, 0.05) 100%);
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
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-2px);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .stat-icon {
          font-size: 1.25rem;
        }

        .stat-value {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .stat-label {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .booking-bar {
          padding: 1rem 0;
          background: rgba(255, 255, 255, 0.02);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .booking-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
        }

        .booking-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .booking-header h4 {
          color: var(--text-primary);
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0;
        }

        .close-booking {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 1.2rem;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .close-booking:hover {
          color: var(--text-primary);
        }

        .booking-form {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
          align-items: end;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          color: var(--text-primary);
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .form-control {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 6px;
          padding: 0.5rem;
          color: var(--text-primary);
          font-size: 0.875rem;
        }

        .form-control:focus {
          background: rgba(255, 255, 255, 0.12);
          border-color: var(--warning);
          outline: none;
        }

        .filter-section,
        .rooms-section,
        .services-section,
        .rules-section {
          padding: 3rem 0;
        }

        .filter-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
        }

        .filter-card h4 {
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 2rem;
        }

        .filter-tabs {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .filter-tab {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-secondary);
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.3s ease;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .filter-tab:hover,
        .filter-tab.active {
          background: var(--warning);
          color: var(--dark-900);
          border-color: var(--warning);
        }

        .rooms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 2rem;
        }

        .room-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .room-card:hover {
          transform: translateY(-4px);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .room-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .room-title {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .room-icon {
          font-size: 1.5rem;
        }

        .room-title h5 {
          color: var(--text-primary);
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0;
        }

        .capacity {
          color: var(--text-tertiary);
          font-size: 0.875rem;
        }

        .room-status {
          text-align: right;
        }

        .status-available {
          color: #22c55e;
          font-size: 0.8rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .status-occupied {
          color: #ef4444;
          font-size: 0.8rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .room-description {
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }

        .room-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-tertiary);
          font-size: 0.875rem;
        }

        .info-icon {
          color: var(--warning);
        }

        .price-tag {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.8rem;
        }

        .room-equipment,
        .room-features {
          margin-bottom: 1.5rem;
        }

        .room-equipment h6,
        .room-features h6 {
          color: var(--text-primary);
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .room-equipment ul,
        .room-features ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 0.5rem;
        }

        .room-equipment li,
        .room-features li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .room-equipment svg {
          color: #3b82f6;
        }

        .room-features svg {
          color: #22c55e;
        }

        .today-schedule {
          margin-bottom: 1.5rem;
        }

        .today-schedule h6 {
          color: var(--text-primary);
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .schedule-slots {
          display: grid;
          gap: 0.5rem;
        }

        .time-slot {
          padding: 0.75rem;
          border-radius: 6px;
          border-left: 4px solid transparent;
        }

        .time-slot.available {
          background: rgba(34, 197, 94, 0.1);
          border-left-color: #22c55e;
        }

        .time-slot.occupied {
          background: rgba(239, 68, 68, 0.1);
          border-left-color: #ef4444;
        }

        .slot-time {
          color: var(--text-primary);
          font-weight: 600;
          font-size: 0.875rem;
          display: block;
        }

        .slot-group {
          color: var(--text-secondary);
          font-size: 0.8rem;
          margin-top: 0.25rem;
          display: block;
        }

        .room-actions {
          display: flex;
          gap: 1rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-header h3 {
          color: var(--text-primary);
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .section-header p {
          color: var(--text-secondary);
          font-size: 1rem;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-2px);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .service-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .service-icon {
          font-size: 1.5rem;
        }

        .service-header h5 {
          color: var(--text-primary);
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0;
        }

        .service-description {
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }

        .service-features {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .service-features li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
        }

        .service-features svg {
          color: #22c55e;
        }

        .rules-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .rule-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .rule-card:hover {
          transform: translateY(-2px);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .rule-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .rule-card h6 {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .rule-card p {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin: 0;
        }

        .additional-info {
          display: flex;
          justify-content: center;
        }

        .info-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          max-width: 600px;
          width: 100%;
        }

        .info-card h4 {
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
        }

        .info-list {
          display: grid;
          gap: 1.5rem;
        }

        .info-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .info-icon {
          font-size: 1.25rem;
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        .info-item strong {
          color: var(--text-primary);
          font-size: 0.9rem;
          display: block;
          margin-bottom: 0.25rem;
        }

        .info-item p {
          color: var(--text-secondary);
          font-size: 0.8rem;
          margin: 0;
          line-height: 1.4;
        }

        .btn {
          border: none;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          text-decoration: none;
          cursor: pointer;
          padding: 0.75rem 1.5rem;
          font-size: 0.875rem;
        }

        .btn-warning {
          background: var(--gradient-accent);
          color: var(--dark-900);
        }

        .btn-warning:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(241, 196, 14, 0.3);
          color: var(--dark-900);
          text-decoration: none;
        }

        .btn-outline-warning {
          background: transparent;
          border: 1px solid var(--warning);
          color: var(--warning);
        }

        .btn-outline-warning:hover {
          background: var(--warning);
          color: var(--dark-900);
          text-decoration: none;
        }

        .btn-success {
          background: #22c55e;
          color: white;
        }

        .btn-success:hover {
          background: #16a34a;
          transform: translateY(-2px);
        }

        .btn-outline-secondary {
          background: transparent;
          border: 1px solid var(--text-secondary);
          color: var(--text-secondary);
        }

        .btn-outline-secondary:hover {
          background: var(--text-secondary);
          color: var(--bg-primary);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
            margin-top: 2rem;
          }
          
          .booking-form {
            grid-template-columns: 1fr;
          }
          
          .filter-tabs {
            justify-content: flex-start;
            overflow-x: auto;
            padding-bottom: 1rem;
          }
          
          .rooms-grid,
          .services-grid,
          .rules-grid {
            grid-template-columns: 1fr;
          }
          
          .room-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          
          .room-info {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
          
          .room-actions {
            flex-direction: column;
          }
          
          .info-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Groupes;