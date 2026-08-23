// Desktop Wallet Libre — dashboard layout: hero + chart (left, wide), actions + benefits (right, narrow).

function WalletLibreDesktopContent({ dark = false }) {
  const card = dark ? '#142540' : '#fff';
  const fg = dark ? '#fff' : C.mediterraneo;
  const sub = dark ? 'rgba(255,255,255,0.62)' : C.ink400;
  const subtle = dark ? 'rgba(255,255,255,0.42)' : C.ink300;
  const border = dark ? 'rgba(255,255,255,0.08)' : C.ink100;
  const saved = 1842.50;
  const yieldEarned = 84.30;

  return (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 24 }}>
        {/* Left column */}
        <div>
          <div style={{
            borderRadius: 28, padding: 32, color: '#fff', position: 'relative', overflow: 'hidden',
            minHeight: 360, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            backgroundImage: `linear-gradient(155deg, rgba(0,37,87,0.55) 0%, rgba(1,121,226,0.35) 55%, rgba(0,20,45,0.75) 100%), url(${RES('https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1400&q=80')})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            boxShadow: '0 20px 48px rgba(0,37,87,0.32)', marginBottom: 24,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', color: C.waikiki, textTransform: 'uppercase' }}>TU SUEÑO</div>
                <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: -0.015, marginTop: 4 }}>Luna de miel en Maldivas</div>
                <div style={{
                  marginTop: 10, display: 'inline-flex', alignItems: 'center', gap: 7,
                  fontSize: 12, fontWeight: 700, color: '#fff',
                  background: 'rgba(255,255,255,0.18)', padding: '7px 13px', borderRadius: 999, backdropFilter: 'blur(6px)',
                }}>Meta $4,800 · 15 mar 2027</div>
              </div>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                <span style={{ background: 'rgba(255,255,255,0.18)', padding: '7px 12px', borderRadius: 999, backdropFilter: 'blur(6px)' }}>
                  <span style={{ color: C.waikiki }}>11%</span> anual
                </span>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', opacity: 0.85, textTransform: 'uppercase' }}>AHORRADO</div>
                <div style={{ fontSize: 56, fontWeight: 900, letterSpacing: -0.025, marginTop: 8, lineHeight: 1 }}>
                  ${Math.floor(saved).toLocaleString()}<span style={{ fontSize: 28, fontWeight: 700, opacity: 0.7 }}>.{(saved%1).toFixed(2).slice(2)}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 10, fontSize: 14, fontWeight: 600 }}>
                  <Ic name="trending-up" size={15} color={C.waikiki}/>
                  <span style={{ color: C.waikiki }}>+${yieldEarned.toFixed(2)} ganado por rendimiento</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <button style={{ padding: '13px 22px', borderRadius: 12, border: 0, background: '#fff', color: C.mediterraneo, fontWeight: 700, fontSize: 14, fontFamily: FONT, cursor: 'pointer' }}>+ Aportar</button>
                <button style={{ padding: '13px 22px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.12)', color: '#fff', fontWeight: 700, fontSize: 14, fontFamily: FONT, cursor: 'pointer', backdropFilter: 'blur(6px)' }}>- Retirar</button>
              </div>
            </div>
          </div>

          <div style={{ background: card, border: `1px solid ${border}`, borderRadius: 22, padding: 24, color: fg, marginBottom: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: sub, textTransform: 'uppercase' }}>CRECIMIENTO · 6 MESES</div>
                <div style={{ fontSize: 20, fontWeight: 700, marginTop: 4 }}>+$284<span style={{ color: '#12B886' }}> ▲</span></div>
              </div>
              <div style={{ display: 'flex', gap: 6 }}>
                {['1M','6M','1Y'].map((t, i) => (
                  <div key={t} style={{ padding: '6px 14px', borderRadius: 999, fontSize: 12, fontWeight: 700, background: i === 1 ? (dark ? C.maldivas : C.mediterraneo) : 'transparent', color: i === 1 ? '#fff' : sub }}>{t}</div>
                ))}
              </div>
            </div>
            <svg viewBox="0 0 800 160" width="100%" height="150" preserveAspectRatio="none">
              <defs>
                <linearGradient id="spGD" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#0179E2" stopOpacity="0.35"/>
                  <stop offset="100%" stopColor="#0179E2" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path d="M0,136 L106,124 L200,116 L293,104 L386,92 L480,76 L573,68 L666,48 L800,24 L800,160 L0,160 Z" fill="url(#spGD)"/>
              <path d="M0,136 L106,124 L200,116 L293,104 L386,92 L480,76 L573,68 L666,48 L800,24" stroke="#0179E2" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <circle cx="800" cy="24" r="6" fill="#3DFFDF" stroke="#fff" strokeWidth="3"/>
            </svg>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: subtle, fontWeight: 600, marginTop: 6 }}>
              <span>NOV</span><span>DIC</span><span>ENE</span><span>FEB</span><span>MAR</span><span>ABR</span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginBottom: 16 }}>
            {[
              { i: 'infinity', t: 'Sin monto mínimo', s: 'Aporta lo que quieras, cuando quieras' },
              { i: 'percent', t: 'Sin comisiones', s: 'Ni por aportar ni por retirar' },
            ].map(f => (
              <div key={f.i} style={{ background: card, border: `1px solid ${border}`, borderRadius: 18, padding: 18, color: fg }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: dark ? 'rgba(1,121,226,0.18)' : 'rgba(1,121,226,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                  <Ic name={f.i} size={17} color={dark ? C.waikiki : C.maldivas}/>
                </div>
                <div style={{ fontSize: 14, fontWeight: 700 }}>{f.t}</div>
                <div style={{ fontSize: 12, color: sub, marginTop: 3, lineHeight: 1.4 }}>{f.s}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 700, color: dark ? C.waikiki : C.caribe, cursor: 'pointer' }}>
            Ver condiciones de inversión <Ic name="arrow-right" size={14} color={dark ? C.waikiki : C.caribe}/>
          </div>
        </div>

        {/* Right column — actions */}
        <div>
          <div style={{ background: card, border: `1px solid ${border}`, borderRadius: 22, padding: 22, color: fg, marginBottom: 16 }}>
            <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 14 }}>Acciones rápidas</div>
            <button style={{ width: '100%', padding: 14, borderRadius: 12, border: 0, background: dark ? C.maldivas : C.mediterraneo, color: '#fff', fontWeight: 700, fontSize: 14, fontFamily: FONT, cursor: 'pointer', marginBottom: 10 }}>Aportar</button>
            <button style={{ width: '100%', padding: 14, borderRadius: 12, border: `1px solid ${border}`, background: 'transparent', color: fg, fontWeight: 600, fontSize: 14, fontFamily: FONT, cursor: 'pointer' }}>Retirar</button>
          </div>

          <div style={{
            background: card, border: `1px dashed ${dark ? 'rgba(61,255,223,0.4)' : 'rgba(1,121,226,0.35)'}`,
            borderRadius: 18, padding: 16, display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, cursor: 'pointer',
          }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: GRADIENT_IA, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Ic name="plane-takeoff" size={21} color="#fff"/>
            </div>
            <div style={{ flex: 1, color: fg }}>
              <div style={{ fontSize: 14, fontWeight: 700 }}>¿Listo para tu aventura?</div>
              <div style={{ fontSize: 12, color: sub, marginTop: 2, lineHeight: 1.4 }}>Convierte tu ahorro en un viaje con destino y fechas.</div>
            </div>
            <Ic name="arrow-right" size={17} color={dark ? C.waikiki : C.caribe}/>
          </div>

          <div style={{ background: card, border: `1px solid ${border}`, borderRadius: 18, padding: '4px 18px', color: fg }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: sub, textTransform: 'uppercase', padding: '14px 0 6px' }}>ACTIVIDAD RECIENTE</div>
            {[
              { t: 'Aporte automático', d: 'Lun 29 jun', a: '+$100.00' },
              { t: 'Rendimiento semanal', d: 'Dom 28 jun', a: '+$3.20' },
              { t: 'Aporte manual', d: 'Vie 26 jun', a: '+$50.00' },
            ].map((r, i, arr) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: i < arr.length - 1 ? `1px solid ${border}` : 'none' }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700 }}>{r.t}</div>
                  <div style={{ fontSize: 11, color: sub, marginTop: 1 }}>{r.d}</div>
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#0A8F68' }}>{r.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}

function WalletLibreDesktopMain({ dark = false }) {
  return (
    <DesktopShell dark={dark} active="wallet" title="Wallet Libre" subtitle="Ahorro flexible · sin destino fijo · 11% anual">
      <WalletLibreDesktopContent dark={dark}/>
    </DesktopShell>
  );
}

// Contribute — frosted CLABE panel over a blurred live backdrop of the wallet dashboard.
function WalletLibreDesktopContribute({ dark = false }) {
  const fg = dark ? '#fff' : C.mediterraneo;
  const sub = dark ? 'rgba(255,255,255,0.62)' : C.ink400;
  const border = dark ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.5)';
  const [copied, setCopied] = React.useState(false);
  const clabe = '012180001258011091';

  return (
    <DesktopShell dark={dark} active="wallet" title="Wallet Libre" subtitle="Aportar fondos">
      <div style={{ position: 'relative', minHeight: 620, margin: -8 }}>
        <div style={{ position: 'absolute', inset: 0, filter: 'blur(18px)', transform: 'scale(1.06)', pointerEvents: 'none' }}>
          <WalletLibreDesktopContent dark={dark}/>
        </div>
        <div style={{ position: 'absolute', inset: 0, background: dark ? 'rgba(10,20,38,0.55)' : 'rgba(245,248,252,0.45)' }}/>

        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 440,
          background: dark ? 'rgba(20,37,64,0.72)' : 'rgba(255,255,255,0.72)',
          backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
          border: `1px solid ${border}`, borderRadius: 26, padding: 32, color: fg,
          boxShadow: '0 30px 70px rgba(0,37,87,0.3)',
        }}>
          <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.01, marginBottom: 8 }}>Aporta a tu viaje</div>
          <div style={{ fontSize: 14, color: sub, fontWeight: 500, lineHeight: 1.5, marginBottom: 24 }}>Transfiere el monto que quieras a tu Wallet.</div>

          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: sub, textTransform: 'uppercase', marginBottom: 8 }}>CLABE INTERBANCARIA</div>
          <div style={{
            background: dark ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.6)', border: `1px solid ${border}`,
            borderRadius: 16, padding: '18px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14,
          }}>
            <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: 1 }}>{clabe}</div>
          </div>

          <button onClick={() => { navigator.clipboard && navigator.clipboard.writeText(clabe); setCopied(true); setTimeout(() => setCopied(false), 1600); }} style={{
            width: '100%', padding: 15, borderRadius: 14, border: 0, background: GRADIENT_IA, color: '#fff',
            fontWeight: 700, fontSize: 14, fontFamily: FONT, cursor: 'pointer', boxShadow: '0 10px 24px rgba(1,121,226,0.36)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          }}>
            <Ic name={copied ? 'check' : 'copy'} size={16} color="#fff"/> {copied ? 'CLABE copiada' : 'Copiar CLABE'}
          </button>

          <div style={{ marginTop: 20, textAlign: 'center', fontSize: 12, color: sub, fontStyle: 'italic', fontWeight: 500 }}>
            Cada depósito te acerca a tu destino.
          </div>
        </div>
      </div>
    </DesktopShell>
  );
}

Object.assign(window, { WalletLibreDesktopMain, WalletLibreDesktopContribute });
