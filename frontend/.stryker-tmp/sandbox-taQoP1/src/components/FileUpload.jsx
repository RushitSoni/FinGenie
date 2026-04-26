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
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileText, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
const ACCEPTED_TYPES = stryMutAct_9fa48("561") ? {} : (stryCov_9fa48("561"), {
  'application/pdf': stryMutAct_9fa48("562") ? [] : (stryCov_9fa48("562"), [stryMutAct_9fa48("563") ? "" : (stryCov_9fa48("563"), '.pdf')]),
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': stryMutAct_9fa48("564") ? [] : (stryCov_9fa48("564"), [stryMutAct_9fa48("565") ? "" : (stryCov_9fa48("565"), '.xlsx')]),
  'application/vnd.ms-excel': stryMutAct_9fa48("566") ? [] : (stryCov_9fa48("566"), [stryMutAct_9fa48("567") ? "" : (stryCov_9fa48("567"), '.xls')]),
  'text/csv': stryMutAct_9fa48("568") ? [] : (stryCov_9fa48("568"), [stryMutAct_9fa48("569") ? "" : (stryCov_9fa48("569"), '.csv')])
});
export default function FileUpload({
  onFileSelect,
  isLoading,
  error
}) {
  if (stryMutAct_9fa48("570")) {
    {}
  } else {
    stryCov_9fa48("570");
    const [selectedFile, setSelectedFile] = useState(null);
    const onDrop = useCallback(acceptedFiles => {
      if (stryMutAct_9fa48("571")) {
        {}
      } else {
        stryCov_9fa48("571");
        if (stryMutAct_9fa48("575") ? acceptedFiles.length <= 0 : stryMutAct_9fa48("574") ? acceptedFiles.length >= 0 : stryMutAct_9fa48("573") ? false : stryMutAct_9fa48("572") ? true : (stryCov_9fa48("572", "573", "574", "575"), acceptedFiles.length > 0)) {
          if (stryMutAct_9fa48("576")) {
            {}
          } else {
            stryCov_9fa48("576");
            const file = acceptedFiles[0];
            setSelectedFile(file);
            onFileSelect(file);
          }
        }
      }
    }, stryMutAct_9fa48("577") ? [] : (stryCov_9fa48("577"), [onFileSelect]));
    const {
      getRootProps,
      getInputProps,
      isDragActive,
      isDragReject
    } = useDropzone(stryMutAct_9fa48("578") ? {} : (stryCov_9fa48("578"), {
      onDrop,
      accept: ACCEPTED_TYPES,
      maxFiles: 1,
      maxSize: stryMutAct_9fa48("579") ? 200 * 1024 / 1024 : (stryCov_9fa48("579"), (stryMutAct_9fa48("580") ? 200 / 1024 : (stryCov_9fa48("580"), 200 * 1024)) * 1024),
      disabled: isLoading
    }));
    return <div className="upload-container mb-xl">
      <div {...getRootProps()} className={stryMutAct_9fa48("581") ? `` : (stryCov_9fa48("581"), `upload-dropzone ${isDragActive ? stryMutAct_9fa48("582") ? "" : (stryCov_9fa48("582"), 'active') : stryMutAct_9fa48("583") ? "Stryker was here!" : (stryCov_9fa48("583"), '')} ${isDragReject ? stryMutAct_9fa48("584") ? "" : (stryCov_9fa48("584"), 'reject') : stryMutAct_9fa48("585") ? "Stryker was here!" : (stryCov_9fa48("585"), '')} ${selectedFile ? stryMutAct_9fa48("586") ? "" : (stryCov_9fa48("586"), 'has-file') : stryMutAct_9fa48("587") ? "Stryker was here!" : (stryCov_9fa48("587"), '')} ${isLoading ? stryMutAct_9fa48("588") ? "" : (stryCov_9fa48("588"), 'loading') : stryMutAct_9fa48("589") ? "Stryker was here!" : (stryCov_9fa48("589"), '')}`)}>
        <input {...getInputProps()} />
        
        {stryMutAct_9fa48("592") ? isLoading || <div className="scanning-line" /> : stryMutAct_9fa48("591") ? false : stryMutAct_9fa48("590") ? true : (stryCov_9fa48("590", "591", "592"), isLoading && <div className="scanning-line" />)}

        {isLoading ? <div className="upload-prompt flex-column items-center slide-up">
            <Loader2 className="text-accent mb-md animate-spin" size={40} />
            <h2 className="section-heading__label mb-xs">Neural Synthesis</h2>
            <p className="text-secondary">Analyzing institutional datasets...</p>
          </div> : selectedFile ? <div className="upload-success flex-column items-center slide-up">
            <CheckCircle className="text-accent mb-sm" size={48} />
            <h3 className="section-heading__label mb-xs">Document Secured</h3>
            <p className="text-primary font-bold">{selectedFile.name}</p>
            <p className="text-muted" style={stryMutAct_9fa48("593") ? {} : (stryCov_9fa48("593"), {
            fontSize: stryMutAct_9fa48("594") ? "" : (stryCov_9fa48("594"), '12px')
          })}>
              {(stryMutAct_9fa48("595") ? selectedFile.size / 1024 * 1024 : (stryCov_9fa48("595"), (stryMutAct_9fa48("596") ? selectedFile.size * 1024 : (stryCov_9fa48("596"), selectedFile.size / 1024)) / 1024)).toFixed(2)} MB · Ready for intelligence audit
            </p>
            <button className="btn-secondary mt-md">Replace File</button>
          </div> : <div className="upload-prompt flex-column items-center">
            <div className="upload-icon-wrapper mb-md" style={stryMutAct_9fa48("597") ? {} : (stryCov_9fa48("597"), {
            background: stryMutAct_9fa48("598") ? "" : (stryCov_9fa48("598"), 'var(--bg-blue-light)'),
            padding: stryMutAct_9fa48("599") ? "" : (stryCov_9fa48("599"), '20px'),
            borderRadius: stryMutAct_9fa48("600") ? "" : (stryCov_9fa48("600"), '50%')
          })}>
              <Upload className="text-accent" size={32} />
            </div>
            <h2 className="section-heading__label mb-xs">Document Intelligence</h2>
            <p className="text-secondary mb-lg">Drag & drop PDF, Excel, or CSV</p>
            <div className="d-flex items-center gap-4 text-muted" style={stryMutAct_9fa48("601") ? {} : (stryCov_9fa48("601"), {
            fontSize: stryMutAct_9fa48("602") ? "" : (stryCov_9fa48("602"), '11px'),
            fontWeight: 600
          })}>
              <span className="d-flex items-center gap-2"><FileText size={14} /> PDF / Excel</span>
              <span className="d-flex items-center gap-2"><FileText size={14} /> CSV</span>
            </div>
          </div>}
      </div>

      {stryMutAct_9fa48("605") ? error || <div className="error-badge mt-md slide-up d-flex items-start gap-2" style={{
        color: 'var(--accent-rose)',
        background: 'rgba(225, 29, 72, 0.05)',
        padding: '16px',
        borderRadius: 'var(--radius-md)',
        border: '1px solid rgba(225, 29, 72, 0.1)',
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '1.5',
        textAlign: 'left'
      }}>
          <AlertCircle size={18} style={{
          flexShrink: 0,
          marginTop: '2px'
        }} />
          <span>{error}</span>
        </div> : stryMutAct_9fa48("604") ? false : stryMutAct_9fa48("603") ? true : (stryCov_9fa48("603", "604", "605"), error && <div className="error-badge mt-md slide-up d-flex items-start gap-2" style={stryMutAct_9fa48("606") ? {} : (stryCov_9fa48("606"), {
        color: stryMutAct_9fa48("607") ? "" : (stryCov_9fa48("607"), 'var(--accent-rose)'),
        background: stryMutAct_9fa48("608") ? "" : (stryCov_9fa48("608"), 'rgba(225, 29, 72, 0.05)'),
        padding: stryMutAct_9fa48("609") ? "" : (stryCov_9fa48("609"), '16px'),
        borderRadius: stryMutAct_9fa48("610") ? "" : (stryCov_9fa48("610"), 'var(--radius-md)'),
        border: stryMutAct_9fa48("611") ? "" : (stryCov_9fa48("611"), '1px solid rgba(225, 29, 72, 0.1)'),
        fontSize: stryMutAct_9fa48("612") ? "" : (stryCov_9fa48("612"), '14px'),
        fontWeight: 500,
        lineHeight: stryMutAct_9fa48("613") ? "" : (stryCov_9fa48("613"), '1.5'),
        textAlign: stryMutAct_9fa48("614") ? "" : (stryCov_9fa48("614"), 'left')
      })}>
          <AlertCircle size={18} style={stryMutAct_9fa48("615") ? {} : (stryCov_9fa48("615"), {
          flexShrink: 0,
          marginTop: stryMutAct_9fa48("616") ? "" : (stryCov_9fa48("616"), '2px')
        })} />
          <span>{error}</span>
        </div>)}
    </div>;
  }
}