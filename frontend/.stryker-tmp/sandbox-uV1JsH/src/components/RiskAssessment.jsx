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
const SEVERITY_CONFIG = stryMutAct_9fa48("1303") ? {} : (stryCov_9fa48("1303"), {
  critical: stryMutAct_9fa48("1304") ? {} : (stryCov_9fa48("1304"), {
    color: stryMutAct_9fa48("1305") ? "" : (stryCov_9fa48("1305"), 'var(--accent-rose)'),
    icon: ShieldAlert,
    label: stryMutAct_9fa48("1306") ? "" : (stryCov_9fa48("1306"), 'CRITICAL'),
    bg: stryMutAct_9fa48("1307") ? "" : (stryCov_9fa48("1307"), 'rgba(225,29,72,0.05)')
  }),
  high: stryMutAct_9fa48("1308") ? {} : (stryCov_9fa48("1308"), {
    color: stryMutAct_9fa48("1309") ? "" : (stryCov_9fa48("1309"), '#f97316'),
    icon: AlertTriangle,
    label: stryMutAct_9fa48("1310") ? "" : (stryCov_9fa48("1310"), 'HIGH'),
    bg: stryMutAct_9fa48("1311") ? "" : (stryCov_9fa48("1311"), 'rgba(249,115,22,0.05)')
  }),
  medium: stryMutAct_9fa48("1312") ? {} : (stryCov_9fa48("1312"), {
    color: stryMutAct_9fa48("1313") ? "" : (stryCov_9fa48("1313"), '#f59e0b'),
    icon: AlertCircle,
    label: stryMutAct_9fa48("1314") ? "" : (stryCov_9fa48("1314"), 'MEDIUM'),
    bg: stryMutAct_9fa48("1315") ? "" : (stryCov_9fa48("1315"), 'rgba(245,158,11,0.05)')
  }),
  low: stryMutAct_9fa48("1316") ? {} : (stryCov_9fa48("1316"), {
    color: stryMutAct_9fa48("1317") ? "" : (stryCov_9fa48("1317"), 'var(--accent-emerald)'),
    icon: Info,
    label: stryMutAct_9fa48("1318") ? "" : (stryCov_9fa48("1318"), 'LOW'),
    bg: stryMutAct_9fa48("1319") ? "" : (stryCov_9fa48("1319"), 'rgba(5,150,105,0.05)')
  })
});
export default function RiskAssessment({
  result
}) {
  if (stryMutAct_9fa48("1320")) {
    {}
  } else {
    stryCov_9fa48("1320");
    if (stryMutAct_9fa48("1323") ? false : stryMutAct_9fa48("1322") ? true : stryMutAct_9fa48("1321") ? result : (stryCov_9fa48("1321", "1322", "1323"), !result)) return null;
    const {
      risks
    } = result;
    const safeRisks = stryMutAct_9fa48("1326") ? risks && [] : stryMutAct_9fa48("1325") ? false : stryMutAct_9fa48("1324") ? true : (stryCov_9fa48("1324", "1325", "1326"), risks || (stryMutAct_9fa48("1327") ? ["Stryker was here"] : (stryCov_9fa48("1327"), [])));
    const chartData = stryMutAct_9fa48("1328") ? {} : (stryCov_9fa48("1328"), {
      labels: safeRisks.map(stryMutAct_9fa48("1329") ? () => undefined : (stryCov_9fa48("1329"), (_, i) => stryMutAct_9fa48("1330") ? `` : (stryCov_9fa48("1330"), `V${stryMutAct_9fa48("1331") ? i - 1 : (stryCov_9fa48("1331"), i + 1)}`))),
      datasets: stryMutAct_9fa48("1332") ? [] : (stryCov_9fa48("1332"), [stryMutAct_9fa48("1333") ? {} : (stryCov_9fa48("1333"), {
        label: stryMutAct_9fa48("1334") ? "" : (stryCov_9fa48("1334"), 'Severity Level'),
        data: safeRisks.map(stryMutAct_9fa48("1335") ? () => undefined : (stryCov_9fa48("1335"), r => (stryMutAct_9fa48("1338") ? r.severity !== 'critical' : stryMutAct_9fa48("1337") ? false : stryMutAct_9fa48("1336") ? true : (stryCov_9fa48("1336", "1337", "1338"), r.severity === (stryMutAct_9fa48("1339") ? "" : (stryCov_9fa48("1339"), 'critical')))) ? 4 : (stryMutAct_9fa48("1342") ? r.severity !== 'high' : stryMutAct_9fa48("1341") ? false : stryMutAct_9fa48("1340") ? true : (stryCov_9fa48("1340", "1341", "1342"), r.severity === (stryMutAct_9fa48("1343") ? "" : (stryCov_9fa48("1343"), 'high')))) ? 3 : (stryMutAct_9fa48("1346") ? r.severity !== 'medium' : stryMutAct_9fa48("1345") ? false : stryMutAct_9fa48("1344") ? true : (stryCov_9fa48("1344", "1345", "1346"), r.severity === (stryMutAct_9fa48("1347") ? "" : (stryCov_9fa48("1347"), 'medium')))) ? 2 : 1)),
        backgroundColor: ctx => {
          if (stryMutAct_9fa48("1348")) {
            {}
          } else {
            stryCov_9fa48("1348");
            const val = ctx.raw;
            return (stryMutAct_9fa48("1351") ? val !== 4 : stryMutAct_9fa48("1350") ? false : stryMutAct_9fa48("1349") ? true : (stryCov_9fa48("1349", "1350", "1351"), val === 4)) ? stryMutAct_9fa48("1352") ? "" : (stryCov_9fa48("1352"), 'var(--accent-rose)') : (stryMutAct_9fa48("1355") ? val !== 3 : stryMutAct_9fa48("1354") ? false : stryMutAct_9fa48("1353") ? true : (stryCov_9fa48("1353", "1354", "1355"), val === 3)) ? stryMutAct_9fa48("1356") ? "" : (stryCov_9fa48("1356"), '#f97316') : (stryMutAct_9fa48("1359") ? val !== 2 : stryMutAct_9fa48("1358") ? false : stryMutAct_9fa48("1357") ? true : (stryCov_9fa48("1357", "1358", "1359"), val === 2)) ? stryMutAct_9fa48("1360") ? "" : (stryCov_9fa48("1360"), '#f59e0b') : stryMutAct_9fa48("1361") ? "" : (stryCov_9fa48("1361"), 'var(--accent-emerald)');
          }
        },
        borderRadius: 4,
        barThickness: 16
      })])
    });
    const chartOptions = stryMutAct_9fa48("1362") ? {} : (stryCov_9fa48("1362"), {
      responsive: stryMutAct_9fa48("1363") ? false : (stryCov_9fa48("1363"), true),
      maintainAspectRatio: stryMutAct_9fa48("1364") ? true : (stryCov_9fa48("1364"), false),
      plugins: stryMutAct_9fa48("1365") ? {} : (stryCov_9fa48("1365"), {
        legend: stryMutAct_9fa48("1366") ? {} : (stryCov_9fa48("1366"), {
          display: stryMutAct_9fa48("1367") ? true : (stryCov_9fa48("1367"), false)
        })
      }),
      scales: stryMutAct_9fa48("1368") ? {} : (stryCov_9fa48("1368"), {
        x: stryMutAct_9fa48("1369") ? {} : (stryCov_9fa48("1369"), {
          display: stryMutAct_9fa48("1370") ? true : (stryCov_9fa48("1370"), false)
        }),
        y: stryMutAct_9fa48("1371") ? {} : (stryCov_9fa48("1371"), {
          display: stryMutAct_9fa48("1372") ? true : (stryCov_9fa48("1372"), false),
          max: 5
        })
      })
    });
    const mitigations = stryMutAct_9fa48("1373") ? safeRisks.map(r => ({
      name: r.risk,
      text: r.mitigation
    })) : (stryCov_9fa48("1373"), safeRisks.filter(stryMutAct_9fa48("1374") ? () => undefined : (stryCov_9fa48("1374"), r => r.mitigation)).map(stryMutAct_9fa48("1375") ? () => undefined : (stryCov_9fa48("1375"), r => stryMutAct_9fa48("1376") ? {} : (stryCov_9fa48("1376"), {
      name: r.risk,
      text: r.mitigation
    }))));
    return <div className="risk-assessment fade-in slide-up" style={stryMutAct_9fa48("1377") ? {} : (stryCov_9fa48("1377"), {
      paddingBottom: stryMutAct_9fa48("1378") ? "" : (stryCov_9fa48("1378"), 'var(--space-2xl)')
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
          <div className="card-light d-flex items-center gap-8" style={stryMutAct_9fa48("1379") ? {} : (stryCov_9fa48("1379"), {
            padding: stryMutAct_9fa48("1380") ? "" : (stryCov_9fa48("1380"), '24px 32px'),
            width: stryMutAct_9fa48("1381") ? "" : (stryCov_9fa48("1381"), 'fit-content'),
            background: stryMutAct_9fa48("1382") ? "" : (stryCov_9fa48("1382"), 'var(--bg-blue-light)'),
            border: stryMutAct_9fa48("1383") ? "" : (stryCov_9fa48("1383"), 'none')
          })}>
            <div>
              <div className="sub-label mb-0">Total Vectors</div>
              <div className="metric-big" style={stryMutAct_9fa48("1384") ? {} : (stryCov_9fa48("1384"), {
                fontSize: stryMutAct_9fa48("1385") ? "" : (stryCov_9fa48("1385"), '40px')
              })}>{safeRisks.length}</div>
            </div>
            <div style={stryMutAct_9fa48("1386") ? {} : (stryCov_9fa48("1386"), {
              height: stryMutAct_9fa48("1387") ? "" : (stryCov_9fa48("1387"), '40px'),
              width: stryMutAct_9fa48("1388") ? "" : (stryCov_9fa48("1388"), '1px'),
              background: stryMutAct_9fa48("1389") ? "" : (stryCov_9fa48("1389"), 'var(--border-strong)'),
              opacity: 0.2
            })} />
            <p className="text-secondary" style={stryMutAct_9fa48("1390") ? {} : (stryCov_9fa48("1390"), {
              fontSize: stryMutAct_9fa48("1391") ? "" : (stryCov_9fa48("1391"), '13px'),
              fontWeight: 600,
              maxWidth: stryMutAct_9fa48("1392") ? "" : (stryCov_9fa48("1392"), '240px'),
              lineHeight: 1.5
            })}>
               Institutional-grade vectors cross-referenced against global treasury standards.
            </p>
          </div>
        </div>
      </header>

      <div className="grid-cols-12" style={stryMutAct_9fa48("1393") ? {} : (stryCov_9fa48("1393"), {
        gap: stryMutAct_9fa48("1394") ? "" : (stryCov_9fa48("1394"), 'var(--space-xl)')
      })}>
        <div className="col-span-8">
          <div className="card-light" style={stryMutAct_9fa48("1395") ? {} : (stryCov_9fa48("1395"), {
            padding: 0
          })}>
            <div className="d-flex justify-between items-center" style={stryMutAct_9fa48("1396") ? {} : (stryCov_9fa48("1396"), {
              padding: stryMutAct_9fa48("1397") ? "" : (stryCov_9fa48("1397"), '20px'),
              borderBottom: stryMutAct_9fa48("1398") ? "" : (stryCov_9fa48("1398"), '1px solid var(--border-light)')
            })}>
               <h3 className="section-heading__label" style={stryMutAct_9fa48("1399") ? {} : (stryCov_9fa48("1399"), {
                fontSize: stryMutAct_9fa48("1400") ? "" : (stryCov_9fa48("1400"), '16px')
              })}>Identified Vulnerabilities</h3>
               <span className="hero-badge">REVISION V4.2</span>
            </div>
            
            <div style={stryMutAct_9fa48("1401") ? {} : (stryCov_9fa48("1401"), {
              padding: stryMutAct_9fa48("1402") ? "" : (stryCov_9fa48("1402"), '16px')
            })} className="d-flex flex-column gap-3">
              {(stryMutAct_9fa48("1406") ? safeRisks.length <= 0 : stryMutAct_9fa48("1405") ? safeRisks.length >= 0 : stryMutAct_9fa48("1404") ? false : stryMutAct_9fa48("1403") ? true : (stryCov_9fa48("1403", "1404", "1405", "1406"), safeRisks.length > 0)) ? safeRisks.map((risk, idx) => {
                if (stryMutAct_9fa48("1407")) {
                  {}
                } else {
                  stryCov_9fa48("1407");
                  const config = stryMutAct_9fa48("1410") ? SEVERITY_CONFIG[risk.severity] && SEVERITY_CONFIG.low : stryMutAct_9fa48("1409") ? false : stryMutAct_9fa48("1408") ? true : (stryCov_9fa48("1408", "1409", "1410"), SEVERITY_CONFIG[risk.severity] || SEVERITY_CONFIG.low);
                  const Icon = config.icon;
                  return <div key={idx} className="hover-lift d-flex items-start gap-4" style={stryMutAct_9fa48("1411") ? {} : (stryCov_9fa48("1411"), {
                    background: config.bg,
                    padding: stryMutAct_9fa48("1412") ? "" : (stryCov_9fa48("1412"), '20px'),
                    borderRadius: stryMutAct_9fa48("1413") ? "" : (stryCov_9fa48("1413"), 'var(--radius-md)'),
                    borderLeft: stryMutAct_9fa48("1414") ? `` : (stryCov_9fa48("1414"), `4px solid ${config.color}`)
                  })}>
                      <div style={stryMutAct_9fa48("1415") ? {} : (stryCov_9fa48("1415"), {
                      padding: stryMutAct_9fa48("1416") ? "" : (stryCov_9fa48("1416"), '8px'),
                      background: stryMutAct_9fa48("1417") ? "" : (stryCov_9fa48("1417"), 'white'),
                      borderRadius: stryMutAct_9fa48("1418") ? "" : (stryCov_9fa48("1418"), '50%'),
                      boxShadow: stryMutAct_9fa48("1419") ? "" : (stryCov_9fa48("1419"), 'var(--shadow-sm)')
                    })}>
                        <Icon size={18} style={stryMutAct_9fa48("1420") ? {} : (stryCov_9fa48("1420"), {
                        color: config.color
                      })} />
                      </div>
                      <div style={stryMutAct_9fa48("1421") ? {} : (stryCov_9fa48("1421"), {
                      flex: 1
                    })}>
                        <div className="d-flex justify-between items-start mb-xs">
                          <div>
                            <span style={stryMutAct_9fa48("1422") ? {} : (stryCov_9fa48("1422"), {
                            fontSize: stryMutAct_9fa48("1423") ? "" : (stryCov_9fa48("1423"), '10px'),
                            fontWeight: 800,
                            color: config.color,
                            letterSpacing: stryMutAct_9fa48("1424") ? "" : (stryCov_9fa48("1424"), '0.05em')
                          })}>{config.label}</span>
                            <h4 className="text-primary font-bold" style={stryMutAct_9fa48("1425") ? {} : (stryCov_9fa48("1425"), {
                            fontSize: stryMutAct_9fa48("1426") ? "" : (stryCov_9fa48("1426"), '16px'),
                            margin: 0
                          })}>{risk.risk}</h4>
                          </div>
                          <div className="metric-big" style={stryMutAct_9fa48("1427") ? {} : (stryCov_9fa48("1427"), {
                          fontSize: stryMutAct_9fa48("1428") ? "" : (stryCov_9fa48("1428"), '18px'),
                          color: config.color
                        })}>
                            {(stryMutAct_9fa48("1431") ? risk.severity !== 'critical' : stryMutAct_9fa48("1430") ? false : stryMutAct_9fa48("1429") ? true : (stryCov_9fa48("1429", "1430", "1431"), risk.severity === (stryMutAct_9fa48("1432") ? "" : (stryCov_9fa48("1432"), 'critical')))) ? stryMutAct_9fa48("1433") ? "" : (stryCov_9fa48("1433"), '9.8') : (stryMutAct_9fa48("1436") ? risk.severity !== 'high' : stryMutAct_9fa48("1435") ? false : stryMutAct_9fa48("1434") ? true : (stryCov_9fa48("1434", "1435", "1436"), risk.severity === (stryMutAct_9fa48("1437") ? "" : (stryCov_9fa48("1437"), 'high')))) ? stryMutAct_9fa48("1438") ? "" : (stryCov_9fa48("1438"), '7.5') : (stryMutAct_9fa48("1441") ? risk.severity !== 'medium' : stryMutAct_9fa48("1440") ? false : stryMutAct_9fa48("1439") ? true : (stryCov_9fa48("1439", "1440", "1441"), risk.severity === (stryMutAct_9fa48("1442") ? "" : (stryCov_9fa48("1442"), 'medium')))) ? stryMutAct_9fa48("1443") ? "" : (stryCov_9fa48("1443"), '4.2') : stryMutAct_9fa48("1444") ? "" : (stryCov_9fa48("1444"), '1.5')}
                          </div>
                        </div>
                        <p className="text-secondary" style={stryMutAct_9fa48("1445") ? {} : (stryCov_9fa48("1445"), {
                        fontSize: stryMutAct_9fa48("1446") ? "" : (stryCov_9fa48("1446"), '13px'),
                        lineHeight: 1.6,
                        margin: 0
                      })}>{risk.description}</p>
                      </div>
                    </div>;
                }
              }) : <div style={stryMutAct_9fa48("1447") ? {} : (stryCov_9fa48("1447"), {
                padding: stryMutAct_9fa48("1448") ? "" : (stryCov_9fa48("1448"), '48px'),
                textAlign: stryMutAct_9fa48("1449") ? "" : (stryCov_9fa48("1449"), 'center')
              })}>
                   <p className="text-muted">No institutional risks detected in the current dataset.</p>
                </div>}
            </div>
          </div>
        </div>

        <div className="col-span-4 d-flex flex-column gap-6">
          <div className="card-dark" style={stryMutAct_9fa48("1450") ? {} : (stryCov_9fa48("1450"), {
            padding: stryMutAct_9fa48("1451") ? "" : (stryCov_9fa48("1451"), '32px')
          })}>
            <div className="d-flex items-center gap-2 mb-lg">
              <Zap className="text-accent" size={18} />
              <h3 className="sub-label mb-0" style={stryMutAct_9fa48("1452") ? {} : (stryCov_9fa48("1452"), {
                color: stryMutAct_9fa48("1453") ? "" : (stryCov_9fa48("1453"), 'white'),
                opacity: 0.8
              })}>Mitigation Protocols</h3>
            </div>
            
            <div className="d-flex flex-column gap-6">
              {(stryMutAct_9fa48("1457") ? mitigations.length <= 0 : stryMutAct_9fa48("1456") ? mitigations.length >= 0 : stryMutAct_9fa48("1455") ? false : stryMutAct_9fa48("1454") ? true : (stryCov_9fa48("1454", "1455", "1456", "1457"), mitigations.length > 0)) ? stryMutAct_9fa48("1458") ? mitigations.map((mit, idx) => <div key={idx} className="d-flex gap-4">
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
                  </div>) : (stryCov_9fa48("1458"), mitigations.slice(0, 4).map(stryMutAct_9fa48("1459") ? () => undefined : (stryCov_9fa48("1459"), (mit, idx) => <div key={idx} className="d-flex gap-4">
                    <span style={stryMutAct_9fa48("1460") ? {} : (stryCov_9fa48("1460"), {
                  fontSize: stryMutAct_9fa48("1461") ? "" : (stryCov_9fa48("1461"), '14px'),
                  fontWeight: 900,
                  color: stryMutAct_9fa48("1462") ? "" : (stryCov_9fa48("1462"), 'var(--accent-blue)'),
                  opacity: 0.4
                })}>0{stryMutAct_9fa48("1463") ? idx - 1 : (stryCov_9fa48("1463"), idx + 1)}</span>
                    <div>
                      <div className="text-white font-bold mb-xs" style={stryMutAct_9fa48("1464") ? {} : (stryCov_9fa48("1464"), {
                    fontSize: stryMutAct_9fa48("1465") ? "" : (stryCov_9fa48("1465"), '13px')
                  })}>{mit.name}</div>
                      <p style={stryMutAct_9fa48("1466") ? {} : (stryCov_9fa48("1466"), {
                    fontSize: stryMutAct_9fa48("1467") ? "" : (stryCov_9fa48("1467"), '12px'),
                    color: stryMutAct_9fa48("1468") ? "" : (stryCov_9fa48("1468"), 'rgba(255,255,255,0.6)'),
                    lineHeight: 1.5,
                    margin: 0
                  })}>{mit.text}</p>
                    </div>
                  </div>))) : <p style={stryMutAct_9fa48("1469") ? {} : (stryCov_9fa48("1469"), {
                fontSize: stryMutAct_9fa48("1470") ? "" : (stryCov_9fa48("1470"), '12px'),
                color: stryMutAct_9fa48("1471") ? "" : (stryCov_9fa48("1471"), 'rgba(255,255,255,0.5)')
              })}>Standard operational monitoring applies.</p>}
            </div>
          </div>

          <div className="card-light" style={stryMutAct_9fa48("1472") ? {} : (stryCov_9fa48("1472"), {
            padding: stryMutAct_9fa48("1473") ? "" : (stryCov_9fa48("1473"), '24px')
          })}>
            <div className="sub-label mb-md">Exposure Distribution</div>
            <div style={stryMutAct_9fa48("1474") ? {} : (stryCov_9fa48("1474"), {
              height: stryMutAct_9fa48("1475") ? "" : (stryCov_9fa48("1475"), '140px')
            })}>
               <Bar data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}