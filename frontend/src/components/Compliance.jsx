import React from 'react';
import { Shield, Lock, Cloud, CheckCircle, FileText, Server, Trash } from 'lucide-react';

export default function Compliance() {
  return (
    <div className="fade-in slide-up px-6 md:px-12 py-16" style={{maxWidth: '1200px', margin: '0 auto'}}>
      <div className="sub-label">Institutional Trust</div>
      <h1 className="hero-title mb-md">Compliance &<br/><span className="text-muted">Security Standards.</span></h1>
      
      <div className="card-light" style={{padding: '40px', borderRadius: 'var(--radius-xl)'}}>
        <div className="grid-cols-12" style={{ gap: 'var(--space-xl)' }}>
          <div className="col-span-12 col-span-lg-4">
            <div className="section-heading__label mb-md">Trust Matrix</div>
            <div className="d-flex flex-column gap-4">
              <div className="card-dark" style={{ padding: '32px', textAlign: 'center' }}>
                 <Shield className="text-accent mb-sm mx-auto" size={40} />
                 <div className="font-bold" style={{fontSize: '14px', letterSpacing: '0.1em'}}>SOC2 TYPE II</div>
                 <div style={{fontSize: '10px', opacity: 0.5, marginTop: '4px'}}>(MOCK CERTIFICATION)</div>
              </div>
              <div className="card-light" style={{padding: '32px', textAlign: 'center', border: '1px solid var(--accent-emerald)', background: 'rgba(5, 150, 105, 0.02)'}}>
                 <Lock className="text-emerald mb-sm mx-auto" size={40} style={{ color: 'var(--accent-emerald)' }} />
                 <div className="font-bold" style={{fontSize: '14px', color: 'var(--accent-emerald)' }}>AES-256 E2EE</div>
              </div>
              <div className="card-light" style={{padding: '32px', textAlign: 'center', border: '1px solid var(--accent-blue)', background: 'var(--bg-blue-light)'}}>
                 <Cloud className="text-accent mb-sm mx-auto" size={40} />
                 <div className="font-bold" style={{fontSize: '14px' }}>ISO 27001 ALIGN</div>
              </div>
            </div>
          </div>

          <div className="col-span-12 col-span-lg-8">
            <h2 className="text-primary font-bold mb-lg" style={{fontSize: '32px'}}>Security Architecture</h2>
            <div className="d-flex flex-column gap-5">
              <div className="d-flex gap-4">
                <Server className="text-accent mt-1" size={24} />
                <div>
                  <h3 className="section-heading__label mb-xs" style={{color: 'var(--accent-blue)'}}>Cloud Layer</h3>
                  <p style={{fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7}}>
                    Our infrastructure is hosted on isolated, encrypted volumes with zero-persistence hardware. All data transmission occurs over TLS 1.3 with Perfect Forward Secrecy (PFS).
                  </p>
                </div>
              </div>
              <div className="d-flex gap-4">
                <Lock className="text-accent mt-1" size={24} />
                <div>
                  <h3 className="section-heading__label mb-xs" style={{color: 'var(--accent-blue)'}}>Encryption at Rest (Mock)</h3>
                  <p style={{fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7}}>
                    While we don't store your files longer than the session, all in-memory processing utilizes hardware-level AES-256 encryption within sovereign compute nodes.
                  </p>
                </div>
              </div>
              <div className="d-flex gap-4">
                <Trash className="text-accent mt-1" size={24} />
                <div>
                  <h3 className="section-heading__label mb-xs" style={{color: 'var(--accent-blue)'}}>Compliance Purge</h3>
                  <p style={{fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7}}>
                    Upon completion of an analysis report, our system initiates a multi-pass wipe of all scratch volumes used during the parsing phase, meeting NIST SP 800-88 guidelines for media sanitization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

