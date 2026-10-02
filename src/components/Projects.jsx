import React from 'react';
import { projects } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import '../styles/projects.css';

export default function Projects({ onSelectProject }) {
  return (
    <section id="work" className="section" aria-label="Selected Engineering Projects">
      <div className="container">
        <div className="section-header">
          <div className="section-label">02 / Selected Work</div>
          <h2 className="section-title">Applied Engineering &amp; AI Systems</h2>
          <p className="section-description">
            A curated selection of technical builds spanning deep learning classifiers, embedded IoT telemetry, computer vision pipelines, and full-stack software.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              project={project}
              onSelectPlaceholder={onSelectProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
