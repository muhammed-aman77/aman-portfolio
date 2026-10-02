import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import '../styles/footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-workspace" aria-label="Aman Workspace Footer">
      <div className="container">
        {/* Top Footer Grid */}
        <div className="footer-top-grid">
          {/* Identity & Technical Stance */}
          <div className="footer-identity-col">
            <Link to="/" className="footer-wordmark">
              AMAN<span className="footer-dot">.</span>
            </Link>
            <p className="footer-identity-name">{personalInfo.name}</p>
            <p className="footer-identity-role">{personalInfo.discipline}</p>
            <p className="footer-identity-role">{personalInfo.currentRole} · {personalInfo.institution}</p>
          </div>

          {/* Workspace Sitemaps */}
          <div className="footer-nav-col">
            <span className="footer-col-header">// WORKSPACE NAVIGATION</span>
            <div className="footer-nav-links">
              <Link to="/" className="footer-link">00 / Home</Link>
              <Link to="/work" className="footer-link">01 / Selected Work (05)</Link>
              <Link to="/about" className="footer-link">02 / About &amp; Skills</Link>
              <Link to="/lab" className="footer-link">03 / Lab &amp; Experiments</Link>
              <Link to="/contact" className="footer-link">04 / Contact</Link>
              <Link to="/resume" className="footer-link">05 / Resume PDF</Link>
            </div>
          </div>

          {/* Profile links and back to top */}
          <div className="footer-action-col">
            <button
              type="button"
              className="footer-top-btn"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
            >
              <span>RETURN TO TOP</span>
              <ArrowUp size={14} aria-hidden="true" />
            </button>
            <div className="footer-social-links">
              <a href={personalInfo.contact.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} aria-hidden="true" /></a>
              <a href={personalInfo.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} aria-hidden="true" /></a>
            </div>
          </div>
        </div>

        {/* Bottom Baseline Bar */}
        <div className="footer-bottom-bar">
          <span className="footer-copyright">
            © {new Date().getFullYear()} {personalInfo.name} · {personalInfo.discipline}.
          </span>
          <span className="footer-arch-tag">
            FIVE CONFIRMED PROJECTS
          </span>
        </div>
      </div>
    </footer>
  );
}
