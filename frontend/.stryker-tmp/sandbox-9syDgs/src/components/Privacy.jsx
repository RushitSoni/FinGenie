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
  if (stryMutAct_9fa48("894")) {
    {}
  } else {
    stryCov_9fa48("894");
    return <div className="fade-in slide-up px-6 md:px-12 py-16" style={stryMutAct_9fa48("895") ? {} : (stryCov_9fa48("895"), {
      maxWidth: stryMutAct_9fa48("896") ? "" : (stryCov_9fa48("896"), '1000px'),
      margin: stryMutAct_9fa48("897") ? "" : (stryCov_9fa48("897"), '0 auto')
    })}>
      <div className="sub-label">Data Sovereignty</div>
      <h1 className="hero-title mb-md">Privacy<br /><span className="text-accent">Policy Protocol.</span></h1>
      
      <div className="card-light" style={stryMutAct_9fa48("898") ? {} : (stryCov_9fa48("898"), {
        padding: stryMutAct_9fa48("899") ? "" : (stryCov_9fa48("899"), '40px'),
        borderRadius: stryMutAct_9fa48("900") ? "" : (stryCov_9fa48("900"), 'var(--radius-xl)')
      })}>
        <div className="d-flex flex-column gap-5">
           <div className="d-flex gap-4">
              <div style={stryMutAct_9fa48("901") ? {} : (stryCov_9fa48("901"), {
              background: stryMutAct_9fa48("902") ? "" : (stryCov_9fa48("902"), 'var(--bg-blue-light)'),
              padding: stryMutAct_9fa48("903") ? "" : (stryCov_9fa48("903"), '12px'),
              borderRadius: stryMutAct_9fa48("904") ? "" : (stryCov_9fa48("904"), '12px'),
              height: stryMutAct_9fa48("905") ? "" : (stryCov_9fa48("905"), 'fit-content')
            })}>
                <Lock className="text-accent" size={24} />
              </div>
              <div>
                 <h2 className="text-primary font-bold mb-xs" style={stryMutAct_9fa48("906") ? {} : (stryCov_9fa48("906"), {
                fontSize: stryMutAct_9fa48("907") ? "" : (stryCov_9fa48("907"), '20px')
              })}>Encryption Standard</h2>
                 <p className="text-secondary" style={stryMutAct_9fa48("908") ? {} : (stryCov_9fa48("908"), {
                fontSize: stryMutAct_9fa48("909") ? "" : (stryCov_9fa48("909"), '15px'),
                lineHeight: 1.7
              })}>
                    All data uploaded to FinGenie is encrypted in transit via TLS 1.3 and processed in non-persistent memory stacks.
                 </p>
              </div>
           </div>

           <div className="d-flex gap-4">
              <div style={stryMutAct_9fa48("910") ? {} : (stryCov_9fa48("910"), {
              background: stryMutAct_9fa48("911") ? "" : (stryCov_9fa48("911"), 'rgba(5, 150, 105, 0.05)'),
              padding: stryMutAct_9fa48("912") ? "" : (stryCov_9fa48("912"), '12px'),
              borderRadius: stryMutAct_9fa48("913") ? "" : (stryCov_9fa48("913"), '12px'),
              height: stryMutAct_9fa48("914") ? "" : (stryCov_9fa48("914"), 'fit-content')
            })}>
                <Trash2 className="text-emerald" size={24} style={stryMutAct_9fa48("915") ? {} : (stryCov_9fa48("915"), {
                color: stryMutAct_9fa48("916") ? "" : (stryCov_9fa48("916"), 'var(--accent-emerald)')
              })} />
              </div>
              <div>
                 <h2 className="text-primary font-bold mb-xs" style={stryMutAct_9fa48("917") ? {} : (stryCov_9fa48("917"), {
                fontSize: stryMutAct_9fa48("918") ? "" : (stryCov_9fa48("918"), '20px')
              })}>Zero Retention</h2>
                 <p className="text-secondary" style={stryMutAct_9fa48("919") ? {} : (stryCov_9fa48("919"), {
                fontSize: stryMutAct_9fa48("920") ? "" : (stryCov_9fa48("920"), '15px'),
                lineHeight: 1.7
              })}>
                    FinGenie does not maintain a database of user-uploaded files. Once the analysis session is terminated, all trace data is purged.
                 </p>
              </div>
           </div>

           <div className="d-flex gap-4">
              <div style={stryMutAct_9fa48("921") ? {} : (stryCov_9fa48("921"), {
              background: stryMutAct_9fa48("922") ? "" : (stryCov_9fa48("922"), 'rgba(235, 29, 72, 0.05)'),
              padding: stryMutAct_9fa48("923") ? "" : (stryCov_9fa48("923"), '12px'),
              borderRadius: stryMutAct_9fa48("924") ? "" : (stryCov_9fa48("924"), '12px'),
              height: stryMutAct_9fa48("925") ? "" : (stryCov_9fa48("925"), 'fit-content')
            })}>
                <Eye className="text-rose" size={24} style={stryMutAct_9fa48("926") ? {} : (stryCov_9fa48("926"), {
                color: stryMutAct_9fa48("927") ? "" : (stryCov_9fa48("927"), 'var(--accent-rose)')
              })} />
              </div>
              <div>
                 <h2 className="text-primary font-bold mb-xs" style={stryMutAct_9fa48("928") ? {} : (stryCov_9fa48("928"), {
                fontSize: stryMutAct_9fa48("929") ? "" : (stryCov_9fa48("929"), '20px')
              })}>No Tracking</h2>
                 <p className="text-secondary" style={stryMutAct_9fa48("930") ? {} : (stryCov_9fa48("930"), {
                fontSize: stryMutAct_9fa48("931") ? "" : (stryCov_9fa48("931"), '15px'),
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