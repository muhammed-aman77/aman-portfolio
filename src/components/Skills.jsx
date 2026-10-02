import React from 'react';
import { Terminal, BrainCircuit, Layers, Cpu, Box } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import '../styles/skills.css';

const categoryIcons = {
  Programming: Terminal,
  'AI / ML': BrainCircuit,
  Development: Layers,
  'IoT / Embedded': Cpu,
  Other: Box
};

export default function Skills() {
  return (
    <section id="skills" className="section" aria-label="Technical Skills Matrix">
      <div className="container">
        <div className="section-header">
          <div className="section-label">03 / Technical Matrix</div>
          <h2 className="section-title">Core Competencies &amp; Tooling</h2>
          <p className="section-description">
            A precise technical inventory across core programming languages, neural architectures, backend frameworks, and embedded microcontrollers.
          </p>
        </div>

        <div className="skills-grid">
          {skillsData.map((categoryGroup) => {
            const Icon = categoryIcons[categoryGroup.category] || Terminal;
            return (
              <div key={categoryGroup.category} className="skill-category-card">
                <div className="skill-card-top">
                  <h3 className="skill-category-title">{categoryGroup.category}</h3>
                  <Icon size={19} className="skill-category-icon" aria-hidden="true" />
                </div>

                <p className="skill-category-desc">{categoryGroup.description}</p>

                <div className="skill-pills-list" aria-label={`${categoryGroup.category} skills`}>
                  {categoryGroup.skills.map((skillName) => (
                    <span key={skillName} className="skill-pill">
                      {skillName}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
