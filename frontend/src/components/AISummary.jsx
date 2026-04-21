import React from 'react';
import { Sparkles } from 'lucide-react';

export default function AISummary({ summary }) {
  if (!summary) return null;

  return (
    <div className="card-light fade-in hover-lift mb-lg">
      <div className="d-flex justify-between items-center mb-md">
        <div className="section-heading mb-0">
          <Sparkles className="text-secondary" size={18} />
          <h2 className="section-heading__label">AI Narrative Synthesis</h2>
        </div>
        <span className="hero-badge">Deep Logic v4.2</span>
      </div>
      
      <div className="summary-content" style={{ padding: 'var(--space-md)', background: 'var(--bg-blue-light)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--accent-blue)' }}>
        {summary.split('\n').filter(p => p.trim()).map((paragraph, idx) => (
          <p key={idx} className="text-primary" style={{ fontSize: '18px', lineHeight: 1.8, fontStyle: 'italic', fontWeight: 500, marginBottom: idx === summary.split('\n').filter(p => p.trim()).length - 1 ? 0 : '16px' }}>
            "{paragraph}"
          </p>
        ))}
      </div>
    </div>
  );
}
