import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Work from './pages/Work';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import Lab from './pages/Lab';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import './styles/global.css';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleOpenResume = () => {
    setResumeOpen(true);
  };

  const handleCloseResume = () => {
    setResumeOpen(false);
  };

  return (
    <div className="portfolio-app">
      {/* Scroll restoration on route transition */}
      <ScrollToTop />

      {/* Accessibility Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Global Navigation Header */}
      <Navbar onOpenResume={handleOpenResume} />

      {/* Main Multi-Page Routed Viewport */}
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home onOpenResume={handleOpenResume} />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:projectId" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/lab" element={<Lab />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Global Minimalist Engineering Footer */}
      <Footer />

      {/* Global Resume Overlay */}
      <ResumeModal isOpen={resumeOpen} onClose={handleCloseResume} />
    </div>
  );
}
