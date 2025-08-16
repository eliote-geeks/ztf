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
    // Récupérer le thème sauvegardé ou utiliser light par défaut (style bibliothèque moderne)
    const savedTheme = localStorage.getItem('bibliotheque-ztf-theme');
    return savedTheme || 'light';
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
      // Variables pour le mode sombre avec couleurs du logo
      root.style.setProperty('--bg-primary', '#1d4f8b');
      root.style.setProperty('--bg-secondary', '#3c6b8b');
      root.style.setProperty('--bg-tertiary', '#5f9abf');
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
      
      root.style.setProperty('--shadow-sm', '0 2px 10px rgba(29, 79, 139, 0.1)');
      root.style.setProperty('--shadow-md', '0 8px 25px rgba(29, 79, 139, 0.15)');
      root.style.setProperty('--shadow-lg', '0 12px 30px rgba(29, 79, 139, 0.2)');
      
      root.style.setProperty('--gradient-primary', 'linear-gradient(135deg, #1d4f8b 0%, #3c6b8b 100%)');
      root.style.setProperty('--gradient-secondary', 'linear-gradient(135deg, rgba(29, 79, 139, 0.1) 0%, rgba(60, 107, 139, 0.05) 100%)');
      root.style.setProperty('--gradient-card', 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)');
      
    } else {
      // Variables pour le mode clair moderne (bibliothèque professionnelle)
      root.style.setProperty('--bg-primary', '#ffffff');
      root.style.setProperty('--bg-secondary', '#ffffff');
      root.style.setProperty('--bg-tertiary', '#ffffff');
      root.style.setProperty('--bg-card', '#ffffff');
      root.style.setProperty('--bg-card-hover', '#f8fafc');
      root.style.setProperty('--bg-input', '#f8fafc');
      root.style.setProperty('--bg-input-focus', '#ffffff');
      
      root.style.setProperty('--text-primary', '#1d4f8b');
      root.style.setProperty('--text-secondary', '#3c6b8b');
      root.style.setProperty('--text-tertiary', '#5f9abf');
      root.style.setProperty('--text-muted', '#a1d8e3');
      
      root.style.setProperty('--border-primary', 'rgba(29, 79, 139, 0.15)');
      root.style.setProperty('--border-secondary', 'rgba(29, 79, 139, 0.2)');
      root.style.setProperty('--border-accent', 'rgba(241, 196, 14, 0.6)');
      
      root.style.setProperty('--shadow-sm', '0 2px 10px rgba(29, 79, 139, 0.08)');
      root.style.setProperty('--shadow-md', '0 8px 25px rgba(29, 79, 139, 0.12)');
      root.style.setProperty('--shadow-lg', '0 12px 30px rgba(29, 79, 139, 0.15)');
      
      root.style.setProperty('--gradient-primary', '#ffffff');
      root.style.setProperty('--gradient-secondary', '#ffffff');
      root.style.setProperty('--gradient-card', '#ffffff');
    }

    // Variables communes avec couleurs du logo
    root.style.setProperty('--blumine', '#1d4f8b');
    root.style.setProperty('--ming', '#3c6b8b');
    root.style.setProperty('--fountain', '#5f9abf');
    root.style.setProperty('--regent', '#a1d8e3');
    root.style.setProperty('--buttercup', '#f1c40e');
    
    // Variables d'accent utilisant les couleurs du logo
    root.style.setProperty('--warning', '#f1c40e');
    root.style.setProperty('--primary', '#1d4f8b');
    root.style.setProperty('--secondary', '#3c6b8b');
    root.style.setProperty('--success', '#10b981');
    root.style.setProperty('--danger', '#ef4444');
    root.style.setProperty('--info', '#5f9abf');
    root.style.setProperty('--dark-900', '#1d4f8b');
    root.style.setProperty('--dark-950', '#153d6b');
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