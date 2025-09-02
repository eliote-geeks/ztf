import React, { useState } from 'react';
import { 
  FaUser,
  FaIdCard,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBuilding,
  FaCalendar,
  FaCheck,
  FaTimes,
  FaUpload,
  FaFileAlt,
  FaExclamationCircle,
  FaInfoCircle,
  FaLock,
  FaEye,
  FaEyeSlash
} from 'react-icons/fa';

const MembershipForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    // Informations personnelles
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    address: '',
    city: '',
    postalCode: '',
    
    // Statut et affiliation
    userType: '',
    institution: '',
    department: '',
    studentId: '',
    level: '',
    
    // Documents
    idDocument: null,
    proofOfEnrollment: null,
    photo: null,
    
    // Préférences
    preferredLanguage: 'fr',
    notifications: {
      email: true,
      sms: false,
      newsletter: true
    },
    
    // Sécurité
    password: '',
    confirmPassword: '',
    
    // Conditions
    termsAccepted: false,
    privacyAccepted: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps = [
    { id: 1, title: 'Informations personnelles', icon: FaUser },
    { id: 2, title: 'Documents justificatifs', icon: FaFileAlt },
    { id: 3, title: 'Compte et préférences', icon: FaLock }
  ];

  const userTypes = [
    { value: 'student', label: 'Étudiant' },
    { value: 'researcher', label: 'Chercheur' },
    { value: 'faculty', label: 'Enseignant' },
    { value: 'staff', label: 'Personnel administratif' },
    { value: 'external', label: 'Utilisateur externe' }
  ];

  const genders = [
    { value: 'M', label: 'Masculin' },
    { value: 'F', label: 'Féminin' },
    { value: 'other', label: 'Autre' },
    { value: 'prefer_not_to_say', label: 'Préfère ne pas dire' }
  ];

  const levels = [
    { value: 'license1', label: 'Licence 1' },
    { value: 'license2', label: 'Licence 2' },
    { value: 'license3', label: 'Licence 3' },
    { value: 'master1', label: 'Master 1' },
    { value: 'master2', label: 'Master 2' },
    { value: 'doctorat', label: 'Doctorat' },
    { value: 'other', label: 'Autre' }
  ];

  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Supprimer l'erreur si le champ est maintenant valide
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: null
      }));
    }
  };

  const updateNestedFormData = (category, field, value) => {
    setFormData(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value
      }
    }));
  };

  const handleFileUpload = (field, file) => {
    if (file && file.size <= 5 * 1024 * 1024) { // 5MB max
      updateFormData(field, file);
    } else {
      setErrors(prev => ({
        ...prev,
        [field]: 'Le fichier ne doit pas dépasser 5MB'
      }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'Prénom requis';
      if (!formData.lastName.trim()) newErrors.lastName = 'Nom requis';
      if (!formData.email.trim()) newErrors.email = 'Email requis';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email invalide';
      if (!formData.phone.trim()) newErrors.phone = 'Téléphone requis';
      if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date de naissance requise';
      if (!formData.address.trim()) newErrors.address = 'Adresse requise';
    }

    if (step === 2) {
      if (!formData.idDocument) newErrors.idDocument = 'Pièce d\'identité requise';
      if (!formData.photo) newErrors.photo = 'Photo requise';
    }

    if (step === 3) {
      if (!formData.password) newErrors.password = 'Mot de passe requis';
      else if (formData.password.length < 8) newErrors.password = 'Minimum 8 caractères';
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
      }
      if (!formData.termsAccepted) newErrors.termsAccepted = 'Vous devez accepter les conditions';
      if (!formData.privacyAccepted) newErrors.privacyAccepted = 'Vous devez accepter la politique de confidentialité';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const submitForm = async () => {
    if (!validateStep(3)) return;

    setIsSubmitting(true);
    
    // Simulation de soumission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Demande d\'adhésion soumise avec succès! Vous recevrez un email de confirmation.');
    }, 2000);
  };

  const renderStepIndicator = () => (
    <div className="step-indicator">
      {steps.map(step => {
        const Icon = step.icon;
        const isActive = currentStep === step.id;
        const isCompleted = currentStep > step.id;
        
        return (
          <div key={step.id} className={`step ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}>
            <div className="step-icon">
              {isCompleted ? <FaCheck size={16} /> : <Icon size={16} />}
            </div>
            <div className="step-info">
              <span className="step-title">{step.title}</span>
            </div>
          </div>
        );
      })}
    </div>
  );

  const renderPersonalInfo = () => (
    <div className="form-step">
      <div className="step-header">
        <h3>Informations personnelles</h3>
        <p>Renseignez vos informations de base</p>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label>Prénom *</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => updateFormData('firstName', e.target.value)}
            className={`form-input ${errors.firstName ? 'error' : ''}`}
            placeholder="Votre prénom"
          />
          {errors.firstName && <span className="error-message">{errors.firstName}</span>}
        </div>

        <div className="form-group">
          <label>Nom de famille *</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => updateFormData('lastName', e.target.value)}
            className={`form-input ${errors.lastName ? 'error' : ''}`}
            placeholder="Votre nom"
          />
          {errors.lastName && <span className="error-message">{errors.lastName}</span>}
        </div>

        <div className="form-group full-width">
          <label>Email *</label>
          <div className="input-with-icon">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => updateFormData('email', e.target.value)}
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder="votre.email@exemple.com"
            />
          </div>
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Téléphone *</label>
          <div className="input-with-icon">
            <FaPhone className="input-icon" />
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => updateFormData('phone', e.target.value)}
              className={`form-input ${errors.phone ? 'error' : ''}`}
              placeholder="+237 6XX XXX XXX"
            />
          </div>
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label>Date de naissance *</label>
          <input
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => updateFormData('dateOfBirth', e.target.value)}
            className={`form-input ${errors.dateOfBirth ? 'error' : ''}`}
          />
          {errors.dateOfBirth && <span className="error-message">{errors.dateOfBirth}</span>}
        </div>

        <div className="form-group">
          <label>Genre</label>
          <select
            value={formData.gender}
            onChange={(e) => updateFormData('gender', e.target.value)}
            className="form-input"
          >
            <option value="">Sélectionner</option>
            {genders.map(gender => (
              <option key={gender.value} value={gender.value}>{gender.label}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Nationalité</label>
          <input
            type="text"
            value={formData.nationality}
            onChange={(e) => updateFormData('nationality', e.target.value)}
            className="form-input"
            placeholder="Camerounaise"
          />
        </div>

        <div className="form-group full-width">
          <label>Adresse complète *</label>
          <div className="input-with-icon">
            <FaMapMarkerAlt className="input-icon" />
            <input
              type="text"
              value={formData.address}
              onChange={(e) => updateFormData('address', e.target.value)}
              className={`form-input ${errors.address ? 'error' : ''}`}
              placeholder="Quartier, rue, ville"
            />
          </div>
          {errors.address && <span className="error-message">{errors.address}</span>}
        </div>

        <div className="form-group">
          <label>Ville</label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => updateFormData('city', e.target.value)}
            className="form-input"
            placeholder="Yaoundé"
          />
        </div>

        <div className="form-group">
          <label>Code postal</label>
          <input
            type="text"
            value={formData.postalCode}
            onChange={(e) => updateFormData('postalCode', e.target.value)}
            className="form-input"
            placeholder="BP 1234"
          />
        </div>
      </div>
    </div>
  );


  const renderDocuments = () => (
    <div className="form-step">
      <div className="step-header">
        <h3>Documents justificatifs</h3>
        <p>Téléchargez les documents requis (format PDF, JPG, PNG - max 5MB)</p>
      </div>

      <div className="documents-grid">
        <div className="document-upload">
          <label>Pièce d'identité *</label>
          <div className={`upload-zone ${formData.idDocument ? 'has-file' : ''} ${errors.idDocument ? 'error' : ''}`}>
            <input
              type="file"
              accept="image/*,application/pdf"
              onChange={(e) => handleFileUpload('idDocument', e.target.files[0])}
              className="file-input"
            />
            <div className="upload-content">
              {formData.idDocument ? (
                <>
                  <FaCheck size={24} className="upload-icon success" />
                  <span className="upload-text">{formData.idDocument.name}</span>
                </>
              ) : (
                <>
                  <FaUpload size={24} className="upload-icon" />
                  <span className="upload-text">Cliquez pour télécharger</span>
                  <span className="upload-hint">CNI, Passeport ou autre</span>
                </>
              )}
            </div>
          </div>
          {errors.idDocument && <span className="error-message">{errors.idDocument}</span>}
        </div>

        <div className="document-upload">
          <label>Photo d'identité *</label>
          <div className={`upload-zone ${formData.photo ? 'has-file' : ''} ${errors.photo ? 'error' : ''}`}>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileUpload('photo', e.target.files[0])}
              className="file-input"
            />
            <div className="upload-content">
              {formData.photo ? (
                <>
                  <FaCheck size={24} className="upload-icon success" />
                  <span className="upload-text">{formData.photo.name}</span>
                </>
              ) : (
                <>
                  <FaUpload size={24} className="upload-icon" />
                  <span className="upload-text">Cliquez pour télécharger</span>
                  <span className="upload-hint">Photo récente format identité</span>
                </>
              )}
            </div>
          </div>
          {errors.photo && <span className="error-message">{errors.photo}</span>}
        </div>

      </div>

      <div className="warning-box">
        <FaExclamationCircle size={16} />
        <div>
          <strong>Documents requis:</strong>
          <ul>
            <li>Une pièce d'identité valide (CNI, passeport)</li>
            <li>Une photo d'identité récente</li>
            <li>Tous les documents doivent être lisibles et en couleur</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderAccountPreferences = () => (
    <div className="form-step">
      <div className="step-header">
        <h3>Compte et préférences</h3>
        <p>Configurez votre compte et vos préférences</p>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label>Mot de passe *</label>
          <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={(e) => updateFormData('password', e.target.value)}
              className={`form-input ${errors.password ? 'error' : ''}`}
              placeholder="Minimum 8 caractères"
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label>Confirmer le mot de passe *</label>
          <input
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => updateFormData('confirmPassword', e.target.value)}
            className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
            placeholder="Confirmez votre mot de passe"
          />
          {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
        </div>

        <div className="form-group">
          <label>Langue préférée</label>
          <select
            value={formData.preferredLanguage}
            onChange={(e) => updateFormData('preferredLanguage', e.target.value)}
            className="form-input"
          >
            <option value="fr">Français</option>
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>
      </div>

      <div className="preferences-section">
        <h4>Préférences de notification</h4>
        <div className="checkbox-group">
          <label className="checkbox-option">
            <input
              type="checkbox"
              checked={formData.notifications.email}
              onChange={(e) => updateNestedFormData('notifications', 'email', e.target.checked)}
            />
            <span className="checkbox-custom"></span>
            <span className="checkbox-label">
              <FaEnvelope size={14} />
              Notifications par email
            </span>
          </label>

          <label className="checkbox-option">
            <input
              type="checkbox"
              checked={formData.notifications.sms}
              onChange={(e) => updateNestedFormData('notifications', 'sms', e.target.checked)}
            />
            <span className="checkbox-custom"></span>
            <span className="checkbox-label">
              <FaPhone size={14} />
              Notifications SMS
            </span>
          </label>

          <label className="checkbox-option">
            <input
              type="checkbox"
              checked={formData.notifications.newsletter}
              onChange={(e) => updateNestedFormData('notifications', 'newsletter', e.target.checked)}
            />
            <span className="checkbox-custom"></span>
            <span className="checkbox-label">
              <FaEnvelope size={14} />
              Newsletter de la bibliothèque
            </span>
          </label>
        </div>
      </div>

      <div className="terms-section">
        <label className={`checkbox-option terms ${errors.termsAccepted ? 'error' : ''}`}>
          <input
            type="checkbox"
            checked={formData.termsAccepted}
            onChange={(e) => updateFormData('termsAccepted', e.target.checked)}
          />
          <span className="checkbox-custom"></span>
          <span className="checkbox-label">
            J'accepte les <a href="#" className="link">conditions d'utilisation</a> *
          </span>
        </label>
        {errors.termsAccepted && <span className="error-message">{errors.termsAccepted}</span>}

        <label className={`checkbox-option terms ${errors.privacyAccepted ? 'error' : ''}`}>
          <input
            type="checkbox"
            checked={formData.privacyAccepted}
            onChange={(e) => updateFormData('privacyAccepted', e.target.checked)}
          />
          <span className="checkbox-custom"></span>
          <span className="checkbox-label">
            J'accepte la <a href="#" className="link">politique de confidentialité</a> *
          </span>
        </label>
        {errors.privacyAccepted && <span className="error-message">{errors.privacyAccepted}</span>}
      </div>
    </div>
  );

  const renderStep = () => {
    switch (currentStep) {
      case 1: return renderPersonalInfo();
      case 2: return renderDocuments();
      case 3: return renderAccountPreferences();
      default: return renderPersonalInfo();
    }
  };

  return (
    <div className="membership-form-container">
      <div className="form-header">
        <h1>Demande d'adhésion</h1>
        <p>Rejoignez la communauté de la Bibliothèque Zacharias Tanee Fomum</p>
      </div>

      {renderStepIndicator()}

      <div className="form-content">
        {renderStep()}
      </div>

      <div className="form-navigation">
        {currentStep > 1 && (
          <button className="nav-btn secondary" onClick={prevStep}>
            Précédent
          </button>
        )}
        
        <div className="nav-info">
          Étape {currentStep} sur {steps.length}
        </div>

        {currentStep < steps.length ? (
          <button className="nav-btn primary" onClick={nextStep}>
            Suivant
          </button>
        ) : (
          <button 
            className="nav-btn primary submit" 
            onClick={submitForm}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Soumission...' : 'Soumettre la demande'}
          </button>
        )}
      </div>

      <style jsx>{`
        .membership-form-container {
          background: var(--bg-primary);
          min-height: 100vh;
          padding: 2rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .form-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .form-header h1 {
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .form-header p {
          color: var(--text-secondary);
          font-size: 1.1rem;
        }

        .step-indicator {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 3rem;
          padding: 2rem 1rem;
          background: rgba(29, 79, 139, 0.05);
          border-radius: 12px;
          border: 1px solid rgba(29, 79, 139, 0.1);
          position: relative;
          overflow: visible;
        }

        .step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          flex: 1;
          min-width: 140px;
          position: relative;
          z-index: 3;
        }

        .step:not(:last-child)::after {
          content: '';
          position: absolute;
          top: 24px;
          left: calc(100% - 70px);
          width: 140px;
          height: 2px;
          background: rgba(29, 79, 139, 0.2);
          z-index: 1;
        }

        .step.completed:not(:last-child)::after {
          background: #1d4f8b;
        }

        .step-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(29, 79, 139, 0.1);
          border: 2px solid rgba(29, 79, 139, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1d4f8b;
          transition: all 0.3s ease;
          flex-shrink: 0;
          z-index: 2;
          position: relative;
        }

        .step.active .step-icon {
          background: #1d4f8b;
          border-color: #1d4f8b;
          color: white;
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(29, 79, 139, 0.3);
        }

        .step.completed .step-icon {
          background: #1d4f8b;
          border-color: #1d4f8b;
          color: white;
        }

        .step-info {
          text-align: center;
        }


        .step-title {
          font-size: 0.8rem;
          color: var(--text-secondary);
          font-weight: 500;
          line-height: 1.3;
          text-align: center;
          max-width: 120px;
        }

        .step.active .step-title {
          color: #1d4f8b;
          font-weight: 600;
        }

        .form-content {
          background: rgba(29, 79, 139, 0.02);
          border: 1px solid rgba(29, 79, 139, 0.1);
          border-radius: 16px;
          padding: 2.5rem;
          margin-bottom: 2rem;
          box-shadow: 0 4px 20px rgba(29, 79, 139, 0.1);
        }

        .form-step {
          max-width: 100%;
        }

        .step-header {
          margin-bottom: 2.5rem;
          text-align: center;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(29, 79, 139, 0.1);
        }

        .step-header h3 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1d4f8b;
          margin-bottom: 0.75rem;
        }

        .step-header p {
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.5;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-bottom: 2.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group.full-width {
          grid-column: 1 / -1;
        }

        .form-group label {
          color: #1d4f8b;
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          display: block;
        }

        .form-input {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #1d4f8b;
          border-radius: 8px;
          padding: 0.75rem;
          color: var(--text-primary);
          font-size: 0.9rem;
          transition: all 0.3s ease;
          width: 100%;
          height: 42px;
        }

        .form-input:focus {
          outline: none;
          border-color: #5f9abf;
          background: rgba(29, 79, 139, 0.08);
          box-shadow: 0 0 0 3px rgba(29, 79, 139, 0.15);
          transform: translateY(-1px);
        }

        .form-input::placeholder {
          color: var(--text-tertiary);
        }

        .form-input.error {
          border-color: #ef4444;
          background: rgba(239, 68, 68, 0.1);
        }

        .form-input:hover {
          border-color: #3c6b8b;
          background: rgba(29, 79, 139, 0.05);
        }

        .input-with-icon {
          position: relative;
        }

        .input-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-tertiary);
        }

        .input-with-icon .form-input {
          padding-left: 2.5rem;
        }

        select.form-input {
          height: 42px;
          cursor: pointer;
        }

        select.form-input option {
          background: var(--bg-secondary);
          color: var(--text-primary);
        }

        .password-input {
          position: relative;
        }

        .password-toggle {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: var(--text-tertiary);
          cursor: pointer;
          padding: 0.25rem;
        }

        .password-toggle:hover {
          color: var(--text-primary);
        }

        .radio-group {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .radio-option {
          display: flex;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
          padding: 1rem;
          background: rgba(29, 79, 139, 0.03);
          border: 1px solid rgba(29, 79, 139, 0.1);
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .radio-option:hover {
          background: rgba(29, 79, 139, 0.08);
          border-color: #3c6b8b;
          transform: translateY(-1px);
        }

        .radio-option input[type="radio"] {
          display: none;
        }

        .radio-custom {
          width: 22px;
          height: 22px;
          border: 2px solid #1d4f8b;
          border-radius: 50%;
          position: relative;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .radio-option input[type="radio"]:checked + .radio-custom {
          border-color: #1d4f8b;
          background: #1d4f8b;
          box-shadow: 0 0 0 3px rgba(29, 79, 139, 0.2);
        }

        .radio-option input[type="radio"]:checked + .radio-custom::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 8px;
          height: 8px;
          background: white;
          border-radius: 50%;
        }

        .radio-label {
          color: var(--text-primary);
          font-weight: 500;
        }

        .documents-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .document-upload label {
          color: var(--text-primary);
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          display: block;
        }

        .upload-zone {
          position: relative;
          border: 2px dashed #1d4f8b;
          border-radius: 12px;
          padding: 2rem 1rem;
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
          min-height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(29, 79, 139, 0.03);
        }

        .upload-zone:hover {
          border-color: #3c6b8b;
          background: rgba(29, 79, 139, 0.08);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(29, 79, 139, 0.2);
        }

        .upload-zone.has-file {
          border-color: #22c55e;
          border-style: solid;
          background: rgba(34, 197, 94, 0.08);
        }

        .upload-zone.error {
          border-color: #ef4444;
          background: rgba(239, 68, 68, 0.08);
        }

        .file-input {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          cursor: pointer;
        }

        .upload-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .upload-icon {
          color: var(--text-tertiary);
        }

        .upload-icon.success {
          color: #22c55e;
        }

        .upload-text {
          color: var(--text-primary);
          font-weight: 600;
          font-size: 0.9rem;
        }

        .upload-hint {
          color: var(--text-tertiary);
          font-size: 0.8rem;
        }

        .checkbox-group {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .checkbox-option {
          display: flex;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
          padding: 1rem;
          background: rgba(29, 79, 139, 0.03);
          border: 1px solid rgba(29, 79, 139, 0.1);
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .checkbox-option:hover {
          background: rgba(29, 79, 139, 0.08);
          border-color: #3c6b8b;
          transform: translateY(-1px);
        }

        .checkbox-option.error {
          border: 1px solid #ef4444;
        }

        .checkbox-option input[type="checkbox"] {
          display: none;
        }

        .checkbox-custom {
          width: 20px;
          height: 20px;
          border: 2px solid #1d4f8b;
          border-radius: 5px;
          position: relative;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .checkbox-option input[type="checkbox"]:checked + .checkbox-custom {
          background: #1d4f8b;
          border-color: #1d4f8b;
          box-shadow: 0 0 0 3px rgba(29, 79, 139, 0.2);
        }

        .checkbox-option input[type="checkbox"]:checked + .checkbox-custom::after {
          content: '';
          position: absolute;
          top: 2px;
          left: 5px;
          width: 6px;
          height: 10px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }

        .checkbox-label {
          color: var(--text-primary);
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .preferences-section {
          margin-bottom: 2rem;
        }

        .preferences-section h4 {
          color: var(--text-primary);
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .terms-section {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .terms-section .checkbox-option {
          background: rgba(29, 79, 139, 0.05);
          border: 1px solid rgba(29, 79, 139, 0.2);
        }

        .link {
          color: #1d4f8b;
          text-decoration: underline;
        }

        .link:hover {
          color: #3c6b8b;
        }

        .info-box {
          background: rgba(29, 79, 139, 0.1);
          border: 1px solid rgba(29, 79, 139, 0.3);
          border-radius: 12px;
          padding: 1.5rem;
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          margin-top: 2rem;
        }

        .info-box svg {
          color: #1d4f8b;
          margin-top: 0.125rem;
          flex-shrink: 0;
        }

        .info-box strong {
          color: #1d4f8b;
          display: block;
          margin-bottom: 0.5rem;
        }

        .info-box p {
          color: var(--text-secondary);
          margin: 0;
          line-height: 1.4;
        }

        .warning-box {
          background: rgba(241, 196, 14, 0.1);
          border: 1px solid rgba(241, 196, 14, 0.3);
          border-radius: 12px;
          padding: 1.5rem;
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          margin-top: 2rem;
        }

        .warning-box svg {
          color: #f1c40e;
          margin-top: 0.125rem;
          flex-shrink: 0;
        }

        .warning-box strong {
          color: #f1c40e;
          display: block;
          margin-bottom: 0.5rem;
        }

        .warning-box ul {
          color: var(--text-secondary);
          margin: 0;
          padding-left: 1.25rem;
        }

        .warning-box li {
          margin-bottom: 0.25rem;
        }

        .form-navigation {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
        }

        .nav-btn {
          padding: 0.875rem 1.5rem;
          border: none;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .nav-btn.primary {
          background: #1d4f8b;
          color: white;
        }

        .nav-btn.primary:hover:not(:disabled) {
          background: #1a4480;
          transform: translateY(-1px);
        }

        .nav-btn.primary:disabled {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-tertiary);
          cursor: not-allowed;
        }

        .nav-btn.secondary {
          background: rgba(255, 255, 255, 0.08);
          color: var(--text-secondary);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .nav-btn.secondary:hover {
          background: rgba(255, 255, 255, 0.12);
          color: var(--text-primary);
        }

        .nav-btn.submit {
          background: linear-gradient(135deg, #f1c40e 0%, #e67e22 100%);
          color: #1a1a1a;
          font-weight: 700;
        }

        .nav-btn.submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(241, 196, 14, 0.3);
        }

        .nav-info {
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
        }

        .error-message {
          color: #ef4444;
          font-size: 0.8rem;
          margin-top: 0.25rem;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        @media (max-width: 768px) {
          .membership-form-container {
            padding: 1rem;
          }

          .form-header h1 {
            font-size: 1.5rem;
          }

          .step-indicator {
            padding: 1rem;
            margin-bottom: 2rem;
          }

          .step {
            flex-direction: column;
            gap: 0.5rem;
          }

          .step:not(:last-child)::after {
            display: none;
          }

          .step-info {
            text-align: center;
          }

          .step-title {
            font-size: 0.8rem;
          }

          .form-content {
            padding: 1.5rem;
          }

          .form-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .documents-grid {
            grid-template-columns: 1fr;
          }

          .form-navigation {
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
          }

          .nav-info {
            order: -1;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default MembershipForm;