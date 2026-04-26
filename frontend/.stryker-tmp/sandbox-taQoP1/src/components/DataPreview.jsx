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
import { Table, ChevronDown, ChevronUp, FileSpreadsheet } from 'lucide-react';
export default function DataPreview({
  data,
  columns,
  statementType
}) {
  if (stryMutAct_9fa48("155")) {
    {}
  } else {
    stryCov_9fa48("155");
    const [isExpanded, setIsExpanded] = useState(stryMutAct_9fa48("156") ? true : (stryCov_9fa48("156"), false));
    if (stryMutAct_9fa48("159") ? !data && data.length === 0 : stryMutAct_9fa48("158") ? false : stryMutAct_9fa48("157") ? true : (stryCov_9fa48("157", "158", "159"), (stryMutAct_9fa48("160") ? data : (stryCov_9fa48("160"), !data)) || (stryMutAct_9fa48("162") ? data.length !== 0 : stryMutAct_9fa48("161") ? false : (stryCov_9fa48("161", "162"), data.length === 0)))) return null;
    const displayData = isExpanded ? data : stryMutAct_9fa48("163") ? data : (stryCov_9fa48("163"), data.slice(0, 8));
    return <div className="card-light fade-in hover-lift mb-xl" style={stryMutAct_9fa48("164") ? {} : (stryCov_9fa48("164"), {
      overflow: stryMutAct_9fa48("165") ? "" : (stryCov_9fa48("165"), 'hidden'),
      padding: 0
    })}>
      <div className="d-flex justify-between items-center" style={stryMutAct_9fa48("166") ? {} : (stryCov_9fa48("166"), {
        padding: stryMutAct_9fa48("167") ? "" : (stryCov_9fa48("167"), 'var(--space-md)'),
        cursor: stryMutAct_9fa48("168") ? "" : (stryCov_9fa48("168"), 'pointer'),
        borderBottom: stryMutAct_9fa48("169") ? "" : (stryCov_9fa48("169"), '1px solid var(--border-light)')
      })} onClick={stryMutAct_9fa48("170") ? () => undefined : (stryCov_9fa48("170"), () => setIsExpanded(stryMutAct_9fa48("171") ? isExpanded : (stryCov_9fa48("171"), !isExpanded)))}>
        <div className="section-heading mb-0">
          <Table className="text-secondary" size={20} />
          <h2 className="section-heading__label">Raw Data Ledger</h2>
          {stryMutAct_9fa48("174") ? statementType || <span className="hero-badge" style={{
            fontSize: '10px',
            marginLeft: '12px'
          }}>
              {statementType}
            </span> : stryMutAct_9fa48("173") ? false : stryMutAct_9fa48("172") ? true : (stryCov_9fa48("172", "173", "174"), statementType && <span className="hero-badge" style={stryMutAct_9fa48("175") ? {} : (stryCov_9fa48("175"), {
            fontSize: stryMutAct_9fa48("176") ? "" : (stryCov_9fa48("176"), '10px'),
            marginLeft: stryMutAct_9fa48("177") ? "" : (stryCov_9fa48("177"), '12px')
          })}>
              {statementType}
            </span>)}
        </div>
        <button className="btn-secondary d-flex items-center gap-2">
          {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          <span>{isExpanded ? stryMutAct_9fa48("178") ? "" : (stryCov_9fa48("178"), 'Collapse') : stryMutAct_9fa48("179") ? `` : (stryCov_9fa48("179"), `Show All (${data.length} rows)`)}</span>
        </button>
      </div>
      
      <div className="custom-scrollbar" style={stryMutAct_9fa48("180") ? {} : (stryCov_9fa48("180"), {
        overflowX: stryMutAct_9fa48("181") ? "" : (stryCov_9fa48("181"), 'auto'),
        maxHeight: isExpanded ? stryMutAct_9fa48("182") ? "" : (stryCov_9fa48("182"), '600px') : stryMutAct_9fa48("183") ? "" : (stryCov_9fa48("183"), 'none')
      })}>
        <table className="custom-table">
          <thead>
            <tr>
              {columns.map(stryMutAct_9fa48("184") ? () => undefined : (stryCov_9fa48("184"), (col, i) => <th key={i} style={stryMutAct_9fa48("185") ? {} : (stryCov_9fa48("185"), {
                textAlign: (stryMutAct_9fa48("189") ? i <= 0 : stryMutAct_9fa48("188") ? i >= 0 : stryMutAct_9fa48("187") ? false : stryMutAct_9fa48("186") ? true : (stryCov_9fa48("186", "187", "188", "189"), i > 0)) ? stryMutAct_9fa48("190") ? "" : (stryCov_9fa48("190"), 'right') : stryMutAct_9fa48("191") ? "" : (stryCov_9fa48("191"), 'left')
              })}>{col}</th>))}
            </tr>
          </thead>
          <tbody>
            {displayData.map(stryMutAct_9fa48("192") ? () => undefined : (stryCov_9fa48("192"), (row, rowIdx) => <tr key={rowIdx}>
                {columns.map(stryMutAct_9fa48("193") ? () => undefined : (stryCov_9fa48("193"), (col, colIdx) => <td key={colIdx} style={stryMutAct_9fa48("194") ? {} : (stryCov_9fa48("194"), {
                textAlign: (stryMutAct_9fa48("198") ? colIdx <= 0 : stryMutAct_9fa48("197") ? colIdx >= 0 : stryMutAct_9fa48("196") ? false : stryMutAct_9fa48("195") ? true : (stryCov_9fa48("195", "196", "197", "198"), colIdx > 0)) ? stryMutAct_9fa48("199") ? "" : (stryCov_9fa48("199"), 'right') : stryMutAct_9fa48("200") ? "" : (stryCov_9fa48("200"), 'left'),
                fontWeight: (stryMutAct_9fa48("204") ? colIdx <= 0 : stryMutAct_9fa48("203") ? colIdx >= 0 : stryMutAct_9fa48("202") ? false : stryMutAct_9fa48("201") ? true : (stryCov_9fa48("201", "202", "203", "204"), colIdx > 0)) ? 700 : 400
              })}>
                    {formatCell(row[col], stryMutAct_9fa48("208") ? colIdx <= 0 : stryMutAct_9fa48("207") ? colIdx >= 0 : stryMutAct_9fa48("206") ? false : stryMutAct_9fa48("205") ? true : (stryCov_9fa48("205", "206", "207", "208"), colIdx > 0))}
                  </td>))}
              </tr>))}
          </tbody>
        </table>
      </div>
      
      {stryMutAct_9fa48("211") ? !isExpanded && data.length > 8 || <div className="text-center" style={{
        padding: '12px',
        background: 'var(--bg-blue-light)',
        color: 'var(--accent-blue)',
        fontSize: '12px',
        fontWeight: 700,
        cursor: 'pointer'
      }} onClick={() => setIsExpanded(true)}>
          + {data.length - 8} MORE RECORDS
        </div> : stryMutAct_9fa48("210") ? false : stryMutAct_9fa48("209") ? true : (stryCov_9fa48("209", "210", "211"), (stryMutAct_9fa48("213") ? !isExpanded || data.length > 8 : stryMutAct_9fa48("212") ? true : (stryCov_9fa48("212", "213"), (stryMutAct_9fa48("214") ? isExpanded : (stryCov_9fa48("214"), !isExpanded)) && (stryMutAct_9fa48("217") ? data.length <= 8 : stryMutAct_9fa48("216") ? data.length >= 8 : stryMutAct_9fa48("215") ? true : (stryCov_9fa48("215", "216", "217"), data.length > 8)))) && <div className="text-center" style={stryMutAct_9fa48("218") ? {} : (stryCov_9fa48("218"), {
        padding: stryMutAct_9fa48("219") ? "" : (stryCov_9fa48("219"), '12px'),
        background: stryMutAct_9fa48("220") ? "" : (stryCov_9fa48("220"), 'var(--bg-blue-light)'),
        color: stryMutAct_9fa48("221") ? "" : (stryCov_9fa48("221"), 'var(--accent-blue)'),
        fontSize: stryMutAct_9fa48("222") ? "" : (stryCov_9fa48("222"), '12px'),
        fontWeight: 700,
        cursor: stryMutAct_9fa48("223") ? "" : (stryCov_9fa48("223"), 'pointer')
      })} onClick={stryMutAct_9fa48("224") ? () => undefined : (stryCov_9fa48("224"), () => setIsExpanded(stryMutAct_9fa48("225") ? false : (stryCov_9fa48("225"), true)))}>
          + {stryMutAct_9fa48("226") ? data.length + 8 : (stryCov_9fa48("226"), data.length - 8)} MORE RECORDS
        </div>)}
    </div>;
  }
}
function formatCell(value, isNumeric) {
  if (stryMutAct_9fa48("227")) {
    {}
  } else {
    stryCov_9fa48("227");
    if (stryMutAct_9fa48("230") ? (value === null || value === undefined) && value === '' : stryMutAct_9fa48("229") ? false : stryMutAct_9fa48("228") ? true : (stryCov_9fa48("228", "229", "230"), (stryMutAct_9fa48("232") ? value === null && value === undefined : stryMutAct_9fa48("231") ? false : (stryCov_9fa48("231", "232"), (stryMutAct_9fa48("234") ? value !== null : stryMutAct_9fa48("233") ? false : (stryCov_9fa48("233", "234"), value === null)) || (stryMutAct_9fa48("236") ? value !== undefined : stryMutAct_9fa48("235") ? false : (stryCov_9fa48("235", "236"), value === undefined)))) || (stryMutAct_9fa48("238") ? value !== '' : stryMutAct_9fa48("237") ? false : (stryCov_9fa48("237", "238"), value === (stryMutAct_9fa48("239") ? "Stryker was here!" : (stryCov_9fa48("239"), '')))))) return stryMutAct_9fa48("240") ? "" : (stryCov_9fa48("240"), '—');
    if (stryMutAct_9fa48("243") ? isNumeric || typeof value === 'number' : stryMutAct_9fa48("242") ? false : stryMutAct_9fa48("241") ? true : (stryCov_9fa48("241", "242", "243"), isNumeric && (stryMutAct_9fa48("245") ? typeof value !== 'number' : stryMutAct_9fa48("244") ? true : (stryCov_9fa48("244", "245"), typeof value === (stryMutAct_9fa48("246") ? "" : (stryCov_9fa48("246"), 'number')))))) {
      if (stryMutAct_9fa48("247")) {
        {}
      } else {
        stryCov_9fa48("247");
        return value.toLocaleString(stryMutAct_9fa48("248") ? "" : (stryCov_9fa48("248"), 'en-US'), stryMutAct_9fa48("249") ? {} : (stryCov_9fa48("249"), {
          minimumFractionDigits: 0,
          maximumFractionDigits: 2
        }));
      }
    }
    return String(value);
  }
}