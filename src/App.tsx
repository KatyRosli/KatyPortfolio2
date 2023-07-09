import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home/Home';
import { Resume } from './pages/Resume/Resume';
import { Footer } from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactGA from 'react-ga';

const TRACKING_ID = "UA-263832841-1";
ReactGA.initialize(TRACKING_ID);

const COOKIE_CONSENT_KEY = 'cookieConsent';

export default function App() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (storedConsent === 'true') {
      setCookieConsent(true);
    }
  }, []);

  useEffect(() => {
    if (cookieConsent) {
      localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, [cookieConsent]);

  const handleAccept = () => {
    setCookieConsent(true);
  };

  return (
    <main id="bootstrap-overrides">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
      {!cookieConsent && (
        <div className='cookie-consent-banner' data-testid="cookie-consent-banner">
          <p className='cookie-text'>This website uses cookies to enchance the user experience.</p>
          <button className='cookie-button' onClick={handleAccept} data-testid="cookie-accept-button">I understand</button>
        </div>
      )}
    </main>
  );
}
