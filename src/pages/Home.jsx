import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowDownRight, 
  FileText, 
  BrainCircuit, 
  Scan, 
  Layers, 
  Cpu, 
  Activity, 
  ArrowDown, 
  Terminal,
  ExternalLink
} from 'lucide-react';
import { personalInfo, projects } from '../data/portfolioData';
import '../styles/home.css';

const workstationDomains = [
  {
    id: 'ai-ml',
    num: '01',
    label: 'AI / ML',
    title: 'Machine Learning & Neural Inference',
    icon: BrainCircuit,
    headline: 'Predictive Modeling & Feature Extraction',
    tech: ['MobileNetV2', 'TensorFlow', 'scikit-learn', 'Feature Engineering'],
    diagnostic: 'Trained model architectures for classification, feature mapping, and local decision intelligence.'
  },
  {
    id: 'vision',
    num: '02',
    label: 'VISION',
    title: 'Computer Vision & Optical Processing',
    icon: Scan,
    headline: 'Ocular Biomarkers & Contrast Equalization',
    tech: ['OpenCV', 'CLAHE Algorithm', 'Microvascular Profiling', 'Python'],
    diagnostic: 'Non-invasive ocular image preprocessing and localized feature extraction pipelines.'
  },
  {
    id: 'software',
    num: '03',
    label: 'SOFTWARE',
    title: 'Software Systems & REST Architecture',
    icon: Layers,
    headline: 'Structured Services & Normalized APIs',
    tech: ['Python', 'Django REST Framework', 'Flask Services', 'Git/GitHub'],
    diagnostic: 'Production-ready service APIs, relational schema design, and modular backend endpoints.'
  },
  {
    id: 'embedded',
    num: '04',
    label: 'EMBEDDED',
    title: 'Embedded Systems & Sensor Robotics',
    icon: Cpu,
    headline: 'Microcontroller Telemetry & RF Sensing',
    tech: ['STM32 (Blue Pill)', 'ESP32', 'AD8318 RF Detector', 'I2C / 1-Wire'],
    diagnostic: 'Autonomous row-tracking kinematics, multi-sensor industrial monitoring, and analog signal conditioning.'
  }
];

export default function Home({ onOpenResume }) {
  const [activeDomainIndex, setActiveDomainIndex] = useState(0);
  const activeDomain = workstationDomains[activeDomainIndex];
  const ActiveIcon = activeDomain.icon;

  const scrollToOverview = () => {
    const el = document.getElementById('selected-work-preview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-page page-fade-enter">
      {/* ===================================================================
          HERO: THE DIGITAL WORKSPACE
          =================================================================== */}
      <section className="home-hero-section" aria-label="Aman Digital Workspace Entry">
        <div className="container">
          {/* Top Engineering Metadata Strip */}
          <div className="hero-metadata-strip">
            <div className="meta-strip-left">
              <span className="meta-prefix">// SYSTEM IDENTIFIER:</span>
              <span className="meta-highlight">AMAN.SYS // WORKSPACE</span>
              <span className="meta-divider" aria-hidden="true">|</span>
              <span className="meta-secondary">KANNUR, IN [{personalInfo.coordinates}]</span>
            </div>
            <div className="meta-strip-right">
              <span className="meta-status-pill">
                <span className="meta-status-dot" aria-hidden="true" />
                <span>ONLINE // RUNTIME v3.4</span>
              </span>
            </div>
          </div>

          {/* Main Hero Viewport Grid */}
          <div className="hero-composition-grid">
            {/* Left: Editorial Typographic Core */}
            <div className="hero-editorial-pane">
              <div className="hero-status-tag">
                <span className="hero-tag-dot" aria-hidden="true" />
                <span>3RD-YEAR UNDERGRADUATE · B.E. AI &amp; ML</span>
              </div>

              <div className="hero-headline-block">
                <h1 className="hero-editorial-name">
                  <span className="name-line">MUHAMMED AMAN</span>
                  <span className="name-line name-accent">SHAMINAS</span>
                </h1>
              </div>

              <div className="hero-disciplines-bar">
                <span className="discipline-item">AI &amp; MACHINE LEARNING</span>
                <span className="discipline-slash" aria-hidden="true">/</span>
                <span className="discipline-item">STUDENT &amp; DEVELOPER</span>
              </div>

              <p className="hero-vision-copy">
                "{personalInfo.tagline}"
              </p>

              <div className="hero-cta-group">
                <Link to="/work" className="btn-primary hero-btn-enter">
                  <span>ENTER WORKSPACE</span>
                  <ArrowDownRight size={17} aria-hidden="true" />
                </Link>

                <button
                  type="button"
                  className="btn-secondary hero-btn-resume"
                  onClick={onOpenResume}
                  aria-label="View verified resume"
                >
                  <FileText size={16} aria-hidden="true" />
                  <span>VIEW RESUME</span>
                </button>
              </div>

              <div className="hero-academic-stamp">
                <span className="stamp-dot" aria-hidden="true" />
                <span>SRINIVAS INSTITUTE OF TECHNOLOGY · MANGALURU</span>
              </div>
            </div>

            {/* Right: Signature Interactive Engineering Workstation */}
            <div className="hero-workstation-pane">
              <div className="workstation-box">
                {/* Visual Corner Framing Marks */}
                <div className="box-crosshair top-l" aria-hidden="true">+</div>
                <div className="box-crosshair top-r" aria-hidden="true">+</div>
                <div className="box-crosshair bot-l" aria-hidden="true">+</div>
                <div className="box-crosshair bot-r" aria-hidden="true">+</div>

                {/* Workstation Top Bar */}
                <div className="workstation-top-bar">
                  <div className="top-bar-controls" aria-hidden="true">
                    <span className="ctrl-dot dot-r" />
                    <span className="ctrl-dot dot-y" />
                    <span className="ctrl-dot dot-g" />
                  </div>
                  <span className="top-bar-title">CORE_DISCIPLINES // INTERACTIVE MATRIX</span>
                  <span className="top-bar-tag">STANDBY</span>
                </div>

                {/* 4 Interactive Domain Tabs */}
                <div className="workstation-tabs-nav" role="tablist" aria-label="Engineering Domains">
                  {workstationDomains.map((domain, index) => {
                    const isSelected = activeDomainIndex === index;
                    return (
                      <button
                        key={domain.id}
                        type="button"
                        role="tab"
                        aria-selected={isSelected}
                        id={`domain-tab-${domain.id}`}
                        aria-controls={`domain-panel-${domain.id}`}
                        className={`domain-tab-item ${isSelected ? 'active' : ''}`}
                        onClick={() => setActiveDomainIndex(index)}
                      >
                        <span className="tab-idx">{domain.num}</span>
                        <span className="tab-label">{domain.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Active Domain Telemetry Panel */}
                <div
                  id={`domain-panel-${activeDomain.id}`}
                  role="tabpanel"
                  aria-labelledby={`domain-tab-${activeDomain.id}`}
                  className="workstation-content-panel"
                >
                  <div className="content-domain-header">
                    <div className="domain-icon-frame" aria-hidden="true">
                      <ActiveIcon size={20} />
                    </div>
                    <div>
                      <h2 className="domain-heading">{activeDomain.title}</h2>
                      <div className="domain-subheadline">{activeDomain.headline}</div>
                    </div>
                  </div>

                  <p className="domain-diagnostic-paragraph">
                    {activeDomain.diagnostic}
                  </p>

                  <div className="domain-tech-pills" aria-label="Domain technical tooling">
                    {activeDomain.tech.map((tool, idx) => (
                      <span key={idx} className="tool-pill">
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Subtle Waveform Signal Trace */}
                  <div className="workstation-signal-monitor" aria-hidden="true">
                    <div className="monitor-label-row">
                      <span className="monitor-label">// ACTIVE TELEMETRY TRACE</span>
                      <span className="monitor-state">SAMPLING RATE: OPTIMIZED</span>
                    </div>
                    <div className="monitor-wave-box">
                      <svg
                        className="monitor-svg"
                        viewBox="0 0 400 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0 15 Q 50 3, 100 15 T 200 15 T 300 7 T 400 15"
                          stroke="rgba(0, 229, 255, 0.3)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M0 15 Q 50 3, 100 15 T 200 15 T 300 7 T 400 15"
                          stroke="var(--accent)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          className="wave-line-live"
                        />
                      </svg>
                      <div className="monitor-scanline" />
                    </div>
                  </div>

                  {/* Telemetry Footer Row */}
                  <div className="workstation-footer-strip">
                    <div className="strip-item">
                      <span className="strip-k">DISCIPLINE</span>
                      <span className="strip-v text-accent">{activeDomain.label}</span>
                    </div>
                    <div className="strip-item">
                      <span className="strip-k">ENVIRONMENT</span>
                      <span className="strip-v">S.I.T. AI LABS</span>
                    </div>
                    <div className="strip-item">
                      <span className="strip-k">STATUS</span>
                      <span className="strip-v text-green">VERIFIED</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Prompt to Selected Work */}
          <div className="hero-scroll-bar">
            <button
              type="button"
              className="hero-scroll-trigger"
              onClick={scrollToOverview}
              aria-label="Scroll to selected work preview"
            >
              <span className="scroll-txt">EXPLORE ARCHIVE</span>
              <div className="scroll-pip-track">
                <span className="scroll-pip-light" aria-hidden="true" />
              </div>
              <ArrowDown size={14} className="scroll-arrow" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {/* ===================================================================
          HOME: SELECTED WORK CASE STUDIES PREVIEW
          =================================================================== */}
      <section id="selected-work-preview" className="home-work-preview-section">
        <div className="container">
          <div className="section-title-wrap">
            <div className="section-label-chip">// 01 / SELECTED WORK</div>
            <div className="section-heading-split">
              <h2 className="section-heading-text">Applied Engineering Case Studies</h2>
              <Link to="/work" className="section-view-all-link">
                <span>VIEW FULL ARCHIVE (05)</span>
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
            <p className="section-intro-text">
              Detailed case studies across computer vision, embedded sensor telemetry, automotive battery safety, and autonomous robotics.
            </p>
          </div>

          {/* 5 Verified Case Studies Preview List */}
          <div className="work-preview-stack">
            {projects.map((proj) => (
              <article key={proj.id} className="work-preview-item">
                <div className="item-header-meta">
                  <span className="item-number">// {proj.number}</span>
                  <span className="item-domain-badge">{proj.domainTag}</span>
                  <span className="item-status-tag">{proj.status}</span>
                </div>

                <div className="item-main-grid">
                  <div className="item-info-col">
                    <h3 className="item-title">
                      <Link to={`/work/${proj.id}`} className="item-title-link">
                        {proj.title}
                      </Link>
                    </h3>
                    <p className="item-summary">{proj.summary}</p>
                    
                    <div className="item-tech-tags" aria-label="Technologies used">
                      {proj.technologies.map((t, idx) => (
                        <span key={idx} className="tech-badge">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="item-action-col">
                    <Link to={`/work/${proj.id}`} className="btn-secondary item-explore-btn">
                      <span>CASE STUDY</span>
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="home-work-footer-cta">
            <Link to="/work" className="btn-primary">
              <span>EXPLORE ALL 05 PROJECTS WITH SCHEMATICS</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================================
          HOME: ENGINEERING STANCE / IDENTITY STRIP
          =================================================================== */}
      <section className="home-philosophy-strip">
        <div className="container">
          <div className="philosophy-card">
            <div className="philosophy-col">
              <span className="philosophy-num">// ENGINEERING DISCIPLINE</span>
              <h3 className="philosophy-title">Practical Intelligence &amp; Physical Systems</h3>
              <p className="philosophy-body">
                Rather than treating machine learning as an isolated abstraction, I design intelligent algorithms that interact with sensor buses, embedded microcontrollers, and robust backend services.
              </p>
            </div>

            <div className="philosophy-stats-grid">
              <div className="p-stat-box">
                <span className="p-stat-val">05</span>
                <span className="p-stat-lbl">Confirmed Builds</span>
              </div>
              <div className="p-stat-box">
                <span className="p-stat-val">B.E.</span>
                <span className="p-stat-lbl">Artificial Intelligence &amp; ML</span>
              </div>
              <div className="p-stat-box">
                <span className="p-stat-val">3RD</span>
                <span className="p-stat-lbl">Academic Year</span>
              </div>
              <div className="p-stat-box">
                <span className="p-stat-val">100%</span>
                <span className="p-stat-lbl">Factual Integrity</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
