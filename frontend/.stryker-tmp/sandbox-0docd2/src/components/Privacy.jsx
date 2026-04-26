// @ts-nocheck
import React from 'react';
import { Lock, Eye, Trash2 } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="fade-in slide-up px-6 md:px-12 py-16" style={{maxWidth: '1000px', margin: '0 auto'}}>
      <div className="sub-label">Data Sovereignty</div>
      <h1 className="hero-title mb-md">Privacy<br/><span className="text-accent">Policy Protocol.</span></h1>
      
      <div className="card-light" style={{padding: '40px', borderRadius: 'var(--radius-xl)'}}>
        <div className="d-flex flex-column gap-5">
           <div className="d-flex gap-4">
              <div style={{ background: 'var(--bg-blue-light)', padding: '12px', borderRadius: '12px', height: 'fit-content' }}>
                <Lock className="text-accent" size={24} />
              </div>
              <div>
                 <h2 className="text-primary font-bold mb-xs" style={{fontSize: '20px'}}>Encryption Standard</h2>
                 <p className="text-secondary" style={{fontSize: '15px', lineHeight: 1.7}}>
                    All data uploaded to FinGenie is encrypted in transit via TLS 1.3 and processed in non-persistent memory stacks.
                 </p>
              </div>
           </div>

           <div className="d-flex gap-4">
              <div style={{ background: 'rgba(5, 150, 105, 0.05)', padding: '12px', borderRadius: '12px', height: 'fit-content' }}>
                <Trash2 className="text-emerald" size={24} style={{ color: 'var(--accent-emerald)' }} />
              </div>
              <div>
                 <h2 className="text-primary font-bold mb-xs" style={{fontSize: '20px'}}>Zero Retention</h2>
                 <p className="text-secondary" style={{fontSize: '15px', lineHeight: 1.7}}>
                    FinGenie does not maintain a database of user-uploaded files. Once the analysis session is terminated, all trace data is purged.
                 </p>
              </div>
           </div>

           <div className="d-flex gap-4">
              <div style={{ background: 'rgba(235, 29, 72, 0.05)', padding: '12px', borderRadius: '12px', height: 'fit-content' }}>
                <Eye className="text-rose" size={24} style={{ color: 'var(--accent-rose)' }} />
              </div>
              <div>
                 <h2 className="text-primary font-bold mb-xs" style={{fontSize: '20px'}}>No Tracking</h2>
                 <p className="text-secondary" style={{fontSize: '15px', lineHeight: 1.7}}>
                    We do not use tracking cookies or third-party analytics scripts that profile user behavior for advertising purposes.
                 </p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
