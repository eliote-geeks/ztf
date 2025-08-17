import React from 'react';
import { 
  FaGlobe, 
  FaExternalLinkAlt,
  FaNewspaper,
  FaCalendar,
  FaUniversity,
  FaBook
} from 'react-icons/fa';

const Ajol = () => {
  const stats = [
    { label: 'Revues africaines', value: '520+', icon: FaNewspaper },
    { label: 'Articles', value: '600k+', icon: FaBook },
    { label: 'Pays couverts', value: '35+', icon: FaGlobe },
    { label: 'Institutions', value: '200+', icon: FaUniversity }
  ];

  return (
    <div className="resource-container">
      <section className="resource-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="hero-content">
                <div className="hero-badge">
                  <FaGlobe size={12} className="me-2" />
                  African Journals OnLine
                </div>
                <h1 className="hero-title">
                  <span className="text-warning">AJOL</span> - Revues Africaines
                </h1>
                <p className="hero-subtitle">
                  La plus grande collection de revues académiques africaines en ligne. 
                  Plus de 520 revues de 35 pays africains.
                </p>
                <div className="hero-actions">
                  <a 
                    href="https://www.ajol.info" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-warning"
                  >
                    <FaExternalLinkAlt size={14} className="me-2" />
                    Accéder à AJOL
                  </a>
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

      <section className="resource-info">
        <div className="container">
          <div className="info-card">
            <h3>À propos d'AJOL</h3>
            <p>
              African Journals OnLine (AJOL) est une plateforme dédiée à la promotion 
              et à la diffusion de la recherche académique africaine. Elle héberge des 
              revues de haute qualité couvrant tous les domaines de la connaissance.
            </p>
            <div className="features-list">
              <div className="feature-item">
                <h5>Recherche africaine</h5>
                <p>Focus sur la production scientifique du continent africain</p>
              </div>
              <div className="feature-item">
                <h5>Accès libre</h5>
                <p>Nombreuses revues en accès libre et gratuit</p>
              </div>
              <div className="feature-item">
                <h5>Multilingue</h5>
                <p>Publications en français, anglais et langues locales</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .resource-container {
          background: var(--bg-primary);
          min-height: 100vh;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .resource-container .container {
          max-width: 1400px !important;
          margin: 0 auto !important;
          padding: 0 1rem !important;
          width: 100% !important;
        }

        .resource-hero {
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

        .resource-info {
          padding: 3rem 0;
        }

        .info-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
        }

        .info-card h3 {
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .info-card p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .features-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .feature-item h5 {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .feature-item p {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin: 0;
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

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
            margin-top: 2rem;
          }
          
          .features-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Ajol;