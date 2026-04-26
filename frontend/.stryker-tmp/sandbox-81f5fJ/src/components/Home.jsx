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
  if (stryMutAct_9fa48("840")) {
    {}
  } else {
    stryCov_9fa48("840");
    const specsRef = useRef(null);
    const scrollToUpload = () => {
      if (stryMutAct_9fa48("841")) {
        {}
      } else {
        stryCov_9fa48("841");
        window.scrollTo(stryMutAct_9fa48("842") ? {} : (stryCov_9fa48("842"), {
          top: 0,
          behavior: stryMutAct_9fa48("843") ? "" : (stryCov_9fa48("843"), 'smooth')
        }));
      }
    };
    const scrollToSpecs = () => {
      if (stryMutAct_9fa48("844")) {
        {}
      } else {
        stryCov_9fa48("844");
        stryMutAct_9fa48("845") ? specsRef.current.scrollIntoView({
          behavior: 'smooth'
        }) : (stryCov_9fa48("845"), specsRef.current?.scrollIntoView(stryMutAct_9fa48("846") ? {} : (stryCov_9fa48("846"), {
          behavior: stryMutAct_9fa48("847") ? "" : (stryCov_9fa48("847"), 'smooth')
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
              <CheckCircle2 size={16} className="text-emerald" style={stryMutAct_9fa48("848") ? {} : (stryCov_9fa48("848"), {
                color: stryMutAct_9fa48("849") ? "" : (stryCov_9fa48("849"), 'var(--accent-emerald)')
              })} />
              <span>No signup required</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={16} className="text-emerald" style={stryMutAct_9fa48("850") ? {} : (stryCov_9fa48("850"), {
                color: stryMutAct_9fa48("851") ? "" : (stryCov_9fa48("851"), 'var(--accent-emerald)')
              })} />
              <span>AES-256 encrypted</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={16} className="text-emerald" style={stryMutAct_9fa48("852") ? {} : (stryCov_9fa48("852"), {
                color: stryMutAct_9fa48("853") ? "" : (stryCov_9fa48("853"), 'var(--accent-emerald)')
              })} />
              <span>Zero data retention</span>
            </div>
          </div>
        </div>

        <div className="upload-card slide-up" style={stryMutAct_9fa48("854") ? {} : (stryCov_9fa48("854"), {
          animationDelay: stryMutAct_9fa48("855") ? "" : (stryCov_9fa48("855"), '0.2s')
        })}>
          <div className="card-light glass-glow" style={stryMutAct_9fa48("856") ? {} : (stryCov_9fa48("856"), {
            padding: stryMutAct_9fa48("857") ? "" : (stryCov_9fa48("857"), 'var(--space-md)'),
            border: stryMutAct_9fa48("858") ? "" : (stryCov_9fa48("858"), 'none'),
            boxShadow: stryMutAct_9fa48("859") ? "" : (stryCov_9fa48("859"), 'var(--shadow-xl)')
          })}>
            <div className="d-flex items-center gap-3 mb-md">
               <div style={stryMutAct_9fa48("860") ? {} : (stryCov_9fa48("860"), {
                background: stryMutAct_9fa48("861") ? "" : (stryCov_9fa48("861"), 'var(--bg-blue-light)'),
                padding: stryMutAct_9fa48("862") ? "" : (stryCov_9fa48("862"), '10px'),
                borderRadius: stryMutAct_9fa48("863") ? "" : (stryCov_9fa48("863"), '12px')
              })}>
                  <Activity size={20} className="text-accent" />
               </div>
               <div>
                  <h2 className="text-primary font-bold" style={stryMutAct_9fa48("864") ? {} : (stryCov_9fa48("864"), {
                  fontSize: stryMutAct_9fa48("865") ? "" : (stryCov_9fa48("865"), '20px'),
                  margin: 0
                })}>Analyze Document</h2>
                  <p className="text-muted" style={stryMutAct_9fa48("866") ? {} : (stryCov_9fa48("866"), {
                  fontSize: stryMutAct_9fa48("867") ? "" : (stryCov_9fa48("867"), '13px'),
                  margin: 0
                })}>Institutional Ledger Ingestion</p>
               </div>
            </div>
            
            <FileUpload onFileSelect={onFileSelect} isLoading={isLoading} error={error} />
          </div>
        </div>
      </section>


      {/* ─── Outcome-Driven Features ────────────────────────── */}
      <section style={stryMutAct_9fa48("868") ? {} : (stryCov_9fa48("868"), {
        padding: stryMutAct_9fa48("869") ? "" : (stryCov_9fa48("869"), 'var(--space-2xl) 0')
      })}>
        <div style={stryMutAct_9fa48("870") ? {} : (stryCov_9fa48("870"), {
          textAlign: stryMutAct_9fa48("871") ? "" : (stryCov_9fa48("871"), 'center'),
          marginBottom: stryMutAct_9fa48("872") ? "" : (stryCov_9fa48("872"), 'var(--space-xl)')
        })}>
          <span className="sub-label">Capabilities</span>
          <h2 className="big-title">Built for Performance.</h2>
        </div>

        <div className="grid-2x2">
          <div className="card-light hover-lift">
             <div className="mb-md" style={stryMutAct_9fa48("873") ? {} : (stryCov_9fa48("873"), {
              background: stryMutAct_9fa48("874") ? "" : (stryCov_9fa48("874"), 'var(--bg-blue-light)'),
              width: stryMutAct_9fa48("875") ? "" : (stryCov_9fa48("875"), 'fit-content'),
              padding: stryMutAct_9fa48("876") ? "" : (stryCov_9fa48("876"), '16px'),
              borderRadius: stryMutAct_9fa48("877") ? "" : (stryCov_9fa48("877"), '16px')
            })}>
                <Rocket className="text-accent" size={32} />
             </div>
             <h3 style={stryMutAct_9fa48("878") ? {} : (stryCov_9fa48("878"), {
              fontSize: stryMutAct_9fa48("879") ? "" : (stryCov_9fa48("879"), '22px'),
              marginBottom: stryMutAct_9fa48("880") ? "" : (stryCov_9fa48("880"), 'var(--space-xs)')
            })}>No Manual Entry</h3>
             <p className="text-secondary" style={stryMutAct_9fa48("881") ? {} : (stryCov_9fa48("881"), {
              lineHeight: 1.6
            })}>Upload fragmented statements and get structured, audit-ready data instantly. Skip the modeling grunt work.</p>
          </div>
          <div className="card-light hover-lift">
             <div className="mb-md" style={stryMutAct_9fa48("882") ? {} : (stryCov_9fa48("882"), {
              background: stryMutAct_9fa48("883") ? "" : (stryCov_9fa48("883"), 'rgba(235, 29, 72, 0.05)'),
              width: stryMutAct_9fa48("884") ? "" : (stryCov_9fa48("884"), 'fit-content'),
              padding: stryMutAct_9fa48("885") ? "" : (stryCov_9fa48("885"), '16px'),
              borderRadius: stryMutAct_9fa48("886") ? "" : (stryCov_9fa48("886"), '16px')
            })}>
                <Target className="text-rose" size={32} style={stryMutAct_9fa48("887") ? {} : (stryCov_9fa48("887"), {
                color: stryMutAct_9fa48("888") ? "" : (stryCov_9fa48("888"), 'var(--accent-rose)')
              })} />
             </div>
             <h3 style={stryMutAct_9fa48("889") ? {} : (stryCov_9fa48("889"), {
              fontSize: stryMutAct_9fa48("890") ? "" : (stryCov_9fa48("890"), '22px'),
              marginBottom: stryMutAct_9fa48("891") ? "" : (stryCov_9fa48("891"), 'var(--space-xs)')
            })}>Automated Anomalies</h3>
             <p className="text-secondary" style={stryMutAct_9fa48("892") ? {} : (stryCov_9fa48("892"), {
              lineHeight: 1.6
            })}>Identify risks, trends, and financial outliers automatically before they become institutional liabilities.</p>
          </div>
          <div className="card-light hover-lift">
             <div className="mb-md" style={stryMutAct_9fa48("893") ? {} : (stryCov_9fa48("893"), {
              background: stryMutAct_9fa48("894") ? "" : (stryCov_9fa48("894"), 'rgba(8, 145, 178, 0.05)'),
              width: stryMutAct_9fa48("895") ? "" : (stryCov_9fa48("895"), 'fit-content'),
              padding: stryMutAct_9fa48("896") ? "" : (stryCov_9fa48("896"), '16px'),
              borderRadius: stryMutAct_9fa48("897") ? "" : (stryCov_9fa48("897"), '16px')
            })}>
                <PieChart className="text-cyan" size={32} style={stryMutAct_9fa48("898") ? {} : (stryCov_9fa48("898"), {
                color: stryMutAct_9fa48("899") ? "" : (stryCov_9fa48("899"), 'var(--accent-cyan)')
              })} />
             </div>
             <h3 style={stryMutAct_9fa48("900") ? {} : (stryCov_9fa48("900"), {
              fontSize: stryMutAct_9fa48("901") ? "" : (stryCov_9fa48("901"), '22px'),
              marginBottom: stryMutAct_9fa48("902") ? "" : (stryCov_9fa48("902"), 'var(--space-xs)')
            })}>Clean Dashboards</h3>
             <p className="text-secondary" style={stryMutAct_9fa48("903") ? {} : (stryCov_9fa48("903"), {
              lineHeight: 1.6
            })}>Instant visualization for liquidity, burn rate, and performance momentum using institutional standard design.</p>
          </div>
          <div className="card-light hover-lift">
             <div className="mb-md" style={stryMutAct_9fa48("904") ? {} : (stryCov_9fa48("904"), {
              background: stryMutAct_9fa48("905") ? "" : (stryCov_9fa48("905"), 'rgba(5, 150, 105, 0.05)'),
              width: stryMutAct_9fa48("906") ? "" : (stryCov_9fa48("906"), 'fit-content'),
              padding: stryMutAct_9fa48("907") ? "" : (stryCov_9fa48("907"), '16px'),
              borderRadius: stryMutAct_9fa48("908") ? "" : (stryCov_9fa48("908"), '16px')
            })}>
                <Database className="text-emerald" size={32} style={stryMutAct_9fa48("909") ? {} : (stryCov_9fa48("909"), {
                color: stryMutAct_9fa48("910") ? "" : (stryCov_9fa48("910"), 'var(--accent-emerald)')
              })} />
             </div>
             <h3 style={stryMutAct_9fa48("911") ? {} : (stryCov_9fa48("911"), {
              fontSize: stryMutAct_9fa48("912") ? "" : (stryCov_9fa48("912"), '22px'),
              marginBottom: stryMutAct_9fa48("913") ? "" : (stryCov_9fa48("913"), 'var(--space-xs)')
            })}>Institutional Intelligence</h3>
             <p className="text-secondary" style={stryMutAct_9fa48("914") ? {} : (stryCov_9fa48("914"), {
              lineHeight: 1.6
            })}>Process complex financial datasets and generate audit-ready competitive landscape reports in seconds.</p>
          </div>
        </div>
      </section>

      {/* ─── Storytelling Pipeline ─────────────────────────── */}
      <section style={stryMutAct_9fa48("915") ? {} : (stryCov_9fa48("915"), {
        padding: stryMutAct_9fa48("916") ? "" : (stryCov_9fa48("916"), 'var(--space-2xl) 0')
      })}>
        <div style={stryMutAct_9fa48("917") ? {} : (stryCov_9fa48("917"), {
          textAlign: stryMutAct_9fa48("918") ? "" : (stryCov_9fa48("918"), 'center'),
          marginBottom: stryMutAct_9fa48("919") ? "" : (stryCov_9fa48("919"), 'var(--space-xl)')
        })}>
          <span className="sub-label">Implementation</span>
          <h2 className="big-title">Three Steps to Insight.</h2>
        </div>
        
        <div className="pipeline-container">
          <div className="pipeline-step">
            <div className="card-light hover-lift d-flex flex-column" style={stryMutAct_9fa48("920") ? {} : (stryCov_9fa48("920"), {
              height: stryMutAct_9fa48("921") ? "" : (stryCov_9fa48("921"), '100%'),
              padding: stryMutAct_9fa48("922") ? "" : (stryCov_9fa48("922"), '40px')
            })}>
              <div className="mb-md" style={stryMutAct_9fa48("923") ? {} : (stryCov_9fa48("923"), {
                color: stryMutAct_9fa48("924") ? "" : (stryCov_9fa48("924"), 'var(--accent-blue)')
              })}><Upload size={32} /></div>
              <h3 className="section-heading__label mb-sm" style={stryMutAct_9fa48("925") ? {} : (stryCov_9fa48("925"), {
                color: stryMutAct_9fa48("926") ? "" : (stryCov_9fa48("926"), 'var(--accent-blue)'),
                opacity: 0.8
              })}>01 Ingestion</h3>
              <p className="text-secondary" style={stryMutAct_9fa48("927") ? {} : (stryCov_9fa48("927"), {
                fontSize: stryMutAct_9fa48("928") ? "" : (stryCov_9fa48("928"), '15px')
              })}>Upload institutional financial PDFs, Excel sheets, or CSV files for automated auditing.</p>
            </div>
          </div>

          <div className="pipeline-connector d-none d-lg-block"><ChevronRight /></div>

          <div className="pipeline-step">
            <div className="card-light hover-lift d-flex flex-column" style={stryMutAct_9fa48("929") ? {} : (stryCov_9fa48("929"), {
              height: stryMutAct_9fa48("930") ? "" : (stryCov_9fa48("930"), '100%'),
              padding: stryMutAct_9fa48("931") ? "" : (stryCov_9fa48("931"), '40px')
            })}>
              <div className="mb-md" style={stryMutAct_9fa48("932") ? {} : (stryCov_9fa48("932"), {
                color: stryMutAct_9fa48("933") ? "" : (stryCov_9fa48("933"), 'var(--accent-blue)')
              })}><Search size={32} /></div>
              <h3 className="section-heading__label mb-sm" style={stryMutAct_9fa48("934") ? {} : (stryCov_9fa48("934"), {
                color: stryMutAct_9fa48("935") ? "" : (stryCov_9fa48("935"), 'var(--accent-blue)'),
                opacity: 0.8
              })}>02 Semantic Parsing</h3>
              <p className="text-secondary" style={stryMutAct_9fa48("936") ? {} : (stryCov_9fa48("936"), {
                fontSize: stryMutAct_9fa48("937") ? "" : (stryCov_9fa48("937"), '15px')
              })}>Neural mapping of line items to institutional standard GAAP/IFRS vectors using Llama 3 LLMs.</p>
            </div>
          </div>

          <div className="pipeline-connector d-none d-lg-block"><ChevronRight /></div>

          <div className="pipeline-step">
            <div className="card-light hover-lift d-flex flex-column" style={stryMutAct_9fa48("938") ? {} : (stryCov_9fa48("938"), {
              height: stryMutAct_9fa48("939") ? "" : (stryCov_9fa48("939"), '100%'),
              padding: stryMutAct_9fa48("940") ? "" : (stryCov_9fa48("940"), '40px')
            })}>
              <div className="mb-md" style={stryMutAct_9fa48("941") ? {} : (stryCov_9fa48("941"), {
                color: stryMutAct_9fa48("942") ? "" : (stryCov_9fa48("942"), 'var(--accent-blue)')
              })}><Zap size={32} /></div>
              <h3 className="section-heading__label mb-sm" style={stryMutAct_9fa48("943") ? {} : (stryCov_9fa48("943"), {
                color: stryMutAct_9fa48("944") ? "" : (stryCov_9fa48("944"), 'var(--accent-blue)'),
                opacity: 0.8
              })}>03 Intelligence</h3>
              <p className="text-secondary" style={stryMutAct_9fa48("945") ? {} : (stryCov_9fa48("945"), {
                fontSize: stryMutAct_9fa48("946") ? "" : (stryCov_9fa48("946"), '15px')
              })}>Instant generation of KPI grids, risk matrices, and board-ready strategic summaries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Security Section ─────────────────────────────── */}
      <section style={stryMutAct_9fa48("947") ? {} : (stryCov_9fa48("947"), {
        margin: stryMutAct_9fa48("948") ? "" : (stryCov_9fa48("948"), 'var(--space-2xl) 0'),
        padding: stryMutAct_9fa48("949") ? "" : (stryCov_9fa48("949"), 'var(--space-xl) 5%'),
        background: stryMutAct_9fa48("950") ? "" : (stryCov_9fa48("950"), 'var(--bg-navy)'),
        borderRadius: stryMutAct_9fa48("951") ? "" : (stryCov_9fa48("951"), 'var(--radius-xl)'),
        color: stryMutAct_9fa48("952") ? "" : (stryCov_9fa48("952"), 'white'),
        position: stryMutAct_9fa48("953") ? "" : (stryCov_9fa48("953"), 'relative'),
        overflow: stryMutAct_9fa48("954") ? "" : (stryCov_9fa48("954"), 'hidden')
      })}>
        <div style={stryMutAct_9fa48("955") ? {} : (stryCov_9fa48("955"), {
          position: stryMutAct_9fa48("956") ? "" : (stryCov_9fa48("956"), 'absolute'),
          top: stryMutAct_9fa48("957") ? "" : (stryCov_9fa48("957"), '-100px'),
          left: stryMutAct_9fa48("958") ? "" : (stryCov_9fa48("958"), '-100px'),
          width: stryMutAct_9fa48("959") ? "" : (stryCov_9fa48("959"), '300px'),
          height: stryMutAct_9fa48("960") ? "" : (stryCov_9fa48("960"), '300px'),
          background: stryMutAct_9fa48("961") ? "" : (stryCov_9fa48("961"), 'var(--accent-blue)'),
          opacity: 0.15,
          borderRadius: stryMutAct_9fa48("962") ? "" : (stryCov_9fa48("962"), '50%'),
          filter: stryMutAct_9fa48("963") ? "" : (stryCov_9fa48("963"), 'blur(100px)')
        })}></div>
        <div style={stryMutAct_9fa48("964") ? {} : (stryCov_9fa48("964"), {
          position: stryMutAct_9fa48("965") ? "" : (stryCov_9fa48("965"), 'relative'),
          zIndex: 1
        })}>
          <div className="grid-cols-12" style={stryMutAct_9fa48("966") ? {} : (stryCov_9fa48("966"), {
            alignItems: stryMutAct_9fa48("967") ? "" : (stryCov_9fa48("967"), 'center'),
            gap: stryMutAct_9fa48("968") ? "" : (stryCov_9fa48("968"), 'var(--space-xl)')
          })}>
            <div className="col-span-12 col-span-lg-7">
              <span className="sub-label" style={stryMutAct_9fa48("969") ? {} : (stryCov_9fa48("969"), {
                color: stryMutAct_9fa48("970") ? "" : (stryCov_9fa48("970"), 'var(--accent-emerald)')
              })}>Privacy & Sovereignty</span>
              <h2 className="big-title" style={stryMutAct_9fa48("971") ? {} : (stryCov_9fa48("971"), {
                color: stryMutAct_9fa48("972") ? "" : (stryCov_9fa48("972"), 'white'),
                fontSize: stryMutAct_9fa48("973") ? "" : (stryCov_9fa48("973"), 'clamp(32px, 5vw, 56px)'),
                marginBottom: stryMutAct_9fa48("974") ? "" : (stryCov_9fa48("974"), 'var(--space-md)')
              })}>Your data stays yours.</h2>
              <p style={stryMutAct_9fa48("975") ? {} : (stryCov_9fa48("975"), {
                fontSize: stryMutAct_9fa48("976") ? "" : (stryCov_9fa48("976"), '18px'),
                opacity: 0.7,
                lineHeight: 1.7,
                marginBottom: stryMutAct_9fa48("977") ? "" : (stryCov_9fa48("977"), 'var(--space-lg)')
              })}>
                FinGenie utilizes an ephemeral "process-and-purge" cycle. We process your data in volatile memory nodes and delete it the moment your session ends.
              </p>
              <div className="d-flex gap-responsive flex-wrap">
                 <div className="d-flex flex-column gap-1">
                    <div className="metric-big" style={stryMutAct_9fa48("978") ? {} : (stryCov_9fa48("978"), {
                    color: stryMutAct_9fa48("979") ? "" : (stryCov_9fa48("979"), 'white'),
                    fontSize: stryMutAct_9fa48("980") ? "" : (stryCov_9fa48("980"), '32px')
                  })}>AES-256</div>
                    <div style={stryMutAct_9fa48("981") ? {} : (stryCov_9fa48("981"), {
                    fontSize: stryMutAct_9fa48("982") ? "" : (stryCov_9fa48("982"), '10px'),
                    opacity: 0.5,
                    fontWeight: 800,
                    letterSpacing: stryMutAct_9fa48("983") ? "" : (stryCov_9fa48("983"), '2px'),
                    maxWidth: stryMutAct_9fa48("984") ? "" : (stryCov_9fa48("984"), '140px')
                  })}>ENCRYPTION STANDARD</div>
                 </div>
                 <div className="d-flex flex-column gap-1">
                    <div className="metric-big" style={stryMutAct_9fa48("985") ? {} : (stryCov_9fa48("985"), {
                    color: stryMutAct_9fa48("986") ? "" : (stryCov_9fa48("986"), 'white'),
                    fontSize: stryMutAct_9fa48("987") ? "" : (stryCov_9fa48("987"), '32px')
                  })}>ZERO</div>
                    <div style={stryMutAct_9fa48("988") ? {} : (stryCov_9fa48("988"), {
                    fontSize: stryMutAct_9fa48("989") ? "" : (stryCov_9fa48("989"), '10px'),
                    opacity: 0.5,
                    fontWeight: 800,
                    letterSpacing: stryMutAct_9fa48("990") ? "" : (stryCov_9fa48("990"), '2px'),
                    maxWidth: stryMutAct_9fa48("991") ? "" : (stryCov_9fa48("991"), '140px')
                  })}>DATA RETENTION</div>
                 </div>
              </div>
            </div>
            <div className="col-span-12 col-span-lg-5">
               <div className="card-light" style={stryMutAct_9fa48("992") ? {} : (stryCov_9fa48("992"), {
                background: stryMutAct_9fa48("993") ? "" : (stryCov_9fa48("993"), 'rgba(255,255,255,0.05)'),
                border: stryMutAct_9fa48("994") ? "" : (stryCov_9fa48("994"), '1px solid rgba(255,255,255,0.1)'),
                color: stryMutAct_9fa48("995") ? "" : (stryCov_9fa48("995"), 'white'),
                padding: stryMutAct_9fa48("996") ? "" : (stryCov_9fa48("996"), '40px')
              })}>
                  <div className="d-flex flex-column gap-5">
                    <div className="d-flex gap-4">
                       <Shield className="text-emerald" size={28} style={stryMutAct_9fa48("997") ? {} : (stryCov_9fa48("997"), {
                      color: stryMutAct_9fa48("998") ? "" : (stryCov_9fa48("998"), 'var(--accent-emerald)')
                    })} />
                       <div>
                          <div className="font-bold" style={stryMutAct_9fa48("999") ? {} : (stryCov_9fa48("999"), {
                        fontSize: stryMutAct_9fa48("1000") ? "" : (stryCov_9fa48("1000"), '18px'),
                        marginBottom: stryMutAct_9fa48("1001") ? "" : (stryCov_9fa48("1001"), '4px')
                      })}>Isolated Sandbox</div>
                          <div style={stryMutAct_9fa48("1002") ? {} : (stryCov_9fa48("1002"), {
                        fontSize: stryMutAct_9fa48("1003") ? "" : (stryCov_9fa48("1003"), '14px'),
                        opacity: 0.6
                      })}>Every file is analyzed in a strictly single-use compute node.</div>
                       </div>
                    </div>
                    <div className="d-flex gap-4">
                       <Lock className="text-cyan" size={28} style={stryMutAct_9fa48("1004") ? {} : (stryCov_9fa48("1004"), {
                      color: stryMutAct_9fa48("1005") ? "" : (stryCov_9fa48("1005"), 'var(--accent-cyan)')
                    })} />
                       <div>
                          <div className="font-bold" style={stryMutAct_9fa48("1006") ? {} : (stryCov_9fa48("1006"), {
                        fontSize: stryMutAct_9fa48("1007") ? "" : (stryCov_9fa48("1007"), '18px'),
                        marginBottom: stryMutAct_9fa48("1008") ? "" : (stryCov_9fa48("1008"), '4px')
                      })}>Private Inference</div>
                          <div style={stryMutAct_9fa48("1009") ? {} : (stryCov_9fa48("1009"), {
                        fontSize: stryMutAct_9fa48("1010") ? "" : (stryCov_9fa48("1010"), '14px'),
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
      <section ref={specsRef} style={stryMutAct_9fa48("1011") ? {} : (stryCov_9fa48("1011"), {
        padding: stryMutAct_9fa48("1012") ? "" : (stryCov_9fa48("1012"), 'var(--space-2xl) 0'),
        background: stryMutAct_9fa48("1013") ? "" : (stryCov_9fa48("1013"), 'var(--bg-blue-light)'),
        borderRadius: stryMutAct_9fa48("1014") ? "" : (stryCov_9fa48("1014"), 'var(--radius-xl)'),
        margin: stryMutAct_9fa48("1015") ? "" : (stryCov_9fa48("1015"), 'var(--space-xl) 0')
      })}>
        <div style={stryMutAct_9fa48("1016") ? {} : (stryCov_9fa48("1016"), {
          textAlign: stryMutAct_9fa48("1017") ? "" : (stryCov_9fa48("1017"), 'center'),
          marginBottom: stryMutAct_9fa48("1018") ? "" : (stryCov_9fa48("1018"), 'var(--space-xl)')
        })}>
           <span className="sub-label">Architecture</span>
           <h2 className="big-title">Technical Specifications.</h2>
           <p className="text-secondary" style={stryMutAct_9fa48("1019") ? {} : (stryCov_9fa48("1019"), {
            maxWidth: stryMutAct_9fa48("1020") ? "" : (stryCov_9fa48("1020"), '600px'),
            margin: stryMutAct_9fa48("1021") ? "" : (stryCov_9fa48("1021"), '12px auto 0')
          })}>Built with institutional-grade stacks for deterministic accuracy and zero-latency analysis.</p>
        </div>

        <div className="main-content grid-2x2">
          <div className="card-light" style={stryMutAct_9fa48("1022") ? {} : (stryCov_9fa48("1022"), {
            background: stryMutAct_9fa48("1023") ? "" : (stryCov_9fa48("1023"), 'white')
          })}>
             <div className="d-flex items-center gap-3 mb-md">
                <Cpu style={stryMutAct_9fa48("1024") ? {} : (stryCov_9fa48("1024"), {
                color: stryMutAct_9fa48("1025") ? "" : (stryCov_9fa48("1025"), 'black')
              })} size={24} />
                <h4 style={stryMutAct_9fa48("1026") ? {} : (stryCov_9fa48("1026"), {
                margin: 0,
                fontSize: stryMutAct_9fa48("1027") ? "" : (stryCov_9fa48("1027"), '18px')
              })}>Intelligence Layer</h4>
             </div>
             <ul className="text-secondary" style={stryMutAct_9fa48("1028") ? {} : (stryCov_9fa48("1028"), {
              paddingLeft: stryMutAct_9fa48("1029") ? "" : (stryCov_9fa48("1029"), '20px'),
              fontSize: stryMutAct_9fa48("1030") ? "" : (stryCov_9fa48("1030"), '14px'),
              lineHeight: 2
            })}>
                <li>Llama 3.3 70B (State-of-the-art Reasoning)</li>
                <li>Groq Inference Engine (Real-time speed)</li>
                <li>Semantic JSON Schema Mapping</li>
                <li>Context-Aware Document Chunking</li>
             </ul>
          </div>

          <div className="card-light" style={stryMutAct_9fa48("1031") ? {} : (stryCov_9fa48("1031"), {
            background: stryMutAct_9fa48("1032") ? "" : (stryCov_9fa48("1032"), 'white')
          })}>
             <div className="d-flex items-center gap-3 mb-md">
                <Server className="text-cyan" size={24} />
                <h4 style={stryMutAct_9fa48("1033") ? {} : (stryCov_9fa48("1033"), {
                margin: 0,
                fontSize: stryMutAct_9fa48("1034") ? "" : (stryCov_9fa48("1034"), '18px')
              })}>Core Infrastructure</h4>
             </div>
             <ul className="text-secondary" style={stryMutAct_9fa48("1035") ? {} : (stryCov_9fa48("1035"), {
              paddingLeft: stryMutAct_9fa48("1036") ? "" : (stryCov_9fa48("1036"), '20px'),
              fontSize: stryMutAct_9fa48("1037") ? "" : (stryCov_9fa48("1037"), '14px'),
              lineHeight: 2
            })}>
                <li>FastAPI High-Performance Backend</li>
                <li>PDFPlumber Structural Extraction</li>
                <li>Multi-Format Data Ingestion Engine</li>
                <li>Pandas Vectorized Data Processing</li>
             </ul>
          </div>

          <div className="card-light" style={stryMutAct_9fa48("1038") ? {} : (stryCov_9fa48("1038"), {
            background: stryMutAct_9fa48("1039") ? "" : (stryCov_9fa48("1039"), 'white')
          })}>
             <div className="d-flex items-center gap-3 mb-md">
                <Shield className="text-emerald" size={24} />
                <h4 style={stryMutAct_9fa48("1040") ? {} : (stryCov_9fa48("1040"), {
                margin: 0,
                fontSize: stryMutAct_9fa48("1041") ? "" : (stryCov_9fa48("1041"), '18px')
              })}>Security & Sovereignty</h4>
             </div>
             <ul className="text-secondary" style={stryMutAct_9fa48("1042") ? {} : (stryCov_9fa48("1042"), {
              paddingLeft: stryMutAct_9fa48("1043") ? "" : (stryCov_9fa48("1043"), '20px'),
              fontSize: stryMutAct_9fa48("1044") ? "" : (stryCov_9fa48("1044"), '14px'),
              lineHeight: 2
            })}>
                <li>AES-256 GCM In-Transit Encryption</li>
                <li>Zero-Retention Ephemeral Processing</li>
                <li>Isolated Memory Execution Nodes</li>
                <li>OAuth 2.0 Identity Standards</li>
             </ul>
          </div>

          <div className="card-light" style={stryMutAct_9fa48("1045") ? {} : (stryCov_9fa48("1045"), {
            background: stryMutAct_9fa48("1046") ? "" : (stryCov_9fa48("1046"), 'white')
          })}>
             <div className="d-flex items-center gap-3 mb-md">
                <Globe2 className="text-rose" size={24} />
                <h4 style={stryMutAct_9fa48("1047") ? {} : (stryCov_9fa48("1047"), {
                margin: 0,
                fontSize: stryMutAct_9fa48("1048") ? "" : (stryCov_9fa48("1048"), '18px')
              })}>System Fidelity</h4>
             </div>
             <ul className="text-secondary" style={stryMutAct_9fa48("1049") ? {} : (stryCov_9fa48("1049"), {
              paddingLeft: stryMutAct_9fa48("1050") ? "" : (stryCov_9fa48("1050"), '20px'),
              fontSize: stryMutAct_9fa48("1051") ? "" : (stryCov_9fa48("1051"), '14px'),
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
      <section style={stryMutAct_9fa48("1052") ? {} : (stryCov_9fa48("1052"), {
        padding: stryMutAct_9fa48("1053") ? "" : (stryCov_9fa48("1053"), 'var(--space-2xl) 0'),
        maxWidth: stryMutAct_9fa48("1054") ? "" : (stryCov_9fa48("1054"), '800px'),
        margin: stryMutAct_9fa48("1055") ? "" : (stryCov_9fa48("1055"), '0 auto')
      })}>
        <div style={stryMutAct_9fa48("1056") ? {} : (stryCov_9fa48("1056"), {
          textAlign: stryMutAct_9fa48("1057") ? "" : (stryCov_9fa48("1057"), 'center'),
          marginBottom: stryMutAct_9fa48("1058") ? "" : (stryCov_9fa48("1058"), 'var(--space-xl)')
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
      <section style={stryMutAct_9fa48("1059") ? {} : (stryCov_9fa48("1059"), {
        padding: stryMutAct_9fa48("1060") ? "" : (stryCov_9fa48("1060"), 'var(--space-xl) 0'),
        textAlign: stryMutAct_9fa48("1061") ? "" : (stryCov_9fa48("1061"), 'center')
      })}>
         <div className="cta-portal slide-up" style={stryMutAct_9fa48("1062") ? {} : (stryCov_9fa48("1062"), {
          maxWidth: stryMutAct_9fa48("1063") ? "" : (stryCov_9fa48("1063"), '1100px'),
          margin: stryMutAct_9fa48("1064") ? "" : (stryCov_9fa48("1064"), '0 auto')
        })}>
            <div className="bg-mesh-vibrant" />
            <div className="data-grid-overlay" />
            
            <div style={stryMutAct_9fa48("1065") ? {} : (stryCov_9fa48("1065"), {
            position: stryMutAct_9fa48("1066") ? "" : (stryCov_9fa48("1066"), 'relative'),
            zIndex: 1,
            maxWidth: stryMutAct_9fa48("1067") ? "" : (stryCov_9fa48("1067"), '800px')
          })}>
               <span className="sub-label mb-md" style={stryMutAct_9fa48("1068") ? {} : (stryCov_9fa48("1068"), {
              color: stryMutAct_9fa48("1069") ? "" : (stryCov_9fa48("1069"), 'var(--accent-emerald)'),
              opacity: 0.8
            })}>Ready to Transform?</span>
               <h2 className="big-title text-balance cta-highlight" style={stryMutAct_9fa48("1070") ? {} : (stryCov_9fa48("1070"), {
              fontSize: stryMutAct_9fa48("1071") ? "" : (stryCov_9fa48("1071"), 'clamp(32px, 5vw, 64px)'),
              marginBottom: stryMutAct_9fa48("1072") ? "" : (stryCov_9fa48("1072"), 'var(--space-md)')
            })}>
                  Stop Analyzing. <br /> Start Understanding.
               </h2>
               <p className="text-balance" style={stryMutAct_9fa48("1073") ? {} : (stryCov_9fa48("1073"), {
              fontSize: stryMutAct_9fa48("1074") ? "" : (stryCov_9fa48("1074"), '20px'),
              color: stryMutAct_9fa48("1075") ? "" : (stryCov_9fa48("1075"), 'rgba(255,255,255,0.7)'),
              marginBottom: stryMutAct_9fa48("1076") ? "" : (stryCov_9fa48("1076"), 'var(--space-xl)'),
              lineHeight: 1.6
            })}>
                  Upload your financials and get board-ready strategic insights in seconds. Join the future of institutional intelligence.
               </p>
               
               <div className="d-flex justify-center gap-4 flex-wrap">
                  <button className="btn-primary" style={stryMutAct_9fa48("1077") ? {} : (stryCov_9fa48("1077"), {
                background: stryMutAct_9fa48("1078") ? "" : (stryCov_9fa48("1078"), 'white'),
                color: stryMutAct_9fa48("1079") ? "" : (stryCov_9fa48("1079"), 'var(--accent-blue)'),
                padding: stryMutAct_9fa48("1080") ? "" : (stryCov_9fa48("1080"), '18px 48px'),
                fontSize: stryMutAct_9fa48("1081") ? "" : (stryCov_9fa48("1081"), '18px'),
                boxShadow: stryMutAct_9fa48("1082") ? "" : (stryCov_9fa48("1082"), '0 20px 40px rgba(0,0,0,0.3)')
              })} onClick={scrollToUpload}>
                     <span>Upload Financials Now</span>
                     <ChevronRight size={20} />
                  </button>
               </div>

               <div className="d-flex justify-center gap-5 mt-xl" style={stryMutAct_9fa48("1083") ? {} : (stryCov_9fa48("1083"), {
              opacity: 0.4
            })}>
                  <div className="d-flex items-center gap-2" style={stryMutAct_9fa48("1084") ? {} : (stryCov_9fa48("1084"), {
                fontSize: stryMutAct_9fa48("1085") ? "" : (stryCov_9fa48("1085"), '12px'),
                fontWeight: 700,
                letterSpacing: stryMutAct_9fa48("1086") ? "" : (stryCov_9fa48("1086"), '1px')
              })}>
                     <Lock size={14} /> SECURE ISO-27001
                  </div>
                  <div className="d-flex items-center gap-2" style={stryMutAct_9fa48("1087") ? {} : (stryCov_9fa48("1087"), {
                fontSize: stryMutAct_9fa48("1088") ? "" : (stryCov_9fa48("1088"), '12px'),
                fontWeight: 700,
                letterSpacing: stryMutAct_9fa48("1089") ? "" : (stryCov_9fa48("1089"), '1px')
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