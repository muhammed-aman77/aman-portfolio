import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import '../styles/navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll detection for navbar background refinement
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile navigation on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll and handle Escape key for mobile menu
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { number: '01', label: 'WORK', path: '/work', desc: '05 Engineering Case Studies' },
    { number: '02', label: 'ABOUT', path: '/about', desc: 'Background, Education & Skills' },
    { number: '03', label: 'LAB', path: '/lab', desc: 'Explorations & Hardware Notes' },
    { number: '04', label: 'CONTACT', path: '/contact', desc: 'Communication Channels' }
  ];

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Left: Brand Wordmark & System Status */}
        <div className="navbar-brand-group">
          <Link to="/" className="nav-wordmark" aria-label="Aman Workspace Home">
            AMAN<span className="nav-wordmark-dot">.</span>
          </Link>

          <div className="nav-system-status" aria-label="Academic programme">
            <span className="status-indicator-label">{personalInfo.currentRole}</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="nav-desktop-links" aria-label="Primary Navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-desktop-link ${isActive ? 'active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right Actions: Resume Button & Mobile Menu Toggle */}
        <div className="navbar-actions-group">
          <Link
            to="/resume"
            className="nav-resume-btn"
            aria-label="View or download resume PDF"
          >
            <FileText size={14} aria-hidden="true" />
            <span>RESUME</span>
          </Link>

          <button
            type="button"
            className="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation panel' : 'Open navigation panel'}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Full-Screen / Deep Panel Mobile Navigation */}
      {mobileMenuOpen && (
        <div
          className="mobile-panel-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Full-screen mobile navigation"
        >
          <div className="container mobile-panel-inner">
            <div className="mobile-panel-header">
              <span className="mobile-sys-label">// AMAN.SYS NAVIGATION</span>
              <button
                type="button"
                className="mobile-close-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="mobile-nav-list">
              <Link
                to="/"
                className={`mobile-nav-item ${location.pathname === '/' ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="mobile-item-top">
                  <span className="mobile-item-number">00</span>
                  <span className="mobile-item-title">WORKSPACE (HOME)</span>
                </div>
                <span className="mobile-item-desc">Overview &amp; Interactive Workstation</span>
              </Link>

              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`mobile-nav-item ${location.pathname.startsWith(item.path) ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="mobile-item-top">
                    <span className="mobile-item-number">{item.number}</span>
                    <span className="mobile-item-title">{item.label}</span>
                  </div>
                  <span className="mobile-item-desc">{item.desc}</span>
                </Link>
              ))}
            </nav>

            <div className="mobile-panel-footer">
              <Link
                to="/resume"
                className="btn-primary mobile-panel-resume"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FileText size={16} aria-hidden="true" />
                <span>VIEW RESUME</span>
              </Link>

              <div className="mobile-footer-meta">
                <span>{personalInfo.currentRole}</span>
                <span>{personalInfo.institution}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
