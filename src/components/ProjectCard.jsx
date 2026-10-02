import React from 'react';
import { ArrowUpRight, Github, Code2 } from 'lucide-react';

export default function ProjectCard({ project, onSelectPlaceholder }) {
  const { number, title, category, description, technologies, highlight } = project;

  return (
    <article className="project-card" aria-label={`Project: ${title}`}>
      <div>
        <div className="project-card-header">
          <span className="project-num">// {number}</span>
          <span className="project-badge">{highlight}</span>
        </div>

        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>

      <div className="project-card-footer">
        <div className="project-tags" aria-label="Technologies used">
          {technologies.map((tech, idx) => (
            <span key={idx} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-actions">
          <button
            type="button"
            className="project-action-btn"
            onClick={() => onSelectPlaceholder(title)}
            aria-label={`View code repository or documentation for ${title}`}
          >
            <Github size={15} aria-hidden="true" />
            <span>Repository</span>
            <ArrowUpRight size={14} className="project-arrow-icon" aria-hidden="true" />
          </button>

          <span className="project-action-placeholder">
            [Source on request]
          </span>
        </div>
      </div>
    </article>
  );
}
