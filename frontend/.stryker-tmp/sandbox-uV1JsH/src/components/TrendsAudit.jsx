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
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler } from 'chart.js';
import { TrendingUp, Database, Calendar, BarChart2, Activity, ArrowUpRight, ArrowDownRight } from 'lucide-react';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler);
export function formatNumber(val) {
  if (stryMutAct_9fa48("1764")) {
    {}
  } else {
    stryCov_9fa48("1764");
    if (stryMutAct_9fa48("1767") ? typeof val === 'number' : stryMutAct_9fa48("1766") ? false : stryMutAct_9fa48("1765") ? true : (stryCov_9fa48("1765", "1766", "1767"), typeof val !== (stryMutAct_9fa48("1768") ? "" : (stryCov_9fa48("1768"), 'number')))) return val;
    return val.toLocaleString(stryMutAct_9fa48("1769") ? "" : (stryCov_9fa48("1769"), 'en-US'), stryMutAct_9fa48("1770") ? {} : (stryCov_9fa48("1770"), {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }));
  }
}
export default function TrendsAudit({
  result
}) {
  if (stryMutAct_9fa48("1771")) {
    {}
  } else {
    stryCov_9fa48("1771");
    if (stryMutAct_9fa48("1774") ? false : stryMutAct_9fa48("1773") ? true : stryMutAct_9fa48("1772") ? result : (stryCov_9fa48("1772", "1773", "1774"), !result)) return null;
    const {
      raw_data,
      column_headers,
      trends
    } = result;
    let chartDataConfig = null;
    if (stryMutAct_9fa48("1777") ? raw_data && raw_data.length > 0 || column_headers : stryMutAct_9fa48("1776") ? false : stryMutAct_9fa48("1775") ? true : (stryCov_9fa48("1775", "1776", "1777"), (stryMutAct_9fa48("1779") ? raw_data || raw_data.length > 0 : stryMutAct_9fa48("1778") ? true : (stryCov_9fa48("1778", "1779"), raw_data && (stryMutAct_9fa48("1782") ? raw_data.length <= 0 : stryMutAct_9fa48("1781") ? raw_data.length >= 0 : stryMutAct_9fa48("1780") ? true : (stryCov_9fa48("1780", "1781", "1782"), raw_data.length > 0)))) && column_headers)) {
      if (stryMutAct_9fa48("1783")) {
        {}
      } else {
        stryCov_9fa48("1783");
        const stringCol = stryMutAct_9fa48("1786") ? column_headers.find(c => typeof raw_data[0][c] === 'string') && column_headers[0] : stryMutAct_9fa48("1785") ? false : stryMutAct_9fa48("1784") ? true : (stryCov_9fa48("1784", "1785", "1786"), column_headers.find(stryMutAct_9fa48("1787") ? () => undefined : (stryCov_9fa48("1787"), c => stryMutAct_9fa48("1790") ? typeof raw_data[0][c] !== 'string' : stryMutAct_9fa48("1789") ? false : stryMutAct_9fa48("1788") ? true : (stryCov_9fa48("1788", "1789", "1790"), typeof raw_data[0][c] === (stryMutAct_9fa48("1791") ? "" : (stryCov_9fa48("1791"), 'string'))))) || column_headers[0]);
        const numericCol = column_headers.find(stryMutAct_9fa48("1792") ? () => undefined : (stryCov_9fa48("1792"), c => stryMutAct_9fa48("1795") ? typeof raw_data[0][c] !== 'number' : stryMutAct_9fa48("1794") ? false : stryMutAct_9fa48("1793") ? true : (stryCov_9fa48("1793", "1794", "1795"), typeof raw_data[0][c] === (stryMutAct_9fa48("1796") ? "" : (stryCov_9fa48("1796"), 'number')))));
        if (stryMutAct_9fa48("1799") ? stringCol || numericCol : stryMutAct_9fa48("1798") ? false : stryMutAct_9fa48("1797") ? true : (stryCov_9fa48("1797", "1798", "1799"), stringCol && numericCol)) {
          if (stryMutAct_9fa48("1800")) {
            {}
          } else {
            stryCov_9fa48("1800");
            const labels = stryMutAct_9fa48("1801") ? raw_data.map(r => String(r[stringCol]).substring(0, 10)) : (stryCov_9fa48("1801"), raw_data.slice(0, 15).map(stryMutAct_9fa48("1802") ? () => undefined : (stryCov_9fa48("1802"), r => stryMutAct_9fa48("1803") ? String(r[stringCol]) : (stryCov_9fa48("1803"), String(r[stringCol]).substring(0, 10)))));
            const datasetData = stryMutAct_9fa48("1804") ? raw_data.map(r => r[numericCol] || 0) : (stryCov_9fa48("1804"), raw_data.slice(0, 15).map(stryMutAct_9fa48("1805") ? () => undefined : (stryCov_9fa48("1805"), r => stryMutAct_9fa48("1808") ? r[numericCol] && 0 : stryMutAct_9fa48("1807") ? false : stryMutAct_9fa48("1806") ? true : (stryCov_9fa48("1806", "1807", "1808"), r[numericCol] || 0))));
            chartDataConfig = stryMutAct_9fa48("1809") ? {} : (stryCov_9fa48("1809"), {
              labels,
              datasets: stryMutAct_9fa48("1810") ? [] : (stryCov_9fa48("1810"), [stryMutAct_9fa48("1811") ? {} : (stryCov_9fa48("1811"), {
                label: numericCol,
                data: datasetData,
                borderColor: stryMutAct_9fa48("1812") ? "" : (stryCov_9fa48("1812"), '#3b82f6'),
                backgroundColor: stryMutAct_9fa48("1813") ? "" : (stryCov_9fa48("1813"), 'rgba(59, 130, 246, 0.1)'),
                borderWidth: 2,
                fill: stryMutAct_9fa48("1814") ? false : (stryCov_9fa48("1814"), true),
                tension: 0.4,
                pointRadius: 3
              })])
            });
          }
        }
      }
    }
    const chartOptions = stryMutAct_9fa48("1815") ? {} : (stryCov_9fa48("1815"), {
      responsive: stryMutAct_9fa48("1816") ? false : (stryCov_9fa48("1816"), true),
      maintainAspectRatio: stryMutAct_9fa48("1817") ? true : (stryCov_9fa48("1817"), false),
      plugins: stryMutAct_9fa48("1818") ? {} : (stryCov_9fa48("1818"), {
        legend: stryMutAct_9fa48("1819") ? {} : (stryCov_9fa48("1819"), {
          display: stryMutAct_9fa48("1820") ? true : (stryCov_9fa48("1820"), false)
        }),
        tooltip: stryMutAct_9fa48("1821") ? {} : (stryCov_9fa48("1821"), {
          backgroundColor: stryMutAct_9fa48("1822") ? "" : (stryCov_9fa48("1822"), '#0f172a'),
          titleFont: stryMutAct_9fa48("1823") ? {} : (stryCov_9fa48("1823"), {
            size: 12
          }),
          bodyFont: stryMutAct_9fa48("1824") ? {} : (stryCov_9fa48("1824"), {
            size: 11
          })
        })
      }),
      scales: stryMutAct_9fa48("1825") ? {} : (stryCov_9fa48("1825"), {
        x: stryMutAct_9fa48("1826") ? {} : (stryCov_9fa48("1826"), {
          display: stryMutAct_9fa48("1827") ? true : (stryCov_9fa48("1827"), false)
        }),
        y: stryMutAct_9fa48("1828") ? {} : (stryCov_9fa48("1828"), {
          display: stryMutAct_9fa48("1829") ? true : (stryCov_9fa48("1829"), false)
        })
      })
    });
    return <div className="trends-audit fade-in slide-up" style={stryMutAct_9fa48("1830") ? {} : (stryCov_9fa48("1830"), {
      paddingBottom: stryMutAct_9fa48("1831") ? "" : (stryCov_9fa48("1831"), 'var(--space-2xl)')
    })}>
      <div className="d-flex justify-between items-start mb-xl pb-lg" style={stryMutAct_9fa48("1832") ? {} : (stryCov_9fa48("1832"), {
        borderBottom: stryMutAct_9fa48("1833") ? "" : (stryCov_9fa48("1833"), '1px solid var(--border-light)')
      })}>
        <header className="page-header">
          <div className="d-flex items-center gap-2 mb-xs">
            <TrendingUp className="text-accent" size={16} />
            <span className="page-header__eyebrow">Trend Evolution Matrix</span>
          </div>
          <h1 className="page-header__title">
            Historical <span className="page-header__accent">Trends Audit.</span>
          </h1>
          <p className="hero-subtitle">
            Longitudinal analysis of financial metrics over time detecting growth vectors and momentum shifts.
          </p>
        </header>
        
        <div className="text-right" style={stryMutAct_9fa48("1834") ? {} : (stryCov_9fa48("1834"), {
          borderLeft: stryMutAct_9fa48("1835") ? "" : (stryCov_9fa48("1835"), '1px solid var(--border-light)'),
          paddingLeft: stryMutAct_9fa48("1836") ? "" : (stryCov_9fa48("1836"), '40px')
        })}>
          <div className="sub-label d-flex items-center gap-2 justify-end">
            <Calendar size={12} />
            <span>Issued Date</span>
          </div>
          <div className="metric-big" style={stryMutAct_9fa48("1837") ? {} : (stryCov_9fa48("1837"), {
            fontSize: stryMutAct_9fa48("1838") ? "" : (stryCov_9fa48("1838"), '28px')
          })}>
            {stryMutAct_9fa48("1839") ? new Date().toLocaleDateString('en-US', {
              month: 'short',
              day: '2-digit',
              year: 'numeric'
            }).toLowerCase() : (stryCov_9fa48("1839"), new Date().toLocaleDateString(stryMutAct_9fa48("1840") ? "" : (stryCov_9fa48("1840"), 'en-US'), stryMutAct_9fa48("1841") ? {} : (stryCov_9fa48("1841"), {
              month: stryMutAct_9fa48("1842") ? "" : (stryCov_9fa48("1842"), 'short'),
              day: stryMutAct_9fa48("1843") ? "" : (stryCov_9fa48("1843"), '2-digit'),
              year: stryMutAct_9fa48("1844") ? "" : (stryCov_9fa48("1844"), 'numeric')
            })).toUpperCase())}
          </div>
        </div>
      </div>

      <div className="grid-cols-12" style={stryMutAct_9fa48("1845") ? {} : (stryCov_9fa48("1845"), {
        gap: stryMutAct_9fa48("1846") ? "" : (stryCov_9fa48("1846"), 'var(--space-xl)')
      })}>
        <div className="col-span-8">
          <div className="card-light mb-xl" style={stryMutAct_9fa48("1847") ? {} : (stryCov_9fa48("1847"), {
            padding: stryMutAct_9fa48("1848") ? "" : (stryCov_9fa48("1848"), '40px')
          })}>
            <div className="d-flex justify-between items-start mb-lg">
              <div>
                <h3 className="section-heading__label" style={stryMutAct_9fa48("1849") ? {} : (stryCov_9fa48("1849"), {
                  fontSize: stryMutAct_9fa48("1850") ? "" : (stryCov_9fa48("1850"), '20px'),
                  textTransform: stryMutAct_9fa48("1851") ? "" : (stryCov_9fa48("1851"), 'none'),
                  letterSpacing: stryMutAct_9fa48("1852") ? "" : (stryCov_9fa48("1852"), 'normal'),
                  color: stryMutAct_9fa48("1853") ? "" : (stryCov_9fa48("1853"), 'var(--text-primary)')
                })}>
                  Performance Momentum
                </h3>
                <p className="text-secondary" style={stryMutAct_9fa48("1854") ? {} : (stryCov_9fa48("1854"), {
                  fontSize: stryMutAct_9fa48("1855") ? "" : (stryCov_9fa48("1855"), '13px')
                })}>Historical projection vs detected velocity.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap justify-end">
                {stryMutAct_9fa48("1858") ? trends || trends.slice(0, 3).map((t, i) => <span key={i} className={`hero-badge ${t.direction === 'up' ? 'text-emerald' : 'text-rose'}`} style={{
                  background: t.direction === 'up' ? 'rgba(5, 150, 105, 0.05)' : 'rgba(225, 29, 72, 0.05)'
                }}>
                     {t.metric} {t.direction === 'up' ? '↑' : '↓'}
                   </span>) : stryMutAct_9fa48("1857") ? false : stryMutAct_9fa48("1856") ? true : (stryCov_9fa48("1856", "1857", "1858"), trends && (stryMutAct_9fa48("1859") ? trends.map((t, i) => <span key={i} className={`hero-badge ${t.direction === 'up' ? 'text-emerald' : 'text-rose'}`} style={{
                  background: t.direction === 'up' ? 'rgba(5, 150, 105, 0.05)' : 'rgba(225, 29, 72, 0.05)'
                }}>
                     {t.metric} {t.direction === 'up' ? '↑' : '↓'}
                   </span>) : (stryCov_9fa48("1859"), trends.slice(0, 3).map(stryMutAct_9fa48("1860") ? () => undefined : (stryCov_9fa48("1860"), (t, i) => <span key={i} className={stryMutAct_9fa48("1861") ? `` : (stryCov_9fa48("1861"), `hero-badge ${(stryMutAct_9fa48("1864") ? t.direction !== 'up' : stryMutAct_9fa48("1863") ? false : stryMutAct_9fa48("1862") ? true : (stryCov_9fa48("1862", "1863", "1864"), t.direction === (stryMutAct_9fa48("1865") ? "" : (stryCov_9fa48("1865"), 'up')))) ? stryMutAct_9fa48("1866") ? "" : (stryCov_9fa48("1866"), 'text-emerald') : stryMutAct_9fa48("1867") ? "" : (stryCov_9fa48("1867"), 'text-rose')}`)} style={stryMutAct_9fa48("1868") ? {} : (stryCov_9fa48("1868"), {
                  background: (stryMutAct_9fa48("1871") ? t.direction !== 'up' : stryMutAct_9fa48("1870") ? false : stryMutAct_9fa48("1869") ? true : (stryCov_9fa48("1869", "1870", "1871"), t.direction === (stryMutAct_9fa48("1872") ? "" : (stryCov_9fa48("1872"), 'up')))) ? stryMutAct_9fa48("1873") ? "" : (stryCov_9fa48("1873"), 'rgba(5, 150, 105, 0.05)') : stryMutAct_9fa48("1874") ? "" : (stryCov_9fa48("1874"), 'rgba(225, 29, 72, 0.05)')
                })}>
                     {t.metric} {(stryMutAct_9fa48("1877") ? t.direction !== 'up' : stryMutAct_9fa48("1876") ? false : stryMutAct_9fa48("1875") ? true : (stryCov_9fa48("1875", "1876", "1877"), t.direction === (stryMutAct_9fa48("1878") ? "" : (stryCov_9fa48("1878"), 'up')))) ? stryMutAct_9fa48("1879") ? "" : (stryCov_9fa48("1879"), '↑') : stryMutAct_9fa48("1880") ? "" : (stryCov_9fa48("1880"), '↓')}
                   </span>)))))}
              </div>
            </div>
            
            <div style={stryMutAct_9fa48("1881") ? {} : (stryCov_9fa48("1881"), {
              height: stryMutAct_9fa48("1882") ? "" : (stryCov_9fa48("1882"), '320px'),
              padding: stryMutAct_9fa48("1883") ? "" : (stryCov_9fa48("1883"), '24px'),
              borderRadius: stryMutAct_9fa48("1884") ? "" : (stryCov_9fa48("1884"), 'var(--radius-md)'),
              background: stryMutAct_9fa48("1885") ? "" : (stryCov_9fa48("1885"), 'var(--bg-blue-light)'),
              border: stryMutAct_9fa48("1886") ? "" : (stryCov_9fa48("1886"), '1px solid var(--border-light)')
            })}>
              {chartDataConfig ? <Line data={chartDataConfig} options={chartOptions} /> : <div className="d-flex items-center justify-center h-full text-muted">No trend data available.</div>}
            </div>
          </div>

          <div className="grid-2x2">
            <div className="card-light" style={stryMutAct_9fa48("1887") ? {} : (stryCov_9fa48("1887"), {
              background: stryMutAct_9fa48("1888") ? "" : (stryCov_9fa48("1888"), 'var(--bg-blue-light)'),
              border: stryMutAct_9fa48("1889") ? "" : (stryCov_9fa48("1889"), 'none')
            })}>
               <div className="sub-label">Observations</div>
               <div className="d-flex items-center gap-4">
                 <div className="metric-big" style={stryMutAct_9fa48("1890") ? {} : (stryCov_9fa48("1890"), {
                  fontSize: stryMutAct_9fa48("1891") ? "" : (stryCov_9fa48("1891"), '48px')
                })}>{trends ? trends.length : 0}</div>
                 <p className="text-secondary" style={stryMutAct_9fa48("1892") ? {} : (stryCov_9fa48("1892"), {
                  fontSize: stryMutAct_9fa48("1893") ? "" : (stryCov_9fa48("1893"), '14px'),
                  fontWeight: 600,
                  lineHeight: 1.3
                })}>Detected performance anomalies</p>
               </div>
            </div>
            <div className="card-light" style={stryMutAct_9fa48("1894") ? {} : (stryCov_9fa48("1894"), {
              background: stryMutAct_9fa48("1895") ? "" : (stryCov_9fa48("1895"), 'var(--bg-navy)'),
              border: stryMutAct_9fa48("1896") ? "" : (stryCov_9fa48("1896"), 'none'),
              color: stryMutAct_9fa48("1897") ? "" : (stryCov_9fa48("1897"), 'white')
            })}>
               <div className="sub-label" style={stryMutAct_9fa48("1898") ? {} : (stryCov_9fa48("1898"), {
                color: stryMutAct_9fa48("1899") ? "" : (stryCov_9fa48("1899"), 'rgba(255,255,255,0.4)')
              })}>Exposure Profile</div>
               <div className="metric-big" style={stryMutAct_9fa48("1900") ? {} : (stryCov_9fa48("1900"), {
                color: stryMutAct_9fa48("1901") ? "" : (stryCov_9fa48("1901"), 'white'),
                fontSize: stryMutAct_9fa48("1902") ? "" : (stryCov_9fa48("1902"), '28px'),
                marginTop: stryMutAct_9fa48("1903") ? "" : (stryCov_9fa48("1903"), '4px')
              })}>
                 {(stryMutAct_9fa48("1906") ? result.risks || result.risks.some(r => r.severity === 'critical') : stryMutAct_9fa48("1905") ? false : stryMutAct_9fa48("1904") ? true : (stryCov_9fa48("1904", "1905", "1906"), result.risks && (stryMutAct_9fa48("1907") ? result.risks.every(r => r.severity === 'critical') : (stryCov_9fa48("1907"), result.risks.some(stryMutAct_9fa48("1908") ? () => undefined : (stryCov_9fa48("1908"), r => stryMutAct_9fa48("1911") ? r.severity !== 'critical' : stryMutAct_9fa48("1910") ? false : stryMutAct_9fa48("1909") ? true : (stryCov_9fa48("1909", "1910", "1911"), r.severity === (stryMutAct_9fa48("1912") ? "" : (stryCov_9fa48("1912"), 'critical'))))))))) ? stryMutAct_9fa48("1913") ? "" : (stryCov_9fa48("1913"), 'High Volatility') : stryMutAct_9fa48("1914") ? "" : (stryCov_9fa48("1914"), 'Stable Ops')}
               </div>
               <div className="d-flex items-center gap-2 mt-sm" style={stryMutAct_9fa48("1915") ? {} : (stryCov_9fa48("1915"), {
                color: stryMutAct_9fa48("1916") ? "" : (stryCov_9fa48("1916"), 'var(--accent-cyan)'),
                fontSize: stryMutAct_9fa48("1917") ? "" : (stryCov_9fa48("1917"), '12px'),
                fontWeight: 700
              })}>
                 <Activity size={14} />
                 <span>Real-time Risk Monitoring</span>
               </div>
            </div>
          </div>
        </div>

        <div className="col-span-4">
          <div className="card-light" style={stryMutAct_9fa48("1918") ? {} : (stryCov_9fa48("1918"), {
            height: stryMutAct_9fa48("1919") ? "" : (stryCov_9fa48("1919"), '100%')
          })}>
            <div className="section-heading mb-md">
              <Database className="text-secondary" size={18} />
              <h3 className="section-heading__label" style={stryMutAct_9fa48("1920") ? {} : (stryCov_9fa48("1920"), {
                fontSize: stryMutAct_9fa48("1921") ? "" : (stryCov_9fa48("1921"), '16px')
              })}>Snapshot Audit</h3>
            </div>
            
            <div className="custom-scrollbar" style={stryMutAct_9fa48("1922") ? {} : (stryCov_9fa48("1922"), {
              display: stryMutAct_9fa48("1923") ? "" : (stryCov_9fa48("1923"), 'flex'),
              flexDirection: stryMutAct_9fa48("1924") ? "" : (stryCov_9fa48("1924"), 'column')
            })}>
              {stryMutAct_9fa48("1927") ? raw_data || raw_data.slice(0, 10).map((row, idx) => {
                const strCols = column_headers.filter(c => typeof row[c] === 'string');
                const numCols = column_headers.filter(c => typeof row[c] === 'number');
                const label = strCols.length > 0 ? row[strCols[0]] : `Entry-${idx}`;
                const val = numCols.length > 0 ? row[numCols[0]] : '-';
                const isPositive = typeof val === 'number' && val >= 0;
                return <div key={idx} className="d-flex justify-between items-center py-sm" style={{
                  borderBottom: '1px solid var(--border-light)'
                }}>
                    <div style={{
                    flex: 1,
                    minWidth: 0
                  }}>
                      <div className="text-primary font-bold truncate" style={{
                      fontSize: '14px'
                    }}>{label}</div>
                      <div className="text-muted" style={{
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      fontWeight: 700
                    }}>FG-{2000 + idx}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-primary font-bold" style={{
                      fontSize: '16px'
                    }}>{typeof val === 'number' ? formatNumber(val) : val}</div>
                      {typeof val === 'number' && <div className={`d-flex items-center gap-1 justify-end ${isPositive ? 'text-emerald' : 'text-rose'}`} style={{
                      fontSize: '10px',
                      fontWeight: 800
                    }}>
                          {isPositive ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
                          <span>{isPositive ? 'GAIN' : 'DEFICIT'}</span>
                        </div>}
                    </div>
                  </div>;
              }) : stryMutAct_9fa48("1926") ? false : stryMutAct_9fa48("1925") ? true : (stryCov_9fa48("1925", "1926", "1927"), raw_data && (stryMutAct_9fa48("1928") ? raw_data.map((row, idx) => {
                const strCols = column_headers.filter(c => typeof row[c] === 'string');
                const numCols = column_headers.filter(c => typeof row[c] === 'number');
                const label = strCols.length > 0 ? row[strCols[0]] : `Entry-${idx}`;
                const val = numCols.length > 0 ? row[numCols[0]] : '-';
                const isPositive = typeof val === 'number' && val >= 0;
                return <div key={idx} className="d-flex justify-between items-center py-sm" style={{
                  borderBottom: '1px solid var(--border-light)'
                }}>
                    <div style={{
                    flex: 1,
                    minWidth: 0
                  }}>
                      <div className="text-primary font-bold truncate" style={{
                      fontSize: '14px'
                    }}>{label}</div>
                      <div className="text-muted" style={{
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      fontWeight: 700
                    }}>FG-{2000 + idx}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-primary font-bold" style={{
                      fontSize: '16px'
                    }}>{typeof val === 'number' ? formatNumber(val) : val}</div>
                      {typeof val === 'number' && <div className={`d-flex items-center gap-1 justify-end ${isPositive ? 'text-emerald' : 'text-rose'}`} style={{
                      fontSize: '10px',
                      fontWeight: 800
                    }}>
                          {isPositive ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
                          <span>{isPositive ? 'GAIN' : 'DEFICIT'}</span>
                        </div>}
                    </div>
                  </div>;
              }) : (stryCov_9fa48("1928"), raw_data.slice(0, 10).map((row, idx) => {
                if (stryMutAct_9fa48("1929")) {
                  {}
                } else {
                  stryCov_9fa48("1929");
                  const strCols = stryMutAct_9fa48("1930") ? column_headers : (stryCov_9fa48("1930"), column_headers.filter(stryMutAct_9fa48("1931") ? () => undefined : (stryCov_9fa48("1931"), c => stryMutAct_9fa48("1934") ? typeof row[c] !== 'string' : stryMutAct_9fa48("1933") ? false : stryMutAct_9fa48("1932") ? true : (stryCov_9fa48("1932", "1933", "1934"), typeof row[c] === (stryMutAct_9fa48("1935") ? "" : (stryCov_9fa48("1935"), 'string'))))));
                  const numCols = stryMutAct_9fa48("1936") ? column_headers : (stryCov_9fa48("1936"), column_headers.filter(stryMutAct_9fa48("1937") ? () => undefined : (stryCov_9fa48("1937"), c => stryMutAct_9fa48("1940") ? typeof row[c] !== 'number' : stryMutAct_9fa48("1939") ? false : stryMutAct_9fa48("1938") ? true : (stryCov_9fa48("1938", "1939", "1940"), typeof row[c] === (stryMutAct_9fa48("1941") ? "" : (stryCov_9fa48("1941"), 'number'))))));
                  const label = (stryMutAct_9fa48("1945") ? strCols.length <= 0 : stryMutAct_9fa48("1944") ? strCols.length >= 0 : stryMutAct_9fa48("1943") ? false : stryMutAct_9fa48("1942") ? true : (stryCov_9fa48("1942", "1943", "1944", "1945"), strCols.length > 0)) ? row[strCols[0]] : stryMutAct_9fa48("1946") ? `` : (stryCov_9fa48("1946"), `Entry-${idx}`);
                  const val = (stryMutAct_9fa48("1950") ? numCols.length <= 0 : stryMutAct_9fa48("1949") ? numCols.length >= 0 : stryMutAct_9fa48("1948") ? false : stryMutAct_9fa48("1947") ? true : (stryCov_9fa48("1947", "1948", "1949", "1950"), numCols.length > 0)) ? row[numCols[0]] : stryMutAct_9fa48("1951") ? "" : (stryCov_9fa48("1951"), '-');
                  const isPositive = stryMutAct_9fa48("1954") ? typeof val === 'number' || val >= 0 : stryMutAct_9fa48("1953") ? false : stryMutAct_9fa48("1952") ? true : (stryCov_9fa48("1952", "1953", "1954"), (stryMutAct_9fa48("1956") ? typeof val !== 'number' : stryMutAct_9fa48("1955") ? true : (stryCov_9fa48("1955", "1956"), typeof val === (stryMutAct_9fa48("1957") ? "" : (stryCov_9fa48("1957"), 'number')))) && (stryMutAct_9fa48("1960") ? val < 0 : stryMutAct_9fa48("1959") ? val > 0 : stryMutAct_9fa48("1958") ? true : (stryCov_9fa48("1958", "1959", "1960"), val >= 0)));
                  return <div key={idx} className="d-flex justify-between items-center py-sm" style={stryMutAct_9fa48("1961") ? {} : (stryCov_9fa48("1961"), {
                    borderBottom: stryMutAct_9fa48("1962") ? "" : (stryCov_9fa48("1962"), '1px solid var(--border-light)')
                  })}>
                    <div style={stryMutAct_9fa48("1963") ? {} : (stryCov_9fa48("1963"), {
                      flex: 1,
                      minWidth: 0
                    })}>
                      <div className="text-primary font-bold truncate" style={stryMutAct_9fa48("1964") ? {} : (stryCov_9fa48("1964"), {
                        fontSize: stryMutAct_9fa48("1965") ? "" : (stryCov_9fa48("1965"), '14px')
                      })}>{label}</div>
                      <div className="text-muted" style={stryMutAct_9fa48("1966") ? {} : (stryCov_9fa48("1966"), {
                        fontSize: stryMutAct_9fa48("1967") ? "" : (stryCov_9fa48("1967"), '10px'),
                        textTransform: stryMutAct_9fa48("1968") ? "" : (stryCov_9fa48("1968"), 'uppercase'),
                        fontWeight: 700
                      })}>FG-{stryMutAct_9fa48("1969") ? 2000 - idx : (stryCov_9fa48("1969"), 2000 + idx)}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-primary font-bold" style={stryMutAct_9fa48("1970") ? {} : (stryCov_9fa48("1970"), {
                        fontSize: stryMutAct_9fa48("1971") ? "" : (stryCov_9fa48("1971"), '16px')
                      })}>{(stryMutAct_9fa48("1974") ? typeof val !== 'number' : stryMutAct_9fa48("1973") ? false : stryMutAct_9fa48("1972") ? true : (stryCov_9fa48("1972", "1973", "1974"), typeof val === (stryMutAct_9fa48("1975") ? "" : (stryCov_9fa48("1975"), 'number')))) ? formatNumber(val) : val}</div>
                      {stryMutAct_9fa48("1978") ? typeof val === 'number' || <div className={`d-flex items-center gap-1 justify-end ${isPositive ? 'text-emerald' : 'text-rose'}`} style={{
                        fontSize: '10px',
                        fontWeight: 800
                      }}>
                          {isPositive ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
                          <span>{isPositive ? 'GAIN' : 'DEFICIT'}</span>
                        </div> : stryMutAct_9fa48("1977") ? false : stryMutAct_9fa48("1976") ? true : (stryCov_9fa48("1976", "1977", "1978"), (stryMutAct_9fa48("1980") ? typeof val !== 'number' : stryMutAct_9fa48("1979") ? true : (stryCov_9fa48("1979", "1980"), typeof val === (stryMutAct_9fa48("1981") ? "" : (stryCov_9fa48("1981"), 'number')))) && <div className={stryMutAct_9fa48("1982") ? `` : (stryCov_9fa48("1982"), `d-flex items-center gap-1 justify-end ${isPositive ? stryMutAct_9fa48("1983") ? "" : (stryCov_9fa48("1983"), 'text-emerald') : stryMutAct_9fa48("1984") ? "" : (stryCov_9fa48("1984"), 'text-rose')}`)} style={stryMutAct_9fa48("1985") ? {} : (stryCov_9fa48("1985"), {
                        fontSize: stryMutAct_9fa48("1986") ? "" : (stryCov_9fa48("1986"), '10px'),
                        fontWeight: 800
                      })}>
                          {isPositive ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
                          <span>{isPositive ? stryMutAct_9fa48("1987") ? "" : (stryCov_9fa48("1987"), 'GAIN') : stryMutAct_9fa48("1988") ? "" : (stryCov_9fa48("1988"), 'DEFICIT')}</span>
                        </div>)}
                    </div>
                  </div>;
                }
              }))))}
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}