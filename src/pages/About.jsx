import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaBook, 
  FaUniversity,
  FaHeart,
  FaUsers,
  FaGraduationCap,
  FaHandsHelping,
  FaGlobe,
  FaLightbulb,
  FaHistory,
  FaAward,
  FaChurch,
  FaQuoteLeft,
  FaCalendar,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCheckCircle,
  FaArrowRight
} from 'react-icons/fa';

const About = () => {
  const [selectedSection, setSelectedSection] = useState('histoire');

  const sections = [
    { id: 'histoire', label: 'Notre Histoire', icon: FaHistory },
    { id: 'mission', label: 'Mission & Vision', icon: FaLightbulb },
    { id: 'services', label: 'Nos Services', icon: FaHandsHelping },
    { id: 'equipe', label: 'Notre Équipe', icon: FaUsers }
  ];

  const stats = [
    { icon: FaBook, number: '45,000+', label: 'Ouvrages', color: 'text-primary' },
    { icon: FaUsers, number: '8,500+', label: 'Membres', color: 'text-success' },
    { icon: FaGraduationCap, number: '25+', label: 'Années d\'expérience', color: 'text-warning' },
    { icon: FaAward, number: '150+', label: 'Partenariats', color: 'text-info' }
  ];

  const timeline = [
    {
      year: 1998,
      title: 'Fondation de ZTF',
      description: 'Création de l\'institut Zacharias Tanee Fomum par le fondateur éponyme.',
      icon: FaChurch
    },
    {
      year: 2001,
      title: 'Ouverture de la Bibliothèque',
      description: 'Inauguration de la bibliothèque avec une collection initiale de 5,000 ouvrages.',
      icon: FaBook
    },
    {
      year: 2008,
      title: 'Numérisation des Collections',
      description: 'Lancement du projet de numérisation pour préserver et démocratiser l\'accès aux connaissances.',
      icon: FaGlobe
    },
    {
      year: 2015,
      title: 'Expansion Internationale',
      description: 'Partenariats avec des institutions académiques africaines et européennes.',
      icon: FaHandsHelping
    },
    {
      year: 2023,
      title: 'Modernisation Numérique',
      description: 'Lancement de la plateforme numérique moderne pour un accès optimal aux ressources.',
      icon: FaLightbulb
    }
  ];

  const teamMembers = [
    {
      name: 'Dr. Marie Essomba',
      role: 'Directrice Générale',
      description: 'Docteur en Sciences de l\'Information, spécialisée en gestion des bibliothèques académiques.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b65c?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Jean-Baptiste Sipa',
      role: 'Responsable Collections',
      description: 'Historien et bibliothécaire, expert en patrimoine culturel camerounais.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Prof. Emmanuel Ngwé',
      role: 'Coordinateur Recherche',
      description: 'Philosophe et chercheur, responsable des programmes de recherche académique.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Paul Mbarga',
      role: 'Responsable Numérique',
      description: 'Ingénieur en informatique, spécialiste des systèmes d\'information documentaire.',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const services = [
    {
      icon: FaBook,
      title: 'Collections Spécialisées',
      description: 'Accès à des collections uniques en théologie, histoire africaine et philosophie.',
      features: ['Fonds ZTF exclusif', 'Manuscrits rares', 'Publications académiques']
    },
    {
      icon: FaGlobe,
      title: 'Ressources Numériques',
      description: 'Plateforme moderne pour consulter et télécharger nos ressources en ligne.',
      features: ['E-books gratuits', 'Recherche avancée', 'Accès mobile']
    },
    {
      icon: FaGraduationCap,
      title: 'Support Académique',
      description: 'Accompagnement personnalisé pour étudiants et chercheurs.',
      features: ['Aide à la recherche', 'Formation documentaire', 'Espaces d\'étude']
    },
    {
      icon: FaUsers,
      title: 'Communauté Active',
      description: 'Réseau dynamique d\'échanges entre membres et partenaires.',
      features: ['Événements culturels', 'Conférences', 'Groupes d\'étude']
    }
  ];

  const values = [
    {
      icon: FaLightbulb,
      title: 'Excellence Académique',
      description: 'Nous nous engageons à maintenir les plus hauts standards de qualité dans nos collections et services.'
    },
    {
      icon: FaHandsHelping,
      title: 'Service à la Communauté',
      description: 'Notre mission est de servir et d\'enrichir la communauté académique et spirituelle.'
    },
    {
      icon: FaGlobe,
      title: 'Ouverture au Monde',
      description: 'Nous favorisons les échanges interculturels et la collaboration internationale.'
    },
    {
      icon: FaHeart,
      title: 'Passion pour la Connaissance',
      description: 'Nous cultivons l\'amour de l\'apprentissage et la soif de découverte.'
    }
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="hero-content">
                <div className="hero-badge">
                  <FaUniversity size={12} className="me-2" />
                  À Propos de Nous
                </div>
                <h1 className="hero-title">
                  Bibliothèque <span className="text-warning">ZTF</span>
                </h1>
                <p className="hero-subtitle">
                  Depuis plus de 25 ans, nous préservons et partageons le patrimoine intellectuel 
                  et spirituel, en servant une communauté mondiale de chercheurs, étudiants et 
                  passionnés de connaissance.
                </p>
                <div className="hero-quote">
                  <FaQuoteLeft className="quote-icon" />
                  <em>"La connaissance est un trésor qui s'enrichit quand on le partage"</em>
                  <span className="quote-author">- Zacharias Tanee Fomum</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="stats-grid">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="stat-card">
                      <Icon className={`stat-icon ${stat.color}`} />
                      <div className="stat-content">
                        <div className="stat-number">{stat.number}</div>
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

      {/* Navigation Tabs */}
      <section className="about-navigation">
        <div className="container">
          <div className="nav-tabs-container">
            {sections.map(section => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  className={`nav-tab ${selectedSection === section.id ? 'active' : ''}`}
                  onClick={() => setSelectedSection(section.id)}
                >
                  <Icon size={16} />
                  <span>{section.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="about-content">
        <div className="container">
          
          {/* Histoire Section */}
          {selectedSection === 'histoire' && (
            <div className="content-section">
              <div className="row g-5">
                <div className="col-lg-8">
                  <div className="section-header">
                    <h2>Notre Histoire</h2>
                    <p>
                      L'histoire de la Bibliothèque ZTF est intimement liée à celle de son fondateur, 
                      Zacharias Tanee Fomum, théologien et écrivain prolifique qui a consacré sa vie 
                      à l'enseignement et à la diffusion de la connaissance spirituelle et académique.
                    </p>
                  </div>
                  
                  <div className="timeline">
                    {timeline.map((event, index) => {
                      const Icon = event.icon;
                      return (
                        <div key={index} className="timeline-item">
                          <div className="timeline-marker">
                            <Icon size={16} />
                          </div>
                          <div className="timeline-content">
                            <div className="timeline-year">{event.year}</div>
                            <h4 className="timeline-title">{event.title}</h4>
                            <p className="timeline-description">{event.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <div className="col-lg-4">
                  <div className="founder-card">
                    <div className="founder-image">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" 
                        alt="Zacharias Tanee Fomum" 
                      />
                    </div>
                    <div className="founder-info">
                      <h4>Zacharias Tanee Fomum</h4>
                      <p className="founder-title">Fondateur et Visionnaire</p>
                      <p className="founder-description">
                        Théologien, écrivain et éducateur, il a écrit plus de 200 ouvrages 
                        et fondé plusieurs institutions d'enseignement à travers l'Afrique.
                      </p>
                      <div className="founder-legacy">
                        <div className="legacy-item">
                          <span className="legacy-number">200+</span>
                          <span className="legacy-label">Ouvrages publiés</span>
                        </div>
                        <div className="legacy-item">
                          <span className="legacy-number">15+</span>
                          <span className="legacy-label">Institutions fondées</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Mission & Vision Section */}
          {selectedSection === 'mission' && (
            <div className="content-section">
              <div className="row g-5">
                <div className="col-lg-6">
                  <div className="mission-card">
                    <div className="card-header">
                      <FaLightbulb className="header-icon" />
                      <h3>Notre Mission</h3>
                    </div>
                    <div className="card-content">
                      <p>
                        Préserver, organiser et diffuser le patrimoine intellectuel et spirituel, 
                        en particulier les œuvres de Zacharias Tanee Fomum et les connaissances 
                        relatives à l'Afrique, pour servir la communauté mondiale des chercheurs, 
                        étudiants et passionnés de connaissance.
                      </p>
                      <ul className="mission-points">
                        <li><FaCheckCircle /> Préservation du patrimoine documentaire</li>
                        <li><FaCheckCircle /> Accès démocratique à la connaissance</li>
                        <li><FaCheckCircle /> Support à la recherche académique</li>
                        <li><FaCheckCircle /> Formation et éducation continue</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-6">
                  <div className="vision-card">
                    <div className="card-header">
                      <FaGlobe className="header-icon" />
                      <h3>Notre Vision</h3>
                    </div>
                    <div className="card-content">
                      <p>
                        Devenir la référence mondiale pour les ressources documentaires 
                        sur la théologie africaine, l'histoire du Cameroun et la philosophie 
                        spirituelle, en utilisant les technologies modernes pour connecter 
                        les communautés académiques du monde entier.
                      </p>
                      <div className="vision-goals">
                        <h5>Objectifs 2025-2030</h5>
                        <div className="goals-grid">
                          <div className="goal-item">
                            <span className="goal-target">100k+</span>
                            <span className="goal-label">Documents numérisés</span>
                          </div>
                          <div className="goal-item">
                            <span className="goal-target">50+</span>
                            <span className="goal-label">Partenariats internationaux</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="values-section">
                <h3>Nos Valeurs</h3>
                <div className="values-grid">
                  {values.map((value, index) => {
                    const Icon = value.icon;
                    return (
                      <div key={index} className="value-card">
                        <Icon className="value-icon" />
                        <h5>{value.title}</h5>
                        <p>{value.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Services Section */}
          {selectedSection === 'services' && (
            <div className="content-section">
              <div className="section-header">
                <h2>Nos Services</h2>
                <p>
                  Nous offrons une gamme complète de services pour répondre aux besoins 
                  variés de notre communauté académique et spirituelle.
                </p>
              </div>
              
              <div className="services-grid">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div key={index} className="service-card">
                      <div className="service-header">
                        <Icon className="service-icon" />
                        <h4>{service.title}</h4>
                      </div>
                      <p className="service-description">{service.description}</p>
                      <ul className="service-features">
                        {service.features.map((feature, idx) => (
                          <li key={idx}>
                            <FaArrowRight size={10} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Équipe Section */}
          {selectedSection === 'equipe' && (
            <div className="content-section">
              <div className="section-header">
                <h2>Notre Équipe</h2>
                <p>
                  Une équipe passionnée de professionnels dédiés à l'excellence 
                  et au service de la communauté.
                </p>
              </div>
              
              <div className="team-grid">
                {teamMembers.map((member, index) => (
                  <div key={index} className="team-card">
                    <div className="member-image">
                      <img src={member.image} alt={member.name} />
                    </div>
                    <div className="member-info">
                      <h5>{member.name}</h5>
                      <p className="member-role">{member.role}</p>
                      <p className="member-description">{member.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="join-team-card">
                <h4>Rejoignez Notre Équipe</h4>
                <p>
                  Nous recherchons constamment des professionnels passionnés 
                  pour enrichir notre équipe et développer nos services.
                </p>
                <Link to="/contact" className="btn btn-warning">
                  <FaEnvelope size={14} className="me-2" />
                  Nous Contacter
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        .about-container {
          background: var(--bg-primary);
          min-height: 100vh;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .about-container .container {
          max-width: 1400px !important;
          margin: 0 auto !important;
          padding: 0 1rem !important;
          width: 100% !important;
        }

        /* Hero Section */
        .about-hero {
          padding: 3rem 0;
          background: linear-gradient(135deg, 
            rgba(59, 130, 246, 0.1) 0%, 
            rgba(16, 185, 129, 0.05) 100%);
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

        .hero-quote {
          background: rgba(255, 255, 255, 0.05);
          border-left: 4px solid var(--warning);
          padding: 1.5rem;
          border-radius: 8px;
          position: relative;
        }

        .quote-icon {
          color: var(--warning);
          margin-bottom: 0.5rem;
        }

        .hero-quote em {
          display: block;
          font-size: 1.1rem;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          line-height: 1.4;
        }

        .quote-author {
          font-size: 0.875rem;
          color: var(--text-secondary);
          font-weight: 500;
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
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-2px);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .stat-icon {
          font-size: 1.5rem;
        }

        .stat-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1;
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        /* Navigation */
        .about-navigation {
          padding: 1rem 0 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          margin-bottom: 3rem;
        }

        .nav-tabs-container {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .nav-tab {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 0.75rem 1.5rem;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .nav-tab:hover,
        .nav-tab.active {
          background: rgba(241, 196, 14, 0.1);
          border-color: rgba(241, 196, 14, 0.3);
          color: var(--warning);
        }

        /* Content Sections */
        .about-content {
          padding: 0 0 4rem;
        }

        .content-section {
          min-height: 500px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-header h2 {
          font-size: 2rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .section-header p {
          font-size: 1rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Timeline */
        .timeline {
          position: relative;
          padding-left: 2rem;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 15px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: rgba(241, 196, 14, 0.3);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 2rem;
        }

        .timeline-marker {
          position: absolute;
          left: -2rem;
          top: 0.5rem;
          width: 32px;
          height: 32px;
          background: var(--warning);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--dark-900);
        }

        .timeline-content {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
          margin-left: 1rem;
        }

        .timeline-year {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--warning);
          margin-bottom: 0.5rem;
        }

        .timeline-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .timeline-description {
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Founder Card */
        .founder-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          position: sticky;
          top: 2rem;
        }

        .founder-image {
          margin-bottom: 1.5rem;
        }

        .founder-image img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid var(--warning);
        }

        .founder-info h4 {
          color: var(--text-primary);
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .founder-title {
          color: var(--warning);
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .founder-description {
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }

        .founder-legacy {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .legacy-item {
          text-align: center;
        }

        .legacy-number {
          display: block;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--warning);
        }

        .legacy-label {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        /* Mission & Vision Cards */
        .mission-card,
        .vision-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          overflow: hidden;
          height: 100%;
        }

        .card-header {
          background: rgba(255, 255, 255, 0.08);
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .header-icon {
          font-size: 1.5rem;
          color: var(--warning);
        }

        .card-header h3 {
          color: var(--text-primary);
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0;
        }

        .card-content {
          padding: 1.5rem;
        }

        .card-content p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .mission-points {
          list-style: none;
          padding: 0;
        }

        .mission-points li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
          font-size: 0.875rem;
        }

        .mission-points svg {
          color: #22c55e;
          flex-shrink: 0;
        }

        .vision-goals {
          margin-top: 1.5rem;
        }

        .vision-goals h5 {
          color: var(--text-primary);
          font-size: 1rem;
          margin-bottom: 1rem;
        }

        .goals-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .goal-item {
          text-align: center;
          background: rgba(255, 255, 255, 0.05);
          padding: 1rem;
          border-radius: 8px;
        }

        .goal-target {
          display: block;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--warning);
        }

        .goal-label {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        /* Values Section */
        .values-section {
          margin-top: 3rem;
          padding-top: 3rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .values-section h3 {
          text-align: center;
          color: var(--text-primary);
          font-size: 1.5rem;
          margin-bottom: 2rem;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .value-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-4px);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .value-icon {
          font-size: 2rem;
          color: var(--warning);
          margin-bottom: 1rem;
        }

        .value-card h5 {
          color: var(--text-primary);
          font-size: 1rem;
          margin-bottom: 0.75rem;
        }

        .value-card p {
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.5;
          margin: 0;
        }

        /* Services Grid */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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
          color: var(--warning);
        }

        .service-header h4 {
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
        }

        .service-features li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
        }

        .service-features svg {
          color: var(--warning);
          flex-shrink: 0;
        }

        /* Team Grid */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .team-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .team-card:hover {
          transform: translateY(-4px);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .member-image {
          margin-bottom: 1.5rem;
        }

        .member-image img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid rgba(241, 196, 14, 0.3);
        }

        .member-info h5 {
          color: var(--text-primary);
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .member-role {
          color: var(--warning);
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .member-description {
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.5;
          margin: 0;
        }

        .join-team-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
        }

        .join-team-card h4 {
          color: var(--text-primary);
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }

        .join-team-card p {
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1.5rem;
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
          padding: 0.75rem 2rem;
          text-decoration: none;
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

        /* Responsive */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
            margin-top: 2rem;
          }
          
          .nav-tabs-container {
            flex-direction: column;
            align-items: center;
          }
          
          .timeline {
            padding-left: 1.5rem;
          }
          
          .timeline-marker {
            left: -1.5rem;
          }
          
          .founder-card {
            position: static;
            margin-top: 2rem;
          }
          
          .goals-grid,
          .stat-row {
            grid-template-columns: 1fr;
          }
          
          .values-grid,
          .services-grid,
          .team-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default About;