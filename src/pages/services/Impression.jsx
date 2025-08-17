import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaPrint,
  FaCamera,
  FaCopy,
  FaFileImage,
  FaFilePdf,
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
  FaUsb,
  FaWifi,
  FaCloud,
  FaEnvelope,
  FaDollarSign,
  FaClock,
  FaUsers,
  FaPalette,
  FaRuler,
  FaLayerGroup,
  FaCheckCircle,
  FaTimesCircle,
  FaInfoCircle,
  FaDownload,
  FaUpload,
  FaCog,
  FaShieldAlt,
  FaHdd,
  FaFileAlt,
  FaMobile
} from 'react-icons/fa';

const Impression = () => {
  const [selectedService, setSelectedService] = useState('all');

  const services = [
    {
      id: 'printing',
      name: 'Impression',
      icon: FaPrint,
      color: 'text-primary',
      description: 'Impression noir et blanc et couleur',
      features: [
        'Qualité professionnelle',
        'Formats A4, A3, A5',
        'Papier standard et premium',
        'Impression recto-verso',
        'Finition disponible'
      ],
      pricing: [
        { type: 'A4 Noir & Blanc', price: 25 },
        { type: 'A4 Couleur', price: 100 },
        { type: 'A3 Noir & Blanc', price: 50 },
        { type: 'A3 Couleur', price: 200 },
        { type: 'Recto-verso', price: '+10' }
      ]
    },
    {
      id: 'scanning',
      name: 'Numérisation',
      icon: FaCamera,
      color: 'text-success',
      description: 'Scan de documents et livres',
      features: [
        'Résolution jusqu\'à 1200 DPI',
        'Formats JPEG, PDF, TIFF',
        'Scan couleur et N&B',
        'OCR intégré',
        'Envoi par email'
      ],
      pricing: [
        { type: 'Page simple', price: 50 },
        { type: 'Page couleur', price: 100 },
        { type: 'Haute résolution', price: 150 },
        { type: 'OCR traitement', price: 25 },
        { type: 'Envoi email', price: 0 }
      ]
    },
    {
      id: 'copying',
      name: 'Photocopie',
      icon: FaCopy,
      color: 'text-warning',
      description: 'Reproduction rapide de documents',
      features: [
        'Copies instantanées',
        'Réduction/agrandissement',
        'Assemblage automatique',
        'Copies multiples',
        'Qualité optimisée'
      ],
      pricing: [
        { type: 'Copie A4 N&B', price: 15 },
        { type: 'Copie A4 Couleur', price: 75 },
        { type: 'Copie A3 N&B', price: 30 },
        { type: 'Copie A3 Couleur', price: 150 },
        { type: 'Assemblage', price: 10 }
      ]
    },
    {
      id: 'binding',
      name: 'Reliure',
      icon: FaLayerGroup,
      color: 'text-danger',
      description: 'Services de reliure et finition',
      features: [
        'Reliure spirale',
        'Reliure thermique',
        'Plastification',
        'Perforation',
        'Massicotage'
      ],
      pricing: [
        { type: 'Reliure spirale', price: 500 },
        { type: 'Reliure thermique', price: 800 },
        { type: 'Plastification A4', price: 200 },
        { type: 'Perforation', price: 50 },
        { type: 'Massicotage', price: 100 }
      ]
    }
  ];

  const equipment = [
    {
      name: 'Imprimantes laser',
      description: 'HP LaserJet Pro haute vitesse',
      specs: ['30 ppm N&B', '25 ppm couleur', 'Recto-verso auto', 'Réseau'],
      count: 4,
      icon: FaPrint,
      color: 'text-primary'
    },
    {
      name: 'Scanners professionnels',
      description: 'Canon ImageFORMULA',
      specs: ['1200 DPI', 'Chargeur 50 pages', 'OCR intégré', 'Formats multiples'],
      count: 2,
      icon: FaCamera,
      color: 'text-success'
    },
    {
      name: 'Photocopieurs',
      description: 'Xerox multifonctions',
      specs: ['40 cpm', 'A3/A4', 'Tri automatique', 'Finition intégrée'],
      count: 3,
      icon: FaCopy,
      color: 'text-warning'
    },
    {
      name: 'Station de reliure',
      description: 'Équipement professionnel',
      specs: ['Spirale métal/plastique', 'Thermoreliure', 'Plastifieuse A3', 'Massicot'],
      count: 1,
      icon: FaLayerGroup,
      color: 'text-danger'
    }
  ];

  const inputMethods = [
    {
      method: 'USB/SD',
      description: 'Clés USB et cartes mémoire',
      formats: ['PDF', 'Word', 'Excel', 'PowerPoint', 'Images'],
      icon: FaUsb,
      color: 'text-primary'
    },
    {
      method: 'Email',
      description: 'Envoi par courrier électronique',
      formats: ['Tous formats bureautiques', 'Images', 'PDF'],
      icon: FaEnvelope,
      color: 'text-success'
    },
    {
      method: 'Cloud',
      description: 'Google Drive, Dropbox, OneDrive',
      formats: ['Accès direct', 'Synchronisation', 'Partage sécurisé'],
      icon: FaCloud,
      color: 'text-info'
    },
    {
      method: 'Mobile',
      description: 'Impression depuis smartphone',
      formats: ['AirPrint', 'Google Print', 'App dédiée'],
      icon: FaMobile,
      color: 'text-warning'
    }
  ];

  const stats = [
    { label: 'Pages imprimées/jour', value: '2,500+', icon: FaPrint },
    { label: 'Documents scannés', value: '800+', icon: FaCamera },
    { label: 'Postes disponibles', value: '10', icon: FaCog },
    { label: 'Formats supportés', value: '25+', icon: FaFileAlt }
  ];

  const schedule = [
    { day: 'Lundi - Vendredi', hours: '8h00 - 20h00', status: 'open' },
    { day: 'Samedi', hours: '8h00 - 18h00', status: 'open' },
    { day: 'Dimanche', hours: '10h00 - 16h00', status: 'open' }
  ];

  const filteredServices = selectedService === 'all' 
    ? services 
    : services.filter(s => s.id === selectedService);

  return (
    <div className="impression-container">
      {/* Hero Section */}
      <section className="impression-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="hero-content">
                <div className="hero-badge">
                  <FaPrint size={12} className="me-2" />
                  Impression & Scan
                </div>
                <h1 className="hero-title">
                  <span className="text-warning">Impression</span> & Numérisation
                </h1>
                <p className="hero-subtitle">
                  Service complet d'impression, scan et reliure. Équipements professionnels, 
                  tarifs étudiants et qualité garantie pour tous vos documents.
                </p>
                <div className="hero-actions">
                  <button className="btn btn-warning">
                    <FaPrint size={14} className="me-2" />
                    Imprimer maintenant
                  </button>
                  <Link to="/contact" className="btn btn-outline-warning">
                    <FaInfoCircle size={14} className="me-2" />
                    Voir les tarifs
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

      {/* Service Filter */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-card">
            <h4>Nos services d'impression</h4>
            <div className="filter-tabs">
              <button 
                className={`filter-tab ${selectedService === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedService('all')}
              >
                <FaFileAlt size={14} />
                Tous les services
              </button>
              {services.map(service => {
                const Icon = service.icon;
                return (
                  <button 
                    key={service.id}
                    className={`filter-tab ${selectedService === service.id ? 'active' : ''}`}
                    onClick={() => setSelectedService(service.id)}
                  >
                    <Icon size={14} />
                    {service.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            {filteredServices.map(service => {
              const Icon = service.icon;
              return (
                <div key={service.id} className="service-card">
                  <div className="service-header">
                    <Icon className={`service-icon ${service.color}`} />
                    <h5>{service.name}</h5>
                  </div>
                  <p className="service-description">{service.description}</p>
                  
                  <div className="service-features">
                    <h6>Caractéristiques :</h6>
                    <ul>
                      {service.features.map((feature, idx) => (
                        <li key={idx}>
                          <FaCheckCircle size={10} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-pricing">
                    <h6>Tarifs :</h6>
                    <div className="pricing-list">
                      {service.pricing.map((item, idx) => (
                        <div key={idx} className="pricing-item">
                          <span className="pricing-type">{item.type}</span>
                          <span className="pricing-value">
                            {item.price === 0 ? 'Gratuit' : `${item.price} FCFA`}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="btn btn-warning btn-sm">
                    <Icon size={14} className="me-2" />
                    Utiliser ce service
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="equipment-section">
        <div className="container">
          <div className="section-header">
            <h3>Nos équipements</h3>
            <p>Matériel professionnel pour une qualité optimale</p>
          </div>
          <div className="equipment-grid">
            {equipment.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="equipment-card">
                  <div className="equipment-header">
                    <Icon className={`equipment-icon ${item.color}`} />
                    <div className="equipment-count">{item.count} unité{item.count > 1 ? 's' : ''}</div>
                  </div>
                  <h6>{item.name}</h6>
                  <p className="equipment-description">{item.description}</p>
                  <div className="equipment-specs">
                    <span className="specs-label">Spécifications :</span>
                    <ul>
                      {item.specs.map((spec, idx) => (
                        <li key={idx}>
                          <FaCog size={8} />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Input Methods */}
      <section className="input-section">
        <div className="container">
          <div className="section-header">
            <h3>Comment envoyer vos documents ?</h3>
            <p>Plusieurs méthodes pour transférer vos fichiers</p>
          </div>
          <div className="input-grid">
            {inputMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="input-card">
                  <Icon className={`input-icon ${method.color}`} />
                  <h6>{method.method}</h6>
                  <p className="input-description">{method.description}</p>
                  <div className="input-formats">
                    <span className="formats-label">Formats :</span>
                    <div className="formats-list">
                      {method.formats.map((format, idx) => (
                        <span key={idx} className="format-tag">{format}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Usage Guide */}
      <section className="guide-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="guide-card">
                <h4>
                  <FaUpload className="me-2" />
                  Comment imprimer ?
                </h4>
                <div className="steps-list">
                  <div className="step-item">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <strong>Préparez votre document</strong>
                      <p>Formats acceptés: PDF, Word, Excel, PowerPoint, Images</p>
                    </div>
                  </div>
                  <div className="step-item">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <strong>Transférez le fichier</strong>
                      <p>USB, email, cloud ou impression mobile</p>
                    </div>
                  </div>
                  <div className="step-item">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <strong>Configurez l'impression</strong>
                      <p>Format, couleur, recto-verso, nombre de copies</p>
                    </div>
                  </div>
                  <div className="step-item">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <strong>Payez et récupérez</strong>
                      <p>Espèces, carte bancaire ou compte étudiant</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="guide-card">
                <h4>
                  <FaCamera className="me-2" />
                  Comment scanner ?
                </h4>
                <div className="steps-list">
                  <div className="step-item">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <strong>Préparez vos documents</strong>
                      <p>Retirez agrafes et trombones, pages en bon état</p>
                    </div>
                  </div>
                  <div className="step-item">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <strong>Choisissez les paramètres</strong>
                      <p>Résolution, couleur/N&B, format de sortie</p>
                    </div>
                  </div>
                  <div className="step-item">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <strong>Lancez la numérisation</strong>
                      <p>Chargeur automatique ou vitre scanner</p>
                    </div>
                  </div>
                  <div className="step-item">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <strong>Récupérez le fichier</strong>
                      <p>USB, email ou téléchargement cloud</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                  Horaires de service
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
                <div className="service-note">
                  <FaInfoCircle className="note-icon" />
                  <p>Service en libre-service et assistance disponible</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tips-card">
                <h4>
                  <FaShieldAlt className="me-2" />
                  Conseils et recommandations
                </h4>
                <div className="tips-list">
                  <div className="tip-item">
                    <FaFileAlt className="tip-icon text-primary" />
                    <div>
                      <strong>Qualité optimale</strong>
                      <p>Utilisez des fichiers PDF pour une meilleure qualité d'impression</p>
                    </div>
                  </div>
                  <div className="tip-item">
                    <FaHdd className="tip-icon text-success" />
                    <div>
                      <strong>Sécurité des données</strong>
                      <p>Vos fichiers sont automatiquement supprimés après impression</p>
                    </div>
                  </div>
                  <div className="tip-item">
                    <FaDollarSign className="tip-icon text-warning" />
                    <div>
                      <strong>Économies</strong>
                      <p>Profitez des tarifs préférentiels pour les étudiants</p>
                    </div>
                  </div>
                  <div className="tip-item">
                    <FaUsers className="tip-icon text-info" />
                    <div>
                      <strong>Assistance</strong>
                      <p>Personnel disponible pour vous aider en cas de besoin</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .impression-container {
          background: var(--bg-primary);
          min-height: 100vh;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .impression-container .container {
          max-width: 1400px !important;
          margin: 0 auto !important;
          padding: 0 1rem !important;
          width: 100% !important;
        }

        .impression-hero {
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
        .services-section,
        .equipment-section,
        .input-section,
        .guide-section,
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

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
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
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0;
        }

        .service-description {
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }

        .service-features {
          margin-bottom: 1.5rem;
        }

        .service-features h6 {
          color: var(--text-primary);
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .service-features ul {
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

        .service-pricing {
          margin-bottom: 2rem;
        }

        .service-pricing h6 {
          color: var(--text-primary);
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .pricing-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .pricing-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 6px;
        }

        .pricing-type {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .pricing-value {
          color: var(--warning);
          font-weight: 600;
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

        .equipment-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .equipment-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .equipment-card:hover {
          transform: translateY(-2px);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .equipment-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .equipment-icon {
          font-size: 2rem;
        }

        .equipment-count {
          background: rgba(23, 162, 184, 0.1);
          color: #17a2b8;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .equipment-card h6 {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .equipment-description {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .specs-label {
          color: var(--text-primary);
          font-size: 0.8rem;
          font-weight: 600;
          display: block;
          margin-bottom: 0.5rem;
        }

        .equipment-specs ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .equipment-specs li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          margin-bottom: 0.25rem;
          font-size: 0.8rem;
        }

        .equipment-specs svg {
          color: #3b82f6;
        }

        .input-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .input-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .input-card:hover {
          transform: translateY(-2px);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .input-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .input-card h6 {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .input-description {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .formats-label {
          color: var(--text-primary);
          font-size: 0.8rem;
          font-weight: 600;
          display: block;
          margin-bottom: 0.5rem;
        }

        .formats-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
        }

        .format-tag {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          padding: 0.25rem 0.5rem;
          border-radius: 6px;
          font-size: 0.7rem;
          font-weight: 500;
        }

        .guide-card,
        .schedule-card,
        .tips-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
        }

        .guide-card h4,
        .schedule-card h4,
        .tips-card h4 {
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
        }

        .steps-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .step-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .step-number {
          width: 30px;
          height: 30px;
          background: var(--warning);
          color: var(--dark-900);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.9rem;
          flex-shrink: 0;
        }

        .step-content strong {
          color: var(--text-primary);
          font-size: 0.9rem;
          display: block;
          margin-bottom: 0.25rem;
        }

        .step-content p {
          color: var(--text-secondary);
          font-size: 0.8rem;
          margin: 0;
          line-height: 1.4;
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

        .service-note {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(23, 162, 184, 0.1);
          border-radius: 8px;
        }

        .note-icon {
          color: #17a2b8;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .service-note p {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin: 0;
        }

        .tips-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .tip-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .tip-icon {
          font-size: 1.25rem;
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        .tip-item strong {
          color: var(--text-primary);
          font-size: 0.9rem;
          display: block;
          margin-bottom: 0.25rem;
        }

        .tip-item p {
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
          
          .services-grid,
          .equipment-grid,
          .input-grid {
            grid-template-columns: 1fr;
          }
          
          .service-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
          
          .equipment-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          
          .schedule-item {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .formats-list {
            justify-content: flex-start;
          }
        }
      `}</style>
    </div>
  );
};

export default Impression;