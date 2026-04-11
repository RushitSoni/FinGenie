import { useState } from 'react';

const LENGTHS = [
  { id: 'flash',    label: 'Flash',     desc: '3-bullet summary' },
  { id: 'standard', label: 'Standard', desc: 'Full sections' },
  { id: 'deepdive', label: 'Deep Dive', desc: 'With data tables' },
];

const DELIVERY = [
  { id: 'download', label: 'Download .html file' },
  { id: 'mailto',   label: 'Open in mail client' },
];

const DEFAULT_SECTIONS = {
  kpis:    true,
  risks:   true,
  recs:    true,
  chart:   false,
  ai_note: true,
};

// ─── Email HTML builder ──────────────────────────────────────────────────────
function buildEmailHTML({ analysisResult, length, sections }) {
  const kpis     = analysisResult?.kpis || [];
  const risks    = analysisResult?.risks || [];
  const recs     = analysisResult?.recommendations || [];
  const rawData  = analysisResult?.raw_data || [];
  const cols     = analysisResult?.column_headers || [];
  const stmtType = analysisResult?.statement_type || 'Financial Statement';
  const summary  = analysisResult?.summary || '';
  const now      = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  // length controls how many items we show
  const kpiLimit  = length === 'flash' ? 3 : length === 'standard' ? 6 : kpis.length;
  const riskLimit = length === 'flash' ? 2 : length === 'standard' ? 4 : risks.length;
  const recLimit  = length === 'flash' ? 2 : length === 'standard' ? 3 : recs.length;

  const kpiCells = sections.kpis ? kpis.slice(0, kpiLimit).map(k => {
    const badge = k.trend === 'up' ? { bg: '#d1fae5', color: '#065f46', symbol: '↑' }
                : k.trend === 'down' ? { bg: '#fee2e2', color: '#991b1b', symbol: '↓' }
                : { bg: '#f3f4f6', color: '#374151', symbol: '→' };
    return `
      <td style="padding:0 8px;text-align:center;">
        <div style="background:#f5f9ff;border:1px solid #eef4ff;border-radius:10px;padding:14px 12px;min-width:110px;">
          <div style="font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:#9ca3af;margin-bottom:4px;">${(k.name||'').substring(0,16)}</div>
          <div style="font-size:20px;font-weight:700;color:#0f1e3d;margin-bottom:6px;">${k.formatted_value || k.value || '—'}</div>
          <span style="font-size:10px;padding:2px 8px;border-radius:20px;background:${badge.bg};color:${badge.color};">${badge.symbol} ${k.trend || 'stable'}</span>
        </div>
      </td>`;
  }).join('') : '';

  const riskRows = sections.risks ? risks.slice(0, riskLimit).map(r => {
    const sev = r.severity || 'medium';
    const cfg = { critical: ['#fee2e2','#dc2626'], high: ['#fee2e2','#ea580c'], medium: ['#fef3c7','#d97706'], low: ['#d1fae5','#16a34a'] }[sev] || ['#fef3c7','#d97706'];
    return `
      <tr>
        <td style="padding:10px 14px;border-bottom:1px solid #f3f4f6;">
          <span style="font-size:10px;font-weight:700;padding:2px 8px;border-radius:20px;background:${cfg[0]};color:${cfg[1]};margin-right:8px;">${sev.toUpperCase()}</span>
          <span style="font-size:13px;color:#374151;">${r.risk || ''}</span>
        </td>
      </tr>`;
  }).join('') : '';

  const recItems = sections.recs ? recs.slice(0, recLimit).map((r, i) => `
    <tr>
      <td style="padding:10px 14px;border-bottom:1px solid #f3f4f6;vertical-align:top;">
        <span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#1d6fe8;color:white;font-size:11px;font-weight:700;margin-right:10px;flex-shrink:0;">${i+1}</span>
        <span style="font-size:13px;color:#374151;">${typeof r === 'string' ? r : JSON.stringify(r)}</span>
      </td>
    </tr>`).join('') : '';

  const summaryBlock = sections.ai_note && summary ? `
    <tr>
      <td style="padding:0 0 20px;">
        <div style="background:#f0f6ff;border-left:3px solid #1d6fe8;padding:14px 18px;border-radius:0 8px 8px 0;">
          <div style="font-size:11px;color:#1d6fe8;font-weight:600;text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px;">🤖 AI Commentary</div>
          <div style="font-size:13px;color:#374151;line-height:1.6;">${summary.split('.').slice(0, length === 'flash' ? 1 : 3).join('. ')}.</div>
        </div>
      </td>
    </tr>` : '';

  // Trend chart — shown when sections.chart is true
  // Renders proportional bar chart; skips non-numeric/identifier KPIs
  const parseKpiNum = k => {
    const src = String(k.value !== undefined && k.value !== null && k.value !== '' ? k.value : k.formatted_value || '');
    return parseFloat(src.replace(/[^0-9.-]/g, ''));
  };
  const chartItems = kpis.slice(0, 6).filter(k => {
    const v = parseKpiNum(k);
    // Skip identifiers (account numbers, IDs) — values > 1,000,000 with no currency/percent sign
    const fmt = String(k.formatted_value || '');
    const looksLikeId = v > 999999 && !/[$€£%]/.test(fmt) && !/ratio|rate|margin|income|revenue|profit|loss|asset|liabilit|equity|cash|debt|ebitda/i.test(k.name || '');
    return !isNaN(v) && v > 0 && !looksLikeId;
  });
  const chartMax = chartItems.reduce((m, k) => {
    const v = parseKpiNum(k);
    return !isNaN(v) && v > m ? v : m;
  }, 1);
  const chartBlock = sections.chart && chartItems.length > 0 ? `
    <tr>
      <td style="padding:0 0 20px;">
        <div style="font-size:13px;font-weight:600;color:#0f1e3d;margin-bottom:12px;">📊 KPI Trend Overview</div>
        <table width="100%" cellpadding="0" cellspacing="0">
          ${chartItems.map(k => {
            const raw = parseKpiNum(k) || 0;
            const pct = Math.max(4, Math.min(Math.round((raw / chartMax) * 100), 100));
            const barColor = k.trend === 'up' ? '#22c55e' : k.trend === 'down' ? '#ef4444' : '#1d6fe8';
            return `<tr>
              <td style="padding:5px 0;width:120px;font-size:11px;color:#6b7280;vertical-align:middle;white-space:nowrap;overflow:hidden;max-width:120px;">${(k.name||'').substring(0,18)}</td>
              <td style="padding:5px 8px;vertical-align:middle;">
                <div style="background:#f3f4f6;border-radius:4px;height:10px;overflow:hidden;">
                  <div style="background:${barColor};height:10px;width:${pct}%;border-radius:4px;"></div>
                </div>
              </td>
              <td style="padding:5px 0;width:90px;font-size:12px;font-weight:600;color:#0f1e3d;text-align:right;vertical-align:middle;white-space:nowrap;">${k.formatted_value || k.value || '—'}</td>
            </tr>`;
          }).join('')}
        </table>
      </td>
    </tr>` : '';

  // Raw data table for deep dive
  const dataTableBlock = length === 'deepdive' && rawData.length > 0 && cols.length > 0 ? `
    <tr>
      <td style="padding:0 0 20px;">
        <div style="font-size:13px;font-weight:600;color:#0f1e3d;margin-bottom:10px;">📋 Data Table</div>
        <div style="overflow-x:auto;">
          <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:12px;">
            <tr>${cols.map(c => `<th style="padding:8px 10px;background:#1d6fe8;color:white;text-align:left;">${c}</th>`).join('')}</tr>
            ${rawData.slice(0, 10).map(r => `<tr>${cols.map(c => `<td style="padding:8px 10px;border-bottom:1px solid #f3f4f6;color:#374151;">${r[c] ?? ''}</td>`).join('')}</tr>`).join('')}
          </table>
        </div>
      </td>
    </tr>` : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>FinGenie Digest — ${stmtType}</title>
</head>
<body style="margin:0;padding:0;background:#f5f8ff;font-family:'Segoe UI',system-ui,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f8ff;padding:32px 0;">
  <tr>
    <td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(108,61,232,.08);">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#0f1e3d,#1d6fe8);padding:28px 36px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <span style="font-size:22px;font-weight:700;color:white;"><span style="color:#67c5f0;">Fin</span>Genie</span>
                  <div style="font-size:11px;color:rgba(255,255,255,.55);margin-top:2px;">AI Financial Intelligence</div>
                </td>
                <td align="right" style="font-size:12px;color:rgba(255,255,255,.5);">${now}</td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Hero -->
        <tr>
          <td style="padding:28px 36px 0;">
            <span style="font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:#1d6fe8;background:#eef4ff;padding:3px 10px;border-radius:20px;">${stmtType} Analysis</span>
            <div style="font-size:20px;font-weight:700;color:#0f1e3d;margin-top:12px;line-height:1.35;">
              ${summary ? summary.split('.')[0] + '.' : 'Financial highlights from your latest report.'}
            </div>
          </td>
        </tr>

        <!-- Body sections -->
        <tr>
          <td style="padding:24px 36px;">
            <table width="100%" cellpadding="0" cellspacing="0">

              ${summaryBlock}

              <!-- KPIs -->
              ${sections.kpis && kpis.length > 0 ? `
              <tr>
                <td style="padding:0 0 20px;">
                  <div style="font-size:13px;font-weight:600;color:#0f1e3d;margin-bottom:12px;">📊 Key Metrics</div>
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>${kpiCells}</tr>
                  </table>
                </td>
              </tr>` : ''}

              <!-- Chart -->
              ${chartBlock}

              <!-- Risks -->
              ${sections.risks && risks.length > 0 ? `
              <tr>
                <td style="padding:0 0 20px;">
                  <div style="font-size:13px;font-weight:600;color:#0f1e3d;margin-bottom:10px;">⚠️ Risk Alerts</div>
                  <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #f3f4f6;border-radius:8px;overflow:hidden;">
                    ${riskRows}
                  </table>
                </td>
              </tr>` : ''}

              <!-- Recs -->
              ${sections.recs && recs.length > 0 ? `
              <tr>
                <td style="padding:0 0 20px;">
                  <div style="font-size:13px;font-weight:600;color:#0f1e3d;margin-bottom:10px;">💡 Top Recommendations</div>
                  <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #f3f4f6;border-radius:8px;overflow:hidden;">
                    ${recItems}
                  </table>
                </td>
              </tr>` : ''}

              ${dataTableBlock}

            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f5f8ff;padding:20px 36px;border-top:1px solid #eef4ff;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="font-size:11px;color:#9ca3af;">Generated by FinGenie AI · Powered by Groq Llama 3.3</td>
                // <td align="right"><span style="font-size:11px;color:#1d6fe8;font-weight:500;">View Full Report →</span></td>
              </tr>
            </table>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}

// ─── Plain text email body (for mailto:) ────────────────────────────────────
function buildPlainText({ analysisResult, length, sections }) {
  const kpis     = analysisResult?.kpis || [];
  const risks    = analysisResult?.risks || [];
  const recs     = analysisResult?.recommendations || [];
  const stmtType = analysisResult?.statement_type || 'Financial Statement';
  const summary  = analysisResult?.summary || '';
  const now      = new Date().toLocaleDateString();

  const kpiLimit  = length === 'flash' ? 3 : 6;
  const riskLimit = length === 'flash' ? 2 : 4;
  const recLimit  = length === 'flash' ? 2 : 3;

  let body = `FINGENIE DIGEST — ${stmtType} Analysis\n`;
  body += `Generated: ${now}\n`;
  body += '─'.repeat(50) + '\n\n';

  if (sections.ai_note && summary) {
    body += `AI COMMENTARY\n${summary.split('.').slice(0, 2).join('. ')}.\n\n`;
  }
  if (sections.kpis && kpis.length) {
    body += `KEY METRICS\n`;
    kpis.slice(0, kpiLimit).forEach(k => {
      body += `  • ${k.name}: ${k.formatted_value || k.value || '—'}`;
      if (k.trend) body += ` (${k.trend})`;
      body += '\n';
    });
    body += '\n';
  }
  if (sections.chart && kpis.length) {
    body += `KPI TREND OVERVIEW\n`;
    kpis.slice(0, kpiLimit).forEach(k => {
      const arrow = k.trend === 'up' ? '↑' : k.trend === 'down' ? '↓' : '→';
      const filled = k.trend === 'up' ? 8 : k.trend === 'down' ? 3 : 5;
      const bar = '█'.repeat(filled) + '░'.repeat(10 - filled);
      body += `  ${arrow} ${(k.name || '').padEnd(20)} ${bar}  ${k.formatted_value || k.value || '—'}\n`;
    });
    body += '\n';
  }
  if (sections.risks && risks.length) {
    body += `RISK ALERTS\n`;
    risks.slice(0, riskLimit).forEach(r => {
      body += `  [${(r.severity || 'MEDIUM').toUpperCase()}] ${r.risk}\n`;
    });
    body += '\n';
  }
  if (sections.recs && recs.length) {
    body += `RECOMMENDATIONS\n`;
    recs.slice(0, recLimit).forEach((r, i) => {
      body += `  ${i+1}. ${typeof r === 'string' ? r : JSON.stringify(r)}\n`;
    });
    body += '\n';
  }
  body += '─'.repeat(50) + '\n';
  body += 'Generated by FinGenie AI · Powered by Groq Llama 3.3';
  return body;
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function EmailDigest({ analysisResult }) {
  const [length, setLength]       = useState('flash');
  const [delivery, setDelivery]   = useState('download');
  const [sections, setSections]   = useState(DEFAULT_SECTIONS);
  const [generating, setGen]      = useState(false);
  const [status, setStatus]       = useState({ type: null, msg: '' });

  const toggleSec = (key) => setSections(prev => ({ ...prev, [key]: !prev[key] }));

  const handleGenerate = async () => {
    setGen(true);
    setStatus({ type: null, msg: '' });

    try {
      const html = buildEmailHTML({ analysisResult, length, sections });
      const stmtType = analysisResult?.statement_type || 'Financial Statement';

      if (delivery === 'download') {
        const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
        const url  = URL.createObjectURL(blob);
        const a    = document.createElement('a');
        a.href = url; a.download = 'fingenie-digest.html';
        a.click();
        URL.revokeObjectURL(url);
        setStatus({ type: 'ok', msg: '✅ digest.html downloaded! Open it in a browser to preview. You can also drag it into Gmail\'s compose window.' });
      } else if (delivery === 'mailto') {
        const plain   = buildPlainText({ analysisResult, length, sections });
        const subject = encodeURIComponent(`FinGenie Digest — ${stmtType} Analysis`);
        const body    = encodeURIComponent(plain);
        // mailto: only supports plain text — open download too so they have the HTML version
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
        // Also download the HTML version for them to attach
        setTimeout(() => {
          const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
          const url  = URL.createObjectURL(blob);
          const a    = document.createElement('a');
          a.href = url; a.download = 'fingenie-digest.html';
          a.click();
          URL.revokeObjectURL(url);
        }, 600);
        setStatus({ type: 'ok', msg: '✅ Mail client opened with plain-text content. digest.html also downloaded — attach it or paste as HTML in your email.' });
      }
    } catch (err) {
      setStatus({ type: 'err', msg: '❌ Error: ' + err.message });
    }

    setGen(false);
    setTimeout(() => setStatus({ type: null, msg: '' }), 8000);
  };

  const kpis     = analysisResult?.kpis?.slice(0, 3) || [];
  const risks    = analysisResult?.risks?.slice(0, 2) || [];
  const recs     = analysisResult?.recommendations?.slice(0, 2) || [];
  const stmtType = analysisResult?.statement_type || 'Financial Statement';
  const summary  = analysisResult?.summary || '';

  return (
    <div className="layer-panel-inner">
      <div className="digest-layout">

        {/* ── Left: Options ── */}
        <div className="digest-options">

          {/* Digest length */}
          <div className="do-section">
            <div className="dos-title">Digest length</div>
            <div className="radio-group">
              {LENGTHS.map(l => (
                <div key={l.id} className={`radio-opt ${length === l.id ? 'selected' : ''}`} onClick={() => setLength(l.id)}>
                  <div className="radio-dot" />
                  <span>{l.label}</span>
                  <span style={{ color: 'var(--rc-ink3)', marginLeft: 4, fontSize: 11 }}>— {l.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Include sections */}
          <div className="do-section">
            <div className="dos-title">Include sections</div>
            <div className="toggle-group">
              {[
                { key: 'kpis',    label: 'KPI snapshot' },
                { key: 'risks',   label: 'Risk alerts' },
                { key: 'recs',    label: 'Recommendations' },
                { key: 'chart',   label: 'Trend chart' },
                { key: 'ai_note', label: 'AI commentary' },
              ].map(({ key, label }) => (
                <div key={key} className="tg-row">
                  <span>{label}</span>
                  <div className={`mini-toggle ${sections[key] ? 'on' : ''}`} onClick={() => toggleSec(key)} />
                </div>
              ))}
            </div>
          </div>

          {/* Delivery */}
          <div className="do-section">
            <div className="dos-title">Delivery</div>
            <div className="radio-group">
              {DELIVERY.map(d => (
                <div key={d.id} className={`radio-opt ${delivery === d.id ? 'selected' : ''}`} onClick={() => setDelivery(d.id)}>
                  <div className="radio-dot" />
                  {d.label}
                </div>
              ))}
            </div>

            {delivery === 'mailto' && (
              <p style={{ fontSize: 11, color: 'var(--rc-ink3)', marginTop: 6, lineHeight: 1.5 }}>
                💡 Tip: mailto: supports plain text only. The HTML file will also download so you can attach it.
              </p>
            )}
          </div>

          {/* Generate button */}
          <button
            className="rc-btn rc-btn-export"
            style={{ width: '100%', marginTop: 4 }}
            onClick={handleGenerate}
            disabled={generating}
          >
            {generating
              ? <><span className="rc-spinner"/>Building digest…</>
              : delivery === 'mailto'
                ? '✉️ Open in Mail Client'
                : '⬇ Download Email Digest'
            }
          </button>

          {status.msg && (
            <div className={`success-flash${status.type === 'err' ? ' error-flash' : ''}`}>
              {status.msg}
            </div>
          )}
        </div>

        {/* ── Right: Live Email Preview ── */}
        <div>
          <div className="section-label" style={{ marginBottom: 8 }}>Email preview</div>
          <div className="email-preview">

            {/* Email header bar */}
            <div className="ep-topbar">
              <div className="ep-field">
                <span className="ep-label">To:</span>
                <span className="ep-val">Board Members, Finance Committee</span>
              </div>
              <div className="ep-field">
                <span className="ep-label">Sub:</span>
                <span className="ep-val">FinGenie Digest — {stmtType} Analysis</span>
              </div>
            </div>

            {/* Email card body */}
            <div className="ep-body">
              <div className="email-card">

                {/* Email brand header */}
                <div className="ec-header">
                  <div className="ec-logo">
                    <span style={{ color: 'var(--rc-accent)' }}>Fin</span>Genie
                  </div>
                  <div className="ec-date">
                    {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </div>
                </div>

                {/* Headline */}
                <div className="ec-hero">
                  <div className="ec-tag">{stmtType} Analysis</div>
                  <div className="ec-headline">
                    {summary
                      ? summary.split('.')[0] + '.'
                      : 'Key financial metrics reviewed — see highlights below.'}
                  </div>
                </div>

                {/* AI Commentary */}
                {sections.ai_note && summary && (
                  <div style={{ margin: '8px 12px', padding: '10px 12px', background: '#f0f6ff', borderLeft: '3px solid var(--rc-accent)', borderRadius: '0 6px 6px 0' }}>
                    <div style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--rc-accent)', marginBottom: 4 }}>🤖 AI Commentary</div>
                    <div style={{ fontSize: 11, color: '#374151', lineHeight: 1.5 }}>{summary.split('.')[0]}.</div>
                  </div>
                )}

                {/* KPI row */}
                {sections.kpis && (
                  <div className="ec-kpis">
                    {kpis.length > 0 ? kpis.map((k, i) => (
                      <div key={i} className="ek-item">
                        <div className="ek-label">{k.name?.substring(0, 12)}</div>
                        <div className="ek-val">{k.formatted_value}</div>
                        <span className={`ek-chg ${k.trend === 'up' ? 'ek-pos' : k.trend === 'down' ? 'ek-neg' : ''}`}>
                          {k.trend === 'up' ? '↑' : k.trend === 'down' ? '↓' : '→'}
                        </span>
                      </div>
                    )) : (
                      <>
                        <div className="ek-item"><div className="ek-label">Revenue</div><div className="ek-val">—</div></div>
                        <div className="ek-item"><div className="ek-label">Margin</div><div className="ek-val">—</div></div>
                        <div className="ek-item"><div className="ek-label">Net Inc.</div><div className="ek-val">—</div></div>
                      </>
                    )}
                  </div>
                )}

                {/* Trend Chart */}
                {sections.chart && analysisResult?.kpis?.length > 0 && (() => {
                  const parseNum = k => {
                    const s = String(k.value !== undefined && k.value !== null && k.value !== '' ? k.value : k.formatted_value || '');
                    return parseFloat(s.replace(/[^0-9.-]/g, ''));
                  };
                  const items = analysisResult.kpis.slice(0, 4).filter(k => {
                    const v = parseNum(k);
                    const fmt = String(k.formatted_value || '');
                    const looksLikeId = v > 999999 && !/[$€£%]/.test(fmt) && !/ratio|rate|margin|income|revenue|profit|loss|asset|liabilit|equity|cash|debt|ebitda/i.test(k.name || '');
                    return !isNaN(v) && v > 0 && !looksLikeId;
                  });
                  const maxVal = items.reduce((m, k) => { const v = parseNum(k); return !isNaN(v) && v > m ? v : m; }, 1);
                  return (
                    <div style={{ padding: '8px 12px 4px', borderTop: '0.5px solid var(--rc-border)' }}>
                      <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--rc-ink3)', marginBottom: 8 }}>📊 KPI Trend Overview</div>
                      {items.map((k, i) => {
                        const raw = parseNum(k) || 0;
                        const pct = Math.max(4, Math.min(Math.round((raw / maxVal) * 100), 100));
                        const barColor = k.trend === 'up' ? '#22c55e' : k.trend === 'down' ? '#ef4444' : 'var(--rc-accent)';
                        return (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}>
                            <div style={{ fontSize: 9, color: 'var(--rc-ink3)', width: 72, flexShrink: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{k.name}</div>
                            <div style={{ flex: 1, background: 'var(--rc-surface2)', borderRadius: 3, height: 6, overflow: 'hidden' }}>
                              <div style={{ height: 6, background: barColor, borderRadius: 3, width: `${pct}%` }} />
                            </div>
                            <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--rc-ink)', width: 64, textAlign: 'right', flexShrink: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{k.formatted_value || k.value || '—'}</div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })()}

                {/* Risks */}
                {sections.risks && (
                  <div className="ec-risks">
                    <div className="er-title">Risk Alerts</div>
                    {risks.length > 0 ? risks.map((r, i) => {
                      const sev = r.severity || 'medium';
                      const cfg = {
                        critical: { bg: '#fee2e2', color: '#991b1b', label: 'CRITICAL' },
                        high:     { bg: '#fee2e2', color: '#991b1b', label: 'HIGH' },
                        medium:   { bg: '#fef3c7', color: '#92400e', label: 'MED' },
                        low:      { bg: '#d1fae5', color: '#065f46', label: 'LOW' },
                      }[sev] || { bg: '#fef3c7', color: '#92400e', label: 'MED' };
                      return (
                        <div key={i} className="er-item">
                          <span className="er-badge" style={{ background: cfg.bg, color: cfg.color }}>{cfg.label}</span>
                          {r.risk}
                        </div>
                      );
                    }) : (
                      <div className="er-item" style={{ color: 'var(--rc-ink3)', fontSize: 11 }}>No risks flagged.</div>
                    )}
                  </div>
                )}

                {/* Recommendations */}
                {sections.recs && (
                  <div className="ec-recs">
                    <div className="erec-title">Top Recommendations</div>
                    {recs.length > 0 ? recs.map((r, i) => (
                      <div key={i} className="erec-item">
                        <div className="erec-num">{i + 1}</div>
                        {typeof r === 'string' ? r.substring(0, 80) : r}
                      </div>
                    )) : (
                      <div style={{ fontSize: 11, color: 'var(--rc-ink3)' }}>No recommendations available.</div>
                    )}
                  </div>
                )}

                {/* Footer */}
                <div className="ec-footer">
                  <div className="ef-text">Generated by FinGenie AI · Powered by Groq Llama 3.3</div>
                  {/* <a className="ef-cta" href="#" onClick={e => e.preventDefault()}>View Full Report →</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}