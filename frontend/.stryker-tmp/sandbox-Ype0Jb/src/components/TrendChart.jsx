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
import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { BarChart2, TrendingUp, PieChart as PieIcon, LineChart as LineIcon, Activity } from 'lucide-react';

// Color system tied to CSS variables
const CHART_COLORS = stryMutAct_9fa48("1769") ? [] : (stryCov_9fa48("1769"), [stryMutAct_9fa48("1770") ? "" : (stryCov_9fa48("1770"), 'var(--chart-1)'), stryMutAct_9fa48("1771") ? "" : (stryCov_9fa48("1771"), 'var(--chart-2)'), stryMutAct_9fa48("1772") ? "" : (stryCov_9fa48("1772"), 'var(--chart-3)'), stryMutAct_9fa48("1773") ? "" : (stryCov_9fa48("1773"), 'var(--chart-4)'), stryMutAct_9fa48("1774") ? "" : (stryCov_9fa48("1774"), 'var(--chart-5)')]);
export default function TrendChart({
  rawData,
  columns,
  trends
}) {
  if (stryMutAct_9fa48("1775")) {
    {}
  } else {
    stryCov_9fa48("1775");
    const [activeTab, setActiveTab] = useState(stryMutAct_9fa48("1776") ? "" : (stryCov_9fa48("1776"), 'bar'));
    if (stryMutAct_9fa48("1779") ? !rawData && rawData.length === 0 : stryMutAct_9fa48("1778") ? false : stryMutAct_9fa48("1777") ? true : (stryCov_9fa48("1777", "1778", "1779"), (stryMutAct_9fa48("1780") ? rawData : (stryCov_9fa48("1780"), !rawData)) || (stryMutAct_9fa48("1782") ? rawData.length !== 0 : stryMutAct_9fa48("1781") ? false : (stryCov_9fa48("1781", "1782"), rawData.length === 0)))) return null;

    // Prepare chart data
    const numericCols = stryMutAct_9fa48("1783") ? columns : (stryCov_9fa48("1783"), columns.filter(stryMutAct_9fa48("1784") ? () => undefined : (stryCov_9fa48("1784"), (_, idx) => stryMutAct_9fa48("1788") ? idx <= 0 : stryMutAct_9fa48("1787") ? idx >= 0 : stryMutAct_9fa48("1786") ? false : stryMutAct_9fa48("1785") ? true : (stryCov_9fa48("1785", "1786", "1787", "1788"), idx > 0))));
    const labelCol = columns[0];
    const chartData = stryMutAct_9fa48("1791") ? rawData.filter(row => numericCols.some(col => typeof row[col] === 'number')).map(row => {
      const item = {
        name: String(row[labelCol] || '').substring(0, 25)
      };
      numericCols.forEach(col => {
        if (typeof row[col] === 'number') item[col] = row[col];
      });
      return item;
    }).filter(item => Object.keys(item).length > 1) : stryMutAct_9fa48("1790") ? rawData.slice(0, 15).map(row => {
      const item = {
        name: String(row[labelCol] || '').substring(0, 25)
      };
      numericCols.forEach(col => {
        if (typeof row[col] === 'number') item[col] = row[col];
      });
      return item;
    }).filter(item => Object.keys(item).length > 1) : stryMutAct_9fa48("1789") ? rawData.slice(0, 15).filter(row => numericCols.some(col => typeof row[col] === 'number')).map(row => {
      const item = {
        name: String(row[labelCol] || '').substring(0, 25)
      };
      numericCols.forEach(col => {
        if (typeof row[col] === 'number') item[col] = row[col];
      });
      return item;
    }) : (stryCov_9fa48("1789", "1790", "1791"), rawData.slice(0, 15).filter(stryMutAct_9fa48("1792") ? () => undefined : (stryCov_9fa48("1792"), row => stryMutAct_9fa48("1793") ? numericCols.every(col => typeof row[col] === 'number') : (stryCov_9fa48("1793"), numericCols.some(stryMutAct_9fa48("1794") ? () => undefined : (stryCov_9fa48("1794"), col => stryMutAct_9fa48("1797") ? typeof row[col] !== 'number' : stryMutAct_9fa48("1796") ? false : stryMutAct_9fa48("1795") ? true : (stryCov_9fa48("1795", "1796", "1797"), typeof row[col] === (stryMutAct_9fa48("1798") ? "" : (stryCov_9fa48("1798"), 'number')))))))).map(row => {
      if (stryMutAct_9fa48("1799")) {
        {}
      } else {
        stryCov_9fa48("1799");
        const item = stryMutAct_9fa48("1800") ? {} : (stryCov_9fa48("1800"), {
          name: stryMutAct_9fa48("1801") ? String(row[labelCol] || '') : (stryCov_9fa48("1801"), String(stryMutAct_9fa48("1804") ? row[labelCol] && '' : stryMutAct_9fa48("1803") ? false : stryMutAct_9fa48("1802") ? true : (stryCov_9fa48("1802", "1803", "1804"), row[labelCol] || (stryMutAct_9fa48("1805") ? "Stryker was here!" : (stryCov_9fa48("1805"), '')))).substring(0, 25))
        });
        numericCols.forEach(col => {
          if (stryMutAct_9fa48("1806")) {
            {}
          } else {
            stryCov_9fa48("1806");
            if (stryMutAct_9fa48("1809") ? typeof row[col] !== 'number' : stryMutAct_9fa48("1808") ? false : stryMutAct_9fa48("1807") ? true : (stryCov_9fa48("1807", "1808", "1809"), typeof row[col] === (stryMutAct_9fa48("1810") ? "" : (stryCov_9fa48("1810"), 'number')))) item[col] = row[col];
          }
        });
        return item;
      }
    }).filter(stryMutAct_9fa48("1811") ? () => undefined : (stryCov_9fa48("1811"), item => stryMutAct_9fa48("1815") ? Object.keys(item).length <= 1 : stryMutAct_9fa48("1814") ? Object.keys(item).length >= 1 : stryMutAct_9fa48("1813") ? false : stryMutAct_9fa48("1812") ? true : (stryCov_9fa48("1812", "1813", "1814", "1815"), Object.keys(item).length > 1))));
    const pieCol = numericCols[stryMutAct_9fa48("1816") ? numericCols.length + 1 : (stryCov_9fa48("1816"), numericCols.length - 1)];
    const pieData = stryMutAct_9fa48("1818") ? chartData.slice(0, 8).map(d => ({
      name: d.name,
      value: Math.abs(d[pieCol])
    })) : stryMutAct_9fa48("1817") ? chartData.filter(d => d[pieCol] && d[pieCol] > 0).map(d => ({
      name: d.name,
      value: Math.abs(d[pieCol])
    })) : (stryCov_9fa48("1817", "1818"), chartData.filter(stryMutAct_9fa48("1819") ? () => undefined : (stryCov_9fa48("1819"), d => stryMutAct_9fa48("1822") ? d[pieCol] || d[pieCol] > 0 : stryMutAct_9fa48("1821") ? false : stryMutAct_9fa48("1820") ? true : (stryCov_9fa48("1820", "1821", "1822"), d[pieCol] && (stryMutAct_9fa48("1825") ? d[pieCol] <= 0 : stryMutAct_9fa48("1824") ? d[pieCol] >= 0 : stryMutAct_9fa48("1823") ? true : (stryCov_9fa48("1823", "1824", "1825"), d[pieCol] > 0))))).slice(0, 8).map(stryMutAct_9fa48("1826") ? () => undefined : (stryCov_9fa48("1826"), d => stryMutAct_9fa48("1827") ? {} : (stryCov_9fa48("1827"), {
      name: d.name,
      value: Math.abs(d[pieCol])
    }))));
    const tabs = stryMutAct_9fa48("1828") ? [] : (stryCov_9fa48("1828"), [stryMutAct_9fa48("1829") ? {} : (stryCov_9fa48("1829"), {
      key: stryMutAct_9fa48("1830") ? "" : (stryCov_9fa48("1830"), 'bar'),
      label: stryMutAct_9fa48("1831") ? "" : (stryCov_9fa48("1831"), 'Comparison'),
      Icon: BarChart2
    }), stryMutAct_9fa48("1832") ? {} : (stryCov_9fa48("1832"), {
      key: stryMutAct_9fa48("1833") ? "" : (stryCov_9fa48("1833"), 'line'),
      label: stryMutAct_9fa48("1834") ? "" : (stryCov_9fa48("1834"), 'Trends'),
      Icon: TrendingUp
    }), stryMutAct_9fa48("1835") ? {} : (stryCov_9fa48("1835"), {
      key: stryMutAct_9fa48("1836") ? "" : (stryCov_9fa48("1836"), 'pie'),
      label: stryMutAct_9fa48("1837") ? "" : (stryCov_9fa48("1837"), 'Composition'),
      Icon: PieIcon
    })]);
    return <div className="card-light fade-in hover-lift mb-xl">
      <div className="d-flex justify-between items-center mb-lg">
        <div className="section-heading mb-0">
          <Activity className="text-secondary" size={20} />
          <h2 className="section-heading__label">Quantitative Visualizations</h2>
        </div>
        <div className="nav-links" style={stryMutAct_9fa48("1838") ? {} : (stryCov_9fa48("1838"), {
          padding: stryMutAct_9fa48("1839") ? "" : (stryCov_9fa48("1839"), '4px')
        })}>
          {tabs.map(stryMutAct_9fa48("1840") ? () => undefined : (stryCov_9fa48("1840"), ({
            key,
            label,
            Icon
          }) => <button key={key} className={stryMutAct_9fa48("1841") ? `` : (stryCov_9fa48("1841"), `nav-item ${(stryMutAct_9fa48("1844") ? activeTab !== key : stryMutAct_9fa48("1843") ? false : stryMutAct_9fa48("1842") ? true : (stryCov_9fa48("1842", "1843", "1844"), activeTab === key)) ? stryMutAct_9fa48("1845") ? "" : (stryCov_9fa48("1845"), 'active') : stryMutAct_9fa48("1846") ? "Stryker was here!" : (stryCov_9fa48("1846"), '')}`)} onClick={stryMutAct_9fa48("1847") ? () => undefined : (stryCov_9fa48("1847"), () => setActiveTab(key))} style={stryMutAct_9fa48("1848") ? {} : (stryCov_9fa48("1848"), {
            padding: stryMutAct_9fa48("1849") ? "" : (stryCov_9fa48("1849"), '6px 12px'),
            fontSize: stryMutAct_9fa48("1850") ? "" : (stryCov_9fa48("1850"), '12px')
          })}>
              <div className="d-flex items-center gap-2">
                <Icon size={14} />
                <span>{label}</span>
              </div>
            </button>))}
        </div>
      </div>

      <div className="chart-container" style={stryMutAct_9fa48("1851") ? {} : (stryCov_9fa48("1851"), {
        minHeight: stryMutAct_9fa48("1852") ? "" : (stryCov_9fa48("1852"), '400px')
      })}>
        {stryMutAct_9fa48("1855") ? activeTab === 'bar' && chartData.length > 0 || <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData} margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 80
          }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-light)" vertical={false} />
              <XAxis dataKey="name" tick={{
              fill: 'var(--text-muted)',
              fontSize: 11,
              fontWeight: 500
            }} angle={-35} textAnchor="end" height={80} />
              <YAxis tick={{
              fill: 'var(--text-muted)',
              fontSize: 11,
              fontWeight: 500
            }} tickFormatter={formatTick} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{
              background: 'var(--bg-navy)',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-lg)',
              color: 'white'
            }} itemStyle={{
              color: 'white'
            }} formatter={value => [formatNumber(value), '']} />
              <Legend verticalAlign="top" height={36} iconType="circle" />
              {numericCols.slice(0, 4).map((col, idx) => <Bar key={col} dataKey={col} fill={CHART_COLORS[idx % CHART_COLORS.length]} radius={[4, 4, 0, 0]} barSize={24} />)}
            </BarChart>
          </ResponsiveContainer> : stryMutAct_9fa48("1854") ? false : stryMutAct_9fa48("1853") ? true : (stryCov_9fa48("1853", "1854", "1855"), (stryMutAct_9fa48("1857") ? activeTab === 'bar' || chartData.length > 0 : stryMutAct_9fa48("1856") ? true : (stryCov_9fa48("1856", "1857"), (stryMutAct_9fa48("1859") ? activeTab !== 'bar' : stryMutAct_9fa48("1858") ? true : (stryCov_9fa48("1858", "1859"), activeTab === (stryMutAct_9fa48("1860") ? "" : (stryCov_9fa48("1860"), 'bar')))) && (stryMutAct_9fa48("1863") ? chartData.length <= 0 : stryMutAct_9fa48("1862") ? chartData.length >= 0 : stryMutAct_9fa48("1861") ? true : (stryCov_9fa48("1861", "1862", "1863"), chartData.length > 0)))) && <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData} margin={stryMutAct_9fa48("1864") ? {} : (stryCov_9fa48("1864"), {
            top: 20,
            right: 30,
            left: 20,
            bottom: 80
          })}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-light)" vertical={stryMutAct_9fa48("1865") ? true : (stryCov_9fa48("1865"), false)} />
              <XAxis dataKey="name" tick={stryMutAct_9fa48("1866") ? {} : (stryCov_9fa48("1866"), {
              fill: stryMutAct_9fa48("1867") ? "" : (stryCov_9fa48("1867"), 'var(--text-muted)'),
              fontSize: 11,
              fontWeight: 500
            })} angle={stryMutAct_9fa48("1868") ? +35 : (stryCov_9fa48("1868"), -35)} textAnchor="end" height={80} />
              <YAxis tick={stryMutAct_9fa48("1869") ? {} : (stryCov_9fa48("1869"), {
              fill: stryMutAct_9fa48("1870") ? "" : (stryCov_9fa48("1870"), 'var(--text-muted)'),
              fontSize: 11,
              fontWeight: 500
            })} tickFormatter={formatTick} axisLine={stryMutAct_9fa48("1871") ? true : (stryCov_9fa48("1871"), false)} tickLine={stryMutAct_9fa48("1872") ? true : (stryCov_9fa48("1872"), false)} />
              <Tooltip contentStyle={stryMutAct_9fa48("1873") ? {} : (stryCov_9fa48("1873"), {
              background: stryMutAct_9fa48("1874") ? "" : (stryCov_9fa48("1874"), 'var(--bg-navy)'),
              border: stryMutAct_9fa48("1875") ? "" : (stryCov_9fa48("1875"), 'none'),
              borderRadius: stryMutAct_9fa48("1876") ? "" : (stryCov_9fa48("1876"), 'var(--radius-md)'),
              boxShadow: stryMutAct_9fa48("1877") ? "" : (stryCov_9fa48("1877"), 'var(--shadow-lg)'),
              color: stryMutAct_9fa48("1878") ? "" : (stryCov_9fa48("1878"), 'white')
            })} itemStyle={stryMutAct_9fa48("1879") ? {} : (stryCov_9fa48("1879"), {
              color: stryMutAct_9fa48("1880") ? "" : (stryCov_9fa48("1880"), 'white')
            })} formatter={stryMutAct_9fa48("1881") ? () => undefined : (stryCov_9fa48("1881"), value => stryMutAct_9fa48("1882") ? [] : (stryCov_9fa48("1882"), [formatNumber(value), stryMutAct_9fa48("1883") ? "Stryker was here!" : (stryCov_9fa48("1883"), '')]))} />
              <Legend verticalAlign="top" height={36} iconType="circle" />
              {stryMutAct_9fa48("1884") ? numericCols.map((col, idx) => <Bar key={col} dataKey={col} fill={CHART_COLORS[idx % CHART_COLORS.length]} radius={[4, 4, 0, 0]} barSize={24} />) : (stryCov_9fa48("1884"), numericCols.slice(0, 4).map(stryMutAct_9fa48("1885") ? () => undefined : (stryCov_9fa48("1885"), (col, idx) => <Bar key={col} dataKey={col} fill={CHART_COLORS[stryMutAct_9fa48("1886") ? idx * CHART_COLORS.length : (stryCov_9fa48("1886"), idx % CHART_COLORS.length)]} radius={stryMutAct_9fa48("1887") ? [] : (stryCov_9fa48("1887"), [4, 4, 0, 0])} barSize={24} />)))}
            </BarChart>
          </ResponsiveContainer>)}

        {stryMutAct_9fa48("1890") ? activeTab === 'line' && chartData.length > 0 || <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={chartData} margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 80
          }}>
              <defs>
                {CHART_COLORS.map((color, idx) => <linearGradient key={idx} id={`grad-${idx}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={color} stopOpacity={0.2} />
                    <stop offset="95%" stopColor={color} stopOpacity={0} />
                  </linearGradient>)}
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-light)" vertical={false} />
              <XAxis dataKey="name" tick={{
              fill: 'var(--text-muted)',
              fontSize: 11,
              fontWeight: 500
            }} angle={-35} textAnchor="end" height={80} />
              <YAxis tick={{
              fill: 'var(--text-muted)',
              fontSize: 11,
              fontWeight: 500
            }} tickFormatter={formatTick} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{
              background: 'var(--bg-navy)',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-lg)',
              color: 'white'
            }} itemStyle={{
              color: 'white'
            }} formatter={value => [formatNumber(value), '']} />
              <Legend verticalAlign="top" height={36} iconType="circle" />
              {numericCols.slice(0, 4).map((col, idx) => <Area key={col} type="monotone" dataKey={col} stroke={CHART_COLORS[idx % CHART_COLORS.length]} fill={`url(#grad-${idx % CHART_COLORS.length})`} strokeWidth={3} dot={{
              r: 4,
              strokeWidth: 2,
              fill: 'white'
            }} />)}
            </AreaChart>
          </ResponsiveContainer> : stryMutAct_9fa48("1889") ? false : stryMutAct_9fa48("1888") ? true : (stryCov_9fa48("1888", "1889", "1890"), (stryMutAct_9fa48("1892") ? activeTab === 'line' || chartData.length > 0 : stryMutAct_9fa48("1891") ? true : (stryCov_9fa48("1891", "1892"), (stryMutAct_9fa48("1894") ? activeTab !== 'line' : stryMutAct_9fa48("1893") ? true : (stryCov_9fa48("1893", "1894"), activeTab === (stryMutAct_9fa48("1895") ? "" : (stryCov_9fa48("1895"), 'line')))) && (stryMutAct_9fa48("1898") ? chartData.length <= 0 : stryMutAct_9fa48("1897") ? chartData.length >= 0 : stryMutAct_9fa48("1896") ? true : (stryCov_9fa48("1896", "1897", "1898"), chartData.length > 0)))) && <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={chartData} margin={stryMutAct_9fa48("1899") ? {} : (stryCov_9fa48("1899"), {
            top: 20,
            right: 30,
            left: 20,
            bottom: 80
          })}>
              <defs>
                {CHART_COLORS.map(stryMutAct_9fa48("1900") ? () => undefined : (stryCov_9fa48("1900"), (color, idx) => <linearGradient key={idx} id={stryMutAct_9fa48("1901") ? `` : (stryCov_9fa48("1901"), `grad-${idx}`)} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={color} stopOpacity={0.2} />
                    <stop offset="95%" stopColor={color} stopOpacity={0} />
                  </linearGradient>))}
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-light)" vertical={stryMutAct_9fa48("1902") ? true : (stryCov_9fa48("1902"), false)} />
              <XAxis dataKey="name" tick={stryMutAct_9fa48("1903") ? {} : (stryCov_9fa48("1903"), {
              fill: stryMutAct_9fa48("1904") ? "" : (stryCov_9fa48("1904"), 'var(--text-muted)'),
              fontSize: 11,
              fontWeight: 500
            })} angle={stryMutAct_9fa48("1905") ? +35 : (stryCov_9fa48("1905"), -35)} textAnchor="end" height={80} />
              <YAxis tick={stryMutAct_9fa48("1906") ? {} : (stryCov_9fa48("1906"), {
              fill: stryMutAct_9fa48("1907") ? "" : (stryCov_9fa48("1907"), 'var(--text-muted)'),
              fontSize: 11,
              fontWeight: 500
            })} tickFormatter={formatTick} axisLine={stryMutAct_9fa48("1908") ? true : (stryCov_9fa48("1908"), false)} tickLine={stryMutAct_9fa48("1909") ? true : (stryCov_9fa48("1909"), false)} />
              <Tooltip contentStyle={stryMutAct_9fa48("1910") ? {} : (stryCov_9fa48("1910"), {
              background: stryMutAct_9fa48("1911") ? "" : (stryCov_9fa48("1911"), 'var(--bg-navy)'),
              border: stryMutAct_9fa48("1912") ? "" : (stryCov_9fa48("1912"), 'none'),
              borderRadius: stryMutAct_9fa48("1913") ? "" : (stryCov_9fa48("1913"), 'var(--radius-md)'),
              boxShadow: stryMutAct_9fa48("1914") ? "" : (stryCov_9fa48("1914"), 'var(--shadow-lg)'),
              color: stryMutAct_9fa48("1915") ? "" : (stryCov_9fa48("1915"), 'white')
            })} itemStyle={stryMutAct_9fa48("1916") ? {} : (stryCov_9fa48("1916"), {
              color: stryMutAct_9fa48("1917") ? "" : (stryCov_9fa48("1917"), 'white')
            })} formatter={stryMutAct_9fa48("1918") ? () => undefined : (stryCov_9fa48("1918"), value => stryMutAct_9fa48("1919") ? [] : (stryCov_9fa48("1919"), [formatNumber(value), stryMutAct_9fa48("1920") ? "Stryker was here!" : (stryCov_9fa48("1920"), '')]))} />
              <Legend verticalAlign="top" height={36} iconType="circle" />
              {stryMutAct_9fa48("1921") ? numericCols.map((col, idx) => <Area key={col} type="monotone" dataKey={col} stroke={CHART_COLORS[idx % CHART_COLORS.length]} fill={`url(#grad-${idx % CHART_COLORS.length})`} strokeWidth={3} dot={{
              r: 4,
              strokeWidth: 2,
              fill: 'white'
            }} />) : (stryCov_9fa48("1921"), numericCols.slice(0, 4).map(stryMutAct_9fa48("1922") ? () => undefined : (stryCov_9fa48("1922"), (col, idx) => <Area key={col} type="monotone" dataKey={col} stroke={CHART_COLORS[stryMutAct_9fa48("1923") ? idx * CHART_COLORS.length : (stryCov_9fa48("1923"), idx % CHART_COLORS.length)]} fill={stryMutAct_9fa48("1924") ? `` : (stryCov_9fa48("1924"), `url(#grad-${stryMutAct_9fa48("1925") ? idx * CHART_COLORS.length : (stryCov_9fa48("1925"), idx % CHART_COLORS.length)})`)} strokeWidth={3} dot={stryMutAct_9fa48("1926") ? {} : (stryCov_9fa48("1926"), {
              r: 4,
              strokeWidth: 2,
              fill: stryMutAct_9fa48("1927") ? "" : (stryCov_9fa48("1927"), 'white')
            })} />)))}
            </AreaChart>
          </ResponsiveContainer>)}

        {stryMutAct_9fa48("1930") ? activeTab === 'pie' && pieData.length > 0 || <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" innerRadius={80} outerRadius={140} paddingAngle={4} dataKey="value" label={({
              name,
              percent
            }) => `${name} (${(percent * 100).toFixed(0)}%)`}>
                {pieData.map((_, idx) => <Cell key={idx} fill={CHART_COLORS[idx % CHART_COLORS.length]} stroke="rgba(255,255,255,0.2)" />)}
              </Pie>
              <Tooltip contentStyle={{
              background: 'var(--bg-navy)',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-lg)',
              color: 'white'
            }} formatter={value => [formatNumber(value), '']} />
            </PieChart>
          </ResponsiveContainer> : stryMutAct_9fa48("1929") ? false : stryMutAct_9fa48("1928") ? true : (stryCov_9fa48("1928", "1929", "1930"), (stryMutAct_9fa48("1932") ? activeTab === 'pie' || pieData.length > 0 : stryMutAct_9fa48("1931") ? true : (stryCov_9fa48("1931", "1932"), (stryMutAct_9fa48("1934") ? activeTab !== 'pie' : stryMutAct_9fa48("1933") ? true : (stryCov_9fa48("1933", "1934"), activeTab === (stryMutAct_9fa48("1935") ? "" : (stryCov_9fa48("1935"), 'pie')))) && (stryMutAct_9fa48("1938") ? pieData.length <= 0 : stryMutAct_9fa48("1937") ? pieData.length >= 0 : stryMutAct_9fa48("1936") ? true : (stryCov_9fa48("1936", "1937", "1938"), pieData.length > 0)))) && <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" innerRadius={80} outerRadius={140} paddingAngle={4} dataKey="value" label={stryMutAct_9fa48("1939") ? () => undefined : (stryCov_9fa48("1939"), ({
              name,
              percent
            }) => stryMutAct_9fa48("1940") ? `` : (stryCov_9fa48("1940"), `${name} (${(stryMutAct_9fa48("1941") ? percent / 100 : (stryCov_9fa48("1941"), percent * 100)).toFixed(0)}%)`))}>
                {pieData.map(stryMutAct_9fa48("1942") ? () => undefined : (stryCov_9fa48("1942"), (_, idx) => <Cell key={idx} fill={CHART_COLORS[stryMutAct_9fa48("1943") ? idx * CHART_COLORS.length : (stryCov_9fa48("1943"), idx % CHART_COLORS.length)]} stroke="rgba(255,255,255,0.2)" />))}
              </Pie>
              <Tooltip contentStyle={stryMutAct_9fa48("1944") ? {} : (stryCov_9fa48("1944"), {
              background: stryMutAct_9fa48("1945") ? "" : (stryCov_9fa48("1945"), 'var(--bg-navy)'),
              border: stryMutAct_9fa48("1946") ? "" : (stryCov_9fa48("1946"), 'none'),
              borderRadius: stryMutAct_9fa48("1947") ? "" : (stryCov_9fa48("1947"), 'var(--radius-md)'),
              boxShadow: stryMutAct_9fa48("1948") ? "" : (stryCov_9fa48("1948"), 'var(--shadow-lg)'),
              color: stryMutAct_9fa48("1949") ? "" : (stryCov_9fa48("1949"), 'white')
            })} formatter={stryMutAct_9fa48("1950") ? () => undefined : (stryCov_9fa48("1950"), value => stryMutAct_9fa48("1951") ? [] : (stryCov_9fa48("1951"), [formatNumber(value), stryMutAct_9fa48("1952") ? "Stryker was here!" : (stryCov_9fa48("1952"), '')]))} />
            </PieChart>
          </ResponsiveContainer>)}

        {stryMutAct_9fa48("1955") ? chartData.length === 0 || <div className="d-flex items-center justify-center" style={{
          height: '400px',
          color: 'var(--text-muted)'
        }}>
            <p>Not enough quantitative data to generate visualizations.</p>
          </div> : stryMutAct_9fa48("1954") ? false : stryMutAct_9fa48("1953") ? true : (stryCov_9fa48("1953", "1954", "1955"), (stryMutAct_9fa48("1957") ? chartData.length !== 0 : stryMutAct_9fa48("1956") ? true : (stryCov_9fa48("1956", "1957"), chartData.length === 0)) && <div className="d-flex items-center justify-center" style={stryMutAct_9fa48("1958") ? {} : (stryCov_9fa48("1958"), {
          height: stryMutAct_9fa48("1959") ? "" : (stryCov_9fa48("1959"), '400px'),
          color: stryMutAct_9fa48("1960") ? "" : (stryCov_9fa48("1960"), 'var(--text-muted)')
        })}>
            <p>Not enough quantitative data to generate visualizations.</p>
          </div>)}
      </div>
    </div>;
  }
}
function formatTick(val) {
  if (stryMutAct_9fa48("1961")) {
    {}
  } else {
    stryCov_9fa48("1961");
    if (stryMutAct_9fa48("1965") ? Math.abs(val) < 1e9 : stryMutAct_9fa48("1964") ? Math.abs(val) > 1e9 : stryMutAct_9fa48("1963") ? false : stryMutAct_9fa48("1962") ? true : (stryCov_9fa48("1962", "1963", "1964", "1965"), Math.abs(val) >= 1e9)) return stryMutAct_9fa48("1966") ? `` : (stryCov_9fa48("1966"), `${(stryMutAct_9fa48("1967") ? val * 1e9 : (stryCov_9fa48("1967"), val / 1e9)).toFixed(1)}B`);
    if (stryMutAct_9fa48("1971") ? Math.abs(val) < 1e6 : stryMutAct_9fa48("1970") ? Math.abs(val) > 1e6 : stryMutAct_9fa48("1969") ? false : stryMutAct_9fa48("1968") ? true : (stryCov_9fa48("1968", "1969", "1970", "1971"), Math.abs(val) >= 1e6)) return stryMutAct_9fa48("1972") ? `` : (stryCov_9fa48("1972"), `${(stryMutAct_9fa48("1973") ? val * 1e6 : (stryCov_9fa48("1973"), val / 1e6)).toFixed(1)}M`);
    if (stryMutAct_9fa48("1977") ? Math.abs(val) < 1e3 : stryMutAct_9fa48("1976") ? Math.abs(val) > 1e3 : stryMutAct_9fa48("1975") ? false : stryMutAct_9fa48("1974") ? true : (stryCov_9fa48("1974", "1975", "1976", "1977"), Math.abs(val) >= 1e3)) return stryMutAct_9fa48("1978") ? `` : (stryCov_9fa48("1978"), `${(stryMutAct_9fa48("1979") ? val * 1e3 : (stryCov_9fa48("1979"), val / 1e3)).toFixed(1)}K`);
    return val.toFixed(0);
  }
}
function formatNumber(val) {
  if (stryMutAct_9fa48("1980")) {
    {}
  } else {
    stryCov_9fa48("1980");
    if (stryMutAct_9fa48("1983") ? typeof val === 'number' : stryMutAct_9fa48("1982") ? false : stryMutAct_9fa48("1981") ? true : (stryCov_9fa48("1981", "1982", "1983"), typeof val !== (stryMutAct_9fa48("1984") ? "" : (stryCov_9fa48("1984"), 'number')))) return val;
    return val.toLocaleString(stryMutAct_9fa48("1985") ? "" : (stryCov_9fa48("1985"), 'en-US'), stryMutAct_9fa48("1986") ? {} : (stryCov_9fa48("1986"), {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }));
  }
}