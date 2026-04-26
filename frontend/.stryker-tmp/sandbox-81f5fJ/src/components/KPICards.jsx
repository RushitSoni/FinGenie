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
  if (stryMutAct_9fa48("1090")) {
    {}
  } else {
    stryCov_9fa48("1090");
    if (stryMutAct_9fa48("1093") ? !kpis && kpis.length === 0 : stryMutAct_9fa48("1092") ? false : stryMutAct_9fa48("1091") ? true : (stryCov_9fa48("1091", "1092", "1093"), (stryMutAct_9fa48("1094") ? kpis : (stryCov_9fa48("1094"), !kpis)) || (stryMutAct_9fa48("1096") ? kpis.length !== 0 : stryMutAct_9fa48("1095") ? false : (stryCov_9fa48("1095", "1096"), kpis.length === 0)))) return null;
    return <div className="fade-in slide-up mb-xl">
      <div className="section-heading">
        <Activity className="text-accent" size={24} />
        <h2 className="section-heading__label">Institutional Performance KPIs</h2>
      </div>

      <div className="kpi-grid-refined">
        {kpis.map((kpi, idx) => {
          if (stryMutAct_9fa48("1097")) {
            {}
          } else {
            stryCov_9fa48("1097");
            const isUp = stryMutAct_9fa48("1100") ? kpi.trend !== 'up' : stryMutAct_9fa48("1099") ? false : stryMutAct_9fa48("1098") ? true : (stryCov_9fa48("1098", "1099", "1100"), kpi.trend === (stryMutAct_9fa48("1101") ? "" : (stryCov_9fa48("1101"), 'up')));
            const isDown = stryMutAct_9fa48("1104") ? kpi.trend !== 'down' : stryMutAct_9fa48("1103") ? false : stryMutAct_9fa48("1102") ? true : (stryCov_9fa48("1102", "1103", "1104"), kpi.trend === (stryMutAct_9fa48("1105") ? "" : (stryCov_9fa48("1105"), 'down')));
            const TrendIcon = isUp ? TrendingUp : isDown ? TrendingDown : Minus;
            const trendClass = isUp ? stryMutAct_9fa48("1106") ? "" : (stryCov_9fa48("1106"), 'text-emerald') : isDown ? stryMutAct_9fa48("1107") ? "" : (stryCov_9fa48("1107"), 'text-rose') : stryMutAct_9fa48("1108") ? "" : (stryCov_9fa48("1108"), 'text-muted');
            return <div key={idx} className="card-light hover-lift" style={stryMutAct_9fa48("1109") ? {} : (stryCov_9fa48("1109"), {
              animationDelay: stryMutAct_9fa48("1110") ? `` : (stryCov_9fa48("1110"), `${stryMutAct_9fa48("1111") ? idx / 0.1 : (stryCov_9fa48("1111"), idx * 0.1)}s`)
            })}>
              <div className="d-flex justify-between items-start mb-sm">
                 <div className="sub-label mb-0">{kpi.name}</div>
                 <div className={trendClass}>
                   <TrendIcon size={18} strokeWidth={3} />
                 </div>
              </div>
              
              <div className="metric-big mb-xs">
                {stryMutAct_9fa48("1114") ? kpi.formatted_value && kpi.value : stryMutAct_9fa48("1113") ? false : stryMutAct_9fa48("1112") ? true : (stryCov_9fa48("1112", "1113", "1114"), kpi.formatted_value || kpi.value)}
              </div>
              
              <div className="text-secondary" style={stryMutAct_9fa48("1115") ? {} : (stryCov_9fa48("1115"), {
                fontSize: stryMutAct_9fa48("1116") ? "" : (stryCov_9fa48("1116"), '13px'),
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