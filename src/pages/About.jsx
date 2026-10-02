import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  MapPin, 
  Terminal, 
  Layers, 
  Cpu, 
  BrainCircuit, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight,
  Code2
} from 'lucide-react';
import { personalInfo, education, skillsData, projects } from '../data/portfolioData';
import '../styles/about.css';

export default function About() {
  const [selectedCategoryCode, setSelectedCategoryCode] = useState('INTELLIGENCE');

  const activeCategory = skillsData.find(c => c.code === selectedCategoryCode) || skillsData[1];
  const highlightedProjects = projects.filter(p => activeCategory.relatedProjects.includes(p.id));

  return (
    <div className="about-page page-fade-enter">
      {/* Header */}
      <section className="about-header-section">
        <div className="container">
          <span className="page-category-label">02 / PROFILE &amp; PHILOSOPHY</span>
          <h1 className="page-title">About Muhammed Aman Shaminas</h1>
          <p className="page-description">
            3rd-year Artificial Intelligence &amp; Machine Learning engineering student at Srinivas Institute of Technology, designing intelligent algorithms, real-world sensor systems, and structured software.
          </p>
        </div>
      </section>

      {/* Main Narrative & Philosophy Grid */}
      <section className="about-narrative-section">
        <div className="container">
          <div className="about-profile-grid">
            {/* Left Narrative Pillars */}
            <div className="about-pillars-col">
              <div className="about-block">
                <span className="about-block-num">// WHO I AM</span>
                <h2 className="about-block-heading">Engineer in Training. Builder by Instinct.</h2>
                <p className="about-p-lead">{personalInfo.bio.lead}</p>
                {personalInfo.bio.paragraphs.map((p, idx) => (
                  <p key={idx} className="about-p-body">{p}</p>
                ))}
              </div>

              <div className="about-block">
                <span className="about-block-num">// HOW I APPROACH PROJECTS</span>
                <h3 className="about-subheading">Methodical Decomposition &amp; Physical Grounding</h3>
                <div className="approach-grid">
                  <div className="approach-item">
                    <span className="approach-step">01 / Formulation</span>
                    <p className="approach-desc">Define concrete constraints before selecting models or microcontrollers. Avoid premature complexity.</p>
                  </div>
                  <div className="approach-item">
                    <span className="approach-step">02 / Pipeline Design</span>
                    <p className="approach-desc">Architect the entire data flow—from physical sensor transducer inputs to signal conditioning and model inference.</p>
                  </div>
                  <div className="approach-item">
                    <span className="approach-step">03 / Implementation</span>
                    <p className="approach-desc">Write structured, modular code in Python, C, or modern frameworks with clear separation of concerns.</p>
                  </div>
                  <div className="approach-item">
                    <span className="approach-step">04 / Verification</span>
                    <p className="approach-desc">Validate with empirical tests, serial telemetry, or held-out datasets rather than unfounded assumptions.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Academic & Current Focus Sidebar */}
            <aside className="about-meta-aside">
              <div className="about-aside-box">
                <div className="aside-box-header">
                  <GraduationCap size={18} className="text-accent" aria-hidden="true" />
                  <span className="aside-box-title">ACADEMIC FOUNDATION</span>
                </div>

                <div className="aside-degree-info">
                  <h4 className="aside-degree-title">{education.degree}</h4>
                  <p className="aside-institution-name">{education.institution}</p>
                  <span className="aside-level-badge">{education.level}</span>
                </div>

                <p className="aside-focus-desc">{education.focus}</p>

                <div className="aside-location-row">
                  <MapPin size={13} className="text-accent" aria-hidden="true" />
                  <span>Kannur, Kerala · {personalInfo.coordinates}</span>
                </div>
              </div>

              <div className="about-aside-box focus-aside-box">
                <div className="aside-box-header">
                  <Terminal size={18} className="text-accent" aria-hidden="true" />
                  <span className="aside-box-title">CURRENT TECHNICAL FOCUS</span>
                </div>

                <ul className="aside-focus-list">
                  <li>Computer Vision &amp; CLAHE Image Preprocessing</li>
                  <li>Edge Telemetry &amp; Microcontroller Bus Protocols</li>
                  <li>Autonomous Kinematics &amp; RF Sensing Robotics</li>
                  <li>Clean REST API Backend Architecture (Django REST)</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ===================================================================
          INTERACTIVE SKILLS MAP
          =================================================================== */}
      <section className="about-skills-section">
        <div className="container">
          <div className="skills-map-header">
            <span className="section-label-chip">// 03 / TECHNICAL MAP</span>
            <h2 className="section-heading-text">Verified Competencies &amp; System Linkage</h2>
            <p className="section-intro-text">
              Select a domain to inspect verified toolings and view connected engineering case studies.
            </p>
          </div>

          <div className="skills-interactive-container">
            {/* Category Selector Tabs */}
            <div className="skills-category-pills-row" role="tablist" aria-label="Skill categories">
              {skillsData.map((cat) => {
                const isSelected = selectedCategoryCode === cat.code;
                return (
                  <button
                    key={cat.code}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    className={`skill-category-tab ${isSelected ? 'active' : ''}`}
                    onClick={() => setSelectedCategoryCode(cat.code)}
                  >
                    <span className="cat-code">{cat.code}</span>
                    <span className="cat-name">{cat.category}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Category Skill Matrix */}
            <div className="skills-display-matrix">
              <div className="matrix-top">
                <div>
                  <h3 className="matrix-cat-title">{activeCategory.category} Domain</h3>
                  <p className="matrix-cat-desc">{activeCategory.description}</p>
                </div>
                <span className="matrix-count-badge">
                  {activeCategory.skills.length} CONFIRMED TOOLS
                </span>
              </div>

              {/* Skills Badges List */}
              <div className="matrix-skills-grid">
                {activeCategory.skills.map((skillName) => (
                  <div key={skillName} className="matrix-skill-badge">
                    <span className="skill-dot" aria-hidden="true" />
                    <span className="skill-title">{skillName}</span>
                  </div>
                ))}
              </div>

              {/* Linked Projects Connection */}
              <div className="matrix-connected-projects">
                <span className="connected-label">
                  // CONNECTED CASE STUDIES IN THIS DOMAIN ({highlightedProjects.length})
                </span>

                {highlightedProjects.length > 0 ? (
                  <div className="connected-projects-grid">
                    {highlightedProjects.map((p) => (
                      <Link key={p.id} to={`/work/${p.id}`} className="connected-project-card">
                        <div className="cp-top">
                          <span className="cp-num">// {p.number}</span>
                          <span className="cp-domain">{p.domainTag}</span>
                        </div>
                        <h4 className="cp-title">{p.title}</h4>
                        <div className="cp-link-row">
                          <span>View Case Study</span>
                          <ArrowRight size={13} aria-hidden="true" />
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="no-projects-notice">
                    <span>Tooling utilized across academic coursework and exploratory laboratory scripts.</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
