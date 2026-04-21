import { Shield, Activity, Lock, Trash2, Cpu, BarChart } from 'lucide-react';

export default function About() {
  return (
    <div className="fade-in slide-up px-6 md:px-12 py-16" style={{maxWidth: '1000px', margin: '0 auto'}}>
      <div className="sub-label">The Mission</div>
      <h1 className="hero-title mb-md">Democratizing<br/><span className="text-accent">Institutional Intel.</span></h1>
      
      <div className="card-light" style={{padding: 'var(--space-lg)', borderRadius: 'var(--radius-xl)'}}>
        <div style={{marginBottom: 'var(--space-lg)'}}>
          <h3 className="section-heading__label mb-sm" style={{color: 'var(--accent-blue)'}}>Mathematical Foundation</h3>
          <p style={{color: 'var(--text-secondary)', fontSize: '18px', lineHeight: 1.7, marginBottom: 'var(--space-md)', fontWeight: 500}}>
            FinGenie was built on the premise that traditional GAAP accounting principles could be combined with modern Bayesian inference models to provide the most objective financial outlook possible.
          </p>
          <p style={{color: 'var(--text-secondary)', fontSize: '18px', lineHeight: 1.7, fontWeight: 500}}>
            Our sovereign engine ingests complex datasets and maps proprietary data points into normalized vectors. We apply deep technical analysis—including Ratio Synthesis and Anomaly Detection—to build an actionable narrative.
          </p>
        </div>
        
        <div className="card-dark" style={{padding: '40px', borderRadius: 'var(--radius-lg)'}}>
          <h3 className="section-heading__label mb-md" style={{color: 'rgba(255,255,255,0.4)'}}>Security & Privacy Ethics</h3>
          <div className="d-flex flex-column gap-5">
            <div className="d-flex gap-4">
              <Shield className="text-accent" size={24} />
              <div>
                <strong style={{color: 'white', display: 'block', marginBottom: '4px', fontSize: '16px'}}>Edge Encryption</strong>
                <span style={{color: '#9ca3af', fontSize: '14px'}}>Files are tokenized client-side before processing using AES-256 standards.</span>
              </div>
            </div>
            <div className="d-flex gap-4">
              <Trash2 className="text-accent" size={24} />
              <div>
                <strong style={{color: 'white', display: 'block', marginBottom: '4px', fontSize: '16px'}}>Zero-Knowledge</strong>
                <span style={{color: '#9ca3af', fontSize: '14px'}}>Artifacts are purged continuously after the session ends. No data persistence.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

