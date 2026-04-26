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
const API_BASE = stryMutAct_9fa48("961") ? import.meta.env.VITE_API_BASE_URL && 'http://localhost:8000' : stryMutAct_9fa48("960") ? false : stryMutAct_9fa48("959") ? true : (stryCov_9fa48("959", "960", "961"), import.meta.env.VITE_API_BASE_URL || (stryMutAct_9fa48("962") ? "" : (stryCov_9fa48("962"), 'http://localhost:8000')));
const AI_REPORT_FORMATS = stryMutAct_9fa48("963") ? [] : (stryCov_9fa48("963"), [stryMutAct_9fa48("964") ? {} : (stryCov_9fa48("964"), {
  id: stryMutAct_9fa48("965") ? "" : (stryCov_9fa48("965"), 'executive'),
  Icon: FileText,
  label: stryMutAct_9fa48("966") ? "" : (stryCov_9fa48("966"), 'Executive Brief'),
  desc: stryMutAct_9fa48("967") ? "" : (stryCov_9fa48("967"), 'Concise strategic summary for C-suite')
}), stryMutAct_9fa48("968") ? {} : (stryCov_9fa48("968"), {
  id: stryMutAct_9fa48("969") ? "" : (stryCov_9fa48("969"), 'investor'),
  Icon: TrendingUp,
  label: stryMutAct_9fa48("970") ? "" : (stryCov_9fa48("970"), 'Investor Memo'),
  desc: stryMutAct_9fa48("971") ? "" : (stryCov_9fa48("971"), 'Growth narrative & opportunity framing')
}), stryMutAct_9fa48("972") ? {} : (stryCov_9fa48("972"), {
  id: stryMutAct_9fa48("973") ? "" : (stryCov_9fa48("973"), 'audit'),
  Icon: Search,
  label: stryMutAct_9fa48("974") ? "" : (stryCov_9fa48("974"), 'Internal Audit'),
  desc: stryMutAct_9fa48("975") ? "" : (stryCov_9fa48("975"), 'Detailed compliance & risk analysis')
}), stryMutAct_9fa48("976") ? {} : (stryCov_9fa48("976"), {
  id: stryMutAct_9fa48("977") ? "" : (stryCov_9fa48("977"), 'board'),
  Icon: Building2,
  label: stryMutAct_9fa48("978") ? "" : (stryCov_9fa48("978"), 'Board Update'),
  desc: stryMutAct_9fa48("979") ? "" : (stryCov_9fa48("979"), 'Governance-focused balanced overview')
}), stryMutAct_9fa48("980") ? {} : (stryCov_9fa48("980"), {
  id: stryMutAct_9fa48("981") ? "" : (stryCov_9fa48("981"), 'startup'),
  Icon: Rocket,
  label: stryMutAct_9fa48("982") ? "" : (stryCov_9fa48("982"), 'Pitch Narrative'),
  desc: stryMutAct_9fa48("983") ? "" : (stryCov_9fa48("983"), 'Fundraising-ready energetic framing')
}), stryMutAct_9fa48("984") ? {} : (stryCov_9fa48("984"), {
  id: stryMutAct_9fa48("985") ? "" : (stryCov_9fa48("985"), 'academic'),
  Icon: GraduationCap,
  label: stryMutAct_9fa48("986") ? "" : (stryCov_9fa48("986"), 'Research Paper'),
  desc: stryMutAct_9fa48("987") ? "" : (stryCov_9fa48("987"), 'Structured, methodology-driven analysis')
})]);
function escapeHtml(text) {
  if (stryMutAct_9fa48("988")) {
    {}
  } else {
    stryCov_9fa48("988");
    const map = stryMutAct_9fa48("989") ? {} : (stryCov_9fa48("989"), {
      '&': stryMutAct_9fa48("990") ? "" : (stryCov_9fa48("990"), '&amp;'),
      '<': stryMutAct_9fa48("991") ? "" : (stryCov_9fa48("991"), '&lt;'),
      '>': stryMutAct_9fa48("992") ? "" : (stryCov_9fa48("992"), '&gt;'),
      '"': stryMutAct_9fa48("993") ? "" : (stryCov_9fa48("993"), '&quot;'),
      "'": stryMutAct_9fa48("994") ? "" : (stryCov_9fa48("994"), '&#039;')
    });
    return String(text).replace(stryMutAct_9fa48("995") ? /[^&<>"']/g : (stryCov_9fa48("995"), /[&<>"']/g), stryMutAct_9fa48("996") ? () => undefined : (stryCov_9fa48("996"), m => map[m]));
  }
}
function mdToHtml(md) {
  if (stryMutAct_9fa48("997")) {
    {}
  } else {
    stryCov_9fa48("997");
    if (stryMutAct_9fa48("1000") ? false : stryMutAct_9fa48("999") ? true : stryMutAct_9fa48("998") ? md : (stryCov_9fa48("998", "999", "1000"), !md)) return stryMutAct_9fa48("1001") ? "Stryker was here!" : (stryCov_9fa48("1001"), '');
    let escaped = escapeHtml(md);
    escaped = escaped.replace(stryMutAct_9fa48("1002") ? /&lt;strong&gt;(.)&lt;\/strong&gt;/g : (stryCov_9fa48("1002"), /&lt;strong&gt;(.+?)&lt;\/strong&gt;/g), stryMutAct_9fa48("1003") ? "" : (stryCov_9fa48("1003"), '<strong>$1</strong>')).replace(stryMutAct_9fa48("1004") ? /\*\*(.)\*\*/g : (stryCov_9fa48("1004"), /\*\*(.+?)\*\*/g), stryMutAct_9fa48("1005") ? "" : (stryCov_9fa48("1005"), '<strong>$1</strong>')).replace(stryMutAct_9fa48("1006") ? /\*(.)\*/g : (stryCov_9fa48("1006"), /\*(.+?)\*/g), stryMutAct_9fa48("1007") ? "" : (stryCov_9fa48("1007"), '<em>$1</em>')).replace(stryMutAct_9fa48("1010") ? /^### (.)$/gm : stryMutAct_9fa48("1009") ? /^### (.+)/gm : stryMutAct_9fa48("1008") ? /### (.+)$/gm : (stryCov_9fa48("1008", "1009", "1010"), /^### (.+)$/gm), stryMutAct_9fa48("1011") ? "" : (stryCov_9fa48("1011"), '<h3 class="ai-report-h3">$1</h3>')).replace(stryMutAct_9fa48("1014") ? /^## (.)$/gm : stryMutAct_9fa48("1013") ? /^## (.+)/gm : stryMutAct_9fa48("1012") ? /## (.+)$/gm : (stryCov_9fa48("1012", "1013", "1014"), /^## (.+)$/gm), stryMutAct_9fa48("1015") ? "" : (stryCov_9fa48("1015"), '<h2 class="ai-report-h2">$1</h2>')).replace(stryMutAct_9fa48("1019") ? /^[•\-] (.)$/gm : stryMutAct_9fa48("1018") ? /^[^•\-] (.+)$/gm : stryMutAct_9fa48("1017") ? /^[•\-] (.+)/gm : stryMutAct_9fa48("1016") ? /[•\-] (.+)$/gm : (stryCov_9fa48("1016", "1017", "1018", "1019"), /^[•\-] (.+)$/gm), stryMutAct_9fa48("1020") ? "" : (stryCov_9fa48("1020"), '<li>$1</li>')).replace(stryMutAct_9fa48("1025") ? /^(\d+)\. (.)$/gm : stryMutAct_9fa48("1024") ? /^(\D+)\. (.+)$/gm : stryMutAct_9fa48("1023") ? /^(\d)\. (.+)$/gm : stryMutAct_9fa48("1022") ? /^(\d+)\. (.+)/gm : stryMutAct_9fa48("1021") ? /(\d+)\. (.+)$/gm : (stryCov_9fa48("1021", "1022", "1023", "1024", "1025"), /^(\d+)\. (.+)$/gm), stryMutAct_9fa48("1026") ? "" : (stryCov_9fa48("1026"), '<li><span class="ai-report-num">$1</span> $2</li>')).replace(stryMutAct_9fa48("1032") ? /(<li>[\s\S]+?<\/li>)(?=\n<li>|\n\n)/g : stryMutAct_9fa48("1031") ? /(<li>[\s\S]+?<\/li>)(?!\n<li>|\n\n|$)/g : stryMutAct_9fa48("1030") ? /(<li>[\s\s]+?<\/li>)(?=\n<li>|\n\n|$)/g : stryMutAct_9fa48("1029") ? /(<li>[\S\S]+?<\/li>)(?=\n<li>|\n\n|$)/g : stryMutAct_9fa48("1028") ? /(<li>[^\s\S]+?<\/li>)(?=\n<li>|\n\n|$)/g : stryMutAct_9fa48("1027") ? /(<li>[\s\S]<\/li>)(?=\n<li>|\n\n|$)/g : (stryCov_9fa48("1027", "1028", "1029", "1030", "1031", "1032"), /(<li>[\s\S]+?<\/li>)(?=\n<li>|\n\n|$)/g), stryMutAct_9fa48("1033") ? "" : (stryCov_9fa48("1033"), '<ul>$&</ul>')).replace(/<\/ul>\n<ul>/g, stryMutAct_9fa48("1034") ? "Stryker was here!" : (stryCov_9fa48("1034"), '')).replace(stryMutAct_9fa48("1039") ? /^(?!<[hul])(.)$/gm : stryMutAct_9fa48("1038") ? /^(?!<[^hul])(.+)$/gm : stryMutAct_9fa48("1037") ? /^(?=<[hul])(.+)$/gm : stryMutAct_9fa48("1036") ? /^(?!<[hul])(.+)/gm : stryMutAct_9fa48("1035") ? /(?!<[hul])(.+)$/gm : (stryCov_9fa48("1035", "1036", "1037", "1038", "1039"), /^(?!<[hul])(.+)$/gm), stryMutAct_9fa48("1040") ? "" : (stryCov_9fa48("1040"), '<p>$1</p>')).replace(stryMutAct_9fa48("1042") ? /<p>\S*<\/p>/g : stryMutAct_9fa48("1041") ? /<p>\s<\/p>/g : (stryCov_9fa48("1041", "1042"), /<p>\s*<\/p>/g), stryMutAct_9fa48("1043") ? "Stryker was here!" : (stryCov_9fa48("1043"), ''));
    return escaped;
  }
}
function buildReportHTML({
  selectedFmt,
  stmtType,
  now,
  report
}) {
  if (stryMutAct_9fa48("1044")) {
    {}
  } else {
    stryCov_9fa48("1044");
    return stryMutAct_9fa48("1045") ? `` : (stryCov_9fa48("1045"), `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<title>FinGenie — ${stryMutAct_9fa48("1046") ? selectedFmt.label : (stryCov_9fa48("1046"), selectedFmt?.label)}</title>
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
  <div class="cover-title">${stryMutAct_9fa48("1047") ? selectedFmt.label : (stryCov_9fa48("1047"), selectedFmt?.label)}</div>
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
  if (stryMutAct_9fa48("1048")) {
    {}
  } else {
    stryCov_9fa48("1048");
    const iframe = document.createElement(stryMutAct_9fa48("1049") ? "" : (stryCov_9fa48("1049"), 'iframe'));
    iframe.style.cssText = stryMutAct_9fa48("1050") ? "" : (stryCov_9fa48("1050"), 'position:fixed;top:-9999px;left:-9999px;width:0;height:0;border:none;visibility:hidden;');
    document.body.appendChild(iframe);
    const doc = stryMutAct_9fa48("1053") ? iframe.contentDocument && iframe.contentWindow.document : stryMutAct_9fa48("1052") ? false : stryMutAct_9fa48("1051") ? true : (stryCov_9fa48("1051", "1052", "1053"), iframe.contentDocument || iframe.contentWindow.document);
    doc.open();
    doc.write(html);
    doc.close();
    setTimeout(() => {
      if (stryMutAct_9fa48("1054")) {
        {}
      } else {
        stryCov_9fa48("1054");
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
        setTimeout(() => {
          if (stryMutAct_9fa48("1055")) {
            {}
          } else {
            stryCov_9fa48("1055");
            if (stryMutAct_9fa48("1057") ? false : stryMutAct_9fa48("1056") ? true : (stryCov_9fa48("1056", "1057"), document.body.contains(iframe))) document.body.removeChild(iframe);
          }
        }, 3000);
      }
    }, 500);
  }
}
function ReportCenterHeader({
  analysisResult
}) {
  if (stryMutAct_9fa48("1058")) {
    {}
  } else {
    stryCov_9fa48("1058");
    const {
      kpis = stryMutAct_9fa48("1059") ? ["Stryker was here"] : (stryCov_9fa48("1059"), []),
      risks = stryMutAct_9fa48("1060") ? ["Stryker was here"] : (stryCov_9fa48("1060"), []),
      recommendations: recs = stryMutAct_9fa48("1061") ? ["Stryker was here"] : (stryCov_9fa48("1061"), []),
      raw_data: rawData = stryMutAct_9fa48("1062") ? ["Stryker was here"] : (stryCov_9fa48("1062"), []),
      statement_type: stmtType,
      parsing_mode: parsingMode
    } = analysisResult;
    return <header className="page-header mb-xl pb-lg" style={stryMutAct_9fa48("1063") ? {} : (stryCov_9fa48("1063"), {
      borderBottom: stryMutAct_9fa48("1064") ? "" : (stryCov_9fa48("1064"), '1px solid var(--border-light)')
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
            <div className="d-flex items-center gap-2 text-secondary" style={stryMutAct_9fa48("1065") ? {} : (stryCov_9fa48("1065"), {
              fontSize: stryMutAct_9fa48("1066") ? "" : (stryCov_9fa48("1066"), '13px'),
              fontWeight: 600
            })}>
              <Hash size={14} className="text-muted" />
              <span>TYPE: {stryMutAct_9fa48("1069") ? stmtType?.toUpperCase() && 'FIN-REP' : stryMutAct_9fa48("1068") ? false : stryMutAct_9fa48("1067") ? true : (stryCov_9fa48("1067", "1068", "1069"), (stryMutAct_9fa48("1071") ? stmtType.toUpperCase() : stryMutAct_9fa48("1070") ? stmtType?.toLowerCase() : (stryCov_9fa48("1070", "1071"), stmtType?.toUpperCase())) || (stryMutAct_9fa48("1072") ? "" : (stryCov_9fa48("1072"), 'FIN-REP')))}</span>
            </div>
            <div className="d-flex items-center gap-2 text-secondary" style={stryMutAct_9fa48("1073") ? {} : (stryCov_9fa48("1073"), {
              fontSize: stryMutAct_9fa48("1074") ? "" : (stryCov_9fa48("1074"), '13px'),
              fontWeight: 600
            })}>
              <Cpu size={14} className="text-muted" />
              <span>LOGIC: {stryMutAct_9fa48("1077") ? parsingMode?.toUpperCase() && 'STD' : stryMutAct_9fa48("1076") ? false : stryMutAct_9fa48("1075") ? true : (stryCov_9fa48("1075", "1076", "1077"), (stryMutAct_9fa48("1079") ? parsingMode.toUpperCase() : stryMutAct_9fa48("1078") ? parsingMode?.toLowerCase() : (stryCov_9fa48("1078", "1079"), parsingMode?.toUpperCase())) || (stryMutAct_9fa48("1080") ? "" : (stryCov_9fa48("1080"), 'STD')))}</span>
            </div>
          </div>
        </div>
        
        <div className="card-light d-flex gap-6" style={stryMutAct_9fa48("1081") ? {} : (stryCov_9fa48("1081"), {
          padding: stryMutAct_9fa48("1082") ? "" : (stryCov_9fa48("1082"), '16px 24px'),
          background: stryMutAct_9fa48("1083") ? "" : (stryCov_9fa48("1083"), 'var(--bg-blue-light)'),
          border: stryMutAct_9fa48("1084") ? "" : (stryCov_9fa48("1084"), 'none')
        })}>
          {(stryMutAct_9fa48("1085") ? [] : (stryCov_9fa48("1085"), [stryMutAct_9fa48("1086") ? {} : (stryCov_9fa48("1086"), {
            label: stryMutAct_9fa48("1087") ? "" : (stryCov_9fa48("1087"), 'KPIs'),
            val: kpis.length
          }), stryMutAct_9fa48("1088") ? {} : (stryCov_9fa48("1088"), {
            label: stryMutAct_9fa48("1089") ? "" : (stryCov_9fa48("1089"), 'Risks'),
            val: risks.length
          }), stryMutAct_9fa48("1090") ? {} : (stryCov_9fa48("1090"), {
            label: stryMutAct_9fa48("1091") ? "" : (stryCov_9fa48("1091"), 'Recs'),
            val: recs.length
          }), stryMutAct_9fa48("1092") ? {} : (stryCov_9fa48("1092"), {
            label: stryMutAct_9fa48("1093") ? "" : (stryCov_9fa48("1093"), 'Rows'),
            val: rawData.length
          })])).map(stryMutAct_9fa48("1094") ? () => undefined : (stryCov_9fa48("1094"), ({
            label,
            val
          }) => <div key={label} className="text-center">
              <div className="metric-big" style={stryMutAct_9fa48("1095") ? {} : (stryCov_9fa48("1095"), {
              fontSize: stryMutAct_9fa48("1096") ? "" : (stryCov_9fa48("1096"), '20px'),
              marginBottom: stryMutAct_9fa48("1097") ? "" : (stryCov_9fa48("1097"), '2px')
            })}>{val}</div>
              <div className="sub-label" style={stryMutAct_9fa48("1098") ? {} : (stryCov_9fa48("1098"), {
              fontSize: stryMutAct_9fa48("1099") ? "" : (stryCov_9fa48("1099"), '9px'),
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
  if (stryMutAct_9fa48("1100")) {
    {}
  } else {
    stryCov_9fa48("1100");
    const [format, setFormat] = useState(stryMutAct_9fa48("1101") ? "" : (stryCov_9fa48("1101"), 'executive'));
    const [report, setReport] = useState(stryMutAct_9fa48("1102") ? "Stryker was here!" : (stryCov_9fa48("1102"), ''));
    const [wordCount, setWordCount] = useState(0);
    const [loading, setLoading] = useState(stryMutAct_9fa48("1103") ? true : (stryCov_9fa48("1103"), false));
    const [error, setError] = useState(stryMutAct_9fa48("1104") ? "Stryker was here!" : (stryCov_9fa48("1104"), ''));
    const [downloaded, setDownloaded] = useState(stryMutAct_9fa48("1105") ? true : (stryCov_9fa48("1105"), false));
    const [pdfSaved, setPdfSaved] = useState(stryMutAct_9fa48("1106") ? true : (stryCov_9fa48("1106"), false));
    const selectedFmt = AI_REPORT_FORMATS.find(stryMutAct_9fa48("1107") ? () => undefined : (stryCov_9fa48("1107"), f => stryMutAct_9fa48("1110") ? f.id !== format : stryMutAct_9fa48("1109") ? false : stryMutAct_9fa48("1108") ? true : (stryCov_9fa48("1108", "1109", "1110"), f.id === format)));
    const generate = async () => {
      if (stryMutAct_9fa48("1111")) {
        {}
      } else {
        stryCov_9fa48("1111");
        setLoading(stryMutAct_9fa48("1112") ? false : (stryCov_9fa48("1112"), true));
        setError(stryMutAct_9fa48("1113") ? "Stryker was here!" : (stryCov_9fa48("1113"), ''));
        setReport(stryMutAct_9fa48("1114") ? "Stryker was here!" : (stryCov_9fa48("1114"), ''));
        setWordCount(0);
        try {
          if (stryMutAct_9fa48("1115")) {
            {}
          } else {
            stryCov_9fa48("1115");
            const res = await fetch(stryMutAct_9fa48("1116") ? `` : (stryCov_9fa48("1116"), `${API_BASE}/api/report/generate`), stryMutAct_9fa48("1117") ? {} : (stryCov_9fa48("1117"), {
              method: stryMutAct_9fa48("1118") ? "" : (stryCov_9fa48("1118"), 'POST'),
              headers: stryMutAct_9fa48("1119") ? {} : (stryCov_9fa48("1119"), {
                'Content-Type': stryMutAct_9fa48("1120") ? "" : (stryCov_9fa48("1120"), 'application/json')
              }),
              body: JSON.stringify(stryMutAct_9fa48("1121") ? {} : (stryCov_9fa48("1121"), {
                format_id: format,
                raw_data: stryMutAct_9fa48("1124") ? analysisResult?.raw_data && [] : stryMutAct_9fa48("1123") ? false : stryMutAct_9fa48("1122") ? true : (stryCov_9fa48("1122", "1123", "1124"), (stryMutAct_9fa48("1125") ? analysisResult.raw_data : (stryCov_9fa48("1125"), analysisResult?.raw_data)) || (stryMutAct_9fa48("1126") ? ["Stryker was here"] : (stryCov_9fa48("1126"), []))),
                column_headers: stryMutAct_9fa48("1129") ? analysisResult?.column_headers && [] : stryMutAct_9fa48("1128") ? false : stryMutAct_9fa48("1127") ? true : (stryCov_9fa48("1127", "1128", "1129"), (stryMutAct_9fa48("1130") ? analysisResult.column_headers : (stryCov_9fa48("1130"), analysisResult?.column_headers)) || (stryMutAct_9fa48("1131") ? ["Stryker was here"] : (stryCov_9fa48("1131"), []))),
                statement_type: stryMutAct_9fa48("1134") ? analysisResult?.statement_type && 'Financial Statement' : stryMutAct_9fa48("1133") ? false : stryMutAct_9fa48("1132") ? true : (stryCov_9fa48("1132", "1133", "1134"), (stryMutAct_9fa48("1135") ? analysisResult.statement_type : (stryCov_9fa48("1135"), analysisResult?.statement_type)) || (stryMutAct_9fa48("1136") ? "" : (stryCov_9fa48("1136"), 'Financial Statement'))),
                summary: stryMutAct_9fa48("1139") ? analysisResult?.summary && '' : stryMutAct_9fa48("1138") ? false : stryMutAct_9fa48("1137") ? true : (stryCov_9fa48("1137", "1138", "1139"), (stryMutAct_9fa48("1140") ? analysisResult.summary : (stryCov_9fa48("1140"), analysisResult?.summary)) || (stryMutAct_9fa48("1141") ? "Stryker was here!" : (stryCov_9fa48("1141"), ''))),
                kpis: stryMutAct_9fa48("1144") ? analysisResult?.kpis && [] : stryMutAct_9fa48("1143") ? false : stryMutAct_9fa48("1142") ? true : (stryCov_9fa48("1142", "1143", "1144"), (stryMutAct_9fa48("1145") ? analysisResult.kpis : (stryCov_9fa48("1145"), analysisResult?.kpis)) || (stryMutAct_9fa48("1146") ? ["Stryker was here"] : (stryCov_9fa48("1146"), []))),
                risks: stryMutAct_9fa48("1149") ? analysisResult?.risks && [] : stryMutAct_9fa48("1148") ? false : stryMutAct_9fa48("1147") ? true : (stryCov_9fa48("1147", "1148", "1149"), (stryMutAct_9fa48("1150") ? analysisResult.risks : (stryCov_9fa48("1150"), analysisResult?.risks)) || (stryMutAct_9fa48("1151") ? ["Stryker was here"] : (stryCov_9fa48("1151"), []))),
                recommendations: stryMutAct_9fa48("1154") ? analysisResult?.recommendations && [] : stryMutAct_9fa48("1153") ? false : stryMutAct_9fa48("1152") ? true : (stryCov_9fa48("1152", "1153", "1154"), (stryMutAct_9fa48("1155") ? analysisResult.recommendations : (stryCov_9fa48("1155"), analysisResult?.recommendations)) || (stryMutAct_9fa48("1156") ? ["Stryker was here"] : (stryCov_9fa48("1156"), []))),
                parsing_mode: stryMutAct_9fa48("1159") ? analysisResult?.parsing_mode && 'standard' : stryMutAct_9fa48("1158") ? false : stryMutAct_9fa48("1157") ? true : (stryCov_9fa48("1157", "1158", "1159"), (stryMutAct_9fa48("1160") ? analysisResult.parsing_mode : (stryCov_9fa48("1160"), analysisResult?.parsing_mode)) || (stryMutAct_9fa48("1161") ? "" : (stryCov_9fa48("1161"), 'standard')))
              }))
            }));
            if (stryMutAct_9fa48("1164") ? false : stryMutAct_9fa48("1163") ? true : stryMutAct_9fa48("1162") ? res.ok : (stryCov_9fa48("1162", "1163", "1164"), !res.ok)) throw new Error(stryMutAct_9fa48("1165") ? `` : (stryCov_9fa48("1165"), `HTTP error! status: ${res.status}`));
            const data = await res.json();
            setReport(data.report_markdown);
            setWordCount(data.word_count);
          }
        } catch (err) {
          if (stryMutAct_9fa48("1166")) {
            {}
          } else {
            stryCov_9fa48("1166");
            setError(stryMutAct_9fa48("1167") ? "" : (stryCov_9fa48("1167"), 'Generation failed. Please verify API connection.'));
          }
        } finally {
          if (stryMutAct_9fa48("1168")) {
            {}
          } else {
            stryCov_9fa48("1168");
            setLoading(stryMutAct_9fa48("1169") ? true : (stryCov_9fa48("1169"), false));
          }
        }
      }
    };
    const getHtmlPayload = () => {
      if (stryMutAct_9fa48("1170")) {
        {}
      } else {
        stryCov_9fa48("1170");
        const stmtType = stryMutAct_9fa48("1173") ? analysisResult?.statement_type && 'report' : stryMutAct_9fa48("1172") ? false : stryMutAct_9fa48("1171") ? true : (stryCov_9fa48("1171", "1172", "1173"), (stryMutAct_9fa48("1174") ? analysisResult.statement_type : (stryCov_9fa48("1174"), analysisResult?.statement_type)) || (stryMutAct_9fa48("1175") ? "" : (stryCov_9fa48("1175"), 'report')));
        const now = new Date().toLocaleDateString(stryMutAct_9fa48("1176") ? "" : (stryCov_9fa48("1176"), 'en-US'), stryMutAct_9fa48("1177") ? {} : (stryCov_9fa48("1177"), {
          year: stryMutAct_9fa48("1178") ? "" : (stryCov_9fa48("1178"), 'numeric'),
          month: stryMutAct_9fa48("1179") ? "" : (stryCov_9fa48("1179"), 'long'),
          day: stryMutAct_9fa48("1180") ? "" : (stryCov_9fa48("1180"), 'numeric')
        }));
        return buildReportHTML(stryMutAct_9fa48("1181") ? {} : (stryCov_9fa48("1181"), {
          selectedFmt,
          stmtType,
          now,
          report
        }));
      }
    };
    const downloadHTML = () => {
      if (stryMutAct_9fa48("1182")) {
        {}
      } else {
        stryCov_9fa48("1182");
        const html = getHtmlPayload();
        const blob = new Blob(stryMutAct_9fa48("1183") ? [] : (stryCov_9fa48("1183"), [html]), stryMutAct_9fa48("1184") ? {} : (stryCov_9fa48("1184"), {
          type: stryMutAct_9fa48("1185") ? "" : (stryCov_9fa48("1185"), 'text/html;charset=utf-8')
        }));
        const url = URL.createObjectURL(blob);
        const a = document.createElement(stryMutAct_9fa48("1186") ? "" : (stryCov_9fa48("1186"), 'a'));
        a.href = url;
        a.download = stryMutAct_9fa48("1187") ? `` : (stryCov_9fa48("1187"), `fingenie-report.html`);
        a.click();
        URL.revokeObjectURL(url);
        setDownloaded(stryMutAct_9fa48("1188") ? false : (stryCov_9fa48("1188"), true));
        setTimeout(stryMutAct_9fa48("1189") ? () => undefined : (stryCov_9fa48("1189"), () => setDownloaded(stryMutAct_9fa48("1190") ? true : (stryCov_9fa48("1190"), false))), 3000);
      }
    };
    const downloadPDF = () => {
      if (stryMutAct_9fa48("1191")) {
        {}
      } else {
        stryCov_9fa48("1191");
        printViaIframe(getHtmlPayload());
        setPdfSaved(stryMutAct_9fa48("1192") ? false : (stryCov_9fa48("1192"), true));
        setTimeout(stryMutAct_9fa48("1193") ? () => undefined : (stryCov_9fa48("1193"), () => setPdfSaved(stryMutAct_9fa48("1194") ? true : (stryCov_9fa48("1194"), false))), 3000);
      }
    };
    return <div className="ai-report-generator">
      <div className="mb-md">
        <h3 className="sub-label mb-sm">Select Intelligence Framework</h3>
        <div className="grid-cols-12" style={stryMutAct_9fa48("1195") ? {} : (stryCov_9fa48("1195"), {
          gap: stryMutAct_9fa48("1196") ? "" : (stryCov_9fa48("1196"), '12px')
        })}>
          {AI_REPORT_FORMATS.map(stryMutAct_9fa48("1197") ? () => undefined : (stryCov_9fa48("1197"), f => <div key={f.id} className={stryMutAct_9fa48("1198") ? `` : (stryCov_9fa48("1198"), `card-light hover-lift col-span-4 ${(stryMutAct_9fa48("1201") ? format !== f.id : stryMutAct_9fa48("1200") ? false : stryMutAct_9fa48("1199") ? true : (stryCov_9fa48("1199", "1200", "1201"), format === f.id)) ? stryMutAct_9fa48("1202") ? "" : (stryCov_9fa48("1202"), 'active-border') : stryMutAct_9fa48("1203") ? "Stryker was here!" : (stryCov_9fa48("1203"), '')}`)} onClick={stryMutAct_9fa48("1204") ? () => undefined : (stryCov_9fa48("1204"), () => setFormat(f.id))} style={stryMutAct_9fa48("1205") ? {} : (stryCov_9fa48("1205"), {
            cursor: stryMutAct_9fa48("1206") ? "" : (stryCov_9fa48("1206"), 'pointer'),
            padding: stryMutAct_9fa48("1207") ? "" : (stryCov_9fa48("1207"), '16px'),
            border: (stryMutAct_9fa48("1210") ? format !== f.id : stryMutAct_9fa48("1209") ? false : stryMutAct_9fa48("1208") ? true : (stryCov_9fa48("1208", "1209", "1210"), format === f.id)) ? stryMutAct_9fa48("1211") ? "" : (stryCov_9fa48("1211"), '2px solid var(--accent-blue)') : stryMutAct_9fa48("1212") ? "" : (stryCov_9fa48("1212"), '1px solid var(--border-light)'),
            background: (stryMutAct_9fa48("1215") ? format !== f.id : stryMutAct_9fa48("1214") ? false : stryMutAct_9fa48("1213") ? true : (stryCov_9fa48("1213", "1214", "1215"), format === f.id)) ? stryMutAct_9fa48("1216") ? "" : (stryCov_9fa48("1216"), 'var(--bg-blue-light)') : stryMutAct_9fa48("1217") ? "" : (stryCov_9fa48("1217"), 'white')
          })}>
              <div className="d-flex items-center gap-3 mb-xs">
                <f.Icon size={18} className={(stryMutAct_9fa48("1220") ? format !== f.id : stryMutAct_9fa48("1219") ? false : stryMutAct_9fa48("1218") ? true : (stryCov_9fa48("1218", "1219", "1220"), format === f.id)) ? stryMutAct_9fa48("1221") ? "" : (stryCov_9fa48("1221"), 'text-accent') : stryMutAct_9fa48("1222") ? "" : (stryCov_9fa48("1222"), 'text-secondary')} />
                <span className="font-bold text-primary" style={stryMutAct_9fa48("1223") ? {} : (stryCov_9fa48("1223"), {
                fontSize: stryMutAct_9fa48("1224") ? "" : (stryCov_9fa48("1224"), '14px')
              })}>{f.label}</span>
              </div>
              <p className="text-secondary" style={stryMutAct_9fa48("1225") ? {} : (stryCov_9fa48("1225"), {
              fontSize: stryMutAct_9fa48("1226") ? "" : (stryCov_9fa48("1226"), '11px'),
              margin: 0
            })}>{f.desc}</p>
            </div>))}
        </div>
      </div>

      <button className={stryMutAct_9fa48("1227") ? `` : (stryCov_9fa48("1227"), `btn-primary w-full mt-md d-flex items-center justify-center gap-3 ${loading ? stryMutAct_9fa48("1228") ? "" : (stryCov_9fa48("1228"), 'loading') : stryMutAct_9fa48("1229") ? "Stryker was here!" : (stryCov_9fa48("1229"), '')}`)} onClick={generate} disabled={loading} style={stryMutAct_9fa48("1230") ? {} : (stryCov_9fa48("1230"), {
        padding: stryMutAct_9fa48("1231") ? "" : (stryCov_9fa48("1231"), '16px')
      })}>
        {loading ? <Sparkles className="animate-spin" size={18} /> : <selectedFmt.Icon size={18} />}
        <span>{loading ? stryMutAct_9fa48("1232") ? "" : (stryCov_9fa48("1232"), 'Synthesizing Narrative...') : stryMutAct_9fa48("1233") ? `` : (stryCov_9fa48("1233"), `Compose ${selectedFmt.label}`)}</span>
      </button>

      {stryMutAct_9fa48("1236") ? error || <div className="error-badge mt-md text-rose font-bold text-center">{error}</div> : stryMutAct_9fa48("1235") ? false : stryMutAct_9fa48("1234") ? true : (stryCov_9fa48("1234", "1235", "1236"), error && <div className="error-badge mt-md text-rose font-bold text-center">{error}</div>)}

      {stryMutAct_9fa48("1239") ? report || <div className="ai-report-output fade-in mt-xl">
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
        </div> : stryMutAct_9fa48("1238") ? false : stryMutAct_9fa48("1237") ? true : (stryCov_9fa48("1237", "1238", "1239"), report && <div className="ai-report-output fade-in mt-xl">
          <div className="ai-report-toolbar d-flex justify-between items-center mb-md p-sm" style={stryMutAct_9fa48("1240") ? {} : (stryCov_9fa48("1240"), {
          background: stryMutAct_9fa48("1241") ? "" : (stryCov_9fa48("1241"), 'var(--bg-navy)'),
          borderRadius: stryMutAct_9fa48("1242") ? "" : (stryCov_9fa48("1242"), 'var(--radius-md) var(--radius-md) 0 0'),
          color: stryMutAct_9fa48("1243") ? "" : (stryCov_9fa48("1243"), 'white')
        })}>
            <div className="d-flex items-center gap-3">
              <selectedFmt.Icon size={16} className="text-accent" />
              <span className="font-bold" style={stryMutAct_9fa48("1244") ? {} : (stryCov_9fa48("1244"), {
              fontSize: stryMutAct_9fa48("1245") ? "" : (stryCov_9fa48("1245"), '14px')
            })}>DRAFT: {selectedFmt.label}</span>
            </div>
            <div className="d-flex gap-2">
              <button className="nav-item active d-flex items-center gap-2" style={stryMutAct_9fa48("1246") ? {} : (stryCov_9fa48("1246"), {
              fontSize: stryMutAct_9fa48("1247") ? "" : (stryCov_9fa48("1247"), '11px'),
              padding: stryMutAct_9fa48("1248") ? "" : (stryCov_9fa48("1248"), '6px 12px')
            })} onClick={downloadHTML}>
                {downloaded ? <CheckCircle2 size={12} /> : <Download size={12} />}
                <span>{downloaded ? stryMutAct_9fa48("1249") ? "" : (stryCov_9fa48("1249"), 'Saved') : stryMutAct_9fa48("1250") ? "" : (stryCov_9fa48("1250"), 'HTML')}</span>
              </button>
              <button className="btn-primary d-flex items-center gap-2" style={stryMutAct_9fa48("1251") ? {} : (stryCov_9fa48("1251"), {
              fontSize: stryMutAct_9fa48("1252") ? "" : (stryCov_9fa48("1252"), '11px'),
              padding: stryMutAct_9fa48("1253") ? "" : (stryCov_9fa48("1253"), '6px 12px')
            })} onClick={downloadPDF}>
                {pdfSaved ? <CheckCircle2 size={12} /> : <Printer size={12} />}
                <span>{pdfSaved ? stryMutAct_9fa48("1254") ? "" : (stryCov_9fa48("1254"), 'Sent') : stryMutAct_9fa48("1255") ? "" : (stryCov_9fa48("1255"), 'PDF')}</span>
              </button>
            </div>
          </div>
          <div className="ai-report-content card-light" style={stryMutAct_9fa48("1256") ? {} : (stryCov_9fa48("1256"), {
          borderRadius: stryMutAct_9fa48("1257") ? "" : (stryCov_9fa48("1257"), '0 0 var(--radius-md) var(--radius-md)'),
          padding: stryMutAct_9fa48("1258") ? "" : (stryCov_9fa48("1258"), '40px'),
          borderTop: stryMutAct_9fa48("1259") ? "" : (stryCov_9fa48("1259"), 'none')
        })}>
            <div dangerouslySetInnerHTML={stryMutAct_9fa48("1260") ? {} : (stryCov_9fa48("1260"), {
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
  if (stryMutAct_9fa48("1261")) {
    {}
  } else {
    stryCov_9fa48("1261");
    const [activeLayer, setActiveLayer] = useState(stryMutAct_9fa48("1262") ? "" : (stryCov_9fa48("1262"), 'ai'));
    if (stryMutAct_9fa48("1265") ? false : stryMutAct_9fa48("1264") ? true : stryMutAct_9fa48("1263") ? analysisResult : (stryCov_9fa48("1263", "1264", "1265"), !analysisResult)) return null;
    return <section className="report-center-section fade-in">
      <ReportCenterHeader analysisResult={analysisResult} />

      <div className="mb-xl">
        <h3 className="section-heading__label mb-md" style={stryMutAct_9fa48("1266") ? {} : (stryCov_9fa48("1266"), {
          color: stryMutAct_9fa48("1267") ? "" : (stryCov_9fa48("1267"), 'var(--text-muted)')
        })}>Output Orchestration</h3>
        <div className="nav-links" style={stryMutAct_9fa48("1268") ? {} : (stryCov_9fa48("1268"), {
          width: stryMutAct_9fa48("1269") ? "" : (stryCov_9fa48("1269"), 'fit-content'),
          background: stryMutAct_9fa48("1270") ? "" : (stryCov_9fa48("1270"), 'var(--bg-blue-subtle)'),
          padding: stryMutAct_9fa48("1271") ? "" : (stryCov_9fa48("1271"), '4px'),
          borderRadius: stryMutAct_9fa48("1272") ? "" : (stryCov_9fa48("1272"), '12px')
        })}>
          <button className={stryMutAct_9fa48("1273") ? `` : (stryCov_9fa48("1273"), `nav-item ${(stryMutAct_9fa48("1276") ? activeLayer !== 'ai' : stryMutAct_9fa48("1275") ? false : stryMutAct_9fa48("1274") ? true : (stryCov_9fa48("1274", "1275", "1276"), activeLayer === (stryMutAct_9fa48("1277") ? "" : (stryCov_9fa48("1277"), 'ai')))) ? stryMutAct_9fa48("1278") ? "" : (stryCov_9fa48("1278"), 'active') : stryMutAct_9fa48("1279") ? "Stryker was here!" : (stryCov_9fa48("1279"), '')}`)} onClick={stryMutAct_9fa48("1280") ? () => undefined : (stryCov_9fa48("1280"), () => setActiveLayer(stryMutAct_9fa48("1281") ? "" : (stryCov_9fa48("1281"), 'ai')))} style={stryMutAct_9fa48("1282") ? {} : (stryCov_9fa48("1282"), {
            display: stryMutAct_9fa48("1283") ? "" : (stryCov_9fa48("1283"), 'flex'),
            alignItems: stryMutAct_9fa48("1284") ? "" : (stryCov_9fa48("1284"), 'center'),
            gap: stryMutAct_9fa48("1285") ? "" : (stryCov_9fa48("1285"), '8px')
          })}>
            <Sparkles size={14} />
            <span>AI Narrative</span>
          </button>
          <button className={stryMutAct_9fa48("1286") ? `` : (stryCov_9fa48("1286"), `nav-item ${(stryMutAct_9fa48("1289") ? activeLayer !== 'export' : stryMutAct_9fa48("1288") ? false : stryMutAct_9fa48("1287") ? true : (stryCov_9fa48("1287", "1288", "1289"), activeLayer === (stryMutAct_9fa48("1290") ? "" : (stryCov_9fa48("1290"), 'export')))) ? stryMutAct_9fa48("1291") ? "" : (stryCov_9fa48("1291"), 'active') : stryMutAct_9fa48("1292") ? "Stryker was here!" : (stryCov_9fa48("1292"), '')}`)} onClick={stryMutAct_9fa48("1293") ? () => undefined : (stryCov_9fa48("1293"), () => setActiveLayer(stryMutAct_9fa48("1294") ? "" : (stryCov_9fa48("1294"), 'export')))} style={stryMutAct_9fa48("1295") ? {} : (stryCov_9fa48("1295"), {
            display: stryMutAct_9fa48("1296") ? "" : (stryCov_9fa48("1296"), 'flex'),
            alignItems: stryMutAct_9fa48("1297") ? "" : (stryCov_9fa48("1297"), 'center'),
            gap: stryMutAct_9fa48("1298") ? "" : (stryCov_9fa48("1298"), '8px')
          })}>
            <Box size={14} />
            <span>Structured Export</span>
          </button>
        </div>
      </div>

      <div className="layer-panels">
        {(stryMutAct_9fa48("1301") ? activeLayer !== 'ai' : stryMutAct_9fa48("1300") ? false : stryMutAct_9fa48("1299") ? true : (stryCov_9fa48("1299", "1300", "1301"), activeLayer === (stryMutAct_9fa48("1302") ? "" : (stryCov_9fa48("1302"), 'ai')))) ? <AIReportGenerator analysisResult={analysisResult} /> : <div data-testid="export-suite"><ExportSuite analysisResult={analysisResult} /></div>}
      </div>
    </section>;
  }
}