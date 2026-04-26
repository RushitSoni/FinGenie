// @ts-nocheck
import React from 'react';
import { TrendingUp, TrendingDown, Minus, Activity } from 'lucide-react';

export default function KPICards({ kpis }) {
  if (!kpis || kpis.length === 0) return null;

  return (
    <div className="fade-in slide-up mb-xl">
      <div className="section-heading">
        <Activity className="text-accent" size={24} />
        <h2 className="section-heading__label">Institutional Performance KPIs</h2>
      </div>

      <div className="kpi-grid-refined">
        {kpis.map((kpi, idx) => {
          const isUp = kpi.trend === 'up';
          const isDown = kpi.trend === 'down';
          const TrendIcon = isUp ? TrendingUp : isDown ? TrendingDown : Minus;
          const trendClass = isUp ? 'text-emerald' : isDown ? 'text-rose' : 'text-muted';
          
          return (
            <div
              key={idx}
              className="card-light hover-lift"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="d-flex justify-between items-start mb-sm">
                 <div className="sub-label mb-0">{kpi.name}</div>
                 <div className={trendClass}>
                   <TrendIcon size={18} strokeWidth={3} />
                 </div>
              </div>
              
              <div className="metric-big mb-xs">
                {kpi.formatted_value || kpi.value}
              </div>
              
              <div className="text-secondary" style={{ fontSize: '13px', lineHeight: 1.5 }}>
                {kpi.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
