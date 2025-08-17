import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaUser, 
  FaLock, 
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaUserPlus,
  FaSignInAlt,
  FaGoogle,
  FaFacebook,
  FaGraduationCap,
  FaBook,
  FaShieldAlt,
  FaCheckCircle
} from 'react-icons/fa';

const Auth = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    studentId: '',
    password: '',
    confirmPassword: '',
    userType: 'student',
    acceptTerms: false
  });

  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRegisterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegisterData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempt:', loginData);
    // Ici on intégrerait l'authentification
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Register attempt:', registerData);
    // Ici on intégrerait la création de compte
  };

  const userTypes = [
    { value: 'student', label: 'Étudiant', icon: FaGraduationCap },
    { value: 'researcher', label: 'Chercheur', icon: FaBook },
    { value: 'staff', label: 'Personnel', icon: FaUser }
  ];

  return (
    <div className="auth-container">
      {/* Hero Section */}
      <section className="auth-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <div className="hero-content">
                <div className="hero-badge">
                  <FaShieldAlt size={12} className="me-2" />
                  Espace Sécurisé
                </div>
                <h1 className="hero-title">
                  Accédez à votre <span className="text-warning">Espace Personnel</span>
                </h1>
                <p className="hero-subtitle">
                  Connectez-vous ou créez un compte pour accéder à nos services numériques, 
                  gérer vos emprunts et découvrir nos collections exclusives.
                </p>
                
                <div className="benefits-list">
                  <div className="benefit-item">
                    <FaCheckCircle className="benefit-icon" />
                    <span>Accès complet aux ressources numériques</span>
                  </div>
                  <div className="benefit-item">
                    <FaCheckCircle className="benefit-icon" />
                    <span>Gestion de vos emprunts en ligne</span>
                  </div>
                  <div className="benefit-item">
                    <FaCheckCircle className="benefit-icon" />
                    <span>Réservations et notifications personnalisées</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="auth-card">
                {/* Tabs */}
                <div className="auth-tabs">
                  <button
                    className={`tab-btn ${activeTab === 'login' ? 'active' : ''}`}
                    onClick={() => setActiveTab('login')}
                  >
                    <FaSignInAlt size={16} />
                    <span>Connexion</span>
                  </button>
                  <button
                    className={`tab-btn ${activeTab === 'register' ? 'active' : ''}`}
                    onClick={() => setActiveTab('register')}
                  >
                    <FaUserPlus size={16} />
                    <span>Inscription</span>
                  </button>
                </div>

                {/* Login Form */}
                {activeTab === 'login' && (
                  <form className="auth-form" onSubmit={handleLogin}>
                    <div className="form-group">
                      <label className="form-label">
                        <FaEnvelope size={12} className="me-2" />
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="votre.email@exemple.com"
                        value={loginData.email}
                        onChange={handleLoginChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        <FaLock size={12} className="me-2" />
                        Mot de passe
                      </label>
                      <div className="password-input">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          className="form-control"
                          placeholder="Votre mot de passe"
                          value={loginData.password}
                          onChange={handleLoginChange}
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

                    <div className="form-options">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="rememberMe"
                          checked={loginData.rememberMe}
                          onChange={handleLoginChange}
                        />
                        <span className="checkmark"></span>
                        Se souvenir de moi
                      </label>
                      <Link to="/forgot-password" className="forgot-link">
                        Mot de passe oublié ?
                      </Link>
                    </div>

                    <button type="submit" className="btn btn-warning btn-lg w-100">
                      <FaSignInAlt size={16} className="me-2" />
                      Se connecter
                    </button>

                    <div className="divider">
                      <span>ou</span>
                    </div>

                    <div className="social-login">
                      <button type="button" className="btn btn-outline-light social-btn">
                        <FaGoogle size={16} />
                        <span>Google</span>
                      </button>
                      <button type="button" className="btn btn-outline-light social-btn">
                        <FaFacebook size={16} />
                        <span>Facebook</span>
                      </button>
                    </div>
                  </form>
                )}

                {/* Register Form */}
                {activeTab === 'register' && (
                  <form className="auth-form" onSubmit={handleRegister}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Prénom</label>
                          <input
                            type="text"
                            name="firstName"
                            className="form-control"
                            placeholder="Votre prénom"
                            value={registerData.firstName}
                            onChange={handleRegisterChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Nom</label>
                          <input
                            type="text"
                            name="lastName"
                            className="form-control"
                            placeholder="Votre nom"
                            value={registerData.lastName}
                            onChange={handleRegisterChange}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        <FaEnvelope size={12} className="me-2" />
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="votre.email@exemple.com"
                        value={registerData.email}
                        onChange={handleRegisterChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Type d'utilisateur</label>
                      <div className="user-type-grid">
                        {userTypes.map(type => {
                          const Icon = type.icon;
                          return (
                            <label key={type.value} className="user-type-option">
                              <input
                                type="radio"
                                name="userType"
                                value={type.value}
                                checked={registerData.userType === type.value}
                                onChange={handleRegisterChange}
                              />
                              <div className="user-type-card">
                                <Icon size={20} />
                                <span>{type.label}</span>
                              </div>
                            </label>
                          );
                        })}
                      </div>
                    </div>

                    {registerData.userType === 'student' && (
                      <div className="form-group">
                        <label className="form-label">Numéro étudiant</label>
                        <input
                          type="text"
                          name="studentId"
                          className="form-control"
                          placeholder="Ex: ETU20240001"
                          value={registerData.studentId}
                          onChange={handleRegisterChange}
                          required
                        />
                      </div>
                    )}

                    <div className="form-group">
                      <label className="form-label">
                        <FaLock size={12} className="me-2" />
                        Mot de passe
                      </label>
                      <div className="password-input">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          className="form-control"
                          placeholder="Minimum 8 caractères"
                          value={registerData.password}
                          onChange={handleRegisterChange}
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

                    <div className="form-group">
                      <label className="form-label">Confirmer le mot de passe</label>
                      <div className="password-input">
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          name="confirmPassword"
                          className="form-control"
                          placeholder="Confirmez votre mot de passe"
                          value={registerData.confirmPassword}
                          onChange={handleRegisterChange}
                          required
                        />
                        <button
                          type="button"
                          className="password-toggle"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? <FaEyeSlash size={14} /> : <FaEye size={14} />}
                        </button>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="acceptTerms"
                          checked={registerData.acceptTerms}
                          onChange={handleRegisterChange}
                          required
                        />
                        <span className="checkmark"></span>
                        J'accepte les <Link to="/terms">conditions d'utilisation</Link> et la <Link to="/privacy">politique de confidentialité</Link>
                      </label>
                    </div>

                    <button type="submit" className="btn btn-warning btn-lg w-100">
                      <FaUserPlus size={16} className="me-2" />
                      Créer un compte
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .auth-container {
          background: var(--bg-primary);
          min-height: 100vh;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .auth-container .container {
          max-width: 1400px !important;
          margin: 0 auto !important;
          padding: 0 1rem !important;
          width: 100% !important;
        }

        /* Hero Section */
        .auth-hero {
          padding: 3rem 0;
          background: linear-gradient(135deg, 
            rgba(59, 130, 246, 0.1) 0%, 
            rgba(139, 69, 19, 0.05) 100%);
          border-radius: 0 0 20px 20px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          color: #3b82f6;
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

        .benefits-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .benefit-icon {
          color: #22c55e;
          flex-shrink: 0;
        }

        /* Auth Card */
        .auth-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          overflow: hidden;
        }

        .auth-tabs {
          display: flex;
          background: rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .tab-btn {
          flex: 1;
          background: none;
          border: none;
          color: var(--text-secondary);
          padding: 1.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .tab-btn:hover {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-primary);
        }

        .tab-btn.active {
          background: rgba(241, 196, 14, 0.1);
          color: var(--warning);
          border-bottom: 2px solid var(--warning);
        }

        /* Form */
        .auth-form {
          padding: 2rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-label {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
        }

        .form-control {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          padding: 0.75rem;
          font-size: 0.875rem;
          color: var(--text-primary);
          transition: all 0.3s ease;
          width: 100%;
        }

        .form-control:focus {
          background: rgba(255, 255, 255, 0.12);
          border-color: var(--warning);
          box-shadow: 0 0 0 3px rgba(241, 196, 14, 0.1);
          outline: none;
          color: var(--text-primary);
        }

        .form-control::placeholder {
          color: var(--text-placeholder);
        }

        .password-input {
          position: relative;
        }

        .password-toggle {
          position: absolute;
          right: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: var(--text-tertiary);
          cursor: pointer;
          padding: 0.25rem;
        }

        .password-toggle:hover {
          color: var(--text-secondary);
        }

        .form-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--text-secondary);
          cursor: pointer;
        }

        .checkbox-label input[type="checkbox"] {
          display: none;
        }

        .checkmark {
          width: 16px;
          height: 16px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 4px;
          position: relative;
          transition: all 0.3s ease;
        }

        .checkbox-label input[type="checkbox"]:checked + .checkmark {
          background: var(--warning);
          border-color: var(--warning);
        }

        .checkbox-label input[type="checkbox"]:checked + .checkmark::after {
          content: '✓';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: var(--dark-900);
          font-size: 0.75rem;
          font-weight: bold;
        }

        .forgot-link {
          color: var(--warning);
          text-decoration: none;
          font-size: 0.875rem;
          transition: all 0.3s ease;
        }

        .forgot-link:hover {
          color: #e67e22;
          text-decoration: underline;
        }

        .btn {
          border: none;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .btn-warning {
          background: var(--gradient-accent);
          color: var(--dark-900);
        }

        .btn-warning:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(241, 196, 14, 0.3);
        }

        .divider {
          display: flex;
          align-items: center;
          margin: 1.5rem 0;
          color: var(--text-tertiary);
          font-size: 0.875rem;
        }

        .divider::before,
        .divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
        }

        .divider span {
          padding: 0 1rem;
        }

        .social-login {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }

        .social-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-secondary);
          padding: 0.75rem;
          font-size: 0.875rem;
        }

        .social-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
          border-color: rgba(255, 255, 255, 0.2);
        }

        /* User Type Selection */
        .user-type-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
        }

        .user-type-option {
          cursor: pointer;
        }

        .user-type-option input[type="radio"] {
          display: none;
        }

        .user-type-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 1rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .user-type-option:hover .user-type-card {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .user-type-option input[type="radio"]:checked + .user-type-card {
          background: rgba(241, 196, 14, 0.1);
          border-color: rgba(241, 196, 14, 0.3);
          color: var(--warning);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .auth-tabs {
            flex-direction: column;
          }
          
          .tab-btn {
            padding: 1rem;
          }
          
          .user-type-grid {
            grid-template-columns: 1fr;
          }
          
          .social-login {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Auth;