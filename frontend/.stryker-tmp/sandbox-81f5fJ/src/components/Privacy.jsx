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
import React from 'react';
import { Lock, Eye, Trash2 } from 'lucide-react';
export default function Privacy() {
  if (stryMutAct_9fa48("1117")) {
    {}
  } else {
    stryCov_9fa48("1117");
    return <div className="fade-in slide-up px-6 md:px-12 py-16" style={stryMutAct_9fa48("1118") ? {} : (stryCov_9fa48("1118"), {
      maxWidth: stryMutAct_9fa48("1119") ? "" : (stryCov_9fa48("1119"), '1000px'),
      margin: stryMutAct_9fa48("1120") ? "" : (stryCov_9fa48("1120"), '0 auto')
    })}>
      <div className="sub-label">Data Sovereignty</div>
      <h1 className="hero-title mb-md">Privacy<br /><span className="text-accent">Policy Protocol.</span></h1>
      
      <div className="card-light" style={stryMutAct_9fa48("1121") ? {} : (stryCov_9fa48("1121"), {
        padding: stryMutAct_9fa48("1122") ? "" : (stryCov_9fa48("1122"), '40px'),
        borderRadius: stryMutAct_9fa48("1123") ? "" : (stryCov_9fa48("1123"), 'var(--radius-xl)')
      })}>
        <div className="d-flex flex-column gap-5">
           <div className="d-flex gap-4">
              <div style={stryMutAct_9fa48("1124") ? {} : (stryCov_9fa48("1124"), {
              background: stryMutAct_9fa48("1125") ? "" : (stryCov_9fa48("1125"), 'var(--bg-blue-light)'),
              padding: stryMutAct_9fa48("1126") ? "" : (stryCov_9fa48("1126"), '12px'),
              borderRadius: stryMutAct_9fa48("1127") ? "" : (stryCov_9fa48("1127"), '12px'),
              height: stryMutAct_9fa48("1128") ? "" : (stryCov_9fa48("1128"), 'fit-content')
            })}>
                <Lock className="text-accent" size={24} />
              </div>
              <div>
                 <h2 className="text-primary font-bold mb-xs" style={stryMutAct_9fa48("1129") ? {} : (stryCov_9fa48("1129"), {
                fontSize: stryMutAct_9fa48("1130") ? "" : (stryCov_9fa48("1130"), '20px')
              })}>Encryption Standard</h2>
                 <p className="text-secondary" style={stryMutAct_9fa48("1131") ? {} : (stryCov_9fa48("1131"), {
                fontSize: stryMutAct_9fa48("1132") ? "" : (stryCov_9fa48("1132"), '15px'),
                lineHeight: 1.7
              })}>
                    All data uploaded to FinGenie is encrypted in transit via TLS 1.3 and processed in non-persistent memory stacks.
                 </p>
              </div>
           </div>

           <div className="d-flex gap-4">
              <div style={stryMutAct_9fa48("1133") ? {} : (stryCov_9fa48("1133"), {
              background: stryMutAct_9fa48("1134") ? "" : (stryCov_9fa48("1134"), 'rgba(5, 150, 105, 0.05)'),
              padding: stryMutAct_9fa48("1135") ? "" : (stryCov_9fa48("1135"), '12px'),
              borderRadius: stryMutAct_9fa48("1136") ? "" : (stryCov_9fa48("1136"), '12px'),
              height: stryMutAct_9fa48("1137") ? "" : (stryCov_9fa48("1137"), 'fit-content')
            })}>
                <Trash2 className="text-emerald" size={24} style={stryMutAct_9fa48("1138") ? {} : (stryCov_9fa48("1138"), {
                color: stryMutAct_9fa48("1139") ? "" : (stryCov_9fa48("1139"), 'var(--accent-emerald)')
              })} />
              </div>
              <div>
                 <h2 className="text-primary font-bold mb-xs" style={stryMutAct_9fa48("1140") ? {} : (stryCov_9fa48("1140"), {
                fontSize: stryMutAct_9fa48("1141") ? "" : (stryCov_9fa48("1141"), '20px')
              })}>Zero Retention</h2>
                 <p className="text-secondary" style={stryMutAct_9fa48("1142") ? {} : (stryCov_9fa48("1142"), {
                fontSize: stryMutAct_9fa48("1143") ? "" : (stryCov_9fa48("1143"), '15px'),
                lineHeight: 1.7
              })}>
                    FinGenie does not maintain a database of user-uploaded files. Once the analysis session is terminated, all trace data is purged.
                 </p>
              </div>
           </div>

           <div className="d-flex gap-4">
              <div style={stryMutAct_9fa48("1144") ? {} : (stryCov_9fa48("1144"), {
              background: stryMutAct_9fa48("1145") ? "" : (stryCov_9fa48("1145"), 'rgba(235, 29, 72, 0.05)'),
              padding: stryMutAct_9fa48("1146") ? "" : (stryCov_9fa48("1146"), '12px'),
              borderRadius: stryMutAct_9fa48("1147") ? "" : (stryCov_9fa48("1147"), '12px'),
              height: stryMutAct_9fa48("1148") ? "" : (stryCov_9fa48("1148"), 'fit-content')
            })}>
                <Eye className="text-rose" size={24} style={stryMutAct_9fa48("1149") ? {} : (stryCov_9fa48("1149"), {
                color: stryMutAct_9fa48("1150") ? "" : (stryCov_9fa48("1150"), 'var(--accent-rose)')
              })} />
              </div>
              <div>
                 <h2 className="text-primary font-bold mb-xs" style={stryMutAct_9fa48("1151") ? {} : (stryCov_9fa48("1151"), {
                fontSize: stryMutAct_9fa48("1152") ? "" : (stryCov_9fa48("1152"), '20px')
              })}>No Tracking</h2>
                 <p className="text-secondary" style={stryMutAct_9fa48("1153") ? {} : (stryCov_9fa48("1153"), {
                fontSize: stryMutAct_9fa48("1154") ? "" : (stryCov_9fa48("1154"), '15px'),
                lineHeight: 1.7
              })}>
                    We do not use tracking cookies or third-party analytics scripts that profile user behavior for advertising purposes.
                 </p>
              </div>
           </div>
        </div>
      </div>
    </div>;
  }
}