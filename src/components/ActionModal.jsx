import React, { useEffect, useRef } from 'react';
import { X, FileText, CheckCircle2, Code2, ExternalLink } from 'lucide-react';

export default function ActionModal({ isOpen, onClose, modalData }) {
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

  if (!isOpen || !modalData) return null;

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div className="modal-title-wrap">
            <span className="modal-tag">// SYSTEM NOTICE</span>
            <h3 id="modal-title" className="modal-title">{modalData.title}</h3>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          <p className="modal-text">{modalData.message}</p>
          {modalData.hint && (
            <div className="modal-hint-box">
              <span className="modal-hint-label">Config Location:</span>
              <code className="modal-hint-code">{modalData.hint}</code>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button
            type="button"
            className="btn-primary modal-action-btn"
            onClick={onClose}
          >
            Acknowledge
          </button>
        </div>
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(4, 5, 8, 0.82);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 1.25rem;
          animation: modalFadeIn 0.2s ease-out;
        }

        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-card {
          background-color: var(--bg-surface);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-lg);
          max-width: 500px;
          width: 100%;
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.5), 0 0 24px var(--accent-glow);
          overflow: hidden;
          animation: modalSlideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .modal-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 1.5rem 1.5rem 1rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        .modal-tag {
          font-family: var(--font-mono);
          font-size: 0.7188rem;
          color: var(--accent);
          letter-spacing: 0.08em;
          margin-bottom: 0.25rem;
          display: block;
        }

        .modal-title {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .modal-close-btn {
          color: var(--text-secondary);
          padding: 0.35rem;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }

        .modal-close-btn:hover {
          color: var(--text-primary);
          background-color: var(--bg-surface-hover);
        }

        .modal-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .modal-text {
          font-size: 0.9375rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .modal-hint-box {
          background-color: var(--bg-secondary);
          border: 1px dashed var(--border-medium);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-sm);
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .modal-hint-label {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          color: var(--text-tertiary);
          text-transform: uppercase;
        }

        .modal-hint-code {
          font-family: var(--font-mono);
          font-size: 0.8125rem;
          color: var(--accent);
        }

        .modal-footer {
          padding: 1rem 1.5rem 1.5rem;
          display: flex;
          justify-content: flex-end;
          border-top: 1px solid var(--border-subtle);
        }

        .modal-action-btn {
          padding: 0.6rem 1.25rem;
          font-size: 0.8125rem;
        }
      `}</style>
    </div>
  );
}
