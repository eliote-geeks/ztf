import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCouch,
  FaUsers,
  FaUser,
  FaDesktop,
  FaWifi,
  FaVolumeUp,
  FaVolumeMute,
  FaLightbulb,
  FaPlug,
  FaMapMarkerAlt,
  FaClock,
  FaCalendar,
  FaCheckCircle,
  FaTimesCircle,
  FaBookOpen,
  FaCoffee,
  FaPhone,
  FaLaptop,
  FaShieldAlt,
  FaParking,
  FaInfoCircle,
  FaSearch,
  FaEye,
  FaUserFriends
} from 'react-icons/fa';

const Espaces = () => {
  const [selectedSpace, setSelectedSpace] = useState('all');

  const spaces = [
    {
      id: 'silencieux',
      name: 'Espaces silencieux',
      description: 'Zones de travail individuel en silence complet',
      capacity: '120 places',
      noise: 'Silence absolu',
      features: [
        'Lecture et étude individuelle',
        'Tables individuelles avec lampes',
        'Prises électriques disponibles',
        'Accès WiFi gratuit',
        'Casiers personnels'
      ],
      rules: [
        'Silence obligatoire',
        'Téléphones interdits',
        'Ordinateurs acceptés (mode silencieux)',
        'Réservation non requise'
      ],
      icon: FaVolumeMute,
      color: 'text-primary',
      available: true,
      floor: 'Niveaux 2 et 3'
    },
    {
      id: 'groupe',
      name: 'Salles de groupe',
      description: 'Espaces collaboratifs pour le travail en équipe',
      capacity: '6-12 personnes',
      noise: 'Discussions autorisées',
      features: [
        'Travail collaboratif',
        'Écrans de projection',
        'Tableaux blancs',
        'Mobilier modulable',
        'Climatisation'
      ],
      rules: [
        'Réservation obligatoire',
        'Durée max: 4h',
        'Nettoyage après usage',
        'Équipement à rendre'
      ],
      icon: FaUsers,
      color: 'text-success',
      available: true,
      floor: 'Niveau 1',
      bookable: true
    },
    {
      id: 'detente',
      name: 'Espaces détente',
      description: 'Zones de repos et lecture décontractée',
      capacity: '40 places',
      noise: 'Murmures acceptés',
      features: [
        'Fauteuils confortables',
        'Éclairage tamisé',
        'Magazines et journaux',
        'Distributeurs automatiques',
        'Vue sur jardin'
      ],
      rules: [
        'Respect des autres usagers',
        'Pas de nourriture chaude',
        'Volume modéré',
        'Accès libre'
      ],
      icon: FaCouch,
      color: 'text-warning',
      available: true,
      floor: 'Rez-de-chaussée'
    },
    {
      id: 'numerique',
      name: 'Espace numérique',
      description: 'Postes informatiques et ressources numériques',
      capacity: '24 postes',
      noise: 'Travail normal',
      features: [
        'Ordinateurs récents',
        'Suite Office complète',
        'Accès internet haut débit',
        'Scanner et impression',
        'Logiciels spécialisés'
      ],
      rules: [
        'Session limitée à 2h',
        'Carte d\'étudiant requise',
        'Sauvegarde personnelle',
        'Pas de téléchargements'
      ],
      icon: FaDesktop,
      color: 'text-info',
      available: true,
      floor: 'Niveau 1'
    }
  ];

  const amenities = [
    {
      name: 'WiFi gratuit',
      description: 'Connexion haut débit dans tous les espaces',
      icon: FaWifi,
      color: 'text-primary'
    },
    {
      name: 'Prises électriques',
      description: 'Points d\'alimentation à chaque place',
      icon: FaPlug,
      color: 'text-success'
    },
    {
      name: 'Éclairage adapté',
      description: 'Lampes individuelles et éclairage général',
      icon: FaLightbulb,
      color: 'text-warning'
    },
    {
      name: 'Climatisation',
      description: 'Température contrôlée toute l\'année',
      icon: FaShieldAlt,
      color: 'text-info'
    },
    {
      name: 'Casiers sécurisés',
      description: 'Rangement personnel avec code',
      icon: FaShieldAlt,
      color: 'text-secondary'
    },
    {
      name: 'Parking gratuit',
      description: 'Stationnement pour véhicules et motos',
      icon: FaParking,
      color: 'text-dark'
    }
  ];

  const schedule = [
    { day: 'Lundi - Vendredi', hours: '8h00 - 20h00', status: 'Ouvert' },
    { day: 'Samedi', hours: '8h00 - 18h00', status: 'Ouvert' },
    { day: 'Dimanche', hours: '10h00 - 16h00', status: 'Ouvert' },
    { day: 'Jours fériés', hours: 'Fermé', status: 'Fermé' }
  ];

  const stats = [
    { label: 'Places disponibles', value: '300+', icon: FaCouch },
    { label: 'Taux d\'occupation', value: '78%', icon: FaUsers },
    { label: 'Heures d\'ouverture', value: '84h/sem', icon: FaClock },
    { label: 'Satisfaction usagers', value: '92%', icon: FaCheckCircle }
  ];

  const filteredSpaces = selectedSpace === 'all' 
    ? spaces 
    : spaces.filter(s => s.id === selectedSpace);

  return (
    <div className="espaces-container">
      {/* Hero Section */}
      <section className="espaces-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="hero-content">
                <div className="hero-badge">
                  <FaCouch size={12} className="me-2" />
                  Espaces de Travail
                </div>
                <h1 className="hero-title">
                  <span className="text-warning">Espaces</span> de Travail
                </h1>
                <p className="hero-subtitle">
                  Plus de 300 places d'étude dans des environnements adaptés à vos besoins. 
                  Espaces silencieux, salles de groupe, zones détente et postes informatiques.
                </p>
                <div className="hero-actions">
                  <button className="btn btn-warning">
                    <FaCalendar size={14} className="me-2" />
                    Réserver une salle
                  </button>
                  <Link to="/contact" className="btn btn-outline-warning">
                    <FaMapMarkerAlt size={14} className="me-2" />
                    Plan des lieux
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
                      <Icon className="stat-icon text-success" />
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

      {/* Spaces Filter */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-card">
            <h4>Trouvez l'espace qui vous convient</h4>
            <div className="filter-tabs">
              <button 
                className={`filter-tab ${selectedSpace === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedSpace('all')}
              >
                <FaEye size={14} />
                Tous les espaces
              </button>
              {spaces.map(space => {
                const Icon = space.icon;
                return (
                  <button 
                    key={space.id}
                    className={`filter-tab ${selectedSpace === space.id ? 'active' : ''}`}
                    onClick={() => setSelectedSpace(space.id)}
                  >
                    <Icon size={14} />
                    {space.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Spaces Grid */}
      <section className="spaces-section">
        <div className="container">
          <div className="spaces-grid">
            {filteredSpaces.map(space => {
              const Icon = space.icon;
              return (
                <div key={space.id} className="space-card">
                  <div className="space-header">
                    <div className="space-title">
                      <Icon className={`space-icon ${space.color}`} />
                      <h5>{space.name}</h5>
                    </div>
                    <div className="space-status">
                      {space.available ? (
                        <span className="status-available">
                          <FaCheckCircle size={12} />
                          Disponible
                        </span>
                      ) : (
                        <span className="status-full">
                          <FaTimesCircle size={12} />
                          Complet
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="space-description">{space.description}</p>

                  <div className="space-details">
                    <div className="detail-item">
                      <FaUsers className="detail-icon" />
                      <span>{space.capacity}</span>
                    </div>
                    <div className="detail-item">
                      <span className="noise-level">{space.noise}</span>
                    </div>
                    <div className="detail-item">
                      <FaMapMarkerAlt className="detail-icon" />
                      <span>{space.floor}</span>
                    </div>
                  </div>

                  <div className="space-features">
                    <h6>Équipements :</h6>
                    <ul>
                      {space.features.map((feature, idx) => (
                        <li key={idx}>
                          <FaCheckCircle size={10} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-rules">
                    <h6>Conditions d'usage :</h6>
                    <ul>
                      {space.rules.map((rule, idx) => (
                        <li key={idx}>
                          <FaInfoCircle size={10} />
                          {rule}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-actions">
                    {space.bookable ? (
                      <button className="btn btn-warning">
                        <FaCalendar size={14} className="me-2" />
                        Réserver
                      </button>
                    ) : (
                      <button className="btn btn-outline-success">
                        <FaMapMarkerAlt size={14} className="me-2" />
                        Localiser
                      </button>
                    )}
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

      {/* Amenities */}
      <section className="amenities-section">
        <div className="container">
          <div className="section-header">
            <h3>Services et équipements</h3>
            <p>Tout ce dont vous avez besoin pour travailler efficacement</p>
          </div>
          <div className="amenities-grid">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <div key={index} className="amenity-card">
                  <Icon className={`amenity-icon ${amenity.color}`} />
                  <h6>{amenity.name}</h6>
                  <p>{amenity.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Schedule & Info */}
      <section className="info-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="schedule-card">
                <h4>
                  <FaClock className="me-2" />
                  Horaires d'accès
                </h4>
                <div className="schedule-list">
                  {schedule.map((item, index) => (
                    <div key={index} className="schedule-item">
                      <span className="schedule-day">{item.day}</span>
                      <span className="schedule-hours">{item.hours}</span>
                      <span className={`schedule-status ${item.status === 'Ouvert' ? 'open' : 'closed'}`}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="guidelines-card">
                <h4>
                  <FaBookOpen className="me-2" />
                  Règles d'usage
                </h4>
                <div className="guidelines-list">
                  <div className="guideline-item">
                    <FaUserFriends className="guideline-icon text-primary" />
                    <div>
                      <strong>Respect mutuel</strong>
                      <p>Maintenir un environnement propice à l'étude</p>
                    </div>
                  </div>
                  <div className="guideline-item">
                    <FaCoffee className="guideline-icon text-warning" />
                    <div>
                      <strong>Alimentation</strong>
                      <p>Boissons autorisées, nourriture limitée aux zones détente</p>
                    </div>
                  </div>
                  <div className="guideline-item">
                    <FaPhone className="guideline-icon text-danger" />
                    <div>
                      <strong>Téléphones</strong>
                      <p>Mode silencieux obligatoire, appels à l'extérieur</p>
                    </div>
                  </div>
                  <div className="guideline-item">
                    <FaLaptop className="guideline-icon text-info" />
                    <div>
                      <strong>Équipements personnels</strong>
                      <p>Ordinateurs portables bienvenus, volume modéré</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .espaces-container {
          background: var(--bg-primary);
          min-height: 100vh;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .espaces-container .container {
          max-width: 1400px !important;
          margin: 0 auto !important;
          padding: 0 1rem !important;
          width: 100% !important;
        }

        .espaces-hero {
          padding: 3rem 0;
          background: linear-gradient(135deg, 
            rgba(34, 197, 94, 0.1) 0%, 
            rgba(16, 185, 129, 0.05) 100%);
          border-radius: 0 0 20px 20px;
          margin-bottom: 2rem;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          color: #22c55e;
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

        .filter-section,
        .spaces-section,
        .amenities-section,
        .info-section {
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

        .spaces-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .space-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .space-card:hover {
          transform: translateY(-4px);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .space-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .space-title {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .space-icon {
          font-size: 1.5rem;
        }

        .space-title h5 {
          color: var(--text-primary);
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0;
        }

        .space-status {
          font-size: 0.8rem;
          font-weight: 600;
        }

        .status-available {
          color: #22c55e;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .status-full {
          color: #ef4444;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .space-description {
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }

        .space-details {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-tertiary);
          font-size: 0.875rem;
        }

        .detail-icon {
          color: var(--warning);
        }

        .noise-level {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          padding: 0.25rem 0.5rem;
          border-radius: 8px;
          font-weight: 600;
        }

        .space-features,
        .space-rules {
          margin-bottom: 1.5rem;
        }

        .space-features h6,
        .space-rules h6 {
          color: var(--text-primary);
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .space-features ul,
        .space-rules ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .space-features li,
        .space-rules li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
        }

        .space-features svg {
          color: #22c55e;
          flex-shrink: 0;
        }

        .space-rules svg {
          color: #3b82f6;
          flex-shrink: 0;
        }

        .space-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
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

        .amenities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .amenity-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .amenity-card:hover {
          transform: translateY(-2px);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .amenity-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .amenity-card h6 {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .amenity-card p {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin: 0;
        }

        .schedule-card,
        .guidelines-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
        }

        .schedule-card h4,
        .guidelines-card h4 {
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
        }

        .schedule-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .schedule-item {
          display: grid;
          grid-template-columns: 2fr 1fr auto;
          gap: 1rem;
          align-items: center;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 8px;
        }

        .schedule-day {
          color: var(--text-primary);
          font-weight: 600;
        }

        .schedule-hours {
          color: var(--text-secondary);
          text-align: center;
        }

        .schedule-status {
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0.25rem 0.5rem;
          border-radius: 6px;
          text-align: center;
        }

        .schedule-status.open {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
        }

        .schedule-status.closed {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }

        .guidelines-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .guideline-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .guideline-icon {
          font-size: 1.25rem;
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        .guideline-item strong {
          color: var(--text-primary);
          font-size: 0.9rem;
          display: block;
          margin-bottom: 0.25rem;
        }

        .guideline-item p {
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
          padding: 0.75rem 1.5rem;
          text-decoration: none;
          cursor: pointer;
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

        .btn-outline-success {
          background: transparent;
          border: 1px solid #22c55e;
          color: #22c55e;
        }

        .btn-outline-success:hover {
          background: #22c55e;
          color: white;
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
          
          .filter-tabs {
            justify-content: flex-start;
            overflow-x: auto;
            padding-bottom: 1rem;
          }
          
          .spaces-grid,
          .amenities-grid {
            grid-template-columns: 1fr;
          }
          
          .space-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          
          .space-details {
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .space-actions {
            flex-direction: column;
          }
          
          .schedule-item {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Espaces;