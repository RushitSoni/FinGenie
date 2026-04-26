// @ts-nocheck
import React, { useState } from 'react';
import { Table, ChevronDown, ChevronUp, FileSpreadsheet } from 'lucide-react';

export default function DataPreview({ data, columns, statementType }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!data || data.length === 0) return null;

  const displayData = isExpanded ? data : data.slice(0, 8);

  return (
    <div className="card-light fade-in hover-lift mb-xl" style={{ overflow: 'hidden', padding: 0 }}>
      <div 
        className="d-flex justify-between items-center" 
        style={{ padding: 'var(--space-md)', cursor: 'pointer', borderBottom: '1px solid var(--border-light)' }} 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="section-heading mb-0">
          <Table className="text-secondary" size={20} />
          <h2 className="section-heading__label">Raw Data Ledger</h2>
          {statementType && (
            <span className="hero-badge" style={{ fontSize: '10px', marginLeft: '12px' }}>
              {statementType}
            </span>
          )}
        </div>
        <button className="btn-secondary d-flex items-center gap-2">
          {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          <span>{isExpanded ? 'Collapse' : `Show All (${data.length} rows)`}</span>
        </button>
      </div>
      
      <div className="custom-scrollbar" style={{ overflowX: 'auto', maxHeight: isExpanded ? '600px' : 'none' }}>
        <table className="custom-table">
          <thead>
            <tr>
              {columns.map((col, i) => (
                <th key={i} style={{ textAlign: i > 0 ? 'right' : 'left' }}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {displayData.map((row, rowIdx) => (
              <tr key={rowIdx}>
                {columns.map((col, colIdx) => (
                  <td key={colIdx} style={{ textAlign: colIdx > 0 ? 'right' : 'left', fontWeight: colIdx > 0 ? 700 : 400 }}>
                    {formatCell(row[col], colIdx > 0)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {!isExpanded && data.length > 8 && (
        <div 
          className="text-center" 
          style={{ padding: '12px', background: 'var(--bg-blue-light)', color: 'var(--accent-blue)', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}
          onClick={() => setIsExpanded(true)}
        >
          + {data.length - 8} MORE RECORDS
        </div>
      )}
    </div>
  );
}

function formatCell(value, isNumeric) {
  if (value === null || value === undefined || value === '') return '—';
  if (isNumeric && typeof value === 'number') {
    return value.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
  }
  return String(value);
}
