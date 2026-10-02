import React, { useState } from 'react';
import { 
  ArrowDownRight, 
  ArrowDown, 
  FileText, 
  BrainCircuit, 
  Scan, 
  Layers, 
  Cpu, 
  Activity, 
  CheckCircle2,
  Terminal
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import '../styles/hero.css';

const workstationDomains = [
  {
    id: 'aiml',
    label: 'AI / ML',
    title: 'Artificial Intelligence & Machine Learning',
    icon: BrainCircuit,
    headline: 'Predictive Modeling & Neural Inference',
    tech: ['MobileNetV2', 'TensorFlow', 'Deep Learning', 'Data Pipelines'],
    diagnostic: 'Trained classifiers & algorithmic models for decision intelligence and predictive analytics.'
  },
  {
    id: 'vision',
    label: 'Vision',
    title: 'Computer Vision & Image Processing',
    icon: Scan,
    headline: 'Visual Biomarkers & Real-Time Detection',
    tech: ['OpenCV', 'YOLO Framework', 'CLAHE Preprocessing', 'Feature Extraction'],
    diagnostic: 'Non-invasive ocular image analysis and real-time transit hazard detection pipelines.'
  },
  {
    id: 'software',
    label: 'Software',
    title: 'Software Development & REST APIs',
    icon: Layers,
    headline: 'Structured Backends & Clean Services',
    tech: ['Python', 'Flask Services', 'Django REST Framework', 'Git/GitHub'],
    diagnostic: 'Production-ready service APIs, constraint solvers, and modular system architectures.'
  },
  {
    id: 'iot',
    label: 'IoT / Embedded',
    title: 'IoT Telemetry & Embedded Systems',
    icon: Cpu,
    headline: 'Physical Computing & Sensor Networks',
    tech: ['ESP32', 'STM32', 'Multi-Sensor Buses', 'Real-Time Telemetry'],
    diagnostic: 'Vibrational, acoustic, and thermal telemetry pipelines for predictive industrial health monitoring.'
  }
];

export default function Hero({ onOpenResume }) {
  const [activeDomainIndex, setActiveDomainIndex] = useState(0);
  const activeDomain = workstationDomains[activeDomainIndex];
  const ActiveIcon = activeDomain.icon;

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section" aria-label="Introduction and Overview">
      {/* Subtle Engineering Grid Line Detail */}
      <div className="hero-ambient-glow" aria-hidden="true" />

      <div className="container hero-container">
        {/* Top Technical Metadata Bar */}
        <div className="hero-meta-bar" aria-label="Current Engineering Focus">
          <div className="meta-bar-item">
            <span className="meta-bar-prefix">// CURRENTLY BUILDING:</span>
            <span className="meta-bar-highlight">AI / COMPUTER VISION / INTELLIGENT SYSTEMS</span>
          </div>
          <div className="meta-bar-item meta-bar-secondary">
            <span className="meta-bar-prefix">ACADEMIC STATUS:</span>
            <span>3RD-YEAR UNDERGRADUATE // B.E. AI &amp; ML</span>
          </div>
        </div>

        {/* Main Hero Composition Grid */}
        <div className="hero-main-grid">
          {/* Left Column: Editorial Typography & Intentional Hierarchy */}
          <div className="hero-editorial-column">
            {/* Live Student Status Pill */}
            <div className="hero-status-pill">
              <span className="hero-status-dot" aria-hidden="true" />
              <span className="hero-status-text">AI &amp; ML ENGINEERING STUDENT</span>
            </div>

            {/* Editorial Name Headline */}
            <div className="hero-name-block">
              <h1 className="hero-editorial-title">
                <span className="hero-title-line">MUHAMMED AMAN</span>
                <span className="hero-title-line hero-title-accent">SHAMINAS</span>
              </h1>
            </div>

            {/* Disciplines & Roles Subtitle */}
            <div className="hero-role-bar" aria-label="Specialization and Role">
              <span className="hero-role-title">AI &amp; MACHINE LEARNING</span>
              <span className="hero-role-slash" aria-hidden="true">/</span>
              <span className="hero-role-title">STUDENT &amp; DEVELOPER</span>
            </div>

            {/* Introduction Copy */}
            <p className="hero-intro-text">
              {personalInfo.heroIntroduction}
            </p>

            {/* Refined Call to Action Buttons */}
            <div className="hero-actions-row">
              <a href="#work" className="btn-work-explore">
                <span>Explore My Work</span>
                <ArrowDownRight size={17} className="btn-icon-shift" aria-hidden="true" />
              </a>

              <button
                type="button"
                className="btn-resume-download"
                onClick={onOpenResume}
                aria-label="Download resume"
              >
                <FileText size={16} aria-hidden="true" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Bottom Micro Engineering Stamp */}
            <div className="hero-col-footer">
              <span className="micro-stamp-dot" aria-hidden="true" />
              <span className="micro-stamp-text">
                SRINIVAS INSTITUTE OF TECHNOLOGY · READY FOR INTERNSHIPS &amp; PROJECTS
              </span>
            </div>
          </div>

          {/* Right Column: Engineering Workstation & System Interface */}
          <div className="hero-workstation-column">
            <div className="workstation-frame">
              {/* Corner Crosshairs for Engineering Aesthetic */}
              <div className="corner-crosshair top-left" aria-hidden="true">+</div>
              <div className="corner-crosshair top-right" aria-hidden="true">+</div>
              <div className="corner-crosshair bottom-left" aria-hidden="true">+</div>
              <div className="corner-crosshair bottom-right" aria-hidden="true">+</div>

              {/* Workstation Header */}
              <div className="workstation-header">
                <div className="workstation-header-left">
                  <div className="workstation-dot-group" aria-hidden="true">
                    <span className="dot dot-1" />
                    <span className="dot dot-2" />
                    <span className="dot dot-3" />
                  </div>
                  <span className="workstation-id">AMAN_SYS // WORKSTATION</span>
                </div>
                <div className="workstation-header-right">
                  <span className="workstation-status-pill">
                    <Activity size={12} className="status-pulse-icon" aria-hidden="true" />
                    <span>ONLINE</span>
                  </span>
                </div>
              </div>

              {/* 4 Interactive Domain Selector Tabs */}
              <div className="workstation-domain-nav" role="tablist" aria-label="Core Engineering Domains">
                {workstationDomains.map((domain, index) => {
                  const isSelected = activeDomainIndex === index;
                  return (
                    <button
                      key={domain.id}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      id={`tab-${domain.id}`}
                      aria-controls={`panel-${domain.id}`}
                      className={`domain-tab-btn ${isSelected ? 'active' : ''}`}
                      onClick={() => setActiveDomainIndex(index)}
                    >
                      <span className="domain-tab-idx">0{index + 1}</span>
                      <span className="domain-tab-label">{domain.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Telemetry & Diagnostic Display Panel */}
              <div
                id={`panel-${activeDomain.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${activeDomain.id}`}
                className="workstation-panel"
              >
                {/* Active Domain Title & Headline */}
                <div className="panel-domain-header">
                  <div className="panel-icon-wrap" aria-hidden="true">
                    <ActiveIcon size={18} />
                  </div>
                  <div>
                    <h3 className="panel-domain-title">{activeDomain.title}</h3>
                    <div className="panel-domain-sub">{activeDomain.headline}</div>
                  </div>
                </div>

                {/* Diagnostic Description */}
                <p className="panel-diagnostic-text">
                  {activeDomain.diagnostic}
                </p>

                {/* Real Technologies Badges */}
                <div className="panel-tech-row" aria-label="Active domain technologies">
                  {activeDomain.tech.map((item, idx) => (
                    <span key={idx} className="workstation-tech-tag">
                      {item}
                    </span>
                  ))}
                </div>

                {/* Subtle Animated Signal Monitor Waveform */}
                <div className="panel-signal-monitor" aria-hidden="true">
                  <div className="signal-label-bar">
                    <span className="signal-label">// PIPELINE SIGNAL TELEMETRY</span>
                    <span className="signal-freq">INSPECTION: VERIFIED</span>
                  </div>
                  <div className="signal-wave-container">
                    <svg
                      className="signal-svg"
                      viewBox="0 0 400 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 16 Q 40 4, 80 16 T 160 16 T 240 8 T 320 22 T 400 16"
                        stroke="rgba(0, 216, 246, 0.4)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        className="signal-path-bg"
                      />
                      <path
                        d="M0 16 Q 40 4, 80 16 T 160 16 T 240 8 T 320 22 T 400 16"
                        stroke="var(--accent)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        className="signal-path-live"
                      />
                    </svg>
                    <div className="signal-scanline" />
                  </div>
                </div>

                {/* Workstation Footer Stats */}
                <div className="workstation-footer-meta">
                  <div className="meta-stat">
                    <span className="meta-stat-key">SYS_MODE</span>
                    <span className="meta-stat-val">PRACTICAL_ENG</span>
                  </div>
                  <div className="meta-stat">
                    <span className="meta-stat-key">SPECIALIZATION</span>
                    <span className="meta-stat-val text-accent">AI &amp; ML</span>
                  </div>
                  <div className="meta-stat">
                    <span className="meta-stat-key">INTEGRITY</span>
                    <span className="meta-stat-val text-green">READY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Hero Scroll Indicator */}
        <div className="hero-scroll-indicator-wrap">
          <button
            type="button"
            className="hero-scroll-indicator"
            onClick={scrollToWork}
            aria-label="Scroll to selected work section"
          >
            <span className="scroll-indicator-text">SCROLL TO EXPLORE</span>
            <div className="scroll-indicator-track">
              <span className="scroll-indicator-pip" aria-hidden="true" />
            </div>
            <ArrowDown size={14} className="scroll-indicator-arrow" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
