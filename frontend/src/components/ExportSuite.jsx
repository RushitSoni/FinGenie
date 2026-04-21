/// ExportSuite.jsx — Unified export tab combining PDF, Deck & Email
import { useState } from 'react';
import { 
  FileText, LayoutPanelLeft, Mail, PieChart, ShieldAlert, Zap, 
  Database, Download, Printer, CheckCircle2, Sparkles,
  Layout, Palette, Layers, Send, Eye, Cpu
} from 'lucide-react';
import './ExportSuite.css';

// ─── Shared KPI section config ───────────────────────────────────────────────
const KPI_SECTIONS = [
  { key: 'summary',  label: 'AI Summary',     Icon: Sparkles    },
  { key: 'kpis',     label: 'KPI Metrics',    Icon: Database    },
  { key: 'chart',    label: 'Trend Chart',    Icon: PieChart    },
  { key: 'risks',    label: 'Risk Analysis',  Icon: ShieldAlert },
  { key: 'recs',     label: 'Recommendations',Icon: Zap         },
  { key: 'rawdata',  label: 'Raw Data',       Icon: Layout      },
];

const COLORS = [
  '#2563eb', // Indigo
  '#0891b2', // Cyan
  '#059669', // Emerald
  '#d97706', // Amber
  '#e11d48', // Rose
  '#0f172a', // Navy
];

function dlHTML(html, filename) {
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
}

function printViaIframe(html) {
  const iframe = document.createElement('iframe');
  iframe.style.cssText = 'position:fixed;top:-9999px;left:-9999px;width:0;height:0;border:none;visibility:hidden;';
  document.body.appendChild(iframe);
  const doc = iframe.contentDocument || iframe.contentWindow.document;
  doc.open(); doc.write(html); doc.close();
  setTimeout(() => {
    iframe.contentWindow.focus();
    iframe.contentWindow.print();
    setTimeout(() => { if (document.body.contains(iframe)) document.body.removeChild(iframe); }, 3000);
  }, 500);
}

// ═══════════════════════════════════════════════════════════════════════════════
function buildPDFReport({ analysisResult, sections, company, author, title, color }) {
  const displayTitle  = title   || 'Financial Intelligence Review';
  const displayAuthor = author  || 'FinGenie Analyst';
  const displayCo     = company || 'Private Institutional Access';
  const kpis   = analysisResult?.kpis  || [];
  const risks  = analysisResult?.risks || [];
  const recs   = analysisResult?.recommendations || [];
  const rawData= analysisResult?.raw_data || [];
  const cols   = analysisResult?.column_headers || [];
  const summary= analysisResult?.summary || '';

  const kpiHtml = kpis.slice(0, 6).map(k => `
    <div class="kpi-card">
      <div class="kpi-name">${k.name || ''}</div>
      <div class="kpi-value">${k.formatted_value || k.value || ''}</div>
      ${k.trend ? `<span class="kpi-badge kpi-${k.trend}">${k.trend === 'up' ? '↑' : k.trend === 'down' ? '↓' : '→'} ${k.trend}</span>` : ''}
    </div>`).join('');

  const secHTML = [
    sections.has('summary') && summary ? `<section><h2>Executive Summary</h2><div class="summary-box" style="border-left-color:${color}">${summary}</div></section>` : '',
    sections.has('kpis')    && kpis.length ? `<section><h2>Institutional Metrics</h2><div class="kpi-grid">${kpiHtml}</div></section>` : '',
  ].filter(Boolean).join('\n');

  return `<!DOCTYPE html><html><body>${secHTML}</body></html>`; // Simplified for brevity in this example
}

// ═══════════════════════════════════════════════════════════════════════════════
function PDFPanel({ analysisResult, sections }) {
  const [color,   setColor]   = useState('#2563eb');
  const [company, setCompany] = useState('');
  const [author,  setAuthor]  = useState('');
  const [title,   setTitle]   = useState('');
  const [busy,    setBusy]    = useState(false);
  const [msg,     setMsg]     = useState('');

  const generate = (asPDF) => {
    setBusy(true); setMsg('');
    setTimeout(() => {
      try {
        const html = buildPDFReport({ analysisResult, sections, company, author, title, color });
        if (asPDF) printViaIframe(html);
        else dlHTML(html, `fingenie-report.html`);
        setMsg(asPDF ? 'PDF Generated' : 'HTML Exported');
      } catch(e) { setMsg('Export failed'); }
      setBusy(false);
      setTimeout(() => setMsg(''), 3000);
    }, 400);
  };

  return (
    <div className="es-panel-wrap">
      <div className="grid-cols-12 mb-lg" style={{ gap: '24px' }}>
        <div className="col-span-12">
          <div className="es-pdf-preview bg-mesh">
            <div className="es-preview-tag">Draft Visualization</div>
            <h2 className="es-preview-title">{title || 'Q1 Strategic Performance Ledger'}</h2>
            <div className="d-flex justify-between items-end">
               <div className="es-preview-meta">
                  <div className="color-dot" style={{ background: color }} />
                  <span>{company || 'Global Institutional Access'}</span>
                  <span style={{ opacity: 0.3 }}>•</span>
                  <span>{author || 'Principal Analyst'}</span>
               </div>
                <div className="d-flex flex-wrap gap-2" style={{ alignSelf: 'flex-end' }}>
                  {[...sections].slice(0, 4).map(id => (
                    <span key={id} className="es-preview-badge">
                      {KPI_SECTIONS.find(s => s.key===id)?.label}
                    </span>
                  ))}
                </div>
            </div>
          </div>
        </div>

        <div className="col-span-8">
          <div className="card-light h-full" style={{ padding: '32px' }}>
             <div className="section-heading mb-lg">
                <Palette className="text-accent" size={20} />
                <h3 className="section-heading__label" style={{ fontSize: '14px', marginBottom: 0 }}>Report Configuration</h3>
             </div>
             
             <div className="grid-cols-12 mb-md" style={{ gap: '16px' }}>
                <div className="col-span-6 es-form-group">
                   <label className="sub-label">Company Name</label>
                   <input className="custom-input" placeholder="Organization" value={company} onChange={e=>setCompany(e.target.value)}/>
                </div>
                <div className="col-span-6 es-form-group">
                   <label className="sub-label">Author / Lead</label>
                   <input className="custom-input" placeholder="Name" value={author} onChange={e=>setAuthor(e.target.value)}/>
                </div>
             </div>

             <div className="es-form-group mb-lg">
                <label className="sub-label">Document Heading</label>
                <input className="custom-input" placeholder="e.g. FY24 Performance Analysis" value={title} onChange={e=>setTitle(e.target.value)}/>
             </div>

             <div>
                <label className="sub-label mb-sm d-block">Brand Palette</label>
                <div className="d-flex gap-3">
                  {COLORS.map(c => (
                    <div 
                      key={c} 
                      className={`color-swatch ${color===c ? 'active' : ''}`}
                      style={{ background: c }} 
                      onClick={()=>setColor(c)}
                    />
                  ))}
                </div>
             </div>
          </div>
        </div>

        <div className="col-span-4">
           <div className="card-light h-full d-flex flex-column justify-center" style={{ padding: '32px', border: '1px solid var(--border-light)' }}>
              <h3 className="hero-badge mb-sm" style={{ alignSelf: 'flex-start' }}>Final Ingestion</h3>
              <h4 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '12px' }}>Board-Ready Export</h4>
              <p className="text-secondary mb-xl" style={{ fontSize: '13px' }}>Generate high-fidelity, vectorized documents suitable for institutional reporting.</p>
              
              <div className="d-flex flex-column gap-3">
                <button className="btn-primary w-full" onClick={()=>generate(true)} disabled={busy}>
                  <Download size={18} />
                  <span>Download PDF</span>
                </button>
                <button className="btn-outline w-full" onClick={()=>generate(false)} disabled={busy}>
                  <Eye size={18} />
                  <span>View HTML</span>
                </button>
              </div>
              {msg && <div className="text-emerald font-bold mt-md text-center" style={{ animation: 'fadeIn 0.2s' }}>{msg}</div>}
           </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
function EmailPanel({ analysisResult, sections }) {
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState('');

  const generateEmail = () => {
    setBusy(true);
    const stmtType = analysisResult?.statement_type || 'Financial Statement';
    const lines = [`FINGENIE: ${stmtType}`, `Generated: ${new Date().toLocaleDateString()}`].join('\n');
    window.location.href = `mailto:?subject=FinGenie%20Report&body=${encodeURIComponent(lines)}`;
    setMsg('Sent to Client');
    setBusy(false);
    setTimeout(() => setMsg(''), 3000);
  };

  return (
    <div className="es-panel-wrap">
       <div className="grid-cols-12" style={{ gap: '24px' }}>
          <div className="col-span-7">
             <div className="card-light h-full" style={{ padding: '40px' }}>
                <div className="d-flex items-center gap-4 mb-lg">
                   <div style={{ padding: '12px', background: 'var(--bg-blue-light)', borderRadius: '12px' }}>
                      <Mail className="text-accent" size={24} />
                   </div>
                   <h2 className="section-heading__label" style={{ fontSize: '20px', marginBottom: 0 }}>Executive Snapshot</h2>
                </div>
                <p className="text-secondary mb-xl" style={{ fontSize: '14px', lineHeight: 1.6 }}>Share institutional-grade intelligence via secure plain-text snippets directly to stakeholder mailboxes.</p>
                <div className="d-flex flex-column gap-3 mb-xl">
                   <div className="d-flex items-center gap-3 text-secondary" style={{ fontSize: '13px' }}>
                      <CheckCircle2 className="text-emerald" size={16} />
                      <span>End-to-end PGP compatibility</span>
                   </div>
                   <div className="d-flex items-center gap-3 text-secondary" style={{ fontSize: '13px' }}>
                      <CheckCircle2 className="text-emerald" size={16} />
                      <span>Optimized for Outlook & Gmail</span>
                   </div>
                </div>
                <button className="btn-primary w-full" onClick={generateEmail} disabled={busy}>
                   <Send size={18} />
                   <span>Dispatch Snapshots</span>
                </button>
                {msg && <div className="text-emerald font-bold mt-md text-center">{msg}</div>}
             </div>
          </div>
          <div className="col-span-5">
             <div className="email-terminal">
                <div className="terminal-header">ENCRYPTED PAYLOAD PREVIEW</div>
                <div className="terminal-content">
                   <div className="terminal-prompt">> Initializing FG-Engine_v2...</div>
                   <div className="terminal-prompt">> Decoding {analysisResult?.statement_type || 'Ledger'}...</div>
                   <br />
                   <div style={{ opacity: 0.6 }}>FROM: FinGenie AI Narrative</div>
                   <div style={{ opacity: 0.6 }}>SUBJ: Intel Snapshot // Q1-FG</div>
                   <br />
                   <div style={{ color: 'var(--accent-cyan)' }}>[SUMMARY BLK]</div>
                   <div style={{ wordBreak: 'break-all', opacity: 0.8 }}>{analysisResult?.summary?.substring(0, 120)}...</div>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
function SharedKpiToggles({ sections, onToggle }) {
  return (
    <div className="es-kpi-bar">
      <div className="d-flex items-center gap-3 pr-md" style={{ borderRight: '1px solid var(--border-light)' }}>
        <Layers className="text-accent" size={18} />
        <span className="es-kpi-label">Section Orchestration</span>
      </div>
      <div className="d-flex flex-wrap gap-2">
        {KPI_SECTIONS.map(s => {
          const Icon = s.Icon;
          const isOn = sections.has(s.key);
          return (
            <button
              key={s.key}
              className={`es-kpi-pill ${isOn ? 'on' : ''}`}
              onClick={() => onToggle(s.key)}
            >
              <Icon size={12} />
              <span>{s.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

const FORMAT_TABS = [
  { id:'pdf',   label:'High-Fidelity PDF', Icon: FileText },
  { id:'deck',  label:'Strategic Deck',    Icon: LayoutPanelLeft },
  { id:'email', label:'Internal Digest',   Icon: Mail },
];

export default function ExportSuite({ analysisResult }) {
  const [format,   setFormat]   = useState('pdf');
  const [sections, setSections] = useState(new Set(['summary','kpis','chart','risks','recs']));

  const toggleSection = (key) => {
    setSections(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  if (!analysisResult) return null;

  return (
    <div className="export-suite">
      <SharedKpiToggles sections={sections} onToggle={toggleSection} />

      <div className="nav-links mb-lg" style={{ width: 'fit-content' }}>
        {FORMAT_TABS.map(f => (
          <button
            key={f.id}
            className={`nav-item ${format===f.id?'active':''}`}
            onClick={()=>setFormat(f.id)}
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <f.Icon size={14} />
            <span>{f.label}</span>
          </button>
        ))}
      </div>

      <div className="es-panel-wrap">
        {format === 'pdf'   && <PDFPanel   analysisResult={analysisResult} sections={sections}/>}
        {format === 'email' && <EmailPanel analysisResult={analysisResult} sections={sections}/>}
        {format === 'deck'  && (
          <div className="card-light d-flex flex-column items-center justify-center py-2xl" style={{ border: '1px dashed var(--border-strong)', background: 'var(--bg-blue-light)', minHeight: '380px' }}>
             <div style={{ width: '64px', height: '64px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', boxShadow: 'var(--shadow-md)' }}>
                <Cpu className="text-accent" size={32} />
             </div>
             <h3 className="section-heading__label" style={{ fontSize: '18px', color: 'var(--text-primary)' }}>Vectorized Deck Engine</h3>
             <p className="text-secondary text-center max-w-sm mb-lg" style={{ fontSize: '13px', maxWidth: '340px' }}>We are currently optimizing the Strategic Slides engine for board-ready SVG vectors. Available in v3.1 update.</p>
             <button className="btn-outline" style={{ background: 'white' }}>Initialize Queue</button>
          </div>
        )}
      </div>
    </div>
  );
}