import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import LibraryHeader from './components/LibraryHeader';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Catalogue from './pages/Catalogue';
import Actualites from './pages/Actualites';
import Ressources from './pages/Ressources';
import Infos from './pages/Infos';
import Profile from './pages/Profile';
import EbookReader from './pages/EbookReader';

function App() {
  const location = useLocation();

  return (
    <ThemeProvider>
      <div className="App">
        <LibraryHeader />
        <main>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={
                <PageTransition>
                  <Home />
                </PageTransition>
              } />
              <Route path="/auth" element={
                <PageTransition>
                  <Auth />
                </PageTransition>
              } />
              <Route path="/catalogue" element={
                <PageTransition>
                  <Catalogue />
                </PageTransition>
              } />
              <Route path="/actualites" element={
                <PageTransition>
                  <Actualites />
                </PageTransition>
              } />
              <Route path="/ressources" element={
                <PageTransition>
                  <Ressources />
                </PageTransition>
              } />
              <Route path="/infos" element={
                <PageTransition>
                  <Infos />
                </PageTransition>
              } />
              <Route path="/profile" element={
                <PageTransition>
                  <Profile />
                </PageTransition>
              } />
              <Route path="/ebook/:id" element={<EbookReader />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
