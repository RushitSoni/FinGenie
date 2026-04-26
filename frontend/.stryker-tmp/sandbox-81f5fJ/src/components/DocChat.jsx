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
import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { MessageSquare, Send, X, Bot, User, CornerDownLeft } from 'lucide-react';
import { getApiBase } from '../api/client';
export default function DocChat({
  analysisResult
}) {
  if (stryMutAct_9fa48("473")) {
    {}
  } else {
    stryCov_9fa48("473");
    const [isOpen, setIsOpen] = useState(stryMutAct_9fa48("474") ? true : (stryCov_9fa48("474"), false));
    const [messages, setMessages] = useState(stryMutAct_9fa48("475") ? [] : (stryCov_9fa48("475"), [stryMutAct_9fa48("476") ? {} : (stryCov_9fa48("476"), {
      role: stryMutAct_9fa48("477") ? "" : (stryCov_9fa48("477"), 'assistant'),
      content: stryMutAct_9fa48("478") ? `` : (stryCov_9fa48("478"), `Hi! I've analyzed your **${stryMutAct_9fa48("479") ? analysisResult.statement_type : (stryCov_9fa48("479"), analysisResult?.statement_type)}**. Ask me anything about it — KPIs, risks, what the numbers mean, or what to do next.`)
    })]));
    const [input, setInput] = useState(stryMutAct_9fa48("480") ? "Stryker was here!" : (stryCov_9fa48("480"), ''));
    const [loading, setLoading] = useState(stryMutAct_9fa48("481") ? true : (stryCov_9fa48("481"), false));
    const bottomRef = useRef(null);
    useEffect(() => {
      if (stryMutAct_9fa48("482")) {
        {}
      } else {
        stryCov_9fa48("482");
        stryMutAct_9fa48("483") ? bottomRef.current.scrollIntoView({
          behavior: 'smooth'
        }) : (stryCov_9fa48("483"), bottomRef.current?.scrollIntoView(stryMutAct_9fa48("484") ? {} : (stryCov_9fa48("484"), {
          behavior: stryMutAct_9fa48("485") ? "" : (stryCov_9fa48("485"), 'smooth')
        })));
      }
    }, stryMutAct_9fa48("486") ? [] : (stryCov_9fa48("486"), [messages]));
    async function sendMessage() {
      if (stryMutAct_9fa48("487")) {
        {}
      } else {
        stryCov_9fa48("487");
        const text = stryMutAct_9fa48("488") ? input : (stryCov_9fa48("488"), input.trim());
        if (stryMutAct_9fa48("491") ? !text && loading : stryMutAct_9fa48("490") ? false : stryMutAct_9fa48("489") ? true : (stryCov_9fa48("489", "490", "491"), (stryMutAct_9fa48("492") ? text : (stryCov_9fa48("492"), !text)) || loading)) return;
        const userMsg = stryMutAct_9fa48("493") ? {} : (stryCov_9fa48("493"), {
          role: stryMutAct_9fa48("494") ? "" : (stryCov_9fa48("494"), 'user'),
          content: text
        });
        const nextHistory = stryMutAct_9fa48("495") ? [] : (stryCov_9fa48("495"), [...messages, userMsg]);
        setMessages(nextHistory);
        setInput(stryMutAct_9fa48("496") ? "Stryker was here!" : (stryCov_9fa48("496"), ''));
        setLoading(stryMutAct_9fa48("497") ? false : (stryCov_9fa48("497"), true));
        try {
          if (stryMutAct_9fa48("498")) {
            {}
          } else {
            stryCov_9fa48("498");
            const res = await fetch(stryMutAct_9fa48("499") ? `` : (stryCov_9fa48("499"), `${getApiBase()}/chat/message`), stryMutAct_9fa48("500") ? {} : (stryCov_9fa48("500"), {
              method: stryMutAct_9fa48("501") ? "" : (stryCov_9fa48("501"), 'POST'),
              headers: stryMutAct_9fa48("502") ? {} : (stryCov_9fa48("502"), {
                'Content-Type': stryMutAct_9fa48("503") ? "" : (stryCov_9fa48("503"), 'application/json')
              }),
              body: JSON.stringify(stryMutAct_9fa48("504") ? {} : (stryCov_9fa48("504"), {
                session_id: stryMutAct_9fa48("507") ? analysisResult?.session_id && 'default' : stryMutAct_9fa48("506") ? false : stryMutAct_9fa48("505") ? true : (stryCov_9fa48("505", "506", "507"), (stryMutAct_9fa48("508") ? analysisResult.session_id : (stryCov_9fa48("508"), analysisResult?.session_id)) || (stryMutAct_9fa48("509") ? "" : (stryCov_9fa48("509"), 'default'))),
                user_message: text,
                raw_data: stryMutAct_9fa48("512") ? analysisResult?.raw_data && [] : stryMutAct_9fa48("511") ? false : stryMutAct_9fa48("510") ? true : (stryCov_9fa48("510", "511", "512"), (stryMutAct_9fa48("513") ? analysisResult.raw_data : (stryCov_9fa48("513"), analysisResult?.raw_data)) || (stryMutAct_9fa48("514") ? ["Stryker was here"] : (stryCov_9fa48("514"), []))),
                column_headers: stryMutAct_9fa48("517") ? analysisResult?.column_headers && [] : stryMutAct_9fa48("516") ? false : stryMutAct_9fa48("515") ? true : (stryCov_9fa48("515", "516", "517"), (stryMutAct_9fa48("518") ? analysisResult.column_headers : (stryCov_9fa48("518"), analysisResult?.column_headers)) || (stryMutAct_9fa48("519") ? ["Stryker was here"] : (stryCov_9fa48("519"), []))),
                statement_type: stryMutAct_9fa48("522") ? analysisResult?.statement_type && '' : stryMutAct_9fa48("521") ? false : stryMutAct_9fa48("520") ? true : (stryCov_9fa48("520", "521", "522"), (stryMutAct_9fa48("523") ? analysisResult.statement_type : (stryCov_9fa48("523"), analysisResult?.statement_type)) || (stryMutAct_9fa48("524") ? "Stryker was here!" : (stryCov_9fa48("524"), ''))),
                summary: stryMutAct_9fa48("527") ? analysisResult?.summary && '' : stryMutAct_9fa48("526") ? false : stryMutAct_9fa48("525") ? true : (stryCov_9fa48("525", "526", "527"), (stryMutAct_9fa48("528") ? analysisResult.summary : (stryCov_9fa48("528"), analysisResult?.summary)) || (stryMutAct_9fa48("529") ? "Stryker was here!" : (stryCov_9fa48("529"), ''))),
                kpis: stryMutAct_9fa48("532") ? analysisResult?.kpis && [] : stryMutAct_9fa48("531") ? false : stryMutAct_9fa48("530") ? true : (stryCov_9fa48("530", "531", "532"), (stryMutAct_9fa48("533") ? analysisResult.kpis : (stryCov_9fa48("533"), analysisResult?.kpis)) || (stryMutAct_9fa48("534") ? ["Stryker was here"] : (stryCov_9fa48("534"), []))),
                risks: stryMutAct_9fa48("537") ? analysisResult?.risks && [] : stryMutAct_9fa48("536") ? false : stryMutAct_9fa48("535") ? true : (stryCov_9fa48("535", "536", "537"), (stryMutAct_9fa48("538") ? analysisResult.risks : (stryCov_9fa48("538"), analysisResult?.risks)) || (stryMutAct_9fa48("539") ? ["Stryker was here"] : (stryCov_9fa48("539"), []))),
                conversation_history: stryMutAct_9fa48("540") ? messages.map(m => ({
                  role: m.role,
                  content: m.content
                })) : (stryCov_9fa48("540"), messages.slice(1).map(stryMutAct_9fa48("541") ? () => undefined : (stryCov_9fa48("541"), m => stryMutAct_9fa48("542") ? {} : (stryCov_9fa48("542"), {
                  role: m.role,
                  content: m.content
                }))))
              }))
            }));
            const data = await res.json();
            setMessages(stryMutAct_9fa48("543") ? () => undefined : (stryCov_9fa48("543"), prev => stryMutAct_9fa48("544") ? [] : (stryCov_9fa48("544"), [...prev, stryMutAct_9fa48("545") ? {} : (stryCov_9fa48("545"), {
              role: stryMutAct_9fa48("546") ? "" : (stryCov_9fa48("546"), 'assistant'),
              content: data.reply
            })])));
          }
        } catch (err) {
          if (stryMutAct_9fa48("547")) {
            {}
          } else {
            stryCov_9fa48("547");
            setMessages(stryMutAct_9fa48("548") ? () => undefined : (stryCov_9fa48("548"), prev => stryMutAct_9fa48("549") ? [] : (stryCov_9fa48("549"), [...prev, stryMutAct_9fa48("550") ? {} : (stryCov_9fa48("550"), {
              role: stryMutAct_9fa48("551") ? "" : (stryCov_9fa48("551"), 'assistant'),
              content: stryMutAct_9fa48("552") ? `` : (stryCov_9fa48("552"), `❌ Network error — check backend is running.`)
            })])));
          }
        } finally {
          if (stryMutAct_9fa48("553")) {
            {}
          } else {
            stryCov_9fa48("553");
            setLoading(stryMutAct_9fa48("554") ? true : (stryCov_9fa48("554"), false));
          }
        }
      }
    }
    const suggestions = stryMutAct_9fa48("555") ? [] : (stryCov_9fa48("555"), [stryMutAct_9fa48("556") ? "" : (stryCov_9fa48("556"), 'What is the overall financial health?'), stryMutAct_9fa48("557") ? "" : (stryCov_9fa48("557"), 'Which risks should I address first?'), stryMutAct_9fa48("558") ? "" : (stryCov_9fa48("558"), 'Explain the gross profit margin.'), stryMutAct_9fa48("559") ? "" : (stryCov_9fa48("559"), 'What does the revenue trend tell us?')]);
    if (stryMutAct_9fa48("562") ? false : stryMutAct_9fa48("561") ? true : stryMutAct_9fa48("560") ? analysisResult : (stryCov_9fa48("560", "561", "562"), !analysisResult)) return null;
    return createPortal(<>
      <style>{stryMutAct_9fa48("563") ? `` : (stryCov_9fa48("563"), `
        .chat-fab-wrapper {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 10000;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
        }

        .chat-fab {
          display: flex;
          align-items: center;
          gap: 12px;
          height: 56px;
          padding: 0 24px 0 10px;
          background: var(--bg-navy);
          color: white;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 28px;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          box-shadow: 0 8px 32px rgba(15, 23, 42, 0.3);
          transition: var(--transition);
          position: relative;
          overflow: hidden;
        }

        .chat-fab:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 20px 48px rgba(37, 99, 235, 0.5), 
                      0 0 0 4px rgba(37, 99, 235, 0.1);
          background: var(--gradient-premium);
          border-color: rgba(255,255,255,0.2);
        }

        .chat-fab:hover .chat-fab-icon {
          transform: scale(1.1) rotate(-5deg);
          background: var(--bg-navy);
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        .chat-fab-icon {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--gradient-premium);
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
          transition: var(--transition);
        }

        .chat-panel {
          position: fixed;
          bottom: 96px;
          right: 24px;
          width: 35%;
          height: 80%;
          background: white;
          border: 1px solid var(--border-light);
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          z-index: 9999;
          box-shadow: var(--shadow-xl);
          overflow: hidden;
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @media (max-width: 500px) {
          .chat-panel {
            width: calc(100vw - 32px);
            right: 16px;
            bottom: 88px;
            height: 70vh;
          }
        }

        .chat-header {
          padding: 16px 24px;
          background: var(--bg-navy);
          color: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }

        .chat-header::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        }

        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          background: #f8fafc;
        }

        .bubble {
          padding: 12px 16px;
          border-radius: 16px;
          font-size: 14px;
          max-width: 85%;
          line-height: 1.5;
        }

        .bubble-assistant {
          background: white;
          border: 1px solid var(--border-subtle);
          align-self: flex-start;
          border-bottom-left-radius: 4px;
        }

        .bubble-user {
          background: var(--accent-blue);
          color: white;
          align-self: flex-end;
          border-bottom-right-radius: 4px;
        }

        .chat-input-area {
          padding: 20px 24px;
          border-top: 1px solid var(--border-subtle);
          background: white;
        }

        .input-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
          background: var(--bg-blue-subtle);
          padding: 8px 12px;
          border-radius: 12px;
          border: 1px solid var(--border-strong);
        }

        .chat-input {
          flex: 1;
          border: none;
          background: none;
          outline: none;
          font-family: inherit;
          font-size: 14px;
          padding: 4px;
        }

        .chip-container {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 12px;
        }

        .chip {
          font-size: 12px;
          padding: 6px 12px;
          background: var(--bg-blue-light);
          color: var(--accent-blue);
          border-radius: 20px;
          border: 1px solid rgba(37, 99, 235, 0.1);
          cursor: pointer;
          font-weight: 600;
        }

        .chip:hover {
          background: var(--accent-blue);
          color: white;
        }

        .dot-pulse {
          display: flex;
          gap: 6px;
          padding: 8px 12px;
          background: white;
          border-radius: 12px;
          width: fit-content;
          border: 1px solid var(--border-subtle);
          margin-bottom: 8px;
        }

        .dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--accent-blue);
          animation: wave 1.2s infinite ease-in-out;
        }
        
        .dot:nth-child(2) { animation-delay: 0.2s; }
        .dot:nth-child(3) { animation-delay: 0.4s; }

        @keyframes wave {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.3; }
          30% { transform: translateY(-6px); opacity: 1; }
        }
      `)}</style>

      <div className="chat-fab-wrapper">
        <button className="chat-fab" onClick={stryMutAct_9fa48("564") ? () => undefined : (stryCov_9fa48("564"), () => setIsOpen(stryMutAct_9fa48("565") ? isOpen : (stryCov_9fa48("565"), !isOpen)))}>
          <div className="chat-fab-icon">
            {isOpen ? <X size={20} /> : <MessageSquare size={20} />}
          </div>
          {stryMutAct_9fa48("568") ? !isOpen || <span>AI ANALYST</span> : stryMutAct_9fa48("567") ? false : stryMutAct_9fa48("566") ? true : (stryCov_9fa48("566", "567", "568"), (stryMutAct_9fa48("569") ? isOpen : (stryCov_9fa48("569"), !isOpen)) && <span>AI ANALYST</span>)}
        </button>
      </div>

      {stryMutAct_9fa48("572") ? isOpen || <div className="chat-panel">
          <div className="chat-header">
            <div className="d-flex items-center gap-3">
               <Bot size={20} className="text-accent" />
               <h3 style={{
              fontSize: '16px',
              margin: 0
            }}>Intelligence Feed</h3>
            </div>
            <button style={{
            background: 'none',
            border: 'none',
            color: 'rgba(255,255,255,0.5)',
            cursor: 'pointer'
          }} onClick={() => setIsOpen(false)}>
               <X size={18} />
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, i) => <div key={i} className={`bubble bubble-${msg.role} d-flex flex-column gap-2`}>
                <div className="d-flex items-center gap-2 mb-1" style={{
              fontSize: '10px',
              textTransform: 'uppercase',
              opacity: 0.5,
              fontWeight: 800
            }}>
                   {msg.role === 'assistant' ? <Bot size={12} /> : <User size={12} />}
                   <span>{msg.role === 'assistant' ? 'FinGenie AI' : 'Internal User'}</span>
                </div>
                <div>{msg.content}</div>
              </div>)}
            {loading && <div className="dot-pulse">
                <div className="dot" />
                <div className="dot" style={{
              animationDelay: '0.2s'
            }} />
                <div className="dot" style={{
              animationDelay: '0.4s'
            }} />
              </div>}
            <div ref={bottomRef} />
          </div>

          <div className="chat-input-area">
            {messages.length === 1 && <div className="chip-container">
                {suggestions.map(s => <button key={s} className="chip" onClick={() => setInput(s)}>{s}</button>)}
              </div>}
            <div className="input-wrapper">
              <input className="chat-input" placeholder="Query institutional data..." value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && sendMessage()} />
              <button className="btn-primary" style={{
              padding: '8px',
              borderRadius: '8px'
            }} onClick={sendMessage} disabled={loading || !input.trim()}>
                <Send size={16} />
              </button>
            </div>
          </div>
        </div> : stryMutAct_9fa48("571") ? false : stryMutAct_9fa48("570") ? true : (stryCov_9fa48("570", "571", "572"), isOpen && <div className="chat-panel">
          <div className="chat-header">
            <div className="d-flex items-center gap-3">
               <Bot size={20} className="text-accent" />
               <h3 style={stryMutAct_9fa48("573") ? {} : (stryCov_9fa48("573"), {
              fontSize: stryMutAct_9fa48("574") ? "" : (stryCov_9fa48("574"), '16px'),
              margin: 0
            })}>Intelligence Feed</h3>
            </div>
            <button style={stryMutAct_9fa48("575") ? {} : (stryCov_9fa48("575"), {
            background: stryMutAct_9fa48("576") ? "" : (stryCov_9fa48("576"), 'none'),
            border: stryMutAct_9fa48("577") ? "" : (stryCov_9fa48("577"), 'none'),
            color: stryMutAct_9fa48("578") ? "" : (stryCov_9fa48("578"), 'rgba(255,255,255,0.5)'),
            cursor: stryMutAct_9fa48("579") ? "" : (stryCov_9fa48("579"), 'pointer')
          })} onClick={stryMutAct_9fa48("580") ? () => undefined : (stryCov_9fa48("580"), () => setIsOpen(stryMutAct_9fa48("581") ? true : (stryCov_9fa48("581"), false)))}>
               <X size={18} />
            </button>
          </div>

          <div className="chat-messages">
            {messages.map(stryMutAct_9fa48("582") ? () => undefined : (stryCov_9fa48("582"), (msg, i) => <div key={i} className={stryMutAct_9fa48("583") ? `` : (stryCov_9fa48("583"), `bubble bubble-${msg.role} d-flex flex-column gap-2`)}>
                <div className="d-flex items-center gap-2 mb-1" style={stryMutAct_9fa48("584") ? {} : (stryCov_9fa48("584"), {
              fontSize: stryMutAct_9fa48("585") ? "" : (stryCov_9fa48("585"), '10px'),
              textTransform: stryMutAct_9fa48("586") ? "" : (stryCov_9fa48("586"), 'uppercase'),
              opacity: 0.5,
              fontWeight: 800
            })}>
                   {(stryMutAct_9fa48("589") ? msg.role !== 'assistant' : stryMutAct_9fa48("588") ? false : stryMutAct_9fa48("587") ? true : (stryCov_9fa48("587", "588", "589"), msg.role === (stryMutAct_9fa48("590") ? "" : (stryCov_9fa48("590"), 'assistant')))) ? <Bot size={12} /> : <User size={12} />}
                   <span>{(stryMutAct_9fa48("593") ? msg.role !== 'assistant' : stryMutAct_9fa48("592") ? false : stryMutAct_9fa48("591") ? true : (stryCov_9fa48("591", "592", "593"), msg.role === (stryMutAct_9fa48("594") ? "" : (stryCov_9fa48("594"), 'assistant')))) ? stryMutAct_9fa48("595") ? "" : (stryCov_9fa48("595"), 'FinGenie AI') : stryMutAct_9fa48("596") ? "" : (stryCov_9fa48("596"), 'Internal User')}</span>
                </div>
                <div>{msg.content}</div>
              </div>))}
            {stryMutAct_9fa48("599") ? loading || <div className="dot-pulse">
                <div className="dot" />
                <div className="dot" style={{
              animationDelay: '0.2s'
            }} />
                <div className="dot" style={{
              animationDelay: '0.4s'
            }} />
              </div> : stryMutAct_9fa48("598") ? false : stryMutAct_9fa48("597") ? true : (stryCov_9fa48("597", "598", "599"), loading && <div className="dot-pulse">
                <div className="dot" />
                <div className="dot" style={stryMutAct_9fa48("600") ? {} : (stryCov_9fa48("600"), {
              animationDelay: stryMutAct_9fa48("601") ? "" : (stryCov_9fa48("601"), '0.2s')
            })} />
                <div className="dot" style={stryMutAct_9fa48("602") ? {} : (stryCov_9fa48("602"), {
              animationDelay: stryMutAct_9fa48("603") ? "" : (stryCov_9fa48("603"), '0.4s')
            })} />
              </div>)}
            <div ref={bottomRef} />
          </div>

          <div className="chat-input-area">
            {stryMutAct_9fa48("606") ? messages.length === 1 || <div className="chip-container">
                {suggestions.map(s => <button key={s} className="chip" onClick={() => setInput(s)}>{s}</button>)}
              </div> : stryMutAct_9fa48("605") ? false : stryMutAct_9fa48("604") ? true : (stryCov_9fa48("604", "605", "606"), (stryMutAct_9fa48("608") ? messages.length !== 1 : stryMutAct_9fa48("607") ? true : (stryCov_9fa48("607", "608"), messages.length === 1)) && <div className="chip-container">
                {suggestions.map(stryMutAct_9fa48("609") ? () => undefined : (stryCov_9fa48("609"), s => <button key={s} className="chip" onClick={stryMutAct_9fa48("610") ? () => undefined : (stryCov_9fa48("610"), () => setInput(s))}>{s}</button>))}
              </div>)}
            <div className="input-wrapper">
              <input className="chat-input" placeholder="Query institutional data..." value={input} onChange={stryMutAct_9fa48("611") ? () => undefined : (stryCov_9fa48("611"), e => setInput(e.target.value))} onKeyDown={stryMutAct_9fa48("612") ? () => undefined : (stryCov_9fa48("612"), e => stryMutAct_9fa48("615") ? e.key === 'Enter' || sendMessage() : stryMutAct_9fa48("614") ? false : stryMutAct_9fa48("613") ? true : (stryCov_9fa48("613", "614", "615"), (stryMutAct_9fa48("617") ? e.key !== 'Enter' : stryMutAct_9fa48("616") ? true : (stryCov_9fa48("616", "617"), e.key === (stryMutAct_9fa48("618") ? "" : (stryCov_9fa48("618"), 'Enter')))) && sendMessage()))} />
              <button className="btn-primary" style={stryMutAct_9fa48("619") ? {} : (stryCov_9fa48("619"), {
              padding: stryMutAct_9fa48("620") ? "" : (stryCov_9fa48("620"), '8px'),
              borderRadius: stryMutAct_9fa48("621") ? "" : (stryCov_9fa48("621"), '8px')
            })} onClick={sendMessage} disabled={stryMutAct_9fa48("624") ? loading && !input.trim() : stryMutAct_9fa48("623") ? false : stryMutAct_9fa48("622") ? true : (stryCov_9fa48("622", "623", "624"), loading || (stryMutAct_9fa48("625") ? input.trim() : (stryCov_9fa48("625"), !(stryMutAct_9fa48("626") ? input : (stryCov_9fa48("626"), input.trim())))))}>
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>)}
    </>, document.body);
  }
}