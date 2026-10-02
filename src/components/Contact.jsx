import React, { useState } from 'react';
import { Mail, Github, Linkedin, ArrowUpRight, Copy, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import '../styles/contact.css';

export default function Contact({ onSelectChannel }) {
  const { contact } = personalInfo;
  const [copiedChannel, setCopiedChannel] = useState(null);

  const handleCopy = (text, type) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedChannel(type);
      setTimeout(() => setCopiedChannel(null), 2000);
    }
  };

  const channels = [
    {
      id: 'email',
      icon: Mail,
      label: 'Email Dispatch',
      value: contact.emailPlaceholder,
      note: 'Direct Inquiries'
    },
    {
      id: 'github',
      icon: Github,
      label: 'GitHub Profile',
      value: contact.githubPlaceholder,
      note: 'Code Repositories'
    },
    {
      id: 'linkedin',
      icon: Linkedin,
      label: 'LinkedIn Network',
      value: contact.linkedinPlaceholder,
      note: 'Professional Network'
    }
  ];

  return (
    <section id="contact" className="section" aria-label="Contact and Communication Channels">
      <div className="container">
        <div className="contact-box">
          <div className="contact-content">
            <div className="section-label">05 / Communication</div>
            <h2 className="contact-headline">{contact.headline}</h2>
            <p className="contact-subtext">{contact.subtext}</p>

            <div className="contact-links-grid">
              {channels.map((ch) => {
                const Icon = ch.icon;
                const isCopied = copiedChannel === ch.id;

                return (
                  <div
                    key={ch.id}
                    className="contact-channel-card"
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      handleCopy(ch.value, ch.id);
                      onSelectChannel(ch.label);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleCopy(ch.value, ch.id);
                        onSelectChannel(ch.label);
                      }
                    }}
                    aria-label={`Copy placeholder for ${ch.label}`}
                  >
                    <div className="contact-channel-left">
                      <div className="contact-channel-icon" aria-hidden="true">
                        <Icon size={18} />
                      </div>
                      <div className="contact-channel-info">
                        <span className="contact-channel-label">{ch.label}</span>
                        <span className="contact-channel-value">{ch.value}</span>
                      </div>
                    </div>

                    <div className="contact-channel-action">
                      {isCopied ? (
                        <Check size={16} color="#10b981" aria-label="Copied" />
                      ) : (
                        <Copy size={16} aria-label="Click to copy placeholder" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="contact-notice">
              <span>// Note: Contact channels are initialized as placeholders ready to be linked with your official credentials.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
