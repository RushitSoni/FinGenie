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
const SEVERITY_CONFIG = stryMutAct_9fa48("1476") ? {} : (stryCov_9fa48("1476"), {
  critical: stryMutAct_9fa48("1477") ? {} : (stryCov_9fa48("1477"), {
    color: stryMutAct_9fa48("1478") ? "" : (stryCov_9fa48("1478"), 'var(--accent-rose)'),
    bg: stryMutAct_9fa48("1479") ? "" : (stryCov_9fa48("1479"), 'rgba(225,29,72,0.05)'),
    icon: ShieldAlert,
    label: stryMutAct_9fa48("1480") ? "" : (stryCov_9fa48("1480"), 'CRITICAL')
  }),
  high: stryMutAct_9fa48("1481") ? {} : (stryCov_9fa48("1481"), {
    color: stryMutAct_9fa48("1482") ? "" : (stryCov_9fa48("1482"), 'var(--accent-cyan)'),
    bg: stryMutAct_9fa48("1483") ? "" : (stryCov_9fa48("1483"), 'rgba(8,145,178,0.05)'),
    icon: AlertTriangle,
    label: stryMutAct_9fa48("1484") ? "" : (stryCov_9fa48("1484"), 'HIGH')
  }),
  medium: stryMutAct_9fa48("1485") ? {} : (stryCov_9fa48("1485"), {
    color: stryMutAct_9fa48("1486") ? "" : (stryCov_9fa48("1486"), '#f59e0b'),
    bg: stryMutAct_9fa48("1487") ? "" : (stryCov_9fa48("1487"), 'rgba(245,158,11,0.05)'),
    icon: AlertCircle,
    label: stryMutAct_9fa48("1488") ? "" : (stryCov_9fa48("1488"), 'MEDIUM')
  }),
  low: stryMutAct_9fa48("1489") ? {} : (stryCov_9fa48("1489"), {
    color: stryMutAct_9fa48("1490") ? "" : (stryCov_9fa48("1490"), 'var(--accent-emerald)'),
    bg: stryMutAct_9fa48("1491") ? "" : (stryCov_9fa48("1491"), 'rgba(5,150,105,0.05)'),
    icon: Info,
    label: stryMutAct_9fa48("1492") ? "" : (stryCov_9fa48("1492"), 'LOW')
  })
});
export default function RiskCards({
  risks
}) {
  if (stryMutAct_9fa48("1493")) {
    {}
  } else {
    stryCov_9fa48("1493");
    if (stryMutAct_9fa48("1496") ? !risks && risks.length === 0 : stryMutAct_9fa48("1495") ? false : stryMutAct_9fa48("1494") ? true : (stryCov_9fa48("1494", "1495", "1496"), (stryMutAct_9fa48("1497") ? risks : (stryCov_9fa48("1497"), !risks)) || (stryMutAct_9fa48("1499") ? risks.length !== 0 : stryMutAct_9fa48("1498") ? false : (stryCov_9fa48("1498", "1499"), risks.length === 0)))) return null;
    return <div className="fade-in slide-up mb-xl">
      <div className="section-heading">
        <ShieldAlert className="text-secondary" size={20} />
        <h2 className="section-heading__label">Vulnerability Analysis</h2>
      </div>

      <div className="grid-2x2">
        {risks.map((risk, idx) => {
          if (stryMutAct_9fa48("1500")) {
            {}
          } else {
            stryCov_9fa48("1500");
            const config = stryMutAct_9fa48("1503") ? SEVERITY_CONFIG[risk.severity] && SEVERITY_CONFIG.low : stryMutAct_9fa48("1502") ? false : stryMutAct_9fa48("1501") ? true : (stryCov_9fa48("1501", "1502", "1503"), SEVERITY_CONFIG[risk.severity] || SEVERITY_CONFIG.low);
            const Icon = config.icon;
            return <div key={idx} className="card-light hover-lift" style={stryMutAct_9fa48("1504") ? {} : (stryCov_9fa48("1504"), {
              borderLeft: stryMutAct_9fa48("1505") ? `` : (stryCov_9fa48("1505"), `4px solid ${config.color}`),
              background: config.bg,
              animationDelay: stryMutAct_9fa48("1506") ? `` : (stryCov_9fa48("1506"), `${stryMutAct_9fa48("1507") ? idx / 0.1 : (stryCov_9fa48("1507"), idx * 0.1)}s`)
            })}>
              <div className="d-flex justify-between items-center mb-sm">
                <div className="d-flex items-center gap-3">
                  <Icon size={20} style={stryMutAct_9fa48("1508") ? {} : (stryCov_9fa48("1508"), {
                    color: config.color
                  })} />
                  <h3 className="section-heading__label" style={stryMutAct_9fa48("1509") ? {} : (stryCov_9fa48("1509"), {
                    color: stryMutAct_9fa48("1510") ? "" : (stryCov_9fa48("1510"), 'var(--text-primary)'),
                    textTransform: stryMutAct_9fa48("1511") ? "" : (stryCov_9fa48("1511"), 'none'),
                    letterSpacing: stryMutAct_9fa48("1512") ? "" : (stryCov_9fa48("1512"), 'normal'),
                    fontSize: stryMutAct_9fa48("1513") ? "" : (stryCov_9fa48("1513"), '16px')
                  })}>
                    {risk.risk}
                  </h3>
                </div>
                <span className="hero-badge" style={stryMutAct_9fa48("1514") ? {} : (stryCov_9fa48("1514"), {
                  background: config.color,
                  color: stryMutAct_9fa48("1515") ? "" : (stryCov_9fa48("1515"), 'white'),
                  border: stryMutAct_9fa48("1516") ? "" : (stryCov_9fa48("1516"), 'none')
                })}>
                  {config.label}
                </span>
              </div>
              <p className="text-secondary" style={stryMutAct_9fa48("1517") ? {} : (stryCov_9fa48("1517"), {
                fontSize: stryMutAct_9fa48("1518") ? "" : (stryCov_9fa48("1518"), '14px'),
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