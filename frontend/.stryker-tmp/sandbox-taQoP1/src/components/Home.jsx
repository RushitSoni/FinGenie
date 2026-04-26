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
import { Rocket, Target, PieChart, Database, Shield, Upload, Search, Zap, CheckCircle2, ChevronRight, HelpCircle, FileText, Activity, Lock, Layers, Cpu, Server, Globe, Globe2 } from 'lucide-react';
import { useRef } from 'react';
import FileUpload from './FileUpload';
export default function Home({
  onFileSelect,
  isLoading,
  error
}) {
  if (stryMutAct_9fa48("617")) {
    {}
  } else {
    stryCov_9fa48("617");
    const specsRef = useRef(null);
    const scrollToUpload = () => {
      if (stryMutAct_9fa48("618")) {
        {}
      } else {
        stryCov_9fa48("618");
        window.scrollTo(stryMutAct_9fa48("619") ? {} : (stryCov_9fa48("619"), {
          top: 0,
          behavior: stryMutAct_9fa48("620") ? "" : (stryCov_9fa48("620"), 'smooth')
        }));
      }
    };
    const scrollToSpecs = () => {
      if (stryMutAct_9fa48("621")) {
        {}
      } else {
        stryCov_9fa48("621");
        stryMutAct_9fa48("622") ? specsRef.current.scrollIntoView({
          behavior: 'smooth'
        }) : (stryCov_9fa48("622"), specsRef.current?.scrollIntoView(stryMutAct_9fa48("623") ? {} : (stryCov_9fa48("623"), {
          behavior: stryMutAct_9fa48("624") ? "" : (stryCov_9fa48("624"), 'smooth')
        })));
      }
    };
    return <div className="analyzer-landing fade-in">
      {/* ─── Hero Section ─────────────────────────────────── */}
      <section className="landing-hero">
        <div className="hero-text-section slide-up">
          <div className="hero-badge">Institutional-Grade Financial Intelligence</div>
          <h1 className="hero-title mb-md">
            Decode <span className="page-header__accent">Sovereign</span> <br /> Institutional Data.
          </h1>
          <p className="hero-subtitle mb-lg">
            Upload balance sheets, income statements, or cash flow reports to extract semantic narratives, risk vectors, and actionable intelligence instantly.
          </p>
          
          <div className="hero-actions d-flex gap-4">
            <button className="btn-primary" onClick={scrollToUpload}>
              <Zap size={18} />
              <span>Analyze Statement</span>
            </button>
            <button className="btn-outline" onClick={scrollToSpecs}>
              Technical Specs
            </button>
          </div>

          <div className="hero-trust-signals">
            <div className="trust-item">
              <CheckCircle2 size={16} className="text-emerald" style={stryMutAct_9fa48("625") ? {} : (stryCov_9fa48("625"), {
                color: stryMutAct_9fa48("626") ? "" : (stryCov_9fa48("626"), 'var(--accent-emerald)')
              })} />
              <span>No signup required</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={16} className="text-emerald" style={stryMutAct_9fa48("627") ? {} : (stryCov_9fa48("627"), {
                color: stryMutAct_9fa48("628") ? "" : (stryCov_9fa48("628"), 'var(--accent-emerald)')
              })} />
              <span>AES-256 encrypted</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={16} className="text-emerald" style={stryMutAct_9fa48("629") ? {} : (stryCov_9fa48("629"), {
                color: stryMutAct_9fa48("630") ? "" : (stryCov_9fa48("630"), 'var(--accent-emerald)')
              })} />
              <span>Zero data retention</span>
            </div>
          </div>
        </div>

        <div className="upload-card slide-up" style={stryMutAct_9fa48("631") ? {} : (stryCov_9fa48("631"), {
          animationDelay: stryMutAct_9fa48("632") ? "" : (stryCov_9fa48("632"), '0.2s')
        })}>
          <div className="card-light glass-glow" style={stryMutAct_9fa48("633") ? {} : (stryCov_9fa48("633"), {
            padding: stryMutAct_9fa48("634") ? "" : (stryCov_9fa48("634"), 'var(--space-md)'),
            border: stryMutAct_9fa48("635") ? "" : (stryCov_9fa48("635"), 'none'),
            boxShadow: stryMutAct_9fa48("636") ? "" : (stryCov_9fa48("636"), 'var(--shadow-xl)')
          })}>
            <div className="d-flex items-center gap-3 mb-md">
               <div style={stryMutAct_9fa48("637") ? {} : (stryCov_9fa48("637"), {
                background: stryMutAct_9fa48("638") ? "" : (stryCov_9fa48("638"), 'var(--bg-blue-light)'),
                padding: stryMutAct_9fa48("639") ? "" : (stryCov_9fa48("639"), '10px'),
                borderRadius: stryMutAct_9fa48("640") ? "" : (stryCov_9fa48("640"), '12px')
              })}>
                  <Activity size={20} className="text-accent" />
               </div>
               <div>
                  <h2 className="text-primary font-bold" style={stryMutAct_9fa48("641") ? {} : (stryCov_9fa48("641"), {
                  fontSize: stryMutAct_9fa48("642") ? "" : (stryCov_9fa48("642"), '20px'),
                  margin: 0
                })}>Analyze Document</h2>
                  <p className="text-muted" style={stryMutAct_9fa48("643") ? {} : (stryCov_9fa48("643"), {
                  fontSize: stryMutAct_9fa48("644") ? "" : (stryCov_9fa48("644"), '13px'),
                  margin: 0
                })}>Institutional Ledger Ingestion</p>
               </div>
            </div>
            
            <FileUpload onFileSelect={onFileSelect} isLoading={isLoading} error={error} />
          </div>
        </div>
      </section>


      {/* ─── Outcome-Driven Features ────────────────────────── */}
      <section style={stryMutAct_9fa48("645") ? {} : (stryCov_9fa48("645"), {
        padding: stryMutAct_9fa48("646") ? "" : (stryCov_9fa48("646"), 'var(--space-2xl) 0')
      })}>
        <div style={stryMutAct_9fa48("647") ? {} : (stryCov_9fa48("647"), {
          textAlign: stryMutAct_9fa48("648") ? "" : (stryCov_9fa48("648"), 'center'),
          marginBottom: stryMutAct_9fa48("649") ? "" : (stryCov_9fa48("649"), 'var(--space-xl)')
        })}>
          <span className="sub-label">Capabilities</span>
          <h2 className="big-title">Built for Performance.</h2>
        </div>

        <div className="grid-2x2">
          <div className="card-light hover-lift">
             <div className="mb-md" style={stryMutAct_9fa48("650") ? {} : (stryCov_9fa48("650"), {
              background: stryMutAct_9fa48("651") ? "" : (stryCov_9fa48("651"), 'var(--bg-blue-light)'),
              width: stryMutAct_9fa48("652") ? "" : (stryCov_9fa48("652"), 'fit-content'),
              padding: stryMutAct_9fa48("653") ? "" : (stryCov_9fa48("653"), '16px'),
              borderRadius: stryMutAct_9fa48("654") ? "" : (stryCov_9fa48("654"), '16px')
            })}>
                <Rocket className="text-accent" size={32} />
             </div>
             <h3 style={stryMutAct_9fa48("655") ? {} : (stryCov_9fa48("655"), {
              fontSize: stryMutAct_9fa48("656") ? "" : (stryCov_9fa48("656"), '22px'),
              marginBottom: stryMutAct_9fa48("657") ? "" : (stryCov_9fa48("657"), 'var(--space-xs)')
            })}>No Manual Entry</h3>
             <p className="text-secondary" style={stryMutAct_9fa48("658") ? {} : (stryCov_9fa48("658"), {
              lineHeight: 1.6
            })}>Upload fragmented statements and get structured, audit-ready data instantly. Skip the modeling grunt work.</p>
          </div>
          <div className="card-light hover-lift">
             <div className="mb-md" style={stryMutAct_9fa48("659") ? {} : (stryCov_9fa48("659"), {
              background: stryMutAct_9fa48("660") ? "" : (stryCov_9fa48("660"), 'rgba(235, 29, 72, 0.05)'),
              width: stryMutAct_9fa48("661") ? "" : (stryCov_9fa48("661"), 'fit-content'),
              padding: stryMutAct_9fa48("662") ? "" : (stryCov_9fa48("662"), '16px'),
              borderRadius: stryMutAct_9fa48("663") ? "" : (stryCov_9fa48("663"), '16px')
            })}>
                <Target className="text-rose" size={32} style={stryMutAct_9fa48("664") ? {} : (stryCov_9fa48("664"), {
                color: stryMutAct_9fa48("665") ? "" : (stryCov_9fa48("665"), 'var(--accent-rose)')
              })} />
             </div>
             <h3 style={stryMutAct_9fa48("666") ? {} : (stryCov_9fa48("666"), {
              fontSize: stryMutAct_9fa48("667") ? "" : (stryCov_9fa48("667"), '22px'),
              marginBottom: stryMutAct_9fa48("668") ? "" : (stryCov_9fa48("668"), 'var(--space-xs)')
            })}>Automated Anomalies</h3>
             <p className="text-secondary" style={stryMutAct_9fa48("669") ? {} : (stryCov_9fa48("669"), {
              lineHeight: 1.6
            })}>Identify risks, trends, and financial outliers automatically before they become institutional liabilities.</p>
          </div>
          <div className="card-light hover-lift">
             <div className="mb-md" style={stryMutAct_9fa48("670") ? {} : (stryCov_9fa48("670"), {
              background: stryMutAct_9fa48("671") ? "" : (stryCov_9fa48("671"), 'rgba(8, 145, 178, 0.05)'),
              width: stryMutAct_9fa48("672") ? "" : (stryCov_9fa48("672"), 'fit-content'),
              padding: stryMutAct_9fa48("673") ? "" : (stryCov_9fa48("673"), '16px'),
              borderRadius: stryMutAct_9fa48("674") ? "" : (stryCov_9fa48("674"), '16px')
            })}>
                <PieChart className="text-cyan" size={32} style={stryMutAct_9fa48("675") ? {} : (stryCov_9fa48("675"), {
                color: stryMutAct_9fa48("676") ? "" : (stryCov_9fa48("676"), 'var(--accent-cyan)')
              })} />
             </div>
             <h3 style={stryMutAct_9fa48("677") ? {} : (stryCov_9fa48("677"), {
              fontSize: stryMutAct_9fa48("678") ? "" : (stryCov_9fa48("678"), '22px'),
              marginBottom: stryMutAct_9fa48("679") ? "" : (stryCov_9fa48("679"), 'var(--space-xs)')
            })}>Clean Dashboards</h3>
             <p className="text-secondary" style={stryMutAct_9fa48("680") ? {} : (stryCov_9fa48("680"), {
              lineHeight: 1.6
            })}>Instant visualization for liquidity, burn rate, and performance momentum using institutional standard design.</p>
          </div>
          <div className="card-light hover-lift">
             <div className="mb-md" style={stryMutAct_9fa48("681") ? {} : (stryCov_9fa48("681"), {
              background: stryMutAct_9fa48("682") ? "" : (stryCov_9fa48("682"), 'rgba(5, 150, 105, 0.05)'),
              width: stryMutAct_9fa48("683") ? "" : (stryCov_9fa48("683"), 'fit-content'),
              padding: stryMutAct_9fa48("684") ? "" : (stryCov_9fa48("684"), '16px'),
              borderRadius: stryMutAct_9fa48("685") ? "" : (stryCov_9fa48("685"), '16px')
            })}>
                <Database className="text-emerald" size={32} style={stryMutAct_9fa48("686") ? {} : (stryCov_9fa48("686"), {
                color: stryMutAct_9fa48("687") ? "" : (stryCov_9fa48("687"), 'var(--accent-emerald)')
              })} />
             </div>
             <h3 style={stryMutAct_9fa48("688") ? {} : (stryCov_9fa48("688"), {
              fontSize: stryMutAct_9fa48("689") ? "" : (stryCov_9fa48("689"), '22px'),
              marginBottom: stryMutAct_9fa48("690") ? "" : (stryCov_9fa48("690"), 'var(--space-xs)')
            })}>Institutional Intelligence</h3>
             <p className="text-secondary" style={stryMutAct_9fa48("691") ? {} : (stryCov_9fa48("691"), {
              lineHeight: 1.6
            })}>Process complex financial datasets and generate audit-ready competitive landscape reports in seconds.</p>
          </div>
        </div>
      </section>

      {/* ─── Storytelling Pipeline ─────────────────────────── */}
      <section style={stryMutAct_9fa48("692") ? {} : (stryCov_9fa48("692"), {
        padding: stryMutAct_9fa48("693") ? "" : (stryCov_9fa48("693"), 'var(--space-2xl) 0')
      })}>
        <div style={stryMutAct_9fa48("694") ? {} : (stryCov_9fa48("694"), {
          textAlign: stryMutAct_9fa48("695") ? "" : (stryCov_9fa48("695"), 'center'),
          marginBottom: stryMutAct_9fa48("696") ? "" : (stryCov_9fa48("696"), 'var(--space-xl)')
        })}>
          <span className="sub-label">Implementation</span>
          <h2 className="big-title">Three Steps to Insight.</h2>
        </div>
        
        <div className="pipeline-container">
          <div className="pipeline-step">
            <div className="card-light hover-lift d-flex flex-column" style={stryMutAct_9fa48("697") ? {} : (stryCov_9fa48("697"), {
              height: stryMutAct_9fa48("698") ? "" : (stryCov_9fa48("698"), '100%'),
              padding: stryMutAct_9fa48("699") ? "" : (stryCov_9fa48("699"), '40px')
            })}>
              <div className="mb-md" style={stryMutAct_9fa48("700") ? {} : (stryCov_9fa48("700"), {
                color: stryMutAct_9fa48("701") ? "" : (stryCov_9fa48("701"), 'var(--accent-blue)')
              })}><Upload size={32} /></div>
              <h3 className="section-heading__label mb-sm" style={stryMutAct_9fa48("702") ? {} : (stryCov_9fa48("702"), {
                color: stryMutAct_9fa48("703") ? "" : (stryCov_9fa48("703"), 'var(--accent-blue)'),
                opacity: 0.8
              })}>01 Ingestion</h3>
              <p className="text-secondary" style={stryMutAct_9fa48("704") ? {} : (stryCov_9fa48("704"), {
                fontSize: stryMutAct_9fa48("705") ? "" : (stryCov_9fa48("705"), '15px')
              })}>Upload institutional financial PDFs, Excel sheets, or CSV files for automated auditing.</p>
            </div>
          </div>

          <div className="pipeline-connector d-none d-lg-block"><ChevronRight /></div>

          <div className="pipeline-step">
            <div className="card-light hover-lift d-flex flex-column" style={stryMutAct_9fa48("706") ? {} : (stryCov_9fa48("706"), {
              height: stryMutAct_9fa48("707") ? "" : (stryCov_9fa48("707"), '100%'),
              padding: stryMutAct_9fa48("708") ? "" : (stryCov_9fa48("708"), '40px')
            })}>
              <div className="mb-md" style={stryMutAct_9fa48("709") ? {} : (stryCov_9fa48("709"), {
                color: stryMutAct_9fa48("710") ? "" : (stryCov_9fa48("710"), 'var(--accent-blue)')
              })}><Search size={32} /></div>
              <h3 className="section-heading__label mb-sm" style={stryMutAct_9fa48("711") ? {} : (stryCov_9fa48("711"), {
                color: stryMutAct_9fa48("712") ? "" : (stryCov_9fa48("712"), 'var(--accent-blue)'),
                opacity: 0.8
              })}>02 Semantic Parsing</h3>
              <p className="text-secondary" style={stryMutAct_9fa48("713") ? {} : (stryCov_9fa48("713"), {
                fontSize: stryMutAct_9fa48("714") ? "" : (stryCov_9fa48("714"), '15px')
              })}>Neural mapping of line items to institutional standard GAAP/IFRS vectors using Llama 3 LLMs.</p>
            </div>
          </div>

          <div className="pipeline-connector d-none d-lg-block"><ChevronRight /></div>

          <div className="pipeline-step">
            <div className="card-light hover-lift d-flex flex-column" style={stryMutAct_9fa48("715") ? {} : (stryCov_9fa48("715"), {
              height: stryMutAct_9fa48("716") ? "" : (stryCov_9fa48("716"), '100%'),
              padding: stryMutAct_9fa48("717") ? "" : (stryCov_9fa48("717"), '40px')
            })}>
              <div className="mb-md" style={stryMutAct_9fa48("718") ? {} : (stryCov_9fa48("718"), {
                color: stryMutAct_9fa48("719") ? "" : (stryCov_9fa48("719"), 'var(--accent-blue)')
              })}><Zap size={32} /></div>
              <h3 className="section-heading__label mb-sm" style={stryMutAct_9fa48("720") ? {} : (stryCov_9fa48("720"), {
                color: stryMutAct_9fa48("721") ? "" : (stryCov_9fa48("721"), 'var(--accent-blue)'),
                opacity: 0.8
              })}>03 Intelligence</h3>
              <p className="text-secondary" style={stryMutAct_9fa48("722") ? {} : (stryCov_9fa48("722"), {
                fontSize: stryMutAct_9fa48("723") ? "" : (stryCov_9fa48("723"), '15px')
              })}>Instant generation of KPI grids, risk matrices, and board-ready strategic summaries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Security Section ─────────────────────────────── */}
      <section style={stryMutAct_9fa48("724") ? {} : (stryCov_9fa48("724"), {
        margin: stryMutAct_9fa48("725") ? "" : (stryCov_9fa48("725"), 'var(--space-2xl) 0'),
        padding: stryMutAct_9fa48("726") ? "" : (stryCov_9fa48("726"), 'var(--space-xl) 5%'),
        background: stryMutAct_9fa48("727") ? "" : (stryCov_9fa48("727"), 'var(--bg-navy)'),
        borderRadius: stryMutAct_9fa48("728") ? "" : (stryCov_9fa48("728"), 'var(--radius-xl)'),
        color: stryMutAct_9fa48("729") ? "" : (stryCov_9fa48("729"), 'white'),
        position: stryMutAct_9fa48("730") ? "" : (stryCov_9fa48("730"), 'relative'),
        overflow: stryMutAct_9fa48("731") ? "" : (stryCov_9fa48("731"), 'hidden')
      })}>
        <div style={stryMutAct_9fa48("732") ? {} : (stryCov_9fa48("732"), {
          position: stryMutAct_9fa48("733") ? "" : (stryCov_9fa48("733"), 'absolute'),
          top: stryMutAct_9fa48("734") ? "" : (stryCov_9fa48("734"), '-100px'),
          left: stryMutAct_9fa48("735") ? "" : (stryCov_9fa48("735"), '-100px'),
          width: stryMutAct_9fa48("736") ? "" : (stryCov_9fa48("736"), '300px'),
          height: stryMutAct_9fa48("737") ? "" : (stryCov_9fa48("737"), '300px'),
          background: stryMutAct_9fa48("738") ? "" : (stryCov_9fa48("738"), 'var(--accent-blue)'),
          opacity: 0.15,
          borderRadius: stryMutAct_9fa48("739") ? "" : (stryCov_9fa48("739"), '50%'),
          filter: stryMutAct_9fa48("740") ? "" : (stryCov_9fa48("740"), 'blur(100px)')
        })}></div>
        <div style={stryMutAct_9fa48("741") ? {} : (stryCov_9fa48("741"), {
          position: stryMutAct_9fa48("742") ? "" : (stryCov_9fa48("742"), 'relative'),
          zIndex: 1
        })}>
          <div className="grid-cols-12" style={stryMutAct_9fa48("743") ? {} : (stryCov_9fa48("743"), {
            alignItems: stryMutAct_9fa48("744") ? "" : (stryCov_9fa48("744"), 'center'),
            gap: stryMutAct_9fa48("745") ? "" : (stryCov_9fa48("745"), 'var(--space-xl)')
          })}>
            <div className="col-span-12 col-span-lg-7">
              <span className="sub-label" style={stryMutAct_9fa48("746") ? {} : (stryCov_9fa48("746"), {
                color: stryMutAct_9fa48("747") ? "" : (stryCov_9fa48("747"), 'var(--accent-emerald)')
              })}>Privacy & Sovereignty</span>
              <h2 className="big-title" style={stryMutAct_9fa48("748") ? {} : (stryCov_9fa48("748"), {
                color: stryMutAct_9fa48("749") ? "" : (stryCov_9fa48("749"), 'white'),
                fontSize: stryMutAct_9fa48("750") ? "" : (stryCov_9fa48("750"), 'clamp(32px, 5vw, 56px)'),
                marginBottom: stryMutAct_9fa48("751") ? "" : (stryCov_9fa48("751"), 'var(--space-md)')
              })}>Your data stays yours.</h2>
              <p style={stryMutAct_9fa48("752") ? {} : (stryCov_9fa48("752"), {
                fontSize: stryMutAct_9fa48("753") ? "" : (stryCov_9fa48("753"), '18px'),
                opacity: 0.7,
                lineHeight: 1.7,
                marginBottom: stryMutAct_9fa48("754") ? "" : (stryCov_9fa48("754"), 'var(--space-lg)')
              })}>
                FinGenie utilizes an ephemeral "process-and-purge" cycle. We process your data in volatile memory nodes and delete it the moment your session ends.
              </p>
              <div className="d-flex gap-responsive flex-wrap">
                 <div className="d-flex flex-column gap-1">
                    <div className="metric-big" style={stryMutAct_9fa48("755") ? {} : (stryCov_9fa48("755"), {
                    color: stryMutAct_9fa48("756") ? "" : (stryCov_9fa48("756"), 'white'),
                    fontSize: stryMutAct_9fa48("757") ? "" : (stryCov_9fa48("757"), '32px')
                  })}>AES-256</div>
                    <div style={stryMutAct_9fa48("758") ? {} : (stryCov_9fa48("758"), {
                    fontSize: stryMutAct_9fa48("759") ? "" : (stryCov_9fa48("759"), '10px'),
                    opacity: 0.5,
                    fontWeight: 800,
                    letterSpacing: stryMutAct_9fa48("760") ? "" : (stryCov_9fa48("760"), '2px'),
                    maxWidth: stryMutAct_9fa48("761") ? "" : (stryCov_9fa48("761"), '140px')
                  })}>ENCRYPTION STANDARD</div>
                 </div>
                 <div className="d-flex flex-column gap-1">
                    <div className="metric-big" style={stryMutAct_9fa48("762") ? {} : (stryCov_9fa48("762"), {
                    color: stryMutAct_9fa48("763") ? "" : (stryCov_9fa48("763"), 'white'),
                    fontSize: stryMutAct_9fa48("764") ? "" : (stryCov_9fa48("764"), '32px')
                  })}>ZERO</div>
                    <div style={stryMutAct_9fa48("765") ? {} : (stryCov_9fa48("765"), {
                    fontSize: stryMutAct_9fa48("766") ? "" : (stryCov_9fa48("766"), '10px'),
                    opacity: 0.5,
                    fontWeight: 800,
                    letterSpacing: stryMutAct_9fa48("767") ? "" : (stryCov_9fa48("767"), '2px'),
                    maxWidth: stryMutAct_9fa48("768") ? "" : (stryCov_9fa48("768"), '140px')
                  })}>DATA RETENTION</div>
                 </div>
              </div>
            </div>
            <div className="col-span-12 col-span-lg-5">
               <div className="card-light" style={stryMutAct_9fa48("769") ? {} : (stryCov_9fa48("769"), {
                background: stryMutAct_9fa48("770") ? "" : (stryCov_9fa48("770"), 'rgba(255,255,255,0.05)'),
                border: stryMutAct_9fa48("771") ? "" : (stryCov_9fa48("771"), '1px solid rgba(255,255,255,0.1)'),
                color: stryMutAct_9fa48("772") ? "" : (stryCov_9fa48("772"), 'white'),
                padding: stryMutAct_9fa48("773") ? "" : (stryCov_9fa48("773"), '40px')
              })}>
                  <div className="d-flex flex-column gap-5">
                    <div className="d-flex gap-4">
                       <Shield className="text-emerald" size={28} style={stryMutAct_9fa48("774") ? {} : (stryCov_9fa48("774"), {
                      color: stryMutAct_9fa48("775") ? "" : (stryCov_9fa48("775"), 'var(--accent-emerald)')
                    })} />
                       <div>
                          <div className="font-bold" style={stryMutAct_9fa48("776") ? {} : (stryCov_9fa48("776"), {
                        fontSize: stryMutAct_9fa48("777") ? "" : (stryCov_9fa48("777"), '18px'),
                        marginBottom: stryMutAct_9fa48("778") ? "" : (stryCov_9fa48("778"), '4px')
                      })}>Isolated Sandbox</div>
                          <div style={stryMutAct_9fa48("779") ? {} : (stryCov_9fa48("779"), {
                        fontSize: stryMutAct_9fa48("780") ? "" : (stryCov_9fa48("780"), '14px'),
                        opacity: 0.6
                      })}>Every file is analyzed in a strictly single-use compute node.</div>
                       </div>
                    </div>
                    <div className="d-flex gap-4">
                       <Lock className="text-cyan" size={28} style={stryMutAct_9fa48("781") ? {} : (stryCov_9fa48("781"), {
                      color: stryMutAct_9fa48("782") ? "" : (stryCov_9fa48("782"), 'var(--accent-cyan)')
                    })} />
                       <div>
                          <div className="font-bold" style={stryMutAct_9fa48("783") ? {} : (stryCov_9fa48("783"), {
                        fontSize: stryMutAct_9fa48("784") ? "" : (stryCov_9fa48("784"), '18px'),
                        marginBottom: stryMutAct_9fa48("785") ? "" : (stryCov_9fa48("785"), '4px')
                      })}>Private Inference</div>
                          <div style={stryMutAct_9fa48("786") ? {} : (stryCov_9fa48("786"), {
                        fontSize: stryMutAct_9fa48("787") ? "" : (stryCov_9fa48("787"), '14px'),
                        opacity: 0.6
                      })}>Data is never used for training LLMs. High-fidelity private APIs only.</div>
                       </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Technical Specifications Section ──────────────── */}
      <section ref={specsRef} style={stryMutAct_9fa48("788") ? {} : (stryCov_9fa48("788"), {
        padding: stryMutAct_9fa48("789") ? "" : (stryCov_9fa48("789"), 'var(--space-2xl) 0'),
        background: stryMutAct_9fa48("790") ? "" : (stryCov_9fa48("790"), 'var(--bg-blue-light)'),
        borderRadius: stryMutAct_9fa48("791") ? "" : (stryCov_9fa48("791"), 'var(--radius-xl)'),
        margin: stryMutAct_9fa48("792") ? "" : (stryCov_9fa48("792"), 'var(--space-xl) 0')
      })}>
        <div style={stryMutAct_9fa48("793") ? {} : (stryCov_9fa48("793"), {
          textAlign: stryMutAct_9fa48("794") ? "" : (stryCov_9fa48("794"), 'center'),
          marginBottom: stryMutAct_9fa48("795") ? "" : (stryCov_9fa48("795"), 'var(--space-xl)')
        })}>
           <span className="sub-label">Architecture</span>
           <h2 className="big-title">Technical Specifications.</h2>
           <p className="text-secondary" style={stryMutAct_9fa48("796") ? {} : (stryCov_9fa48("796"), {
            maxWidth: stryMutAct_9fa48("797") ? "" : (stryCov_9fa48("797"), '600px'),
            margin: stryMutAct_9fa48("798") ? "" : (stryCov_9fa48("798"), '12px auto 0')
          })}>Built with institutional-grade stacks for deterministic accuracy and zero-latency analysis.</p>
        </div>

        <div className="main-content grid-2x2">
          <div className="card-light" style={stryMutAct_9fa48("799") ? {} : (stryCov_9fa48("799"), {
            background: stryMutAct_9fa48("800") ? "" : (stryCov_9fa48("800"), 'white')
          })}>
             <div className="d-flex items-center gap-3 mb-md">
                <Cpu style={stryMutAct_9fa48("801") ? {} : (stryCov_9fa48("801"), {
                color: stryMutAct_9fa48("802") ? "" : (stryCov_9fa48("802"), 'black')
              })} size={24} />
                <h4 style={stryMutAct_9fa48("803") ? {} : (stryCov_9fa48("803"), {
                margin: 0,
                fontSize: stryMutAct_9fa48("804") ? "" : (stryCov_9fa48("804"), '18px')
              })}>Intelligence Layer</h4>
             </div>
             <ul className="text-secondary" style={stryMutAct_9fa48("805") ? {} : (stryCov_9fa48("805"), {
              paddingLeft: stryMutAct_9fa48("806") ? "" : (stryCov_9fa48("806"), '20px'),
              fontSize: stryMutAct_9fa48("807") ? "" : (stryCov_9fa48("807"), '14px'),
              lineHeight: 2
            })}>
                <li>Llama 3.3 70B (State-of-the-art Reasoning)</li>
                <li>Groq Inference Engine (Real-time speed)</li>
                <li>Semantic JSON Schema Mapping</li>
                <li>Context-Aware Document Chunking</li>
             </ul>
          </div>

          <div className="card-light" style={stryMutAct_9fa48("808") ? {} : (stryCov_9fa48("808"), {
            background: stryMutAct_9fa48("809") ? "" : (stryCov_9fa48("809"), 'white')
          })}>
             <div className="d-flex items-center gap-3 mb-md">
                <Server className="text-cyan" size={24} />
                <h4 style={stryMutAct_9fa48("810") ? {} : (stryCov_9fa48("810"), {
                margin: 0,
                fontSize: stryMutAct_9fa48("811") ? "" : (stryCov_9fa48("811"), '18px')
              })}>Core Infrastructure</h4>
             </div>
             <ul className="text-secondary" style={stryMutAct_9fa48("812") ? {} : (stryCov_9fa48("812"), {
              paddingLeft: stryMutAct_9fa48("813") ? "" : (stryCov_9fa48("813"), '20px'),
              fontSize: stryMutAct_9fa48("814") ? "" : (stryCov_9fa48("814"), '14px'),
              lineHeight: 2
            })}>
                <li>FastAPI High-Performance Backend</li>
                <li>PDFPlumber Structural Extraction</li>
                <li>Multi-Format Data Ingestion Engine</li>
                <li>Pandas Vectorized Data Processing</li>
             </ul>
          </div>

          <div className="card-light" style={stryMutAct_9fa48("815") ? {} : (stryCov_9fa48("815"), {
            background: stryMutAct_9fa48("816") ? "" : (stryCov_9fa48("816"), 'white')
          })}>
             <div className="d-flex items-center gap-3 mb-md">
                <Shield className="text-emerald" size={24} />
                <h4 style={stryMutAct_9fa48("817") ? {} : (stryCov_9fa48("817"), {
                margin: 0,
                fontSize: stryMutAct_9fa48("818") ? "" : (stryCov_9fa48("818"), '18px')
              })}>Security & Sovereignty</h4>
             </div>
             <ul className="text-secondary" style={stryMutAct_9fa48("819") ? {} : (stryCov_9fa48("819"), {
              paddingLeft: stryMutAct_9fa48("820") ? "" : (stryCov_9fa48("820"), '20px'),
              fontSize: stryMutAct_9fa48("821") ? "" : (stryCov_9fa48("821"), '14px'),
              lineHeight: 2
            })}>
                <li>AES-256 GCM In-Transit Encryption</li>
                <li>Zero-Retention Ephemeral Processing</li>
                <li>Isolated Memory Execution Nodes</li>
                <li>OAuth 2.0 Identity Standards</li>
             </ul>
          </div>

          <div className="card-light" style={stryMutAct_9fa48("822") ? {} : (stryCov_9fa48("822"), {
            background: stryMutAct_9fa48("823") ? "" : (stryCov_9fa48("823"), 'white')
          })}>
             <div className="d-flex items-center gap-3 mb-md">
                <Globe2 className="text-rose" size={24} />
                <h4 style={stryMutAct_9fa48("824") ? {} : (stryCov_9fa48("824"), {
                margin: 0,
                fontSize: stryMutAct_9fa48("825") ? "" : (stryCov_9fa48("825"), '18px')
              })}>System Fidelity</h4>
             </div>
             <ul className="text-secondary" style={stryMutAct_9fa48("826") ? {} : (stryCov_9fa48("826"), {
              paddingLeft: stryMutAct_9fa48("827") ? "" : (stryCov_9fa48("827"), '20px'),
              fontSize: stryMutAct_9fa48("828") ? "" : (stryCov_9fa48("828"), '14px'),
              lineHeight: 2
            })}>
                <li>GAAP & IFRS Accounting Alignment</li>
                <li>Cross-Document Trend Correlation</li>
                <li>Source-Fidelity Audit Ledgering</li>
                <li>Multi-Entity Comparative Analysis</li>
             </ul>
          </div>
        </div>
      </section>

      {/* ─── FAQ Section ─────────────────────────────────── */}
      <section style={stryMutAct_9fa48("829") ? {} : (stryCov_9fa48("829"), {
        padding: stryMutAct_9fa48("830") ? "" : (stryCov_9fa48("830"), 'var(--space-2xl) 0'),
        maxWidth: stryMutAct_9fa48("831") ? "" : (stryCov_9fa48("831"), '800px'),
        margin: stryMutAct_9fa48("832") ? "" : (stryCov_9fa48("832"), '0 auto')
      })}>
        <div style={stryMutAct_9fa48("833") ? {} : (stryCov_9fa48("833"), {
          textAlign: stryMutAct_9fa48("834") ? "" : (stryCov_9fa48("834"), 'center'),
          marginBottom: stryMutAct_9fa48("835") ? "" : (stryCov_9fa48("835"), 'var(--space-xl)')
        })}>
           <span className="sub-label">Information</span>
           <h2 className="big-title">Common Questions.</h2>
        </div>
        
        <div className="faq-item">
          <div className="faq-question">How is this different from manual Excel modeling?</div>
          <div className="faq-answer">FinGenie automates the extraction and normalization of data from static PDFs and spreadsheets, saving hours of manual data entry while providing AI-detected risk insights that human analysts often miss.</div>
        </div>
        <div className="faq-item">
          <div className="faq-question">Can I trust the AI-generated KPIs?</div>
          <div className="faq-answer">Yes. Every KPI is linked back to the source document. You can verify all synthesized figures in the "Raw Data Ledger" section of the analyzer to ensure 100% source fidelity.</div>
        </div>
        <div className="faq-item">
          <div className="faq-question">Is my financial data stored?</div>
          <div className="faq-answer">No. We maintain a zero-retention policy. Your data exists only in memory during your session and is permanently purged once you close the application or clear the analysis.</div>
        </div>
      </section>

      {/* ─── Final CTA Section ─────────────────────────────── */}
      <section style={stryMutAct_9fa48("836") ? {} : (stryCov_9fa48("836"), {
        padding: stryMutAct_9fa48("837") ? "" : (stryCov_9fa48("837"), 'var(--space-xl) 0'),
        textAlign: stryMutAct_9fa48("838") ? "" : (stryCov_9fa48("838"), 'center')
      })}>
         <div className="cta-portal slide-up" style={stryMutAct_9fa48("839") ? {} : (stryCov_9fa48("839"), {
          maxWidth: stryMutAct_9fa48("840") ? "" : (stryCov_9fa48("840"), '1100px'),
          margin: stryMutAct_9fa48("841") ? "" : (stryCov_9fa48("841"), '0 auto')
        })}>
            <div className="bg-mesh-vibrant" />
            <div className="data-grid-overlay" />
            
            <div style={stryMutAct_9fa48("842") ? {} : (stryCov_9fa48("842"), {
            position: stryMutAct_9fa48("843") ? "" : (stryCov_9fa48("843"), 'relative'),
            zIndex: 1,
            maxWidth: stryMutAct_9fa48("844") ? "" : (stryCov_9fa48("844"), '800px')
          })}>
               <span className="sub-label mb-md" style={stryMutAct_9fa48("845") ? {} : (stryCov_9fa48("845"), {
              color: stryMutAct_9fa48("846") ? "" : (stryCov_9fa48("846"), 'var(--accent-emerald)'),
              opacity: 0.8
            })}>Ready to Transform?</span>
               <h2 className="big-title text-balance cta-highlight" style={stryMutAct_9fa48("847") ? {} : (stryCov_9fa48("847"), {
              fontSize: stryMutAct_9fa48("848") ? "" : (stryCov_9fa48("848"), 'clamp(32px, 5vw, 64px)'),
              marginBottom: stryMutAct_9fa48("849") ? "" : (stryCov_9fa48("849"), 'var(--space-md)')
            })}>
                  Stop Analyzing. <br /> Start Understanding.
               </h2>
               <p className="text-balance" style={stryMutAct_9fa48("850") ? {} : (stryCov_9fa48("850"), {
              fontSize: stryMutAct_9fa48("851") ? "" : (stryCov_9fa48("851"), '20px'),
              color: stryMutAct_9fa48("852") ? "" : (stryCov_9fa48("852"), 'rgba(255,255,255,0.7)'),
              marginBottom: stryMutAct_9fa48("853") ? "" : (stryCov_9fa48("853"), 'var(--space-xl)'),
              lineHeight: 1.6
            })}>
                  Upload your financials and get board-ready strategic insights in seconds. Join the future of institutional intelligence.
               </p>
               
               <div className="d-flex justify-center gap-4 flex-wrap">
                  <button className="btn-primary" style={stryMutAct_9fa48("854") ? {} : (stryCov_9fa48("854"), {
                background: stryMutAct_9fa48("855") ? "" : (stryCov_9fa48("855"), 'white'),
                color: stryMutAct_9fa48("856") ? "" : (stryCov_9fa48("856"), 'var(--accent-blue)'),
                padding: stryMutAct_9fa48("857") ? "" : (stryCov_9fa48("857"), '18px 48px'),
                fontSize: stryMutAct_9fa48("858") ? "" : (stryCov_9fa48("858"), '18px'),
                boxShadow: stryMutAct_9fa48("859") ? "" : (stryCov_9fa48("859"), '0 20px 40px rgba(0,0,0,0.3)')
              })} onClick={scrollToUpload}>
                     <span>Upload Financials Now</span>
                     <ChevronRight size={20} />
                  </button>
               </div>

               <div className="d-flex justify-center gap-5 mt-xl" style={stryMutAct_9fa48("860") ? {} : (stryCov_9fa48("860"), {
              opacity: 0.4
            })}>
                  <div className="d-flex items-center gap-2" style={stryMutAct_9fa48("861") ? {} : (stryCov_9fa48("861"), {
                fontSize: stryMutAct_9fa48("862") ? "" : (stryCov_9fa48("862"), '12px'),
                fontWeight: 700,
                letterSpacing: stryMutAct_9fa48("863") ? "" : (stryCov_9fa48("863"), '1px')
              })}>
                     <Lock size={14} /> SECURE ISO-27001
                  </div>
                  <div className="d-flex items-center gap-2" style={stryMutAct_9fa48("864") ? {} : (stryCov_9fa48("864"), {
                fontSize: stryMutAct_9fa48("865") ? "" : (stryCov_9fa48("865"), '12px'),
                fontWeight: 700,
                letterSpacing: stryMutAct_9fa48("866") ? "" : (stryCov_9fa48("866"), '1px')
              })}>
                     <Shield size={14} /> SOC2 COMPLIANT
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>;
  }
}