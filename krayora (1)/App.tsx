import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import About from './pages/About';
import Pricing from './pages/Pricing';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import BookConsultation from './pages/BookConsultation';

// Handle scroll position and initial navigation
const AppBehavior = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Force navigation to home on initial app load
  useEffect(() => {
    // If the site is loaded on any page other than home, redirect to home.
    if (pathname !== '/') {
      navigate('/');
    }
  }, []); 

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <AppBehavior />
      <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/book-consultation" element={<BookConsultation />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;