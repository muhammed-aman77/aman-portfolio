import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectDiagram from '../components/ProjectDiagram';
import '../styles/work.css';

export default function Work() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const activeProject = projects[activeProjectIndex];

  return (
    <div className="work-page page-fade-enter">
      {/* Page Header */}
      <section className="work-header-section">
        <div className="container">
          <div className="work-header-content">
            <span className="page-category-label">01 / ENGINEERING ARCHIVE</span>
            <h1 className="page-title">Selected Work &amp; Case Studies</h1>
            <div className="work-header-meta-row">
              <span className="meta-badge">05 CONFIRMED BUILDS</span>
              <span className="meta-sep">//</span>
              <span className="meta-desc">BUILD · EXPERIMENT · ITERATE</span>
            </div>
            <p className="page-description">
              Five academic and prototype projects across computer vision, embedded sensing, proposed safety systems, robotics, and software.
            </p>
          </div>
        </div>
      </section>

      {/* Main Archive Interactive Viewport */}
      <section className="work-archive-section">
        <div className="container">
          <div className="archive-split-grid">
            {/* Left: Interactive Project Navigation Index */}
            <div className="archive-index-col">
              <div className="archive-list-wrapper">
                {projects.map((proj, idx) => {
                  const isActive = activeProjectIndex === idx;
                  return (
                    <div
                      key={proj.id}
                      className={`archive-row-card ${isActive ? 'active' : ''}`}
                      onMouseEnter={() => setActiveProjectIndex(idx)}
                    >
                      <div className="archive-row-top">
                        <span className="archive-row-num">// {proj.number}</span>
                        <span className="archive-row-domain">{proj.domainTag}</span>
                        <span className="archive-row-status">{proj.status}</span>
                      </div>

                      <h2 className="archive-row-title">
                        <Link to={`/work/${proj.id}`} className="archive-title-link" onFocus={() => setActiveProjectIndex(idx)}>
                          {proj.title}
                        </Link>
                      </h2>

                      <p className="archive-row-summary">
                        {proj.summary}
                      </p>

                      <div className="archive-row-footer">
                        <div className="archive-tags-list">
                          {proj.technologies.slice(0, 4).map((tech, tIdx) => (
                            <span key={tIdx} className="archive-tag">{tech}</span>
                          ))}
                          {proj.technologies.length > 4 && (
                            <span className="archive-tag-more">+{proj.technologies.length - 4}</span>
                          )}
                        </div>

                        <Link to={`/work/${proj.id}`} className="archive-open-btn" onFocus={() => setActiveProjectIndex(idx)}>
                          <span>CASE STUDY</span>
                          <ArrowUpRight size={14} aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Sticky Architectural Schematic Preview Panel */}
            <div className="archive-preview-col">
              <div className="archive-sticky-preview">
                <div className="preview-terminal-header">
                  <div className="preview-terminal-dots" aria-hidden="true">
                    <span className="p-dot" />
                    <span className="p-dot" />
                    <span className="p-dot" />
                  </div>
                  <span className="preview-terminal-title">
                    SYSTEM_SCHEMATIC // {activeProject.id.toUpperCase()}
                  </span>
                  <span className="preview-terminal-num">{activeProject.number} / 05</span>
                </div>

                <div className="preview-schematic-box">
                    <ProjectDiagram type={activeProject.schematicType} title={activeProject.title} />
                </div>

                <div className="preview-meta-details">
                  <div className="preview-title-row">
                    <h3 className="preview-project-name">{activeProject.title}</h3>
                    <span className="preview-category-tag">{activeProject.category}</span>
                  </div>

                  <div className="preview-highlights-grid">
                    {activeProject.highlights.map((hl, hlIdx) => (
                      <div key={hlIdx} className="preview-hl-item">
                        <span className="hl-label">{hl.label}</span>
                        <span className="hl-val">{hl.val}</span>
                      </div>
                    ))}
                  </div>

                  <div className="preview-action-row">
                    <Link to={`/work/${activeProject.id}`} className="btn-primary preview-detail-btn">
                      <span>OPEN FULL CASE STUDY</span>
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
