import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaBookOpen,
  FaUser,
  FaUsers,
  FaVolumeOff,
  FaDesktop,
  FaLightbulb,
  FaPlug,
  FaWifi,
  FaMapMarkerAlt,
  FaClock,
  FaCalendar,
  FaCheckCircle,
  FaTimesCircle,
  FaEye,
  FaSearch,
  FaBook,
  FaNewspaper,
  FaGraduationCap,
  FaShieldAlt,
  FaTemperatureHigh,
  FaInfoCircle,
  FaUserCheck,
  FaQuestionCircle
} from 'react-icons/fa';

const Lecture = () => {
  const [currentOccupancy, setCurrentOccupancy] = useState(67);

  const sections = [
    {
      id: 'generale',
      name: 'Salle de lecture générale',
      capacity: 150,
      current: 98,
      description: 'Grande salle principale avec collections en libre accès',
      features: [
        'Tables individuelles et collectives',
        'Éclairage naturel optimal',
        'Collections de référence',
        'Journaux et périodiques courants',
        'Accès WiFi gratuit'
      ],
      collections: [
        'Ouvrages de référence',
        'Dictionnaires et encyclopédies',
        'Périodiques courants',
        'Journaux quotidiens',
        'Atlas et cartes'
      ],
      rules: [
        'Silence absolu requis',
        'Téléphones en mode silencieux',
        'Pas de conversations',
        'Matériel personnel autorisé'
      ],
      icon: FaBookOpen,
      color: 'text-primary',
      floor: 'Rez-de-chaussée',
      hours: '8h-20h (Lun-Ven), 8h-18h (Sam)'
    },
    {
      id: 'recherche',
      name: 'Salle de recherche avancée',
      capacity: 40,
      current: 31,
      description: 'Espace dédié aux chercheurs et études approfondies',
      features: [
        'Espaces individuels délimités',
        'Prises électriques à chaque place',
        'Éclairage directionnel',
        'Casiers sécurisés',
        'Accès aux bases de données'
      ],
      collections: [
        'Collections spécialisées',
        'Manuscrits anciens',
        'Thèses et mémoires',
        'Revues scientifiques',
        'Archives numériques'
      ],
      rules: [
        'Réservation recommandée',
        'Accès sur présentation de projet',
        'Matériel de recherche autorisé',
        'Durée d\'étude prolongée'
      ],
      icon: FaGraduationCap,
      color: 'text-success',
      floor: 'Niveau 2',
      hours: '9h-19h (Lun-Ven), 9h-17h (Sam)'
    },
    {
      id: 'numerique',
      name: 'Salle de lecture numérique',
      capacity: 25,
      current: 18,
      description: 'Consultation des ressources électroniques',
      features: [
        'Postes informatiques dédiés',
        'Écrans haute résolution',
        'Logiciels spécialisés',
        'Scanner haute définition',
        'Impression couleur'
      ],
      collections: [
        'E-books et livres numériques',
        'Bases de données académiques',
        'Archives numérisées',
        'Ressources multimédia',
        'Plateformes d\'apprentissage'
      ],
      rules: [
        'Session limitée à 3h',
        'Carte d\'étudiant requise',
        'Sauvegarde personnelle',
        'Support technique disponible'
      ],
      icon: FaDesktop,
      color: 'text-info',
      floor: 'Niveau 1',
      hours: '8h30-19h30 (Lun-Ven), 9h-17h (Sam)'
    }
  ];

  const amenities = [
    {
      name: 'Climatisation',
      description: 'Température contrôlée 22°C',
      icon: FaTemperatureHigh,
      color: 'text-primary'
    },
    {
      name: 'Éclairage adapté',
      description: 'Lumière naturelle + lampes individuelles',
      icon: FaLightbulb,
      color: 'text-warning'
    },
    {
      name: 'WiFi haut débit',
      description: 'Connexion gratuite et sécurisée',
      icon: FaWifi,
      color: 'text-info'
    },
    {
      name: 'Sécurité 24h/24',
      description: 'Surveillance et casiers verrouillables',
      icon: FaShieldAlt,
      color: 'text-success'
    },
    {
      name: 'Prises électriques',
      description: 'Alimentation à chaque place',
      icon: FaPlug,
      color: 'text-secondary'
    },
    {
      name: 'Accès handicapés',
      description: 'Espaces adaptés disponibles',
      icon: FaUserCheck,
      color: 'text-danger'
    }
  ];

  const stats = [
    { label: 'Places assises', value: '215', icon: FaUser },
    { label: 'Occupation actuelle', value: `${currentOccupancy}%`, icon: FaUsers },
    { label: 'Ouvrages consultables', value: '15k+', icon: FaBook },
    { label: 'Heures d\'ouverture', value: '12h/jour', icon: FaClock }
  ];

  const todaySchedule = [
    { time: '8h00', activity: 'Ouverture - Préparation des espaces', status: 'completed' },
    { time: '8h30', activity: 'Accueil du public', status: 'current' },
    { time: '12h00', activity: 'Service continu (pas de fermeture)', status: 'upcoming' },
    { time: '17h00', activity: 'Affluence maximale prévue', status: 'upcoming' },
    { time: '20h00', activity: 'Fermeture (Lun-Ven)', status: 'upcoming' }
  ];

  return (
    <div className="lecture-container">
      {/* Hero Section */}
      <section className="lecture-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="hero-content">
                <div className="hero-badge">
                  <FaBookOpen size={12} className="me-2" />
                  Salle de Lecture
                </div>
                <h1 className="hero-title">
                  <span className="text-warning">Salle</span> de Lecture
                </h1>
                <p className="hero-subtitle">
                  Plus de 215 places d'étude silencieuses réparties sur 3 niveaux. 
                  Accès libre aux collections, espaces climatisés et équipements modernes.
                </p>
                <div className="hero-actions">
                  <Link to="/catalogue" className="btn btn-warning">
                    <FaSearch size={14} className="me-2" />
                    Rechercher un livre
                  </Link>
                  <button className="btn btn-outline-warning">
                    <FaMapMarkerAlt size={14} className="me-2" />
                    Plan des salles
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="stats-grid">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="stat-card">
                      <Icon className="stat-icon text-primary" />
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

      {/* Current Status */}
      <section className="status-section">
        <div className="container">
          <div className="status-card">
            <div className="row align-items-center g-4">
              <div className="col-lg-4">
                <div className="occupancy-indicator">
                  <div className="occupancy-circle">
                    <span className="occupancy-value">{currentOccupancy}%</span>
                    <span className="occupancy-label">Occupation</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="current-status">
                  <h4>État actuel</h4>
                  <div className="status-item">
                    <FaCheckCircle className="status-icon text-success" />
                    <span>147 places occupées</span>
                  </div>
                  <div className="status-item">
                    <FaCheckCircle className="status-icon text-success" />
                    <span>68 places disponibles</span>
                  </div>
                  <div className="status-item">
                    <FaClock className="status-icon text-info" />
                    <span>Mise à jour: il y a 5 min</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="quick-access">
                  <h4>Accès rapide</h4>
                  <Link to="/catalogue" className="quick-link">
                    <FaSearch className="quick-icon" />
                    Catalogue en ligne
                  </Link>
                  <Link to="/profile" className="quick-link">
                    <FaUser className="quick-icon" />
                    Mes emprunts
                  </Link>
                  <Link to="/aide" className="quick-link">
                    <FaQuestionCircle className="quick-icon" />
                    Aide à la recherche
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="sections-overview">
        <div className="container">
          <div className="section-header">
            <h3>Nos espaces de lecture</h3>
            <p>Choisissez l'environnement qui correspond à vos besoins d'étude</p>
          </div>
          <div className="sections-grid">
            {sections.map(section => {
              const Icon = section.icon;
              const occupancyRate = Math.round((section.current / section.capacity) * 100);
              return (
                <div key={section.id} className="section-card">
                  <div className="section-header-card">
                    <div className="section-title">
                      <Icon className={`section-icon ${section.color}`} />
                      <h5>{section.name}</h5>
                    </div>
                    <div className="occupancy-badge">
                      {section.current}/{section.capacity}
                    </div>
                  </div>

                  <p className="section-description">{section.description}</p>

                  <div className="section-info">
                    <div className="info-item">
                      <FaMapMarkerAlt className="info-icon" />
                      <span>{section.floor}</span>
                    </div>
                    <div className="info-item">
                      <FaClock className="info-icon" />
                      <span>{section.hours}</span>
                    </div>
                  </div>

                  <div className="occupancy-bar">
                    <div 
                      className="occupancy-fill" 
                      style={{width: `${occupancyRate}%`}}
                    ></div>
                  </div>
                  <div className="occupancy-text">
                    Occupation: {occupancyRate}%
                  </div>

                  <div className="section-features">
                    <h6>Équipements :</h6>
                    <ul>
                      {section.features.map((feature, idx) => (
                        <li key={idx}>
                          <FaCheckCircle size={10} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="section-collections">
                    <h6>Collections :</h6>
                    <ul>
                      {section.collections.map((collection, idx) => (
                        <li key={idx}>
                          <FaBook size={10} />
                          {collection}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="section-rules">
                    <h6>Conditions :</h6>
                    <ul>
                      {section.rules.map((rule, idx) => (
                        <li key={idx}>
                          <FaInfoCircle size={10} />
                          {rule}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="section-actions">
                    <button className="btn btn-warning btn-sm">
                      <FaMapMarkerAlt size={14} className="me-2" />
                      Localiser
                    </button>
                    <button className="btn btn-outline-secondary btn-sm">
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
            <h3>Confort et équipements</h3>
            <p>Un environnement optimal pour vos études et recherches</p>
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

      {/* Today's Schedule */}
      <section className="schedule-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="schedule-card">
                <h4>
                  <FaCalendar className="me-2" />
                  Programme d'aujourd'hui
                </h4>
                <div className="schedule-timeline">
                  {todaySchedule.map((item, index) => (
                    <div key={index} className={`timeline-item ${item.status}`}>
                      <div className="timeline-time">{item.time}</div>
                      <div className="timeline-content">
                        <span>{item.activity}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="guidelines-card">
                <h4>
                  <FaVolumeOff className="me-2" />
                  Règlement de la salle
                </h4>
                <div className="guidelines-list">
                  <div className="guideline-item">
                    <FaVolumeOff className="guideline-icon text-danger" />
                    <div>
                      <strong>Silence absolu</strong>
                      <p>Respecter le calme pour la concentration de tous</p>
                    </div>
                  </div>
                  <div className="guideline-item">
                    <FaDesktop className="guideline-icon text-info" />
                    <div>
                      <strong>Équipements personnels</strong>
                      <p>Ordinateurs portables autorisés en mode silencieux</p>
                    </div>
                  </div>
                  <div className="guideline-item">
                    <FaNewspaper className="guideline-icon text-warning" />
                    <div>
                      <strong>Documents</strong>
                      <p>Consultation sur place uniquement pour les ouvrages de référence</p>
                    </div>
                  </div>
                  <div className="guideline-item">
                    <FaUser className="guideline-icon text-success" />
                    <div>
                      <strong>Accès libre</strong>
                      <p>Ouvert à tous les membres inscrits à la bibliothèque</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .lecture-container {
          background: var(--bg-primary);
          min-height: 100vh;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .lecture-container .container {
          max-width: 1400px !important;
          margin: 0 auto !important;
          padding: 0 1rem !important;
          width: 100% !important;
        }

        .lecture-hero {
          padding: 3rem 0;
          background: linear-gradient(135deg, 
            rgba(59, 130, 246, 0.1) 0%, 
            rgba(37, 99, 235, 0.05) 100%);
          border-radius: 0 0 20px 20px;
          margin-bottom: 2rem;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          color: #3b82f6;
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

        .status-section,
        .sections-overview,
        .amenities-section,
        .schedule-section {
          padding: 3rem 0;
        }

        .status-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
        }

        .occupancy-indicator {
          text-align: center;
        }

        .occupancy-circle {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: conic-gradient(
            #3b82f6 ${currentOccupancy * 3.6}deg,
            rgba(255, 255, 255, 0.1) ${currentOccupancy * 3.6}deg
          );
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          position: relative;
        }

        .occupancy-circle::before {
          content: '';
          position: absolute;
          width: 90px;
          height: 90px;
          background: var(--bg-primary);
          border-radius: 50%;
        }

        .occupancy-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          z-index: 1;
        }

        .occupancy-label {
          font-size: 0.8rem;
          color: var(--text-secondary);
          z-index: 1;
        }

        .current-status h4,
        .quick-access h4 {
          color: var(--text-primary);
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .status-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .status-icon {
          font-size: 1rem;
        }

        .quick-access {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .quick-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          text-decoration: none;
          color: var(--text-secondary);
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }

        .quick-link:hover {
          background: rgba(255, 255, 255, 0.08);
          color: var(--text-primary);
          transform: translateX(4px);
        }

        .quick-icon {
          color: var(--warning);
          font-size: 1rem;
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

        .sections-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .section-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .section-card:hover {
          transform: translateY(-4px);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .section-header-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .section-icon {
          font-size: 1.5rem;
        }

        .section-title h5 {
          color: var(--text-primary);
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0;
        }

        .occupancy-badge {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .section-description {
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }

        .section-info {
          display: flex;
          gap: 2rem;
          margin-bottom: 1rem;
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

        .occupancy-bar {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
          overflow: hidden;
          margin-bottom: 0.5rem;
        }

        .occupancy-fill {
          height: 100%;
          background: linear-gradient(90deg, #22c55e, #3b82f6);
          transition: width 0.3s ease;
        }

        .occupancy-text {
          color: var(--text-tertiary);
          font-size: 0.8rem;
          margin-bottom: 1.5rem;
        }

        .section-features,
        .section-collections,
        .section-rules {
          margin-bottom: 1.5rem;
        }

        .section-features h6,
        .section-collections h6,
        .section-rules h6 {
          color: var(--text-primary);
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .section-features ul,
        .section-collections ul,
        .section-rules ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .section-features li,
        .section-collections li,
        .section-rules li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
        }

        .section-features svg {
          color: #22c55e;
        }

        .section-collections svg {
          color: #f59e0b;
        }

        .section-rules svg {
          color: #3b82f6;
        }

        .section-actions {
          display: flex;
          gap: 1rem;
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

        .schedule-timeline {
          position: relative;
        }

        .schedule-timeline::before {
          content: '';
          position: absolute;
          left: 50px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: rgba(255, 255, 255, 0.1);
        }

        .timeline-item {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-bottom: 2rem;
          position: relative;
        }

        .timeline-item::before {
          content: '';
          position: absolute;
          left: 44px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
        }

        .timeline-item.completed::before {
          background: #22c55e;
        }

        .timeline-item.current::before {
          background: #3b82f6;
          box-shadow: 0 0 10px #3b82f6;
        }

        .timeline-item.upcoming::before {
          background: #6b7280;
        }

        .timeline-time {
          width: 80px;
          font-weight: 600;
          color: var(--text-primary);
          font-size: 0.9rem;
        }

        .timeline-content span {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .timeline-item.current .timeline-content span {
          color: var(--text-primary);
          font-weight: 600;
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
          text-decoration: none;
          cursor: pointer;
        }

        .btn-sm {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        }

        .btn-warning {
          background: var(--gradient-accent);
          color: var(--dark-900);
          padding: 0.75rem 1.5rem;
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
          padding: 0.75rem 1.5rem;
        }

        .btn-outline-warning:hover {
          background: var(--warning);
          color: var(--dark-900);
          text-decoration: none;
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
          
          .sections-grid,
          .amenities-grid {
            grid-template-columns: 1fr;
          }
          
          .section-header-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          
          .section-info {
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .section-actions {
            flex-direction: column;
          }
          
          .timeline-item {
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
          }
          
          .schedule-timeline::before {
            left: 10px;
          }
          
          .timeline-item::before {
            left: 4px;
          }
          
          .timeline-time {
            width: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default Lecture;