/// ExportSuite.jsx — Unified export tab combining PDF, Deck & Email
// Shared KPI toggles at top, then format picker, then dynamic content + download
import { useState } from 'react';
import '../components/ExportSuite.css';

// ─── Shared KPI section config ───────────────────────────────────────────────
const KPI_SECTIONS = [
  { key: 'summary',  label: 'AI Summary'       },
  { key: 'kpis',     label: 'KPI Metrics'      },
  { key: 'chart',    label: 'Trend Chart'      },
  { key: 'risks',    label: 'Risk Analysis'    },
  { key: 'recs',     label: 'Recommendations'  },
  { key: 'rawdata',  label: 'Raw Data'         },
];

// ─── PDF constants ────────────────────────────────────────────────────────────
const PDF_SECTIONS_MAP = { summary: 'summary', kpis: 'kpis', chart: 'charts', risks: 'risks', recs: 'recs', rawdata: 'rawdata' };
const COLORS = ['#0f1e3d','#0f766e','#1d4ed8','#b45309','#0369a1','#be123c','#166534','#374151'];

// ─── PPT constants ────────────────────────────────────────────────────────────
const THEMES = [
  { id: 'dark',  label: 'Dark Pro',      bg: '#0f1e3d', fg: '#ffffff', accent: '#67c5f0' },
  { id: 'light', label: 'Clean Light',   bg: '#ffffff', fg: '#0f1e3d', accent: '#1d6fe8' },
  { id: 'color', label: 'Branded Color', bg: '#1d6fe8', fg: '#ffffff', accent: '#fbbf24' },
  { id: 'mono',  label: 'Monochrome',    bg: '#1a1a1a', fg: '#f5f5f5', accent: '#888888' },
];



// ─── Email constants ──────────────────────────────────────────────────────────
const EMAIL_LENGTHS = [
  { id: 'flash',    label: 'Flash',     desc: '3-bullet summary' },
  { id: 'standard', label: 'Standard', desc: 'Full sections'    },
  { id: 'deepdive', label: 'Deep Dive', desc: 'With data tables' },
];

// ─── pptxgenjs loader ─────────────────────────────────────────────────────────
let pptxgenPromise = null;
function loadPptxGen() {
  if (pptxgenPromise) return pptxgenPromise;
  pptxgenPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/pptxgenjs@3.12.0/dist/pptxgen.bundle.js';
    script.onload  = () => resolve(window.PptxGenJS);
    script.onerror = () => reject(new Error('Failed to load pptxgenjs'));
    document.head.appendChild(script);
  });
  return pptxgenPromise;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
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
// PDF BUILDER
// ═══════════════════════════════════════════════════════════════════════════════
function buildPDFReport({ analysisResult, sections, company, author, title, color }) {
  const displayTitle  = title   || 'Financial Analysis Report';
  const displayAuthor = author  || 'Finance Team';
  const displayCo     = company || 'Your Company';
  const now    = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const kpis   = analysisResult?.kpis  || [];
  const risks  = analysisResult?.risks || [];
  const recs   = analysisResult?.recommendations || [];
  const rawData= analysisResult?.raw_data || [];
  const cols   = analysisResult?.column_headers || [];
  const summary= analysisResult?.summary || '';
  const stmtType= analysisResult?.statement_type || 'Financial Statement';

  const kpiHtml = kpis.map(k => `
    <div class="kpi-card">
      <div class="kpi-name">${k.name || ''}</div>
      <div class="kpi-value">${k.formatted_value || k.value || ''}</div>
      ${k.trend ? `<span class="kpi-badge kpi-${k.trend}">${k.trend === 'up' ? '↑' : k.trend === 'down' ? '↓' : '→'} ${k.trend}</span>` : ''}
      ${k.description ? `<div class="kpi-desc">${k.description}</div>` : ''}
    </div>`).join('');

  const riskRows = risks.map(r => {
    const sev = r.severity || 'medium';
    const colors = { critical: '#dc2626', high: '#ea580c', medium: '#d97706', low: '#16a34a' };
    return `<tr>
      <td><span class="badge" style="background:${colors[sev]||colors.medium}20;color:${colors[sev]||colors.medium}">${sev.toUpperCase()}</span></td>
      <td>${r.risk || ''}</td><td>${r.implication || ''}</td></tr>`;
  }).join('');

  const recItems = recs.map((r, i) => `
    <div class="rec-item">
      <div class="rec-num">${i+1}</div>
      <div>${typeof r === 'string' ? r : JSON.stringify(r)}</div>
    </div>`).join('');

  const dataRowsHtml = rawData.slice(0, 50).map(row => {
    const cells = cols.map(c => `<td>${row[c] !== undefined ? row[c] : ''}</td>`).join('');
    return `<tr>${cells}</tr>`;
  }).join('');

  const dataTableHtml = cols.length ? `
    <table class="data-table">
      <thead><tr>${cols.map(c => `<th>${c}</th>`).join('')}</tr></thead>
      <tbody>${dataRowsHtml}</tbody>
    </table>` : '<p>No raw data available.</p>';

  // Build trend chart SVG from raw data if available
  const chartSection = (() => {
    if (!sections.has('chart')) return '';

    // Helper: render a clean horizontal bar chart from KPI data
    const renderKpiBarChart = (barData) => {
      const maxVal = Math.max(...barData.map(k => Math.abs(parseFloat(String(k.value||'0').replace(/[^0-9.-]/g,''))||0)), 1);
      const bars = barData.map(k => {
        const v = Math.abs(parseFloat(String(k.value||'0').replace(/[^0-9.-]/g,''))||0);
        const pct = Math.max(4, Math.round((v/maxVal)*100));
        const clr = k.trend==='up'?'#22c55e':k.trend==='down'?'#ef4444':color;
        return `<div style="display:flex;align-items:center;gap:12px;margin-bottom:10px">
          <div style="width:140px;font-size:12px;color:#6b7280;text-align:right;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex-shrink:0">${k.name||''}</div>
          <div style="flex:1;background:#f3f4f6;border-radius:4px;height:24px;overflow:hidden;position:relative">
            <div style="width:${pct}%;background:${clr};height:100%;border-radius:4px;transition:width .3s"></div>
          </div>
          <div style="width:100px;font-size:12px;font-weight:600;color:#111827;flex-shrink:0">${k.formatted_value||k.value||'—'} <span style="color:${clr}">${k.trend==='up'?'↑':k.trend==='down'?'↓':'→'}</span></div>
        </div>`;
      }).join('');
      return `<div style="padding:8px 0">${bars}</div>`;
    };

    // If no raw data, use KPI bar chart
    if (!rawData.length || !cols.length) {
      if (!kpis.length) return '';
      return `<section><h2>Trend Chart — KPI Overview</h2>${renderKpiBarChart(kpis.slice(0,6))}</section>`;
    }

    // Find best columns: first non-numeric as label, first numeric as value
    const numericCols = cols.filter(c => rawData.slice(0,5).filter(r => r[c]!==undefined && r[c]!=='').some(r => !isNaN(parseFloat(String(r[c]).replace(/[^0-9.-]/g,'')))));
    const labelCol = cols.find(c => !numericCols.includes(c)) || cols[0];
    const valueCol = numericCols[0];

    if (!valueCol) {
      if (!kpis.length) return '';
      return `<section><h2>Trend Chart — KPI Overview</h2>${renderKpiBarChart(kpis.slice(0,6))}</section>`;
    }

    // Build SVG line chart
    const dataPoints = rawData.slice(0, 14);
    const values = dataPoints.map(r => parseFloat(String(r[valueCol]||'0').replace(/[^0-9.-]/g,''))||0);
    const labels = dataPoints.map(r => String(r[labelCol]||'').substring(0, 12));
    const maxV = Math.max(...values);
    const minV = Math.min(...values);
    const range = (maxV - minV) || 1;
    const n = values.length;

    const W=740, H=240, padL=60, padR=20, padT=20, padB=50;
    const cW = W-padL-padR, cH = H-padT-padB;

    const px = (i) => padL + (n > 1 ? (i/(n-1))*cW : cW/2);
    const py = (v) => padT + (1 - (v - minV)/range) * cH;

    const pointCoords = values.map((v,i) => [px(i), py(v)]);
    const polyline = pointCoords.map(([x,y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
    const areaPath = `${padL.toFixed(1)},${(padT+cH).toFixed(1)} ${polyline} ${(padL+(n>1?(n-1)/(n-1)*cW:cW/2)).toFixed(1)},${(padT+cH).toFixed(1)}`;

    const gridY = [0,0.25,0.5,0.75,1].map(f => {
      const yPos = padT + f * cH;
      const val  = maxV - f * range;
      const label = Math.abs(val) >= 1e6 ? (val/1e6).toFixed(1)+'M'
                  : Math.abs(val) >= 1e3 ? (val/1e3).toFixed(1)+'K'
                  : val.toFixed(1);
      return `<line x1="${padL}" y1="${yPos.toFixed(1)}" x2="${(padL+cW).toFixed(1)}" y2="${yPos.toFixed(1)}" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="${f===1?'none':'4,4'}"/>
<text x="${(padL-8).toFixed(1)}" y="${(yPos+4).toFixed(1)}" font-size="10" fill="#9ca3af" text-anchor="end">${label}</text>`;
    }).join('\n');

    const xLabels = labels.map((lb,i) => {
      const x = px(i);
      return `<text x="${x.toFixed(1)}" y="${(H-10).toFixed(1)}" font-size="9" fill="#9ca3af" text-anchor="middle" transform="rotate(-30,${x.toFixed(1)},${(H-10).toFixed(1)})">${lb}</text>`;
    }).join('\n');

    const dots = pointCoords.map(([x,y],i) =>
      `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4" fill="${color}" stroke="white" stroke-width="2"/>`
    ).join('\n');

    const colorHex = color.replace('#','');
    const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:${W}px;display:block">
  <defs>
    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${color}" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="${color}" stop-opacity="0.01"/>
    </linearGradient>
  </defs>
  ${gridY}
  <line x1="${padL}" y1="${padT}" x2="${padL}" y2="${(padT+cH).toFixed(1)}" stroke="#d1d5db" stroke-width="1"/>
  <polygon points="${areaPath}" fill="url(#chartGrad)"/>
  <polyline points="${polyline}" fill="none" stroke="${color}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
  ${dots}
  ${xLabels}
  <text x="${(padL + cW/2).toFixed(1)}" y="${(H-1).toFixed(1)}" font-size="10" fill="#9ca3af" text-anchor="middle">${valueCol}</text>
</svg>`;

    return `<section><h2>Trend Chart — ${valueCol}</h2>${svg}</section>`;
  })();

  const secHTML = [
    sections.has('summary') && summary ? `<section><h2>AI Summary</h2><div class="summary-box">${summary}</div></section>` : '',
    sections.has('kpis')    && kpis.length ? `<section><h2>Key Performance Indicators</h2><div class="kpi-grid">${kpiHtml}</div></section>` : '',
    chartSection,
    sections.has('risks')   && risks.length ? `<section><h2>Risk Analysis</h2><table class="data-table"><thead><tr><th>Severity</th><th>Risk</th><th>Implication</th></tr></thead><tbody>${riskRows}</tbody></table></section>` : '',
    sections.has('recs')    && recs.length ? `<section><h2>Recommendations</h2><div class="recs-list">${recItems}</div></section>` : '',
    sections.has('rawdata') ? `<section><h2>Raw Data Table</h2>${dataTableHtml}</section>` : '',
  ].filter(Boolean).join('\n');

  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/>
<title>${displayTitle}</title>
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:'Segoe UI',system-ui,sans-serif;color:#1a1a2e;background:#fff;line-height:1.6}
  .cover{background:linear-gradient(135deg,${color},${color}cc);color:white;padding:60px 56px;min-height:220px;display:flex;flex-direction:column;justify-content:space-between}
  .cover-meta{font-size:11px;letter-spacing:1.5px;text-transform:uppercase;opacity:.65;margin-bottom:16px}
  .cover-title{font-size:32px;font-family:Georgia,serif;line-height:1.2;margin-bottom:8px}
  .cover-sub{font-size:15px;opacity:.75}
  .cover-footer{display:flex;justify-content:space-between;margin-top:32px;font-size:13px;opacity:.65}
  .container{max-width:900px;margin:0 auto;padding:40px 56px}
  section{margin-bottom:40px}
  section h2{font-family:Georgia,serif;font-size:20px;font-weight:400;color:${color};border-bottom:2px solid ${color}22;padding-bottom:8px;margin-bottom:20px}
  .summary-box{background:${color}08;border-left:3px solid ${color};padding:16px 20px;border-radius:4px;font-size:14px;line-height:1.7}
  .kpi-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:14px}
  .kpi-card{border:1px solid #e5e7eb;border-radius:10px;padding:16px}
  .kpi-name{font-size:11px;text-transform:uppercase;letter-spacing:.5px;color:#6b7280;margin-bottom:4px}
  .kpi-value{font-size:22px;font-weight:600;color:#111827;margin-bottom:6px}
  .kpi-desc{font-size:11px;color:#9ca3af;margin-top:4px}
  .kpi-badge{font-size:11px;padding:2px 8px;border-radius:20px;display:inline-block}
  .kpi-up{background:#d1fae5;color:#065f46}.kpi-down{background:#fee2e2;color:#991b1b}.kpi-neutral{background:#f3f4f6;color:#374151}
  .data-table{width:100%;border-collapse:collapse;font-size:13px}
  .data-table th{background:${color};color:white;padding:10px 12px;text-align:left;font-weight:500}
  .data-table td{padding:9px 12px;border-bottom:1px solid #f3f4f6}
  .badge{font-size:10px;padding:2px 8px;border-radius:20px;font-weight:600}
  .recs-list{display:flex;flex-direction:column;gap:10px}
  .rec-item{display:flex;align-items:flex-start;gap:12px;font-size:14px}
  .rec-num{width:24px;height:24px;border-radius:50%;background:${color};color:white;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:600;flex-shrink:0;margin-top:1px}
  .report-footer{text-align:center;padding:32px;color:#9ca3af;font-size:11px;border-top:1px solid #f3f4f6;margin-top:40px}
  @media print{.cover{-webkit-print-color-adjust:exact;print-color-adjust:exact}section{page-break-inside:avoid}}
</style></head><body>
<div class="cover">
  <div>
    <div class="cover-meta">FINGENIE ANALYSIS · ${stmtType.toUpperCase()}</div>
    <div class="cover-title">${displayTitle}</div>
    <div class="cover-sub">Prepared by ${displayAuthor} · ${displayCo}</div>
  </div>
  <div class="cover-footer"><span>${displayCo}</span><span>${now}</span></div>
</div>
<div class="container">${secHTML}</div>
<div class="report-footer">Generated by FinGenie AI · ${now}</div>
</body></html>`;
}

// ═══════════════════════════════════════════════════════════════════════════════
// EMAIL BUILDER
// ═══════════════════════════════════════════════════════════════════════════════
function buildEmailHTML({ analysisResult, length, sections }) {
  const kpis    = analysisResult?.kpis || [];
  const risks   = analysisResult?.risks || [];
  const recs    = analysisResult?.recommendations || [];
  const rawData = analysisResult?.raw_data || [];
  const cols    = analysisResult?.column_headers || [];
  const stmtType= analysisResult?.statement_type || 'Financial Statement';
  const summary = analysisResult?.summary || '';
  const now     = new Date().toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' });

  const kpiLimit  = length === 'flash' ? 3 : length === 'standard' ? 6 : kpis.length;
  const riskLimit = length === 'flash' ? 2 : length === 'standard' ? 4 : risks.length;
  const recLimit  = length === 'flash' ? 2 : length === 'standard' ? 3 : recs.length;

  const kpiCells = sections.has('kpis') ? kpis.slice(0, kpiLimit).map(k => {
    const badge = k.trend === 'up' ? { bg:'#d1fae5', color:'#065f46', sym:'↑' }
                : k.trend === 'down' ? { bg:'#fee2e2', color:'#991b1b', sym:'↓' }
                : { bg:'#f3f4f6', color:'#374151', sym:'→' };
    return `<td style="padding:0 8px;text-align:center;">
      <div style="background:#f5f9ff;border:1px solid #eef4ff;border-radius:10px;padding:14px 12px;min-width:110px;">
        <div style="font-size:10px;text-transform:uppercase;color:#9ca3af;margin-bottom:4px;">${(k.name||'').substring(0,16)}</div>
        <div style="font-size:20px;font-weight:700;color:#0f1e3d;margin-bottom:6px;">${k.formatted_value||k.value||'—'}</div>
        <span style="font-size:10px;padding:2px 8px;border-radius:20px;background:${badge.bg};color:${badge.color};">${badge.sym} ${k.trend||'stable'}</span>
      </div></td>`;
  }).join('') : '';

  const riskRows = sections.has('risks') ? risks.slice(0, riskLimit).map(r => {
    const sev = r.severity || 'medium';
    const cfg = { critical:['#fee2e2','#dc2626'], high:['#fee2e2','#ea580c'], medium:['#fef3c7','#d97706'], low:['#d1fae5','#16a34a'] }[sev] || ['#fef3c7','#d97706'];
    return `<tr><td style="padding:10px 14px;border-bottom:1px solid #f3f4f6;">
      <span style="font-size:10px;font-weight:700;padding:2px 8px;border-radius:20px;background:${cfg[0]};color:${cfg[1]};margin-right:8px;">${sev.toUpperCase()}</span>
      <span style="font-size:13px;color:#374151;">${r.risk||''}</span></td></tr>`;
  }).join('') : '';

  const recItems = sections.has('recs') ? recs.slice(0, recLimit).map((r, i) => `
    <tr><td style="padding:10px 14px;border-bottom:1px solid #f3f4f6;vertical-align:top;">
      <span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#1d6fe8;color:white;font-size:11px;font-weight:700;margin-right:10px;">${i+1}</span>
      <span style="font-size:13px;color:#374151;">${typeof r === 'string' ? r : JSON.stringify(r)}</span>
    </td></tr>`).join('') : '';

  const summaryBlock = sections.has('summary') && summary ? `<tr><td style="padding:0 0 20px;">
    <div style="background:#f0f6ff;border-left:3px solid #1d6fe8;padding:14px 18px;border-radius:0 8px 8px 0;">
      <div style="font-size:11px;color:#1d6fe8;font-weight:600;text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px;">AI Commentary</div>
      <div style="font-size:13px;color:#374151;line-height:1.6;">${summary.split('.').slice(0, length==='flash'?1:3).join('. ')}.</div>
    </div></td></tr>` : '';

  const dataTableBlock = sections.has('rawdata') && rawData.length > 0 && cols.length > 0 ? `<tr><td style="padding:0 0 20px;">
    <div style="font-size:13px;font-weight:600;color:#0f1e3d;margin-bottom:10px;">Raw Data</div>
    <div style="overflow-x:auto;"><table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:12px;">
      <tr>${cols.map(c=>`<th style="padding:8px 10px;background:#1d6fe8;color:white;text-align:left;">${c}</th>`).join('')}</tr>
      ${rawData.slice(0,10).map(r=>`<tr>${cols.map(c=>`<td style="padding:8px 10px;border-bottom:1px solid #f3f4f6;color:#374151;">${r[c]??''}</td>`).join('')}</tr>`).join('')}
    </table></div></td></tr>` : '';

  const trendChartBlock = (() => {
    if (!sections.has('chart')) return '';
    // KPI bar chart that works in email
    const barData = kpis.slice(0, 5);
    if (barData.length === 0) return '';
    const maxVal = Math.max(...barData.map(k => parseFloat(String(k.value||'0').replace(/[^0-9.-]/g,''))||1));
    const bars = barData.map(k => {
      const v = parseFloat(String(k.value||'0').replace(/[^0-9.-]/g,''))||0;
      const pct = Math.max(4, Math.round((v/maxVal)*100));
      const clr = k.trend==='up'?'#22c55e':k.trend==='down'?'#ef4444':'#1d6fe8';
      const sym = k.trend==='up'?'↑':k.trend==='down'?'↓':'→';
      return `<tr><td style="padding:4px 0;font-size:12px;color:#6b7280;white-space:nowrap;width:130px;vertical-align:middle">${(k.name||'').substring(0,18)}</td>
        <td style="padding:4px 8px;vertical-align:middle"><div style="background:#f3f4f6;border-radius:4px;height:20px;overflow:hidden"><div style="width:${pct}%;background:${clr};height:100%;border-radius:4px"></div></div></td>
        <td style="padding:4px 0;font-size:12px;font-weight:600;color:#0f1e3d;white-space:nowrap;width:90px;vertical-align:middle">${k.formatted_value||k.value||'—'} <span style="color:${clr}">${sym}</span></td></tr>`;
    }).join('');
    return `<tr><td style="padding:0 0 20px;">
      <div style="font-size:13px;font-weight:600;color:#0f1e3d;margin-bottom:10px;">Trend Chart</div>
      <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #eef4ff;border-radius:8px;padding:12px;background:#f5f9ff">${bars}</table>
    </td></tr>`;
  })();

  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/><title>FinGenie Digest — ${stmtType}</title></head>
<body style="margin:0;padding:0;background:#f5f8ff;font-family:'Segoe UI',system-ui,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f8ff;padding:32px 0;"><tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(108,61,232,.08);">
  <tr><td style="background:linear-gradient(135deg,#0f1e3d,#1d6fe8);padding:28px 36px;">
    <table width="100%" cellpadding="0" cellspacing="0"><tr>
      <td><span style="font-size:22px;font-weight:700;color:white;"><span style="color:#67c5f0;">Fin</span>Genie</span>
        <div style="font-size:11px;color:rgba(255,255,255,.55);margin-top:2px;">AI Financial Intelligence</div></td>
      <td align="right" style="font-size:12px;color:rgba(255,255,255,.5);">${now}</td>
    </tr></table></td></tr>
  <tr><td style="padding:28px 36px 0;">
    <span style="font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:#1d6fe8;background:#eef4ff;padding:3px 10px;border-radius:20px;">${stmtType} Analysis</span>
    <div style="font-size:20px;font-weight:700;color:#0f1e3d;margin-top:12px;line-height:1.35;">${summary?summary.split('.')[0]+'.':'Financial highlights from your latest report.'}</div>
  </td></tr>
  <tr><td style="padding:24px 36px;"><table width="100%" cellpadding="0" cellspacing="0">
    ${summaryBlock}
    ${sections.has('kpis') && kpis.length ? `<tr><td style="padding:0 0 20px;"><div style="font-size:13px;font-weight:600;color:#0f1e3d;margin-bottom:12px;">Key Metrics</div><table width="100%" cellpadding="0" cellspacing="0"><tr>${kpiCells}</tr></table></td></tr>` : ''}
    ${trendChartBlock}
    ${sections.has('risks') && risks.length ? `<tr><td style="padding:0 0 20px;"><div style="font-size:13px;font-weight:600;color:#0f1e3d;margin-bottom:10px;">Risk Alerts</div><table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #f3f4f6;border-radius:8px;overflow:hidden;">${riskRows}</table></td></tr>` : ''}
    ${sections.has('recs') && recs.length ? `<tr><td style="padding:0 0 20px;"><div style="font-size:13px;font-weight:600;color:#0f1e3d;margin-bottom:10px;">Top Recommendations</div><table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #f3f4f6;border-radius:8px;overflow:hidden;">${recItems}</table></td></tr>` : ''}
    ${dataTableBlock}
  </table></td></tr>
  <tr><td style="background:#f5f8ff;padding:20px 36px;border-top:1px solid #eef4ff;">
    <div style="font-size:11px;color:#9ca3af;">Generated by FinGenie AI · Powered by Groq Llama 3.3</div>
  </td></tr>
</table></td></tr></table></body></html>`;
}

// ─── PPTX builder ─────────────────────────────────────────────────────────────
async function generatePptx({ analysisResult, slides, theme }) {
  const PptxGenJS = await loadPptxGen();
  const pptx      = new PptxGenJS();
  const t = THEMES.find(t => t.id === theme) || THEMES[0];
  const bgClean  = t.bg.replace('#','');
  const fgClean  = t.fg.replace('#','');
  const accClean = t.accent.replace('#','');
  pptx.layout = 'LAYOUT_WIDE';

  const kpis  = analysisResult?.kpis  || [];
  const risks = analysisResult?.risks || [];
  const recs  = analysisResult?.recommendations || [];
  const rawData= analysisResult?.raw_data || [];
  const cols  = analysisResult?.column_headers || [];
  const stmtType = analysisResult?.statement_type || 'Financial Statement';
  const summary  = analysisResult?.summary || '';
  const now = new Date().toLocaleDateString('en-US', { month:'long', year:'numeric' });

  const addHeader = (sl, text) => {
    sl.addShape(pptx.ShapeType.rect, { x:0, y:0, w:'100%', h:1.0, fill:{ color: accClean } });
    sl.addText(text, { x:0.4, y:0.05, w:12, h:0.9, fontSize:22, bold:true, color: t.id==='color'?fgClean:'000000', fontFace:'Calibri' });
    sl.addText('FinGenie', { x:11.8, y:0.15, w:1.3, h:0.6, fontSize:10, color:fgClean, align:'right', fontFace:'Calibri' });
  };

  for (const slide of slides.filter(s => s.on)) {
    const sl = pptx.addSlide();
    sl.background = { color: bgClean };

    if (slide.id === 'cover') {
      sl.addShape(pptx.ShapeType.rect, { x:0, y:5.5, w:'100%', h:2.0, fill:{ color:accClean, transparency:80 } });
      sl.addText('FINGENIE AI · '+stmtType.toUpperCase(), { x:0.7, y:1.8, w:12, h:0.5, fontSize:11, color:fgClean, transparency:40, fontFace:'Calibri', charSpacing:3 });
      sl.addText(summary?.split('.')[0]||'Financial Analysis Report', { x:0.7, y:2.4, w:11, h:1.8, fontSize:32, bold:true, color:fgClean, fontFace:'Calibri', lineSpacingMultiple:1.2 });
      sl.addText(`Prepared with FinGenie AI · ${now}`, { x:0.7, y:6.2, w:12, h:0.6, fontSize:12, color:fgClean, transparency:40, fontFace:'Calibri' });
    }
    else if (slide.id === 'kpi') {
      addHeader(sl, 'Key Performance Indicators');
      const items = kpis.slice(0,6);
      const c3 = Math.min(items.length,3);
      items.forEach((k,i) => {
        const col=i%c3, row=Math.floor(i/c3), x=0.4+col*4.3, y=1.2+row*2.8;
        sl.addShape(pptx.ShapeType.rect, { x,y,w:4.0,h:2.4,fill:{color:t.id==='dark'?'2d2a5e':t.id==='light'?'f8f7ff':accClean,transparency:t.id==='color'?85:0},line:{color:accClean,width:1} });
        sl.addText((k.name||'').substring(0,20),{x:x+.15,y:y+.15,w:3.7,h:.35,fontSize:10,color:fgClean,transparency:35,fontFace:'Calibri'});
        sl.addText(String(k.formatted_value||k.value||'—'),{x:x+.15,y:y+.55,w:3.7,h:.8,fontSize:24,bold:true,color:fgClean,fontFace:'Calibri'});
        const tc=k.trend==='up'?'22c55e':k.trend==='down'?'ef4444':'a0a0a0';
        const tt=k.trend==='up'?'↑ Up':k.trend==='down'?'↓ Down':'→ Stable';
        sl.addText(tt,{x:x+.15,y:y+1.4,w:2,h:.35,fontSize:11,color:tc,fontFace:'Calibri'});
      });
    }
    else if (slide.id === 'trend') {
      addHeader(sl,'Revenue Trend');
      const rows=rawData.slice(0,8);
      if (rows.length>0&&cols.length>0) {
        const td=[cols.map(c=>({text:c,options:{bold:true,color:fgClean,fill:accClean}}))];
        rows.forEach(row=>td.push(cols.map(c=>({text:String(row[c]??''),options:{color:fgClean}}))));
        sl.addTable(td,{x:0.4,y:1.1,w:12.5,fontSize:10,fontFace:'Calibri',rowH:0.4,border:{type:'solid',color:accClean,pt:0.5}});
      }
    }
    else if (slide.id === 'risk') {
      addHeader(sl,'Risk Assessment Matrix');
      const sc={critical:'dc2626',high:'ea580c',medium:'d97706',low:'16a34a'};
      risks.slice(0,6).forEach((r,i) => {
        const sev=r.severity||'medium', c=sc[sev]||sc.medium, y=1.2+i*1.0;
        sl.addShape(pptx.ShapeType.rect,{x:0.4,y,w:1.2,h:0.7,fill:{color:c},line:{color:c,width:0}});
        sl.addText(sev.toUpperCase(),{x:0.4,y:y+.1,w:1.2,h:.5,fontSize:10,bold:true,color:'ffffff',align:'center',fontFace:'Calibri'});
        sl.addText(r.risk||'',{x:1.8,y,w:6.5,h:.7,fontSize:12,color:fgClean,fontFace:'Calibri',valign:'middle',wrap:true});
        if (r.implication) sl.addText(r.implication,{x:8.5,y,w:4.8,h:.7,fontSize:10,color:fgClean,transparency:35,fontFace:'Calibri',valign:'middle',wrap:true});
      });
    }
    else if (slide.id === 'recs') {
      addHeader(sl,'Strategic Recommendations');
      recs.slice(0,5).forEach((r,i) => {
        const y=1.2+i*1.1;
        sl.addShape(pptx.ShapeType.ellipse,{x:0.4,y,w:.55,h:.55,fill:{color:accClean}});
        sl.addText(String(i+1),{x:0.4,y:y+.05,w:.55,h:.45,fontSize:14,bold:true,color:fgClean,align:'center',fontFace:'Calibri'});
        const text=typeof r==='string'?r:JSON.stringify(r);
        sl.addText(text,{x:1.2,y,w:11.7,h:.9,fontSize:13,color:fgClean,fontFace:'Calibri',valign:'middle',wrap:true});
      });
    }
    else if (slide.id === 'appendix') {
      addHeader(sl,'Data Appendix');
      const rows=rawData.slice(0,10);
      if (rows.length>0&&cols.length>0) {
        const td=[cols.map(c=>({text:c,options:{bold:true,color:fgClean,fill:accClean}}))];
        rows.forEach(row=>td.push(cols.map(c=>({text:String(row[c]??''),options:{color:fgClean}}))));
        sl.addTable(td,{x:0.4,y:1.7,w:12.5,fontSize:9,fontFace:'Calibri',rowH:.36,border:{type:'solid',color:accClean,pt:.5}});
      }
    }
  }
  return pptx;
}

// ═══════════════════════════════════════════════════════════════════════════════
// SLIDE PREVIEWS (compact)
// ═══════════════════════════════════════════════════════════════════════════════
function CoverSlidePreview({ analysisResult, themeDef }) {
  const t = themeDef || THEMES[0];
  const stmtType = analysisResult?.statement_type || 'Financial Statement';
  const headline = analysisResult?.summary?.split('.')[0] || 'Financial Analysis Report';
  const summary  = analysisResult?.summary || '';
  const now = new Date().toLocaleDateString('en-US', { month:'long', year:'numeric' });
  return (
    <div style={{ background: t.bg, borderRadius:8, padding:20, color: t.fg, flex:1, display:'flex', flexDirection:'column', justifyContent:'space-between', minHeight:140 }}>
      <div>
        <div style={{ fontSize:9, letterSpacing:'1.5px', textTransform:'uppercase', color: t.accent, marginBottom:6 }}>FinGenie AI · {stmtType}</div>
        <div style={{ fontFamily:'Georgia,serif', fontSize:14, lineHeight:1.3, color: t.fg, marginBottom:8, overflow:'hidden', display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical' }}>{headline}</div>
        <div style={{ width:32, height:2, background:t.accent, borderRadius:1, marginBottom:8 }}/>
        {summary && (
          <div style={{ fontSize:9, color:t.fg, opacity:.55, lineHeight:1.5, overflow:'hidden', display:'-webkit-box', WebkitLineClamp:3, WebkitBoxOrient:'vertical' }}>{summary}</div>
        )}
      </div>
      <div style={{ display:'flex', justifyContent:'space-between', marginTop:10 }}>
        <div style={{ fontSize:9, color: t.fg, opacity:.4 }}>Prepared with FinGenie AI</div>
        <div style={{ fontSize:9, color: t.fg, opacity:.4 }}>{now}</div>
      </div>
    </div>
  );
}
function KPISlidePreview({ analysisResult, themeDef }) {
  const t = themeDef || THEMES[0];
  const kpis = analysisResult?.kpis?.slice(0,4) || [];
  const items = kpis.length > 0 ? kpis.map(k => ({ label:k.name||'—', value:k.formatted_value||k.value||'—', pos:k.trend!=='down' }))
    : [{ label:'Revenue', value:'—', pos:true },{ label:'Gross Margin', value:'—', pos:true },{ label:'Net Income', value:'—', pos:true },{ label:'Current Ratio', value:'—', pos:true }];
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', gap:8, background: t.bg, borderRadius:8, padding:14 }}>
      <div style={{ fontSize:12, fontWeight:600, color: t.accent, paddingBottom:6, borderBottom:`0.5px solid ${t.accent}44` }}>Key Performance Indicators</div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:6, flex:1 }}>
        {items.map((item,i) => (
          <div key={i} style={{ background:`${t.fg}0f`, borderRadius:6, padding:'10px 12px', border:`0.5px solid ${t.fg}22` }}>
            <div style={{ fontSize:9, color: t.fg, opacity:.5, textTransform:'uppercase', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{item.label}</div>
            <div style={{ fontSize:15, fontWeight:600, color: t.fg, margin:'2px 0' }}>{item.value}</div>
            <span style={{ fontSize:9, padding:'1px 6px', borderRadius:10, background:item.pos?'#d1fae5':'#fee2e2', color:item.pos?'#065f46':'#991b1b' }}>{item.pos?'↑':'↓'}</span>
          </div>
        ))}
      </div>
    </div>
  );
}



function TrendSlidePreview({ analysisResult, themeDef }) {
  const t = themeDef || THEMES[0];
  const kpis = analysisResult?.kpis?.slice(0,5) || [];
  const items = kpis.length > 0 ? kpis : [
    { name:'Revenue', value:'0', formatted_value:'—', trend:'up' },
    { name:'Gross Profit', value:'0', formatted_value:'—', trend:'up' },
    { name:'Net Income', value:'0', formatted_value:'—', trend:'neutral' },
  ];
  const maxVal = Math.max(...items.map(k=>parseFloat(String(k.value||'0').replace(/[^0-9.-]/g,''))||1),1);
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', gap:8, background: t.bg, borderRadius:8, padding:14 }}>
      <div style={{ fontSize:12, fontWeight:600, color: t.accent, paddingBottom:6, borderBottom:`0.5px solid ${t.accent}44` }}>Trend Chart</div>
      <div style={{ display:'flex', flexDirection:'column', gap:6, flex:1 }}>
        {items.map((k,i) => {
          const v = parseFloat(String(k.value||'0').replace(/[^0-9.-]/g,''))||0;
          const pct = Math.max(6, Math.round((v/maxVal)*100));
          const clr = k.trend==='up'?'#22c55e':k.trend==='down'?'#ef4444':t.accent;
          return (
            <div key={i} style={{ display:'flex', alignItems:'center', gap:6 }}>
              <div style={{ width:70, fontSize:9, color:t.fg, opacity:.5, textAlign:'right', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap', flexShrink:0 }}>{(k.name||'').substring(0,12)}</div>
              <div style={{ flex:1, background:`${t.fg}15`, borderRadius:3, height:14, overflow:'hidden' }}>
                <div style={{ width:`${pct}%`, background:clr, height:'100%', borderRadius:3 }}/>
              </div>
              <div style={{ width:40, fontSize:9, fontWeight:600, color:t.fg, flexShrink:0 }}>{k.formatted_value||k.value||'—'}</div>
              <span style={{ fontSize:9, color:clr, width:10 }}>{k.trend==='up'?'↑':k.trend==='down'?'↓':'→'}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function RiskSlidePreview({ analysisResult, themeDef }) {
  const t = themeDef || THEMES[0];
  const risks = analysisResult?.risks?.slice(0,4) || [];
  const items = risks.length > 0 ? risks : [
    { severity:'high', risk:'Market volatility risk' },
    { severity:'medium', risk:'Liquidity concerns' },
    { severity:'low', risk:'Regulatory changes' },
  ];
  const sevClr = { critical:'#ef4444', high:'#f97316', medium:'#f59e0b', low:'#22c55e' };
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', gap:8, background: t.bg, borderRadius:8, padding:14 }}>
      <div style={{ fontSize:12, fontWeight:600, color: t.accent, paddingBottom:6, borderBottom:`0.5px solid ${t.accent}44` }}>Risk Assessment</div>
      <div style={{ display:'flex', flexDirection:'column', gap:5, flex:1 }}>
        {items.map((r,i) => {
          const sev = r.severity||'medium';
          const clr = sevClr[sev]||sevClr.medium;
          return (
            <div key={i} style={{ display:'flex', alignItems:'center', gap:8, padding:'6px 8px', borderRadius:5, background:`${clr}18`, borderLeft:`2.5px solid ${clr}` }}>
              <span style={{ fontSize:8, fontWeight:700, padding:'1px 5px', borderRadius:10, background:clr, color:'#fff', flexShrink:0 }}>{sev.toUpperCase()}</span>
              <span style={{ fontSize:10, color:t.fg, opacity:.8, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{r.risk||''}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function RecsSlidePreview({ analysisResult, themeDef }) {
  const t = themeDef || THEMES[0];
  const recs = analysisResult?.recommendations?.slice(0,3) || [];
  const items = recs.length > 0 ? recs : ['Review cost structure', 'Improve cash flow management', 'Explore growth opportunities'];
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', gap:8, background: t.bg, borderRadius:8, padding:14 }}>
      <div style={{ fontSize:12, fontWeight:600, color: t.accent, paddingBottom:6, borderBottom:`0.5px solid ${t.accent}44` }}>Strategic Recommendations</div>
      <div style={{ display:'flex', flexDirection:'column', gap:6, flex:1 }}>
        {items.map((r,i) => (
          <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:8 }}>
            <div style={{ width:18, height:18, borderRadius:'50%', background:t.accent, display:'flex', alignItems:'center', justifyContent:'center', fontSize:9, fontWeight:700, color:'#fff', flexShrink:0 }}>{i+1}</div>
            <span style={{ fontSize:10, color:t.fg, opacity:.8, lineHeight:1.4 }}>{(typeof r==='string'?r:JSON.stringify(r)).substring(0,70)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
// ═══════════════════════════════════════════════════════════════════════════════
function PDFPanel({ analysisResult, sections }) {
  const [color,   setColor]   = useState('#0f1e3d');
  const [company, setCompany] = useState('');
  const [author,  setAuthor]  = useState('');
  const [title,   setTitle]   = useState('');
  const [busy,    setBusy]    = useState(false);
  const [msg,     setMsg]     = useState('');

  const displayTitle = title || 'Q4 Financial Analysis';

  const generate = (asPDF) => {
    setBusy(true); setMsg('');
    setTimeout(() => {
      try {
        const html = buildPDFReport({ analysisResult, sections, company, author, title, color });
        const safeTitle = (title || 'financial-report').toLowerCase().replace(/\s+/g,'-');
        if (asPDF) {
          printViaIframe(html);
          setMsg('Print dialog opened — choose "Save as PDF".');
        } else {
          dlHTML(html, `${safeTitle}.html`);
          setMsg('HTML report downloaded!');
        }
      } catch(e) { setMsg('Error: '+e.message); }
      setBusy(false);
      setTimeout(() => setMsg(''), 6000);
    }, 300);
  };

  return (
    <div className="es-panel">
      {/* Preview + Settings side by side */}
      <div className="es-two-col">
        {/* Left — live mini preview */}
        <div>
          <div className="section-label" style={{ marginBottom:8 }}>Live preview</div>
          <div className="es-pdf-preview" style={{ background:`linear-gradient(135deg,${color},${color}bb)` }}>
            <div style={{ fontSize:9, letterSpacing:'1.5px', textTransform:'uppercase', opacity:.6, marginBottom:6 }}>
              FINGENIE ANALYSIS · {(analysisResult?.statement_type||'REPORT').toUpperCase()}
            </div>
            <div style={{ fontFamily:'Georgia,serif', fontSize:16, lineHeight:1.2, color:'white', marginBottom:4 }}>{displayTitle}</div>
            <div style={{ fontSize:11, opacity:.65 }}>{author||'Finance Team'} · {company||'Your Company'}</div>
            <div className="es-preview-chips">
              {[...sections].map(id => {
                const s = KPI_SECTIONS.find(s => s.key===id);
                return s ? <span key={id} className="es-chip">{s.label}</span> : null;
              })}
            </div>
          </div>
        </div>

        {/* Right — branding controls */}
        <div className="es-settings">
          <div className="section-label" style={{ marginBottom:10 }}>Branding</div>
          <div className="es-field-row">
            <div className="es-field">
              <label className="es-label">Company</label>
              <input className="field-input" type="text" placeholder="Acme Corp" value={company} onChange={e=>setCompany(e.target.value)}/>
            </div>
            <div className="es-field">
              <label className="es-label">Prepared by</label>
              <input className="field-input" type="text" placeholder="Finance Team" value={author} onChange={e=>setAuthor(e.target.value)}/>
            </div>
          </div>
          <div className="es-field" style={{ marginBottom:14 }}>
            <label className="es-label">Report title</label>
            <input className="field-input" type="text" placeholder="Q4 2024 Financial Analysis" value={title} onChange={e=>setTitle(e.target.value)}/>
          </div>
          <div className="section-label" style={{ marginBottom:8 }}>Cover accent color</div>
          <div className="es-color-row">
            {COLORS.map(c => (
              <button key={c} className={`color-swatch ${color===c?'selected':''}`} style={{ background:c }} onClick={()=>setColor(c)} aria-label={`Color ${c}`}/>
            ))}
          </div>
        </div>
      </div>

      {/* Download actions */}
      <div className="es-actions">
        <button className="rc-btn rc-btn-export" onClick={()=>generate(true)} disabled={busy}>
          {busy ? <><span className="rc-spinner"/>Building…</> : 'Save as PDF'}
        </button>
      </div>
      {msg && <div className="success-flash">{msg}</div>}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// DECK PANEL
// ═══════════════════════════════════════════════════════════════════════════════
// Map shared KPI sections → slide definitions for PPTX generation
function sectionsToSlides(sections) {
  return [
    { id: 'cover',    num: 1, name: 'Cover Slide',     on: true                       },
    { id: 'kpi',      num: 2, name: 'KPI Snapshot',    on: sections.has('kpis')       },
    { id: 'trend',    num: 3, name: 'Revenue Trend',   on: sections.has('chart')      },
    { id: 'risk',     num: 4, name: 'Risk Matrix',     on: sections.has('risks')      },
    { id: 'recs',     num: 5, name: 'Recommendations', on: sections.has('recs')       },
    { id: 'appendix', num: 6, name: 'Data Appendix',   on: sections.has('rawdata')    },
  ];
}

function DeckPanel({ analysisResult, sections }) {
  const [active,   setActive]  = useState('cover');
  const [theme,    setTheme]   = useState('dark');
  const [busy,     setBusy]    = useState(false);
  const [msg,      setMsg]     = useState({ type:null, text:'' });

  const slides     = sectionsToSlides(sections);
  const themeDef   = THEMES.find(t => t.id === theme) || THEMES[0];
  const activeData = slides.find(s => s.id === active);

  const doExport = async (fmt) => {
    setBusy(true); setMsg({ type:null, text:'' });
    try {
      if (fmt === 'pptx') {
        const pptx = await generatePptx({ analysisResult, slides, theme });
        await pptx.writeFile({ fileName:'fingenie-analyst-deck.pptx' });
        setMsg({ type:'ok', text:'PPTX downloaded! Open in PowerPoint or Google Slides.' });
      } else {
        const t = themeDef;
        const activeSlides = slides.filter(s=>s.on);
        const kpis   = analysisResult?.kpis||[];
        const risks  = analysisResult?.risks||[];
        const recs   = analysisResult?.recommendations||[];
        const rawData= analysisResult?.raw_data||[];
        const cols   = analysisResult?.column_headers||[];
        const stmtType = analysisResult?.statement_type||'Financial Statement';
        const summary  = analysisResult?.summary||'';
        const now = new Date().toLocaleDateString('en-US',{month:'long',year:'numeric'});

        const slideContents = activeSlides.map((slide,idx) => {
          let content = '';
          if (slide.id==='cover') {
            content = `<div class="slide-inner cover-slide"><div class="cover-eyebrow">FINGENIE AI · ${stmtType.toUpperCase()}</div><h1 class="cover-title">${summary.split('.')[0]||'Financial Analysis'}</h1><div class="cover-foot">FinGenie AI · ${now}</div></div>`;
          } else if (slide.id==='kpi') {
            const cards=kpis.slice(0,6).map(k=>`<div class="kpi-box"><div class="kpi-nm">${k.name||''}</div><div class="kpi-vl">${k.formatted_value||k.value||'—'}</div><span class="kpi-tr ${k.trend}">${k.trend==='up'?'↑':k.trend==='down'?'↓':'→'} ${k.trend||'stable'}</span></div>`).join('');
            content=`<div class="slide-inner"><h2>${slide.name}</h2><div class="kpi-row">${cards||'<p>No KPI data.</p>'}</div></div>`;
          } else if (slide.id==='trend') {
            // Trend chart slide — SVG bar chart from KPIs or raw data
            const chartKpis = kpis.slice(0,6);
            let chartContent = '';
            if (chartKpis.length > 0) {
              const maxV = Math.max(...chartKpis.map(k=>parseFloat(String(k.value||'0').replace(/[^0-9.-]/g,''))||1));
              const bars = chartKpis.map((k,i) => {
                const v = parseFloat(String(k.value||'0').replace(/[^0-9.-]/g,''))||0;
                const pct = Math.max(4,Math.round((v/maxV)*100));
                const clr = k.trend==='up'?'#22c55e':k.trend==='down'?'#ef4444':t.accent;
                return `<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px"><div style="width:120px;font-size:11px;opacity:.7;text-align:right;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${k.name||''}</div><div style="flex:1;background:rgba(255,255,255,.1);border-radius:4px;height:24px;overflow:hidden"><div style="width:${pct}%;background:${clr};height:100%;border-radius:4px;display:flex;align-items:center;padding-left:8px"><span style="font-size:11px;font-weight:600;color:#fff">${k.formatted_value||k.value||''}</span></div></div><span style="font-size:12px;width:16px;color:${clr}">${k.trend==='up'?'↑':k.trend==='down'?'↓':'→'}</span></div>`;
              }).join('');
              chartContent = `<div style="width:100%">${bars}</div>`;
            } else {
              chartContent = '<p style="opacity:.4;font-size:14px">No data available for chart.</p>';
            }
            content=`<div class="slide-inner"><h2>${slide.name}</h2>${chartContent}</div>`;
          } else if (slide.id==='risk') {
            const items=risks.slice(0,6).map(r=>`<div class="risk-row risk-${r.severity||'medium'}"><span class="sev-badge">${(r.severity||'medium').toUpperCase()}</span><span>${r.risk||''}</span></div>`).join('');
            content=`<div class="slide-inner"><h2>${slide.name}</h2><div class="risks-list">${items||'<p>No risks.</p>'}</div></div>`;
          } else if (slide.id==='recs') {
            const items=recs.slice(0,5).map((r,i)=>`<div class="rec-row"><div class="rec-n">${i+1}</div><div>${typeof r==='string'?r:JSON.stringify(r)}</div></div>`).join('');
            content=`<div class="slide-inner"><h2>${slide.name}</h2><div class="recs-list">${items||'<p>No recommendations.</p>'}</div></div>`;
          } else {
            const rows=rawData.slice(0,10);
            const thead=cols.map(c=>`<th>${c}</th>`).join('');
            const tbody=rows.map(r=>`<tr>${cols.map(c=>`<td>${r[c]??''}</td>`).join('')}</tr>`).join('');
            content=`<div class="slide-inner"><h2>${slide.name}</h2><div class="tbl-wrap"><table><thead><tr>${thead}</tr></thead><tbody>${tbody}</tbody></table></div></div>`;
          }
          return `<div class="slide" id="slide-${idx}">${content}</div>`;
        }).join('');

        const navDots = activeSlides.map((_,i)=>`<div class="dot ${i===0?'active':''}" onclick="goTo(${i})"></div>`).join('');
        const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/><title>FinGenie Analyst Deck</title>
<style>*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}body{font-family:'Segoe UI',system-ui,sans-serif;background:#0a0a1a;color:white;height:100vh;overflow:hidden;display:flex;flex-direction:column}.slides-container{flex:1;position:relative;overflow:hidden}.slide{position:absolute;inset:0;background:${t.bg};color:${t.fg};display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .4s;pointer-events:none}.slide.active{opacity:1;pointer-events:auto}.slide-inner{width:90%;max-width:960px}.cover-slide{text-align:center}.cover-eyebrow{font-size:12px;letter-spacing:2px;text-transform:uppercase;opacity:.5;margin-bottom:16px}.cover-title{font-size:36px;font-family:Georgia,serif;line-height:1.2;margin-bottom:12px}.cover-foot{font-size:13px;opacity:.4}h2{font-size:24px;font-weight:600;margin-bottom:20px;color:${t.accent}}.kpi-row{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.kpi-box{background:rgba(255,255,255,.07);border-radius:12px;padding:20px 16px;border:1px solid rgba(255,255,255,.1)}.kpi-nm{font-size:11px;opacity:.5;text-transform:uppercase;margin-bottom:4px}.kpi-vl{font-size:24px;font-weight:700;margin-bottom:6px}.kpi-tr{font-size:11px;padding:2px 8px;border-radius:20px;background:rgba(255,255,255,.1)}.tbl-wrap{overflow:auto;max-height:360px}table{width:100%;border-collapse:collapse;font-size:13px}th{background:${t.accent};color:#000;padding:8px 12px;text-align:left}td{padding:8px 12px;border-bottom:1px solid rgba(255,255,255,.08)}.risks-list{display:flex;flex-direction:column;gap:10px}.risk-row{display:flex;align-items:center;gap:12px;padding:12px 16px;border-radius:8px;font-size:14px}.risk-critical,.risk-high{background:#fee2e218;border-left:3px solid #ef4444}.risk-medium{background:#fef3c718;border-left:3px solid #f59e0b}.risk-low{background:#d1fae518;border-left:3px solid #22c55e}.sev-badge{font-size:10px;font-weight:700;padding:2px 8px;border-radius:20px;background:rgba(255,255,255,.1)}.recs-list{display:flex;flex-direction:column;gap:14px}.rec-row{display:flex;align-items:flex-start;gap:14px;font-size:14px;line-height:1.5}.rec-n{width:28px;height:28px;border-radius:50%;background:${t.accent};display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:600;flex-shrink:0}.navbar{display:flex;align-items:center;justify-content:center;gap:12px;padding:12px;background:rgba(0,0,0,.3)}.dot{width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,.25);cursor:pointer;transition:background .2s}.dot.active{background:${t.accent}}.nav-btn{background:none;border:1px solid rgba(255,255,255,.2);color:white;padding:6px 14px;border-radius:6px;cursor:pointer;font-size:13px}.slide-counter{font-size:12px;opacity:.5;min-width:60px;text-align:center}</style></head>
<body><div class="slides-container" id="slides">${slideContents}</div>
<div class="navbar"><button class="nav-btn" onclick="prev()">← Prev</button>${navDots}<button class="nav-btn" onclick="next()">Next →</button><span class="slide-counter" id="counter">1 / ${activeSlides.length}</span></div>
<script>let cur=0;const slides=document.querySelectorAll('.slide'),dots=document.querySelectorAll('.dot'),counter=document.getElementById('counter');function goTo(n){slides[cur].classList.remove('active');dots[cur].classList.remove('active');cur=(n+slides.length)%slides.length;slides[cur].classList.add('active');dots[cur].classList.add('active');counter.textContent=(cur+1)+' / '+slides.length;}function next(){goTo(cur+1);}function prev(){goTo(cur-1);}document.addEventListener('keydown',e=>{if(e.key==='ArrowRight')next();if(e.key==='ArrowLeft')prev();});goTo(0);<\/script></body></html>`;
        dlHTML(html,'fingenie-slides.html');
        setMsg({ type:'ok', text:'Slideshow downloaded! Open in browser — use arrow keys to navigate.' });
      }
    } catch(e) { setMsg({ type:'err', text:e.message }); }
    setBusy(false);
    setTimeout(()=>setMsg({type:null,text:''}),7000);
  };

  // Pick the right preview component based on active slide
  const previewMap = {
    cover:    CoverSlidePreview,
    kpi:      KPISlidePreview,
    trend:    TrendSlidePreview,
    risk:     RiskSlidePreview,
    recs:     RecsSlidePreview,
  };
  const PreviewComp = previewMap[active] || null;

  return (
    <div className="es-panel">
      {/* Theme selector */}
      <div className="slide-theme-row" style={{ marginBottom:16 }}>
        <span className="st-label-sm">Theme:</span>
        {THEMES.map(t => (
          <button key={t.id} className={`theme-pill ${theme===t.id?'selected':''}`} onClick={()=>setTheme(t.id)}>{t.label}</button>
        ))}
      </div>

      {/* Slide preview — full width, theme-aware */}
      <div className="section-label" style={{ marginBottom:8 }}>Preview</div>
      <div className="slide-preview-panel">
        <div className="sp-topbar">
          <div className="sp-dot" style={{ background:'#f87171' }}/>
          <div className="sp-dot" style={{ background:'#fbbf24' }}/>
          <div className="sp-dot" style={{ background:'#34d399' }}/>
          <div className="sp-title" style={{ color:'var(--rc-ink3)', fontSize:12 }}>
            {slides.filter(s=>s.on).map(s=>s.name).join(' · ')}
          </div>
        </div>
        <div className="slide-canvas" style={{ background: themeDef.bg }}>
          {PreviewComp
            ? <PreviewComp analysisResult={analysisResult} themeDef={themeDef}/>
            : <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', background: themeDef.bg, borderRadius:6, padding:16, minHeight:140 }}>
                <div style={{ fontSize:11, fontWeight:600, color: themeDef.accent, letterSpacing:'1px', textTransform:'uppercase', marginBottom:6 }}>{activeData?.name || active}</div>
                <div style={{ display:'flex', flexWrap:'wrap', gap:6, justifyContent:'center' }}>
                  {(analysisResult?.column_headers||[]).slice(0,5).map((c,i)=>(
                    <span key={i} style={{ fontSize:9, padding:'2px 8px', borderRadius:10, background:`${themeDef.accent}22`, color:themeDef.accent }}>{c}</span>
                  ))}
                </div>
              </div>
          }
        </div>
      </div>

      {/* Slide list: read-only summary of what's included (driven by shared toggles) */}
      <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginTop:4 }}>
        {slides.map(s => (
          <div
            key={s.id}
            onClick={() => s.on && setActive(s.id)}
            style={{
              padding:'4px 12px', borderRadius:20, fontSize:11, fontWeight:500, cursor: s.on ? 'pointer' : 'default',
              background: s.on ? (active===s.id ? themeDef.accent : `${themeDef.accent}22`) : 'var(--rc-surface)',
              color: s.on ? (active===s.id ? '#fff' : themeDef.accent) : 'var(--rc-ink3)',
              border: `1px solid ${s.on ? themeDef.accent+'44' : 'var(--rc-border)'}`,
              opacity: s.on ? 1 : 0.45,
            }}
          >
            {s.num}. {s.name}
          </div>
        ))}
      </div>

      <div className="deck-actions">
        <button className="rc-btn rc-btn-export" onClick={()=>doExport('pptx')} disabled={busy}>
          {busy?<><span className="rc-spinner"/>Generating…</>:'Export as PPTX'}
        </button>
        <button className="rc-btn rc-btn-ghost" onClick={()=>doExport('web-slides')} disabled={busy}>
          Web Slideshow
        </button>
      </div>
      {msg.text && <div className={`success-flash ${msg.type==='err'?'error-flash':''}`}>{msg.text}</div>}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// EMAIL PANEL
// ═══════════════════════════════════════════════════════════════════════════════
function EmailPanel({ analysisResult, sections }) {
  const [length,   setLength]   = useState('flash');
  const [busy,     setBusy]     = useState(false);
  const [msg,      setMsg]      = useState({ type:null, text:'' });

  const stmtType = analysisResult?.statement_type || 'Financial Statement';
  const summary  = analysisResult?.summary || '';
  const kpis     = analysisResult?.kpis?.slice(0,3) || [];
  const risks    = analysisResult?.risks?.slice(0,2) || [];
  const recs     = analysisResult?.recommendations?.slice(0,2) || [];

  const handleGenerate = async () => {
    setBusy(true); setMsg({ type:null, text:'' });
    try {
      const allKpis  = analysisResult?.kpis || [];
      const allRisks = analysisResult?.risks || [];
      const allRecs  = analysisResult?.recommendations || [];
      const allRaw   = analysisResult?.raw_data || [];
      const allCols  = analysisResult?.column_headers || [];
      const lines = [
        `FINGENIE DIGEST — ${stmtType}`,
        '='.repeat(44),
        '',
      ];
      if (sections.has('summary') && summary) {
        lines.push('AI SUMMARY', '-'.repeat(20));
        lines.push(summary);
        lines.push('');
      }
      if (sections.has('kpis') && allKpis.length) {
        lines.push('KEY METRICS', '-'.repeat(20));
        allKpis.forEach(k => lines.push(`  • ${k.name}: ${k.formatted_value||k.value||'—'} ${k.trend==='up'?'↑':k.trend==='down'?'↓':'→'}`));
        lines.push('');
      }
      if (sections.has('chart') && allKpis.length) {
        lines.push('TREND OVERVIEW', '-'.repeat(20));
        const maxV = Math.max(...allKpis.slice(0,5).map(k=>parseFloat(String(k.value||'0').replace(/[^0-9.-]/g,''))||1),1);
        allKpis.slice(0,5).forEach(k => {
          const v = parseFloat(String(k.value||'0').replace(/[^0-9.-]/g,''))||0;
          const bars = Math.round((v/maxV)*20);
          lines.push(`  ${(k.name||'').padEnd(20)} ${'█'.repeat(bars)}${'░'.repeat(20-bars)} ${k.formatted_value||k.value||'—'}`);
        });
        lines.push('');
      }
      if (sections.has('risks') && allRisks.length) {
        lines.push('RISK ALERTS', '-'.repeat(20));
        allRisks.forEach(r => lines.push(`  [${(r.severity||'medium').toUpperCase()}] ${r.risk||''}`));
        lines.push('');
      }
      if (sections.has('recs') && allRecs.length) {
        lines.push('RECOMMENDATIONS', '-'.repeat(20));
        allRecs.forEach((r,i) => lines.push(`  ${i+1}. ${typeof r==='string'?r:JSON.stringify(r)}`));
        lines.push('');
      }
      if (sections.has('rawdata') && allRaw.length && allCols.length) {
        lines.push('RAW DATA (first 10 rows)', '-'.repeat(20));
        lines.push(allCols.join('\t'));
        allRaw.slice(0,10).forEach(row => lines.push(allCols.map(c=>row[c]??'').join('\t')));
        lines.push('');
      }
      lines.push('--', 'Generated by FinGenie AI · Powered by Groq Llama 3.3');
      const plain = lines.join('\n');
      window.location.href = `mailto:?subject=${encodeURIComponent(`FinGenie Digest — ${stmtType}`)}&body=${encodeURIComponent(plain)}`;
      setMsg({ type:'ok', text:'Mail client opened.' });
    } catch(e) { setMsg({ type:'err', text:e.message }); }
    setBusy(false);
    setTimeout(()=>setMsg({type:null,text:''}),8000);
  };

  return (
    <div className="es-panel">
      <div className="es-two-col">
        {/* Left: controls */}
        <div className="digest-options">
          <button className="rc-btn rc-btn-export" style={{ width:'100%', marginTop:8 }} onClick={handleGenerate} disabled={busy}>
            {busy ? <><span className="rc-spinner"/>Building digest…</> : 'Open in Mail Client'}
          </button>
          {msg.text && <div className={`success-flash${msg.type==='err'?' error-flash':''}`}>{msg.text}</div>}
        </div>

        {/* Right: live preview */}
        <div>
          <div className="section-label" style={{ marginBottom:8 }}>Email preview</div>
          <div className="email-preview">
            <div className="ep-topbar">
              <div className="ep-field"><span className="ep-label">To:</span><span className="ep-val">Board Members, Finance Committee</span></div>
              <div className="ep-field"><span className="ep-label">Sub:</span><span className="ep-val">FinGenie Digest — {stmtType} Analysis</span></div>
            </div>
            <div className="ep-body">
              <div className="email-card">
                <div className="ec-header">
                  <div className="ec-logo"><span style={{ color:'var(--rc-accent)' }}>Fin</span>Genie</div>
                  <div className="ec-date">{new Date().toLocaleDateString('en-US',{month:'long',year:'numeric'})}</div>
                </div>
                <div className="ec-hero">
                  <div className="ec-tag">{stmtType} Analysis</div>
                  <div className="ec-headline">{summary ? summary.split('.')[0]+'.' : 'Key financial metrics reviewed — see highlights below.'}</div>
                </div>
                {sections.has('summary') && summary && (
                  <div style={{ margin:'8px 12px', padding:'10px 12px', background:'#f0f6ff', borderLeft:'3px solid var(--rc-accent)', borderRadius:'0 6px 6px 0' }}>
                    <div style={{ fontSize:9, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.5px', color:'var(--rc-accent)', marginBottom:4 }}>AI Commentary</div>
                    <div style={{ fontSize:11, color:'#374151', lineHeight:1.5 }}>{summary.split('.')[0]}.</div>
                  </div>
                )}
                {sections.has('chart') && (
                  <div style={{ margin:'8px 12px', padding:'10px 12px', background:'#f5f9ff', border:'1px solid #eef4ff', borderRadius:6 }}>
                    <div style={{ fontSize:9, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.5px', color:'var(--rc-accent)', marginBottom:6 }}>Trend Chart</div>
                    {(() => {
                      const chartItems = kpis.length>0 ? kpis : [{name:'Revenue',value:'0',formatted_value:'—',trend:'up'},{name:'Margin',value:'0',formatted_value:'—',trend:'neutral'}];
                      const maxVal = Math.max(...chartItems.map(k => Math.abs(parseFloat(String(k.value||'0').replace(/[^0-9.-]/g,''))||0)), 1);
                      return chartItems.map((k,i) => {
                        const v = Math.abs(parseFloat(String(k.value||'0').replace(/[^0-9.-]/g,''))||0);
                        const pct = Math.max(4, Math.round((v/maxVal)*100));
                        const clr = k.trend==='up'?'#22c55e':k.trend==='down'?'#ef4444':'var(--rc-accent)';
                        return <div key={i} style={{ display:'flex', alignItems:'center', gap:6, marginBottom:4 }}>
                          <div style={{ width:55, fontSize:9, color:'#6b7280', textAlign:'right', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap', flexShrink:0 }}>{(k.name||'').substring(0,10)}</div>
                          <div style={{ flex:1, background:'#e5e7eb', borderRadius:3, height:12, overflow:'hidden' }}>
                            <div style={{ width:`${pct}%`, background:clr, height:'100%', borderRadius:3 }}/>
                          </div>
                          <span style={{ fontSize:9, color:clr, fontWeight:600 }}>{k.formatted_value||'—'}</span>
                        </div>;
                      });
                    })()}
                  </div>
                )}
                {sections.has('kpis') && (
                  <div className="ec-kpis">
                    {kpis.length>0 ? kpis.map((k,i) => (
                      <div key={i} className="ek-item">
                        <div className="ek-label">{k.name?.substring(0,12)}</div>
                        <div className="ek-val">{k.formatted_value}</div>
                        <span className={`ek-chg ${k.trend==='up'?'ek-pos':k.trend==='down'?'ek-neg':''}`}>{k.trend==='up'?'↑':k.trend==='down'?'↓':'→'}</span>
                      </div>
                    )) : (
                      <>
                        <div className="ek-item"><div className="ek-label">Revenue</div><div className="ek-val">—</div></div>
                        <div className="ek-item"><div className="ek-label">Margin</div><div className="ek-val">—</div></div>
                      </>
                    )}
                  </div>
                )}
                {sections.has('risks') && (
                  <div className="ec-risks">
                    <div className="er-title">Risk Alerts</div>
                    {risks.length>0 ? risks.map((r,i) => {
                      const sev=r.severity||'medium';
                      const cfg={critical:{bg:'#fee2e2',color:'#991b1b',label:'CRITICAL'},high:{bg:'#fee2e2',color:'#991b1b',label:'HIGH'},medium:{bg:'#fef3c7',color:'#92400e',label:'MED'},low:{bg:'#d1fae5',color:'#065f46',label:'LOW'}}[sev]||{bg:'#fef3c7',color:'#92400e',label:'MED'};
                      return <div key={i} className="er-item"><span className="er-badge" style={{ background:cfg.bg, color:cfg.color }}>{cfg.label}</span>{r.risk}</div>;
                    }) : <div className="er-item" style={{ color:'var(--rc-ink3)',fontSize:11 }}>No risks flagged.</div>}
                  </div>
                )}
                {sections.has('recs') && (
                  <div className="ec-recs">
                    <div className="erec-title">Top Recommendations</div>
                    {recs.length>0 ? recs.map((r,i) => (
                      <div key={i} className="erec-item">
                        <div className="erec-num">{i+1}</div>
                        {typeof r==='string'?r.substring(0,80):r}
                      </div>
                    )) : <div style={{ fontSize:11, color:'var(--rc-ink3)' }}>No recommendations.</div>}
                  </div>
                )}
                <div className="ec-footer">
                  <div className="ef-text">Generated by FinGenie AI · Powered by Groq Llama 3.3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SHARED KPI TOGGLES
// ═══════════════════════════════════════════════════════════════════════════════
function SharedKpiToggles({ sections, onToggle }) {
  return (
    <div className="es-kpi-bar">
      <span className="es-kpi-label">Include in output:</span>
      <div className="es-kpi-pills">
        {KPI_SECTIONS.map(s => (
          <button
            key={s.key}
            className={`es-kpi-pill ${sections.has(s.key)?'on':''}`}
            onClick={()=>onToggle(s.key)}
          >
            <span>{s.label}</span>
            <span className={`es-kpi-dot ${sections.has(s.key)?'on':''}`}/>
          </button>
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN EXPORT
// ═══════════════════════════════════════════════════════════════════════════════
const FORMAT_TABS = [
  { id:'pdf',   label:'Boardroom PDF' },
  { id:'deck',  label:'Analyst Deck'  },
  { id:'email', label:'Email Digest'  },
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

  return (
    <div className="layer-panel-inner export-suite">
      {/* ── Shared content toggles ── */}
      <SharedKpiToggles sections={sections} onToggle={toggleSection} activeFormat={format}/>

      {/* ── Format selector ── */}
      <div className="es-format-tabs">
        {FORMAT_TABS.map(f => (
          <button
            key={f.id}
            className={`es-format-tab ${format===f.id?'active':''}`}
            onClick={()=>setFormat(f.id)}
          >
            <span className="es-ft-label">{f.label}</span>
          </button>
        ))}
      </div>

      {/* ── Dynamic panel ── */}
      <div className="es-panel-wrap">
        {format === 'pdf'   && <PDFPanel   analysisResult={analysisResult} sections={sections}/>}
        {format === 'deck'  && <DeckPanel  analysisResult={analysisResult} sections={sections}/>}
        {format === 'email' && <EmailPanel analysisResult={analysisResult} sections={sections}/>}
      </div>
    </div>
  );
}