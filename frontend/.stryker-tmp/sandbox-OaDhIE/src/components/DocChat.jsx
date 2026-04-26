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
  if (stryMutAct_9fa48("250")) {
    {}
  } else {
    stryCov_9fa48("250");
    const [isOpen, setIsOpen] = useState(stryMutAct_9fa48("251") ? true : (stryCov_9fa48("251"), false));
    const [messages, setMessages] = useState(stryMutAct_9fa48("252") ? [] : (stryCov_9fa48("252"), [stryMutAct_9fa48("253") ? {} : (stryCov_9fa48("253"), {
      role: stryMutAct_9fa48("254") ? "" : (stryCov_9fa48("254"), 'assistant'),
      content: stryMutAct_9fa48("255") ? `` : (stryCov_9fa48("255"), `Hi! I've analyzed your **${stryMutAct_9fa48("256") ? analysisResult.statement_type : (stryCov_9fa48("256"), analysisResult?.statement_type)}**. Ask me anything about it — KPIs, risks, what the numbers mean, or what to do next.`)
    })]));
    const [input, setInput] = useState(stryMutAct_9fa48("257") ? "Stryker was here!" : (stryCov_9fa48("257"), ''));
    const [loading, setLoading] = useState(stryMutAct_9fa48("258") ? true : (stryCov_9fa48("258"), false));
    const bottomRef = useRef(null);
    useEffect(() => {
      if (stryMutAct_9fa48("259")) {
        {}
      } else {
        stryCov_9fa48("259");
        stryMutAct_9fa48("260") ? bottomRef.current.scrollIntoView({
          behavior: 'smooth'
        }) : (stryCov_9fa48("260"), bottomRef.current?.scrollIntoView(stryMutAct_9fa48("261") ? {} : (stryCov_9fa48("261"), {
          behavior: stryMutAct_9fa48("262") ? "" : (stryCov_9fa48("262"), 'smooth')
        })));
      }
    }, stryMutAct_9fa48("263") ? [] : (stryCov_9fa48("263"), [messages]));
    async function sendMessage() {
      if (stryMutAct_9fa48("264")) {
        {}
      } else {
        stryCov_9fa48("264");
        const text = stryMutAct_9fa48("265") ? input : (stryCov_9fa48("265"), input.trim());
        if (stryMutAct_9fa48("268") ? !text && loading : stryMutAct_9fa48("267") ? false : stryMutAct_9fa48("266") ? true : (stryCov_9fa48("266", "267", "268"), (stryMutAct_9fa48("269") ? text : (stryCov_9fa48("269"), !text)) || loading)) return;
        const userMsg = stryMutAct_9fa48("270") ? {} : (stryCov_9fa48("270"), {
          role: stryMutAct_9fa48("271") ? "" : (stryCov_9fa48("271"), 'user'),
          content: text
        });
        const nextHistory = stryMutAct_9fa48("272") ? [] : (stryCov_9fa48("272"), [...messages, userMsg]);
        setMessages(nextHistory);
        setInput(stryMutAct_9fa48("273") ? "Stryker was here!" : (stryCov_9fa48("273"), ''));
        setLoading(stryMutAct_9fa48("274") ? false : (stryCov_9fa48("274"), true));
        try {
          if (stryMutAct_9fa48("275")) {
            {}
          } else {
            stryCov_9fa48("275");
            const res = await fetch(stryMutAct_9fa48("276") ? `` : (stryCov_9fa48("276"), `${getApiBase()}/chat/message`), stryMutAct_9fa48("277") ? {} : (stryCov_9fa48("277"), {
              method: stryMutAct_9fa48("278") ? "" : (stryCov_9fa48("278"), 'POST'),
              headers: stryMutAct_9fa48("279") ? {} : (stryCov_9fa48("279"), {
                'Content-Type': stryMutAct_9fa48("280") ? "" : (stryCov_9fa48("280"), 'application/json')
              }),
              body: JSON.stringify(stryMutAct_9fa48("281") ? {} : (stryCov_9fa48("281"), {
                session_id: stryMutAct_9fa48("284") ? analysisResult?.session_id && 'default' : stryMutAct_9fa48("283") ? false : stryMutAct_9fa48("282") ? true : (stryCov_9fa48("282", "283", "284"), (stryMutAct_9fa48("285") ? analysisResult.session_id : (stryCov_9fa48("285"), analysisResult?.session_id)) || (stryMutAct_9fa48("286") ? "" : (stryCov_9fa48("286"), 'default'))),
                user_message: text,
                raw_data: stryMutAct_9fa48("289") ? analysisResult?.raw_data && [] : stryMutAct_9fa48("288") ? false : stryMutAct_9fa48("287") ? true : (stryCov_9fa48("287", "288", "289"), (stryMutAct_9fa48("290") ? analysisResult.raw_data : (stryCov_9fa48("290"), analysisResult?.raw_data)) || (stryMutAct_9fa48("291") ? ["Stryker was here"] : (stryCov_9fa48("291"), []))),
                column_headers: stryMutAct_9fa48("294") ? analysisResult?.column_headers && [] : stryMutAct_9fa48("293") ? false : stryMutAct_9fa48("292") ? true : (stryCov_9fa48("292", "293", "294"), (stryMutAct_9fa48("295") ? analysisResult.column_headers : (stryCov_9fa48("295"), analysisResult?.column_headers)) || (stryMutAct_9fa48("296") ? ["Stryker was here"] : (stryCov_9fa48("296"), []))),
                statement_type: stryMutAct_9fa48("299") ? analysisResult?.statement_type && '' : stryMutAct_9fa48("298") ? false : stryMutAct_9fa48("297") ? true : (stryCov_9fa48("297", "298", "299"), (stryMutAct_9fa48("300") ? analysisResult.statement_type : (stryCov_9fa48("300"), analysisResult?.statement_type)) || (stryMutAct_9fa48("301") ? "Stryker was here!" : (stryCov_9fa48("301"), ''))),
                summary: stryMutAct_9fa48("304") ? analysisResult?.summary && '' : stryMutAct_9fa48("303") ? false : stryMutAct_9fa48("302") ? true : (stryCov_9fa48("302", "303", "304"), (stryMutAct_9fa48("305") ? analysisResult.summary : (stryCov_9fa48("305"), analysisResult?.summary)) || (stryMutAct_9fa48("306") ? "Stryker was here!" : (stryCov_9fa48("306"), ''))),
                kpis: stryMutAct_9fa48("309") ? analysisResult?.kpis && [] : stryMutAct_9fa48("308") ? false : stryMutAct_9fa48("307") ? true : (stryCov_9fa48("307", "308", "309"), (stryMutAct_9fa48("310") ? analysisResult.kpis : (stryCov_9fa48("310"), analysisResult?.kpis)) || (stryMutAct_9fa48("311") ? ["Stryker was here"] : (stryCov_9fa48("311"), []))),
                risks: stryMutAct_9fa48("314") ? analysisResult?.risks && [] : stryMutAct_9fa48("313") ? false : stryMutAct_9fa48("312") ? true : (stryCov_9fa48("312", "313", "314"), (stryMutAct_9fa48("315") ? analysisResult.risks : (stryCov_9fa48("315"), analysisResult?.risks)) || (stryMutAct_9fa48("316") ? ["Stryker was here"] : (stryCov_9fa48("316"), []))),
                conversation_history: stryMutAct_9fa48("317") ? messages.map(m => ({
                  role: m.role,
                  content: m.content
                })) : (stryCov_9fa48("317"), messages.slice(1).map(stryMutAct_9fa48("318") ? () => undefined : (stryCov_9fa48("318"), m => stryMutAct_9fa48("319") ? {} : (stryCov_9fa48("319"), {
                  role: m.role,
                  content: m.content
                }))))
              }))
            }));
            const data = await res.json();
            setMessages(stryMutAct_9fa48("320") ? () => undefined : (stryCov_9fa48("320"), prev => stryMutAct_9fa48("321") ? [] : (stryCov_9fa48("321"), [...prev, stryMutAct_9fa48("322") ? {} : (stryCov_9fa48("322"), {
              role: stryMutAct_9fa48("323") ? "" : (stryCov_9fa48("323"), 'assistant'),
              content: data.reply
            })])));
          }
        } catch (err) {
          if (stryMutAct_9fa48("324")) {
            {}
          } else {
            stryCov_9fa48("324");
            setMessages(stryMutAct_9fa48("325") ? () => undefined : (stryCov_9fa48("325"), prev => stryMutAct_9fa48("326") ? [] : (stryCov_9fa48("326"), [...prev, stryMutAct_9fa48("327") ? {} : (stryCov_9fa48("327"), {
              role: stryMutAct_9fa48("328") ? "" : (stryCov_9fa48("328"), 'assistant'),
              content: stryMutAct_9fa48("329") ? `` : (stryCov_9fa48("329"), `❌ Network error — check backend is running.`)
            })])));
          }
        } finally {
          if (stryMutAct_9fa48("330")) {
            {}
          } else {
            stryCov_9fa48("330");
            setLoading(stryMutAct_9fa48("331") ? true : (stryCov_9fa48("331"), false));
          }
        }
      }
    }
    const suggestions = stryMutAct_9fa48("332") ? [] : (stryCov_9fa48("332"), [stryMutAct_9fa48("333") ? "" : (stryCov_9fa48("333"), 'What is the overall financial health?'), stryMutAct_9fa48("334") ? "" : (stryCov_9fa48("334"), 'Which risks should I address first?'), stryMutAct_9fa48("335") ? "" : (stryCov_9fa48("335"), 'Explain the gross profit margin.'), stryMutAct_9fa48("336") ? "" : (stryCov_9fa48("336"), 'What does the revenue trend tell us?')]);
    if (stryMutAct_9fa48("339") ? false : stryMutAct_9fa48("338") ? true : stryMutAct_9fa48("337") ? analysisResult : (stryCov_9fa48("337", "338", "339"), !analysisResult)) return null;
    return createPortal(<>
      <style>{stryMutAct_9fa48("340") ? `` : (stryCov_9fa48("340"), `
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
        <button className="chat-fab" onClick={stryMutAct_9fa48("341") ? () => undefined : (stryCov_9fa48("341"), () => setIsOpen(stryMutAct_9fa48("342") ? isOpen : (stryCov_9fa48("342"), !isOpen)))}>
          <div className="chat-fab-icon">
            {isOpen ? <X size={20} /> : <MessageSquare size={20} />}
          </div>
          {stryMutAct_9fa48("345") ? !isOpen || <span>AI ANALYST</span> : stryMutAct_9fa48("344") ? false : stryMutAct_9fa48("343") ? true : (stryCov_9fa48("343", "344", "345"), (stryMutAct_9fa48("346") ? isOpen : (stryCov_9fa48("346"), !isOpen)) && <span>AI ANALYST</span>)}
        </button>
      </div>

      {stryMutAct_9fa48("349") ? isOpen || <div className="chat-panel">
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
        </div> : stryMutAct_9fa48("348") ? false : stryMutAct_9fa48("347") ? true : (stryCov_9fa48("347", "348", "349"), isOpen && <div className="chat-panel">
          <div className="chat-header">
            <div className="d-flex items-center gap-3">
               <Bot size={20} className="text-accent" />
               <h3 style={stryMutAct_9fa48("350") ? {} : (stryCov_9fa48("350"), {
              fontSize: stryMutAct_9fa48("351") ? "" : (stryCov_9fa48("351"), '16px'),
              margin: 0
            })}>Intelligence Feed</h3>
            </div>
            <button style={stryMutAct_9fa48("352") ? {} : (stryCov_9fa48("352"), {
            background: stryMutAct_9fa48("353") ? "" : (stryCov_9fa48("353"), 'none'),
            border: stryMutAct_9fa48("354") ? "" : (stryCov_9fa48("354"), 'none'),
            color: stryMutAct_9fa48("355") ? "" : (stryCov_9fa48("355"), 'rgba(255,255,255,0.5)'),
            cursor: stryMutAct_9fa48("356") ? "" : (stryCov_9fa48("356"), 'pointer')
          })} onClick={stryMutAct_9fa48("357") ? () => undefined : (stryCov_9fa48("357"), () => setIsOpen(stryMutAct_9fa48("358") ? true : (stryCov_9fa48("358"), false)))}>
               <X size={18} />
            </button>
          </div>

          <div className="chat-messages">
            {messages.map(stryMutAct_9fa48("359") ? () => undefined : (stryCov_9fa48("359"), (msg, i) => <div key={i} className={stryMutAct_9fa48("360") ? `` : (stryCov_9fa48("360"), `bubble bubble-${msg.role} d-flex flex-column gap-2`)}>
                <div className="d-flex items-center gap-2 mb-1" style={stryMutAct_9fa48("361") ? {} : (stryCov_9fa48("361"), {
              fontSize: stryMutAct_9fa48("362") ? "" : (stryCov_9fa48("362"), '10px'),
              textTransform: stryMutAct_9fa48("363") ? "" : (stryCov_9fa48("363"), 'uppercase'),
              opacity: 0.5,
              fontWeight: 800
            })}>
                   {(stryMutAct_9fa48("366") ? msg.role !== 'assistant' : stryMutAct_9fa48("365") ? false : stryMutAct_9fa48("364") ? true : (stryCov_9fa48("364", "365", "366"), msg.role === (stryMutAct_9fa48("367") ? "" : (stryCov_9fa48("367"), 'assistant')))) ? <Bot size={12} /> : <User size={12} />}
                   <span>{(stryMutAct_9fa48("370") ? msg.role !== 'assistant' : stryMutAct_9fa48("369") ? false : stryMutAct_9fa48("368") ? true : (stryCov_9fa48("368", "369", "370"), msg.role === (stryMutAct_9fa48("371") ? "" : (stryCov_9fa48("371"), 'assistant')))) ? stryMutAct_9fa48("372") ? "" : (stryCov_9fa48("372"), 'FinGenie AI') : stryMutAct_9fa48("373") ? "" : (stryCov_9fa48("373"), 'Internal User')}</span>
                </div>
                <div>{msg.content}</div>
              </div>))}
            {stryMutAct_9fa48("376") ? loading || <div className="dot-pulse">
                <div className="dot" />
                <div className="dot" style={{
              animationDelay: '0.2s'
            }} />
                <div className="dot" style={{
              animationDelay: '0.4s'
            }} />
              </div> : stryMutAct_9fa48("375") ? false : stryMutAct_9fa48("374") ? true : (stryCov_9fa48("374", "375", "376"), loading && <div className="dot-pulse">
                <div className="dot" />
                <div className="dot" style={stryMutAct_9fa48("377") ? {} : (stryCov_9fa48("377"), {
              animationDelay: stryMutAct_9fa48("378") ? "" : (stryCov_9fa48("378"), '0.2s')
            })} />
                <div className="dot" style={stryMutAct_9fa48("379") ? {} : (stryCov_9fa48("379"), {
              animationDelay: stryMutAct_9fa48("380") ? "" : (stryCov_9fa48("380"), '0.4s')
            })} />
              </div>)}
            <div ref={bottomRef} />
          </div>

          <div className="chat-input-area">
            {stryMutAct_9fa48("383") ? messages.length === 1 || <div className="chip-container">
                {suggestions.map(s => <button key={s} className="chip" onClick={() => setInput(s)}>{s}</button>)}
              </div> : stryMutAct_9fa48("382") ? false : stryMutAct_9fa48("381") ? true : (stryCov_9fa48("381", "382", "383"), (stryMutAct_9fa48("385") ? messages.length !== 1 : stryMutAct_9fa48("384") ? true : (stryCov_9fa48("384", "385"), messages.length === 1)) && <div className="chip-container">
                {suggestions.map(stryMutAct_9fa48("386") ? () => undefined : (stryCov_9fa48("386"), s => <button key={s} className="chip" onClick={stryMutAct_9fa48("387") ? () => undefined : (stryCov_9fa48("387"), () => setInput(s))}>{s}</button>))}
              </div>)}
            <div className="input-wrapper">
              <input className="chat-input" placeholder="Query institutional data..." value={input} onChange={stryMutAct_9fa48("388") ? () => undefined : (stryCov_9fa48("388"), e => setInput(e.target.value))} onKeyDown={stryMutAct_9fa48("389") ? () => undefined : (stryCov_9fa48("389"), e => stryMutAct_9fa48("392") ? e.key === 'Enter' || sendMessage() : stryMutAct_9fa48("391") ? false : stryMutAct_9fa48("390") ? true : (stryCov_9fa48("390", "391", "392"), (stryMutAct_9fa48("394") ? e.key !== 'Enter' : stryMutAct_9fa48("393") ? true : (stryCov_9fa48("393", "394"), e.key === (stryMutAct_9fa48("395") ? "" : (stryCov_9fa48("395"), 'Enter')))) && sendMessage()))} />
              <button className="btn-primary" style={stryMutAct_9fa48("396") ? {} : (stryCov_9fa48("396"), {
              padding: stryMutAct_9fa48("397") ? "" : (stryCov_9fa48("397"), '8px'),
              borderRadius: stryMutAct_9fa48("398") ? "" : (stryCov_9fa48("398"), '8px')
            })} onClick={sendMessage} disabled={stryMutAct_9fa48("401") ? loading && !input.trim() : stryMutAct_9fa48("400") ? false : stryMutAct_9fa48("399") ? true : (stryCov_9fa48("399", "400", "401"), loading || (stryMutAct_9fa48("402") ? input.trim() : (stryCov_9fa48("402"), !(stryMutAct_9fa48("403") ? input : (stryCov_9fa48("403"), input.trim())))))}>
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>)}
    </>, document.body);
  }
}