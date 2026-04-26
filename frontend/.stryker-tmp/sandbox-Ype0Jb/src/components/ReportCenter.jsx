// @ts-nocheck
// ReportCenter.jsx — FinGenie Report Center
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
import { FileText, TrendingUp, Search, Building2, Rocket, GraduationCap, Download, Printer, Sparkles, Box, FileOutput, Hash, Cpu, CheckCircle2 } from 'lucide-react';
import ExportSuite from './ExportSuite';
const API_BASE = stryMutAct_9fa48("1184") ? import.meta.env.VITE_API_BASE_URL && 'http://localhost:8000' : stryMutAct_9fa48("1183") ? false : stryMutAct_9fa48("1182") ? true : (stryCov_9fa48("1182", "1183", "1184"), import.meta.env.VITE_API_BASE_URL || (stryMutAct_9fa48("1185") ? "" : (stryCov_9fa48("1185"), 'http://localhost:8000')));
const AI_REPORT_FORMATS = stryMutAct_9fa48("1186") ? [] : (stryCov_9fa48("1186"), [stryMutAct_9fa48("1187") ? {} : (stryCov_9fa48("1187"), {
  id: stryMutAct_9fa48("1188") ? "" : (stryCov_9fa48("1188"), 'executive'),
  Icon: FileText,
  label: stryMutAct_9fa48("1189") ? "" : (stryCov_9fa48("1189"), 'Executive Brief'),
  desc: stryMutAct_9fa48("1190") ? "" : (stryCov_9fa48("1190"), 'Concise strategic summary for C-suite')
}), stryMutAct_9fa48("1191") ? {} : (stryCov_9fa48("1191"), {
  id: stryMutAct_9fa48("1192") ? "" : (stryCov_9fa48("1192"), 'investor'),
  Icon: TrendingUp,
  label: stryMutAct_9fa48("1193") ? "" : (stryCov_9fa48("1193"), 'Investor Memo'),
  desc: stryMutAct_9fa48("1194") ? "" : (stryCov_9fa48("1194"), 'Growth narrative & opportunity framing')
}), stryMutAct_9fa48("1195") ? {} : (stryCov_9fa48("1195"), {
  id: stryMutAct_9fa48("1196") ? "" : (stryCov_9fa48("1196"), 'audit'),
  Icon: Search,
  label: stryMutAct_9fa48("1197") ? "" : (stryCov_9fa48("1197"), 'Internal Audit'),
  desc: stryMutAct_9fa48("1198") ? "" : (stryCov_9fa48("1198"), 'Detailed compliance & risk analysis')
}), stryMutAct_9fa48("1199") ? {} : (stryCov_9fa48("1199"), {
  id: stryMutAct_9fa48("1200") ? "" : (stryCov_9fa48("1200"), 'board'),
  Icon: Building2,
  label: stryMutAct_9fa48("1201") ? "" : (stryCov_9fa48("1201"), 'Board Update'),
  desc: stryMutAct_9fa48("1202") ? "" : (stryCov_9fa48("1202"), 'Governance-focused balanced overview')
}), stryMutAct_9fa48("1203") ? {} : (stryCov_9fa48("1203"), {
  id: stryMutAct_9fa48("1204") ? "" : (stryCov_9fa48("1204"), 'startup'),
  Icon: Rocket,
  label: stryMutAct_9fa48("1205") ? "" : (stryCov_9fa48("1205"), 'Pitch Narrative'),
  desc: stryMutAct_9fa48("1206") ? "" : (stryCov_9fa48("1206"), 'Fundraising-ready energetic framing')
}), stryMutAct_9fa48("1207") ? {} : (stryCov_9fa48("1207"), {
  id: stryMutAct_9fa48("1208") ? "" : (stryCov_9fa48("1208"), 'academic'),
  Icon: GraduationCap,
  label: stryMutAct_9fa48("1209") ? "" : (stryCov_9fa48("1209"), 'Research Paper'),
  desc: stryMutAct_9fa48("1210") ? "" : (stryCov_9fa48("1210"), 'Structured, methodology-driven analysis')
})]);
function escapeHtml(text) {
  if (stryMutAct_9fa48("1211")) {
    {}
  } else {
    stryCov_9fa48("1211");
    const map = stryMutAct_9fa48("1212") ? {} : (stryCov_9fa48("1212"), {
      '&': stryMutAct_9fa48("1213") ? "" : (stryCov_9fa48("1213"), '&amp;'),
      '<': stryMutAct_9fa48("1214") ? "" : (stryCov_9fa48("1214"), '&lt;'),
      '>': stryMutAct_9fa48("1215") ? "" : (stryCov_9fa48("1215"), '&gt;'),
      '"': stryMutAct_9fa48("1216") ? "" : (stryCov_9fa48("1216"), '&quot;'),
      "'": stryMutAct_9fa48("1217") ? "" : (stryCov_9fa48("1217"), '&#039;')
    });
    return String(text).replace(stryMutAct_9fa48("1218") ? /[^&<>"']/g : (stryCov_9fa48("1218"), /[&<>"']/g), stryMutAct_9fa48("1219") ? () => undefined : (stryCov_9fa48("1219"), m => map[m]));
  }
}
function mdToHtml(md) {
  if (stryMutAct_9fa48("1220")) {
    {}
  } else {
    stryCov_9fa48("1220");
    if (stryMutAct_9fa48("1223") ? false : stryMutAct_9fa48("1222") ? true : stryMutAct_9fa48("1221") ? md : (stryCov_9fa48("1221", "1222", "1223"), !md)) return stryMutAct_9fa48("1224") ? "Stryker was here!" : (stryCov_9fa48("1224"), '');
    let escaped = escapeHtml(md);
    escaped = escaped.replace(stryMutAct_9fa48("1225") ? /&lt;strong&gt;(.)&lt;\/strong&gt;/g : (stryCov_9fa48("1225"), /&lt;strong&gt;(.+?)&lt;\/strong&gt;/g), stryMutAct_9fa48("1226") ? "" : (stryCov_9fa48("1226"), '<strong>$1</strong>')).replace(stryMutAct_9fa48("1227") ? /\*\*(.)\*\*/g : (stryCov_9fa48("1227"), /\*\*(.+?)\*\*/g), stryMutAct_9fa48("1228") ? "" : (stryCov_9fa48("1228"), '<strong>$1</strong>')).replace(stryMutAct_9fa48("1229") ? /\*(.)\*/g : (stryCov_9fa48("1229"), /\*(.+?)\*/g), stryMutAct_9fa48("1230") ? "" : (stryCov_9fa48("1230"), '<em>$1</em>')).replace(stryMutAct_9fa48("1233") ? /^### (.)$/gm : stryMutAct_9fa48("1232") ? /^### (.+)/gm : stryMutAct_9fa48("1231") ? /### (.+)$/gm : (stryCov_9fa48("1231", "1232", "1233"), /^### (.+)$/gm), stryMutAct_9fa48("1234") ? "" : (stryCov_9fa48("1234"), '<h3 class="ai-report-h3">$1</h3>')).replace(stryMutAct_9fa48("1237") ? /^## (.)$/gm : stryMutAct_9fa48("1236") ? /^## (.+)/gm : stryMutAct_9fa48("1235") ? /## (.+)$/gm : (stryCov_9fa48("1235", "1236", "1237"), /^## (.+)$/gm), stryMutAct_9fa48("1238") ? "" : (stryCov_9fa48("1238"), '<h2 class="ai-report-h2">$1</h2>')).replace(stryMutAct_9fa48("1242") ? /^[•\-] (.)$/gm : stryMutAct_9fa48("1241") ? /^[^•\-] (.+)$/gm : stryMutAct_9fa48("1240") ? /^[•\-] (.+)/gm : stryMutAct_9fa48("1239") ? /[•\-] (.+)$/gm : (stryCov_9fa48("1239", "1240", "1241", "1242"), /^[•\-] (.+)$/gm), stryMutAct_9fa48("1243") ? "" : (stryCov_9fa48("1243"), '<li>$1</li>')).replace(stryMutAct_9fa48("1248") ? /^(\d+)\. (.)$/gm : stryMutAct_9fa48("1247") ? /^(\D+)\. (.+)$/gm : stryMutAct_9fa48("1246") ? /^(\d)\. (.+)$/gm : stryMutAct_9fa48("1245") ? /^(\d+)\. (.+)/gm : stryMutAct_9fa48("1244") ? /(\d+)\. (.+)$/gm : (stryCov_9fa48("1244", "1245", "1246", "1247", "1248"), /^(\d+)\. (.+)$/gm), stryMutAct_9fa48("1249") ? "" : (stryCov_9fa48("1249"), '<li><span class="ai-report-num">$1</span> $2</li>')).replace(stryMutAct_9fa48("1255") ? /(<li>[\s\S]+?<\/li>)(?=\n<li>|\n\n)/g : stryMutAct_9fa48("1254") ? /(<li>[\s\S]+?<\/li>)(?!\n<li>|\n\n|$)/g : stryMutAct_9fa48("1253") ? /(<li>[\s\s]+?<\/li>)(?=\n<li>|\n\n|$)/g : stryMutAct_9fa48("1252") ? /(<li>[\S\S]+?<\/li>)(?=\n<li>|\n\n|$)/g : stryMutAct_9fa48("1251") ? /(<li>[^\s\S]+?<\/li>)(?=\n<li>|\n\n|$)/g : stryMutAct_9fa48("1250") ? /(<li>[\s\S]<\/li>)(?=\n<li>|\n\n|$)/g : (stryCov_9fa48("1250", "1251", "1252", "1253", "1254", "1255"), /(<li>[\s\S]+?<\/li>)(?=\n<li>|\n\n|$)/g), stryMutAct_9fa48("1256") ? "" : (stryCov_9fa48("1256"), '<ul>$&</ul>')).replace(/<\/ul>\n<ul>/g, stryMutAct_9fa48("1257") ? "Stryker was here!" : (stryCov_9fa48("1257"), '')).replace(stryMutAct_9fa48("1262") ? /^(?!<[hul])(.)$/gm : stryMutAct_9fa48("1261") ? /^(?!<[^hul])(.+)$/gm : stryMutAct_9fa48("1260") ? /^(?=<[hul])(.+)$/gm : stryMutAct_9fa48("1259") ? /^(?!<[hul])(.+)/gm : stryMutAct_9fa48("1258") ? /(?!<[hul])(.+)$/gm : (stryCov_9fa48("1258", "1259", "1260", "1261", "1262"), /^(?!<[hul])(.+)$/gm), stryMutAct_9fa48("1263") ? "" : (stryCov_9fa48("1263"), '<p>$1</p>')).replace(stryMutAct_9fa48("1265") ? /<p>\S*<\/p>/g : stryMutAct_9fa48("1264") ? /<p>\s<\/p>/g : (stryCov_9fa48("1264", "1265"), /<p>\s*<\/p>/g), stryMutAct_9fa48("1266") ? "Stryker was here!" : (stryCov_9fa48("1266"), ''));
    return escaped;
  }
}
function buildReportHTML({
  selectedFmt,
  stmtType,
  now,
  report
}) {
  if (stryMutAct_9fa48("1267")) {
    {}
  } else {
    stryCov_9fa48("1267");
    return stryMutAct_9fa48("1268") ? `` : (stryCov_9fa48("1268"), `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<title>FinGenie — ${stryMutAct_9fa48("1269") ? selectedFmt.label : (stryCov_9fa48("1269"), selectedFmt?.label)}</title>
<style>
  body { font-family: 'Inter', system-ui, sans-serif; max-width: 800px;
         margin: 60px auto; padding: 0 40px; color: #0f172a; line-height: 1.7; }
  .cover { border-bottom: 3px solid #2563eb; padding-bottom: 32px; margin-bottom: 40px; }
  .cover-eyebrow { font-size: 11px; letter-spacing: 2px; text-transform: uppercase;
                   color: #2563eb; margin-bottom: 8px; font-weight: 700; }
  .cover-title { font-size: 36px; font-weight: 800; margin: 0 0 8px; letter-spacing: -0.02em; }
  .cover-meta  { font-size: 13px; color: #64748b; }
  h2 { font-size: 18px; font-weight: 700; color: #1e293b;
       border-bottom: 1px solid #f1f5f9; padding-bottom: 12px; margin-top: 40px; }
  h3 { font-size: 14px; font-weight: 700; color: #475569; margin-top: 24px;
       text-transform: uppercase; letter-spacing: .05em; }
  p  { margin: 16px 0; color: #334155; }
  ul { padding-left: 20px; } li { margin: 8px 0; color: #334155; }
  .footer { margin-top: 80px; padding-top: 24px; border-top: 1px solid #f1f5f9;
            font-size: 11px; color: #94a3b8; font-weight: 500; }
</style>
</head>
<body>
<div class="cover">
  <div class="cover-eyebrow">FinGenie AI / Intelligence Dept.</div>
  <div class="cover-title">${stryMutAct_9fa48("1270") ? selectedFmt.label : (stryCov_9fa48("1270"), selectedFmt?.label)}</div>
  <div class="cover-meta">Document Focus: ${stmtType} · Generated on ${now}</div>
</div>
${mdToHtml(report)}
<div class="footer">
  FinGenie Institutional Intelligence · AI Attribution: Groq Llama 3.3 · Strictly Confidential
</div>
</body>
</html>`);
  }
}
function printViaIframe(html) {
  if (stryMutAct_9fa48("1271")) {
    {}
  } else {
    stryCov_9fa48("1271");
    const iframe = document.createElement(stryMutAct_9fa48("1272") ? "" : (stryCov_9fa48("1272"), 'iframe'));
    iframe.style.cssText = stryMutAct_9fa48("1273") ? "" : (stryCov_9fa48("1273"), 'position:fixed;top:-9999px;left:-9999px;width:0;height:0;border:none;visibility:hidden;');
    document.body.appendChild(iframe);
    const doc = stryMutAct_9fa48("1276") ? iframe.contentDocument && iframe.contentWindow.document : stryMutAct_9fa48("1275") ? false : stryMutAct_9fa48("1274") ? true : (stryCov_9fa48("1274", "1275", "1276"), iframe.contentDocument || iframe.contentWindow.document);
    doc.open();
    doc.write(html);
    doc.close();
    setTimeout(() => {
      if (stryMutAct_9fa48("1277")) {
        {}
      } else {
        stryCov_9fa48("1277");
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
        setTimeout(() => {
          if (stryMutAct_9fa48("1278")) {
            {}
          } else {
            stryCov_9fa48("1278");
            if (stryMutAct_9fa48("1280") ? false : stryMutAct_9fa48("1279") ? true : (stryCov_9fa48("1279", "1280"), document.body.contains(iframe))) document.body.removeChild(iframe);
          }
        }, 3000);
      }
    }, 500);
  }
}
function ReportCenterHeader({
  analysisResult
}) {
  if (stryMutAct_9fa48("1281")) {
    {}
  } else {
    stryCov_9fa48("1281");
    const {
      kpis = stryMutAct_9fa48("1282") ? ["Stryker was here"] : (stryCov_9fa48("1282"), []),
      risks = stryMutAct_9fa48("1283") ? ["Stryker was here"] : (stryCov_9fa48("1283"), []),
      recommendations: recs = stryMutAct_9fa48("1284") ? ["Stryker was here"] : (stryCov_9fa48("1284"), []),
      raw_data: rawData = stryMutAct_9fa48("1285") ? ["Stryker was here"] : (stryCov_9fa48("1285"), []),
      statement_type: stmtType,
      parsing_mode: parsingMode
    } = analysisResult;
    return <header className="page-header mb-xl pb-lg" style={stryMutAct_9fa48("1286") ? {} : (stryCov_9fa48("1286"), {
      borderBottom: stryMutAct_9fa48("1287") ? "" : (stryCov_9fa48("1287"), '1px solid var(--border-light)')
    })}>
      <div className="d-flex items-center gap-2 mb-xs">
        <Sparkles className="text-accent" size={16} />
        <span className="page-header__eyebrow">Intelligence Report Generation</span>
      </div>
      <div className="d-flex justify-between items-end">
        <div>
          <h1 className="page-header__title">
            AI Narrative <span className="page-header__accent">Generator.</span>
          </h1>
          <div className="d-flex items-center gap-4 mt-md">
            <div className="d-flex items-center gap-2 text-secondary" style={stryMutAct_9fa48("1288") ? {} : (stryCov_9fa48("1288"), {
              fontSize: stryMutAct_9fa48("1289") ? "" : (stryCov_9fa48("1289"), '13px'),
              fontWeight: 600
            })}>
              <Hash size={14} className="text-muted" />
              <span>TYPE: {stryMutAct_9fa48("1292") ? stmtType?.toUpperCase() && 'FIN-REP' : stryMutAct_9fa48("1291") ? false : stryMutAct_9fa48("1290") ? true : (stryCov_9fa48("1290", "1291", "1292"), (stryMutAct_9fa48("1294") ? stmtType.toUpperCase() : stryMutAct_9fa48("1293") ? stmtType?.toLowerCase() : (stryCov_9fa48("1293", "1294"), stmtType?.toUpperCase())) || (stryMutAct_9fa48("1295") ? "" : (stryCov_9fa48("1295"), 'FIN-REP')))}</span>
            </div>
            <div className="d-flex items-center gap-2 text-secondary" style={stryMutAct_9fa48("1296") ? {} : (stryCov_9fa48("1296"), {
              fontSize: stryMutAct_9fa48("1297") ? "" : (stryCov_9fa48("1297"), '13px'),
              fontWeight: 600
            })}>
              <Cpu size={14} className="text-muted" />
              <span>LOGIC: {stryMutAct_9fa48("1300") ? parsingMode?.toUpperCase() && 'STD' : stryMutAct_9fa48("1299") ? false : stryMutAct_9fa48("1298") ? true : (stryCov_9fa48("1298", "1299", "1300"), (stryMutAct_9fa48("1302") ? parsingMode.toUpperCase() : stryMutAct_9fa48("1301") ? parsingMode?.toLowerCase() : (stryCov_9fa48("1301", "1302"), parsingMode?.toUpperCase())) || (stryMutAct_9fa48("1303") ? "" : (stryCov_9fa48("1303"), 'STD')))}</span>
            </div>
          </div>
        </div>
        
        <div className="card-light d-flex gap-6" style={stryMutAct_9fa48("1304") ? {} : (stryCov_9fa48("1304"), {
          padding: stryMutAct_9fa48("1305") ? "" : (stryCov_9fa48("1305"), '16px 24px'),
          background: stryMutAct_9fa48("1306") ? "" : (stryCov_9fa48("1306"), 'var(--bg-blue-light)'),
          border: stryMutAct_9fa48("1307") ? "" : (stryCov_9fa48("1307"), 'none')
        })}>
          {(stryMutAct_9fa48("1308") ? [] : (stryCov_9fa48("1308"), [stryMutAct_9fa48("1309") ? {} : (stryCov_9fa48("1309"), {
            label: stryMutAct_9fa48("1310") ? "" : (stryCov_9fa48("1310"), 'KPIs'),
            val: kpis.length
          }), stryMutAct_9fa48("1311") ? {} : (stryCov_9fa48("1311"), {
            label: stryMutAct_9fa48("1312") ? "" : (stryCov_9fa48("1312"), 'Risks'),
            val: risks.length
          }), stryMutAct_9fa48("1313") ? {} : (stryCov_9fa48("1313"), {
            label: stryMutAct_9fa48("1314") ? "" : (stryCov_9fa48("1314"), 'Recs'),
            val: recs.length
          }), stryMutAct_9fa48("1315") ? {} : (stryCov_9fa48("1315"), {
            label: stryMutAct_9fa48("1316") ? "" : (stryCov_9fa48("1316"), 'Rows'),
            val: rawData.length
          })])).map(stryMutAct_9fa48("1317") ? () => undefined : (stryCov_9fa48("1317"), ({
            label,
            val
          }) => <div key={label} className="text-center">
              <div className="metric-big" style={stryMutAct_9fa48("1318") ? {} : (stryCov_9fa48("1318"), {
              fontSize: stryMutAct_9fa48("1319") ? "" : (stryCov_9fa48("1319"), '20px'),
              marginBottom: stryMutAct_9fa48("1320") ? "" : (stryCov_9fa48("1320"), '2px')
            })}>{val}</div>
              <div className="sub-label" style={stryMutAct_9fa48("1321") ? {} : (stryCov_9fa48("1321"), {
              fontSize: stryMutAct_9fa48("1322") ? "" : (stryCov_9fa48("1322"), '9px'),
              marginBottom: 0
            })}>{label}</div>
            </div>))}
        </div>
      </div>
    </header>;
  }
}
function AIReportGenerator({
  analysisResult
}) {
  if (stryMutAct_9fa48("1323")) {
    {}
  } else {
    stryCov_9fa48("1323");
    const [format, setFormat] = useState(stryMutAct_9fa48("1324") ? "" : (stryCov_9fa48("1324"), 'executive'));
    const [report, setReport] = useState(stryMutAct_9fa48("1325") ? "Stryker was here!" : (stryCov_9fa48("1325"), ''));
    const [wordCount, setWordCount] = useState(0);
    const [loading, setLoading] = useState(stryMutAct_9fa48("1326") ? true : (stryCov_9fa48("1326"), false));
    const [error, setError] = useState(stryMutAct_9fa48("1327") ? "Stryker was here!" : (stryCov_9fa48("1327"), ''));
    const [downloaded, setDownloaded] = useState(stryMutAct_9fa48("1328") ? true : (stryCov_9fa48("1328"), false));
    const [pdfSaved, setPdfSaved] = useState(stryMutAct_9fa48("1329") ? true : (stryCov_9fa48("1329"), false));
    const selectedFmt = AI_REPORT_FORMATS.find(stryMutAct_9fa48("1330") ? () => undefined : (stryCov_9fa48("1330"), f => stryMutAct_9fa48("1333") ? f.id !== format : stryMutAct_9fa48("1332") ? false : stryMutAct_9fa48("1331") ? true : (stryCov_9fa48("1331", "1332", "1333"), f.id === format)));
    const generate = async () => {
      if (stryMutAct_9fa48("1334")) {
        {}
      } else {
        stryCov_9fa48("1334");
        setLoading(stryMutAct_9fa48("1335") ? false : (stryCov_9fa48("1335"), true));
        setError(stryMutAct_9fa48("1336") ? "Stryker was here!" : (stryCov_9fa48("1336"), ''));
        setReport(stryMutAct_9fa48("1337") ? "Stryker was here!" : (stryCov_9fa48("1337"), ''));
        setWordCount(0);
        try {
          if (stryMutAct_9fa48("1338")) {
            {}
          } else {
            stryCov_9fa48("1338");
            const res = await fetch(stryMutAct_9fa48("1339") ? `` : (stryCov_9fa48("1339"), `${API_BASE}/api/report/generate`), stryMutAct_9fa48("1340") ? {} : (stryCov_9fa48("1340"), {
              method: stryMutAct_9fa48("1341") ? "" : (stryCov_9fa48("1341"), 'POST'),
              headers: stryMutAct_9fa48("1342") ? {} : (stryCov_9fa48("1342"), {
                'Content-Type': stryMutAct_9fa48("1343") ? "" : (stryCov_9fa48("1343"), 'application/json')
              }),
              body: JSON.stringify(stryMutAct_9fa48("1344") ? {} : (stryCov_9fa48("1344"), {
                format_id: format,
                raw_data: stryMutAct_9fa48("1347") ? analysisResult?.raw_data && [] : stryMutAct_9fa48("1346") ? false : stryMutAct_9fa48("1345") ? true : (stryCov_9fa48("1345", "1346", "1347"), (stryMutAct_9fa48("1348") ? analysisResult.raw_data : (stryCov_9fa48("1348"), analysisResult?.raw_data)) || (stryMutAct_9fa48("1349") ? ["Stryker was here"] : (stryCov_9fa48("1349"), []))),
                column_headers: stryMutAct_9fa48("1352") ? analysisResult?.column_headers && [] : stryMutAct_9fa48("1351") ? false : stryMutAct_9fa48("1350") ? true : (stryCov_9fa48("1350", "1351", "1352"), (stryMutAct_9fa48("1353") ? analysisResult.column_headers : (stryCov_9fa48("1353"), analysisResult?.column_headers)) || (stryMutAct_9fa48("1354") ? ["Stryker was here"] : (stryCov_9fa48("1354"), []))),
                statement_type: stryMutAct_9fa48("1357") ? analysisResult?.statement_type && 'Financial Statement' : stryMutAct_9fa48("1356") ? false : stryMutAct_9fa48("1355") ? true : (stryCov_9fa48("1355", "1356", "1357"), (stryMutAct_9fa48("1358") ? analysisResult.statement_type : (stryCov_9fa48("1358"), analysisResult?.statement_type)) || (stryMutAct_9fa48("1359") ? "" : (stryCov_9fa48("1359"), 'Financial Statement'))),
                summary: stryMutAct_9fa48("1362") ? analysisResult?.summary && '' : stryMutAct_9fa48("1361") ? false : stryMutAct_9fa48("1360") ? true : (stryCov_9fa48("1360", "1361", "1362"), (stryMutAct_9fa48("1363") ? analysisResult.summary : (stryCov_9fa48("1363"), analysisResult?.summary)) || (stryMutAct_9fa48("1364") ? "Stryker was here!" : (stryCov_9fa48("1364"), ''))),
                kpis: stryMutAct_9fa48("1367") ? analysisResult?.kpis && [] : stryMutAct_9fa48("1366") ? false : stryMutAct_9fa48("1365") ? true : (stryCov_9fa48("1365", "1366", "1367"), (stryMutAct_9fa48("1368") ? analysisResult.kpis : (stryCov_9fa48("1368"), analysisResult?.kpis)) || (stryMutAct_9fa48("1369") ? ["Stryker was here"] : (stryCov_9fa48("1369"), []))),
                risks: stryMutAct_9fa48("1372") ? analysisResult?.risks && [] : stryMutAct_9fa48("1371") ? false : stryMutAct_9fa48("1370") ? true : (stryCov_9fa48("1370", "1371", "1372"), (stryMutAct_9fa48("1373") ? analysisResult.risks : (stryCov_9fa48("1373"), analysisResult?.risks)) || (stryMutAct_9fa48("1374") ? ["Stryker was here"] : (stryCov_9fa48("1374"), []))),
                recommendations: stryMutAct_9fa48("1377") ? analysisResult?.recommendations && [] : stryMutAct_9fa48("1376") ? false : stryMutAct_9fa48("1375") ? true : (stryCov_9fa48("1375", "1376", "1377"), (stryMutAct_9fa48("1378") ? analysisResult.recommendations : (stryCov_9fa48("1378"), analysisResult?.recommendations)) || (stryMutAct_9fa48("1379") ? ["Stryker was here"] : (stryCov_9fa48("1379"), []))),
                parsing_mode: stryMutAct_9fa48("1382") ? analysisResult?.parsing_mode && 'standard' : stryMutAct_9fa48("1381") ? false : stryMutAct_9fa48("1380") ? true : (stryCov_9fa48("1380", "1381", "1382"), (stryMutAct_9fa48("1383") ? analysisResult.parsing_mode : (stryCov_9fa48("1383"), analysisResult?.parsing_mode)) || (stryMutAct_9fa48("1384") ? "" : (stryCov_9fa48("1384"), 'standard')))
              }))
            }));
            if (stryMutAct_9fa48("1387") ? false : stryMutAct_9fa48("1386") ? true : stryMutAct_9fa48("1385") ? res.ok : (stryCov_9fa48("1385", "1386", "1387"), !res.ok)) throw new Error(stryMutAct_9fa48("1388") ? `` : (stryCov_9fa48("1388"), `HTTP error! status: ${res.status}`));
            const data = await res.json();
            setReport(data.report_markdown);
            setWordCount(data.word_count);
          }
        } catch (err) {
          if (stryMutAct_9fa48("1389")) {
            {}
          } else {
            stryCov_9fa48("1389");
            setError(stryMutAct_9fa48("1390") ? "" : (stryCov_9fa48("1390"), 'Generation failed. Please verify API connection.'));
          }
        } finally {
          if (stryMutAct_9fa48("1391")) {
            {}
          } else {
            stryCov_9fa48("1391");
            setLoading(stryMutAct_9fa48("1392") ? true : (stryCov_9fa48("1392"), false));
          }
        }
      }
    };
    const getHtmlPayload = () => {
      if (stryMutAct_9fa48("1393")) {
        {}
      } else {
        stryCov_9fa48("1393");
        const stmtType = stryMutAct_9fa48("1396") ? analysisResult?.statement_type && 'report' : stryMutAct_9fa48("1395") ? false : stryMutAct_9fa48("1394") ? true : (stryCov_9fa48("1394", "1395", "1396"), (stryMutAct_9fa48("1397") ? analysisResult.statement_type : (stryCov_9fa48("1397"), analysisResult?.statement_type)) || (stryMutAct_9fa48("1398") ? "" : (stryCov_9fa48("1398"), 'report')));
        const now = new Date().toLocaleDateString(stryMutAct_9fa48("1399") ? "" : (stryCov_9fa48("1399"), 'en-US'), stryMutAct_9fa48("1400") ? {} : (stryCov_9fa48("1400"), {
          year: stryMutAct_9fa48("1401") ? "" : (stryCov_9fa48("1401"), 'numeric'),
          month: stryMutAct_9fa48("1402") ? "" : (stryCov_9fa48("1402"), 'long'),
          day: stryMutAct_9fa48("1403") ? "" : (stryCov_9fa48("1403"), 'numeric')
        }));
        return buildReportHTML(stryMutAct_9fa48("1404") ? {} : (stryCov_9fa48("1404"), {
          selectedFmt,
          stmtType,
          now,
          report
        }));
      }
    };
    const downloadHTML = () => {
      if (stryMutAct_9fa48("1405")) {
        {}
      } else {
        stryCov_9fa48("1405");
        const html = getHtmlPayload();
        const blob = new Blob(stryMutAct_9fa48("1406") ? [] : (stryCov_9fa48("1406"), [html]), stryMutAct_9fa48("1407") ? {} : (stryCov_9fa48("1407"), {
          type: stryMutAct_9fa48("1408") ? "" : (stryCov_9fa48("1408"), 'text/html;charset=utf-8')
        }));
        const url = URL.createObjectURL(blob);
        const a = document.createElement(stryMutAct_9fa48("1409") ? "" : (stryCov_9fa48("1409"), 'a'));
        a.href = url;
        a.download = stryMutAct_9fa48("1410") ? `` : (stryCov_9fa48("1410"), `fingenie-report.html`);
        a.click();
        URL.revokeObjectURL(url);
        setDownloaded(stryMutAct_9fa48("1411") ? false : (stryCov_9fa48("1411"), true));
        setTimeout(stryMutAct_9fa48("1412") ? () => undefined : (stryCov_9fa48("1412"), () => setDownloaded(stryMutAct_9fa48("1413") ? true : (stryCov_9fa48("1413"), false))), 3000);
      }
    };
    const downloadPDF = () => {
      if (stryMutAct_9fa48("1414")) {
        {}
      } else {
        stryCov_9fa48("1414");
        printViaIframe(getHtmlPayload());
        setPdfSaved(stryMutAct_9fa48("1415") ? false : (stryCov_9fa48("1415"), true));
        setTimeout(stryMutAct_9fa48("1416") ? () => undefined : (stryCov_9fa48("1416"), () => setPdfSaved(stryMutAct_9fa48("1417") ? true : (stryCov_9fa48("1417"), false))), 3000);
      }
    };
    return <div className="ai-report-generator">
      <div className="mb-md">
        <h3 className="sub-label mb-sm">Select Intelligence Framework</h3>
        <div className="grid-cols-12" style={stryMutAct_9fa48("1418") ? {} : (stryCov_9fa48("1418"), {
          gap: stryMutAct_9fa48("1419") ? "" : (stryCov_9fa48("1419"), '12px')
        })}>
          {AI_REPORT_FORMATS.map(stryMutAct_9fa48("1420") ? () => undefined : (stryCov_9fa48("1420"), f => <div key={f.id} className={stryMutAct_9fa48("1421") ? `` : (stryCov_9fa48("1421"), `card-light hover-lift col-span-4 ${(stryMutAct_9fa48("1424") ? format !== f.id : stryMutAct_9fa48("1423") ? false : stryMutAct_9fa48("1422") ? true : (stryCov_9fa48("1422", "1423", "1424"), format === f.id)) ? stryMutAct_9fa48("1425") ? "" : (stryCov_9fa48("1425"), 'active-border') : stryMutAct_9fa48("1426") ? "Stryker was here!" : (stryCov_9fa48("1426"), '')}`)} onClick={stryMutAct_9fa48("1427") ? () => undefined : (stryCov_9fa48("1427"), () => setFormat(f.id))} style={stryMutAct_9fa48("1428") ? {} : (stryCov_9fa48("1428"), {
            cursor: stryMutAct_9fa48("1429") ? "" : (stryCov_9fa48("1429"), 'pointer'),
            padding: stryMutAct_9fa48("1430") ? "" : (stryCov_9fa48("1430"), '16px'),
            border: (stryMutAct_9fa48("1433") ? format !== f.id : stryMutAct_9fa48("1432") ? false : stryMutAct_9fa48("1431") ? true : (stryCov_9fa48("1431", "1432", "1433"), format === f.id)) ? stryMutAct_9fa48("1434") ? "" : (stryCov_9fa48("1434"), '2px solid var(--accent-blue)') : stryMutAct_9fa48("1435") ? "" : (stryCov_9fa48("1435"), '1px solid var(--border-light)'),
            background: (stryMutAct_9fa48("1438") ? format !== f.id : stryMutAct_9fa48("1437") ? false : stryMutAct_9fa48("1436") ? true : (stryCov_9fa48("1436", "1437", "1438"), format === f.id)) ? stryMutAct_9fa48("1439") ? "" : (stryCov_9fa48("1439"), 'var(--bg-blue-light)') : stryMutAct_9fa48("1440") ? "" : (stryCov_9fa48("1440"), 'white')
          })}>
              <div className="d-flex items-center gap-3 mb-xs">
                <f.Icon size={18} className={(stryMutAct_9fa48("1443") ? format !== f.id : stryMutAct_9fa48("1442") ? false : stryMutAct_9fa48("1441") ? true : (stryCov_9fa48("1441", "1442", "1443"), format === f.id)) ? stryMutAct_9fa48("1444") ? "" : (stryCov_9fa48("1444"), 'text-accent') : stryMutAct_9fa48("1445") ? "" : (stryCov_9fa48("1445"), 'text-secondary')} />
                <span className="font-bold text-primary" style={stryMutAct_9fa48("1446") ? {} : (stryCov_9fa48("1446"), {
                fontSize: stryMutAct_9fa48("1447") ? "" : (stryCov_9fa48("1447"), '14px')
              })}>{f.label}</span>
              </div>
              <p className="text-secondary" style={stryMutAct_9fa48("1448") ? {} : (stryCov_9fa48("1448"), {
              fontSize: stryMutAct_9fa48("1449") ? "" : (stryCov_9fa48("1449"), '11px'),
              margin: 0
            })}>{f.desc}</p>
            </div>))}
        </div>
      </div>

      <button className={stryMutAct_9fa48("1450") ? `` : (stryCov_9fa48("1450"), `btn-primary w-full mt-md d-flex items-center justify-center gap-3 ${loading ? stryMutAct_9fa48("1451") ? "" : (stryCov_9fa48("1451"), 'loading') : stryMutAct_9fa48("1452") ? "Stryker was here!" : (stryCov_9fa48("1452"), '')}`)} onClick={generate} disabled={loading} style={stryMutAct_9fa48("1453") ? {} : (stryCov_9fa48("1453"), {
        padding: stryMutAct_9fa48("1454") ? "" : (stryCov_9fa48("1454"), '16px')
      })}>
        {loading ? <Sparkles className="animate-spin" size={18} /> : <selectedFmt.Icon size={18} />}
        <span>{loading ? stryMutAct_9fa48("1455") ? "" : (stryCov_9fa48("1455"), 'Synthesizing Narrative...') : stryMutAct_9fa48("1456") ? `` : (stryCov_9fa48("1456"), `Compose ${selectedFmt.label}`)}</span>
      </button>

      {stryMutAct_9fa48("1459") ? error || <div className="error-badge mt-md text-rose font-bold text-center">{error}</div> : stryMutAct_9fa48("1458") ? false : stryMutAct_9fa48("1457") ? true : (stryCov_9fa48("1457", "1458", "1459"), error && <div className="error-badge mt-md text-rose font-bold text-center">{error}</div>)}

      {stryMutAct_9fa48("1462") ? report || <div className="ai-report-output fade-in mt-xl">
          <div className="ai-report-toolbar d-flex justify-between items-center mb-md p-sm" style={{
          background: 'var(--bg-navy)',
          borderRadius: 'var(--radius-md) var(--radius-md) 0 0',
          color: 'white'
        }}>
            <div className="d-flex items-center gap-3">
              <selectedFmt.Icon size={16} className="text-accent" />
              <span className="font-bold" style={{
              fontSize: '14px'
            }}>DRAFT: {selectedFmt.label}</span>
            </div>
            <div className="d-flex gap-2">
              <button className="nav-item active d-flex items-center gap-2" style={{
              fontSize: '11px',
              padding: '6px 12px'
            }} onClick={downloadHTML}>
                {downloaded ? <CheckCircle2 size={12} /> : <Download size={12} />}
                <span>{downloaded ? 'Saved' : 'HTML'}</span>
              </button>
              <button className="btn-primary d-flex items-center gap-2" style={{
              fontSize: '11px',
              padding: '6px 12px'
            }} onClick={downloadPDF}>
                {pdfSaved ? <CheckCircle2 size={12} /> : <Printer size={12} />}
                <span>{pdfSaved ? 'Sent' : 'PDF'}</span>
              </button>
            </div>
          </div>
          <div className="ai-report-content card-light" style={{
          borderRadius: '0 0 var(--radius-md) var(--radius-md)',
          padding: '40px',
          borderTop: 'none'
        }}>
            <div dangerouslySetInnerHTML={{
            __html: mdToHtml(report)
          }} />
          </div>
        </div> : stryMutAct_9fa48("1461") ? false : stryMutAct_9fa48("1460") ? true : (stryCov_9fa48("1460", "1461", "1462"), report && <div className="ai-report-output fade-in mt-xl">
          <div className="ai-report-toolbar d-flex justify-between items-center mb-md p-sm" style={stryMutAct_9fa48("1463") ? {} : (stryCov_9fa48("1463"), {
          background: stryMutAct_9fa48("1464") ? "" : (stryCov_9fa48("1464"), 'var(--bg-navy)'),
          borderRadius: stryMutAct_9fa48("1465") ? "" : (stryCov_9fa48("1465"), 'var(--radius-md) var(--radius-md) 0 0'),
          color: stryMutAct_9fa48("1466") ? "" : (stryCov_9fa48("1466"), 'white')
        })}>
            <div className="d-flex items-center gap-3">
              <selectedFmt.Icon size={16} className="text-accent" />
              <span className="font-bold" style={stryMutAct_9fa48("1467") ? {} : (stryCov_9fa48("1467"), {
              fontSize: stryMutAct_9fa48("1468") ? "" : (stryCov_9fa48("1468"), '14px')
            })}>DRAFT: {selectedFmt.label}</span>
            </div>
            <div className="d-flex gap-2">
              <button className="nav-item active d-flex items-center gap-2" style={stryMutAct_9fa48("1469") ? {} : (stryCov_9fa48("1469"), {
              fontSize: stryMutAct_9fa48("1470") ? "" : (stryCov_9fa48("1470"), '11px'),
              padding: stryMutAct_9fa48("1471") ? "" : (stryCov_9fa48("1471"), '6px 12px')
            })} onClick={downloadHTML}>
                {downloaded ? <CheckCircle2 size={12} /> : <Download size={12} />}
                <span>{downloaded ? stryMutAct_9fa48("1472") ? "" : (stryCov_9fa48("1472"), 'Saved') : stryMutAct_9fa48("1473") ? "" : (stryCov_9fa48("1473"), 'HTML')}</span>
              </button>
              <button className="btn-primary d-flex items-center gap-2" style={stryMutAct_9fa48("1474") ? {} : (stryCov_9fa48("1474"), {
              fontSize: stryMutAct_9fa48("1475") ? "" : (stryCov_9fa48("1475"), '11px'),
              padding: stryMutAct_9fa48("1476") ? "" : (stryCov_9fa48("1476"), '6px 12px')
            })} onClick={downloadPDF}>
                {pdfSaved ? <CheckCircle2 size={12} /> : <Printer size={12} />}
                <span>{pdfSaved ? stryMutAct_9fa48("1477") ? "" : (stryCov_9fa48("1477"), 'Sent') : stryMutAct_9fa48("1478") ? "" : (stryCov_9fa48("1478"), 'PDF')}</span>
              </button>
            </div>
          </div>
          <div className="ai-report-content card-light" style={stryMutAct_9fa48("1479") ? {} : (stryCov_9fa48("1479"), {
          borderRadius: stryMutAct_9fa48("1480") ? "" : (stryCov_9fa48("1480"), '0 0 var(--radius-md) var(--radius-md)'),
          padding: stryMutAct_9fa48("1481") ? "" : (stryCov_9fa48("1481"), '40px'),
          borderTop: stryMutAct_9fa48("1482") ? "" : (stryCov_9fa48("1482"), 'none')
        })}>
            <div dangerouslySetInnerHTML={stryMutAct_9fa48("1483") ? {} : (stryCov_9fa48("1483"), {
            __html: mdToHtml(report)
          })} />
          </div>
        </div>)}
    </div>;
  }
}
export default function ReportCenter({
  analysisResult
}) {
  if (stryMutAct_9fa48("1484")) {
    {}
  } else {
    stryCov_9fa48("1484");
    const [activeLayer, setActiveLayer] = useState(stryMutAct_9fa48("1485") ? "" : (stryCov_9fa48("1485"), 'ai'));
    if (stryMutAct_9fa48("1488") ? false : stryMutAct_9fa48("1487") ? true : stryMutAct_9fa48("1486") ? analysisResult : (stryCov_9fa48("1486", "1487", "1488"), !analysisResult)) return null;
    return <section className="report-center-section fade-in">
      <ReportCenterHeader analysisResult={analysisResult} />

      <div className="mb-xl">
        <h3 className="section-heading__label mb-md" style={stryMutAct_9fa48("1489") ? {} : (stryCov_9fa48("1489"), {
          color: stryMutAct_9fa48("1490") ? "" : (stryCov_9fa48("1490"), 'var(--text-muted)')
        })}>Output Orchestration</h3>
        <div className="nav-links" style={stryMutAct_9fa48("1491") ? {} : (stryCov_9fa48("1491"), {
          width: stryMutAct_9fa48("1492") ? "" : (stryCov_9fa48("1492"), 'fit-content'),
          background: stryMutAct_9fa48("1493") ? "" : (stryCov_9fa48("1493"), 'var(--bg-blue-subtle)'),
          padding: stryMutAct_9fa48("1494") ? "" : (stryCov_9fa48("1494"), '4px'),
          borderRadius: stryMutAct_9fa48("1495") ? "" : (stryCov_9fa48("1495"), '12px')
        })}>
          <button className={stryMutAct_9fa48("1496") ? `` : (stryCov_9fa48("1496"), `nav-item ${(stryMutAct_9fa48("1499") ? activeLayer !== 'ai' : stryMutAct_9fa48("1498") ? false : stryMutAct_9fa48("1497") ? true : (stryCov_9fa48("1497", "1498", "1499"), activeLayer === (stryMutAct_9fa48("1500") ? "" : (stryCov_9fa48("1500"), 'ai')))) ? stryMutAct_9fa48("1501") ? "" : (stryCov_9fa48("1501"), 'active') : stryMutAct_9fa48("1502") ? "Stryker was here!" : (stryCov_9fa48("1502"), '')}`)} onClick={stryMutAct_9fa48("1503") ? () => undefined : (stryCov_9fa48("1503"), () => setActiveLayer(stryMutAct_9fa48("1504") ? "" : (stryCov_9fa48("1504"), 'ai')))} style={stryMutAct_9fa48("1505") ? {} : (stryCov_9fa48("1505"), {
            display: stryMutAct_9fa48("1506") ? "" : (stryCov_9fa48("1506"), 'flex'),
            alignItems: stryMutAct_9fa48("1507") ? "" : (stryCov_9fa48("1507"), 'center'),
            gap: stryMutAct_9fa48("1508") ? "" : (stryCov_9fa48("1508"), '8px')
          })}>
            <Sparkles size={14} />
            <span>AI Narrative</span>
          </button>
          <button className={stryMutAct_9fa48("1509") ? `` : (stryCov_9fa48("1509"), `nav-item ${(stryMutAct_9fa48("1512") ? activeLayer !== 'export' : stryMutAct_9fa48("1511") ? false : stryMutAct_9fa48("1510") ? true : (stryCov_9fa48("1510", "1511", "1512"), activeLayer === (stryMutAct_9fa48("1513") ? "" : (stryCov_9fa48("1513"), 'export')))) ? stryMutAct_9fa48("1514") ? "" : (stryCov_9fa48("1514"), 'active') : stryMutAct_9fa48("1515") ? "Stryker was here!" : (stryCov_9fa48("1515"), '')}`)} onClick={stryMutAct_9fa48("1516") ? () => undefined : (stryCov_9fa48("1516"), () => setActiveLayer(stryMutAct_9fa48("1517") ? "" : (stryCov_9fa48("1517"), 'export')))} style={stryMutAct_9fa48("1518") ? {} : (stryCov_9fa48("1518"), {
            display: stryMutAct_9fa48("1519") ? "" : (stryCov_9fa48("1519"), 'flex'),
            alignItems: stryMutAct_9fa48("1520") ? "" : (stryCov_9fa48("1520"), 'center'),
            gap: stryMutAct_9fa48("1521") ? "" : (stryCov_9fa48("1521"), '8px')
          })}>
            <Box size={14} />
            <span>Structured Export</span>
          </button>
        </div>
      </div>

      <div className="layer-panels">
        {(stryMutAct_9fa48("1524") ? activeLayer !== 'ai' : stryMutAct_9fa48("1523") ? false : stryMutAct_9fa48("1522") ? true : (stryCov_9fa48("1522", "1523", "1524"), activeLayer === (stryMutAct_9fa48("1525") ? "" : (stryCov_9fa48("1525"), 'ai')))) ? <AIReportGenerator analysisResult={analysisResult} /> : <div data-testid="export-suite"><ExportSuite analysisResult={analysisResult} /></div>}
      </div>
    </section>;
  }
}