import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaDesktop,
  FaLaptop,
  FaTabletAlt,
  FaPrint,
  FaCamera,
  FaVideo,
  FaHeadphones,
  FaWifi,
  FaUsb,
  FaGamepad,
  FaCameraRetro,
  FaMicrophone,
  FaTv,
  FaClock,
  FaUsers,
  FaCalendar,
  FaCheckCircle,
  FaTimesCircle,
  FaInfoCircle,
  FaPlay,
  FaDownload,
  FaUpload,
  FaEdit,
  FaCode,
  FaPalette,
  FaFilm,
  FaMusic,
  FaBook,
  FaGraduationCap,
  FaUserCheck,
  FaShieldAlt
} from 'react-icons/fa';

const Multimedia = () => {
  const [selectedEquipment, setSelectedEquipment] = useState('all');

  const equipment = [
    {
      id: 'computers',
      name: 'Ordinateurs fixes',
      count: 24,
      available: 18,
      description: 'Postes de travail haute performance',
      specs: [
        'Processeur Intel i7 dernière génération',
        '16 GB RAM DDR4',
        'SSD 512 GB',
        'Écran 24" Full HD',
        'Suite Office complète'
      ],
      software: [
        'Pack Microsoft Office',
        'Adobe Creative Suite',
        'Logiciels de programmation',
        'Navigateurs web récents',
        'Antivirus mis à jour'
      ],
      features: [
        'Accès internet haut débit',
        'Ports USB 3.0',
        'Lecteur de cartes',
        'Webcam intégrée',
        'Casques audio disponibles'
      ],
      icon: FaDesktop,
      color: 'text-primary',
      bookable: true,
      maxDuration: '3h'
    },
    {
      id: 'laptops',
      name: 'Ordinateurs portables',
      count: 12,
      available: 8,
      description: 'Laptops pour travail mobile et présentations',
      specs: [
        'MacBook Pro M2 13"',
        '8 GB RAM unifiée',
        'SSD 256 GB',
        'Écran Retina 13.3"',
        'Autonomie 12h'
      ],
      software: [
        'macOS Monterey',
        'Final Cut Pro',
        'Logic Pro',
        'Xcode',
        'Suite Adobe'
      ],
      features: [
        'WiFi 6 intégré',
        'Bluetooth 5.0',
        'Ports Thunderbolt',
        'Caméra FaceTime HD',
        'Microphones intégrés'
      ],
      icon: FaLaptop,
      color: 'text-success',
      bookable: true,
      maxDuration: '6h'
    },
    {
      id: 'tablets',
      name: 'Tablettes graphiques',
      count: 8,
      available: 6,
      description: 'iPad Pro pour création et design',
      specs: [
        'iPad Pro 12.9" M2',
        '8 GB RAM',
        'Stockage 128 GB',
        'Écran Liquid Retina XDR',
        'Apple Pencil inclus'
      ],
      software: [
        'Procreate',
        'Adobe Fresco',
        'Affinity Suite',
        'Notability',
        'GoodNotes'
      ],
      features: [
        'Face ID sécurisé',
        'Caméras ultra grand-angle',
        'Audio studio four haut-parleurs',
        'Connexion 5G',
        'Magic Keyboard disponible'
      ],
      icon: FaTabletAlt,
      color: 'text-warning',
      bookable: true,
      maxDuration: '4h'
    },
    {
      id: 'printers',
      name: 'Impression & Scan',
      count: 6,
      available: 6,
      description: 'Imprimantes multifonctions professionnelles',
      specs: [
        'Impression couleur A3/A4',
        'Résolution 1200 dpi',
        'Vitesse 30 ppm',
        'Scanner recto-verso auto',
        'Finition professionnelle'
      ],
      software: [
        'Pilotes universels',
        'Logiciel de scan',
        'OCR intégré',
        'Impression mobile',
        'Gestion des files'
      ],
      features: [
        'Impression sans fil',
        'Support USB direct',
        'Formats multiples',
        'Agrafage automatique',
        'Tarification étudiante'
      ],
      icon: FaPrint,
      color: 'text-info',
      bookable: false,
      maxDuration: 'Libre'
    }
  ];

  const multimedia = [
    {
      name: 'Station de montage vidéo',
      description: 'Équipement professionnel pour création audiovisuelle',
      count: 4,
      icon: FaVideo,
      color: 'text-danger'
    },
    {
      name: 'Studio audio',
      description: 'Enregistrement et mixage audio',
      count: 2,
      icon: FaMicrophone,
      color: 'text-warning'
    },
    {
      name: 'Projecteurs HD',
      description: 'Présentation et projection',
      count: 6,
      icon: FaTv,
      color: 'text-info'
    },
    {
      name: 'Appareils photo',
      description: 'DSLR pour projets photographiques',
      count: 3,
      icon: FaCameraRetro,
      color: 'text-success'
    }
  ];

  const services = [
    {
      title: 'Formation informatique',
      description: 'Ateliers sur les outils numériques',
      features: [
        'Suite Office avancée',
        'Retouche photo/vidéo',
        'Programmation web',
        'Conception graphique'
      ],
      icon: FaGraduationCap,
      color: 'text-primary'
    },
    {
      title: 'Assistance technique',
      description: 'Support pour tous vos projets',
      features: [
        'Aide au dépannage',
        'Configuration logiciels',
        'Transfert de données',
        'Conseil en équipement'
      ],
      icon: FaUserCheck,
      color: 'text-success'
    },
    {
      title: 'Accès aux ressources',
      description: 'Bibliothèques et bases de données',
      features: [
        'Ressources numériques',
        'Banques d\'images libres',
        'Sons et musiques',
        'Polices et templates'
      ],
      icon: FaBook,
      color: 'text-warning'
    }
  ];

  const schedule = [
    { day: 'Lundi - Vendredi', hours: '8h30 - 19h30', status: 'open' },
    { day: 'Samedi', hours: '9h00 - 17h00', status: 'open' },
    { day: 'Dimanche', hours: 'Fermé', status: 'closed' }
  ];

  const stats = [
    { label: 'Postes disponibles', value: '50+', icon: FaDesktop },
    { label: 'Logiciels installés', value: '120+', icon: FaCode },
    { label: 'Utilisateurs/jour', value: '180+', icon: FaUsers },
    { label: 'Heures d\'ouverture', value: '11h/jour', icon: FaClock }
  ];

  const filteredEquipment = selectedEquipment === 'all' 
    ? equipment 
    : equipment.filter(e => e.id === selectedEquipment);

  return (
    <div className="multimedia-container">
      {/* Hero Section */}
      <section className="multimedia-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="hero-content">
                <div className="hero-badge">
                  <FaDesktop size={12} className="me-2" />
                  Espace Multimédia
                </div>
                <h1 className="hero-title">
                  <span className="text-warning">Espace</span> Multimédia
                </h1>
                <p className="hero-subtitle">
                  Plus de 50 postes équipés des dernières technologies. Ordinateurs, 
                  logiciels professionnels, impression, scan et matériel audiovisuel.
                </p>
                <div className="hero-actions">
                  <button className="btn btn-warning">
                    <FaCalendar size={14} className="me-2" />
                    Réserver un poste
                  </button>
                  <Link to="/formations" className="btn btn-outline-warning">
                    <FaGraduationCap size={14} className="me-2" />
                    Voir les formations
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
                      <Icon className="stat-icon text-info" />
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

      {/* Equipment Filter */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-card">
            <h4>Équipements informatiques</h4>
            <div className="filter-tabs">
              <button 
                className={`filter-tab ${selectedEquipment === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedEquipment('all')}
              >
                <FaDesktop size={14} />
                Tous les équipements
              </button>
              {equipment.map(item => {
                const Icon = item.icon;
                return (
                  <button 
                    key={item.id}
                    className={`filter-tab ${selectedEquipment === item.id ? 'active' : ''}`}
                    onClick={() => setSelectedEquipment(item.id)}
                  >
                    <Icon size={14} />
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="equipment-section">
        <div className="container">
          <div className="equipment-grid">
            {filteredEquipment.map(item => {
              const Icon = item.icon;
              const availabilityRate = Math.round((item.available / item.count) * 100);
              return (
                <div key={item.id} className="equipment-card">
                  <div className="equipment-header">
                    <div className="equipment-title">
                      <Icon className={`equipment-icon ${item.color}`} />
                      <h5>{item.name}</h5>
                    </div>
                    <div className="availability-info">
                      <span className="count-display">
                        {item.available}/{item.count}
                      </span>
                      {item.available > 0 ? (
                        <span className="status-available">
                          <FaCheckCircle size={12} />
                          Disponible
                        </span>
                      ) : (
                        <span className="status-unavailable">
                          <FaTimesCircle size={12} />
                          Complet
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="equipment-description">{item.description}</p>

                  <div className="availability-bar">
                    <div 
                      className="availability-fill" 
                      style={{width: `${availabilityRate}%`}}
                    ></div>
                  </div>
                  <div className="availability-text">
                    Disponibilité: {availabilityRate}%
                  </div>

                  <div className="equipment-specs">
                    <h6>Caractéristiques :</h6>
                    <ul>
                      {item.specs.map((spec, idx) => (
                        <li key={idx}>
                          <FaCheckCircle size={10} />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="equipment-software">
                    <h6>Logiciels :</h6>
                    <ul>
                      {item.software.map((soft, idx) => (
                        <li key={idx}>
                          <FaCode size={10} />
                          {soft}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="equipment-features">
                    <h6>Fonctionnalités :</h6>
                    <ul>
                      {item.features.map((feature, idx) => (
                        <li key={idx}>
                          <FaShieldAlt size={10} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="equipment-info">
                    <div className="info-item">
                      <FaClock className="info-icon" />
                      <span>Durée max: {item.maxDuration}</span>
                    </div>
                    {item.bookable && (
                      <div className="info-item">
                        <FaCalendar className="info-icon" />
                        <span>Réservation possible</span>
                      </div>
                    )}
                  </div>

                  <div className="equipment-actions">
                    {item.bookable ? (
                      <button className="btn btn-warning">
                        <FaCalendar size={14} className="me-2" />
                        Réserver
                      </button>
                    ) : (
                      <button className="btn btn-success">
                        <FaPlay size={14} className="me-2" />
                        Utiliser
                      </button>
                    )}
                    <button className="btn btn-outline-secondary">
                      <FaInfoCircle size={14} className="me-2" />
                      Manuel
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Multimedia Equipment */}
      <section className="multimedia-section">
        <div className="container">
          <div className="section-header">
            <h3>Équipements spécialisés</h3>
            <p>Matériel professionnel pour vos créations audiovisuelles</p>
          </div>
          <div className="multimedia-grid">
            {multimedia.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="multimedia-card">
                  <Icon className={`multimedia-icon ${item.color}`} />
                  <h6>{item.name}</h6>
                  <p>{item.description}</p>
                  <div className="multimedia-count">
                    {item.count} unité{item.count > 1 ? 's' : ''} disponible{item.count > 1 ? 's' : ''}
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
            <h3>Nos services</h3>
            <p>Accompagnement et formation pour maîtriser les outils numériques</p>
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
                  <button className="btn btn-outline-warning btn-sm">
                    <FaInfoCircle size={14} className="me-2" />
                    En savoir plus
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Schedule & Rules */}
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
                      <span className={`schedule-status ${item.status}`}>
                        {item.status === 'open' ? 'Ouvert' : 'Fermé'}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="access-info">
                  <FaInfoCircle className="access-icon" />
                  <p>Accès libre avec carte d'étudiant ou inscription bibliothèque</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="rules-card">
                <h4>
                  <FaShieldAlt className="me-2" />
                  Règlement de l'espace
                </h4>
                <div className="rules-list">
                  <div className="rule-item">
                    <FaUserCheck className="rule-icon text-success" />
                    <div>
                      <strong>Accès responsable</strong>
                      <p>Respecter le matériel et les autres utilisateurs</p>
                    </div>
                  </div>
                  <div className="rule-item">
                    <FaDownload className="rule-icon text-warning" />
                    <div>
                      <strong>Sauvegarde</strong>
                      <p>Sauvegarder vos travaux sur support personnel</p>
                    </div>
                  </div>
                  <div className="rule-item">
                    <FaWifi className="rule-icon text-info" />
                    <div>
                      <strong>Réseau</strong>
                      <p>Navigation responsable, pas de téléchargements illégaux</p>
                    </div>
                  </div>
                  <div className="rule-item">
                    <FaClock className="rule-icon text-danger" />
                    <div>
                      <strong>Durée d'utilisation</strong>
                      <p>Respecter les créneaux réservés et libérer à temps</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .multimedia-container {
          background: var(--bg-primary);
          min-height: 100vh;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .multimedia-container .container {
          max-width: 1400px !important;
          margin: 0 auto !important;
          padding: 0 1rem !important;
          width: 100% !important;
        }

        .multimedia-hero {
          padding: 3rem 0;
          background: linear-gradient(135deg, 
            rgba(23, 162, 184, 0.1) 0%, 
            rgba(13, 110, 253, 0.05) 100%);
          border-radius: 0 0 20px 20px;
          margin-bottom: 2rem;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(23, 162, 184, 0.1);
          border: 1px solid rgba(23, 162, 184, 0.3);
          color: #17a2b8;
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
        .equipment-section,
        .multimedia-section,
        .services-section,
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

        .equipment-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .equipment-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .equipment-card:hover {
          transform: translateY(-4px);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .equipment-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .equipment-title {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .equipment-icon {
          font-size: 1.5rem;
        }

        .equipment-title h5 {
          color: var(--text-primary);
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0;
        }

        .availability-info {
          text-align: right;
        }

        .count-display {
          display: block;
          color: var(--text-primary);
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .status-available {
          color: #22c55e;
          font-size: 0.8rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          justify-content: flex-end;
        }

        .status-unavailable {
          color: #ef4444;
          font-size: 0.8rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          justify-content: flex-end;
        }

        .equipment-description {
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }

        .availability-bar {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
          overflow: hidden;
          margin-bottom: 0.5rem;
        }

        .availability-fill {
          height: 100%;
          background: linear-gradient(90deg, #22c55e, #3b82f6);
          transition: width 0.3s ease;
        }

        .availability-text {
          color: var(--text-tertiary);
          font-size: 0.8rem;
          margin-bottom: 1.5rem;
        }

        .equipment-specs,
        .equipment-software,
        .equipment-features {
          margin-bottom: 1.5rem;
        }

        .equipment-specs h6,
        .equipment-software h6,
        .equipment-features h6 {
          color: var(--text-primary);
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .equipment-specs ul,
        .equipment-software ul,
        .equipment-features ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .equipment-specs li,
        .equipment-software li,
        .equipment-features li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
        }

        .equipment-specs svg {
          color: #3b82f6;
        }

        .equipment-software svg {
          color: #8b5cf6;
        }

        .equipment-features svg {
          color: #22c55e;
        }

        .equipment-info {
          display: flex;
          gap: 2rem;
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

        .equipment-actions {
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

        .multimedia-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .multimedia-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .multimedia-card:hover {
          transform: translateY(-2px);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .multimedia-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .multimedia-card h6 {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .multimedia-card p {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .multimedia-count {
          color: var(--text-tertiary);
          font-size: 0.8rem;
          font-weight: 600;
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
          transform: translateY(-4px);
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
          margin: 0 0 1.5rem 0;
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

        .schedule-card,
        .rules-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
        }

        .schedule-card h4,
        .rules-card h4 {
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
          margin-bottom: 1.5rem;
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

        .access-info {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(23, 162, 184, 0.1);
          border-radius: 8px;
        }

        .access-icon {
          color: #17a2b8;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .access-info p {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin: 0;
        }

        .rules-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .rule-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .rule-icon {
          font-size: 1.25rem;
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        .rule-item strong {
          color: var(--text-primary);
          font-size: 0.9rem;
          display: block;
          margin-bottom: 0.25rem;
        }

        .rule-item p {
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
          
          .filter-tabs {
            justify-content: flex-start;
            overflow-x: auto;
            padding-bottom: 1rem;
          }
          
          .equipment-grid,
          .multimedia-grid,
          .services-grid {
            grid-template-columns: 1fr;
          }
          
          .equipment-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          
          .availability-info {
            text-align: left;
          }
          
          .equipment-info {
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .equipment-actions {
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

export default Multimedia;