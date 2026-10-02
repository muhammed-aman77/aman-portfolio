import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  BrainCircuit,
  Bot,
  Code2,
  Cpu,
  Eye,
  Orbit
} from 'lucide-react';
import { personalInfo, projects } from '../data/portfolioData';
import '../styles/universeHome.css';

const domains = [
  {
    id: 'ai',
    label: 'AI / ML',
    icon: BrainCircuit,
    note: 'An academic eye-image project using MobileNetV2.',
    technologies: ['MobileNetV2', 'Python'],
    projectIds: ['blood-sugar-prediction'],
    position: [18, 27]
  },
  {
    id: 'vision',
    label: 'Computer Vision',
    icon: Eye,
    note: 'Image processing with OpenCV and CLAHE.',
    technologies: ['OpenCV', 'CLAHE'],
    projectIds: ['blood-sugar-prediction'],
    position: [50, 12]
  },
  {
    id: 'software',
    label: 'Software',
    icon: Code2,
    note: 'Python appears in the eye-image project and DailyDine.',
    technologies: ['Python', 'Flask', 'Django REST Framework'],
    projectIds: ['blood-sugar-prediction', 'dailydine'],
    position: [82, 29]
  },
  {
    id: 'embedded',
    label: 'Embedded',
    icon: Cpu,
    note: 'Sensor readings and threshold-based classification in a machine-health prototype.',
    technologies: ['ESP32', 'ADXL345', 'DS18B20', 'MAX9814'],
    projectIds: ['machine-health-monitoring'],
    position: [74, 78]
  },
  {
    id: 'robotics',
    label: 'Robotics',
    icon: Bot,
    note: 'A mobile prototype concept for detecting elevated RF activity by row or zone.',
    technologies: ['STM32F103C8T6', 'AD8318', 'TCRT5000'],
    projectIds: ['rf-activity-robot'],
    position: [25, 79]
  }
];

export default function UniverseHome() {
  const [activeDomainId, setActiveDomainId] = useState('vision');
  const activeDomain = domains.find((domain) => domain.id === activeDomainId);
  const activeProjects = projects.filter((project) => activeDomain.projectIds.includes(project.id));
  const ActiveIcon = activeDomain.icon;

  return (
    <div className="universe-home page-fade-enter">
      <section className="universe-opening" aria-labelledby="universe-title">
        <div className="container universe-opening-inner">
          <div className="universe-topline">
            <span>PERSONAL DIGITAL UNIVERSE</span>
            <span>AI &amp; MACHINE LEARNING / STUDENT</span>
          </div>

          <div className="universe-hero-grid">
            <div className="universe-intro">
              <p className="universe-kicker"><span /> A FIELD GUIDE TO WHAT I BUILD</p>
              <h1 id="universe-title">AMAN<span className="universe-title-mark">/</span><br />UNIVERSE</h1>
              <p className="universe-lede">
                {personalInfo.tagline}
              </p>
              <p className="universe-student-line">
                {personalInfo.name}<br />
                {personalInfo.currentRole} · {personalInfo.institution}
              </p>
              <div className="universe-actions">
                <Link to="/work" className="universe-primary-link">
                  Explore the work <ArrowDownRight size={17} aria-hidden="true" />
                </Link>
                <Link to="/resume" className="universe-text-link">Resume <ArrowRight size={15} aria-hidden="true" /></Link>
              </div>
            </div>

            <section className="system-map" aria-label="Interactive system map">
              <div className="map-heading">
                <span><Orbit size={15} aria-hidden="true" /> SYSTEM MAP</span>
                <span>SELECT A DOMAIN</span>
              </div>
              <div className="map-field">
                <svg className="map-orbits" viewBox="0 0 600 440" aria-hidden="true">
                  <ellipse cx="300" cy="220" rx="246" ry="156" />
                  <ellipse cx="300" cy="220" rx="170" ry="108" transform="rotate(-24 300 220)" />
                  <path d="M108 119 300 220 492 128M492 128 444 343 150 348 108 119" />
                  <path d="M300 220 300 53M300 220 492 128M300 220 444 343M300 220 150 348M300 220 108 119" className="map-spokes" />
                </svg>
                <div className="map-center" aria-hidden="true">
                  <span>AMAN</span>
                  <i />
                  <small>CORE</small>
                </div>
                {domains.map((domain, index) => {
                  const Icon = domain.icon;
                  const isActive = activeDomainId === domain.id;
                  return (
                    <button
                      key={domain.id}
                      type="button"
                      className={`map-node ${isActive ? 'is-active' : ''}`}
                      style={{ '--node-x': `${domain.position[0]}%`, '--node-y': `${domain.position[1]}%` }}
                      aria-pressed={isActive}
                      onClick={() => setActiveDomainId(domain.id)}
                    >
                      <span className="map-node-orb"><Icon size={17} aria-hidden="true" /></span>
                      <span className="map-node-label"><small>0{index + 1}</small>{domain.label}</span>
                    </button>
                  );
                })}
              </div>
              <div className="map-readout" aria-live="polite">
                <div className="readout-domain">
                  <ActiveIcon size={18} aria-hidden="true" />
                  <div><span>DOMAIN / {activeDomain.id.toUpperCase()}</span><h2>{activeDomain.label}</h2></div>
                </div>
                <p>{activeDomain.note}</p>
                <div className="readout-tools" aria-label="Confirmed technologies">
                  {activeDomain.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
                <div className="readout-projects">
                  <span>CONNECTED WORK</span>
                  {activeProjects.map((project) => (
                    <Link key={project.id} to={`/work/${project.id}`}>
                      {project.number} / {project.shortTitle}<ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <a className="universe-scroll-cue" href="#work-index">
            <span>SCROLL TO EXPLORE</span><ArrowDown size={14} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="work-index" className="universe-work-index" aria-labelledby="work-index-title">
        <div className="container">
          <div className="work-index-heading">
            <div>
              <span className="universe-section-label">01 / PROJECT COORDINATES</span>
              <h2 id="work-index-title">Five confirmed projects.<br />Each a different system.</h2>
            </div>
            <Link to="/work" className="universe-text-link">Open work index <ArrowRight size={15} aria-hidden="true" /></Link>
          </div>

          <div className="universe-project-list">
            {projects.map((project) => (
              <article className="universe-project-row" key={project.id}>
                <span className="universe-project-number">{project.number}</span>
                <div className="universe-project-copy">
                  <span>{project.domainTag} <i /> {project.status}</span>
                  <h3><Link to={`/work/${project.id}`}>{project.title}</Link></h3>
                  <p>{project.summary}</p>
                </div>
                <Link className="universe-project-open" to={`/work/${project.id}`} aria-label={`Open ${project.title}`}>
                  <ArrowDownRight size={18} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>

          <div className="universe-note-line">
            <span>PROJECT COUNT</span><strong>05</strong>
            <span>ACADEMIC &amp; PROTOTYPE WORK</span>
          </div>
        </div>
      </section>
    </div>
  );
}