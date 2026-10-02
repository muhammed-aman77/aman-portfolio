import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Github, ExternalLink, Cpu, CheckCircle2, AlertCircle } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectSchematic from '../components/ProjectSchematic';
import '../styles/projectDetail.css';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const currentIndex = projects.findIndex((p) => p.id === projectId);
  const project = projects[currentIndex];

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  // Keyboard Navigation: ArrowLeft = prev, ArrowRight = next, Escape = back to /work
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Do not intercept if user is inside an input field
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      if (e.key === 'ArrowLeft') {
        navigate(`/work/${prevProject.id}`);
      } else if (e.key === 'ArrowRight') {
        navigate(`/work/${nextProject.id}`);
      } else if (e.key === 'Escape') {
        navigate('/work');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, navigate, prevProject.id, nextProject.id]);

  if (!project) {
    return (
      <div className="container page-fade-enter project-not-found">
        <span className="error-tag">// 404 PROJECT NOT FOUND</span>
        <h1 className="error-heading">Case Study Not Located</h1>
        <p className="error-desc">
          The requested project does not exist within the AMAN.SYS archive.
        </p>
        <Link to="/work" className="btn-primary">
          <ArrowLeft size={16} aria-hidden="true" />
          <span>RETURN TO WORK ARCHIVE</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="project-detail-page page-fade-enter">
      {/* Top Nav Rail */}
      <div className="project-top-nav-bar">
        <div className="container project-nav-inner">
          <Link to="/work" className="project-back-link">
            <ArrowLeft size={15} aria-hidden="true" />
            <span>RETURN TO WORK ARCHIVE</span>
          </Link>

          <div className="project-quick-shortcuts" aria-label="Keyboard navigation hint">
            <span className="shortcut-pill">← PREV</span>
            <span className="shortcut-pill">ESC TO EXIT</span>
            <span className="shortcut-pill">NEXT →</span>
          </div>
        </div>
      </div>

      {/* Main Project Hero Header */}
      <section className="project-hero-header">
        <div className="container">
          <div className="project-header-meta">
            <span className="detail-num">// PROJECT {project.number}</span>
            <span className="detail-domain-chip">{project.domainTag}</span>
            <span className="detail-status-pill">
              <CheckCircle2 size={13} aria-hidden="true" />
              <span>{project.status}</span>
            </span>
          </div>

          <h1 className="project-main-title">{project.title}</h1>
          <p className="project-main-lead">{project.summary}</p>

          <div className="project-tech-ribbon" aria-label="Project technologies">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="tech-ribbon-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Core Body */}
      <section className="project-body-section">
        <div className="container">
          <div className="project-body-grid">
            {/* Left Main Content */}
            <div className="project-content-main">
              {/* Architectural Schematic Visual */}
              <div className="case-study-block schematic-block">
                <div className="block-header">
                  <span className="block-num">01</span>
                  <h2 className="block-title">Architectural System Schematic</h2>
                </div>
                <div className="schematic-display-frame">
                  <ProjectSchematic type={project.schematicType} title={project.title} />
                </div>
                <span className="schematic-caption">
                  // Fig 1.0: Conceptual data pipeline &amp; hardware transducer architecture for {project.shortTitle}.
                </span>
              </div>

              {/* The Overview & The Problem */}
              <div className="case-study-block">
                <div className="block-header">
                  <span className="block-num">02</span>
                  <h2 className="block-title">Problem Statement &amp; Context</h2>
                </div>
                <p className="block-text">{project.theProblem}</p>
                <p className="block-text">{project.overview}</p>
              </div>

              {/* Engineering Approach */}
              <div className="case-study-block">
                <div className="block-header">
                  <span className="block-num">03</span>
                  <h2 className="block-title">Engineering Methodology &amp; Implementation</h2>
                </div>
                <p className="block-text">{project.approach}</p>
              </div>

              {/* My Contribution */}
              <div className="case-study-block">
                <div className="block-header">
                  <span className="block-num">04</span>
                  <h2 className="block-title">My Verified Contribution</h2>
                </div>
                <p className="block-text contribution-text">{project.myContribution}</p>
              </div>

              {/* Current Status & Framing */}
              <div className="case-study-block status-block">
                <div className="block-header">
                  <span className="block-num">05</span>
                  <h2 className="block-title">Current Status &amp; Real Framing</h2>
                </div>
                <div className="framing-notice-card">
                  <AlertCircle size={18} className="notice-icon" aria-hidden="true" />
                  <p className="framing-notice-text">{project.currentStatus}</p>
                </div>
              </div>
            </div>

            {/* Right Sticky Sidebar */}
            <aside className="project-sidebar-aside">
              <div className="project-sidebar-box">
                <span className="sidebar-header">// PROJECT SPECS</span>

                <div className="sidebar-specs-list">
                  <div className="spec-row">
                    <span className="spec-key">PROJECT_ID</span>
                    <span className="spec-val font-mono">{project.id}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-key">CATEGORY</span>
                    <span className="spec-val">{project.category}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-key">STATUS</span>
                    <span className="spec-val text-green">{project.status}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-key">REPOSITORY</span>
                    <span className="spec-val text-accent">{project.repositoryStatus}</span>
                  </div>
                </div>

                <div className="sidebar-highlights-section">
                  <span className="sidebar-sub">// KEY HIGHLIGHTS</span>
                  <div className="sidebar-hl-list">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="hl-row">
                        <span className="hl-k">{h.label}:</span>
                        <span className="hl-v">{h.val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="sidebar-action-wrap">
                  <button
                    type="button"
                    className="btn-secondary sidebar-repo-btn"
                    onClick={() => alert(`Repository for ${project.title} will be publicly linked upon GitHub push.`)}
                  >
                    <Github size={15} aria-hidden="true" />
                    <span>{project.repositoryStatus}</span>
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Project Pagination Footer (Prev / Next) */}
      <section className="project-pagination-section">
        <div className="container">
          <div className="pagination-grid">
            <Link to={`/work/${prevProject.id}`} className="pagination-card prev-card">
              <span className="pag-dir">← PREVIOUS CASE STUDY</span>
              <span className="pag-title">// {prevProject.number} · {prevProject.shortTitle}</span>
            </Link>

            <Link to={`/work/${nextProject.id}`} className="pagination-card next-card">
              <span className="pag-dir">NEXT CASE STUDY →</span>
              <span className="pag-title">// {nextProject.number} · {nextProject.shortTitle}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
