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
import { Shield, Activity, Lock, Trash2, Cpu, BarChart } from 'lucide-react';
export default function About() {
  if (stryMutAct_9fa48("223")) {
    {}
  } else {
    stryCov_9fa48("223");
    return <div className="fade-in slide-up px-6 md:px-12 py-16" style={stryMutAct_9fa48("224") ? {} : (stryCov_9fa48("224"), {
      maxWidth: stryMutAct_9fa48("225") ? "" : (stryCov_9fa48("225"), '1000px'),
      margin: stryMutAct_9fa48("226") ? "" : (stryCov_9fa48("226"), '0 auto')
    })}>
      <div className="sub-label">The Mission</div>
      <h1 className="hero-title mb-md">Democratizing<br /><span className="text-accent">Institutional Intel.</span></h1>
      
      <div className="card-light" style={stryMutAct_9fa48("227") ? {} : (stryCov_9fa48("227"), {
        padding: stryMutAct_9fa48("228") ? "" : (stryCov_9fa48("228"), 'var(--space-lg)'),
        borderRadius: stryMutAct_9fa48("229") ? "" : (stryCov_9fa48("229"), 'var(--radius-xl)')
      })}>
        <div style={stryMutAct_9fa48("230") ? {} : (stryCov_9fa48("230"), {
          marginBottom: stryMutAct_9fa48("231") ? "" : (stryCov_9fa48("231"), 'var(--space-lg)')
        })}>
          <h3 className="section-heading__label mb-sm" style={stryMutAct_9fa48("232") ? {} : (stryCov_9fa48("232"), {
            color: stryMutAct_9fa48("233") ? "" : (stryCov_9fa48("233"), 'var(--accent-blue)')
          })}>Mathematical Foundation</h3>
          <p style={stryMutAct_9fa48("234") ? {} : (stryCov_9fa48("234"), {
            color: stryMutAct_9fa48("235") ? "" : (stryCov_9fa48("235"), 'var(--text-secondary)'),
            fontSize: stryMutAct_9fa48("236") ? "" : (stryCov_9fa48("236"), '18px'),
            lineHeight: 1.7,
            marginBottom: stryMutAct_9fa48("237") ? "" : (stryCov_9fa48("237"), 'var(--space-md)'),
            fontWeight: 500
          })}>
            FinGenie was built on the premise that traditional GAAP accounting principles could be combined with modern Bayesian inference models to provide the most objective financial outlook possible.
          </p>
          <p style={stryMutAct_9fa48("238") ? {} : (stryCov_9fa48("238"), {
            color: stryMutAct_9fa48("239") ? "" : (stryCov_9fa48("239"), 'var(--text-secondary)'),
            fontSize: stryMutAct_9fa48("240") ? "" : (stryCov_9fa48("240"), '18px'),
            lineHeight: 1.7,
            fontWeight: 500
          })}>
            Our sovereign engine ingests complex datasets and maps proprietary data points into normalized vectors. We apply deep technical analysis—including Ratio Synthesis and Anomaly Detection—to build an actionable narrative.
          </p>
        </div>
        
        <div className="card-dark" style={stryMutAct_9fa48("241") ? {} : (stryCov_9fa48("241"), {
          padding: stryMutAct_9fa48("242") ? "" : (stryCov_9fa48("242"), '40px'),
          borderRadius: stryMutAct_9fa48("243") ? "" : (stryCov_9fa48("243"), 'var(--radius-lg)')
        })}>
          <h3 className="section-heading__label mb-md" style={stryMutAct_9fa48("244") ? {} : (stryCov_9fa48("244"), {
            color: stryMutAct_9fa48("245") ? "" : (stryCov_9fa48("245"), 'rgba(255,255,255,0.4)')
          })}>Security & Privacy Ethics</h3>
          <div className="d-flex flex-column gap-5">
            <div className="d-flex gap-4">
              <Shield className="text-accent" size={24} />
              <div>
                <strong style={stryMutAct_9fa48("246") ? {} : (stryCov_9fa48("246"), {
                  color: stryMutAct_9fa48("247") ? "" : (stryCov_9fa48("247"), 'white'),
                  display: stryMutAct_9fa48("248") ? "" : (stryCov_9fa48("248"), 'block'),
                  marginBottom: stryMutAct_9fa48("249") ? "" : (stryCov_9fa48("249"), '4px'),
                  fontSize: stryMutAct_9fa48("250") ? "" : (stryCov_9fa48("250"), '16px')
                })}>Edge Encryption</strong>
                <span style={stryMutAct_9fa48("251") ? {} : (stryCov_9fa48("251"), {
                  color: stryMutAct_9fa48("252") ? "" : (stryCov_9fa48("252"), '#9ca3af'),
                  fontSize: stryMutAct_9fa48("253") ? "" : (stryCov_9fa48("253"), '14px')
                })}>Files are tokenized client-side before processing using AES-256 standards.</span>
              </div>
            </div>
            <div className="d-flex gap-4">
              <Trash2 className="text-accent" size={24} />
              <div>
                <strong style={stryMutAct_9fa48("254") ? {} : (stryCov_9fa48("254"), {
                  color: stryMutAct_9fa48("255") ? "" : (stryCov_9fa48("255"), 'white'),
                  display: stryMutAct_9fa48("256") ? "" : (stryCov_9fa48("256"), 'block'),
                  marginBottom: stryMutAct_9fa48("257") ? "" : (stryCov_9fa48("257"), '4px'),
                  fontSize: stryMutAct_9fa48("258") ? "" : (stryCov_9fa48("258"), '16px')
                })}>Zero-Knowledge</strong>
                <span style={stryMutAct_9fa48("259") ? {} : (stryCov_9fa48("259"), {
                  color: stryMutAct_9fa48("260") ? "" : (stryCov_9fa48("260"), '#9ca3af'),
                  fontSize: stryMutAct_9fa48("261") ? "" : (stryCov_9fa48("261"), '14px')
                })}>Artifacts are purged continuously after the session ends. No data persistence.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}