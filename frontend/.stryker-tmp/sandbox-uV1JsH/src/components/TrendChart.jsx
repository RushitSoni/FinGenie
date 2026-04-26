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
const CHART_COLORS = stryMutAct_9fa48("1546") ? [] : (stryCov_9fa48("1546"), [stryMutAct_9fa48("1547") ? "" : (stryCov_9fa48("1547"), 'var(--chart-1)'), stryMutAct_9fa48("1548") ? "" : (stryCov_9fa48("1548"), 'var(--chart-2)'), stryMutAct_9fa48("1549") ? "" : (stryCov_9fa48("1549"), 'var(--chart-3)'), stryMutAct_9fa48("1550") ? "" : (stryCov_9fa48("1550"), 'var(--chart-4)'), stryMutAct_9fa48("1551") ? "" : (stryCov_9fa48("1551"), 'var(--chart-5)')]);
export default function TrendChart({
  rawData,
  columns,
  trends
}) {
  if (stryMutAct_9fa48("1552")) {
    {}
  } else {
    stryCov_9fa48("1552");
    const [activeTab, setActiveTab] = useState(stryMutAct_9fa48("1553") ? "" : (stryCov_9fa48("1553"), 'bar'));
    if (stryMutAct_9fa48("1556") ? !rawData && rawData.length === 0 : stryMutAct_9fa48("1555") ? false : stryMutAct_9fa48("1554") ? true : (stryCov_9fa48("1554", "1555", "1556"), (stryMutAct_9fa48("1557") ? rawData : (stryCov_9fa48("1557"), !rawData)) || (stryMutAct_9fa48("1559") ? rawData.length !== 0 : stryMutAct_9fa48("1558") ? false : (stryCov_9fa48("1558", "1559"), rawData.length === 0)))) return null;

    // Prepare chart data
    const numericCols = stryMutAct_9fa48("1560") ? columns : (stryCov_9fa48("1560"), columns.filter(stryMutAct_9fa48("1561") ? () => undefined : (stryCov_9fa48("1561"), (_, idx) => stryMutAct_9fa48("1565") ? idx <= 0 : stryMutAct_9fa48("1564") ? idx >= 0 : stryMutAct_9fa48("1563") ? false : stryMutAct_9fa48("1562") ? true : (stryCov_9fa48("1562", "1563", "1564", "1565"), idx > 0))));
    const labelCol = columns[0];
    const chartData = stryMutAct_9fa48("1568") ? rawData.filter(row => numericCols.some(col => typeof row[col] === 'number')).map(row => {
      const item = {
        name: String(row[labelCol] || '').substring(0, 25)
      };
      numericCols.forEach(col => {
        if (typeof row[col] === 'number') item[col] = row[col];
      });
      return item;
    }).filter(item => Object.keys(item).length > 1) : stryMutAct_9fa48("1567") ? rawData.slice(0, 15).map(row => {
      const item = {
        name: String(row[labelCol] || '').substring(0, 25)
      };
      numericCols.forEach(col => {
        if (typeof row[col] === 'number') item[col] = row[col];
      });
      return item;
    }).filter(item => Object.keys(item).length > 1) : stryMutAct_9fa48("1566") ? rawData.slice(0, 15).filter(row => numericCols.some(col => typeof row[col] === 'number')).map(row => {
      const item = {
        name: String(row[labelCol] || '').substring(0, 25)
      };
      numericCols.forEach(col => {
        if (typeof row[col] === 'number') item[col] = row[col];
      });
      return item;
    }) : (stryCov_9fa48("1566", "1567", "1568"), rawData.slice(0, 15).filter(stryMutAct_9fa48("1569") ? () => undefined : (stryCov_9fa48("1569"), row => stryMutAct_9fa48("1570") ? numericCols.every(col => typeof row[col] === 'number') : (stryCov_9fa48("1570"), numericCols.some(stryMutAct_9fa48("1571") ? () => undefined : (stryCov_9fa48("1571"), col => stryMutAct_9fa48("1574") ? typeof row[col] !== 'number' : stryMutAct_9fa48("1573") ? false : stryMutAct_9fa48("1572") ? true : (stryCov_9fa48("1572", "1573", "1574"), typeof row[col] === (stryMutAct_9fa48("1575") ? "" : (stryCov_9fa48("1575"), 'number')))))))).map(row => {
      if (stryMutAct_9fa48("1576")) {
        {}
      } else {
        stryCov_9fa48("1576");
        const item = stryMutAct_9fa48("1577") ? {} : (stryCov_9fa48("1577"), {
          name: stryMutAct_9fa48("1578") ? String(row[labelCol] || '') : (stryCov_9fa48("1578"), String(stryMutAct_9fa48("1581") ? row[labelCol] && '' : stryMutAct_9fa48("1580") ? false : stryMutAct_9fa48("1579") ? true : (stryCov_9fa48("1579", "1580", "1581"), row[labelCol] || (stryMutAct_9fa48("1582") ? "Stryker was here!" : (stryCov_9fa48("1582"), '')))).substring(0, 25))
        });
        numericCols.forEach(col => {
          if (stryMutAct_9fa48("1583")) {
            {}
          } else {
            stryCov_9fa48("1583");
            if (stryMutAct_9fa48("1586") ? typeof row[col] !== 'number' : stryMutAct_9fa48("1585") ? false : stryMutAct_9fa48("1584") ? true : (stryCov_9fa48("1584", "1585", "1586"), typeof row[col] === (stryMutAct_9fa48("1587") ? "" : (stryCov_9fa48("1587"), 'number')))) item[col] = row[col];
          }
        });
        return item;
      }
    }).filter(stryMutAct_9fa48("1588") ? () => undefined : (stryCov_9fa48("1588"), item => stryMutAct_9fa48("1592") ? Object.keys(item).length <= 1 : stryMutAct_9fa48("1591") ? Object.keys(item).length >= 1 : stryMutAct_9fa48("1590") ? false : stryMutAct_9fa48("1589") ? true : (stryCov_9fa48("1589", "1590", "1591", "1592"), Object.keys(item).length > 1))));
    const pieCol = numericCols[stryMutAct_9fa48("1593") ? numericCols.length + 1 : (stryCov_9fa48("1593"), numericCols.length - 1)];
    const pieData = stryMutAct_9fa48("1595") ? chartData.slice(0, 8).map(d => ({
      name: d.name,
      value: Math.abs(d[pieCol])
    })) : stryMutAct_9fa48("1594") ? chartData.filter(d => d[pieCol] && d[pieCol] > 0).map(d => ({
      name: d.name,
      value: Math.abs(d[pieCol])
    })) : (stryCov_9fa48("1594", "1595"), chartData.filter(stryMutAct_9fa48("1596") ? () => undefined : (stryCov_9fa48("1596"), d => stryMutAct_9fa48("1599") ? d[pieCol] || d[pieCol] > 0 : stryMutAct_9fa48("1598") ? false : stryMutAct_9fa48("1597") ? true : (stryCov_9fa48("1597", "1598", "1599"), d[pieCol] && (stryMutAct_9fa48("1602") ? d[pieCol] <= 0 : stryMutAct_9fa48("1601") ? d[pieCol] >= 0 : stryMutAct_9fa48("1600") ? true : (stryCov_9fa48("1600", "1601", "1602"), d[pieCol] > 0))))).slice(0, 8).map(stryMutAct_9fa48("1603") ? () => undefined : (stryCov_9fa48("1603"), d => stryMutAct_9fa48("1604") ? {} : (stryCov_9fa48("1604"), {
      name: d.name,
      value: Math.abs(d[pieCol])
    }))));
    const tabs = stryMutAct_9fa48("1605") ? [] : (stryCov_9fa48("1605"), [stryMutAct_9fa48("1606") ? {} : (stryCov_9fa48("1606"), {
      key: stryMutAct_9fa48("1607") ? "" : (stryCov_9fa48("1607"), 'bar'),
      label: stryMutAct_9fa48("1608") ? "" : (stryCov_9fa48("1608"), 'Comparison'),
      Icon: BarChart2
    }), stryMutAct_9fa48("1609") ? {} : (stryCov_9fa48("1609"), {
      key: stryMutAct_9fa48("1610") ? "" : (stryCov_9fa48("1610"), 'line'),
      label: stryMutAct_9fa48("1611") ? "" : (stryCov_9fa48("1611"), 'Trends'),
      Icon: TrendingUp
    }), stryMutAct_9fa48("1612") ? {} : (stryCov_9fa48("1612"), {
      key: stryMutAct_9fa48("1613") ? "" : (stryCov_9fa48("1613"), 'pie'),
      label: stryMutAct_9fa48("1614") ? "" : (stryCov_9fa48("1614"), 'Composition'),
      Icon: PieIcon
    })]);
    return <div className="card-light fade-in hover-lift mb-xl">
      <div className="d-flex justify-between items-center mb-lg">
        <div className="section-heading mb-0">
          <Activity className="text-secondary" size={20} />
          <h2 className="section-heading__label">Quantitative Visualizations</h2>
        </div>
        <div className="nav-links" style={stryMutAct_9fa48("1615") ? {} : (stryCov_9fa48("1615"), {
          padding: stryMutAct_9fa48("1616") ? "" : (stryCov_9fa48("1616"), '4px')
        })}>
          {tabs.map(stryMutAct_9fa48("1617") ? () => undefined : (stryCov_9fa48("1617"), ({
            key,
            label,
            Icon
          }) => <button key={key} className={stryMutAct_9fa48("1618") ? `` : (stryCov_9fa48("1618"), `nav-item ${(stryMutAct_9fa48("1621") ? activeTab !== key : stryMutAct_9fa48("1620") ? false : stryMutAct_9fa48("1619") ? true : (stryCov_9fa48("1619", "1620", "1621"), activeTab === key)) ? stryMutAct_9fa48("1622") ? "" : (stryCov_9fa48("1622"), 'active') : stryMutAct_9fa48("1623") ? "Stryker was here!" : (stryCov_9fa48("1623"), '')}`)} onClick={stryMutAct_9fa48("1624") ? () => undefined : (stryCov_9fa48("1624"), () => setActiveTab(key))} style={stryMutAct_9fa48("1625") ? {} : (stryCov_9fa48("1625"), {
            padding: stryMutAct_9fa48("1626") ? "" : (stryCov_9fa48("1626"), '6px 12px'),
            fontSize: stryMutAct_9fa48("1627") ? "" : (stryCov_9fa48("1627"), '12px')
          })}>
              <div className="d-flex items-center gap-2">
                <Icon size={14} />
                <span>{label}</span>
              </div>
            </button>))}
        </div>
      </div>

      <div className="chart-container" style={stryMutAct_9fa48("1628") ? {} : (stryCov_9fa48("1628"), {
        minHeight: stryMutAct_9fa48("1629") ? "" : (stryCov_9fa48("1629"), '400px')
      })}>
        {stryMutAct_9fa48("1632") ? activeTab === 'bar' && chartData.length > 0 || <ResponsiveContainer width="100%" height={400}>
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
          </ResponsiveContainer> : stryMutAct_9fa48("1631") ? false : stryMutAct_9fa48("1630") ? true : (stryCov_9fa48("1630", "1631", "1632"), (stryMutAct_9fa48("1634") ? activeTab === 'bar' || chartData.length > 0 : stryMutAct_9fa48("1633") ? true : (stryCov_9fa48("1633", "1634"), (stryMutAct_9fa48("1636") ? activeTab !== 'bar' : stryMutAct_9fa48("1635") ? true : (stryCov_9fa48("1635", "1636"), activeTab === (stryMutAct_9fa48("1637") ? "" : (stryCov_9fa48("1637"), 'bar')))) && (stryMutAct_9fa48("1640") ? chartData.length <= 0 : stryMutAct_9fa48("1639") ? chartData.length >= 0 : stryMutAct_9fa48("1638") ? true : (stryCov_9fa48("1638", "1639", "1640"), chartData.length > 0)))) && <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData} margin={stryMutAct_9fa48("1641") ? {} : (stryCov_9fa48("1641"), {
            top: 20,
            right: 30,
            left: 20,
            bottom: 80
          })}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-light)" vertical={stryMutAct_9fa48("1642") ? true : (stryCov_9fa48("1642"), false)} />
              <XAxis dataKey="name" tick={stryMutAct_9fa48("1643") ? {} : (stryCov_9fa48("1643"), {
              fill: stryMutAct_9fa48("1644") ? "" : (stryCov_9fa48("1644"), 'var(--text-muted)'),
              fontSize: 11,
              fontWeight: 500
            })} angle={stryMutAct_9fa48("1645") ? +35 : (stryCov_9fa48("1645"), -35)} textAnchor="end" height={80} />
              <YAxis tick={stryMutAct_9fa48("1646") ? {} : (stryCov_9fa48("1646"), {
              fill: stryMutAct_9fa48("1647") ? "" : (stryCov_9fa48("1647"), 'var(--text-muted)'),
              fontSize: 11,
              fontWeight: 500
            })} tickFormatter={formatTick} axisLine={stryMutAct_9fa48("1648") ? true : (stryCov_9fa48("1648"), false)} tickLine={stryMutAct_9fa48("1649") ? true : (stryCov_9fa48("1649"), false)} />
              <Tooltip contentStyle={stryMutAct_9fa48("1650") ? {} : (stryCov_9fa48("1650"), {
              background: stryMutAct_9fa48("1651") ? "" : (stryCov_9fa48("1651"), 'var(--bg-navy)'),
              border: stryMutAct_9fa48("1652") ? "" : (stryCov_9fa48("1652"), 'none'),
              borderRadius: stryMutAct_9fa48("1653") ? "" : (stryCov_9fa48("1653"), 'var(--radius-md)'),
              boxShadow: stryMutAct_9fa48("1654") ? "" : (stryCov_9fa48("1654"), 'var(--shadow-lg)'),
              color: stryMutAct_9fa48("1655") ? "" : (stryCov_9fa48("1655"), 'white')
            })} itemStyle={stryMutAct_9fa48("1656") ? {} : (stryCov_9fa48("1656"), {
              color: stryMutAct_9fa48("1657") ? "" : (stryCov_9fa48("1657"), 'white')
            })} formatter={stryMutAct_9fa48("1658") ? () => undefined : (stryCov_9fa48("1658"), value => stryMutAct_9fa48("1659") ? [] : (stryCov_9fa48("1659"), [formatNumber(value), stryMutAct_9fa48("1660") ? "Stryker was here!" : (stryCov_9fa48("1660"), '')]))} />
              <Legend verticalAlign="top" height={36} iconType="circle" />
              {stryMutAct_9fa48("1661") ? numericCols.map((col, idx) => <Bar key={col} dataKey={col} fill={CHART_COLORS[idx % CHART_COLORS.length]} radius={[4, 4, 0, 0]} barSize={24} />) : (stryCov_9fa48("1661"), numericCols.slice(0, 4).map(stryMutAct_9fa48("1662") ? () => undefined : (stryCov_9fa48("1662"), (col, idx) => <Bar key={col} dataKey={col} fill={CHART_COLORS[stryMutAct_9fa48("1663") ? idx * CHART_COLORS.length : (stryCov_9fa48("1663"), idx % CHART_COLORS.length)]} radius={stryMutAct_9fa48("1664") ? [] : (stryCov_9fa48("1664"), [4, 4, 0, 0])} barSize={24} />)))}
            </BarChart>
          </ResponsiveContainer>)}

        {stryMutAct_9fa48("1667") ? activeTab === 'line' && chartData.length > 0 || <ResponsiveContainer width="100%" height={400}>
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
          </ResponsiveContainer> : stryMutAct_9fa48("1666") ? false : stryMutAct_9fa48("1665") ? true : (stryCov_9fa48("1665", "1666", "1667"), (stryMutAct_9fa48("1669") ? activeTab === 'line' || chartData.length > 0 : stryMutAct_9fa48("1668") ? true : (stryCov_9fa48("1668", "1669"), (stryMutAct_9fa48("1671") ? activeTab !== 'line' : stryMutAct_9fa48("1670") ? true : (stryCov_9fa48("1670", "1671"), activeTab === (stryMutAct_9fa48("1672") ? "" : (stryCov_9fa48("1672"), 'line')))) && (stryMutAct_9fa48("1675") ? chartData.length <= 0 : stryMutAct_9fa48("1674") ? chartData.length >= 0 : stryMutAct_9fa48("1673") ? true : (stryCov_9fa48("1673", "1674", "1675"), chartData.length > 0)))) && <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={chartData} margin={stryMutAct_9fa48("1676") ? {} : (stryCov_9fa48("1676"), {
            top: 20,
            right: 30,
            left: 20,
            bottom: 80
          })}>
              <defs>
                {CHART_COLORS.map(stryMutAct_9fa48("1677") ? () => undefined : (stryCov_9fa48("1677"), (color, idx) => <linearGradient key={idx} id={stryMutAct_9fa48("1678") ? `` : (stryCov_9fa48("1678"), `grad-${idx}`)} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={color} stopOpacity={0.2} />
                    <stop offset="95%" stopColor={color} stopOpacity={0} />
                  </linearGradient>))}
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-light)" vertical={stryMutAct_9fa48("1679") ? true : (stryCov_9fa48("1679"), false)} />
              <XAxis dataKey="name" tick={stryMutAct_9fa48("1680") ? {} : (stryCov_9fa48("1680"), {
              fill: stryMutAct_9fa48("1681") ? "" : (stryCov_9fa48("1681"), 'var(--text-muted)'),
              fontSize: 11,
              fontWeight: 500
            })} angle={stryMutAct_9fa48("1682") ? +35 : (stryCov_9fa48("1682"), -35)} textAnchor="end" height={80} />
              <YAxis tick={stryMutAct_9fa48("1683") ? {} : (stryCov_9fa48("1683"), {
              fill: stryMutAct_9fa48("1684") ? "" : (stryCov_9fa48("1684"), 'var(--text-muted)'),
              fontSize: 11,
              fontWeight: 500
            })} tickFormatter={formatTick} axisLine={stryMutAct_9fa48("1685") ? true : (stryCov_9fa48("1685"), false)} tickLine={stryMutAct_9fa48("1686") ? true : (stryCov_9fa48("1686"), false)} />
              <Tooltip contentStyle={stryMutAct_9fa48("1687") ? {} : (stryCov_9fa48("1687"), {
              background: stryMutAct_9fa48("1688") ? "" : (stryCov_9fa48("1688"), 'var(--bg-navy)'),
              border: stryMutAct_9fa48("1689") ? "" : (stryCov_9fa48("1689"), 'none'),
              borderRadius: stryMutAct_9fa48("1690") ? "" : (stryCov_9fa48("1690"), 'var(--radius-md)'),
              boxShadow: stryMutAct_9fa48("1691") ? "" : (stryCov_9fa48("1691"), 'var(--shadow-lg)'),
              color: stryMutAct_9fa48("1692") ? "" : (stryCov_9fa48("1692"), 'white')
            })} itemStyle={stryMutAct_9fa48("1693") ? {} : (stryCov_9fa48("1693"), {
              color: stryMutAct_9fa48("1694") ? "" : (stryCov_9fa48("1694"), 'white')
            })} formatter={stryMutAct_9fa48("1695") ? () => undefined : (stryCov_9fa48("1695"), value => stryMutAct_9fa48("1696") ? [] : (stryCov_9fa48("1696"), [formatNumber(value), stryMutAct_9fa48("1697") ? "Stryker was here!" : (stryCov_9fa48("1697"), '')]))} />
              <Legend verticalAlign="top" height={36} iconType="circle" />
              {stryMutAct_9fa48("1698") ? numericCols.map((col, idx) => <Area key={col} type="monotone" dataKey={col} stroke={CHART_COLORS[idx % CHART_COLORS.length]} fill={`url(#grad-${idx % CHART_COLORS.length})`} strokeWidth={3} dot={{
              r: 4,
              strokeWidth: 2,
              fill: 'white'
            }} />) : (stryCov_9fa48("1698"), numericCols.slice(0, 4).map(stryMutAct_9fa48("1699") ? () => undefined : (stryCov_9fa48("1699"), (col, idx) => <Area key={col} type="monotone" dataKey={col} stroke={CHART_COLORS[stryMutAct_9fa48("1700") ? idx * CHART_COLORS.length : (stryCov_9fa48("1700"), idx % CHART_COLORS.length)]} fill={stryMutAct_9fa48("1701") ? `` : (stryCov_9fa48("1701"), `url(#grad-${stryMutAct_9fa48("1702") ? idx * CHART_COLORS.length : (stryCov_9fa48("1702"), idx % CHART_COLORS.length)})`)} strokeWidth={3} dot={stryMutAct_9fa48("1703") ? {} : (stryCov_9fa48("1703"), {
              r: 4,
              strokeWidth: 2,
              fill: stryMutAct_9fa48("1704") ? "" : (stryCov_9fa48("1704"), 'white')
            })} />)))}
            </AreaChart>
          </ResponsiveContainer>)}

        {stryMutAct_9fa48("1707") ? activeTab === 'pie' && pieData.length > 0 || <ResponsiveContainer width="100%" height={400}>
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
          </ResponsiveContainer> : stryMutAct_9fa48("1706") ? false : stryMutAct_9fa48("1705") ? true : (stryCov_9fa48("1705", "1706", "1707"), (stryMutAct_9fa48("1709") ? activeTab === 'pie' || pieData.length > 0 : stryMutAct_9fa48("1708") ? true : (stryCov_9fa48("1708", "1709"), (stryMutAct_9fa48("1711") ? activeTab !== 'pie' : stryMutAct_9fa48("1710") ? true : (stryCov_9fa48("1710", "1711"), activeTab === (stryMutAct_9fa48("1712") ? "" : (stryCov_9fa48("1712"), 'pie')))) && (stryMutAct_9fa48("1715") ? pieData.length <= 0 : stryMutAct_9fa48("1714") ? pieData.length >= 0 : stryMutAct_9fa48("1713") ? true : (stryCov_9fa48("1713", "1714", "1715"), pieData.length > 0)))) && <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" innerRadius={80} outerRadius={140} paddingAngle={4} dataKey="value" label={stryMutAct_9fa48("1716") ? () => undefined : (stryCov_9fa48("1716"), ({
              name,
              percent
            }) => stryMutAct_9fa48("1717") ? `` : (stryCov_9fa48("1717"), `${name} (${(stryMutAct_9fa48("1718") ? percent / 100 : (stryCov_9fa48("1718"), percent * 100)).toFixed(0)}%)`))}>
                {pieData.map(stryMutAct_9fa48("1719") ? () => undefined : (stryCov_9fa48("1719"), (_, idx) => <Cell key={idx} fill={CHART_COLORS[stryMutAct_9fa48("1720") ? idx * CHART_COLORS.length : (stryCov_9fa48("1720"), idx % CHART_COLORS.length)]} stroke="rgba(255,255,255,0.2)" />))}
              </Pie>
              <Tooltip contentStyle={stryMutAct_9fa48("1721") ? {} : (stryCov_9fa48("1721"), {
              background: stryMutAct_9fa48("1722") ? "" : (stryCov_9fa48("1722"), 'var(--bg-navy)'),
              border: stryMutAct_9fa48("1723") ? "" : (stryCov_9fa48("1723"), 'none'),
              borderRadius: stryMutAct_9fa48("1724") ? "" : (stryCov_9fa48("1724"), 'var(--radius-md)'),
              boxShadow: stryMutAct_9fa48("1725") ? "" : (stryCov_9fa48("1725"), 'var(--shadow-lg)'),
              color: stryMutAct_9fa48("1726") ? "" : (stryCov_9fa48("1726"), 'white')
            })} formatter={stryMutAct_9fa48("1727") ? () => undefined : (stryCov_9fa48("1727"), value => stryMutAct_9fa48("1728") ? [] : (stryCov_9fa48("1728"), [formatNumber(value), stryMutAct_9fa48("1729") ? "Stryker was here!" : (stryCov_9fa48("1729"), '')]))} />
            </PieChart>
          </ResponsiveContainer>)}

        {stryMutAct_9fa48("1732") ? chartData.length === 0 || <div className="d-flex items-center justify-center" style={{
          height: '400px',
          color: 'var(--text-muted)'
        }}>
            <p>Not enough quantitative data to generate visualizations.</p>
          </div> : stryMutAct_9fa48("1731") ? false : stryMutAct_9fa48("1730") ? true : (stryCov_9fa48("1730", "1731", "1732"), (stryMutAct_9fa48("1734") ? chartData.length !== 0 : stryMutAct_9fa48("1733") ? true : (stryCov_9fa48("1733", "1734"), chartData.length === 0)) && <div className="d-flex items-center justify-center" style={stryMutAct_9fa48("1735") ? {} : (stryCov_9fa48("1735"), {
          height: stryMutAct_9fa48("1736") ? "" : (stryCov_9fa48("1736"), '400px'),
          color: stryMutAct_9fa48("1737") ? "" : (stryCov_9fa48("1737"), 'var(--text-muted)')
        })}>
            <p>Not enough quantitative data to generate visualizations.</p>
          </div>)}
      </div>
    </div>;
  }
}
function formatTick(val) {
  if (stryMutAct_9fa48("1738")) {
    {}
  } else {
    stryCov_9fa48("1738");
    if (stryMutAct_9fa48("1742") ? Math.abs(val) < 1e9 : stryMutAct_9fa48("1741") ? Math.abs(val) > 1e9 : stryMutAct_9fa48("1740") ? false : stryMutAct_9fa48("1739") ? true : (stryCov_9fa48("1739", "1740", "1741", "1742"), Math.abs(val) >= 1e9)) return stryMutAct_9fa48("1743") ? `` : (stryCov_9fa48("1743"), `${(stryMutAct_9fa48("1744") ? val * 1e9 : (stryCov_9fa48("1744"), val / 1e9)).toFixed(1)}B`);
    if (stryMutAct_9fa48("1748") ? Math.abs(val) < 1e6 : stryMutAct_9fa48("1747") ? Math.abs(val) > 1e6 : stryMutAct_9fa48("1746") ? false : stryMutAct_9fa48("1745") ? true : (stryCov_9fa48("1745", "1746", "1747", "1748"), Math.abs(val) >= 1e6)) return stryMutAct_9fa48("1749") ? `` : (stryCov_9fa48("1749"), `${(stryMutAct_9fa48("1750") ? val * 1e6 : (stryCov_9fa48("1750"), val / 1e6)).toFixed(1)}M`);
    if (stryMutAct_9fa48("1754") ? Math.abs(val) < 1e3 : stryMutAct_9fa48("1753") ? Math.abs(val) > 1e3 : stryMutAct_9fa48("1752") ? false : stryMutAct_9fa48("1751") ? true : (stryCov_9fa48("1751", "1752", "1753", "1754"), Math.abs(val) >= 1e3)) return stryMutAct_9fa48("1755") ? `` : (stryCov_9fa48("1755"), `${(stryMutAct_9fa48("1756") ? val * 1e3 : (stryCov_9fa48("1756"), val / 1e3)).toFixed(1)}K`);
    return val.toFixed(0);
  }
}
function formatNumber(val) {
  if (stryMutAct_9fa48("1757")) {
    {}
  } else {
    stryCov_9fa48("1757");
    if (stryMutAct_9fa48("1760") ? typeof val === 'number' : stryMutAct_9fa48("1759") ? false : stryMutAct_9fa48("1758") ? true : (stryCov_9fa48("1758", "1759", "1760"), typeof val !== (stryMutAct_9fa48("1761") ? "" : (stryCov_9fa48("1761"), 'number')))) return val;
    return val.toLocaleString(stryMutAct_9fa48("1762") ? "" : (stryCov_9fa48("1762"), 'en-US'), stryMutAct_9fa48("1763") ? {} : (stryCov_9fa48("1763"), {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }));
  }
}