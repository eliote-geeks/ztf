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
  FaDatabase
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
    { icon: FaBook, label: 'Catalogue complet', count: '15k+' },
    { icon: FaDatabase, label: 'Ressources numériques', count: 'Premium' },
    { icon: FaGraduationCap, label: 'Espace personnel', count: 'Sécurisé' }
  ];

  return (
    <div className="auth-container">
      {/* Auth Section */}
      <section className="auth-section">
        <div className="container">
          <div className="row justify-content-center g-4">
            <div className="col-xl-10 col-lg-11">
              <div className="row g-0">
                
                {/* Left Panel - Features */}
                <div className="col-lg-5 d-none d-lg-block">
                  <div className="auth-feature-panel h-100">
                    <div className="feature-content">
                      {/* Badge */}
                      <div className="auth-badge">
                        <FaStar size={12} className="me-2" />
                        Plateforme Académique
                      </div>
                      
                      {/* Title */}
                      <h2 className="feature-title">
                        Bibliothèque <span className="text-warning">ZTF</span>
                      </h2>
                      
                      {/* Description */}
                      <p className="feature-description">
                        Accédez à votre espace personnel et découvrez nos ressources 
                        académiques de qualité.
                      </p>
                      
                      {/* Features Grid */}
                      <div className="features-grid">
                        {features.map((feature, index) => {
                          const Icon = feature.icon;
                          return (
                            <div key={index} className="feature-item">
                              <div className="feature-icon">
                                <Icon size={16} />
                              </div>
                              <div className="feature-info">
                                <div className="feature-label">{feature.label}</div>
                                <div className="feature-count">{feature.count}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      
                      {/* Security note */}
                      <div className="security-note">
                        <FaUserShield size={14} className="me-2" />
                        <span>Données protégées et chiffrées</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Panel - Form */}
                <div className="col-lg-7">
                  <div className="auth-form-panel">
                    
                    {/* Form Header */}
                    <div className="form-header">
                      <h3 className="form-title">
                        {isLogin ? 'Connexion' : 'Créer un compte'}
                      </h3>
                      <p className="form-subtitle">
                        {isLogin 
                          ? 'Accédez à votre espace personnel' 
                          : 'Rejoignez notre communauté académique'
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .auth-container {
          padding-top: 80px;
          background: var(--gradient-dark);
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        /* Container adjustments */
        .container {
          max-width: 1200px;
        }

        .auth-section {
          padding: 2rem 0;
          width: 100%;
        }

        /* Feature Panel */
        .auth-feature-panel {
          background: linear-gradient(135deg, 
            rgba(29, 79, 139, 0.15) 0%, 
            rgba(60, 107, 139, 0.1) 100%);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px 0 0 12px;
          padding: 2rem;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .auth-feature-panel::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--warning) 0%, rgba(241, 196, 14, 0.5) 100%);
        }

        .feature-content {
          width: 100%;
        }

        .auth-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(241, 196, 14, 0.1);
          border: 1px solid rgba(241, 196, 14, 0.3);
          color: var(--warning);
          font-size: 0.75rem;
          font-weight: 500;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          margin-bottom: 1.5rem;
        }

        .feature-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .feature-description {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 2rem;
          line-height: 1.5;
        }

        .features-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          transition: background 0.3s ease;
        }

        .feature-item:hover {
          background: rgba(255, 255, 255, 0.08);
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
          font-size: 0.875rem;
          font-weight: 500;
          color: #ffffff;
        }

        .feature-count {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .security-note {
          display: flex;
          align-items: center;
          background: rgba(241, 196, 14, 0.1);
          border: 1px solid rgba(241, 196, 14, 0.2);
          color: var(--warning);
          font-size: 0.75rem;
          padding: 0.75rem;
          border-radius: 8px;
        }

        /* Form Panel */
        .auth-form-panel {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0 12px 12px 0;
          padding: 2rem;
          height: 100%;
          min-height: 500px;
        }

        .form-header {
          margin-bottom: 2rem;
          text-align: center;
        }

        .form-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }

        .form-subtitle {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.7);
        }

        /* Form Elements */
        .auth-form {
          width: 100%;
        }

        .form-label {
          font-size: 0.75rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
        }

        .form-control-modern {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          padding: 0.75rem;
          font-size: 0.875rem;
          color: #ffffff;
          transition: all 0.3s ease;
          width: 100%;
        }

        .form-control-modern:focus {
          background: rgba(255, 255, 255, 0.12);
          border-color: var(--warning);
          box-shadow: 0 0 0 3px rgba(241, 196, 14, 0.1);
          outline: none;
          color: #ffffff;
        }

        .form-control-modern::placeholder {
          color: rgba(255, 255, 255, 0.5);
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
          color: rgba(255, 255, 255, 0.7);
          cursor: pointer;
          padding: 0.25rem;
          transition: color 0.3s ease;
        }

        .password-toggle:hover {
          color: var(--warning);
        }

        .btn-modern {
          background: var(--gradient-accent);
          border: none;
          border-radius: 8px;
          color: var(--dark-900);
          font-size: 0.875rem;
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
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.875rem;
          cursor: pointer;
          transition: color 0.3s ease;
          padding: 0;
        }

        .link-button:hover {
          color: #ffffff;
        }

        .link-primary {
          color: var(--warning) !important;
          font-weight: 500;
        }

        .link-primary:hover {
          color: #ffffff !important;
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
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.7);
          margin-right: 0.5rem;
        }

        /* Mobile Responsive */
        @media (max-width: 991.98px) {
          .auth-container {
            padding-top: 100px;
            padding-bottom: 2rem;
          }

          .auth-form-panel {
            border-radius: 12px;
            min-height: auto;
          }

          .form-header {
            margin-bottom: 1.5rem;
          }

          .feature-title {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 576px) {
          .auth-section {
            padding: 1rem 0;
          }

          .auth-form-panel {
            padding: 1.5rem;
          }

          .form-title {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Auth;