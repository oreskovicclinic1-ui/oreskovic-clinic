import { useState } from 'react'
import './theme.css';

import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header'
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import StickyBar from './components/Stickybar/Stickybar';

function App() {

  return (
    <>

      <Header />

      <Routes>

          <Route path='/' element={ <Home />}></Route>

      </Routes>

        <Footer />
        <StickyBar />

    </>
  )
}

export default App
