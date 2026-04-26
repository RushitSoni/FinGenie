// @ts-nocheck
import React from 'react';
import { Lightbulb, CheckCircle2 } from 'lucide-react';

export default function Recommendations({ recommendations }) {
  if (!recommendations || recommendations.length === 0) return null;

  return (
    <div className="fade-in slide-up mb-xl">
      <div className="section-heading">
        <Lightbulb className="text-secondary" size={20} />
        <h2 className="section-heading__label">Actionable Recommendations</h2>
      </div>

      <div className="card-light flex-column gap-6">
        {recommendations.map((rec, idx) => (
          <div
            key={idx}
            className="hover-lift d-flex gap-4 items-start"
            style={{ 
              animationDelay: `${idx * 0.1}s`, 
              padding: '20px', 
              borderRadius: 'var(--radius-md)', 
              background: 'var(--bg-blue-light)',
              border: '1px solid rgba(37, 99, 235, 0.05)'
            }}
          >
            <div className="recommendation-index d-flex items-center justify-center" style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--bg-surface)', border: '1px solid var(--border-light)', flexShrink: 0 }}>
               <span style={{ fontSize: '12px', fontWeight: 900, color: 'var(--accent-blue)' }}>{idx + 1}</span>
            </div>
            
            <div className="text-primary" style={{ fontSize: '15px', lineHeight: 1.7, fontWeight: 500 }}>
              {rec}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
