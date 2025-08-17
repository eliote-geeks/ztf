import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaUser, 
  FaBook, 
  FaSearch,
  FaDownload,
  FaEye,
  FaStar,
  FaFilePdf,
  FaBookOpen,
  FaGraduationCap,
  FaFileAlt,
  FaHeart,
  FaChurch
} from 'react-icons/fa';

const CatalogueZTF = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'Toute l\'œuvre', count: 850 },
    { value: 'books', label: 'Livres publiés', count: 200 },
    { value: 'manuscripts', label: 'Manuscrits', count: 150 },
    { value: 'sermons', label: 'Prédications', count: 300 },
    { value: 'conferences', label: 'Conférences', count: 120 },
    { value: 'letters', label: 'Correspondances', count: 80 }
  ];

  const ztfWorks = [
    {
      id: 1,
      title: "L'Art de la Prière",
      category: "books",
      type: "book",
      year: 2019,
      pages: 420,
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=250&fit=crop",
      description: "Guide spirituel complet pour développer une vie de prière profonde et transformatrice.",
      subjects: ["Prière", "Spiritualité", "Formation"],
      rating: 4.9,
      reviews: 267,
      featured: true
    },
    {
      id: 2,
      title: "Fondements de la Foi Chrétienne",
      category: "books",
      type: "ebook",
      year: 2020,
      pages: 380,
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=250&fit=crop",
      description: "Exposé systématique des doctrines fondamentales du christianisme.",
      subjects: ["Doctrine", "Foi", "Enseignement"],
      rating: 4.8,
      reviews: 198,
      featured: true
    }
  ];

  return (
    <div className="ztf-container">
      {/* Hero Section */}
      <section className="ztf-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="hero-content">
                <div className="hero-badge">
                  <FaUser size={12} className="me-2" />
                  Collection Z.T. Fomum
                </div>
                <h1 className="hero-title">
                  Œuvres de <span className="text-warning">Zacharias Tanee Fomum</span>
                </h1>
                <p className="hero-subtitle">
                  Découvrez l'œuvre complète du Professeur Zacharias Tanee Fomum, 
                  visionnaire, théologien et fondateur de notre institution. 
                  Une collection unique de livres, manuscrits et enseignements.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ztf-stats">
                <div className="stat-card">
                  <FaBook className="stat-icon text-primary" />
                  <div>
                    <div className="stat-number">200+</div>
                    <div className="stat-label">Livres</div>
                  </div>
                </div>
                <div className="stat-card">
                  <FaFileAlt className="stat-icon text-success" />
                  <div>
                    <div className="stat-number">150+</div>
                    <div className="stat-label">Manuscrits</div>
                  </div>
                </div>
                <div className="stat-card">
                  <FaChurch className="stat-icon text-warning" />
                  <div>
                    <div className="stat-number">500+</div>
                    <div className="stat-label">Messages</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .ztf-container {
          background: var(--bg-primary);
          min-height: 100vh;
        }

        .container {
          max-width: 1400px;
        }

        .ztf-hero {
          padding: 3rem 0;
          background: linear-gradient(135deg, 
            rgba(241, 196, 14, 0.1) 0%, 
            rgba(245, 158, 11, 0.05) 100%);
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
          line-height: 1.6;
        }

        .ztf-stats {
          display: grid;
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
        }

        .stat-icon {
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
      `}</style>
    </div>
  );
};

export default CatalogueZTF;