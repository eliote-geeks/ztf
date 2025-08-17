import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCoffee,
  FaUtensils,
  FaBreadSlice,
  FaCookie,
  FaWineBottle,
  FaLeaf,
  FaClock,
  FaMapMarkerAlt,
  FaDollarSign,
  FaUsers,
  FaStar,
  FaWifi,
  FaVolumeUp,
  FaNewspaper,
  FaCouch,
  FaChair,
  FaTv,
  FaMusic,
  FaThermometerHalf,
  FaCheckCircle,
  FaInfoCircle,
  FaPhone,
  FaCalendar,
  FaHeart,
  FaShoppingCart,
  FaPercent,
  FaGift
} from 'react-icons/fa';

const Cafeteria = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const menuCategories = [
    { id: 'hot-drinks', name: 'Boissons chaudes', icon: FaCoffee },
    { id: 'cold-drinks', name: 'Boissons froides', icon: FaWineBottle },
    { id: 'snacks', name: 'Collations', icon: FaCookie },
    { id: 'meals', name: 'Repas légers', icon: FaUtensils }
  ];

  const menuItems = [
    // Hot Drinks
    {
      id: 1,
      category: 'hot-drinks',
      name: 'Café expresso',
      description: 'Café arabica torréfaction artisanale',
      price: 300,
      popular: true,
      options: ['Simple', 'Double', 'Décaféiné']
    },
    {
      id: 2,
      category: 'hot-drinks',
      name: 'Cappuccino',
      description: 'Expresso avec mousse de lait onctueuse',
      price: 450,
      popular: false,
      options: ['Classique', 'Vanille', 'Caramel']
    },
    {
      id: 3,
      category: 'hot-drinks',
      name: 'Thé',
      description: 'Sélection de thés premium',
      price: 250,
      popular: false,
      options: ['Earl Grey', 'Vert', 'Menthe', 'Gingembre']
    },
    {
      id: 4,
      category: 'hot-drinks',
      name: 'Chocolat chaud',
      description: 'Chocolat belge avec chantilly',
      price: 400,
      popular: true,
      options: ['Noir', 'Lait', 'Blanc']
    },
    // Cold Drinks
    {
      id: 5,
      category: 'cold-drinks',
      name: 'Jus de fruits frais',
      description: 'Fruits de saison pressés maison',
      price: 350,
      popular: true,
      options: ['Orange', 'Mangue', 'Ananas', 'Pastèque']
    },
    {
      id: 6,
      category: 'cold-drinks',
      name: 'Smoothies',
      description: 'Mélanges de fruits et légumes',
      price: 500,
      popular: false,
      options: ['Tropical', 'Vert détox', 'Fruits rouges']
    },
    {
      id: 7,
      category: 'cold-drinks',
      name: 'Café glacé',
      description: 'Café froid avec glaçons et lait',
      price: 400,
      popular: false,
      options: ['Nature', 'Vanille', 'Caramel']
    },
    {
      id: 8,
      category: 'cold-drinks',
      name: 'Eau minérale',
      description: 'Eau plate et gazeuse',
      price: 150,
      popular: false,
      options: ['50cl', '1L', 'Gazeuse']
    },
    // Snacks
    {
      id: 9,
      category: 'snacks',
      name: 'Croissants',
      description: 'Viennoiseries fraîches du matin',
      price: 200,
      popular: true,
      options: ['Nature', 'Chocolat', 'Amande']
    },
    {
      id: 10,
      category: 'snacks',
      name: 'Muffins',
      description: 'Fait maison aux fruits',
      price: 300,
      popular: false,
      options: ['Myrtille', 'Chocolat', 'Banane']
    },
    {
      id: 11,
      category: 'snacks',
      name: 'Biscuits',
      description: 'Cookies et sablés artisanaux',
      price: 150,
      popular: false,
      options: ['Chocolat', 'Avoine', 'Noix de coco']
    },
    {
      id: 12,
      category: 'snacks',
      name: 'Fruits secs',
      description: 'Mélange énergétique',
      price: 250,
      popular: false,
      options: ['Classique', 'Tropical', 'Protéiné']
    },
    // Meals
    {
      id: 13,
      category: 'meals',
      name: 'Sandwichs',
      description: 'Pain frais garni au choix',
      price: 800,
      popular: true,
      options: ['Jambon-fromage', 'Thon-crudités', 'Végétarien']
    },
    {
      id: 14,
      category: 'meals',
      name: 'Salades',
      description: 'Fraîches et équilibrées',
      price: 700,
      popular: true,
      options: ['César', 'Mixte', 'Fruits']
    },
    {
      id: 15,
      category: 'meals',
      name: 'Wraps',
      description: 'Tortilla garnie de légumes',
      price: 600,
      popular: false,
      options: ['Poulet', 'Végétal', 'Saumon']
    },
    {
      id: 16,
      category: 'meals',
      name: 'Quiches',
      description: 'Portions individuelles chaudes',
      price: 500,
      popular: false,
      options: ['Lorraine', 'Épinards', 'Saumon']
    }
  ];

  const features = [
    {
      name: 'WiFi gratuit',
      description: 'Connexion haut débit',
      icon: FaWifi,
      color: 'text-primary'
    },
    {
      name: 'Espace détente',
      description: 'Canapés et fauteuils confortables',
      icon: FaCouch,
      color: 'text-success'
    },
    {
      name: 'Journaux du jour',
      description: 'Presse locale et internationale',
      icon: FaNewspaper,
      color: 'text-warning'
    },
    {
      name: 'Musique d\'ambiance',
      description: 'Volume adapté pour étudier',
      icon: FaMusic,
      color: 'text-info'
    },
    {
      name: 'Climatisation',
      description: 'Température contrôlée',
      icon: FaThermometerHalf,
      color: 'text-danger'
    },
    {
      name: 'Télévision',
      description: 'Informations et programmes éducatifs',
      icon: FaTv,
      color: 'text-secondary'
    }
  ];

  const schedule = [
    { day: 'Lundi - Vendredi', hours: '7h30 - 19h30', status: 'open' },
    { day: 'Samedi', hours: '8h00 - 18h00', status: 'open' },
    { day: 'Dimanche', hours: '9h00 - 16h00', status: 'open' }
  ];

  const offers = [
    {
      title: 'Menu Étudiant',
      description: 'Sandwich + Boisson + Dessert',
      price: 1200,
      discount: '20%',
      icon: FaGift,
      color: 'text-success'
    },
    {
      title: 'Happy Hour',
      description: 'Café + Viennoiserie',
      price: 400,
      discount: '15%',
      icon: FaPercent,
      color: 'text-warning'
    },
    {
      title: 'Carte fidélité',
      description: '10 cafés = 1 gratuit',
      price: 0,
      discount: 'Fidélité',
      icon: FaHeart,
      color: 'text-danger'
    }
  ];

  const stats = [
    { label: 'Places assises', value: '45', icon: FaChair },
    { label: 'Articles au menu', value: '35+', icon: FaUtensils },
    { label: 'Clients par jour', value: '200+', icon: FaUsers },
    { label: 'Note satisfaction', value: '4.6/5', icon: FaStar }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="cafeteria-container">
      {/* Hero Section */}
      <section className="cafeteria-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="hero-content">
                <div className="hero-badge">
                  <FaCoffee size={12} className="me-2" />
                  Cafétéria
                </div>
                <h1 className="hero-title">
                  <span className="text-warning">Cafétéria</span> de la Bibliothèque
                </h1>
                <p className="hero-subtitle">
                  Espace convivial pour vos pauses. Menu varié, prix étudiants, WiFi gratuit 
                  et ambiance studieuse. Ouvert 7j/7 pour vos moments de détente.
                </p>
                <div className="hero-actions">
                  <button className="btn btn-warning">
                    <FaShoppingCart size={14} className="me-2" />
                    Voir le menu
                  </button>
                  <Link to="/contact" className="btn btn-outline-warning">
                    <FaMapMarkerAlt size={14} className="me-2" />
                    Nous localiser
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
                      <Icon className="stat-icon text-danger" />
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
                <div className="current-time">
                  <h4>Actuellement</h4>
                  <div className="time-display">
                    <FaClock className="time-icon" />
                    <span className="current-status">Ouvert</span>
                  </div>
                  <div className="next-info">
                    Fermeture: 19h30
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="today-special">
                  <h4>Spécialité du jour</h4>
                  <div className="special-item">
                    <FaLeaf className="special-icon" />
                    <div>
                      <strong>Salade de saison</strong>
                      <p>Légumes frais du marché - 650 FCFA</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="occupancy">
                  <h4>Affluence</h4>
                  <div className="occupancy-bar">
                    <div className="occupancy-fill" style={{width: '60%'}}></div>
                  </div>
                  <div className="occupancy-text">
                    27/45 places occupées
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="menu-section">
        <div className="container">
          <div className="section-header">
            <h3>Notre menu</h3>
            <p>Une sélection de produits frais à prix abordables</p>
          </div>

          <div className="menu-filters">
            <button 
              className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              <FaUtensils size={14} />
              Tout le menu
            </button>
            {menuCategories.map(category => {
              const Icon = category.icon;
              return (
                <button 
                  key={category.id}
                  className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <Icon size={14} />
                  {category.name}
                </button>
              );
            })}
          </div>

          <div className="menu-grid">
            {filteredItems.map(item => (
              <div key={item.id} className="menu-item-card">
                {item.popular && (
                  <div className="popular-badge">
                    <FaStar size={10} />
                    Populaire
                  </div>
                )}
                <div className="item-header">
                  <h5>{item.name}</h5>
                  <span className="item-price">{item.price} FCFA</span>
                </div>
                <p className="item-description">{item.description}</p>
                <div className="item-options">
                  <span className="options-label">Options :</span>
                  <div className="options-list">
                    {item.options.map((option, idx) => (
                      <span key={idx} className="option-tag">{option}</span>
                    ))}
                  </div>
                </div>
                <button className="btn btn-outline-warning btn-sm">
                  <FaShoppingCart size={12} className="me-2" />
                  Commander
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="offers-section">
        <div className="container">
          <div className="section-header">
            <h3>Offres spéciales</h3>
            <p>Profitez de nos promotions et avantages</p>
          </div>
          <div className="offers-grid">
            {offers.map((offer, index) => {
              const Icon = offer.icon;
              return (
                <div key={index} className="offer-card">
                  <div className="offer-header">
                    <Icon className={`offer-icon ${offer.color}`} />
                    <div className="offer-discount">-{offer.discount}</div>
                  </div>
                  <h5>{offer.title}</h5>
                  <p>{offer.description}</p>
                  <div className="offer-price">
                    {offer.price > 0 ? `${offer.price} FCFA` : 'Gratuit'}
                  </div>
                  <button className="btn btn-warning btn-sm">
                    <FaGift size={12} className="me-2" />
                    Profiter
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h3>Pourquoi choisir notre cafétéria ?</h3>
            <p>Un environnement pensé pour les étudiants et chercheurs</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="feature-card">
                  <Icon className={`feature-icon ${feature.color}`} />
                  <h6>{feature.name}</h6>
                  <p>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Info & Schedule */}
      <section className="info-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="schedule-card">
                <h4>
                  <FaClock className="me-2" />
                  Horaires d'ouverture
                </h4>
                <div className="schedule-list">
                  {schedule.map((item, index) => (
                    <div key={index} className="schedule-item">
                      <span className="schedule-day">{item.day}</span>
                      <span className="schedule-hours">{item.hours}</span>
                      <span className={`schedule-status ${item.status}`}>
                        {item.status === 'open' ? 'Ouvert' : 'Fermé'}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="schedule-note">
                  <FaInfoCircle className="note-icon" />
                  <p>Service continu toute la journée, pas de fermeture à midi</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="practical-info">
                <h4>
                  <FaInfoCircle className="me-2" />
                  Informations pratiques
                </h4>
                <div className="info-list">
                  <div className="info-item">
                    <FaDollarSign className="info-icon text-success" />
                    <div>
                      <strong>Paiement</strong>
                      <p>Espèces, cartes bancaires et paiement mobile</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <FaUsers className="info-icon text-primary" />
                    <div>
                      <strong>Réservations</strong>
                      <p>Groupes de plus de 10 personnes (48h à l'avance)</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <FaLeaf className="info-icon text-success" />
                    <div>
                      <strong>Produits bio</strong>
                      <p>Sélection d'aliments biologiques et équitables</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <FaPhone className="info-icon text-info" />
                    <div>
                      <strong>Contact</strong>
                      <p>+237 233 000 001 (commandes à emporter)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .cafeteria-container {
          background: var(--bg-primary);
          min-height: 100vh;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .cafeteria-container .container {
          max-width: 1400px !important;
          margin: 0 auto !important;
          padding: 0 1rem !important;
          width: 100% !important;
        }

        .cafeteria-hero {
          padding: 3rem 0;
          background: linear-gradient(135deg, 
            rgba(239, 68, 68, 0.1) 0%, 
            rgba(220, 38, 38, 0.05) 100%);
          border-radius: 0 0 20px 20px;
          margin-bottom: 2rem;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #ef4444;
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
        .menu-section,
        .offers-section,
        .features-section,
        .info-section {
          padding: 3rem 0;
        }

        .status-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
        }

        .current-time h4,
        .today-special h4,
        .occupancy h4 {
          color: var(--text-primary);
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .time-display {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }

        .time-icon {
          color: #22c55e;
          font-size: 1.2rem;
        }

        .current-status {
          color: #22c55e;
          font-weight: 600;
          font-size: 1.1rem;
        }

        .next-info {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .special-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .special-icon {
          color: #22c55e;
          font-size: 1.5rem;
        }

        .special-item strong {
          color: var(--text-primary);
          font-size: 1rem;
          display: block;
        }

        .special-item p {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin: 0;
        }

        .occupancy-bar {
          width: 100%;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 0.5rem;
        }

        .occupancy-fill {
          height: 100%;
          background: linear-gradient(90deg, #22c55e, #3b82f6);
          transition: width 0.3s ease;
        }

        .occupancy-text {
          color: var(--text-secondary);
          font-size: 0.875rem;
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

        .menu-filters {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-secondary);
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.3s ease;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .filter-btn:hover,
        .filter-btn.active {
          background: var(--warning);
          color: var(--dark-900);
          border-color: var(--warning);
        }

        .menu-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .menu-item-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 1.5rem;
          position: relative;
          transition: all 0.3s ease;
        }

        .menu-item-card:hover {
          transform: translateY(-2px);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .popular-badge {
          position: absolute;
          top: -8px;
          right: 1rem;
          background: #ef4444;
          color: white;
          font-size: 0.7rem;
          font-weight: 600;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .item-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .item-header h5 {
          color: var(--text-primary);
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0;
        }

        .item-price {
          color: var(--warning);
          font-weight: 700;
          font-size: 1rem;
        }

        .item-description {
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1rem;
          font-size: 0.875rem;
        }

        .item-options {
          margin-bottom: 1.5rem;
        }

        .options-label {
          color: var(--text-primary);
          font-size: 0.8rem;
          font-weight: 600;
          display: block;
          margin-bottom: 0.5rem;
        }

        .options-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .option-tag {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          padding: 0.25rem 0.5rem;
          border-radius: 6px;
          font-size: 0.7rem;
          font-weight: 500;
        }

        .offers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .offer-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .offer-card:hover {
          transform: translateY(-4px);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .offer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .offer-icon {
          font-size: 2rem;
        }

        .offer-discount {
          background: var(--warning);
          color: var(--dark-900);
          font-size: 0.8rem;
          font-weight: 700;
          padding: 0.25rem 0.5rem;
          border-radius: 8px;
        }

        .offer-card h5 {
          color: var(--text-primary);
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .offer-card p {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .offer-price {
          color: var(--warning);
          font-weight: 700;
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-2px);
          border-color: rgba(241, 196, 14, 0.3);
        }

        .feature-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .feature-card h6 {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .feature-card p {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin: 0;
        }

        .schedule-card,
        .practical-info {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
        }

        .schedule-card h4,
        .practical-info h4 {
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
        }

        .schedule-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .schedule-item {
          display: grid;
          grid-template-columns: 2fr 1fr auto;
          gap: 1rem;
          align-items: center;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 8px;
        }

        .schedule-day {
          color: var(--text-primary);
          font-weight: 600;
        }

        .schedule-hours {
          color: var(--text-secondary);
          text-align: center;
        }

        .schedule-status {
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0.25rem 0.5rem;
          border-radius: 6px;
          text-align: center;
        }

        .schedule-status.open {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
        }

        .schedule-note {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(239, 68, 68, 0.1);
          border-radius: 8px;
        }

        .note-icon {
          color: #ef4444;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .schedule-note p {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin: 0;
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
          
          .menu-filters {
            justify-content: flex-start;
            overflow-x: auto;
            padding-bottom: 1rem;
          }
          
          .menu-grid,
          .offers-grid,
          .features-grid {
            grid-template-columns: 1fr;
          }
          
          .item-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
          
          .offer-header {
            flex-direction: column;
            gap: 1rem;
          }
          
          .schedule-item {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Cafeteria;