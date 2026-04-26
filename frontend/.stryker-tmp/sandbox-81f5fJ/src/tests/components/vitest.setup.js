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
import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Silence console.error for React prop warnings in tests
const originalError = console.error;
beforeAll(() => {
  if (stryMutAct_9fa48("2213")) {
    {}
  } else {
    stryCov_9fa48("2213");
    console.error = (...args) => {
      if (stryMutAct_9fa48("2214")) {
        {}
      } else {
        stryCov_9fa48("2214");
        if (stryMutAct_9fa48("2217") ? typeof args[0] === 'string' || args[0].includes('Warning:') : stryMutAct_9fa48("2216") ? false : stryMutAct_9fa48("2215") ? true : (stryCov_9fa48("2215", "2216", "2217"), (stryMutAct_9fa48("2219") ? typeof args[0] !== 'string' : stryMutAct_9fa48("2218") ? true : (stryCov_9fa48("2218", "2219"), typeof args[0] === (stryMutAct_9fa48("2220") ? "" : (stryCov_9fa48("2220"), 'string')))) && args[0].includes(stryMutAct_9fa48("2221") ? "" : (stryCov_9fa48("2221"), 'Warning:')))) return;
        originalError(...args);
      }
    };
  }
});
afterAll(() => {
  if (stryMutAct_9fa48("2222")) {
    {}
  } else {
    stryCov_9fa48("2222");
    console.error = originalError;
  }
});

// DOM APIs missing in jsdom
Element.prototype.scrollIntoView = vi.fn();
window.scrollTo = vi.fn();

// Stable URL mocks for download tests
global.URL.createObjectURL = vi.fn(stryMutAct_9fa48("2223") ? () => undefined : (stryCov_9fa48("2223"), () => stryMutAct_9fa48("2224") ? "" : (stryCov_9fa48("2224"), 'blob:mock-url')));
global.URL.revokeObjectURL = vi.fn();