import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaWifi,
  FaLock,
  FaShieldAlt,
  FaKey,
  FaLaptop,
  FaMobile,
  FaTabletAlt,
  FaDesktop,
  FaSignal,
  FaRocket,
  FaUserCheck,
  FaClock,
  FaMapMarkerAlt,
  FaInfoCircle,
  FaCheckCircle,
  FaTimesCircle,
  FaCog,
  FaPhone,
  FaEnvelope,
  FaQuestionCircle,
  FaExclamationTriangle,
  FaDownload,
  FaUpload,
  FaBan,
  FaFileAlt,
  FaGamepad,
  FaVideo
} from 'react-icons/fa';

const Wifi = () => {
  const [selectedNetwork, setSelectedNetwork] = useState('student');

  const networks = [
    {
      id: 'student',
      name: 'BibliZTF-Student',
      description: 'Réseau pour étudiants et personnel',
      security: 'WPA2-Enterprise',
      speed: '100 Mbps',
      coverage: 'Tout le bâtiment',
      devices: 3,
      timeLimit: '12h/jour',
      access: [
        'Navigation web',
        'Email et messagerie',
        'Ressources pédagogiques',
        'Streaming éducatif',
        'Réseaux sociaux (limité)'
      ],
      restrictions: [
        'Pas de P2P/Torrent',
        'Streaming vidéo limité',
        'Jeux en ligne bloqués',
        'Sites malveillants filtrés'
      ],
      icon: FaLaptop,
      color: 'text-primary',
      popular: true
    },
    {
      id: 'guest',
      name: 'BibliZTF-Guest',
      description: 'Accès invités temporaire',
      security: 'WPA2-PSK',
      speed: '50 Mbps',
      coverage: 'Espaces publics',
      devices: 2,
      timeLimit: '4h/jour',
      access: [
        'Navigation web basique',
        'Email',
        'Moteurs de recherche',
        'Sites éducatifs'
      ],
      restrictions: [
        'Bande passante limitée',
        'Pas de téléchargements',
        'Durée limitée',
        'Filtrage strict'
      ],
      icon: FaMobile,
      color: 'text-success',
      popular: false
    },
    {
      id: 'research',
      name: 'BibliZTF-Research',
      description: 'Réseau haute performance recherche',
      security: 'WPA2-Enterprise + VPN',
      speed: '1 Gbps',
      coverage: 'Salles de recherche',
      devices: 5,
      timeLimit: 'Illimité',
      access: [
        'Accès bases de données',
        'Serveurs de calcul',
        'Transferts volumineux',
        'Visioconférence HD',
        'Accès VPN distant'
      ],
      restrictions: [
        'Usage académique uniquement',
        'Monitoring avancé',
        'Autorisation préalable'
      ],
      icon: FaRocket,
      color: 'text-warning',
      popular: false
    }
  ];

  const connectionSteps = [
    {
      step: 1,
      title: 'Sélectionnez le réseau',
      description: 'Choisissez "BibliZTF-Student" dans la liste WiFi',
      icon: FaWifi
    },
    {
      step: 2,
      title: 'Entrez vos identifiants',
      description: 'Utilisez votre login et mot de passe étudiant',
      icon: FaKey
    },
    {
      step: 3,
      title: 'Acceptez le certificat',
      description: 'Validez le certificat de sécurité',
      icon: FaShieldAlt
    },
    {
      step: 4,
      title: 'Confirmez la connexion',
      description: 'Vous êtes connecté et prêt à naviguer',
      icon: FaCheckCircle
    }
  ];

  const supportedDevices = [
    {
      type: 'Ordinateurs portables',
      compatibility: 'Windows, macOS, Linux',
      instructions: 'Configuration automatique',
      icon: FaLaptop,
      color: 'text-primary'
    },
    {
      type: 'Smartphones',
      compatibility: 'iOS, Android',
      instructions: 'Guide d\'installation disponible',
      icon: FaMobile,
      color: 'text-success'
    },
    {
      type: 'Tablettes',
      compatibility: 'iPad, Android, Windows',
      instructions: 'Configuration manuelle possible',
      icon: FaTabletAlt,
      color: 'text-warning'
    },
    {
      type: 'Autres appareils',
      compatibility: 'Console, liseuse, IoT',
      instructions: 'Support technique requis',
      icon: FaDesktop,
      color: 'text-info'
    }
  ];

  const coverage = [
    {
      zone: 'Salles de lecture',
      signal: 'Excellent',
      speed: '100 Mbps',
      devices: '200+',
      status: 'optimal'
    },
    {
      zone: 'Cafétéria',
      signal: 'Très bon',
      speed: '80 Mbps',
      devices: '50+',
      status: 'good'
    },
    {
      zone: 'Salles de groupe',
      signal: 'Excellent',
      speed: '100 Mbps',
      devices: '60+',
      status: 'optimal'
    },
    {
      zone: 'Couloirs',
      signal: 'Bon',
      speed: '60 Mbps',
      devices: '30+',
      status: 'average'
    },
    {
      zone: 'Espaces extérieurs',
      signal: 'Variable',
      speed: '40 Mbps',
      devices: '20+',
      status: 'limited'
    }
  ];

  const stats = [
    { label: 'Points d\'accès', value: '45', icon: FaWifi },
    { label: 'Utilisateurs connectés', value: '320', icon: FaUserCheck },
    { label: 'Débit maximal', value: '1 Gbps', icon: FaRocket },
    { label: 'Disponibilité', value: '99.8%', icon: FaCheckCircle }
  ];

  const filteredNetwork = networks.find(n => n.id === selectedNetwork);

  return (
    <div className="wifi-container">
      {/* Hero Section */}
      <section className="wifi-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="hero-content">
                <div className="hero-badge">
                  <FaWifi size={12} className="me-2" />
                  WiFi & Accès Internet
                </div>
                <h1 className="hero-title">
                  <span className="text-warning">WiFi</span> & Accès Internet
                </h1>
                <p className="hero-subtitle">
                  Connexion Internet haut débit gratuite et sécurisée. 45 points d'accès, 
                  couverture complète et support technique pour tous vos appareils.
                </p>
                <div className="hero-actions">
                  <button className="btn btn-warning">
                    <FaWifi size={14} className="me-2" />
                    Se connecter
                  </button>
                  <Link to="/contact" className="btn btn-outline-warning">
                    <FaQuestionCircle size={14} className="me-2" />
                    Aide connexion
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

      {/* Current Status */}
      <section className="status-section">
        <div className="container">
          <div className="status-card">
            <div className="row align-items-center g-4">
              <div className="col-lg-4">
                <div className="network-status">
                  <h4>État du réseau</h4>
                  <div className="status-display">
                    <FaCheckCircle className="status-icon text-success" />
                    <span className="status-text">Opérationnel</span>
                  </div>
                  <div className="status-details">
                    <div className="detail-item">
                      <span>Débit moyen:</span>
                      <span className="detail-value">85 Mbps</span>
                    </div>
                    <div className="detail-item">
                      <span>Latence:</span>
                      <span className="detail-value">12 ms</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="usage-stats">
                  <h4>Utilisation actuelle</h4>
                  <div className="usage-bar">
                    <div className="usage-fill" style={{width: '67%'}}></div>
                  </div>
                  <div className="usage-text">
                    67% de la bande passante utilisée
                  </div>
                  <div className="users-count">
                    320 utilisateurs connectés
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="maintenance-info">
                  <h4>Maintenance</h4>
                  <div className="maintenance-status">
                    <FaInfoCircle className="maintenance-icon" />
                    <div>
                      <strong>Prochaine maintenance</strong>
                      <p>Dimanche 3h-5h du matin</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Network Selection */}
      <section className="networks-section">
        <div className="container">
          <div className="section-header">
            <h3>Nos réseaux WiFi</h3>
            <p>Choisissez le réseau adapté à votre profil</p>
          </div>

          <div className="network-tabs">
            {networks.map(network => {
              const Icon = network.icon;
              return (
                <button 
                  key={network.id}
                  className={`network-tab ${selectedNetwork === network.id ? 'active' : ''}`}
                  onClick={() => setSelectedNetwork(network.id)}
                >
                  <Icon size={16} />
                  <span>{network.name}</span>
                  {network.popular && <span className="popular-badge">Populaire</span>}
                </button>
              );
            })}
          </div>

          {filteredNetwork && (
            <div className="network-details">
              <div className="row g-4">
                <div className="col-lg-8">
                  <div className="network-card">
                    <div className="network-header">
                      <div className="network-title">
                        <filteredNetwork.icon className={`network-icon ${filteredNetwork.color}`} />
                        <h5>{filteredNetwork.name}</h5>
                      </div>
                      <div className="network-security">
                        <FaShieldAlt className="security-icon" />
                        {filteredNetwork.security}
                      </div>
                    </div>
                    
                    <p className="network-description">{filteredNetwork.description}</p>

                    <div className="network-specs">
                      <div className="spec-item">
                        <FaRocket className="spec-icon" />
                        <span>Vitesse: {filteredNetwork.speed}</span>
                      </div>
                      <div className="spec-item">
                        <FaMapMarkerAlt className="spec-icon" />
                        <span>Couverture: {filteredNetwork.coverage}</span>
                      </div>
                      <div className="spec-item">
                        <FaDesktop className="spec-icon" />
                        <span>Appareils: {filteredNetwork.devices} max</span>
                      </div>
                      <div className="spec-item">
                        <FaClock className="spec-icon" />
                        <span>Durée: {filteredNetwork.timeLimit}</span>
                      </div>
                    </div>

                    <div className="network-access">
                      <h6>Services autorisés :</h6>
                      <ul>
                        {filteredNetwork.access.map((item, idx) => (
                          <li key={idx}>
                            <FaCheckCircle size={12} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="network-restrictions">
                      <h6>Restrictions :</h6>
                      <ul>
                        {filteredNetwork.restrictions.map((item, idx) => (
                          <li key={idx}>
                            <FaBan size={12} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="connection-guide">
                    <h5>Comment se connecter ?</h5>
                    <div className="steps-list">
                      {connectionSteps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                          <div key={index} className="step-item">
                            <div className="step-number">{step.step}</div>
                            <Icon className="step-icon" />
                            <div className="step-content">
                              <strong>{step.title}</strong>
                              <p>{step.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Coverage Map */}
      <section className="coverage-section">
        <div className="container">
          <div className="section-header">
            <h3>Couverture réseau</h3>
            <p>Qualité du signal dans chaque zone de la bibliothèque</p>
          </div>
          <div className="coverage-grid">
            {coverage.map((zone, index) => (
              <div key={index} className="coverage-card">
                <div className="coverage-header">
                  <h6>{zone.zone}</h6>
                  <div className={`signal-indicator ${zone.status}`}>
                    <FaSignal className="signal-icon" />
                    {zone.signal}
                  </div>
                </div>
                <div className="coverage-details">
                  <div className="detail-row">
                    <span>Vitesse:</span>
                    <span className="detail-value">{zone.speed}</span>
                  </div>
                  <div className="detail-row">
                    <span>Appareils connectés:</span>
                    <span className="detail-value">{zone.devices}</span>
                  </div>
                </div>
                <div className="signal-bars">
                  <div className={`bar ${zone.status === 'optimal' || zone.status === 'good' ? 'filled' : ''}`}></div>
                  <div className={`bar ${zone.status === 'optimal' || zone.status === 'good' ? 'filled' : ''}`}></div>
                  <div className={`bar ${zone.status === 'optimal' ? 'filled' : ''}`}></div>
                  <div className={`bar ${zone.status === 'optimal' ? 'filled' : ''}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Device Support */}
      <section className="devices-section">
        <div className="container">
          <div className="section-header">
            <h3>Compatibilité des appareils</h3>
            <p>Instructions de connexion par type d'appareil</p>
          </div>
          <div className="devices-grid">
            {supportedDevices.map((device, index) => {
              const Icon = device.icon;
              return (
                <div key={index} className="device-card">
                  <Icon className={`device-icon ${device.color}`} />
                  <h6>{device.type}</h6>
                  <p className="device-compatibility">{device.compatibility}</p>
                  <div className="device-instructions">
                    <FaFileAlt className="instructions-icon" />
                    <span>{device.instructions}</span>
                  </div>
                  <button className="btn btn-outline-warning btn-sm">
                    <FaDownload size={12} className="me-2" />
                    Guide PDF
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="support-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="troubleshooting-card">
                <h4>
                  <FaCog className="me-2" />
                  Problèmes courants
                </h4>
                <div className="problems-list">
                  <div className="problem-item">
                    <FaTimesCircle className="problem-icon text-danger" />
                    <div>
                      <strong>Impossible de se connecter</strong>
                      <p>Vérifiez vos identifiants et redémarrez le WiFi</p>
                    </div>
                  </div>
                  <div className="problem-item">
                    <FaSignal className="problem-icon text-warning" />
                    <div>
                      <strong>Signal faible</strong>
                      <p>Rapprochez-vous d'un point d'accès ou changez de zone</p>
                    </div>
                  </div>
                  <div className="problem-item">
                    <FaRocket className="problem-icon text-info" />
                    <div>
                      <strong>Connexion lente</strong>
                      <p>Fermez les applications non nécessaires</p>
                    </div>
                  </div>
                  <div className="problem-item">
                    <FaExclamationTriangle className="problem-icon text-warning" />
                    <div>
                      <strong>Sites bloqués</strong>
                      <p>Consultez la charte d'utilisation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="support-contact">
                <h4>
                  <FaQuestionCircle className="me-2" />
                  Besoin d'aide ?
                </h4>
                <div className="contact-methods">
                  <div className="contact-item">
                    <FaPhone className="contact-icon text-success" />
                    <div>
                      <strong>Support technique</strong>
                      <p>+237 233 000 002 (ext. 505)</p>
                      <span className="availability">Lun-Ven 8h-18h</span>
                    </div>
                  </div>
                  <div className="contact-item">
                    <FaEnvelope className="contact-icon text-primary" />
                    <div>
                      <strong>Email</strong>
                      <p>support-wifi@bibliotheque-ztf.org</p>
                      <span className="availability">Réponse sous 4h</span>
                    </div>
                  </div>
                  <div className="contact-item">
                    <FaUserCheck className="contact-icon text-warning" />
                    <div>
                      <strong>Assistance sur place</strong>
                      <p>Bureau d'accueil - Rez-de-chaussée</p>
                      <span className="availability">Tous les jours 8h-20h</span>
                    </div>
                  </div>
                </div>
                
                <div className="quick-links">
                  <h5>Ressources utiles</h5>
                  <Link to="/guides" className="quick-link">
                    <FaFileAlt className="link-icon" />
                    Guides de configuration
                  </Link>
                  <Link to="/charte" className="quick-link">
                    <FaShieldAlt className="link-icon" />
                    Charte d'utilisation
                  </Link>
                  <Link to="/faq" className="quick-link">
                    <FaQuestionCircle className="link-icon" />
                    FAQ technique
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .wifi-container {
          background: var(--bg-primary);
          min-height: 100vh;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .wifi-container .container {
          max-width: 1400px !important;
          margin: 0 auto !important;
          padding: 0 1rem !important;
          width: 100% !important;
        }

        .wifi-hero {
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

        .status-section,
        .networks-section,
        .coverage-section,
        .devices-section,
        .support-section {
          padding: 3rem 0;
        }

        .status-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
        }

        .network-status h4,
        .usage-stats h4,
        .maintenance-info h4 {
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

        .status-details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .detail-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .detail-value {
          color: var(--text-primary);
          font-weight: 600;
        }

        .usage-bar {
          width: 100%;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 0.5rem;
        }

        .usage-fill {
          height: 100%;
          background: linear-gradient(90deg, #22c55e, #3b82f6);
          transition: width 0.3s ease;
        }

        .usage-text {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
        }

        .users-count {
          color: var(--text-primary);
          font-weight: 600;
          font-size: 0.9rem;
        }

        .maintenance-status {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .maintenance-icon {
          color: #17a2b8;
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .maintenance-status strong {
          color: var(--text-primary);
          font-size: 0.9rem;
          display: block;
        }

        .maintenance-status p {
          color: var(--text-secondary);
          font-size: 0.8rem;
          margin: 0;
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

        .network-tabs {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .network-tab {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-secondary);
          padding: 1rem 1.5rem;
          border-radius: 12px;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.3s ease;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          position: relative;
        }

        .network-tab:hover,
        .network-tab.active {
          background: var(--warning);
          color: var(--dark-900);
          border-color: var(--warning);
        }

        .popular-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          background: #ef4444;
          color: white;
          font-size: 0.6rem;
          font-weight: 600;
          padding: 0.2rem 0.4rem;
          border-radius: 6px;
        }

        .network-details {
          margin-top: 2rem;
        }

        .network-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
        }

        .network-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .network-title {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .network-icon {
          font-size: 1.5rem;
        }

        .network-title h5 {
          color: var(--text-primary);
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0;
        }

        .network-security {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .security-icon {
          font-size: 1rem;
        }

        .network-description {
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 2rem;
        }

        .network-specs {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .spec-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .spec-icon {
          color: var(--warning);
          font-size: 1rem;
        }

        .network-access,
        .network-restrictions {
          margin-bottom: 1.5rem;
        }

        .network-access h6,
        .network-restrictions h6 {
          color: var(--text-primary);
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .network-access ul,
        .network-restrictions ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 0.5rem;
        }

        .network-access li,
        .network-restrictions li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .network-access svg {
          color: #22c55e;
        }

        .network-restrictions svg {
          color: #ef4444;
        }

        .connection-guide {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
        }

        .connection-guide h5 {
          color: var(--text-primary);
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 2rem;
        }

        .steps-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .step-item {
          display: flex;
          align-items: center;
          gap: 1rem;
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

        .step-icon {
          color: var(--warning);
          font-size: 1.2rem;
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
        }

        .coverage-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .coverage-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .coverage-card:hover {
          transform: translateY(-2px);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .coverage-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .coverage-header h6 {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          margin: 0;
        }

        .signal-indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
        }

        .signal-indicator.optimal {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
        }

        .signal-indicator.good {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
        }

        .signal-indicator.average {
          background: rgba(245, 158, 11, 0.1);
          color: #f59e0b;
        }

        .signal-indicator.limited {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }

        .signal-icon {
          font-size: 0.9rem;
        }

        .coverage-details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .detail-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .signal-bars {
          display: flex;
          gap: 0.25rem;
          align-items: end;
          height: 20px;
        }

        .bar {
          width: 6px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 3px;
          transition: all 0.3s ease;
        }

        .bar:nth-child(1) { height: 25%; }
        .bar:nth-child(2) { height: 50%; }
        .bar:nth-child(3) { height: 75%; }
        .bar:nth-child(4) { height: 100%; }

        .bar.filled {
          background: #22c55e;
        }

        .devices-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .device-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .device-card:hover {
          transform: translateY(-2px);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .device-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .device-card h6 {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .device-compatibility {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .device-instructions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          justify-content: center;
          color: var(--text-tertiary);
          font-size: 0.8rem;
          margin-bottom: 1.5rem;
        }

        .instructions-icon {
          color: var(--warning);
        }

        .troubleshooting-card,
        .support-contact {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
        }

        .troubleshooting-card h4,
        .support-contact h4 {
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
        }

        .problems-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .problem-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .problem-icon {
          font-size: 1.25rem;
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        .problem-item strong {
          color: var(--text-primary);
          font-size: 0.9rem;
          display: block;
          margin-bottom: 0.25rem;
        }

        .problem-item p {
          color: var(--text-secondary);
          font-size: 0.8rem;
          margin: 0;
          line-height: 1.4;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .contact-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .contact-icon {
          font-size: 1.25rem;
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        .contact-item strong {
          color: var(--text-primary);
          font-size: 0.9rem;
          display: block;
          margin-bottom: 0.25rem;
        }

        .contact-item p {
          color: var(--text-secondary);
          font-size: 0.8rem;
          margin-bottom: 0.25rem;
        }

        .availability {
          color: var(--text-tertiary);
          font-size: 0.75rem;
          font-style: italic;
        }

        .quick-links h5 {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1rem;
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
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
        }

        .quick-link:hover {
          background: rgba(255, 255, 255, 0.08);
          color: var(--text-primary);
          transform: translateX(4px);
        }

        .link-icon {
          color: var(--warning);
          font-size: 1rem;
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
          
          .network-tabs {
            justify-content: flex-start;
            overflow-x: auto;
            padding-bottom: 1rem;
          }
          
          .network-specs,
          .coverage-grid,
          .devices-grid {
            grid-template-columns: 1fr;
          }
          
          .network-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          
          .coverage-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
          
          .steps-list .step-item {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Wifi;