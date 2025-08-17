import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaSearch, 
  FaQuestionCircle,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaDatabase,
  FaBook,
  FaLightbulb,
  FaHandsHelping,
  FaClock,
  FaCalendar,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaComments,
  FaVideo,
  FaFileAlt,
  FaCheckCircle,
  FaUsers,
  FaGraduationCap,
  FaInfoCircle
} from 'react-icons/fa';

const Aide = () => {
  const [selectedService, setSelectedService] = useState('all');

  const services = [
    {
      id: 'consultation',
      title: 'Consultation personnalisée',
      description: 'Rendez-vous individuel avec un bibliothécaire spécialisé',
      duration: '30-60 min',
      type: 'Sur RDV',
      features: [
        'Stratégie de recherche personnalisée',
        'Orientation disciplinaire',
        'Aide méthodologique',
        'Recommandations de sources'
      ],
      icon: FaUserGraduate,
      color: 'text-primary',
      popular: true
    },
    {
      id: 'formation',
      title: 'Formation en groupe',
      description: 'Ateliers collectifs sur les techniques de recherche',
      duration: '2-3h',
      type: 'Programmé',
      features: [
        'Recherche documentaire avancée',
        'Utilisation des bases de données',
        'Citation et bibliographie',
        'Outils de veille'
      ],
      icon: FaChalkboardTeacher,
      color: 'text-success'
    },
    {
      id: 'urgence',
      title: 'Aide express',
      description: 'Support rapide pour questions ponctuelles',
      duration: '10-15 min',
      type: 'Sans RDV',
      features: [
        'Questions courtes',
        'Orientation rapide',
        'Localisation de documents',
        'Aide technique basique'
      ],
      icon: FaLightbulb,
      color: 'text-warning'
    },
    {
      id: 'numerique',
      title: 'Assistance numérique',
      description: 'Aide pour les ressources et outils numériques',
      duration: '20-45 min',
      type: 'Flexible',
      features: [
        'Accès aux bases de données',
        'Téléchargement de documents',
        'Outils de recherche en ligne',
        'Problèmes techniques'
      ],
      icon: FaDatabase,
      color: 'text-info'
    }
  ];

  const contactMethods = [
    {
      method: 'En personne',
      description: 'Accueil et bureau des bibliothécaires',
      details: 'Lun-Ven: 8h-20h, Sam: 8h-18h',
      icon: FaMapMarkerAlt,
      color: 'text-primary'
    },
    {
      method: 'Par téléphone',
      description: '+237 233 000 000',
      details: 'Service disponible aux heures d\'ouverture',
      icon: FaPhone,
      color: 'text-success'
    },
    {
      method: 'Par email',
      description: 'aide@bibliotheque-ztf.org',
      details: 'Réponse sous 24h',
      icon: FaEnvelope,
      color: 'text-warning'
    },
    {
      method: 'Chat en ligne',
      description: 'Messagerie instantanée',
      details: 'Lun-Ven: 9h-17h',
      icon: FaComments,
      color: 'text-info'
    }
  ];

  const specializations = [
    {
      domain: 'Théologie',
      librarian: 'Dr. Marie Essomba',
      expertise: ['Théologie biblique', 'Patristique', 'Théologie africaine'],
      availability: 'Mar-Jeu 14h-17h'
    },
    {
      domain: 'Histoire',
      librarian: 'Prof. Jean-Paul Mbarga',
      expertise: ['Histoire du Cameroun', 'Histoire coloniale', 'Méthodologie historique'],
      availability: 'Lun-Mer 9h-12h'
    },
    {
      domain: 'Philosophie',
      librarian: 'Dr. Emmanuel Ngwé',
      expertise: ['Philosophie africaine', 'Éthique', 'Philosophie contemporaine'],
      availability: 'Ven 14h-18h'
    }
  ];

  const stats = [
    { label: 'Consultations par mois', value: '800+', icon: FaUserGraduate },
    { label: 'Taux de satisfaction', value: '96%', icon: FaCheckCircle },
    { label: 'Temps de réponse moyen', value: '< 2h', icon: FaClock },
    { label: 'Domaines couverts', value: '15+', icon: FaBook }
  ];

  const filteredServices = selectedService === 'all' 
    ? services 
    : services.filter(s => s.id === selectedService);

  return (
    <div className="aide-container">
      {/* Hero Section */}
      <section className="aide-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="hero-content">
                <div className="hero-badge">
                  <FaHandsHelping size={12} className="me-2" />
                  Aide à la Recherche
                </div>
                <h1 className="hero-title">
                  <span className="text-warning">Aide</span> à la Recherche
                </h1>
                <p className="hero-subtitle">
                  Nos bibliothécaires spécialisés vous accompagnent dans vos recherches. 
                  Consultations personnalisées, formations et support technique.
                </p>
                <div className="hero-actions">
                  <button className="btn btn-warning">
                    <FaCalendar size={14} className="me-2" />
                    Prendre RDV
                  </button>
                  <Link to="/contact" className="btn btn-outline-warning">
                    <FaInfoCircle size={14} className="me-2" />
                    Nous contacter
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

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h3>Nos Services d'Aide</h3>
            <p>Choisissez le type d'assistance qui correspond à vos besoins</p>
          </div>
          
          <div className="filter-tabs">
            <button 
              className={`filter-tab ${selectedService === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedService('all')}
            >
              Tous les services
            </button>
            {services.map(service => (
              <button 
                key={service.id}
                className={`filter-tab ${selectedService === service.id ? 'active' : ''}`}
                onClick={() => setSelectedService(service.id)}
              >
                {service.title}
              </button>
            ))}
          </div>

          <div className="services-grid">
            {filteredServices.map(service => {
              const Icon = service.icon;
              return (
                <div key={service.id} className="service-card">
                  {service.popular && (
                    <div className="popular-badge">Populaire</div>
                  )}
                  <div className="service-header">
                    <Icon className={`service-icon ${service.color}`} />
                    <div className="service-meta">
                      <h5>{service.title}</h5>
                      <div className="service-details">
                        <span className="duration">
                          <FaClock size={12} />
                          {service.duration}
                        </span>
                        <span className="type">{service.type}</span>
                      </div>
                    </div>
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
                  <div className="service-actions">
                    <button className="btn btn-warning btn-sm">
                      <FaCalendar size={14} className="me-2" />
                      Réserver
                    </button>
                    <button className="btn btn-outline-secondary btn-sm">
                      <FaInfoCircle size={14} className="me-2" />
                      Détails
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="contact-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="contact-card">
                <h3>Comment nous contacter ?</h3>
                <div className="contact-methods">
                  {contactMethods.map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                      <div key={index} className="contact-method">
                        <Icon className={`contact-icon ${contact.color}`} />
                        <div className="contact-info">
                          <h5>{contact.method}</h5>
                          <p className="contact-desc">{contact.description}</p>
                          <span className="contact-details">{contact.details}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="quick-help">
                <h4>Aide rapide</h4>
                <div className="help-options">
                  <Link to="/ressources" className="help-option">
                    <FaDatabase className="help-icon" />
                    <div>
                      <strong>Bases de données</strong>
                      <p>Accès aux ressources numériques</p>
                    </div>
                  </Link>
                  <Link to="/formations" className="help-option">
                    <FaGraduationCap className="help-icon" />
                    <div>
                      <strong>Formations</strong>
                      <p>Ateliers de recherche documentaire</p>
                    </div>
                  </Link>
                  <Link to="/guides" className="help-option">
                    <FaFileAlt className="help-icon" />
                    <div>
                      <strong>Guides</strong>
                      <p>Tutoriels et méthodes</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="specializations-section">
        <div className="container">
          <div className="section-header">
            <h3>Bibliothécaires spécialisés</h3>
            <p>Expertise disciplinaire pour un accompagnement ciblé</p>
          </div>
          <div className="specializations-grid">
            {specializations.map((spec, index) => (
              <div key={index} className="specialization-card">
                <div className="spec-header">
                  <FaBook className="spec-icon text-primary" />
                  <h5>{spec.domain}</h5>
                </div>
                <div className="librarian-info">
                  <h6>{spec.librarian}</h6>
                  <div className="expertise">
                    {spec.expertise.map((exp, idx) => (
                      <span key={idx} className="expertise-tag">{exp}</span>
                    ))}
                  </div>
                  <div className="availability">
                    <FaClock size={12} />
                    <span>{spec.availability}</span>
                  </div>
                </div>
                <button className="btn btn-outline-primary btn-sm">
                  <FaCalendar size={14} className="me-2" />
                  Prendre RDV
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .aide-container {
          background: var(--bg-primary);
          min-height: 100vh;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .aide-container .container {
          max-width: 1400px !important;
          margin: 0 auto !important;
          padding: 0 1rem !important;
          width: 100% !important;
        }

        .aide-hero {
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

        .services-section,
        .contact-section,
        .specializations-section {
          padding: 3rem 0;
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

        .filter-tabs {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
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
        }

        .filter-tab:hover,
        .filter-tab.active {
          background: var(--warning);
          color: var(--dark-900);
          border-color: var(--warning);
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
          position: relative;
          transition: all 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-4px);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .popular-badge {
          position: absolute;
          top: -8px;
          right: 1rem;
          background: var(--warning);
          color: var(--dark-900);
          font-size: 0.7rem;
          font-weight: 600;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
        }

        .service-header {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .service-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        .service-meta h5 {
          color: var(--text-primary);
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .service-details {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .duration {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--text-tertiary);
          font-size: 0.8rem;
        }

        .type {
          background: rgba(23, 162, 184, 0.1);
          color: #17a2b8;
          padding: 0.25rem 0.5rem;
          border-radius: 8px;
          font-size: 0.7rem;
          font-weight: 600;
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
          flex-shrink: 0;
        }

        .service-actions {
          display: flex;
          gap: 1rem;
        }

        .contact-card,
        .quick-help {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
        }

        .contact-card h3,
        .quick-help h4 {
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 2rem;
        }

        .contact-methods {
          display: grid;
          gap: 1.5rem;
        }

        .contact-method {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .contact-icon {
          font-size: 1.25rem;
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        .contact-info h5 {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .contact-desc {
          color: var(--text-secondary);
          margin-bottom: 0.25rem;
        }

        .contact-details {
          color: var(--text-tertiary);
          font-size: 0.875rem;
        }

        .help-options {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .help-option {
          display: flex;
          gap: 1rem;
          align-items: center;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .help-option:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateX(4px);
        }

        .help-icon {
          color: var(--warning);
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .help-option strong {
          color: var(--text-primary);
          font-size: 0.9rem;
          display: block;
          margin-bottom: 0.25rem;
        }

        .help-option p {
          color: var(--text-secondary);
          font-size: 0.8rem;
          margin: 0;
        }

        .specializations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .specialization-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .specialization-card:hover {
          transform: translateY(-2px);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .spec-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .spec-icon {
          font-size: 1.1rem;
        }

        .spec-header h5 {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          margin: 0;
        }

        .librarian-info h6 {
          color: var(--text-primary);
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .expertise {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .expertise-tag {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          padding: 0.25rem 0.5rem;
          border-radius: 6px;
          font-size: 0.7rem;
          font-weight: 500;
        }

        .availability {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-tertiary);
          font-size: 0.8rem;
          margin-bottom: 1rem;
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

        .btn-outline-primary {
          background: transparent;
          border: 1px solid #3b82f6;
          color: #3b82f6;
        }

        .btn-outline-primary:hover {
          background: #3b82f6;
          color: white;
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
          .specializations-grid {
            grid-template-columns: 1fr;
          }
          
          .service-actions {
            flex-direction: column;
          }
          
          .contact-method {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
};

export default Aide;