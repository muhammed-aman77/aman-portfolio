import React, { useEffect, useRef } from 'react';
import { X, FileText, CheckCircle2, Download, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      closeBtnRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="resume-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={onClose}
    >
      <div className="resume-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="resume-modal-header">
          <div className="resume-modal-title-block">
            <span className="resume-modal-tag">// AMAN.SYS CURRICULUM VITAE</span>
            <h3 id="resume-modal-title" className="resume-modal-title">
              Resume Document Overview
            </h3>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            className="resume-modal-close"
            onClick={onClose}
            aria-label="Close resume overlay"
          >
            <X size={18} />
          </button>
        </div>

        <div className="resume-modal-body">
          <div className="resume-status-badge">
            <CheckCircle2 size={16} className="text-accent" aria-hidden="true" />
            <span>Official Academic &amp; Engineering Profile</span>
          </div>

          <div className="resume-meta-list">
            <div className="resume-meta-item">
              <span className="meta-key">Candidate</span>
              <span className="meta-val">{personalInfo.name}</span>
            </div>
            <div className="resume-meta-item">
              <span className="meta-key">Degree</span>
              <span className="meta-val">B.E. in Artificial Intelligence &amp; Machine Learning</span>
            </div>
            <div className="resume-meta-item">
              <span className="meta-key">Standing</span>
              <span className="meta-val">3rd-Year Undergraduate (Srinivas Institute of Technology)</span>
            </div>
            <div className="resume-meta-item">
              <span className="meta-key">Focus Areas</span>
              <span className="meta-val">AI/ML, Computer Vision, Embedded IoT, REST Backends</span>
            </div>
          </div>

          <div className="resume-notice-box">
            <span className="notice-label">// PDF Deployment Ready</span>
            <p className="notice-text">
              The portfolio architecture is configured to serve your final official PDF directly from <code>/public/resume.pdf</code>.
            </p>
          </div>
        </div>

        <div className="resume-modal-footer">
          <a
            href={`mailto:${personalInfo.contact.email}?subject=Resume%20Inquiry%20-%20Muhammed%20Aman%20Shaminas`}
            className="btn-secondary resume-mail-btn"
          >
            <Mail size={15} aria-hidden="true" />
            <span>Request via Email</span>
          </a>

          <a
            href="/resume.pdf"
            download="Muhammed_Aman_Shaminas_Resume.pdf"
            className="btn-primary resume-dl-btn"
            onClick={(e) => {
              // Gracefully handle if file is not yet deployed
              fetch('/resume.pdf', { method: 'HEAD' }).then((res) => {
                if (!res.ok) {
                  alert('Resume file is ready for upload in /public/resume.pdf. You can also reach out directly via email!');
                }
              }).catch(() => {});
            }}
          >
            <Download size={15} aria-hidden="true" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      <style>{`
        .resume-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(4, 5, 8, 0.88);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2500;
          padding: 1.25rem;
          animation: resumeFadeIn 0.2s ease-out;
        }

        @keyframes resumeFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .resume-modal-card {
          background-color: var(--bg-surface);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-lg);
          max-width: 520px;
          width: 100%;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.6), 0 0 24px var(--accent-glow);
          overflow: hidden;
          animation: resumeSlide 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes resumeSlide {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .resume-modal-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 1.5rem 1.75rem 1rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        .resume-modal-tag {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          color: var(--accent);
          letter-spacing: 0.08em;
          display: block;
          margin-bottom: 0.25rem;
        }

        .resume-modal-title {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .resume-modal-close {
          color: var(--text-secondary);
          padding: 0.4rem;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }

        .resume-modal-close:hover {
          color: var(--text-primary);
          background-color: var(--bg-surface-hover);
        }

        .resume-modal-body {
          padding: 1.5rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .resume-status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-secondary);
          background-color: var(--bg-secondary);
          padding: 0.4rem 0.75rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-subtle);
        }

        .resume-meta-list {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 1rem 1.25rem;
        }

        .resume-meta-item {
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 0.75rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
        }

        .resume-meta-item .meta-key {
          color: var(--text-tertiary);
          text-transform: uppercase;
        }

        .resume-meta-item .meta-val {
          color: var(--text-primary);
        }

        .resume-notice-box {
          background-color: rgba(0, 229, 255, 0.04);
          border: 1px dashed var(--accent-border);
          border-radius: var(--radius-sm);
          padding: 0.85rem 1rem;
        }

        .notice-label {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          color: var(--accent);
          display: block;
          margin-bottom: 0.2rem;
        }

        .notice-text {
          font-size: 0.8125rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .notice-text code {
          color: var(--text-primary);
          background-color: var(--bg-surface);
          padding: 0.1rem 0.35rem;
          border-radius: 3px;
        }

        .resume-modal-footer {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.75rem;
          padding: 1.25rem 1.75rem 1.5rem;
          border-top: 1px solid var(--border-subtle);
        }

        .resume-mail-btn,
        .resume-dl-btn {
          font-size: 0.8125rem;
          padding: 0.65rem 1.25rem;
        }
      `}</style>
    </div>
  );
}
