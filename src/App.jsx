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
import Pricing from './pages/Pricing/Pricing';
import Testimonials from './pages/Testimonials/Testimonials';
import FinalCta from './pages/FinalCta/Finalcta';

function App() {

  return (
    <>
      <Header />
      <Hero />
      <TrustBar/>
      <AboutClinic/>
      <Treatments />
      <Pricing/>
      <Process/>
      <Results />     
      <Offer />
      <VideoShowcase/>
      <Testimonials/>
      <FinalCta/>
    </>
  )
}

export default App
