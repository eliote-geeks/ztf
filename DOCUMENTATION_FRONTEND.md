# Documentation Frontend - Bibliothèque ZTF

## Vue d'ensemble

L'application frontend de la Bibliothèque Zacharias Tanee Fomum est une Single Page Application (SPA) moderne développée en React.js avec Vite comme bundler. Elle propose une interface utilisateur élégante et responsive pour la gestion d'une bibliothèque universitaire spécialisée.

## Architecture Technique

### Stack Technologique

- **Framework**: React 19.1.1
- **Router**: React Router DOM 6.30.1
- **Build Tool**: Vite 5.4.19
- **UI Framework**: Bootstrap 5.3.7
- **Animations**: Framer Motion 12.23.12
- **Icons**: React Icons 5.5.0
- **PDF**: React-PDF 10.1.0 + PDF.js 5.4.54

### Structure des Dossiers

```
src/
├── components/           # Composants réutilisables
│   ├── Header.jsx       # Header simple
│   ├── LibraryHeader.jsx # Header principal avec navigation
│   ├── ProfessionalHeader.jsx # Header professionnel
│   ├── HeroSlider.jsx   # Carrousel d'accueil
│   ├── CategoryCard.jsx # Cartes de catégories
│   ├── AnimatedCard.jsx # Cartes animées
│   ├── PageTransition.jsx # Transitions de pages
│   ├── ModernButton.jsx # Boutons modernes
│   ├── PDFReader.jsx    # Lecteur PDF
│   └── SimplePDFViewer.jsx # Visionneuse PDF simple
├── contexts/
│   └── ThemeContext.jsx # Gestion des thèmes
├── pages/               # Pages de l'application
│   ├── Home.jsx         # Page d'accueil
│   ├── Auth.jsx         # Authentification
│   ├── Profile.jsx      # Profil utilisateur
│   ├── Catalogue*.jsx   # Pages de catalogue
│   ├── Contact.jsx      # Contact
│   ├── About.jsx        # À propos
│   ├── resources/       # Pages ressources
│   └── services/        # Pages services
├── styles/              # Styles CSS
│   ├── theme.css        # Variables de thème
│   ├── modern-theme.css # Thème moderne
│   └── react-pdf.css    # Styles PDF
├── utils/
│   └── pdfConfig.js     # Configuration PDF
└── hooks/               # Hooks personnalisés (vide)
```

## Composants Principaux

### 1. LibraryHeader
**Fichier**: `src/components/LibraryHeader.jsx`

Header principal avec navigation complète incluant:
- Logo et branding
- Méga-menus pour catalogue, ressources et services
- Boutons de recherche et profil
- Menu mobile responsive
- Intégration thème clair/sombre

**Props**: Aucune (utilise les contextes)

### 2. ThemeProvider
**Fichier**: `src/contexts/ThemeContext.jsx`

Gestion globale des thèmes avec:
- Persistance localStorage
- Variables CSS dynamiques
- Palette de couleurs institutionnelle
- Mode clair/sombre

**API**:
```javascript
const { theme, toggleTheme, isDark } = useTheme();
```

### 3. PageTransition
**Fichier**: `src/components/PageTransition.jsx`

Animations de transition entre pages avec Framer Motion.

### 4. HeroSlider
**Fichier**: `src/components/HeroSlider.jsx`

Carrousel d'images pour la page d'accueil avec auto-play et contrôles.

## Pages Principales

### Page d'Accueil (Home.jsx)
- Slider hero
- Statistiques de la bibliothèque
- Services principaux
- Collections vedettes
- Barre de recherche

### Authentification (Auth.jsx)
- Formulaire de connexion/inscription
- Validation côté client
- Types d'utilisateurs (étudiant, chercheur, staff)
- Intégration sociale (préparée)

### Catalogue (Catalogue*.jsx)
- Recherche générale et avancée
- Filtres par catégorie
- Collections spécialisées (ZTF, Théologie, Histoire)
- Nouveautés et populaires

### Ressources
- Bases de données (CAIRN, OpenEdition, Persée, AJOL)
- Collections numériques
- Archives et multimédia

### Services
- Prêt et réservation
- Formations et aide
- Espaces de travail
- Services techniques

## Intégration Backend

### Points d'API Nécessaires

#### Authentification
```
POST /api/auth/login
POST /api/auth/register
POST /api/auth/logout
GET  /api/auth/profile
```

**Structure des données**:
```javascript
// Login
{
  email: "user@example.com",
  password: "password"
}

// Register
{
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
  studentId: "STU001", // optionnel
  userType: "student|researcher|staff",
  password: "password"
}
```

#### Catalogue
```
GET    /api/books              # Liste paginée
GET    /api/books/search       # Recherche
GET    /api/books/:id          # Détail d'un livre
GET    /api/books/categories   # Catégories
GET    /api/books/popular      # Populaires
GET    /api/books/recent       # Nouveautés
```

**Structure Book**:
```javascript
{
  id: "string",
  title: "string",
  author: "string",
  isbn: "string",
  category: "string",
  description: "string",
  coverImage: "url",
  pdfUrl: "url", // optionnel
  availability: "available|borrowed|reserved",
  location: "string",
  publishedDate: "ISO date",
  tags: ["string"]
}
```

#### Ressources
```
GET /api/resources/databases   # Bases de données
GET /api/resources/ebooks      # E-books
GET /api/resources/archives    # Archives
GET /api/resources/multimedia  # Contenu multimédia
```

#### Services
```
GET    /api/services/loans/:userId     # Prêts utilisateur
POST   /api/services/reserve           # Réservation
DELETE /api/services/reserve/:id       # Annuler réservation
GET    /api/services/spaces            # Espaces disponibles
POST   /api/services/spaces/book       # Réserver espace
```

#### Utilisateur
```
GET    /api/users/profile        # Profil utilisateur
PUT    /api/users/profile        # Modifier profil
GET    /api/users/history        # Historique emprunts
GET    /api/users/reservations   # Réservations actives
```

### Variables d'Environnement

Créer un fichier `.env` à la racine:
```
VITE_API_BASE_URL=http://localhost:3001/api
VITE_PDF_WORKER_URL=/pdf.worker.min.js
```

### Configuration CORS

Le backend doit autoriser les requêtes depuis l'origine du frontend:
```javascript
// Express.js example
app.use(cors({
  origin: ['http://localhost:5173', 'https://your-domain.com'],
  credentials: true
}));
```

## Gestion d'État

### État Local (useState)
- Formulaires
- UI state temporaire
- Données de composant

### Context API
- Thème global
- Authentification (à implémenter)

### Recommandations pour l'État Global
Pour une version production, considérer:
- **Zustand** (léger, moderne)
- **Redux Toolkit** (complexe mais robuste)
- **SWR** ou **React Query** pour le cache des données

## Configuration des Services

### Service d'Authentification (à créer)
```javascript
// src/services/auth.js
class AuthService {
  async login(credentials) {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
      credentials: 'include'
    });
    return response.json();
  }
  
  async getProfile() {
    const response = await fetch(`${API_BASE_URL}/auth/profile`, {
      credentials: 'include'
    });
    return response.json();
  }
}
```

### Service de Catalogue (à créer)
```javascript
// src/services/catalogue.js
class CatalogueService {
  async searchBooks(query, filters = {}) {
    const params = new URLSearchParams({
      q: query,
      ...filters
    });
    
    const response = await fetch(`${API_BASE_URL}/books/search?${params}`);
    return response.json();
  }
  
  async getBookDetails(id) {
    const response = await fetch(`${API_BASE_URL}/books/${id}`);
    return response.json();
  }
}
```

## Déploiement

### Build de Production
```bash
npm run build
```
Génère le dossier `dist/` avec les assets optimisés.

### Variables d'Environnement de Production
```
VITE_API_BASE_URL=https://api.bibliotheque-ztf.org/api
VITE_PDF_WORKER_URL=https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js
```

### Configuration Serveur Web
**Nginx** (exemple):
```nginx
server {
    listen 80;
    server_name bibliotheque-ztf.org;
    root /var/www/bibliotheque-ztf/dist;
    index index.html;
    
    # SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache assets
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## Sécurité

### Authentification
- JWT tokens avec httpOnly cookies
- Refresh tokens pour sessions persistantes
- CSRF protection

### Validation
- Validation côté client (déjà implémentée)
- Sanitisation des inputs
- Protection XSS via React (automatique)

## Performance

### Optimisations Actuelles
- Lazy loading des routes (à implémenter)
- Images optimisées
- CSS modulaire
- Tree shaking avec Vite

### Recommandations
```javascript
// Lazy loading des pages
const Home = lazy(() => import('./pages/Home'));
const Catalogue = lazy(() => import('./pages/Catalogue'));

// Dans App.jsx
<Suspense fallback={<div>Chargement...</div>}>
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
</Suspense>
```

## Tests

### Structure de Tests (à implémenter)
```
src/
├── __tests__/
│   ├── components/
│   ├── pages/
│   └── utils/
└── setupTests.js
```

### Outils Recommandés
- **Vitest** (compatible Vite)
- **React Testing Library**
- **MSW** pour mocker les API

## Maintenance

### Scripts Package.json
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext .js,.jsx",
    "lint:fix": "eslint src --ext .js,.jsx --fix"
  }
}
```

### Monitoring
- Error Boundary React pour capturer les erreurs
- Analytics (Google Analytics, Matomo)
- Monitoring performance (Web Vitals)

## Roadmap Technique

### Phase 1 - Backend Integration
1. Implémenter les services API
2. Ajouter l'authentification
3. Connecter le catalogue
4. Tests d'intégration

### Phase 2 - Fonctionnalités Avancées
1. Système de réservation
2. Profil utilisateur complet
3. Historique et favoris
4. Notifications

### Phase 3 - Optimisations
1. PWA (Progressive Web App)
2. Offline support
3. Push notifications
4. Cache avancé

## Support et Contact

Pour toute question technique sur le frontend:
- Architecture: `src/` structure et composants
- Intégration: Points d'API documentés ci-dessus
- Déploiement: Configuration serveur web
- Performance: Optimisations recommandées

Cette documentation fournit toutes les informations nécessaires pour développer le backend et intégrer les API avec le frontend existant.