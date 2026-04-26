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
  if (stryMutAct_9fa48("378")) {
    {}
  } else {
    stryCov_9fa48("378");
    const [isExpanded, setIsExpanded] = useState(stryMutAct_9fa48("379") ? true : (stryCov_9fa48("379"), false));
    if (stryMutAct_9fa48("382") ? !data && data.length === 0 : stryMutAct_9fa48("381") ? false : stryMutAct_9fa48("380") ? true : (stryCov_9fa48("380", "381", "382"), (stryMutAct_9fa48("383") ? data : (stryCov_9fa48("383"), !data)) || (stryMutAct_9fa48("385") ? data.length !== 0 : stryMutAct_9fa48("384") ? false : (stryCov_9fa48("384", "385"), data.length === 0)))) return null;
    const displayData = isExpanded ? data : stryMutAct_9fa48("386") ? data : (stryCov_9fa48("386"), data.slice(0, 8));
    return <div className="card-light fade-in hover-lift mb-xl" style={stryMutAct_9fa48("387") ? {} : (stryCov_9fa48("387"), {
      overflow: stryMutAct_9fa48("388") ? "" : (stryCov_9fa48("388"), 'hidden'),
      padding: 0
    })}>
      <div className="d-flex justify-between items-center" style={stryMutAct_9fa48("389") ? {} : (stryCov_9fa48("389"), {
        padding: stryMutAct_9fa48("390") ? "" : (stryCov_9fa48("390"), 'var(--space-md)'),
        cursor: stryMutAct_9fa48("391") ? "" : (stryCov_9fa48("391"), 'pointer'),
        borderBottom: stryMutAct_9fa48("392") ? "" : (stryCov_9fa48("392"), '1px solid var(--border-light)')
      })} onClick={stryMutAct_9fa48("393") ? () => undefined : (stryCov_9fa48("393"), () => setIsExpanded(stryMutAct_9fa48("394") ? isExpanded : (stryCov_9fa48("394"), !isExpanded)))}>
        <div className="section-heading mb-0">
          <Table className="text-secondary" size={20} />
          <h2 className="section-heading__label">Raw Data Ledger</h2>
          {stryMutAct_9fa48("397") ? statementType || <span className="hero-badge" style={{
            fontSize: '10px',
            marginLeft: '12px'
          }}>
              {statementType}
            </span> : stryMutAct_9fa48("396") ? false : stryMutAct_9fa48("395") ? true : (stryCov_9fa48("395", "396", "397"), statementType && <span className="hero-badge" style={stryMutAct_9fa48("398") ? {} : (stryCov_9fa48("398"), {
            fontSize: stryMutAct_9fa48("399") ? "" : (stryCov_9fa48("399"), '10px'),
            marginLeft: stryMutAct_9fa48("400") ? "" : (stryCov_9fa48("400"), '12px')
          })}>
              {statementType}
            </span>)}
        </div>
        <button className="btn-secondary d-flex items-center gap-2">
          {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          <span>{isExpanded ? stryMutAct_9fa48("401") ? "" : (stryCov_9fa48("401"), 'Collapse') : stryMutAct_9fa48("402") ? `` : (stryCov_9fa48("402"), `Show All (${data.length} rows)`)}</span>
        </button>
      </div>
      
      <div className="custom-scrollbar" style={stryMutAct_9fa48("403") ? {} : (stryCov_9fa48("403"), {
        overflowX: stryMutAct_9fa48("404") ? "" : (stryCov_9fa48("404"), 'auto'),
        maxHeight: isExpanded ? stryMutAct_9fa48("405") ? "" : (stryCov_9fa48("405"), '600px') : stryMutAct_9fa48("406") ? "" : (stryCov_9fa48("406"), 'none')
      })}>
        <table className="custom-table">
          <thead>
            <tr>
              {columns.map(stryMutAct_9fa48("407") ? () => undefined : (stryCov_9fa48("407"), (col, i) => <th key={i} style={stryMutAct_9fa48("408") ? {} : (stryCov_9fa48("408"), {
                textAlign: (stryMutAct_9fa48("412") ? i <= 0 : stryMutAct_9fa48("411") ? i >= 0 : stryMutAct_9fa48("410") ? false : stryMutAct_9fa48("409") ? true : (stryCov_9fa48("409", "410", "411", "412"), i > 0)) ? stryMutAct_9fa48("413") ? "" : (stryCov_9fa48("413"), 'right') : stryMutAct_9fa48("414") ? "" : (stryCov_9fa48("414"), 'left')
              })}>{col}</th>))}
            </tr>
          </thead>
          <tbody>
            {displayData.map(stryMutAct_9fa48("415") ? () => undefined : (stryCov_9fa48("415"), (row, rowIdx) => <tr key={rowIdx}>
                {columns.map(stryMutAct_9fa48("416") ? () => undefined : (stryCov_9fa48("416"), (col, colIdx) => <td key={colIdx} style={stryMutAct_9fa48("417") ? {} : (stryCov_9fa48("417"), {
                textAlign: (stryMutAct_9fa48("421") ? colIdx <= 0 : stryMutAct_9fa48("420") ? colIdx >= 0 : stryMutAct_9fa48("419") ? false : stryMutAct_9fa48("418") ? true : (stryCov_9fa48("418", "419", "420", "421"), colIdx > 0)) ? stryMutAct_9fa48("422") ? "" : (stryCov_9fa48("422"), 'right') : stryMutAct_9fa48("423") ? "" : (stryCov_9fa48("423"), 'left'),
                fontWeight: (stryMutAct_9fa48("427") ? colIdx <= 0 : stryMutAct_9fa48("426") ? colIdx >= 0 : stryMutAct_9fa48("425") ? false : stryMutAct_9fa48("424") ? true : (stryCov_9fa48("424", "425", "426", "427"), colIdx > 0)) ? 700 : 400
              })}>
                    {formatCell(row[col], stryMutAct_9fa48("431") ? colIdx <= 0 : stryMutAct_9fa48("430") ? colIdx >= 0 : stryMutAct_9fa48("429") ? false : stryMutAct_9fa48("428") ? true : (stryCov_9fa48("428", "429", "430", "431"), colIdx > 0))}
                  </td>))}
              </tr>))}
          </tbody>
        </table>
      </div>
      
      {stryMutAct_9fa48("434") ? !isExpanded && data.length > 8 || <div className="text-center" style={{
        padding: '12px',
        background: 'var(--bg-blue-light)',
        color: 'var(--accent-blue)',
        fontSize: '12px',
        fontWeight: 700,
        cursor: 'pointer'
      }} onClick={() => setIsExpanded(true)}>
          + {data.length - 8} MORE RECORDS
        </div> : stryMutAct_9fa48("433") ? false : stryMutAct_9fa48("432") ? true : (stryCov_9fa48("432", "433", "434"), (stryMutAct_9fa48("436") ? !isExpanded || data.length > 8 : stryMutAct_9fa48("435") ? true : (stryCov_9fa48("435", "436"), (stryMutAct_9fa48("437") ? isExpanded : (stryCov_9fa48("437"), !isExpanded)) && (stryMutAct_9fa48("440") ? data.length <= 8 : stryMutAct_9fa48("439") ? data.length >= 8 : stryMutAct_9fa48("438") ? true : (stryCov_9fa48("438", "439", "440"), data.length > 8)))) && <div className="text-center" style={stryMutAct_9fa48("441") ? {} : (stryCov_9fa48("441"), {
        padding: stryMutAct_9fa48("442") ? "" : (stryCov_9fa48("442"), '12px'),
        background: stryMutAct_9fa48("443") ? "" : (stryCov_9fa48("443"), 'var(--bg-blue-light)'),
        color: stryMutAct_9fa48("444") ? "" : (stryCov_9fa48("444"), 'var(--accent-blue)'),
        fontSize: stryMutAct_9fa48("445") ? "" : (stryCov_9fa48("445"), '12px'),
        fontWeight: 700,
        cursor: stryMutAct_9fa48("446") ? "" : (stryCov_9fa48("446"), 'pointer')
      })} onClick={stryMutAct_9fa48("447") ? () => undefined : (stryCov_9fa48("447"), () => setIsExpanded(stryMutAct_9fa48("448") ? false : (stryCov_9fa48("448"), true)))}>
          + {stryMutAct_9fa48("449") ? data.length + 8 : (stryCov_9fa48("449"), data.length - 8)} MORE RECORDS
        </div>)}
    </div>;
  }
}
function formatCell(value, isNumeric) {
  if (stryMutAct_9fa48("450")) {
    {}
  } else {
    stryCov_9fa48("450");
    if (stryMutAct_9fa48("453") ? (value === null || value === undefined) && value === '' : stryMutAct_9fa48("452") ? false : stryMutAct_9fa48("451") ? true : (stryCov_9fa48("451", "452", "453"), (stryMutAct_9fa48("455") ? value === null && value === undefined : stryMutAct_9fa48("454") ? false : (stryCov_9fa48("454", "455"), (stryMutAct_9fa48("457") ? value !== null : stryMutAct_9fa48("456") ? false : (stryCov_9fa48("456", "457"), value === null)) || (stryMutAct_9fa48("459") ? value !== undefined : stryMutAct_9fa48("458") ? false : (stryCov_9fa48("458", "459"), value === undefined)))) || (stryMutAct_9fa48("461") ? value !== '' : stryMutAct_9fa48("460") ? false : (stryCov_9fa48("460", "461"), value === (stryMutAct_9fa48("462") ? "Stryker was here!" : (stryCov_9fa48("462"), '')))))) return stryMutAct_9fa48("463") ? "" : (stryCov_9fa48("463"), '—');
    if (stryMutAct_9fa48("466") ? isNumeric || typeof value === 'number' : stryMutAct_9fa48("465") ? false : stryMutAct_9fa48("464") ? true : (stryCov_9fa48("464", "465", "466"), isNumeric && (stryMutAct_9fa48("468") ? typeof value !== 'number' : stryMutAct_9fa48("467") ? true : (stryCov_9fa48("467", "468"), typeof value === (stryMutAct_9fa48("469") ? "" : (stryCov_9fa48("469"), 'number')))))) {
      if (stryMutAct_9fa48("470")) {
        {}
      } else {
        stryCov_9fa48("470");
        return value.toLocaleString(stryMutAct_9fa48("471") ? "" : (stryCov_9fa48("471"), 'en-US'), stryMutAct_9fa48("472") ? {} : (stryCov_9fa48("472"), {
          minimumFractionDigits: 0,
          maximumFractionDigits: 2
        }));
      }
    }
    return String(value);
  }
}