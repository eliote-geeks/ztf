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
import Cairn from './pages/resources/Cairn';
import OpenEdition from './pages/resources/OpenEdition';
import Persee from './pages/resources/Persee';
import Ajol from './pages/resources/Ajol';
import Ebooks from './pages/resources/Ebooks';
import Revues from './pages/resources/Revues';
import Archives from './pages/resources/Archives';
import Conferences from './pages/resources/Conferences';
import EbookReader from './pages/EbookReader';
import Pret from './pages/services/Pret';
import Formations from './pages/services/Formations';
import Aide from './pages/services/Aide';
import Espaces from './pages/services/Espaces';
import Lecture from './pages/services/Lecture';
import Multimedia from './pages/services/Multimedia';
import Groupes from './pages/services/Groupes';
import Cafeteria from './pages/services/Cafeteria';
import Impression from './pages/services/Impression';
import Wifi from './pages/services/Wifi';
import Parking from './pages/services/Parking';

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
              <Route path="/ressources/cairn" element={
                <PageTransition>
                  <Cairn />
                </PageTransition>
              } />
              <Route path="/ressources/openedition" element={
                <PageTransition>
                  <OpenEdition />
                </PageTransition>
              } />
              <Route path="/ressources/persee" element={
                <PageTransition>
                  <Persee />
                </PageTransition>
              } />
              <Route path="/ressources/ajol" element={
                <PageTransition>
                  <Ajol />
                </PageTransition>
              } />
              <Route path="/ressources/ebooks" element={
                <PageTransition>
                  <Ebooks />
                </PageTransition>
              } />
              <Route path="/ressources/revues" element={
                <PageTransition>
                  <Revues />
                </PageTransition>
              } />
              <Route path="/ressources/archives" element={
                <PageTransition>
                  <Archives />
                </PageTransition>
              } />
              <Route path="/ressources/conferences" element={
                <PageTransition>
                  <Conferences />
                </PageTransition>
              } />
              <Route path="/services/pret" element={
                <PageTransition>
                  <Pret />
                </PageTransition>
              } />
              <Route path="/services/formations" element={
                <PageTransition>
                  <Formations />
                </PageTransition>
              } />
              <Route path="/services/aide" element={
                <PageTransition>
                  <Aide />
                </PageTransition>
              } />
              <Route path="/services/espaces" element={
                <PageTransition>
                  <Espaces />
                </PageTransition>
              } />
              <Route path="/services/lecture" element={
                <PageTransition>
                  <Lecture />
                </PageTransition>
              } />
              <Route path="/services/multimedia" element={
                <PageTransition>
                  <Multimedia />
                </PageTransition>
              } />
              <Route path="/services/groupes" element={
                <PageTransition>
                  <Groupes />
                </PageTransition>
              } />
              <Route path="/services/cafeteria" element={
                <PageTransition>
                  <Cafeteria />
                </PageTransition>
              } />
              <Route path="/services/impression" element={
                <PageTransition>
                  <Impression />
                </PageTransition>
              } />
              <Route path="/services/wifi" element={
                <PageTransition>
                  <Wifi />
                </PageTransition>
              } />
              <Route path="/services/parking" element={
                <PageTransition>
                  <Parking />
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
