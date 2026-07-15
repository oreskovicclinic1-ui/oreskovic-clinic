import { useState } from 'react'
import './theme.css';
import Header from './components/Header/Header'
import Hero from './pages/Hero/Hero'
import TrustBar from './pages/TrustBar/TrustBar'
import AboutClinic from './pages/AboutClinic/AboutClinic';
import Treatments from './pages/Treatments/Treatments';
import Process from './pages/Process/Process';
import Results from './pages/Results/Results';
import Offer from './pages/Offer/Offer';
import VideoShowcase from './pages/VideoShowcase/VideoShowCase';

function App() {

  return (
    <>
      <Header />
      <Hero />
      <TrustBar/>
      <AboutClinic/>
      <Treatments />
      <Process/>
      <Results />     
      <Offer />
      <VideoShowcase/>
    </>
  )
}

export default App
