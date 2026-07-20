import { useState } from 'react'
import './theme.css';

import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header'
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import StickyBar from './components/Stickybar/Stickybar';
import PrivacySettingsPage from './pages/CookieSettingsPage/PrivacySettingsPage';
import PrivacyBanner from './components/CookieConsentBanner/PrivacyBanner';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage/PrivacyPolicyPage';
import ScrollToTop from './utils/ScrollToTop';
import ResultsPage from './pages/ResultsPage/ResultsPage';
import CjenikPage from './pages/CjenikPage/CjenikPage';
import TreatmentPage from './pages/TreatmentPage/TreatmentPage';
import UspjesnaRezervacijaPage from './pages/UspjesnaRezervacijaPage/UspjesnaRezervacijaPage';
import RezervacijaPage from './pages/RezervacijaPage/RezervacijaPage';

function App() {

  return (
    <>
      <ScrollToTop/>
      <Header />

      <Routes>

          <Route path='/' element={ <Home />}></Route>
          <Route path="/postavke-kolacica" element={<PrivacySettingsPage />} />
          <Route path="/politika-privatnosti" element={<PrivacyPolicyPage />} />
          <Route path="/rezultati" element={<ResultsPage />} />
          <Route path="/cjenik" element={<CjenikPage />} />
          <Route path="/tretmani/:slug" element={<TreatmentPage />} />
          <Route path="/rezervacija" element={<RezervacijaPage />} />
          <Route path="/uspesna-rezervacija" element={<UspjesnaRezervacijaPage />} />

      </Routes>

        <Footer />
        <StickyBar />
        <PrivacyBanner />

    </>
  )
}

export default App
