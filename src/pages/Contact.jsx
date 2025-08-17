import React, { useState } from 'react';
import { 
  FaPhone, 
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFax,
  FaGlobe,
  FaPaperPlane,
  FaUser,
  FaCommentAlt,
  FaBuilding,
  FaDirections,
  FaParking,
  FaBus,
  FaWifi,
  FaAccessibleIcon,
  FaInfoCircle
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'general',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulation d'envoi
    setTimeout(() => {
      console.log('Message envoyé:', formData);
      setIsSubmitting(false);
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        category: 'general',
        message: ''
      });
      alert('Votre message a été envoyé avec succès !');
    }, 1000);
  };

  const categories = [
    { value: 'general', label: 'Information générale' },
    { value: 'collection', label: 'Questions sur les collections' },
    { value: 'digital', label: 'Ressources numériques' },
    { value: 'membership', label: 'Adhésion et inscription' },
    { value: 'technical', label: 'Support technique' },
    { value: 'suggestion', label: 'Suggestions et commentaires' }
  ];

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Téléphone',
      details: ['+237 222 234 567', '+237 699 123 456'],
      color: 'text-success'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: ['contact@bibliotheque-ztf.org', 'services@bibliotheque-ztf.org'],
      color: 'text-primary'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Adresse',
      details: ['Campus ZTF, Quartier Mvan', 'BP 5024 Yaoundé, Cameroun'],
      color: 'text-warning'
    },
    {
      icon: FaFax,
      title: 'Fax',
      details: ['+237 222 234 568'],
      color: 'text-info'
    }
  ];

  const schedules = [
    { day: 'Lundi - Vendredi', hours: '08h00 - 20h00', type: 'weekday' },
    { day: 'Samedi', hours: '08h00 - 18h00', type: 'saturday' },
    { day: 'Dimanche', hours: '14h00 - 18h00', type: 'sunday' },
    { day: 'Jours fériés', hours: 'Fermé', type: 'holiday' }
  ];

  const services = [
    {
      icon: FaWifi,
      title: 'WiFi Gratuit',
      description: 'Accès internet haut débit dans tous les espaces'
    },
    {
      icon: FaParking,
      title: 'Parking Gratuit',
      description: '150 places de stationnement disponibles'
    },
    {
      icon: FaAccessibleIcon,
      title: 'Accessibilité',
      description: 'Locaux adaptés aux personnes à mobilité réduite'
    },
    {
      icon: FaBus,
      title: 'Transport Public',
      description: 'Accessible par les lignes de bus 12, 25 et 40'
    }
  ];

  return (
    <div className="contact-container">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <div className="hero-content">
                <div className="hero-badge">
                  <FaCommentAlt size={12} className="me-2" />
                  Nous Contacter
                </div>
                <h1 className="hero-title">
                  Une Question ? <span className="text-warning">Contactez-nous</span>
                </h1>
                <p className="hero-subtitle">
                  Notre équipe est à votre disposition pour répondre à toutes vos questions 
                  concernant nos services, collections et ressources numériques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info-section">
        <div className="container">
          <div className="row g-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="col-lg-3 col-md-6">
                  <div className="contact-info-card">
                    <div className={`contact-icon ${info.color}`}>
                      <Icon size={24} />
                    </div>
                    <h5>{info.title}</h5>
                    <div className="contact-details">
                      {info.details.map((detail, idx) => (
                        <p key={idx}>{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="main-content-section">
        <div className="container">
          <div className="row g-5">
            
            {/* Contact Form */}
            <div className="col-lg-8">
              <div className="contact-form-card">
                <div className="form-header">
                  <h3>Envoyez-nous un message</h3>
                  <p>Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.</p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">
                          <FaUser size={12} className="me-2" />
                          Nom complet
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Votre nom et prénom"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">
                          <FaEnvelope size={12} className="me-2" />
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="votre.email@exemple.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Catégorie</label>
                    <select
                      name="category"
                      className="form-select"
                      value={formData.category}
                      onChange={handleInputChange}
                    >
                      {categories.map(cat => (
                        <option key={cat.value} value={cat.value}>
                          {cat.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Sujet</label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Objet de votre message"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea
                      name="message"
                      className="form-control"
                      rows="6"
                      placeholder="Détaillez votre demande..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-warning btn-lg"
                    disabled={isSubmitting}
                  >
                    <FaPaperPlane size={16} className="me-2" />
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              
              {/* Hours */}
              <div className="info-card">
                <div className="card-header">
                  <FaClock size={20} />
                  <h4>Horaires d'ouverture</h4>
                </div>
                <div className="schedule-list">
                  {schedules.map((schedule, index) => (
                    <div key={index} className={`schedule-item ${schedule.type}`}>
                      <span className="schedule-day">{schedule.day}</span>
                      <span className="schedule-hours">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location & Services */}
              <div className="info-card">
                <div className="card-header">
                  <FaBuilding size={20} />
                  <h4>Accès & Services</h4>
                </div>
                <div className="services-list">
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <div key={index} className="service-item">
                        <Icon className="service-icon" />
                        <div className="service-content">
                          <h6>{service.title}</h6>
                          <p>{service.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="info-card">
                <div className="card-header">
                  <FaInfoCircle size={20} />
                  <h4>Liens Utiles</h4>
                </div>
                <div className="quick-links">
                  <a href="/faq" className="quick-link">
                    Questions Fréquentes
                  </a>
                  <a href="/services" className="quick-link">
                    Nos Services
                  </a>
                  <a href="/ressources" className="quick-link">
                    Ressources Numériques
                  </a>
                  <a href="/catalogue" className="quick-link">
                    Catalogue en Ligne
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="map-card">
            <div className="map-header">
              <h3>
                <FaDirections size={20} className="me-2" />
                Comment nous trouver
              </h3>
              <p>Campus ZTF, Quartier Mvan, Yaoundé</p>
            </div>
            <div className="map-placeholder">
              <div className="map-content">
                <FaMapMarkerAlt size={48} className="map-icon" />
                <h4>Bibliothèque ZTF</h4>
                <p>Campus Universitaire, Yaoundé</p>
                <button className="btn btn-outline-warning">
                  <FaDirections size={14} className="me-2" />
                  Obtenir l'itinéraire
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-container {
          background: var(--bg-primary);
          min-height: 100vh;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .contact-container .container {
          max-width: 1400px !important;
          margin: 0 auto !important;
          padding: 0 1rem !important;
          width: 100% !important;
        }

        /* Hero Section */
        .contact-hero {
          padding: 3rem 0;
          background: linear-gradient(135deg, 
            rgba(59, 130, 246, 0.1) 0%, 
            rgba(16, 185, 129, 0.05) 100%);
          border-radius: 0 0 20px 20px;
          margin-bottom: 3rem;
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
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Contact Info */
        .contact-info-section {
          padding: 2rem 0 3rem;
        }

        .contact-info-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          height: 100%;
          transition: all 0.3s ease;
        }

        .contact-info-card:hover {
          transform: translateY(-4px);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .contact-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
        }

        .contact-info-card h5 {
          color: var(--text-primary);
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .contact-details p {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin-bottom: 0.25rem;
        }

        /* Main Content */
        .main-content-section {
          padding: 2rem 0 4rem;
        }

        .contact-form-card,
        .info-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 2rem;
        }

        .form-header,
        .card-header {
          padding: 2rem 2rem 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .form-header h3,
        .card-header h4 {
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .form-header p {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .contact-form {
          padding: 2rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-label {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
        }

        .form-control,
        .form-select {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          padding: 0.75rem;
          font-size: 0.875rem;
          color: var(--text-primary);
          transition: all 0.3s ease;
          width: 100%;
          resize: vertical;
        }

        .form-control:focus,
        .form-select:focus {
          background: rgba(255, 255, 255, 0.12);
          border-color: var(--warning);
          box-shadow: 0 0 0 3px rgba(241, 196, 14, 0.1);
          outline: none;
          color: var(--text-primary);
        }

        .form-control::placeholder {
          color: var(--text-placeholder);
        }

        .btn {
          border: none;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem 2rem;
        }

        .btn-warning {
          background: var(--gradient-accent);
          color: var(--dark-900);
        }

        .btn-warning:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(241, 196, 14, 0.3);
        }

        .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* Schedule */
        .schedule-list {
          padding: 1.5rem;
        }

        .schedule-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .schedule-item:last-child {
          border-bottom: none;
        }

        .schedule-day {
          color: var(--text-primary);
          font-weight: 500;
          font-size: 0.875rem;
        }

        .schedule-hours {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .schedule-item.holiday .schedule-hours {
          color: #ef4444;
        }

        /* Services */
        .services-list {
          padding: 1.5rem;
        }

        .service-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .service-item:last-child {
          margin-bottom: 0;
        }

        .service-icon {
          color: var(--warning);
          font-size: 1.25rem;
          margin-top: 0.25rem;
          flex-shrink: 0;
        }

        .service-content h6 {
          color: var(--text-primary);
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .service-content p {
          color: var(--text-secondary);
          font-size: 0.8rem;
          line-height: 1.4;
          margin: 0;
        }

        /* Quick Links */
        .quick-links {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .quick-link {
          color: var(--text-secondary);
          text-decoration: none;
          padding: 0.75rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          font-size: 0.875rem;
          transition: all 0.3s ease;
        }

        .quick-link:hover {
          background: rgba(241, 196, 14, 0.1);
          border-color: rgba(241, 196, 14, 0.3);
          color: var(--warning);
        }

        /* Map Section */
        .map-section {
          padding: 3rem 0;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 20px 20px 0 0;
        }

        .map-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          overflow: hidden;
        }

        .map-header {
          padding: 2rem;
          text-align: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .map-header h3 {
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .map-header p {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .map-placeholder {
          height: 300px;
          background: linear-gradient(135deg, 
            rgba(29, 79, 139, 0.1) 0%, 
            rgba(60, 107, 139, 0.05) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .map-content {
          text-align: center;
          color: var(--text-secondary);
        }

        .map-icon {
          color: var(--warning);
          margin-bottom: 1rem;
        }

        .map-content h4 {
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .map-content p {
          margin-bottom: 1.5rem;
        }

        .btn-outline-warning {
          background: transparent;
          border: 1px solid var(--warning);
          color: var(--warning);
        }

        .btn-outline-warning:hover {
          background: var(--warning);
          color: var(--dark-900);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .contact-form,
          .form-header,
          .card-header {
            padding: 1.5rem;
          }
          
          .contact-info-card {
            padding: 1.5rem;
          }
          
          .service-item {
            flex-direction: column;
            text-align: center;
            gap: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;