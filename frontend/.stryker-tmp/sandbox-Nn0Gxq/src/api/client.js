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
import axios from 'axios';

// Read from environment variable, fallback to localhost
const API_BASE = (stryMutAct_9fa48("2") ? import.meta.env.VITE_API_BASE_URL && 'http://localhost:8000' : stryMutAct_9fa48("1") ? false : stryMutAct_9fa48("0") ? true : (stryCov_9fa48("0", "1", "2"), import.meta.env.VITE_API_BASE_URL || (stryMutAct_9fa48("3") ? "" : (stryCov_9fa48("3"), 'http://localhost:8000')))) + (stryMutAct_9fa48("4") ? "" : (stryCov_9fa48("4"), '/api'));

// Export for use in other components
export const getApiBase = stryMutAct_9fa48("5") ? () => undefined : (stryCov_9fa48("5"), (() => {
  const getApiBase = () => API_BASE;
  return getApiBase;
})());
const api = axios.create(stryMutAct_9fa48("6") ? {} : (stryCov_9fa48("6"), {
  baseURL: API_BASE,
  timeout: 600000 // 10 minutes for large document processing
}));
export async function uploadAndAnalyze(file) {
  if (stryMutAct_9fa48("7")) {
    {}
  } else {
    stryCov_9fa48("7");
    const formData = new FormData();
    formData.append(stryMutAct_9fa48("8") ? "" : (stryCov_9fa48("8"), 'file'), file);
    const response = await api.post(stryMutAct_9fa48("9") ? "" : (stryCov_9fa48("9"), '/upload'), formData, stryMutAct_9fa48("10") ? {} : (stryCov_9fa48("10"), {
      headers: stryMutAct_9fa48("11") ? {} : (stryCov_9fa48("11"), {
        'Content-Type': stryMutAct_9fa48("12") ? "" : (stryCov_9fa48("12"), 'multipart/form-data')
      })
    }));
    return response.data;
  }
}
export async function healthCheck() {
  if (stryMutAct_9fa48("13")) {
    {}
  } else {
    stryCov_9fa48("13");
    const response = await api.get(stryMutAct_9fa48("14") ? "" : (stryCov_9fa48("14"), '/health'));
    return response.data;
  }
}