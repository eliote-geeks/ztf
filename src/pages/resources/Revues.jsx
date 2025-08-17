import React from 'react';
import { FaNewspaper, FaExternalLinkAlt, FaBook, FaCalendar, FaLanguage, FaUniversity } from 'react-icons/fa';

const Revues = () => {
  const stats = [
    { label: 'Revues disponibles', value: '580+', icon: FaNewspaper },
    { label: 'Articles', value: '250k+', icon: FaBook },
    { label: 'Langues', value: '15+', icon: FaLanguage },
    { label: 'Éditeurs', value: '120+', icon: FaUniversity }
  ];

  return (
    <div className="resource-container">
      <section className="resource-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="hero-content">
                <div className="hero-badge">
                  <FaNewspaper size={12} className="me-2" />
                  Revues Numériques
                </div>
                <h1 className="hero-title">
                  <span className="text-warning">Revues</span> Numériques
                </h1>
                <p className="hero-subtitle">
                  Plus de 580 revues scientifiques en ligne dans tous les domaines. 
                  Accès aux derniers numéros et archives complètes.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="stats-grid">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="stat-card">
                      <Icon className="stat-icon text-primary" />
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
      <style jsx>{`
        .resource-container { background: var(--bg-primary); min-height: 100vh; width: 100%; margin: 0; padding: 0; }
        .resource-container .container { max-width: 1400px !important; margin: 0 auto !important; padding: 0 1rem !important; width: 100% !important; }
        .resource-hero { padding: 3rem 0; background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%); border-radius: 0 0 20px 20px; margin-bottom: 2rem; }
        .hero-badge { display: inline-flex; align-items: center; background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); color: #3b82f6; font-size: 0.75rem; font-weight: 500; padding: 0.25rem 0.75rem; border-radius: 20px; margin-bottom: 1rem; }
        .hero-title { font-size: 2.5rem; font-weight: 700; color: var(--text-primary); margin-bottom: 1rem; line-height: 1.2; }
        .hero-subtitle { font-size: 1rem; color: var(--text-secondary); margin-bottom: 2rem; line-height: 1.6; }
        .stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .stat-card { background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 1rem; display: flex; align-items: center; gap: 0.75rem; transition: all 0.3s ease; }
        .stat-card:hover { transform: translateY(-2px); border-color: rgba(241, 196, 14, 0.3); }
        .stat-icon { font-size: 1.25rem; }
        .stat-value { font-size: 1.25rem; font-weight: 700; color: var(--text-primary); }
        .stat-label { font-size: 0.75rem; color: var(--text-secondary); }
        @media (max-width: 768px) { .hero-title { font-size: 2rem; } .stats-grid { grid-template-columns: 1fr; margin-top: 2rem; } }
      `}</style>
    </div>
  );
};

export default Revues;