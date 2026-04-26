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
import { useState, useEffect } from 'react';
import { Home as HomeIcon, BarChart3, TrendingUp, ShieldAlert, FileText, PlusCircle, Info, Lock, Scale, FileCheck } from 'lucide-react';
import Home from './components/Home';
import About from './components/About';
import Analyzer from './components/Analyzer';
import TrendsAudit from './components/TrendsAudit';
import RiskAssessment from './components/RiskAssessment';
import Privacy from './components/Privacy';
import Compliance from './components/Compliance';
import Terms from './components/Terms';
import DocChat from './components/DocChat';
import ReportCenter from './components/ReportCenter';
import { uploadAndAnalyze } from './api/client';
import './index.css';
export default function App() {
  if (stryMutAct_9fa48("15")) {
    {}
  } else {
    stryCov_9fa48("15");
    const [activeTab, setActiveTab] = useState(stryMutAct_9fa48("16") ? "" : (stryCov_9fa48("16"), 'home'));
    const [result, setResult] = useState(null);
    const [isLoading, setIsLoading] = useState(stryMutAct_9fa48("17") ? true : (stryCov_9fa48("17"), false));
    const [error, setError] = useState(null);

    // --- Hash Routing Sync & Reload Redirect ---
    useEffect(() => {
      if (stryMutAct_9fa48("18")) {
        {}
      } else {
        stryCov_9fa48("18");
        // 1. Detect if this is a page reload/refresh
        const [navigation] = performance.getEntriesByType(stryMutAct_9fa48("19") ? "" : (stryCov_9fa48("19"), 'navigation'));
        const isReload = stryMutAct_9fa48("22") ? navigation?.type !== 'reload' : stryMutAct_9fa48("21") ? false : stryMutAct_9fa48("20") ? true : (stryCov_9fa48("20", "21", "22"), (stryMutAct_9fa48("23") ? navigation.type : (stryCov_9fa48("23"), navigation?.type)) === (stryMutAct_9fa48("24") ? "" : (stryCov_9fa48("24"), 'reload')));
        const handleHashChange = () => {
          if (stryMutAct_9fa48("25")) {
            {}
          } else {
            stryCov_9fa48("25");
            const hash = window.location.hash.replace(stryMutAct_9fa48("26") ? "" : (stryCov_9fa48("26"), '#'), stryMutAct_9fa48("27") ? "Stryker was here!" : (stryCov_9fa48("27"), ''));
            const validTabs = stryMutAct_9fa48("28") ? [] : (stryCov_9fa48("28"), [stryMutAct_9fa48("29") ? "" : (stryCov_9fa48("29"), 'home'), stryMutAct_9fa48("30") ? "" : (stryCov_9fa48("30"), 'about'), stryMutAct_9fa48("31") ? "" : (stryCov_9fa48("31"), 'analyzer'), stryMutAct_9fa48("32") ? "" : (stryCov_9fa48("32"), 'trends'), stryMutAct_9fa48("33") ? "" : (stryCov_9fa48("33"), 'risk'), stryMutAct_9fa48("34") ? "" : (stryCov_9fa48("34"), 'reports'), stryMutAct_9fa48("35") ? "" : (stryCov_9fa48("35"), 'privacy'), stryMutAct_9fa48("36") ? "" : (stryCov_9fa48("36"), 'compliance'), stryMutAct_9fa48("37") ? "" : (stryCov_9fa48("37"), 'terms')]);
            if (stryMutAct_9fa48("39") ? false : stryMutAct_9fa48("38") ? true : (stryCov_9fa48("38", "39"), validTabs.includes(hash))) {
              if (stryMutAct_9fa48("40")) {
                {}
              } else {
                stryCov_9fa48("40");
                setActiveTab(hash);
              }
            } else {
              if (stryMutAct_9fa48("41")) {
                {}
              } else {
                stryCov_9fa48("41");
                // Fallback or default to home
                setActiveTab(stryMutAct_9fa48("42") ? "" : (stryCov_9fa48("42"), 'home'));
              }
            }
          }
        };

        // 2. If reload occurs on a deep link/fragment, redirect to home
        if (stryMutAct_9fa48("45") ? isReload && window.location.hash !== '' || window.location.hash !== '#home' : stryMutAct_9fa48("44") ? false : stryMutAct_9fa48("43") ? true : (stryCov_9fa48("43", "44", "45"), (stryMutAct_9fa48("47") ? isReload || window.location.hash !== '' : stryMutAct_9fa48("46") ? true : (stryCov_9fa48("46", "47"), isReload && (stryMutAct_9fa48("49") ? window.location.hash === '' : stryMutAct_9fa48("48") ? true : (stryCov_9fa48("48", "49"), window.location.hash !== (stryMutAct_9fa48("50") ? "Stryker was here!" : (stryCov_9fa48("50"), '')))))) && (stryMutAct_9fa48("52") ? window.location.hash === '#home' : stryMutAct_9fa48("51") ? true : (stryCov_9fa48("51", "52"), window.location.hash !== (stryMutAct_9fa48("53") ? "" : (stryCov_9fa48("53"), '#home')))))) {
          if (stryMutAct_9fa48("54")) {
            {}
          } else {
            stryCov_9fa48("54");
            window.location.hash = stryMutAct_9fa48("55") ? "Stryker was here!" : (stryCov_9fa48("55"), ''); // Clear hash
            setActiveTab(stryMutAct_9fa48("56") ? "" : (stryCov_9fa48("56"), 'home')); // Reset state
          }
        } else {
          if (stryMutAct_9fa48("57")) {
            {}
          } else {
            stryCov_9fa48("57");
            // Normal mount or navigation
            handleHashChange();
          }
        }
        window.addEventListener(stryMutAct_9fa48("58") ? "" : (stryCov_9fa48("58"), 'hashchange'), handleHashChange);
        return stryMutAct_9fa48("59") ? () => undefined : (stryCov_9fa48("59"), () => window.removeEventListener(stryMutAct_9fa48("60") ? "" : (stryCov_9fa48("60"), 'hashchange'), handleHashChange));
      }
    }, stryMutAct_9fa48("61") ? ["Stryker was here"] : (stryCov_9fa48("61"), []));

    // Sync scroll on tab change
    useEffect(() => {
      if (stryMutAct_9fa48("62")) {
        {}
      } else {
        stryCov_9fa48("62");
        window.scrollTo(stryMutAct_9fa48("63") ? {} : (stryCov_9fa48("63"), {
          top: 0,
          behavior: stryMutAct_9fa48("64") ? "" : (stryCov_9fa48("64"), 'instant')
        }));
      }
    }, stryMutAct_9fa48("65") ? [] : (stryCov_9fa48("65"), [activeTab]));
    const navigateTo = tab => {
      if (stryMutAct_9fa48("66")) {
        {}
      } else {
        stryCov_9fa48("66");
        window.location.hash = (stryMutAct_9fa48("69") ? tab !== 'home' : stryMutAct_9fa48("68") ? false : stryMutAct_9fa48("67") ? true : (stryCov_9fa48("67", "68", "69"), tab === (stryMutAct_9fa48("70") ? "" : (stryCov_9fa48("70"), 'home')))) ? stryMutAct_9fa48("71") ? "Stryker was here!" : (stryCov_9fa48("71"), '') : tab;
      }
    };
    const handleFileSelect = async file => {
      if (stryMutAct_9fa48("72")) {
        {}
      } else {
        stryCov_9fa48("72");
        setIsLoading(stryMutAct_9fa48("73") ? false : (stryCov_9fa48("73"), true));
        setError(null);
        setResult(null);
        try {
          if (stryMutAct_9fa48("74")) {
            {}
          } else {
            stryCov_9fa48("74");
            const data = await uploadAndAnalyze(file);
            setResult(data);
            navigateTo(stryMutAct_9fa48("75") ? "" : (stryCov_9fa48("75"), 'analyzer'));
          }
        } catch (err) {
          if (stryMutAct_9fa48("76")) {
            {}
          } else {
            stryCov_9fa48("76");
            const msg = stryMutAct_9fa48("79") ? (err.response?.data?.detail || err.message) && 'An unexpected error occurred.' : stryMutAct_9fa48("78") ? false : stryMutAct_9fa48("77") ? true : (stryCov_9fa48("77", "78", "79"), (stryMutAct_9fa48("81") ? err.response?.data?.detail && err.message : stryMutAct_9fa48("80") ? false : (stryCov_9fa48("80", "81"), (stryMutAct_9fa48("83") ? err.response.data?.detail : stryMutAct_9fa48("82") ? err.response?.data.detail : (stryCov_9fa48("82", "83"), err.response?.data?.detail)) || err.message)) || (stryMutAct_9fa48("84") ? "" : (stryCov_9fa48("84"), 'An unexpected error occurred.')));
            setError(msg);
          }
        } finally {
          if (stryMutAct_9fa48("85")) {
            {}
          } else {
            stryCov_9fa48("85");
            setIsLoading(stryMutAct_9fa48("86") ? true : (stryCov_9fa48("86"), false));
          }
        }
      }
    };
    const handleAnalyzeNew = () => {
      if (stryMutAct_9fa48("87")) {
        {}
      } else {
        stryCov_9fa48("87");
        setResult(null);
        navigateTo(stryMutAct_9fa48("88") ? "" : (stryCov_9fa48("88"), 'home'));
      }
    };
    return <div className="app-container">
      <nav className="navbar">
        <a href="/" className="brand-text d-flex items-center gap-2" onClick={e => {
          if (stryMutAct_9fa48("89")) {
            {}
          } else {
            stryCov_9fa48("89");
            e.preventDefault();
            navigateTo(stryMutAct_9fa48("90") ? "" : (stryCov_9fa48("90"), 'home'));
          }
        }}>
          <div style={stryMutAct_9fa48("91") ? {} : (stryCov_9fa48("91"), {
            background: stryMutAct_9fa48("92") ? "" : (stryCov_9fa48("92"), 'var(--gradient-premium)'),
            color: stryMutAct_9fa48("93") ? "" : (stryCov_9fa48("93"), 'white'),
            padding: stryMutAct_9fa48("94") ? "" : (stryCov_9fa48("94"), '6px'),
            borderRadius: stryMutAct_9fa48("95") ? "" : (stryCov_9fa48("95"), '8px'),
            display: stryMutAct_9fa48("96") ? "" : (stryCov_9fa48("96"), 'flex')
          })}>
             <TrendingUp size={20} />
          </div>
          <span>Fin<span className="text-accent">Genie</span></span>
        </a>
        
        <div className="nav-links">
          <button className={stryMutAct_9fa48("97") ? `` : (stryCov_9fa48("97"), `nav-item d-flex items-center gap-2 ${(stryMutAct_9fa48("100") ? activeTab !== 'home' : stryMutAct_9fa48("99") ? false : stryMutAct_9fa48("98") ? true : (stryCov_9fa48("98", "99", "100"), activeTab === (stryMutAct_9fa48("101") ? "" : (stryCov_9fa48("101"), 'home')))) ? stryMutAct_9fa48("102") ? "" : (stryCov_9fa48("102"), 'active') : stryMutAct_9fa48("103") ? "Stryker was here!" : (stryCov_9fa48("103"), '')}`)} onClick={stryMutAct_9fa48("104") ? () => undefined : (stryCov_9fa48("104"), () => navigateTo(stryMutAct_9fa48("105") ? "" : (stryCov_9fa48("105"), 'home')))}>
            <HomeIcon size={14} />
            Home
          </button>
          {stryMutAct_9fa48("108") ? result || <>
              <button className={`nav-item d-flex items-center gap-2 ${activeTab === 'analyzer' ? 'active' : ''}`} onClick={() => navigateTo('analyzer')}>
                <BarChart3 size={14} />
                Analyzer
              </button>
              <button className={`nav-item d-flex items-center gap-2 ${activeTab === 'trends' ? 'active' : ''}`} onClick={() => navigateTo('trends')}>
                <TrendingUp size={14} />
                Trends
              </button>
              <button className={`nav-item d-flex items-center gap-2 ${activeTab === 'risk' ? 'active' : ''}`} onClick={() => navigateTo('risk')}>
                <ShieldAlert size={14} />
                Risk
              </button>
              <button className={`nav-item d-flex items-center gap-2 ${activeTab === 'reports' ? 'active' : ''}`} onClick={() => navigateTo('reports')}>
                <FileText size={14} />
                Reports
              </button>
            </> : stryMutAct_9fa48("107") ? false : stryMutAct_9fa48("106") ? true : (stryCov_9fa48("106", "107", "108"), result && <>
              <button className={stryMutAct_9fa48("109") ? `` : (stryCov_9fa48("109"), `nav-item d-flex items-center gap-2 ${(stryMutAct_9fa48("112") ? activeTab !== 'analyzer' : stryMutAct_9fa48("111") ? false : stryMutAct_9fa48("110") ? true : (stryCov_9fa48("110", "111", "112"), activeTab === (stryMutAct_9fa48("113") ? "" : (stryCov_9fa48("113"), 'analyzer')))) ? stryMutAct_9fa48("114") ? "" : (stryCov_9fa48("114"), 'active') : stryMutAct_9fa48("115") ? "Stryker was here!" : (stryCov_9fa48("115"), '')}`)} onClick={stryMutAct_9fa48("116") ? () => undefined : (stryCov_9fa48("116"), () => navigateTo(stryMutAct_9fa48("117") ? "" : (stryCov_9fa48("117"), 'analyzer')))}>
                <BarChart3 size={14} />
                Analyzer
              </button>
              <button className={stryMutAct_9fa48("118") ? `` : (stryCov_9fa48("118"), `nav-item d-flex items-center gap-2 ${(stryMutAct_9fa48("121") ? activeTab !== 'trends' : stryMutAct_9fa48("120") ? false : stryMutAct_9fa48("119") ? true : (stryCov_9fa48("119", "120", "121"), activeTab === (stryMutAct_9fa48("122") ? "" : (stryCov_9fa48("122"), 'trends')))) ? stryMutAct_9fa48("123") ? "" : (stryCov_9fa48("123"), 'active') : stryMutAct_9fa48("124") ? "Stryker was here!" : (stryCov_9fa48("124"), '')}`)} onClick={stryMutAct_9fa48("125") ? () => undefined : (stryCov_9fa48("125"), () => navigateTo(stryMutAct_9fa48("126") ? "" : (stryCov_9fa48("126"), 'trends')))}>
                <TrendingUp size={14} />
                Trends
              </button>
              <button className={stryMutAct_9fa48("127") ? `` : (stryCov_9fa48("127"), `nav-item d-flex items-center gap-2 ${(stryMutAct_9fa48("130") ? activeTab !== 'risk' : stryMutAct_9fa48("129") ? false : stryMutAct_9fa48("128") ? true : (stryCov_9fa48("128", "129", "130"), activeTab === (stryMutAct_9fa48("131") ? "" : (stryCov_9fa48("131"), 'risk')))) ? stryMutAct_9fa48("132") ? "" : (stryCov_9fa48("132"), 'active') : stryMutAct_9fa48("133") ? "Stryker was here!" : (stryCov_9fa48("133"), '')}`)} onClick={stryMutAct_9fa48("134") ? () => undefined : (stryCov_9fa48("134"), () => navigateTo(stryMutAct_9fa48("135") ? "" : (stryCov_9fa48("135"), 'risk')))}>
                <ShieldAlert size={14} />
                Risk
              </button>
              <button className={stryMutAct_9fa48("136") ? `` : (stryCov_9fa48("136"), `nav-item d-flex items-center gap-2 ${(stryMutAct_9fa48("139") ? activeTab !== 'reports' : stryMutAct_9fa48("138") ? false : stryMutAct_9fa48("137") ? true : (stryCov_9fa48("137", "138", "139"), activeTab === (stryMutAct_9fa48("140") ? "" : (stryCov_9fa48("140"), 'reports')))) ? stryMutAct_9fa48("141") ? "" : (stryCov_9fa48("141"), 'active') : stryMutAct_9fa48("142") ? "Stryker was here!" : (stryCov_9fa48("142"), '')}`)} onClick={stryMutAct_9fa48("143") ? () => undefined : (stryCov_9fa48("143"), () => navigateTo(stryMutAct_9fa48("144") ? "" : (stryCov_9fa48("144"), 'reports')))}>
                <FileText size={14} />
                Reports
              </button>
            </>)}
        </div>

        <div className="nav-actions">
          {stryMutAct_9fa48("147") ? result || <button className="btn-primary" onClick={handleAnalyzeNew}>
              <PlusCircle size={16} />
              Analyze New
            </button> : stryMutAct_9fa48("146") ? false : stryMutAct_9fa48("145") ? true : (stryCov_9fa48("145", "146", "147"), result && <button className="btn-primary" onClick={handleAnalyzeNew}>
              <PlusCircle size={16} />
              Analyze New
            </button>)}
        </div>
      </nav>

      <main className="main-content">
        {stryMutAct_9fa48("150") ? activeTab === 'home' || <Home onFileSelect={handleFileSelect} isLoading={isLoading} error={error} /> : stryMutAct_9fa48("149") ? false : stryMutAct_9fa48("148") ? true : (stryCov_9fa48("148", "149", "150"), (stryMutAct_9fa48("152") ? activeTab !== 'home' : stryMutAct_9fa48("151") ? true : (stryCov_9fa48("151", "152"), activeTab === (stryMutAct_9fa48("153") ? "" : (stryCov_9fa48("153"), 'home')))) && <Home onFileSelect={handleFileSelect} isLoading={isLoading} error={error} />)}
        {stryMutAct_9fa48("156") ? activeTab === 'about' || <About /> : stryMutAct_9fa48("155") ? false : stryMutAct_9fa48("154") ? true : (stryCov_9fa48("154", "155", "156"), (stryMutAct_9fa48("158") ? activeTab !== 'about' : stryMutAct_9fa48("157") ? true : (stryCov_9fa48("157", "158"), activeTab === (stryMutAct_9fa48("159") ? "" : (stryCov_9fa48("159"), 'about')))) && <About />)}
        {stryMutAct_9fa48("162") ? activeTab === 'analyzer' && result || <Analyzer result={result} /> : stryMutAct_9fa48("161") ? false : stryMutAct_9fa48("160") ? true : (stryCov_9fa48("160", "161", "162"), (stryMutAct_9fa48("164") ? activeTab === 'analyzer' || result : stryMutAct_9fa48("163") ? true : (stryCov_9fa48("163", "164"), (stryMutAct_9fa48("166") ? activeTab !== 'analyzer' : stryMutAct_9fa48("165") ? true : (stryCov_9fa48("165", "166"), activeTab === (stryMutAct_9fa48("167") ? "" : (stryCov_9fa48("167"), 'analyzer')))) && result)) && <Analyzer result={result} />)}
        {stryMutAct_9fa48("170") ? activeTab === 'trends' && result || <TrendsAudit result={result} /> : stryMutAct_9fa48("169") ? false : stryMutAct_9fa48("168") ? true : (stryCov_9fa48("168", "169", "170"), (stryMutAct_9fa48("172") ? activeTab === 'trends' || result : stryMutAct_9fa48("171") ? true : (stryCov_9fa48("171", "172"), (stryMutAct_9fa48("174") ? activeTab !== 'trends' : stryMutAct_9fa48("173") ? true : (stryCov_9fa48("173", "174"), activeTab === (stryMutAct_9fa48("175") ? "" : (stryCov_9fa48("175"), 'trends')))) && result)) && <TrendsAudit result={result} />)}
        {stryMutAct_9fa48("178") ? activeTab === 'risk' && result || <RiskAssessment result={result} /> : stryMutAct_9fa48("177") ? false : stryMutAct_9fa48("176") ? true : (stryCov_9fa48("176", "177", "178"), (stryMutAct_9fa48("180") ? activeTab === 'risk' || result : stryMutAct_9fa48("179") ? true : (stryCov_9fa48("179", "180"), (stryMutAct_9fa48("182") ? activeTab !== 'risk' : stryMutAct_9fa48("181") ? true : (stryCov_9fa48("181", "182"), activeTab === (stryMutAct_9fa48("183") ? "" : (stryCov_9fa48("183"), 'risk')))) && result)) && <RiskAssessment result={result} />)}
        {stryMutAct_9fa48("186") ? activeTab === 'reports' && result || <ReportCenter analysisResult={result} /> : stryMutAct_9fa48("185") ? false : stryMutAct_9fa48("184") ? true : (stryCov_9fa48("184", "185", "186"), (stryMutAct_9fa48("188") ? activeTab === 'reports' || result : stryMutAct_9fa48("187") ? true : (stryCov_9fa48("187", "188"), (stryMutAct_9fa48("190") ? activeTab !== 'reports' : stryMutAct_9fa48("189") ? true : (stryCov_9fa48("189", "190"), activeTab === (stryMutAct_9fa48("191") ? "" : (stryCov_9fa48("191"), 'reports')))) && result)) && <ReportCenter analysisResult={result} />)}
        {stryMutAct_9fa48("194") ? activeTab === 'privacy' || <Privacy /> : stryMutAct_9fa48("193") ? false : stryMutAct_9fa48("192") ? true : (stryCov_9fa48("192", "193", "194"), (stryMutAct_9fa48("196") ? activeTab !== 'privacy' : stryMutAct_9fa48("195") ? true : (stryCov_9fa48("195", "196"), activeTab === (stryMutAct_9fa48("197") ? "" : (stryCov_9fa48("197"), 'privacy')))) && <Privacy />)}
        {stryMutAct_9fa48("200") ? activeTab === 'compliance' || <Compliance /> : stryMutAct_9fa48("199") ? false : stryMutAct_9fa48("198") ? true : (stryCov_9fa48("198", "199", "200"), (stryMutAct_9fa48("202") ? activeTab !== 'compliance' : stryMutAct_9fa48("201") ? true : (stryCov_9fa48("201", "202"), activeTab === (stryMutAct_9fa48("203") ? "" : (stryCov_9fa48("203"), 'compliance')))) && <Compliance />)}
        {stryMutAct_9fa48("206") ? activeTab === 'terms' || <Terms /> : stryMutAct_9fa48("205") ? false : stryMutAct_9fa48("204") ? true : (stryCov_9fa48("204", "205", "206"), (stryMutAct_9fa48("208") ? activeTab !== 'terms' : stryMutAct_9fa48("207") ? true : (stryCov_9fa48("207", "208"), activeTab === (stryMutAct_9fa48("209") ? "" : (stryCov_9fa48("209"), 'terms')))) && <Terms />)}
      </main>

      {stryMutAct_9fa48("212") ? result || <DocChat analysisResult={result} /> : stryMutAct_9fa48("211") ? false : stryMutAct_9fa48("210") ? true : (stryCov_9fa48("210", "211", "212"), result && <DocChat analysisResult={result} />)}

      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand-text d-flex items-center gap-2" onClick={stryMutAct_9fa48("213") ? () => undefined : (stryCov_9fa48("213"), () => navigateTo(stryMutAct_9fa48("214") ? "" : (stryCov_9fa48("214"), 'home')))}>
               <TrendingUp size={18} className="text-accent" />
               <span>FinGenie</span>
            </div>
            <p className="footer-tagline">Institutional Intelligence Engine</p>
          </div>

          <div className="footer-links-row">
            <span className="footer-link d-flex items-center gap-2" onClick={stryMutAct_9fa48("215") ? () => undefined : (stryCov_9fa48("215"), () => navigateTo(stryMutAct_9fa48("216") ? "" : (stryCov_9fa48("216"), 'about')))}>
              <Info size={14} /> About
            </span>
            <span className="footer-link d-flex items-center gap-2" onClick={stryMutAct_9fa48("217") ? () => undefined : (stryCov_9fa48("217"), () => navigateTo(stryMutAct_9fa48("218") ? "" : (stryCov_9fa48("218"), 'privacy')))}>
              <Lock size={14} /> Privacy
            </span>
            <span className="footer-link d-flex items-center gap-2" onClick={stryMutAct_9fa48("219") ? () => undefined : (stryCov_9fa48("219"), () => navigateTo(stryMutAct_9fa48("220") ? "" : (stryCov_9fa48("220"), 'compliance')))}>
              <Scale size={14} /> Compliance
            </span>
            <span className="footer-link d-flex items-center gap-2" onClick={stryMutAct_9fa48("221") ? () => undefined : (stryCov_9fa48("221"), () => navigateTo(stryMutAct_9fa48("222") ? "" : (stryCov_9fa48("222"), 'terms')))}>
              <FileCheck size={14} /> Terms
            </span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2024 FINGENIE FINANCIAL UTILITIES.</span>
          <div className="footer-legal-badge">INSTITUTIONAL ACCESS ONLY</div>
        </div>
      </footer>
    </div>;
  }
}