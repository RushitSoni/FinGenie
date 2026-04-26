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
const ACCENT = stryMutAct_9fa48("404") ? "" : (stryCov_9fa48("404"), '#2563eb');

// ── Mock analysis data for preview/testing ──────────────────────────────────
const MOCK_RESULT = stryMutAct_9fa48("405") ? {} : (stryCov_9fa48("405"), {
  statement_type: stryMutAct_9fa48("406") ? "" : (stryCov_9fa48("406"), 'Income Statement'),
  summary: stryMutAct_9fa48("407") ? "" : (stryCov_9fa48("407"), 'Revenue grew 18% YoY driven by strong SaaS subscriptions. Operating margins improved to 24% from 19%. Cash position remains healthy at $4.2B with no significant debt obligations in the near term.'),
  kpis: stryMutAct_9fa48("408") ? [] : (stryCov_9fa48("408"), [stryMutAct_9fa48("409") ? {} : (stryCov_9fa48("409"), {
    name: stryMutAct_9fa48("410") ? "" : (stryCov_9fa48("410"), 'Total Revenue'),
    formatted_value: stryMutAct_9fa48("411") ? "" : (stryCov_9fa48("411"), '$12.4B'),
    trend: stryMutAct_9fa48("412") ? "" : (stryCov_9fa48("412"), 'up')
  }), stryMutAct_9fa48("413") ? {} : (stryCov_9fa48("413"), {
    name: stryMutAct_9fa48("414") ? "" : (stryCov_9fa48("414"), 'Net Income'),
    formatted_value: stryMutAct_9fa48("415") ? "" : (stryCov_9fa48("415"), '$2.97B'),
    trend: stryMutAct_9fa48("416") ? "" : (stryCov_9fa48("416"), 'up')
  }), stryMutAct_9fa48("417") ? {} : (stryCov_9fa48("417"), {
    name: stryMutAct_9fa48("418") ? "" : (stryCov_9fa48("418"), 'Operating Margin'),
    formatted_value: stryMutAct_9fa48("419") ? "" : (stryCov_9fa48("419"), '24%'),
    trend: stryMutAct_9fa48("420") ? "" : (stryCov_9fa48("420"), 'up')
  }), stryMutAct_9fa48("421") ? {} : (stryCov_9fa48("421"), {
    name: stryMutAct_9fa48("422") ? "" : (stryCov_9fa48("422"), 'EPS'),
    formatted_value: stryMutAct_9fa48("423") ? "" : (stryCov_9fa48("423"), '$4.82'),
    trend: stryMutAct_9fa48("424") ? "" : (stryCov_9fa48("424"), 'up')
  }), stryMutAct_9fa48("425") ? {} : (stryCov_9fa48("425"), {
    name: stryMutAct_9fa48("426") ? "" : (stryCov_9fa48("426"), 'Free Cash Flow'),
    formatted_value: stryMutAct_9fa48("427") ? "" : (stryCov_9fa48("427"), '$3.1B'),
    trend: stryMutAct_9fa48("428") ? "" : (stryCov_9fa48("428"), 'up')
  }), stryMutAct_9fa48("429") ? {} : (stryCov_9fa48("429"), {
    name: stryMutAct_9fa48("430") ? "" : (stryCov_9fa48("430"), 'Debt-to-Equity'),
    formatted_value: stryMutAct_9fa48("431") ? "" : (stryCov_9fa48("431"), '0.38'),
    trend: stryMutAct_9fa48("432") ? "" : (stryCov_9fa48("432"), 'flat')
  })]),
  risks: stryMutAct_9fa48("433") ? [] : (stryCov_9fa48("433"), [stryMutAct_9fa48("434") ? "" : (stryCov_9fa48("434"), 'Macro headwinds may compress consumer spending in H2.'), stryMutAct_9fa48("435") ? "" : (stryCov_9fa48("435"), 'Regulatory scrutiny in EU markets remains elevated.')]),
  recommendations: stryMutAct_9fa48("436") ? [] : (stryCov_9fa48("436"), [stryMutAct_9fa48("437") ? "" : (stryCov_9fa48("437"), 'Maintain current capital allocation strategy.'), stryMutAct_9fa48("438") ? "" : (stryCov_9fa48("438"), 'Accelerate share buyback program given strong FCF.')])
});

// ── HTML report builder ──────────────────────────────────────────────────────
export function buildPDFReport({
  analysisResult,
  company,
  author,
  title,
  color
}) {
  if (stryMutAct_9fa48("439")) {
    {}
  } else {
    stryCov_9fa48("439");
    const displayTitle = stryMutAct_9fa48("442") ? title && 'Financial Intelligence Review' : stryMutAct_9fa48("441") ? false : stryMutAct_9fa48("440") ? true : (stryCov_9fa48("440", "441", "442"), title || (stryMutAct_9fa48("443") ? "" : (stryCov_9fa48("443"), 'Financial Intelligence Review')));
    const displayAuthor = stryMutAct_9fa48("446") ? author && 'FinGenie Analyst' : stryMutAct_9fa48("445") ? false : stryMutAct_9fa48("444") ? true : (stryCov_9fa48("444", "445", "446"), author || (stryMutAct_9fa48("447") ? "" : (stryCov_9fa48("447"), 'FinGenie Analyst')));
    const displayCo = stryMutAct_9fa48("450") ? company && 'Private Institutional Access' : stryMutAct_9fa48("449") ? false : stryMutAct_9fa48("448") ? true : (stryCov_9fa48("448", "449", "450"), company || (stryMutAct_9fa48("451") ? "" : (stryCov_9fa48("451"), 'Private Institutional Access')));
    const kpis = stryMutAct_9fa48("454") ? analysisResult?.kpis && [] : stryMutAct_9fa48("453") ? false : stryMutAct_9fa48("452") ? true : (stryCov_9fa48("452", "453", "454"), (stryMutAct_9fa48("455") ? analysisResult.kpis : (stryCov_9fa48("455"), analysisResult?.kpis)) || (stryMutAct_9fa48("456") ? ["Stryker was here"] : (stryCov_9fa48("456"), [])));
    const risks = stryMutAct_9fa48("459") ? analysisResult?.risks && [] : stryMutAct_9fa48("458") ? false : stryMutAct_9fa48("457") ? true : (stryCov_9fa48("457", "458", "459"), (stryMutAct_9fa48("460") ? analysisResult.risks : (stryCov_9fa48("460"), analysisResult?.risks)) || (stryMutAct_9fa48("461") ? ["Stryker was here"] : (stryCov_9fa48("461"), [])));
    const recs = stryMutAct_9fa48("464") ? analysisResult?.recommendations && [] : stryMutAct_9fa48("463") ? false : stryMutAct_9fa48("462") ? true : (stryCov_9fa48("462", "463", "464"), (stryMutAct_9fa48("465") ? analysisResult.recommendations : (stryCov_9fa48("465"), analysisResult?.recommendations)) || (stryMutAct_9fa48("466") ? ["Stryker was here"] : (stryCov_9fa48("466"), [])));
    const summary = stryMutAct_9fa48("469") ? analysisResult?.summary && '' : stryMutAct_9fa48("468") ? false : stryMutAct_9fa48("467") ? true : (stryCov_9fa48("467", "468", "469"), (stryMutAct_9fa48("470") ? analysisResult.summary : (stryCov_9fa48("470"), analysisResult?.summary)) || (stryMutAct_9fa48("471") ? "Stryker was here!" : (stryCov_9fa48("471"), '')));
    const kpiHtml = kpis.map(stryMutAct_9fa48("472") ? () => undefined : (stryCov_9fa48("472"), k => stryMutAct_9fa48("473") ? `` : (stryCov_9fa48("473"), `
    <div class="kpi-card">
      <div class="kpi-name">${k.name}</div>
      <div class="kpi-value">${stryMutAct_9fa48("476") ? (k.formatted_value || k.value) && '' : stryMutAct_9fa48("475") ? false : stryMutAct_9fa48("474") ? true : (stryCov_9fa48("474", "475", "476"), (stryMutAct_9fa48("478") ? k.formatted_value && k.value : stryMutAct_9fa48("477") ? false : (stryCov_9fa48("477", "478"), k.formatted_value || k.value)) || (stryMutAct_9fa48("479") ? "Stryker was here!" : (stryCov_9fa48("479"), '')))}</div>
      <span class="kpi-badge kpi-${k.trend}">
        ${(stryMutAct_9fa48("482") ? k.trend !== 'up' : stryMutAct_9fa48("481") ? false : stryMutAct_9fa48("480") ? true : (stryCov_9fa48("480", "481", "482"), k.trend === (stryMutAct_9fa48("483") ? "" : (stryCov_9fa48("483"), 'up')))) ? stryMutAct_9fa48("484") ? "" : (stryCov_9fa48("484"), '↑ Up') : (stryMutAct_9fa48("487") ? k.trend !== 'down' : stryMutAct_9fa48("486") ? false : stryMutAct_9fa48("485") ? true : (stryCov_9fa48("485", "486", "487"), k.trend === (stryMutAct_9fa48("488") ? "" : (stryCov_9fa48("488"), 'down')))) ? stryMutAct_9fa48("489") ? "" : (stryCov_9fa48("489"), '↓ Down') : stryMutAct_9fa48("490") ? "" : (stryCov_9fa48("490"), '→ Stable')}
      </span>
    </div>`))).join(stryMutAct_9fa48("491") ? "Stryker was here!" : (stryCov_9fa48("491"), ''));
    const riskHtml = risks.map(stryMutAct_9fa48("492") ? () => undefined : (stryCov_9fa48("492"), r => stryMutAct_9fa48("493") ? `` : (stryCov_9fa48("493"), `<li>${r}</li>`))).join(stryMutAct_9fa48("494") ? "Stryker was here!" : (stryCov_9fa48("494"), ''));
    const recHtml = recs.map(stryMutAct_9fa48("495") ? () => undefined : (stryCov_9fa48("495"), r => stryMutAct_9fa48("496") ? `` : (stryCov_9fa48("496"), `<li>${r}</li>`))).join(stryMutAct_9fa48("497") ? "Stryker was here!" : (stryCov_9fa48("497"), ''));
    return stryMutAct_9fa48("498") ? `` : (stryCov_9fa48("498"), `<!DOCTYPE html>
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
      <span>Generated <strong>${new Date().toLocaleDateString(stryMutAct_9fa48("499") ? "" : (stryCov_9fa48("499"), 'en-US'), stryMutAct_9fa48("500") ? {} : (stryCov_9fa48("500"), {
      year: stryMutAct_9fa48("501") ? "" : (stryCov_9fa48("501"), 'numeric'),
      month: stryMutAct_9fa48("502") ? "" : (stryCov_9fa48("502"), 'long'),
      day: stryMutAct_9fa48("503") ? "" : (stryCov_9fa48("503"), 'numeric')
    }))}</strong></span>
    </div>
  </div>

  <div class="body">
    ${summary ? stryMutAct_9fa48("504") ? `` : (stryCov_9fa48("504"), `
    <section>
      <h2>Executive Summary</h2>
      <div class="summary-box">${summary}</div>
    </section>`) : stryMutAct_9fa48("505") ? "Stryker was here!" : (stryCov_9fa48("505"), '')}

    ${kpis.length ? stryMutAct_9fa48("506") ? `` : (stryCov_9fa48("506"), `
    <section>
      <h2>Institutional Metrics</h2>
      <div class="kpi-grid">${kpiHtml}</div>
    </section>`) : stryMutAct_9fa48("507") ? "Stryker was here!" : (stryCov_9fa48("507"), '')}

    ${risks.length ? stryMutAct_9fa48("508") ? `` : (stryCov_9fa48("508"), `
    <section>
      <h2>Risk Factors</h2>
      <ul>${riskHtml}</ul>
    </section>`) : stryMutAct_9fa48("509") ? "Stryker was here!" : (stryCov_9fa48("509"), '')}

    ${recs.length ? stryMutAct_9fa48("510") ? `` : (stryCov_9fa48("510"), `
    <section>
      <h2>Recommendations</h2>
      <ul>${recHtml}</ul>
    </section>`) : stryMutAct_9fa48("511") ? "Stryker was here!" : (stryCov_9fa48("511"), '')}

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
  if (stryMutAct_9fa48("512")) {
    {}
  } else {
    stryCov_9fa48("512");
    const iframe = document.createElement(stryMutAct_9fa48("513") ? "" : (stryCov_9fa48("513"), 'iframe'));
    iframe.style.cssText = stryMutAct_9fa48("514") ? "" : (stryCov_9fa48("514"), 'position:fixed;top:-9999px;left:-9999px;width:0;height:0;border:none;visibility:hidden;');
    document.body.appendChild(iframe);
    const doc = stryMutAct_9fa48("517") ? iframe.contentDocument && iframe.contentWindow.document : stryMutAct_9fa48("516") ? false : stryMutAct_9fa48("515") ? true : (stryCov_9fa48("515", "516", "517"), iframe.contentDocument || iframe.contentWindow.document);
    doc.open();
    doc.write(html);
    doc.close();
    setTimeout(() => {
      if (stryMutAct_9fa48("518")) {
        {}
      } else {
        stryCov_9fa48("518");
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
        setTimeout(() => {
          if (stryMutAct_9fa48("519")) {
            {}
          } else {
            stryCov_9fa48("519");
            if (stryMutAct_9fa48("521") ? false : stryMutAct_9fa48("520") ? true : (stryCov_9fa48("520", "521"), document.body.contains(iframe))) document.body.removeChild(iframe);
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
  if (stryMutAct_9fa48("522")) {
    {}
  } else {
    stryCov_9fa48("522");
    const [company, setCompany] = useState(stryMutAct_9fa48("523") ? "Stryker was here!" : (stryCov_9fa48("523"), ''));
    const [author, setAuthor] = useState(stryMutAct_9fa48("524") ? "Stryker was here!" : (stryCov_9fa48("524"), ''));
    const [title, setTitle] = useState(stryMutAct_9fa48("525") ? "Stryker was here!" : (stryCov_9fa48("525"), ''));
    const [busy, setBusy] = useState(stryMutAct_9fa48("526") ? true : (stryCov_9fa48("526"), false));
    const [done, setDone] = useState(stryMutAct_9fa48("527") ? true : (stryCov_9fa48("527"), false));
    if (stryMutAct_9fa48("530") ? false : stryMutAct_9fa48("529") ? true : stryMutAct_9fa48("528") ? analysisResult : (stryCov_9fa48("528", "529", "530"), !analysisResult)) return null;
    const handleDownload = () => {
      if (stryMutAct_9fa48("531")) {
        {}
      } else {
        stryCov_9fa48("531");
        setBusy(stryMutAct_9fa48("532") ? false : (stryCov_9fa48("532"), true));
        setTimeout(() => {
          if (stryMutAct_9fa48("533")) {
            {}
          } else {
            stryCov_9fa48("533");
            const html = buildPDFReport(stryMutAct_9fa48("534") ? {} : (stryCov_9fa48("534"), {
              analysisResult,
              company,
              author,
              title,
              color: ACCENT
            }));
            printViaIframe(html);
            setBusy(stryMutAct_9fa48("535") ? true : (stryCov_9fa48("535"), false));
            setDone(stryMutAct_9fa48("536") ? false : (stryCov_9fa48("536"), true));
            setTimeout(stryMutAct_9fa48("537") ? () => undefined : (stryCov_9fa48("537"), () => setDone(stryMutAct_9fa48("538") ? true : (stryCov_9fa48("538"), false))), 3000);
          }
        }, 400);
      }
    };
    return <div className="export-suite">
      {/* Config + Action row */}
      <div className="grid-cols-12" style={stryMutAct_9fa48("539") ? {} : (stryCov_9fa48("539"), {
        gap: stryMutAct_9fa48("540") ? "" : (stryCov_9fa48("540"), '24px')
      })}>
        {/* Left: form */}
        <div className="col-span-8">
          <div className="card-light" style={stryMutAct_9fa48("541") ? {} : (stryCov_9fa48("541"), {
            padding: stryMutAct_9fa48("542") ? "" : (stryCov_9fa48("542"), '32px')
          })}>
            <div className="section-heading mb-lg">
              <FileText className="text-accent" size={18} />
              <h3 className="section-heading__label" style={stryMutAct_9fa48("543") ? {} : (stryCov_9fa48("543"), {
                fontSize: stryMutAct_9fa48("544") ? "" : (stryCov_9fa48("544"), '14px'),
                marginBottom: 0
              })}>
                Report Configuration
              </h3>
            </div>

            <div className="grid-cols-12 mb-md" style={stryMutAct_9fa48("545") ? {} : (stryCov_9fa48("545"), {
              gap: stryMutAct_9fa48("546") ? "" : (stryCov_9fa48("546"), '16px')
            })}>
              <div className="col-span-6 es-form-group">
                <label className="sub-label">Company Name</label>
                <input className="custom-input" placeholder="Organization" value={company} onChange={stryMutAct_9fa48("547") ? () => undefined : (stryCov_9fa48("547"), e => setCompany(e.target.value))} />
              </div>
              <div className="col-span-6 es-form-group">
                <label className="sub-label">Author / Lead</label>
                <input className="custom-input" placeholder="Name" value={author} onChange={stryMutAct_9fa48("548") ? () => undefined : (stryCov_9fa48("548"), e => setAuthor(e.target.value))} />
              </div>
            </div>

            <div className="es-form-group">
              <label className="sub-label">Document Heading</label>
              <input className="custom-input" placeholder="e.g. FY24 Performance Analysis" value={title} onChange={stryMutAct_9fa48("549") ? () => undefined : (stryCov_9fa48("549"), e => setTitle(e.target.value))} />
            </div>
          </div>
        </div>

        {/* Right: download */}
        <div className="col-span-4">
          <div className="card-light d-flex flex-column justify-center" style={stryMutAct_9fa48("550") ? {} : (stryCov_9fa48("550"), {
            padding: stryMutAct_9fa48("551") ? "" : (stryCov_9fa48("551"), '32px'),
            height: stryMutAct_9fa48("552") ? "" : (stryCov_9fa48("552"), '100%'),
            border: stryMutAct_9fa48("553") ? "" : (stryCov_9fa48("553"), '1px solid var(--border-light)')
          })}>
            <h4 style={stryMutAct_9fa48("554") ? {} : (stryCov_9fa48("554"), {
              fontSize: stryMutAct_9fa48("555") ? "" : (stryCov_9fa48("555"), '18px'),
              fontWeight: 800,
              marginBottom: stryMutAct_9fa48("556") ? "" : (stryCov_9fa48("556"), '8px')
            })}>
              Board-Ready Export
            </h4>
            <p className="text-secondary mb-xl" style={stryMutAct_9fa48("557") ? {} : (stryCov_9fa48("557"), {
              fontSize: stryMutAct_9fa48("558") ? "" : (stryCov_9fa48("558"), '13px'),
              lineHeight: 1.6
            })}>
              Generate a high-fidelity PDF report suitable for institutional sharing.
            </p>

            <button className="btn-primary w-full" onClick={handleDownload} disabled={busy}>
              {done ? <><CheckCircle2 size={18} /><span>PDF Ready</span></> : <><Download size={18} /><span>{busy ? stryMutAct_9fa48("559") ? "" : (stryCov_9fa48("559"), 'Generating…') : stryMutAct_9fa48("560") ? "" : (stryCov_9fa48("560"), 'Download PDF')}</span></>}
            </button>
          </div>
        </div>
      </div>
    </div>;
  }
}