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
import { Hash, Cpu, LayoutPanelLeft } from 'lucide-react';
import KPICards from './KPICards';
import TrendChart from './TrendChart';
import AISummary from './AISummary';
import RiskCards from './RiskCards';
import Recommendations from './Recommendations';
import DataPreview from './DataPreview';
export default function Analyzer({
  result
}) {
  if (stryMutAct_9fa48("288")) {
    {}
  } else {
    stryCov_9fa48("288");
    if (stryMutAct_9fa48("291") ? false : stryMutAct_9fa48("290") ? true : stryMutAct_9fa48("289") ? result : (stryCov_9fa48("289", "290", "291"), !result)) return null;
    const {
      summary,
      kpis,
      raw_data,
      column_headers,
      recommendations,
      risks,
      trends,
      statement_type,
      parsing_mode
    } = result;
    return <div className="analyzer-result fade-in slide-up" style={stryMutAct_9fa48("292") ? {} : (stryCov_9fa48("292"), {
      paddingTop: stryMutAct_9fa48("293") ? "" : (stryCov_9fa48("293"), 'var(--space-md)')
    })}>
      <header className="page-header mb-xl">
        <div className="d-flex items-center gap-2 mb-xs">
          <LayoutPanelLeft className="text-accent" size={16} />
          <span className="page-header__eyebrow">PERFORMANCE INDEX / Q1 2024</span>
        </div>
        <h1 className="page-header__title">
          Financial Performance <span className="page-header__accent">Intelligence Overview.</span>
        </h1>
        
        <div className="page-header__meta d-flex items-center gap-6" style={stryMutAct_9fa48("294") ? {} : (stryCov_9fa48("294"), {
          marginTop: stryMutAct_9fa48("295") ? "" : (stryCov_9fa48("295"), '32px')
        })}>
          <div className="d-flex items-center gap-2 text-secondary" style={stryMutAct_9fa48("296") ? {} : (stryCov_9fa48("296"), {
            fontSize: stryMutAct_9fa48("297") ? "" : (stryCov_9fa48("297"), '13px'),
            fontWeight: 600
          })}>
             <Hash size={14} className="text-muted" />
             <span>ID: {stryMutAct_9fa48("300") ? statement_type?.toUpperCase() && 'FG-PRO-24' : stryMutAct_9fa48("299") ? false : stryMutAct_9fa48("298") ? true : (stryCov_9fa48("298", "299", "300"), (stryMutAct_9fa48("302") ? statement_type.toUpperCase() : stryMutAct_9fa48("301") ? statement_type?.toLowerCase() : (stryCov_9fa48("301", "302"), statement_type?.toUpperCase())) || (stryMutAct_9fa48("303") ? "" : (stryCov_9fa48("303"), 'FG-PRO-24')))}</span>
          </div>
          <div className="d-flex items-center gap-2 text-secondary" style={stryMutAct_9fa48("304") ? {} : (stryCov_9fa48("304"), {
            fontSize: stryMutAct_9fa48("305") ? "" : (stryCov_9fa48("305"), '13px'),
            fontWeight: 600
          })}>
             <Cpu size={14} className="text-muted" />
             <span>ENGINE: {stryMutAct_9fa48("308") ? parsing_mode && 'STANDARD' : stryMutAct_9fa48("307") ? false : stryMutAct_9fa48("306") ? true : (stryCov_9fa48("306", "307", "308"), parsing_mode || (stryMutAct_9fa48("309") ? "" : (stryCov_9fa48("309"), 'STANDARD')))} v2.1</span>
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
          {stryMutAct_9fa48("312") ? risks && risks.length > 0 || <RiskCards risks={risks} /> : stryMutAct_9fa48("311") ? false : stryMutAct_9fa48("310") ? true : (stryCov_9fa48("310", "311", "312"), (stryMutAct_9fa48("314") ? risks || risks.length > 0 : stryMutAct_9fa48("313") ? true : (stryCov_9fa48("313", "314"), risks && (stryMutAct_9fa48("317") ? risks.length <= 0 : stryMutAct_9fa48("316") ? risks.length >= 0 : stryMutAct_9fa48("315") ? true : (stryCov_9fa48("315", "316", "317"), risks.length > 0)))) && <RiskCards risks={risks} />)}
          {stryMutAct_9fa48("320") ? recommendations && recommendations.length > 0 || <Recommendations recommendations={recommendations} /> : stryMutAct_9fa48("319") ? false : stryMutAct_9fa48("318") ? true : (stryCov_9fa48("318", "319", "320"), (stryMutAct_9fa48("322") ? recommendations || recommendations.length > 0 : stryMutAct_9fa48("321") ? true : (stryCov_9fa48("321", "322"), recommendations && (stryMutAct_9fa48("325") ? recommendations.length <= 0 : stryMutAct_9fa48("324") ? recommendations.length >= 0 : stryMutAct_9fa48("323") ? true : (stryCov_9fa48("323", "324", "325"), recommendations.length > 0)))) && <Recommendations recommendations={recommendations} />)}
        </div>
      </div>

      {/* 6. Data Preview */}
      <div className="col-span-12">
        <DataPreview data={raw_data} columns={column_headers} statementType={statement_type} />
      </div>
    </div>;
  }
}