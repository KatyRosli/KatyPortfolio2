import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { Resume } from './pages/Resume';
import { Footer } from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
