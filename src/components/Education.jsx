import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import '../styles/education.css';

export default function Education() {
  const { education } = personalInfo;

  return (
    <section id="education" className="section" aria-label="Academic Education">
      <div className="container">
        <div className="section-header">
          <div className="section-label">04 / Academic Foundation</div>
          <h2 className="section-title">Education &amp; Theoretical Grounding</h2>
          <p className="section-description">
            Undergraduate engineering education establishing rigorous fundamentals in computational intelligence, algorithmic efficiency, and systems design.
          </p>
        </div>

        <div className="education-card">
          <div className="education-top">
            <div>
              <h3 className="education-degree">{education.degree}</h3>
              <p className="education-institution">{education.institution}</p>
            </div>

            <div className="education-timeline-pill" aria-label="Academic timeline placeholder">
              <Calendar size={13} style={{ display: 'inline', marginRight: '6px' }} aria-hidden="true" />
              <span>{education.periodPlaceholder}</span>
            </div>
          </div>

          <p className="education-desc">
            {education.details}
          </p>

          <div className="education-meta-row">
            <div className="education-meta-item">
              <span className="education-meta-label">Discipline</span>
              <span className="education-meta-value">Engineering (B.E.)</span>
            </div>

            <div className="education-meta-item">
              <span className="education-meta-label">Current Academic Level</span>
              <span className="education-meta-value">3rd Year (Active)</span>
            </div>

            <div className="education-meta-item">
              <span className="education-meta-label">Primary Concentration</span>
              <span className="education-meta-value">AI Models &amp; Embedded Systems</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
