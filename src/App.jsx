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

function App() {

  return (
    <>
      <ScrollToTop/>
      <Header />

      <Routes>

          <Route path='/' element={ <Home />}></Route>
          <Route path="/postavke-kolacica" element={<PrivacySettingsPage />} />
          <Route path="/politika-privatnosti" element={<PrivacyPolicyPage />} />


      </Routes>

        <Footer />
        <StickyBar />
        <PrivacyBanner />

    </>
  )
}

export default App
