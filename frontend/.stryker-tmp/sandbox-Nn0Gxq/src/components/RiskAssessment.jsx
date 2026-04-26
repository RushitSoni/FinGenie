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
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js';
import { ShieldAlert, AlertTriangle, Info, AlertCircle, Search, FileText, Zap, LayoutPanelLeft } from 'lucide-react';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);
const SEVERITY_CONFIG = stryMutAct_9fa48("1526") ? {} : (stryCov_9fa48("1526"), {
  critical: stryMutAct_9fa48("1527") ? {} : (stryCov_9fa48("1527"), {
    color: stryMutAct_9fa48("1528") ? "" : (stryCov_9fa48("1528"), 'var(--accent-rose)'),
    icon: ShieldAlert,
    label: stryMutAct_9fa48("1529") ? "" : (stryCov_9fa48("1529"), 'CRITICAL'),
    bg: stryMutAct_9fa48("1530") ? "" : (stryCov_9fa48("1530"), 'rgba(225,29,72,0.05)')
  }),
  high: stryMutAct_9fa48("1531") ? {} : (stryCov_9fa48("1531"), {
    color: stryMutAct_9fa48("1532") ? "" : (stryCov_9fa48("1532"), '#f97316'),
    icon: AlertTriangle,
    label: stryMutAct_9fa48("1533") ? "" : (stryCov_9fa48("1533"), 'HIGH'),
    bg: stryMutAct_9fa48("1534") ? "" : (stryCov_9fa48("1534"), 'rgba(249,115,22,0.05)')
  }),
  medium: stryMutAct_9fa48("1535") ? {} : (stryCov_9fa48("1535"), {
    color: stryMutAct_9fa48("1536") ? "" : (stryCov_9fa48("1536"), '#f59e0b'),
    icon: AlertCircle,
    label: stryMutAct_9fa48("1537") ? "" : (stryCov_9fa48("1537"), 'MEDIUM'),
    bg: stryMutAct_9fa48("1538") ? "" : (stryCov_9fa48("1538"), 'rgba(245,158,11,0.05)')
  }),
  low: stryMutAct_9fa48("1539") ? {} : (stryCov_9fa48("1539"), {
    color: stryMutAct_9fa48("1540") ? "" : (stryCov_9fa48("1540"), 'var(--accent-emerald)'),
    icon: Info,
    label: stryMutAct_9fa48("1541") ? "" : (stryCov_9fa48("1541"), 'LOW'),
    bg: stryMutAct_9fa48("1542") ? "" : (stryCov_9fa48("1542"), 'rgba(5,150,105,0.05)')
  })
});
export default function RiskAssessment({
  result
}) {
  if (stryMutAct_9fa48("1543")) {
    {}
  } else {
    stryCov_9fa48("1543");
    if (stryMutAct_9fa48("1546") ? false : stryMutAct_9fa48("1545") ? true : stryMutAct_9fa48("1544") ? result : (stryCov_9fa48("1544", "1545", "1546"), !result)) return null;
    const {
      risks
    } = result;
    const safeRisks = stryMutAct_9fa48("1549") ? risks && [] : stryMutAct_9fa48("1548") ? false : stryMutAct_9fa48("1547") ? true : (stryCov_9fa48("1547", "1548", "1549"), risks || (stryMutAct_9fa48("1550") ? ["Stryker was here"] : (stryCov_9fa48("1550"), [])));
    const chartData = stryMutAct_9fa48("1551") ? {} : (stryCov_9fa48("1551"), {
      labels: safeRisks.map(stryMutAct_9fa48("1552") ? () => undefined : (stryCov_9fa48("1552"), (_, i) => stryMutAct_9fa48("1553") ? `` : (stryCov_9fa48("1553"), `V${stryMutAct_9fa48("1554") ? i - 1 : (stryCov_9fa48("1554"), i + 1)}`))),
      datasets: stryMutAct_9fa48("1555") ? [] : (stryCov_9fa48("1555"), [stryMutAct_9fa48("1556") ? {} : (stryCov_9fa48("1556"), {
        label: stryMutAct_9fa48("1557") ? "" : (stryCov_9fa48("1557"), 'Severity Level'),
        data: safeRisks.map(stryMutAct_9fa48("1558") ? () => undefined : (stryCov_9fa48("1558"), r => (stryMutAct_9fa48("1561") ? r.severity !== 'critical' : stryMutAct_9fa48("1560") ? false : stryMutAct_9fa48("1559") ? true : (stryCov_9fa48("1559", "1560", "1561"), r.severity === (stryMutAct_9fa48("1562") ? "" : (stryCov_9fa48("1562"), 'critical')))) ? 4 : (stryMutAct_9fa48("1565") ? r.severity !== 'high' : stryMutAct_9fa48("1564") ? false : stryMutAct_9fa48("1563") ? true : (stryCov_9fa48("1563", "1564", "1565"), r.severity === (stryMutAct_9fa48("1566") ? "" : (stryCov_9fa48("1566"), 'high')))) ? 3 : (stryMutAct_9fa48("1569") ? r.severity !== 'medium' : stryMutAct_9fa48("1568") ? false : stryMutAct_9fa48("1567") ? true : (stryCov_9fa48("1567", "1568", "1569"), r.severity === (stryMutAct_9fa48("1570") ? "" : (stryCov_9fa48("1570"), 'medium')))) ? 2 : 1)),
        backgroundColor: ctx => {
          if (stryMutAct_9fa48("1571")) {
            {}
          } else {
            stryCov_9fa48("1571");
            const val = ctx.raw;
            return (stryMutAct_9fa48("1574") ? val !== 4 : stryMutAct_9fa48("1573") ? false : stryMutAct_9fa48("1572") ? true : (stryCov_9fa48("1572", "1573", "1574"), val === 4)) ? stryMutAct_9fa48("1575") ? "" : (stryCov_9fa48("1575"), 'var(--accent-rose)') : (stryMutAct_9fa48("1578") ? val !== 3 : stryMutAct_9fa48("1577") ? false : stryMutAct_9fa48("1576") ? true : (stryCov_9fa48("1576", "1577", "1578"), val === 3)) ? stryMutAct_9fa48("1579") ? "" : (stryCov_9fa48("1579"), '#f97316') : (stryMutAct_9fa48("1582") ? val !== 2 : stryMutAct_9fa48("1581") ? false : stryMutAct_9fa48("1580") ? true : (stryCov_9fa48("1580", "1581", "1582"), val === 2)) ? stryMutAct_9fa48("1583") ? "" : (stryCov_9fa48("1583"), '#f59e0b') : stryMutAct_9fa48("1584") ? "" : (stryCov_9fa48("1584"), 'var(--accent-emerald)');
          }
        },
        borderRadius: 4,
        barThickness: 16
      })])
    });
    const chartOptions = stryMutAct_9fa48("1585") ? {} : (stryCov_9fa48("1585"), {
      responsive: stryMutAct_9fa48("1586") ? false : (stryCov_9fa48("1586"), true),
      maintainAspectRatio: stryMutAct_9fa48("1587") ? true : (stryCov_9fa48("1587"), false),
      plugins: stryMutAct_9fa48("1588") ? {} : (stryCov_9fa48("1588"), {
        legend: stryMutAct_9fa48("1589") ? {} : (stryCov_9fa48("1589"), {
          display: stryMutAct_9fa48("1590") ? true : (stryCov_9fa48("1590"), false)
        })
      }),
      scales: stryMutAct_9fa48("1591") ? {} : (stryCov_9fa48("1591"), {
        x: stryMutAct_9fa48("1592") ? {} : (stryCov_9fa48("1592"), {
          display: stryMutAct_9fa48("1593") ? true : (stryCov_9fa48("1593"), false)
        }),
        y: stryMutAct_9fa48("1594") ? {} : (stryCov_9fa48("1594"), {
          display: stryMutAct_9fa48("1595") ? true : (stryCov_9fa48("1595"), false),
          max: 5
        })
      })
    });
    const mitigations = stryMutAct_9fa48("1596") ? safeRisks.map(r => ({
      name: r.risk,
      text: r.mitigation
    })) : (stryCov_9fa48("1596"), safeRisks.filter(stryMutAct_9fa48("1597") ? () => undefined : (stryCov_9fa48("1597"), r => r.mitigation)).map(stryMutAct_9fa48("1598") ? () => undefined : (stryCov_9fa48("1598"), r => stryMutAct_9fa48("1599") ? {} : (stryCov_9fa48("1599"), {
      name: r.risk,
      text: r.mitigation
    }))));
    return <div className="risk-assessment fade-in slide-up" style={stryMutAct_9fa48("1600") ? {} : (stryCov_9fa48("1600"), {
      paddingBottom: stryMutAct_9fa48("1601") ? "" : (stryCov_9fa48("1601"), 'var(--space-2xl)')
    })}>
      <header className="page-header mb-xl">
        <div className="d-flex items-center gap-2 mb-xs">
          <ShieldAlert className="text-secondary" size={16} />
          <span className="page-header__eyebrow">Risk Exposure Index</span>
        </div>
        <h1 className="page-header__title">
          Vulnerability & <span className="page-header__accent">Risk Assessment.</span>
        </h1>
        <p className="hero-subtitle">
          Automated detection of financial anomalies, liquidity threats, and strategic vulnerabilities.
        </p>
        
        <div className="mt-lg">
          <div className="card-light d-flex items-center gap-8" style={stryMutAct_9fa48("1602") ? {} : (stryCov_9fa48("1602"), {
            padding: stryMutAct_9fa48("1603") ? "" : (stryCov_9fa48("1603"), '24px 32px'),
            width: stryMutAct_9fa48("1604") ? "" : (stryCov_9fa48("1604"), 'fit-content'),
            background: stryMutAct_9fa48("1605") ? "" : (stryCov_9fa48("1605"), 'var(--bg-blue-light)'),
            border: stryMutAct_9fa48("1606") ? "" : (stryCov_9fa48("1606"), 'none')
          })}>
            <div>
              <div className="sub-label mb-0">Total Vectors</div>
              <div className="metric-big" style={stryMutAct_9fa48("1607") ? {} : (stryCov_9fa48("1607"), {
                fontSize: stryMutAct_9fa48("1608") ? "" : (stryCov_9fa48("1608"), '40px')
              })}>{safeRisks.length}</div>
            </div>
            <div style={stryMutAct_9fa48("1609") ? {} : (stryCov_9fa48("1609"), {
              height: stryMutAct_9fa48("1610") ? "" : (stryCov_9fa48("1610"), '40px'),
              width: stryMutAct_9fa48("1611") ? "" : (stryCov_9fa48("1611"), '1px'),
              background: stryMutAct_9fa48("1612") ? "" : (stryCov_9fa48("1612"), 'var(--border-strong)'),
              opacity: 0.2
            })} />
            <p className="text-secondary" style={stryMutAct_9fa48("1613") ? {} : (stryCov_9fa48("1613"), {
              fontSize: stryMutAct_9fa48("1614") ? "" : (stryCov_9fa48("1614"), '13px'),
              fontWeight: 600,
              maxWidth: stryMutAct_9fa48("1615") ? "" : (stryCov_9fa48("1615"), '240px'),
              lineHeight: 1.5
            })}>
               Institutional-grade vectors cross-referenced against global treasury standards.
            </p>
          </div>
        </div>
      </header>

      <div className="grid-cols-12" style={stryMutAct_9fa48("1616") ? {} : (stryCov_9fa48("1616"), {
        gap: stryMutAct_9fa48("1617") ? "" : (stryCov_9fa48("1617"), 'var(--space-xl)')
      })}>
        <div className="col-span-8">
          <div className="card-light" style={stryMutAct_9fa48("1618") ? {} : (stryCov_9fa48("1618"), {
            padding: 0
          })}>
            <div className="d-flex justify-between items-center" style={stryMutAct_9fa48("1619") ? {} : (stryCov_9fa48("1619"), {
              padding: stryMutAct_9fa48("1620") ? "" : (stryCov_9fa48("1620"), '20px'),
              borderBottom: stryMutAct_9fa48("1621") ? "" : (stryCov_9fa48("1621"), '1px solid var(--border-light)')
            })}>
               <h3 className="section-heading__label" style={stryMutAct_9fa48("1622") ? {} : (stryCov_9fa48("1622"), {
                fontSize: stryMutAct_9fa48("1623") ? "" : (stryCov_9fa48("1623"), '16px')
              })}>Identified Vulnerabilities</h3>
               <span className="hero-badge">REVISION V4.2</span>
            </div>
            
            <div style={stryMutAct_9fa48("1624") ? {} : (stryCov_9fa48("1624"), {
              padding: stryMutAct_9fa48("1625") ? "" : (stryCov_9fa48("1625"), '16px')
            })} className="d-flex flex-column gap-3">
              {(stryMutAct_9fa48("1629") ? safeRisks.length <= 0 : stryMutAct_9fa48("1628") ? safeRisks.length >= 0 : stryMutAct_9fa48("1627") ? false : stryMutAct_9fa48("1626") ? true : (stryCov_9fa48("1626", "1627", "1628", "1629"), safeRisks.length > 0)) ? safeRisks.map((risk, idx) => {
                if (stryMutAct_9fa48("1630")) {
                  {}
                } else {
                  stryCov_9fa48("1630");
                  const config = stryMutAct_9fa48("1633") ? SEVERITY_CONFIG[risk.severity] && SEVERITY_CONFIG.low : stryMutAct_9fa48("1632") ? false : stryMutAct_9fa48("1631") ? true : (stryCov_9fa48("1631", "1632", "1633"), SEVERITY_CONFIG[risk.severity] || SEVERITY_CONFIG.low);
                  const Icon = config.icon;
                  return <div key={idx} className="hover-lift d-flex items-start gap-4" style={stryMutAct_9fa48("1634") ? {} : (stryCov_9fa48("1634"), {
                    background: config.bg,
                    padding: stryMutAct_9fa48("1635") ? "" : (stryCov_9fa48("1635"), '20px'),
                    borderRadius: stryMutAct_9fa48("1636") ? "" : (stryCov_9fa48("1636"), 'var(--radius-md)'),
                    borderLeft: stryMutAct_9fa48("1637") ? `` : (stryCov_9fa48("1637"), `4px solid ${config.color}`)
                  })}>
                      <div style={stryMutAct_9fa48("1638") ? {} : (stryCov_9fa48("1638"), {
                      padding: stryMutAct_9fa48("1639") ? "" : (stryCov_9fa48("1639"), '8px'),
                      background: stryMutAct_9fa48("1640") ? "" : (stryCov_9fa48("1640"), 'white'),
                      borderRadius: stryMutAct_9fa48("1641") ? "" : (stryCov_9fa48("1641"), '50%'),
                      boxShadow: stryMutAct_9fa48("1642") ? "" : (stryCov_9fa48("1642"), 'var(--shadow-sm)')
                    })}>
                        <Icon size={18} style={stryMutAct_9fa48("1643") ? {} : (stryCov_9fa48("1643"), {
                        color: config.color
                      })} />
                      </div>
                      <div style={stryMutAct_9fa48("1644") ? {} : (stryCov_9fa48("1644"), {
                      flex: 1
                    })}>
                        <div className="d-flex justify-between items-start mb-xs">
                          <div>
                            <span style={stryMutAct_9fa48("1645") ? {} : (stryCov_9fa48("1645"), {
                            fontSize: stryMutAct_9fa48("1646") ? "" : (stryCov_9fa48("1646"), '10px'),
                            fontWeight: 800,
                            color: config.color,
                            letterSpacing: stryMutAct_9fa48("1647") ? "" : (stryCov_9fa48("1647"), '0.05em')
                          })}>{config.label}</span>
                            <h4 className="text-primary font-bold" style={stryMutAct_9fa48("1648") ? {} : (stryCov_9fa48("1648"), {
                            fontSize: stryMutAct_9fa48("1649") ? "" : (stryCov_9fa48("1649"), '16px'),
                            margin: 0
                          })}>{risk.risk}</h4>
                          </div>
                          <div className="metric-big" style={stryMutAct_9fa48("1650") ? {} : (stryCov_9fa48("1650"), {
                          fontSize: stryMutAct_9fa48("1651") ? "" : (stryCov_9fa48("1651"), '18px'),
                          color: config.color
                        })}>
                            {(stryMutAct_9fa48("1654") ? risk.severity !== 'critical' : stryMutAct_9fa48("1653") ? false : stryMutAct_9fa48("1652") ? true : (stryCov_9fa48("1652", "1653", "1654"), risk.severity === (stryMutAct_9fa48("1655") ? "" : (stryCov_9fa48("1655"), 'critical')))) ? stryMutAct_9fa48("1656") ? "" : (stryCov_9fa48("1656"), '9.8') : (stryMutAct_9fa48("1659") ? risk.severity !== 'high' : stryMutAct_9fa48("1658") ? false : stryMutAct_9fa48("1657") ? true : (stryCov_9fa48("1657", "1658", "1659"), risk.severity === (stryMutAct_9fa48("1660") ? "" : (stryCov_9fa48("1660"), 'high')))) ? stryMutAct_9fa48("1661") ? "" : (stryCov_9fa48("1661"), '7.5') : (stryMutAct_9fa48("1664") ? risk.severity !== 'medium' : stryMutAct_9fa48("1663") ? false : stryMutAct_9fa48("1662") ? true : (stryCov_9fa48("1662", "1663", "1664"), risk.severity === (stryMutAct_9fa48("1665") ? "" : (stryCov_9fa48("1665"), 'medium')))) ? stryMutAct_9fa48("1666") ? "" : (stryCov_9fa48("1666"), '4.2') : stryMutAct_9fa48("1667") ? "" : (stryCov_9fa48("1667"), '1.5')}
                          </div>
                        </div>
                        <p className="text-secondary" style={stryMutAct_9fa48("1668") ? {} : (stryCov_9fa48("1668"), {
                        fontSize: stryMutAct_9fa48("1669") ? "" : (stryCov_9fa48("1669"), '13px'),
                        lineHeight: 1.6,
                        margin: 0
                      })}>{risk.description}</p>
                      </div>
                    </div>;
                }
              }) : <div style={stryMutAct_9fa48("1670") ? {} : (stryCov_9fa48("1670"), {
                padding: stryMutAct_9fa48("1671") ? "" : (stryCov_9fa48("1671"), '48px'),
                textAlign: stryMutAct_9fa48("1672") ? "" : (stryCov_9fa48("1672"), 'center')
              })}>
                   <p className="text-muted">No institutional risks detected in the current dataset.</p>
                </div>}
            </div>
          </div>
        </div>

        <div className="col-span-4 d-flex flex-column gap-6">
          <div className="card-dark" style={stryMutAct_9fa48("1673") ? {} : (stryCov_9fa48("1673"), {
            padding: stryMutAct_9fa48("1674") ? "" : (stryCov_9fa48("1674"), '32px')
          })}>
            <div className="d-flex items-center gap-2 mb-lg">
              <Zap className="text-accent" size={18} />
              <h3 className="sub-label mb-0" style={stryMutAct_9fa48("1675") ? {} : (stryCov_9fa48("1675"), {
                color: stryMutAct_9fa48("1676") ? "" : (stryCov_9fa48("1676"), 'white'),
                opacity: 0.8
              })}>Mitigation Protocols</h3>
            </div>
            
            <div className="d-flex flex-column gap-6">
              {(stryMutAct_9fa48("1680") ? mitigations.length <= 0 : stryMutAct_9fa48("1679") ? mitigations.length >= 0 : stryMutAct_9fa48("1678") ? false : stryMutAct_9fa48("1677") ? true : (stryCov_9fa48("1677", "1678", "1679", "1680"), mitigations.length > 0)) ? stryMutAct_9fa48("1681") ? mitigations.map((mit, idx) => <div key={idx} className="d-flex gap-4">
                    <span style={{
                  fontSize: '14px',
                  fontWeight: 900,
                  color: 'var(--accent-blue)',
                  opacity: 0.4
                }}>0{idx + 1}</span>
                    <div>
                      <div className="text-white font-bold mb-xs" style={{
                    fontSize: '13px'
                  }}>{mit.name}</div>
                      <p style={{
                    fontSize: '12px',
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: 1.5,
                    margin: 0
                  }}>{mit.text}</p>
                    </div>
                  </div>) : (stryCov_9fa48("1681"), mitigations.slice(0, 4).map(stryMutAct_9fa48("1682") ? () => undefined : (stryCov_9fa48("1682"), (mit, idx) => <div key={idx} className="d-flex gap-4">
                    <span style={stryMutAct_9fa48("1683") ? {} : (stryCov_9fa48("1683"), {
                  fontSize: stryMutAct_9fa48("1684") ? "" : (stryCov_9fa48("1684"), '14px'),
                  fontWeight: 900,
                  color: stryMutAct_9fa48("1685") ? "" : (stryCov_9fa48("1685"), 'var(--accent-blue)'),
                  opacity: 0.4
                })}>0{stryMutAct_9fa48("1686") ? idx - 1 : (stryCov_9fa48("1686"), idx + 1)}</span>
                    <div>
                      <div className="text-white font-bold mb-xs" style={stryMutAct_9fa48("1687") ? {} : (stryCov_9fa48("1687"), {
                    fontSize: stryMutAct_9fa48("1688") ? "" : (stryCov_9fa48("1688"), '13px')
                  })}>{mit.name}</div>
                      <p style={stryMutAct_9fa48("1689") ? {} : (stryCov_9fa48("1689"), {
                    fontSize: stryMutAct_9fa48("1690") ? "" : (stryCov_9fa48("1690"), '12px'),
                    color: stryMutAct_9fa48("1691") ? "" : (stryCov_9fa48("1691"), 'rgba(255,255,255,0.6)'),
                    lineHeight: 1.5,
                    margin: 0
                  })}>{mit.text}</p>
                    </div>
                  </div>))) : <p style={stryMutAct_9fa48("1692") ? {} : (stryCov_9fa48("1692"), {
                fontSize: stryMutAct_9fa48("1693") ? "" : (stryCov_9fa48("1693"), '12px'),
                color: stryMutAct_9fa48("1694") ? "" : (stryCov_9fa48("1694"), 'rgba(255,255,255,0.5)')
              })}>Standard operational monitoring applies.</p>}
            </div>
          </div>

          <div className="card-light" style={stryMutAct_9fa48("1695") ? {} : (stryCov_9fa48("1695"), {
            padding: stryMutAct_9fa48("1696") ? "" : (stryCov_9fa48("1696"), '24px')
          })}>
            <div className="sub-label mb-md">Exposure Distribution</div>
            <div style={stryMutAct_9fa48("1697") ? {} : (stryCov_9fa48("1697"), {
              height: stryMutAct_9fa48("1698") ? "" : (stryCov_9fa48("1698"), '140px')
            })}>
               <Bar data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}