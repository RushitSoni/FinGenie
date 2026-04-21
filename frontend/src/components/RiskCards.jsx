import React from 'react';
import { ShieldAlert, AlertTriangle, AlertCircle, Info } from 'lucide-react';

const SEVERITY_CONFIG = {
  critical: { color: 'var(--accent-rose)', bg: 'rgba(225,29,72,0.05)', icon: ShieldAlert, label: 'CRITICAL' },
  high:     { color: 'var(--accent-cyan)', bg: 'rgba(8,145,178,0.05)', icon: AlertTriangle, label: 'HIGH' },
  medium:   { color: '#f59e0b', bg: 'rgba(245,158,11,0.05)', icon: AlertCircle, label: 'MEDIUM' },
  low:      { color: 'var(--accent-emerald)', bg: 'rgba(5,150,105,0.05)', icon: Info, label: 'LOW' },
};

export default function RiskCards({ risks }) {
  if (!risks || risks.length === 0) return null;

  return (
    <div className="fade-in slide-up mb-xl">
      <div className="section-heading">
        <ShieldAlert className="text-secondary" size={20} />
        <h2 className="section-heading__label">Vulnerability Analysis</h2>
      </div>

      <div className="grid-2x2">
        {risks.map((risk, idx) => {
          const config = SEVERITY_CONFIG[risk.severity] || SEVERITY_CONFIG.low;
          const Icon = config.icon;
          
          return (
            <div
              key={idx}
              className="card-light hover-lift"
              style={{
                borderLeft: `4px solid ${config.color}`,
                background: config.bg,
                animationDelay: `${idx * 0.1}s`,
              }}
            >
              <div className="d-flex justify-between items-center mb-sm">
                <div className="d-flex items-center gap-3">
                  <Icon size={20} style={{ color: config.color }} />
                  <h3 className="section-heading__label" style={{ color: 'var(--text-primary)', textTransform: 'none', letterSpacing: 'normal', fontSize: '16px' }}>
                    {risk.risk}
                  </h3>
                </div>
                <span className="hero-badge" style={{ background: config.color, color: 'white', border: 'none' }}>
                  {config.label}
                </span>
              </div>
              <p className="text-secondary" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                {risk.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
