import React from 'react';
import { Link } from 'react-router-dom';
import { FlaskConical, Terminal, Activity, ArrowRight, Cpu, Radio, Sparkles } from 'lucide-react';
import { labExperiments } from '../data/portfolioData';
import '../styles/lab.css';

export default function Lab() {
  return (
    <div className="lab-page page-fade-enter">
      {/* Header */}
      <section className="lab-header-section">
        <div className="container">
          <span className="page-category-label">03 / EXPERIMENTAL SPACE</span>
          <h1 className="page-title">AMAN LAB // Explorations</h1>
          <div className="lab-meta-tag-strip">
            <span className="lab-tag-pill">HARDWARE BENCHTOP</span>
            <span className="lab-tag-pill">SIGNAL CALIBRATION</span>
            <span className="lab-tag-pill">ALGORITHM PROFILING</span>
          </div>
          <p className="page-description">
            A dedicated record of active benchtop calibrations, RF signal testing, image processing parameter explorations, and hardware bus concurrency experiments.
          </p>
        </div>
      </section>

      {/* Main Experiments Grid */}
      <section className="lab-experiments-section">
        <div className="container">
          <div className="lab-grid">
            {labExperiments.map((exp, idx) => (
              <div key={exp.id} className="lab-card">
                <div className="lab-card-top">
                  <span className="lab-card-num">// LAB_EXP_0{idx + 1}</span>
                  <span className="lab-card-cat">{exp.category}</span>
                </div>

                <h2 className="lab-card-title">{exp.title}</h2>
                <p className="lab-card-desc">{exp.description}</p>

                <div className="lab-tags-row">
                  {exp.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="lab-tech-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="lab-card-footer">
                  <span className="lab-status-dot" aria-hidden="true" />
                  <span className="lab-status-text">{exp.status}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Verification Protocol Notice */}
          <div className="lab-disclaimer-box">
            <div className="disclaimer-header">
              <Terminal size={16} className="text-accent" aria-hidden="true" />
              <span className="disclaimer-title">// LAB PROTOCOL &amp; RECORD INTEGRITY</span>
            </div>
            <p className="disclaimer-text">
              All listed laboratory items represent actual benchtop calibration steps, academic experiments, and research literature synthesis. Results are documented progressively as hardware verification proceeds.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
