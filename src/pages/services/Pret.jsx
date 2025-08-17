import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaBookOpen, 
  FaBook,
  FaCalendar,
  FaClock,
  FaUser,
  FaIdCard,
  FaSearch,
  FaRetweet,
  FaExclamationTriangle,
  FaCheckCircle,
  FaTimesCircle,
  FaHeart,
  FaQrcode,
  FaMobile,
  FaDesktop,
  FaInfoCircle
} from 'react-icons/fa';

const Pret = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const loanRules = [
    {
      userType: 'Étudiants',
      maxBooks: 5,
      duration: '2 semaines',
      renewals: 2,
      icon: FaUser,
      color: 'text-primary'
    },
    {
      userType: 'Chercheurs',
      maxBooks: 10,
      duration: '4 semaines',
      renewals: 3,
      icon: FaUser,
      color: 'text-success'
    },
    {
      userType: 'Personnel',
      maxBooks: 8,
      duration: '3 semaines',
      renewals: 3,
      icon: FaUser,
      color: 'text-warning'
    }
  ];

  const services = [
    {
      title: 'Emprunts physiques',
      description: 'Empruntez des livres physiques de notre collection',
      features: ['Jusqu\'à 10 livres simultanés', 'Durée adaptée au statut', 'Renouvellement possible'],
      icon: FaBook,
      color: 'text-primary'
    },
    {
      title: 'Réservations',
      description: 'Réservez des ouvrages temporairement indisponibles',
      features: ['Notification par email', 'Réservation prioritaire', 'Délai de récupération : 48h'],
      icon: FaCalendar,
      color: 'text-success'
    },
    {
      title: 'Accès numérique',
      description: 'Consultez et téléchargez nos ressources numériques',
      features: ['E-books illimités', 'Accès 24h/24', 'Lecture sur tous appareils'],
      icon: FaDesktop,
      color: 'text-warning'
    }
  ];

  const howToSteps = [
    {
      step: 1,
      title: 'Recherchez',
      description: 'Utilisez notre catalogue en ligne pour trouver les ouvrages souhaités',
      icon: FaSearch
    },
    {
      step: 2,
      title: 'Identifiez-vous',
      description: 'Présentez votre carte d\'étudiant ou carte de membre',
      icon: FaIdCard
    },
    {
      step: 3,
      title: 'Empruntez',
      description: 'Scannez vos livres à l\'accueil ou en libre-service',
      icon: FaQrcode
    },
    {
      step: 4,
      title: 'Gérez en ligne',
      description: 'Suivez vos emprunts et renouvelez depuis votre profil',
      icon: FaMobile
    }
  ];

  const quickStats = [
    { label: 'Livres disponibles', value: '45k+', icon: FaBook },
    { label: 'Membres actifs', value: '8,500+', icon: FaUser },
    { label: 'Prêts par mois', value: '12k+', icon: FaRetweet },
    { label: 'Taux de satisfaction', value: '98%', icon: FaCheckCircle }
  ];

  return (
    <div className="pret-container">
      {/* Hero Section */}
      <section className="pret-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="hero-content">
                <div className="hero-badge">
                  <FaBookOpen size={12} className="me-2" />
                  Service de Prêt
                </div>
                <h1 className="hero-title">
                  <span className="text-warning">Prêt</span> & Réservation
                </h1>
                <p className="hero-subtitle">
                  Empruntez facilement nos ouvrages physiques et numériques. 
                  Système de prêt moderne avec gestion en ligne de vos emprunts.
                </p>
                <div className="hero-actions">
                  <Link to="/catalogue" className="btn btn-warning">
                    <FaSearch size={14} className="me-2" />
                    Rechercher un livre
                  </Link>
                  <Link to="/profile" className="btn btn-outline-warning">
                    <FaUser size={14} className="me-2" />
                    Mes emprunts
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="stats-grid">
                {quickStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="stat-card">
                      <Icon className={`stat-icon text-warning`} />
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

      {/* Services Overview */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h3>Nos Services de Prêt</h3>
            <p>Découvrez nos différentes options d'emprunt</p>
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
                        <FaCheckCircle className="feature-icon" />
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

      {/* Loan Rules */}
      <section className="rules-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="rules-card">
                <h3>Conditions d'emprunt</h3>
                <div className="rules-grid">
                  {loanRules.map((rule, index) => {
                    const Icon = rule.icon;
                    return (
                      <div key={index} className="rule-item">
                        <div className="rule-header">
                          <Icon className={`rule-icon ${rule.color}`} />
                          <h5>{rule.userType}</h5>
                        </div>
                        <div className="rule-details">
                          <div className="rule-detail">
                            <span className="detail-label">Livres max:</span>
                            <span className="detail-value">{rule.maxBooks}</span>
                          </div>
                          <div className="rule-detail">
                            <span className="detail-label">Durée:</span>
                            <span className="detail-value">{rule.duration}</span>
                          </div>
                          <div className="rule-detail">
                            <span className="detail-label">Renouvellements:</span>
                            <span className="detail-value">{rule.renewals}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="info-card">
                <h4>
                  <FaInfoCircle className="me-2" />
                  Informations importantes
                </h4>
                <div className="info-list">
                  <div className="info-item">
                    <FaExclamationTriangle className="info-icon text-warning" />
                    <div>
                      <strong>Retards:</strong>
                      <p>0,50€ par jour de retard et par ouvrage</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <FaClock className="info-icon text-info" />
                    <div>
                      <strong>Horaires:</strong>
                      <p>Lun-Ven: 8h-20h, Sam: 8h-18h</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <FaMobile className="info-icon text-success" />
                    <div>
                      <strong>Rappels:</strong>
                      <p>Notifications automatiques par email et SMS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How To Guide */}
      <section className="howto-section">
        <div className="container">
          <div className="section-header">
            <h3>Comment emprunter ?</h3>
            <p>Guide étape par étape pour vos premiers emprunts</p>
          </div>
          <div className="steps-container">
            {howToSteps.map((stepItem, index) => {
              const Icon = stepItem.icon;
              return (
                <div key={index} className="step-card">
                  <div className="step-number">{stepItem.step}</div>
                  <Icon className="step-icon" />
                  <h5 className="step-title">{stepItem.title}</h5>
                  <p className="step-description">{stepItem.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="actions-section">
        <div className="container">
          <div className="actions-card">
            <div className="row align-items-center g-4">
              <div className="col-lg-8">
                <h4>Prêt à emprunter ?</h4>
                <p>Explorez notre catalogue ou gérez vos emprunts existants.</p>
              </div>
              <div className="col-lg-4">
                <div className="actions-buttons">
                  <Link to="/catalogue" className="btn btn-warning">
                    <FaSearch size={14} className="me-2" />
                    Catalogue
                  </Link>
                  <Link to="/profile" className="btn btn-outline-warning">
                    <FaUser size={14} className="me-2" />
                    Mon compte
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .pret-container {
          background: var(--bg-primary);
          min-height: 100vh;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .pret-container .container {
          max-width: 1400px !important;
          margin: 0 auto !important;
          padding: 0 1rem !important;
          width: 100% !important;
        }

        /* Hero Section */
        .pret-hero {
          padding: 3rem 0;
          background: linear-gradient(135deg, 
            rgba(241, 196, 14, 0.1) 0%, 
            rgba(59, 130, 246, 0.05) 100%);
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

        /* Services Section */
        .services-section,
        .rules-section,
        .howto-section,
        .actions-section {
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
          transform: translateY(-6px);
          border-color: rgba(241, 196, 14, 0.3);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
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
          gap: 0.75rem;
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
          font-size: 0.875rem;
        }

        .feature-icon {
          color: #22c55e;
          flex-shrink: 0;
        }

        /* Rules Section */
        .rules-card,
        .info-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
        }

        .rules-card h3,
        .info-card h4 {
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 2rem;
        }

        .rules-grid {
          display: grid;
          gap: 1.5rem;
        }

        .rule-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
        }

        .rule-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .rule-icon {
          font-size: 1.25rem;
        }

        .rule-header h5 {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          margin: 0;
        }

        .rule-details {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 1rem;
        }

        .rule-detail {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .detail-label {
          color: var(--text-tertiary);
          font-size: 0.8rem;
        }

        .detail-value {
          color: var(--text-primary);
          font-weight: 600;
        }

        .info-list {
          display: flex;
          flex-direction: column;
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
          font-size: 0.85rem;
          margin: 0;
          line-height: 1.4;
        }

        /* How To Section */
        .steps-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .step-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          position: relative;
          transition: all 0.3s ease;
        }

        .step-card:hover {
          transform: translateY(-4px);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .step-number {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
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
        }

        .step-icon {
          font-size: 2rem;
          color: var(--warning);
          margin: 1rem 0;
        }

        .step-title {
          color: var(--text-primary);
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .step-description {
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.5;
          margin: 0;
        }

        /* Actions Section */
        .actions-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
        }

        .actions-card h4 {
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .actions-card p {
          color: var(--text-secondary);
          margin-bottom: 0;
        }

        .actions-buttons {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
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

        /* Responsive */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
            margin-top: 2rem;
          }
          
          .services-grid,
          .steps-container {
            grid-template-columns: 1fr;
          }
          
          .rule-details {
            grid-template-columns: 1fr;
          }
          
          .actions-buttons {
            justify-content: center;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default Pret;