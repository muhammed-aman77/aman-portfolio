import React from 'react';
import { personalInfo } from '../data/portfolioData';
import '../styles/about.css';

export default function About() {
  const { about } = personalInfo;

  return (
    <section id="about" className="section" aria-label="About Muhammed Aman Shaminas">
      <div className="container">
        <div className="section-header">
          <div className="section-label">01 / Profile Overview</div>
          <h2 className="section-title">Engineering Intelligence from Foundations</h2>
          <p className="section-description">
            A grounded approach to machine learning, vision algorithms, and full-stack software development.
          </p>
        </div>

        <div className="about-layout">
          {/* Narrative Column */}
          <div className="about-narrative">
            <p className="about-lead-text">
              {about.lead}
            </p>

            {about.paragraphs.map((paragraph, index) => (
              <p key={index} className="about-body-text">
                {paragraph}
              </p>
            ))}

            <div className="about-status-box">
              <div className="about-status-header">// Current Academic Standing</div>
              <div className="about-status-content">
                3rd-Year Undergraduate in Artificial Intelligence &amp; Machine Learning at Srinivas Institute of Technology.
              </div>
            </div>
          </div>

          {/* Core Technical Pillars Grid */}
          <div className="about-focus-grid" aria-label="Technical Focus Areas">
            {about.focusAreas.map((item, index) => (
              <div key={index} className="focus-card">
                <span className="focus-card-index" aria-hidden="true">
                  0{index + 1}
                </span>
                <h3 className="focus-card-title">{item.title}</h3>
                <p className="focus-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
