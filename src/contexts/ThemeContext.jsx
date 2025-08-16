import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Récupérer le thème sauvegardé ou utiliser dark par défaut
    const savedTheme = localStorage.getItem('bibliotheque-ztf-theme');
    return savedTheme || 'dark';
  });

  useEffect(() => {
    // Sauvegarder le thème dans localStorage
    localStorage.setItem('bibliotheque-ztf-theme', theme);
    
    // Appliquer la classe du thème au body
    document.body.className = `theme-${theme}`;
    
    // Mettre à jour les variables CSS
    updateCSSVariables(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  const updateCSSVariables = (currentTheme) => {
    const root = document.documentElement;
    
    if (currentTheme === 'dark') {
      // Variables pour le mode sombre
      root.style.setProperty('--bg-primary', '#0a0f1c');
      root.style.setProperty('--bg-secondary', '#1a1f2e');
      root.style.setProperty('--bg-tertiary', '#2a2f3e');
      root.style.setProperty('--bg-card', 'rgba(255, 255, 255, 0.05)');
      root.style.setProperty('--bg-card-hover', 'rgba(255, 255, 255, 0.08)');
      root.style.setProperty('--bg-input', 'rgba(255, 255, 255, 0.08)');
      root.style.setProperty('--bg-input-focus', 'rgba(255, 255, 255, 0.12)');
      
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', 'rgba(255, 255, 255, 0.8)');
      root.style.setProperty('--text-tertiary', 'rgba(255, 255, 255, 0.6)');
      root.style.setProperty('--text-muted', 'rgba(255, 255, 255, 0.5)');
      
      root.style.setProperty('--border-primary', 'rgba(255, 255, 255, 0.1)');
      root.style.setProperty('--border-secondary', 'rgba(255, 255, 255, 0.15)');
      root.style.setProperty('--border-accent', 'rgba(241, 196, 14, 0.3)');
      
      root.style.setProperty('--shadow-sm', '0 2px 10px rgba(0, 0, 0, 0.1)');
      root.style.setProperty('--shadow-md', '0 8px 25px rgba(0, 0, 0, 0.15)');
      root.style.setProperty('--shadow-lg', '0 12px 30px rgba(0, 0, 0, 0.2)');
      
      root.style.setProperty('--gradient-primary', 'linear-gradient(135deg, #0a0f1c 0%, #1a1f2e 100%)');
      root.style.setProperty('--gradient-secondary', 'linear-gradient(135deg, rgba(29, 79, 139, 0.1) 0%, rgba(60, 107, 139, 0.05) 100%)');
      root.style.setProperty('--gradient-card', 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)');
      
    } else {
      // Variables pour le mode clair
      root.style.setProperty('--bg-primary', '#f8fafc');
      root.style.setProperty('--bg-secondary', '#ffffff');
      root.style.setProperty('--bg-tertiary', '#f1f5f9');
      root.style.setProperty('--bg-card', 'rgba(255, 255, 255, 0.9)');
      root.style.setProperty('--bg-card-hover', 'rgba(255, 255, 255, 0.95)');
      root.style.setProperty('--bg-input', 'rgba(255, 255, 255, 0.8)');
      root.style.setProperty('--bg-input-focus', '#ffffff');
      
      root.style.setProperty('--text-primary', '#1e293b');
      root.style.setProperty('--text-secondary', '#475569');
      root.style.setProperty('--text-tertiary', '#64748b');
      root.style.setProperty('--text-muted', '#94a3b8');
      
      root.style.setProperty('--border-primary', 'rgba(30, 41, 59, 0.1)');
      root.style.setProperty('--border-secondary', 'rgba(30, 41, 59, 0.15)');
      root.style.setProperty('--border-accent', 'rgba(241, 196, 14, 0.4)');
      
      root.style.setProperty('--shadow-sm', '0 2px 10px rgba(0, 0, 0, 0.08)');
      root.style.setProperty('--shadow-md', '0 8px 25px rgba(0, 0, 0, 0.12)');
      root.style.setProperty('--shadow-lg', '0 12px 30px rgba(0, 0, 0, 0.15)');
      
      root.style.setProperty('--gradient-primary', 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)');
      root.style.setProperty('--gradient-secondary', 'linear-gradient(135deg, rgba(241, 196, 14, 0.08) 0%, rgba(241, 196, 14, 0.02) 100%)');
      root.style.setProperty('--gradient-card', 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)');
    }

    // Variables communes (couleurs d'accent)
    root.style.setProperty('--warning', '#f1c40e');
    root.style.setProperty('--primary', '#3b82f6');
    root.style.setProperty('--success', '#10b981');
    root.style.setProperty('--danger', '#ef4444');
    root.style.setProperty('--info', '#06b6d4');
    root.style.setProperty('--dark-900', '#111827');
  };

  const value = {
    theme,
    toggleTheme,
    isDark: theme === 'dark'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};