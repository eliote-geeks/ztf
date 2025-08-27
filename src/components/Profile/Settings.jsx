import React, { useState } from 'react';
import { 
  FaCog,
  FaBell,
  FaPalette,
  FaLanguage,
  FaShieldAlt,
  FaEye,
  FaDownload,
  FaTrash,
  FaSave,
  FaCheck,
  FaTimes,
  FaMoon,
  FaSun,
  FaDesktop,
  FaVolumeUp,
  FaEnvelope,
  FaSms
} from 'react-icons/fa';

const Settings = () => {
  const [settings, setSettings] = useState({
    // Notifications
    notifications: {
      email: true,
      sms: false,
      push: true,
      newBooks: true,
      dueDates: true,
      overdue: true,
      recommendations: false,
      newsletter: true,
      system: true
    },
    
    // Apparence
    appearance: {
      theme: 'auto', // auto, light, dark
      language: 'fr',
      fontSize: 'medium', // small, medium, large
      compactMode: false,
      animations: true
    },
    
    // Confidentialité
    privacy: {
      showProfile: true,
      showActivity: false,
      showFavorites: true,
      showReadingHistory: false,
      allowRecommendations: true,
      trackingConsent: false
    },
    
    // Préférences de lecture
    reading: {
      defaultLoanPeriod: 21,
      autoRenew: false,
      reminderDays: 3,
      preferredFormat: 'both', // physical, digital, both
      downloadQuality: 'high',
      autoDownload: false
    }
  });

  const [hasChanges, setHasChanges] = useState(false);
  const [savedSettings, setSavedSettings] = useState({...settings});

  const updateSetting = (category, key, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value
      }
    }));
    setHasChanges(true);
  };

  const saveSettings = () => {
    // Simulation de la sauvegarde
    setTimeout(() => {
      setSavedSettings({...settings});
      setHasChanges(false);
      // Afficher une notification de succès
    }, 1000);
  };

  const resetSettings = () => {
    setSettings({...savedSettings});
    setHasChanges(false);
  };

  const exportData = () => {
    // Simulation de l'export des données
    const data = {
      profile: "Marie Essomba",
      settings: settings,
      exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mes_donnees_bibliotheque.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const themes = [
    { value: 'auto', label: 'Automatique', icon: FaDesktop },
    { value: 'light', label: 'Clair', icon: FaSun },
    { value: 'dark', label: 'Sombre', icon: FaMoon }
  ];

  const languages = [
    { value: 'fr', label: 'Français' },
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Español' }
  ];

  const fontSizes = [
    { value: 'small', label: 'Petit' },
    { value: 'medium', label: 'Moyen' },
    { value: 'large', label: 'Grand' }
  ];

  const formats = [
    { value: 'physical', label: 'Livres physiques uniquement' },
    { value: 'digital', label: 'Livres numériques uniquement' },
    { value: 'both', label: 'Les deux formats' }
  ];

  const SettingToggle = ({ checked, onChange, label, description }) => (
    <div className="setting-toggle">
      <div className="setting-info">
        <label className="setting-label">{label}</label>
        {description && <p className="setting-description">{description}</p>}
      </div>
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className="toggle-slider"></span>
      </label>
    </div>
  );

  const SettingSelect = ({ value, onChange, options, label, description }) => (
    <div className="setting-group">
      <label className="setting-label">{label}</label>
      {description && <p className="setting-description">{description}</p>}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="setting-select"
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="settings-content">
      <div className="settings-header">
        <h2>Paramètres</h2>
        <p>Personnalisez votre expérience de la bibliothèque</p>
      </div>

      {/* Barre d'actions */}
      {hasChanges && (
        <div className="settings-actions">
          <div className="changes-indicator">
            <span>Modifications non sauvegardées</span>
          </div>
          <div className="action-buttons">
            <button className="btn-success" onClick={saveSettings}>
              <FaSave size={14} />
              Enregistrer
            </button>
            <button className="btn-secondary" onClick={resetSettings}>
              <FaTimes size={14} />
              Annuler
            </button>
          </div>
        </div>
      )}

      <div className="settings-layout">
        {/* Notifications */}
        <section className="settings-section">
          <div className="section-header">
            <FaBell className="section-icon" />
            <h3>Notifications</h3>
          </div>
          
          <div className="settings-group">
            <h4>Canaux de notification</h4>
            <SettingToggle
              checked={settings.notifications.email}
              onChange={(value) => updateSetting('notifications', 'email', value)}
              label="Notifications par email"
              description="Recevez les notifications importantes par email"
            />
            <SettingToggle
              checked={settings.notifications.sms}
              onChange={(value) => updateSetting('notifications', 'sms', value)}
              label="Notifications SMS"
              description="Recevez les alertes urgentes par SMS"
            />
            <SettingToggle
              checked={settings.notifications.push}
              onChange={(value) => updateSetting('notifications', 'push', value)}
              label="Notifications push"
              description="Notifications dans le navigateur"
            />
          </div>

          <div className="settings-group">
            <h4>Types de notifications</h4>
            <SettingToggle
              checked={settings.notifications.newBooks}
              onChange={(value) => updateSetting('notifications', 'newBooks', value)}
              label="Nouveaux ouvrages"
              description="Être informé des nouvelles acquisitions"
            />
            <SettingToggle
              checked={settings.notifications.dueDates}
              onChange={(value) => updateSetting('notifications', 'dueDates', value)}
              label="Échéances d'emprunts"
              description="Rappels avant les dates de retour"
            />
            <SettingToggle
              checked={settings.notifications.overdue}
              onChange={(value) => updateSetting('notifications', 'overdue', value)}
              label="Retards"
              description="Alertes pour les documents en retard"
            />
            <SettingToggle
              checked={settings.notifications.recommendations}
              onChange={(value) => updateSetting('notifications', 'recommendations', value)}
              label="Recommandations"
              description="Suggestions personnalisées"
            />
            <SettingToggle
              checked={settings.notifications.newsletter}
              onChange={(value) => updateSetting('notifications', 'newsletter', value)}
              label="Newsletter"
              description="Actualités de la bibliothèque"
            />
          </div>
        </section>

        {/* Apparence */}
        <section className="settings-section">
          <div className="section-header">
            <FaPalette className="section-icon" />
            <h3>Apparence</h3>
          </div>

          <div className="settings-group">
            <div className="theme-selector">
              <label className="setting-label">Thème</label>
              <p className="setting-description">Choisissez l'apparence de l'interface</p>
              <div className="theme-options">
                {themes.map(theme => {
                  const Icon = theme.icon;
                  return (
                    <button
                      key={theme.value}
                      className={`theme-option ${settings.appearance.theme === theme.value ? 'active' : ''}`}
                      onClick={() => updateSetting('appearance', 'theme', theme.value)}
                    >
                      <Icon />
                      <span>{theme.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <SettingSelect
              value={settings.appearance.language}
              onChange={(value) => updateSetting('appearance', 'language', value)}
              options={languages}
              label="Langue"
              description="Langue de l'interface"
            />

            <SettingSelect
              value={settings.appearance.fontSize}
              onChange={(value) => updateSetting('appearance', 'fontSize', value)}
              options={fontSizes}
              label="Taille du texte"
              description="Ajustez la taille du texte"
            />

            <SettingToggle
              checked={settings.appearance.compactMode}
              onChange={(value) => updateSetting('appearance', 'compactMode', value)}
              label="Mode compact"
              description="Interface plus dense avec moins d'espacement"
            />

            <SettingToggle
              checked={settings.appearance.animations}
              onChange={(value) => updateSetting('appearance', 'animations', value)}
              label="Animations"
              description="Activer les animations et transitions"
            />
          </div>
        </section>

        {/* Confidentialité */}
        <section className="settings-section">
          <div className="section-header">
            <FaShieldAlt className="section-icon" />
            <h3>Confidentialité</h3>
          </div>

          <div className="settings-group">
            <SettingToggle
              checked={settings.privacy.showProfile}
              onChange={(value) => updateSetting('privacy', 'showProfile', value)}
              label="Profil public"
              description="Permettre aux autres de voir votre profil"
            />
            <SettingToggle
              checked={settings.privacy.showActivity}
              onChange={(value) => updateSetting('privacy', 'showActivity', value)}
              label="Activité visible"
              description="Afficher votre activité de lecture"
            />
            <SettingToggle
              checked={settings.privacy.showFavorites}
              onChange={(value) => updateSetting('privacy', 'showFavorites', value)}
              label="Favoris publics"
              description="Permettre de voir vos livres favoris"
            />
            <SettingToggle
              checked={settings.privacy.showReadingHistory}
              onChange={(value) => updateSetting('privacy', 'showReadingHistory', value)}
              label="Historique de lecture"
              description="Partager votre historique de lecture"
            />
            <SettingToggle
              checked={settings.privacy.allowRecommendations}
              onChange={(value) => updateSetting('privacy', 'allowRecommendations', value)}
              label="Recommandations personnalisées"
              description="Utiliser vos données pour des suggestions"
            />
            <SettingToggle
              checked={settings.privacy.trackingConsent}
              onChange={(value) => updateSetting('privacy', 'trackingConsent', value)}
              label="Consentement au suivi"
              description="Autoriser le suivi pour améliorer les services"
            />
          </div>
        </section>

        {/* Préférences de lecture */}
        <section className="settings-section">
          <div className="section-header">
            <FaCog className="section-icon" />
            <h3>Préférences de lecture</h3>
          </div>

          <div className="settings-group">
            <div className="setting-group">
              <label className="setting-label">Durée d'emprunt par défaut</label>
              <p className="setting-description">Nombre de jours pour un emprunt standard</p>
              <div className="number-input">
                <input
                  type="number"
                  value={settings.reading.defaultLoanPeriod}
                  onChange={(e) => updateSetting('reading', 'defaultLoanPeriod', parseInt(e.target.value))}
                  min="7"
                  max="90"
                  className="setting-input"
                />
                <span className="input-suffix">jours</span>
              </div>
            </div>

            <SettingToggle
              checked={settings.reading.autoRenew}
              onChange={(value) => updateSetting('reading', 'autoRenew', value)}
              label="Renouvellement automatique"
              description="Renouveler automatiquement les emprunts si possible"
            />

            <div className="setting-group">
              <label className="setting-label">Rappel avant échéance</label>
              <p className="setting-description">Nombre de jours avant la date de retour</p>
              <div className="number-input">
                <input
                  type="number"
                  value={settings.reading.reminderDays}
                  onChange={(e) => updateSetting('reading', 'reminderDays', parseInt(e.target.value))}
                  min="1"
                  max="7"
                  className="setting-input"
                />
                <span className="input-suffix">jours</span>
              </div>
            </div>

            <SettingSelect
              value={settings.reading.preferredFormat}
              onChange={(value) => updateSetting('reading', 'preferredFormat', value)}
              options={formats}
              label="Format préféré"
              description="Type de documents à privilégier"
            />

            <SettingSelect
              value={settings.reading.downloadQuality}
              onChange={(value) => updateSetting('reading', 'downloadQuality', value)}
              options={[
                { value: 'low', label: 'Basse (économie de données)' },
                { value: 'medium', label: 'Moyenne (équilibrée)' },
                { value: 'high', label: 'Haute (qualité optimale)' }
              ]}
              label="Qualité de téléchargement"
              description="Qualité des documents numériques"
            />

            <SettingToggle
              checked={settings.reading.autoDownload}
              onChange={(value) => updateSetting('reading', 'autoDownload', value)}
              label="Téléchargement automatique"
              description="Télécharger automatiquement les documents empruntés"
            />
          </div>
        </section>

        {/* Gestion des données */}
        <section className="settings-section">
          <div className="section-header">
            <FaDownload className="section-icon" />
            <h3>Gestion des données</h3>
          </div>

          <div className="settings-group">
            <div className="data-actions">
              <button className="btn-outline" onClick={exportData}>
                <FaDownload size={14} />
                Exporter mes données
              </button>
              <p className="action-description">
                Téléchargez une copie de toutes vos données personnelles
              </p>
            </div>

            <div className="data-actions danger-zone">
              <h5>Zone dangereuse</h5>
              <button className="btn-danger">
                <FaTrash size={14} />
                Supprimer mon compte
              </button>
              <p className="action-description">
                Cette action est irréversible. Toutes vos données seront supprimées.
              </p>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .settings-content {
          padding: 2rem;
          min-height: 600px;
        }

        .settings-header {
          margin-bottom: 2rem;
        }

        .settings-header h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .settings-header p {
          color: var(--text-secondary);
          font-size: 1rem;
          margin: 0;
        }

        .settings-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(29, 79, 139, 0.1);
          border: 1px solid rgba(29, 79, 139, 0.3);
          border-radius: 12px;
          padding: 1rem;
          margin-bottom: 2rem;
        }

        .changes-indicator span {
          color: #1d4f8b;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .action-buttons {
          display: flex;
          gap: 0.75rem;
        }

        .settings-layout {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .settings-section {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .section-icon {
          color: #1d4f8b;
          font-size: 1.5rem;
        }

        .section-header h3 {
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0;
        }

        .settings-group {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .settings-group h4,
        .settings-group h5 {
          color: var(--text-primary);
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0 0 1rem 0;
        }

        .setting-toggle {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
        }

        .setting-info {
          flex: 1;
        }

        .setting-label {
          color: var(--text-primary);
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
          display: block;
        }

        .setting-description {
          color: var(--text-secondary);
          font-size: 0.8rem;
          margin: 0;
          line-height: 1.4;
        }

        .toggle-switch {
          position: relative;
          display: inline-block;
          width: 50px;
          height: 28px;
        }

        .toggle-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .toggle-slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.2);
          transition: 0.3s;
          border-radius: 28px;
        }

        .toggle-slider:before {
          position: absolute;
          content: "";
          height: 20px;
          width: 20px;
          left: 4px;
          bottom: 4px;
          background: white;
          transition: 0.3s;
          border-radius: 50%;
        }

        input:checked + .toggle-slider {
          background: #1d4f8b;
        }

        input:checked + .toggle-slider:before {
          transform: translateX(22px);
        }

        .setting-group {
          margin-bottom: 1.5rem;
        }

        .setting-select {
          width: 100%;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          color: var(--text-primary);
          font-size: 0.875rem;
          margin-top: 0.5rem;
        }

        .setting-select:focus {
          outline: none;
          border-color: #1d4f8b;
        }

        .theme-selector {
          margin-bottom: 1.5rem;
        }

        .theme-options {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-top: 1rem;
        }

        .theme-option {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          color: var(--text-secondary);
        }

        .theme-option.active {
          background: rgba(29, 79, 139, 0.1);
          border-color: #1d4f8b;
          color: #1d4f8b;
        }

        .theme-option:hover:not(.active) {
          background: rgba(255, 255, 255, 0.08);
          color: var(--text-primary);
        }

        .theme-option svg {
          font-size: 1.5rem;
        }

        .theme-option span {
          font-size: 0.875rem;
          font-weight: 500;
        }

        .number-input {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }

        .setting-input {
          width: 80px;
          padding: 0.5rem;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          color: var(--text-primary);
          font-size: 0.875rem;
          text-align: center;
        }

        .setting-input:focus {
          outline: none;
          border-color: #1d4f8b;
        }

        .input-suffix {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .data-actions {
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
        }

        .danger-zone {
          border: 1px solid rgba(29, 79, 139, 0.3);
          background: rgba(29, 79, 139, 0.05);
        }

        .danger-zone h5 {
          color: #1d4f8b;
          margin-bottom: 1rem;
        }

        .action-description {
          color: var(--text-secondary);
          font-size: 0.8rem;
          margin: 0.5rem 0 0 0;
          line-height: 1.4;
        }

        .btn-success,
        .btn-secondary,
        .btn-outline,
        .btn-danger {
          padding: 0.5rem 0.75rem;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          justify-content: center;
          border: none;
        }

        .btn-success {
          background: #1d4f8b;
          color: white;
        }

        .btn-success:hover {
          background: #219a52;
        }

        .btn-secondary {
          background: rgba(108, 117, 125, 0.2);
          color: #6c757d;
        }

        .btn-secondary:hover {
          background: rgba(108, 117, 125, 0.3);
        }

        .btn-outline {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: var(--text-secondary);
        }

        .btn-outline:hover {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
        }

        .btn-danger {
          background: rgba(29, 79, 139, 0.2);
          color: #1d4f8b;
        }

        .btn-danger:hover {
          background: rgba(29, 79, 139, 0.3);
        }

        @media (max-width: 768px) {
          .settings-actions {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .action-buttons {
            width: 100%;
          }

          .action-buttons button {
            flex: 1;
          }

          .theme-options {
            grid-template-columns: 1fr;
          }

          .number-input {
            flex-direction: column;
            align-items: flex-start;
          }

          .setting-input {
            width: 100%;
          }

          .setting-toggle {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .toggle-switch {
            align-self: flex-end;
          }
        }
      `}</style>
    </div>
  );
};

export default Settings;