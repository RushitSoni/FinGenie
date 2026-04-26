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
import { TrendingUp, TrendingDown, Minus, Activity } from 'lucide-react';
export default function KPICards({
  kpis
}) {
  if (stryMutAct_9fa48("867")) {
    {}
  } else {
    stryCov_9fa48("867");
    if (stryMutAct_9fa48("870") ? !kpis && kpis.length === 0 : stryMutAct_9fa48("869") ? false : stryMutAct_9fa48("868") ? true : (stryCov_9fa48("868", "869", "870"), (stryMutAct_9fa48("871") ? kpis : (stryCov_9fa48("871"), !kpis)) || (stryMutAct_9fa48("873") ? kpis.length !== 0 : stryMutAct_9fa48("872") ? false : (stryCov_9fa48("872", "873"), kpis.length === 0)))) return null;
    return <div className="fade-in slide-up mb-xl">
      <div className="section-heading">
        <Activity className="text-accent" size={24} />
        <h2 className="section-heading__label">Institutional Performance KPIs</h2>
      </div>

      <div className="kpi-grid-refined">
        {kpis.map((kpi, idx) => {
          if (stryMutAct_9fa48("874")) {
            {}
          } else {
            stryCov_9fa48("874");
            const isUp = stryMutAct_9fa48("877") ? kpi.trend !== 'up' : stryMutAct_9fa48("876") ? false : stryMutAct_9fa48("875") ? true : (stryCov_9fa48("875", "876", "877"), kpi.trend === (stryMutAct_9fa48("878") ? "" : (stryCov_9fa48("878"), 'up')));
            const isDown = stryMutAct_9fa48("881") ? kpi.trend !== 'down' : stryMutAct_9fa48("880") ? false : stryMutAct_9fa48("879") ? true : (stryCov_9fa48("879", "880", "881"), kpi.trend === (stryMutAct_9fa48("882") ? "" : (stryCov_9fa48("882"), 'down')));
            const TrendIcon = isUp ? TrendingUp : isDown ? TrendingDown : Minus;
            const trendClass = isUp ? stryMutAct_9fa48("883") ? "" : (stryCov_9fa48("883"), 'text-emerald') : isDown ? stryMutAct_9fa48("884") ? "" : (stryCov_9fa48("884"), 'text-rose') : stryMutAct_9fa48("885") ? "" : (stryCov_9fa48("885"), 'text-muted');
            return <div key={idx} className="card-light hover-lift" style={stryMutAct_9fa48("886") ? {} : (stryCov_9fa48("886"), {
              animationDelay: stryMutAct_9fa48("887") ? `` : (stryCov_9fa48("887"), `${stryMutAct_9fa48("888") ? idx / 0.1 : (stryCov_9fa48("888"), idx * 0.1)}s`)
            })}>
              <div className="d-flex justify-between items-start mb-sm">
                 <div className="sub-label mb-0">{kpi.name}</div>
                 <div className={trendClass}>
                   <TrendIcon size={18} strokeWidth={3} />
                 </div>
              </div>
              
              <div className="metric-big mb-xs">
                {stryMutAct_9fa48("891") ? kpi.formatted_value && kpi.value : stryMutAct_9fa48("890") ? false : stryMutAct_9fa48("889") ? true : (stryCov_9fa48("889", "890", "891"), kpi.formatted_value || kpi.value)}
              </div>
              
              <div className="text-secondary" style={stryMutAct_9fa48("892") ? {} : (stryCov_9fa48("892"), {
                fontSize: stryMutAct_9fa48("893") ? "" : (stryCov_9fa48("893"), '13px'),
                lineHeight: 1.5
              })}>
                {kpi.description}
              </div>
            </div>;
          }
        })}
      </div>
    </div>;
  }
}