import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip
} from 'chart.js';
import { ShieldAlert, AlertTriangle, Info, AlertCircle, Search, FileText, Zap, LayoutPanelLeft } from 'lucide-react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const SEVERITY_CONFIG = {
  critical: { color: 'var(--accent-rose)', icon: ShieldAlert, label: 'CRITICAL', bg: 'rgba(225,29,72,0.05)' },
  high:     { color: '#f97316', icon: AlertTriangle, label: 'HIGH', bg: 'rgba(249,115,22,0.05)' },
  medium:   { color: '#f59e0b', icon: AlertCircle, label: 'MEDIUM', bg: 'rgba(245,158,11,0.05)' },
  low:      { color: 'var(--accent-emerald)', icon: Info, label: 'LOW', bg: 'rgba(5,150,105,0.05)' },
};

export default function RiskAssessment({ result }) {
  if (!result) return null;

  const { risks } = result;
  const safeRisks = risks || [];

  const chartData = {
    labels: safeRisks.map((_, i) => `V${i+1}`),
    datasets: [{
      label: 'Severity Level',
      data: safeRisks.map(r => r.severity === 'critical' ? 4 : r.severity === 'high' ? 3 : r.severity === 'medium' ? 2 : 1),
      backgroundColor: (ctx) => {
        const val = ctx.raw;
        return val === 4 ? 'var(--accent-rose)' : val === 3 ? '#f97316' : val === 2 ? '#f59e0b' : 'var(--accent-emerald)';
      },
      borderRadius: 4,
      barThickness: 16
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: { x: { display: false }, y: { display: false, max: 5 } }
  };

  const mitigations = safeRisks.filter(r => r.mitigation).map(r => ({
    name: r.risk,
    text: r.mitigation
  }));

  return (
    <div className="risk-assessment fade-in slide-up" style={{ paddingBottom: 'var(--space-2xl)' }}>
      <header className="page-header mb-xl">
        <div className="d-flex items-center gap-2 mb-xs">
          <ShieldAlert className="text-secondary" size={16} />
          <span className="page-header__eyebrow">Risk Exposure Index</span>
        </div>
        <h1 className="page-header__title">
          Vulnerability & <span className="page-header__accent">Risk Assessment.</span>
        </h1>
        <p className="hero-subtitle">
          Automated detection of financial anomalies, liquidity threats, and strategic vulnerabilities.
        </p>
        
        <div className="mt-lg">
          <div className="card-light d-flex items-center gap-8" style={{ padding: '24px 32px', width: 'fit-content', background: 'var(--bg-blue-light)', border: 'none' }}>
            <div>
              <div className="sub-label mb-0">Total Vectors</div>
              <div className="metric-big" style={{ fontSize: '40px' }}>{safeRisks.length}</div>
            </div>
            <div style={{ height: '40px', width: '1px', background: 'var(--border-strong)', opacity: 0.2 }} />
            <p className="text-secondary" style={{ fontSize: '13px', fontWeight: 600, maxWidth: '240px', lineHeight: 1.5 }}>
               Institutional-grade vectors cross-referenced against global treasury standards.
            </p>
          </div>
        </div>
      </header>

      <div className="grid-cols-12" style={{ gap: 'var(--space-xl)' }}>
        <div className="col-span-8">
          <div className="card-light" style={{ padding: 0 }}>
            <div className="d-flex justify-between items-center" style={{ padding: '20px', borderBottom: '1px solid var(--border-light)' }}>
               <h3 className="section-heading__label" style={{ fontSize: '16px' }}>Identified Vulnerabilities</h3>
               <span className="hero-badge">REVISION V4.2</span>
            </div>
            
            <div style={{ padding: '16px' }} className="d-flex flex-column gap-3">
              {safeRisks.length > 0 ? (
                safeRisks.map((risk, idx) => {
                  const config = SEVERITY_CONFIG[risk.severity] || SEVERITY_CONFIG.low;
                  const Icon = config.icon;
                  return (
                    <div key={idx} className="hover-lift d-flex items-start gap-4" style={{
                      background: config.bg, 
                      padding: '20px', 
                      borderRadius: 'var(--radius-md)',
                      borderLeft: `4px solid ${config.color}`
                    }}>
                      <div style={{ padding: '8px', background: 'white', borderRadius: '50%', boxShadow: 'var(--shadow-sm)' }}>
                        <Icon size={18} style={{ color: config.color }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div className="d-flex justify-between items-start mb-xs">
                          <div>
                            <span style={{ fontSize: '10px', fontWeight: 800, color: config.color, letterSpacing: '0.05em' }}>{config.label}</span>
                            <h4 className="text-primary font-bold" style={{ fontSize: '16px', margin: 0 }}>{risk.risk}</h4>
                          </div>
                          <div className="metric-big" style={{ fontSize: '18px', color: config.color }}>
                            {risk.severity === 'critical' ? '9.8' : risk.severity === 'high' ? '7.5' : risk.severity === 'medium' ? '4.2' : '1.5'}
                          </div>
                        </div>
                        <p className="text-secondary" style={{ fontSize: '13px', lineHeight: 1.6, margin: 0 }}>{risk.description}</p>
                      </div>
                    </div>
                  )
                })
              ) : (
                <div style={{ padding: '48px', textAlign: 'center' }}>
                   <p className="text-muted">No institutional risks detected in the current dataset.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="col-span-4 d-flex flex-column gap-6">
          <div className="card-dark" style={{ padding: '32px' }}>
            <div className="d-flex items-center gap-2 mb-lg">
              <Zap className="text-accent" size={18} />
              <h3 className="sub-label mb-0" style={{ color: 'white', opacity: 0.8 }}>Mitigation Protocols</h3>
            </div>
            
            <div className="d-flex flex-column gap-6">
              {mitigations.length > 0 ? (
                mitigations.slice(0, 4).map((mit, idx) => (
                  <div key={idx} className="d-flex gap-4">
                    <span style={{ fontSize: '14px', fontWeight: 900, color: 'var(--accent-blue)', opacity: 0.4 }}>0{idx + 1}</span>
                    <div>
                      <div className="text-white font-bold mb-xs" style={{ fontSize: '13px' }}>{mit.name}</div>
                      <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5, margin: 0 }}>{mit.text}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>Standard operational monitoring applies.</p>
              )}
            </div>
          </div>

          <div className="card-light" style={{ padding: '24px' }}>
            <div className="sub-label mb-md">Exposure Distribution</div>
            <div style={{ height: '140px' }}>
               <Bar data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
