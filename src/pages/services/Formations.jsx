import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaGraduationCap, 
  FaCalendar,
  FaClock,
  FaUsers,
  FaSearch,
  FaDatabase,
  FaBook,
  FaLaptop,
  FaChalkboardTeacher,
  FaUserPlus,
  FaMapMarkerAlt,
  FaInfoCircle,
  FaCheckCircle,
  FaStar
} from 'react-icons/fa';

const Formations = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'Toutes formations' },
    { value: 'recherche', label: 'Recherche documentaire' },
    { value: 'numerique', label: 'Outils numériques' },
    { value: 'redaction', label: 'Rédaction académique' },
    { value: 'citation', label: 'Citations & références' }
  ];

  const formations = [
    {
      id: 1,
      title: "Recherche documentaire avancée",
      category: "recherche",
      description: "Maîtrisez les techniques de recherche dans nos bases de données",
      duration: "3h",
      level: "Intermédiaire",
      participants: 15,
      nextDate: "2024-02-15",
      time: "14h00-17h00",
      location: "Salle formation A",
      instructor: "Dr. Marie Essomba",
      price: "Gratuit",
      rating: 4.8,
      reviews: 24,
      objectives: [
        "Utiliser efficacement les bases de données",
        "Construire des stratégies de recherche",
        "Évaluer la qualité des sources"
      ]
    },
    {
      id: 2,
      title: "Initiation aux ressources numériques",
      category: "numerique",
      description: "Découvrez nos ressources électroniques et leurs fonctionnalités",
      duration: "2h",
      level: "Débutant",
      participants: 20,
      nextDate: "2024-02-18",
      time: "10h00-12h00",
      location: "Espace multimédia",
      instructor: "Paul Mbarga",
      price: "Gratuit",
      rating: 4.6,
      reviews: 18,
      objectives: [
        "Naviguer dans les plateformes numériques",
        "Télécharger et organiser les documents",
        "Utiliser les outils de lecture numérique"
      ]
    },
    {
      id: 3,
      title: "Normes de citation académique",
      category: "citation",
      description: "Apprenez à citer correctement vos sources selon les normes",
      duration: "2.5h",
      level: "Intermédiaire",
      participants: 12,
      nextDate: "2024-02-22",
      time: "15h00-17h30",
      location: "Salle formation B",
      instructor: "Prof. Emmanuel Ngwé",
      price: "Gratuit",
      rating: 4.9,
      reviews: 31,
      objectives: [
        "Maîtriser les styles APA, MLA, Chicago",
        "Utiliser les logiciels de gestion bibliographique",
        "Éviter le plagiat"
      ]
    }
  ];

  const upcomingWorkshops = [
    {
      date: "15 Feb",
      title: "Recherche documentaire avancée",
      time: "14h-17h",
      spots: 8
    },
    {
      date: "18 Feb",
      title: "Ressources numériques",
      time: "10h-12h",
      spots: 12
    },
    {
      date: "22 Feb",
      title: "Citations académiques",
      time: "15h-17h30",
      spots: 5
    },
    {
      date: "25 Feb",
      title: "Rédaction de thèse",
      time: "9h-12h",
      spots: 15
    }
  ];

  const stats = [
    { label: 'Formations dispensées', value: '150+', icon: FaGraduationCap },
    { label: 'Participants formés', value: '2,500+', icon: FaUsers },
    { label: 'Heures de formation', value: '800+', icon: FaClock },
    { label: 'Satisfaction moyenne', value: '4.7/5', icon: FaStar }
  ];

  const filteredFormations = selectedCategory === 'all' 
    ? formations 
    : formations.filter(f => f.category === selectedCategory);

  return (
    <div className="formations-container">
      {/* Hero Section */}
      <section className="formations-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="hero-content">
                <div className="hero-badge">
                  <FaGraduationCap size={12} className="me-2" />
                  Formations & Ateliers
                </div>
                <h1 className="hero-title">
                  <span className="text-warning">Formations</span> Documentaires
                </h1>
                <p className="hero-subtitle">
                  Développez vos compétences en recherche documentaire avec nos ateliers 
                  spécialisés. Formations gratuites pour tous les membres.
                </p>
                <div className="hero-actions">
                  <button className="btn btn-warning">
                    <FaUserPlus size={14} className="me-2" />
                    S'inscrire
                  </button>
                  <Link to="/contact" className="btn btn-outline-warning">
                    <FaInfoCircle size={14} className="me-2" />
                    Plus d'infos
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

      {/* Filters */}
      <section className="filters-section">
        <div className="container">
          <div className="filters-card">
            <div className="row align-items-center g-3">
              <div className="col-lg-6">
                <h4>Nos formations disponibles</h4>
                <p>Choisissez la formation qui correspond à vos besoins</p>
              </div>
              <div className="col-lg-6">
                <div className="filter-controls">
                  <label className="form-label">Filtrer par catégorie</label>
                  <select
                    className="form-select"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map(cat => (
                      <option key={cat.value} value={cat.value}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formations Grid */}
      <section className="formations-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="formations-grid">
                {filteredFormations.map(formation => (
                  <div key={formation.id} className="formation-card">
                    <div className="formation-header">
                      <div className="formation-meta">
                        <span className="level-badge">{formation.level}</span>
                        <span className="duration-badge">
                          <FaClock size={12} />
                          {formation.duration}
                        </span>
                      </div>
                      <div className="rating">
                        <FaStar className="star-filled" />
                        <span>{formation.rating}</span>
                        <span className="reviews">({formation.reviews} avis)</span>
                      </div>
                    </div>
                    
                    <h5 className="formation-title">{formation.title}</h5>
                    <p className="formation-description">{formation.description}</p>
                    
                    <div className="formation-details">
                      <div className="detail-row">
                        <FaCalendar size={12} />
                        <span>{new Date(formation.nextDate).toLocaleDateString('fr-FR')}</span>
                        <FaClock size={12} />
                        <span>{formation.time}</span>
                      </div>
                      <div className="detail-row">
                        <FaMapMarkerAlt size={12} />
                        <span>{formation.location}</span>
                        <FaChalkboardTeacher size={12} />
                        <span>{formation.instructor}</span>
                      </div>
                      <div className="detail-row">
                        <FaUsers size={12} />
                        <span>{formation.participants} participants max</span>
                        <span className="price">{formation.price}</span>
                      </div>
                    </div>

                    <div className="objectives">
                      <h6>Objectifs :</h6>
                      <ul>
                        {formation.objectives.map((obj, idx) => (
                          <li key={idx}>
                            <FaCheckCircle size={12} />
                            {obj}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="formation-actions">
                      <button className="btn btn-warning">
                        <FaUserPlus size={14} className="me-2" />
                        S'inscrire
                      </button>
                      <button className="btn btn-outline-secondary">
                        <FaInfoCircle size={14} className="me-2" />
                        Détails
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-4">
              <div className="sidebar">
                <div className="upcoming-card">
                  <h5>Prochaines sessions</h5>
                  <div className="workshops-list">
                    {upcomingWorkshops.map((workshop, index) => (
                      <div key={index} className="workshop-item">
                        <div className="workshop-date">{workshop.date}</div>
                        <div className="workshop-info">
                          <h6>{workshop.title}</h6>
                          <div className="workshop-meta">
                            <span><FaClock size={10} /> {workshop.time}</span>
                            <span className="spots">{workshop.spots} places</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="info-card">
                  <h5>Informations pratiques</h5>
                  <div className="info-list">
                    <div className="info-item">
                      <FaUserPlus className="info-icon" />
                      <div>
                        <strong>Inscription</strong>
                        <p>Obligatoire 48h avant la formation</p>
                      </div>
                    </div>
                    <div className="info-item">
                      <FaLaptop className="info-icon" />
                      <div>
                        <strong>Matériel</strong>
                        <p>Ordinateurs et supports fournis</p>
                      </div>
                    </div>
                    <div className="info-item">
                      <FaGraduationCap className="info-icon" />
                      <div>
                        <strong>Attestation</strong>
                        <p>Certificat de participation délivré</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .formations-container {
          background: var(--bg-primary);
          min-height: 100vh;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .formations-container .container {
          max-width: 1400px !important;
          margin: 0 auto !important;
          padding: 0 1rem !important;
          width: 100% !important;
        }

        .formations-hero {
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

        .filters-section {
          padding: 2rem 0;
        }

        .filters-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
        }

        .filters-card h4 {
          color: var(--text-primary);
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .filters-card p {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin-bottom: 0;
        }

        .form-label {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .form-select {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          padding: 0.75rem;
          font-size: 0.875rem;
          color: var(--text-primary);
          transition: all 0.3s ease;
        }

        .form-select:focus {
          background: rgba(255, 255, 255, 0.12);
          border-color: var(--warning);
          box-shadow: 0 0 0 3px rgba(241, 196, 14, 0.1);
          outline: none;
          color: var(--text-primary);
        }

        .formations-section {
          padding: 3rem 0;
        }

        .formations-grid {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .formation-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .formation-card:hover {
          transform: translateY(-4px);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .formation-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .formation-meta {
          display: flex;
          gap: 0.75rem;
        }

        .level-badge {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 600;
        }

        .duration-badge {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .rating {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.875rem;
        }

        .star-filled {
          color: #f59e0b;
        }

        .reviews {
          color: var(--text-tertiary);
          font-size: 0.8rem;
        }

        .formation-title {
          color: var(--text-primary);
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .formation-description {
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }

        .formation-details {
          margin-bottom: 1.5rem;
        }

        .detail-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.5rem;
          color: var(--text-tertiary);
          font-size: 0.875rem;
        }

        .detail-row span {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .price {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e !important;
          padding: 0.25rem 0.5rem;
          border-radius: 8px;
          font-weight: 600;
        }

        .objectives {
          margin-bottom: 2rem;
        }

        .objectives h6 {
          color: var(--text-primary);
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .objectives ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .objectives li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
        }

        .objectives svg {
          color: #22c55e;
          flex-shrink: 0;
        }

        .formation-actions {
          display: flex;
          gap: 1rem;
        }

        .sidebar {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .upcoming-card,
        .info-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 1.5rem;
        }

        .upcoming-card h5,
        .info-card h5 {
          color: var(--text-primary);
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .workshops-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .workshop-item {
          display: flex;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .workshop-date {
          background: var(--warning);
          color: var(--dark-900);
          padding: 0.5rem;
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 600;
          text-align: center;
          min-width: 50px;
          height: fit-content;
        }

        .workshop-info h6 {
          color: var(--text-primary);
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .workshop-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .workshop-meta span {
          color: var(--text-tertiary);
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .spots {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e !important;
          padding: 0.25rem 0.5rem;
          border-radius: 6px;
          font-weight: 600;
        }

        .info-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .info-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .info-icon {
          color: var(--warning);
          font-size: 1.1rem;
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
          
          .formation-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          
          .formation-actions {
            flex-direction: column;
          }
          
          .detail-row {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </div>
  );
};

export default Formations;