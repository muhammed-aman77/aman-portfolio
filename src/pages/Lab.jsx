import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FlaskConical } from 'lucide-react';
import '../styles/lab.css';

export default function Lab() {
  return (
    <div className="lab-page page-fade-enter">
      {/* Header */}
      <section className="lab-header-section">
        <div className="container">
            <span className="page-category-label">03 / OPEN BENCH</span>
            <h1 className="page-title">Lab notes, when ready.</h1>
          <p className="page-description">
              A place for experiments and technical notes that are ready to share. No independent lab entries are published here yet.
          </p>
        </div>
      </section>

      {/* Empty lab index */}
      <section className="lab-experiments-section">
        <div className="container">
          <div className="lab-empty-state">
            <div className="lab-empty-mark" aria-hidden="true"><FlaskConical size={24} /></div>
            <div className="lab-empty-copy">
              <span className="lab-empty-code">LAB INDEX / 00 ENTRIES</span>
              <h2>No notes filed.</h2>
              <p>This index is ready for future experiments, prototypes, and technical explorations. It does not count toward the five confirmed portfolio projects.</p>
              <div className="lab-empty-actions">
                <Link to="/work">Browse confirmed work <ArrowRight size={15} aria-hidden="true" /></Link>
                <Link to="/about">Explore domains <ArrowRight size={15} aria-hidden="true" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
