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
  if (stryMutAct_9fa48("326")) {
    {}
  } else {
    stryCov_9fa48("326");
    return <div className="fade-in slide-up px-6 md:px-12 py-16" style={stryMutAct_9fa48("327") ? {} : (stryCov_9fa48("327"), {
      maxWidth: stryMutAct_9fa48("328") ? "" : (stryCov_9fa48("328"), '1200px'),
      margin: stryMutAct_9fa48("329") ? "" : (stryCov_9fa48("329"), '0 auto')
    })}>
      <div className="sub-label">Institutional Trust</div>
      <h1 className="hero-title mb-md">Compliance &<br /><span className="text-muted">Security Standards.</span></h1>
      
      <div className="card-light" style={stryMutAct_9fa48("330") ? {} : (stryCov_9fa48("330"), {
        padding: stryMutAct_9fa48("331") ? "" : (stryCov_9fa48("331"), '40px'),
        borderRadius: stryMutAct_9fa48("332") ? "" : (stryCov_9fa48("332"), 'var(--radius-xl)')
      })}>
        <div className="grid-cols-12" style={stryMutAct_9fa48("333") ? {} : (stryCov_9fa48("333"), {
          gap: stryMutAct_9fa48("334") ? "" : (stryCov_9fa48("334"), 'var(--space-xl)')
        })}>
          <div className="col-span-12 col-span-lg-4">
            <div className="section-heading__label mb-md">Trust Matrix</div>
            <div className="d-flex flex-column gap-4">
              <div className="card-dark" style={stryMutAct_9fa48("335") ? {} : (stryCov_9fa48("335"), {
                padding: stryMutAct_9fa48("336") ? "" : (stryCov_9fa48("336"), '32px'),
                textAlign: stryMutAct_9fa48("337") ? "" : (stryCov_9fa48("337"), 'center')
              })}>
                 <Shield className="text-accent mb-sm mx-auto" size={40} />
                 <div className="font-bold" style={stryMutAct_9fa48("338") ? {} : (stryCov_9fa48("338"), {
                  fontSize: stryMutAct_9fa48("339") ? "" : (stryCov_9fa48("339"), '14px'),
                  letterSpacing: stryMutAct_9fa48("340") ? "" : (stryCov_9fa48("340"), '0.1em')
                })}>SOC2 TYPE II</div>
                 <div style={stryMutAct_9fa48("341") ? {} : (stryCov_9fa48("341"), {
                  fontSize: stryMutAct_9fa48("342") ? "" : (stryCov_9fa48("342"), '10px'),
                  opacity: 0.5,
                  marginTop: stryMutAct_9fa48("343") ? "" : (stryCov_9fa48("343"), '4px')
                })}>(MOCK CERTIFICATION)</div>
              </div>
              <div className="card-light" style={stryMutAct_9fa48("344") ? {} : (stryCov_9fa48("344"), {
                padding: stryMutAct_9fa48("345") ? "" : (stryCov_9fa48("345"), '32px'),
                textAlign: stryMutAct_9fa48("346") ? "" : (stryCov_9fa48("346"), 'center'),
                border: stryMutAct_9fa48("347") ? "" : (stryCov_9fa48("347"), '1px solid var(--accent-emerald)'),
                background: stryMutAct_9fa48("348") ? "" : (stryCov_9fa48("348"), 'rgba(5, 150, 105, 0.02)')
              })}>
                 <Lock className="text-emerald mb-sm mx-auto" size={40} style={stryMutAct_9fa48("349") ? {} : (stryCov_9fa48("349"), {
                  color: stryMutAct_9fa48("350") ? "" : (stryCov_9fa48("350"), 'var(--accent-emerald)')
                })} />
                 <div className="font-bold" style={stryMutAct_9fa48("351") ? {} : (stryCov_9fa48("351"), {
                  fontSize: stryMutAct_9fa48("352") ? "" : (stryCov_9fa48("352"), '14px'),
                  color: stryMutAct_9fa48("353") ? "" : (stryCov_9fa48("353"), 'var(--accent-emerald)')
                })}>AES-256 E2EE</div>
              </div>
              <div className="card-light" style={stryMutAct_9fa48("354") ? {} : (stryCov_9fa48("354"), {
                padding: stryMutAct_9fa48("355") ? "" : (stryCov_9fa48("355"), '32px'),
                textAlign: stryMutAct_9fa48("356") ? "" : (stryCov_9fa48("356"), 'center'),
                border: stryMutAct_9fa48("357") ? "" : (stryCov_9fa48("357"), '1px solid var(--accent-blue)'),
                background: stryMutAct_9fa48("358") ? "" : (stryCov_9fa48("358"), 'var(--bg-blue-light)')
              })}>
                 <Cloud className="text-accent mb-sm mx-auto" size={40} />
                 <div className="font-bold" style={stryMutAct_9fa48("359") ? {} : (stryCov_9fa48("359"), {
                  fontSize: stryMutAct_9fa48("360") ? "" : (stryCov_9fa48("360"), '14px')
                })}>ISO 27001 ALIGN</div>
              </div>
            </div>
          </div>

          <div className="col-span-12 col-span-lg-8">
            <h2 className="text-primary font-bold mb-lg" style={stryMutAct_9fa48("361") ? {} : (stryCov_9fa48("361"), {
              fontSize: stryMutAct_9fa48("362") ? "" : (stryCov_9fa48("362"), '32px')
            })}>Security Architecture</h2>
            <div className="d-flex flex-column gap-5">
              <div className="d-flex gap-4">
                <Server className="text-accent mt-1" size={24} />
                <div>
                  <h3 className="section-heading__label mb-xs" style={stryMutAct_9fa48("363") ? {} : (stryCov_9fa48("363"), {
                    color: stryMutAct_9fa48("364") ? "" : (stryCov_9fa48("364"), 'var(--accent-blue)')
                  })}>Cloud Layer</h3>
                  <p style={stryMutAct_9fa48("365") ? {} : (stryCov_9fa48("365"), {
                    fontSize: stryMutAct_9fa48("366") ? "" : (stryCov_9fa48("366"), '15px'),
                    color: stryMutAct_9fa48("367") ? "" : (stryCov_9fa48("367"), 'var(--text-secondary)'),
                    lineHeight: 1.7
                  })}>
                    Our infrastructure is hosted on isolated, encrypted volumes with zero-persistence hardware. All data transmission occurs over TLS 1.3 with Perfect Forward Secrecy (PFS).
                  </p>
                </div>
              </div>
              <div className="d-flex gap-4">
                <Lock className="text-accent mt-1" size={24} />
                <div>
                  <h3 className="section-heading__label mb-xs" style={stryMutAct_9fa48("368") ? {} : (stryCov_9fa48("368"), {
                    color: stryMutAct_9fa48("369") ? "" : (stryCov_9fa48("369"), 'var(--accent-blue)')
                  })}>Encryption at Rest (Mock)</h3>
                  <p style={stryMutAct_9fa48("370") ? {} : (stryCov_9fa48("370"), {
                    fontSize: stryMutAct_9fa48("371") ? "" : (stryCov_9fa48("371"), '15px'),
                    color: stryMutAct_9fa48("372") ? "" : (stryCov_9fa48("372"), 'var(--text-secondary)'),
                    lineHeight: 1.7
                  })}>
                    While we don't store your files longer than the session, all in-memory processing utilizes hardware-level AES-256 encryption within sovereign compute nodes.
                  </p>
                </div>
              </div>
              <div className="d-flex gap-4">
                <Trash className="text-accent mt-1" size={24} />
                <div>
                  <h3 className="section-heading__label mb-xs" style={stryMutAct_9fa48("373") ? {} : (stryCov_9fa48("373"), {
                    color: stryMutAct_9fa48("374") ? "" : (stryCov_9fa48("374"), 'var(--accent-blue)')
                  })}>Compliance Purge</h3>
                  <p style={stryMutAct_9fa48("375") ? {} : (stryCov_9fa48("375"), {
                    fontSize: stryMutAct_9fa48("376") ? "" : (stryCov_9fa48("376"), '15px'),
                    color: stryMutAct_9fa48("377") ? "" : (stryCov_9fa48("377"), 'var(--text-secondary)'),
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