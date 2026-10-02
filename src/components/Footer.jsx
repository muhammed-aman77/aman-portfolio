import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Terminal, MapPin } from 'lucide-react';
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
            <div className="footer-geo-tag">
              <MapPin size={12} aria-hidden="true" />
              <span>{personalInfo.location} · {personalInfo.coordinates}</span>
            </div>
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
            </div>
          </div>

          {/* System Telemetry & Back to Top */}
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
            <div className="footer-status-box">
              <div className="footer-status-row">
                <span className="status-key">SYSTEM_ID</span>
                <span className="status-val">AMAN.SYS-WORKSPACE</span>
              </div>
              <div className="footer-status-row">
                <span className="status-key">STUDENT_LEVEL</span>
                <span className="status-val">3RD YEAR B.E. AI &amp; ML</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Baseline Bar */}
        <div className="footer-bottom-bar">
          <span className="footer-copyright">
            © {new Date().getFullYear()} Muhammed Aman Shaminas. Built with clean architecture and strict factual accuracy.
          </span>
          <span className="footer-arch-tag">
            MODULAR MULTI-PAGE REACT SYSTEM
          </span>
        </div>
      </div>
    </footer>
  );
}
