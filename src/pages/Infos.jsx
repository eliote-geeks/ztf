import React from 'react';
import { 
  FaInfoCircle, 
  FaClock, 
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaUsers,
  FaBuilding,
  FaParking,
  FaWifi,
  FaAccessibleIcon,
  FaBook,
  FaCoffee,
  FaDesktop,
  FaPrint,
  FaShieldAlt,
  FaFileAlt,
  FaSitemap,
  FaGavel
} from 'react-icons/fa';

const Infos = () => {
  const openingHours = [
    { day: 'Lundi - Vendredi', hours: '08:00 - 20:00', type: 'normal' },
    { day: 'Samedi', hours: '09:00 - 17:00', type: 'weekend' },
    { day: 'Dimanche', hours: 'Fermé', type: 'closed' }
  ];

  const specialHours = [
    { period: 'Vacances universitaires', hours: '09:00 - 16:00' },
    { period: 'Jours fériés nationaux', hours: 'Fermé' },
    { period: 'Période d\'examens', hours: '07:00 - 22:00' }
  ];

  const contactInfo = [
    {
      type: 'Adresse',
      icon: FaMapMarkerAlt,
      value: 'Campus Universitaire, BP 8594\nYaoundé, Cameroun',
      color: 'danger'
    },
    {
      type: 'Téléphone',
      icon: FaPhone,
      value: '+237 222 234 567\n+237 699 123 456',
      color: 'success'
    },
    {
      type: 'Email',
      icon: FaEnvelope,
      value: 'contact@bibliotheque-ztf.org\ninfo@bibliotheque-ztf.org',
      color: 'warning'
    },
    {
      type: 'Site Web',
      icon: FaGlobe,
      value: 'www.bibliotheque-ztf.org',
      color: 'info'
    }
  ];

  const services = [
    {
      title: 'Salle de lecture principale',
      description: 'Espace silencieux avec 200 places assises',
      icon: FaBook,
      capacity: '200 places',
      features: ['Wifi gratuit', 'Prises électriques', 'Climatisation']
    },
    {
      title: 'Espace multimédia',
      description: '20 postes informatiques avec accès internet',
      icon: FaDesktop,
      capacity: '20 postes',
      features: ['Logiciels bureautiques', 'Accès bases de données', 'Impression']
    },
    {
      title: 'Salles de travail en groupe',
      description: '6 salles pour travaux collaboratifs',
      icon: FaUsers,
      capacity: '4-8 personnes',
      features: ['Tableaux blancs', 'Vidéoprojecteurs', 'Réservation en ligne']
    },
    {
      title: 'Cafétéria',
      description: 'Espace détente avec distributeurs',
      icon: FaCoffee,
      capacity: '30 places',
      features: ['Boissons chaudes', 'Snacks', 'Micro-ondes']
    }
  ];

  const facilities = [
    { name: 'Parking gratuit', icon: FaParking, available: true },
    { name: 'Wifi haut débit', icon: FaWifi, available: true },
    { name: 'Accès PMR', icon: FaAccessibleIcon, available: true },
    { name: 'Climatisation', icon: FaBuilding, available: true },
    { name: 'Impression/Scanner', icon: FaPrint, available: true },
    { name: 'Consignes sécurisées', icon: FaShieldAlt, available: true }
  ];

  const regulations = [
    {
      title: 'Conditions d\'accès',
      items: [
        'Carte d\'étudiant ou de chercheur obligatoire',
        'Visiteurs externes sur autorisation',
        'Horaires d\'accès respecter strictement'
      ]
    },
    {
      title: 'Usage des ressources',
      items: [
        'Consultation libre des ouvrages en salle',
        'Emprunt limité selon le statut',
        'Reproduction soumise au droit d\'auteur'
      ]
    },
    {
      title: 'Comportement',
      items: [
        'Silence obligatoire en salle de lecture',
        'Téléphones en mode silencieux',
        'Interdiction de manger en salle'
      ]
    }
  ];

  const legalPages = [
    { title: 'Conditions générales d\'utilisation', icon: FaFileAlt, link: '/legal/cgu' },
    { title: 'Politique de confidentialité', icon: FaShieldAlt, link: '/legal/privacy' },
    { title: 'Mentions légales', icon: FaGavel, link: '/legal/mentions' },
    { title: 'Plan du site', icon: FaSitemap, link: '/sitemap' }
  ];

  const libraryMap = {
    floors: [
      {
        name: 'Rez-de-chaussée',
        areas: [
          'Accueil et renseignements',
          'Salle de lecture principale',
          'Collections générales',
          'Périodiques actuels'
        ]
      },
      {
        name: '1er étage',
        areas: [
          'Espace multimédia',
          'Salles de travail en groupe',
          'Collections spécialisées',
          'Bureau des bibliothécaires'
        ]
      },
      {
        name: '2ème étage',
        areas: [
          'Archives et manuscrits',
          'Salle de conférence',
          'Collection Zacharias Tanee Fomum',
          'Espace chercheurs'
        ]
      }
    ]
  };

  return (
    <div className="infos-container">
      {/* Hero Section */}
      <section className="infos-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="hero-content">
                <div className="hero-badge">
                  <FaInfoCircle size={12} className="me-2" />
                  Informations Pratiques
                </div>
                <h1 className="hero-title">
                  Informations <span className="text-warning">Pratiques</span>
                </h1>
                <p className="hero-subtitle">
                  Tout ce que vous devez savoir pour profiter pleinement de nos services : 
                  horaires, contact, règlement et plan d'accès.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="quick-info-card">
                <div className="info-item">
                  <FaClock className="info-icon text-warning" />
                  <div>
                    <div className="info-title">Aujourd'hui</div>
                    <div className="info-value">08:00 - 20:00</div>
                  </div>
                </div>
                <div className="info-item">
                  <FaPhone className="info-icon text-success" />
                  <div>
                    <div className="info-title">Urgence</div>
                    <div className="info-value">+237 699 123 456</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="content-section">
        <div className="container">
          <div className="row g-4">
            
            {/* Left Column */}
            <div className="col-lg-8">
              
              {/* Opening Hours */}
              <div className="info-card" id="horaires">
                <div className="card-header">
                  <FaClock size={20} />
                  <h3>Horaires d'ouverture</h3>
                </div>
                <div className="card-content">
                  <div className="hours-grid">
                    <div className="hours-section">
                      <h5>Horaires normaux</h5>
                      {openingHours.map((schedule, index) => (
                        <div key={index} className={`hour-item ${schedule.type}`}>
                          <span className="day">{schedule.day}</span>
                          <span className="hours">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                    <div className="hours-section">
                      <h5>Horaires spéciaux</h5>
                      {specialHours.map((schedule, index) => (
                        <div key={index} className="hour-item special">
                          <span className="day">{schedule.period}</span>
                          <span className="hours">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="info-card">
                <div className="card-header">
                  <FaBuilding size={20} />
                  <h3>Nos services</h3>
                </div>
                <div className="card-content">
                  <div className="row g-4">
                    {services.map((service, index) => (
                      <div key={index} className="col-md-6">
                        <div className="service-item">
                          <div className="service-header">
                            <div className="service-icon">
                              <service.icon size={20} />
                            </div>
                            <div>
                              <h6>{service.title}</h6>
                              <small className="capacity">{service.capacity}</small>
                            </div>
                          </div>
                          <p>{service.description}</p>
                          <div className="service-features">
                            {service.features.map((feature, idx) => (
                              <span key={idx} className="feature-tag">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Library Map */}
              <div className="info-card">
                <div className="card-header">
                  <FaSitemap size={20} />
                  <h3>Plan de la bibliothèque</h3>
                </div>
                <div className="card-content">
                  <div className="library-map">
                    {libraryMap.floors.map((floor, index) => (
                      <div key={index} className="floor-section">
                        <h6 className="floor-title">{floor.name}</h6>
                        <div className="areas-grid">
                          {floor.areas.map((area, idx) => (
                            <div key={idx} className="area-item">
                              <FaMapMarkerAlt size={12} />
                              {area}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Regulations */}
              <div className="info-card">
                <div className="card-header">
                  <FaFileAlt size={20} />
                  <h3>Règlement intérieur</h3>
                </div>
                <div className="card-content">
                  <div className="regulations-grid">
                    {regulations.map((section, index) => (
                      <div key={index} className="regulation-section">
                        <h6>{section.title}</h6>
                        <ul>
                          {section.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column */}
            <div className="col-lg-4">
              
              {/* Contact Information */}
              <div className="info-card sticky-card">
                <div className="card-header">
                  <FaEnvelope size={20} />
                  <h3>Contact</h3>
                </div>
                <div className="card-content">
                  <div className="contact-list">
                    {contactInfo.map((contact, index) => {
                      const Icon = contact.icon;
                      return (
                        <div key={index} className="contact-item">
                          <div className={`contact-icon text-${contact.color}`}>
                            <Icon size={18} />
                          </div>
                          <div className="contact-details">
                            <div className="contact-type">{contact.type}</div>
                            <div className="contact-value">
                              {contact.value.split('\n').map((line, idx) => (
                                <div key={idx}>{line}</div>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Facilities */}
              <div className="info-card">
                <div className="card-header">
                  <FaBuilding size={20} />
                  <h3>Équipements</h3>
                </div>
                <div className="card-content">
                  <div className="facilities-grid">
                    {facilities.map((facility, index) => {
                      const Icon = facility.icon;
                      return (
                        <div key={index} className={`facility-item ${facility.available ? 'available' : 'unavailable'}`}>
                          <Icon size={16} />
                          <span>{facility.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Legal Pages */}
              <div className="info-card">
                <div className="card-header">
                  <FaGavel size={20} />
                  <h3>Pages légales</h3>
                </div>
                <div className="card-content">
                  <div className="legal-links">
                    {legalPages.map((page, index) => {
                      const Icon = page.icon;
                      return (
                        <a key={index} href={page.link} className="legal-link">
                          <Icon size={14} />
                          <span>{page.title}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .infos-container {
          padding-top: 80px;
          background: var(--gradient-dark);
          min-height: 100vh;
        }

        .container {
          max-width: 1200px;
        }

        /* Hero Section */
        .infos-hero {
          padding: 3rem 0;
          background: linear-gradient(135deg, 
            rgba(29, 79, 139, 0.1) 0%, 
            rgba(60, 107, 139, 0.05) 100%);
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
          color: #ffffff;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .hero-subtitle {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .quick-info-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 0;
        }

        .info-item:not(:last-child) {
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .info-icon {
          font-size: 1.5rem;
        }

        .info-title {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .info-value {
          font-size: 1rem;
          font-weight: 600;
          color: #ffffff;
        }

        /* Content Section */
        .content-section {
          padding: 2rem 0 4rem;
        }

        .info-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          margin-bottom: 2rem;
          overflow: hidden;
        }

        .sticky-card {
          position: sticky;
          top: 100px;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
        }

        .card-header h3 {
          color: #ffffff;
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0;
        }

        .card-header svg {
          color: var(--warning);
        }

        .card-content {
          padding: 1.5rem;
        }

        /* Hours Section */
        .hours-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .hours-section h5 {
          color: var(--warning);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .hour-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem;
          margin-bottom: 0.5rem;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .hour-item.closed {
          background: rgba(220, 38, 38, 0.1);
          border-color: rgba(220, 38, 38, 0.3);
        }

        .hour-item.special {
          background: rgba(241, 196, 14, 0.1);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .day {
          font-weight: 500;
          color: #ffffff;
          font-size: 0.875rem;
        }

        .hours {
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.875rem;
        }

        /* Services */
        .service-item {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 1.5rem;
          height: 100%;
        }

        .service-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .service-icon {
          width: 40px;
          height: 40px;
          background: rgba(241, 196, 14, 0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--warning);
        }

        .service-header h6 {
          color: #ffffff;
          font-size: 1rem;
          font-weight: 600;
          margin: 0;
        }

        .capacity {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.75rem;
        }

        .service-item p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .service-features {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .feature-tag {
          background: rgba(241, 196, 14, 0.1);
          color: var(--warning);
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 500;
        }

        /* Library Map */
        .library-map {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .floor-section {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 1rem;
        }

        .floor-title {
          color: var(--warning);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .areas-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
        }

        .area-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.8rem;
          padding: 0.5rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }

        .area-item svg {
          color: var(--warning);
        }

        /* Regulations */
        .regulations-grid {
          display: grid;
          gap: 1.5rem;
        }

        .regulation-section {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 1rem;
        }

        .regulation-section h6 {
          color: var(--warning);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .regulation-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .regulation-section li {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.875rem;
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          padding-left: 1.5rem;
        }

        .regulation-section li:before {
          content: '•';
          color: var(--warning);
          position: absolute;
          left: 0;
        }

        .regulation-section li:last-child {
          border-bottom: none;
        }

        /* Contact */
        .contact-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .contact-icon {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-type {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--warning);
          margin-bottom: 0.25rem;
        }

        .contact-value {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.4;
        }

        /* Facilities */
        .facilities-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }

        .facility-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .facility-item.available svg {
          color: #10b981;
        }

        .facility-item.unavailable {
          opacity: 0.5;
        }

        .facility-item.unavailable svg {
          color: #ef4444;
        }

        /* Legal Links */
        .legal-links {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .legal-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-size: 0.875rem;
          transition: all 0.3s ease;
        }

        .legal-link:hover {
          background: rgba(241, 196, 14, 0.1);
          border-color: rgba(241, 196, 14, 0.3);
          color: var(--warning);
        }

        .legal-link svg {
          color: var(--warning);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .hours-grid {
            grid-template-columns: 1fr;
          }
          
          .areas-grid {
            grid-template-columns: 1fr;
          }
          
          .facilities-grid {
            grid-template-columns: 1fr;
          }
          
          .sticky-card {
            position: static;
          }
        }
      `}</style>
    </div>
  );
};

export default Infos;