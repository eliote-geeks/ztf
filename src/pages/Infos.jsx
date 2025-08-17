import React, { useState } from 'react';
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
  FaGavel,
  FaCheckCircle,
  FaTimesCircle
} from 'react-icons/fa';

const Infos = () => {
  const [activeTab, setActiveTab] = useState('horaires');

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

  const tabs = [
    { id: 'horaires', label: 'Horaires & Contact', icon: FaClock },
    { id: 'services', label: 'Nos Services', icon: FaBuilding },
    { id: 'reglement', label: 'Règlement', icon: FaFileAlt },
    { id: 'plan', label: 'Plan d\'accès', icon: FaMapMarkerAlt }
  ];

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
                    <div className="info-title">Contact</div>
                    <div className="info-value">+237 222 234 567</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="tabs-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tabs-nav">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
                    >
                      <Icon size={16} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="content-section">
        <div className="container">
          
          {/* Horaires & Contact Tab */}
          {activeTab === 'horaires' && (
            <div className="row g-4">
              <div className="col-lg-8">
                <div className="info-card">
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
              </div>

              <div className="col-lg-4">
                <div className="info-card">
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
              </div>
            </div>
          )}

          {/* Services Tab */}
          {activeTab === 'services' && (
            <div className="row g-3">
              <div className="col-12">
                <div className="section-header">
                  <h3>Nos services et équipements</h3>
                  <p>Découvrez tous nos espaces et services à votre disposition</p>
                </div>
              </div>
              
              {services.map((service, index) => (
                <div key={index} className="col-lg-3 col-md-6">
                  <div className="service-card">
                    <div className="service-icon">
                      <service.icon size={24} />
                    </div>
                    <div className="service-content">
                      <h5 className="service-title">{service.title}</h5>
                      <p className="service-description">{service.description}</p>
                      <div className="service-capacity">{service.capacity}</div>
                      <div className="service-features">
                        {service.features.map((feature, idx) => (
                          <span key={idx} className="feature-tag">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-12 mt-4">
                <div className="facilities-card">
                  <div className="card-header">
                    <FaShieldAlt size={20} />
                    <h3>Équipements disponibles</h3>
                  </div>
                  <div className="card-content">
                    <div className="row g-3">
                      {facilities.map((facility, index) => {
                        const Icon = facility.icon;
                        return (
                          <div key={index} className="col-lg-4 col-md-6">
                            <div className={`facility-item ${facility.available ? 'available' : 'unavailable'}`}>
                              <Icon size={16} />
                              <span>{facility.name}</span>
                              {facility.available ? (
                                <FaCheckCircle className="status-icon available" size={14} />
                              ) : (
                                <FaTimesCircle className="status-icon unavailable" size={14} />
                              )}
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

          {/* Règlement Tab */}
          {activeTab === 'reglement' && (
            <div className="row g-4">
              <div className="col-12">
                <div className="info-card">
                  <div className="card-header">
                    <FaFileAlt size={20} />
                    <h3>Règlement intérieur</h3>
                  </div>
                  <div className="card-content">
                    <div className="regulations-grid">
                      <div className="regulation-section">
                        <h6>Conditions d'accès</h6>
                        <ul>
                          <li>Carte d'étudiant ou de chercheur obligatoire</li>
                          <li>Visiteurs externes sur autorisation</li>
                          <li>Horaires d'accès à respecter strictement</li>
                        </ul>
                      </div>
                      <div className="regulation-section">
                        <h6>Usage des ressources</h6>
                        <ul>
                          <li>Consultation libre des ouvrages en salle</li>
                          <li>Emprunt limité selon le statut</li>
                          <li>Reproduction soumise au droit d'auteur</li>
                        </ul>
                      </div>
                      <div className="regulation-section">
                        <h6>Comportement</h6>
                        <ul>
                          <li>Silence obligatoire en salle de lecture</li>
                          <li>Téléphones en mode silencieux</li>
                          <li>Interdiction de manger en salle</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Plan Tab */}
          {activeTab === 'plan' && (
            <div className="row g-4">
              <div className="col-lg-8">
                <div className="info-card">
                  <div className="card-header">
                    <FaMapMarkerAlt size={20} />
                    <h3>Plan de la bibliothèque</h3>
                  </div>
                  <div className="card-content">
                    <div className="library-map">
                      <div className="floor-section">
                        <h6 className="floor-title">Rez-de-chaussée</h6>
                        <div className="areas-grid">
                          <div className="area-item">
                            <FaMapMarkerAlt size={12} />
                            Accueil et renseignements
                          </div>
                          <div className="area-item">
                            <FaMapMarkerAlt size={12} />
                            Salle de lecture principale
                          </div>
                          <div className="area-item">
                            <FaMapMarkerAlt size={12} />
                            Collections générales
                          </div>
                          <div className="area-item">
                            <FaMapMarkerAlt size={12} />
                            Périodiques actuels
                          </div>
                        </div>
                      </div>
                      
                      <div className="floor-section">
                        <h6 className="floor-title">1er étage</h6>
                        <div className="areas-grid">
                          <div className="area-item">
                            <FaMapMarkerAlt size={12} />
                            Espace multimédia
                          </div>
                          <div className="area-item">
                            <FaMapMarkerAlt size={12} />
                            Salles de travail en groupe
                          </div>
                          <div className="area-item">
                            <FaMapMarkerAlt size={12} />
                            Collections spécialisées
                          </div>
                          <div className="area-item">
                            <FaMapMarkerAlt size={12} />
                            Bureau des bibliothécaires
                          </div>
                        </div>
                      </div>

                      <div className="floor-section">
                        <h6 className="floor-title">2ème étage</h6>
                        <div className="areas-grid">
                          <div className="area-item">
                            <FaMapMarkerAlt size={12} />
                            Archives et manuscrits
                          </div>
                          <div className="area-item">
                            <FaMapMarkerAlt size={12} />
                            Salle de conférence
                          </div>
                          <div className="area-item">
                            <FaMapMarkerAlt size={12} />
                            Collection Zacharias Tanee Fomum
                          </div>
                          <div className="area-item">
                            <FaMapMarkerAlt size={12} />
                            Espace chercheurs
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="info-card">
                  <div className="card-header">
                    <FaGavel size={20} />
                    <h3>Pages légales</h3>
                  </div>
                  <div className="card-content">
                    <div className="legal-links">
                      <a href="/legal/cgu" className="legal-link">
                        <FaFileAlt size={14} />
                        <span>Conditions générales d'utilisation</span>
                      </a>
                      <a href="/legal/privacy" className="legal-link">
                        <FaShieldAlt size={14} />
                        <span>Politique de confidentialité</span>
                      </a>
                      <a href="/legal/mentions" className="legal-link">
                        <FaGavel size={14} />
                        <span>Mentions légales</span>
                      </a>
                      <a href="/sitemap" className="legal-link">
                        <FaSitemap size={14} />
                        <span>Plan du site</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      <style jsx>{`
        .infos-container {
          background: var(--bg-primary);
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
          color: var(--text-primary);
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .hero-subtitle {
          font-size: 1rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .quick-info-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.25rem;
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
          color: var(--text-secondary);
        }

        .info-value {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        /* Tabs */
        .tabs-section {
          padding: 1rem 0;
        }

        .tabs-nav {
          display: flex;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 0.5rem;
          gap: 0.5rem;
        }

        .tab-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          padding: 0.75rem 1.25rem;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          flex: 1;
          justify-content: center;
        }

        .tab-item:hover {
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.9);
        }

        .tab-item.active {
          background: rgba(241, 196, 14, 0.1);
          color: var(--warning);
          border: 1px solid rgba(241, 196, 14, 0.3);
        }

        /* Content */
        .content-section {
          padding: 2rem 0 4rem;
        }

        .section-header {
          margin-bottom: 2rem;
          text-align: center;
        }

        .section-header h3 {
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .section-header p {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .info-card,
        .facilities-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 2rem;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
        }

        .card-header h3 {
          color: var(--text-primary);
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0;
        }

        .card-header svg {
          color: var(--warning);
        }

        .card-content {
          padding: 1.25rem;
        }

        /* Service Cards */
        .service-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.25rem;
          height: 100%;
          transition: all 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .service-icon {
          width: 48px;
          height: 48px;
          background: rgba(241, 196, 14, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--warning);
          margin-bottom: 1rem;
        }

        .service-title {
          color: var(--text-primary);
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .service-description {
          color: var(--text-secondary);
          font-size: 0.8rem;
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }

        .service-capacity {
          color: var(--warning);
          font-size: 0.75rem;
          font-weight: 500;
          margin-bottom: 0.75rem;
        }

        .service-features {
          display: flex;
          flex-wrap: wrap;
          gap: 0.3rem;
        }

        .feature-tag {
          background: rgba(241, 196, 14, 0.1);
          color: var(--warning);
          padding: 0.2rem 0.5rem;
          border-radius: 8px;
          font-size: 0.7rem;
          font-weight: 500;
        }

        /* Hours */
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
          color: var(--text-primary);
          font-size: 0.8rem;
        }

        .hours {
          font-weight: 600;
          color: var(--text-secondary);
          font-size: 0.8rem;
        }

        /* Contact */
        .contact-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .contact-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .contact-icon {
          width: 36px;
          height: 36px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-type {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--warning);
          margin-bottom: 0.25rem;
        }

        .contact-value {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        /* Facilities */
        .facility-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .facility-item.available {
          border-color: rgba(34, 197, 94, 0.3);
          background: rgba(34, 197, 94, 0.05);
        }

        .facility-item.unavailable {
          opacity: 0.5;
        }

        .status-icon.available {
          color: #10b981;
          margin-left: auto;
        }

        .status-icon.unavailable {
          color: #ef4444;
          margin-left: auto;
        }

        /* Regulations */
        .regulations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
          color: var(--text-secondary);
          font-size: 0.8rem;
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
          color: var(--text-secondary);
          font-size: 0.75rem;
          padding: 0.5rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }

        .area-item svg {
          color: var(--warning);
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
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.8rem;
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
          
          .tabs-nav {
            flex-direction: column;
          }
          
          .tab-item {
            justify-content: flex-start;
          }
        }
      `}</style>
    </div>
  );
};

export default Infos;