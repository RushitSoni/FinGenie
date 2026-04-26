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
const ACCEPTED_TYPES = stryMutAct_9fa48("784") ? {} : (stryCov_9fa48("784"), {
  'application/pdf': stryMutAct_9fa48("785") ? [] : (stryCov_9fa48("785"), [stryMutAct_9fa48("786") ? "" : (stryCov_9fa48("786"), '.pdf')]),
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': stryMutAct_9fa48("787") ? [] : (stryCov_9fa48("787"), [stryMutAct_9fa48("788") ? "" : (stryCov_9fa48("788"), '.xlsx')]),
  'application/vnd.ms-excel': stryMutAct_9fa48("789") ? [] : (stryCov_9fa48("789"), [stryMutAct_9fa48("790") ? "" : (stryCov_9fa48("790"), '.xls')]),
  'text/csv': stryMutAct_9fa48("791") ? [] : (stryCov_9fa48("791"), [stryMutAct_9fa48("792") ? "" : (stryCov_9fa48("792"), '.csv')])
});
export default function FileUpload({
  onFileSelect,
  isLoading,
  error
}) {
  if (stryMutAct_9fa48("793")) {
    {}
  } else {
    stryCov_9fa48("793");
    const [selectedFile, setSelectedFile] = useState(null);
    const onDrop = useCallback(acceptedFiles => {
      if (stryMutAct_9fa48("794")) {
        {}
      } else {
        stryCov_9fa48("794");
        if (stryMutAct_9fa48("798") ? acceptedFiles.length <= 0 : stryMutAct_9fa48("797") ? acceptedFiles.length >= 0 : stryMutAct_9fa48("796") ? false : stryMutAct_9fa48("795") ? true : (stryCov_9fa48("795", "796", "797", "798"), acceptedFiles.length > 0)) {
          if (stryMutAct_9fa48("799")) {
            {}
          } else {
            stryCov_9fa48("799");
            const file = acceptedFiles[0];
            setSelectedFile(file);
            onFileSelect(file);
          }
        }
      }
    }, stryMutAct_9fa48("800") ? [] : (stryCov_9fa48("800"), [onFileSelect]));
    const {
      getRootProps,
      getInputProps,
      isDragActive,
      isDragReject
    } = useDropzone(stryMutAct_9fa48("801") ? {} : (stryCov_9fa48("801"), {
      onDrop,
      accept: ACCEPTED_TYPES,
      maxFiles: 1,
      maxSize: stryMutAct_9fa48("802") ? 200 * 1024 / 1024 : (stryCov_9fa48("802"), (stryMutAct_9fa48("803") ? 200 / 1024 : (stryCov_9fa48("803"), 200 * 1024)) * 1024),
      disabled: isLoading
    }));
    return <div className="upload-container mb-xl">
      <div {...getRootProps()} className={stryMutAct_9fa48("804") ? `` : (stryCov_9fa48("804"), `upload-dropzone ${isDragActive ? stryMutAct_9fa48("805") ? "" : (stryCov_9fa48("805"), 'active') : stryMutAct_9fa48("806") ? "Stryker was here!" : (stryCov_9fa48("806"), '')} ${isDragReject ? stryMutAct_9fa48("807") ? "" : (stryCov_9fa48("807"), 'reject') : stryMutAct_9fa48("808") ? "Stryker was here!" : (stryCov_9fa48("808"), '')} ${selectedFile ? stryMutAct_9fa48("809") ? "" : (stryCov_9fa48("809"), 'has-file') : stryMutAct_9fa48("810") ? "Stryker was here!" : (stryCov_9fa48("810"), '')} ${isLoading ? stryMutAct_9fa48("811") ? "" : (stryCov_9fa48("811"), 'loading') : stryMutAct_9fa48("812") ? "Stryker was here!" : (stryCov_9fa48("812"), '')}`)}>
        <input {...getInputProps()} />
        
        {stryMutAct_9fa48("815") ? isLoading || <div className="scanning-line" /> : stryMutAct_9fa48("814") ? false : stryMutAct_9fa48("813") ? true : (stryCov_9fa48("813", "814", "815"), isLoading && <div className="scanning-line" />)}

        {isLoading ? <div className="upload-prompt flex-column items-center slide-up">
            <Loader2 className="text-accent mb-md animate-spin" size={40} />
            <h2 className="section-heading__label mb-xs">Neural Synthesis</h2>
            <p className="text-secondary">Analyzing institutional datasets...</p>
          </div> : selectedFile ? <div className="upload-success flex-column items-center slide-up">
            <CheckCircle className="text-accent mb-sm" size={48} />
            <h3 className="section-heading__label mb-xs">Document Secured</h3>
            <p className="text-primary font-bold">{selectedFile.name}</p>
            <p className="text-muted" style={stryMutAct_9fa48("816") ? {} : (stryCov_9fa48("816"), {
            fontSize: stryMutAct_9fa48("817") ? "" : (stryCov_9fa48("817"), '12px')
          })}>
              {(stryMutAct_9fa48("818") ? selectedFile.size / 1024 * 1024 : (stryCov_9fa48("818"), (stryMutAct_9fa48("819") ? selectedFile.size * 1024 : (stryCov_9fa48("819"), selectedFile.size / 1024)) / 1024)).toFixed(2)} MB · Ready for intelligence audit
            </p>
            <button className="btn-secondary mt-md">Replace File</button>
          </div> : <div className="upload-prompt flex-column items-center">
            <div className="upload-icon-wrapper mb-md" style={stryMutAct_9fa48("820") ? {} : (stryCov_9fa48("820"), {
            background: stryMutAct_9fa48("821") ? "" : (stryCov_9fa48("821"), 'var(--bg-blue-light)'),
            padding: stryMutAct_9fa48("822") ? "" : (stryCov_9fa48("822"), '20px'),
            borderRadius: stryMutAct_9fa48("823") ? "" : (stryCov_9fa48("823"), '50%')
          })}>
              <Upload className="text-accent" size={32} />
            </div>
            <h2 className="section-heading__label mb-xs">Document Intelligence</h2>
            <p className="text-secondary mb-lg">Drag & drop PDF, Excel, or CSV</p>
            <div className="d-flex items-center gap-4 text-muted" style={stryMutAct_9fa48("824") ? {} : (stryCov_9fa48("824"), {
            fontSize: stryMutAct_9fa48("825") ? "" : (stryCov_9fa48("825"), '11px'),
            fontWeight: 600
          })}>
              <span className="d-flex items-center gap-2"><FileText size={14} /> PDF / Excel</span>
              <span className="d-flex items-center gap-2"><FileText size={14} /> CSV</span>
            </div>
          </div>}
      </div>

      {stryMutAct_9fa48("828") ? error || <div className="error-badge mt-md slide-up d-flex items-start gap-2" style={{
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
        </div> : stryMutAct_9fa48("827") ? false : stryMutAct_9fa48("826") ? true : (stryCov_9fa48("826", "827", "828"), error && <div className="error-badge mt-md slide-up d-flex items-start gap-2" style={stryMutAct_9fa48("829") ? {} : (stryCov_9fa48("829"), {
        color: stryMutAct_9fa48("830") ? "" : (stryCov_9fa48("830"), 'var(--accent-rose)'),
        background: stryMutAct_9fa48("831") ? "" : (stryCov_9fa48("831"), 'rgba(225, 29, 72, 0.05)'),
        padding: stryMutAct_9fa48("832") ? "" : (stryCov_9fa48("832"), '16px'),
        borderRadius: stryMutAct_9fa48("833") ? "" : (stryCov_9fa48("833"), 'var(--radius-md)'),
        border: stryMutAct_9fa48("834") ? "" : (stryCov_9fa48("834"), '1px solid rgba(225, 29, 72, 0.1)'),
        fontSize: stryMutAct_9fa48("835") ? "" : (stryCov_9fa48("835"), '14px'),
        fontWeight: 500,
        lineHeight: stryMutAct_9fa48("836") ? "" : (stryCov_9fa48("836"), '1.5'),
        textAlign: stryMutAct_9fa48("837") ? "" : (stryCov_9fa48("837"), 'left')
      })}>
          <AlertCircle size={18} style={stryMutAct_9fa48("838") ? {} : (stryCov_9fa48("838"), {
          flexShrink: 0,
          marginTop: stryMutAct_9fa48("839") ? "" : (stryCov_9fa48("839"), '2px')
        })} />
          <span>{error}</span>
        </div>)}
    </div>;
  }
}