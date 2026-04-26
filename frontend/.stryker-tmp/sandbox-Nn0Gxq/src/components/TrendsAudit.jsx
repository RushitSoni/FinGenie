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
  if (stryMutAct_9fa48("1987")) {
    {}
  } else {
    stryCov_9fa48("1987");
    if (stryMutAct_9fa48("1990") ? typeof val === 'number' : stryMutAct_9fa48("1989") ? false : stryMutAct_9fa48("1988") ? true : (stryCov_9fa48("1988", "1989", "1990"), typeof val !== (stryMutAct_9fa48("1991") ? "" : (stryCov_9fa48("1991"), 'number')))) return val;
    return val.toLocaleString(stryMutAct_9fa48("1992") ? "" : (stryCov_9fa48("1992"), 'en-US'), stryMutAct_9fa48("1993") ? {} : (stryCov_9fa48("1993"), {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }));
  }
}
export default function TrendsAudit({
  result
}) {
  if (stryMutAct_9fa48("1994")) {
    {}
  } else {
    stryCov_9fa48("1994");
    if (stryMutAct_9fa48("1997") ? false : stryMutAct_9fa48("1996") ? true : stryMutAct_9fa48("1995") ? result : (stryCov_9fa48("1995", "1996", "1997"), !result)) return null;
    const {
      raw_data,
      column_headers,
      trends
    } = result;
    let chartDataConfig = null;
    if (stryMutAct_9fa48("2000") ? raw_data && raw_data.length > 0 || column_headers : stryMutAct_9fa48("1999") ? false : stryMutAct_9fa48("1998") ? true : (stryCov_9fa48("1998", "1999", "2000"), (stryMutAct_9fa48("2002") ? raw_data || raw_data.length > 0 : stryMutAct_9fa48("2001") ? true : (stryCov_9fa48("2001", "2002"), raw_data && (stryMutAct_9fa48("2005") ? raw_data.length <= 0 : stryMutAct_9fa48("2004") ? raw_data.length >= 0 : stryMutAct_9fa48("2003") ? true : (stryCov_9fa48("2003", "2004", "2005"), raw_data.length > 0)))) && column_headers)) {
      if (stryMutAct_9fa48("2006")) {
        {}
      } else {
        stryCov_9fa48("2006");
        const stringCol = stryMutAct_9fa48("2009") ? column_headers.find(c => typeof raw_data[0][c] === 'string') && column_headers[0] : stryMutAct_9fa48("2008") ? false : stryMutAct_9fa48("2007") ? true : (stryCov_9fa48("2007", "2008", "2009"), column_headers.find(stryMutAct_9fa48("2010") ? () => undefined : (stryCov_9fa48("2010"), c => stryMutAct_9fa48("2013") ? typeof raw_data[0][c] !== 'string' : stryMutAct_9fa48("2012") ? false : stryMutAct_9fa48("2011") ? true : (stryCov_9fa48("2011", "2012", "2013"), typeof raw_data[0][c] === (stryMutAct_9fa48("2014") ? "" : (stryCov_9fa48("2014"), 'string'))))) || column_headers[0]);
        const numericCol = column_headers.find(stryMutAct_9fa48("2015") ? () => undefined : (stryCov_9fa48("2015"), c => stryMutAct_9fa48("2018") ? typeof raw_data[0][c] !== 'number' : stryMutAct_9fa48("2017") ? false : stryMutAct_9fa48("2016") ? true : (stryCov_9fa48("2016", "2017", "2018"), typeof raw_data[0][c] === (stryMutAct_9fa48("2019") ? "" : (stryCov_9fa48("2019"), 'number')))));
        if (stryMutAct_9fa48("2022") ? stringCol || numericCol : stryMutAct_9fa48("2021") ? false : stryMutAct_9fa48("2020") ? true : (stryCov_9fa48("2020", "2021", "2022"), stringCol && numericCol)) {
          if (stryMutAct_9fa48("2023")) {
            {}
          } else {
            stryCov_9fa48("2023");
            const labels = stryMutAct_9fa48("2024") ? raw_data.map(r => String(r[stringCol]).substring(0, 10)) : (stryCov_9fa48("2024"), raw_data.slice(0, 15).map(stryMutAct_9fa48("2025") ? () => undefined : (stryCov_9fa48("2025"), r => stryMutAct_9fa48("2026") ? String(r[stringCol]) : (stryCov_9fa48("2026"), String(r[stringCol]).substring(0, 10)))));
            const datasetData = stryMutAct_9fa48("2027") ? raw_data.map(r => r[numericCol] || 0) : (stryCov_9fa48("2027"), raw_data.slice(0, 15).map(stryMutAct_9fa48("2028") ? () => undefined : (stryCov_9fa48("2028"), r => stryMutAct_9fa48("2031") ? r[numericCol] && 0 : stryMutAct_9fa48("2030") ? false : stryMutAct_9fa48("2029") ? true : (stryCov_9fa48("2029", "2030", "2031"), r[numericCol] || 0))));
            chartDataConfig = stryMutAct_9fa48("2032") ? {} : (stryCov_9fa48("2032"), {
              labels,
              datasets: stryMutAct_9fa48("2033") ? [] : (stryCov_9fa48("2033"), [stryMutAct_9fa48("2034") ? {} : (stryCov_9fa48("2034"), {
                label: numericCol,
                data: datasetData,
                borderColor: stryMutAct_9fa48("2035") ? "" : (stryCov_9fa48("2035"), '#3b82f6'),
                backgroundColor: stryMutAct_9fa48("2036") ? "" : (stryCov_9fa48("2036"), 'rgba(59, 130, 246, 0.1)'),
                borderWidth: 2,
                fill: stryMutAct_9fa48("2037") ? false : (stryCov_9fa48("2037"), true),
                tension: 0.4,
                pointRadius: 3
              })])
            });
          }
        }
      }
    }
    const chartOptions = stryMutAct_9fa48("2038") ? {} : (stryCov_9fa48("2038"), {
      responsive: stryMutAct_9fa48("2039") ? false : (stryCov_9fa48("2039"), true),
      maintainAspectRatio: stryMutAct_9fa48("2040") ? true : (stryCov_9fa48("2040"), false),
      plugins: stryMutAct_9fa48("2041") ? {} : (stryCov_9fa48("2041"), {
        legend: stryMutAct_9fa48("2042") ? {} : (stryCov_9fa48("2042"), {
          display: stryMutAct_9fa48("2043") ? true : (stryCov_9fa48("2043"), false)
        }),
        tooltip: stryMutAct_9fa48("2044") ? {} : (stryCov_9fa48("2044"), {
          backgroundColor: stryMutAct_9fa48("2045") ? "" : (stryCov_9fa48("2045"), '#0f172a'),
          titleFont: stryMutAct_9fa48("2046") ? {} : (stryCov_9fa48("2046"), {
            size: 12
          }),
          bodyFont: stryMutAct_9fa48("2047") ? {} : (stryCov_9fa48("2047"), {
            size: 11
          })
        })
      }),
      scales: stryMutAct_9fa48("2048") ? {} : (stryCov_9fa48("2048"), {
        x: stryMutAct_9fa48("2049") ? {} : (stryCov_9fa48("2049"), {
          display: stryMutAct_9fa48("2050") ? true : (stryCov_9fa48("2050"), false)
        }),
        y: stryMutAct_9fa48("2051") ? {} : (stryCov_9fa48("2051"), {
          display: stryMutAct_9fa48("2052") ? true : (stryCov_9fa48("2052"), false)
        })
      })
    });
    return <div className="trends-audit fade-in slide-up" style={stryMutAct_9fa48("2053") ? {} : (stryCov_9fa48("2053"), {
      paddingBottom: stryMutAct_9fa48("2054") ? "" : (stryCov_9fa48("2054"), 'var(--space-2xl)')
    })}>
      <div className="d-flex justify-between items-start mb-xl pb-lg" style={stryMutAct_9fa48("2055") ? {} : (stryCov_9fa48("2055"), {
        borderBottom: stryMutAct_9fa48("2056") ? "" : (stryCov_9fa48("2056"), '1px solid var(--border-light)')
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
        
        <div className="text-right" style={stryMutAct_9fa48("2057") ? {} : (stryCov_9fa48("2057"), {
          borderLeft: stryMutAct_9fa48("2058") ? "" : (stryCov_9fa48("2058"), '1px solid var(--border-light)'),
          paddingLeft: stryMutAct_9fa48("2059") ? "" : (stryCov_9fa48("2059"), '40px')
        })}>
          <div className="sub-label d-flex items-center gap-2 justify-end">
            <Calendar size={12} />
            <span>Issued Date</span>
          </div>
          <div className="metric-big" style={stryMutAct_9fa48("2060") ? {} : (stryCov_9fa48("2060"), {
            fontSize: stryMutAct_9fa48("2061") ? "" : (stryCov_9fa48("2061"), '28px')
          })}>
            {stryMutAct_9fa48("2062") ? new Date().toLocaleDateString('en-US', {
              month: 'short',
              day: '2-digit',
              year: 'numeric'
            }).toLowerCase() : (stryCov_9fa48("2062"), new Date().toLocaleDateString(stryMutAct_9fa48("2063") ? "" : (stryCov_9fa48("2063"), 'en-US'), stryMutAct_9fa48("2064") ? {} : (stryCov_9fa48("2064"), {
              month: stryMutAct_9fa48("2065") ? "" : (stryCov_9fa48("2065"), 'short'),
              day: stryMutAct_9fa48("2066") ? "" : (stryCov_9fa48("2066"), '2-digit'),
              year: stryMutAct_9fa48("2067") ? "" : (stryCov_9fa48("2067"), 'numeric')
            })).toUpperCase())}
          </div>
        </div>
      </div>

      <div className="grid-cols-12" style={stryMutAct_9fa48("2068") ? {} : (stryCov_9fa48("2068"), {
        gap: stryMutAct_9fa48("2069") ? "" : (stryCov_9fa48("2069"), 'var(--space-xl)')
      })}>
        <div className="col-span-8">
          <div className="card-light mb-xl" style={stryMutAct_9fa48("2070") ? {} : (stryCov_9fa48("2070"), {
            padding: stryMutAct_9fa48("2071") ? "" : (stryCov_9fa48("2071"), '40px')
          })}>
            <div className="d-flex justify-between items-start mb-lg">
              <div>
                <h3 className="section-heading__label" style={stryMutAct_9fa48("2072") ? {} : (stryCov_9fa48("2072"), {
                  fontSize: stryMutAct_9fa48("2073") ? "" : (stryCov_9fa48("2073"), '20px'),
                  textTransform: stryMutAct_9fa48("2074") ? "" : (stryCov_9fa48("2074"), 'none'),
                  letterSpacing: stryMutAct_9fa48("2075") ? "" : (stryCov_9fa48("2075"), 'normal'),
                  color: stryMutAct_9fa48("2076") ? "" : (stryCov_9fa48("2076"), 'var(--text-primary)')
                })}>
                  Performance Momentum
                </h3>
                <p className="text-secondary" style={stryMutAct_9fa48("2077") ? {} : (stryCov_9fa48("2077"), {
                  fontSize: stryMutAct_9fa48("2078") ? "" : (stryCov_9fa48("2078"), '13px')
                })}>Historical projection vs detected velocity.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap justify-end">
                {stryMutAct_9fa48("2081") ? trends || trends.slice(0, 3).map((t, i) => <span key={i} className={`hero-badge ${t.direction === 'up' ? 'text-emerald' : 'text-rose'}`} style={{
                  background: t.direction === 'up' ? 'rgba(5, 150, 105, 0.05)' : 'rgba(225, 29, 72, 0.05)'
                }}>
                     {t.metric} {t.direction === 'up' ? '↑' : '↓'}
                   </span>) : stryMutAct_9fa48("2080") ? false : stryMutAct_9fa48("2079") ? true : (stryCov_9fa48("2079", "2080", "2081"), trends && (stryMutAct_9fa48("2082") ? trends.map((t, i) => <span key={i} className={`hero-badge ${t.direction === 'up' ? 'text-emerald' : 'text-rose'}`} style={{
                  background: t.direction === 'up' ? 'rgba(5, 150, 105, 0.05)' : 'rgba(225, 29, 72, 0.05)'
                }}>
                     {t.metric} {t.direction === 'up' ? '↑' : '↓'}
                   </span>) : (stryCov_9fa48("2082"), trends.slice(0, 3).map(stryMutAct_9fa48("2083") ? () => undefined : (stryCov_9fa48("2083"), (t, i) => <span key={i} className={stryMutAct_9fa48("2084") ? `` : (stryCov_9fa48("2084"), `hero-badge ${(stryMutAct_9fa48("2087") ? t.direction !== 'up' : stryMutAct_9fa48("2086") ? false : stryMutAct_9fa48("2085") ? true : (stryCov_9fa48("2085", "2086", "2087"), t.direction === (stryMutAct_9fa48("2088") ? "" : (stryCov_9fa48("2088"), 'up')))) ? stryMutAct_9fa48("2089") ? "" : (stryCov_9fa48("2089"), 'text-emerald') : stryMutAct_9fa48("2090") ? "" : (stryCov_9fa48("2090"), 'text-rose')}`)} style={stryMutAct_9fa48("2091") ? {} : (stryCov_9fa48("2091"), {
                  background: (stryMutAct_9fa48("2094") ? t.direction !== 'up' : stryMutAct_9fa48("2093") ? false : stryMutAct_9fa48("2092") ? true : (stryCov_9fa48("2092", "2093", "2094"), t.direction === (stryMutAct_9fa48("2095") ? "" : (stryCov_9fa48("2095"), 'up')))) ? stryMutAct_9fa48("2096") ? "" : (stryCov_9fa48("2096"), 'rgba(5, 150, 105, 0.05)') : stryMutAct_9fa48("2097") ? "" : (stryCov_9fa48("2097"), 'rgba(225, 29, 72, 0.05)')
                })}>
                     {t.metric} {(stryMutAct_9fa48("2100") ? t.direction !== 'up' : stryMutAct_9fa48("2099") ? false : stryMutAct_9fa48("2098") ? true : (stryCov_9fa48("2098", "2099", "2100"), t.direction === (stryMutAct_9fa48("2101") ? "" : (stryCov_9fa48("2101"), 'up')))) ? stryMutAct_9fa48("2102") ? "" : (stryCov_9fa48("2102"), '↑') : stryMutAct_9fa48("2103") ? "" : (stryCov_9fa48("2103"), '↓')}
                   </span>)))))}
              </div>
            </div>
            
            <div style={stryMutAct_9fa48("2104") ? {} : (stryCov_9fa48("2104"), {
              height: stryMutAct_9fa48("2105") ? "" : (stryCov_9fa48("2105"), '320px'),
              padding: stryMutAct_9fa48("2106") ? "" : (stryCov_9fa48("2106"), '24px'),
              borderRadius: stryMutAct_9fa48("2107") ? "" : (stryCov_9fa48("2107"), 'var(--radius-md)'),
              background: stryMutAct_9fa48("2108") ? "" : (stryCov_9fa48("2108"), 'var(--bg-blue-light)'),
              border: stryMutAct_9fa48("2109") ? "" : (stryCov_9fa48("2109"), '1px solid var(--border-light)')
            })}>
              {chartDataConfig ? <Line data={chartDataConfig} options={chartOptions} /> : <div className="d-flex items-center justify-center h-full text-muted">No trend data available.</div>}
            </div>
          </div>

          <div className="grid-2x2">
            <div className="card-light" style={stryMutAct_9fa48("2110") ? {} : (stryCov_9fa48("2110"), {
              background: stryMutAct_9fa48("2111") ? "" : (stryCov_9fa48("2111"), 'var(--bg-blue-light)'),
              border: stryMutAct_9fa48("2112") ? "" : (stryCov_9fa48("2112"), 'none')
            })}>
               <div className="sub-label">Observations</div>
               <div className="d-flex items-center gap-4">
                 <div className="metric-big" style={stryMutAct_9fa48("2113") ? {} : (stryCov_9fa48("2113"), {
                  fontSize: stryMutAct_9fa48("2114") ? "" : (stryCov_9fa48("2114"), '48px')
                })}>{trends ? trends.length : 0}</div>
                 <p className="text-secondary" style={stryMutAct_9fa48("2115") ? {} : (stryCov_9fa48("2115"), {
                  fontSize: stryMutAct_9fa48("2116") ? "" : (stryCov_9fa48("2116"), '14px'),
                  fontWeight: 600,
                  lineHeight: 1.3
                })}>Detected performance anomalies</p>
               </div>
            </div>
            <div className="card-light" style={stryMutAct_9fa48("2117") ? {} : (stryCov_9fa48("2117"), {
              background: stryMutAct_9fa48("2118") ? "" : (stryCov_9fa48("2118"), 'var(--bg-navy)'),
              border: stryMutAct_9fa48("2119") ? "" : (stryCov_9fa48("2119"), 'none'),
              color: stryMutAct_9fa48("2120") ? "" : (stryCov_9fa48("2120"), 'white')
            })}>
               <div className="sub-label" style={stryMutAct_9fa48("2121") ? {} : (stryCov_9fa48("2121"), {
                color: stryMutAct_9fa48("2122") ? "" : (stryCov_9fa48("2122"), 'rgba(255,255,255,0.4)')
              })}>Exposure Profile</div>
               <div className="metric-big" style={stryMutAct_9fa48("2123") ? {} : (stryCov_9fa48("2123"), {
                color: stryMutAct_9fa48("2124") ? "" : (stryCov_9fa48("2124"), 'white'),
                fontSize: stryMutAct_9fa48("2125") ? "" : (stryCov_9fa48("2125"), '28px'),
                marginTop: stryMutAct_9fa48("2126") ? "" : (stryCov_9fa48("2126"), '4px')
              })}>
                 {(stryMutAct_9fa48("2129") ? result.risks || result.risks.some(r => r.severity === 'critical') : stryMutAct_9fa48("2128") ? false : stryMutAct_9fa48("2127") ? true : (stryCov_9fa48("2127", "2128", "2129"), result.risks && (stryMutAct_9fa48("2130") ? result.risks.every(r => r.severity === 'critical') : (stryCov_9fa48("2130"), result.risks.some(stryMutAct_9fa48("2131") ? () => undefined : (stryCov_9fa48("2131"), r => stryMutAct_9fa48("2134") ? r.severity !== 'critical' : stryMutAct_9fa48("2133") ? false : stryMutAct_9fa48("2132") ? true : (stryCov_9fa48("2132", "2133", "2134"), r.severity === (stryMutAct_9fa48("2135") ? "" : (stryCov_9fa48("2135"), 'critical'))))))))) ? stryMutAct_9fa48("2136") ? "" : (stryCov_9fa48("2136"), 'High Volatility') : stryMutAct_9fa48("2137") ? "" : (stryCov_9fa48("2137"), 'Stable Ops')}
               </div>
               <div className="d-flex items-center gap-2 mt-sm" style={stryMutAct_9fa48("2138") ? {} : (stryCov_9fa48("2138"), {
                color: stryMutAct_9fa48("2139") ? "" : (stryCov_9fa48("2139"), 'var(--accent-cyan)'),
                fontSize: stryMutAct_9fa48("2140") ? "" : (stryCov_9fa48("2140"), '12px'),
                fontWeight: 700
              })}>
                 <Activity size={14} />
                 <span>Real-time Risk Monitoring</span>
               </div>
            </div>
          </div>
        </div>

        <div className="col-span-4">
          <div className="card-light" style={stryMutAct_9fa48("2141") ? {} : (stryCov_9fa48("2141"), {
            height: stryMutAct_9fa48("2142") ? "" : (stryCov_9fa48("2142"), '100%')
          })}>
            <div className="section-heading mb-md">
              <Database className="text-secondary" size={18} />
              <h3 className="section-heading__label" style={stryMutAct_9fa48("2143") ? {} : (stryCov_9fa48("2143"), {
                fontSize: stryMutAct_9fa48("2144") ? "" : (stryCov_9fa48("2144"), '16px')
              })}>Snapshot Audit</h3>
            </div>
            
            <div className="custom-scrollbar" style={stryMutAct_9fa48("2145") ? {} : (stryCov_9fa48("2145"), {
              display: stryMutAct_9fa48("2146") ? "" : (stryCov_9fa48("2146"), 'flex'),
              flexDirection: stryMutAct_9fa48("2147") ? "" : (stryCov_9fa48("2147"), 'column')
            })}>
              {stryMutAct_9fa48("2150") ? raw_data || raw_data.slice(0, 10).map((row, idx) => {
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
              }) : stryMutAct_9fa48("2149") ? false : stryMutAct_9fa48("2148") ? true : (stryCov_9fa48("2148", "2149", "2150"), raw_data && (stryMutAct_9fa48("2151") ? raw_data.map((row, idx) => {
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
              }) : (stryCov_9fa48("2151"), raw_data.slice(0, 10).map((row, idx) => {
                if (stryMutAct_9fa48("2152")) {
                  {}
                } else {
                  stryCov_9fa48("2152");
                  const strCols = stryMutAct_9fa48("2153") ? column_headers : (stryCov_9fa48("2153"), column_headers.filter(stryMutAct_9fa48("2154") ? () => undefined : (stryCov_9fa48("2154"), c => stryMutAct_9fa48("2157") ? typeof row[c] !== 'string' : stryMutAct_9fa48("2156") ? false : stryMutAct_9fa48("2155") ? true : (stryCov_9fa48("2155", "2156", "2157"), typeof row[c] === (stryMutAct_9fa48("2158") ? "" : (stryCov_9fa48("2158"), 'string'))))));
                  const numCols = stryMutAct_9fa48("2159") ? column_headers : (stryCov_9fa48("2159"), column_headers.filter(stryMutAct_9fa48("2160") ? () => undefined : (stryCov_9fa48("2160"), c => stryMutAct_9fa48("2163") ? typeof row[c] !== 'number' : stryMutAct_9fa48("2162") ? false : stryMutAct_9fa48("2161") ? true : (stryCov_9fa48("2161", "2162", "2163"), typeof row[c] === (stryMutAct_9fa48("2164") ? "" : (stryCov_9fa48("2164"), 'number'))))));
                  const label = (stryMutAct_9fa48("2168") ? strCols.length <= 0 : stryMutAct_9fa48("2167") ? strCols.length >= 0 : stryMutAct_9fa48("2166") ? false : stryMutAct_9fa48("2165") ? true : (stryCov_9fa48("2165", "2166", "2167", "2168"), strCols.length > 0)) ? row[strCols[0]] : stryMutAct_9fa48("2169") ? `` : (stryCov_9fa48("2169"), `Entry-${idx}`);
                  const val = (stryMutAct_9fa48("2173") ? numCols.length <= 0 : stryMutAct_9fa48("2172") ? numCols.length >= 0 : stryMutAct_9fa48("2171") ? false : stryMutAct_9fa48("2170") ? true : (stryCov_9fa48("2170", "2171", "2172", "2173"), numCols.length > 0)) ? row[numCols[0]] : stryMutAct_9fa48("2174") ? "" : (stryCov_9fa48("2174"), '-');
                  const isPositive = stryMutAct_9fa48("2177") ? typeof val === 'number' || val >= 0 : stryMutAct_9fa48("2176") ? false : stryMutAct_9fa48("2175") ? true : (stryCov_9fa48("2175", "2176", "2177"), (stryMutAct_9fa48("2179") ? typeof val !== 'number' : stryMutAct_9fa48("2178") ? true : (stryCov_9fa48("2178", "2179"), typeof val === (stryMutAct_9fa48("2180") ? "" : (stryCov_9fa48("2180"), 'number')))) && (stryMutAct_9fa48("2183") ? val < 0 : stryMutAct_9fa48("2182") ? val > 0 : stryMutAct_9fa48("2181") ? true : (stryCov_9fa48("2181", "2182", "2183"), val >= 0)));
                  return <div key={idx} className="d-flex justify-between items-center py-sm" style={stryMutAct_9fa48("2184") ? {} : (stryCov_9fa48("2184"), {
                    borderBottom: stryMutAct_9fa48("2185") ? "" : (stryCov_9fa48("2185"), '1px solid var(--border-light)')
                  })}>
                    <div style={stryMutAct_9fa48("2186") ? {} : (stryCov_9fa48("2186"), {
                      flex: 1,
                      minWidth: 0
                    })}>
                      <div className="text-primary font-bold truncate" style={stryMutAct_9fa48("2187") ? {} : (stryCov_9fa48("2187"), {
                        fontSize: stryMutAct_9fa48("2188") ? "" : (stryCov_9fa48("2188"), '14px')
                      })}>{label}</div>
                      <div className="text-muted" style={stryMutAct_9fa48("2189") ? {} : (stryCov_9fa48("2189"), {
                        fontSize: stryMutAct_9fa48("2190") ? "" : (stryCov_9fa48("2190"), '10px'),
                        textTransform: stryMutAct_9fa48("2191") ? "" : (stryCov_9fa48("2191"), 'uppercase'),
                        fontWeight: 700
                      })}>FG-{stryMutAct_9fa48("2192") ? 2000 - idx : (stryCov_9fa48("2192"), 2000 + idx)}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-primary font-bold" style={stryMutAct_9fa48("2193") ? {} : (stryCov_9fa48("2193"), {
                        fontSize: stryMutAct_9fa48("2194") ? "" : (stryCov_9fa48("2194"), '16px')
                      })}>{(stryMutAct_9fa48("2197") ? typeof val !== 'number' : stryMutAct_9fa48("2196") ? false : stryMutAct_9fa48("2195") ? true : (stryCov_9fa48("2195", "2196", "2197"), typeof val === (stryMutAct_9fa48("2198") ? "" : (stryCov_9fa48("2198"), 'number')))) ? formatNumber(val) : val}</div>
                      {stryMutAct_9fa48("2201") ? typeof val === 'number' || <div className={`d-flex items-center gap-1 justify-end ${isPositive ? 'text-emerald' : 'text-rose'}`} style={{
                        fontSize: '10px',
                        fontWeight: 800
                      }}>
                          {isPositive ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
                          <span>{isPositive ? 'GAIN' : 'DEFICIT'}</span>
                        </div> : stryMutAct_9fa48("2200") ? false : stryMutAct_9fa48("2199") ? true : (stryCov_9fa48("2199", "2200", "2201"), (stryMutAct_9fa48("2203") ? typeof val !== 'number' : stryMutAct_9fa48("2202") ? true : (stryCov_9fa48("2202", "2203"), typeof val === (stryMutAct_9fa48("2204") ? "" : (stryCov_9fa48("2204"), 'number')))) && <div className={stryMutAct_9fa48("2205") ? `` : (stryCov_9fa48("2205"), `d-flex items-center gap-1 justify-end ${isPositive ? stryMutAct_9fa48("2206") ? "" : (stryCov_9fa48("2206"), 'text-emerald') : stryMutAct_9fa48("2207") ? "" : (stryCov_9fa48("2207"), 'text-rose')}`)} style={stryMutAct_9fa48("2208") ? {} : (stryCov_9fa48("2208"), {
                        fontSize: stryMutAct_9fa48("2209") ? "" : (stryCov_9fa48("2209"), '10px'),
                        fontWeight: 800
                      })}>
                          {isPositive ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
                          <span>{isPositive ? stryMutAct_9fa48("2210") ? "" : (stryCov_9fa48("2210"), 'GAIN') : stryMutAct_9fa48("2211") ? "" : (stryCov_9fa48("2211"), 'DEFICIT')}</span>
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