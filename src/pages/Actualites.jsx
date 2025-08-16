import React, { useState } from 'react';
import { 
  FaNewspaper, 
  FaCalendar, 
  FaUser,
  FaEye,
  FaShare,
  FaHeart,
  FaComment,
  FaPlay,
  FaStar,
  FaBookOpen,
  FaGraduationCap,
  FaGlobe
} from 'react-icons/fa';

const Actualites = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Toutes les actualités', count: 45 },
    { id: 'news', label: 'Nouvelles', count: 18 },
    { id: 'research', label: 'Focus Recherche', count: 12 },
    { id: 'events', label: 'Événements', count: 8 },
    { id: 'publications', label: 'Publications', count: 7 }
  ];

  const news = [
    {
      id: 1,
      title: "Nouvelle collection de livres sur l'histoire du Cameroun",
      excerpt: "La bibliothèque enrichit sa collection avec 200 nouveaux ouvrages dédiés à l'histoire contemporaine du Cameroun, incluant des œuvres d'auteurs camerounais reconnus.",
      author: "Dr. Marie Atangana",
      date: "2024-01-15",
      category: "Nouvelles",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
      views: 1250,
      likes: 89,
      comments: 23,
      featured: true
    },
    {
      id: 2,
      title: "Conférence sur la théologie africaine contemporaine",
      excerpt: "Le Pr. Zacharias Tanee Fomum animera une conférence sur les défis de la théologie africaine moderne le 25 janvier à l'amphithéâtre principal.",
      author: "Comité d'organisation",
      date: "2024-01-12",
      category: "Événements",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop",
      views: 980,
      likes: 67,
      comments: 15
    },
    {
      id: 3,
      title: "Recherche : L'impact de la littérature orale sur l'éducation",
      excerpt: "Une étude menée par nos chercheurs révèle l'importance des contes traditionnels camerounais dans l'apprentissage des enfants.",
      author: "Dr. Paul Mbarga",
      date: "2024-01-10",
      category: "Focus Recherche",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      views: 756,
      likes: 45,
      comments: 12
    },
    {
      id: 4,
      title: "Nouvelle plateforme numérique pour les étudiants",
      excerpt: "Lancement d'une plateforme interactive permettant aux étudiants d'accéder aux ressources numériques depuis leurs appareils mobiles.",
      author: "Équipe Technique",
      date: "2024-01-08",
      category: "Nouvelles",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
      views: 1420,
      likes: 112,
      comments: 34
    },
    {
      id: 5,
      title: "Publication : Philosophie Ubuntu et développement durable",
      excerpt: "Nouveau livre du Dr. Emmanuel Ngwé explorant les liens entre la philosophie Ubuntu et les enjeux environnementaux africains.",
      author: "Dr. Emmanuel Ngwé",
      date: "2024-01-05",
      category: "Publications",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=400&fit=crop",
      views: 892,
      likes: 76,
      comments: 18
    },
    {
      id: 6,
      title: "Atelier : Techniques de recherche documentaire",
      excerpt: "Formation pratique sur les méthodes modernes de recherche documentaire et l'utilisation des bases de données académiques.",
      author: "Équipe Bibliothécaires",
      date: "2024-01-03",
      category: "Événements",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop",
      views: 645,
      likes: 52,
      comments: 9
    }
  ];

  const featuredVideo = {
    title: "Conférence inaugurale : L'avenir des bibliothèques africaines",
    description: "Intervention du Pr. Zacharias Tanee Fomum sur les défis et opportunités des bibliothèques universitaires en Afrique.",
    thumbnail: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop",
    duration: "45:32",
    views: 3250,
    date: "2024-01-01"
  };

  const upcomingEvents = [
    {
      id: 1,
      title: "Journée portes ouvertes",
      date: "2024-01-20",
      time: "09:00 - 17:00",
      location: "Campus principal",
      description: "Découverte des services et ressources de la bibliothèque."
    },
    {
      id: 2,
      title: "Salon du livre camerounais",
      date: "2024-01-25",
      time: "10:00 - 16:00",
      location: "Hall d'exposition",
      description: "Rencontres avec des auteurs camerounais contemporains."
    },
    {
      id: 3,
      title: "Séminaire : Digitalisation du patrimoine",
      date: "2024-02-01",
      time: "14:00 - 17:00",
      location: "Salle de conférence",
      description: "Stratégies de préservation numérique du patrimoine culturel."
    }
  ];

  const filteredNews = selectedCategory === 'all' 
    ? news 
    : news.filter(item => {
        const categoryMap = {
          'news': 'Nouvelles',
          'research': 'Focus Recherche',
          'events': 'Événements',
          'publications': 'Publications'
        };
        return item.category === categoryMap[selectedCategory];
      });

  return (
    <div className="actualites-container">
      {/* Hero Section */}
      <section className="actualites-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="hero-content">
                <div className="hero-badge">
                  <FaNewspaper size={12} className="me-2" />
                  Actualités & Recherche
                </div>
                <h1 className="hero-title">
                  Actualités & <span className="text-warning">Recherche</span>
                </h1>
                <p className="hero-subtitle">
                  Restez informé des dernières nouvelles, événements et découvertes 
                  de notre communauté académique camerounaise.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="news-stats">
                <div className="stat-item">
                  <FaNewspaper className="stat-icon" />
                  <div>
                    <div className="stat-number">45</div>
                    <div className="stat-label">Articles</div>
                  </div>
                </div>
                <div className="stat-item">
                  <FaEye className="stat-icon" />
                  <div>
                    <div className="stat-number">12,450</div>
                    <div className="stat-label">Vues totales</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="featured-video-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="featured-video-card">
                <div className="video-thumbnail">
                  <img src={featuredVideo.thumbnail} alt={featuredVideo.title} />
                  <div className="video-overlay">
                    <button className="play-button">
                      <FaPlay size={24} />
                    </button>
                  </div>
                  <div className="video-duration">{featuredVideo.duration}</div>
                </div>
                <div className="video-info">
                  <h3>{featuredVideo.title}</h3>
                  <p>{featuredVideo.description}</p>
                  <div className="video-meta">
                    <span className="meta-item">
                      <FaEye size={12} />
                      {featuredVideo.views.toLocaleString()} vues
                    </span>
                    <span className="meta-item">
                      <FaCalendar size={12} />
                      {new Date(featuredVideo.date).toLocaleDateString('fr-FR')}
                    </span>
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
            
            {/* Sidebar */}
            <div className="col-lg-3">
              {/* Categories */}
              <div className="sidebar-card">
                <div className="sidebar-header">
                  <FaNewspaper size={16} />
                  <h5>Catégories</h5>
                </div>
                <div className="categories-list">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`category-item ${selectedCategory === category.id ? 'active' : ''}`}
                    >
                      <span className="category-label">{category.label}</span>
                      <span className="category-count">{category.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="sidebar-card">
                <div className="sidebar-header">
                  <FaCalendar size={16} />
                  <h5>Événements à venir</h5>
                </div>
                <div className="events-list">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="event-item">
                      <div className="event-date">
                        <div className="event-day">
                          {new Date(event.date).getDate()}
                        </div>
                        <div className="event-month">
                          {new Date(event.date).toLocaleDateString('fr-FR', { month: 'short' })}
                        </div>
                      </div>
                      <div className="event-info">
                        <h6>{event.title}</h6>
                        <div className="event-details">
                          <div className="event-time">{event.time}</div>
                          <div className="event-location">{event.location}</div>
                        </div>
                        <p>{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content - News */}
            <div className="col-lg-9">
              <div className="news-header">
                <h4>Dernières actualités</h4>
                <span className="news-count">
                  {filteredNews.length} article{filteredNews.length > 1 ? 's' : ''}
                </span>
              </div>

              <div className="row g-4">
                {filteredNews.map((article) => (
                  <div key={article.id} className={`${article.featured ? 'col-12' : 'col-lg-6'}`}>
                    <article className={`news-card ${article.featured ? 'featured' : ''}`}>
                      <div className="news-image">
                        <img src={article.image} alt={article.title} />
                        {article.featured && (
                          <div className="featured-badge">
                            <FaStar size={12} />
                            À la une
                          </div>
                        )}
                      </div>
                      
                      <div className="news-content">
                        <div className="news-meta">
                          <span className="news-category">{article.category}</span>
                          <span className="news-date">
                            <FaCalendar size={12} />
                            {new Date(article.date).toLocaleDateString('fr-FR')}
                          </span>
                        </div>
                        
                        <h5 className="news-title">{article.title}</h5>
                        <p className="news-excerpt">{article.excerpt}</p>
                        
                        <div className="news-footer">
                          <div className="news-author">
                            <FaUser size={12} />
                            {article.author}
                          </div>
                          <div className="news-stats">
                            <span className="stat-item">
                              <FaEye size={12} />
                              {article.views}
                            </span>
                            <span className="stat-item">
                              <FaHeart size={12} />
                              {article.likes}
                            </span>
                            <span className="stat-item">
                              <FaComment size={12} />
                              {article.comments}
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .actualites-container {
          background: var(--bg-primary);
          min-height: 100vh;
        }

        .container {
          max-width: 1200px;
        }

        /* Hero Section */
        .actualites-hero {
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

        .news-stats {
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

        /* Featured Video */
        .featured-video-section {
          padding: 2rem 0;
        }

        .featured-video-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          gap: 2rem;
          padding: 1.5rem;
        }

        .video-thumbnail {
          position: relative;
          flex: 0 0 300px;
          height: 200px;
          border-radius: 8px;
          overflow: hidden;
        }

        .video-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.5);
          transition: opacity 0.3s ease;
        }

        .play-button {
          background: var(--warning);
          border: none;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--dark-900);
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .play-button:hover {
          transform: scale(1.1);
        }

        .video-duration {
          position: absolute;
          bottom: 0.5rem;
          right: 0.5rem;
          background: rgba(0, 0, 0, 0.8);
          color: var(--text-primary);
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.75rem;
        }

        .video-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .video-info h3 {
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .video-info p {
          color: var(--text-secondary);
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .video-meta {
          display: flex;
          gap: 1.5rem;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-tertiary);
          font-size: 0.875rem;
        }

        /* Content Section */
        .content-section {
          padding: 2rem 0 4rem;
        }

        .sidebar-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }

        .sidebar-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .sidebar-header h5 {
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

        .events-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .event-item {
          display: flex;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .event-date {
          flex: 0 0 50px;
          text-align: center;
          background: rgba(241, 196, 14, 0.1);
          border-radius: 6px;
          padding: 0.5rem;
          border: 1px solid rgba(241, 196, 14, 0.3);
        }

        .event-day {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--warning);
        }

        .event-month {
          font-size: 0.7rem;
          color: var(--warning);
          text-transform: uppercase;
        }

        .event-info h6 {
          color: var(--text-primary);
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .event-details {
          margin-bottom: 0.5rem;
        }

        .event-time,
        .event-location {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .event-info p {
          font-size: 0.75rem;
          color: var(--text-tertiary);
          margin: 0;
        }

        .news-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .news-header h4 {
          color: var(--text-primary);
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0;
        }

        .news-count {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        /* News Cards */
        .news-card {
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

        .news-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .news-card.featured {
          flex-direction: row;
          min-height: 300px;
        }

        .news-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .news-card.featured .news-image {
          flex: 0 0 400px;
          height: auto;
        }

        .news-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .featured-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: var(--warning);
          color: var(--dark-900);
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .news-content {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .news-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .news-category {
          background: rgba(241, 196, 14, 0.1);
          color: var(--warning);
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .news-date {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--text-tertiary);
          font-size: 0.75rem;
        }

        .news-title {
          color: var(--text-primary);
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          line-height: 1.4;
        }

        .news-card.featured .news-title {
          font-size: 1.5rem;
        }

        .news-excerpt {
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
          flex: 1;
        }

        .news-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .news-author {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .news-stats {
          display: flex;
          gap: 1rem;
        }

        .news-stats .stat-item {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--text-tertiary);
          font-size: 0.75rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .news-stats {
            margin-top: 2rem;
          }
          
          .featured-video-card {
            flex-direction: column;
          }
          
          .video-thumbnail {
            flex: none;
            width: 100%;
          }
          
          .news-card.featured {
            flex-direction: column;
          }
          
          .news-card.featured .news-image {
            flex: none;
            height: 200px;
          }
          
          .news-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Actualites;