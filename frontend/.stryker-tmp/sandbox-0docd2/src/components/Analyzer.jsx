// @ts-nocheck
import React from 'react';
import { Hash, Cpu, LayoutPanelLeft } from 'lucide-react';
import KPICards from './KPICards';
import TrendChart from './TrendChart';
import AISummary from './AISummary';
import RiskCards from './RiskCards';
import Recommendations from './Recommendations';
import DataPreview from './DataPreview';

export default function Analyzer({ result }) {
  if (!result) return null;

  const { summary, kpis, raw_data, column_headers, recommendations, risks, trends, statement_type, parsing_mode } = result;

  return (
    <div className="analyzer-result fade-in slide-up" style={{ paddingTop: 'var(--space-md)' }}>
      <header className="page-header mb-xl">
        <div className="d-flex items-center gap-2 mb-xs">
          <LayoutPanelLeft className="text-accent" size={16} />
          <span className="page-header__eyebrow">PERFORMANCE INDEX / Q1 2024</span>
        </div>
        <h1 className="page-header__title">
          Financial Performance <span className="page-header__accent">Intelligence Overview.</span>
        </h1>
        
        <div className="page-header__meta d-flex items-center gap-6" style={{ marginTop: '32px' }}>
          <div className="d-flex items-center gap-2 text-secondary" style={{ fontSize: '13px', fontWeight: 600 }}>
             <Hash size={14} className="text-muted" />
             <span>ID: {statement_type?.toUpperCase() || 'FG-PRO-24'}</span>
          </div>
          <div className="d-flex items-center gap-2 text-secondary" style={{ fontSize: '13px', fontWeight: 600 }}>
             <Cpu size={14} className="text-muted" />
             <span>ENGINE: {parsing_mode || 'STANDARD'} v2.1</span>
          </div>
        </div>
      </header>

      {/* 2. KPI Cards Row */}
      <KPICards kpis={kpis} />

      {/* 3. Main Intelligent Grid */}
      <div className="grid-cols-12 mb-xl">
        <div className="col-span-8">
          <TrendChart rawData={raw_data} columns={column_headers} trends={trends} />
          {/* AI Narrative Integration */}
          <AISummary summary={summary} />
        </div>
        
        <div className="col-span-4 d-flex flex-column gap-6">
          {risks && risks.length > 0 && <RiskCards risks={risks} />}
          {recommendations && recommendations.length > 0 && <Recommendations recommendations={recommendations} />}
        </div>
      </div>

      {/* 6. Data Preview */}
      <div className="col-span-12">
        <DataPreview data={raw_data} columns={column_headers} statementType={statement_type} />
      </div>
    </div>
  );
}
