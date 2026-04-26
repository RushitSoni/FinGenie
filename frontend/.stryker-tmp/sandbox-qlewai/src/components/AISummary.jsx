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
import { Sparkles } from 'lucide-react';
export default function AISummary({
  summary
}) {
  if (stryMutAct_9fa48("39")) {
    {}
  } else {
    stryCov_9fa48("39");
    if (stryMutAct_9fa48("42") ? false : stryMutAct_9fa48("41") ? true : stryMutAct_9fa48("40") ? summary : (stryCov_9fa48("40", "41", "42"), !summary)) return null;
    return <div className="card-light fade-in hover-lift mb-lg">
      <div className="d-flex justify-between items-center mb-md">
        <div className="section-heading mb-0">
          <Sparkles className="text-secondary" size={18} />
          <h2 className="section-heading__label">AI Narrative Synthesis</h2>
        </div>
        <span className="hero-badge">Deep Logic v4.2</span>
      </div>
      
      <div className="summary-content" style={stryMutAct_9fa48("43") ? {} : (stryCov_9fa48("43"), {
        padding: stryMutAct_9fa48("44") ? "" : (stryCov_9fa48("44"), 'var(--space-md)'),
        background: stryMutAct_9fa48("45") ? "" : (stryCov_9fa48("45"), 'var(--bg-blue-light)'),
        borderRadius: stryMutAct_9fa48("46") ? "" : (stryCov_9fa48("46"), 'var(--radius-md)'),
        borderLeft: stryMutAct_9fa48("47") ? "" : (stryCov_9fa48("47"), '4px solid var(--accent-blue)')
      })}>
        {stryMutAct_9fa48("48") ? summary.split('\n').map((paragraph, idx) => <p key={idx} className="text-primary" style={{
          fontSize: '18px',
          lineHeight: 1.8,
          fontStyle: 'italic',
          fontWeight: 500,
          marginBottom: idx === summary.split('\n').filter(p => p.trim()).length - 1 ? 0 : '16px'
        }}>
            "{paragraph}"
          </p>) : (stryCov_9fa48("48"), summary.split(stryMutAct_9fa48("49") ? "" : (stryCov_9fa48("49"), '\n')).filter(stryMutAct_9fa48("50") ? () => undefined : (stryCov_9fa48("50"), p => stryMutAct_9fa48("51") ? p : (stryCov_9fa48("51"), p.trim()))).map(stryMutAct_9fa48("52") ? () => undefined : (stryCov_9fa48("52"), (paragraph, idx) => <p key={idx} className="text-primary" style={stryMutAct_9fa48("53") ? {} : (stryCov_9fa48("53"), {
          fontSize: stryMutAct_9fa48("54") ? "" : (stryCov_9fa48("54"), '18px'),
          lineHeight: 1.8,
          fontStyle: stryMutAct_9fa48("55") ? "" : (stryCov_9fa48("55"), 'italic'),
          fontWeight: 500,
          marginBottom: (stryMutAct_9fa48("58") ? idx !== summary.split('\n').filter(p => p.trim()).length - 1 : stryMutAct_9fa48("57") ? false : stryMutAct_9fa48("56") ? true : (stryCov_9fa48("56", "57", "58"), idx === (stryMutAct_9fa48("59") ? summary.split('\n').filter(p => p.trim()).length + 1 : (stryCov_9fa48("59"), (stryMutAct_9fa48("60") ? summary.split('\n').length : (stryCov_9fa48("60"), summary.split(stryMutAct_9fa48("61") ? "" : (stryCov_9fa48("61"), '\n')).filter(stryMutAct_9fa48("62") ? () => undefined : (stryCov_9fa48("62"), p => stryMutAct_9fa48("63") ? p : (stryCov_9fa48("63"), p.trim()))).length)) - 1)))) ? 0 : stryMutAct_9fa48("64") ? "" : (stryCov_9fa48("64"), '16px')
        })}>
            "{paragraph}"
          </p>)))}
      </div>
    </div>;
  }
}