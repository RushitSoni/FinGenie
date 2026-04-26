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
import { Lightbulb, CheckCircle2 } from 'lucide-react';
export default function Recommendations({
  recommendations
}) {
  if (stryMutAct_9fa48("932")) {
    {}
  } else {
    stryCov_9fa48("932");
    if (stryMutAct_9fa48("935") ? !recommendations && recommendations.length === 0 : stryMutAct_9fa48("934") ? false : stryMutAct_9fa48("933") ? true : (stryCov_9fa48("933", "934", "935"), (stryMutAct_9fa48("936") ? recommendations : (stryCov_9fa48("936"), !recommendations)) || (stryMutAct_9fa48("938") ? recommendations.length !== 0 : stryMutAct_9fa48("937") ? false : (stryCov_9fa48("937", "938"), recommendations.length === 0)))) return null;
    return <div className="fade-in slide-up mb-xl">
      <div className="section-heading">
        <Lightbulb className="text-secondary" size={20} />
        <h2 className="section-heading__label">Actionable Recommendations</h2>
      </div>

      <div className="card-light flex-column gap-6">
        {recommendations.map(stryMutAct_9fa48("939") ? () => undefined : (stryCov_9fa48("939"), (rec, idx) => <div key={idx} className="hover-lift d-flex gap-4 items-start" style={stryMutAct_9fa48("940") ? {} : (stryCov_9fa48("940"), {
          animationDelay: stryMutAct_9fa48("941") ? `` : (stryCov_9fa48("941"), `${stryMutAct_9fa48("942") ? idx / 0.1 : (stryCov_9fa48("942"), idx * 0.1)}s`),
          padding: stryMutAct_9fa48("943") ? "" : (stryCov_9fa48("943"), '20px'),
          borderRadius: stryMutAct_9fa48("944") ? "" : (stryCov_9fa48("944"), 'var(--radius-md)'),
          background: stryMutAct_9fa48("945") ? "" : (stryCov_9fa48("945"), 'var(--bg-blue-light)'),
          border: stryMutAct_9fa48("946") ? "" : (stryCov_9fa48("946"), '1px solid rgba(37, 99, 235, 0.05)')
        })}>
            <div className="recommendation-index d-flex items-center justify-center" style={stryMutAct_9fa48("947") ? {} : (stryCov_9fa48("947"), {
            width: stryMutAct_9fa48("948") ? "" : (stryCov_9fa48("948"), '32px'),
            height: stryMutAct_9fa48("949") ? "" : (stryCov_9fa48("949"), '32px'),
            borderRadius: stryMutAct_9fa48("950") ? "" : (stryCov_9fa48("950"), '50%'),
            background: stryMutAct_9fa48("951") ? "" : (stryCov_9fa48("951"), 'var(--bg-surface)'),
            border: stryMutAct_9fa48("952") ? "" : (stryCov_9fa48("952"), '1px solid var(--border-light)'),
            flexShrink: 0
          })}>
               <span style={stryMutAct_9fa48("953") ? {} : (stryCov_9fa48("953"), {
              fontSize: stryMutAct_9fa48("954") ? "" : (stryCov_9fa48("954"), '12px'),
              fontWeight: 900,
              color: stryMutAct_9fa48("955") ? "" : (stryCov_9fa48("955"), 'var(--accent-blue)')
            })}>{stryMutAct_9fa48("956") ? idx - 1 : (stryCov_9fa48("956"), idx + 1)}</span>
            </div>
            
            <div className="text-primary" style={stryMutAct_9fa48("957") ? {} : (stryCov_9fa48("957"), {
            fontSize: stryMutAct_9fa48("958") ? "" : (stryCov_9fa48("958"), '15px'),
            lineHeight: 1.7,
            fontWeight: 500
          })}>
              {rec}
            </div>
          </div>))}
      </div>
    </div>;
  }
}