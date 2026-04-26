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
import { ShieldAlert, AlertTriangle, AlertCircle, Info } from 'lucide-react';
const SEVERITY_CONFIG = stryMutAct_9fa48("1699") ? {} : (stryCov_9fa48("1699"), {
  critical: stryMutAct_9fa48("1700") ? {} : (stryCov_9fa48("1700"), {
    color: stryMutAct_9fa48("1701") ? "" : (stryCov_9fa48("1701"), 'var(--accent-rose)'),
    bg: stryMutAct_9fa48("1702") ? "" : (stryCov_9fa48("1702"), 'rgba(225,29,72,0.05)'),
    icon: ShieldAlert,
    label: stryMutAct_9fa48("1703") ? "" : (stryCov_9fa48("1703"), 'CRITICAL')
  }),
  high: stryMutAct_9fa48("1704") ? {} : (stryCov_9fa48("1704"), {
    color: stryMutAct_9fa48("1705") ? "" : (stryCov_9fa48("1705"), 'var(--accent-cyan)'),
    bg: stryMutAct_9fa48("1706") ? "" : (stryCov_9fa48("1706"), 'rgba(8,145,178,0.05)'),
    icon: AlertTriangle,
    label: stryMutAct_9fa48("1707") ? "" : (stryCov_9fa48("1707"), 'HIGH')
  }),
  medium: stryMutAct_9fa48("1708") ? {} : (stryCov_9fa48("1708"), {
    color: stryMutAct_9fa48("1709") ? "" : (stryCov_9fa48("1709"), '#f59e0b'),
    bg: stryMutAct_9fa48("1710") ? "" : (stryCov_9fa48("1710"), 'rgba(245,158,11,0.05)'),
    icon: AlertCircle,
    label: stryMutAct_9fa48("1711") ? "" : (stryCov_9fa48("1711"), 'MEDIUM')
  }),
  low: stryMutAct_9fa48("1712") ? {} : (stryCov_9fa48("1712"), {
    color: stryMutAct_9fa48("1713") ? "" : (stryCov_9fa48("1713"), 'var(--accent-emerald)'),
    bg: stryMutAct_9fa48("1714") ? "" : (stryCov_9fa48("1714"), 'rgba(5,150,105,0.05)'),
    icon: Info,
    label: stryMutAct_9fa48("1715") ? "" : (stryCov_9fa48("1715"), 'LOW')
  })
});
export default function RiskCards({
  risks
}) {
  if (stryMutAct_9fa48("1716")) {
    {}
  } else {
    stryCov_9fa48("1716");
    if (stryMutAct_9fa48("1719") ? !risks && risks.length === 0 : stryMutAct_9fa48("1718") ? false : stryMutAct_9fa48("1717") ? true : (stryCov_9fa48("1717", "1718", "1719"), (stryMutAct_9fa48("1720") ? risks : (stryCov_9fa48("1720"), !risks)) || (stryMutAct_9fa48("1722") ? risks.length !== 0 : stryMutAct_9fa48("1721") ? false : (stryCov_9fa48("1721", "1722"), risks.length === 0)))) return null;
    return <div className="fade-in slide-up mb-xl">
      <div className="section-heading">
        <ShieldAlert className="text-secondary" size={20} />
        <h2 className="section-heading__label">Vulnerability Analysis</h2>
      </div>

      <div className="grid-2x2">
        {risks.map((risk, idx) => {
          if (stryMutAct_9fa48("1723")) {
            {}
          } else {
            stryCov_9fa48("1723");
            const config = stryMutAct_9fa48("1726") ? SEVERITY_CONFIG[risk.severity] && SEVERITY_CONFIG.low : stryMutAct_9fa48("1725") ? false : stryMutAct_9fa48("1724") ? true : (stryCov_9fa48("1724", "1725", "1726"), SEVERITY_CONFIG[risk.severity] || SEVERITY_CONFIG.low);
            const Icon = config.icon;
            return <div key={idx} className="card-light hover-lift" style={stryMutAct_9fa48("1727") ? {} : (stryCov_9fa48("1727"), {
              borderLeft: stryMutAct_9fa48("1728") ? `` : (stryCov_9fa48("1728"), `4px solid ${config.color}`),
              background: config.bg,
              animationDelay: stryMutAct_9fa48("1729") ? `` : (stryCov_9fa48("1729"), `${stryMutAct_9fa48("1730") ? idx / 0.1 : (stryCov_9fa48("1730"), idx * 0.1)}s`)
            })}>
              <div className="d-flex justify-between items-center mb-sm">
                <div className="d-flex items-center gap-3">
                  <Icon size={20} style={stryMutAct_9fa48("1731") ? {} : (stryCov_9fa48("1731"), {
                    color: config.color
                  })} />
                  <h3 className="section-heading__label" style={stryMutAct_9fa48("1732") ? {} : (stryCov_9fa48("1732"), {
                    color: stryMutAct_9fa48("1733") ? "" : (stryCov_9fa48("1733"), 'var(--text-primary)'),
                    textTransform: stryMutAct_9fa48("1734") ? "" : (stryCov_9fa48("1734"), 'none'),
                    letterSpacing: stryMutAct_9fa48("1735") ? "" : (stryCov_9fa48("1735"), 'normal'),
                    fontSize: stryMutAct_9fa48("1736") ? "" : (stryCov_9fa48("1736"), '16px')
                  })}>
                    {risk.risk}
                  </h3>
                </div>
                <span className="hero-badge" style={stryMutAct_9fa48("1737") ? {} : (stryCov_9fa48("1737"), {
                  background: config.color,
                  color: stryMutAct_9fa48("1738") ? "" : (stryCov_9fa48("1738"), 'white'),
                  border: stryMutAct_9fa48("1739") ? "" : (stryCov_9fa48("1739"), 'none')
                })}>
                  {config.label}
                </span>
              </div>
              <p className="text-secondary" style={stryMutAct_9fa48("1740") ? {} : (stryCov_9fa48("1740"), {
                fontSize: stryMutAct_9fa48("1741") ? "" : (stryCov_9fa48("1741"), '14px'),
                lineHeight: 1.6
              })}>
                {risk.description}
              </p>
            </div>;
          }
        })}
      </div>
    </div>;
  }
}