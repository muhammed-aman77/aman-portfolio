import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { personalInfo, projects } from './data/portfolioData';

import Home from './pages/UniverseHome';
import Resume from './pages/Resume';
import Work from './pages/Work';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import Lab from './pages/Lab';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import './styles/global.css';

export default function App() {
  return (
    <div className="portfolio-app">
      {/* Scroll restoration on route transition */}
      <ScrollToTop />

      {/* Accessibility Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Global Navigation Header */}
      <Navbar />

      <RouteMetadata />

      {/* Main Multi-Page Routed Viewport */}
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:projectId" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/lab" element={<Lab />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Global Minimalist Engineering Footer */}
      <Footer />
    </div>
  );
}

function RouteMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const projectId = pathname.startsWith('/work/') ? pathname.split('/')[2] : null;
    const project = projects.find((item) => item.id === projectId);
    const pageNames = {
      '/': 'Aman Universe',
      '/work': 'Selected Work',
      '/about': 'About',
      '/lab': 'Lab',
      '/contact': 'Contact',
      '/resume': 'Resume',
      '/404': 'Signal Not Found'
    };
    const pageName = project?.title || pageNames[pathname] || 'Signal Not Found';
    document.title = `${pageName} — ${personalInfo.name}`;
  }, [pathname]);

  return null;
}
