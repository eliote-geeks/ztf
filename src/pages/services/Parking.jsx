import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaParking,
  FaCar,
  FaMotorcycle,
  FaBicycle,
  FaWheelchair,
  FaClock,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaCamera,
  FaLightbulb,
  FaUsers,
  FaCheckCircle,
  FaTimesCircle,
  FaInfoCircle,
  FaExclamationTriangle,
  FaPhone,
  FaKey,
  FaEye,
  FaUserCheck,
  FaBan,
  FaRoute,
  FaCompass,
  FaTools,
  FaLeaf
} from 'react-icons/fa';

const Parking = () => {
  const [selectedZone, setSelectedZone] = useState('all');

  const parkingZones = [
    {
      id: 'main',
      name: 'Parking Principal',
      type: 'Voitures',
      capacity: 120,
      occupied: 89,
      description: 'Parking principal réservé aux véhicules légers',
      features: [
        'Surveillance 24h/24',
        'Éclairage LED',
        'Places marquées',
        'Accès contrôlé',
        'Proche de l\'entrée'
      ],
      access: 'Gratuit pour les usagers',
      location: 'Devant le bâtiment principal',
      security: 'Haute',
      icon: FaCar,
      color: 'text-primary'
    },
    {
      id: 'motorcycle',
      name: 'Zone Deux-roues',
      type: 'Motos & Scooters',
      capacity: 40,
      occupied: 28,
      description: 'Espace sécurisé pour motos et scooters',
      features: [
        'Abri couvert',
        'Points d\'attache',
        'Zone clôturée',
        'Éclairage renforcé',
        'Vidéosurveillance'
      ],
      access: 'Gratuit avec enregistrement',
      location: 'Côté Est du bâtiment',
      security: 'Très haute',
      icon: FaMotorcycle,
      color: 'text-success'
    },
    {
      id: 'bicycle',
      name: 'Parking Vélos',
      type: 'Vélos',
      capacity: 80,
      occupied: 52,
      description: 'Râteliers sécurisés pour vélos',
      features: [
        'Râteliers métalliques',
        'Abri contre intempéries',
        'Station de gonflage',
        'Kit de réparation',
        'Accès libre'
      ],
      access: 'Gratuit et libre',
      location: 'Entrée principale',
      security: 'Modérée',
      icon: FaBicycle,
      color: 'text-warning'
    },
    {
      id: 'handicap',
      name: 'Places Handicapés',
      type: 'PMR',
      capacity: 8,
      occupied: 2,
      description: 'Places réservées aux personnes à mobilité réduite',
      features: [
        'Largeur adaptée',
        'Proche des accès',
        'Marquage spécifique',
        'Cheminement sécurisé',
        'Priorité absolue'
      ],
      access: 'Carte handicap obligatoire',
      location: 'Devant l\'entrée principale',
      security: 'Haute',
      icon: FaWheelchair,
      color: 'text-info'
    }
  ];

  const securityFeatures = [
    {
      name: 'Vidéosurveillance',
      description: 'Caméras HD avec enregistrement 24h/24',
      coverage: '100% du parking',
      icon: FaCamera,
      color: 'text-primary'
    },
    {
      name: 'Éclairage LED',
      description: 'Éclairage intelligent avec détection de mouvement',
      coverage: 'Toutes les allées',
      icon: FaLightbulb,
      color: 'text-warning'
    },
    {
      name: 'Agent de sécurité',
      description: 'Présence humaine en soirée et weekend',
      coverage: 'Rondes régulières',
      icon: FaUserCheck,
      color: 'text-success'
    },
    {
      name: 'Accès contrôlé',
      description: 'Barrière automatique avec badge',
      coverage: 'Entrée/sortie',
      icon: FaKey,
      color: 'text-info'
    }
  ];

  const rules = [
    {
      title: 'Stationnement autorisé',
      description: 'Uniquement sur les places marquées',
      type: 'obligation',
      icon: FaCheckCircle,
      color: 'text-success'
    },
    {
      title: 'Durée limitée',
      description: '12h maximum en continu',
      type: 'limitation',
      icon: FaClock,
      color: 'text-warning'
    },
    {
      title: 'Stationnement interdit',
      description: 'Zones de passage et sorties de secours',
      type: 'interdiction',
      icon: FaBan,
      color: 'text-danger'
    },
    {
      title: 'Responsabilité',
      description: 'Véhicules sous la responsabilité du propriétaire',
      type: 'information',
      icon: FaInfoCircle,
      color: 'text-info'
    }
  ];

  const accessInfo = [
    {
      method: 'Badge étudiant',
      description: 'Accès automatique avec carte d\'étudiant',
      validity: 'Année académique',
      process: 'Activation à l\'accueil',
      icon: FaUserCheck,
      color: 'text-primary'
    },
    {
      method: 'Badge visiteur',
      description: 'Badge temporaire pour visiteurs',
      validity: '1 journée',
      process: 'Demande à l\'accueil',
      icon: FaKey,
      color: 'text-success'
    },
    {
      method: 'Code d\'accès',
      description: 'Code temporaire pour événements',
      validity: 'Durée de l\'événement',
      process: 'Fourni par l\'organisateur',
      icon: FaPhone,
      color: 'text-warning'
    }
  ];

  const directions = [
    {
      from: 'Centre-ville',
      route: 'Avenue de l\'Indépendance → Rue Zacharias Tanee Fomum',
      distance: '2.5 km',
      time: '8 min',
      landmarks: 'Après la Poste Centrale'
    },
    {
      from: 'Université',
      route: 'Campus → Boulevard Universitaire → Rue ZTF',
      distance: '1.2 km',
      time: '4 min',
      landmarks: 'Face au Centre Culturel'
    },
    {
      from: 'Aéroport',
      route: 'N1 → Sortie Centre → Avenue Indépendance',
      distance: '8 km',
      time: '15 min',
      landmarks: 'Après le rond-point de la Réunification'
    }
  ];

  const stats = [
    { label: 'Places totales', value: '248', icon: FaParking },
    { label: 'Taux d\'occupation', value: '68%', icon: FaUsers },
    { label: 'Incidents/mois', value: '0', icon: FaShieldAlt },
    { label: 'Satisfaction', value: '4.5/5', icon: FaCheckCircle }
  ];

  const filteredZones = selectedZone === 'all' 
    ? parkingZones 
    : parkingZones.filter(z => z.id === selectedZone);

  const currentTime = new Date().getHours();
  const isNightTime = currentTime >= 20 || currentTime <= 6;

  return (
    <div className="parking-container">
      {/* Hero Section */}
      <section className="parking-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="hero-content">
                <div className="hero-badge">
                  <FaParking size={12} className="me-2" />
                  Parking & Stationnement
                </div>
                <h1 className="hero-title">
                  <span className="text-warning">Parking</span> Sécurisé
                </h1>
                <p className="hero-subtitle">
                  248 places gratuites avec surveillance 24h/24. Espaces dédiés voitures, 
                  motos, vélos et PMR. Accès contrôlé et sécurisé.
                </p>
                <div className="hero-actions">
                  <button className="btn btn-warning">
                    <FaMapMarkerAlt size={14} className="me-2" />
                    Voir la disponibilité
                  </button>
                  <Link to="/contact" className="btn btn-outline-warning">
                    <FaRoute size={14} className="me-2" />
                    Comment venir
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

      {/* Current Status */}
      <section className="status-section">
        <div className="container">
          <div className="status-card">
            <div className="row align-items-center g-4">
              <div className="col-lg-4">
                <div className="current-status">
                  <h4>État actuel</h4>
                  <div className="status-display">
                    <FaCheckCircle className="status-icon text-success" />
                    <span className="status-text">Accès libre</span>
                  </div>
                  <div className="time-info">
                    {isNightTime ? (
                      <span className="night-mode">
                        <FaLightbulb className="me-2" />
                        Mode nocturne activé
                      </span>
                    ) : (
                      <span className="day-mode">
                        <FaEye className="me-2" />
                        Surveillance active
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="availability">
                  <h4>Disponibilité</h4>
                  <div className="availability-bar">
                    <div className="availability-fill" style={{width: '32%'}}></div>
                  </div>
                  <div className="availability-text">
                    80 places libres sur 248
                  </div>
                  <div className="zone-breakdown">
                    <span>Voitures: 31 libres</span>
                    <span>Motos: 12 libres</span>
                    <span>Vélos: 28 libres</span>
                    <span>PMR: 6 libres</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="quick-access">
                  <h4>Accès rapide</h4>
                  <div className="access-status">
                    <div className="access-item">
                      <FaKey className="access-icon text-primary" />
                      <span>Badge étudiant: Actif</span>
                    </div>
                    <div className="access-item">
                      <FaUserCheck className="access-icon text-success" />
                      <span>Accueil ouvert</span>
                    </div>
                    <div className="access-item">
                      <FaCamera className="access-icon text-info" />
                      <span>Surveillance: Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zone Filter */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-card">
            <h4>Zones de stationnement</h4>
            <div className="filter-tabs">
              <button 
                className={`filter-tab ${selectedZone === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedZone('all')}
              >
                <FaEye size={14} />
                Toutes les zones
              </button>
              {parkingZones.map(zone => {
                const Icon = zone.icon;
                return (
                  <button 
                    key={zone.id}
                    className={`filter-tab ${selectedZone === zone.id ? 'active' : ''}`}
                    onClick={() => setSelectedZone(zone.id)}
                  >
                    <Icon size={14} />
                    {zone.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Parking Zones */}
      <section className="zones-section">
        <div className="container">
          <div className="zones-grid">
            {filteredZones.map(zone => {
              const Icon = zone.icon;
              const occupancyRate = Math.round((zone.occupied / zone.capacity) * 100);
              return (
                <div key={zone.id} className="zone-card">
                  <div className="zone-header">
                    <div className="zone-title">
                      <Icon className={`zone-icon ${zone.color}`} />
                      <div>
                        <h5>{zone.name}</h5>
                        <span className="zone-type">{zone.type}</span>
                      </div>
                    </div>
                    <div className="zone-status">
                      <span className="capacity-display">
                        {zone.capacity - zone.occupied}/{zone.capacity}
                      </span>
                      <span className="status-label">libres</span>
                    </div>
                  </div>

                  <p className="zone-description">{zone.description}</p>

                  <div className="zone-info">
                    <div className="info-item">
                      <FaMapMarkerAlt className="info-icon" />
                      <span>{zone.location}</span>
                    </div>
                    <div className="info-item">
                      <FaShieldAlt className="info-icon" />
                      <span>Sécurité {zone.security.toLowerCase()}</span>
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

                  <div className="zone-features">
                    <h6>Équipements :</h6>
                    <ul>
                      {zone.features.map((feature, idx) => (
                        <li key={idx}>
                          <FaCheckCircle size={10} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="zone-access">
                    <div className="access-info">
                      <FaKey className="access-icon" />
                      <span>{zone.access}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="security-section">
        <div className="container">
          <div className="section-header">
            <h3>Sécurité et surveillance</h3>
            <p>Dispositifs mis en place pour protéger vos véhicules</p>
          </div>
          <div className="security-grid">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="security-card">
                  <Icon className={`security-icon ${feature.color}`} />
                  <h6>{feature.name}</h6>
                  <p className="security-description">{feature.description}</p>
                  <div className="security-coverage">
                    <span className="coverage-label">Couverture:</span>
                    <span className="coverage-value">{feature.coverage}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Access & Rules */}
      <section className="rules-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="access-card">
                <h4>
                  <FaKey className="me-2" />
                  Modalités d'accès
                </h4>
                <div className="access-methods">
                  {accessInfo.map((access, index) => {
                    const Icon = access.icon;
                    return (
                      <div key={index} className="access-method">
                        <Icon className={`method-icon ${access.color}`} />
                        <div className="method-info">
                          <h6>{access.method}</h6>
                          <p>{access.description}</p>
                          <div className="method-details">
                            <span><strong>Validité:</strong> {access.validity}</span>
                            <span><strong>Procédure:</strong> {access.process}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="rules-card">
                <h4>
                  <FaInfoCircle className="me-2" />
                  Règlement du parking
                </h4>
                <div className="rules-list">
                  {rules.map((rule, index) => {
                    const Icon = rule.icon;
                    return (
                      <div key={index} className="rule-item">
                        <Icon className={`rule-icon ${rule.color}`} />
                        <div className="rule-content">
                          <strong>{rule.title}</strong>
                          <p>{rule.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="directions-section">
        <div className="container">
          <div className="section-header">
            <h3>Comment venir ?</h3>
            <p>Itinéraires depuis les principaux points de la ville</p>
          </div>
          <div className="directions-grid">
            {directions.map((direction, index) => (
              <div key={index} className="direction-card">
                <div className="direction-header">
                  <FaRoute className="direction-icon text-warning" />
                  <h6>Depuis {direction.from}</h6>
                </div>
                <div className="direction-route">
                  {direction.route}
                </div>
                <div className="direction-details">
                  <div className="detail-item">
                    <FaCompass className="detail-icon" />
                    <span>{direction.distance}</span>
                  </div>
                  <div className="detail-item">
                    <FaClock className="detail-icon" />
                    <span>{direction.time}</span>
                  </div>
                </div>
                <div className="direction-landmarks">
                  <FaMapMarkerAlt className="landmark-icon" />
                  <span>{direction.landmarks}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Info */}
      <section className="contact-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="contact-card">
                <h4>
                  <FaPhone className="me-2" />
                  Contact & assistance
                </h4>
                <div className="contact-info">
                  <div className="contact-item">
                    <FaPhone className="contact-icon text-success" />
                    <div>
                      <strong>Urgences parking</strong>
                      <p>+237 233 000 003</p>
                      <span>24h/24 - 7j/7</span>
                    </div>
                  </div>
                  <div className="contact-item">
                    <FaUserCheck className="contact-icon text-primary" />
                    <div>
                      <strong>Bureau d'accueil</strong>
                      <p>Hall principal - Rez-de-chaussée</p>
                      <span>Lun-Ven: 8h-20h, Sam: 8h-18h</span>
                    </div>
                  </div>
                  <div className="contact-item">
                    <FaTools className="contact-icon text-warning" />
                    <div>
                      <strong>Service technique</strong>
                      <p>Pannes barrières et badges</p>
                      <span>Intervention sous 30 min</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="env-card">
                <h4>
                  <FaLeaf className="me-2" />
                  Engagement environnemental
                </h4>
                <div className="env-initiatives">
                  <div className="env-item">
                    <FaBicycle className="env-icon text-success" />
                    <div>
                      <strong>Mobilité douce</strong>
                      <p>80 places vélos avec station de gonflage gratuite</p>
                    </div>
                  </div>
                  <div className="env-item">
                    <FaLightbulb className="env-icon text-warning" />
                    <div>
                      <strong>Éclairage LED</strong>
                      <p>Réduction de 60% de la consommation électrique</p>
                    </div>
                  </div>
                  <div className="env-item">
                    <FaLeaf className="env-icon text-success" />
                    <div>
                      <strong>Espaces verts</strong>
                      <p>20% du parking végétalisé avec arbres d'ombrage</p>
                    </div>
                  </div>
                  <div className="env-item">
                    <FaCar className="env-icon text-info" />
                    <div>
                      <strong>Covoiturage</strong>
                      <p>Places réservées aux véhicules partagés</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .parking-container {
          background: var(--bg-primary);
          min-height: 100vh;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .parking-container .container {
          max-width: 1400px !important;
          margin: 0 auto !important;
          padding: 0 1rem !important;
          width: 100% !important;
        }

        .parking-hero {
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

        .status-section,
        .filter-section,
        .zones-section,
        .security-section,
        .rules-section,
        .directions-section,
        .contact-section {
          padding: 3rem 0;
        }

        .status-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
        }

        .current-status h4,
        .availability h4,
        .quick-access h4 {
          color: var(--text-primary);
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .status-display {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .status-icon {
          font-size: 1.5rem;
        }

        .status-text {
          color: var(--text-primary);
          font-weight: 600;
          font-size: 1.1rem;
        }

        .time-info {
          color: var(--text-secondary);
          font-size: 0.875rem;
          display: flex;
          align-items: center;
        }

        .night-mode {
          color: #f59e0b;
        }

        .day-mode {
          color: #22c55e;
        }

        .availability-bar {
          width: 100%;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 0.5rem;
        }

        .availability-fill {
          height: 100%;
          background: linear-gradient(90deg, #ef4444, #f59e0b);
          transition: width 0.3s ease;
        }

        .availability-text {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .zone-breakdown {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .zone-breakdown span {
          color: var(--text-tertiary);
          font-size: 0.8rem;
        }

        .access-status {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .access-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .access-icon {
          font-size: 1rem;
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

        .zones-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .zone-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .zone-card:hover {
          transform: translateY(-4px);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .zone-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .zone-title {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .zone-icon {
          font-size: 1.5rem;
        }

        .zone-title h5 {
          color: var(--text-primary);
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0;
        }

        .zone-type {
          color: var(--text-tertiary);
          font-size: 0.875rem;
        }

        .zone-status {
          text-align: right;
        }

        .capacity-display {
          color: var(--text-primary);
          font-weight: 700;
          font-size: 1.1rem;
          display: block;
        }

        .status-label {
          color: var(--text-secondary);
          font-size: 0.8rem;
        }

        .zone-description {
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }

        .zone-info {
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

        .zone-features {
          margin-bottom: 1.5rem;
        }

        .zone-features h6 {
          color: var(--text-primary);
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .zone-features ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 0.5rem;
        }

        .zone-features li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .zone-features svg {
          color: #22c55e;
        }

        .zone-access {
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .access-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
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

        .security-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .security-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .security-card:hover {
          transform: translateY(-2px);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .security-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .security-card h6 {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .security-description {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .security-coverage {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .coverage-label {
          color: var(--text-tertiary);
          font-size: 0.8rem;
        }

        .coverage-value {
          color: var(--text-primary);
          font-weight: 600;
          font-size: 0.8rem;
        }

        .access-card,
        .rules-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
        }

        .access-card h4,
        .rules-card h4 {
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
        }

        .access-methods,
        .rules-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .access-method,
        .rule-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .method-icon,
        .rule-icon {
          font-size: 1.25rem;
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        .method-info h6 {
          color: var(--text-primary);
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .method-info p {
          color: var(--text-secondary);
          font-size: 0.8rem;
          margin-bottom: 0.5rem;
        }

        .method-details {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .method-details span {
          color: var(--text-tertiary);
          font-size: 0.75rem;
        }

        .rule-content strong {
          color: var(--text-primary);
          font-size: 0.9rem;
          display: block;
          margin-bottom: 0.25rem;
        }

        .rule-content p {
          color: var(--text-secondary);
          font-size: 0.8rem;
          margin: 0;
        }

        .directions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .direction-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .direction-card:hover {
          transform: translateY(-2px);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .direction-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .direction-icon {
          font-size: 1.5rem;
        }

        .direction-header h6 {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          margin: 0;
        }

        .direction-route {
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.5;
          margin-bottom: 1rem;
        }

        .direction-details {
          display: flex;
          gap: 2rem;
          margin-bottom: 1rem;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-tertiary);
          font-size: 0.8rem;
        }

        .detail-icon {
          color: var(--warning);
        }

        .direction-landmarks {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-tertiary);
          font-size: 0.8rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .landmark-icon {
          color: #ef4444;
        }

        .contact-card,
        .env-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
        }

        .contact-card h4,
        .env-card h4 {
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
        }

        .contact-info,
        .env-initiatives {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-item,
        .env-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .contact-icon,
        .env-icon {
          font-size: 1.25rem;
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        .contact-item strong,
        .env-item strong {
          color: var(--text-primary);
          font-size: 0.9rem;
          display: block;
          margin-bottom: 0.25rem;
        }

        .contact-item p,
        .env-item p {
          color: var(--text-secondary);
          font-size: 0.8rem;
          margin-bottom: 0.25rem;
        }

        .contact-item span,
        .env-item span {
          color: var(--text-tertiary);
          font-size: 0.75rem;
          font-style: italic;
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
          
          .zones-grid,
          .security-grid,
          .directions-grid {
            grid-template-columns: 1fr;
          }
          
          .zone-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          
          .zone-info {
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .direction-details {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Parking;