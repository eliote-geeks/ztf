import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaBook,
  FaBookOpen,
  FaGraduationCap,
  FaNewspaper,
  FaHistory,
  FaChurch,
  FaGlobe,
  FaFlask,
  FaQuoteLeft,
  FaUsers,
  FaFilePdf,
  FaVideo,
  FaHeadphones,
  FaArrowRight
} from 'react-icons/fa';

const CategoryCard = ({ 
  title, 
  description, 
  bookCount, 
  image, 
  icon: IconComponent, 
  link, 
  color = '#3498db',
  featured = false,
  type = 'category' // 'category', 'archive', 'collection'
}) => {
  return (
    <div className={`category-card ${featured ? 'featured' : ''} ${type}`}>
      <Link to={link} className="card-link">
        <div className="card-image-container">
          <div className="card-image" style={{ backgroundImage: `url(${image})` }}>
            <div className="card-overlay" style={{ background: `linear-gradient(135deg, ${color}CC 0%, ${color}66 100%)` }}>
              <div className="card-icon" style={{ backgroundColor: color }}>
                <IconComponent size={24} />
              </div>
              <div className="card-stats">
                <span className="book-count">{bookCount}</span>
                <span className="book-label">
                  {type === 'archive' ? 'archives' : type === 'collection' ? 'éléments' : 'livres'}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card-content">
          <div className="card-header">
            <h3 className="card-title">{title}</h3>
            <div className="card-arrow">
              <FaArrowRight size={14} />
            </div>
          </div>
          <p className="card-description">{description}</p>
          
          <div className="card-footer">
            <div className="card-meta">
              <span className="meta-item">
                <FaBook size={12} />
                {bookCount} ressources
              </span>
              {featured && (
                <span className="featured-badge">
                  Populaire
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>

      <style jsx>{`
        .category-card {
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          height: 100%;
          backdrop-filter: blur(10px);
        }

        .category-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          border-color: var(--border-accent);
        }

        .category-card.featured {
          border: 2px solid var(--warning);
          background: linear-gradient(135deg, var(--bg-card) 0%, rgba(241, 196, 14, 0.05) 100%);
        }

        .category-card.featured::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--warning), #f1c40e);
          z-index: 1;
        }

        .card-link {
          display: block;
          text-decoration: none;
          color: inherit;
          height: 100%;
        }

        .card-image-container {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .card-image {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          transition: transform 0.4s ease;
        }

        .category-card:hover .card-image {
          transform: scale(1.1);
        }

        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1.5rem;
          transition: opacity 0.3s ease;
        }

        .card-icon {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .category-card:hover .card-icon {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .card-stats {
          align-self: flex-end;
          text-align: right;
          color: white;
        }

        .book-count {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          line-height: 1;
          margin-bottom: 0.25rem;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .book-label {
          font-size: 0.875rem;
          font-weight: 500;
          opacity: 0.9;
          text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
        }

        .card-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          flex: 1;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
          line-height: 1.3;
          flex: 1;
        }

        .card-arrow {
          color: var(--text-tertiary);
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateX(-10px);
        }

        .category-card:hover .card-arrow {
          opacity: 1;
          transform: translateX(0);
          color: var(--warning);
        }

        .card-description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .card-footer {
          margin-top: auto;
        }

        .card-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: var(--text-tertiary);
          font-weight: 500;
        }

        .meta-item svg {
          color: var(--warning);
        }

        .featured-badge {
          background: linear-gradient(135deg, var(--warning), #f1c40e);
          color: var(--dark-900);
          font-size: 0.7rem;
          font-weight: 600;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Type specific styles */
        .category-card.archive {
          border-left: 4px solid #e74c3c;
        }

        .category-card.collection {
          border-left: 4px solid #9b59b6;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .card-image-container {
            height: 160px;
          }

          .card-content {
            padding: 1.25rem;
          }

          .card-title {
            font-size: 1.1rem;
          }

          .card-description {
            font-size: 0.85rem;
          }

          .card-icon {
            width: 48px;
            height: 48px;
          }

          .book-count {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

// Composant pour une grille de catégories
export const CategoriesGrid = ({ title, categories, columns = 3 }) => {
  return (
    <div className="categories-grid-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
        </div>
        
        <div className={`categories-grid cols-${columns}`}>
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .categories-grid-section {
          padding: 4rem 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
          position: relative;
          display: inline-block;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, var(--warning), #f1c40e);
          border-radius: 2px;
        }

        .categories-grid {
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        }

        .categories-grid.cols-2 {
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        }

        .categories-grid.cols-4 {
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        }

        @media (max-width: 768px) {
          .categories-grid-section {
            padding: 3rem 0;
          }

          .section-title {
            font-size: 2rem;
          }

          .categories-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .categories-grid.cols-2,
          .categories-grid.cols-4 {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .categories-grid {
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CategoryCard;