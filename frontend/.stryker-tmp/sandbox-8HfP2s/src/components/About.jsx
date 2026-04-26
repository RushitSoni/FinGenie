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
  if (stryMutAct_9fa48("0")) {
    {}
  } else {
    stryCov_9fa48("0");
    return <div className="fade-in slide-up px-6 md:px-12 py-16" style={stryMutAct_9fa48("1") ? {} : (stryCov_9fa48("1"), {
      maxWidth: stryMutAct_9fa48("2") ? "" : (stryCov_9fa48("2"), '1000px'),
      margin: stryMutAct_9fa48("3") ? "" : (stryCov_9fa48("3"), '0 auto')
    })}>
      <div className="sub-label">The Mission</div>
      <h1 className="hero-title mb-md">Democratizing<br /><span className="text-accent">Institutional Intel.</span></h1>
      
      <div className="card-light" style={stryMutAct_9fa48("4") ? {} : (stryCov_9fa48("4"), {
        padding: stryMutAct_9fa48("5") ? "" : (stryCov_9fa48("5"), 'var(--space-lg)'),
        borderRadius: stryMutAct_9fa48("6") ? "" : (stryCov_9fa48("6"), 'var(--radius-xl)')
      })}>
        <div style={stryMutAct_9fa48("7") ? {} : (stryCov_9fa48("7"), {
          marginBottom: stryMutAct_9fa48("8") ? "" : (stryCov_9fa48("8"), 'var(--space-lg)')
        })}>
          <h3 className="section-heading__label mb-sm" style={stryMutAct_9fa48("9") ? {} : (stryCov_9fa48("9"), {
            color: stryMutAct_9fa48("10") ? "" : (stryCov_9fa48("10"), 'var(--accent-blue)')
          })}>Mathematical Foundation</h3>
          <p style={stryMutAct_9fa48("11") ? {} : (stryCov_9fa48("11"), {
            color: stryMutAct_9fa48("12") ? "" : (stryCov_9fa48("12"), 'var(--text-secondary)'),
            fontSize: stryMutAct_9fa48("13") ? "" : (stryCov_9fa48("13"), '18px'),
            lineHeight: 1.7,
            marginBottom: stryMutAct_9fa48("14") ? "" : (stryCov_9fa48("14"), 'var(--space-md)'),
            fontWeight: 500
          })}>
            FinGenie was built on the premise that traditional GAAP accounting principles could be combined with modern Bayesian inference models to provide the most objective financial outlook possible.
          </p>
          <p style={stryMutAct_9fa48("15") ? {} : (stryCov_9fa48("15"), {
            color: stryMutAct_9fa48("16") ? "" : (stryCov_9fa48("16"), 'var(--text-secondary)'),
            fontSize: stryMutAct_9fa48("17") ? "" : (stryCov_9fa48("17"), '18px'),
            lineHeight: 1.7,
            fontWeight: 500
          })}>
            Our sovereign engine ingests complex datasets and maps proprietary data points into normalized vectors. We apply deep technical analysis—including Ratio Synthesis and Anomaly Detection—to build an actionable narrative.
          </p>
        </div>
        
        <div className="card-dark" style={stryMutAct_9fa48("18") ? {} : (stryCov_9fa48("18"), {
          padding: stryMutAct_9fa48("19") ? "" : (stryCov_9fa48("19"), '40px'),
          borderRadius: stryMutAct_9fa48("20") ? "" : (stryCov_9fa48("20"), 'var(--radius-lg)')
        })}>
          <h3 className="section-heading__label mb-md" style={stryMutAct_9fa48("21") ? {} : (stryCov_9fa48("21"), {
            color: stryMutAct_9fa48("22") ? "" : (stryCov_9fa48("22"), 'rgba(255,255,255,0.4)')
          })}>Security & Privacy Ethics</h3>
          <div className="d-flex flex-column gap-5">
            <div className="d-flex gap-4">
              <Shield className="text-accent" size={24} />
              <div>
                <strong style={stryMutAct_9fa48("23") ? {} : (stryCov_9fa48("23"), {
                  color: stryMutAct_9fa48("24") ? "" : (stryCov_9fa48("24"), 'white'),
                  display: stryMutAct_9fa48("25") ? "" : (stryCov_9fa48("25"), 'block'),
                  marginBottom: stryMutAct_9fa48("26") ? "" : (stryCov_9fa48("26"), '4px'),
                  fontSize: stryMutAct_9fa48("27") ? "" : (stryCov_9fa48("27"), '16px')
                })}>Edge Encryption</strong>
                <span style={stryMutAct_9fa48("28") ? {} : (stryCov_9fa48("28"), {
                  color: stryMutAct_9fa48("29") ? "" : (stryCov_9fa48("29"), '#9ca3af'),
                  fontSize: stryMutAct_9fa48("30") ? "" : (stryCov_9fa48("30"), '14px')
                })}>Files are tokenized client-side before processing using AES-256 standards.</span>
              </div>
            </div>
            <div className="d-flex gap-4">
              <Trash2 className="text-accent" size={24} />
              <div>
                <strong style={stryMutAct_9fa48("31") ? {} : (stryCov_9fa48("31"), {
                  color: stryMutAct_9fa48("32") ? "" : (stryCov_9fa48("32"), 'white'),
                  display: stryMutAct_9fa48("33") ? "" : (stryCov_9fa48("33"), 'block'),
                  marginBottom: stryMutAct_9fa48("34") ? "" : (stryCov_9fa48("34"), '4px'),
                  fontSize: stryMutAct_9fa48("35") ? "" : (stryCov_9fa48("35"), '16px')
                })}>Zero-Knowledge</strong>
                <span style={stryMutAct_9fa48("36") ? {} : (stryCov_9fa48("36"), {
                  color: stryMutAct_9fa48("37") ? "" : (stryCov_9fa48("37"), '#9ca3af'),
                  fontSize: stryMutAct_9fa48("38") ? "" : (stryCov_9fa48("38"), '14px')
                })}>Artifacts are purged continuously after the session ends. No data persistence.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}