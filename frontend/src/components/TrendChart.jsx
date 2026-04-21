import React, { useState } from 'react';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart
} from 'recharts';
import { BarChart2, TrendingUp, PieChart as PieIcon, LineChart as LineIcon, Activity } from 'lucide-react';

// Color system tied to CSS variables
const CHART_COLORS = [
  'var(--chart-1)',
  'var(--chart-2)',
  'var(--chart-3)',
  'var(--chart-4)',
  'var(--chart-5)',
];

export default function TrendChart({ rawData, columns, trends }) {
  const [activeTab, setActiveTab] = useState('bar');

  if (!rawData || rawData.length === 0) return null;

  // Prepare chart data
  const numericCols = columns.filter((_, idx) => idx > 0);
  const labelCol = columns[0];

  const chartData = rawData
    .slice(0, 15)
    .filter(row => numericCols.some(col => typeof row[col] === 'number'))
    .map(row => {
      const item = { name: String(row[labelCol] || '').substring(0, 25) };
      numericCols.forEach(col => {
        if (typeof row[col] === 'number') item[col] = row[col];
      });
      return item;
    })
    .filter(item => Object.keys(item).length > 1);

  const pieCol = numericCols[numericCols.length - 1];
  const pieData = chartData
    .filter(d => d[pieCol] && d[pieCol] > 0)
    .slice(0, 8)
    .map(d => ({ name: d.name, value: Math.abs(d[pieCol]) }));

  const tabs = [
    { key: 'bar', label: 'Comparison', Icon: BarChart2 },
    { key: 'line', label: 'Trends', Icon: TrendingUp },
    { key: 'pie', label: 'Composition', Icon: PieIcon },
  ];

  return (
    <div className="card-light fade-in hover-lift mb-xl">
      <div className="d-flex justify-between items-center mb-lg">
        <div className="section-heading mb-0">
          <Activity className="text-secondary" size={20} />
          <h2 className="section-heading__label">Quantitative Visualizations</h2>
        </div>
        <div className="nav-links" style={{ padding: '4px' }}>
          {tabs.map(({ key, label, Icon }) => (
            <button
              key={key}
              className={`nav-item ${activeTab === key ? 'active' : ''}`}
              onClick={() => setActiveTab(key)}
              style={{ padding: '6px 12px', fontSize: '12px' }}
            >
              <div className="d-flex items-center gap-2">
                <Icon size={14} />
                <span>{label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="chart-container" style={{ minHeight: '400px' }}>
        {activeTab === 'bar' && chartData.length > 0 && (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-light)" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fill: 'var(--text-muted)', fontSize: 11, fontWeight: 500 }}
                angle={-35}
                textAnchor="end"
                height={80}
              />
              <YAxis 
                tick={{ fill: 'var(--text-muted)', fontSize: 11, fontWeight: 500 }} 
                tickFormatter={formatTick} 
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{ 
                  background: 'var(--bg-navy)', 
                  border: 'none', 
                  borderRadius: 'var(--radius-md)', 
                  boxShadow: 'var(--shadow-lg)',
                  color: 'white' 
                }}
                itemStyle={{ color: 'white' }}
                formatter={(value) => [formatNumber(value), '']}
              />
              <Legend verticalAlign="top" height={36} iconType="circle" />
              {numericCols.slice(0, 4).map((col, idx) => (
                <Bar key={col} dataKey={col} fill={CHART_COLORS[idx % CHART_COLORS.length]} radius={[4, 4, 0, 0]} barSize={24} />
              ))}
            </BarChart>
          </ResponsiveContainer>
        )}

        {activeTab === 'line' && chartData.length > 0 && (
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
              <defs>
                {CHART_COLORS.map((color, idx) => (
                  <linearGradient key={idx} id={`grad-${idx}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={color} stopOpacity={0.2} />
                    <stop offset="95%" stopColor={color} stopOpacity={0} />
                  </linearGradient>
                ))}
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-light)" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fill: 'var(--text-muted)', fontSize: 11, fontWeight: 500 }}
                angle={-35}
                textAnchor="end"
                height={80}
              />
              <YAxis 
                tick={{ fill: 'var(--text-muted)', fontSize: 11, fontWeight: 500 }} 
                tickFormatter={formatTick}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{ 
                  background: 'var(--bg-navy)', 
                  border: 'none', 
                  borderRadius: 'var(--radius-md)', 
                  boxShadow: 'var(--shadow-lg)',
                  color: 'white' 
                }}
                itemStyle={{ color: 'white' }}
                formatter={(value) => [formatNumber(value), '']}
              />
              <Legend verticalAlign="top" height={36} iconType="circle" />
              {numericCols.slice(0, 4).map((col, idx) => (
                <Area
                  key={col}
                  type="monotone"
                  dataKey={col}
                  stroke={CHART_COLORS[idx % CHART_COLORS.length]}
                  fill={`url(#grad-${idx % CHART_COLORS.length})`}
                  strokeWidth={3}
                  dot={{ r: 4, strokeWidth: 2, fill: 'white' }}
                />
              ))}
            </AreaChart>
          </ResponsiveContainer>
        )}

        {activeTab === 'pie' && pieData.length > 0 && (
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={140}
                paddingAngle={4}
                dataKey="value"
                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
              >
                {pieData.map((_, idx) => (
                  <Cell key={idx} fill={CHART_COLORS[idx % CHART_COLORS.length]} stroke="rgba(255,255,255,0.2)" />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ 
                  background: 'var(--bg-navy)', 
                  border: 'none', 
                  borderRadius: 'var(--radius-md)', 
                  boxShadow: 'var(--shadow-lg)',
                  color: 'white' 
                }}
                formatter={(value) => [formatNumber(value), '']}
              />
            </PieChart>
          </ResponsiveContainer>
        )}

        {chartData.length === 0 && (
          <div className="d-flex items-center justify-center" style={{ height: '400px', color: 'var(--text-muted)' }}>
            <p>Not enough quantitative data to generate visualizations.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function formatTick(val) {
  if (Math.abs(val) >= 1e9) return `${(val / 1e9).toFixed(1)}B`;
  if (Math.abs(val) >= 1e6) return `${(val / 1e6).toFixed(1)}M`;
  if (Math.abs(val) >= 1e3) return `${(val / 1e3).toFixed(1)}K`;
  return val.toFixed(0);
}

function formatNumber(val) {
  if (typeof val !== 'number') return val;
  return val.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
}
