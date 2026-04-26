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
  if (stryMutAct_9fa48("65")) {
    {}
  } else {
    stryCov_9fa48("65");
    if (stryMutAct_9fa48("68") ? false : stryMutAct_9fa48("67") ? true : stryMutAct_9fa48("66") ? result : (stryCov_9fa48("66", "67", "68"), !result)) return null;
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
    return <div className="analyzer-result fade-in slide-up" style={stryMutAct_9fa48("69") ? {} : (stryCov_9fa48("69"), {
      paddingTop: stryMutAct_9fa48("70") ? "" : (stryCov_9fa48("70"), 'var(--space-md)')
    })}>
      <header className="page-header mb-xl">
        <div className="d-flex items-center gap-2 mb-xs">
          <LayoutPanelLeft className="text-accent" size={16} />
          <span className="page-header__eyebrow">PERFORMANCE INDEX / Q1 2024</span>
        </div>
        <h1 className="page-header__title">
          Financial Performance <span className="page-header__accent">Intelligence Overview.</span>
        </h1>
        
        <div className="page-header__meta d-flex items-center gap-6" style={stryMutAct_9fa48("71") ? {} : (stryCov_9fa48("71"), {
          marginTop: stryMutAct_9fa48("72") ? "" : (stryCov_9fa48("72"), '32px')
        })}>
          <div className="d-flex items-center gap-2 text-secondary" style={stryMutAct_9fa48("73") ? {} : (stryCov_9fa48("73"), {
            fontSize: stryMutAct_9fa48("74") ? "" : (stryCov_9fa48("74"), '13px'),
            fontWeight: 600
          })}>
             <Hash size={14} className="text-muted" />
             <span>ID: {stryMutAct_9fa48("77") ? statement_type?.toUpperCase() && 'FG-PRO-24' : stryMutAct_9fa48("76") ? false : stryMutAct_9fa48("75") ? true : (stryCov_9fa48("75", "76", "77"), (stryMutAct_9fa48("79") ? statement_type.toUpperCase() : stryMutAct_9fa48("78") ? statement_type?.toLowerCase() : (stryCov_9fa48("78", "79"), statement_type?.toUpperCase())) || (stryMutAct_9fa48("80") ? "" : (stryCov_9fa48("80"), 'FG-PRO-24')))}</span>
          </div>
          <div className="d-flex items-center gap-2 text-secondary" style={stryMutAct_9fa48("81") ? {} : (stryCov_9fa48("81"), {
            fontSize: stryMutAct_9fa48("82") ? "" : (stryCov_9fa48("82"), '13px'),
            fontWeight: 600
          })}>
             <Cpu size={14} className="text-muted" />
             <span>ENGINE: {stryMutAct_9fa48("85") ? parsing_mode && 'STANDARD' : stryMutAct_9fa48("84") ? false : stryMutAct_9fa48("83") ? true : (stryCov_9fa48("83", "84", "85"), parsing_mode || (stryMutAct_9fa48("86") ? "" : (stryCov_9fa48("86"), 'STANDARD')))} v2.1</span>
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
          {stryMutAct_9fa48("89") ? risks && risks.length > 0 || <RiskCards risks={risks} /> : stryMutAct_9fa48("88") ? false : stryMutAct_9fa48("87") ? true : (stryCov_9fa48("87", "88", "89"), (stryMutAct_9fa48("91") ? risks || risks.length > 0 : stryMutAct_9fa48("90") ? true : (stryCov_9fa48("90", "91"), risks && (stryMutAct_9fa48("94") ? risks.length <= 0 : stryMutAct_9fa48("93") ? risks.length >= 0 : stryMutAct_9fa48("92") ? true : (stryCov_9fa48("92", "93", "94"), risks.length > 0)))) && <RiskCards risks={risks} />)}
          {stryMutAct_9fa48("97") ? recommendations && recommendations.length > 0 || <Recommendations recommendations={recommendations} /> : stryMutAct_9fa48("96") ? false : stryMutAct_9fa48("95") ? true : (stryCov_9fa48("95", "96", "97"), (stryMutAct_9fa48("99") ? recommendations || recommendations.length > 0 : stryMutAct_9fa48("98") ? true : (stryCov_9fa48("98", "99"), recommendations && (stryMutAct_9fa48("102") ? recommendations.length <= 0 : stryMutAct_9fa48("101") ? recommendations.length >= 0 : stryMutAct_9fa48("100") ? true : (stryCov_9fa48("100", "101", "102"), recommendations.length > 0)))) && <Recommendations recommendations={recommendations} />)}
        </div>
      </div>

      {/* 6. Data Preview */}
      <div className="col-span-12">
        <DataPreview data={raw_data} columns={column_headers} statementType={statement_type} />
      </div>
    </div>;
  }
}