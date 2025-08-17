import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import LibraryHeader from './components/LibraryHeader';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import Catalogue from './pages/Catalogue';
import Ressources from './pages/Ressources';
import CatalogueAdvanced from './pages/CatalogueAvanced';
import CatalogueNouveautes from './pages/CatalogueNouveautes';
import CataloguePopulaires from './pages/CataloguePopulaires';
import CatalogueTheologie from './pages/CatalogueTheologie';
import CatalogueHistoire from './pages/CatalogueHistoire';
import CatalogueZTF from './pages/CatalogueZTF';
import Auth from './pages/Auth';
import Contact from './pages/Contact';
import About from './pages/About';
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
              <Route path="/catalogue" element={
                <PageTransition>
                  <Catalogue />
                </PageTransition>
              } />
              <Route path="/ressources" element={
                <PageTransition>
                  <Ressources />
                </PageTransition>
              } />
              <Route path="/catalogue/avanced" element={
                <PageTransition>
                  <CatalogueAdvanced />
                </PageTransition>
              } />
              <Route path="/catalogue/nouveautes" element={
                <PageTransition>
                  <CatalogueNouveautes />
                </PageTransition>
              } />
              <Route path="/catalogue/populaires" element={
                <PageTransition>
                  <CataloguePopulaires />
                </PageTransition>
              } />
              <Route path="/catalogue/theologie" element={
                <PageTransition>
                  <CatalogueTheologie />
                </PageTransition>
              } />
              <Route path="/catalogue/histoire" element={
                <PageTransition>
                  <CatalogueHistoire />
                </PageTransition>
              } />
              <Route path="/catalogue/litterature" element={
                <PageTransition>
                  <CatalogueHistoire />
                </PageTransition>
              } />
              <Route path="/catalogue/philosophie" element={
                <PageTransition>
                  <CatalogueHistoire />
                </PageTransition>
              } />
              <Route path="/catalogue/ztf" element={
                <PageTransition>
                  <CatalogueZTF />
                </PageTransition>
              } />
              <Route path="/catalogue/manuscrits" element={
                <PageTransition>
                  <CatalogueZTF />
                </PageTransition>
              } />
              <Route path="/catalogue/theses" element={
                <PageTransition>
                  <CatalogueZTF />
                </PageTransition>
              } />
              <Route path="/auth" element={
                <PageTransition>
                  <Auth />
                </PageTransition>
              } />
              <Route path="/contact" element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              } />
              <Route path="/about" element={
                <PageTransition>
                  <About />
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
