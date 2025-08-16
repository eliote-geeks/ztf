import React, { useState } from 'react';
import { 
  FaDatabase, 
  FaBook, 
  FaGlobe,
  FaDownload,
  FaExternalLinkAlt,
  FaLock,
  FaUnlock,
  FaStar,
  FaSearch,
  FaPlay,
  FaHeadphones,
  FaFilePdf,
  FaVideo,
  FaBookOpen,
  FaGraduationCap,
  FaClock
} from 'react-icons/fa';

const Ressources = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Toutes les ressources', count: 8450 },
    { id: 'databases', label: 'Bases de données', count: 12 },
    { id: 'ebooks', label: 'E-books', count: 3200 },
    { id: 'journals', label: 'Revues numériques', count: 580 },
    { id: 'multimedia', label: 'Multimédia', count: 1450 },
    { id: 'archives', label: 'Archives numériques', count: 3208 }
  ];

  const databases = [
    {
      id: 1,
      name: "CAIRN",
      description: "Plateforme de référence des publications francophones en sciences humaines et sociales",
      url: "https://cairn.info",
      type: "Premium",
      subjects: ["Sociologie", "Histoire", "Philosophie", "Littérature"],
      content: "450,000+ articles, 12,000+ ouvrages",
      access: "Campus + Distant",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      featured: true
    },
    {
      id: 2,
      name: "OpenEdition",
      description: "Plateforme de ressources électroniques en sciences humaines et sociales",
      url: "https://openedition.org",
      type: "Open Access",
      subjects: ["Anthropologie", "Histoire", "Géographie", "Sciences politiques"],
      content: "600+ revues, 9,000+ livres",
      access: "Libre",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Persée",
      description: "Programme de numérisation et de diffusion de revues scientifiques françaises",
      url: "https://persee.fr",
      type: "Open Access",
      subjects: ["Archéologie", "Histoire ancienne", "Linguistique"],
      content: "800,000+ documents",
      access: "Libre",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "African Journals Online (AJOL)",
      description: "La plus grande collection de revues académiques publiées en Afrique",
      url: "https://ajol.info",
      type: "Open Access",
      subjects: ["Études africaines", "Développement", "Santé publique"],
      content: "500+ revues africaines",
      access: "Libre",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=300&fit=crop"
    }
  ];

  const ebooksCollections = [
    {
      id: 1,
      title: "Collection Théologie Africaine",
      description: "Ouvrages spécialisés en théologie contextuelle africaine",
      count: 450,
      format: "PDF, EPUB",
      languages: ["Français", "Anglais"],
      featured: true,
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Littérature Camerounaise",
      description: "Œuvres complètes d'auteurs camerounais contemporains",
      count: 280,
      format: "PDF, EPUB",
      languages: ["Français", "Anglais"],
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Sciences et Développement",
      description: "Publications scientifiques sur le développement durable en Afrique",
      count: 320,
      format: "PDF",
      languages: ["Français", "Anglais"],
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop"
    }
  ];

  const multimediaResources = [
    {
      id: 1,
      title: "Conférences ZTF",
      description: "Enregistrements vidéo des conférences du Pr. Zacharias Tanee Fomum",
      type: "Vidéo",
      count: "45 vidéos",
      duration: "120 heures",
      format: "MP4, HD",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Musique Traditionnelle Camerounaise",
      description: "Collection d'enregistrements de musique traditionnelle des différentes régions",
      type: "Audio",
      count: "200 pistes",
      duration: "50 heures",
      format: "MP3, FLAC",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Documentaires Éducatifs",
      description: "Films documentaires sur l'histoire et la culture du Cameroun",
      type: "Vidéo",
      count: "25 documentaires",
      duration: "80 heures",
      format: "MP4, HD",
      image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&h=300&fit=crop"
    }
  ];

  const accessInfo = {
    campus: {
      title: "Accès sur site",
      description: "Disponible depuis tous les postes de la bibliothèque",
      icon: FaUnlock,
      color: "success"
    },
    remote: {
      title: "Accès distant",
      description: "Accessible depuis l'extérieur avec vos identifiants étudiants",
      icon: FaGlobe,
      color: "primary"
    },
    premium: {
      title: "Ressources premium",
      description: "Accès payant, disponible pour les chercheurs et doctorants",
      icon: FaStar,
      color: "warning"
    },
    open: {
      title: "Libre accès",
      description: "Ressources gratuites accessibles à tous",
      icon: FaUnlock,
      color: "info"
    }
  };

  return (
    <div className="ressources-container">
      {/* Hero Section */}
      <section className="ressources-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="hero-content">
                <div className="hero-badge">
                  <FaDatabase size={12} className="me-2" />
                  Ressources Numériques
                </div>
                <h1 className="hero-title">
                  Ressources <span className="text-warning">Numériques</span>
                </h1>
                <p className="hero-subtitle">
                  Accédez à nos bases de données spécialisées, collections d'e-books, 
                  revues numériques et ressources multimédias de qualité académique.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="resources-stats">
                <div className="stat-item">
                  <FaDatabase className="stat-icon" />
                  <div>
                    <div className="stat-number">12</div>
                    <div className="stat-label">Bases de données</div>
                  </div>
                </div>
                <div className="stat-item">
                  <FaBook className="stat-icon" />
                  <div>
                    <div className="stat-number">8,450</div>
                    <div className="stat-label">Ressources</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access Information */}
      <section className="access-info-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="section-title text-center mb-4">Modalités d'accès</h3>
            </div>
          </div>
          <div className="row g-4">
            {Object.entries(accessInfo).map(([key, info]) => {
              const Icon = info.icon;
              return (
                <div key={key} className="col-lg-3 col-md-6">
                  <div className="access-card">
                    <div className="access-icon">
                      <Icon size={24} />
                    </div>
                    <h5>{info.title}</h5>
                    <p>{info.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="content-section">
        <div className="container">
          <div className="row g-4">
            
            {/* Sidebar - Categories */}
            <div className="col-lg-3">
              <div className="categories-card">
                <div className="categories-header">
                  <FaDatabase size={16} />
                  <h5>Types de ressources</h5>
                </div>
                <div className="categories-list">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`category-item ${selectedCategory === category.id ? 'active' : ''}`}
                    >
                      <span className="category-label">{category.label}</span>
                      <span className="category-count">{category.count.toLocaleString()}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-lg-9">
              
              {/* Databases Section */}
              {(selectedCategory === 'all' || selectedCategory === 'databases') && (
                <div className="section-block">
                  <div className="section-header">
                    <h4>Bases de données</h4>
                    <span className="section-count">{databases.length} bases disponibles</span>
                  </div>

                  <div className="row g-4">
                    {databases.map((db) => (
                      <div key={db.id} className={`${db.featured ? 'col-12' : 'col-lg-6'}`}>
                        <div className={`resource-card database-card ${db.featured ? 'featured' : ''}`}>
                          <div className="resource-image">
                            <img src={db.image} alt={db.name} />
                            <div className="resource-overlay">
                              <button className="btn btn-sm btn-primary">
                                <FaExternalLinkAlt size={14} />
                              </button>
                            </div>
                            {db.featured && (
                              <div className="featured-badge">
                                <FaStar size={12} />
                                Premium
                              </div>
                            )}
                            <div className="access-badge">
                              {db.type === 'Premium' ? (
                                <FaLock size={12} />
                              ) : (
                                <FaUnlock size={12} />
                              )}
                              {db.type}
                            </div>
                          </div>
                          
                          <div className="resource-content">
                            <h5 className="resource-title">{db.name}</h5>
                            <p className="resource-description">{db.description}</p>
                            
                            <div className="resource-details">
                              <div className="detail-item">
                                <strong>Contenu:</strong> {db.content}
                              </div>
                              <div className="detail-item">
                                <strong>Accès:</strong> {db.access}
                              </div>
                            </div>
                            
                            <div className="resource-subjects">
                              {db.subjects.map((subject, index) => (
                                <span key={index} className="subject-tag">
                                  {subject}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* E-books Section */}
              {(selectedCategory === 'all' || selectedCategory === 'ebooks') && (
                <div className="section-block">
                  <div className="section-header">
                    <h4>Collections E-books</h4>
                    <span className="section-count">{ebooksCollections.length} collections</span>
                  </div>

                  <div className="row g-4">
                    {ebooksCollections.map((collection) => (
                      <div key={collection.id} className="col-lg-4">
                        <div className={`resource-card ebook-card ${collection.featured ? 'featured' : ''}`}>
                          <div className="resource-image">
                            <img src={collection.image} alt={collection.title} />
                            <div className="resource-overlay">
                              <button className="btn btn-sm btn-warning">
                                <FaBookOpen size={14} />
                              </button>
                            </div>
                            {collection.featured && (
                              <div className="featured-badge">
                                <FaStar size={12} />
                                Populaire
                              </div>
                            )}
                          </div>
                          
                          <div className="resource-content">
                            <h6 className="resource-title">{collection.title}</h6>
                            <p className="resource-description">{collection.description}</p>
                            
                            <div className="resource-stats">
                              <div className="stat-item">
                                <FaBook size={12} />
                                {collection.count} livres
                              </div>
                              <div className="stat-item">
                                <FaFilePdf size={12} />
                                {collection.format}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Multimedia Section */}
              {(selectedCategory === 'all' || selectedCategory === 'multimedia') && (
                <div className="section-block">
                  <div className="section-header">
                    <h4>Ressources Multimédias</h4>
                    <span className="section-count">{multimediaResources.length} collections</span>
                  </div>

                  <div className="row g-4">
                    {multimediaResources.map((resource) => (
                      <div key={resource.id} className="col-lg-4">
                        <div className="resource-card multimedia-card">
                          <div className="resource-image">
                            <img src={resource.image} alt={resource.title} />
                            <div className="resource-overlay">
                              <button className="btn btn-sm btn-success">
                                {resource.type === 'Vidéo' ? <FaPlay size={14} /> : <FaHeadphones size={14} />}
                              </button>
                            </div>
                            <div className="media-type-badge">
                              {resource.type === 'Vidéo' ? <FaVideo size={12} /> : <FaHeadphones size={12} />}
                              {resource.type}
                            </div>
                          </div>
                          
                          <div className="resource-content">
                            <h6 className="resource-title">{resource.title}</h6>
                            <p className="resource-description">{resource.description}</p>
                            
                            <div className="resource-stats">
                              <div className="stat-item">
                                <FaPlay size={12} />
                                {resource.count}
                              </div>
                              <div className="stat-item">
                                <FaClock size={12} />
                                {resource.duration}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .ressources-container {
          background: var(--bg-primary);
          min-height: 100vh;
        }

        .container {
          max-width: 1200px;
        }

        /* Hero Section */
        .ressources-hero {
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

        .resources-stats {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.05);
          padding: 1rem;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .stat-icon {
          color: var(--warning);
          font-size: 1.5rem;
        }

        .stat-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        /* Access Info Section */
        .access-info-section {
          padding: 3rem 0;
        }

        .section-title {
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 600;
        }

        .access-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
          height: 100%;
        }

        .access-card:hover {
          transform: translateY(-4px);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .access-icon {
          width: 60px;
          height: 60px;
          background: rgba(241, 196, 14, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          color: var(--warning);
        }

        .access-card h5 {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .access-card p {
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.5;
        }

        /* Content Section */
        .content-section {
          padding: 2rem 0 4rem;
        }

        .categories-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
          height: fit-content;
          position: sticky;
          top: 100px;
        }

        .categories-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .categories-header h5 {
          margin: 0;
          font-size: 1rem;
          font-weight: 600;
        }

        .categories-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .category-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 0.75rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          text-align: left;
        }

        .category-item:hover,
        .category-item.active {
          background: rgba(241, 196, 14, 0.1);
          border-color: rgba(241, 196, 14, 0.3);
          color: var(--warning);
        }

        .category-count {
          font-size: 0.75rem;
          opacity: 0.7;
        }

        .section-block {
          margin-bottom: 4rem;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid rgba(255, 255, 255, 0.1);
        }

        .section-header h4 {
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0;
        }

        .section-count {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        /* Resource Cards */
        .resource-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .resource-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .resource-card.featured {
          border-color: rgba(241, 196, 14, 0.4);
        }

        .database-card.featured {
          flex-direction: row;
        }

        .resource-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .database-card.featured .resource-image {
          flex: 0 0 300px;
          height: auto;
        }

        .resource-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .resource-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .resource-card:hover .resource-overlay {
          opacity: 1;
        }

        .featured-badge,
        .access-badge,
        .media-type-badge {
          position: absolute;
          top: 1rem;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .featured-badge {
          left: 1rem;
          background: var(--warning);
          color: var(--dark-900);
        }

        .access-badge {
          right: 1rem;
          background: rgba(0, 0, 0, 0.8);
          color: var(--text-primary);
        }

        .media-type-badge {
          right: 1rem;
          background: rgba(34, 197, 94, 0.9);
          color: var(--text-primary);
        }

        .resource-content {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .resource-title {
          color: var(--text-primary);
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .database-card.featured .resource-title {
          font-size: 1.5rem;
        }

        .resource-description {
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.5;
          margin-bottom: 1rem;
          flex: 1;
        }

        .resource-details {
          margin-bottom: 1rem;
        }

        .detail-item {
          color: var(--text-secondary);
          font-size: 0.8rem;
          margin-bottom: 0.5rem;
        }

        .detail-item strong {
          color: var(--warning);
        }

        .resource-subjects {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .subject-tag {
          background: rgba(241, 196, 14, 0.1);
          color: var(--warning);
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 500;
        }

        .resource-stats {
          display: flex;
          justify-content: space-between;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .resource-stats .stat-item {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--text-tertiary);
          font-size: 0.75rem;
          background: none;
          padding: 0;
          border: none;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .resources-stats {
            margin-top: 2rem;
          }
          
          .database-card.featured {
            flex-direction: column;
          }
          
          .database-card.featured .resource-image {
            flex: none;
            height: 200px;
          }
          
          .categories-card {
            position: static;
            margin-bottom: 2rem;
          }
          
          .section-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Ressources;