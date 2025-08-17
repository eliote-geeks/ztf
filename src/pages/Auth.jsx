import React, { useState } from 'react';
import { 
  FaUser, 
  FaLock, 
  FaEye, 
  FaEyeSlash, 
  FaEnvelope,
  FaArrowRight,
  FaBook,
  FaUserShield,
  FaStar,
  FaGraduationCap,
  FaDatabase,
  FaCheckCircle,
  FaShieldAlt,
  FaUserPlus
} from 'react-icons/fa';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    studentId: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      studentId: ''
    });
  };

  const features = [
    { icon: FaBook, label: 'Catalogue complet', count: '15k+ livres' },
    { icon: FaDatabase, label: 'Ressources numériques', count: 'Premium' },
    { icon: FaGraduationCap, label: 'Espace personnel', count: 'Sécurisé' },
    { icon: FaUserShield, label: 'Données protégées', count: '100%' }
  ];

  const benefits = [
    'Accès illimité au catalogue complet',
    'Réservation et emprunt en ligne',
    'Ressources numériques exclusives',
    'Historique et recommandations',
    'Notifications personnalisées'
  ];

  return (
    <div className="auth-container">
      {/* Hero Section */}
      <section className="auth-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="hero-content">
                <div className="hero-badge">
                  <FaUserShield size={12} className="me-2" />
                  Espace Membre
                </div>
                <h1 className="hero-title">
                  {isLogin ? 'Connexion' : 'Créer un compte'} 
                  <span className="text-warning"> Bibliothèque</span>
                </h1>
                <p className="hero-subtitle">
                  {isLogin 
                    ? 'Accédez à votre espace personnel et profitez de tous nos services' 
                    : 'Rejoignez notre communauté académique et découvrez nos ressources'
                  }
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="quick-access-card">
                <div className="access-item">
                  <FaBook className="access-icon text-warning" />
                  <div>
                    <div className="access-number">15,000+</div>
                    <div className="access-label">Ouvrages</div>
                  </div>
                </div>
                <div className="access-item">
                  <FaDatabase className="access-icon text-info" />
                  <div>
                    <div className="access-number">Premium</div>
                    <div className="access-label">Ressources</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Auth Section */}
      <section className="auth-main-section">
        <div className="container">
          <div className="row g-3">
            
            {/* Features Sidebar */}
            <div className="col-lg-4">
              {/* Features Card */}
              <div className="features-card">
                <div className="card-header">
                  <FaStar size={16} />
                  <h5>Avantages membres</h5>
                </div>
                <div className="card-content">
                  <div className="features-grid">
                    {features.map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <div key={index} className="feature-item">
                          <div className="feature-icon">
                            <Icon size={14} />
                          </div>
                          <div className="feature-info">
                            <div className="feature-label">{feature.label}</div>
                            <div className="feature-count">{feature.count}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Benefits Card */}
              <div className="benefits-card">
                <div className="card-header">
                  <FaCheckCircle size={16} />
                  <h5>Ce que vous obtenez</h5>
                </div>
                <div className="card-content">
                  <div className="benefits-list">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="benefit-item">
                        <FaCheckCircle size={12} className="benefit-icon" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="col-lg-8">
              <div className="auth-form-card">
                
                {/* Form Header */}
                <div className="form-header">
                  <div className="header-icon">
                    {isLogin ? <FaUser size={20} /> : <FaUserPlus size={20} />}
                  </div>
                  <h3 className="form-title">
                    {isLogin ? 'Connexion à votre compte' : 'Créer votre compte'}
                  </h3>
                  <p className="form-subtitle">
                    {isLogin 
                      ? 'Connectez-vous pour accéder à vos services' 
                      : 'Rejoignez notre communauté en quelques clics'
                    }
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="auth-form">
                  <div className="row g-3">
                    
                    {/* Email */}
                    <div className="col-12">
                      <label className="form-label">
                        <FaEnvelope size={12} className="me-2" />
                        Adresse Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control form-control-modern"
                        placeholder="votre.email@exemple.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    {/* Student ID (if register) */}
                    {!isLogin && (
                      <div className="col-12">
                        <label className="form-label">
                          <FaUser size={12} className="me-2" />
                          Numéro Étudiant
                        </label>
                        <input
                          type="text"
                          name="studentId"
                          className="form-control form-control-modern"
                          placeholder="Ex: ETU123456"
                          value={formData.studentId}
                          onChange={handleInputChange}
                        />
                      </div>
                    )}

                    {/* Password */}
                    <div className="col-12">
                      <label className="form-label">
                        <FaLock size={12} className="me-2" />
                        Mot de passe
                      </label>
                      <div className="password-input-wrapper">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          className="form-control form-control-modern"
                          placeholder="Votre mot de passe"
                          value={formData.password}
                          onChange={handleInputChange}
                          required
                        />
                        <button
                          type="button"
                          className="password-toggle"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <FaEyeSlash size={14} /> : <FaEye size={14} />}
                        </button>
                      </div>
                    </div>

                    {/* Confirm Password (if register) */}
                    {!isLogin && (
                      <div className="col-12">
                        <label className="form-label">
                          <FaLock size={12} className="me-2" />
                          Confirmer le mot de passe
                        </label>
                        <input
                          type="password"
                          name="confirmPassword"
                          className="form-control form-control-modern"
                          placeholder="Confirmez votre mot de passe"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                        />
                      </div>
                    )}

                    {/* Forgot Password */}
                    {isLogin && (
                      <div className="col-12">
                        <div className="forgot-password">
                          <button type="button" className="link-button">
                            Mot de passe oublié ?
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary btn-modern w-100">
                        {isLogin ? 'Se connecter' : 'Créer le compte'}
                        <FaArrowRight size={12} className="ms-2" />
                      </button>
                    </div>

                    {/* Toggle Mode */}
                    <div className="col-12">
                      <div className="auth-toggle">
                        <span className="toggle-text">
                          {isLogin 
                            ? "Vous n'avez pas de compte ?" 
                            : 'Vous avez déjà un compte ?'
                          }
                        </span>
                        <button
                          type="button"
                          onClick={toggleAuthMode}
                          className="link-button link-primary"
                        >
                          {isLogin ? 'Créer un compte' : 'Se connecter'}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>

                {/* Security Notice */}
                <div className="security-notice">
                  <FaShieldAlt size={14} className="me-2" />
                  <span>Vos données sont sécurisées et chiffrées</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .auth-container {
          background: var(--bg-primary);
          min-height: 100vh;
        }

        .container {
          max-width: 1200px;
        }

        /* Hero Section */
        .auth-hero {
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

        .quick-access-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .access-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 0;
        }

        .access-item:not(:last-child) {
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .access-icon {
          font-size: 1.5rem;
        }

        .access-number {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .access-label {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        /* Main Auth Section */
        .auth-main-section {
          padding: 2rem 0 4rem;
        }

        .features-card,
        .benefits-card,
        .auth-form-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 1.5rem;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
        }

        .card-header h5 {
          margin: 0;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .card-header svg {
          color: var(--warning);
        }

        .card-content {
          padding: 1rem;
        }

        .features-grid {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .feature-item:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(241, 196, 14, 0.3);
          transform: translateY(-1px);
        }

        .feature-icon {
          width: 32px;
          height: 32px;
          background: rgba(241, 196, 14, 0.1);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--warning);
          flex-shrink: 0;
        }

        .feature-label {
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-primary);
          line-height: 1.2;
        }

        .feature-count {
          font-size: 0.7rem;
          color: var(--text-secondary);
        }

        .benefits-list {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.3;
        }

        .benefit-icon {
          color: var(--warning);
          flex-shrink: 0;
        }

        /* Form Card */
        .auth-form-card {
          margin-bottom: 0;
        }

        .form-header {
          padding: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          background: rgba(255, 255, 255, 0.05);
        }

        .header-icon {
          width: 48px;
          height: 48px;
          background: rgba(241, 196, 14, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--warning);
          margin: 0 auto 1rem;
        }

        .form-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .form-subtitle {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin: 0;
        }

        /* Form Elements */
        .auth-form {
          padding: 1.5rem;
        }

        .form-label {
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
        }

        .form-control-modern {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 0.75rem;
          font-size: 0.85rem;
          color: var(--text-primary);
          transition: all 0.3s ease;
          width: 100%;
        }

        .form-control-modern:focus {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(241, 196, 14, 0.5);
          box-shadow: 0 0 0 3px rgba(241, 196, 14, 0.1);
          outline: none;
          color: var(--text-primary);
        }

        .form-control-modern::placeholder {
          color: var(--text-tertiary);
          font-size: 0.8rem;
        }

        .password-input-wrapper {
          position: relative;
        }

        .password-toggle {
          position: absolute;
          right: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 0.25rem;
          transition: color 0.3s ease;
        }

        .password-toggle:hover {
          color: var(--warning);
        }

        .btn-modern {
          background: linear-gradient(135deg, var(--warning) 0%, #e67e22 100%);
          border: none;
          border-radius: 8px;
          color: var(--dark-900);
          font-size: 0.85rem;
          font-weight: 600;
          padding: 0.75rem 1rem;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .btn-modern:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(241, 196, 14, 0.3);
          color: var(--dark-900);
        }

        .link-button {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 0.8rem;
          cursor: pointer;
          transition: color 0.3s ease;
          padding: 0;
        }

        .link-button:hover {
          color: var(--text-primary);
        }

        .link-primary {
          color: var(--warning) !important;
          font-weight: 500;
        }

        .link-primary:hover {
          color: var(--text-primary) !important;
        }

        .forgot-password {
          text-align: right;
        }

        .auth-toggle {
          text-align: center;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .toggle-text {
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin-right: 0.5rem;
        }

        .security-notice {
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(241, 196, 14, 0.1);
          border: 1px solid rgba(241, 196, 14, 0.3);
          color: var(--warning);
          font-size: 0.75rem;
          padding: 0.75rem;
          margin: 1rem 1.5rem 1.5rem;
          border-radius: 8px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .quick-access-card {
            margin-top: 2rem;
          }
          
          .auth-form-card {
            margin-top: 1rem;
          }
          
          .form-header {
            padding: 1.25rem;
          }
          
          .auth-form {
            padding: 1.25rem;
          }
          
          .form-title {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Auth;