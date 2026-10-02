import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import '../styles/notFound.css';

export default function NotFound() {
  return (
    <div className="not-found-page page-fade-enter">
      <div className="container">
        <div className="not-found-card">
          <div className="not-found-icon-wrap" aria-hidden="true">
            <AlertTriangle size={32} />
          </div>
          <span className="not-found-code">ERROR // 404</span>
          <h1 className="not-found-title">SIGNAL NOT FOUND</h1>
          <p className="not-found-desc">
            The requested trajectory does not map to any active node or case study in the AMAN.SYS workspace.
          </p>
          <div className="not-found-action">
            <Link to="/" className="btn-primary">
              <ArrowLeft size={16} aria-hidden="true" />
              <span>RETURN TO WORKSPACE</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
