import React from 'react';
import { Download, ExternalLink, FileText } from 'lucide-react';
import '../styles/resume.css';

const resumeUrl = '/resume.pdf';

export default function Resume() {
  return (
    <div className="resume-page page-fade-enter">
      <div className="container resume-page-inner">
        <header className="resume-page-header">
          <div>
            <span className="page-category-label">DOCUMENT / PDF</span>
            <h1 className="page-title">Resume</h1>
            <p className="page-description">Muhammed Aman Shaminas · B.E. Artificial Intelligence &amp; Machine Learning</p>
          </div>
          <div className="resume-page-actions">
            <a href={resumeUrl} target="_blank" rel="noreferrer" className="resume-open-link">
              <ExternalLink size={16} aria-hidden="true" /> Open in new tab
            </a>
            <a href={resumeUrl} download="Muhammed_Aman_Shaminas_Resume.pdf" className="resume-download-link">
              <Download size={16} aria-hidden="true" /> Download PDF
            </a>
          </div>
        </header>

        <div className="resume-document-frame">
          <iframe src={`${resumeUrl}#view=FitH`} title="Muhammed Aman Shaminas resume">
            <p>
              This browser cannot display the PDF inline. <a href={resumeUrl} target="_blank" rel="noreferrer">Open the resume PDF</a> or download it using the button above.
            </p>
          </iframe>
        </div>

        <div className="resume-mobile-fallback">
          <FileText size={16} aria-hidden="true" />
          <span>If the preview is unavailable on your device, open the PDF in a new tab or download it.</span>
          <a href={resumeUrl} target="_blank" rel="noreferrer">Open PDF <ExternalLink size={14} aria-hidden="true" /></a>
        </div>
      </div>
    </div>
  );
}