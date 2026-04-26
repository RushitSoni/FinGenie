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
import { Shield, Lock, Cloud, CheckCircle, FileText, Server, Trash } from 'lucide-react';
export default function Compliance() {
  if (stryMutAct_9fa48("103")) {
    {}
  } else {
    stryCov_9fa48("103");
    return <div className="fade-in slide-up px-6 md:px-12 py-16" style={stryMutAct_9fa48("104") ? {} : (stryCov_9fa48("104"), {
      maxWidth: stryMutAct_9fa48("105") ? "" : (stryCov_9fa48("105"), '1200px'),
      margin: stryMutAct_9fa48("106") ? "" : (stryCov_9fa48("106"), '0 auto')
    })}>
      <div className="sub-label">Institutional Trust</div>
      <h1 className="hero-title mb-md">Compliance &<br /><span className="text-muted">Security Standards.</span></h1>
      
      <div className="card-light" style={stryMutAct_9fa48("107") ? {} : (stryCov_9fa48("107"), {
        padding: stryMutAct_9fa48("108") ? "" : (stryCov_9fa48("108"), '40px'),
        borderRadius: stryMutAct_9fa48("109") ? "" : (stryCov_9fa48("109"), 'var(--radius-xl)')
      })}>
        <div className="grid-cols-12" style={stryMutAct_9fa48("110") ? {} : (stryCov_9fa48("110"), {
          gap: stryMutAct_9fa48("111") ? "" : (stryCov_9fa48("111"), 'var(--space-xl)')
        })}>
          <div className="col-span-12 col-span-lg-4">
            <div className="section-heading__label mb-md">Trust Matrix</div>
            <div className="d-flex flex-column gap-4">
              <div className="card-dark" style={stryMutAct_9fa48("112") ? {} : (stryCov_9fa48("112"), {
                padding: stryMutAct_9fa48("113") ? "" : (stryCov_9fa48("113"), '32px'),
                textAlign: stryMutAct_9fa48("114") ? "" : (stryCov_9fa48("114"), 'center')
              })}>
                 <Shield className="text-accent mb-sm mx-auto" size={40} />
                 <div className="font-bold" style={stryMutAct_9fa48("115") ? {} : (stryCov_9fa48("115"), {
                  fontSize: stryMutAct_9fa48("116") ? "" : (stryCov_9fa48("116"), '14px'),
                  letterSpacing: stryMutAct_9fa48("117") ? "" : (stryCov_9fa48("117"), '0.1em')
                })}>SOC2 TYPE II</div>
                 <div style={stryMutAct_9fa48("118") ? {} : (stryCov_9fa48("118"), {
                  fontSize: stryMutAct_9fa48("119") ? "" : (stryCov_9fa48("119"), '10px'),
                  opacity: 0.5,
                  marginTop: stryMutAct_9fa48("120") ? "" : (stryCov_9fa48("120"), '4px')
                })}>(MOCK CERTIFICATION)</div>
              </div>
              <div className="card-light" style={stryMutAct_9fa48("121") ? {} : (stryCov_9fa48("121"), {
                padding: stryMutAct_9fa48("122") ? "" : (stryCov_9fa48("122"), '32px'),
                textAlign: stryMutAct_9fa48("123") ? "" : (stryCov_9fa48("123"), 'center'),
                border: stryMutAct_9fa48("124") ? "" : (stryCov_9fa48("124"), '1px solid var(--accent-emerald)'),
                background: stryMutAct_9fa48("125") ? "" : (stryCov_9fa48("125"), 'rgba(5, 150, 105, 0.02)')
              })}>
                 <Lock className="text-emerald mb-sm mx-auto" size={40} style={stryMutAct_9fa48("126") ? {} : (stryCov_9fa48("126"), {
                  color: stryMutAct_9fa48("127") ? "" : (stryCov_9fa48("127"), 'var(--accent-emerald)')
                })} />
                 <div className="font-bold" style={stryMutAct_9fa48("128") ? {} : (stryCov_9fa48("128"), {
                  fontSize: stryMutAct_9fa48("129") ? "" : (stryCov_9fa48("129"), '14px'),
                  color: stryMutAct_9fa48("130") ? "" : (stryCov_9fa48("130"), 'var(--accent-emerald)')
                })}>AES-256 E2EE</div>
              </div>
              <div className="card-light" style={stryMutAct_9fa48("131") ? {} : (stryCov_9fa48("131"), {
                padding: stryMutAct_9fa48("132") ? "" : (stryCov_9fa48("132"), '32px'),
                textAlign: stryMutAct_9fa48("133") ? "" : (stryCov_9fa48("133"), 'center'),
                border: stryMutAct_9fa48("134") ? "" : (stryCov_9fa48("134"), '1px solid var(--accent-blue)'),
                background: stryMutAct_9fa48("135") ? "" : (stryCov_9fa48("135"), 'var(--bg-blue-light)')
              })}>
                 <Cloud className="text-accent mb-sm mx-auto" size={40} />
                 <div className="font-bold" style={stryMutAct_9fa48("136") ? {} : (stryCov_9fa48("136"), {
                  fontSize: stryMutAct_9fa48("137") ? "" : (stryCov_9fa48("137"), '14px')
                })}>ISO 27001 ALIGN</div>
              </div>
            </div>
          </div>

          <div className="col-span-12 col-span-lg-8">
            <h2 className="text-primary font-bold mb-lg" style={stryMutAct_9fa48("138") ? {} : (stryCov_9fa48("138"), {
              fontSize: stryMutAct_9fa48("139") ? "" : (stryCov_9fa48("139"), '32px')
            })}>Security Architecture</h2>
            <div className="d-flex flex-column gap-5">
              <div className="d-flex gap-4">
                <Server className="text-accent mt-1" size={24} />
                <div>
                  <h3 className="section-heading__label mb-xs" style={stryMutAct_9fa48("140") ? {} : (stryCov_9fa48("140"), {
                    color: stryMutAct_9fa48("141") ? "" : (stryCov_9fa48("141"), 'var(--accent-blue)')
                  })}>Cloud Layer</h3>
                  <p style={stryMutAct_9fa48("142") ? {} : (stryCov_9fa48("142"), {
                    fontSize: stryMutAct_9fa48("143") ? "" : (stryCov_9fa48("143"), '15px'),
                    color: stryMutAct_9fa48("144") ? "" : (stryCov_9fa48("144"), 'var(--text-secondary)'),
                    lineHeight: 1.7
                  })}>
                    Our infrastructure is hosted on isolated, encrypted volumes with zero-persistence hardware. All data transmission occurs over TLS 1.3 with Perfect Forward Secrecy (PFS).
                  </p>
                </div>
              </div>
              <div className="d-flex gap-4">
                <Lock className="text-accent mt-1" size={24} />
                <div>
                  <h3 className="section-heading__label mb-xs" style={stryMutAct_9fa48("145") ? {} : (stryCov_9fa48("145"), {
                    color: stryMutAct_9fa48("146") ? "" : (stryCov_9fa48("146"), 'var(--accent-blue)')
                  })}>Encryption at Rest (Mock)</h3>
                  <p style={stryMutAct_9fa48("147") ? {} : (stryCov_9fa48("147"), {
                    fontSize: stryMutAct_9fa48("148") ? "" : (stryCov_9fa48("148"), '15px'),
                    color: stryMutAct_9fa48("149") ? "" : (stryCov_9fa48("149"), 'var(--text-secondary)'),
                    lineHeight: 1.7
                  })}>
                    While we don't store your files longer than the session, all in-memory processing utilizes hardware-level AES-256 encryption within sovereign compute nodes.
                  </p>
                </div>
              </div>
              <div className="d-flex gap-4">
                <Trash className="text-accent mt-1" size={24} />
                <div>
                  <h3 className="section-heading__label mb-xs" style={stryMutAct_9fa48("150") ? {} : (stryCov_9fa48("150"), {
                    color: stryMutAct_9fa48("151") ? "" : (stryCov_9fa48("151"), 'var(--accent-blue)')
                  })}>Compliance Purge</h3>
                  <p style={stryMutAct_9fa48("152") ? {} : (stryCov_9fa48("152"), {
                    fontSize: stryMutAct_9fa48("153") ? "" : (stryCov_9fa48("153"), '15px'),
                    color: stryMutAct_9fa48("154") ? "" : (stryCov_9fa48("154"), 'var(--text-secondary)'),
                    lineHeight: 1.7
                  })}>
                    Upon completion of an analysis report, our system initiates a multi-pass wipe of all scratch volumes used during the parsing phase, meeting NIST SP 800-88 guidelines for media sanitization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}