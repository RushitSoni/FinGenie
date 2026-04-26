// @ts-nocheck
import { useState, useEffect } from 'react';
import { 
  Home as HomeIcon, BarChart3, TrendingUp, ShieldAlert, FileText, 
  PlusCircle, Info, Lock, Scale, FileCheck
} from 'lucide-react';
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
  const [activeTab, setActiveTab] = useState('home');
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // --- Hash Routing Sync & Reload Redirect ---
  useEffect(() => {
    // 1. Detect if this is a page reload/refresh
    const [navigation] = performance.getEntriesByType('navigation');
    const isReload = navigation?.type === 'reload';

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validTabs = ['home', 'about', 'analyzer', 'trends', 'risk', 'reports', 'privacy', 'compliance', 'terms'];
      
      if (validTabs.includes(hash)) {
        setActiveTab(hash);
      } else {
        // Fallback or default to home
        setActiveTab('home');
      }
    };

    // 2. If reload occurs on a deep link/fragment, redirect to home
    if (isReload && window.location.hash !== '' && window.location.hash !== '#home') {
      window.location.hash = ''; // Clear hash
      setActiveTab('home');      // Reset state
    } else {
      // Normal mount or navigation
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Sync scroll on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab]);

  const navigateTo = (tab) => {
    window.location.hash = tab === 'home' ? '' : tab;
  };

  const handleFileSelect = async (file) => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await uploadAndAnalyze(file);
      setResult(data);
      navigateTo('analyzer');
    } catch (err) {
      const msg = err.response?.data?.detail || err.message || 'An unexpected error occurred.';
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnalyzeNew = () => {
    setResult(null);
    navigateTo('home');
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <a href="/" className="brand-text d-flex items-center gap-2" onClick={(e) => { e.preventDefault(); navigateTo('home'); }}>
          <div style={{ background: 'var(--gradient-premium)', color: 'white', padding: '6px', borderRadius: '8px', display: 'flex' }}>
             <TrendingUp size={20} />
          </div>
          <span>Fin<span className="text-accent">Genie</span></span>
        </a>
        
        <div className="nav-links">
          <button 
            className={`nav-item d-flex items-center gap-2 ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => navigateTo('home')}
          >
            <HomeIcon size={14} />
            Home
          </button>
          {result && (
            <>
              <button 
                className={`nav-item d-flex items-center gap-2 ${activeTab === 'analyzer' ? 'active' : ''}`}
                onClick={() => navigateTo('analyzer')}
              >
                <BarChart3 size={14} />
                Analyzer
              </button>
              <button 
                className={`nav-item d-flex items-center gap-2 ${activeTab === 'trends' ? 'active' : ''}`}
                onClick={() => navigateTo('trends')}
              >
                <TrendingUp size={14} />
                Trends
              </button>
              <button 
                className={`nav-item d-flex items-center gap-2 ${activeTab === 'risk' ? 'active' : ''}`}
                onClick={() => navigateTo('risk')}
              >
                <ShieldAlert size={14} />
                Risk
              </button>
              <button
                className={`nav-item d-flex items-center gap-2 ${activeTab === 'reports' ? 'active' : ''}`}
                onClick={() => navigateTo('reports')}
              >
                <FileText size={14} />
                Reports
              </button>
            </>
          )}
        </div>

        <div className="nav-actions">
          {result && (
            <button className="btn-primary" onClick={handleAnalyzeNew}>
              <PlusCircle size={16} />
              Analyze New
            </button>
          )}
        </div>
      </nav>

      <main className="main-content">
        {activeTab === 'home' && (
           <Home onFileSelect={handleFileSelect} isLoading={isLoading} error={error} />
        )}
        {activeTab === 'about' && <About />}
        {activeTab === 'analyzer' && result && <Analyzer result={result} />}
        {activeTab === 'trends' && result && <TrendsAudit result={result} />}
        {activeTab === 'risk' && result && <RiskAssessment result={result} />}
        {activeTab === 'reports' && result && (
          <ReportCenter analysisResult={result} />
        )}
        {activeTab === 'privacy' && <Privacy />}
        {activeTab === 'compliance' && <Compliance />}
        {activeTab === 'terms' && <Terms />}
      </main>

      {result && <DocChat analysisResult={result} />}

      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand-text d-flex items-center gap-2" onClick={() => navigateTo('home')}>
               <TrendingUp size={18} className="text-accent" />
               <span>FinGenie</span>
            </div>
            <p className="footer-tagline">Institutional Intelligence Engine</p>
          </div>

          <div className="footer-links-row">
            <span className="footer-link d-flex items-center gap-2" onClick={() => navigateTo('about')}>
              <Info size={14} /> About
            </span>
            <span className="footer-link d-flex items-center gap-2" onClick={() => navigateTo('privacy')}>
              <Lock size={14} /> Privacy
            </span>
            <span className="footer-link d-flex items-center gap-2" onClick={() => navigateTo('compliance')}>
              <Scale size={14} /> Compliance
            </span>
            <span className="footer-link d-flex items-center gap-2" onClick={() => navigateTo('terms')}>
              <FileCheck size={14} /> Terms
            </span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2024 FINGENIE FINANCIAL UTILITIES.</span>
          <div className="footer-legal-badge">INSTITUTIONAL ACCESS ONLY</div>
        </div>
      </footer>
    </div>
  );
}