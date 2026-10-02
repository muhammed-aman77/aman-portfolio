import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, ArrowUpRight, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import '../styles/contact.css';

export default function Contact() {
  const [copiedId, setCopiedId] = useState(null);
  const [copyMessage, setCopyMessage] = useState('');

  const handleCopy = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setCopyMessage('Copied to clipboard.');
      window.setTimeout(() => {
        setCopiedId(null);
        setCopyMessage('');
      }, 2200);
    } catch {
      setCopiedId(null);
      setCopyMessage('Copy is unavailable here. Select the address or profile text to copy it.');
    }
  };

  const channels = [
    {
      id: 'email',
      icon: Mail,
      label: 'Email Inquiries',
      value: personalInfo.contact.email,
      href: `mailto:${personalInfo.contact.email}?subject=Engineering%20Inquiry%20-%20Muhammed%20Aman%20Shaminas`,
      actionText: 'Direct Mailto Link'
    },
    {
      id: 'github',
      icon: Github,
      label: 'GitHub Repositories',
      value: 'github.com/muhammed-aman77',
      href: personalInfo.contact.github,
      actionText: 'Open Profile'
    },
    {
      id: 'linkedin',
      icon: Linkedin,
      label: 'LinkedIn Network',
      value: 'linkedin.com/in/muhammed-aman-809973383',
      href: personalInfo.contact.linkedin,
      actionText: 'Connect on LinkedIn'
    }
  ];

  return (
    <div className="contact-page page-fade-enter">
      {/* Header */}
      <section className="contact-header-section">
        <div className="container">
          <span className="page-category-label">04 / DIRECT DISPATCH</span>
          <h1 className="page-title">{personalInfo.contact.headline}</h1>
          <p className="page-description">
            {personalInfo.contact.subtext}
          </p>
        </div>
      </section>

      {/* Main Channels & Dispatch Cards */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-layout-grid">
            {/* Left: Verified Channels */}
            <div className="contact-channels-column">
              <span className="contact-column-tag">// VERIFIED COMMUNICATION CHANNELS</span>

              <div className="contact-cards-stack">
                {channels.map((ch) => {
                  const Icon = ch.icon;
                  const isCopied = copiedId === ch.id;

                  return (
                    <div key={ch.id} className="contact-channel-card">
                      <div className="channel-card-left">
                        <div className="channel-icon-wrap" aria-hidden="true">
                          <Icon size={18} />
                        </div>
                        <div className="channel-text-wrap">
                          <span className="channel-label">{ch.label}</span>
                          <span className="channel-value">{ch.value}</span>
                        </div>
                      </div>

                      <div className="channel-actions-right">
                        <button
                          type="button"
                          className="channel-action-btn"
                          onClick={() => handleCopy(ch.value, ch.id)}
                          aria-label={`Copy ${ch.label} to clipboard`}
                        >
                          {isCopied ? (
                            <>
                              <Check size={14} className="text-green" />
                              <span className="text-green">COPIED</span>
                            </>
                          ) : (
                            <>
                              <Copy size={14} />
                              <span>COPY</span>
                            </>
                          )}
                        </button>

                        <a
                          href={ch.href}
                          target={ch.id !== 'email' ? '_blank' : undefined}
                          rel={ch.id !== 'email' ? 'noopener noreferrer' : undefined}
                          className="channel-action-btn primary-action"
                          aria-label={`Open ${ch.label}`}
                        >
                          <span>{ch.actionText}</span>
                          <ArrowUpRight size={13} aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="contact-copy-status" role="status" aria-live="polite">{copyMessage}</p>

              {/* Direct Mail Prompt Card */}
              <div className="contact-direct-card">
                <h3 className="direct-card-title">Send a Direct Message via Your Email Client</h3>
                <p className="direct-card-desc">
                  Clicking below opens your default system mail client pre-addressed to <code>{personalInfo.contact.email}</code>.
                </p>
                <a
                  href={`mailto:${personalInfo.contact.email}?subject=Engineering%20Collaboration%20-%20Aman`}
                  className="btn-primary direct-mail-btn"
                >
                  <Send size={15} aria-hidden="true" />
                  <span>DISPATCH EMAIL NOW</span>
                </a>
              </div>
            </div>

            {/* Academic profile */}
            <aside className="contact-coord-aside">
              <div className="coord-box">
                <span className="coord-box-tag">// ACADEMIC PROFILE</span>

                <div className="coord-location-row">
                  <Mail size={18} className="text-accent" aria-hidden="true" />
                  <div>
                    <h4 className="coord-city">{personalInfo.name}</h4>
                    <span className="coord-geo">{personalInfo.discipline}</span>
                  </div>
                </div>

                <div className="coord-meta-list">
                  <div className="coord-meta-item">
                    <span className="cm-k">PROGRAMME</span>
                    <span className="cm-v">{personalInfo.currentRole}</span>
                  </div>
                  <div className="coord-meta-item">
                    <span className="cm-k">INSTITUTION</span>
                    <span className="cm-v">{personalInfo.institution}</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
