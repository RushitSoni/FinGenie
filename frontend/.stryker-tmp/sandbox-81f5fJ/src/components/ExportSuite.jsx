// @ts-nocheck
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
import { useState } from 'react';
import { Download, FileText, CheckCircle2 } from 'lucide-react';
import './ExportSuite.css';
const ACCENT = stryMutAct_9fa48("627") ? "" : (stryCov_9fa48("627"), '#2563eb');

// ── Mock analysis data for preview/testing ──────────────────────────────────
const MOCK_RESULT = stryMutAct_9fa48("628") ? {} : (stryCov_9fa48("628"), {
  statement_type: stryMutAct_9fa48("629") ? "" : (stryCov_9fa48("629"), 'Income Statement'),
  summary: stryMutAct_9fa48("630") ? "" : (stryCov_9fa48("630"), 'Revenue grew 18% YoY driven by strong SaaS subscriptions. Operating margins improved to 24% from 19%. Cash position remains healthy at $4.2B with no significant debt obligations in the near term.'),
  kpis: stryMutAct_9fa48("631") ? [] : (stryCov_9fa48("631"), [stryMutAct_9fa48("632") ? {} : (stryCov_9fa48("632"), {
    name: stryMutAct_9fa48("633") ? "" : (stryCov_9fa48("633"), 'Total Revenue'),
    formatted_value: stryMutAct_9fa48("634") ? "" : (stryCov_9fa48("634"), '$12.4B'),
    trend: stryMutAct_9fa48("635") ? "" : (stryCov_9fa48("635"), 'up')
  }), stryMutAct_9fa48("636") ? {} : (stryCov_9fa48("636"), {
    name: stryMutAct_9fa48("637") ? "" : (stryCov_9fa48("637"), 'Net Income'),
    formatted_value: stryMutAct_9fa48("638") ? "" : (stryCov_9fa48("638"), '$2.97B'),
    trend: stryMutAct_9fa48("639") ? "" : (stryCov_9fa48("639"), 'up')
  }), stryMutAct_9fa48("640") ? {} : (stryCov_9fa48("640"), {
    name: stryMutAct_9fa48("641") ? "" : (stryCov_9fa48("641"), 'Operating Margin'),
    formatted_value: stryMutAct_9fa48("642") ? "" : (stryCov_9fa48("642"), '24%'),
    trend: stryMutAct_9fa48("643") ? "" : (stryCov_9fa48("643"), 'up')
  }), stryMutAct_9fa48("644") ? {} : (stryCov_9fa48("644"), {
    name: stryMutAct_9fa48("645") ? "" : (stryCov_9fa48("645"), 'EPS'),
    formatted_value: stryMutAct_9fa48("646") ? "" : (stryCov_9fa48("646"), '$4.82'),
    trend: stryMutAct_9fa48("647") ? "" : (stryCov_9fa48("647"), 'up')
  }), stryMutAct_9fa48("648") ? {} : (stryCov_9fa48("648"), {
    name: stryMutAct_9fa48("649") ? "" : (stryCov_9fa48("649"), 'Free Cash Flow'),
    formatted_value: stryMutAct_9fa48("650") ? "" : (stryCov_9fa48("650"), '$3.1B'),
    trend: stryMutAct_9fa48("651") ? "" : (stryCov_9fa48("651"), 'up')
  }), stryMutAct_9fa48("652") ? {} : (stryCov_9fa48("652"), {
    name: stryMutAct_9fa48("653") ? "" : (stryCov_9fa48("653"), 'Debt-to-Equity'),
    formatted_value: stryMutAct_9fa48("654") ? "" : (stryCov_9fa48("654"), '0.38'),
    trend: stryMutAct_9fa48("655") ? "" : (stryCov_9fa48("655"), 'flat')
  })]),
  risks: stryMutAct_9fa48("656") ? [] : (stryCov_9fa48("656"), [stryMutAct_9fa48("657") ? "" : (stryCov_9fa48("657"), 'Macro headwinds may compress consumer spending in H2.'), stryMutAct_9fa48("658") ? "" : (stryCov_9fa48("658"), 'Regulatory scrutiny in EU markets remains elevated.')]),
  recommendations: stryMutAct_9fa48("659") ? [] : (stryCov_9fa48("659"), [stryMutAct_9fa48("660") ? "" : (stryCov_9fa48("660"), 'Maintain current capital allocation strategy.'), stryMutAct_9fa48("661") ? "" : (stryCov_9fa48("661"), 'Accelerate share buyback program given strong FCF.')])
});

// ── HTML report builder ──────────────────────────────────────────────────────
export function buildPDFReport({
  analysisResult,
  company,
  author,
  title,
  color
}) {
  if (stryMutAct_9fa48("662")) {
    {}
  } else {
    stryCov_9fa48("662");
    const displayTitle = stryMutAct_9fa48("665") ? title && 'Financial Intelligence Review' : stryMutAct_9fa48("664") ? false : stryMutAct_9fa48("663") ? true : (stryCov_9fa48("663", "664", "665"), title || (stryMutAct_9fa48("666") ? "" : (stryCov_9fa48("666"), 'Financial Intelligence Review')));
    const displayAuthor = stryMutAct_9fa48("669") ? author && 'FinGenie Analyst' : stryMutAct_9fa48("668") ? false : stryMutAct_9fa48("667") ? true : (stryCov_9fa48("667", "668", "669"), author || (stryMutAct_9fa48("670") ? "" : (stryCov_9fa48("670"), 'FinGenie Analyst')));
    const displayCo = stryMutAct_9fa48("673") ? company && 'Private Institutional Access' : stryMutAct_9fa48("672") ? false : stryMutAct_9fa48("671") ? true : (stryCov_9fa48("671", "672", "673"), company || (stryMutAct_9fa48("674") ? "" : (stryCov_9fa48("674"), 'Private Institutional Access')));
    const kpis = stryMutAct_9fa48("677") ? analysisResult?.kpis && [] : stryMutAct_9fa48("676") ? false : stryMutAct_9fa48("675") ? true : (stryCov_9fa48("675", "676", "677"), (stryMutAct_9fa48("678") ? analysisResult.kpis : (stryCov_9fa48("678"), analysisResult?.kpis)) || (stryMutAct_9fa48("679") ? ["Stryker was here"] : (stryCov_9fa48("679"), [])));
    const risks = stryMutAct_9fa48("682") ? analysisResult?.risks && [] : stryMutAct_9fa48("681") ? false : stryMutAct_9fa48("680") ? true : (stryCov_9fa48("680", "681", "682"), (stryMutAct_9fa48("683") ? analysisResult.risks : (stryCov_9fa48("683"), analysisResult?.risks)) || (stryMutAct_9fa48("684") ? ["Stryker was here"] : (stryCov_9fa48("684"), [])));
    const recs = stryMutAct_9fa48("687") ? analysisResult?.recommendations && [] : stryMutAct_9fa48("686") ? false : stryMutAct_9fa48("685") ? true : (stryCov_9fa48("685", "686", "687"), (stryMutAct_9fa48("688") ? analysisResult.recommendations : (stryCov_9fa48("688"), analysisResult?.recommendations)) || (stryMutAct_9fa48("689") ? ["Stryker was here"] : (stryCov_9fa48("689"), [])));
    const summary = stryMutAct_9fa48("692") ? analysisResult?.summary && '' : stryMutAct_9fa48("691") ? false : stryMutAct_9fa48("690") ? true : (stryCov_9fa48("690", "691", "692"), (stryMutAct_9fa48("693") ? analysisResult.summary : (stryCov_9fa48("693"), analysisResult?.summary)) || (stryMutAct_9fa48("694") ? "Stryker was here!" : (stryCov_9fa48("694"), '')));
    const kpiHtml = kpis.map(stryMutAct_9fa48("695") ? () => undefined : (stryCov_9fa48("695"), k => stryMutAct_9fa48("696") ? `` : (stryCov_9fa48("696"), `
    <div class="kpi-card">
      <div class="kpi-name">${k.name}</div>
      <div class="kpi-value">${stryMutAct_9fa48("699") ? (k.formatted_value || k.value) && '' : stryMutAct_9fa48("698") ? false : stryMutAct_9fa48("697") ? true : (stryCov_9fa48("697", "698", "699"), (stryMutAct_9fa48("701") ? k.formatted_value && k.value : stryMutAct_9fa48("700") ? false : (stryCov_9fa48("700", "701"), k.formatted_value || k.value)) || (stryMutAct_9fa48("702") ? "Stryker was here!" : (stryCov_9fa48("702"), '')))}</div>
      <span class="kpi-badge kpi-${k.trend}">
        ${(stryMutAct_9fa48("705") ? k.trend !== 'up' : stryMutAct_9fa48("704") ? false : stryMutAct_9fa48("703") ? true : (stryCov_9fa48("703", "704", "705"), k.trend === (stryMutAct_9fa48("706") ? "" : (stryCov_9fa48("706"), 'up')))) ? stryMutAct_9fa48("707") ? "" : (stryCov_9fa48("707"), '↑ Up') : (stryMutAct_9fa48("710") ? k.trend !== 'down' : stryMutAct_9fa48("709") ? false : stryMutAct_9fa48("708") ? true : (stryCov_9fa48("708", "709", "710"), k.trend === (stryMutAct_9fa48("711") ? "" : (stryCov_9fa48("711"), 'down')))) ? stryMutAct_9fa48("712") ? "" : (stryCov_9fa48("712"), '↓ Down') : stryMutAct_9fa48("713") ? "" : (stryCov_9fa48("713"), '→ Stable')}
      </span>
    </div>`))).join(stryMutAct_9fa48("714") ? "Stryker was here!" : (stryCov_9fa48("714"), ''));
    const riskHtml = risks.map(stryMutAct_9fa48("715") ? () => undefined : (stryCov_9fa48("715"), r => stryMutAct_9fa48("716") ? `` : (stryCov_9fa48("716"), `<li>${r}</li>`))).join(stryMutAct_9fa48("717") ? "Stryker was here!" : (stryCov_9fa48("717"), ''));
    const recHtml = recs.map(stryMutAct_9fa48("718") ? () => undefined : (stryCov_9fa48("718"), r => stryMutAct_9fa48("719") ? `` : (stryCov_9fa48("719"), `<li>${r}</li>`))).join(stryMutAct_9fa48("720") ? "Stryker was here!" : (stryCov_9fa48("720"), ''));
    return stryMutAct_9fa48("721") ? `` : (stryCov_9fa48("721"), `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<title>${displayTitle}</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Plus Jakarta Sans', sans-serif; background: #f8fafc; color: #0f172a; }

  .cover {
    background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%);
    padding: 60px 56px 48px;
    color: white;
  }
  .cover-tag  { font-size: 10px; font-weight: 800; letter-spacing: 3px; color: rgba(255,255,255,0.4); text-transform: uppercase; margin-bottom: 20px; }
  .cover-title{ font-size: 36px; font-weight: 800; letter-spacing: -0.03em; line-height: 1.15; margin-bottom: 24px; }
  .cover-bar  { width: 48px; height: 4px; border-radius: 2px; margin-bottom: 28px; }
  .cover-meta { display: flex; gap: 32px; font-size: 13px; color: rgba(255,255,255,0.55); font-weight: 600; }
  .cover-meta span strong { color: rgba(255,255,255,0.85); font-weight: 700; }

  .body { padding: 48px 56px; }

  section { margin-bottom: 40px; }
  h2 { font-size: 11px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; color: #94a3b8; margin-bottom: 16px; }

  .summary-box {
    background: white;
    border-left: 4px solid ${color};
    border-radius: 0 10px 10px 0;
    padding: 20px 24px;
    font-size: 14px;
    line-height: 1.75;
    color: #334155;
    box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  }

  .kpi-grid  { display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; }
  .kpi-card  { background: white; border-radius: 10px; padding: 18px 20px; box-shadow: 0 1px 4px rgba(0,0,0,0.07); }
  .kpi-name  { font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 6px; }
  .kpi-value { font-size: 22px; font-weight: 800; color: #0f172a; letter-spacing: -0.02em; margin-bottom: 8px; }
  .kpi-badge { display: inline-block; padding: 2px 10px; border-radius: 99px; font-size: 10px; font-weight: 800; }
  .kpi-up    { background: #dcfce7; color: #166534; }
  .kpi-down  { background: #fee2e2; color: #991b1b; }
  .kpi-flat  { background: #f1f5f9; color: #475569; }

  ul { padding-left: 18px; }
  ul li { font-size: 14px; line-height: 1.7; color: #475569; margin-bottom: 6px; }

  .footer { margin-top: 56px; padding-top: 20px; border-top: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; }
  .footer-left  { font-size: 12px; font-weight: 700; color: #94a3b8; }
  .footer-right { font-size: 10px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; color: #cbd5e1; }
  @media print { body { background: white; } }
</style>
</head>
<body>
  <div class="cover">
    <div class="cover-tag">FinGenie Intelligence Report</div>
    <h1 class="cover-title">${displayTitle}</h1>
    <div class="cover-bar" style="background:${color}"></div>
    <div class="cover-meta">
      <span><strong>${displayCo}</strong></span>
      <span>Prepared by <strong>${displayAuthor}</strong></span>
      <span>Generated <strong>${new Date().toLocaleDateString(stryMutAct_9fa48("722") ? "" : (stryCov_9fa48("722"), 'en-US'), stryMutAct_9fa48("723") ? {} : (stryCov_9fa48("723"), {
      year: stryMutAct_9fa48("724") ? "" : (stryCov_9fa48("724"), 'numeric'),
      month: stryMutAct_9fa48("725") ? "" : (stryCov_9fa48("725"), 'long'),
      day: stryMutAct_9fa48("726") ? "" : (stryCov_9fa48("726"), 'numeric')
    }))}</strong></span>
    </div>
  </div>

  <div class="body">
    ${summary ? stryMutAct_9fa48("727") ? `` : (stryCov_9fa48("727"), `
    <section>
      <h2>Executive Summary</h2>
      <div class="summary-box">${summary}</div>
    </section>`) : stryMutAct_9fa48("728") ? "Stryker was here!" : (stryCov_9fa48("728"), '')}

    ${kpis.length ? stryMutAct_9fa48("729") ? `` : (stryCov_9fa48("729"), `
    <section>
      <h2>Institutional Metrics</h2>
      <div class="kpi-grid">${kpiHtml}</div>
    </section>`) : stryMutAct_9fa48("730") ? "Stryker was here!" : (stryCov_9fa48("730"), '')}

    ${risks.length ? stryMutAct_9fa48("731") ? `` : (stryCov_9fa48("731"), `
    <section>
      <h2>Risk Factors</h2>
      <ul>${riskHtml}</ul>
    </section>`) : stryMutAct_9fa48("732") ? "Stryker was here!" : (stryCov_9fa48("732"), '')}

    ${recs.length ? stryMutAct_9fa48("733") ? `` : (stryCov_9fa48("733"), `
    <section>
      <h2>Recommendations</h2>
      <ul>${recHtml}</ul>
    </section>`) : stryMutAct_9fa48("734") ? "Stryker was here!" : (stryCov_9fa48("734"), '')}

    <div class="footer">
      <div class="footer-left">${displayCo} · ${displayTitle}</div>
      <div class="footer-right">FinGenie AI · Confidential</div>
    </div>
  </div>
</body>
</html>`);
  }
}

// ── PDF download helper ──────────────────────────────────────────────────────
function printViaIframe(html) {
  if (stryMutAct_9fa48("735")) {
    {}
  } else {
    stryCov_9fa48("735");
    const iframe = document.createElement(stryMutAct_9fa48("736") ? "" : (stryCov_9fa48("736"), 'iframe'));
    iframe.style.cssText = stryMutAct_9fa48("737") ? "" : (stryCov_9fa48("737"), 'position:fixed;top:-9999px;left:-9999px;width:0;height:0;border:none;visibility:hidden;');
    document.body.appendChild(iframe);
    const doc = stryMutAct_9fa48("740") ? iframe.contentDocument && iframe.contentWindow.document : stryMutAct_9fa48("739") ? false : stryMutAct_9fa48("738") ? true : (stryCov_9fa48("738", "739", "740"), iframe.contentDocument || iframe.contentWindow.document);
    doc.open();
    doc.write(html);
    doc.close();
    setTimeout(() => {
      if (stryMutAct_9fa48("741")) {
        {}
      } else {
        stryCov_9fa48("741");
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
        setTimeout(() => {
          if (stryMutAct_9fa48("742")) {
            {}
          } else {
            stryCov_9fa48("742");
            if (stryMutAct_9fa48("744") ? false : stryMutAct_9fa48("743") ? true : (stryCov_9fa48("743", "744"), document.body.contains(iframe))) document.body.removeChild(iframe);
          }
        }, 3000);
      }
    }, 500);
  }
}

// ════════════════════════════════════════════════════════════════════════════
export default function ExportSuite({
  analysisResult = MOCK_RESULT
}) {
  if (stryMutAct_9fa48("745")) {
    {}
  } else {
    stryCov_9fa48("745");
    const [company, setCompany] = useState(stryMutAct_9fa48("746") ? "Stryker was here!" : (stryCov_9fa48("746"), ''));
    const [author, setAuthor] = useState(stryMutAct_9fa48("747") ? "Stryker was here!" : (stryCov_9fa48("747"), ''));
    const [title, setTitle] = useState(stryMutAct_9fa48("748") ? "Stryker was here!" : (stryCov_9fa48("748"), ''));
    const [busy, setBusy] = useState(stryMutAct_9fa48("749") ? true : (stryCov_9fa48("749"), false));
    const [done, setDone] = useState(stryMutAct_9fa48("750") ? true : (stryCov_9fa48("750"), false));
    if (stryMutAct_9fa48("753") ? false : stryMutAct_9fa48("752") ? true : stryMutAct_9fa48("751") ? analysisResult : (stryCov_9fa48("751", "752", "753"), !analysisResult)) return null;
    const handleDownload = () => {
      if (stryMutAct_9fa48("754")) {
        {}
      } else {
        stryCov_9fa48("754");
        setBusy(stryMutAct_9fa48("755") ? false : (stryCov_9fa48("755"), true));
        setTimeout(() => {
          if (stryMutAct_9fa48("756")) {
            {}
          } else {
            stryCov_9fa48("756");
            const html = buildPDFReport(stryMutAct_9fa48("757") ? {} : (stryCov_9fa48("757"), {
              analysisResult,
              company,
              author,
              title,
              color: ACCENT
            }));
            printViaIframe(html);
            setBusy(stryMutAct_9fa48("758") ? true : (stryCov_9fa48("758"), false));
            setDone(stryMutAct_9fa48("759") ? false : (stryCov_9fa48("759"), true));
            setTimeout(stryMutAct_9fa48("760") ? () => undefined : (stryCov_9fa48("760"), () => setDone(stryMutAct_9fa48("761") ? true : (stryCov_9fa48("761"), false))), 3000);
          }
        }, 400);
      }
    };
    return <div className="export-suite">
      {/* Config + Action row */}
      <div className="grid-cols-12" style={stryMutAct_9fa48("762") ? {} : (stryCov_9fa48("762"), {
        gap: stryMutAct_9fa48("763") ? "" : (stryCov_9fa48("763"), '24px')
      })}>
        {/* Left: form */}
        <div className="col-span-8">
          <div className="card-light" style={stryMutAct_9fa48("764") ? {} : (stryCov_9fa48("764"), {
            padding: stryMutAct_9fa48("765") ? "" : (stryCov_9fa48("765"), '32px')
          })}>
            <div className="section-heading mb-lg">
              <FileText className="text-accent" size={18} />
              <h3 className="section-heading__label" style={stryMutAct_9fa48("766") ? {} : (stryCov_9fa48("766"), {
                fontSize: stryMutAct_9fa48("767") ? "" : (stryCov_9fa48("767"), '14px'),
                marginBottom: 0
              })}>
                Report Configuration
              </h3>
            </div>

            <div className="grid-cols-12 mb-md" style={stryMutAct_9fa48("768") ? {} : (stryCov_9fa48("768"), {
              gap: stryMutAct_9fa48("769") ? "" : (stryCov_9fa48("769"), '16px')
            })}>
              <div className="col-span-6 es-form-group">
                <label className="sub-label">Company Name</label>
                <input className="custom-input" placeholder="Organization" value={company} onChange={stryMutAct_9fa48("770") ? () => undefined : (stryCov_9fa48("770"), e => setCompany(e.target.value))} />
              </div>
              <div className="col-span-6 es-form-group">
                <label className="sub-label">Author / Lead</label>
                <input className="custom-input" placeholder="Name" value={author} onChange={stryMutAct_9fa48("771") ? () => undefined : (stryCov_9fa48("771"), e => setAuthor(e.target.value))} />
              </div>
            </div>

            <div className="es-form-group">
              <label className="sub-label">Document Heading</label>
              <input className="custom-input" placeholder="e.g. FY24 Performance Analysis" value={title} onChange={stryMutAct_9fa48("772") ? () => undefined : (stryCov_9fa48("772"), e => setTitle(e.target.value))} />
            </div>
          </div>
        </div>

        {/* Right: download */}
        <div className="col-span-4">
          <div className="card-light d-flex flex-column justify-center" style={stryMutAct_9fa48("773") ? {} : (stryCov_9fa48("773"), {
            padding: stryMutAct_9fa48("774") ? "" : (stryCov_9fa48("774"), '32px'),
            height: stryMutAct_9fa48("775") ? "" : (stryCov_9fa48("775"), '100%'),
            border: stryMutAct_9fa48("776") ? "" : (stryCov_9fa48("776"), '1px solid var(--border-light)')
          })}>
            <h4 style={stryMutAct_9fa48("777") ? {} : (stryCov_9fa48("777"), {
              fontSize: stryMutAct_9fa48("778") ? "" : (stryCov_9fa48("778"), '18px'),
              fontWeight: 800,
              marginBottom: stryMutAct_9fa48("779") ? "" : (stryCov_9fa48("779"), '8px')
            })}>
              Board-Ready Export
            </h4>
            <p className="text-secondary mb-xl" style={stryMutAct_9fa48("780") ? {} : (stryCov_9fa48("780"), {
              fontSize: stryMutAct_9fa48("781") ? "" : (stryCov_9fa48("781"), '13px'),
              lineHeight: 1.6
            })}>
              Generate a high-fidelity PDF report suitable for institutional sharing.
            </p>

            <button className="btn-primary w-full" onClick={handleDownload} disabled={busy}>
              {done ? <><CheckCircle2 size={18} /><span>PDF Ready</span></> : <><Download size={18} /><span>{busy ? stryMutAct_9fa48("782") ? "" : (stryCov_9fa48("782"), 'Generating…') : stryMutAct_9fa48("783") ? "" : (stryCov_9fa48("783"), 'Download PDF')}</span></>}
            </button>
          </div>
        </div>
      </div>
    </div>;
  }
}